import { JXARepl } from "../src/repl";

describe("@jxa/repl", () => {
    it("start and stop", () => {
        const repl = new JXARepl();
        repl.start();
        repl.stop();
    });
});
