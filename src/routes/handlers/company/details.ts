import * as express from "express";
import { GenericHandler } from "./../generic";
import { CompanyFormsValidator } from "./../../../lib/validation/formValidators/company";

export class DetailsHandler extends GenericHandler {

    constructor () {
        super();
        this.viewData = {
            title: 'Details handler for company route',
            sampleKey:"sample value",
            errors: {}
        };
    }

    async execute(req: express.Request, response: express.Response): Promise<ResponseType> {
      // ...process request here and return data for the view

      return this.viewData;
    }

    // additional support method in handler
    private async supportMethod1(): SomeResponseType {

    }

    // additional support method in handler
    private async supportMethod2(): SomeResponseType {

    }
};
