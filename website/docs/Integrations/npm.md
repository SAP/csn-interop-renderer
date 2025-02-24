---
sidebar_position: 1
---

# NPM package

Suitable for JavaScript/TypeScript based projects.

## Prerequisite

1. Project should be using Node v22 or higher.

1. Install the renderer package as a dependency:

   ```bash
   npm install @sap/csn-interop-renderer --save
   ```

## Usage

Import the package and use it in your project. Where `yourCsnInputJson` is a valid CSN JSON object.

```js
import { generateMarkdown, generateHtml } from "@sap/csn-interop-renderer";

// use the 'generatedMarkdownResult' for further processing
const generatedMarkdownResult = generateMarkdown(yourCsnInputJson);

// use the 'generatedHtmlResult' for further processing
const generatedHtmlResult = generateHtml(yourCsnInputJson);
```
