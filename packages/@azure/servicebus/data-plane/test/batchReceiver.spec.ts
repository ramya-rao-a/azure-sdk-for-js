// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

import chai from "chai";
const should = chai.should();
import chaiAsPromised from "chai-as-promised";
import dotenv from "dotenv";
dotenv.config();
chai.use(chaiAsPromised);
import {
  Namespace,
  QueueClient,
  TopicClient,
  SubscriptionClient,
  MessageSession,
  ServiceBusMessage,
  delay,
  SendableMessageInfo
} from "../lib";

import {
  testSimpleMessages,
  testMessagesWithSessions,
  testSessionId,
  getSenderClient,
  getReceiverClient,
  ClientType
} from "./testUtils";

async function testPeekMsgsLength(
  client: QueueClient | SubscriptionClient | MessageSession,
  expectedPeekLength: number
): Promise<void> {
  const peekedMsgs = await client.peek(expectedPeekLength + 1);
  should.equal(
    peekedMsgs.length,
    expectedPeekLength,
    "Unexpected number of msgs found when peeking"
  );
}

let ns: Namespace;

let errorWasThrown: boolean;

let senderClient: QueueClient | TopicClient;
let receiverClient: QueueClient | SubscriptionClient;
let deadLetterClient: QueueClient | SubscriptionClient;
let messageSession: MessageSession;

async function beforeEachTest(
  senderType: ClientType,
  receiverType: ClientType,
  useSessions?: boolean
): Promise<void> {
  // The tests in this file expect the env variables to contain the connection string and
  // the names of empty queue/topic/subscription that are to be tested

  if (!process.env.SERVICEBUS_CONNECTION_STRING) {
    throw new Error(
      "Define SERVICEBUS_CONNECTION_STRING in your environment before running integration tests."
    );
  }

  ns = Namespace.createFromConnectionString(process.env.SERVICEBUS_CONNECTION_STRING);

  senderClient = getSenderClient(ns, senderType);
  receiverClient = getReceiverClient(ns, receiverType);

  if (receiverClient instanceof QueueClient) {
    deadLetterClient = ns.createQueueClient(
      Namespace.getDeadLetterQueuePathForQueue(receiverClient.name)
    );
  }

  if (receiverClient instanceof SubscriptionClient) {
    deadLetterClient = ns.createSubscriptionClient(
      Namespace.getDeadLetterSubcriptionPathForSubcription(
        senderClient.name,
        receiverClient.subscriptionName
      ),
      receiverClient.subscriptionName
    );
  }

  if (useSessions) {
    messageSession = await receiverClient.acceptSession({
      sessionId: testSessionId
    });
  }

  const peekedMsgs = await receiverClient.peek();
  const receiverEntityType = receiverClient instanceof QueueClient ? "queue" : "topic";
  if (peekedMsgs.length) {
    throw new Error(`Please use an empty ${receiverEntityType} for integration testing`);
  }
}

