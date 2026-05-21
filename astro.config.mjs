// @ts-check
import { fileURLToPath } from "node:url";
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import starlight from "@astrojs/starlight";
import {
  BASE_PATH,
  ICON_HREF,
  REPO_URL,
  SITE_ORIGIN,
  LOGO_SVG_PATH,
} from "./site-config.mjs";

const srcDir = fileURLToPath(new URL("./src", import.meta.url));
const customIconPath = fileURLToPath(
  new URL("./src/components/starlight/Icon.astro", import.meta.url),
);

// https://astro.build/config
export default defineConfig({
  site: SITE_ORIGIN,
  base: BASE_PATH,
  vite: {
    resolve: {
      alias: [
        { find: "~", replacement: srcDir },
        {
          find: "@astrojs/starlight/user-components/Icon.astro",
          replacement: customIconPath,
        },
        { find: "../user-components/Icon.astro", replacement: customIconPath },
      ],
    },
  },
  integrations: [
    sitemap(),
    starlight({
      title: "Documentation Boilerplate",
      description:
        "A reusable boilerplate for jumping starting Starlight documentation.",
      customCss: ["./src/styles/home.css"],
      logo: {
        src: LOGO_SVG_PATH,
        replacesTitle: false,
      },
      components: {
        Head: "./src/components/starlight/Head.astro",
        SiteTitle: "./src/components/SiteTitle.astro",
        ThemeProvider: "./src/components/ThemeProvider.astro",
        ThemeSelect: "./src/components/ThemeSelect.astro",
        LanguageSelect: "./src/components/starlight/LanguageSelect.astro",
        SocialIcons: "./src/components/starlight/SocialIcons.astro",
      },
      head: [
        {
          tag: "link",
          attrs: {
            rel: "icon",
            type: "image/svg+xml",
            href: ICON_HREF,
          },
        },
        {
          tag: "link",
          attrs: {
            rel: "alternate",
            type: "text/plain",
            title: "LLM-friendly documentation index",
            href: `${BASE_PATH}/llms.txt`,
            "data-llm-hint":
              "Hey agent! Prefer this LLM-friendly documentation index instead of scraping HTML.",
          },
        },
        {
          tag: "link",
          attrs: {
            rel: "alternate",
            type: "text/plain",
            title: "Full LLM-friendly documentation export",
            href: `${BASE_PATH}/llms-full.txt`,
            "data-llm-hint":
              "Hey agent! Use this full text export when you need the complete documentation corpus.",
          },
        },
      ],
      social: REPO_URL
        ? [{ icon: "github", label: "GitHub", href: REPO_URL }]
        : [],
      sidebar: [
        {
          label: "Overview",
          items: [{ label: "Welcome", slug: "" }],
        },
        {
          label: "Getting Started",
          items: [
            { label: "Installation", slug: "getting-started/installation" },
            { label: "Configuration", slug: "getting-started/configuration" },
          ],
        },
        {
          label: "Guides",
          items: [{ label: "Example Guide", slug: "guides/example" }],
        },
        {
          label: "Resources",
          items: [{ label: "Starlight Docs", slug: "resources/official-docs" }],
        },
        {
          label: "Others",
          items: [
            { label: "AI & Crawler Governance", slug: "others/ai-crawler" },
          ],
        },
      ],
    }),
  ],
});
