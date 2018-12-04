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
import * as Models from "./models";
import * as Mappers from "./models/mappers";
import * as operations from "./operations";
import { BillingManagementClientContext } from "./billingManagementClientContext";


class BillingManagementClient extends BillingManagementClientContext {
  // Operation groups
  enrollmentAccounts: operations.EnrollmentAccounts;
  billingPeriods: operations.BillingPeriods;
  invoices: operations.Invoices;
  operations: operations.Operations;

  /**
   * Initializes a new instance of the BillingManagementClient class.
   * @param credentials Credentials needed for the client to connect to Azure.
   * @param subscriptionId Azure Subscription ID.
   * @param [options] The parameter options
   */
  constructor(credentials: msRest.ServiceClientCredentials, subscriptionId: string, options?: Models.BillingManagementClientOptions) {
    super(credentials, subscriptionId, options);
    this.enrollmentAccounts = new operations.EnrollmentAccounts(this);
    this.billingPeriods = new operations.BillingPeriods(this);
    this.invoices = new operations.Invoices(this);
    this.operations = new operations.Operations(this);
  }
}

// Operation Specifications

export {
  BillingManagementClient,
  BillingManagementClientContext,
  Models as BillingManagementModels,
  Mappers as BillingManagementMappers
};
export * from "./operations";
