import * as logger from "./../../Logger";
import { GenericValidator } from "./../../validation/generic";

export class CompanyFormsValidator extends GenericValidator {

    constructor() {
        super();
    }

    validateCreateCompany(payload: any): Promise<any> {
        logger.info(`Request to validate create company form`);

        try {
            if(typeof payload.email !== 'undefined' && !payload.email.length) {
                this.errors.stack.email = this.errorManifest.validation.email.blank;
            } else if (this.isValidEmail(payload.email)) {
                this.errors.stack.email = this.errorManifest.validation.email.incorrect;
            }

            // validate additional fields in payload here, adding to error object as and when validation fails

            // finally, check if all fields validated correctly, or if one or more of them failed
            if(!Object.keys(this.errors.stack).length) {
                return Promise.resolve(true);
            } else {
                return Promise.reject(this.errors);
            }
        } catch (err) {
            this.errors.stack = this.errorManifest.generic.serverError;
            return Promise.reject(this.errors);
        }
    }

    validateSaveDetails(payload: any): Promise<any> {

    }

};
