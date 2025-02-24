#!/usr/bin/env node
import { Command, Option } from "commander";
import * as packageJson from "../package.json" with { type: "json" };
import { writeFileSync, readFileSync, existsSync, mkdirSync } from "node:fs";
import { dirname } from "node:path";
import { parser } from "../dist/src/parser.js";

/**
 * Executes the CLI with additional command line arguments (argv)
 */
function init(argv) {
  const inputFilePath = new Option(
    "-i <inputFilePath>",
    "input file, containing a valid CSN JSON document",
  ).makeOptionMandatory();
  const outputFilePath = new Option(
    "-o <outputFilePath>",
    "output file, where the rendering result should be written to",
  ).makeOptionMandatory();
  const outputFormat = new Option("-r <outputFormat>", "format for the renderer result")
    .choices(["md", "html"])
    .makeOptionMandatory();

  const program = new Command();
  program
    .version(packageJson.default.version)
    .name("csn-interop-renderer")
    .usage("-i <inputFilePath> -o <outputFilePath> -r <outputFormat>")
    .description(
      "Takes as input a CSN JSON file and generates the renderer result output file based on the selected output format.",
    )
    .addOption(inputFilePath)
    .addOption(outputFilePath)
    .addOption(outputFormat)
    .action(run);

  program.parse(argv);
}

async function run(argv) {
  let inputData = "";

  try {
    inputData = readFileSync(argv.i, "utf-8");
  } catch (error) {
    process.stderr.write(`[error]: ${error.message}\n\n`);
    process.exit(1);
  }

  const trimmed = JSON.parse(inputData.trim().replace(/[\n\r\t]/gm, ""));
  let result = "";

  try {
    const resultAsHtml = argv.r === "html";
    result = await parser(trimmed, resultAsHtml);
  } catch (error) {
    process.stderr.write(`${error.message}\n\n`); // no [error]: needed, prefix is contained  in the original code
    process.exit(1);
  }

  try {
    // Create target directory if it doesn't exist yet
    const targetDir = dirname(argv.o);
    if (!existsSync(targetDir)) {
      mkdirSync(targetDir, { recursive: true });
    }
    writeFileSync(argv.o, result, "utf-8");
    process.stdout.write(`[info]: Renderer results have been successfully saved in ${argv.o}\n\n`);
    process.exit(0);
  } catch (error) {
    process.stderr.write(`[error]: Cannot write results to the specified file: ${error}\n\n`);
    process.exit(1);
  }
}

export { init };
