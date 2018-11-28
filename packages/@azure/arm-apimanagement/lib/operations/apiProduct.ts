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
import * as Mappers from "../models/apiProductMappers";
import * as Parameters from "../models/parameters";
import { ApiManagementClientContext } from "../apiManagementClientContext";

/** Class representing a ApiProduct. */
export class ApiProduct {
  private readonly client: ApiManagementClientContext;

  /**
   * Create a ApiProduct.
   * @param {ApiManagementClientContext} client Reference to the service client.
   */
  constructor(client: ApiManagementClientContext) {
    this.client = client;
  }

  /**
   * Lists all Products, which the API is part of.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param apiId API identifier. Must be unique in the current API Management service instance.
   * @param [options] The optional parameters
   * @returns Promise<Models.ApiProductListByApisResponse>
   */
  listByApis(resourceGroupName: string, serviceName: string, apiId: string, options?: Models.ApiProductListByApisOptionalParams): Promise<Models.ApiProductListByApisResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param apiId API identifier. Must be unique in the current API Management service instance.
   * @param callback The callback
   */
  listByApis(resourceGroupName: string, serviceName: string, apiId: string, callback: msRest.ServiceCallback<Models.ProductCollection>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param apiId API identifier. Must be unique in the current API Management service instance.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByApis(resourceGroupName: string, serviceName: string, apiId: string, options: Models.ApiProductListByApisOptionalParams, callback: msRest.ServiceCallback<Models.ProductCollection>): void;
  listByApis(resourceGroupName: string, serviceName: string, apiId: string, options?: Models.ApiProductListByApisOptionalParams | msRest.ServiceCallback<Models.ProductCollection>, callback?: msRest.ServiceCallback<Models.ProductCollection>): Promise<Models.ApiProductListByApisResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serviceName,
        apiId,
        options
      },
      listByApisOperationSpec,
      callback) as Promise<Models.ApiProductListByApisResponse>;
  }

  /**
   * Lists all Products, which the API is part of.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.ApiProductListByApisNextResponse>
   */
  listByApisNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.ApiProductListByApisNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByApisNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.ProductCollection>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByApisNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ProductCollection>): void;
  listByApisNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ProductCollection>, callback?: msRest.ServiceCallback<Models.ProductCollection>): Promise<Models.ApiProductListByApisNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByApisNextOperationSpec,
      callback) as Promise<Models.ApiProductListByApisNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listByApisOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/apis/{apiId}/products",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.apiId1,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.filter0,
    Parameters.top,
    Parameters.skip,
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ProductCollection
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const listByApisNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ProductCollection
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};
