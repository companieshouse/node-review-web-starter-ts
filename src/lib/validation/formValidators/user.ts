import * as logger from "./../../Logger";
import ErrorManifest from "./../../utils/error_manifests/default";

export class UserFormsValidator extends Validator {

    errorManifest: any;
    errors: any;
    payload: any;

    constructor() {
        super();
        this.errors = {};
        this.payload = {};
        this.errorManifest = ErrorManifest.validation;
    }

    private _getErrorSignature () {
      return {
        status: 400,
        code: 'VALIDATION_ERRORS',
        message: this.errorManifest.default.summary,
        stack: {}
      }
    }

    validateUpdateSettings(payload: any): Promise<any> {
      logger.info(`Request to validate update settings form`);
      let errors = this._getErrorSignature();
      return new Promise((resolve, reject) => {
        // validate user settings form here
        resolve(true);
      });
    }
};
