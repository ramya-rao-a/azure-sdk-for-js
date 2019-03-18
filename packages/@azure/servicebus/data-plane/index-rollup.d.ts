/// <reference types="long" />
/// <reference types="node" />
import { AmqpError } from 'rhea-promise';
import { AmqpMessage } from '@azure/amqp-common';
import { ApplicationTokenCredentials } from 'ms-rest-azure';
import { DataTransformer } from '@azure/amqp-common';
import { Delivery } from 'rhea-promise';
import { DeviceTokenCredentials } from 'ms-rest-azure';
import { default as Long } from 'long';
import { MSITokenCredentials } from 'ms-rest-azure';
import { MessagingError } from '@azure/amqp-common';
import { TokenInfo } from '@azure/amqp-common';
import { TokenProvider } from '@azure/amqp-common';
import { TokenType } from '@azure/amqp-common';
import { UserTokenCredentials } from 'ms-rest-azure';
import { delay } from '@azure/amqp-common';

/**
 * Interface for Queue/Topic/Subscription clients
 */
declare interface Client {
    /**
     * @property {string} The entitypath for the Service Bus entity for which this client is created.
     */
    readonly entityPath: string;
    /**
     * @property {string} A unique identifier for the client.
     */
    readonly id: string;
    /**
     * Closes the client.
     */
    close(): Promise<void>;
    /**
     * Will reconnect the client if neccessary.
     * @param error Error if any
     */
    detached(error?: AmqpError | Error): Promise<void>;
}

/**
 * Represents the correlation filter expression.
 * A CorrelationFilter holds a set of conditions that are matched against one of more of an
 * arriving message's user and system properties.
 */
export declare interface CorrelationFilter {
    /**
     * Identifier of the correlation.
     */
    correlationId?: string;
    /**
     * Identifier of the message.
     */
    messageId?: string;
    /**
     * Address to send to.
     */
    to?: string;
    /**
     * Address of the queue to reply to.
     */
    replyTo?: string;
    /**
     * Application specific label.
     */
    label?: string;
    /**
     * Session identifier.
     */
    sessionId?: string;
    /**
     * Session identifier to reply to.
     */
    replyToSessionId?: string;
    /**
     * Content type of the message.
     */
    contentType?: string;
    /**
     * Application specific properties of the message.
     */
    userProperties?: any;
}

/**
 * Describes the reason and error description for dead lettering a message.
 * @interface DeadLetterOptions
 */
export declare interface DeadLetterOptions {
    /**
     * @property {string} [deadletterReason] The reason for deadlettering the message.
     */
    deadletterReason: string;
    /**
     * @property {string} [deadLetterErrorDescription] The error description for deadlettering the message.
     */
    deadLetterErrorDescription: string;
}

/**
 * Describes the options to control receiving of messages in streaming mode.
 */
export declare interface MessageHandlerOptions {
    /**
     * @property {boolean} [autoComplete] Indicates whether the message (if not settled by the user)
     * should be automatically completed after the user provided onMessage handler has been executed.
     * Completing a message, removes it from the Queue/Subscription.
     * - **Default**: `true`.
     */
    autoComplete?: boolean;
    /**
     * @property {number} [maxMessageAutoRenewLockDurationInSeconds] The maximum duration in seconds until which
     * the lock on the message will be renewed automatically before the message is settled.
     * - **Default**: `300` seconds (5 minutes).
     * - **To disable autolock renewal**, set `maxMessageAutoRenewLockDurationInSeconds` to `0`.
     */
    maxMessageAutoRenewLockDurationInSeconds?: number;
    /**
     * @property {number} [newMessageWaitTimeoutInSeconds] The maximum amount of time the receiver
     * will wait to receive a new message. If no new message is received in this time, then the
     * receiver will be closed.
     *
     * Caution: When setting this value, take into account the time taken to process messages. Once
     * the receiver is closed, operations like complete()/abandon()/defer()/deadletter() cannot be
     * invoked on messages.
     *
     * If this option is not provided, then receiver link will stay open until manually closed.
     */
    newMessageWaitTimeoutInSeconds?: number;
    /**
     * @property {number} [maxConcurrentCalls] The maximum number of concurrent calls that the library
     * can make to the user's message handler. Once this limit has been reached, more messages will
     * not be received until atleast one of the calls to the user's message handler has completed.
     * - **Default**: `1`.
     */
    maxConcurrentCalls?: number;
}

/**
 * Describes the options for creating a Receiver.
 */
export declare interface MessageReceiverOptions {
    /**
     * An enum indicating the mode in which messages should be received.
     * Possible values are `ReceiveMode.peekLock` (default) and `ReceiveMode.receiveAndDelete`
     */
    receiveMode?: ReceiveMode;
}

/**
 * Holds the AMQP connection to the Service Bus Namespace and is the entry point for using Queues,
 * Topics and Subscriptions.
 */
export declare class Namespace {
    /**
     * @property {string} name The namespace name of the service bus.
     */
    readonly name: string;
    /**
     * @property {ConnectionContext} _context Describes the amqp connection context for the Namespace.
     * @private
     */
    private _context;
    /**
     * Instantiates a client pointing to the Service Bus Namespace.
     *
     * @constructor
     * @param {ConnectionConfig} config - The connection configuration to create the Namespace.
     * @param {TokenProvider} [tokenProvider] - The token provider that provides the token for
     * authentication.
     * @param {NamespaceOptions} - Options to create the Namespace.
     */
    private constructor();
    /**
     * Creates a QueueClient for the given Queue name. It assumes that the queue has already been
     * created.
     * @param {string} queueName The queue name.
     * @returns QueueClient.
     */
    createQueueClient(queueName: string): QueueClient;
    /**
     * Creates a TopicClient for the given topic name. It assumes that the topic has already been
     * created.
     * @param {string} topicName The topic name.
     * @returns TopicClient.
     */
    createTopicClient(topicName: string): TopicClient;
    /**
     * Creates a SubscriptionClient for the given topic name and subscription.
     * It assumes that the topic has already been created.
     * @param {string} topicName The topic name.
     * @param {string} subscriptionName The subscription name.
     * @returns SubscriptionClient.
     */
    createSubscriptionClient(topicName: string, subscriptionName: string): SubscriptionClient;
    /**
     * Closes the AMQP connection created by this namespace along with AMQP links for sender/receivers
     * created by the queue/topic/subscription clients created in this namespace.
     * Once closed,
     * - the namespace cannot be used to create anymore clients for queues/topics/subscriptions
     * - the clients created in this namespace cannot be used to send/receive messages anymore
     * @returns {Promise<any>}
     */
    close(): Promise<any>;
    /**
     * Creates a Namespace from connection string.
     * @param {string} connectionString - Connection string of the form
     * 'Endpoint=sb://my-servicebus-namespace.servicebus.windows.net/;SharedAccessKeyName=my-SA-name;SharedAccessKey=my-SA-key'
     * @param {NamespaceOptions} [options] Options that can be provided during namespace creation.
     * @returns {Namespace} - An instance of the Namespace.
     */
    static createFromConnectionString(connectionString: string, options?: NamespaceOptions): Namespace;
    /**
     * Creates a Namespace from a generic token provider.
     * @param {string} host - Fully qualified domain name for Servicebus. Most likely,
     * `<yournamespace>.servicebus.windows.net`.
     * @param {TokenProvider} tokenProvider - Your token provider that implements the TokenProvider interface.
     * @param {NamespaceOptions} options - The options that can be provided during namespace creation.
     * @returns {Namespace} An instance of the Namespace.
     */
    static createFromTokenProvider(host: string, tokenProvider: TokenProvider, options?: NamespaceOptions): Namespace;
    /**
     * Creates a Namespace from AADTokenCredentials.
     * @param {string} host - Fully qualified domain name for ServiceBus.
     * Most likely, {yournamespace}.servicebus.windows.net
     * @param {TokenCredentials} credentials - The AAD Token credentials.
     * It can be one of the following: ApplicationTokenCredentials | UserTokenCredentials |
     * DeviceTokenCredentials | MSITokenCredentials.
     * @param {NamespaceOptions} options - The options that can be provided during namespace creation.
     * @returns {Namespace} An instance of the Namespace.
     */
    static createFromAadTokenCredentials(host: string, credentials: ApplicationTokenCredentials | UserTokenCredentials | DeviceTokenCredentials | MSITokenCredentials, options?: NamespaceOptions): Namespace;
    /**
     * Returns the corresponding dead letter queue name for the given queue name.
     * Use this in the `createQueueClient` function to receive messages from dead letter queue.
     * @param queueName
     */
    static getDeadLetterQueuePath(queueName: string): string;
    /**
     * Returns the corresponding dead letter topic name for the given topic and subscription names.
     * Use this in the `createSubscriptionClient` function to receive messages from dead letter
     * subscription corresponding to given subscription
     * @param topicName
     * @param subscriptionName
     */
    static getDeadLetterTopicPath(topicName: string, subscriptionName: string): string;
}

