// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

import * as Long from "long";
import * as log from "./log";
import { StreamingReceiver, MessageHandlerOptions } from "./core/streamingReceiver";
import { BatchingReceiver } from "./core/batchingReceiver";
import { ReceiveOptions, OnError, OnMessage, ReceiverType } from "./core/messageReceiver";
import { ClientEntityContext } from "./clientEntityContext";
import { ServiceBusMessage, ReceiveMode, ReceivedMessageInfo } from "./serviceBusMessage";
import { SessionReceiverOptions, SessionReceiver } from "./session/messageSession";

/**
 * Describes the options for creating a Receiver.
 */
export interface MessageReceiverOptions {
  /**
   * An enum indicating the mode in which messages should be received.
   * Possible values are `ReceiveMode.peekLock` (default) and `ReceiveMode.receiveAndDelete`
   */
  receiveMode?: ReceiveMode;
}

/**
 * An abstraction over the underlying receiver link.
 * The Reciever class can be used to recieve messages in a batch or by registering handlers
 */
export class Receiver {
  /**
   * @property {ClientEntityContext} _context Describes the amqp connection context for the QueueClient.
   */
  private _context: ClientEntityContext;
  private _receiveMode: ReceiveMode;

  constructor(context: ClientEntityContext, options?: MessageReceiverOptions) {
    this._context = context;
    if (!options) {
      options = {};
    }
    this._receiveMode =
      options.receiveMode === undefined ? ReceiveMode.peekLock : options.receiveMode;
  }

  /**
   * Registers handlers to deal with the incoming stream of messages over an AMQP receiver link
   * from a Queue/Subscription.
   * To stop receiving messages, call `close()` on the Receiver or set the property
   * `maxMessageWaitTimeoutInSeconds` in the options to provide a timeout.
   *
   * @param onMessage - Handler for processing each incoming message.
   * @param onError - Handler for any error that occurs while receiving or processing messages.
   * @param options - Options to control whether messages should be automatically completed and/or
   * automatically have their locks renewed. You can also provide a timeout in seconds to denote the
   * amount of time to wait for a new message before closing the receiver.
   *
   * @returns void
   */
  receive(onMessage: OnMessage, onError: OnError, options?: MessageHandlerOptions): void {
    this.validateNewReceiveCall(ReceiverType.streaming);

    if (!options) options = {};
    const rcvOptions: ReceiveOptions = {
      maxConcurrentCalls: 1,
      receiveMode: this._receiveMode,
      autoComplete: options.autoComplete,
      maxAutoRenewDurationInSeconds: options.maxAutoRenewDurationInSeconds
    };
    const sReceiver = StreamingReceiver.create(this._context, rcvOptions);
    this._context.streamingReceiver = sReceiver;
    return sReceiver.receive(onMessage, onError);
  }

  /**
   * Returns a batch of messages based on given count and timeout over an AMQP receiver link
   * from a Queue/Subscription.
   *
   * @param maxMessageCount      The maximum number of messages to receive from Queue/Subscription.
   * @param maxWaitTimeInSeconds The maximum wait time in seconds for which the Receiver
   * should wait to receive the first message. If no message is received by this time,
   * the returned promise gets resolved to an empty array.
   * - **Default**: `60` seconds.
   * @returns Promise<ServiceBusMessage[]> A promise that resolves with an array of Message objects.
   */
  async receiveBatch(
    maxMessageCount: number,
    maxWaitTimeInSeconds?: number
  ): Promise<ServiceBusMessage[]> {
    this.validateNewReceiveCall(ReceiverType.batching);

    if (!this._context.batchingReceiver || !this._context.batchingReceiver.isOpen()) {
      const options: ReceiveOptions = {
        maxConcurrentCalls: 0,
        receiveMode: this._receiveMode,
        maxMessageWaitTimeoutInSeconds: 1
      };
      this._context.batchingReceiver = BatchingReceiver.create(this._context, options);
    }

    try {
      return await this._context.batchingReceiver.receive(maxMessageCount, maxWaitTimeInSeconds);
    } catch (err) {
      log.error(
        "[%s] Receiver '%s', an error occurred while receiving %d messages for %d " +
          "max time:\n %O",
        this._context.namespace.connectionId,
        this._context.batchingReceiver.name,
        maxMessageCount,
        maxWaitTimeInSeconds,
        err
      );
      throw err;
    }
  }

  /**
   * Renews the lock on the message.
   *
   * When a message is received in `PeekLock` mode, the message is locked on the server for this
   * receiver instance for a duration as specified during the Queue/Subscription creation
   * (LockDuration). If processing of the message requires longer than this duration, the
   * lock needs to be renewed. For each renewal, it resets the time the message is locked by the
   * LockDuration set on the Entity.
   *
   * @param lockTokenOrMessage - Lock token of the message or the message itself.
   * @returns Promise<Date> - New lock token expiry date and time in UTC format.
   */
  async renewLock(lockTokenOrMessage: string | ServiceBusMessage): Promise<Date> {
    if (this._receiveMode !== ReceiveMode.peekLock) {
      throw new Error("The operation is only supported in 'PeekLock' receive mode.");
    }
    return this._context.managementClient!.renewLock(lockTokenOrMessage);
  }

