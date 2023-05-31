import { Request, Response } from "express";
import { GenericHandler } from "./../generic";
import logger from "../../../lib/Logger";

export class HomeHandler extends GenericHandler {

    constructor () {
        super();
        this.viewData.title = "Home handler for index router";
        this.viewData.sampleKey = "sample value for home page screen";
    }

    execute (req: Request, response: Response): Promise<Object> {
        logger.info(`GET request to serve home page`);
        // ...process request here and return data for the view
        return Promise.resolve(this.viewData);
    }
};
