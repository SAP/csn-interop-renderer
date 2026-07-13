import fs from "fs";

function loadJson(path) {
  return JSON.parse(fs.readFileSync(new URL(path, import.meta.url)));
}

const tsconfig = loadJson("./tsconfig.json");
const { compilerOptions } = tsconfig;

export default {
  preset: "ts-jest/presets/default-esm",
  coverageDirectory: "reports/jest-coverage",
  moduleFileExtensions: ["js", "json", "ts", "d.ts"],
  reporters: ["default"],
  modulePaths: [compilerOptions.outDir],
  moduleNameMapper: {
    "^(\\.{1,2}/.*)\\.js$": "$1",
  },
  watchPlugins: ["jest-watch-typeahead/filename", "jest-watch-typeahead/testname"],
  testTimeout: 30000,
};
