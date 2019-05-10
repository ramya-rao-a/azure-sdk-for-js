/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as Models from "./models";
import * as Mappers from "./models/mappers";
import * as operations from "./operations";
import { QnAMakerClientContext } from "./qnAMakerClientContext";

class QnAMakerClient extends QnAMakerClientContext {
  // Operation groups
  endpointKeys: operations.EndpointKeys;
  alterations: operations.Alterations;
  knowledgebase: operations.Knowledgebase;
  operations: operations.Operations;

  /**
   * Initializes a new instance of the QnAMakerClient class.
   * @param endpoint Supported Cognitive Services endpoints (protocol and hostname, for example:
   * https://westus.api.cognitive.microsoft.com).
   * @param credentials Subscription credentials which uniquely identify client subscription.
   * @param [options] The parameter options
   */
  constructor(credentials: msRest.ServiceClientCredentials, endpoint: string, options?: msRest.ServiceClientOptions) {
    super(credentials, endpoint, options);
    this.endpointKeys = new operations.EndpointKeys(this);
    this.alterations = new operations.Alterations(this);
    this.knowledgebase = new operations.Knowledgebase(this);
    this.operations = new operations.Operations(this);
  }
}

// Operation Specifications

export {
  QnAMakerClient,
  QnAMakerClientContext,
  Models as QnAMakerModels,
  Mappers as QnAMakerMappers
};
export * from "./operations";