/**
 * Describes the options that can be provided while creating the Namespace.
 * @interface NamespaceOptions
 */
export declare interface NamespaceOptions {
    /**
     * @property {DataTransformer} [dataTransformer] The data transformer that will be used to encode
     * and decode the sent and received messages respectively. If not provided then we will use the
     * DefaultDataTransformer. The default transformer should handle majority of the cases. This
     * option needs to be used only for specialized scenarios.
     */
    dataTransformer?: DataTransformer;
}

/**
 * Describes the error handler signature.
 */
export declare interface OnError {
    /**
     * Handler for any error that occurs while receiving or processing messages.
     */
    (error: MessagingError | Error): void;
}

/**
 * Describes the message handler signature.
 */
export declare interface OnMessage {
    /**
     * Handler for processing each incoming message.
     */
    (message: ServiceBusMessage): Promise<void>;
}

/**
 * Describes the client that allows interacting with a Service Bus Queue.
 * Use the `createQueueClient` function on the Namespace object to instantiate a QueueClient
 * @class QueueClient
 */
export declare class QueueClient implements Client {
    /**
     * @property {string} The entitypath for the Service Bus Queue for which this client is created.
     */
    readonly entityPath: string;
    /**
     * @property {string} A unique identifier for the client.
     */
    readonly id: string;
    /**
     * @property {boolean} _isClosed Denotes if close() was called on this client.
     */
    private _isClosed;
    /**
     * @property {ClientEntityContext} _context Describes the amqp connection context for the QueueClient.
     */
    private _context;
    private _currentReceiver;
    private _currentSender;
    /**
     * Closes all the AMQP links for sender/receivers created by this client.
     * Once closed, neither the QueueClient nor its sender/recievers can be used for any
     * further operations. Use the `createQueueClient` function on the Namespace object to
     * instantiate a new QueueClient
     *
     * @returns {Promise<void>}
     */
    close(): Promise<void>;
    /**
     * Will reconnect the queueClient and all its sender/receiver links.
     * This is meant for the library to use to resume sending/receiving when retryable errors are seen.
     * This is not meant for the consumer of this library to use.
     * @ignore
     * @param error Error if any due to which we are attempting to reconnect
     */
    detached(error?: AmqpError | Error): Promise<void>;
    /**
     * Gets a Sender to be used for sending messages, scheduling messages to be sent at a later time
     * and cancelling such scheduled messages.
     */
    getSender(): Sender;
    /**
     * Gets a Receiver to be used for receiving messages in batches or by registering handlers.
     *
     * @param options Options for creating the receiver.
     */
    getReceiver(options?: MessageReceiverOptions): Receiver;
    /**
     * Fetches the next batch of active messages (including deferred but not deadlettered messages).
     * The first call to `peek()` fetches the first active message. Each subsequent call fetches the
     * subsequent message.
     *
     * Unlike a `received` message, `peeked` message is a read-only version of the message.
     * It cannot be `Completed/Abandoned/Deferred/Deadlettered`. The lock on it cannot be renewed.
     *
     * @param [messageCount] The number of messages to retrieve. Default value `1`.
     * @returns Promise<ReceivedSBMessage[]>
     */
    peek(messageCount?: number): Promise<ReceivedMessageInfo[]>;
    /**
     * Peeks the desired number of active messages (including deferred but not deadlettered messages)
     * from the specified sequence number.
     *
     * Unlike a `received` message, `peeked` message is a read-only version of the message.
     * It cannot be `Completed/Abandoned/Deferred/Deadlettered`. The lock on it cannot be renewed.
     *
     * @param fromSequenceNumber The sequence number from where to read the message.
     * @param [messageCount] The number of messages to retrieve. Default value `1`.
     * @returns Promise<ReceivedSBMessage[]>
     */
    peekBySequenceNumber(fromSequenceNumber: Long, messageCount?: number): Promise<ReceivedMessageInfo[]>;
    /**
     * Gets a SessionReceiver for receiving messages in batches or by registering handlers from a
     * session enabled Queue. When no sessionId is given, a random session among the available
     * sessions is used.
     *
     * @param options Options to provide sessionId and ReceiveMode for receiving messages from the
     * session enabled Servicebus Queue.
     *
     * @returns SessionReceiver An instance of a SessionReceiver to receive messages from the session.
     */
    getSessionReceiver(options?: SessionReceiverOptions): Promise<SessionReceiver>;
    /**
     * Throws error if this queueClient has been closed
     * @param client
     */
    private throwErrorIfClientOrConnectionClosed;
}

/**
 * The mode in which messages should be received
 */
export declare enum ReceiveMode {
    /**
     * Peek the message and lock it until it is settled or times out.
     * @type {Number}
     */
    peekLock = 1,
    /**
     * Remove the message from the service bus upon delivery.
     * @type {Number}
     */
    receiveAndDelete = 2
}

/**
 * Describes the message received from ServiceBus.
 * @interface ReceivedMessage
 */
declare interface ReceivedMessage extends ReceivedMessageInfo {
    complete(): Promise<void>;
    abandon(propertiesToModify?: {
        [key: string]: any;
    }): Promise<void>;
    defer(propertiesToModify?: {
        [key: string]: any;
    }): Promise<void>;
    deadLetter(options?: DeadLetterOptions): Promise<void>;
}

/**
 * Describes the message received from ServiceBus.
 * @class ReceivedSBMessage
 */
