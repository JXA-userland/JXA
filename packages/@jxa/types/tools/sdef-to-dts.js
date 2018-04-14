const fs = require("fs");
const path = require("path");
const { transform } = require("@jxa/sdef-to-dts");

const camelCase = require("camelcase");
const fixturesDir = path.join(__dirname, "sdefs");
const outputDir = path.join(__dirname, "../src/core");
const promises = fs.readdirSync(fixturesDir).map(async caseName => {
    const fileName = path.basename(caseName, ".sdef");
    const normalizedTestName = camelCase(fileName, { pascalCase: true });
    const actualContent = fs.readFileSync(path.join(fixturesDir, caseName), "utf-8");
    console.log("transform " + normalizedTestName);
    const actual = await transform(normalizedTestName, actualContent);
    fs.writeFileSync(path.join(outputDir, normalizedTestName) + ".d.ts", actual, "utf-8");
});
Promise.all(promises).then(() => {
    console.log("All updated");
});