async function afterEachTest(): Promise<void> {
  await ns.close();
}
describe("Complete/Abandon/Defer/Deadletter normal message", function(): void {
  afterEach(async () => {
    await afterEachTest();
  });

  async function sendReceiveMsg(
    senderClient: QueueClient | TopicClient,
    receiverClient: QueueClient | SubscriptionClient | MessageSession,
    testMessages: SendableMessageInfo[]
  ): Promise<ServiceBusMessage> {
    await senderClient.send(testMessages[0]);
    const msgs = await receiverClient.receiveBatch(1);

    should.equal(Array.isArray(msgs), true);
    should.equal(msgs.length, 1);
    should.equal(msgs[0].body, testMessages[0].body);
    should.equal(msgs[0].messageId, testMessages[0].messageId);
    should.equal(msgs[0].deliveryCount, 0);

    return msgs[0];
  }

  async function completeMessages(
    receiverClient: QueueClient | SubscriptionClient | MessageSession,
    expectedDeliverCount: number,
    testMessages: SendableMessageInfo[]
  ): Promise<void> {
    const receivedMsgs = await receiverClient.receiveBatch(1);

    should.equal(receivedMsgs.length, 1);
    should.equal(receivedMsgs[0].deliveryCount, expectedDeliverCount);
    should.equal(receivedMsgs[0].messageId, testMessages[0].messageId);

    await receivedMsgs[0].complete();

    await testPeekMsgsLength(receiverClient, 0);
  }

  async function testComplete(
    senderClient: QueueClient | TopicClient,
    receiverClient: QueueClient | SubscriptionClient | MessageSession,
    useSessions?: boolean
  ): Promise<void> {
    const testMessages = useSessions ? testMessagesWithSessions : testSimpleMessages;
    const msg = await sendReceiveMsg(senderClient, receiverClient, testMessages);
    await msg.complete();

    await testPeekMsgsLength(receiverClient, 0);
  }

  it("Partitioned Queues: complete() removes message", async function(): Promise<void> {
    await beforeEachTest(ClientType.PartitionedQueue, ClientType.PartitionedQueue);
    await testComplete(senderClient, receiverClient);
  });

  it("Partitioned Topics and Subscription: complete() removes message", async function(): Promise<
    void
  > {
    await beforeEachTest(ClientType.PartitionedTopic, ClientType.PartitionedSubscription);
    await testComplete(senderClient, receiverClient);
  });

  it("Unpartitioned Queues: complete() removes message", async function(): Promise<void> {
    await beforeEachTest(ClientType.UnpartitionedQueue, ClientType.UnpartitionedQueue);
    await testComplete(senderClient, receiverClient);
  });

  it("Unpartitioned Topics and Subscription: complete() removes message", async function(): Promise<
    void
  > {
    await beforeEachTest(ClientType.UnpartitionedTopic, ClientType.UnpartitionedSubscription);
    await testComplete(senderClient, receiverClient);
  });

  it("Partitioned Queues with Sessions: complete() removes message", async function(): Promise<
    void
  > {
    await beforeEachTest(
      ClientType.PartitionedQueueWithSessions,
      ClientType.PartitionedQueueWithSessions,
      true
    );
    await testComplete(senderClient, receiverClient, true);
  });

  it("Partitioned Topics and Subscription with Sessions: complete() removes message", async function(): Promise<
    void
  > {
    await beforeEachTest(
      ClientType.PartitionedTopicWithSessions,
      ClientType.PartitionedSubscriptionWithSessions,
      true
    );
    await testComplete(senderClient, messageSession, true);
  });

  it("Unpartitioned Queues with Sessions: complete() removes message", async function(): Promise<
    void
  > {
    await beforeEachTest(
      ClientType.UnpartitionedQueueWithSessions,
      ClientType.UnpartitionedQueueWithSessions,
      true
    );
    await testComplete(senderClient, messageSession, true);
  });

  it("Unpartitioned Topics and Subscription with Sessions: complete() removes message", async function(): Promise<
    void
  > {
    await beforeEachTest(
      ClientType.UnpartitionedTopicWithSessions,
      ClientType.UnpartitionedSubscriptionWithSessions,
      true
    );
    await testComplete(senderClient, messageSession, true);
  });

  async function testAbandon(
    senderClient: QueueClient | TopicClient,
    receiverClient: QueueClient | SubscriptionClient | MessageSession,
    useSessions?: boolean
  ): Promise<void> {
    const testMessages = useSessions ? testMessagesWithSessions : testSimpleMessages;
    const msg = await sendReceiveMsg(senderClient, receiverClient, testMessages);
    await msg.abandon();

    await testPeekMsgsLength(receiverClient, 1);

    await completeMessages(receiverClient, 1, testMessages);
  }

  it("Partitioned Queues: abandon() retains message with incremented deliveryCount", async function(): Promise<
    void
  > {
    await beforeEachTest(ClientType.PartitionedQueue, ClientType.PartitionedQueue);
    await testAbandon(senderClient, receiverClient);
  });

  it("Partitioned Topics and Subscription: abandon() retains message with incremented deliveryCount", async function(): Promise<
    void
  > {
    await beforeEachTest(ClientType.PartitionedTopic, ClientType.PartitionedSubscription);
    await testAbandon(senderClient, receiverClient);
  });

  it("Unpartitioned Queues: abandon() retains message with incremented deliveryCount", async function(): Promise<
    void
  > {
    await beforeEachTest(ClientType.UnpartitionedQueue, ClientType.UnpartitionedQueue);
    await testAbandon(senderClient, receiverClient);
  });

  it("Unpartitioned Topics and Subscription: abandon() retains message with incremented deliveryCount", async function(): Promise<
    void
  > {
    await beforeEachTest(ClientType.UnpartitionedTopic, ClientType.UnpartitionedSubscription);
    await testAbandon(senderClient, receiverClient);
  });

  it("Partitioned Queues with Sessions: abandon() retains message with incremented deliveryCount", async function(): Promise<
    void
  > {
    await beforeEachTest(
      ClientType.PartitionedQueueWithSessions,
      ClientType.PartitionedQueueWithSessions,
      true
    );
    await testAbandon(senderClient, receiverClient, true);
  });

  it("Partitioned Topics and Subscription with Sessions: abandon() retains message with incremented deliveryCount", async function(): Promise<
    void
  > {
    await beforeEachTest(
      ClientType.PartitionedTopicWithSessions,
      ClientType.PartitionedSubscriptionWithSessions,
      true
    );
    await testAbandon(senderClient, receiverClient, true);
  });

  it("Unpartitioned Queues with Sessions: abandon() retains message with incremented deliveryCount", async function(): Promise<
    void
  > {
    await beforeEachTest(
      ClientType.UnpartitionedQueueWithSessions,
      ClientType.UnpartitionedQueueWithSessions,
      true
    );
    await testAbandon(senderClient, receiverClient, true);
  });

  it("Unpartitioned Topics and Subscription with Sessions: abandon() retains message with incremented deliveryCount", async function(): Promise<
    void
  > {
    await beforeEachTest(
      ClientType.UnpartitionedTopicWithSessions,
      ClientType.UnpartitionedSubscriptionWithSessions,
      true
    );
    await testAbandon(senderClient, receiverClient, true);
  });

  async function testDefer(
    senderClient: QueueClient | TopicClient,
    receiverClient: QueueClient | SubscriptionClient | MessageSession,
    useSessions?: boolean
  ): Promise<void> {
    const testMessages = useSessions ? testMessagesWithSessions : testSimpleMessages;
    const msg = await sendReceiveMsg(senderClient, receiverClient, testMessages);

    if (!msg.sequenceNumber) {
      throw "Sequence Number can not be null";
    }
    const sequenceNumber = msg.sequenceNumber;
    await msg.defer();

    const deferredMsgs = await receiverClient.receiveDeferredMessage(sequenceNumber);
    if (!deferredMsgs) {
      throw "No message received for sequence number";
    }
    should.equal(deferredMsgs.body, testMessages[0].body);
    should.equal(deferredMsgs.messageId, testMessages[0].messageId);
    should.equal(deferredMsgs.deliveryCount, 1);

    await deferredMsgs.complete();

    await testPeekMsgsLength(receiverClient, 0);
  }

  it("Partitioned Queues: defer() moves message to deferred queue", async function(): Promise<
    void
  > {
    await beforeEachTest(ClientType.PartitionedQueue, ClientType.PartitionedQueue);
    await testDefer(senderClient, receiverClient);
  });

  it("Partitioned Topics and Subscription: defer() moves message to deferred queue", async function(): Promise<
    void
  > {
    await beforeEachTest(ClientType.PartitionedTopic, ClientType.PartitionedSubscription);
    await testDefer(senderClient, receiverClient);
  });

  it("Partitioned Queues with Sessions: defer() moves message to deferred queue", async function(): Promise<
    void
  > {
<<<<<<< Updated upstream
    await testDefer(partitionedQueueSessionClient, partitionedQueueMessageSession, true);
=======
    await beforeEachTest(
      ClientType.PartitionedQueueWithSessions,
      ClientType.PartitionedQueueWithSessions,
      true
    );
    await testDefer(senderClient, receiverClient, true);
>>>>>>> Stashed changes
  });

  it("Partitioned Topics and Subscription with Sessions: defer() moves message to deferred queue", async function(): Promise<
    void
  > {
<<<<<<< Updated upstream
    await testDefer(partitionedTopicSessionClient, partitionedSubscriptionMessageSession, true);
=======
    await beforeEachTest(
      ClientType.PartitionedTopicWithSessions,
      ClientType.PartitionedSubscriptionWithSessions,
      true
    );
    await testDefer(senderClient, receiverClient, true);
>>>>>>> Stashed changes
  });

  // it("Unpartitioned Queues: defer() moves message to deferred queue", async function(): Promise<
  //   void
  // > {
  // await beforeEachTest(ClientType.UnpartitionedQueue, ClientType.UnpartitionedQueue);
  //   await testDefer(senderClient, receiverClient);
  // });

  // it("Unpartitioned Topics and Subscription: defer() moves message to deferred queue", async function(): Promise<
  //   void
  // > {
  // await beforeEachTest(ClientType.UnpartitionedTopic, ClientType.UnpartitionedSubscription);
  //   await testDefer(senderClient, receiverClient);
  // });

  // it("Unpartitioned Queues with Sessions: defer() moves message to deferred queue", async function(): Promise<
  //   void
  // > {
  // await beforeEachTest(
  //   ClientType.UnpartitionedQueueWithSessions,
  //   ClientType.UnpartitionedQueueWithSessions,
  //   true
  // );
  //   await testDefer(senderClient, unpartitionedQueueMessageSession, true);
  // });

  // it("Unpartitioned Topics and Subscription with Sessions: defer() moves message to deferred queue", async function(): Promise<
  //   void
  // > {
  // await beforeEachTest(
  //   ClientType.UnpartitionedTopicWithSessions,
  //   ClientType.UnpartitionedSubscriptionWithSessions,
  //   true
  // );
  //   await testDefer(senderClient, unpartitionedSubscriptionMessageSession, true);
  // });

  async function testDeadletter(
    senderClient: QueueClient | TopicClient,
    receiverClient: QueueClient | SubscriptionClient | MessageSession,
    deadLetterClient: QueueClient | SubscriptionClient,
    useSessions?: boolean
  ): Promise<void> {
    const testMessages = useSessions ? testMessagesWithSessions : testSimpleMessages;
    const msg = await sendReceiveMsg(senderClient, receiverClient, testMessages);
    await msg.deadLetter();

    await testPeekMsgsLength(receiverClient, 0);

    await completeMessages(deadLetterClient, 0, testMessages);
  }

  it("Partitioned Queues: deadLetter() moves message to deadletter queue", async function(): Promise<
    void
  > {
    await beforeEachTest(ClientType.PartitionedQueue, ClientType.PartitionedQueue);
    await testDeadletter(senderClient, receiverClient, deadLetterClient);
  });

  it("Partitioned Topics and Subscription: deadLetter() moves message to deadletter queue", async function(): Promise<
    void
  > {
    await beforeEachTest(ClientType.PartitionedTopic, ClientType.PartitionedSubscription);
    await testDeadletter(senderClient, receiverClient, deadLetterClient);
  });

  it("Unpartitioned Queues: deadLetter() moves message to deadletter queue", async function(): Promise<
    void
  > {
    await beforeEachTest(ClientType.UnpartitionedQueue, ClientType.UnpartitionedQueue);
    await testDeadletter(senderClient, receiverClient, deadLetterClient);
  });

  it("Unpartitioned Topics and Subscription: deadLetter() moves message to deadletter queue", async function(): Promise<
    void
  > {
    await beforeEachTest(ClientType.UnpartitionedTopic, ClientType.UnpartitionedSubscription);
    await testDeadletter(senderClient, receiverClient, deadLetterClient);
  });

  it("Partitioned Queues with Sessions: deadLetter() moves message to deadletter queue", async function(): Promise<
    void
  > {
    await beforeEachTest(
      ClientType.PartitionedQueueWithSessions,
      ClientType.PartitionedQueueWithSessions,
      true
    );
    await testDeadletter(senderClient, messageSession, deadLetterClient, true);
  });

  it("Partitioned Topics and Subscription with Sessions: deadLetter() moves message to deadletter queue", async function(): Promise<
    void
  > {
    await beforeEachTest(
      ClientType.PartitionedTopicWithSessions,
      ClientType.PartitionedSubscriptionWithSessions,
      true
    );
    await testDeadletter(senderClient, messageSession, deadLetterClient, true);
  });

  it("Unpartitioned Queues with Sessions: deadLetter() moves message to deadletter queue", async function(): Promise<
    void
  > {
    await beforeEachTest(
      ClientType.UnpartitionedQueueWithSessions,
      ClientType.UnpartitionedQueueWithSessions,
      true
    );
    await testDeadletter(senderClient, messageSession, deadLetterClient, true);
  });

  it("Unpartitioned Topics and Subscription with Sessions: deadLetter() moves message to deadletter queue", async function(): Promise<
    void
  > {
    await beforeEachTest(
      ClientType.UnpartitionedTopicWithSessions,
      ClientType.UnpartitionedSubscriptionWithSessions,
      true
    );
    await testDeadletter(senderClient, messageSession, deadLetterClient, true);
  });
});

