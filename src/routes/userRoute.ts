import * as express from "express";
import { ProfileHandler } from "./handlers/user/profile";
import { SettingsHandler } from "./handlers/user/settings";

const UserRoute = (app: express.Application) => {
    app.get("/profile", async (req: express.Request, res: express.Response) => {
        const viewData = await ProfileHandler.execute(req, res);
        res.render("user/profile", viewData);
    });

    app.get("/settings", async (req: express.Request, res: express.Response) => {
        const viewData = await SettingsHandler.execute(req, res);
        res.render("user/settings", viewData);
    });

    app.post("/settings", async (req: express.Request, res: express.Response) => {
        const viewData = await SettingsHandler.execute(req, res, "post");
        res.render("user/settings", viewData);
    });
};

export default UserRoute;
