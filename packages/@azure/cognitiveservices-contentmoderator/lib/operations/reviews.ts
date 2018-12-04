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
import * as Mappers from "../models/reviewsMappers";
import * as Parameters from "../models/parameters";
import { ContentModeratorClientContext } from "../contentModeratorClientContext";

/** Class representing a Reviews. */
export class Reviews {
  private readonly client: ContentModeratorClientContext;

  /**
   * Create a Reviews.
   * @param {ContentModeratorClientContext} client Reference to the service client.
   */
  constructor(client: ContentModeratorClientContext) {
    this.client = client;
  }

  /**
   * Returns review details for the review Id passed.
   * @param teamName Your Team Name.
   * @param reviewId Id of the review.
   * @param [options] The optional parameters
   * @returns Promise<Models.ReviewsGetReviewResponse>
   */
  getReview(teamName: string, reviewId: string, options?: msRest.RequestOptionsBase): Promise<Models.ReviewsGetReviewResponse>;
  /**
   * @param teamName Your Team Name.
   * @param reviewId Id of the review.
   * @param callback The callback
   */
  getReview(teamName: string, reviewId: string, callback: msRest.ServiceCallback<Models.Review>): void;
  /**
   * @param teamName Your Team Name.
   * @param reviewId Id of the review.
   * @param options The optional parameters
   * @param callback The callback
   */
  getReview(teamName: string, reviewId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Review>): void;
  getReview(teamName: string, reviewId: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.Review>): Promise<Models.ReviewsGetReviewResponse> {
    return this.client.sendOperationRequest(
      {
        teamName,
        reviewId,
        options
      },
      getReviewOperationSpec,
      callback) as Promise<Models.ReviewsGetReviewResponse>;
  }

  /**
   * Get the Job Details for a Job Id.
   * @param teamName Your Team Name.
   * @param jobId Id of the job.
   * @param [options] The optional parameters
   * @returns Promise<Models.ReviewsGetJobDetailsResponse>
   */
  getJobDetails(teamName: string, jobId: string, options?: msRest.RequestOptionsBase): Promise<Models.ReviewsGetJobDetailsResponse>;
  /**
   * @param teamName Your Team Name.
   * @param jobId Id of the job.
   * @param callback The callback
   */
  getJobDetails(teamName: string, jobId: string, callback: msRest.ServiceCallback<Models.Job>): void;
  /**
   * @param teamName Your Team Name.
   * @param jobId Id of the job.
   * @param options The optional parameters
   * @param callback The callback
   */
  getJobDetails(teamName: string, jobId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Job>): void;
  getJobDetails(teamName: string, jobId: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.Job>): Promise<Models.ReviewsGetJobDetailsResponse> {
    return this.client.sendOperationRequest(
      {
        teamName,
        jobId,
        options
      },
      getJobDetailsOperationSpec,
      callback) as Promise<Models.ReviewsGetJobDetailsResponse>;
  }