describe("Abandon/Defer/Deadletter deadlettered message", function(): void {
  afterEach(async () => {
    await afterEachTest();
  });

  async function deadLetterMessage(
    senderClient: QueueClient | TopicClient,
    receiverClient: QueueClient | SubscriptionClient,
    deadletterClient: QueueClient | SubscriptionClient
  ): Promise<ServiceBusMessage> {
    await senderClient.send(testSimpleMessages[0]);
    const receivedMsgs = await receiverClient.receiveBatch(1);

    should.equal(receivedMsgs.length, 1);
    should.equal(receivedMsgs[0].body, testSimpleMessages[0].body);
    should.equal(receivedMsgs[0].messageId, testSimpleMessages[0].messageId);
    should.equal(receivedMsgs[0].deliveryCount, 0);

    await receivedMsgs[0].deadLetter();

    await testPeekMsgsLength(receiverClient, 0);

    const deadLetterMsgs = await deadletterClient.receiveBatch(1);

    should.equal(deadLetterMsgs.length, 1);
    should.equal(deadLetterMsgs[0].body, testSimpleMessages[0].body);
    should.equal(deadLetterMsgs[0].messageId, testSimpleMessages[0].messageId);
    should.equal(deadLetterMsgs[0].deliveryCount, 0);

    return deadLetterMsgs[0];
  }

  async function completeDeadLetteredMessage(
    deadletterClient: QueueClient | SubscriptionClient,
    expectedDeliverCount: number
  ): Promise<void> {
    const deadLetterMsgs = await deadletterClient.receiveBatch(1);

    should.equal(deadLetterMsgs.length, 1);
    should.equal(deadLetterMsgs[0].body, testSimpleMessages[0].body);
    should.equal(deadLetterMsgs[0].messageId, testSimpleMessages[0].messageId);
    should.equal(deadLetterMsgs[0].deliveryCount, expectedDeliverCount);

    await deadLetterMsgs[0].complete();
    await testPeekMsgsLength(deadletterClient, 0);
  }

  async function testDeadLetter(
    senderClient: QueueClient | TopicClient,
    receiverClient: QueueClient | SubscriptionClient,
    deadletterClient: QueueClient | SubscriptionClient
  ): Promise<void> {
    const deadLetterMsg = await deadLetterMessage(senderClient, receiverClient, deadletterClient);

    await deadLetterMsg.deadLetter().catch((err) => {
      should.equal(err.name, "InvalidOperationError");
      errorWasThrown = true;
    });

    should.equal(errorWasThrown, true);

    await completeDeadLetteredMessage(deadletterClient, 0);
  }

  it("Partitioned Queues: Throws error when dead lettering a dead lettered message", async function(): Promise<
    void
  > {
    await beforeEachTest(ClientType.PartitionedQueue, ClientType.PartitionedQueue);
    await testDeadLetter(senderClient, receiverClient, deadLetterClient);
  });

  it("Partitioned Topics and Subscription: Throws error when dead lettering a dead lettered message", async function(): Promise<
    void
  > {
    await beforeEachTest(ClientType.PartitionedTopic, ClientType.PartitionedSubscription);
    await testDeadLetter(senderClient, receiverClient, deadLetterClient);
  });

  it("Unpartitioned Queues: Throws error when dead lettering a dead lettered message", async function(): Promise<
    void
  > {
    await beforeEachTest(ClientType.UnpartitionedQueue, ClientType.UnpartitionedQueue);
    await testDeadLetter(senderClient, receiverClient, deadLetterClient);
  });

  it("Unpartitioned Topics and Subscription: Throws error when dead lettering a dead lettered message", async function(): Promise<
    void
  > {
    await beforeEachTest(ClientType.UnpartitionedTopic, ClientType.UnpartitionedSubscription);
    await testDeadLetter(senderClient, receiverClient, deadLetterClient);
  });

  async function testAbandon(
    senderClient: QueueClient | TopicClient,
    receiverClient: QueueClient | SubscriptionClient,
    deadletterClient: QueueClient | SubscriptionClient
  ): Promise<void> {
    const deadLetterMsg = await deadLetterMessage(senderClient, receiverClient, deadletterClient);

    await deadLetterMsg.abandon();

    await completeDeadLetteredMessage(deadletterClient, 0);
  }

  it("Partitioned Queues: Abandon a message received from dead letter queue", async function(): Promise<
    void
  > {
    await beforeEachTest(ClientType.PartitionedQueue, ClientType.PartitionedQueue);
    await testAbandon(senderClient, receiverClient, deadLetterClient);
  });

  it("Partitioned Topics and Subscription: Abandon a message received from dead letter queue", async function(): Promise<
    void
  > {
    await beforeEachTest(ClientType.PartitionedTopic, ClientType.PartitionedSubscription);
    await testAbandon(senderClient, receiverClient, deadLetterClient);
  });

  it("Unpartitioned Queues: Abandon a message received from dead letter queue", async function(): Promise<
    void
  > {
    await beforeEachTest(ClientType.UnpartitionedQueue, ClientType.UnpartitionedQueue);
    await testAbandon(senderClient, receiverClient, deadLetterClient);
  });

  it("Unpartitioned Topics and Subscription: Abandon a message received from dead letter queue", async function(): Promise<
    void
  > {
    await beforeEachTest(ClientType.UnpartitionedTopic, ClientType.UnpartitionedSubscription);
    await testAbandon(senderClient, receiverClient, deadLetterClient);
  });

  async function testDefer(
    senderClient: QueueClient | TopicClient,
    receiverClient: QueueClient | SubscriptionClient,
    deadletterClient: QueueClient | SubscriptionClient
  ): Promise<void> {
    const deadLetterMsg = await deadLetterMessage(senderClient, receiverClient, deadletterClient);

    if (!deadLetterMsg.sequenceNumber) {
      throw "Sequence Number can not be null";
    }

    const sequenceNumber = deadLetterMsg.sequenceNumber;
    await deadLetterMsg.defer();

    const deferredMsgs = await deadletterClient.receiveDeferredMessage(sequenceNumber);
    if (!deferredMsgs) {
      throw "No message received for sequence number";
    }
    should.equal(deferredMsgs.body, testSimpleMessages[0].body);
    should.equal(deferredMsgs.messageId, testSimpleMessages[0].messageId);

    await deferredMsgs.complete();

    await testPeekMsgsLength(receiverClient, 0);

    await testPeekMsgsLength(deadletterClient, 0);
  }

  it("Partitioned Queues: Defer a message received from dead letter queue", async function(): Promise<
    void
  > {
    await beforeEachTest(ClientType.PartitionedQueue, ClientType.PartitionedQueue);
    await testDefer(senderClient, receiverClient, deadLetterClient);
  });

  it("Partitioned Topics and Subscription: Defer a message received from dead letter queue", async function(): Promise<
    void
  > {
    await beforeEachTest(ClientType.PartitionedTopic, ClientType.PartitionedSubscription);
    await testDefer(senderClient, receiverClient, deadLetterClient);
  });

  // it("Unpartitioned Queues: Defer a message received from dead letter queue", async function(): Promise<
  //   void
  // > {
  //   await beforeEachTest(ClientType.UnpartitionedQueue, ClientType.UnpartitionedQueue);
  //   await testDefer(senderClient, receiverClient, deadLetterClient);
  // });

  // it("Unpartitioned Topics and Subscription: Defer a message received from dead letter queue", async function(): Promise<
  //   void
  // > {
  //   await beforeEachTest(ClientType.UnpartitionedTopic, ClientType.UnpartitionedSubscription);
  //   await testDefer(senderClient, receiverClient, deadLetterClient);
  // });
});

