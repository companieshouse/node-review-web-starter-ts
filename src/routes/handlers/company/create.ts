import * as express from "express";
import { GenericHandler } from "./../generic";

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

      const validationErrors = await this.validate(req.body);

      if(!Object.keys(validationErrors).length) {
          this.viewData.errors = validationErrors.stack;
      } else {
        savedRequest = await this.save(req.body);
      }
      if (!savedRequest) {
        this.viewData.errors.serverError = this.errorManifest.generic.serverError;
      }

      return this.viewData;
    }

    private validate(payload): SomeResponseType {
      // validate here
      return Promise.resolve({});
    }

    private save(payload): SomeResponseType {
      // save data here
      return Promise.resolve(true);
    }

    // additional support method in handler
    private async supportMethod2(): SomeResponseType {

    }
};
