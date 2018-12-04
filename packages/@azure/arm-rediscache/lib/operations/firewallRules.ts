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
import * as Mappers from "../models/firewallRulesMappers";
import * as Parameters from "../models/parameters";
import { RedisManagementClientContext } from "../redisManagementClientContext";

/** Class representing a FirewallRules. */
export class FirewallRules {
  private readonly client: RedisManagementClientContext;

  /**
   * Create a FirewallRules.
   * @param {RedisManagementClientContext} client Reference to the service client.
   */
  constructor(client: RedisManagementClientContext) {
    this.client = client;
  }

  /**
   * Gets all firewall rules in the specified redis cache.
   * @param resourceGroupName The name of the resource group.
   * @param cacheName The name of the Redis cache.
   * @param [options] The optional parameters
   * @returns Promise<Models.FirewallRulesListByRedisResourceResponse>
   */
  listByRedisResource(resourceGroupName: string, cacheName: string, options?: msRest.RequestOptionsBase): Promise<Models.FirewallRulesListByRedisResourceResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param cacheName The name of the Redis cache.
   * @param callback The callback
   */
  listByRedisResource(resourceGroupName: string, cacheName: string, callback: msRest.ServiceCallback<Models.RedisFirewallRuleListResult>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param cacheName The name of the Redis cache.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByRedisResource(resourceGroupName: string, cacheName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.RedisFirewallRuleListResult>): void;
  listByRedisResource(resourceGroupName: string, cacheName: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.RedisFirewallRuleListResult>): Promise<Models.FirewallRulesListByRedisResourceResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        cacheName,
        options
      },
      listByRedisResourceOperationSpec,
      callback) as Promise<Models.FirewallRulesListByRedisResourceResponse>;
  }

  /**
   * Create or update a redis cache firewall rule
   * @param resourceGroupName The name of the resource group.
   * @param cacheName The name of the Redis cache.
   * @param ruleName The name of the firewall rule.
   * @param parameters Parameters supplied to the create or update redis firewall rule operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.FirewallRulesCreateOrUpdateResponse>
   */
  createOrUpdate(resourceGroupName: string, cacheName: string, ruleName: string, parameters: Models.RedisFirewallRuleCreateParameters, options?: msRest.RequestOptionsBase): Promise<Models.FirewallRulesCreateOrUpdateResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param cacheName The name of the Redis cache.
   * @param ruleName The name of the firewall rule.
   * @param parameters Parameters supplied to the create or update redis firewall rule operation.
   * @param callback The callback
   */
  createOrUpdate(resourceGroupName: string, cacheName: string, ruleName: string, parameters: Models.RedisFirewallRuleCreateParameters, callback: msRest.ServiceCallback<Models.RedisFirewallRule>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param cacheName The name of the Redis cache.
   * @param ruleName The name of the firewall rule.
   * @param parameters Parameters supplied to the create or update redis firewall rule operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  createOrUpdate(resourceGroupName: string, cacheName: string, ruleName: string, parameters: Models.RedisFirewallRuleCreateParameters, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.RedisFirewallRule>): void;
  createOrUpdate(resourceGroupName: string, cacheName: string, ruleName: string, parameters: Models.RedisFirewallRuleCreateParameters, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.RedisFirewallRule>): Promise<Models.FirewallRulesCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        cacheName,
        ruleName,
        parameters,
        options
      },
      createOrUpdateOperationSpec,
      callback) as Promise<Models.FirewallRulesCreateOrUpdateResponse>;
  }

  /**
   * Gets a single firewall rule in a specified redis cache.
   * @param resourceGroupName The name of the resource group.
   * @param cacheName The name of the Redis cache.
   * @param ruleName The name of the firewall rule.
   * @param [options] The optional parameters
   * @returns Promise<Models.FirewallRulesGetResponse>
   */
  get(resourceGroupName: string, cacheName: string, ruleName: string, options?: msRest.RequestOptionsBase): Promise<Models.FirewallRulesGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param cacheName The name of the Redis cache.
   * @param ruleName The name of the firewall rule.
   * @param callback The callback
   */
  get(resourceGroupName: string, cacheName: string, ruleName: string, callback: msRest.ServiceCallback<Models.RedisFirewallRule>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param cacheName The name of the Redis cache.
   * @param ruleName The name of the firewall rule.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, cacheName: string, ruleName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.RedisFirewallRule>): void;
  get(resourceGroupName: string, cacheName: string, ruleName: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.RedisFirewallRule>): Promise<Models.FirewallRulesGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        cacheName,
        ruleName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.FirewallRulesGetResponse>;
  }

  /**
   * Deletes a single firewall rule in a specified redis cache.
   * @param resourceGroupName The name of the resource group.
   * @param cacheName The name of the Redis cache.
   * @param ruleName The name of the firewall rule.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, cacheName: string, ruleName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param cacheName The name of the Redis cache.
   * @param ruleName The name of the firewall rule.
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, cacheName: string, ruleName: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param cacheName The name of the Redis cache.
   * @param ruleName The name of the firewall rule.
   * @param options The optional parameters
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, cacheName: string, ruleName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  deleteMethod(resourceGroupName: string, cacheName: string, ruleName: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        cacheName,
        ruleName,
        options
      },
      deleteMethodOperationSpec,
      callback);
  }

  /**
   * Gets all firewall rules in the specified redis cache.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.FirewallRulesListByRedisResourceNextResponse>
   */
  listByRedisResourceNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.FirewallRulesListByRedisResourceNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByRedisResourceNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.RedisFirewallRuleListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByRedisResourceNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.RedisFirewallRuleListResult>): void;
  listByRedisResourceNext(nextPageLink: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.RedisFirewallRuleListResult>): Promise<Models.FirewallRulesListByRedisResourceNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByRedisResourceNextOperationSpec,
      callback) as Promise<Models.FirewallRulesListByRedisResourceNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listByRedisResourceOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cache/Redis/{cacheName}/firewallRules",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.cacheName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.RedisFirewallRuleListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const createOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cache/Redis/{cacheName}/firewallRules/{ruleName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.cacheName,
    Parameters.ruleName,
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
      ...Mappers.RedisFirewallRuleCreateParameters,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.RedisFirewallRule
    },
    201: {
      bodyMapper: Mappers.RedisFirewallRule
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cache/Redis/{cacheName}/firewallRules/{ruleName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.cacheName,
    Parameters.ruleName,
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
      bodyMapper: Mappers.RedisFirewallRule
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const deleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cache/Redis/{cacheName}/firewallRules/{ruleName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.cacheName,
    Parameters.ruleName,
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

const listByRedisResourceNextOperationSpec: msRest.OperationSpec = {
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
      bodyMapper: Mappers.RedisFirewallRuleListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
