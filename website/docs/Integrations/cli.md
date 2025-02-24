---
sidebar_position: 3
---

# Using CLI

Suitable for local testing on your machine.

## Prerequisite

1. You have installed Node v22 or higher and npm v10 or higher from: [nodejs](https://nodejs.org/en/download/).

2. Use via [npx](https://docs.npmjs.com/cli/v8/commands/npx):

```sh
npx @sap/csn-interop-renderer -i <inputFilePath> -o <outputFilePath> -r <outputFormat>
```

### CLI options

| Name | Value              | Description                                                   |
| ---- | ------------------ | ------------------------------------------------------------- |
| `-i` | `<inputFilePath>`  | Input file, containing a valid CSN JSON document.             |
| `-o` | `<outputFilePath>` | Output file, where the rendering result should be written to. |
| `-r` | `md`, `html`       | Input file, containing a valid CSN JSON document.             |

### Examples

- Takes a CSN JSON document `inputCSNDocument.json` as input and generates markdown `output.md` file:

  ```bash
  npx @sap/csn-interop-renderer -i ./inputCSNDocument.json -o output.md -r md
  ```

- Takes a CSN JSON document `inputCSNDocument.json` as input and generates html `output.txt` file:

  ```bash
  npx @sap/csn-interop-renderer -i ./inputCSNDocument.json -o output.txt -r html
  ```

### Upgrade to latest CLI version

Get the latest CLI version when you had it previously installed on your machine.

```bash
npm upgrade -g @sap/csn-interop-renderer
```
