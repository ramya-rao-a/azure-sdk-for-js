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

let partitionedQueueClient: QueueClient;
let partitionedDeadletterQueueClient: QueueClient;

let partitionedQueueSessionClient: QueueClient;
let partitionedQueueMessageSession: MessageSession;
let partitionedDeadletterQueueSessionClient: QueueClient;

let partitionedTopicClient: TopicClient;
let partitionedSubscriptionClient: SubscriptionClient;
let partitionedDeadletterSubscriptionClient: SubscriptionClient;

let partitionedTopicSessionClient: TopicClient;
let partitionedSubscriptionSessionClient: SubscriptionClient;
let partitionedSubscriptionMessageSession: MessageSession;
let partitionedDeadletterSubscriptionSessionClient: SubscriptionClient;

// let unpartitionedQueueClient: QueueClient;
// let unpartitionedDeadletterQueueClient: QueueClient;

// let unpartitionedQueueSessionClient: QueueClient;
// let unpartitionedQueueMessageSession: MessageSession;
// let unpartitionedDeadletterQueueSessionClient: QueueClient;

// let unpartitionedTopicClient: TopicClient;
// let unpartitionedSubscriptionClient: SubscriptionClient;
// let unpartitionedDeadletterSubscriptionClient: SubscriptionClient;

// let unpartitionedTopicSessionClient: TopicClient;
// let unpartitionedSubscriptionSessionClient: SubscriptionClient;
// let unpartitionedSubscriptionMessageSession: MessageSession;
// let unpartitionedDeadletterSubscriptionSessionClient: SubscriptionClient;

