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
import * as Mappers from "../models/productGroupMappers";
import * as Parameters from "../models/parameters";
import { ApiManagementClientContext } from "../apiManagementClientContext";

/** Class representing a ProductGroup. */
export class ProductGroup {
  private readonly client: ApiManagementClientContext;

  /**
   * Create a ProductGroup.
   * @param {ApiManagementClientContext} client Reference to the service client.
   */
  constructor(client: ApiManagementClientContext) {
    this.client = client;
  }

  /**
   * Lists the collection of developer groups associated with the specified product.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param productId Product identifier. Must be unique in the current API Management service
   * instance.
   * @param [options] The optional parameters
   * @returns Promise<Models.ProductGroupListByProductResponse>
   */
  listByProduct(resourceGroupName: string, serviceName: string, productId: string, options?: Models.ProductGroupListByProductOptionalParams): Promise<Models.ProductGroupListByProductResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param productId Product identifier. Must be unique in the current API Management service
   * instance.
   * @param callback The callback
   */
  listByProduct(resourceGroupName: string, serviceName: string, productId: string, callback: msRest.ServiceCallback<Models.GroupCollection>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param productId Product identifier. Must be unique in the current API Management service
   * instance.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByProduct(resourceGroupName: string, serviceName: string, productId: string, options: Models.ProductGroupListByProductOptionalParams, callback: msRest.ServiceCallback<Models.GroupCollection>): void;
  listByProduct(resourceGroupName: string, serviceName: string, productId: string, options?: Models.ProductGroupListByProductOptionalParams | msRest.ServiceCallback<Models.GroupCollection>, callback?: msRest.ServiceCallback<Models.GroupCollection>): Promise<Models.ProductGroupListByProductResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serviceName,
        productId,
        options
      },
      listByProductOperationSpec,
      callback) as Promise<Models.ProductGroupListByProductResponse>;
  }

  /**
   * Checks that Group entity specified by identifier is associated with the Product entity.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param productId Product identifier. Must be unique in the current API Management service
   * instance.
   * @param groupId Group identifier. Must be unique in the current API Management service instance.
   * @param [options] The optional parameters
   * @returns Promise<Models.ProductGroupCheckEntityExistsResponse>
   */
  checkEntityExists(resourceGroupName: string, serviceName: string, productId: string, groupId: string, options?: msRest.RequestOptionsBase): Promise<Models.ProductGroupCheckEntityExistsResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param productId Product identifier. Must be unique in the current API Management service
   * instance.
   * @param groupId Group identifier. Must be unique in the current API Management service instance.
   * @param callback The callback
   */
  checkEntityExists(resourceGroupName: string, serviceName: string, productId: string, groupId: string, callback: msRest.ServiceCallback<boolean>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param productId Product identifier. Must be unique in the current API Management service
   * instance.
   * @param groupId Group identifier. Must be unique in the current API Management service instance.
   * @param options The optional parameters
   * @param callback The callback
   */
  checkEntityExists(resourceGroupName: string, serviceName: string, productId: string, groupId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<boolean>): void;
  checkEntityExists(resourceGroupName: string, serviceName: string, productId: string, groupId: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<boolean>, callback?: msRest.ServiceCallback<boolean>): Promise<Models.ProductGroupCheckEntityExistsResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serviceName,
        productId,
        groupId,
        options
      },
      checkEntityExistsOperationSpec,
      callback) as Promise<Models.ProductGroupCheckEntityExistsResponse>;
  }

  /**
   * Adds the association between the specified developer group with the specified product.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param productId Product identifier. Must be unique in the current API Management service
   * instance.
   * @param groupId Group identifier. Must be unique in the current API Management service instance.
   * @param [options] The optional parameters
   * @returns Promise<Models.ProductGroupCreateOrUpdateResponse>
   */
  createOrUpdate(resourceGroupName: string, serviceName: string, productId: string, groupId: string, options?: msRest.RequestOptionsBase): Promise<Models.ProductGroupCreateOrUpdateResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param productId Product identifier. Must be unique in the current API Management service
   * instance.
   * @param groupId Group identifier. Must be unique in the current API Management service instance.
   * @param callback The callback
   */
  createOrUpdate(resourceGroupName: string, serviceName: string, productId: string, groupId: string, callback: msRest.ServiceCallback<Models.GroupContract>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param productId Product identifier. Must be unique in the current API Management service
   * instance.
   * @param groupId Group identifier. Must be unique in the current API Management service instance.
   * @param options The optional parameters
   * @param callback The callback
   */
  createOrUpdate(resourceGroupName: string, serviceName: string, productId: string, groupId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.GroupContract>): void;
  createOrUpdate(resourceGroupName: string, serviceName: string, productId: string, groupId: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.GroupContract>, callback?: msRest.ServiceCallback<Models.GroupContract>): Promise<Models.ProductGroupCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serviceName,
        productId,
        groupId,
        options
      },
      createOrUpdateOperationSpec,
      callback) as Promise<Models.ProductGroupCreateOrUpdateResponse>;
  }

  /**
   * Deletes the association between the specified group and product.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param productId Product identifier. Must be unique in the current API Management service
   * instance.
   * @param groupId Group identifier. Must be unique in the current API Management service instance.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, serviceName: string, productId: string, groupId: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param productId Product identifier. Must be unique in the current API Management service
   * instance.
   * @param groupId Group identifier. Must be unique in the current API Management service instance.
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, serviceName: string, productId: string, groupId: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param productId Product identifier. Must be unique in the current API Management service
   * instance.
   * @param groupId Group identifier. Must be unique in the current API Management service instance.
   * @param options The optional parameters
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, serviceName: string, productId: string, groupId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  deleteMethod(resourceGroupName: string, serviceName: string, productId: string, groupId: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serviceName,
        productId,
        groupId,
        options
      },
      deleteMethodOperationSpec,
      callback);
  }

  /**
   * Lists the collection of developer groups associated with the specified product.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.ProductGroupListByProductNextResponse>
   */
  listByProductNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.ProductGroupListByProductNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByProductNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.GroupCollection>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByProductNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.GroupCollection>): void;
  listByProductNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.GroupCollection>, callback?: msRest.ServiceCallback<Models.GroupCollection>): Promise<Models.ProductGroupListByProductNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByProductNextOperationSpec,
      callback) as Promise<Models.ProductGroupListByProductNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listByProductOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/products/{productId}/groups",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.productId,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.filter0,
    Parameters.top,
    Parameters.skip,
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.GroupCollection
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const checkEntityExistsOperationSpec: msRest.OperationSpec = {
  httpMethod: "HEAD",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/products/{productId}/groups/{groupId}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.productId,
    Parameters.groupId,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    204: {},
    404: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const createOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/products/{productId}/groups/{groupId}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.productId,
    Parameters.groupId,
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
      bodyMapper: Mappers.GroupContract
    },
    201: {
      bodyMapper: Mappers.GroupContract
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const deleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/products/{productId}/groups/{groupId}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.productId,
    Parameters.groupId,
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
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const listByProductNextOperationSpec: msRest.OperationSpec = {
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
      bodyMapper: Mappers.GroupCollection
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};
