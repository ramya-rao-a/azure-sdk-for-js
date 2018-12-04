/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "ms-rest-js";
import * as Models from "./models";
import * as Mappers from "./models/mappers";
import * as operations from "./operations";
import { RedisManagementClientContext } from "./redisManagementClientContext";


class RedisManagementClient extends RedisManagementClientContext {
  // Operation groups
  operations: operations.Operations;
  redis: operations.Redis;
  firewallRules: operations.FirewallRules;
  patchSchedules: operations.PatchSchedules;
  linkedServer: operations.LinkedServer;

  /**
   * Initializes a new instance of the RedisManagementClient class.
   * @param credentials Credentials needed for the client to connect to Azure.
   * @param subscriptionId Gets subscription credentials which uniquely identify the Microsoft Azure
   * subscription. The subscription ID forms part of the URI for every service call.
   * @param [options] The parameter options
   */
  constructor(credentials: msRest.ServiceClientCredentials, subscriptionId: string, options?: Models.RedisManagementClientOptions) {
    super(credentials, subscriptionId, options);
    this.operations = new operations.Operations(this);
    this.redis = new operations.Redis(this);
    this.firewallRules = new operations.FirewallRules(this);
    this.patchSchedules = new operations.PatchSchedules(this);
    this.linkedServer = new operations.LinkedServer(this);
  }
}

// Operation Specifications

export {
  RedisManagementClient,
  RedisManagementClientContext,
  Models as RedisManagementModels,
  Mappers as RedisManagementMappers
};
export * from "./operations";
