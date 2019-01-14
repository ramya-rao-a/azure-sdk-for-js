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
import { MonitorManagementClientContext } from "./monitorManagementClientContext";


class MonitorManagementClient extends MonitorManagementClientContext {
  // Operation groups
  autoscaleSettings: operations.AutoscaleSettings;
  operations: operations.Operations;
  alertRuleIncidents: operations.AlertRuleIncidents;
  alertRules: operations.AlertRules;
  logProfiles: operations.LogProfiles;
  diagnosticSettings: operations.DiagnosticSettingsOperations;
  diagnosticSettingsCategory: operations.DiagnosticSettingsCategoryOperations;
  actionGroups: operations.ActionGroups;
  activityLogAlerts: operations.ActivityLogAlerts;
  activityLogs: operations.ActivityLogs;
  eventCategories: operations.EventCategories;
  tenantActivityLogs: operations.TenantActivityLogs;
  metricDefinitions: operations.MetricDefinitions;
  metrics: operations.Metrics;
  metricBaseline: operations.MetricBaseline;
  metricAlerts: operations.MetricAlerts;
  metricAlertsStatus: operations.MetricAlertsStatus;
  scheduledQueryRules: operations.ScheduledQueryRules;
  metricNamespaces: operations.MetricNamespaces;
  vMInsights: operations.VMInsights;

  /**
   * Initializes a new instance of the MonitorManagementClient class.
   * @param credentials Credentials needed for the client to connect to Azure.
   * @param subscriptionId The Azure subscription Id.
   * @param [options] The parameter options
   */
  constructor(credentials: msRest.ServiceClientCredentials, subscriptionId: string, options?: Models.MonitorManagementClientOptions) {
    super(credentials, subscriptionId, options);
    this.autoscaleSettings = new operations.AutoscaleSettings(this);
    this.operations = new operations.Operations(this);
    this.alertRuleIncidents = new operations.AlertRuleIncidents(this);
    this.alertRules = new operations.AlertRules(this);
    this.logProfiles = new operations.LogProfiles(this);
    this.diagnosticSettings = new operations.DiagnosticSettingsOperations(this);
    this.diagnosticSettingsCategory = new operations.DiagnosticSettingsCategoryOperations(this);
    this.actionGroups = new operations.ActionGroups(this);
    this.activityLogAlerts = new operations.ActivityLogAlerts(this);
    this.activityLogs = new operations.ActivityLogs(this);
    this.eventCategories = new operations.EventCategories(this);
    this.tenantActivityLogs = new operations.TenantActivityLogs(this);
    this.metricDefinitions = new operations.MetricDefinitions(this);
    this.metrics = new operations.Metrics(this);
    this.metricBaseline = new operations.MetricBaseline(this);
    this.metricAlerts = new operations.MetricAlerts(this);
    this.metricAlertsStatus = new operations.MetricAlertsStatus(this);
    this.scheduledQueryRules = new operations.ScheduledQueryRules(this);
    this.metricNamespaces = new operations.MetricNamespaces(this);
    this.vMInsights = new operations.VMInsights(this);
  }
}

// Operation Specifications

export {
  MonitorManagementClient,
  MonitorManagementClientContext,
  Models as MonitorManagementModels,
  Mappers as MonitorManagementMappers
};
export * from "./operations";
