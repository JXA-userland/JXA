import * as fs from "fs";
import * as assert from "assert";
import * as path from "path";
import { transform } from "../src/sdef-to-dts";

const camelCase = require('camelcase');
const fixturesDir = path.join(__dirname, "fixtures");
describe("Snapshot testing", () => {
    fs.readdirSync(fixturesDir)
        .map(caseName => {
            const normalizedTestName = camelCase(caseName, { pascalCase: true });
            it(`Test ${normalizedTestName}`, async function () {
                const fixtureDir = path.join(fixturesDir, caseName);
                const actualFilePath = path.join(fixtureDir, "input.sdef");
                const actualContent = fs.readFileSync(actualFilePath, "utf-8");
                const actual = await transform(normalizedTestName, actualContent);
                const expectedFilePath = path.join(fixtureDir, "output.ts");
                if (process.env.UPDATE_SNAPSHOT) {
                    fs.writeFileSync(expectedFilePath, actual, "utf-8");
                    const parseXml = require('@rgrove/parse-xml');
                    fs.writeFileSync(path.join(fixtureDir, "output.json"), JSON.stringify(parseXml(actualContent), null, 4), "utf-8");
                    this.skip();
                    return;
                }
                const expected = fs.readFileSync(expectedFilePath, "utf-8");
                assert.deepEqual(
                    actual,
                    expected,
                    `
${fixtureDir}
`
                );
            });
        });
});
