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


/**
 * @interface
 * An interface representing CreateKbInputDTO.
 * Input to create KB.
 *
 */
export interface CreateKbInputDTO {
  /**
   * @member {QnADTO[]} [qnaList] List of QNA to be added to the index. Ids are
   * generated by the service and should be omitted.
   */
  qnaList?: QnADTO[];
  /**
   * @member {string[]} [urls] List of URLs to be added to knowledgebase.
   */
  urls?: string[];
  /**
   * @member {FileDTO[]} [files] List of files to be added to knowledgebase.
   */
  files?: FileDTO[];
}

/**
 * @interface
 * An interface representing UpdateKbOperationDTOAdd.
 * An instance of CreateKbInputDTO for add operation
 *
 * @extends CreateKbInputDTO
 */
export interface UpdateKbOperationDTOAdd extends CreateKbInputDTO {
}

/**
 * @interface
 * An interface representing DeleteKbContentsDTO.
 * PATCH body schema of Delete Operation in UpdateKb
 *
 */
export interface DeleteKbContentsDTO {
  /**
   * @member {number[]} [ids] List of Qna Ids to be deleted
   */
  ids?: number[];
  /**
   * @member {string[]} [sources] List of sources to be deleted from
   * knowledgebase.
   */
  sources?: string[];
}

/**
 * @interface
 * An interface representing UpdateKbOperationDTODelete.
 * An instance of DeleteKbContentsDTO for delete Operation
 *
 * @extends DeleteKbContentsDTO
 */
export interface UpdateKbOperationDTODelete extends DeleteKbContentsDTO {
}

/**
 * @interface
 * An interface representing UpdateKbContentsDTO.
 * PATCH body schema for Update operation in Update Kb
 *
 */
export interface UpdateKbContentsDTO {
  /**
   * @member {string} [name] Friendly name for the knowledgebase.
   */
  name?: string;
  /**
   * @member {UpdateQnaDTO[]} [qnaList] List of Q-A (UpdateQnaDTO) to be added
   * to the knowledgebase.
   */
  qnaList?: UpdateQnaDTO[];
  /**
   * @member {string[]} [urls] List of existing URLs to be refreshed. The
   * content will be extracted again and re-indexed.
   */
  urls?: string[];
}

/**
 * @interface
 * An interface representing UpdateKbOperationDTOUpdate.
 * An instance of UpdateKbContentsDTO for Update Operation
 *
 * @extends UpdateKbContentsDTO
 */
export interface UpdateKbOperationDTOUpdate extends UpdateKbContentsDTO {
}

/**
 * @interface
 * An interface representing UpdateKbOperationDTO.
 * Contains list of QnAs to be updated
 *
 */
export interface UpdateKbOperationDTO {
  /**
   * @member {UpdateKbOperationDTOAdd} [add] An instance of CreateKbInputDTO
   * for add operation
   */
  add?: UpdateKbOperationDTOAdd;
  /**
   * @member {UpdateKbOperationDTODelete} [deleteProperty] An instance of
   * DeleteKbContentsDTO for delete Operation
   */
  deleteProperty?: UpdateKbOperationDTODelete;
  /**
   * @member {UpdateKbOperationDTOUpdate} [update] An instance of
   * UpdateKbContentsDTO for Update Operation
   */
  update?: UpdateKbOperationDTOUpdate;
}

/**
 * @interface
 * An interface representing UpdateQuestionsDTO.
 * PATCH Body schema for Update Kb which contains list of questions to be added
 * and deleted
 *
 */
export interface UpdateQuestionsDTO {
  /**
   * @member {string[]} [add] List of questions to be added
   */
  add?: string[];
  /**
   * @member {string[]} [deleteProperty] List of questions to be deleted.
   */
  deleteProperty?: string[];
}

/**
 * @interface
 * An interface representing UpdateQnaDTOQuestions.
 * List of questions associated with the answer.
 *
 * @extends UpdateQuestionsDTO
 */
export interface UpdateQnaDTOQuestions extends UpdateQuestionsDTO {
}

/**
 * @interface
 * An interface representing UpdateMetadataDTO.
 * PATCH Body schema to represent list of Metadata to be updated
 *
 */
export interface UpdateMetadataDTO {
  /**
   * @member {MetadataDTO[]} [deleteProperty] List of Metadata associated with
   * answer to be deleted
   */
  deleteProperty?: MetadataDTO[];
  /**
   * @member {MetadataDTO[]} [add] List of Metadat associated with answer to be
   * added
   */
  add?: MetadataDTO[];
}

/**
 * @interface
 * An interface representing UpdateQnaDTOMetadata.
 * List of metadata associated with the answer to be updated
 *
 * @extends UpdateMetadataDTO
 */
export interface UpdateQnaDTOMetadata extends UpdateMetadataDTO {
}