export declare interface ReceivedMessageInfo extends SendableMessageInfo {
    /**
     * @property {string} [lockToken] The lock token for the current message. The lock token is a
     * reference to the lock that is being held by the broker in `ReceiveMode.PeekLock` mode. Locks
     * are used to explicitly settle messages as explained in the {@link https://docs.microsoft.com/azure/service-bus-messaging/message-transfers-locks-settlement product documentation in more detail}
     * The token can also be used to pin the lock permanently through the {@link https://docs.microsoft.com/azure/service-bus-messaging/message-deferral Deferral API}
     * and, with that, take the message out of the regular delivery state flow.
     * @readonly
     */
    readonly lockToken?: string;
    /**
     * @property {number} [deliveryCount] The current delivery count. The value start from 1. Number
     * of deliveries that have been attempted for this message. The count is incremented when a
     * message lock expires, or the message is explicitly abandoned by the receiver.
     * @readonly
     */
    readonly deliveryCount?: number;
    /**
     * @property {Date} [enqueuedTimeUtc] The date and time of the sent message in UTC. The UTC
     * instant at which the message has been accepted and stored in the entity. This value can be
     * used as an authoritative and neutral arrival time indicator when the receiver does not
     * want to trust the sender's clock.
     * @readonly
     */
    readonly enqueuedTimeUtc?: Date;
    /**
     * @property {Date} [expiresAtUtc] The date and time in UTC at which the message is set to expire.
     * The UTC instant at which the message is marked for removal and no longer available for
     * retrieval from the entity due to expiration. Expiry is controlled by the `timeToLive` property
     * and this property is computed from `enqueuedTimeUtc` + `timeToLive`.
     */
    readonly expiresAtUtc?: Date;
    /**
     * @property {Date} [lockedUntilUtc] The date and time in UTC until which the message will be
     * locked in the queue/subscription. For messages retrieved under a lock (peek-lock receive mode,
     * not pre-settled) this property reflects the UTC instant until which the message is held
     * locked in the queue/subscription. When the lock expires, the `deliveryCount` is incremented
     * and the message is again available for retrieval.
     */
    lockedUntilUtc?: Date;
    /**
     * @property {number} [enqueuedSequenceNumber] The original sequence number of the message. For
     * messages that have been auto-forwarded, this property reflects the sequence number that had
     * first been assigned to the message at its original point of submission.
     * @readonly
     */
    readonly enqueuedSequenceNumber?: number;
    /**
     * @property {number} [sequenceNumber] The unique number assigned to a message by Service Bus.
     * The sequence number is a unique 64-bit integer assigned to a message as it is accepted
     * and stored by the broker and functions as its true identifier. For partitioned entities,
     * the topmost 16 bits reflect the partition identifier. Sequence numbers monotonically increase.
     * They roll over to 0 when the 48-64 bit range is exhausted.
     *
     * **Max safe integer** that Javascript currently supports is `2^53 - 1`. The sequence number
     * is an AMQP `Long` type which can be upto 64 bits long. To represent that we are using a
     * library named {@link https://github.com/dcodeIO/long.js long.js}. We expect customers
     * to use the **`Long`** type exported by this library.
     * @readonly
     */
    readonly sequenceNumber?: Long;
    /**
     * @property {string} [deadLetterSource] The name of the queue or subscription that this message
     * was enqueued on, before it was deadlettered. Only set in messages that have been dead-lettered
     * and subsequently auto-forwarded from the dead-letter queue to another entity. Indicates the
     * entity in which the message was dead-lettered.
     * @readonly
     */
    readonly deadLetterSource?: string;
    /**
     * @property {AmqpMessage} _amqpMessage The underlying raw amqp message.
     * @readonly
     */
    readonly _amqpMessage: AmqpMessage;
}

/**
 * Describes the module that is responsible for converting the message received from ServiceBus
 * to/from AmqpMessage.
 */
export declare module ReceivedMessageInfo {
    /**
     * @ignore
     */
    export function validate(msg: ReceivedMessageInfo): void;
    /**
     * @ignore
     * Converts given ReceivedMessageInfo to AmqpMessage
     */
    export function toAmqpMessage(msg: ReceivedMessageInfo): AmqpMessage;
    /**
     * @ignore
     * Converts given AmqpMessage to ReceivedMessageInfo
     */
    export function fromAmqpMessage(msg: AmqpMessage, delivery?: Delivery): ReceivedMessageInfo;
}

/**
 * The Receiver class can be used to receive messages in a batch or by registering handlers.
 * Use the `getReceiver` function on the QueueClient or SubscriptionClient to instantiate a Receiver.
 * The Receiver class is an abstraction over the underlying AMQP receiver link.
 * @class Receiver
 */
export declare class Receiver {
    /**
     * @property {ClientEntityContext} _context Describes the amqp connection context for the QueueClient.
     */
    private _context;
    private _receiveMode;
    private _isClosed;
    /**
     * @property {boolean} [isClosed] Denotes if close() was called on this receiver.
     * @readonly
     */
    readonly isClosed: boolean;
    /**
     * Registers handlers to deal with the incoming stream of messages over an AMQP receiver link
     * from a Queue/Subscription.
     * To stop receiving messages, call `close()` on the Receiver or set the property
     * `newMessageWaitTimeoutInSeconds` in the options to provide a timeout.
     *
     * @param onMessage - Handler for processing each incoming message.
     * @param onError - Handler for any error that occurs while receiving or processing messages.
     * @param options - Options to control if messages should be automatically completed, and/or have
     * their locks automatically renewed. You can control the maximum number of messages that should
     * be concurrently processed. You can also provide a timeout in seconds to denote the
     * amount of time to wait for a new message before closing the receiver.
     *
     * @returns void
     */
    receive(onMessage: OnMessage, onError: OnError, options?: MessageHandlerOptions): void;
    /**
     * Returns a batch of messages based on given count and timeout over an AMQP receiver link
     * from a Queue/Subscription.
     *
     * @param maxMessageCount      The maximum number of messages to receive from Queue/Subscription.
     * @param idleTimeoutInSeconds The maximum wait time in seconds for which the Receiver
     * should wait to receive the first message. If no message is received by this time,
     * the returned promise gets resolved to an empty array.
     * - **Default**: `60` seconds.
     * @returns Promise<ServiceBusMessage[]> A promise that resolves with an array of Message objects.
     */
    receiveBatch(maxMessageCount: number, idleTimeoutInSeconds?: number): Promise<ServiceBusMessage[]>;
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
    renewLock(lockTokenOrMessage: string | ServiceBusMessage): Promise<Date>;
    /**
     * Receives a deferred message identified by the given `sequenceNumber`.
     * @param sequenceNumber The sequence number of the message that will be received.
     * @returns Promise<ServiceBusMessage | undefined>
     * - Returns `Message` identified by sequence number.
     * - Returns `undefined` if no such message is found.
     * - Throws an error if the message has not been deferred.
     */
    receiveDeferredMessage(sequenceNumber: Long): Promise<ServiceBusMessage | undefined>;
    /**
     * Receives a list of deferred messages identified by given `sequenceNumbers`.
     * @param sequenceNumbers A list containing the sequence numbers to receive.
     * @returns Promise<ServiceBusMessage[]>
     * - Returns a list of messages identified by the given sequenceNumbers.
     * - Returns an empty list if no messages are found.
     * - Throws an error if the messages have not been deferred.
     */
    receiveDeferredMessages(sequenceNumbers: Long[]): Promise<ServiceBusMessage[]>;
    /**
     * Closes the underlying AMQP receiver link.
     * Once closed, the receiver cannot be used for any further operations.
     * Use the `getReceiver` function on the QueueClient or SubscriptionClient to instantiate
     * a new Receiver
     *
     * @returns {Promise<void>}
     */
    close(): Promise<void>;
    /**
     * Indicates whether the receiver is currently receiving messages or not.
     * When this return true, a new receive() or receiveBatch() call cannot be made.
     */
    isReceivingMessages(): boolean;
    private validateNewReceiveCall;
    private throwIfReceiverOrConnectionClosed;
}

