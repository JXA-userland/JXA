import { example } from "../src/example";
import * as assert from "assert";

describe("example", () => {
    it("should work example", async () => {
        const exampleOutput = await example();
        assert.ok(/User: .*, Safari: .*/.test(exampleOutput));
    })
});
