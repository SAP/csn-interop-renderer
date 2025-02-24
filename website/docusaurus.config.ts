import { themes as prismThemes } from "prism-react-renderer";
import type { Config, Plugin } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "CSN Interoperability Renderer",
  tagline: "A tool to generate markdown documentation from CSN JSON documents",
  url: "https://sap.github.io",
  baseUrl: "/csn-interop-renderer/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "throw",
  onBrokenAnchors: "warn",
  favicon: "img/favicon.ico",
  customFields: {
    repositoryUrl: "https://github.com/SAP/csn-interop-renderer",
  },

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "CPA", // Usually your GitHub org/user name.
  projectName: "csn-interop-renderer", // Usually your repo name.

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/SAP/csn-interop-renderer/docs",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: "CSN Interop Renderer",
      logo: {
        alt: "SAP Site Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Documentation",
        },
        {
          to: "/try",
          position: "left",
          label: "Try Out",
        },
        {
          href: "https://github.com/SAP/csn-interop-renderer",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      copyright: `Copyright © ${new Date().getFullYear()} SAP SE`,
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
