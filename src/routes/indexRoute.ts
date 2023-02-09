import * as express from "express";
import { HomeHandler } from './handlers/index/home';

const IndexRoute = (app: express.Application) => {

  app.post("/", async (req: express.Request, res: express.Response) => {
		const viewData = await HomeHandler.execute(req, res);
		res.render('index/home', viewData);
	});
};

export default IndexRoute;