/**
 * @interface
 * An interface representing UpdateQnaDTO.
 * PATCH Body schema for Update Qna List
 *
 */
export interface UpdateQnaDTO {
  /**
   * @member {number} [id] Unique id for the Q-A
   */
  id?: number;
  /**
   * @member {string} [answer] Answer text
   */
  answer?: string;
  /**
   * @member {string} [source] Source from which Q-A was indexed. eg.
   * https://docs.microsoft.com/en-us/azure/cognitive-services/QnAMaker/FAQs
   */
  source?: string;
  /**
   * @member {UpdateQnaDTOQuestions} [questions] List of questions associated
   * with the answer.
   */
  questions?: UpdateQnaDTOQuestions;
  /**
   * @member {UpdateQnaDTOMetadata} [metadata] List of metadata associated with
   * the answer to be updated
   */
  metadata?: UpdateQnaDTOMetadata;
}

/**
 * @interface
 * An interface representing MetadataDTO.
 * Name - value pair of metadata.
 *
 */
export interface MetadataDTO {
  /**
   * @member {string} name Metadata name.
   */
  name: string;
  /**
   * @member {string} value Metadata value.
   */
  value: string;
}

/**
 * @interface
 * An interface representing QnADTO.
 * Q-A object.
 *
 */
export interface QnADTO {
  /**
   * @member {number} [id] Unique id for the Q-A.
   */
  id?: number;
  /**
   * @member {string} answer Answer text
   */
  answer: string;
  /**
   * @member {string} [source] Source from which Q-A was indexed. eg.
   * https://docs.microsoft.com/en-us/azure/cognitive-services/QnAMaker/FAQs
   */
  source?: string;
  /**
   * @member {string[]} questions List of questions associated with the answer.
   */
  questions: string[];
  /**
   * @member {MetadataDTO[]} [metadata] List of metadata associated with the
   * answer.
   */
  metadata?: MetadataDTO[];
}

/**
 * @interface
 * An interface representing FileDTO.
 * DTO to hold details of uploaded files.
 *
 */
export interface FileDTO {
  /**
   * @member {string} fileName File name. Supported file types are ".tsv",
   * ".pdf", ".txt", ".docx", ".xlsx".
   */
  fileName: string;
  /**
   * @member {string} fileUri Public URI of the file.
   */
  fileUri: string;
}

/**
 * @interface
 * An interface representing QnADocumentsDTO.
 * List of QnADTO
 *
 */
export interface QnADocumentsDTO {
  /**
   * @member {QnADTO[]} [qnaDocuments] List of answers.
   */
  qnaDocuments?: QnADTO[];
}

/**
 * @interface
 * An interface representing CreateKbDTO.
 * Post body schema for CreateKb operation.
 *
 */
export interface CreateKbDTO {
  /**
   * @member {string} name Friendly name for the knowledgebase.
   */
  name: string;
  /**
   * @member {QnADTO[]} [qnaList] List of Q-A (QnADTO) to be added to the
   * knowledgebase. Q-A Ids are assigned by the service and should be omitted.
   */
  qnaList?: QnADTO[];
  /**
   * @member {string[]} [urls] List of URLs to be used for extracting Q-A.
   */
  urls?: string[];
  /**
   * @member {FileDTO[]} [files] List of files from which to Extract Q-A.
   */
  files?: FileDTO[];
}

/**
 * @interface
 * An interface representing ReplaceKbDTO.
 * Post body schema for Replace KB operation.
 *
 */
export interface ReplaceKbDTO {
  /**
   * @member {QnADTO[]} qnAList List of Q-A (QnADTO) to be added to the
   * knowledgebase. Q-A Ids are assigned by the service and should be omitted.
   */
  qnAList: QnADTO[];
}

/**
 * @interface
 * An interface representing ErrorModel.
 * The error object. As per Microsoft One API guidelines -
 * https://github.com/Microsoft/api-guidelines/blob/vNext/Guidelines.md#7102-error-condition-responses.
 *
 */
export interface ErrorModel {
  /**
   * @member {ErrorCodeType} code One of a server-defined set of error codes.
   * Possible values include: 'BadArgument', 'Forbidden', 'NotFound',
   * 'KbNotFound', 'Unauthorized', 'Unspecified', 'EndpointKeysError',
   * 'QuotaExceeded', 'QnaRuntimeError', 'SKULimitExceeded',
   * 'OperationNotFound', 'ServiceError', 'ValidationFailure',
   * 'ExtractionFailure'
   */
  code: ErrorCodeType;
  /**
   * @member {string} [message] A human-readable representation of the error.
   */
  message?: string;
  /**
   * @member {string} [target] The target of the error.
   */
  target?: string;
  /**
   * @member {ErrorModel[]} [details] An array of details about specific errors
   * that led to this reported error.
   */
  details?: ErrorModel[];
  /**
   * @member {InnerErrorModel} [innerError] An object containing more specific
   * information than the current object about the error.
   */
  innerError?: InnerErrorModel;
}

