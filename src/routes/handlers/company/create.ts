import * as express from "express";
import { GenericHandler } from "./../generic";

export class CreateHandler extends GenericHandler {

    constructor () {
      this.viewData = {
  			title: 'Create handler for company route',
  			this_data: {
  				sample_key:"sample value",
          errors: {},
  			}
  		};
    }

    async execute(req: express.Request, response: express.Response, method: string = '' ): Promise<SomeResponseType> {
      // ...process request here and return data for the view

      let savedRequest: boolean = false;

      if (method === 'POST') {
        return this.viewData;
      }

      const validationErrors = await this.validate(req.body);

      if(!Object.keys(validationErrors).length) {
          this.viewData.errors = validationErrors.stack;
      } else {
        savedRequest = await this.save(req.body);
      }
      if (!savedRequest) {
        this.viewData.errors.serverError = ErrorManifest.generic.serverError;
      }

      return this.viewData;
    }

    private validate(payload): SomeResponseType {
      // validate here
      return Promise.resolve({});
    }

    private async save(payload): SomeResponseType {
      // save data here
      return Promise.resolve(true);
    }

    // additional support method in handler
    private async supportMethod2(): SomeResponseType {

    }
};
