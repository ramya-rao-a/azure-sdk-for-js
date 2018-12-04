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
import * as Mappers from "../models/configurationsMappers";
import * as Parameters from "../models/parameters";
import { AdvisorManagementClientContext } from "../advisorManagementClientContext";

/** Class representing a Configurations. */
export class Configurations {
  private readonly client: AdvisorManagementClientContext;

  /**
   * Create a Configurations.
   * @param {AdvisorManagementClientContext} client Reference to the service client.
   */
  constructor(client: AdvisorManagementClientContext) {
    this.client = client;
  }

  /**
   * Retrieve Azure Advisor configurations and also retrieve configurations of contained resource
   * groups.
   * @summary Retrieve Azure Advisor configurations.
   * @param [options] The optional parameters
   * @returns Promise<Models.ConfigurationsListBySubscriptionResponse>
   */
  listBySubscription(options?: msRest.RequestOptionsBase): Promise<Models.ConfigurationsListBySubscriptionResponse>;
  /**
   * @param callback The callback
   */
  listBySubscription(callback: msRest.ServiceCallback<Models.ConfigurationListResult>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  listBySubscription(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ConfigurationListResult>): void;
  listBySubscription(options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.ConfigurationListResult>): Promise<Models.ConfigurationsListBySubscriptionResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      listBySubscriptionOperationSpec,
      callback) as Promise<Models.ConfigurationsListBySubscriptionResponse>;
  }

  /**
   * Create/Overwrite Azure Advisor configuration and also delete all configurations of contained
   * resource groups.
   * @summary Create/Overwrite Azure Advisor configuration.
   * @param configContract The Azure Advisor configuration data structure.
   * @param [options] The optional parameters
   * @returns Promise<Models.ConfigurationsCreateInSubscriptionResponse>
   */
  createInSubscription(configContract: Models.ConfigData, options?: msRest.RequestOptionsBase): Promise<Models.ConfigurationsCreateInSubscriptionResponse>;
  /**
   * @param configContract The Azure Advisor configuration data structure.
   * @param callback The callback
   */
  createInSubscription(configContract: Models.ConfigData, callback: msRest.ServiceCallback<Models.ARMErrorResponseBody>): void;
  /**
   * @param configContract The Azure Advisor configuration data structure.
   * @param options The optional parameters
   * @param callback The callback
   */
  createInSubscription(configContract: Models.ConfigData, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ARMErrorResponseBody>): void;
  createInSubscription(configContract: Models.ConfigData, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.ARMErrorResponseBody>): Promise<Models.ConfigurationsCreateInSubscriptionResponse> {
    return this.client.sendOperationRequest(
      {
        configContract,
        options
      },
      createInSubscriptionOperationSpec,
      callback) as Promise<Models.ConfigurationsCreateInSubscriptionResponse>;
  }

  /**
   * @summary Retrieve Azure Advisor configurations.
   * @param resourceGroup The name of the Azure resource group.
   * @param [options] The optional parameters
   * @returns Promise<Models.ConfigurationsListByResourceGroupResponse>
   */
  listByResourceGroup(resourceGroup: string, options?: msRest.RequestOptionsBase): Promise<Models.ConfigurationsListByResourceGroupResponse>;
  /**
   * @param resourceGroup The name of the Azure resource group.
   * @param callback The callback
   */
  listByResourceGroup(resourceGroup: string, callback: msRest.ServiceCallback<Models.ConfigurationListResult>): void;
  /**
   * @param resourceGroup The name of the Azure resource group.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByResourceGroup(resourceGroup: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ConfigurationListResult>): void;
  listByResourceGroup(resourceGroup: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.ConfigurationListResult>): Promise<Models.ConfigurationsListByResourceGroupResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroup,
        options
      },
      listByResourceGroupOperationSpec,
      callback) as Promise<Models.ConfigurationsListByResourceGroupResponse>;
  }

  /**
   * @summary Create/Overwrite Azure Advisor configuration.
   * @param configContract The Azure Advisor configuration data structure.
   * @param resourceGroup The name of the Azure resource group.
   * @param [options] The optional parameters
   * @returns Promise<Models.ConfigurationsCreateInResourceGroupResponse>
   */
  createInResourceGroup(configContract: Models.ConfigData, resourceGroup: string, options?: msRest.RequestOptionsBase): Promise<Models.ConfigurationsCreateInResourceGroupResponse>;
  /**
   * @param configContract The Azure Advisor configuration data structure.
   * @param resourceGroup The name of the Azure resource group.
   * @param callback The callback
   */
  createInResourceGroup(configContract: Models.ConfigData, resourceGroup: string, callback: msRest.ServiceCallback<Models.ARMErrorResponseBody>): void;
  /**
   * @param configContract The Azure Advisor configuration data structure.
   * @param resourceGroup The name of the Azure resource group.
   * @param options The optional parameters
   * @param callback The callback
   */
  createInResourceGroup(configContract: Models.ConfigData, resourceGroup: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ARMErrorResponseBody>): void;
  createInResourceGroup(configContract: Models.ConfigData, resourceGroup: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.ARMErrorResponseBody>): Promise<Models.ConfigurationsCreateInResourceGroupResponse> {
    return this.client.sendOperationRequest(
      {
        configContract,
        resourceGroup,
        options
      },
      createInResourceGroupOperationSpec,
      callback) as Promise<Models.ConfigurationsCreateInResourceGroupResponse>;
  }

  /**
   * Retrieve Azure Advisor configurations and also retrieve configurations of contained resource
   * groups.
   * @summary Retrieve Azure Advisor configurations.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.ConfigurationsListBySubscriptionNextResponse>
   */
  listBySubscriptionNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.ConfigurationsListBySubscriptionNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listBySubscriptionNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.ConfigurationListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listBySubscriptionNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ConfigurationListResult>): void;
  listBySubscriptionNext(nextPageLink: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.ConfigurationListResult>): Promise<Models.ConfigurationsListBySubscriptionNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listBySubscriptionNextOperationSpec,
      callback) as Promise<Models.ConfigurationsListBySubscriptionNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listBySubscriptionOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.Advisor/configurations",
  urlParameters: [
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ConfigurationListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const createInSubscriptionOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.Advisor/configurations",
  urlParameters: [
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "configContract",
    mapper: {
      ...Mappers.ConfigData,
      required: true
    }
  },
  responses: {
    204: {},
    400: {
      bodyMapper: Mappers.ARMErrorResponseBody
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listByResourceGroupOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.Advisor/configurations",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroup
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ConfigurationListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const createInResourceGroupOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.Advisor/configurations",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroup
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "configContract",
    mapper: {
      ...Mappers.ConfigData,
      required: true
    }
  },
  responses: {
    204: {},
    400: {
      bodyMapper: Mappers.ARMErrorResponseBody
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listBySubscriptionNextOperationSpec: msRest.OperationSpec = {
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
      bodyMapper: Mappers.ConfigurationListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