  /**
   * The reviews created would show up for Reviewers on your team. As Reviewers complete reviewing,
   * results of the Review would be POSTED (i.e. HTTP POST) on the specified CallBackEndpoint.
   *
   * <h3>CallBack Schemas </h3>
   * <h4>Review Completion CallBack Sample</h4>
   * <p>
   * {<br/>
   * "ReviewId": "<Review Id>",<br/>
   * "ModifiedOn": "2016-10-11T22:36:32.9934851Z",<br/>
   * "ModifiedBy": "<Name of the Reviewer>",<br/>
   * "CallBackType": "Review",<br/>
   * "ContentId": "<The ContentId that was specified input>",<br/>
   * "Metadata": {<br/>
   * "adultscore": "0.xxx",<br/>
   * "a": "False",<br/>
   * "racyscore": "0.xxx",<br/>
   * "r": "True"<br/>
   * },<br/>
   * "ReviewerResultTags": {<br/>
   * "a": "False",<br/>
   * "r": "True"<br/>
   * }<br/>
   * }<br/>
   *
   * </p>.
   * @param urlContentType The content type.
   * @param teamName Your team name.
   * @param createReviewBody Body for create reviews API
   * @param [options] The optional parameters
   * @returns Promise<Models.ReviewsCreateReviewsResponse>
   */
  createReviews(urlContentType: string, teamName: string, createReviewBody: Models.CreateReviewBodyItem[], options?: Models.ReviewsCreateReviewsOptionalParams): Promise<Models.ReviewsCreateReviewsResponse>;
  /**
   * @param urlContentType The content type.
   * @param teamName Your team name.
   * @param createReviewBody Body for create reviews API
   * @param callback The callback
   */
  createReviews(urlContentType: string, teamName: string, createReviewBody: Models.CreateReviewBodyItem[], callback: msRest.ServiceCallback<string[]>): void;
  /**
   * @param urlContentType The content type.
   * @param teamName Your team name.
   * @param createReviewBody Body for create reviews API
   * @param options The optional parameters
   * @param callback The callback
   */
  createReviews(urlContentType: string, teamName: string, createReviewBody: Models.CreateReviewBodyItem[], options: Models.ReviewsCreateReviewsOptionalParams, callback: msRest.ServiceCallback<string[]>): void;
  createReviews(urlContentType: string, teamName: string, createReviewBody: Models.CreateReviewBodyItem[], options?: Models.ReviewsCreateReviewsOptionalParams, callback?: msRest.ServiceCallback<string[]>): Promise<Models.ReviewsCreateReviewsResponse> {
    return this.client.sendOperationRequest(
      {
        urlContentType,
        teamName,
        createReviewBody,
        options
      },
      createReviewsOperationSpec,
      callback) as Promise<Models.ReviewsCreateReviewsResponse>;
  }

  /**
   * A job Id will be returned for the content posted on this endpoint.
   *
   * Once the content is evaluated against the Workflow provided the review will be created or
   * ignored based on the workflow expression.
   *
   * <h3>CallBack Schemas </h3>
   *
   * <p>
   * <h4>Job Completion CallBack Sample</h4><br/>
   *
   * {<br/>
   * "JobId": "<Job Id>,<br/>
   * "ReviewId": "<Review Id, if the Job resulted in a Review to be created>",<br/>
   * "WorkFlowId": "default",<br/>
   * "Status": "<This will be one of Complete, InProgress, Error>",<br/>
   * "ContentType": "Image",<br/>
   * "ContentId": "<This is the ContentId that was specified on input>",<br/>
   * "CallBackType": "Job",<br/>
   * "Metadata": {<br/>
   * "adultscore": "0.xxx",<br/>
   * "a": "False",<br/>
   * "racyscore": "0.xxx",<br/>
   * "r": "True"<br/>
   * }<br/>
   * }<br/>
   *
   * </p>
   * <p>
   * <h4>Review Completion CallBack Sample</h4><br/>
   *
   * {
   * "ReviewId": "<Review Id>",<br/>
   * "ModifiedOn": "2016-10-11T22:36:32.9934851Z",<br/>
   * "ModifiedBy": "<Name of the Reviewer>",<br/>
   * "CallBackType": "Review",<br/>
   * "ContentId": "<The ContentId that was specified input>",<br/>
   * "Metadata": {<br/>
   * "adultscore": "0.xxx",
   * "a": "False",<br/>
   * "racyscore": "0.xxx",<br/>
   * "r": "True"<br/>
   * },<br/>
   * "ReviewerResultTags": {<br/>
   * "a": "False",<br/>
   * "r": "True"<br/>
   * }<br/>
   * }<br/>
   *
   * </p>.
   * @param teamName Your team name.
   * @param contentType Image, Text or Video. Possible values include: 'Image', 'Text', 'Video'
   * @param contentId Id/Name to identify the content submitted.
   * @param workflowName Workflow Name that you want to invoke.
   * @param jobContentType The content type. Possible values include: 'application/json',
   * 'image/jpeg'
   * @param content Content to evaluate.
   * @param [options] The optional parameters
   * @returns Promise<Models.ReviewsCreateJobResponse>
   */
  createJob(teamName: string, contentType: Models.ContentType, contentId: string, workflowName: string, jobContentType: Models.JobContentType, content: Models.Content, options?: Models.ReviewsCreateJobOptionalParams): Promise<Models.ReviewsCreateJobResponse>;
  /**
   * @param teamName Your team name.
   * @param contentType Image, Text or Video. Possible values include: 'Image', 'Text', 'Video'
   * @param contentId Id/Name to identify the content submitted.
   * @param workflowName Workflow Name that you want to invoke.
   * @param jobContentType The content type. Possible values include: 'application/json',
   * 'image/jpeg'
   * @param content Content to evaluate.
   * @param callback The callback
   */
  createJob(teamName: string, contentType: Models.ContentType, contentId: string, workflowName: string, jobContentType: Models.JobContentType, content: Models.Content, callback: msRest.ServiceCallback<Models.JobId>): void;
  /**
   * @param teamName Your team name.
   * @param contentType Image, Text or Video. Possible values include: 'Image', 'Text', 'Video'
   * @param contentId Id/Name to identify the content submitted.
   * @param workflowName Workflow Name that you want to invoke.
   * @param jobContentType The content type. Possible values include: 'application/json',
   * 'image/jpeg'
   * @param content Content to evaluate.
   * @param options The optional parameters
   * @param callback The callback
   */
  createJob(teamName: string, contentType: Models.ContentType, contentId: string, workflowName: string, jobContentType: Models.JobContentType, content: Models.Content, options: Models.ReviewsCreateJobOptionalParams, callback: msRest.ServiceCallback<Models.JobId>): void;
  createJob(teamName: string, contentType: Models.ContentType, contentId: string, workflowName: string, jobContentType: Models.JobContentType, content: Models.Content, options?: Models.ReviewsCreateJobOptionalParams, callback?: msRest.ServiceCallback<Models.JobId>): Promise<Models.ReviewsCreateJobResponse> {
    return this.client.sendOperationRequest(
      {
        teamName,
        contentType,
        contentId,
        workflowName,
        jobContentType,
        content,
        options
      },
      createJobOperationSpec,
      callback) as Promise<Models.ReviewsCreateJobResponse>;
  }

