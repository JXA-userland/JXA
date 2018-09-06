# @jxa/sdef-to-dts

Convert Scripting definition files (`.sdefs`) to TypeScript(d.ts)

## Install

Install with [npm](https://www.npmjs.com/):

    npm install @jxa/sdef-to-dts

## Usage as library

Convert `./input/*.sdef` file and output it as `d.ts` to `./output` directory.

```ts
const fs = require("fs");
const path = require("path");
const { transform } = require("@jxa/sdef-to-dts");
const sdefDir = path.join(__dirname, "./input");
const outputDir = path.join(__dirname, "./output");
const promises = fs.readdirSync(sdefDir).map(async caseName => {
    const fileName = path.basename(caseName, ".sdef");
    const normalizedTestName = fileName.replace(/\s/g, "");
    const actualContent = fs.readFileSync(path.join(fixturesDir, caseName), "utf-8");
    console.log("transform " + normalizedTestName);
    const actual = await transform(normalizedTestName, actualContent);
    fs.writeFileSync(path.join(outputDir, normalizedTestName) + ".d.ts", actual, "utf-8");
});
Promise.all(promises).then(() => {
    console.log("All write");
});
```

## Usage as command

Convert application bundles (e.g. `/Applications/Safari.app`) and output as `d.ts`.

```
  Scripting definition files (sdefs) to TypeScript (d.ts)

  Usage
    $ npx @jxa/sdef-to-dts <input> --output <output>

    <input>       path to an Application.app to read

  Options
    --output, -o  path to an Application.d.ts or a directory to write to
    --version     show the version
    --help        show this help page

  Examples
    $ npx @jxa/sdef-to-dts /Applications/Safari.app --output ./safari.d.ts
```

## Running tests

    yarn test

## Changelog

See [Releases page](https://github.com/JXA-userland/JXA/releases).

## Contributing

Pull requests and stars are always welcome.

For bugs and feature requests, [please create an issue](https://github.com/JXA-userland/JXA/issues).

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## Author

- [github/azu](https://github.com/azu)
- [twitter/azu_re](https://twitter.com/azu_re)

## License

MIT © azu
