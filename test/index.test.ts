import {describe, expect, it} from "vitest";
import {getLogger} from "log4js";
import {getHelloMessage} from "../src/index.js";

const logger = getLogger();
logger.level = "debug";

describe("a test suite", () => {
    it("a test", () => {
        expect(getHelloMessage()).toMatch(/Hello/);
    });
});