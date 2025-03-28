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

:::warning
The `html` result is not sanitized and it's recommended to use a sanitize library.

Depending on the used sanitize library sometimes headline ids are removed and links between the CSN entities may not work anymore.
Please consider configuring the sanitize library to allow `id` as valid attribute for headline tags.

Example of how a sanitizer library like [sanitize-html](https://github.com/apostrophecms/sanitize-html) could be configured:

```js
sanitizeHtml(generatedHtmlResult, {
  allowedAttributes: { h1: ["id"], h2: ["id"], h3: ["id"], h4: ["id"], strong: ["id"], a: ["href"] },
});
```

:::

:::info
The algorithm that generates the `id` for the `html` output result is the [github-slugger](https://github.com/Flet/github-slugger) which matches how GitHub markdown headline id generation works.
:::