async function beforeEachTest(): Promise<void> {
  // The tests in this file expect the env variables to contain the connection string and
  // the names of empty queue/topic/subscription that are to be tested

  if (!process.env.SERVICEBUS_CONNECTION_STRING) {
    throw new Error(
      "Define SERVICEBUS_CONNECTION_STRING in your environment before running integration tests."
    );
  }
  ns = Namespace.createFromConnectionString(process.env.SERVICEBUS_CONNECTION_STRING);

  // Partitioned Queues and Subscriptions
  partitionedQueueClient = getSenderClient(ns, ClientType.PartitionedQueue) as QueueClient;
  partitionedDeadletterQueueClient = ns.createQueueClient(
    Namespace.getDeadLetterQueuePathForQueue(partitionedQueueClient.name)
  );

  partitionedTopicClient = getSenderClient(ns, ClientType.PartitionedTopic) as TopicClient;
  partitionedSubscriptionClient = getReceiverClient(
    ns,
    ClientType.PartitionedSubscription
  ) as SubscriptionClient;
  partitionedDeadletterSubscriptionClient = ns.createSubscriptionClient(
    Namespace.getDeadLetterSubcriptionPathForSubcription(
      partitionedTopicClient.name,
      partitionedSubscriptionClient.subscriptionName
    ),
    partitionedSubscriptionClient.subscriptionName
  );

  // Unpartitioned Queues and Subscriptions
  // unpartitionedQueueClient = getSenderClient(ns, ClientType.UnpartitionedQueue) as QueueClient;
  // unpartitionedDeadletterQueueClient = ns.createQueueClient(
  //   Namespace.getDeadLetterQueuePathForQueue(unpartitionedQueueClient.name)
  // );
  // unpartitionedTopicClient = getSenderClient(ns, ClientType.UnpartitionedTopic) as TopicClient;
  // unpartitionedSubscriptionClient = getReceiverClient(
  //   ns,
  //   ClientType.UnpartitionedSubscription
  // ) as SubscriptionClient;
  // unpartitionedDeadletterSubscriptionClient = ns.createSubscriptionClient(
  //   Namespace.getDeadLetterSubcriptionPathForSubcription(
  //     unpartitionedTopicClient.name,
  //     unpartitionedSubscriptionClient.subscriptionName
  //   ),
  //   unpartitionedSubscriptionClient.subscriptionName
  // );

  // Partitioned Queues and Subscriptions with Sessions
  partitionedQueueSessionClient = getSenderClient(
    ns,
    ClientType.PartitionedQueueWithSessions
  ) as QueueClient;
  partitionedQueueMessageSession = await partitionedQueueSessionClient.acceptSession({
    sessionId: testSessionId
  });
  partitionedDeadletterQueueSessionClient = ns.createQueueClient(
    Namespace.getDeadLetterQueuePathForQueue(partitionedQueueSessionClient.name)
  );
  partitionedTopicSessionClient = getSenderClient(
    ns,
    ClientType.PartitionedTopicWithSessions
  ) as TopicClient;
  partitionedSubscriptionSessionClient = getReceiverClient(
    ns,
    ClientType.PartitionedSubscriptionWithSessions
  ) as SubscriptionClient;
  partitionedSubscriptionMessageSession = await partitionedSubscriptionSessionClient.acceptSession({
    sessionId: testSessionId
  });
  partitionedDeadletterSubscriptionSessionClient = ns.createSubscriptionClient(
    Namespace.getDeadLetterSubcriptionPathForSubcription(
      partitionedTopicSessionClient.name,
      partitionedSubscriptionSessionClient.subscriptionName
    ),
    partitionedSubscriptionSessionClient.subscriptionName
  );
  // Unpartitioned Queues and Subscriptions with Sessions
  // unpartitionedQueueSessionClient = getSenderClient(
  //   ns,
  //   ClientType.UnpartitionedQueueWithSessions
  // ) as QueueClient;
  // unpartitionedQueueMessageSession = await unpartitionedQueueSessionClient.acceptSession({
  //   sessionId: testSessionId
  // });
  // unpartitionedDeadletterQueueSessionClient = ns.createQueueClient(
  //   Namespace.getDeadLetterQueuePathForQueue(unpartitionedQueueSessionClient.name)
  // );
  // unpartitionedTopicSessionClient = getSenderClient(
  //   ns,
  //   ClientType.UnpartitionedTopicWithSessions
  // ) as TopicClient;
  // unpartitionedSubscriptionSessionClient = getReceiverClient(
  //   ns,
  //   ClientType.UnpartitionedSubscriptionWithSessions
  // ) as SubscriptionClient;
  // unpartitionedSubscriptionMessageSession = await unpartitionedSubscriptionSessionClient.acceptSession(
  //   {
  //     sessionId: testSessionId
  //   }
  // );
  // unpartitionedDeadletterSubscriptionSessionClient = ns.createSubscriptionClient(
  //   Namespace.getDeadLetterSubcriptionPathForSubcription(
  //     unpartitionedTopicSessionClient.name,
  //     unpartitionedSubscriptionSessionClient.subscriptionName
  //   ),
  //   unpartitionedSubscriptionSessionClient.subscriptionName
  // );

  const peekedPartitionedQueueMsg = await partitionedQueueClient.peek();
  if (peekedPartitionedQueueMsg.length) {
    throw new Error("Please use an empty partitioned queue for integration testing");
  }

  const peekedPartitionedSubscriptionMsg = await partitionedSubscriptionClient.peek();
  if (peekedPartitionedSubscriptionMsg.length) {
    throw new Error("Please use an empty partitioned Subscription for integration testing");
  }

  // const peekedUnPartitionedQueueMsg = await unpartitionedQueueClient.peek();
  // if (peekedUnPartitionedQueueMsg.length) {
  //   throw new Error("Please use an empty unpartitioned queue for integration testing");
  // }

  // const peekedUnPartitionedSubscriptionMsg = await unpartitionedSubscriptionClient.peek();
  // if (peekedUnPartitionedSubscriptionMsg.length) {
  //   throw new Error("Please use an empty unpartitioned Subscription for integration testing");
  // }

  const peekedPartitionedQueueSessionMsg = await partitionedQueueSessionClient.peek();
  if (peekedPartitionedQueueSessionMsg.length) {
    throw new Error("Please use an empty partitioned queue with sessions for integration testing");
  }

  const peekedPartitionedSubscriptionSessionMsg = await partitionedSubscriptionSessionClient.peek();
  if (peekedPartitionedSubscriptionSessionMsg.length) {
    throw new Error("Please use an empty partitioned queue with sessions for integration testing");
  }

  // const peekedUnPartitionedQueueSessionMsg = await unpartitionedQueueSessionClient.peek();
  // if (peekedUnPartitionedQueueSessionMsg.length) {
  //   throw new Error("Please use an empty partitioned queue with sessions for integration testing");
  // }

  // const peekedUnPartitionedSubscriptionSessionMsg = await unpartitionedSubscriptionSessionClient.peek();
  // if (peekedUnPartitionedSubscriptionSessionMsg.length) {
  //   throw new Error("Please use an empty partitioned queue with sessions for integration testing");
  // }
}

