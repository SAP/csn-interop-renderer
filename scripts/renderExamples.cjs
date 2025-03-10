const glob = require("glob");
const { exec } = require("child_process");
const path = require("path");

glob("examples/*.json", (err, files) => {
  if (err) {
    process.stdout.write(`[error]: Error while finding files: ${err} \n`);
    return;
  }

  files.forEach((file) => {
    const outputFile = path.join("website", "docs", "Renderer examples", path.basename(file, ".json") + ".md");
    const command = `node ./cli/cli.js -i "${file}" -o "${outputFile}" -r md`;

    exec(command, (error, info) => {
      if (error) {
        process.stdout.write(`[error]: Error processing file ${file} \n ${error.message}`);
        return;
      }
      if (info) {
        process.stdout.write(`${info}`);
      }
    });
  });
});
