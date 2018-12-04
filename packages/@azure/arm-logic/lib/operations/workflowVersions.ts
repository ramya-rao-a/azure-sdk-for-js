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
import * as Mappers from "../models/workflowVersionsMappers";
import * as Parameters from "../models/parameters";
import { LogicManagementClientContext } from "../logicManagementClientContext";

/** Class representing a WorkflowVersions. */
export class WorkflowVersions {
  private readonly client: LogicManagementClientContext;

  /**
   * Create a WorkflowVersions.
   * @param {LogicManagementClientContext} client Reference to the service client.
   */
  constructor(client: LogicManagementClientContext) {
    this.client = client;
  }

  /**
   * Gets a list of workflow versions.
   * @param resourceGroupName The resource group name.
   * @param workflowName The workflow name.
   * @param [options] The optional parameters
   * @returns Promise<Models.WorkflowVersionsListResponse>
   */
  list(resourceGroupName: string, workflowName: string, options?: Models.WorkflowVersionsListOptionalParams): Promise<Models.WorkflowVersionsListResponse>;
  /**
   * @param resourceGroupName The resource group name.
   * @param workflowName The workflow name.
   * @param callback The callback
   */
  list(resourceGroupName: string, workflowName: string, callback: msRest.ServiceCallback<Models.WorkflowVersionListResult>): void;
  /**
   * @param resourceGroupName The resource group name.
   * @param workflowName The workflow name.
   * @param options The optional parameters
   * @param callback The callback
   */
  list(resourceGroupName: string, workflowName: string, options: Models.WorkflowVersionsListOptionalParams, callback: msRest.ServiceCallback<Models.WorkflowVersionListResult>): void;
  list(resourceGroupName: string, workflowName: string, options?: Models.WorkflowVersionsListOptionalParams, callback?: msRest.ServiceCallback<Models.WorkflowVersionListResult>): Promise<Models.WorkflowVersionsListResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        workflowName,
        options
      },
      listOperationSpec,
      callback) as Promise<Models.WorkflowVersionsListResponse>;
  }

  /**
   * Gets a workflow version.
   * @param resourceGroupName The resource group name.
   * @param workflowName The workflow name.
   * @param versionId The workflow versionId.
   * @param [options] The optional parameters
   * @returns Promise<Models.WorkflowVersionsGetResponse>
   */
  get(resourceGroupName: string, workflowName: string, versionId: string, options?: msRest.RequestOptionsBase): Promise<Models.WorkflowVersionsGetResponse>;
  /**
   * @param resourceGroupName The resource group name.
   * @param workflowName The workflow name.
   * @param versionId The workflow versionId.
   * @param callback The callback
   */
  get(resourceGroupName: string, workflowName: string, versionId: string, callback: msRest.ServiceCallback<Models.WorkflowVersion>): void;
  /**
   * @param resourceGroupName The resource group name.
   * @param workflowName The workflow name.
   * @param versionId The workflow versionId.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, workflowName: string, versionId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.WorkflowVersion>): void;
  get(resourceGroupName: string, workflowName: string, versionId: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.WorkflowVersion>): Promise<Models.WorkflowVersionsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        workflowName,
        versionId,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.WorkflowVersionsGetResponse>;
  }

  /**
   * Gets a list of workflow versions.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.WorkflowVersionsListNextResponse>
   */
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.WorkflowVersionsListNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.WorkflowVersionListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.WorkflowVersionListResult>): void;
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.WorkflowVersionListResult>): Promise<Models.WorkflowVersionsListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.WorkflowVersionsListNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/workflows/{workflowName}/versions",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workflowName
  ],
  queryParameters: [
    Parameters.apiVersion,
    Parameters.top
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.WorkflowVersionListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/workflows/{workflowName}/versions/{versionId}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workflowName,
    Parameters.versionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.WorkflowVersion
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
      bodyMapper: Mappers.WorkflowVersionListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