async function afterEachTest(): Promise<void> {
  await ns.close();
}

async function deferMessage(
  senderClient: QueueClient | TopicClient,
  receiverClient: QueueClient | SubscriptionClient | MessageSession,
  testMessages: SendableMessageInfo[]
): Promise<ServiceBusMessage> {
  await senderClient.send(testMessages[0]);
  const receivedMsgs = await receiverClient.receiveBatch(1);

  should.equal(receivedMsgs.length, 1);
  should.equal(receivedMsgs[0].body, testMessages[0].body);
  should.equal(receivedMsgs[0].deliveryCount, 0);
  should.equal(receivedMsgs[0].messageId, testMessages[0].messageId);

  if (!receivedMsgs[0].sequenceNumber) {
    throw "Sequence Number can not be null";
  }
  const sequenceNumber = receivedMsgs[0].sequenceNumber;
  await receivedMsgs[0].defer();

  const deferredMsgs = await receiverClient.receiveDeferredMessage(sequenceNumber);
  if (!deferredMsgs) {
    throw "No message received for sequence number";
  }
  should.equal(deferredMsgs.body, testMessages[0].body);
  should.equal(deferredMsgs.messageId, testMessages[0].messageId);
  should.equal(deferredMsgs.deliveryCount, 1);

  return deferredMsgs;
}

async function completeDeferredMessage(
  receiverClient: QueueClient | SubscriptionClient | MessageSession,
  sequenceNumber: Long,
  expectedDeliverCount: number,
  testMessages: SendableMessageInfo[]
): Promise<void> {
  await testPeekMsgsLength(receiverClient, 1);

  const deferredMsg = await receiverClient.receiveDeferredMessage(sequenceNumber);
  if (!deferredMsg) {
    throw "No message received for sequence number";
  }

  should.equal(deferredMsg.body, testMessages[0].body);
  should.equal(deferredMsg.deliveryCount, expectedDeliverCount);
  should.equal(deferredMsg.messageId, testMessages[0].messageId);

  await deferredMsg.complete();

  await testPeekMsgsLength(receiverClient, 0);
}

