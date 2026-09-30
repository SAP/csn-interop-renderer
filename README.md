[![REUSE status](https://api.reuse.software/badge/github.com/SAP/csn-interop-renderer)](https://api.reuse.software/info/github.com/SAP/csn-interop-renderer)

# CSN Interop Document Renderer

Converts documents defined using [CSN Interoperability Specification](https://sap.github.io/csn-interop-specification/) into markdown/HTML human readable documentation pages.

🌎 DOCUMENTATION: <https://sap.github.io/csn-interop-renderer/>

## CSN renderer component

The interactive renderer is published as a reusable component that can be embedded in any React application. Import its stylesheet once, then render the component:

```tsx
import { CsnInteropRenderer } from "@sap/csn-interop-renderer/csn-renderer";
import "@sap/csn-interop-renderer/csn-renderer/styles";

export function CsnDocumentation(): React.ReactNode {
  return <CsnInteropRenderer />;
}
```

`CsnInteropRenderer` accepts an optional `examples` property for callers that want to offer their own sample CSN documents. The Docusaurus website is a demo consumer and supplies its sample documents through that property.

### Theming

The renderer uses `@open-resource-discovery/ui-components` and its public ORD CSS tokens. It does not set a brand palette itself. To apply an application theme, load your CSS after `@sap/csn-interop-renderer/csn-renderer/styles` and override the tokens on the renderer's `.ord-ui` root:

```tsx
export function ThemedCsnDocumentation(): React.ReactNode {
  return (
    <section className="csn-documentation">
      <CsnInteropRenderer />
    </section>
  );
}
```

```css
.csn-documentation .ord-ui {
  --ord-primary: #6750a4;
  --ord-primary-foreground: #ffffff;
  --ord-accent: #f3edf7;
  --ord-border: #79747e;
  --ord-radius: 0.5rem;
}
```

See the `@open-resource-discovery/ui-components` documentation for the complete list of supported ORD tokens.

For renderers that build themes at runtime, pass the same tokens through the `theme` property. They are applied directly to this renderer's `ThemeRoot` and therefore also reach portaled UI components:

```tsx
import type { CsnRendererTheme } from "@sap/csn-interop-renderer/csn-renderer";

const theme: CsnRendererTheme = {
  "--ord-primary": "#6750a4",
  "--ord-primary-foreground": "#ffffff",
  "--ord-radius": "0.5rem",
};

<CsnInteropRenderer theme={theme} />;
```

The renderer defaults to the light ORD theme. Pass `defaultTheme="dark"` or `defaultTheme="system"` when the host controls color mode.

## Support, Feedback, Contributing

This project is open to feature requests/suggestions, bug reports etc. via [GitHub issues](https://github.com/SAP/csn-interop-renderer/issues). Contribution and feedback are encouraged and always welcome. For more information about how to contribute, the project structure, as well as additional contribution information, see our [Contribution Guidelines](CONTRIBUTING.md).

## Security / Disclosure

If you find any bug that may be a security problem, please follow our instructions at [in our security policy](https://github.com/SAP/csn-interop-renderer/security/policy) on how to report it. Please do not create GitHub issues for security-related doubts or problems.

## Code of Conduct

We as members, contributors, and leaders pledge to make participation in our community a harassment-free experience for everyone. By participating in this project, you agree to abide by its [Code of Conduct](https://github.com/SAP/.github/blob/main/CODE_OF_CONDUCT.md) at all times.

## Licensing

Copyright 2025 SAP SE or an SAP affiliate company and csn-interop-renderer contributors. Please see our [LICENSE](LICENSE) for copyright and license information. Detailed information including third-party components and their licensing/copyright information is available [via the REUSE tool](https://api.reuse.software/info/github.com/SAP/csn-interop-renderer).
