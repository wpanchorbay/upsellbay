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
      title: "UpsellBay Documentation",
      description:
        "Learn how to configure, operate, extend, and automate the UpsellBay WooCommerce native offer engine.",
      customCss: ["./src/styles/home.css", "./src/styles/content-images.css"],
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
            { label: "Introduction", slug: "getting-started/introduction" },
            { label: "Requirements", slug: "getting-started/requirements" },
            { label: "Installation", slug: "getting-started/installation" },
            { label: "Setup Wizard", slug: "getting-started/setup-wizard" },
            { label: "License Activation", slug: "getting-started/license-activation" },
            { label: "Quick Start", slug: "getting-started/quick-start" },
          ],
        },
        {
          label: "Usage Guide",
          items: [
            { label: "Dashboard", slug: "usage/dashboard" },
            {
              label: "Offers",
              autogenerate: { directory: "usage/offers" },
            },
            {
              label: "Settings",
              autogenerate: { directory: "usage/settings" },
            },
            { label: "Help & Diagnostics", slug: "usage/help" },
          ],
        },
        {
          label: "Storefront",
          items: [
            { label: "Overview", slug: "storefront/overview" },
            { label: "Product Page Offers", slug: "storefront/product-page-offer" },
            { label: "Cart Offers", slug: "storefront/cart-offer" },
            { label: "Checkout Bumps", slug: "storefront/checkout-bump" },
            { label: "Thank-You Offers", slug: "storefront/thank-you-offer" },
          ],
        },
        {
          label: "Developer Docs",
          items: [
            { label: "Developer Index", slug: "developer" },
            { label: "Architecture Overview", slug: "developer/architecture" },
            { label: "Data & Storage", slug: "developer/data-and-storage" },
            { label: "REST API Reference", slug: "developer/rest-api" },
            { label: "Hooks & Filters", slug: "developer/hooks-and-filters" },
          ],
        },
        {
          label: "Reference",
          items: [
            { label: "First Offer Tutorial", slug: "first-offer" },
            { label: "Compatibility Guide", slug: "compatibility" },
            { label: "Data Retention", slug: "data-retention" },
            { label: "Setup Guide", slug: "setup" },
            { label: "AI & Crawler Governance", slug: "others/ai-crawler" },
            { label: "Frequently Asked Questions", slug: "others/faq" },
          ],
        },
      ],
    }),
  ],
});
