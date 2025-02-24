import { readFileSync } from "node:fs";
import spawnAsync from "@expo/spawn-async";
import { fileSync } from "tmp";

describe("CLI End-to-End Tests", () => {
  const cliBin = "node";
  const nodeArgs = ["--experimental-vm-modules", "--no-warnings=ExperimentalWarning"];
  const cliScriptPath = "./cli/cli.js";
  const cases = ["md", "html"];
  describe("runs with CSN JSON input file and generate successfully", () => {
    test.each(cases)("%p output file", async (outputFormat) => {
      const inputFile = "./examples/Airline.json";
      const targetFile = fileSync({ mode: 0o644, prefix: "test01", postfix: ".md" });
      const cliArguments = [cliScriptPath, "-i", inputFile, "-o", targetFile.name, "-r", outputFormat];

      const resultPromise = spawnAsync(cliBin, [...nodeArgs, ...cliArguments]);

      try {
        const { stdout, stderr } = await resultPromise;
        // Check that stdout is like expected and not suspiciously long (accidental console.logs)
        expect(stdout).toContain("Renderer results have been successfully saved");
        expect(stdout.length).toBeLessThan(256);

        // Check that stderr is empty
        expect(stderr).toEqual("");

        // Read output file and see if it's a valid renderer file with the right structure
        const fileContent = readFileSync(targetFile.name).toString();

        expect(fileContent).toMatchSnapshot();
      } catch (e) {
        expect(e).toEqual("This should not happen, above try block should not throw!");
      } finally {
        targetFile.removeCallback();
      }
    });
  });

  describe("runs and fails", () => {
    test("when no input file provided", async () => {
      const targetFile = fileSync({ mode: 0o644, prefix: "test02", postfix: ".md" });
      const cliArguments = [cliScriptPath, "-o", targetFile.name, "-r", "md"];

      const resultPromise = spawnAsync(cliBin, [...nodeArgs, ...cliArguments]);

      try {
        const { stdout } = await resultPromise;
        expect(stdout).toContain("This should not happen, above try block should throw!");
      } catch (e) {
        const castedError = e as NodeJS.Process;
        expect(castedError).toBeDefined();
        expect(castedError.stderr).toContain("required option '-i <inputFilePath>' not specified");
      } finally {
        targetFile.removeCallback();
      }
    });
    test("when no output file provided", async () => {
      const inputFile = "./examples/CSNInterop.json";
      const targetFile = fileSync({ mode: 0o644, prefix: "test03", postfix: ".md" });
      const cliArguments = [cliScriptPath, "-i", inputFile, "-r", "md"];

      const resultPromise = spawnAsync(cliBin, [...nodeArgs, ...cliArguments]);

      try {
        const { stdout } = await resultPromise;
        expect(stdout).toContain("This should not happen, above try block should throw!");
      } catch (e) {
        const castedError = e as NodeJS.Process;
        expect(castedError).toBeDefined();
        expect(castedError.stderr).toContain("required option '-o <outputFilePath>' not specified");
      } finally {
        targetFile.removeCallback();
      }
    });
    test("when no renderer output format provided", async () => {
      const inputFile = "./examples/CSNInterop.json";
      const targetFile = fileSync({ mode: 0o644, prefix: "test04", postfix: ".md" });
      const cliArguments = [cliScriptPath, "-i", inputFile, "-o", targetFile.name];

      const resultPromise = spawnAsync(cliBin, [...nodeArgs, ...cliArguments]);

      try {
        const { stdout } = await resultPromise;
        expect(stdout).toContain("This should not happen, above try block should throw!");
      } catch (e) {
        const castedError = e as NodeJS.Process;
        expect(castedError).toBeDefined();
        expect(castedError.stderr).toContain("required option '-r <outputFormat>' not specified");
      } finally {
        targetFile.removeCallback();
      }
    });
  });
});
