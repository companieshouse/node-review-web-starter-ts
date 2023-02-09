import * as logger from "./../Logger";

export class GenericValidator {

    constructor() {

    }

    isValidEmail(email: string): Promise<boolean> {
      logger.info(`Request to validate email: ${email}`);
      return new Promise((resolve, reject) => {
        // validate email here
        resolve(true);
      });
    }
};