/**
 * Represents a description of a rule.
 */
export declare interface RuleDescription {
    /**
     * Filter expression used to match messages.
     */
    filter?: SQLExpression | CorrelationFilter;
    /**
     * Action to perform if the message satisfies the filtering expression.
     */
    action?: SQLExpression;
    /**
     * Represents the name of the rule.
     */
    name: string;
}

/**
 * Represents the sql filter expression.
 */
export declare interface SQLExpression {
    /**
     * SQL-like condition expression that is evaluated in the broker against the arriving messages'
     * user-defined properties and system properties. All system properties must be prefixed with
     * `sys.` in the condition expression.
     */
    expression: string;
}

/**
 * Describes the message to be sent to ServiceBus.
 * @interface SendableMessageInfo.
 */
export declare interface SendableMessageInfo {
    /**
     * @property {any} body - The message body that needs to be sent or is received.
     */
    body: any;
    /**
     * @property {string | number | Buffer} [messageId] The message identifier is an
     * application-defined value that uniquely identifies the message and its payload.
     *
     * Note: Numbers that are not whole integers are not allowed.
     */
    messageId?: string | number | Buffer;
    /**
     * @property {string} [contentType] The content type of the message. Optionally describes
     * the payload of the message, with a descriptor following the format of RFC2045, Section 5, for
     * example "application/json".
     */
    contentType?: string;
    /**
     * @property {string | number | Buffer} [correlationId] The correlation identifier that allows an
     * application to specify a context for the message for the purposes of correlation, for example
     * reflecting the MessageId of a message that is being replied to.
     * See {@link https://docs.microsoft.com/azure/service-bus-messaging/service-bus-messages-payloads?#message-routing-and-correlation Message Routing and Correlation}.
     */
    correlationId?: string | number | Buffer;
    /**
     * @property {string} [partitionKey] The partition key for sending a message to a
     * partitioned entity. Maximum length is 128 characters. For {@link https://docs.microsoft.com/azure/service-bus-messaging/service-bus-partitioning partitioned entities},
     * etting this value enables assigning related messages to the same internal partition,
     * so that submission sequence order is correctly recorded. The partition is chosen by a hash
     * function over this value and cannot be chosen directly. For session-aware entities,
     * the `sessionId` property overrides this value.
     */
    partitionKey?: string;
    /**
     * @property {string} [viaPartitionKey] The partition key for sending a message into an entity
     * via a partitioned transfer queue. Maximum length is 128 characters. If a message is sent via a
     * transfer queue in the scope of a transaction, this value selects the transfer queue partition:
     * This is functionally equivalent to `partitionKey` property and ensures that messages are kept
     * together and in order as they are transferred.
     * See {@link https://docs.microsoft.com/azure/service-bus-messaging/service-bus-transactions#transfers-and-send-via Transfers and Send Via}.
     */
    viaPartitionKey?: string;
    /**
     * @property {string} [sessionId] The session identifier for a session-aware entity. Maximum
     * length is 128 characters. For session-aware entities, this application-defined value specifies
     * the session affiliation of the message. Messages with the same session identifier are subject
     * to summary locking and enable exact in-order processing and demultiplexing. For
     * session-unaware entities, this value is ignored.
     * {@link https://docs.microsoft.com/azure/service-bus-messaging/message-sessions Message Sessions}.
     */
    sessionId?: string;
    /**
     * @property {string} [replyToSessionId] The session identifier augmenting the `replyTo` address.
     * Maximum length is 128 characters. This value augments the ReplyTo information and specifies
     * which SessionId should be set for the reply when sent to the reply entity.
     * See {@link https://docs.microsoft.com/azure/service-bus-messaging/service-bus-messages-payloads?#message-routing-and-correlation Message Routing and Correlation}.
     */
    replyToSessionId?: string;
    /**
     * @property {number} [timeToLive] The message’s time to live value. This value is the relative
     * duration after which the message expires, starting from the instant the message has been
     * accepted and stored by the broker, as captured in `enqueuedTimeUtc`. When not set explicitly,
     * the assumed value is the DefaultTimeToLive for the respective queue or topic. A message-level
     * `timeToLive` value cannot be longer than the entity's DefaultTimeToLive setting and it is
     * silently adjusted if it does. See
     * {@link https://docs.microsoft.com/azure/service-bus-messaging/message-expiration Expiration}.
     */
    timeToLive?: number;
    /**
     * @property {string} [label] The application specific label. This property enables the
     * application to indicate the purpose of the message to the receiver in a standardized. fashion,
     * similar to an email subject line. The mapped AMQP property is "subject".
     */
    label?: string;
    /**
     * @property {string} [to] The "to" address. This property is reserved for future use in routing
     * scenarios and presently ignored by the broker itself. Applications can use this value in
     * rule-driven {@link https://docs.microsoft.com/azure/service-bus-messaging/service-bus-auto-forwarding auto-forward chaining}
     * scenarios to indicate the intended logical destination of the message.
     */
    to?: string;
    /**
     * @property {string} [replyTo] The address of an entity to send replies to. This optional and
     * application-defined value is a standard way to express a reply path to the receiver of the
     * message. When a sender expects a reply, it sets the value to the absolute or relative path of
     * the queue or topic it expects the reply to be sent to. See
     * {@link https://docs.microsoft.com/azure/service-bus-messaging/service-bus-messages-payloads?#message-routing-and-correlation Message Routing and Correlation}.
     */
    replyTo?: string;
    /**
     * @property {Date} [scheduledEnqueueTimeUtc] The date and time in UTC at which the message will
     * be enqueued. This property returns the time in UTC; when setting the property, the
     * supplied DateTime value must also be in UTC. This value is for delayed message sending.
     * It is utilized to delay messages sending to a specific time in the future. Message enqueuing
     * time does not mean that the message will be sent at the same time. It will get enqueued,
     * but the actual sending time depends on the queue's workload and its state.
     */
    scheduledEnqueueTimeUtc?: Date;
    /**
     * @property {{ [key: string]: any }} [userProperties] The application specific properties which can be
     * used for custom message metadata.
     */
    userProperties?: {
        [key: string]: any;
    };
}

/**
 * Describes the message to be sent to ServiceBus.
 */
export declare module SendableMessageInfo {
    /**
     * @ignore
     */
    export function validate(msg: SendableMessageInfo): void;
    /**
     * @ignore
     * Converts given SendableMessageInfo to AmqpMessage
     */
    export function toAmqpMessage(msg: SendableMessageInfo): AmqpMessage;
    /**
     * @ignore
     * Converts given AmqpMessage to SendableMessageInfo
     */
    export function fromAmqpMessage(msg: AmqpMessage): SendableMessageInfo;
}