/**
 * @interface
 * An interface representing ErrorResponseError.
 * The error object.
 *
 * @extends ErrorModel
 */
export interface ErrorResponseError extends ErrorModel {
}

/**
 * @interface
 * An interface representing ErrorResponse.
 * Error response. As per Microsoft One API guidelines -
 * https://github.com/Microsoft/api-guidelines/blob/vNext/Guidelines.md#7102-error-condition-responses.
 *
 */
export interface ErrorResponse {
  /**
   * @member {ErrorResponseError} [error] The error object.
   */
  error?: ErrorResponseError;
}

/**
 * @interface
 * An interface representing InnerErrorModel.
 * An object containing more specific information about the error. As per
 * Microsoft One API guidelines -
 * https://github.com/Microsoft/api-guidelines/blob/vNext/Guidelines.md#7102-error-condition-responses.
 *
 */
export interface InnerErrorModel {
  /**
   * @member {string} [code] A more specific error code than was provided by
   * the containing error.
   */
  code?: string;
  /**
   * @member {InnerErrorModel} [innerError] An object containing more specific
   * information than the current object about the error.
   */
  innerError?: InnerErrorModel;
}

/**
 * @interface
 * An interface representing Operation.
 * Record to track long running operation.
 *
 */
export interface Operation {
  /**
   * @member {OperationStateType} [operationState] Operation state. Possible
   * values include: 'Failed', 'NotStarted', 'Running', 'Succeeded'
   */
  operationState?: OperationStateType;
  /**
   * @member {string} [createdTimestamp] Timestamp when the operation was
   * created.
   */
  createdTimestamp?: string;
  /**
   * @member {string} [lastActionTimestamp] Timestamp when the current state
   * was entered.
   */
  lastActionTimestamp?: string;
  /**
   * @member {string} [resourceLocation] Relative URI to the target resource
   * location for completed resources.
   */
  resourceLocation?: string;
  /**
   * @member {string} [userId] User Id
   */
  userId?: string;
  /**
   * @member {string} [operationId] Operation Id.
   */
  operationId?: string;
  /**
   * @member {ErrorResponse} [errorResponse] Error details in case of failures.
   */
  errorResponse?: ErrorResponse;
}

/**
 * @interface
 * An interface representing KnowledgebaseDTO.
 * Response schema for CreateKb operation.
 *
 */
export interface KnowledgebaseDTO {
  /**
   * @member {string} [id] Unique id that identifies a knowledgebase.
   */
  id?: string;
  /**
   * @member {string} [hostName] URL host name at which the knowledgebase is
   * hosted.
   */
  hostName?: string;
  /**
   * @member {string} [lastAccessedTimestamp] Time stamp at which the
   * knowledgebase was last accessed (UTC).
   */
  lastAccessedTimestamp?: string;
  /**
   * @member {string} [lastChangedTimestamp] Time stamp at which the
   * knowledgebase was last modified (UTC).
   */
  lastChangedTimestamp?: string;
  /**
   * @member {string} [lastPublishedTimestamp] Time stamp at which the
   * knowledgebase was last published (UTC).
   */
  lastPublishedTimestamp?: string;
  /**
   * @member {string} [name] Friendly name of the knowledgebase.
   */
  name?: string;
  /**
   * @member {string} [userId] User who created / owns the knowledgebase.
   */
  userId?: string;
  /**
   * @member {string[]} [urls] URL sources from which Q-A were extracted and
   * added to the knowledgebase.
   */
  urls?: string[];
  /**
   * @member {string[]} [sources] Custom sources from which Q-A were extracted
   * or explicitly added to the knowledgebase.
   */
  sources?: string[];
}

/**
 * @interface
 * An interface representing KnowledgebasesDTO.
 * Collection of knowledgebases owned by a user.
 *
 */
export interface KnowledgebasesDTO {
  /**
   * @member {KnowledgebaseDTO[]} [knowledgebases] Collection of knowledgebase
   * records.
   */
  knowledgebases?: KnowledgebaseDTO[];
}

/**
 * @interface
 * An interface representing AlterationsDTO.
 * Collection of words that are synonyms.
 *
 */
export interface AlterationsDTO {
  /**
   * @member {string[]} alterations Words that are synonymous with each other.
   */
  alterations: string[];
}

/**
 * @interface
 * An interface representing WordAlterationsDTO.
 * Collection of word alterations.
 *
 */
export interface WordAlterationsDTO {
  /**
   * @member {AlterationsDTO[]} wordAlterations Collection of word alterations.
   */
  wordAlterations: AlterationsDTO[];
}

