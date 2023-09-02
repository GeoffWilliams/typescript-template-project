import * as dotenv from 'dotenv';
dotenv.config();
import { getLogger } from "log4js";
const logger = getLogger();
const logLevel = (process.env.APP_LOG_LEVEL || "info");
logger.level = logLevel;
export const getHelloMessage = () => {
    logger.debug("a debug message");
    logger.info("a info message");
    logger.warn("a warn message");
    logger.error("a error message");
    return "Hello, world";
};
