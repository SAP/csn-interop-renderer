#!/usr/bin/env node

import * as cliRunner from "./cliRunner.js";

try {
  const currentNodeVersion = process.versions.node;
  const semver = currentNodeVersion.split(".");
  const major = parseInt(semver[0]);

  if (major < 22) {
    process.stdout.write(
      "You are running Node " +
        currentNodeVersion +
        ".\n" +
        "csn-interop-renderer requires Node 22 or higher. \n" +
        "Please update your version of Node.",
    );
    process.exit(1);
  }

  cliRunner.init(process.argv);
} catch (err) {
  process.stdout.write(String(err));
  process.exit(1);
}
