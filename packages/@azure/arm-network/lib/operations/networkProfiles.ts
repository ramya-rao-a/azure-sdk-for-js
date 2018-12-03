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
import * as Mappers from "../models/networkProfilesMappers";
import * as Parameters from "../models/parameters";
import { NetworkManagementClientContext } from "../networkManagementClientContext";

/** Class representing a NetworkProfiles. */
export class NetworkProfiles {
  private readonly client: NetworkManagementClientContext;

  /**
   * Create a NetworkProfiles.
   * @param {NetworkManagementClientContext} client Reference to the service client.
   */
  constructor(client: NetworkManagementClientContext) {
    this.client = client;
  }

  /**
   * Deletes the specified network profile.
   * @param resourceGroupName The name of the resource group.
   * @param networkProfileName The name of the NetworkProfile.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, networkProfileName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param networkProfileName The name of the NetworkProfile.
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, networkProfileName: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param networkProfileName The name of the NetworkProfile.
   * @param options The optional parameters
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, networkProfileName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  deleteMethod(resourceGroupName: string, networkProfileName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        networkProfileName,
        options
      },
      deleteMethodOperationSpec,
      callback);
  }

  /**
   * Gets the specified network profile in a specified resource group.
   * @param resourceGroupName The name of the resource group.
   * @param networkProfileName The name of the Public IP Prefix.
   * @param [options] The optional parameters
   * @returns Promise<Models.NetworkProfilesGetResponse>
   */
  get(resourceGroupName: string, networkProfileName: string, options?: Models.NetworkProfilesGetOptionalParams): Promise<Models.NetworkProfilesGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param networkProfileName The name of the Public IP Prefix.
   * @param callback The callback
   */
  get(resourceGroupName: string, networkProfileName: string, callback: msRest.ServiceCallback<Models.NetworkProfile>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param networkProfileName The name of the Public IP Prefix.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, networkProfileName: string, options: Models.NetworkProfilesGetOptionalParams, callback: msRest.ServiceCallback<Models.NetworkProfile>): void;
  get(resourceGroupName: string, networkProfileName: string, options?: Models.NetworkProfilesGetOptionalParams | msRest.ServiceCallback<Models.NetworkProfile>, callback?: msRest.ServiceCallback<Models.NetworkProfile>): Promise<Models.NetworkProfilesGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        networkProfileName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.NetworkProfilesGetResponse>;
  }

  /**
   * Creates or updates a network profile.
   * @param resourceGroupName The name of the resource group.
   * @param networkProfileName The name of the network profile.
   * @param parameters Parameters supplied to the create or update network profile operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.NetworkProfilesCreateOrUpdateResponse>
   */
  createOrUpdate(resourceGroupName: string, networkProfileName: string, parameters: Models.NetworkProfile, options?: msRest.RequestOptionsBase): Promise<Models.NetworkProfilesCreateOrUpdateResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param networkProfileName The name of the network profile.
   * @param parameters Parameters supplied to the create or update network profile operation.
   * @param callback The callback
   */
  createOrUpdate(resourceGroupName: string, networkProfileName: string, parameters: Models.NetworkProfile, callback: msRest.ServiceCallback<Models.NetworkProfile>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param networkProfileName The name of the network profile.
   * @param parameters Parameters supplied to the create or update network profile operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  createOrUpdate(resourceGroupName: string, networkProfileName: string, parameters: Models.NetworkProfile, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.NetworkProfile>): void;
  createOrUpdate(resourceGroupName: string, networkProfileName: string, parameters: Models.NetworkProfile, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.NetworkProfile>, callback?: msRest.ServiceCallback<Models.NetworkProfile>): Promise<Models.NetworkProfilesCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        networkProfileName,
        parameters,
        options
      },
      createOrUpdateOperationSpec,
      callback) as Promise<Models.NetworkProfilesCreateOrUpdateResponse>;
  }

  /**
   * Updates network profile tags.
   * @param resourceGroupName The name of the resource group.
   * @param networkProfileName The name of the network profile.
   * @param parameters Parameters supplied to update network profile tags.
   * @param [options] The optional parameters
   * @returns Promise<Models.NetworkProfilesUpdateTagsResponse>
   */
  updateTags(resourceGroupName: string, networkProfileName: string, parameters: Models.TagsObject, options?: msRest.RequestOptionsBase): Promise<Models.NetworkProfilesUpdateTagsResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param networkProfileName The name of the network profile.
   * @param parameters Parameters supplied to update network profile tags.
   * @param callback The callback
   */
  updateTags(resourceGroupName: string, networkProfileName: string, parameters: Models.TagsObject, callback: msRest.ServiceCallback<Models.NetworkProfile>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param networkProfileName The name of the network profile.
   * @param parameters Parameters supplied to update network profile tags.
   * @param options The optional parameters
   * @param callback The callback
   */
  updateTags(resourceGroupName: string, networkProfileName: string, parameters: Models.TagsObject, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.NetworkProfile>): void;
  updateTags(resourceGroupName: string, networkProfileName: string, parameters: Models.TagsObject, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.NetworkProfile>, callback?: msRest.ServiceCallback<Models.NetworkProfile>): Promise<Models.NetworkProfilesUpdateTagsResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        networkProfileName,
        parameters,
        options
      },
      updateTagsOperationSpec,
      callback) as Promise<Models.NetworkProfilesUpdateTagsResponse>;
  }

  /**
   * Gets all the network profiles in a subscription.
   * @param [options] The optional parameters
   * @returns Promise<Models.NetworkProfilesListAllResponse>
   */
  listAll(options?: msRest.RequestOptionsBase): Promise<Models.NetworkProfilesListAllResponse>;
  /**
   * @param callback The callback
   */
  listAll(callback: msRest.ServiceCallback<Models.NetworkProfileListResult>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  listAll(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.NetworkProfileListResult>): void;
  listAll(options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.NetworkProfileListResult>, callback?: msRest.ServiceCallback<Models.NetworkProfileListResult>): Promise<Models.NetworkProfilesListAllResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      listAllOperationSpec,
      callback) as Promise<Models.NetworkProfilesListAllResponse>;
  }

  /**
   * Gets all network profiles in a resource group.
   * @param resourceGroupName The name of the resource group.
   * @param [options] The optional parameters
   * @returns Promise<Models.NetworkProfilesListResponse>
   */
  list(resourceGroupName: string, options?: msRest.RequestOptionsBase): Promise<Models.NetworkProfilesListResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param callback The callback
   */
  list(resourceGroupName: string, callback: msRest.ServiceCallback<Models.NetworkProfileListResult>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param options The optional parameters
   * @param callback The callback
   */
  list(resourceGroupName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.NetworkProfileListResult>): void;
  list(resourceGroupName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.NetworkProfileListResult>, callback?: msRest.ServiceCallback<Models.NetworkProfileListResult>): Promise<Models.NetworkProfilesListResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        options
      },
      listOperationSpec,
      callback) as Promise<Models.NetworkProfilesListResponse>;
  }

  /**
   * Gets all the network profiles in a subscription.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.NetworkProfilesListAllNextResponse>
   */
  listAllNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.NetworkProfilesListAllNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listAllNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.NetworkProfileListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listAllNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.NetworkProfileListResult>): void;
  listAllNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.NetworkProfileListResult>, callback?: msRest.ServiceCallback<Models.NetworkProfileListResult>): Promise<Models.NetworkProfilesListAllNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listAllNextOperationSpec,
      callback) as Promise<Models.NetworkProfilesListAllNextResponse>;
  }

  /**
   * Gets all network profiles in a resource group.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.NetworkProfilesListNextResponse>
   */
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.NetworkProfilesListNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.NetworkProfileListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.NetworkProfileListResult>): void;
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.NetworkProfileListResult>, callback?: msRest.ServiceCallback<Models.NetworkProfileListResult>): Promise<Models.NetworkProfilesListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.NetworkProfilesListNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const deleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/networkProfiles/{networkProfileName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.networkProfileName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/networkProfiles/{networkProfileName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.networkProfileName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion0,
    Parameters.expand
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.NetworkProfile
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const createOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/networkProfiles/{networkProfileName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.networkProfileName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.NetworkProfile,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.NetworkProfile
    },
    201: {
      bodyMapper: Mappers.NetworkProfile
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const updateTagsOperationSpec: msRest.OperationSpec = {
  httpMethod: "PATCH",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/networkProfiles/{networkProfileName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.networkProfileName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.TagsObject,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.NetworkProfile
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listAllOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.Network/networkProfiles",
  urlParameters: [
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.NetworkProfileListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/networkProfiles",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.NetworkProfileListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listAllNextOperationSpec: msRest.OperationSpec = {
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
      bodyMapper: Mappers.NetworkProfileListResult
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
      bodyMapper: Mappers.NetworkProfileListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
