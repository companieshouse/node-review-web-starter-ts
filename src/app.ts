import * as express from "express";
import * as nunjucks from "nunjucks";
import * as cookieParser from "cookie-parser";
import * as path from "path";
import * as router from "./router";
import * as logger from "./lib/Logger";

const app = express();

const viewPath = path.join(__dirname, "views");
app.set('views', viewPath);

const nunjucksLoaderOpts = {
  "watch": process.env.NUNJUCKS_LOADER_WATCH !== 'false',
  "noCache": process.env.NUNJUCKS_LOADER_NO_CACHE !== 'true'
};

const njk = new nunjucks.Environment(
  new nunjucks.FileSystemLoader(app.get('views'),
    nunjucksLoaderOpts)
);

njk.express(app);
app.set('view engine', 'njk');

// serve static files
app.use(express.static(__dirname + '/../assets/public'));
// app.use('/assets', express.static('./../node_modules/govuk-frontend/govuk/assets'))

// If app is behind a front-facing proxy, and to use the X-Forwarded-* headers to determine the connection and the IP address of the client
// app.enable("trust proxy");

// parse body into req.body
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// apply our default router to /
// app.use("/", router);

// Channel all requests through the router
router(app);

// unhandled errors
app.use((err, req, res, next) => {
  let status = err.status || 500;
  logger.error(`${status} - appError: ${err.stack}`);
});

// unhandled exceptions
process.on('uncaughtException', err => {
  let status = err.status || 500;
  logger.error(`${status} - uncaughtException: ${err.stack}`);
  process.exit(1);
});

// unhandled promise rejections
process.on('unhandledRejection', err => {
  let status = err.status || 500;
  logger.error(`${status} - unhandledRejection: ${err.stack}`);
  process.exit(1);
});

export default app;
