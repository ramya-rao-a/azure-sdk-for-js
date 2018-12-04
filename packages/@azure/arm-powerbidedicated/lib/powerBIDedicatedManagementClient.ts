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
import { PowerBIDedicatedManagementClientContext } from "./powerBIDedicatedManagementClientContext";


class PowerBIDedicatedManagementClient extends PowerBIDedicatedManagementClientContext {
  // Operation groups
  capacities: operations.Capacities;
  operations: operations.Operations;

  /**
   * Initializes a new instance of the PowerBIDedicatedManagementClient class.
   * @param credentials Credentials needed for the client to connect to Azure.
   * @param subscriptionId A unique identifier for a Microsoft Azure subscription. The subscription
   * ID forms part of the URI for every service call.
   * @param [options] The parameter options
   */
  constructor(credentials: msRest.ServiceClientCredentials, subscriptionId: string, options?: Models.PowerBIDedicatedManagementClientOptions) {
    super(credentials, subscriptionId, options);
    this.capacities = new operations.Capacities(this);
    this.operations = new operations.Operations(this);
  }
}

// Operation Specifications

export {
  PowerBIDedicatedManagementClient,
  PowerBIDedicatedManagementClientContext,
  Models as PowerBIDedicatedManagementModels,
  Mappers as PowerBIDedicatedManagementMappers
};
export * from "./operations";
