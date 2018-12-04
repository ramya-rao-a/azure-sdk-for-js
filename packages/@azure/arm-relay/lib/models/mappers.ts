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

export const TrackedResource: msRest.CompositeMapper = {
  serializedName: "TrackedResource",
  type: {
    name: "Composite",
    className: "TrackedResource",
    modelProperties: {
      ...Resource.type.modelProperties,
      location: {
        required: true,
        serializedName: "location",
        type: {
          name: "String"
        }
      },
      tags: {
        serializedName: "tags",
        type: {
          name: "Dictionary",
          value: {
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};

export const ResourceNamespacePatch: msRest.CompositeMapper = {
  serializedName: "ResourceNamespacePatch",
  type: {
    name: "Composite",
    className: "ResourceNamespacePatch",
    modelProperties: {
      ...Resource.type.modelProperties,
      tags: {
        serializedName: "tags",
        type: {
          name: "Dictionary",
          value: {
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};

export const HybridConnection: msRest.CompositeMapper = {
  serializedName: "HybridConnection",
  type: {
    name: "Composite",
    className: "HybridConnection",
    modelProperties: {
      ...Resource.type.modelProperties,
      createdAt: {
        readOnly: true,
        serializedName: "properties.createdAt",
        type: {
          name: "DateTime"
        }
      },
      updatedAt: {
        readOnly: true,
        serializedName: "properties.updatedAt",
        type: {
          name: "DateTime"
        }
      },
      listenerCount: {
        readOnly: true,
        serializedName: "properties.listenerCount",
        constraints: {
          InclusiveMaximum: 25,
          InclusiveMinimum: 0
        },
        type: {
          name: "Number"
        }
      },
      requiresClientAuthorization: {
        serializedName: "properties.requiresClientAuthorization",
        type: {
          name: "Boolean"
        }
      },
      userMetadata: {
        serializedName: "properties.userMetadata",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const WcfRelay: msRest.CompositeMapper = {
  serializedName: "WcfRelay",
  type: {
    name: "Composite",
    className: "WcfRelay",
    modelProperties: {
      ...Resource.type.modelProperties,
      isDynamic: {
        readOnly: true,
        serializedName: "properties.isDynamic",
        type: {
          name: "Boolean"
        }
      },
      createdAt: {
        readOnly: true,
        serializedName: "properties.createdAt",
        type: {
          name: "DateTime"
        }
      },
      updatedAt: {
        readOnly: true,
        serializedName: "properties.updatedAt",
        type: {
          name: "DateTime"
        }
      },
      listenerCount: {
        readOnly: true,
        serializedName: "properties.listenerCount",
        constraints: {
          InclusiveMaximum: 25,
          InclusiveMinimum: 0
        },
        type: {
          name: "Number"
        }
      },
      relayType: {
        serializedName: "properties.relayType",
        type: {
          name: "Enum",
          allowedValues: [
            "NetTcp",
            "Http"
          ]
        }
      },
      requiresClientAuthorization: {
        serializedName: "properties.requiresClientAuthorization",
        type: {
          name: "Boolean"
        }
      },
      requiresTransportSecurity: {
        serializedName: "properties.requiresTransportSecurity",
        type: {
          name: "Boolean"
        }
      },
      userMetadata: {
        serializedName: "properties.userMetadata",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Sku: msRest.CompositeMapper = {
  serializedName: "Sku",
  type: {
    name: "Composite",
    className: "Sku",
    modelProperties: {
      name: {
        required: true,
        isConstant: true,
        serializedName: "name",
        defaultValue: 'Standard',
        type: {
          name: "String"
        }
      },
      tier: {
        serializedName: "tier",
        type: {
          name: "Enum",
          allowedValues: [
            "Standard"
          ]
        }
      }
    }
  }
};

export const RelayNamespace: msRest.CompositeMapper = {
  serializedName: "RelayNamespace",
  type: {
    name: "Composite",
    className: "RelayNamespace",
    modelProperties: {
      ...TrackedResource.type.modelProperties,
      sku: {
        serializedName: "sku",
        type: {
          name: "Composite",
          className: "Sku"
        }
      },
      provisioningState: {
        readOnly: true,
        serializedName: "properties.provisioningState",
        type: {
          name: "Enum",
          allowedValues: [
            "Created",
            "Succeeded",
            "Deleted",
            "Failed",
            "Updating",
            "Unknown"
          ]
        }
      },
      createdAt: {
        readOnly: true,
        serializedName: "properties.createdAt",
        type: {
          name: "DateTime"
        }
      },
      updatedAt: {
        readOnly: true,
        serializedName: "properties.updatedAt",
        type: {
          name: "DateTime"
        }
      },
      serviceBusEndpoint: {
        readOnly: true,
        serializedName: "properties.serviceBusEndpoint",
        type: {
          name: "String"
        }
      },
      metricId: {
        readOnly: true,
        serializedName: "properties.metricId",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const RelayUpdateParameters: msRest.CompositeMapper = {
  serializedName: "RelayUpdateParameters",
  type: {
    name: "Composite",
    className: "RelayUpdateParameters",
    modelProperties: {
      ...ResourceNamespacePatch.type.modelProperties,
      sku: {
        serializedName: "sku",
        type: {
          name: "Composite",
          className: "Sku"
        }
      },
      provisioningState: {
        readOnly: true,
        serializedName: "properties.provisioningState",
        type: {
          name: "Enum",
          allowedValues: [
            "Created",
            "Succeeded",
            "Deleted",
            "Failed",
            "Updating",
            "Unknown"
          ]
        }
      },
      createdAt: {
        readOnly: true,
        serializedName: "properties.createdAt",
        type: {
          name: "DateTime"
        }
      },
      updatedAt: {
        readOnly: true,
        serializedName: "properties.updatedAt",
        type: {
          name: "DateTime"
        }
      },
      serviceBusEndpoint: {
        readOnly: true,
        serializedName: "properties.serviceBusEndpoint",
        type: {
          name: "String"
        }
      },
      metricId: {
        readOnly: true,
        serializedName: "properties.metricId",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const AuthorizationRule: msRest.CompositeMapper = {
  serializedName: "AuthorizationRule",
  type: {
    name: "Composite",
    className: "AuthorizationRule",
    modelProperties: {
      ...Resource.type.modelProperties,
      rights: {
        required: true,
        serializedName: "properties.rights",
        constraints: {
          UniqueItems: true
        },
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Enum",
              allowedValues: [
                "Manage",
                "Send",
                "Listen"
              ]
            }
          }
        }
      }
    }
  }
};

export const AccessKeys: msRest.CompositeMapper = {
  serializedName: "AccessKeys",
  type: {
    name: "Composite",
    className: "AccessKeys",
    modelProperties: {
      primaryConnectionString: {
        serializedName: "primaryConnectionString",
        type: {
          name: "String"
        }
      },
      secondaryConnectionString: {
        serializedName: "secondaryConnectionString",
        type: {
          name: "String"
        }
      },
      primaryKey: {
        serializedName: "primaryKey",
        type: {
          name: "String"
        }
      },
      secondaryKey: {
        serializedName: "secondaryKey",
        type: {
          name: "String"
        }
      },
      keyName: {
        serializedName: "keyName",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const RegenerateAccessKeyParameters: msRest.CompositeMapper = {
  serializedName: "RegenerateAccessKeyParameters",
  type: {
    name: "Composite",
    className: "RegenerateAccessKeyParameters",
    modelProperties: {
      keyType: {
        required: true,
        serializedName: "keyType",
        type: {
          name: "Enum",
          allowedValues: [
            "PrimaryKey",
            "SecondaryKey"
          ]
        }
      },
      key: {
        serializedName: "key",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const CheckNameAvailability: msRest.CompositeMapper = {
  serializedName: "CheckNameAvailability",
  type: {
    name: "Composite",
    className: "CheckNameAvailability",
    modelProperties: {
      name: {
        required: true,
        serializedName: "name",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const CheckNameAvailabilityResult: msRest.CompositeMapper = {
  serializedName: "CheckNameAvailabilityResult",
  type: {
    name: "Composite",
    className: "CheckNameAvailabilityResult",
    modelProperties: {
      message: {
        readOnly: true,
        serializedName: "message",
        type: {
          name: "String"
        }
      },
      nameAvailable: {
        serializedName: "nameAvailable",
        type: {
          name: "Boolean"
        }
      },
      reason: {
        serializedName: "reason",
        type: {
          name: "Enum",
          allowedValues: [
            "None",
            "InvalidName",
            "SubscriptionIsDisabled",
            "NameInUse",
            "NameInLockdown",
            "TooManyNamespaceInCurrentSubscription"
          ]
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

export const ErrorResponse: msRest.CompositeMapper = {
  serializedName: "ErrorResponse",
  type: {
    name: "Composite",
    className: "ErrorResponse",
    modelProperties: {
      code: {
        serializedName: "code",
        type: {
          name: "String"
        }
      },
      message: {
        serializedName: "message",
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

export const RelayNamespaceListResult: msRest.CompositeMapper = {
  serializedName: "RelayNamespaceListResult",
  type: {
    name: "Composite",
    className: "RelayNamespaceListResult",
    modelProperties: {
      value: {
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "RelayNamespace"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const AuthorizationRuleListResult: msRest.CompositeMapper = {
  serializedName: "AuthorizationRuleListResult",
  type: {
    name: "Composite",
    className: "AuthorizationRuleListResult",
    modelProperties: {
      value: {
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "AuthorizationRule"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const HybridConnectionListResult: msRest.CompositeMapper = {
  serializedName: "HybridConnectionListResult",
  type: {
    name: "Composite",
    className: "HybridConnectionListResult",
    modelProperties: {
      value: {
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "HybridConnection"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const WcfRelaysListResult: msRest.CompositeMapper = {
  serializedName: "WcfRelaysListResult",
  type: {
    name: "Composite",
    className: "WcfRelaysListResult",
    modelProperties: {
      value: {
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "WcfRelay"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};
