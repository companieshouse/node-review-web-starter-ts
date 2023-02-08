import * as express from "express";
import { GenericHandler } from "./../generic";

export class DetailsHandler extends GenericHandler {

    constructor () {
      title: 'View handler for company route',
      this_data: {
        sample_key:"sample value",
        errors: {},
      }
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
