import { readFileSync } from "node:fs";
import spawnAsync from "@expo/spawn-async";
import { fileSync } from "tmp";

describe("CLI", () => {
  const cliBin = "node";
  const nodeArgs = ["--experimental-vm-modules", "--no-warnings=ExperimentalWarning"];
  const cliScriptPath = "./cli/cli.js";
  const outputFormats = ["md", "html"] as const;
  type OutputFormat = (typeof outputFormats)[number];

  const runCli = async (arguments_: string[]): Promise<ReturnType<typeof spawnAsync>> => {
    return spawnAsync(cliBin, [...nodeArgs, ...arguments_]);
  };

  describe("valid input", () => {
    test.each(outputFormats)("%s output file", async (outputFormat: OutputFormat): Promise<void> => {
      const inputFile = "./examples/Airline.json";
      const targetFile = fileSync({ mode: 0o644, prefix: "test01", postfix: ".md" });
      const cliArguments = [cliScriptPath, "-i", inputFile, "-o", targetFile.name, "-r", outputFormat];

      try {
        const { stdout, stderr } = await runCli(cliArguments);
        expect(stdout).toContain("Renderer results have been successfully saved");
        expect(stderr).toEqual("");

        const fileContent = readFileSync(targetFile.name, "utf8");

        expect(fileContent).toMatchSnapshot();
      } finally {
        targetFile.removeCallback();
      }
    });
  });

  describe("invalid arguments", () => {
    test("rejects a missing input file", async () => {
      const targetFile = fileSync({ mode: 0o644, prefix: "test02", postfix: ".md" });
      const cliArguments = [cliScriptPath, "-o", targetFile.name, "-r", "md"];

      try {
        await expect(runCli(cliArguments)).rejects.toMatchObject({
          stderr: expect.stringContaining("required option '-i <inputFilePath>' not specified"),
        });
      } finally {
        targetFile.removeCallback();
      }
    });
    test("rejects a missing output file", async () => {
      const inputFile = "./examples/CSNInterop.json";
      const cliArguments = [cliScriptPath, "-i", inputFile, "-r", "md"];

      await expect(runCli(cliArguments)).rejects.toMatchObject({
        stderr: expect.stringContaining("required option '-o <outputFilePath>' not specified"),
      });
    });
    test("rejects a missing output format", async () => {
      const inputFile = "./examples/CSNInterop.json";
      const targetFile = fileSync({ mode: 0o644, prefix: "test04", postfix: ".md" });
      const cliArguments = [cliScriptPath, "-i", inputFile, "-o", targetFile.name];

      try {
        await expect(runCli(cliArguments)).rejects.toMatchObject({
          stderr: expect.stringContaining("required option '-r <outputFormat>' not specified"),
        });
      } finally {
        targetFile.removeCallback();
      }
    });
  });
});