describe("Multiple ReceiveBatch calls", function(): void {
  afterEach(async () => {
    await afterEachTest();
  });

  // We use an empty queue/topic here so that the first receiveBatch call takes time to return
  async function testParallelReceiveBatchCalls(
    receiverClient: QueueClient | SubscriptionClient | MessageSession
  ): Promise<void> {
    const firstBatchPromise = receiverClient.receiveBatch(1, 10);
    await delay(5000);
    const secondBatchPromise = receiverClient.receiveBatch(1, 10).catch((err) => {
      should.equal(err.name, "Error");
      errorWasThrown = true;
    });
    await Promise.all([firstBatchPromise, secondBatchPromise]);
    should.equal(errorWasThrown, true);
  }

  it("Partitioned Queues: Throws error when ReceiveBatch is called while the previous call is not done", async function(): Promise<
    void
  > {
    await beforeEachTest(ClientType.PartitionedQueue, ClientType.PartitionedQueue);
    await testParallelReceiveBatchCalls(receiverClient);
  });

  it("Partitioned Topics and Subscription: Throws error when ReceiveBatch is called while the previous call is not done", async function(): Promise<
    void
  > {
    await beforeEachTest(ClientType.PartitionedTopic, ClientType.PartitionedSubscription);
    await testParallelReceiveBatchCalls(receiverClient);
  });

  it("Unpartitioned Queues: Throws error when ReceiveBatch is called while the previous call is not done", async function(): Promise<
    void
  > {
    await beforeEachTest(ClientType.UnpartitionedQueue, ClientType.UnpartitionedQueue);
    await testParallelReceiveBatchCalls(receiverClient);
  });

  it("Unpartitioned Topics and Subscription: Throws error when ReceiveBatch is called while the previous call is not done", async function(): Promise<
    void
  > {
    await beforeEachTest(ClientType.UnpartitionedTopic, ClientType.UnpartitionedSubscription);
    await testParallelReceiveBatchCalls(receiverClient);
  });

  it("Partitioned Queues with Sessions: Throws error when ReceiveBatch is called while the previous call is not done", async function(): Promise<
    void
  > {
    await beforeEachTest(
      ClientType.PartitionedQueueWithSessions,
      ClientType.PartitionedQueueWithSessions,
      true
    );
    await testParallelReceiveBatchCalls(messageSession);
  });

  it("Partitioned Topics and Subscription with Sessions: Throws error when ReceiveBatch is called while the previous call is not done", async function(): Promise<
    void
  > {
    await beforeEachTest(
      ClientType.PartitionedTopicWithSessions,
      ClientType.PartitionedSubscriptionWithSessions,
      true
    );
    await testParallelReceiveBatchCalls(messageSession);
  });

  it("Unpartitioned Queues with Sessions: Throws error when ReceiveBatch is called while the previous call is not done", async function(): Promise<
    void
  > {
    await beforeEachTest(
      ClientType.UnpartitionedQueueWithSessions,
      ClientType.UnpartitionedQueueWithSessions,
      true
    );
    await testParallelReceiveBatchCalls(messageSession);
  });

  it("Unpartitioned Topics and Subscription with Sessions: Throws error when ReceiveBatch is called while the previous call is not done", async function(): Promise<
    void
  > {
    await beforeEachTest(
      ClientType.UnpartitionedTopicWithSessions,
      ClientType.UnpartitionedSubscriptionWithSessions,
      true
    );
    await testParallelReceiveBatchCalls(messageSession);
  });

  // We test for mutilple receiveBatch specifically to ensure that batchingRecevier on a client is reused
  // See https://github.com/Azure/azure-service-bus-node/issues/31
  async function testSequentialReceiveBatchCalls(
    senderClient: QueueClient | TopicClient,
    receiverClient: QueueClient | SubscriptionClient | MessageSession,
    useSessions?: boolean
  ): Promise<void> {
    const testMessages = useSessions ? testMessagesWithSessions : testSimpleMessages;
    await senderClient.sendBatch(testMessages);
    const msgs1 = await receiverClient.receiveBatch(1);
    const msgs2 = await receiverClient.receiveBatch(1);

    // Results are checked after both receiveBatches are done to ensure that the second call doesnt
    // affect the result from the first one.
    should.equal(Array.isArray(msgs1), true);
    should.equal(msgs1.length, 1);
    should.equal(msgs1[0].body, testMessages[0].body);
    should.equal(msgs1[0].messageId, testMessages[0].messageId);

    should.equal(Array.isArray(msgs2), true);
    should.equal(msgs2.length, 1);
    should.equal(msgs2[0].body, testMessages[1].body);
    should.equal(msgs2[0].messageId, testMessages[1].messageId);

    await msgs1[0].complete();
    await msgs2[0].complete();
  }

  it("Partitioned Queues: Multiple receiveBatch using Queues/Subscriptions", async function(): Promise<
    void
  > {
    await beforeEachTest(ClientType.PartitionedQueue, ClientType.PartitionedQueue);
    await testSequentialReceiveBatchCalls(senderClient, receiverClient);
  });

  it("Partitioned Topics and Subscription: Multiple receiveBatch using Queues/Subscriptions", async function(): Promise<
    void
  > {
    await beforeEachTest(ClientType.PartitionedTopic, ClientType.PartitionedSubscription);
    await testSequentialReceiveBatchCalls(senderClient, receiverClient);
  });

  it("Unpartitioned Queues: Multiple receiveBatch using Queues/Subscriptions", async function(): Promise<
    void
  > {
    await beforeEachTest(ClientType.UnpartitionedQueue, ClientType.UnpartitionedQueue);
    await testSequentialReceiveBatchCalls(senderClient, receiverClient);
  });

  it("Unpartitioned Topics and Subscription: Multiple receiveBatch using Queues/Subscriptions", async function(): Promise<
    void
  > {
    await beforeEachTest(ClientType.UnpartitionedTopic, ClientType.UnpartitionedSubscription);
    await testSequentialReceiveBatchCalls(senderClient, receiverClient);
  });

  it("Partitioned Queues with Sessions: Multiple receiveBatch using Queues/Subscriptions", async function(): Promise<
    void
  > {
    await beforeEachTest(
      ClientType.PartitionedQueueWithSessions,
      ClientType.PartitionedQueueWithSessions,
      true
    );
    await testSequentialReceiveBatchCalls(senderClient, messageSession, true);
  });

  it("Partitioned Topics and Subscription with Sessions: Multiple receiveBatch using Queues/Subscriptions", async function(): Promise<
    void
  > {
    await beforeEachTest(
      ClientType.PartitionedTopicWithSessions,
      ClientType.PartitionedSubscriptionWithSessions,
      true
    );
    await testSequentialReceiveBatchCalls(senderClient, messageSession, true);
  });

  it("Unpartitioned Queues with Sessions: Multiple receiveBatch using Queues/Subscriptions", async function(): Promise<
    void
  > {
    await beforeEachTest(
      ClientType.UnpartitionedQueueWithSessions,
      ClientType.UnpartitionedQueueWithSessions,
      true
    );
    await testSequentialReceiveBatchCalls(senderClient, messageSession, true);
  });

  it("Unpartitioned Topics and Subscription with Sessions: Multiple receiveBatch using Queues/Subscriptions", async function(): Promise<
    void
  > {
    await beforeEachTest(
      ClientType.UnpartitionedTopicWithSessions,
      ClientType.UnpartitionedSubscriptionWithSessions,
      true
    );
    await testSequentialReceiveBatchCalls(senderClient, messageSession, true);
  });
});

