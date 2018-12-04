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
import * as Mappers from "../models/armTemplatesMappers";
import * as Parameters from "../models/parameters";
import { DevTestLabsClientContext } from "../devTestLabsClientContext";

/** Class representing a ArmTemplates. */
export class ArmTemplates {
  private readonly client: DevTestLabsClientContext;

  /**
   * Create a ArmTemplates.
   * @param {DevTestLabsClientContext} client Reference to the service client.
   */
  constructor(client: DevTestLabsClientContext) {
    this.client = client;
  }

  /**
   * List azure resource manager templates in a given artifact source.
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param artifactSourceName The name of the artifact source.
   * @param [options] The optional parameters
   * @returns Promise<Models.ArmTemplatesListResponse>
   */
  list(resourceGroupName: string, labName: string, artifactSourceName: string, options?: Models.ArmTemplatesListOptionalParams): Promise<Models.ArmTemplatesListResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param artifactSourceName The name of the artifact source.
   * @param callback The callback
   */
  list(resourceGroupName: string, labName: string, artifactSourceName: string, callback: msRest.ServiceCallback<Models.ArmTemplateList>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param artifactSourceName The name of the artifact source.
   * @param options The optional parameters
   * @param callback The callback
   */
  list(resourceGroupName: string, labName: string, artifactSourceName: string, options: Models.ArmTemplatesListOptionalParams, callback: msRest.ServiceCallback<Models.ArmTemplateList>): void;
  list(resourceGroupName: string, labName: string, artifactSourceName: string, options?: Models.ArmTemplatesListOptionalParams, callback?: msRest.ServiceCallback<Models.ArmTemplateList>): Promise<Models.ArmTemplatesListResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        labName,
        artifactSourceName,
        options
      },
      listOperationSpec,
      callback) as Promise<Models.ArmTemplatesListResponse>;
  }

  /**
   * Get azure resource manager template.
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param artifactSourceName The name of the artifact source.
   * @param name The name of the azure Resource Manager template.
   * @param [options] The optional parameters
   * @returns Promise<Models.ArmTemplatesGetResponse>
   */
  get(resourceGroupName: string, labName: string, artifactSourceName: string, name: string, options?: Models.ArmTemplatesGetOptionalParams): Promise<Models.ArmTemplatesGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param artifactSourceName The name of the artifact source.
   * @param name The name of the azure Resource Manager template.
   * @param callback The callback
   */
  get(resourceGroupName: string, labName: string, artifactSourceName: string, name: string, callback: msRest.ServiceCallback<Models.ArmTemplate>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param artifactSourceName The name of the artifact source.
   * @param name The name of the azure Resource Manager template.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, labName: string, artifactSourceName: string, name: string, options: Models.ArmTemplatesGetOptionalParams, callback: msRest.ServiceCallback<Models.ArmTemplate>): void;
  get(resourceGroupName: string, labName: string, artifactSourceName: string, name: string, options?: Models.ArmTemplatesGetOptionalParams, callback?: msRest.ServiceCallback<Models.ArmTemplate>): Promise<Models.ArmTemplatesGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        labName,
        artifactSourceName,
        name,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.ArmTemplatesGetResponse>;
  }

  /**
   * List azure resource manager templates in a given artifact source.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.ArmTemplatesListNextResponse>
   */
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.ArmTemplatesListNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.ArmTemplateList>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ArmTemplateList>): void;
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.ArmTemplateList>): Promise<Models.ArmTemplatesListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.ArmTemplatesListNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/artifactsources/{artifactSourceName}/armtemplates",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.labName,
    Parameters.artifactSourceName
  ],
  queryParameters: [
    Parameters.expand,
    Parameters.filter,
    Parameters.top,
    Parameters.orderby,
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ArmTemplateList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/artifactsources/{artifactSourceName}/armtemplates/{name}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.labName,
    Parameters.artifactSourceName,
    Parameters.name
  ],
  queryParameters: [
    Parameters.expand,
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ArmTemplate
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
      bodyMapper: Mappers.ArmTemplateList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
