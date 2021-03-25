// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { isPlaybackMode, Recorder } from "@azure/test-utils-recorder";
import { assert } from "chai";
import { Context } from "mocha";
import { PhoneNumberAdministrationClient } from "../src";
import { createRecordedPhoneNumberAdministrationClientWithToken } from "./utils/recordedClient";

describe("PhoneNumberAdministrationClientWithToken [Playback/Live]", function() {
  let recorder: Recorder;
  let client: PhoneNumberAdministrationClient;
  let includePhoneNumberLiveTests: boolean;
  let phonePlanGroupId: string;
  let shouldSkip = false;
  const countryCode = "US";

  beforeEach(function(this: Context) {
    const recordedClient = createRecordedPhoneNumberAdministrationClientWithToken(this);
    if (!recordedClient) {
      shouldSkip = true;
    } else {
      client = recordedClient.client;
      recorder = recordedClient.recorder;
      includePhoneNumberLiveTests = recordedClient.includePhoneNumberLiveTests;
    }
  });

  afterEach(async function(this: Context) {
    if (!this.currentTest?.isPending()) {
      await recorder.stop();
    }
  });

  it("successfully gets phonePlanGroupId", async function(this: Context) {
    if ((!includePhoneNumberLiveTests && !isPlaybackMode()) || shouldSkip) {
      this.skip();
    }

    for await (const phonePlanGroup of client.listPhonePlanGroups(countryCode)) {
      assert.isString(phonePlanGroup.phonePlanGroupId);
      ({ phonePlanGroupId } = phonePlanGroup);
      assert.isString(phonePlanGroupId);
      break;
    }
  }).timeout(5000);
});
