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
import * as Mappers from "../models/imagesMappers";
import * as Parameters from "../models/parameters";
import { VisualSearchAPIClientContext } from "../visualSearchAPIClientContext";

/** Class representing a Images. */
export class Images {
  private readonly client: VisualSearchAPIClientContext;

  /**
   * Create a Images.
   * @param {VisualSearchAPIClientContext} client Reference to the service client.
   */
  constructor(client: VisualSearchAPIClientContext) {
    this.client = client;
  }

  /**
   * @summary Visual Search API lets you discover insights about an image such as visually similar
   * images, shopping sources, and related searches. The API can also perform text recognition,
   * identify entities (people, places, things), return other topical content for the user to
   * explore, and more. For more information, see [Visual Search
   * Overview](https://docs.microsoft.com/azure/cognitive-services/bing-visual-search/overview).
   * @param [options] The optional parameters
   * @returns Promise<Models.ImagesVisualSearchResponse>
   */
  visualSearch(options?: Models.ImagesVisualSearchOptionalParams): Promise<Models.ImagesVisualSearchResponse>;
  /**
   * @param callback The callback
   */
  visualSearch(callback: msRest.ServiceCallback<Models.ImageKnowledge>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  visualSearch(options: Models.ImagesVisualSearchOptionalParams, callback: msRest.ServiceCallback<Models.ImageKnowledge>): void;
  visualSearch(options?: Models.ImagesVisualSearchOptionalParams, callback?: msRest.ServiceCallback<Models.ImageKnowledge>): Promise<Models.ImagesVisualSearchResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      visualSearchOperationSpec,
      callback) as Promise<Models.ImagesVisualSearchResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const visualSearchOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "bing/v7.0/images/visualsearch",
  queryParameters: [
    Parameters.market,
    Parameters.safeSearch,
    Parameters.setLang
  ],
  headerParameters: [
    Parameters.xBingApisSDK,
    Parameters.acceptLanguage,
    Parameters.contentType,
    Parameters.userAgent,
    Parameters.clientId,
    Parameters.clientIp,
    Parameters.location
  ],
  formDataParameters: [
    Parameters.knowledgeRequest,
    Parameters.image
  ],
  contentType: "multipart/form-data",
  responses: {
    200: {
      bodyMapper: Mappers.ImageKnowledge
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};
