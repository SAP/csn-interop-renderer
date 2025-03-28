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

- in React:

  ```html
  <csn-renderer source="{JSON.stringify(yourCsnInputJson)}" />
  ```

- in Angular:

  ```html
  <csn-renderer [attr.source]="yourCsnInputJson | json" />
  ```

  Additionally don't forget to add `schemas: [CUSTOM_ELEMENTS_SCHEMA]` to ngModule, to allow the usage of custom tag names.

### Component styling

The web-component has an open DOM which means that it can be styled from the outside as needed. Example:

```css
.custom-container {
  h1,
  h2 {
    color: red;
  }
}
```

```html
<csn-renderer class="custom-container" source="{JSON.stringify(yourCsnInputJson)}" />
or
<csn-renderer class="custom-container" [attr.source]="yourCsnInputJson | json" />
```

All defined styles will be applied for the html table used the web-component.
