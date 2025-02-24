---
sidebar_position: 2
---

# Web Component

Suitable for Frontend e.g. React/Angular based projects.

## Prerequisite

Install the renderer package as a dependency:

```bash
npm install @sap/csn-interop-renderer --save
```

## Usage

Import the web component and use it in your project. Where `yourCsnInputJson` is a valid CSN JSON object.

```html
<csn-renderer source="{JSON.stringify(yourCsnInputJson)}" />
```

_Note_: web components can only take string as input props, no JSON objects, the CSN JSON object must be stringified.

### Component styling

The web-component has an open DOM which means that it can be styled from the outside as needed. Example:

styles.css file

```css
th,
td {
  border: 1px solid;
}
```

app.ts file

```js
import styles from "./styles.css";
....
<csn-renderer source="{JSON.stringify(yourCsnInputJson)}" />
```

Defined styles will be applied for the table used the web-component.
