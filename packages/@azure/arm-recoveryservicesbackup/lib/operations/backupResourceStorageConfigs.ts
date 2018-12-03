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
import * as Mappers from "../models/backupResourceStorageConfigsMappers";
import * as Parameters from "../models/parameters";
import { RecoveryServicesBackupClientContext } from "../recoveryServicesBackupClientContext";

/** Class representing a BackupResourceStorageConfigs. */
export class BackupResourceStorageConfigs {
  private readonly client: RecoveryServicesBackupClientContext;

  /**
   * Create a BackupResourceStorageConfigs.
   * @param {RecoveryServicesBackupClientContext} client Reference to the service client.
   */
  constructor(client: RecoveryServicesBackupClientContext) {
    this.client = client;
  }

  /**
   * Fetches resource storage config.
   * @param vaultName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   * present.
   * @param [options] The optional parameters
   * @returns Promise<Models.BackupResourceStorageConfigsGetResponse>
   */
  get(vaultName: string, resourceGroupName: string, options?: msRest.RequestOptionsBase): Promise<Models.BackupResourceStorageConfigsGetResponse>;
  /**
   * @param vaultName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   * present.
   * @param callback The callback
   */
  get(vaultName: string, resourceGroupName: string, callback: msRest.ServiceCallback<Models.BackupResourceConfigResource>): void;
  /**
   * @param vaultName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   * present.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(vaultName: string, resourceGroupName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.BackupResourceConfigResource>): void;
  get(vaultName: string, resourceGroupName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.BackupResourceConfigResource>, callback?: msRest.ServiceCallback<Models.BackupResourceConfigResource>): Promise<Models.BackupResourceStorageConfigsGetResponse> {
    return this.client.sendOperationRequest(
      {
        vaultName,
        resourceGroupName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.BackupResourceStorageConfigsGetResponse>;
  }

  /**
   * Updates vault storage model type.
   * @param vaultName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   * present.
   * @param parameters Vault storage config request
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  update(vaultName: string, resourceGroupName: string, parameters: Models.BackupResourceConfigResource, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param vaultName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   * present.
   * @param parameters Vault storage config request
   * @param callback The callback
   */
  update(vaultName: string, resourceGroupName: string, parameters: Models.BackupResourceConfigResource, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param vaultName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   * present.
   * @param parameters Vault storage config request
   * @param options The optional parameters
   * @param callback The callback
   */
  update(vaultName: string, resourceGroupName: string, parameters: Models.BackupResourceConfigResource, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  update(vaultName: string, resourceGroupName: string, parameters: Models.BackupResourceConfigResource, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        vaultName,
        resourceGroupName,
        parameters,
        options
      },
      updateOperationSpec,
      callback);
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "Subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{vaultName}/backupstorageconfig/vaultstorageconfig",
  urlParameters: [
    Parameters.vaultName,
    Parameters.resourceGroupName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion1
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.BackupResourceConfigResource
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const updateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PATCH",
  path: "Subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{vaultName}/backupstorageconfig/vaultstorageconfig",
  urlParameters: [
    Parameters.vaultName,
    Parameters.resourceGroupName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion1
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.BackupResourceConfigResource,
      required: true
    }
  },
  responses: {
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
