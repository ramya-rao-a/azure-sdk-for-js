// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

import * as log from "./log";
import { EventProcessorOptions, CloseReason, EventHandler, PartitionCloseHandler, PartitionInitializeHandler, PartitionErrorHandler } from "./eventProcessor";
import { PartitionContext } from "./partitionContext";
import { EventHubClient } from "./eventHubClient";
import { EventPosition } from "./eventPosition";
import { EventHubConsumer } from "./receiver";
import { AbortController } from "@azure/abort-controller";
import { MessagingError } from "@azure/core-amqp";
import { CheckpointManager } from './checkpointManager';

export interface OptionalPartitionHandlers {
  closeHandler?: PartitionCloseHandler;
  initHandler?: PartitionInitializeHandler;
  errorHandler?: PartitionErrorHandler;
}

/**
 * @ignore
 */
export class PartitionPump {
  private _partitionContext: PartitionContext;
  private _checkpointManager: CheckpointManager;
  private _eventHubClient: EventHubClient;
  private _eventHandler: EventHandler;
  private _closeHandler?: PartitionCloseHandler;
  private _initHandler?: PartitionInitializeHandler;
  private _errorHandler?: PartitionErrorHandler;
  private _processorOptions: EventProcessorOptions;
  private _receiver: EventHubConsumer | undefined;
  private _isReceiving: boolean = false;
  private _abortController: AbortController;

  constructor(
    eventHubClient: EventHubClient,
    partitionContext: PartitionContext,
    checkpointManager: CheckpointManager,
    eventHandler: EventHandler,
    partitionHandlers: OptionalPartitionHandlers = {},
    options?: EventProcessorOptions
  ) {
    if (!options) options = {};
    this._eventHubClient = eventHubClient;
    this._partitionContext = partitionContext;
    this._checkpointManager = checkpointManager;
    this._eventHandler = eventHandler;
    this._processorOptions = options;
    this._abortController = new AbortController();
    this._closeHandler = partitionHandlers.closeHandler;
    this._initHandler = partitionHandlers.initHandler;
    this._errorHandler = partitionHandlers.errorHandler;
  }

  public get isReceiving(): boolean {
    return this._isReceiving;
  }

  async start(): Promise<void> {
    this._isReceiving = true;
    if (typeof this._initHandler === "function") {
      try {
        await this._initHandler(this._partitionContext);
      } catch {
        // swallow the error from the user-defined code
      }
    }
    this._receiveEvents(this._partitionContext.partitionId);
    log.partitionPump("Successfully started the receiver.");
  }

  private async _receiveEvents(partitionId: string): Promise<void> {
    this._receiver = this._eventHubClient.createConsumer(
      this._partitionContext.consumerGroupName,
      partitionId,
      this._processorOptions.initialEventPosition || EventPosition.earliest()
    );

    while (this._isReceiving) {
      try {
        const receivedEvents = await this._receiver.receiveBatch(
          this._processorOptions.maxBatchSize || 1,
          this._processorOptions.maxWaitTimeInSeconds,
          this._abortController.signal
        );
        // avoid calling user's processEvents handler if the pump was stopped while receiving events
        if (!this._isReceiving) {
          return;
        }
        await this._eventHandler(receivedEvents, this._partitionContext, this._checkpointManager);
      } catch (err) {
        // check if this pump is still receiving
        // it may not be if the EventProcessor was stopped during processEvents
        if (!this._isReceiving) {
          // no longer receiving, so close was called from somewhere else
          return;
        }

        // forward error to user's processError and swallow errors they may throw
        if (typeof this._errorHandler === "function") {
          try {
            await this._errorHandler(err, this._partitionContext, this._checkpointManager);
          } catch (err) {
            log.error("An error was thrown by user's processError method: ", err);
          }
        }
        

        // close the partition processor if a non-retryable error was encountered
        if (typeof err !== "object" || !(err as MessagingError).retryable) {
          try {
            // this will close the pump and will break us out of the while loop
            return await this.stop(CloseReason.EventHubException);
          } catch (err) {
            log.error(
              `An error occurred while closing the receiver with reason ${CloseReason.EventHubException}: `,
              err
            );
          }
        }
      }
    }
  }

  async stop(reason: CloseReason): Promise<void> {
    this._isReceiving = false;
    try {
      if (this._receiver) {
        await this._receiver.close();
      }
      this._abortController.abort();
      if (typeof this._closeHandler === "function") {
        await this._closeHandler(reason, this._partitionContext, this._checkpointManager);
      }
    } catch (err) {
      log.error("An error occurred while closing the receiver.", err);
      throw err;
    }
  }
}
