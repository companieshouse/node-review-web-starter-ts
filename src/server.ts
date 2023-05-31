import fs from "fs";
import http from "http";
import https from "https";
import logger from "./lib/Logger";
import app from "./app";
import * as config from "./config";

// start the HTTP server
const httpServer = http.createServer(app);
httpServer.listen(config.PORT, () => {
    console.log("HTTP Server started on Port : " + config.PORT);
}).on("error", err => {
    logger.error(`${err.name} - HTTP Server error: ${err.message} - ${err.stack}`);
});

// Start the secure server - possibly not required if app is running behind a loadbalancer, with SSL termination
// if (config.NODE_SSL_ENABLED === "ON") {
//     const privateKey = fs.readFileSync(config.NODE_SSL_PRIVATE_KEY ?? "", "utf8");
//     const certificate = fs.readFileSync(config.NODE_SSL_CERTIFICATE ?? "", "utf8");
//     const credentials = { key: privateKey, cert: certificate };
//
//     const httpsServer = https.createServer(credentials, app);
//
//     httpsServer.listen(config.NODE_PORT_SSL, () => {
//         console.log(`Secure server started at: ${config.NODE_HOSTNAME_SECURE}:${config.NODE_PORT_SSL}`);
//     }).on("error", err => {
//         logger.error(`${err.name} - HTTPS Server error: ${err.message} - ${err.stack}`);
//     });
// }

export default httpServer;
