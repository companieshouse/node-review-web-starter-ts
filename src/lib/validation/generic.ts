// Only include methods that validate common entities and fields i.e. fields that are common to multiple forms across the service
// These methods are then called by individual form validators that extend this class
// Examples of fields common to multiple forms (to include in this class) include: email, username, phone number, postcode, gender, etc...

import * as logger from "./../Logger";
import * as ErrorManifest from "./../utils/error_manifests/default";

export class GenericValidator {

    errors: any;
    payload: any;
    errorManifest: any;
    constructor() {
        this.errors = this.getErrorSignature();
        this.errorManifest = ErrorManifest;
    }

    protected getErrorSignature () {
        return {
            status: 400,
            code: 'VALIDATION_ERRORS',
            message: this.errorManifest.validation.default.summary,
            stack: {}
        }
    }

    isValidEmail(email: string): boolean {
        logger.info(`Request to validate email: ${email}`);
        const regex = '/^[email_regex]$/ig';
        if (regex.test(email)) {
            return true;
        }
        return false;
    }

    isValidUsername(username: string): boolean {
        logger.info(`Request to validate username: ${username}`);
        const regex = '/^[username_regex]$/ig';
        if (regex.test(username)) {
            return true;
        }
        return false;
    }

    isValidGender(gender: string): boolean {
        logger.info(`Request to validate gender: ${gender}`);
        const regex = '/^[gender_regex]$/ig';
        if (regex.test(gender)) {
            return true;
        }
        return false;
    }

    isValidPostCode(postCode: string): boolean {
        logger.info(`Request to validate PostCode: ${postCode}`);
        const regex = '/^[postCode_regex]$/ig';
        if (regex.test(postCode)) {
            return true;
        }
        return false;
    }
};