describe("Abandon/Defer/Deadletter deferred message", function(): void {
  beforeEach(async () => {
    await beforeEachTest();
  });

  afterEach(async () => {
    await afterEachTest();
  });

  async function testAbandon(
    senderClient: QueueClient | TopicClient,
    receiverClient: QueueClient | SubscriptionClient | MessageSession,
    useSessions?: boolean
  ): Promise<void> {
    const testMessages = useSessions ? testMessagesWithSessions : testSimpleMessages;
    const deferredMsg = await deferMessage(senderClient, receiverClient, testMessages);
    const sequenceNumber = deferredMsg.sequenceNumber;
    if (!sequenceNumber) {
      throw "Sequence Number can not be null";
    }
    await deferredMsg.abandon();
    await completeDeferredMessage(receiverClient, sequenceNumber, 2, testMessages);
  }

  it("Partitioned Queues: Abandoning a deferred message puts it back to the deferred queue.", async function(): Promise<
    void
  > {
    await testAbandon(partitionedQueueClient, partitionedQueueClient);
  });

  it("Partitioned Topics and Subscription: Abandoning a deferred message puts it back to the deferred queue.", async function(): Promise<
    void
  > {
    await testAbandon(partitionedTopicClient, partitionedSubscriptionClient);
  });

  it("Partitioned Queues with Sessions: Abandoning a deferred message puts it back to the deferred queue.", async function(): Promise<
    void
  > {
    await testAbandon(partitionedQueueSessionClient, partitionedQueueMessageSession, true);
  });

  it("Partitioned Topics and Subscription with Sessions: Abandoning a deferred message puts it back to the deferred queue.", async function(): Promise<
    void
  > {
    await testAbandon(partitionedTopicSessionClient, partitionedSubscriptionMessageSession, true);
  });

  // it("Unpartitioned Queues: Abandoning a deferred message puts it back to the deferred queue.", async function(): Promise<
  //   void
  // > {
  //   await testAbandon(unpartitionedQueueClient, unpartitionedQueueClient);
  // });

  // it("Unpartitioned Topics and Subscription: Abandoning a deferred message puts it back to the deferred queue.", async function(): Promise<
  //   void
  // > {
  //   await testAbandon(unpartitionedTopicClient, unpartitionedSubscriptionClient);
  // });

  // it("Unpartitioned Queues with Sessions:: Abandoning a deferred message puts it back to the deferred queue.", async function(): Promise<
  //   void
  // > {
  //   await testAbandon(unpartitionedQueueSessionClient, unpartitionedQueueMessageSession, true);
  // });

  // it("Unpartitioned Topics and Subscription with Sessions:: Abandoning a deferred message puts it back to the deferred queue.", async function(): Promise<
  //   void
  // > {
  //   await testAbandon(unpartitionedTopicSessionClient, unpartitionedSubscriptionMessageSession, true);
  // });
});

describe("Deferring a deferred message puts it back to the deferred queue.", function(): void {
  beforeEach(async () => {
    await beforeEachTest();
  });

  afterEach(async () => {
    await afterEachTest();
  });

  async function testDefer(
    senderClient: QueueClient | TopicClient,
    receiverClient: QueueClient | SubscriptionClient | MessageSession,
    useSessions?: boolean
  ): Promise<void> {
    const testMessages = useSessions ? testMessagesWithSessions : testSimpleMessages;
    const deferredMsg = await deferMessage(senderClient, receiverClient, testMessages);
    const sequenceNumber = deferredMsg.sequenceNumber;
    if (!sequenceNumber) {
      throw "Sequence Number can not be null";
    }
    await deferredMsg.defer();
    await completeDeferredMessage(receiverClient, sequenceNumber, 2, testMessages);
  }

  it("Partitioned Queues: Deferring a deferred message puts it back to the deferred queue.", async function(): Promise<
    void
  > {
    await testDefer(partitionedQueueClient, partitionedQueueClient);
  });

  it("Partitioned Topics and Subscription: Deferring a deferred message puts it back to the deferred queue.", async function(): Promise<
    void
  > {
    await testDefer(partitionedTopicClient, partitionedSubscriptionClient);
  });

  it("Partitioned Queues with Sessions: Deferring a deferred message puts it back to the deferred queue.", async function(): Promise<
    void
  > {
    await testDefer(partitionedQueueSessionClient, partitionedQueueMessageSession, true);
  });

  it("Partitioned Topics and Subscription with Sessions: Deferring a deferred message puts it back to the deferred queue.", async function(): Promise<
    void
  > {
    await testDefer(partitionedTopicSessionClient, partitionedSubscriptionMessageSession, true);
  });

  // it("Unpartitioned Queues: Deferring a deferred message puts it back to the deferred queue.", async function(): Promise<
  //   void
  // > {
  //   await testDefer(unpartitionedQueueClient, unpartitionedQueueClient);
  // });

  // it("Unpartitioned Topics and Subscription: Deferring a deferred message puts it back to the deferred queue.", async function(): Promise<
  //   void
  // > {
  //   await testDefer(unpartitionedTopicClient, unpartitionedSubscriptionClient);
  // });

  // it("Unpartitioned Queues with Sessions: Deferring a deferred message puts it back to the deferred queue.", async function(): Promise<
  //   void
  // > {
  //   await testDefer(unpartitionedQueueSessionClient, unpartitionedQueueMessageSession, true);
  // });

  // it("Unpartitioned Topics and Subscription with Sessions: Deferring a deferred message puts it back to the deferred queue.", async function(): Promise<
  //   void
  // > {
  //   await testDefer(unpartitionedTopicSessionClient, unpartitionedSubscriptionMessageSession, true);
  // });
});

