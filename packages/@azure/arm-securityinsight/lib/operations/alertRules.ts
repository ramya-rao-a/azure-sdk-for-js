/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as Models from "../models";
import * as Mappers from "../models/alertRulesMappers";
import * as Parameters from "../models/parameters";
import { SecurityInsightsContext } from "../securityInsightsContext";

/** Class representing a AlertRules. */
export class AlertRules {
  private readonly client: SecurityInsightsContext;

  /**
   * Create a AlertRules.
   * @param {SecurityInsightsContext} client Reference to the service client.
   */
  constructor(client: SecurityInsightsContext) {
    this.client = client;
  }

  /**
   * Gets an alert rule.
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param operationalInsightsResourceProvider The namespace of workspaces resource provider-
   * Microsoft.OperationalInsights.
   * @param workspaceName The name of the workspace.
   * @param ruleId Alert rule ID
   * @param [options] The optional parameters
   * @returns Promise<Models.AlertRulesGetResponse>
   */
  get(resourceGroupName: string, operationalInsightsResourceProvider: string, workspaceName: string, ruleId: string, options?: msRest.RequestOptionsBase): Promise<Models.AlertRulesGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param operationalInsightsResourceProvider The namespace of workspaces resource provider-
   * Microsoft.OperationalInsights.
   * @param workspaceName The name of the workspace.
   * @param ruleId Alert rule ID
   * @param callback The callback
   */
  get(resourceGroupName: string, operationalInsightsResourceProvider: string, workspaceName: string, ruleId: string, callback: msRest.ServiceCallback<Models.AlertRule>): void;
  /**
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param operationalInsightsResourceProvider The namespace of workspaces resource provider-
   * Microsoft.OperationalInsights.
   * @param workspaceName The name of the workspace.
   * @param ruleId Alert rule ID
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, operationalInsightsResourceProvider: string, workspaceName: string, ruleId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.AlertRule>): void;
  get(resourceGroupName: string, operationalInsightsResourceProvider: string, workspaceName: string, ruleId: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.AlertRule>, callback?: msRest.ServiceCallback<Models.AlertRule>): Promise<Models.AlertRulesGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        operationalInsightsResourceProvider,
        workspaceName,
        ruleId,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.AlertRulesGetResponse>;
  }

  /**
   * Creates or updates the alert rule.
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param operationalInsightsResourceProvider The namespace of workspaces resource provider-
   * Microsoft.OperationalInsights.
   * @param workspaceName The name of the workspace.
   * @param ruleId Alert rule ID
   * @param alertRule The alert rule
   * @param [options] The optional parameters
   * @returns Promise<Models.AlertRulesCreateResponse>
   */
  create(resourceGroupName: string, operationalInsightsResourceProvider: string, workspaceName: string, ruleId: string, alertRule: Models.AlertRule, options?: msRest.RequestOptionsBase): Promise<Models.AlertRulesCreateResponse>;
  /**
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param operationalInsightsResourceProvider The namespace of workspaces resource provider-
   * Microsoft.OperationalInsights.
   * @param workspaceName The name of the workspace.
   * @param ruleId Alert rule ID
   * @param alertRule The alert rule
   * @param callback The callback
   */
  create(resourceGroupName: string, operationalInsightsResourceProvider: string, workspaceName: string, ruleId: string, alertRule: Models.AlertRule, callback: msRest.ServiceCallback<Models.AlertRule>): void;
  /**
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param operationalInsightsResourceProvider The namespace of workspaces resource provider-
   * Microsoft.OperationalInsights.
   * @param workspaceName The name of the workspace.
   * @param ruleId Alert rule ID
   * @param alertRule The alert rule
   * @param options The optional parameters
   * @param callback The callback
   */
  create(resourceGroupName: string, operationalInsightsResourceProvider: string, workspaceName: string, ruleId: string, alertRule: Models.AlertRule, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.AlertRule>): void;
  create(resourceGroupName: string, operationalInsightsResourceProvider: string, workspaceName: string, ruleId: string, alertRule: Models.AlertRule, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.AlertRule>, callback?: msRest.ServiceCallback<Models.AlertRule>): Promise<Models.AlertRulesCreateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        operationalInsightsResourceProvider,
        workspaceName,
        ruleId,
        alertRule,
        options
      },
      createOperationSpec,
      callback) as Promise<Models.AlertRulesCreateResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{operationalInsightsResourceProvider}/workspaces/{workspaceName}/providers/Microsoft.SecurityInsights/alertRules/{ruleId}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.operationalInsightsResourceProvider,
    Parameters.workspaceName,
    Parameters.ruleId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.AlertRule
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const createOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{operationalInsightsResourceProvider}/workspaces/{workspaceName}/providers/Microsoft.SecurityInsights/alertRules/{ruleId}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.operationalInsightsResourceProvider,
    Parameters.workspaceName,
    Parameters.ruleId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "alertRule",
    mapper: {
      ...Mappers.AlertRule,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.AlertRule
    },
    201: {
      bodyMapper: Mappers.AlertRule
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
