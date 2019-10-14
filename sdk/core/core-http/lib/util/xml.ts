// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import * as xml2js from "xml2js";

/**
 * Converts given JSON object to XML string
 * @param obj JSON object to be converted into XML string
 * @param opts Options that govern the parsing of given JSON object.
 * rootName` indicates the name of the root element in the resulting XML
 */
export function stringifyXML(obj: any, opts?: { rootName?: string }) {
  const builderOptions: any = {
    explicitArray: false,
    explicitCharkey: false,
    renderOpts: {
      pretty: false
    }
  }
  if (opts && opts.rootName) {
    builderOptions["rootName"] = opts.rootName;
  }
  const builder = new xml2js.Builder(builderOptions);
  return builder.buildObject(obj);
}

/**
 * Converts given XML string into JSON
 * @param str String containg the XML content to be parsed into JSON
 * @param opts Options that govern the parsing of given xml string.
 * `includeRoot` indicates whether the root element is to be included or not in the output
 */
export function parseXML(str: string, opts?: { includeRoot?: boolean }): Promise<any> {
  const xmlParser = new xml2js.Parser({
    explicitArray: false,
    explicitCharkey: false,
    explicitRoot: opts && opts.includeRoot
  });
  return new Promise((resolve, reject) => {
    if (!str) {
      reject(new Error("Document is empty"));
    } else {
      xmlParser.parseString(str, (err?: Error, res?: any) => {
        if (err) {
          reject(err);
        } else {
          resolve(res);
        }
      });
    }
  });
}
