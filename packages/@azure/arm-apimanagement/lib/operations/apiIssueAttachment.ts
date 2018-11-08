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
import * as Mappers from "../models/apiIssueAttachmentMappers";
import * as Parameters from "../models/parameters";
import { ApiManagementClientContext } from "../apiManagementClientContext";

/** Class representing a ApiIssueAttachment. */
export class ApiIssueAttachment {
  private readonly client: ApiManagementClientContext;

  /**
   * Create a ApiIssueAttachment.
   * @param {ApiManagementClientContext} client Reference to the service client.
   */
  constructor(client: ApiManagementClientContext) {
    this.client = client;
  }

  /**
   * Lists all comments for the Issue assosiated with the specified API.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param apiId API identifier. Must be unique in the current API Management service instance.
   * @param issueId Issue identifier. Must be unique in the current API Management service instance.
   * @param [options] The optional parameters
   * @returns Promise<Models.ApiIssueAttachmentListByServiceResponse>
   */
  listByService(resourceGroupName: string, serviceName: string, apiId: string, issueId: string, options?: Models.ApiIssueAttachmentListByServiceOptionalParams): Promise<Models.ApiIssueAttachmentListByServiceResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param apiId API identifier. Must be unique in the current API Management service instance.
   * @param issueId Issue identifier. Must be unique in the current API Management service instance.
   * @param callback The callback
   */
  listByService(resourceGroupName: string, serviceName: string, apiId: string, issueId: string, callback: msRest.ServiceCallback<Models.IssueAttachmentCollection>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param apiId API identifier. Must be unique in the current API Management service instance.
   * @param issueId Issue identifier. Must be unique in the current API Management service instance.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByService(resourceGroupName: string, serviceName: string, apiId: string, issueId: string, options: Models.ApiIssueAttachmentListByServiceOptionalParams, callback: msRest.ServiceCallback<Models.IssueAttachmentCollection>): void;
  listByService(resourceGroupName: string, serviceName: string, apiId: string, issueId: string, options?: Models.ApiIssueAttachmentListByServiceOptionalParams | msRest.ServiceCallback<Models.IssueAttachmentCollection>, callback?: msRest.ServiceCallback<Models.IssueAttachmentCollection>): Promise<Models.ApiIssueAttachmentListByServiceResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serviceName,
        apiId,
        issueId,
        options
      },
      listByServiceOperationSpec,
      callback) as Promise<Models.ApiIssueAttachmentListByServiceResponse>;
  }

  /**
   * Gets the entity state (Etag) version of the issue Attachment for an API specified by its
   * identifier.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param apiId API identifier. Must be unique in the current API Management service instance.
   * @param issueId Issue identifier. Must be unique in the current API Management service instance.
   * @param attachmentId Attachment identifier within an Issue. Must be unique in the current Issue.
   * @param [options] The optional parameters
   * @returns Promise<Models.ApiIssueAttachmentGetEntityTagResponse>
   */
  getEntityTag(resourceGroupName: string, serviceName: string, apiId: string, issueId: string, attachmentId: string, options?: msRest.RequestOptionsBase): Promise<Models.ApiIssueAttachmentGetEntityTagResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param apiId API identifier. Must be unique in the current API Management service instance.
   * @param issueId Issue identifier. Must be unique in the current API Management service instance.
   * @param attachmentId Attachment identifier within an Issue. Must be unique in the current Issue.
   * @param callback The callback
   */
  getEntityTag(resourceGroupName: string, serviceName: string, apiId: string, issueId: string, attachmentId: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param apiId API identifier. Must be unique in the current API Management service instance.
   * @param issueId Issue identifier. Must be unique in the current API Management service instance.
   * @param attachmentId Attachment identifier within an Issue. Must be unique in the current Issue.
   * @param options The optional parameters
   * @param callback The callback
   */
  getEntityTag(resourceGroupName: string, serviceName: string, apiId: string, issueId: string, attachmentId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  getEntityTag(resourceGroupName: string, serviceName: string, apiId: string, issueId: string, attachmentId: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<Models.ApiIssueAttachmentGetEntityTagResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serviceName,
        apiId,
        issueId,
        attachmentId,
        options
      },
      getEntityTagOperationSpec,
      callback) as Promise<Models.ApiIssueAttachmentGetEntityTagResponse>;
  }

  /**
   * Gets the details of the issue Attachment for an API specified by its identifier.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param apiId API identifier. Must be unique in the current API Management service instance.
   * @param issueId Issue identifier. Must be unique in the current API Management service instance.
   * @param attachmentId Attachment identifier within an Issue. Must be unique in the current Issue.
   * @param [options] The optional parameters
   * @returns Promise<Models.ApiIssueAttachmentGetResponse>
   */
  get(resourceGroupName: string, serviceName: string, apiId: string, issueId: string, attachmentId: string, options?: msRest.RequestOptionsBase): Promise<Models.ApiIssueAttachmentGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param apiId API identifier. Must be unique in the current API Management service instance.
   * @param issueId Issue identifier. Must be unique in the current API Management service instance.
   * @param attachmentId Attachment identifier within an Issue. Must be unique in the current Issue.
   * @param callback The callback
   */
  get(resourceGroupName: string, serviceName: string, apiId: string, issueId: string, attachmentId: string, callback: msRest.ServiceCallback<Models.IssueAttachmentContract>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param apiId API identifier. Must be unique in the current API Management service instance.
   * @param issueId Issue identifier. Must be unique in the current API Management service instance.
   * @param attachmentId Attachment identifier within an Issue. Must be unique in the current Issue.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, serviceName: string, apiId: string, issueId: string, attachmentId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.IssueAttachmentContract>): void;
  get(resourceGroupName: string, serviceName: string, apiId: string, issueId: string, attachmentId: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.IssueAttachmentContract>, callback?: msRest.ServiceCallback<Models.IssueAttachmentContract>): Promise<Models.ApiIssueAttachmentGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serviceName,
        apiId,
        issueId,
        attachmentId,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.ApiIssueAttachmentGetResponse>;
  }

  /**
   * Creates a new Attachment for the Issue in an API or updates an existing one.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param apiId API identifier. Must be unique in the current API Management service instance.
   * @param issueId Issue identifier. Must be unique in the current API Management service instance.
   * @param attachmentId Attachment identifier within an Issue. Must be unique in the current Issue.
   * @param parameters Create parameters.
   * @param [options] The optional parameters
   * @returns Promise<Models.ApiIssueAttachmentCreateOrUpdateResponse>
   */
  createOrUpdate(resourceGroupName: string, serviceName: string, apiId: string, issueId: string, attachmentId: string, parameters: Models.IssueAttachmentContract, options?: Models.ApiIssueAttachmentCreateOrUpdateOptionalParams): Promise<Models.ApiIssueAttachmentCreateOrUpdateResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param apiId API identifier. Must be unique in the current API Management service instance.
   * @param issueId Issue identifier. Must be unique in the current API Management service instance.
   * @param attachmentId Attachment identifier within an Issue. Must be unique in the current Issue.
   * @param parameters Create parameters.
   * @param callback The callback
   */
  createOrUpdate(resourceGroupName: string, serviceName: string, apiId: string, issueId: string, attachmentId: string, parameters: Models.IssueAttachmentContract, callback: msRest.ServiceCallback<Models.IssueAttachmentContract>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param apiId API identifier. Must be unique in the current API Management service instance.
   * @param issueId Issue identifier. Must be unique in the current API Management service instance.
   * @param attachmentId Attachment identifier within an Issue. Must be unique in the current Issue.
   * @param parameters Create parameters.
   * @param options The optional parameters
   * @param callback The callback
   */
  createOrUpdate(resourceGroupName: string, serviceName: string, apiId: string, issueId: string, attachmentId: string, parameters: Models.IssueAttachmentContract, options: Models.ApiIssueAttachmentCreateOrUpdateOptionalParams, callback: msRest.ServiceCallback<Models.IssueAttachmentContract>): void;
  createOrUpdate(resourceGroupName: string, serviceName: string, apiId: string, issueId: string, attachmentId: string, parameters: Models.IssueAttachmentContract, options?: Models.ApiIssueAttachmentCreateOrUpdateOptionalParams | msRest.ServiceCallback<Models.IssueAttachmentContract>, callback?: msRest.ServiceCallback<Models.IssueAttachmentContract>): Promise<Models.ApiIssueAttachmentCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serviceName,
        apiId,
        issueId,
        attachmentId,
        parameters,
        options
      },
      createOrUpdateOperationSpec,
      callback) as Promise<Models.ApiIssueAttachmentCreateOrUpdateResponse>;
  }

  /**
   * Deletes the specified comment from an Issue.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param apiId API identifier. Must be unique in the current API Management service instance.
   * @param issueId Issue identifier. Must be unique in the current API Management service instance.
   * @param attachmentId Attachment identifier within an Issue. Must be unique in the current Issue.
   * @param ifMatch ETag of the Issue Entity. ETag should match the current entity state from the
   * header response of the GET request or it should be * for unconditional update.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, serviceName: string, apiId: string, issueId: string, attachmentId: string, ifMatch: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param apiId API identifier. Must be unique in the current API Management service instance.
   * @param issueId Issue identifier. Must be unique in the current API Management service instance.
   * @param attachmentId Attachment identifier within an Issue. Must be unique in the current Issue.
   * @param ifMatch ETag of the Issue Entity. ETag should match the current entity state from the
   * header response of the GET request or it should be * for unconditional update.
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, serviceName: string, apiId: string, issueId: string, attachmentId: string, ifMatch: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param apiId API identifier. Must be unique in the current API Management service instance.
   * @param issueId Issue identifier. Must be unique in the current API Management service instance.
   * @param attachmentId Attachment identifier within an Issue. Must be unique in the current Issue.
   * @param ifMatch ETag of the Issue Entity. ETag should match the current entity state from the
   * header response of the GET request or it should be * for unconditional update.
   * @param options The optional parameters
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, serviceName: string, apiId: string, issueId: string, attachmentId: string, ifMatch: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  deleteMethod(resourceGroupName: string, serviceName: string, apiId: string, issueId: string, attachmentId: string, ifMatch: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serviceName,
        apiId,
        issueId,
        attachmentId,
        ifMatch,
        options
      },
      deleteMethodOperationSpec,
      callback);
  }

  /**
   * Lists all comments for the Issue assosiated with the specified API.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.ApiIssueAttachmentListByServiceNextResponse>
   */
  listByServiceNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.ApiIssueAttachmentListByServiceNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByServiceNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.IssueAttachmentCollection>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByServiceNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.IssueAttachmentCollection>): void;
  listByServiceNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.IssueAttachmentCollection>, callback?: msRest.ServiceCallback<Models.IssueAttachmentCollection>): Promise<Models.ApiIssueAttachmentListByServiceNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByServiceNextOperationSpec,
      callback) as Promise<Models.ApiIssueAttachmentListByServiceNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listByServiceOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/apis/{apiId}/issues/{issueId}/attachments",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.apiId1,
    Parameters.issueId,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion,
    Parameters.filter0,
    Parameters.top,
    Parameters.skip
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.IssueAttachmentCollection
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const getEntityTagOperationSpec: msRest.OperationSpec = {
  httpMethod: "HEAD",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/apis/{apiId}/issues/{issueId}/attachments/{attachmentId}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.apiId1,
    Parameters.issueId,
    Parameters.attachmentId,
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
      headersMapper: Mappers.ApiIssueAttachmentGetEntityTagHeaders
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/apis/{apiId}/issues/{issueId}/attachments/{attachmentId}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.apiId1,
    Parameters.issueId,
    Parameters.attachmentId,
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
      bodyMapper: Mappers.IssueAttachmentContract,
      headersMapper: Mappers.ApiIssueAttachmentGetHeaders
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const createOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/apis/{apiId}/issues/{issueId}/attachments/{attachmentId}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.apiId1,
    Parameters.issueId,
    Parameters.attachmentId,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.ifMatch1,
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.IssueAttachmentContract,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.IssueAttachmentContract
    },
    201: {
      bodyMapper: Mappers.IssueAttachmentContract
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const deleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/apis/{apiId}/issues/{issueId}/attachments/{attachmentId}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.apiId1,
    Parameters.issueId,
    Parameters.attachmentId,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.ifMatch0,
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

const listByServiceNextOperationSpec: msRest.OperationSpec = {
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
      bodyMapper: Mappers.IssueAttachmentCollection
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};
