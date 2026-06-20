/**
 * Centralized links registry.
 *
 * All hyperlinks and resource URLs used across this project should reference
 * the constants exported from this file rather than being hardcoded inline.
 *
 * Groups:
 *   EXTERNAL_LINKS – third-party / outbound URLs
 *   PAGE_LINKS     – internal page paths (site-relative, includes BASE_PATH)
 *   ASSET_LINKS    – static asset paths   (site-relative, includes BASE_PATH)
 *   FEED_LINKS     – full absolute URLs for machine-readable resources
 *
 * NOTE: YAML frontmatter in .md/.mdx files cannot reference JS expressions,
 * so any link that lives purely in frontmatter remains a plain string there.
 * Those values are annotated with a comment referencing the matching constant
 * so they stay easy to find and update in lock-step.
 */

import {
  BASE_PATH,
  ICON_HREF,
  OG_IMAGE_HREF,
  REPO_URL,
  WPANCHORBAY_URL,
  WPANCHORBAY_PROJECT_LANDING_URL,
  buildAbsoluteUrl,
} from "../../site-config.mjs";

// ---------------------------------------------------------------------------
// External (third-party) URLs
// ---------------------------------------------------------------------------

export const EXTERNAL_LINKS = {
  /** WPAnchorBay main website */
  wpAnchorBay: WPANCHORBAY_URL,

  /** Project-specific WPAnchorBay landing page */
  wpAnchorBayProjectLanding: WPANCHORBAY_PROJECT_LANDING_URL,

  /** GitHub repository for this documentation project */
  githubRepo: REPO_URL,

  /** Astro framework website */
  astro: "https://astro.build/",

  /** Starlight official getting-started guide */
  starlightGettingStarted: "https://starlight.astro.build/getting-started/",
} as const;

// ---------------------------------------------------------------------------
// Internal page paths  (site-relative; include the base path)
// ---------------------------------------------------------------------------

export const PAGE_LINKS = {
  /** Documentation home */
  home: `${BASE_PATH}/`,

  // Getting Started
  introduction: `${BASE_PATH}/getting-started/introduction/`,
  requirements: `${BASE_PATH}/getting-started/requirements/`,
  installation: `${BASE_PATH}/getting-started/installation/`,
  setupWizard: `${BASE_PATH}/getting-started/setup-wizard/`,
  licenseActivation: `${BASE_PATH}/getting-started/license-activation/`,
  quickStart: `${BASE_PATH}/getting-started/quick-start/`,

  // Usage Guide
  dashboard: `${BASE_PATH}/usage/dashboard/`,
  offersOverview: `${BASE_PATH}/usage/offers/01-overview/`,
  offersCreate: `${BASE_PATH}/usage/offers/02-create/`,
  offersTypes: `${BASE_PATH}/usage/offers/03-types/`,
  offersTargeting: `${BASE_PATH}/usage/offers/04-targeting-rules/`,
  offersTriggers: `${BASE_PATH}/usage/offers/05-triggers/`,
  offersDisplay: `${BASE_PATH}/usage/offers/06-display-conditions/`,
  offersAnalytics: `${BASE_PATH}/usage/offers/07-analytics/`,
  
  settingsGeneral: `${BASE_PATH}/usage/settings/01-general/`,
  settingsDisplay: `${BASE_PATH}/usage/settings/02-display/`,
  settingsIntegrations: `${BASE_PATH}/usage/settings/03-integrations/`,
  settingsNotifications: `${BASE_PATH}/usage/settings/04-notifications/`,
  settingsAdvanced: `${BASE_PATH}/usage/settings/05-advanced/`,
  help: `${BASE_PATH}/usage/help/`,

  // Storefront
  storefrontOverview: `${BASE_PATH}/storefront/overview/`,
  storefrontRendering: `${BASE_PATH}/storefront/rendering/`,
  storefrontJourney: `${BASE_PATH}/storefront/customer-journey/`,
  storefrontPlacements: `${BASE_PATH}/storefront/placements/`,
  storefrontCart: `${BASE_PATH}/storefront/cart/`,
  storefrontCheckout: `${BASE_PATH}/storefront/checkout/`,
  storefrontAcceptance: `${BASE_PATH}/storefront/acceptance/`,
  storefrontMobile: `${BASE_PATH}/storefront/mobile/`,
  storefrontPerformance: `${BASE_PATH}/storefront/performance/`,

  // Developer
  developerArchitecture: `${BASE_PATH}/developer/architecture/`,
  developerData: `${BASE_PATH}/developer/data-and-storage/`,
  developerApi: `${BASE_PATH}/developer/rest-api/`,
  developerHooks: `${BASE_PATH}/developer/hooks-and-filters/`,
  developerJobs: `${BASE_PATH}/developer/background-jobs/`,
  developerBuild: `${BASE_PATH}/developer/build-process/`,
  developerEnv: `${BASE_PATH}/developer/development-environment/`,
  developerTesting: `${BASE_PATH}/developer/testing-and-qa/`,
  developerTroubleshooting: `${BASE_PATH}/developer/troubleshooting/`,
  developerRelease: `${BASE_PATH}/developer/release-process/`,

  // AI Agents
  agentsOverview: `${BASE_PATH}/agents/overview/`,
  agentsWorkflows: `${BASE_PATH}/agents/workflows/`,
  agentsSafety: `${BASE_PATH}/agents/safety-rules/`,

  // Others
  aiCrawler: `${BASE_PATH}/others/ai-crawler/`,
  faq: `${BASE_PATH}/others/faq/`,
} as const;

// ---------------------------------------------------------------------------
// Static asset paths (site-relative; include the base path)
// ---------------------------------------------------------------------------

export const ASSET_LINKS = {
  /** Site favicon and navbar logo icon (SVG) */
  icon: ICON_HREF,

  /** Site navbar logo (SVG) */
  logo: `${BASE_PATH}/assets/UpsellBay.svg`,

  /** OpenGraph share image (PNG) */
  ogImage: OG_IMAGE_HREF,
} as const;

// ---------------------------------------------------------------------------
// Machine-readable / feed resources (full absolute URLs)
// ---------------------------------------------------------------------------

export const FEED_LINKS = {
  /** Canonical root URL */
  canonical: buildAbsoluteUrl("/"),

  /** Absolute URL of the OpenGraph share image */
  ogImage: buildAbsoluteUrl("/assets/WPAnchorBay-Documentation-OG.png"),

  /** XML sitemap index */
  sitemap: buildAbsoluteUrl("/sitemap-index.xml"),

  /** LLM-friendly documentation index */
  llms: buildAbsoluteUrl("/llms.txt"),

  /** LLM-friendly full documentation */
  llmsFull: buildAbsoluteUrl("/llms-full.txt"),

  /** MCP server documentation page */
  mcpDocs: buildAbsoluteUrl("/agents/overview/"),
} as const;