/**
 * The Sender class can be used to send messages, schedule messages to be sent at a later time
 * and cancel such scheduled messages.
 * Use the `getSender` function on the QueueClient or TopicClient to instantiate a Sender.
 * The Sender class is an abstraction over the underlying AMQP sender link.
 * @class Sender
 */
export declare class Sender {
    /**
     * @property {ClientEntityContext} _context Describes the amqp connection context for the Client.
     */
    private _context;
    private _isClosed;
    /**
     * @property {boolean} [isClosed] Denotes if close() was called on this sender.
     * @readonly
     */
    readonly isClosed: boolean;
    /**
     * Sends the given message after creating an AMQP Sender link if it doesnt already exists.
     *
     * To send a message to a `session` and/or `partition` enabled Queue/Topic, set the `sessionId`
     * and/or `partitionKey` properties respectively on the message.
     *
     * @param message - Message to send.
     * @returns Promise<void>
     */
    send(message: SendableMessageInfo): Promise<void>;
    /**
     * Sends the given messages in a batch i.e. in a single AMQP message after creating an AMQP Sender
     * link if it doesnt already exists.
     *
     * To send messages to a `session` and/or `partition` enabled Queue/Topic, set the `sessionId`
     * and/or `partitionKey` properties respectively on the messages. When doing so, all
     * messages in the batch should have the same `sessionId` (if using sessions) and the same
     * `parititionKey` (if using paritions).
     *
     * @param messages - An array of SendableMessageInfo objects to be sent in a Batch message.
     * @return Promise<void>
     */
    sendBatch(messages: SendableMessageInfo[]): Promise<void>;
    /**
     * Schedules given message to appear on Service Bus Queue/Subscription at a later time.
     *
     * @param scheduledEnqueueTimeUtc - The UTC time at which the message should be enqueued.
     * @param message - The message that needs to be scheduled.
     * @returns Promise<Long> - The sequence number of the message that was scheduled.
     * You will need the sequence number if you intend to cancel the scheduling of the message.
     * Save the `Long` type as-is in your application without converting to number. Since JavaScript
     * only supports 53 bit numbers, converting the `Long` to number will cause loss in precision.
     */
    scheduleMessage(scheduledEnqueueTimeUtc: Date, message: SendableMessageInfo): Promise<Long>;
    /**
     * Schedules given messages to appear on Service Bus Queue/Subscription at a later time.
     *
     * @param scheduledEnqueueTimeUtc - The UTC time at which the messages should be enqueued.
     * @param messages - Array of Messages that need to be scheduled.
     * @returns Promise<Long[]> - The sequence numbers of messages that were scheduled.
     * You will need the sequence number if you intend to cancel the scheduling of the messages.
     * Save the `Long` type as-is in your application without converting to number. Since JavaScript
     * only supports 53 bit numbers, converting the `Long` to number will cause loss in precision.
     */
    scheduleMessages(scheduledEnqueueTimeUtc: Date, messages: SendableMessageInfo[]): Promise<Long[]>;
    /**
     * Cancels a message that was scheduled to appear on a ServiceBus Queue/Subscription.
     * @param sequenceNumber - The sequence number of the message to be cancelled.
     * @returns Promise<void>
     */
    cancelScheduledMessage(sequenceNumber: Long): Promise<void>;
    /**
     * Cancels an array of messages that were scheduled to appear on a ServiceBus Queue/Subscription.
     * @param sequenceNumbers - An Array of sequence numbers of the message to be cancelled.
     * @returns Promise<void>
     */
    cancelScheduledMessages(sequenceNumbers: Long[]): Promise<void>;
    /**
     * Closes the underlying AMQP sender link.
     * Once closed, the sender cannot be used for any further operations.
     * Use the `getSender` function on the QueueClient or TopicClient to instantiate a new Sender
     *
     * @returns {Promise<void>}
     */
    close(): Promise<void>;
    private throwIfSenderOrConnectionClosed;
}

/**
 * Describes the message received from ServiceBus.
 * @class ServiceBusMessage
 */
