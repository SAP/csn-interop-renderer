import { themes as prismThemes } from "prism-react-renderer";
import type { Config, Plugin } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const isPrPreview = Boolean(process.env.PR_PREVIEW_NUMBER);
const baseUrl = process.env.BASE_URL || "/csn-interop-renderer/";

const config: Config = {
  title: "CSN Interop Document Renderer",
  tagline: "A tool to generate markdown documentation from CSN JSON documents",
  url: "https://sap.github.io",
  baseUrl,
  trailingSlash: false,
  onBrokenLinks: "throw",
  onBrokenAnchors: "warn",
  onDuplicateRoutes: "throw",
  onBrokenMarkdownLinks: "throw",
  staticDirectories: ["static"],
  favicon: "img/favicon.ico",
  customFields: {
    repositoryUrl: "https://github.com/SAP/csn-interop-renderer",
  },
  organizationName: "SAP", // Usually your GitHub org/user name.
  projectName: "csn-interop-renderer", // Usually your repo name.
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarCollapsible: true,
          routeBasePath: "/",
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/SAP/csn-interop-renderer/tree/main/",
        },
        theme: {
          customCss: require.resolve("./static/css/custom.css"),
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: "",
      logo: {
        alt: "SAP Site Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          label: "CSN Interop Document Renderer",
          to: "/",
        },
        {
          label: "Try Out",
          to: "/try",
        },
        {
          href: "https://github.com/SAP/csn-interop-renderer",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    ...(isPrPreview
      ? {
          announcementBar: {
            content: `<b>This is a preview version of the website for <a href="https://github.com/SAP/csn-interop-renderer/pull/${process.env.PR_PREVIEW_NUMBER}" target="_blank" rel="noopener noreferrer">PR #${process.env.PR_PREVIEW_NUMBER}</a></b>`,
            backgroundColor: "#e65050ff",
            textColor: "#fff",
            isCloseable: false,
          },
        }
      : {}),
    footer: {
      style: "dark",
      copyright: `Copyright © ${new Date().getFullYear()} SAP SE. Made available under Apache License 2.0.\n\n This site is hosted by GitHub Pages. Please see the GitHub Privacy Statement for any information how GitHub processes your personal data.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ["bash", "json", "json5"],
    },
  } satisfies Preset.ThemeConfig,

  plugins: [
    function myDevtoolPlugin(): Plugin {
      // this enables debugging with breakpoints in the browser
      return {
        name: "my-devtool-plugin",
        configureWebpack(): unknown {
          return {
            devtool: "eval-source-map",
          };
        },
      };
    },
  ],
};

export default config;
