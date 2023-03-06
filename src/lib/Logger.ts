import { createLogger } from "@companieshouse/structured-logging-node";
import ApplicationLogger from "@companieshouse/structured-logging-node/lib/ApplicationLogger";

const logger: ApplicationLogger = createLogger(process.env.NODE_APP_NAME);

// tslint:disable-next-line:no-console
console.log(`env.LOG_LEVEL set to ${process.env.NODE_LOG_LEVEL}`);

export default logger;
