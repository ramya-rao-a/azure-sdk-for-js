/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import { CloudErrorMapper, BaseResourceMapper } from "ms-rest-azure-js";
import * as msRest from "ms-rest-js";

export const CloudError = CloudErrorMapper;
export const BaseResource = BaseResourceMapper;

export const Resource: msRest.CompositeMapper = {
  serializedName: "Resource",
  type: {
    name: "Composite",
    className: "Resource",
    modelProperties: {
      id: {
        readOnly: true,
        serializedName: "id",
        type: {
          name: "String"
        }
      },
      name: {
        readOnly: true,
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      type: {
        readOnly: true,
        serializedName: "type",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const EnrollmentAccount: msRest.CompositeMapper = {
  serializedName: "EnrollmentAccount",
  type: {
    name: "Composite",
    className: "EnrollmentAccount",
    modelProperties: {
      ...Resource.type.modelProperties,
      principalName: {
        readOnly: true,
        serializedName: "properties.principalName",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const BillingPeriod: msRest.CompositeMapper = {
  serializedName: "BillingPeriod",
  type: {
    name: "Composite",
    className: "BillingPeriod",
    modelProperties: {
      ...Resource.type.modelProperties,
      billingPeriodStartDate: {
        readOnly: true,
        serializedName: "properties.billingPeriodStartDate",
        type: {
          name: "Date"
        }
      },
      billingPeriodEndDate: {
        readOnly: true,
        serializedName: "properties.billingPeriodEndDate",
        type: {
          name: "Date"
        }
      },
      invoiceIds: {
        readOnly: true,
        serializedName: "properties.invoiceIds",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};

export const DownloadUrl: msRest.CompositeMapper = {
  serializedName: "DownloadUrl",
  type: {
    name: "Composite",
    className: "DownloadUrl",
    modelProperties: {
      expiryTime: {
        readOnly: true,
        serializedName: "expiryTime",
        type: {
          name: "DateTime"
        }
      },
      url: {
        readOnly: true,
        serializedName: "url",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ErrorDetails: msRest.CompositeMapper = {
  serializedName: "ErrorDetails",
  type: {
    name: "Composite",
    className: "ErrorDetails",
    modelProperties: {
      code: {
        readOnly: true,
        serializedName: "code",
        type: {
          name: "String"
        }
      },
      message: {
        readOnly: true,
        serializedName: "message",
        type: {
          name: "String"
        }
      },
      target: {
        readOnly: true,
        serializedName: "target",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ErrorResponse: msRest.CompositeMapper = {
  serializedName: "ErrorResponse",
  type: {
    name: "Composite",
    className: "ErrorResponse",
    modelProperties: {
      error: {
        serializedName: "error",
        type: {
          name: "Composite",
          className: "ErrorDetails"
        }
      }
    }
  }
};

export const Invoice: msRest.CompositeMapper = {
  serializedName: "Invoice",
  type: {
    name: "Composite",
    className: "Invoice",
    modelProperties: {
      ...Resource.type.modelProperties,
      downloadUrl: {
        serializedName: "properties.downloadUrl",
        type: {
          name: "Composite",
          className: "DownloadUrl"
        }
      },
      invoicePeriodStartDate: {
        readOnly: true,
        serializedName: "properties.invoicePeriodStartDate",
        type: {
          name: "Date"
        }
      },
      invoicePeriodEndDate: {
        readOnly: true,
        serializedName: "properties.invoicePeriodEndDate",
        type: {
          name: "Date"
        }
      },
      billingPeriodIds: {
        readOnly: true,
        serializedName: "properties.billingPeriodIds",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};

export const OperationDisplay: msRest.CompositeMapper = {
  serializedName: "Operation_display",
  type: {
    name: "Composite",
    className: "OperationDisplay",
    modelProperties: {
      provider: {
        readOnly: true,
        serializedName: "provider",
        type: {
          name: "String"
        }
      },
      resource: {
        readOnly: true,
        serializedName: "resource",
        type: {
          name: "String"
        }
      },
      operation: {
        readOnly: true,
        serializedName: "operation",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Operation: msRest.CompositeMapper = {
  serializedName: "Operation",
  type: {
    name: "Composite",
    className: "Operation",
    modelProperties: {
      name: {
        readOnly: true,
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      display: {
        serializedName: "display",
        type: {
          name: "Composite",
          className: "OperationDisplay"
        }
      }
    }
  }
};

export const InvoicePricesheetsDownloadHeaders: msRest.CompositeMapper = {
  serializedName: "invoicepricesheets-download-headers",
  type: {
    name: "Composite",
    className: "InvoicePricesheetsDownloadHeaders",
    modelProperties: {
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      },
      retryAfter: {
        serializedName: "retry-after",
        type: {
          name: "String"
        }
      },
      azureAsyncOperation: {
        serializedName: "azure-asyncoperation",
        type: {
          name: "String"
        }
      },
      oDataEntityId: {
        serializedName: "odata-entityid",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const EnrollmentAccountListResult: msRest.CompositeMapper = {
  serializedName: "EnrollmentAccountListResult",
  type: {
    name: "Composite",
    className: "EnrollmentAccountListResult",
    modelProperties: {
      value: {
        readOnly: true,
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "EnrollmentAccount"
            }
          }
        }
      },
      nextLink: {
        readOnly: true,
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const BillingPeriodsListResult: msRest.CompositeMapper = {
  serializedName: "BillingPeriodsListResult",
  type: {
    name: "Composite",
    className: "BillingPeriodsListResult",
    modelProperties: {
      value: {
        readOnly: true,
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "BillingPeriod"
            }
          }
        }
      },
      nextLink: {
        readOnly: true,
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const InvoicesListResult: msRest.CompositeMapper = {
  serializedName: "InvoicesListResult",
  type: {
    name: "Composite",
    className: "InvoicesListResult",
    modelProperties: {
      value: {
        readOnly: true,
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Invoice"
            }
          }
        }
      },
      nextLink: {
        readOnly: true,
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const OperationListResult: msRest.CompositeMapper = {
  serializedName: "OperationListResult",
  type: {
    name: "Composite",
    className: "OperationListResult",
    modelProperties: {
      value: {
        readOnly: true,
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Operation"
            }
          }
        }
      },
      nextLink: {
        readOnly: true,
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};
