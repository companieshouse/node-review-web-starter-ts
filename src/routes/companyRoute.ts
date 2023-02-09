import * as express from "express";
import { CreateHandler } from './handlers/company/create';
import { DetailsHandler } from './handlers/company/details';

const CompanyRoute = (app: express.Application) => {

  app.get("/create", async (req: express.Request, res: express.Response) => {
		const viewData = await CreateHandler.execute(req, res);
		res.render('company/create', viewData);
	});

  app.post("/create", async (req: express.Request, res: express.Response) => {
		const viewData = await CreateHandler.execute(req, res, 'POST');
		if (!Object.keys(viewData.errors).length) {
			res.render('company/create', viewData);
		} else {
			res.redirect(302, '/');
		}
	});

  app.get("/details", async (req: express.Request, res: express.Response) => {
		const viewData = await DetailsHandler.execute(req, res);
		res.render('company/details', viewData);
	});
};

export default CompanyRoute;