describe("Deadlettering a deferred message moves it to dead letter queue.", function(): void {
  beforeEach(async () => {
    await beforeEachTest();
  });

  afterEach(async () => {
    await afterEachTest();
  });

  async function testDeadletter(
    senderClient: QueueClient | TopicClient,
    receiverClient: QueueClient | SubscriptionClient | MessageSession,
    deadLetterClient: QueueClient | SubscriptionClient,
    useSessions?: boolean
  ): Promise<void> {
    const testMessages = useSessions ? testMessagesWithSessions : testSimpleMessages;
    const deferredMsg = await deferMessage(senderClient, receiverClient, testMessages);

    await deferredMsg.deadLetter();

    await testPeekMsgsLength(receiverClient, 0);

    const deadLetterMsgs = await deadLetterClient.receiveBatch(1);

    should.equal(deadLetterMsgs.length, 1);
    should.equal(deadLetterMsgs[0].body, testMessages[0].body);
    should.equal(deadLetterMsgs[0].deliveryCount, 1);
    should.equal(deadLetterMsgs[0].messageId, testMessages[0].messageId);

    await deadLetterMsgs[0].complete();

    await testPeekMsgsLength(deadLetterClient, 0);
  }

  it("Partitioned Queues: Deadlettering a deferred message moves it to dead letter queue.", async function(): Promise<
    void
  > {
    await testDeadletter(
      partitionedQueueClient,
      partitionedQueueClient,
      partitionedDeadletterQueueClient
    );
  });

  it("Partitioned Topics and Subscription: Deadlettering a deferred message moves it to dead letter queue.", async function(): Promise<
    void
  > {
    await testDeadletter(
      partitionedTopicClient,
      partitionedSubscriptionClient,
      partitionedDeadletterSubscriptionClient
    );
  });

  it("Partitioned Queues with Sessions: Deadlettering a deferred message moves it to dead letter queue.", async function(): Promise<
    void
  > {
    await testDeadletter(
      partitionedQueueSessionClient,
      partitionedQueueMessageSession,
      partitionedDeadletterQueueSessionClient,
      true
    );
  });

  it("Partitioned Topics and Subscription with Sessions: Deadlettering a deferred message moves it to dead letter queue.", async function(): Promise<
    void
  > {
    await testDeadletter(
      partitionedTopicSessionClient,
      partitionedSubscriptionMessageSession,
      partitionedDeadletterSubscriptionSessionClient,
      true
    );
  });

  // it("Unpartitioned Queues: Deadlettering a deferred message moves it to dead letter queue.", async function(): Promise<
  //   void
  // > {
  //   await testDeadletter(
  //     unpartitionedQueueClient,
  //     unpartitionedQueueClient,
  //     unpartitionedDeadletterQueueClient
  //   );
  // });

  // it("Unpartitioned Topics and Subscription: Deadlettering a deferred message moves it to dead letter queue.", async function(): Promise<
  //   void
  // > {
  //   await testDeadletter(
  //     unpartitionedTopicClient,
  //     unpartitionedSubscriptionClient,
  //     unpartitionedDeadletterSubscriptionClient
  //   );
  // });

  // it("Unpartitioned Queues with Sessions: Deadlettering a deferred message moves it to dead letter queue.", async function(): Promise<
  //   void
  // > {
  //   await testDeadletter(
  //     unpartitionedQueueSessionClient,
  //     unpartitionedQueueMessageSession,
  //     unpartitionedDeadletterQueueSessionClient,
  //     true
  //   );
  // });

  // it("Unpartitioned Topics and Subscription with Sessions: Deadlettering a deferred message moves it to dead letter queue.", async function(): Promise<
  //   void
  // > {
  //   await testDeadletter(
  //     unpartitionedTopicSessionClient,
  //     unpartitionedSubscriptionMessageSession,
  //     unpartitionedDeadletterSubscriptionSessionClient,
  //     true
  //   );
  // });
});
