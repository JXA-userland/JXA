import * as repl from "repl";
import { runJXACode } from "@jxa/run";
import * as util from "util";

export class JXARepl {
    private replServer!: repl.REPLServer;

    start() {
        this.replServer = repl.start({ prompt: '> ', eval: myEval, writer: myWriter });
        const cmdStack: string[] = [];
        // ".clear" command
        this.replServer.defineCommand("clear", () => {
            cmdStack.length = 0;
            (this.replServer as any).clearBufferedCommand()
        });
        function myEval(cmd: string, _context: any, _filename: string, callback: (error: Error | null, cmd?: string) => void) {
            const existCode = cmdStack.join("\n");
            let code = existCode + "\n" + cmd;
            runJXACode(code).then(output => {
                cmdStack.push(cmd);
                callback(null, util.inspect(output));
            }).catch(error => {
                callback(error);
            });
        }

        function myWriter(output: string) {
            return output;
        }
    }

    stop() {
        this.replServer.close();
    }
}