describe("Batching Receiver Misc Tests", function(): void {
  afterEach(async () => {
    await afterEachTest();
  });

  async function testNoSettlement(
    senderClient: QueueClient | TopicClient,
    receiverClient: QueueClient | SubscriptionClient | MessageSession,
    useSessions?: boolean
  ): Promise<void> {
    const testMessages = useSessions ? testMessagesWithSessions : testSimpleMessages;
    await senderClient.send(testMessages[0]);

    let receivedMsgs = await receiverClient.receiveBatch(1);

    should.equal(receivedMsgs.length, 1);
    should.equal(receivedMsgs[0].deliveryCount, 0);
    should.equal(receivedMsgs[0].messageId, testMessages[0].messageId);

    await testPeekMsgsLength(receiverClient, 1);

    receivedMsgs = await receiverClient.receiveBatch(1);

    should.equal(receivedMsgs.length, 1);
    should.equal(receivedMsgs[0].deliveryCount, 1);
    should.equal(receivedMsgs[0].messageId, testMessages[0].messageId);

    await receivedMsgs[0].complete();
  }

  it("Partitioned Queues: No settlement of the message is retained with incremented deliveryCount", async function(): Promise<
    void
  > {
    await beforeEachTest(ClientType.PartitionedQueue, ClientType.PartitionedQueue);
    await testNoSettlement(senderClient, receiverClient);
  });

  it("Partitioned Topics and Subscription: No settlement of the message is retained with incremented deliveryCount", async function(): Promise<
    void
  > {
    await beforeEachTest(ClientType.PartitionedTopic, ClientType.PartitionedSubscription);
    await testNoSettlement(senderClient, receiverClient);
  });

  it("Unpartitioned Queues: No settlement of the message is retained with incremented deliveryCount", async function(): Promise<
    void
  > {
    await beforeEachTest(ClientType.UnpartitionedQueue, ClientType.UnpartitionedQueue);
    await testNoSettlement(senderClient, receiverClient);
  });

  it("Unpartitioned Topics and Subscription: No settlement of the message is retained with incremented deliveryCount", async function(): Promise<
    void
  > {
    await beforeEachTest(ClientType.UnpartitionedTopic, ClientType.UnpartitionedSubscription);
    await testNoSettlement(senderClient, receiverClient);
  });

  it("Partitioned Queues with Sessions: No settlement of the message is retained with incremented deliveryCount", async function(): Promise<
    void
  > {
    await beforeEachTest(
      ClientType.PartitionedQueueWithSessions,
      ClientType.PartitionedQueueWithSessions,
      true
    );
    await testNoSettlement(senderClient, receiverClient, true);
  });

  it("Partitioned Topics and Subscription with Sessions: No settlement of the message is retained with incremented deliveryCount", async function(): Promise<
    void
  > {
    await beforeEachTest(
      ClientType.PartitionedTopicWithSessions,
      ClientType.PartitionedSubscriptionWithSessions,
      true
    );
    await testNoSettlement(senderClient, messageSession, true);
  });

  it("Unpartitioned Queues with Sessions: No settlement of the message is retained with incremented deliveryCount", async function(): Promise<
    void
  > {
    await beforeEachTest(
      ClientType.UnpartitionedQueueWithSessions,
      ClientType.UnpartitionedQueueWithSessions,
      true
    );
    await testNoSettlement(senderClient, messageSession, true);
  });

  it("Unpartitioned Topics and Subscription with Sessions: No settlement of the message is retained with incremented deliveryCount", async function(): Promise<
    void
  > {
    await beforeEachTest(
      ClientType.UnpartitionedTopicWithSessions,
      ClientType.UnpartitionedSubscriptionWithSessions,
      true
    );
    await testNoSettlement(senderClient, messageSession, true);
  });

  async function testAskForMore(
    senderClient: QueueClient | TopicClient,
    receiverClient: QueueClient | SubscriptionClient | MessageSession,
    useSessions?: boolean
  ): Promise<void> {
    const testMessages = useSessions ? testMessagesWithSessions : testSimpleMessages;
    await senderClient.send(testMessages[0]);
    const receivedMsgs = await receiverClient.receiveBatch(2);

    should.equal(receivedMsgs.length, 1);
    should.equal(receivedMsgs[0].body, testMessages[0].body);
    should.equal(receivedMsgs[0].messageId, testMessages[0].messageId);

    await receivedMsgs[0].complete();

    await testPeekMsgsLength(receiverClient, 0);
  }

  it("Partitioned Queues: Receive n messages but queue only has m messages, where m < n", async function(): Promise<
    void
  > {
    await beforeEachTest(ClientType.PartitionedQueue, ClientType.PartitionedQueue);

    await testAskForMore(senderClient, receiverClient);
  });

  it("Partitioned Topics and Subscription: Receive n messages but subscription only has m messages, where m < n", async function(): Promise<
    void
  > {
    await beforeEachTest(ClientType.PartitionedTopic, ClientType.PartitionedSubscription);

    await testAskForMore(senderClient, receiverClient);
  });

  it("Unpartitioned Queues: Receive n messages but queue only has m messages, where m < n", async function(): Promise<
    void
  > {
    await beforeEachTest(ClientType.UnpartitionedQueue, ClientType.UnpartitionedQueue);

    await testAskForMore(senderClient, receiverClient);
  });

  it("Unpartitioned Topics and Subscription: Receive n messages but subscription only has m messages, where m < n", async function(): Promise<
    void
  > {
    await beforeEachTest(ClientType.UnpartitionedTopic, ClientType.UnpartitionedSubscription);

    await testAskForMore(senderClient, receiverClient);
  });

  it("Partitioned Queues with Sessions: Receive n messages but queue only has m messages, where m < n", async function(): Promise<
    void
  > {
    await beforeEachTest(
      ClientType.PartitionedQueueWithSessions,
      ClientType.PartitionedQueueWithSessions,
      true
    );
    await testAskForMore(senderClient, receiverClient, true);
  });

  it("Partitioned Topics and Subscription with Sessions: Receive n messages but subscription only has m messages, where m < n", async function(): Promise<
    void
  > {
    await beforeEachTest(
      ClientType.PartitionedTopicWithSessions,
      ClientType.PartitionedSubscriptionWithSessions,
      true
    );
    await testAskForMore(senderClient, messageSession, true);
  });

  it("Unpartitioned Queues with Sessions: Receive n messages but queue only has m messages, where m < n", async function(): Promise<
    void
  > {
    await beforeEachTest(
      ClientType.UnpartitionedQueueWithSessions,
      ClientType.UnpartitionedQueueWithSessions,
      true
    );
    await testAskForMore(senderClient, messageSession, true);
  });

  it("Unpartitioned Topics and Subscription with Sessions: Receive n messages but subscription only has m messages, where m < n", async function(): Promise<
    void
  > {
    await beforeEachTest(
      ClientType.UnpartitionedTopicWithSessions,
      ClientType.UnpartitionedSubscriptionWithSessions,
      true
    );
    await testAskForMore(senderClient, messageSession, true);
  });
});