  /**
   * Receives a deferred message identified by the given `sequenceNumber`.
   * @param sequenceNumber The sequence number of the message that will be received.
   * @returns Promise<ServiceBusMessage | undefined>
   * - Returns `Message` identified by sequence number.
   * - Returns `undefined` if no such message is found.
   * - Throws an error if the message has not been deferred.
   */
  async receiveDeferredMessage(sequenceNumber: Long): Promise<ServiceBusMessage | undefined> {
    if (this._receiveMode !== ReceiveMode.peekLock) {
      throw new Error("The operation is only supported in 'PeekLock' receive mode.");
    }
    return this._context.managementClient!.receiveDeferredMessage(
      sequenceNumber,
      this._receiveMode
    );
  }

  /**
   * Receives a list of deferred messages identified by given `sequenceNumbers`.
   * @param sequenceNumbers A list containing the sequence numbers to receive.
   * @returns Promise<ServiceBusMessage[]>
   * - Returns a list of messages identified by the given sequenceNumbers.
   * - Returns an empty list if no messages are found.
   * - Throws an error if the messages have not been deferred.
   */
  async receiveDeferredMessages(sequenceNumbers: Long[]): Promise<ServiceBusMessage[]> {
    if (this._receiveMode !== ReceiveMode.peekLock) {
      throw new Error("The operation is only supported in 'PeekLock' receive mode.");
    }
    return this._context.managementClient!.receiveDeferredMessages(
      sequenceNumbers,
      this._receiveMode
    );
  }

  /**
   * Closes the underlying AMQP receiver link.
   *
   * @returns {Promise<void>}
   */
  async close(): Promise<void> {
    try {
      if (this._context.namespace.connection && this._context.namespace.connection.isOpen()) {
        // Close the streaming receiver.
        if (this._context.streamingReceiver) {
          await this._context.streamingReceiver.close();
        }

        // Close the batching receiver.
        if (this._context.batchingReceiver) {
          await this._context.batchingReceiver.close();
        }

        // Make sure that we clear the map of deferred messages
        this._context.requestResponseLockedMessages.clear();
      }
    } catch (err) {
      const msg =
        `An error occurred while closing the receiver for` +
        `"${this._context.entityPath}": ${JSON.stringify(err)} `;
      log.error(msg);
      throw new Error(msg);
    }
  }

  /**
   * Indicates whether the underlying receiver link is open or not.
   * When this is true, a new receive() or receiveBatch() call cannot be made on the receiver.
   */
  isActive(): boolean {
    if (this._context.streamingReceiver && this._context.streamingReceiver.isOpen()) {
      return true;
    }
    if (
      this._context.batchingReceiver &&
      this._context.batchingReceiver.isOpen() &&
      this._context.batchingReceiver.isReceivingMessages
    ) {
      return true;
    }
    return false;
  }

  private validateNewReceiveCall(newCallType: ReceiverType): void {
    let currentlyActiveReceiver = "";
    let currentlyActiveReceiverType = "";
    if (this._context.streamingReceiver && this._context.streamingReceiver.isOpen()) {
      currentlyActiveReceiver = this._context.streamingReceiver.name;
      currentlyActiveReceiverType = "streaming";
    } else if (
      this._context.batchingReceiver &&
      this._context.batchingReceiver.isOpen() &&
      this._context.batchingReceiver.isReceivingMessages
    ) {
      currentlyActiveReceiver = this._context.batchingReceiver.name;
      currentlyActiveReceiverType = "batching";
    }

    if (currentlyActiveReceiverType && currentlyActiveReceiver) {
      const msg =
        `A "${currentlyActiveReceiverType}" receiver with id ` +
        `"${currentlyActiveReceiver}" is active for "${this._context.entityPath}". ` +
        `A ${newCallType === ReceiverType.streaming ? "new receive" : "receiveBatch"}() call ` +
        `cannot be made at this time. Either wait for current receiver to complete or create a new receiver.`;

      throw new Error(msg);
    }
  }
}

export class SessionReceiverOuter {
  private _context: ClientEntityContext;
  private _receiveMode: ReceiveMode;
  private _sessionId: string | undefined;
  private _sessionReceiver: SessionReceiver;

  public get sessionId(): string {
    return this._sessionId || "";
  }

  constructor(context: ClientEntityContext, sessionReceiver: SessionReceiver) {
    this._context = context;

    this._receiveMode = sessionReceiver.receiveMode;
    this._sessionId = sessionReceiver.sessionId;
    this._sessionReceiver = sessionReceiver;
  }

  /**
   * Renews the lock for the Session.
   * @returns Promise<Date> New lock token expiry date and time in UTC format.
   */
  async renewLock(): Promise<Date> {
    return this._context.managementClient!.renewSessionLock(this.sessionId!);
  }

