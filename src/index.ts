import * as dotenv from 'dotenv';
dotenv.config();

import { Level, getLogger } from "log4js";

const logger = getLogger();
const logLevel: Level = (process.env.APP_LOG_LEVEL  || "info") as unknown as Level;
logger.level = logLevel;

export const getHelloMessage = (): string => {
    logger.debug("a debug message");
    logger.info("a info message");
    logger.warn("a warn message");
    logger.error("a error message");
    return "Hello, world";
};