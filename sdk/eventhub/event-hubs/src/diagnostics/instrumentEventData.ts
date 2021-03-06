// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

import { getTraceParentHeader, extractSpanContextFromTraceParentHeader } from "@azure/core-tracing";
import { Span, SpanContext } from "@opentelemetry/types";
import { EventData } from "../eventData";

/**
 * @ignore
 */
export const TRACEPARENT_PROPERTY = "Diagnostic-Id";

/**
 * Populates the `EventData` with `SpanContext` info to support trace propagation.
 * Creates and returns a copy of the passed in `EventData` unless the `EventData`
 * has already been instrumented.
 * @param eventData The `EventData` to instrument.
 * @param span The `Span` containing the context to propagate tracing information.
 * @ignore
 */
export function instrumentEventData(eventData: EventData, span: Span): EventData {
  if (eventData.properties && eventData.properties[TRACEPARENT_PROPERTY]) {
    return eventData;
  }

  // create a copy so the original isn't modified
  eventData = { ...eventData, properties: { ...eventData.properties } };

  const traceParent = getTraceParentHeader(span.context());
  if (traceParent) {
    eventData.properties![TRACEPARENT_PROPERTY] = traceParent;
  }

  return eventData;
}

/**
 * Extracts the `SpanContext` from an `EventData` if the context exists.
 * @param eventData An individual `EventData` object.
 */
export function extractSpanContextFromEventData(eventData: EventData): SpanContext | undefined {
  if (!eventData.properties || !eventData.properties[TRACEPARENT_PROPERTY]) {
    return;
  }

  const diagnosticId = eventData.properties[TRACEPARENT_PROPERTY];
  return extractSpanContextFromTraceParentHeader(diagnosticId);
}