export declare class ServiceBusMessage implements ReceivedMessage {
    /**
     * @property {any} body - The message body that needs to be sent or is received.
     */
    body: any;
    /**
     * @property {{ [key: string]: any }} [userProperties] The application specific properties.
     */
    userProperties?: {
        [key: string]: any;
    };
    /**
     * @property {string | number | Buffer} [messageId] The message identifier is an
     * application-defined value that uniquely identifies the message and its payload. The identifier
     * is a free-form string and can reflect a GUID or an identifier derived from the application
     * context. If enabled, the
     * {@link https://docs.microsoft.com/azure/service-bus-messaging/duplicate-detection duplicate detection}
     * identifies and removes second and further submissions of messages with the same MessageId.
     */
    messageId?: string | number | Buffer;
    /**
     * @property {string} [contentType] The content type of the message. Optionally describes
     * the payload of the message, with a descriptor following the format of RFC2045, Section 5, for
     * example "application/json".
     */
    contentType?: string;
    /**
     * @property {string | number | Buffer} [correlationId] The correlation identifier that allows an
     * application to specify a context for the message for the purposes of correlation, for example
     * reflecting the MessageId of a message that is being replied to.
     * See {@link https://docs.microsoft.com/azure/service-bus-messaging/service-bus-messages-payloads?#message-routing-and-correlation Message Routing and Correlation}.
     */
    correlationId?: string | number | Buffer;
    /**
     * @property {string} [partitionKey] The partition key for sending a message to a
     * partitioned entity. Maximum length is 128 characters. For {@link https://docs.microsoft.com/azure/service-bus-messaging/service-bus-partitioning partitioned entities},
     * etting this value enables assigning related messages to the same internal partition,
     * so that submission sequence order is correctly recorded. The partition is chosen by a hash
     * function over this value and cannot be chosen directly. For session-aware entities,
     * the `sessionId` property overrides this value.
     */
    partitionKey?: string;
    /**
     * @property {string} [viaPartitionKey] The partition key for sending a message into an entity
     * via a partitioned transfer queue. Maximum length is 128 characters. If a message is sent via a
     * transfer queue in the scope of a transaction, this value selects the transfer queue partition:
     * This is functionally equivalent to `partitionKey` property and ensures that messages are kept
     * together and in order as they are transferred.
     * See {@link https://docs.microsoft.com/azure/service-bus-messaging/service-bus-transactions#transfers-and-send-via Transfers and Send Via}.
     */
    viaPartitionKey?: string;
    /**
     * @property {string} [sessionId] The session identifier for a session-aware entity. Maximum
     * length is 128 characters. For session-aware entities, this application-defined value specifies
     * the session affiliation of the message. Messages with the same session identifier are subject
     * to summary locking and enable exact in-order processing and demultiplexing. For
     * session-unaware entities, this value is ignored.
     * {@link https://docs.microsoft.com/azure/service-bus-messaging/message-sessions Message Sessions}.
     */
    sessionId?: string;
    /**
     * @property {string} [replyToSessionId] The session identifier augmenting the `replyTo` address.
     * Maximum length is 128 characters. This value augments the ReplyTo information and specifies
     * which SessionId should be set for the reply when sent to the reply entity.
     * See {@link https://docs.microsoft.com/azure/service-bus-messaging/service-bus-messages-payloads?#message-routing-and-correlation Message Routing and Correlation}.
     */
    replyToSessionId?: string;
    /**
     * @property {number} [timeToLive] The message’s time to live value. This value is the relative
     * duration after which the message expires, starting from the instant the message has been
     * accepted and stored by the broker, as captured in `enqueuedTimeUtc`. When not set explicitly,
     * the assumed value is the DefaultTimeToLive for the respective queue or topic. A message-level
     * `timeToLive` value cannot be longer than the entity's DefaultTimeToLive setting and it is
     * silently adjusted if it does. See
     * {@link https://docs.microsoft.com/azure/service-bus-messaging/message-expiration Expiration}.
     */
    timeToLive?: number;
    /**
     * @property {string} [label] The application specific label. This property enables the
     * application to indicate the purpose of the message to the receiver in a standardized. fashion,
     * similar to an email subject line. The mapped AMQP property is "subject".
     */
    label?: string;
    /**
     * @property {string} [to] The "to" address. This property is reserved for future use in routing
     * scenarios and presently ignored by the broker itself. Applications can use this value in
     * rule-driven {@link https://docs.microsoft.com/azure/service-bus-messaging/service-bus-auto-forwarding auto-forward chaining}
     * scenarios to indicate the intended logical destination of the message.
     */
    to?: string;
    /**
     * @property {string} [replyTo] The address of an entity to send replies to. This optional and
     * application-defined value is a standard way to express a reply path to the receiver of the
     * message. When a sender expects a reply, it sets the value to the absolute or relative path of
     * the queue or topic it expects the reply to be sent to. See
     * {@link https://docs.microsoft.com/azure/service-bus-messaging/service-bus-messages-payloads?#message-routing-and-correlation Message Routing and Correlation}.
     */
    replyTo?: string;
    /**
     * @property {Date} [scheduledEnqueueTimeUtc] The date and time in UTC at which the message will
     * be enqueued. This property returns the time in UTC; when setting the property, the
     * supplied DateTime value must also be in UTC. This value is for delayed message sending.
     * It is utilized to delay messages sending to a specific time in the future. Message enqueuing
     * time does not mean that the message will be sent at the same time. It will get enqueued,
     * but the actual sending time depends on the queue's workload and its state.
     */
    scheduledEnqueueTimeUtc?: Date;
    /**
     * @property {string} [lockToken] The lock token for the current message. The lock token is a
     * reference to the lock that is being held by the broker in `ReceiveMode.PeekLock` mode. Locks
     * are used to explicitly settle messages as explained in the {@link https://docs.microsoft.com/azure/service-bus-messaging/message-transfers-locks-settlement product documentation in more detail}
     * The token can also be used to pin the lock permanently through the {@link https://docs.microsoft.com/azure/service-bus-messaging/message-deferral Deferral API}
     * and, with that, take the message out of the regular delivery state flow.
     * @readonly
     */
    readonly lockToken?: string;
    /**
     * @property {number} [deliveryCount] The current delivery count. The value start from 1. Number
     * of deliveries that have been attempted for this message. The count is incremented when a
     * message lock expires, or the message is explicitly abandoned by the receiver.
     * @readonly
     */
    readonly deliveryCount?: number;
    /**
     * @property {Date} [enqueuedTimeUtc] The date and time of the sent message in UTC. The UTC
     * instant at which the message has been accepted and stored in the entity. This value can be
     * used as an authoritative and neutral arrival time indicator when the receiver does not
     * want to trust the sender's clock.
     * @readonly
     */
    readonly enqueuedTimeUtc?: Date;
    /**
     * @property {Date} [expiresAtUtc] The date and time in UTC at which the message is set to expire.
     * The UTC instant at which the message is marked for removal and no longer available for
     * retrieval from the entity due to expiration. Expiry is controlled by the `timeToLive` property
     * and this property is computed from `enqueuedTimeUtc` + `timeToLive`.
     */
    readonly expiresAtUtc?: Date;
    /**
     * @property {Date} [lockedUntilUtc] The date and time in UTC until which the message will be
     * locked in the queue/subscription. For messages retrieved under a lock (peek-lock receive mode,
     * not pre-settled) this property reflects the UTC instant until which the message is held
     * locked in the queue/subscription. When the lock expires, the `deliveryCount` is incremented
     * and the message is again available for retrieval.
     */
    lockedUntilUtc?: Date;
    /**
     * @property {number} [enqueuedSequenceNumber] The original sequence number of the message. For
     * messages that have been auto-forwarded, this property reflects the sequence number that had
     * first been assigned to the message at its original point of submission.
     * @readonly
     */
    readonly enqueuedSequenceNumber?: number;
    /**
     * @property {number} [sequenceNumber] The unique number assigned to a message by Service Bus.
     * The sequence number is a unique 64-bit integer assigned to a message as it is accepted
     * and stored by the broker and functions as its true identifier. For partitioned entities,
     * the topmost 16 bits reflect the partition identifier. Sequence numbers monotonically increase.
     * They roll over to 0 when the 48-64 bit range is exhausted.
     * @readonly
     */
    readonly sequenceNumber?: Long;
    /**
     * @property {string} [deadLetterSource] The name of the queue or subscription that this message
     * was enqueued on, before it was deadlettered. Only set in messages that have been dead-lettered
     * and subsequently auto-forwarded from the dead-letter queue to another entity. Indicates the
     * entity in which the message was dead-lettered.
     * @readonly
     */
    readonly deadLetterSource?: string;
    /**
     * The associated delivery of the received message.
     */
    readonly delivery: Delivery;
    /**
     * @property {AmqpMessage} _amqpMessage The underlying raw amqp message.
     * @readonly
     */
    readonly _amqpMessage: AmqpMessage;
    /**
     * @property {ClientEntityContext} _context The client entity context.
     * @readonly
     */
    private readonly _context;
    /**
     * Completes a message using it's lock token. This will delete the message from ServiceBus.
     * @returns Promise<void>.
     */
    complete(): Promise<void>;
    /**
     * Abandons a message using it's lock token. This will make the message available again in
     * Service Bus for processing.
     * @param {{ [key: string]: any }} propertiesToModify The properties of the message to modify while
     * abandoning the message. Abandoning a message will increase the delivery count on the message.
     * @return Promise<void>.
     */
    abandon(propertiesToModify?: {
        [key: string]: any;
    }): Promise<void>;
    /**
     * Defers the processing of the message. In order to receive this message again in the future,
     * you will need to save the `sequenceNumber` and receive it
     * using `receiveDeferredMessage(sequenceNumber)`. Deferring messages does not impact message's
     * expiration, meaning that deferred messages can still expire.
     * @param [propertiesToModify] The properties of the message to modify while
     * deferring the message
     * @returns Promise<void>
     */
    defer(propertiesToModify?: {
        [key: string]: any;
    }): Promise<void>;
    /**
     * Moves the message to the deadletter sub-queue.
     * @param [options] The DeadLetter options that can be provided while
     * rejecting the message.
     * @returns Promise<void>
     */
    deadLetter(options?: DeadLetterOptions): Promise<void>;
    /**
     * Creates a clone of the current message to allow it to be re-sent to the queue
     * @returns ServiceBusMessage
     */
    clone(): SendableMessageInfo;
}

