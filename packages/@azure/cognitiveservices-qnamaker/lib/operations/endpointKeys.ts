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
import * as Models from "../models";
import * as Mappers from "../models/endpointKeysMappers";
import * as Parameters from "../models/parameters";
import { QnAMakerClientContext } from "../qnAMakerClientContext";

/** Class representing a EndpointKeys. */
export class EndpointKeys {
  private readonly client: QnAMakerClientContext;

  /**
   * Create a EndpointKeys.
   * @param {QnAMakerClientContext} client Reference to the service client.
   */
  constructor(client: QnAMakerClientContext) {
    this.client = client;
  }

  /**
   * @summary Gets endpoint keys for an endpoint
   * @param [options] The optional parameters
   * @returns Promise<Models.EndpointKeysGetKeysResponse>
   */
  getKeys(options?: msRest.RequestOptionsBase): Promise<Models.EndpointKeysGetKeysResponse>;
  /**
   * @param callback The callback
   */
  getKeys(callback: msRest.ServiceCallback<Models.EndpointKeysDTO>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  getKeys(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.EndpointKeysDTO>): void;
  getKeys(options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.EndpointKeysDTO>, callback?: msRest.ServiceCallback<Models.EndpointKeysDTO>): Promise<Models.EndpointKeysGetKeysResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      getKeysOperationSpec,
      callback) as Promise<Models.EndpointKeysGetKeysResponse>;
  }

  /**
   * @summary Re-generates an endpoint key.
   * @param keyType Type of Key
   * @param [options] The optional parameters
   * @returns Promise<Models.EndpointKeysRefreshKeysResponse>
   */
  refreshKeys(keyType: string, options?: msRest.RequestOptionsBase): Promise<Models.EndpointKeysRefreshKeysResponse>;
  /**
   * @param keyType Type of Key
   * @param callback The callback
   */
  refreshKeys(keyType: string, callback: msRest.ServiceCallback<Models.EndpointKeysDTO>): void;
  /**
   * @param keyType Type of Key
   * @param options The optional parameters
   * @param callback The callback
   */
  refreshKeys(keyType: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.EndpointKeysDTO>): void;
  refreshKeys(keyType: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.EndpointKeysDTO>, callback?: msRest.ServiceCallback<Models.EndpointKeysDTO>): Promise<Models.EndpointKeysRefreshKeysResponse> {
    return this.client.sendOperationRequest(
      {
        keyType,
        options
      },
      refreshKeysOperationSpec,
      callback) as Promise<Models.EndpointKeysRefreshKeysResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getKeysOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "endpointkeys",
  urlParameters: [
    Parameters.endpoint
  ],
  responses: {
    200: {
      bodyMapper: Mappers.EndpointKeysDTO
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const refreshKeysOperationSpec: msRest.OperationSpec = {
  httpMethod: "PATCH",
  path: "endpointkeys/{keyType}",
  urlParameters: [
    Parameters.endpoint,
    Parameters.keyType
  ],
  responses: {
    200: {
      bodyMapper: Mappers.EndpointKeysDTO
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};
