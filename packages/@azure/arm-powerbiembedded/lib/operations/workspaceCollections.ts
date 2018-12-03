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
import * as msRestAzure from "ms-rest-azure-js";
import * as Models from "../models";
import * as Mappers from "../models/workspaceCollectionsMappers";
import * as Parameters from "../models/parameters";
import { PowerBIEmbeddedManagementClientContext } from "../powerBIEmbeddedManagementClientContext";

/** Class representing a WorkspaceCollections. */
export class WorkspaceCollections {
  private readonly client: PowerBIEmbeddedManagementClientContext;

  /**
   * Create a WorkspaceCollections.
   * @param {PowerBIEmbeddedManagementClientContext} client Reference to the service client.
   */
  constructor(client: PowerBIEmbeddedManagementClientContext) {
    this.client = client;
  }

  /**
   * Retrieves an existing Power BI Workspace Collection.
   * @param resourceGroupName Azure resource group
   * @param workspaceCollectionName Power BI Embedded Workspace Collection name
   * @param [options] The optional parameters
   * @returns Promise<Models.WorkspaceCollectionsGetByNameResponse>
   */
  getByName(resourceGroupName: string, workspaceCollectionName: string, options?: msRest.RequestOptionsBase): Promise<Models.WorkspaceCollectionsGetByNameResponse>;
  /**
   * @param resourceGroupName Azure resource group
   * @param workspaceCollectionName Power BI Embedded Workspace Collection name
   * @param callback The callback
   */
  getByName(resourceGroupName: string, workspaceCollectionName: string, callback: msRest.ServiceCallback<Models.WorkspaceCollection>): void;
  /**
   * @param resourceGroupName Azure resource group
   * @param workspaceCollectionName Power BI Embedded Workspace Collection name
   * @param options The optional parameters
   * @param callback The callback
   */
  getByName(resourceGroupName: string, workspaceCollectionName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.WorkspaceCollection>): void;
  getByName(resourceGroupName: string, workspaceCollectionName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.WorkspaceCollection>, callback?: msRest.ServiceCallback<Models.WorkspaceCollection>): Promise<Models.WorkspaceCollectionsGetByNameResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        workspaceCollectionName,
        options
      },
      getByNameOperationSpec,
      callback) as Promise<Models.WorkspaceCollectionsGetByNameResponse>;
  }

  /**
   * Creates a new Power BI Workspace Collection with the specified properties. A Power BI Workspace
   * Collection contains one or more workspaces, and can be used to provision keys that provide API
   * access to those workspaces.
   * @param resourceGroupName Azure resource group
   * @param workspaceCollectionName Power BI Embedded Workspace Collection name
   * @param body Create workspace collection request
   * @param [options] The optional parameters
   * @returns Promise<Models.WorkspaceCollectionsCreateResponse>
   */
  create(resourceGroupName: string, workspaceCollectionName: string, body: Models.CreateWorkspaceCollectionRequest, options?: msRest.RequestOptionsBase): Promise<Models.WorkspaceCollectionsCreateResponse>;
  /**
   * @param resourceGroupName Azure resource group
   * @param workspaceCollectionName Power BI Embedded Workspace Collection name
   * @param body Create workspace collection request
   * @param callback The callback
   */
  create(resourceGroupName: string, workspaceCollectionName: string, body: Models.CreateWorkspaceCollectionRequest, callback: msRest.ServiceCallback<Models.WorkspaceCollection>): void;
  /**
   * @param resourceGroupName Azure resource group
   * @param workspaceCollectionName Power BI Embedded Workspace Collection name
   * @param body Create workspace collection request
   * @param options The optional parameters
   * @param callback The callback
   */
  create(resourceGroupName: string, workspaceCollectionName: string, body: Models.CreateWorkspaceCollectionRequest, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.WorkspaceCollection>): void;
  create(resourceGroupName: string, workspaceCollectionName: string, body: Models.CreateWorkspaceCollectionRequest, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.WorkspaceCollection>, callback?: msRest.ServiceCallback<Models.WorkspaceCollection>): Promise<Models.WorkspaceCollectionsCreateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        workspaceCollectionName,
        body,
        options
      },
      createOperationSpec,
      callback) as Promise<Models.WorkspaceCollectionsCreateResponse>;
  }

  /**
   * Update an existing Power BI Workspace Collection with the specified properties.
   * @param resourceGroupName Azure resource group
   * @param workspaceCollectionName Power BI Embedded Workspace Collection name
   * @param body Update workspace collection request
   * @param [options] The optional parameters
   * @returns Promise<Models.WorkspaceCollectionsUpdateResponse>
   */
  update(resourceGroupName: string, workspaceCollectionName: string, body: Models.UpdateWorkspaceCollectionRequest, options?: msRest.RequestOptionsBase): Promise<Models.WorkspaceCollectionsUpdateResponse>;
  /**
   * @param resourceGroupName Azure resource group
   * @param workspaceCollectionName Power BI Embedded Workspace Collection name
   * @param body Update workspace collection request
   * @param callback The callback
   */
  update(resourceGroupName: string, workspaceCollectionName: string, body: Models.UpdateWorkspaceCollectionRequest, callback: msRest.ServiceCallback<Models.WorkspaceCollection>): void;
  /**
   * @param resourceGroupName Azure resource group
   * @param workspaceCollectionName Power BI Embedded Workspace Collection name
   * @param body Update workspace collection request
   * @param options The optional parameters
   * @param callback The callback
   */
  update(resourceGroupName: string, workspaceCollectionName: string, body: Models.UpdateWorkspaceCollectionRequest, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.WorkspaceCollection>): void;
  update(resourceGroupName: string, workspaceCollectionName: string, body: Models.UpdateWorkspaceCollectionRequest, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.WorkspaceCollection>, callback?: msRest.ServiceCallback<Models.WorkspaceCollection>): Promise<Models.WorkspaceCollectionsUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        workspaceCollectionName,
        body,
        options
      },
      updateOperationSpec,
      callback) as Promise<Models.WorkspaceCollectionsUpdateResponse>;
  }

  /**
   * Delete a Power BI Workspace Collection.
   * @param resourceGroupName Azure resource group
   * @param workspaceCollectionName Power BI Embedded Workspace Collection name
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, workspaceCollectionName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginDeleteMethod(resourceGroupName,workspaceCollectionName,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * Verify the specified Power BI Workspace Collection name is valid and not already in use.
   * @param location Azure location
   * @param body Check name availability request
   * @param [options] The optional parameters
   * @returns Promise<Models.WorkspaceCollectionsCheckNameAvailabilityResponse>
   */
  checkNameAvailability(location: string, body: Models.CheckNameRequest, options?: msRest.RequestOptionsBase): Promise<Models.WorkspaceCollectionsCheckNameAvailabilityResponse>;
  /**
   * @param location Azure location
   * @param body Check name availability request
   * @param callback The callback
   */
  checkNameAvailability(location: string, body: Models.CheckNameRequest, callback: msRest.ServiceCallback<Models.CheckNameResponse>): void;
  /**
   * @param location Azure location
   * @param body Check name availability request
   * @param options The optional parameters
   * @param callback The callback
   */
  checkNameAvailability(location: string, body: Models.CheckNameRequest, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.CheckNameResponse>): void;
  checkNameAvailability(location: string, body: Models.CheckNameRequest, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.CheckNameResponse>, callback?: msRest.ServiceCallback<Models.CheckNameResponse>): Promise<Models.WorkspaceCollectionsCheckNameAvailabilityResponse> {
    return this.client.sendOperationRequest(
      {
        location,
        body,
        options
      },
      checkNameAvailabilityOperationSpec,
      callback) as Promise<Models.WorkspaceCollectionsCheckNameAvailabilityResponse>;
  }

  /**
   * Retrieves all existing Power BI workspace collections in the specified resource group.
   * @param resourceGroupName Azure resource group
   * @param [options] The optional parameters
   * @returns Promise<Models.WorkspaceCollectionsListByResourceGroupResponse>
   */
  listByResourceGroup(resourceGroupName: string, options?: msRest.RequestOptionsBase): Promise<Models.WorkspaceCollectionsListByResourceGroupResponse>;
  /**
   * @param resourceGroupName Azure resource group
   * @param callback The callback
   */
  listByResourceGroup(resourceGroupName: string, callback: msRest.ServiceCallback<Models.WorkspaceCollectionList>): void;
  /**
   * @param resourceGroupName Azure resource group
   * @param options The optional parameters
   * @param callback The callback
   */
  listByResourceGroup(resourceGroupName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.WorkspaceCollectionList>): void;
  listByResourceGroup(resourceGroupName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.WorkspaceCollectionList>, callback?: msRest.ServiceCallback<Models.WorkspaceCollectionList>): Promise<Models.WorkspaceCollectionsListByResourceGroupResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        options
      },
      listByResourceGroupOperationSpec,
      callback) as Promise<Models.WorkspaceCollectionsListByResourceGroupResponse>;
  }

  /**
   * Retrieves all existing Power BI workspace collections in the specified subscription.
   * @param [options] The optional parameters
   * @returns Promise<Models.WorkspaceCollectionsListBySubscriptionResponse>
   */
  listBySubscription(options?: msRest.RequestOptionsBase): Promise<Models.WorkspaceCollectionsListBySubscriptionResponse>;
  /**
   * @param callback The callback
   */
  listBySubscription(callback: msRest.ServiceCallback<Models.WorkspaceCollectionList>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  listBySubscription(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.WorkspaceCollectionList>): void;
  listBySubscription(options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.WorkspaceCollectionList>, callback?: msRest.ServiceCallback<Models.WorkspaceCollectionList>): Promise<Models.WorkspaceCollectionsListBySubscriptionResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      listBySubscriptionOperationSpec,
      callback) as Promise<Models.WorkspaceCollectionsListBySubscriptionResponse>;
  }

  /**
   * Retrieves the primary and secondary access keys for the specified Power BI Workspace Collection.
   * @param resourceGroupName Azure resource group
   * @param workspaceCollectionName Power BI Embedded Workspace Collection name
   * @param [options] The optional parameters
   * @returns Promise<Models.WorkspaceCollectionsGetAccessKeysResponse>
   */
  getAccessKeys(resourceGroupName: string, workspaceCollectionName: string, options?: msRest.RequestOptionsBase): Promise<Models.WorkspaceCollectionsGetAccessKeysResponse>;
  /**
   * @param resourceGroupName Azure resource group
   * @param workspaceCollectionName Power BI Embedded Workspace Collection name
   * @param callback The callback
   */
  getAccessKeys(resourceGroupName: string, workspaceCollectionName: string, callback: msRest.ServiceCallback<Models.WorkspaceCollectionAccessKeys>): void;
  /**
   * @param resourceGroupName Azure resource group
   * @param workspaceCollectionName Power BI Embedded Workspace Collection name
   * @param options The optional parameters
   * @param callback The callback
   */
  getAccessKeys(resourceGroupName: string, workspaceCollectionName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.WorkspaceCollectionAccessKeys>): void;
  getAccessKeys(resourceGroupName: string, workspaceCollectionName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.WorkspaceCollectionAccessKeys>, callback?: msRest.ServiceCallback<Models.WorkspaceCollectionAccessKeys>): Promise<Models.WorkspaceCollectionsGetAccessKeysResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        workspaceCollectionName,
        options
      },
      getAccessKeysOperationSpec,
      callback) as Promise<Models.WorkspaceCollectionsGetAccessKeysResponse>;
  }

  /**
   * Regenerates the primary or secondary access key for the specified Power BI Workspace Collection.
   * @param resourceGroupName Azure resource group
   * @param workspaceCollectionName Power BI Embedded Workspace Collection name
   * @param body Access key to regenerate
   * @param [options] The optional parameters
   * @returns Promise<Models.WorkspaceCollectionsRegenerateKeyResponse>
   */
  regenerateKey(resourceGroupName: string, workspaceCollectionName: string, body: Models.WorkspaceCollectionAccessKey, options?: msRest.RequestOptionsBase): Promise<Models.WorkspaceCollectionsRegenerateKeyResponse>;
  /**
   * @param resourceGroupName Azure resource group
   * @param workspaceCollectionName Power BI Embedded Workspace Collection name
   * @param body Access key to regenerate
   * @param callback The callback
   */
  regenerateKey(resourceGroupName: string, workspaceCollectionName: string, body: Models.WorkspaceCollectionAccessKey, callback: msRest.ServiceCallback<Models.WorkspaceCollectionAccessKeys>): void;
  /**
   * @param resourceGroupName Azure resource group
   * @param workspaceCollectionName Power BI Embedded Workspace Collection name
   * @param body Access key to regenerate
   * @param options The optional parameters
   * @param callback The callback
   */
  regenerateKey(resourceGroupName: string, workspaceCollectionName: string, body: Models.WorkspaceCollectionAccessKey, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.WorkspaceCollectionAccessKeys>): void;
  regenerateKey(resourceGroupName: string, workspaceCollectionName: string, body: Models.WorkspaceCollectionAccessKey, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.WorkspaceCollectionAccessKeys>, callback?: msRest.ServiceCallback<Models.WorkspaceCollectionAccessKeys>): Promise<Models.WorkspaceCollectionsRegenerateKeyResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        workspaceCollectionName,
        body,
        options
      },
      regenerateKeyOperationSpec,
      callback) as Promise<Models.WorkspaceCollectionsRegenerateKeyResponse>;
  }

  /**
   * Migrates an existing Power BI Workspace Collection to a different resource group and/or
   * subscription.
   * @param resourceGroupName Azure resource group
   * @param body Workspace migration request
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  migrate(resourceGroupName: string, body: Models.MigrateWorkspaceCollectionRequest, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param resourceGroupName Azure resource group
   * @param body Workspace migration request
   * @param callback The callback
   */
  migrate(resourceGroupName: string, body: Models.MigrateWorkspaceCollectionRequest, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param resourceGroupName Azure resource group
   * @param body Workspace migration request
   * @param options The optional parameters
   * @param callback The callback
   */
  migrate(resourceGroupName: string, body: Models.MigrateWorkspaceCollectionRequest, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  migrate(resourceGroupName: string, body: Models.MigrateWorkspaceCollectionRequest, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        body,
        options
      },
      migrateOperationSpec,
      callback);
  }

  /**
   * Delete a Power BI Workspace Collection.
   * @param resourceGroupName Azure resource group
   * @param workspaceCollectionName Power BI Embedded Workspace Collection name
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginDeleteMethod(resourceGroupName: string, workspaceCollectionName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        workspaceCollectionName,
        options
      },
      beginDeleteMethodOperationSpec,
      options);
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getByNameOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.PowerBI/workspaceCollections/{workspaceCollectionName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceCollectionName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.WorkspaceCollection
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const createOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.PowerBI/workspaceCollections/{workspaceCollectionName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceCollectionName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "body",
    mapper: {
      ...Mappers.CreateWorkspaceCollectionRequest,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.WorkspaceCollection
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const updateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PATCH",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.PowerBI/workspaceCollections/{workspaceCollectionName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceCollectionName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "body",
    mapper: {
      ...Mappers.UpdateWorkspaceCollectionRequest,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.WorkspaceCollection
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const checkNameAvailabilityOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.PowerBI/locations/{location}/checkNameAvailability",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.location
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "body",
    mapper: {
      ...Mappers.CheckNameRequest,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.CheckNameResponse
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const listByResourceGroupOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.PowerBI/workspaceCollections",
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
      bodyMapper: Mappers.WorkspaceCollectionList
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const listBySubscriptionOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.PowerBI/workspaceCollections",
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
      bodyMapper: Mappers.WorkspaceCollectionList
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const getAccessKeysOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.PowerBI/workspaceCollections/{workspaceCollectionName}/listKeys",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceCollectionName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.WorkspaceCollectionAccessKeys
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const regenerateKeyOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.PowerBI/workspaceCollections/{workspaceCollectionName}/regenerateKey",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceCollectionName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "body",
    mapper: {
      ...Mappers.WorkspaceCollectionAccessKey,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.WorkspaceCollectionAccessKeys
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const migrateOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/moveResources",
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
  requestBody: {
    parameterPath: "body",
    mapper: {
      ...Mappers.MigrateWorkspaceCollectionRequest,
      required: true
    }
  },
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const beginDeleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.PowerBI/workspaceCollections/{workspaceCollectionName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceCollectionName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    202: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};
