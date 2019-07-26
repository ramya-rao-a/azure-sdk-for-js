/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as coreHttp from "@azure/core-http";

export const acceptLanguage: coreHttp.OperationParameter = {
  parameterPath: "acceptLanguage",
  mapper: {
    serializedName: "accept-language",
    defaultValue: "en-US",
    type: {
      name: "String"
    }
  }
};

export const spanOptions: coreHttp.OperationParameter = {
  parameterPath: ["options", "requestOptions", "spanOptions"],
  mapper: {
    serializedName: "span-options",
    type: {
      name: "Object"
    }
  }
};

export const apiVersion: coreHttp.OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    required: true,
    serializedName: "api-version",
    type: {
      name: "String"
    }
  }
};

export const certificateName0: coreHttp.OperationURLParameter = {
  parameterPath: "certificateName",
  mapper: {
    required: true,
    serializedName: "certificate-name",
    type: {
      name: "String"
    }
  }
};
export const certificateName1: coreHttp.OperationURLParameter = {
  parameterPath: "certificateName",
  mapper: {
    required: true,
    serializedName: "certificate-name",
    constraints: {
      Pattern: /^[0-9a-zA-Z-]+$/
    },
    type: {
      name: "String"
    }
  }
};
export const certificateVersion: coreHttp.OperationURLParameter = {
  parameterPath: "certificateVersion",
  mapper: {
    required: true,
    serializedName: "certificate-version",
    type: {
      name: "String"
    }
  }
};
export const includePending: coreHttp.OperationQueryParameter = {
  parameterPath: ["options", "includePending"],
  mapper: {
    serializedName: "includePending",
    type: {
      name: "Boolean"
    }
  }
};
export const issuerName: coreHttp.OperationURLParameter = {
  parameterPath: "issuerName",
  mapper: {
    required: true,
    serializedName: "issuer-name",
    type: {
      name: "String"
    }
  }
};
export const keyName0: coreHttp.OperationURLParameter = {
  parameterPath: "keyName",
  mapper: {
    required: true,
    serializedName: "key-name",
    constraints: {
      Pattern: /^[0-9a-zA-Z-]+$/
    },
    type: {
      name: "String"
    }
  }
};
export const keyName1: coreHttp.OperationURLParameter = {
  parameterPath: "keyName",
  mapper: {
    required: true,
    serializedName: "key-name",
    type: {
      name: "String"
    }
  }
};
export const keyVersion: coreHttp.OperationURLParameter = {
  parameterPath: "keyVersion",
  mapper: {
    required: true,
    serializedName: "key-version",
    type: {
      name: "String"
    }
  }
};
export const maxresults: coreHttp.OperationQueryParameter = {
  parameterPath: ["options", "maxresults"],
  mapper: {
    serializedName: "maxresults",
    constraints: {
      InclusiveMaximum: 25,
      InclusiveMinimum: 1
    },
    type: {
      name: "Number"
    }
  }
};
export const nextPageLink: coreHttp.OperationURLParameter = {
  parameterPath: "nextPageLink",
  mapper: {
    required: true,
    serializedName: "nextLink",
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};
export const sasDefinitionName: coreHttp.OperationURLParameter = {
  parameterPath: "sasDefinitionName",
  mapper: {
    required: true,
    serializedName: "sas-definition-name",
    constraints: {
      Pattern: /^[0-9a-zA-Z]+$/
    },
    type: {
      name: "String"
    }
  }
};
export const secretName0: coreHttp.OperationURLParameter = {
  parameterPath: "secretName",
  mapper: {
    required: true,
    serializedName: "secret-name",
    constraints: {
      Pattern: /^[0-9a-zA-Z-]+$/
    },
    type: {
      name: "String"
    }
  }
};
export const secretName1: coreHttp.OperationURLParameter = {
  parameterPath: "secretName",
  mapper: {
    required: true,
    serializedName: "secret-name",
    type: {
      name: "String"
    }
  }
};
export const secretVersion: coreHttp.OperationURLParameter = {
  parameterPath: "secretVersion",
  mapper: {
    required: true,
    serializedName: "secret-version",
    type: {
      name: "String"
    }
  }
};
export const storageAccountName0: coreHttp.OperationURLParameter = {
  parameterPath: "storageAccountName",
  mapper: {
    required: true,
    serializedName: "storage-account-name",
    constraints: {
      Pattern: /^[0-9a-zA-Z]+$/
    },
    type: {
      name: "String"
    }
  }
};
export const storageAccountName1: coreHttp.OperationURLParameter = {
  parameterPath: "storageAccountName",
  mapper: {
    required: true,
    serializedName: "storage-account-name",
    type: {
      name: "String"
    }
  }
};
export const vaultBaseUrl: coreHttp.OperationURLParameter = {
  parameterPath: "vaultBaseUrl",
  mapper: {
    required: true,
    serializedName: "vaultBaseUrl",
    defaultValue: "",
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};
