import {afterEach, beforeAll, beforeEach, describe, expect, it} from "vitest";
import {getLogger} from "log4js";
import {getHelloMessage} from "../src"

const logger = getLogger();
logger.level = "debug";

describe("a test suite", () => {
    it("a test", async () => {
        expect(getHelloMessage()).toMatch(/Hello/)
    });
});