  /**
   * Sets the state of the MessageSession.
   * @param state The state that needs to be set.
   */
  async setState(state: any): Promise<void> {
    return this._context.managementClient!.setSessionState(this.sessionId!, state);
  }

  /**
   * Gets the state of the MessageSession.
   * @returns Promise<any> The state of that session
   */
  async getState(): Promise<any> {
    return this._context.managementClient!.getSessionState(this.sessionId!);
  }

  /**
   * Fetches the next batch of active messages in the current MessageSession. The first call to
   * `peek()` fetches the first active message for this client. Each subsequent call fetches the
   * subsequent message in the entity.
   *
   * Unlike a `received` message, `peeked` message will not have lock token associated with it,
   * and hence it cannot be `Completed/Abandoned/Deferred/Deadlettered/Renewed`. Also, unlike
   * `receive() | receiveBatch()` this method will also fetch `Deferred` messages, but
   * **NOT** `Deadlettered` messages.
   *
   * It is especially important to keep in mind when attempting to recover deferred messages from
   * the queue. A message for which the `expiresAtUtc` instant has passed is no longer eligible for
   * regular retrieval by any other means, even when it's being returned by `peek()`. Returning
   * these messages is deliberate, since `peek()` is a diagnostics tool reflecting the current
   * state of the log.
   *
   * @param messageCount The number of messages to retrieve. Default value `1`.
   * @returns Promise<ReceivedMessageInfo[]>
   */
  async peek(messageCount?: number): Promise<ReceivedMessageInfo[]> {
    return this._context.managementClient!.peekMessagesBySession(this.sessionId!, messageCount);
  }

  /**
   * Peeks the desired number of messages in the MessageSession from the specified sequence number.
   * @param fromSequenceNumber The sequence number from where to read the message.
   * @param messageCount The number of messages to retrieve. Default value `1`.
   * @returns Promise<ReceivedMessageInfo[]>
   */
  async peekBySequenceNumber(
    fromSequenceNumber: Long,
    messageCount?: number
  ): Promise<ReceivedMessageInfo[]> {
    return this._context.managementClient!.peekBySequenceNumber(fromSequenceNumber, {
      sessionId: this.sessionId!,
      messageCount: messageCount
    });
  }

  /**
   * Receives a deferred message identified by the given `sequenceNumber`.
   * @param sequenceNumber The sequence number of the message that will be received.
   * @returns Promise<ServiceBusMessage | undefined>
   * - Returns `Message` identified by sequence number.
   * - Returns `undefined` if no such message is found.
   * - Throws an error if the message has not been deferred.
   */
  async receiveDeferredMessage(sequenceNumber: Long): Promise<ServiceBusMessage | undefined> {
    if (this._receiveMode !== ReceiveMode.peekLock) {
      throw new Error("The operation is only supported in 'PeekLock' receive mode.");
    }
    return this._context.managementClient!.receiveDeferredMessage(
      sequenceNumber,
      this._receiveMode,
      this.sessionId
    );
  }

  /**
   * Receives a list of deferred messages identified by given `sequenceNumbers`.
   * @param sequenceNumbers A list containing the sequence numbers to receive.
   * @returns Promise<ServiceBusMessage[]>
   * - Returns a list of messages identified by the given sequenceNumbers.
   * - Returns an empty list if no messages are found.
   * - Throws an error if the messages have not been deferred.
   */
  async receiveDeferredMessages(sequenceNumbers: Long[]): Promise<ServiceBusMessage[]> {
    if (this._receiveMode !== ReceiveMode.peekLock) {
      throw new Error("The operation is only supported in 'PeekLock' receive mode.");
    }
    return this._context.managementClient!.receiveDeferredMessages(
      sequenceNumbers,
      this._receiveMode,
      this.sessionId
    );
  }

  /**
   * Returns a batch of messages based on given count and timeout over an AMQP receiver link
   * from a Queue/Subscription.
   *
   * @param maxMessageCount      The maximum number of messages to receive from Queue/Subscription.
   * @param maxWaitTimeInSeconds The maximum wait time in seconds for which the Receiver
   * should wait to receive the first message. If no message is received by this time,
   * the returned promise gets resolved to an empty array.
   * - **Default**: `60` seconds.
   * @returns Promise<ServiceBusMessage[]> A promise that resolves with an array of Message objects.
   */
  async receiveBatch(
    maxMessageCount: number,
    maxWaitTimeInSeconds?: number
  ): Promise<ServiceBusMessage[]> {
    try {
      return await this._sessionReceiver.receiveBatch(maxMessageCount, maxWaitTimeInSeconds);
    } catch (err) {
      log.error(
        "[%s] Receiver '%s', an error occurred while receiving %d messages for %d " +
          "max time:\n %O",
        this._context.namespace.connectionId,
        this._sessionReceiver.name,
        maxMessageCount,
        maxWaitTimeInSeconds,
        err
      );
      throw err;
    }
  }
}
