import * as express from "express";
import { GenericHandler } from "./../generic";
import { CompanyFormsValidator } from "./../../../lib/validation/formValidators/company";

export class CreateHandler extends GenericHandler {

    constructor () {
        super();
        this.viewData = {
            title: 'Create handler for company route',
            sampleKey:"sample value",
            errors: {},
        };
    }

    public async execute(req: express.Request, response: express.Response, method: string = '' ): Promise<SomeResponseType> {
      // ...process request here and return data for the view

      if (method !== 'POST') {
        return this.viewData;
      }

      let savedRequest: boolean = false;

      const validationErrors = await CompanyFormsValidator.validateCreateCompany(req.body);

      if(!Object.keys(validationErrors.stack).length) {
          this.viewData.errors = validationErrors.stack;
      } else {
        savedRequest = await this.save(req.body);
      }
      if (!savedRequest) {
        this.viewData.errors.serverError = this.errorManifest.generic.serverError;
      }

      return this.viewData;
    }

    private save(payload): SomeResponseType {
      // call service(s) to save data
      return Promise.resolve(true);
    }

    // additional support method in handler
    private async supportMethod2(): SomeResponseType {

    }
};
