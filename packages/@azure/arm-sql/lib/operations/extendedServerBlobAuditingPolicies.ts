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
import * as Mappers from "../models/extendedServerBlobAuditingPoliciesMappers";
import * as Parameters from "../models/parameters";
import { SqlManagementClientContext } from "../sqlManagementClientContext";

/** Class representing a ExtendedServerBlobAuditingPolicies. */
export class ExtendedServerBlobAuditingPolicies {
  private readonly client: SqlManagementClientContext;

  /**
   * Create a ExtendedServerBlobAuditingPolicies.
   * @param {SqlManagementClientContext} client Reference to the service client.
   */
  constructor(client: SqlManagementClientContext) {
    this.client = client;
  }

  /**
   * Gets an extended server's blob auditing policy.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param [options] The optional parameters
   * @returns Promise<Models.ExtendedServerBlobAuditingPoliciesGetResponse>
   */
  get(resourceGroupName: string, serverName: string, options?: msRest.RequestOptionsBase): Promise<Models.ExtendedServerBlobAuditingPoliciesGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param callback The callback
   */
  get(resourceGroupName: string, serverName: string, callback: msRest.ServiceCallback<Models.ExtendedServerBlobAuditingPolicy>): void;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, serverName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ExtendedServerBlobAuditingPolicy>): void;
  get(resourceGroupName: string, serverName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ExtendedServerBlobAuditingPolicy>, callback?: msRest.ServiceCallback<Models.ExtendedServerBlobAuditingPolicy>): Promise<Models.ExtendedServerBlobAuditingPoliciesGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serverName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.ExtendedServerBlobAuditingPoliciesGetResponse>;
  }

  /**
   * Creates or updates an extended server's blob auditing policy.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param parameters Properties of extended blob auditing policy
   * @param [options] The optional parameters
   * @returns Promise<Models.ExtendedServerBlobAuditingPoliciesCreateOrUpdateResponse>
   */
  createOrUpdate(resourceGroupName: string, serverName: string, parameters: Models.ExtendedServerBlobAuditingPolicy, options?: msRest.RequestOptionsBase): Promise<Models.ExtendedServerBlobAuditingPoliciesCreateOrUpdateResponse> {
    return this.beginCreateOrUpdate(resourceGroupName,serverName,parameters,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.ExtendedServerBlobAuditingPoliciesCreateOrUpdateResponse>;
  }

  /**
   * Creates or updates an extended server's blob auditing policy.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param parameters Properties of extended blob auditing policy
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginCreateOrUpdate(resourceGroupName: string, serverName: string, parameters: Models.ExtendedServerBlobAuditingPolicy, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        serverName,
        parameters,
        options
      },
      beginCreateOrUpdateOperationSpec,
      options);
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/extendedAuditingSettings/{blobAuditingPolicyName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.blobAuditingPolicyName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion3
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ExtendedServerBlobAuditingPolicy
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginCreateOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/extendedAuditingSettings/{blobAuditingPolicyName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.blobAuditingPolicyName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion3
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.ExtendedServerBlobAuditingPolicy,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.ExtendedServerBlobAuditingPolicy
    },
    202: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