  /**
   * The reviews created would show up for Reviewers on your team. As Reviewers complete reviewing,
   * results of the Review would be POSTED (i.e. HTTP POST) on the specified CallBackEndpoint.
   *
   * <h3>CallBack Schemas </h3>
   * <h4>Review Completion CallBack Sample</h4>
   * <p>
   * {<br/>
   * "ReviewId": "<Review Id>",<br/>
   * "ModifiedOn": "2016-10-11T22:36:32.9934851Z",<br/>
   * "ModifiedBy": "<Name of the Reviewer>",<br/>
   * "CallBackType": "Review",<br/>
   * "ContentId": "<The ContentId that was specified input>",<br/>
   * "Metadata": {<br/>
   * "adultscore": "0.xxx",<br/>
   * "a": "False",<br/>
   * "racyscore": "0.xxx",<br/>
   * "r": "True"<br/>
   * },<br/>
   * "ReviewerResultTags": {<br/>
   * "a": "False",<br/>
   * "r": "True"<br/>
   * }<br/>
   * }<br/>
   *
   * </p>.
   * @param teamName Your team name.
   * @param reviewId Id of the review.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  addVideoFrame(teamName: string, reviewId: string, options?: Models.ReviewsAddVideoFrameOptionalParams): Promise<msRest.RestResponse>;
  /**
   * @param teamName Your team name.
   * @param reviewId Id of the review.
   * @param callback The callback
   */
  addVideoFrame(teamName: string, reviewId: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param teamName Your team name.
   * @param reviewId Id of the review.
   * @param options The optional parameters
   * @param callback The callback
   */
  addVideoFrame(teamName: string, reviewId: string, options: Models.ReviewsAddVideoFrameOptionalParams, callback: msRest.ServiceCallback<void>): void;
  addVideoFrame(teamName: string, reviewId: string, options?: Models.ReviewsAddVideoFrameOptionalParams, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        teamName,
        reviewId,
        options
      },
      addVideoFrameOperationSpec,
      callback);
  }

  /**
   * The reviews created would show up for Reviewers on your team. As Reviewers complete reviewing,
   * results of the Review would be POSTED (i.e. HTTP POST) on the specified CallBackEndpoint.
   *
   * <h3>CallBack Schemas </h3>
   * <h4>Review Completion CallBack Sample</h4>
   * <p>
   * {<br/>
   * "ReviewId": "<Review Id>",<br/>
   * "ModifiedOn": "2016-10-11T22:36:32.9934851Z",<br/>
   * "ModifiedBy": "<Name of the Reviewer>",<br/>
   * "CallBackType": "Review",<br/>
   * "ContentId": "<The ContentId that was specified input>",<br/>
   * "Metadata": {<br/>
   * "adultscore": "0.xxx",<br/>
   * "a": "False",<br/>
   * "racyscore": "0.xxx",<br/>
   * "r": "True"<br/>
   * },<br/>
   * "ReviewerResultTags": {<br/>
   * "a": "False",<br/>
   * "r": "True"<br/>
   * }<br/>
   * }<br/>
   *
   * </p>.
   * @param teamName Your team name.
   * @param reviewId Id of the review.
   * @param [options] The optional parameters
   * @returns Promise<Models.ReviewsGetVideoFramesResponse>
   */
  getVideoFrames(teamName: string, reviewId: string, options?: Models.ReviewsGetVideoFramesOptionalParams): Promise<Models.ReviewsGetVideoFramesResponse>;
  /**
   * @param teamName Your team name.
   * @param reviewId Id of the review.
   * @param callback The callback
   */
  getVideoFrames(teamName: string, reviewId: string, callback: msRest.ServiceCallback<Models.Frames>): void;
  /**
   * @param teamName Your team name.
   * @param reviewId Id of the review.
   * @param options The optional parameters
   * @param callback The callback
   */
  getVideoFrames(teamName: string, reviewId: string, options: Models.ReviewsGetVideoFramesOptionalParams, callback: msRest.ServiceCallback<Models.Frames>): void;
  getVideoFrames(teamName: string, reviewId: string, options?: Models.ReviewsGetVideoFramesOptionalParams, callback?: msRest.ServiceCallback<Models.Frames>): Promise<Models.ReviewsGetVideoFramesResponse> {
    return this.client.sendOperationRequest(
      {
        teamName,
        reviewId,
        options
      },
      getVideoFramesOperationSpec,
      callback) as Promise<Models.ReviewsGetVideoFramesResponse>;
  }

  /**
   * Publish video review to make it available for review.
   * @param teamName Your team name.
   * @param reviewId Id of the review.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  publishVideoReview(teamName: string, reviewId: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param teamName Your team name.
   * @param reviewId Id of the review.
   * @param callback The callback
   */
  publishVideoReview(teamName: string, reviewId: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param teamName Your team name.
   * @param reviewId Id of the review.
   * @param options The optional parameters
   * @param callback The callback
   */
  publishVideoReview(teamName: string, reviewId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  publishVideoReview(teamName: string, reviewId: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        teamName,
        reviewId,
        options
      },
      publishVideoReviewOperationSpec,
      callback);
  }

  /**
   * This API adds a transcript screen text result file for a video review. Transcript screen text
   * result file is a result of Screen Text API . In order to generate transcript screen text result
   * file , a transcript file has to be screened for profanity using Screen Text API.
   * @param contentType The content type.
   * @param teamName Your team name.
   * @param reviewId Id of the review.
   * @param transcriptModerationBody Body for add video transcript moderation result API
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  addVideoTranscriptModerationResult(contentType: string, teamName: string, reviewId: string, transcriptModerationBody: Models.TranscriptModerationBodyItem[], options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param contentType The content type.
   * @param teamName Your team name.
   * @param reviewId Id of the review.
   * @param transcriptModerationBody Body for add video transcript moderation result API
   * @param callback The callback
   */
  addVideoTranscriptModerationResult(contentType: string, teamName: string, reviewId: string, transcriptModerationBody: Models.TranscriptModerationBodyItem[], callback: msRest.ServiceCallback<void>): void;
  /**
   * @param contentType The content type.
   * @param teamName Your team name.
   * @param reviewId Id of the review.
   * @param transcriptModerationBody Body for add video transcript moderation result API
   * @param options The optional parameters
   * @param callback The callback
   */
  addVideoTranscriptModerationResult(contentType: string, teamName: string, reviewId: string, transcriptModerationBody: Models.TranscriptModerationBodyItem[], options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  addVideoTranscriptModerationResult(contentType: string, teamName: string, reviewId: string, transcriptModerationBody: Models.TranscriptModerationBodyItem[], options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        contentType,
        teamName,
        reviewId,
        transcriptModerationBody,
        options
      },
      addVideoTranscriptModerationResultOperationSpec,
      callback);
  }

  /**
   * This API adds a transcript file (text version of all the words spoken in a video) to a video
   * review. The file should be a valid WebVTT format.
   * @param teamName Your team name.
   * @param reviewId Id of the review.
   * @param vTTfile Transcript file of the video.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  addVideoTranscript(teamName: string, reviewId: string, vTTfile: msRest.HttpRequestBody, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param teamName Your team name.
   * @param reviewId Id of the review.
   * @param vTTfile Transcript file of the video.
   * @param callback The callback
   */
  addVideoTranscript(teamName: string, reviewId: string, vTTfile: msRest.HttpRequestBody, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param teamName Your team name.
   * @param reviewId Id of the review.
   * @param vTTfile Transcript file of the video.
   * @param options The optional parameters
   * @param callback The callback
   */
  addVideoTranscript(teamName: string, reviewId: string, vTTfile: msRest.HttpRequestBody, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  addVideoTranscript(teamName: string, reviewId: string, vTTfile: msRest.HttpRequestBody, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        teamName,
        reviewId,
        vTTfile,
        options
      },
      addVideoTranscriptOperationSpec,
      callback);
  }

  /**
   * The reviews created would show up for Reviewers on your team. As Reviewers complete reviewing,
   * results of the Review would be POSTED (i.e. HTTP POST) on the specified CallBackEndpoint.
   *
   * <h3>CallBack Schemas </h3>
   * <h4>Review Completion CallBack Sample</h4>
   * <p>
   * {<br/>
   * "ReviewId": "<Review Id>",<br/>
   * "ModifiedOn": "2016-10-11T22:36:32.9934851Z",<br/>
   * "ModifiedBy": "<Name of the Reviewer>",<br/>
   * "CallBackType": "Review",<br/>
   * "ContentId": "<The ContentId that was specified input>",<br/>
   * "Metadata": {<br/>
   * "adultscore": "0.xxx",<br/>
   * "a": "False",<br/>
   * "racyscore": "0.xxx",<br/>
   * "r": "True"<br/>
   * },<br/>
   * "ReviewerResultTags": {<br/>
   * "a": "False",<br/>
   * "r": "True"<br/>
   * }<br/>
   * }<br/>
   *
   * </p>.
   * @param contentType The content type.
   * @param teamName Your team name.
   * @param createVideoReviewsBody Body for create reviews API
   * @param [options] The optional parameters
   * @returns Promise<Models.ReviewsCreateVideoReviewsResponse>
   */
  createVideoReviews(contentType: string, teamName: string, createVideoReviewsBody: Models.CreateVideoReviewsBodyItem[], options?: Models.ReviewsCreateVideoReviewsOptionalParams): Promise<Models.ReviewsCreateVideoReviewsResponse>;
  /**
   * @param contentType The content type.
   * @param teamName Your team name.
   * @param createVideoReviewsBody Body for create reviews API
   * @param callback The callback
   */
  createVideoReviews(contentType: string, teamName: string, createVideoReviewsBody: Models.CreateVideoReviewsBodyItem[], callback: msRest.ServiceCallback<string[]>): void;
  /**
   * @param contentType The content type.
   * @param teamName Your team name.
   * @param createVideoReviewsBody Body for create reviews API
   * @param options The optional parameters
   * @param callback The callback
   */
  createVideoReviews(contentType: string, teamName: string, createVideoReviewsBody: Models.CreateVideoReviewsBodyItem[], options: Models.ReviewsCreateVideoReviewsOptionalParams, callback: msRest.ServiceCallback<string[]>): void;
  createVideoReviews(contentType: string, teamName: string, createVideoReviewsBody: Models.CreateVideoReviewsBodyItem[], options?: Models.ReviewsCreateVideoReviewsOptionalParams, callback?: msRest.ServiceCallback<string[]>): Promise<Models.ReviewsCreateVideoReviewsResponse> {
    return this.client.sendOperationRequest(
      {
        contentType,
        teamName,
        createVideoReviewsBody,
        options
      },
      createVideoReviewsOperationSpec,
      callback) as Promise<Models.ReviewsCreateVideoReviewsResponse>;
  }

  /**
   * Use this method to add frames for a video review.Timescale: This parameter is a factor which is
   * used to convert the timestamp on a frame into milliseconds. Timescale is provided in the output
   * of the Content Moderator video media processor on the Azure Media Services platform.Timescale in
   * the Video Moderation output is Ticks/Second.
   * @param contentType The content type.
   * @param teamName Your team name.
   * @param reviewId Id of the review.
   * @param videoFrameBody Body for add video frames API
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  addVideoFrameUrl(contentType: string, teamName: string, reviewId: string, videoFrameBody: Models.VideoFrameBodyItem[], options?: Models.ReviewsAddVideoFrameUrlOptionalParams): Promise<msRest.RestResponse>;
  /**
   * @param contentType The content type.
   * @param teamName Your team name.
   * @param reviewId Id of the review.
   * @param videoFrameBody Body for add video frames API
   * @param callback The callback
   */
  addVideoFrameUrl(contentType: string, teamName: string, reviewId: string, videoFrameBody: Models.VideoFrameBodyItem[], callback: msRest.ServiceCallback<void>): void;
  /**
   * @param contentType The content type.
   * @param teamName Your team name.
   * @param reviewId Id of the review.
   * @param videoFrameBody Body for add video frames API
   * @param options The optional parameters
   * @param callback The callback
   */
  addVideoFrameUrl(contentType: string, teamName: string, reviewId: string, videoFrameBody: Models.VideoFrameBodyItem[], options: Models.ReviewsAddVideoFrameUrlOptionalParams, callback: msRest.ServiceCallback<void>): void;
  addVideoFrameUrl(contentType: string, teamName: string, reviewId: string, videoFrameBody: Models.VideoFrameBodyItem[], options?: Models.ReviewsAddVideoFrameUrlOptionalParams, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        contentType,
        teamName,
        reviewId,
        videoFrameBody,
        options
      },
      addVideoFrameUrlOperationSpec,
      callback);
  }

  /**
   * Use this method to add frames for a video review.Timescale: This parameter is a factor which is
   * used to convert the timestamp on a frame into milliseconds. Timescale is provided in the output
   * of the Content Moderator video media processor on the Azure Media Services platform.Timescale in
   * the Video Moderation output is Ticks/Second.
   * @param contentType The content type.
   * @param teamName Your team name.
   * @param reviewId Id of the review.
   * @param frameImageZip Zip file containing frame images.
   * @param frameMetadata Metadata of the frame.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  addVideoFrameStream(contentType: string, teamName: string, reviewId: string, frameImageZip: msRest.HttpRequestBody, frameMetadata: string, options?: Models.ReviewsAddVideoFrameStreamOptionalParams): Promise<msRest.RestResponse>;
  /**
   * @param contentType The content type.
   * @param teamName Your team name.
   * @param reviewId Id of the review.
   * @param frameImageZip Zip file containing frame images.
   * @param frameMetadata Metadata of the frame.
   * @param callback The callback
   */
  addVideoFrameStream(contentType: string, teamName: string, reviewId: string, frameImageZip: msRest.HttpRequestBody, frameMetadata: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param contentType The content type.
   * @param teamName Your team name.
   * @param reviewId Id of the review.
   * @param frameImageZip Zip file containing frame images.
   * @param frameMetadata Metadata of the frame.
   * @param options The optional parameters
   * @param callback The callback
   */
  addVideoFrameStream(contentType: string, teamName: string, reviewId: string, frameImageZip: msRest.HttpRequestBody, frameMetadata: string, options: Models.ReviewsAddVideoFrameStreamOptionalParams, callback: msRest.ServiceCallback<void>): void;
  addVideoFrameStream(contentType: string, teamName: string, reviewId: string, frameImageZip: msRest.HttpRequestBody, frameMetadata: string, options?: Models.ReviewsAddVideoFrameStreamOptionalParams, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        contentType,
        teamName,
        reviewId,
        frameImageZip,
        frameMetadata,
        options
      },
      addVideoFrameStreamOperationSpec,
      callback);
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getReviewOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "contentmoderator/review/v1.0/teams/{teamName}/reviews/{reviewId}",
  urlParameters: [
    Parameters.endpoint,
    Parameters.teamName,
    Parameters.reviewId
  ],
  responses: {
    200: {
      bodyMapper: Mappers.Review
    },
    default: {
      bodyMapper: Mappers.APIError
    }
  },
  serializer
};

const getJobDetailsOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "contentmoderator/review/v1.0/teams/{teamName}/jobs/{JobId}",
  urlParameters: [
    Parameters.endpoint,
    Parameters.teamName,
    Parameters.jobId
  ],
  responses: {
    200: {
      bodyMapper: Mappers.Job
    },
    default: {
      bodyMapper: Mappers.APIError
    }
  },
  serializer
};

const createReviewsOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "contentmoderator/review/v1.0/teams/{teamName}/reviews",
  urlParameters: [
    Parameters.endpoint,
    Parameters.teamName
  ],
  queryParameters: [
    Parameters.subTeam
  ],
  headerParameters: [
    Parameters.urlContentType
  ],
  requestBody: {
    parameterPath: "createReviewBody",
    mapper: {
      required: true,
      serializedName: "createReviewBody",
      type: {
        name: "Sequence",
        element: {
          type: {
            name: "Composite",
            className: "CreateReviewBodyItem"
          }
        }
      }
    }
  },
  responses: {
    200: {
      bodyMapper: {
        serializedName: "parsedResponse",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      }
    },
    default: {
      bodyMapper: Mappers.APIError
    }
  },
  serializer
};

const createJobOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "contentmoderator/review/v1.0/teams/{teamName}/jobs",
  urlParameters: [
    Parameters.endpoint,
    Parameters.teamName
  ],
  queryParameters: [
    Parameters.contentType1,
    Parameters.contentId,
    Parameters.workflowName,
    Parameters.callBackEndpoint
  ],
  headerParameters: [
    Parameters.jobContentType
  ],
  requestBody: {
    parameterPath: "content",
    mapper: {
      ...Mappers.Content,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.JobId
    },
    default: {
      bodyMapper: Mappers.APIError
    }
  },
  serializer
};

const addVideoFrameOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "contentmoderator/review/v1.0/teams/{teamName}/reviews/{reviewId}/frames",
  urlParameters: [
    Parameters.endpoint,
    Parameters.teamName,
    Parameters.reviewId
  ],
  queryParameters: [
    Parameters.timescale
  ],
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.APIError
    }
  },
  serializer
};

const getVideoFramesOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "contentmoderator/review/v1.0/teams/{teamName}/reviews/{reviewId}/frames",
  urlParameters: [
    Parameters.endpoint,
    Parameters.teamName,
    Parameters.reviewId
  ],
  queryParameters: [
    Parameters.startSeed,
    Parameters.noOfRecords,
    Parameters.filter
  ],
  responses: {
    200: {
      bodyMapper: Mappers.Frames
    },
    default: {
      bodyMapper: Mappers.APIError
    }
  },
  serializer
};

const publishVideoReviewOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "contentmoderator/review/v1.0/teams/{teamName}/reviews/{reviewId}/publish",
  urlParameters: [
    Parameters.endpoint,
    Parameters.teamName,
    Parameters.reviewId
  ],
  responses: {
    204: {},
    default: {
      bodyMapper: Mappers.APIError
    }
  },
  serializer
};

const addVideoTranscriptModerationResultOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "contentmoderator/review/v1.0/teams/{teamName}/reviews/{reviewId}/transcriptmoderationresult",
  urlParameters: [
    Parameters.endpoint,
    Parameters.teamName,
    Parameters.reviewId
  ],
  headerParameters: [
    Parameters.contentType0
  ],
  requestBody: {
    parameterPath: "transcriptModerationBody",
    mapper: {
      required: true,
      serializedName: "transcriptModerationBody",
      type: {
        name: "Sequence",
        element: {
          type: {
            name: "Composite",
            className: "TranscriptModerationBodyItem"
          }
        }
      }
    }
  },
  responses: {
    204: {},
    default: {
      bodyMapper: Mappers.APIError
    }
  },
  serializer
};

const addVideoTranscriptOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "contentmoderator/review/v1.0/teams/{teamName}/reviews/{reviewId}/transcript",
  urlParameters: [
    Parameters.endpoint,
    Parameters.teamName,
    Parameters.reviewId
  ],
  headerParameters: [
    Parameters.contentType2
  ],
  requestBody: {
    parameterPath: "vTTfile",
    mapper: {
      required: true,
      serializedName: "VTT file",
      type: {
        name: "Stream"
      }
    }
  },
  contentType: "text/plain",
  responses: {
    204: {},
    default: {
      bodyMapper: Mappers.APIError
    }
  },
  serializer
};

const createVideoReviewsOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "contentmoderator/review/v1.0/teams/{teamName}/reviews",
  urlParameters: [
    Parameters.endpoint,
    Parameters.teamName
  ],
  queryParameters: [
    Parameters.subTeam
  ],
  headerParameters: [
    Parameters.contentType0
  ],
  requestBody: {
    parameterPath: "createVideoReviewsBody",
    mapper: {
      required: true,
      serializedName: "CreateVideoReviewsBody",
      type: {
        name: "Sequence",
        element: {
          type: {
            name: "Composite",
            className: "CreateVideoReviewsBodyItem"
          }
        }
      }
    }
  },
  responses: {
    200: {
      bodyMapper: {
        serializedName: "parsedResponse",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      }
    },
    default: {
      bodyMapper: Mappers.APIError
    }
  },
  serializer
};

const addVideoFrameUrlOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "contentmoderator/review/v1.0/teams/{teamName}/reviews/{reviewId}/frames",
  urlParameters: [
    Parameters.endpoint,
    Parameters.teamName,
    Parameters.reviewId
  ],
  queryParameters: [
    Parameters.timescale
  ],
  headerParameters: [
    Parameters.contentType0
  ],
  requestBody: {
    parameterPath: "videoFrameBody",
    mapper: {
      required: true,
      serializedName: "videoFrameBody",
      type: {
        name: "Sequence",
        element: {
          type: {
            name: "Composite",
            className: "VideoFrameBodyItem"
          }
        }
      }
    }
  },
  responses: {
    204: {},
    default: {
      bodyMapper: Mappers.APIError
    }
  },
  serializer
};

const addVideoFrameStreamOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "contentmoderator/review/v1.0/teams/{teamName}/reviews/{reviewId}/frames",
  urlParameters: [
    Parameters.endpoint,
    Parameters.teamName,
    Parameters.reviewId
  ],
  queryParameters: [
    Parameters.timescale
  ],
  headerParameters: [
    Parameters.contentType0
  ],
  formDataParameters: [
    Parameters.frameImageZip,
    Parameters.frameMetadata
  ],
  contentType: "multipart/form-data",
  responses: {
    204: {},
    default: {
      bodyMapper: Mappers.APIError
    }
  },
  serializer
};
