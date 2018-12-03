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
import * as Mappers from "../models/restoresMappers";
import * as Parameters from "../models/parameters";
import { RecoveryServicesBackupClientContext } from "../recoveryServicesBackupClientContext";

/** Class representing a Restores. */
export class Restores {
  private readonly client: RecoveryServicesBackupClientContext;

  /**
   * Create a Restores.
   * @param {RecoveryServicesBackupClientContext} client Reference to the service client.
   */
  constructor(client: RecoveryServicesBackupClientContext) {
    this.client = client;
  }

  /**
   * Restores the specified backed up data. This is an asynchronous operation. To know the status of
   * this API call, use
   * GetProtectedItemOperationResult API.
   * @param vaultName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   * present.
   * @param fabricName Fabric name associated with the backed up items.
   * @param containerName Container name associated with the backed up items.
   * @param protectedItemName Backed up item to be restored.
   * @param recoveryPointId Recovery point ID which represents the backed up data to be restored.
   * @param parameters resource restore request
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  trigger(vaultName: string, resourceGroupName: string, fabricName: string, containerName: string, protectedItemName: string, recoveryPointId: string, parameters: Models.RestoreRequestResource, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param vaultName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   * present.
   * @param fabricName Fabric name associated with the backed up items.
   * @param containerName Container name associated with the backed up items.
   * @param protectedItemName Backed up item to be restored.
   * @param recoveryPointId Recovery point ID which represents the backed up data to be restored.
   * @param parameters resource restore request
   * @param callback The callback
   */
  trigger(vaultName: string, resourceGroupName: string, fabricName: string, containerName: string, protectedItemName: string, recoveryPointId: string, parameters: Models.RestoreRequestResource, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param vaultName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   * present.
   * @param fabricName Fabric name associated with the backed up items.
   * @param containerName Container name associated with the backed up items.
   * @param protectedItemName Backed up item to be restored.
   * @param recoveryPointId Recovery point ID which represents the backed up data to be restored.
   * @param parameters resource restore request
   * @param options The optional parameters
   * @param callback The callback
   */
  trigger(vaultName: string, resourceGroupName: string, fabricName: string, containerName: string, protectedItemName: string, recoveryPointId: string, parameters: Models.RestoreRequestResource, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  trigger(vaultName: string, resourceGroupName: string, fabricName: string, containerName: string, protectedItemName: string, recoveryPointId: string, parameters: Models.RestoreRequestResource, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        vaultName,
        resourceGroupName,
        fabricName,
        containerName,
        protectedItemName,
        recoveryPointId,
        parameters,
        options
      },
      triggerOperationSpec,
      callback);
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const triggerOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "Subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{vaultName}/backupFabrics/{fabricName}/protectionContainers/{containerName}/protectedItems/{protectedItemName}/recoveryPoints/{recoveryPointId}/restore",
  urlParameters: [
    Parameters.vaultName,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.fabricName,
    Parameters.containerName,
    Parameters.protectedItemName,
    Parameters.recoveryPointId
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
      ...Mappers.RestoreRequestResource,
      required: true
    }
  },
  responses: {
    202: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
