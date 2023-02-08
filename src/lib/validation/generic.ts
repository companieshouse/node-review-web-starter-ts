import { Logger } from "./../Logger";

export class GenericValidator {

    constructor() {

    }

    isValidEmail(email: string): Promise<boolean> {
      logger.info(`Request to validate email: ${email}`);
      let errors = this._getErrorSignature();
      return new Promise((resolve, reject) => {
        // validate email here
        resolve(true);
      });
    }
};
