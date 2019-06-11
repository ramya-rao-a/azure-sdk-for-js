// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

import * as log from "../log";
import { ConnectionContext } from "../connectionContext";

/**
 * @internal
 * Logs and throws Error if the current AMQP connection is closed.
 * @param context The ConnectionContext associated with the current AMQP connection.
 */
export function throwErrorIfConnectionClosed(context: ConnectionContext): void {
  if (context && context.wasConnectionCloseCalled) {
    const errorMessage = "The underlying AMQP connection is closed.";
    const error = new Error(errorMessage);
    log.error(`[${context.connectionId}] %O`, error);
    throw error;
  }
}

/**
 * @internal
 * Logs and Throws TypeError if given parameter is undefined or null
 * @param connectionId Id of the underlying AMQP connection used for logging
 * @param parameterName Name of the parameter to check
 * @param parameterValue Value of the parameter to check
 */
export function throwTypeErrorIfParameterMissing(
  connectionId: string,
  parameterName: string,
  parameterValue: any
): void {
  if (parameterValue === undefined || parameterValue === null) {
    const error = new TypeError(`Missing parameter "${parameterName}"`);
    log.error(`[${connectionId}] %O`, error);
    throw error;
  }
}

/**
 * @internal
 * Throws AbortError with the given error message
 * @param message Error message to be set on the AbortError
 */
export function throwAbortError(message?: string): void {
  const abortError = new Error(message);
  abortError.name = 'AbortError';
  throw abortError;
}
