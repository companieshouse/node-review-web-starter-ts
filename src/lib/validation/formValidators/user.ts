import { Logger } from "./../../Logger";
import { ErrorManifest } from "./../utils/error_manifests/default";

export class UserFormsValidator extends Validator {

    constructor() {
      this.errors = {};
      this.payload = {};
    }

    private _getErrorSignature () {
      return {
        status: 400,
        code: 'VALIDATION_ERRORS',
        message: errorManifest.default.summary,
        stack: {}
      }
    }

    validateUpdateSettings(payload: any): Promise<any> {
      logger.info(`Request to validate email: ${email}`);
      let errors = this._getErrorSignature();
      return new Promise((resolve, reject) => {
        // validate user settings form here
        resolve(true);
      });
    }
};
