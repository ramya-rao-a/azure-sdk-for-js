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

export const acceptLanguage: msRest.OperationParameter = {
  parameterPath: "acceptLanguage",
  mapper: {
    serializedName: "accept-language",
    defaultValue: 'en-US',
    type: {
      name: "String"
    }
  }
};
export const apiVersion: msRest.OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    required: true,
    serializedName: "api-version",
    type: {
      name: "String"
    }
  }
};
export const certificateName0: msRest.OperationURLParameter = {
  parameterPath: "certificateName",
  mapper: {
    required: true,
    serializedName: "certificate-name",
    type: {
      name: "String"
    }
  }
};
export const certificateName1: msRest.OperationURLParameter = {
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
export const certificateVersion: msRest.OperationURLParameter = {
  parameterPath: "certificateVersion",
  mapper: {
    required: true,
    serializedName: "certificate-version",
    type: {
      name: "String"
    }
  }
};
export const includePending: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "includePending"
  ],
  mapper: {
    serializedName: "includePending",
    type: {
      name: "Boolean"
    }
  }
};
export const issuerName: msRest.OperationURLParameter = {
  parameterPath: "issuerName",
  mapper: {
    required: true,
    serializedName: "issuer-name",
    type: {
      name: "String"
    }
  }
};
export const keyName0: msRest.OperationURLParameter = {
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
export const keyName1: msRest.OperationURLParameter = {
  parameterPath: "keyName",
  mapper: {
    required: true,
    serializedName: "key-name",
    type: {
      name: "String"
    }
  }
};
export const keyVersion: msRest.OperationURLParameter = {
  parameterPath: "keyVersion",
  mapper: {
    required: true,
    serializedName: "key-version",
    type: {
      name: "String"
    }
  }
};
export const maxresults: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "maxresults"
  ],
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
export const nextPageLink: msRest.OperationURLParameter = {
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
export const sasDefinitionName: msRest.OperationURLParameter = {
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
export const secretName0: msRest.OperationURLParameter = {
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
export const secretName1: msRest.OperationURLParameter = {
  parameterPath: "secretName",
  mapper: {
    required: true,
    serializedName: "secret-name",
    type: {
      name: "String"
    }
  }
};
export const secretVersion: msRest.OperationURLParameter = {
  parameterPath: "secretVersion",
  mapper: {
    required: true,
    serializedName: "secret-version",
    type: {
      name: "String"
    }
  }
};
export const storageAccountName0: msRest.OperationURLParameter = {
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
export const storageAccountName1: msRest.OperationURLParameter = {
  parameterPath: "storageAccountName",
  mapper: {
    required: true,
    serializedName: "storage-account-name",
    type: {
      name: "String"
    }
  }
};
export const vaultBaseUrl: msRest.OperationURLParameter = {
  parameterPath: "vaultBaseUrl",
  mapper: {
    required: true,
    serializedName: "vaultBaseUrl",
    defaultValue: '',
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};