/**
 * Describes the options to control receiving of messages in streaming mode.
 */
export declare interface SessionMessageHandlerOptions {
    /**
     * @property {boolean} [autoComplete] Indicates whether the message (if not settled by the user)
     * should be automatically completed after the user provided onMessage handler has been executed.
     * Completing a message, removes it from the Queue/Subscription.
     * - **Default**: `true`.
     */
    autoComplete?: boolean;
    /**
     * @property {number} [newMessageWaitTimeoutInSeconds] The maximum amount of time the receiver
     * will wait to receive a new message. If no new message is received in this time, then the
     * receiver will be closed.
     *
     * Caution: When setting this value, take into account the time taken to process messages. Once
     * the receiver is closed, operations like complete()/abandon()/defer()/deadletter() cannot be
     * invoked on messages.
     *
     * If this option is not provided, then receiver link will stay open until manually closed.
     */
    newMessageWaitTimeoutInSeconds?: number;
    /**
     * @property {number} [maxConcurrentCalls] The maximum number of concurrent calls that the library
     * can make to the user's message handler. Once this limit has been reached, more messages will
     * not be received until atleast one of the calls to the user's message handler has completed.
     * - **Default**: `1`.
     */
    maxConcurrentCalls?: number;
}

/**
 * The SessionReceiver class can be used to receive messages from a session enabled Queue or
 * Subscription in a batch or by registering handlers.
 * Use the `getSessionReceiver` function on the QueueClient or SubscriptionClient to instantiate a
 * SessionReceiver.
 * The SessionReceiver class is an abstraction over the underlying AMQP receiver link.
 * @class SessionReceiver
 */
export declare class SessionReceiver {
    /**
     * @property {ClientEntityContext} _context Describes the amqp connection context for the QueueClient.
     */
    private _context;
    private _receiveMode;
    private _sessionId;
    private _messageSession;
    /**
     * @property {boolean} [isClosed] Denotes if close() was called on this receiver.
     * @readonly
     */
    readonly isClosed: boolean;
    /**
     * @property {string} [sessionId] The sessionId for the message session.
     * @readonly
     */
    readonly sessionId: string;
    /**
     * @property {Date} [sessionLockedUntilUtc] The time in UTC until which the session is locked.
     * @readonly
     */
    readonly sessionLockedUntilUtc: Date | undefined;
    /**
     * Renews the lock for the Session.
     * @returns Promise<Date> New lock token expiry date and time in UTC format.
     */
    renewLock(): Promise<Date>;
    /**
     * Sets the state of the MessageSession.
     * @param state The state that needs to be set.
     */
    setState(state: any): Promise<void>;
    /**
     * Gets the state of the MessageSession.
     * @returns Promise<any> The state of that session
     */
    getState(): Promise<any>;
    /**
     * Fetches the next batch of active messages (including deferred but not deadlettered messages) in
     * the current session. The first call to `peek()` fetches the first active message. Each
     * subsequent call fetches the subsequent message.
     *
     * Unlike a `received` message, `peeked` message is a read-only version of the message.
     * It cannot be `Completed/Abandoned/Deferred/Deadlettered`. The lock on it cannot be renewed.
     *
     * @param messageCount The number of messages to retrieve. Default value `1`.
     * @returns Promise<ReceivedMessageInfo[]>
     */
    peek(messageCount?: number): Promise<ReceivedMessageInfo[]>;
    /**
     * Peeks the desired number of active messages (including deferred but not deadlettered messages)
     * from the specified sequence number in the current session.
     *
     * Unlike a `received` message, `peeked` message is a read-only version of the message.
     * It cannot be `Completed/Abandoned/Deferred/Deadlettered`. The lock on it cannot be renewed.
     *
     * @param fromSequenceNumber The sequence number from where to read the message.
     * @param [messageCount] The number of messages to retrieve. Default value `1`.
     * @returns Promise<ReceivedSBMessage[]>
     */
    peekBySequenceNumber(fromSequenceNumber: Long, messageCount?: number): Promise<ReceivedMessageInfo[]>;
    /**
     * Receives a deferred message identified by the given `sequenceNumber`.
     * @param sequenceNumber The sequence number of the message that will be received.
     * @returns Promise<ServiceBusMessage | undefined>
     * - Returns `Message` identified by sequence number.
     * - Returns `undefined` if no such message is found.
     * - Throws an error if the message has not been deferred.
     */
    receiveDeferredMessage(sequenceNumber: Long): Promise<ServiceBusMessage | undefined>;
    /**
     * Receives a list of deferred messages identified by given `sequenceNumbers`.
     * @param sequenceNumbers A list containing the sequence numbers to receive.
     * @returns Promise<ServiceBusMessage[]>
     * - Returns a list of messages identified by the given sequenceNumbers.
     * - Returns an empty list if no messages are found.
     * - Throws an error if the messages have not been deferred.
     */
    receiveDeferredMessages(sequenceNumbers: Long[]): Promise<ServiceBusMessage[]>;
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
    receiveBatch(maxMessageCount: number, maxWaitTimeInSeconds?: number): Promise<ServiceBusMessage[]>;
    /**
     * Registers handlers to deal with the incoming stream of messages over an AMQP receiver link
     * from a Queue/Subscription.
     * To stop receiving messages, call `close()` on the SessionReceiver or set the property
     * `newMessageWaitTimeoutInSeconds` in the options to provide a timeout.
     *
     * @param onMessage - Handler for processing each incoming message.
     * @param onError - Handler for any error that occurs while receiving or processing messages.
     * @param options - Options to control whether messages should be automatically completed
     * or if the lock on the session should be automatically renewed. You can control the
     * maximum number of messages that should be concurrently processed. You can
     * also provide a timeout in seconds to denote the amount of time to wait for a new message
     * before closing the receiver.
     *
     * @returns void
     */
    receive(onMessage: OnMessage, onError: OnError, options?: SessionMessageHandlerOptions): void;
    /**
     * Closes the underlying AMQP receiver link.
     * Once closed, the receiver cannot be used for any further operations.
     * Use the `getSessionReceiver` function on the QueueClient or SubscriptionClient to instantiate
     * a new Receiver
     *
     * @returns {Promise<void>}
     */
    close(): Promise<void>;
    /**
     * Indicates whether the receiver is currently receiving messages or not.
     * When this return true, a new receive() or receiveBatch() call cannot be made on the receiver.
     */
    isReceivingMessages(): boolean;
    private throwIfReceiverOrConnectionClosed;
}

/**
 * Describes the options for creating a SessionReceiver.
 */
