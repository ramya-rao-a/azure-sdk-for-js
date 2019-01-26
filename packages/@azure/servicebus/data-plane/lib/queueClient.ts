// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

import * as Long from "long";
import * as log from "./log";
import { ConnectionContext } from "./connectionContext";
import { ReceivedMessageInfo, ReceiveMode } from "./serviceBusMessage";
import { Client } from "./client";
import { ListSessionsResponse } from "./core/managementClient";
import { SessionReceiver, SessionReceiverOptions } from "./session/messageSession";
import { Sender } from "./sender";
import { Receiver } from "./receiver";

export class QueueClient extends Client {
  /**
   * Instantiates a client pointing to the ServiceBus Queue given by this configuration.
   * This is not meant for the user to call directly.
   * The user should use the `createQueueClient` on the Namespace instead.
   *
   * @constructor
   * @param name The Queue name.
   * @param context The connection context to create the QueueClient.
   */
  constructor(name: string, context: ConnectionContext) {
    super(name, context);
  }

  /**
   * Closes the AMQP connection to the ServiceBus Queue for this client.
   *
   * @returns {Promise<void>}
   */
  async close(): Promise<void> {
    try {
      if (this._context.namespace.connection && this._context.namespace.connection.isOpen()) {
        const connectionId = this._context.namespace.connectionId;
        // Close the sender.
        if (this._context.sender) {
          log.qClient("[%s] Closing the Sender for queue '%s'.", connectionId, this.name);
          await this._context.sender.close();
        }

        // Close the sessionManager.
        if (this._context.sessionManager) {
          log.qClient("[%s] Closing the SessionMaanger for queue '%s'.", connectionId, this.name);
          this._context.sessionManager.close();
        }

        // Close the streaming receiver.
        if (this._context.streamingReceiver) {
          log.qClient(
            "[%s] Closing the StreamingReceiver for queue '%s'.",
            connectionId,
            this.name
          );
          await this._context.streamingReceiver.close();
        }

        // Close the batching receiver.
        if (this._context.batchingReceiver) {
          log.qClient("[%s] Closing the BatchingReceiver for queue '%s'.", connectionId, this.name);
          await this._context.batchingReceiver.close();
        }

        // Close all the MessageSessions.
        for (const messageSessionId of Object.keys(this._context.messageSessions)) {
          log.qClient(
            "[%s] Closing the MessageSession '%s' for queue '%s'.",
            connectionId,
            messageSessionId,
            this.name
          );
          await this._context.messageSessions[messageSessionId].close();
        }

        // Make sure that we clear the map of deferred messages
        this._context.requestResponseLockedMessages.clear();

        log.qClient("Closed the Queue client '%s'.", this.id);
      }
    } catch (err) {
      const msg =
        `An error occurred while closing the queue client ` +
        `"${this.id}": ${JSON.stringify(err)} `;
      log.error(msg);
      throw new Error(msg);
    }
  }

  /**
   * Returns a Sender that can be used to send messages, schedule messages to be sent at a later time
   * and cancel such scheduled messages.
   */
  getSender(): Sender {
    return new Sender(this._context);
  }

  /**
   * Returns a Receiver that can be used to receive messages in batches or by registering handlers
   * @param receiveMode The mode in which messages should be received.
   * Possible values are `ReceiveMode.peekLock` (default) and `ReceiveMode.receiveAndDelete`
   */
  getReceiver(receiveMode?: ReceiveMode): Receiver {
    return new Receiver(this._context, this.name, receiveMode);
  }

  /**
   * Fetches the next batch of active messages. The first call to `peek()` fetches the first
   * active message for this client. Each subsequent call fetches the subsequent message in the
   * entity.
   *
   * Unlike a `received` message, `peeked` message will not have lock token associated with it,
   * and hence it cannot be `Completed/Abandoned/Deferred/Deadlettered/Renewed`. Also, unlike
   * `receive() | receiveBatch()` this method will fetch even Deferred messages
   * (but not Deadlettered message).
   *
   * It is especially important to keep in mind when attempting to recover deferred messages from
   * the queue. A message for which the `expiresAtUtc` instant has passed is no longer eligible for
   * regular retrieval by any other means, even when it's being returned by `peek()`. Returning
   * these messages is deliberate, since `peek()` is a diagnostics tool reflecting the current
   * state of the log.
   *
   * @param [messageCount] The number of messages to retrieve. Default value `1`.
   * @returns Promise<ReceivedSBMessage[]>
   */
  async peek(messageCount?: number): Promise<ReceivedMessageInfo[]> {
    return this._context.managementClient!.peek(messageCount);
  }

  /**
   * Peeks the desired number of messages from the specified sequence number.
   * @param fromSequenceNumber The sequence number from where to read the message.
   * @param [messageCount] The number of messages to retrieve. Default value `1`.
   * @returns Promise<ReceivedSBMessage[]>
   */
  async peekBySequenceNumber(
    fromSequenceNumber: Long,
    messageCount?: number
  ): Promise<ReceivedMessageInfo[]> {
    return this._context.managementClient!.peekBySequenceNumber(fromSequenceNumber, {
      messageCount: messageCount
    });
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
  async peekSession(sessionId: string, messageCount?: number): Promise<ReceivedMessageInfo[]> {
    return this._context.managementClient!.peekMessagesBySession(sessionId, messageCount);
  }

  /**
   * Peeks the desired number of messages in the MessageSession from the specified sequence number.
   * @param fromSequenceNumber The sequence number from where to read the message.
   * @param messageCount The number of messages to retrieve. Default value `1`.
   * @returns Promise<ReceivedMessageInfo[]>
   */
  async peekSessionBySequenceNumber(
    sessionId: string,
    fromSequenceNumber: Long,
    messageCount?: number
  ): Promise<ReceivedMessageInfo[]> {
    return this._context.managementClient!.peekBySequenceNumber(fromSequenceNumber, {
      sessionId: sessionId,
      messageCount: messageCount
    });
  }

  /**
   * Lists the sessions on the ServiceBus Queue.
   * @param maxNumberOfSessions Maximum number of sessions.
   * @param lastUpdateTime Filter to include only sessions updated after a given time. Default
   * value: 3 days ago from the current time.
   */
  async listMessageSessions(
    maxNumberOfSessions: number,
    lastUpdatedTime?: Date
  ): Promise<ListSessionsResponse> {
    return this._context.managementClient!.listMessageSessions(
      0,
      maxNumberOfSessions,
      lastUpdatedTime
    );
  }

  /**
   * Creates a sessionReceiver with given sessionId from the ServiceBus Queue.
   * When no sessionId is given, a random session among the available sessions is used.
   *
   * @param options Options to provide sessionId and ReceiveMode for receiving messages from the
   * session enabled Servicebus Queue.
   *
   * @returns SessionReceiver An instance of a SessionReceiver to receive messages from the session.
   */
  async getSessionReceiver(options?: SessionReceiverOptions): Promise<SessionReceiver> {
    if (!options) options = {};
    this._context.isSessionEnabled = true;
    return SessionReceiver.create(this._context, options);
  }
}
