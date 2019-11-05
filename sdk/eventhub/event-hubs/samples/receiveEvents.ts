/*
  Copyright (c) Microsoft Corporation. All rights reserved.
  Licensed under the MIT Licence.

  This sample demonstrates how to use the EventProcessor to process events from all partitions
  of a consumer group in an Event Hubs instance. It also demonstrates the process of checkpointing an event
  which helps new instances of Event Processors that may have spun up for scaling or for crash recovery.

  If your Event Hub instance doesn't have any events, then please run "sendEvents.ts" sample
  to populate it before running this sample.

  Note: If you are using version 2.1.0 or lower of @azure/event-hubs library, then please use the samples at
  https://github.com/Azure/azure-sdk-for-js/tree/%40azure/event-hubs_2.1.0/sdk/eventhub/event-hubs/samples instead.
*/

import {
  EventHubConsumerClient,
  ReceivedEventData,
  PartitionContext,
  PartitionCheckpointer
} from "@azure/event-hubs";

const connectionString = "";
const eventHubName = "";

async function main() {
  const consumerClient = new EventHubConsumerClient(connectionString, eventHubName);

  // The callback where you add your code to process incoming events
  const processEvents = async (
    events: ReceivedEventData[],
    context: PartitionContext & PartitionCheckpointer
  ) => {
    if (events.length === 0) {
      return;
    }

    for (const event of events) {
      console.log(
        `Received event: '${event.body}' from partition: '${context.partitionId}' and consumer group: '${context.consumerGroupName}'`
      );
    }

    // checkpoint using the last event in the batch
    const lastEvent = events[events.length - 1];
    await context.updateCheckpoint(lastEvent).catch((err: any) => {
      console.log(`Error when checkpointing on partition ${context.partitionId}: `, err);
    });
    console.log(
      `Successfully checkpointed event with sequence number: ${lastEvent.sequenceNumber} from partition: 'partitionContext.partitionId'`
    );
  };

  const subscription = consumerClient.subscribe(
    EventHubConsumerClient.defaultConsumerGroupName,
    processEvents
  );

  // after 30 seconds, stop processing
  await new Promise((resolve) => {
    setInterval(async () => {
      await subscription.close();
      await consumerClient.close();
      resolve();
    }, 30000);
  });
}

main().catch((err) => {
  console.log("Error occurred: ", err);
});