/**
 * @interface
 * An interface representing EndpointKeysDTO.
 * Schema for EndpointKeys generate/refresh operations.
 *
 */
export interface EndpointKeysDTO {
  /**
   * @member {string} [primaryEndpointKey] Primary Access Key.
   */
  primaryEndpointKey?: string;
  /**
   * @member {string} [secondaryEndpointKey] Secondary Access Key.
   */
  secondaryEndpointKey?: string;
  /**
   * @member {string} [installedVersion] Current version of runtime.
   */
  installedVersion?: string;
  /**
   * @member {string} [lastStableVersion] Latest version of runtime.
   */
  lastStableVersion?: string;
}

/**
 * @interface
 * An interface representing OperationsGetDetailsHeaders.
 * Defines headers for GetDetails operation.
 *
 */
export interface OperationsGetDetailsHeaders {
  /**
   * @member {number} [retryAfter] Indicates how long the client should wait
   * before sending a follow up request. The header will be present only if the
   * operation is running or has not started yet.
   */
  retryAfter: number;
}

/**
 * @interface
 * An interface representing KnowledgebaseUpdateHeaders.
 * Defines headers for Update operation.
 *
 */
export interface KnowledgebaseUpdateHeaders {
  /**
   * @member {string} [location] Relative URI to the target location of the
   * asynchronous operation. Client should poll this resource to get status of
   * the operation.
   */
  location: string;
}

/**
 * Defines values for KnowledgebaseEnvironmentType.
 * Possible values include: 'Prod', 'Test'
 * @readonly
 * @enum {string}
 */
export type KnowledgebaseEnvironmentType = 'Prod' | 'Test';

/**
 * Defines values for ErrorCodeType.
 * Possible values include: 'BadArgument', 'Forbidden', 'NotFound', 'KbNotFound', 'Unauthorized',
 * 'Unspecified', 'EndpointKeysError', 'QuotaExceeded', 'QnaRuntimeError', 'SKULimitExceeded',
 * 'OperationNotFound', 'ServiceError', 'ValidationFailure', 'ExtractionFailure'
 * @readonly
 * @enum {string}
 */
export type ErrorCodeType = 'BadArgument' | 'Forbidden' | 'NotFound' | 'KbNotFound' | 'Unauthorized' | 'Unspecified' | 'EndpointKeysError' | 'QuotaExceeded' | 'QnaRuntimeError' | 'SKULimitExceeded' | 'OperationNotFound' | 'ServiceError' | 'ValidationFailure' | 'ExtractionFailure';

/**
 * Defines values for OperationStateType.
 * Possible values include: 'Failed', 'NotStarted', 'Running', 'Succeeded'
 * @readonly
 * @enum {string}
 */
export type OperationStateType = 'Failed' | 'NotStarted' | 'Running' | 'Succeeded';

/**
 * Defines values for EnvironmentType.
 * Possible values include: 'Prod', 'Test'
 * @readonly
 * @enum {string}
 */
export type EnvironmentType = 'Prod' | 'Test';

/**
 * Contains response data for the getKeys operation.
 */
export type EndpointKeysGetKeysResponse = EndpointKeysDTO & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: EndpointKeysDTO;
    };
};

/**
 * Contains response data for the refreshKeys operation.
 */
export type EndpointKeysRefreshKeysResponse = EndpointKeysDTO & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: EndpointKeysDTO;
    };
};

/**
 * Contains response data for the get operation.
 */
export type AlterationsGetResponse = WordAlterationsDTO & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: WordAlterationsDTO;
    };
};

/**
 * Contains response data for the listAll operation.
 */
export type KnowledgebaseListAllResponse = KnowledgebasesDTO & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: KnowledgebasesDTO;
    };
};

/**
 * Contains response data for the getDetails operation.
 */
export type KnowledgebaseGetDetailsResponse = KnowledgebaseDTO & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: KnowledgebaseDTO;
    };
};

/**
 * Contains response data for the update operation.
 */
export type KnowledgebaseUpdateResponse = Operation & KnowledgebaseUpdateHeaders & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The parsed HTTP response headers.
       */
      parsedHeaders: KnowledgebaseUpdateHeaders;
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: Operation;
    };
};

/**
 * Contains response data for the create operation.
 */
export type KnowledgebaseCreateResponse = Operation & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: Operation;
    };
};

/**
 * Contains response data for the download operation.
 */
export type KnowledgebaseDownloadResponse = QnADocumentsDTO & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: QnADocumentsDTO;
    };
};

/**
 * Contains response data for the getDetails operation.
 */
export type OperationsGetDetailsResponse = Operation & OperationsGetDetailsHeaders & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The parsed HTTP response headers.
       */
      parsedHeaders: OperationsGetDetailsHeaders;
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: Operation;
    };
};
