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
import * as Mappers from "../models/mediaservicesMappers";
import * as Parameters from "../models/parameters";
import { AzureMediaServicesContext } from "../azureMediaServicesContext";

/** Class representing a Mediaservices. */
export class Mediaservices {
  private readonly client: AzureMediaServicesContext;

  /**
   * Create a Mediaservices.
   * @param {AzureMediaServicesContext} client Reference to the service client.
   */
  constructor(client: AzureMediaServicesContext) {
    this.client = client;
  }

  /**
   * List Media Services accounts in the resource group
   * @summary List Media Services accounts
   * @param resourceGroupName The name of the resource group within the Azure subscription.
   * @param [options] The optional parameters
   * @returns Promise<Models.MediaservicesListResponse>
   */
  list(resourceGroupName: string, options?: msRest.RequestOptionsBase): Promise<Models.MediaservicesListResponse>;
  /**
   * @param resourceGroupName The name of the resource group within the Azure subscription.
   * @param callback The callback
   */
  list(resourceGroupName: string, callback: msRest.ServiceCallback<Models.MediaServiceCollection>): void;
  /**
   * @param resourceGroupName The name of the resource group within the Azure subscription.
   * @param options The optional parameters
   * @param callback The callback
   */
  list(resourceGroupName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.MediaServiceCollection>): void;
  list(resourceGroupName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.MediaServiceCollection>, callback?: msRest.ServiceCallback<Models.MediaServiceCollection>): Promise<Models.MediaservicesListResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        options
      },
      listOperationSpec,
      callback) as Promise<Models.MediaservicesListResponse>;
  }

  /**
   * Get the details of a Media Services account
   * @summary Get a Media Services account
   * @param resourceGroupName The name of the resource group within the Azure subscription.
   * @param accountName The Media Services account name.
   * @param [options] The optional parameters
   * @returns Promise<Models.MediaservicesGetResponse>
   */
  get(resourceGroupName: string, accountName: string, options?: msRest.RequestOptionsBase): Promise<Models.MediaservicesGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group within the Azure subscription.
   * @param accountName The Media Services account name.
   * @param callback The callback
   */
  get(resourceGroupName: string, accountName: string, callback: msRest.ServiceCallback<Models.MediaService>): void;
  /**
   * @param resourceGroupName The name of the resource group within the Azure subscription.
   * @param accountName The Media Services account name.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, accountName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.MediaService>): void;
  get(resourceGroupName: string, accountName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.MediaService>, callback?: msRest.ServiceCallback<Models.MediaService>): Promise<Models.MediaservicesGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        accountName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.MediaservicesGetResponse>;
  }

  /**
   * Creates or updates a Media Services account
   * @summary Create or update a Media Services account
   * @param resourceGroupName The name of the resource group within the Azure subscription.
   * @param accountName The Media Services account name.
   * @param parameters The request parameters
   * @param [options] The optional parameters
   * @returns Promise<Models.MediaservicesCreateOrUpdateResponse>
   */
  createOrUpdate(resourceGroupName: string, accountName: string, parameters: Models.MediaService, options?: msRest.RequestOptionsBase): Promise<Models.MediaservicesCreateOrUpdateResponse>;
  /**
   * @param resourceGroupName The name of the resource group within the Azure subscription.
   * @param accountName The Media Services account name.
   * @param parameters The request parameters
   * @param callback The callback
   */
  createOrUpdate(resourceGroupName: string, accountName: string, parameters: Models.MediaService, callback: msRest.ServiceCallback<Models.MediaService>): void;
  /**
   * @param resourceGroupName The name of the resource group within the Azure subscription.
   * @param accountName The Media Services account name.
   * @param parameters The request parameters
   * @param options The optional parameters
   * @param callback The callback
   */
  createOrUpdate(resourceGroupName: string, accountName: string, parameters: Models.MediaService, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.MediaService>): void;
  createOrUpdate(resourceGroupName: string, accountName: string, parameters: Models.MediaService, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.MediaService>, callback?: msRest.ServiceCallback<Models.MediaService>): Promise<Models.MediaservicesCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        accountName,
        parameters,
        options
      },
      createOrUpdateOperationSpec,
      callback) as Promise<Models.MediaservicesCreateOrUpdateResponse>;
  }

  /**
   * Deletes a Media Services account
   * @summary Delete a Media Services account.
   * @param resourceGroupName The name of the resource group within the Azure subscription.
   * @param accountName The Media Services account name.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, accountName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param resourceGroupName The name of the resource group within the Azure subscription.
   * @param accountName The Media Services account name.
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, accountName: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param resourceGroupName The name of the resource group within the Azure subscription.
   * @param accountName The Media Services account name.
   * @param options The optional parameters
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, accountName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  deleteMethod(resourceGroupName: string, accountName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        accountName,
        options
      },
      deleteMethodOperationSpec,
      callback);
  }

  /**
   * Updates an existing Media Services account
   * @summary Update a Media Services account
   * @param resourceGroupName The name of the resource group within the Azure subscription.
   * @param accountName The Media Services account name.
   * @param parameters The request parameters
   * @param [options] The optional parameters
   * @returns Promise<Models.MediaservicesUpdateResponse>
   */
  update(resourceGroupName: string, accountName: string, parameters: Models.MediaService, options?: msRest.RequestOptionsBase): Promise<Models.MediaservicesUpdateResponse>;
  /**
   * @param resourceGroupName The name of the resource group within the Azure subscription.
   * @param accountName The Media Services account name.
   * @param parameters The request parameters
   * @param callback The callback
   */
  update(resourceGroupName: string, accountName: string, parameters: Models.MediaService, callback: msRest.ServiceCallback<Models.MediaService>): void;
  /**
   * @param resourceGroupName The name of the resource group within the Azure subscription.
   * @param accountName The Media Services account name.
   * @param parameters The request parameters
   * @param options The optional parameters
   * @param callback The callback
   */
  update(resourceGroupName: string, accountName: string, parameters: Models.MediaService, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.MediaService>): void;
  update(resourceGroupName: string, accountName: string, parameters: Models.MediaService, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.MediaService>, callback?: msRest.ServiceCallback<Models.MediaService>): Promise<Models.MediaservicesUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        accountName,
        parameters,
        options
      },
      updateOperationSpec,
      callback) as Promise<Models.MediaservicesUpdateResponse>;
  }

  /**
   * Synchronizes storage account keys for a storage account associated with the Media Service
   * account.
   * @summary Synchronizes Storage Account Keys
   * @param resourceGroupName The name of the resource group within the Azure subscription.
   * @param accountName The Media Services account name.
   * @param parameters The request parameters
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  syncStorageKeys(resourceGroupName: string, accountName: string, parameters: Models.SyncStorageKeysInput, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param resourceGroupName The name of the resource group within the Azure subscription.
   * @param accountName The Media Services account name.
   * @param parameters The request parameters
   * @param callback The callback
   */
  syncStorageKeys(resourceGroupName: string, accountName: string, parameters: Models.SyncStorageKeysInput, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param resourceGroupName The name of the resource group within the Azure subscription.
   * @param accountName The Media Services account name.
   * @param parameters The request parameters
   * @param options The optional parameters
   * @param callback The callback
   */
  syncStorageKeys(resourceGroupName: string, accountName: string, parameters: Models.SyncStorageKeysInput, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  syncStorageKeys(resourceGroupName: string, accountName: string, parameters: Models.SyncStorageKeysInput, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        accountName,
        parameters,
        options
      },
      syncStorageKeysOperationSpec,
      callback);
  }

  /**
   * List Media Services accounts in the subscription.
   * @summary List Media Services accounts
   * @param [options] The optional parameters
   * @returns Promise<Models.MediaservicesListBySubscriptionResponse>
   */
  listBySubscription(options?: msRest.RequestOptionsBase): Promise<Models.MediaservicesListBySubscriptionResponse>;
  /**
   * @param callback The callback
   */
  listBySubscription(callback: msRest.ServiceCallback<Models.SubscriptionMediaServiceCollection>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  listBySubscription(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.SubscriptionMediaServiceCollection>): void;
  listBySubscription(options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.SubscriptionMediaServiceCollection>, callback?: msRest.ServiceCallback<Models.SubscriptionMediaServiceCollection>): Promise<Models.MediaservicesListBySubscriptionResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      listBySubscriptionOperationSpec,
      callback) as Promise<Models.MediaservicesListBySubscriptionResponse>;
  }

  /**
   * Get the details of a Media Services account
   * @summary Get a Media Services account
   * @param accountName The Media Services account name.
   * @param [options] The optional parameters
   * @returns Promise<Models.MediaservicesGetBySubscriptionResponse>
   */
  getBySubscription(accountName: string, options?: msRest.RequestOptionsBase): Promise<Models.MediaservicesGetBySubscriptionResponse>;
  /**
   * @param accountName The Media Services account name.
   * @param callback The callback
   */
  getBySubscription(accountName: string, callback: msRest.ServiceCallback<Models.SubscriptionMediaService>): void;
  /**
   * @param accountName The Media Services account name.
   * @param options The optional parameters
   * @param callback The callback
   */
  getBySubscription(accountName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.SubscriptionMediaService>): void;
  getBySubscription(accountName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.SubscriptionMediaService>, callback?: msRest.ServiceCallback<Models.SubscriptionMediaService>): Promise<Models.MediaservicesGetBySubscriptionResponse> {
    return this.client.sendOperationRequest(
      {
        accountName,
        options
      },
      getBySubscriptionOperationSpec,
      callback) as Promise<Models.MediaservicesGetBySubscriptionResponse>;
  }

  /**
   * List Media Services accounts in the resource group
   * @summary List Media Services accounts
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.MediaservicesListNextResponse>
   */
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.MediaservicesListNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.MediaServiceCollection>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.MediaServiceCollection>): void;
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.MediaServiceCollection>, callback?: msRest.ServiceCallback<Models.MediaServiceCollection>): Promise<Models.MediaservicesListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.MediaservicesListNextResponse>;
  }

  /**
   * List Media Services accounts in the subscription.
   * @summary List Media Services accounts
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.MediaservicesListBySubscriptionNextResponse>
   */
  listBySubscriptionNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.MediaservicesListBySubscriptionNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listBySubscriptionNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.SubscriptionMediaServiceCollection>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listBySubscriptionNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.SubscriptionMediaServiceCollection>): void;
  listBySubscriptionNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.SubscriptionMediaServiceCollection>, callback?: msRest.ServiceCallback<Models.SubscriptionMediaServiceCollection>): Promise<Models.MediaservicesListBySubscriptionNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listBySubscriptionNextOperationSpec,
      callback) as Promise<Models.MediaservicesListBySubscriptionNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Media/mediaservices",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.MediaServiceCollection
    },
    default: {
      bodyMapper: Mappers.ApiError
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Media/mediaservices/{accountName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.MediaService
    },
    default: {
      bodyMapper: Mappers.ApiError
    }
  },
  serializer
};

const createOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Media/mediaservices/{accountName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.MediaService,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.MediaService
    },
    201: {
      bodyMapper: Mappers.MediaService
    },
    default: {
      bodyMapper: Mappers.ApiError
    }
  },
  serializer
};

const deleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Media/mediaservices/{accountName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ApiError
    }
  },
  serializer
};

const updateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PATCH",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Media/mediaservices/{accountName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.MediaService,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.MediaService
    },
    default: {
      bodyMapper: Mappers.ApiError
    }
  },
  serializer
};

const syncStorageKeysOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Media/mediaservices/{accountName}/syncStorageKeys",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.SyncStorageKeysInput,
      required: true
    }
  },
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ApiError
    }
  },
  serializer
};

const listBySubscriptionOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.Media/mediaservices",
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
      bodyMapper: Mappers.SubscriptionMediaServiceCollection
    },
    default: {
      bodyMapper: Mappers.ApiError
    }
  },
  serializer
};

const getBySubscriptionOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.Media/mediaservices/{accountName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.accountName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.SubscriptionMediaService
    },
    default: {
      bodyMapper: Mappers.ApiError
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
      bodyMapper: Mappers.MediaServiceCollection
    },
    default: {
      bodyMapper: Mappers.ApiError
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
      bodyMapper: Mappers.SubscriptionMediaServiceCollection
    },
    default: {
      bodyMapper: Mappers.ApiError
    }
  },
  serializer
};
