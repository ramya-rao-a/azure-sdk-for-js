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
import * as Mappers from "../models/northSouthHardeningsOperationsMappers";
import * as Parameters from "../models/parameters";
import { SecurityCenterContext } from "../securityCenterContext";

/** Class representing a NorthSouthHardeningsOperations. */
export class NorthSouthHardeningsOperations {
  private readonly client: SecurityCenterContext;

  /**
   * Create a NorthSouthHardeningsOperations.
   * @param {SecurityCenterContext} client Reference to the service client.
   */
  constructor(client: SecurityCenterContext) {
    this.client = client;
  }

  /**
   * Gets a list of north-south hardening resources for the subscription.
   * @param [options] The optional parameters
   * @returns Promise<Models.NorthSouthHardeningsListResponse>
   */
  list(options?: msRest.RequestOptionsBase): Promise<Models.NorthSouthHardeningsListResponse>;
  /**
   * @param callback The callback
   */
  list(callback: msRest.ServiceCallback<Models.NorthSouthHardeningsList>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  list(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.NorthSouthHardeningsList>): void;
  list(options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.NorthSouthHardeningsList>, callback?: msRest.ServiceCallback<Models.NorthSouthHardeningsList>): Promise<Models.NorthSouthHardeningsListResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      listOperationSpec,
      callback) as Promise<Models.NorthSouthHardeningsListResponse>;
  }

  /**
   * Gets a list of north-south hardening resources for the resource group.
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param [options] The optional parameters
   * @returns Promise<Models.NorthSouthHardeningsListByResourceGroupResponse>
   */
  listByResourceGroup(resourceGroupName: string, options?: msRest.RequestOptionsBase): Promise<Models.NorthSouthHardeningsListByResourceGroupResponse>;
  /**
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param callback The callback
   */
  listByResourceGroup(resourceGroupName: string, callback: msRest.ServiceCallback<Models.NorthSouthHardeningsList>): void;
  /**
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByResourceGroup(resourceGroupName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.NorthSouthHardeningsList>): void;
  listByResourceGroup(resourceGroupName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.NorthSouthHardeningsList>, callback?: msRest.ServiceCallback<Models.NorthSouthHardeningsList>): Promise<Models.NorthSouthHardeningsListByResourceGroupResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        options
      },
      listByResourceGroupOperationSpec,
      callback) as Promise<Models.NorthSouthHardeningsListByResourceGroupResponse>;
  }

  /**
   * Gets the north-south traffic hardening for the specified resource
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param extendedResourceProvider Resource provider name of the base resource
   * @param extendedResourceType Type of the base resource
   * @param extendedResourceName The name of the base resource
   * @param northSouthResourceName Name of a north-south resource.
   * @param [options] The optional parameters
   * @returns Promise<Models.NorthSouthHardeningsGetResponse>
   */
  get(resourceGroupName: string, extendedResourceProvider: string, extendedResourceType: string, extendedResourceName: string, northSouthResourceName: string, options?: msRest.RequestOptionsBase): Promise<Models.NorthSouthHardeningsGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param extendedResourceProvider Resource provider name of the base resource
   * @param extendedResourceType Type of the base resource
   * @param extendedResourceName The name of the base resource
   * @param northSouthResourceName Name of a north-south resource.
   * @param callback The callback
   */
  get(resourceGroupName: string, extendedResourceProvider: string, extendedResourceType: string, extendedResourceName: string, northSouthResourceName: string, callback: msRest.ServiceCallback<Models.NorthSouthHardenings>): void;
  /**
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param extendedResourceProvider Resource provider name of the base resource
   * @param extendedResourceType Type of the base resource
   * @param extendedResourceName The name of the base resource
   * @param northSouthResourceName Name of a north-south resource.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, extendedResourceProvider: string, extendedResourceType: string, extendedResourceName: string, northSouthResourceName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.NorthSouthHardenings>): void;
  get(resourceGroupName: string, extendedResourceProvider: string, extendedResourceType: string, extendedResourceName: string, northSouthResourceName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.NorthSouthHardenings>, callback?: msRest.ServiceCallback<Models.NorthSouthHardenings>): Promise<Models.NorthSouthHardeningsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        extendedResourceProvider,
        extendedResourceType,
        extendedResourceName,
        northSouthResourceName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.NorthSouthHardeningsGetResponse>;
  }

  /**
   * Gets a list of north-south hardening resources for the subscription.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.NorthSouthHardeningsListNextResponse>
   */
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.NorthSouthHardeningsListNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.NorthSouthHardeningsList>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.NorthSouthHardeningsList>): void;
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.NorthSouthHardeningsList>, callback?: msRest.ServiceCallback<Models.NorthSouthHardeningsList>): Promise<Models.NorthSouthHardeningsListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.NorthSouthHardeningsListNextResponse>;
  }

  /**
   * Gets a list of north-south hardening resources for the resource group.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.NorthSouthHardeningsListByResourceGroupNextResponse>
   */
  listByResourceGroupNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.NorthSouthHardeningsListByResourceGroupNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByResourceGroupNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.NorthSouthHardeningsList>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByResourceGroupNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.NorthSouthHardeningsList>): void;
  listByResourceGroupNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.NorthSouthHardeningsList>, callback?: msRest.ServiceCallback<Models.NorthSouthHardeningsList>): Promise<Models.NorthSouthHardeningsListByResourceGroupNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByResourceGroupNextOperationSpec,
      callback) as Promise<Models.NorthSouthHardeningsListByResourceGroupNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.Security/northSouthHardenings",
  urlParameters: [
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion1
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.NorthSouthHardeningsList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listByResourceGroupOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Security/northSouthHardenings",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName
  ],
  queryParameters: [
    Parameters.apiVersion1
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.NorthSouthHardeningsList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{extendedResourceProvider}/{extendedResourceType}/{extendedResourceName}/providers/Microsoft.Security/northSouthHardenings/{northSouthResourceName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.extendedResourceProvider,
    Parameters.extendedResourceType,
    Parameters.extendedResourceName,
    Parameters.northSouthResourceName
  ],
  queryParameters: [
    Parameters.apiVersion1
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.NorthSouthHardenings
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listNextOperationSpec: msRest.OperationSpec = {
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
      bodyMapper: Mappers.NorthSouthHardeningsList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listByResourceGroupNextOperationSpec: msRest.OperationSpec = {
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
      bodyMapper: Mappers.NorthSouthHardeningsList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
