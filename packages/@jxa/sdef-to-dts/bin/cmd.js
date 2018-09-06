#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const child_process = require("child_process");
const transform = require("../lib/sdef-to-dts").transform;

function usage() {
  console.log();
  console.log("Usage: npx @jxa/sdef-to-dts inFile [out]");
  console.log();
  console.log("  Converts Script Definitions into TypeScript Type Definitions")
  console.log();
  console.log("  inFile - path to an Application.app to read");
  console.log("  out - path to an Application.d.ts or a directory to write to");
  console.log();
}

if (process.argv.length !== 3 && process.argv.length !== 4) {
  usage();
  process.exit(1);
}

const [node, cmd, inFile, out] = process.argv;

run(inFile, out);

function run(inPath, out) {
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
    return child_process.execSync("sdef " + path, {stdio: ["ignore"]}).toString();
  } catch (e) {
    console.error(e.toString());
    usage();
    process.exit(2);
  }
}

function writeDTS(appName, outPath, sdef) {
  return transform(appName, sdef).then(content => {
    fs.writeFileSync(outPath, content, "utf-8");
  }).catch(err => {
    console.error(err.toString());
    usage();
    process.exit(3);
  });
}

