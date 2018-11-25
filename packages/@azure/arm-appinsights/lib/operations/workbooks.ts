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
import * as Mappers from "../models/workbooksMappers";
import * as Parameters from "../models/parameters";
import { ApplicationInsightsManagementClientContext } from "../applicationInsightsManagementClientContext";

/** Class representing a Workbooks. */
export class Workbooks {
  private readonly client: ApplicationInsightsManagementClientContext;

  /**
   * Create a Workbooks.
   * @param {ApplicationInsightsManagementClientContext} client Reference to the service client.
   */
  constructor(client: ApplicationInsightsManagementClientContext) {
    this.client = client;
  }

  /**
   * Get all Workbooks defined within a specified resource group and category.
   * @param resourceGroupName The name of the resource group.
   * @param category Category of workbook to return. Possible values include: 'workbook', 'TSG',
   * 'performance', 'retention'
   * @param [options] The optional parameters
   * @returns Promise<Models.WorkbooksListByResourceGroupResponse>
   */
  listByResourceGroup(resourceGroupName: string, category: Models.CategoryType, options?: Models.WorkbooksListByResourceGroupOptionalParams): Promise<Models.WorkbooksListByResourceGroupResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param category Category of workbook to return. Possible values include: 'workbook', 'TSG',
   * 'performance', 'retention'
   * @param callback The callback
   */
  listByResourceGroup(resourceGroupName: string, category: Models.CategoryType, callback: msRest.ServiceCallback<Models.WorkbooksListResult>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param category Category of workbook to return. Possible values include: 'workbook', 'TSG',
   * 'performance', 'retention'
   * @param options The optional parameters
   * @param callback The callback
   */
  listByResourceGroup(resourceGroupName: string, category: Models.CategoryType, options: Models.WorkbooksListByResourceGroupOptionalParams, callback: msRest.ServiceCallback<Models.WorkbooksListResult>): void;
  listByResourceGroup(resourceGroupName: string, category: Models.CategoryType, options?: Models.WorkbooksListByResourceGroupOptionalParams | msRest.ServiceCallback<Models.WorkbooksListResult>, callback?: msRest.ServiceCallback<Models.WorkbooksListResult>): Promise<Models.WorkbooksListByResourceGroupResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        category,
        options
      },
      listByResourceGroupOperationSpec,
      callback) as Promise<Models.WorkbooksListByResourceGroupResponse>;
  }

  /**
   * Get a single workbook by its resourceName.
   * @param resourceGroupName The name of the resource group.
   * @param resourceName The name of the Application Insights component resource.
   * @param [options] The optional parameters
   * @returns Promise<Models.WorkbooksGetResponse>
   */
  get(resourceGroupName: string, resourceName: string, options?: msRest.RequestOptionsBase): Promise<Models.WorkbooksGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param resourceName The name of the Application Insights component resource.
   * @param callback The callback
   */
  get(resourceGroupName: string, resourceName: string, callback: msRest.ServiceCallback<Models.Workbook>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param resourceName The name of the Application Insights component resource.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, resourceName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Workbook>): void;
  get(resourceGroupName: string, resourceName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.Workbook>, callback?: msRest.ServiceCallback<Models.Workbook>): Promise<Models.WorkbooksGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        resourceName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.WorkbooksGetResponse>;
  }

  /**
   * Delete a workbook.
   * @param resourceGroupName The name of the resource group.
   * @param resourceName The name of the Application Insights component resource.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, resourceName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param resourceName The name of the Application Insights component resource.
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, resourceName: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param resourceName The name of the Application Insights component resource.
   * @param options The optional parameters
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, resourceName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  deleteMethod(resourceGroupName: string, resourceName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        resourceName,
        options
      },
      deleteMethodOperationSpec,
      callback);
  }

  /**
   * Create a new workbook.
   * @param resourceGroupName The name of the resource group.
   * @param resourceName The name of the Application Insights component resource.
   * @param workbookProperties Properties that need to be specified to create a new workbook.
   * @param [options] The optional parameters
   * @returns Promise<Models.WorkbooksCreateOrUpdateResponse>
   */
  createOrUpdate(resourceGroupName: string, resourceName: string, workbookProperties: Models.Workbook, options?: msRest.RequestOptionsBase): Promise<Models.WorkbooksCreateOrUpdateResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param resourceName The name of the Application Insights component resource.
   * @param workbookProperties Properties that need to be specified to create a new workbook.
   * @param callback The callback
   */
  createOrUpdate(resourceGroupName: string, resourceName: string, workbookProperties: Models.Workbook, callback: msRest.ServiceCallback<Models.Workbook>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param resourceName The name of the Application Insights component resource.
   * @param workbookProperties Properties that need to be specified to create a new workbook.
   * @param options The optional parameters
   * @param callback The callback
   */
  createOrUpdate(resourceGroupName: string, resourceName: string, workbookProperties: Models.Workbook, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Workbook>): void;
  createOrUpdate(resourceGroupName: string, resourceName: string, workbookProperties: Models.Workbook, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.Workbook>, callback?: msRest.ServiceCallback<Models.Workbook>): Promise<Models.WorkbooksCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        resourceName,
        workbookProperties,
        options
      },
      createOrUpdateOperationSpec,
      callback) as Promise<Models.WorkbooksCreateOrUpdateResponse>;
  }

  /**
   * Updates a workbook that has already been added.
   * @param resourceGroupName The name of the resource group.
   * @param resourceName The name of the Application Insights component resource.
   * @param workbookProperties Properties that need to be specified to create a new workbook.
   * @param [options] The optional parameters
   * @returns Promise<Models.WorkbooksUpdateResponse>
   */
  update(resourceGroupName: string, resourceName: string, workbookProperties: Models.Workbook, options?: msRest.RequestOptionsBase): Promise<Models.WorkbooksUpdateResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param resourceName The name of the Application Insights component resource.
   * @param workbookProperties Properties that need to be specified to create a new workbook.
   * @param callback The callback
   */
  update(resourceGroupName: string, resourceName: string, workbookProperties: Models.Workbook, callback: msRest.ServiceCallback<Models.Workbook>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param resourceName The name of the Application Insights component resource.
   * @param workbookProperties Properties that need to be specified to create a new workbook.
   * @param options The optional parameters
   * @param callback The callback
   */
  update(resourceGroupName: string, resourceName: string, workbookProperties: Models.Workbook, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Workbook>): void;
  update(resourceGroupName: string, resourceName: string, workbookProperties: Models.Workbook, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.Workbook>, callback?: msRest.ServiceCallback<Models.Workbook>): Promise<Models.WorkbooksUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        resourceName,
        workbookProperties,
        options
      },
      updateOperationSpec,
      callback) as Promise<Models.WorkbooksUpdateResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listByResourceGroupOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroup/{resourceGroupName}/providers/microsoft.insights/workbooks",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName
  ],
  queryParameters: [
    Parameters.category,
    Parameters.tags,
    Parameters.canFetchContent,
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.WorkbooksListResult
    },
    default: {
      bodyMapper: Mappers.WorkbookError
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroup/{resourceGroupName}/providers/microsoft.insights/workbooks/{resourceName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.resourceName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.Workbook
    },
    default: {
      bodyMapper: Mappers.WorkbookError
    }
  },
  serializer
};

const deleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroup/{resourceGroupName}/providers/microsoft.insights/workbooks/{resourceName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.resourceName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    201: {},
    204: {},
    default: {
      bodyMapper: Mappers.WorkbookError
    }
  },
  serializer
};

const createOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroup/{resourceGroupName}/providers/microsoft.insights/workbooks/{resourceName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.resourceName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "workbookProperties",
    mapper: {
      ...Mappers.Workbook,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.Workbook
    },
    201: {
      bodyMapper: Mappers.Workbook
    },
    default: {
      bodyMapper: Mappers.WorkbookError
    }
  },
  serializer
};

const updateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PATCH",
  path: "subscriptions/{subscriptionId}/resourceGroup/{resourceGroupName}/providers/microsoft.insights/workbooks/{resourceName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.resourceName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "workbookProperties",
    mapper: {
      ...Mappers.Workbook,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.Workbook
    },
    default: {
      bodyMapper: Mappers.WorkbookError
    }
  },
  serializer
};
