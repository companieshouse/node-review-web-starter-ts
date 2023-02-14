import * as express from "express";
import * as logger from "./../../../lib/Logger";
import { GenericHandler } from "./../generic";
import { CompanyFormsValidator } from "./../../../lib/validation/formValidators/company";

export class CreateHandler extends GenericHandler {

    validator: someType;
    constructor () {
        super();
        this.validator = new CompanyFormsValidator();
        this.viewData = {
            title: 'Create handler for company route',
            sampleKey:"sample value",
            errors: {},
        };
    }

    // process request here and return data for the view
    public async execute(req: express.Request, response: express.Response, method: string = 'GET' ): Promise<SomeResponseType> {
        logger.info(`${method} request for to create a company `);
        try {
            if (method !== 'POST') {
                return this.viewData;
            }

            const validationErrors = await this.validator.validateCreateCompany(req.body);

            if (!Object.keys(validationErrors.stack).length) {
                this.viewData.errors = validationErrors.stack;
            } else {
                await this.save(req.body);
            }
            return this.viewData;
        } catch (err) {
            logger.error(`error creating a company: ${err}`);
            this.viewData.errors.serverError = this.errorManifest.generic.serverError;
            return this.viewData;
        }
    }

    // call service(s) to save data here
    private save(payload: any): SomeResponseType {
        return Promise.resolve(true);
    }

    // additional support method in handler
    private async supportMethod2(): SomeResponseType {

    }
};
