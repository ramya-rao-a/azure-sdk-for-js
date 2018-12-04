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
import * as Mappers from "../models/watcherOperationsMappers";
import * as Parameters from "../models/parameters";
import { AutomationClientContext } from "../automationClientContext";

/** Class representing a WatcherOperations. */
export class WatcherOperations {
  private readonly client: AutomationClientContext;

  /**
   * Create a WatcherOperations.
   * @param {AutomationClientContext} client Reference to the service client.
   */
  constructor(client: AutomationClientContext) {
    this.client = client;
  }

  /**
   * Create the watcher identified by watcher name.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param watcherName The watcher name.
   * @param parameters The create or update parameters for watcher.
   * @param [options] The optional parameters
   * @returns Promise<Models.WatcherCreateOrUpdateResponse>
   */
  createOrUpdate(resourceGroupName: string, automationAccountName: string, watcherName: string, parameters: Models.Watcher, options?: msRest.RequestOptionsBase): Promise<Models.WatcherCreateOrUpdateResponse>;
  /**
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param watcherName The watcher name.
   * @param parameters The create or update parameters for watcher.
   * @param callback The callback
   */
  createOrUpdate(resourceGroupName: string, automationAccountName: string, watcherName: string, parameters: Models.Watcher, callback: msRest.ServiceCallback<Models.Watcher>): void;
  /**
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param watcherName The watcher name.
   * @param parameters The create or update parameters for watcher.
   * @param options The optional parameters
   * @param callback The callback
   */
  createOrUpdate(resourceGroupName: string, automationAccountName: string, watcherName: string, parameters: Models.Watcher, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Watcher>): void;
  createOrUpdate(resourceGroupName: string, automationAccountName: string, watcherName: string, parameters: Models.Watcher, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.Watcher>): Promise<Models.WatcherCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        automationAccountName,
        watcherName,
        parameters,
        options
      },
      createOrUpdateOperationSpec,
      callback) as Promise<Models.WatcherCreateOrUpdateResponse>;
  }

  /**
   * Retrieve the watcher identified by watcher name.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param watcherName The watcher name.
   * @param [options] The optional parameters
   * @returns Promise<Models.WatcherGetResponse>
   */
  get(resourceGroupName: string, automationAccountName: string, watcherName: string, options?: msRest.RequestOptionsBase): Promise<Models.WatcherGetResponse>;
  /**
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param watcherName The watcher name.
   * @param callback The callback
   */
  get(resourceGroupName: string, automationAccountName: string, watcherName: string, callback: msRest.ServiceCallback<Models.Watcher>): void;
  /**
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param watcherName The watcher name.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, automationAccountName: string, watcherName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Watcher>): void;
  get(resourceGroupName: string, automationAccountName: string, watcherName: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.Watcher>): Promise<Models.WatcherGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        automationAccountName,
        watcherName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.WatcherGetResponse>;
  }

  /**
   * Update the watcher identified by watcher name.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param watcherName The watcher name.
   * @param parameters The update parameters for watcher.
   * @param [options] The optional parameters
   * @returns Promise<Models.WatcherUpdateResponse>
   */
  update(resourceGroupName: string, automationAccountName: string, watcherName: string, parameters: Models.WatcherUpdateParameters, options?: msRest.RequestOptionsBase): Promise<Models.WatcherUpdateResponse>;
  /**
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param watcherName The watcher name.
   * @param parameters The update parameters for watcher.
   * @param callback The callback
   */
  update(resourceGroupName: string, automationAccountName: string, watcherName: string, parameters: Models.WatcherUpdateParameters, callback: msRest.ServiceCallback<Models.Watcher>): void;
  /**
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param watcherName The watcher name.
   * @param parameters The update parameters for watcher.
   * @param options The optional parameters
   * @param callback The callback
   */
  update(resourceGroupName: string, automationAccountName: string, watcherName: string, parameters: Models.WatcherUpdateParameters, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Watcher>): void;
  update(resourceGroupName: string, automationAccountName: string, watcherName: string, parameters: Models.WatcherUpdateParameters, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.Watcher>): Promise<Models.WatcherUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        automationAccountName,
        watcherName,
        parameters,
        options
      },
      updateOperationSpec,
      callback) as Promise<Models.WatcherUpdateResponse>;
  }

  /**
   * Delete the watcher by name.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param watcherName The watcher name.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, automationAccountName: string, watcherName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param watcherName The watcher name.
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, automationAccountName: string, watcherName: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param watcherName The watcher name.
   * @param options The optional parameters
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, automationAccountName: string, watcherName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  deleteMethod(resourceGroupName: string, automationAccountName: string, watcherName: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        automationAccountName,
        watcherName,
        options
      },
      deleteMethodOperationSpec,
      callback);
  }

  /**
   * Resume the watcher identified by watcher name.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param watcherName The watcher name.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  start(resourceGroupName: string, automationAccountName: string, watcherName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param watcherName The watcher name.
   * @param callback The callback
   */
  start(resourceGroupName: string, automationAccountName: string, watcherName: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param watcherName The watcher name.
   * @param options The optional parameters
   * @param callback The callback
   */
  start(resourceGroupName: string, automationAccountName: string, watcherName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  start(resourceGroupName: string, automationAccountName: string, watcherName: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        automationAccountName,
        watcherName,
        options
      },
      startOperationSpec,
      callback);
  }

  /**
   * Resume the watcher identified by watcher name.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param watcherName The watcher name.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  stop(resourceGroupName: string, automationAccountName: string, watcherName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param watcherName The watcher name.
   * @param callback The callback
   */
  stop(resourceGroupName: string, automationAccountName: string, watcherName: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param watcherName The watcher name.
   * @param options The optional parameters
   * @param callback The callback
   */
  stop(resourceGroupName: string, automationAccountName: string, watcherName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  stop(resourceGroupName: string, automationAccountName: string, watcherName: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        automationAccountName,
        watcherName,
        options
      },
      stopOperationSpec,
      callback);
  }

  /**
   * Retrieve a list of watchers.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param [options] The optional parameters
   * @returns Promise<Models.WatcherListByAutomationAccountResponse>
   */
  listByAutomationAccount(resourceGroupName: string, automationAccountName: string, options?: Models.WatcherListByAutomationAccountOptionalParams): Promise<Models.WatcherListByAutomationAccountResponse>;
  /**
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param callback The callback
   */
  listByAutomationAccount(resourceGroupName: string, automationAccountName: string, callback: msRest.ServiceCallback<Models.WatcherListResult>): void;
  /**
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByAutomationAccount(resourceGroupName: string, automationAccountName: string, options: Models.WatcherListByAutomationAccountOptionalParams, callback: msRest.ServiceCallback<Models.WatcherListResult>): void;
  listByAutomationAccount(resourceGroupName: string, automationAccountName: string, options?: Models.WatcherListByAutomationAccountOptionalParams, callback?: msRest.ServiceCallback<Models.WatcherListResult>): Promise<Models.WatcherListByAutomationAccountResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        automationAccountName,
        options
      },
      listByAutomationAccountOperationSpec,
      callback) as Promise<Models.WatcherListByAutomationAccountResponse>;
  }

  /**
   * Retrieve a list of watchers.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.WatcherListByAutomationAccountNextResponse>
   */
  listByAutomationAccountNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.WatcherListByAutomationAccountNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByAutomationAccountNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.WatcherListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByAutomationAccountNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.WatcherListResult>): void;
  listByAutomationAccountNext(nextPageLink: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.WatcherListResult>): Promise<Models.WatcherListByAutomationAccountNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByAutomationAccountNextOperationSpec,
      callback) as Promise<Models.WatcherListByAutomationAccountNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const createOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/watchers/{watcherName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.automationAccountName,
    Parameters.watcherName,
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
      ...Mappers.Watcher,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.Watcher
    },
    201: {
      bodyMapper: Mappers.Watcher
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/watchers/{watcherName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.automationAccountName,
    Parameters.watcherName,
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
      bodyMapper: Mappers.Watcher
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const updateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PATCH",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/watchers/{watcherName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.automationAccountName,
    Parameters.watcherName,
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
      ...Mappers.WatcherUpdateParameters,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.Watcher
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const deleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/watchers/{watcherName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.automationAccountName,
    Parameters.watcherName,
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
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const startOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/watchers/{watcherName}/start",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.automationAccountName,
    Parameters.watcherName,
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
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const stopOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/watchers/{watcherName}/stop",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.automationAccountName,
    Parameters.watcherName,
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
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const listByAutomationAccountOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/watchers",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.automationAccountName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.filter,
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.WatcherListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const listByAutomationAccountNextOperationSpec: msRest.OperationSpec = {
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
      bodyMapper: Mappers.WatcherListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};
