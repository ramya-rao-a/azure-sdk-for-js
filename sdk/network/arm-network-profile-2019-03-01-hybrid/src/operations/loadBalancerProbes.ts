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
import * as Mappers from "../models/loadBalancerProbesMappers";
import * as Parameters from "../models/parameters";
import { NetworkManagementClientContext } from "../networkManagementClientContext";

/** Class representing a LoadBalancerProbes. */
export class LoadBalancerProbes {
  private readonly client: NetworkManagementClientContext;

  /**
   * Create a LoadBalancerProbes.
   * @param {NetworkManagementClientContext} client Reference to the service client.
   */
  constructor(client: NetworkManagementClientContext) {
    this.client = client;
  }

  /**
   * Gets all the load balancer probes.
   * @param resourceGroupName The name of the resource group.
   * @param loadBalancerName The name of the load balancer.
   * @param [options] The optional parameters
   * @returns Promise<Models.LoadBalancerProbesListResponse>
   */
  list(resourceGroupName: string, loadBalancerName: string, options?: msRest.RequestOptionsBase): Promise<Models.LoadBalancerProbesListResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param loadBalancerName The name of the load balancer.
   * @param callback The callback
   */
  list(resourceGroupName: string, loadBalancerName: string, callback: msRest.ServiceCallback<Models.LoadBalancerProbeListResult>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param loadBalancerName The name of the load balancer.
   * @param options The optional parameters
   * @param callback The callback
   */
  list(resourceGroupName: string, loadBalancerName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.LoadBalancerProbeListResult>): void;
  list(resourceGroupName: string, loadBalancerName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.LoadBalancerProbeListResult>, callback?: msRest.ServiceCallback<Models.LoadBalancerProbeListResult>): Promise<Models.LoadBalancerProbesListResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        loadBalancerName,
        options
      },
      listOperationSpec,
      callback) as Promise<Models.LoadBalancerProbesListResponse>;
  }

  /**
   * Gets load balancer probe.
   * @param resourceGroupName The name of the resource group.
   * @param loadBalancerName The name of the load balancer.
   * @param probeName The name of the probe.
   * @param [options] The optional parameters
   * @returns Promise<Models.LoadBalancerProbesGetResponse>
   */
  get(resourceGroupName: string, loadBalancerName: string, probeName: string, options?: msRest.RequestOptionsBase): Promise<Models.LoadBalancerProbesGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param loadBalancerName The name of the load balancer.
   * @param probeName The name of the probe.
   * @param callback The callback
   */
  get(resourceGroupName: string, loadBalancerName: string, probeName: string, callback: msRest.ServiceCallback<Models.Probe>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param loadBalancerName The name of the load balancer.
   * @param probeName The name of the probe.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, loadBalancerName: string, probeName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Probe>): void;
  get(resourceGroupName: string, loadBalancerName: string, probeName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.Probe>, callback?: msRest.ServiceCallback<Models.Probe>): Promise<Models.LoadBalancerProbesGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        loadBalancerName,
        probeName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.LoadBalancerProbesGetResponse>;
  }

  /**
   * Gets all the load balancer probes.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.LoadBalancerProbesListNextResponse>
   */
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.LoadBalancerProbesListNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.LoadBalancerProbeListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.LoadBalancerProbeListResult>): void;
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.LoadBalancerProbeListResult>, callback?: msRest.ServiceCallback<Models.LoadBalancerProbeListResult>): Promise<Models.LoadBalancerProbesListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.LoadBalancerProbesListNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/loadBalancers/{loadBalancerName}/probes",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.loadBalancerName,
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
      bodyMapper: Mappers.LoadBalancerProbeListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/loadBalancers/{loadBalancerName}/probes/{probeName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.loadBalancerName,
    Parameters.probeName,
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
      bodyMapper: Mappers.Probe
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
      bodyMapper: Mappers.LoadBalancerProbeListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
