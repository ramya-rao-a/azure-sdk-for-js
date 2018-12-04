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
import * as Mappers from "../models/linkedServicesMappers";
import * as Parameters from "../models/parameters";
import { OperationalInsightsManagementClientContext } from "../operationalInsightsManagementClientContext";

/** Class representing a LinkedServices. */
export class LinkedServices {
  private readonly client: OperationalInsightsManagementClientContext;

  /**
   * Create a LinkedServices.
   * @param {OperationalInsightsManagementClientContext} client Reference to the service client.
   */
  constructor(client: OperationalInsightsManagementClientContext) {
    this.client = client;
  }

  /**
   * Create or update a linked service.
   * @param resourceGroupName The name of the resource group to get. The name is case insensitive.
   * @param workspaceName Name of the Log Analytics Workspace that will contain the linkedServices
   * resource
   * @param linkedServiceName Name of the linkedServices resource
   * @param parameters The parameters required to create or update a linked service.
   * @param [options] The optional parameters
   * @returns Promise<Models.LinkedServicesCreateOrUpdateResponse>
   */
  createOrUpdate(resourceGroupName: string, workspaceName: string, linkedServiceName: string, parameters: Models.LinkedService, options?: msRest.RequestOptionsBase): Promise<Models.LinkedServicesCreateOrUpdateResponse>;
  /**
   * @param resourceGroupName The name of the resource group to get. The name is case insensitive.
   * @param workspaceName Name of the Log Analytics Workspace that will contain the linkedServices
   * resource
   * @param linkedServiceName Name of the linkedServices resource
   * @param parameters The parameters required to create or update a linked service.
   * @param callback The callback
   */
  createOrUpdate(resourceGroupName: string, workspaceName: string, linkedServiceName: string, parameters: Models.LinkedService, callback: msRest.ServiceCallback<Models.LinkedService>): void;
  /**
   * @param resourceGroupName The name of the resource group to get. The name is case insensitive.
   * @param workspaceName Name of the Log Analytics Workspace that will contain the linkedServices
   * resource
   * @param linkedServiceName Name of the linkedServices resource
   * @param parameters The parameters required to create or update a linked service.
   * @param options The optional parameters
   * @param callback The callback
   */
  createOrUpdate(resourceGroupName: string, workspaceName: string, linkedServiceName: string, parameters: Models.LinkedService, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.LinkedService>): void;
  createOrUpdate(resourceGroupName: string, workspaceName: string, linkedServiceName: string, parameters: Models.LinkedService, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.LinkedService>): Promise<Models.LinkedServicesCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        workspaceName,
        linkedServiceName,
        parameters,
        options
      },
      createOrUpdateOperationSpec,
      callback) as Promise<Models.LinkedServicesCreateOrUpdateResponse>;
  }

  /**
   * Deletes a linked service instance.
   * @param resourceGroupName The name of the resource group to get. The name is case insensitive.
   * @param workspaceName Name of the Log Analytics Workspace that contains the linkedServices
   * resource
   * @param linkedServiceName Name of the linked service.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, workspaceName: string, linkedServiceName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param resourceGroupName The name of the resource group to get. The name is case insensitive.
   * @param workspaceName Name of the Log Analytics Workspace that contains the linkedServices
   * resource
   * @param linkedServiceName Name of the linked service.
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, workspaceName: string, linkedServiceName: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param resourceGroupName The name of the resource group to get. The name is case insensitive.
   * @param workspaceName Name of the Log Analytics Workspace that contains the linkedServices
   * resource
   * @param linkedServiceName Name of the linked service.
   * @param options The optional parameters
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, workspaceName: string, linkedServiceName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  deleteMethod(resourceGroupName: string, workspaceName: string, linkedServiceName: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        workspaceName,
        linkedServiceName,
        options
      },
      deleteMethodOperationSpec,
      callback);
  }

  /**
   * Gets a linked service instance.
   * @param resourceGroupName The name of the resource group to get. The name is case insensitive.
   * @param workspaceName Name of the Log Analytics Workspace that contains the linkedServices
   * resource
   * @param linkedServiceName Name of the linked service.
   * @param [options] The optional parameters
   * @returns Promise<Models.LinkedServicesGetResponse>
   */
  get(resourceGroupName: string, workspaceName: string, linkedServiceName: string, options?: msRest.RequestOptionsBase): Promise<Models.LinkedServicesGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group to get. The name is case insensitive.
   * @param workspaceName Name of the Log Analytics Workspace that contains the linkedServices
   * resource
   * @param linkedServiceName Name of the linked service.
   * @param callback The callback
   */
  get(resourceGroupName: string, workspaceName: string, linkedServiceName: string, callback: msRest.ServiceCallback<Models.LinkedService>): void;
  /**
   * @param resourceGroupName The name of the resource group to get. The name is case insensitive.
   * @param workspaceName Name of the Log Analytics Workspace that contains the linkedServices
   * resource
   * @param linkedServiceName Name of the linked service.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, workspaceName: string, linkedServiceName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.LinkedService>): void;
  get(resourceGroupName: string, workspaceName: string, linkedServiceName: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.LinkedService>): Promise<Models.LinkedServicesGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        workspaceName,
        linkedServiceName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.LinkedServicesGetResponse>;
  }

  /**
   * Gets the linked services instances in a workspace.
   * @param resourceGroupName The name of the resource group to get. The name is case insensitive.
   * @param workspaceName Name of the Log Analytics Workspace that contains the linked services.
   * @param [options] The optional parameters
   * @returns Promise<Models.LinkedServicesListByWorkspaceResponse>
   */
  listByWorkspace(resourceGroupName: string, workspaceName: string, options?: msRest.RequestOptionsBase): Promise<Models.LinkedServicesListByWorkspaceResponse>;
  /**
   * @param resourceGroupName The name of the resource group to get. The name is case insensitive.
   * @param workspaceName Name of the Log Analytics Workspace that contains the linked services.
   * @param callback The callback
   */
  listByWorkspace(resourceGroupName: string, workspaceName: string, callback: msRest.ServiceCallback<Models.LinkedServiceListResult>): void;
  /**
   * @param resourceGroupName The name of the resource group to get. The name is case insensitive.
   * @param workspaceName Name of the Log Analytics Workspace that contains the linked services.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByWorkspace(resourceGroupName: string, workspaceName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.LinkedServiceListResult>): void;
  listByWorkspace(resourceGroupName: string, workspaceName: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.LinkedServiceListResult>): Promise<Models.LinkedServicesListByWorkspaceResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        workspaceName,
        options
      },
      listByWorkspaceOperationSpec,
      callback) as Promise<Models.LinkedServicesListByWorkspaceResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const createOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/linkedServices/{linkedServiceName}",
  urlParameters: [
    Parameters.resourceGroupName0,
    Parameters.workspaceName0,
    Parameters.linkedServiceName,
    Parameters.subscriptionId
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
      ...Mappers.LinkedService,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.LinkedService
    },
    201: {
      bodyMapper: Mappers.LinkedService
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const deleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/linkedServices/{linkedServiceName}",
  urlParameters: [
    Parameters.resourceGroupName0,
    Parameters.workspaceName0,
    Parameters.linkedServiceName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/linkedServices/{linkedServiceName}",
  urlParameters: [
    Parameters.resourceGroupName0,
    Parameters.workspaceName0,
    Parameters.linkedServiceName,
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
      bodyMapper: Mappers.LinkedService
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listByWorkspaceOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/linkedServices",
  urlParameters: [
    Parameters.resourceGroupName0,
    Parameters.workspaceName0,
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
      bodyMapper: Mappers.LinkedServiceListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
