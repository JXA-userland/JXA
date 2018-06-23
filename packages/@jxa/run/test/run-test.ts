import "@jxa/global-type";
import { run } from "../src/run";
import * as assert from "assert";

describe("@jxa/run", () => {
    it("script execution", async () => {
        const result = await run(name => {
            return "Hello there, " + name + "!"
        }, "nodejs");
        assert.strictEqual(result, "Hello there, nodejs!");
    });
    it("system access", async () => {
        const result = await run(
            () =>
                Application("System Events")
                    .currentUser()
                    .name(),
        );
        assert.strictEqual(result, process.env.USER);
    });
    it("multiline", async () => {
        const result = await run(function () {
            var foo = "bar";
            var baz = "foo";
            return baz + foo;
        });
        assert.strictEqual(result, "foobar");
    });

    it("correct return value", async () => {
        const result = await run(() => 123.47);
        assert.strictEqual(result, 123.47);
    });

    it("undefined return", async () => {
        const result = await run(() => {
        });
        assert.strictEqual(result, undefined);
    });
});