export declare interface SessionReceiverOptions {
    /**
     * @property {string} [sessionId] The sessionId for the message session. If none is provided,
     * the SessionReceiver gets created for a randomly chosen session from available sessions
     */
    sessionId?: string;
    /**
     * @property {number} [receiveMode] The mode in which messages should be received.
     * Possible values are `ReceiveMode.peekLock` (default) and `ReceiveMode.receiveAndDelete`
     */
    receiveMode?: ReceiveMode;
    /**
     * @property {number} [maxSessionAutoRenewLockDurationInSeconds] The maximum duration in seconds
     * until which, the lock on the session will be renewed automatically.
     * - **Default**: `300` seconds (5 minutes).
     * - **To disable autolock renewal**, set `maxSessionAutoRenewLockDurationInSeconds` to `0`.
     */
    maxSessionAutoRenewLockDurationInSeconds?: number;
}

/**
 * Describes the client that allows interacting with a Service Bus Subscription.
 * Use the `createSubscriptionClient` function on the Namespace object to instantiate a
 * SubscriptionClient
 * @class SubscriptionClient
 */
export declare class SubscriptionClient implements Client {
    /**
     * @property {string}  The topic name.
     */
    readonly topicName: string;
    /**
     * @property {string}  The subscription name.
     */
    readonly subscriptionName: string;
    /**
     * @property {string} defaultRuleName Name of the default rule on the subscription.
     */
    readonly defaultRuleName: string;
    /**
     * @property {string} The entitypath for the Service Bus Subscription for which this client is created.
     */
    readonly entityPath: string;
    /**
     * @property {string} A unique identifier for the client.
     */
    readonly id: string;
    /**
     * @property {boolean} _isClosed Denotes if close() was called on this client.
     */
    private _isClosed;
    /**
     * @property {ClientEntityContext} _context Describes the amqp connection context for the QueueClient.
     */
    private _context;
    private _currentReceiver;
    /**
     * Closes the AMQP link for the receivers created by this client.
     * Once closed, neither the SubscriptionClient nor its recievers can be used for any
     * further operations. Use the `createSubscriptionClient` function on the Namespace object to
     * instantiate a new SubscriptionClient.
     *
     * @returns {Promise<void>}
     */
    close(): Promise<void>;
    /**
     * Will reconnect the subscritpionClient and its receiver links.
     * This is meant for the library to use to resume receiving when retryable errors are seen.
     * This is not meant for the consumer of this library to use.
     * @ignore
     * @param error Error if any due to which we are attempting to reconnect
     */
    detached(error?: AmqpError | Error): Promise<void>;
    /**
     * Gets a Receiver to be used for receiving messages in batches or by registering handlers.
     *
     * @param options Options for creating the receiver.
     */
    getReceiver(options?: MessageReceiverOptions): Receiver;
    /**
     * Fetches the next batch of active messages (including deferred but not deadlettered messages).
     * The first call to `peek()` fetches the first active message. Each subsequent call fetches the
     * subsequent message.
     *
     * Unlike a `received` message, `peeked` message is a read-only version of the message.
     * It cannot be `Completed/Abandoned/Deferred/Deadlettered`. The lock on it cannot be renewed.
     *
     * @param [messageCount] The number of messages to retrieve. Default value `1`.
     * @returns Promise<ReceivedSBMessage[]>
     */
    peek(messageCount?: number): Promise<ReceivedMessageInfo[]>;
    /**
     * Peeks the desired number of active messages (including deferred but not deadlettered messages)
     * from the specified sequence number.
     *
     * Unlike a `received` message, `peeked` message is a read-only version of the message.
     * It cannot be `Completed/Abandoned/Deferred/Deadlettered`. The lock on it cannot be renewed.
     *
     * @param fromSequenceNumber The sequence number from where to read the message.
     * @param [messageCount] The number of messages to retrieve. Default value `1`.
     * @returns Promise<ReceivedSBMessage[]>
     */
    peekBySequenceNumber(fromSequenceNumber: Long, messageCount?: number): Promise<ReceivedMessageInfo[]>;
    /**
     * Get all the rules associated with the subscription
     */
    getRules(): Promise<RuleDescription[]>;
    /**
     * Removes the rule on the subscription identified by the given rule name.
     * @param ruleName
     */
    removeRule(ruleName: string): Promise<void>;
    /**
     * Adds a rule on the subscription as defined by the given rule name, filter and action.
     * Remember to remove the default true filter on the subscription before adding a rule,
     * otherwise, the added rule will have no affect as the true filter will always result in
     * the subscription receiving all messages.
     * @param ruleName Name of the rule
     * @param filter A Boolean, SQL expression or a Correlation filter. For SQL Filter syntax, see
     * {@link https://docs.microsoft.com/en-us/azure/service-bus-messaging/service-bus-messaging-sql-filter SQLFilter syntax}.
     * @param sqlRuleActionExpression Action to perform if the message satisfies the filtering expression. For SQL Rule Action syntax,
     * see {@link https://docs.microsoft.com/en-us/azure/service-bus-messaging/service-bus-messaging-sql-rule-action SQLRuleAction syntax}.
     */
    addRule(ruleName: string, filter: boolean | string | CorrelationFilter, sqlRuleActionExpression?: string): Promise<void>;
    /**
     * Gets a SessionReceiver for receiving messages in batches or by registering handlers from a
     * session enabled Subscription. When no sessionId is given, a random session among the available
     * sessions is used.
     *
     * @param options Options to provide sessionId and ReceiveMode for receiving messages from the
     * session enabled Servicebus Subscription.
     *
     * @returns SessionReceiver An instance of a SessionReceiver to receive messages from the session.
     */
    getSessionReceiver(options?: SessionReceiverOptions): Promise<SessionReceiver>;
    /**
     * Throws error if this subscriptionClient has been closed
     * @param client
     */
    private throwErrorIfClientOrConnectionClosed;
}

/**
 * Describes the client that allows interacting with a Service Bus Topic.
 * Use the `createTopicClient` function on the Namespace object to instantiate a TopicClient
 * @class TopicClient
 */
export declare class TopicClient implements Client {
    /**
     * @property {string} The entitypath for the Service Bus Topic for which this client is created.
     */
    readonly entityPath: string;
    /**
     * @property {string} A unique identifier for the client.
     */
    readonly id: string;
    /**
     * @property {boolean} _isClosed Denotes if close() was called on this client.
     */
    private _isClosed;
    /**
     * @property {ClientEntityContext} _context Describes the amqp connection context for the QueueClient.
     */
    private _context;
    private _currentSender;
    /**
     * Closes the AMQP link for the sender created by this client.
     * Once closed, neither the TopicClient nor its senders can be used for any
     * further operations. Use the `createTopicClient` function on the Namespace object to
     * instantiate a new TopicClient
     *
     * @returns {Promise<void>}
     */
    close(): Promise<void>;
    /**
     * Will reconnect the topicClient and its sender links.
     * This is meant for the library to use to resume sending when retryable errors are seen.
     * This is not meant for the consumer of this library to use.
     * @ignore
     * @param error Error if any due to which we are attempting to reconnect
     */
    detached(error?: AmqpError | Error): Promise<void>;
    /**
     * Gets a Sender to be used for sending messages, scheduling messages to be sent at a later time
     * and cancelling such scheduled messages.
     *
     * If the Topic has session enabled Subscriptions, then messages sent without the `sessionId`
     * property will go to the dead letter queue of such subscriptions.
     */
    getSender(): Sender;
    /**
     * Throws error if given client has been closed
     * @param client
     */
    private throwErrorIfClientOrConnectionClosed;
}
