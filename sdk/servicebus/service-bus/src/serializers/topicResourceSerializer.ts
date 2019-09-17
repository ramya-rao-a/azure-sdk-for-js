// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

import {
  AtomXmlSerializer,
  serializeToAtomXmlRequest,
  deserializeAtomXmlResponse,
  HttpOperationResponse
} from "@azure/core-http";
import * as Constants from "../util/constants";

export interface TopicOptions {
  /**
   * Determines the amount of time in seconds in which a message should be locked for processing by a receiver. After this period, the message is unlocked and available for consumption by the next receiver. Settable only at queue creation time.
   */
  LockDuration?: string;

  /**
   * Settable only at queue creation time. If set to true, the queue will be session-aware and only SessionReceiver will be supported. Session-aware queues are not supported through REST.
   */
  RequiresSession?: string;

  /**
   * Determines how long a message lives in the associated subscriptions. Subscriptions inherit the TTL from the topic unless they are created explicitly with a smaller TTL. Based on whether dead-lettering is enabled, a message whose TTL has expired will either be moved to the subscription’s associated DeadLtterQueue or will be permanently deleted.
   */
  DefaultMessageTimeToLive?: string;

  /**
   * Specifies the maximum topic size in megabytes. Any attempt to enqueue a message that will cause the topic to exceed this value will fail. All messages that are stored in the topic or any of its subscriptions count towards this value. Multiple copies of a message that reside in one or multiple subscriptions count as a single messages. For example, if message m exists once in subscription s1 and twice in subscription s2, m is counted as a single message.
   */
  MaxSizeInMegabytes?: string;

  /**
   * If enabled, the topic will detect duplicate messages within the time span specified by the DuplicateDetectionHistoryTimeWindow property. Settable only at topic creation time.
   */
  RequiresDuplicateDetection?: string;

  /**
   * Specifies the time span during which the Service Bus will detect message duplication.
   */
  DuplicateDetectionHistoryTimeWindow?: string;

  /**
   * The maximum delivery count.
   *
   */
  MaxDeliveryCount?: string;

  /**
   * This field controls how the Service Bus handles a message whose TTL has expired. If it is enabled and a message expires, the Service Bus moves the message from the queue into the queue’s dead-letter sub-queue. If disabled, message will be permanently deleted from the queue. Settable only at queue creation time.
   */
  DeadLetteringOnMessageExpiration?: string;

  /**
   * Specifies if batched operations should be allowed.
   */
  EnableBatchedOperations?: string;

  /**
   * Specifies whether the topic supports message ordering.
   */
  SupportOrdering?: string;

  /**
   * Specifies the topic size in bytes.
   */
  SizeInBytes?: string;

  /**
   * Specifies whether the topic should be partitioned
   */
  EnablePartitioning?: string;

  /**
   * The entity's message count.
   *
   */
  MessageCount?: string;

  /**
   * Max idle time before entity is deleted
   *
   */
  AutoDeleteOnIdle?: string;

  /**
   * The topic's count details.
   *
   */
  CountDetails?: string;

  /**
   * The subscription count on given topic.
   *
   */
  SubscriptionCount?: string;
}

/**
 * @ignore TopicResourceSerializer for serializing / deserializing Topic entities
 */
export class TopicResourceSerializer implements AtomXmlSerializer {
  serialize(resource: TopicOptions): string {
    const properties: Array<keyof TopicOptions> = [
      Constants.LOCK_DURATION,
      Constants.REQUIRES_SESSION,
      Constants.DEFAULT_MESSAGE_TIME_TO_LIVE,
      Constants.MAX_SIZE_IN_MEGABYTES,
      Constants.REQUIRES_DUPLICATE_DETECTION,
      Constants.DUPLICATE_DETECTION_HISTORY_TIME_WINDOW,
      Constants.DEAD_LETTERING_ON_MESSAGE_EXPIRATION,
      Constants.ENABLE_BATCHED_OPERATIONS,
      Constants.AUTO_DELETE_ON_IDLE,
      Constants.SIZE_IN_BYTES,
      Constants.SUPPORT_ORDERING,
      Constants.ENABLE_PARTITIONING,
      Constants.SIZE_IN_BYTES,
      Constants.MESSAGE_COUNT,
      Constants.COUNT_DETAILS,
      Constants.SUBSCRIPTION_COUNT
    ];

    return serializeToAtomXmlRequest(
      "TopicDescription",
      resource,
      properties,
      Constants.XML_NAMESPACE
    );
  }
  async deserialize(
    response: HttpOperationResponse,
    shouldParseResponse: boolean
  ): Promise<HttpOperationResponse> {
    return deserializeAtomXmlResponse(["TopicName"], response, shouldParseResponse);
  }
}
