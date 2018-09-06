#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const child_process = require("child_process");
const transform = require("../lib/sdef-to-dts").transform;
const meow = require("meow");
const execa = require("execa");

const cli = meow(`
        Usage
          $ npx @jxa/sdef-to-dts <input> --output <output>

          <input> - path to an Application.app to read

        Options
          --output, -o - path to an Application.d.ts or a directory to write to
          --version    - show the version
          --help       - show this help page

        Examples
          $ npx @jxa/sdef-to-dts /Applications/Safari.app --output ./safari.d.ts
`, {
	flags: {
		output: {
			type: 'string',
			alias: 'o'
		}
	},
  autoVersion: true,
  autoHelp: true
});

run(cli.input[0], cli.flags.output);

function run(inPath, out) {
  if (!inPath) {
    console.error("Error: Missing output parameter.");
    cli.showHelp();
    process.exit(1);
  }

  const appName = path.basename(inPath, ".app").replace(/\s/g, "");
  const outPath = outFile(appName, out);

  const sdef = readSdef(inPath);
  writeDTS(appName, outPath, sdef)
    .then(() => {
      console.log("Converted: " + inPath + " to " + outPath);
    });
}

function outFile(appName, out) {
  if (out) {
    if (fs.existsSync(out) && fs.lstatSync(out).isDirectory()) {
      return path.resolve(out, appName) + ".d.ts";
    } else {
      return path.resolve(out).replace(/.d.ts$/, "") + ".d.ts";
    }
  } else {
    return path.resolve(appName) + ".d.ts";
  }
}

function readSdef(path) {
  try {
    return execa.sync("sdef", [path], {stdio: ["ignore"]}).stdout;
  } catch (e) {
    console.error(e.toString());
    cli.showHelp();
    process.exit(2);
  }
}

function writeDTS(appName, outPath, sdef) {
  return transform(appName, sdef).then(content => {
    fs.writeFileSync(outPath, content, "utf-8");
  }).catch(err => {
    console.error(err.toString());
    cli.showHelp();
    process.exit(3);
  });
}

