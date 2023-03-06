// Generic handler is the base handler that is extended by all other handlers
// It contains methods that are common to multiple route handlers

import ErrorManifest from "./../../lib/utils/error_manifests/default";

export class GenericHandler {
    viewData: SomeType;
    errorManifest: someType2;

    constructor () {
        this.errorManifest = ErrorManifest;
    }

    someCommonMethod (): ResponseType {

    }
};
