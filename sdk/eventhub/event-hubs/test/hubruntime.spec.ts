// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

import chai from "chai";
const should = chai.should();
import chaiAsPromised from "chai-as-promised";
chai.use(chaiAsPromised);
import debugModule from "debug";
const debug = debugModule("azure:event-hubs:hubruntime-spec");
import { EnvVarKeys, getEnvVars } from "./utils/testUtils";
const env = getEnvVars();

import { EventHubClient } from "../src";
describe("RuntimeInformation #RunnableInBrowser", function(): void {
  let client: EventHubClient;
  const service = {
    connectionString: env[EnvVarKeys.EVENTHUB_CONNECTION_STRING],
    path: env[EnvVarKeys.EVENTHUB_NAME]
  };
  before("validate environment", function(): void {
    should.exist(
      env[EnvVarKeys.EVENTHUB_CONNECTION_STRING],
      "define EVENTHUB_CONNECTION_STRING in your environment before running integration tests."
    );
    should.exist(
      env[EnvVarKeys.EVENTHUB_NAME],
      "define EVENTHUB_NAME in your environment before running integration tests."
    );
  });

  afterEach("close the connection", async function(): Promise<void> {
    await client.close();
  });

  function arrayOfIncreasingNumbersFromZero(length: any): Array<string> {
    return Array.apply(undefined, new Array(length)).map((x: any, i: any) => {
      return `${i}`;
    });
  }

  it("gets the hub runtime information", async function(): Promise<void> {
    client = EventHubClient.createFromConnectionString(service.connectionString!, service.path, {
      userAgent: "/js-event-processor-host=0.2.0"
    });
    const hubRuntimeInfo = await client.getProperties();
    debug(hubRuntimeInfo);
    hubRuntimeInfo.path.should.equal(service.path);

    hubRuntimeInfo.partitionIds.should.have.members(
      arrayOfIncreasingNumbersFromZero(hubRuntimeInfo.partitionIds.length)
    );
    hubRuntimeInfo.createdAt.should.be.instanceof(Date);
  });

  it("gets the partition runtime information with partitionId as a string", async function(): Promise<void> {
    client = EventHubClient.createFromConnectionString(service.connectionString!, service.path);
    const partitionRuntimeInfo = await client.getPartitionInformation("0");
    debug(partitionRuntimeInfo);
    partitionRuntimeInfo.id.should.equal("0");
    partitionRuntimeInfo.eventHubPath.should.equal(service.path);
    partitionRuntimeInfo.lastEnqueuedTimeUtc.should.be.instanceof(Date);
    should.exist(partitionRuntimeInfo.lastEnqueuedSequenceNumber);
    should.exist(partitionRuntimeInfo.lastEnqueuedOffset);
  });

  it("gets the partition runtime information with partitionId as a number", async function(): Promise<void> {
    client = EventHubClient.createFromConnectionString(service.connectionString!, service.path);
    const partitionRuntimeInfo = await client.getPartitionInformation(0 as any);
    debug(partitionRuntimeInfo);
    partitionRuntimeInfo.id.should.equal("0");
    partitionRuntimeInfo.eventHubPath.should.equal(service.path);
    partitionRuntimeInfo.lastEnqueuedTimeUtc.should.be.instanceof(Date);
    should.exist(partitionRuntimeInfo.lastEnqueuedSequenceNumber);
    should.exist(partitionRuntimeInfo.lastEnqueuedOffset);
  });

  it("should fail the partition runtime information when partitionId is empty string", async function(): Promise<void> {
    client = EventHubClient.createFromConnectionString(service.connectionString!, service.path);
    try {
      await client.getPartitionInformation("");
    } catch (err) {
      err.message.should.match(/.*The specified partition is invalid for an EventHub partition sender or receiver.*/gi);
    }
  });

  it("should fail the partition runtime information when partitionId is a negative number", async function(): Promise<
    void
  > {
    client = EventHubClient.createFromConnectionString(service.connectionString!, service.path);
    try {
      await client.getPartitionInformation(-1 as any);
    } catch (err) {
      err.message.should.match(/.*The specified partition is invalid for an EventHub partition sender or receiver.*/gi);
    }
  });
}).timeout(60000);
