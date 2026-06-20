# Project Setup & Launch Checklist

Use this checklist when adapting the Documentation Boilerplate for a new project. Work through sections top-to-bottom. Each item is a concrete, atomic action.

> **For AI agents:** Complete every checked item before marking the project as ready. Do not skip or defer items — partial setups cause broken links, wrong branding, and failed builds.

---

## Phase 1 — Configuration & Constants

- [x] Confirm `pnpm` is installed/available. If not, ask the user to install or enable `pnpm` before continuing. Do not use `npm` or `yarn` because the lockfile and GitHub workflow depend on `pnpm`.
- [x] **`site-config.mjs`** — Set `SITE_ORIGIN` to the canonical production domain (e.g., `https://docs.yourproject.com`).
- [x] **`site-config.mjs`** — Set `BASE_PATH` to the repo sub-path (e.g., `/your-repo-name`) or `""` for a root-level deployment.
- [x] Ask the user whether the project has a public GitHub repository.
- [x] **`site-config.mjs`** — If the project has a public repo, set `REPO_URL` to that GitHub repository URL; otherwise set `REPO_URL` to `""` so the navbar GitHub link is hidden.
- [x] **`site-config.mjs`** — Keep `WPANCHORBAY_URL` as `https://wpanchorbay.com`.
- [x] **`site-config.mjs`** — Set `WPANCHORBAY_PROJECT_LANDING_URL` to the project's WPAnchorBay landing page URL.
- [x] **`site-config.mjs`** — Update `LOGO_SVG_PATH`, `ICON_HREF`, and `OG_IMAGE_HREF` to reference the new project's asset filenames.
- [x] **`package.json`** — Update the `"name"` field to the new project slug.
- [x] **`astro.config.mjs`** — Update `title` and `description` under the `starlight()` integration.
- [x] **`astro.config.mjs`** — Verify the navbar GitHub link is driven by `REPO_URL` from `site-config.mjs`; if `REPO_URL` is empty, the navbar GitHub link should be hidden.
- [x] **`astro.config.mjs`** — Verify global `<link rel="alternate">` entries for `llms.txt` and `llms-full.txt` use the correct `BASE_PATH`.
- [x] **`astro.config.mjs`** — Keep the `Head` component override enabled so page-specific Markdown alternate links are rendered.
- [x] **`src/lib/links.ts`** — Update project-specific `EXTERNAL_LINKS`; keep `wpAnchorBay` pointing to `WPANCHORBAY_URL` and use `wpAnchorBayProjectLanding` for the project landing page.
- [x] **`src/lib/links.ts`** — Update `PAGE_LINKS` to match the new documentation page structure.
- [x] **`src/lib/links.ts`** — Verify `FEED_LINKS` values resolve to correct absolute URLs via `buildAbsoluteUrl()`.

---

## Phase 2 — Branding & Assets

- [x] Replace `src/assets/wpanchorbay-icon.svg` with the project's navbar/logo icon (SVG).
- [x] Replace `src/assets/wpanchorbay-icon.png` with the same icon in PNG format (used in the homepage hero by Astro's image pipeline).
- [x] Keep `src/assets/wpanchorbay-logo.svg` for the WPAnchorBay footer unless the user explicitly asks to remove or rebrand the footer.
- [x] Replace `public/assets/wpanchorbay-icon.svg` with the project's favicon SVG.
- [ ] Replace `public/assets/WPAnchorBay-Documentation-OG.png` with the project's OpenGraph image (1200×630 px recommended).
- [ ] Verify all logo/icon variants look correct in **both light and dark modes**.
- [ ] *(Optional)* Customize the homepage gradient/theme color by editing HSL variables in `src/styles/home.css` (`:root` and `:root[data-theme='dark']`).

---

## Phase 3 — Homepage Content

- [x] **`src/content/docs/index.mdx`** — Keep this file and preserve its custom `template: splash` homepage design unless the user explicitly requests a redesign.
- [x] **`src/content/docs/index.mdx`** — Update frontmatter `title` and `description`.
- [x] **`src/content/docs/index.mdx`** — Update all `og:url`, `og:title`, `og:description`, `og:image` meta values in the `head:` block (must be hardcoded strings in YAML; add `# FEED_LINKS.x` comments for traceability).
- [x] **`src/content/docs/index.mdx`** — Update `twitter:title`, `twitter:description`, and `twitter:image` meta values similarly.
- [x] **`src/content/docs/index.mdx`** — Update `hero.tagline` with the project's value proposition.
- [x] **`src/content/docs/index.mdx`** — Update `hero.image.alt` to describe the new logo.
- [x] **`src/content/docs/index.mdx`** — Update `hero.actions` links. Only show a GitHub CTA if the project has a public repository.
- [x] Ask the user to choose or confirm the four most important/core documentation links to feature on the homepage.
- [x] **`src/content/docs/index.mdx`** — Replace the four `<CardGrid>` / `<Card>` blocks with clickable cards (`href`) for the confirmed core docs.
- [x] **`src/components/starlight/icon-map.ts`** — Verify each card icon exists and renders. Prefer Lucide-style icons; add missing Lucide SVG path data if needed.
- [x] Keep `src/components/WPAnchorBayFooter.astro` rendered on the homepage unless the user explicitly asks to remove it.

---

## Phase 4 — Navigation & Sidebar

- [x] **`astro.config.mjs`** — Redesign the `sidebar` array to reflect the real documentation categories and pages.
- [x] Ensure every `slug` referenced in the sidebar has a corresponding `.md` or `.mdx` file under `src/content/docs/`.
- [x] Verify the sidebar labels are clear, concise, and correctly ordered.
- [x] Confirm the "Overview" / homepage entry is present and correct.

---

## Phase 5 — Content: Remove Demo Pages

- [x] Delete `src/content/docs/getting-started/installation.md`.
- [x] Delete `src/content/docs/getting-started/configuration.md`.
- [x] Delete `src/content/docs/guides/example.md`.
- [x] Delete `src/content/docs/resources/official-docs.mdx`.
- [x] Do **not** delete `src/content/docs/index.mdx`; update the homepage instead.
- [x] Do **not** delete `src/content/docs/404.mdx`; update the custom not-found page instead.
- [x] Remove the corresponding sidebar entries from `astro.config.mjs`.
- [x] Remove the corresponding `PAGE_LINKS` entries from `src/lib/links.ts`.
- [x] **Do NOT delete** `src/content/docs/others/ai-crawler.mdx` — keep and update it.
- [x] **`src/content/docs/404.mdx`** — Update hardcoded links, asset paths, and demo page references while preserving the custom 404 splash design unless the user requests a redesign.

---

## Phase 6 — Content: Create Project Documentation

- [x] Read `.agents/CONTENT_AUTHORING.md` before creating or editing documentation pages.
- [x] Plan the documentation categories (e.g., Getting Started, API Reference, Guides, Troubleshooting).
- [x] Create at least one `.md` or `.mdx` file per sidebar category.
- [x] Every page must have frontmatter with at minimum `title` and `description`.
- [x] Use `.md` by default for prose-heavy pages: reference docs, troubleshooting, API notes, changelogs, migration notes, and simple guides.
- [x] Use `.mdx` only when the page imports components, uses JSX-like tags, needs rich layout, or is one of the special designed pages (`index.mdx`, `404.mdx`, `others/ai-crawler.mdx`). Check official Starlight docs when unsure: https://starlight.astro.build/
- [x] Use callouts (`:::tip`, `:::note`, `:::caution`, `:::danger`) for important notices.
- [x] Ensure all code blocks specify a syntax-highlighting language.
- [x] Add new `PAGE_LINKS` entries in `src/lib/links.ts` for each new page.
- [x] Update the `sidebar` in `astro.config.mjs` to include all new pages.

---

## Phase 7 — AI Discovery & Agent Files

- [x] Update `src/pages/.well-known/mcp.json.ts` — set `name` and `description` to the project's actual values.
- [x] Update `src/pages/robots.txt.ts` — this boilerplate/demo defaults to `Disallow: /` to prevent search indexing. For an actual project, change it to allow crawling and expose the production sitemap URL.
- [x] Verify `src/pages/llms.txt.ts` and `src/pages/llms-full.txt.ts` generate correct output after pages are created (run `pnpm run build` and inspect `dist/`).
- [x] Verify each rendered HTML page includes global LLM-friendly `rel="alternate"` links to `llms.txt` and `llms-full.txt`.
- [x] Verify `src/pages/markdown/[...slug].md.ts` generates static per-page Markdown/MDX source exports, for example `/markdown/index.md` and `/markdown/others/ai-crawler.md`.
- [x] Verify each rendered docs page includes a page-specific `rel="alternate" type="text/markdown"` link to its matching `/markdown/*.md` export. Do not use `?output_format=md` for static GitHub Pages deployments.
- [x] If public agent-guide endpoints/pages are intentionally added, verify they expose only safe public guidance and are linked from `src/content/docs/others/ai-crawler.mdx`.
- [x] Update `src/content/docs/others/ai-crawler.mdx` — ensure all live discovery endpoints are listed and their relative links are correct.
- [x] *(Optional)* If adding a `.agents/SKILLS.md`, `.agents/TASKS.md`, or other agent-guidance files, link to them from `src/content/docs/others/ai-crawler.mdx`.
- [x] *(Optional)* Add `.well-known/agent-skills/` entries if the project exposes agent-consumable skill definitions.

---

## Phase 8 — SEO & Metadata Review

- [x] Confirm `SITE_ORIGIN` in `site-config.mjs` matches the canonical production URL exactly (no trailing slash).
- [x] Verify `og:url` in `index.mdx` frontmatter matches `FEED_LINKS.canonical`.
- [x] Verify `og:image` and `twitter:image` point to the correct OG image absolute URL.
- [x] Confirm the sitemap generates at `<SITE_ORIGIN><BASE_PATH>/sitemap-index.xml` after build.
- [x] For actual production projects, check that `robots.txt` allows crawlers and references the sitemap. Keep `Disallow: /` only for demo/private/non-indexable deployments.
- [x] Review page-level `description` frontmatter on all pages for clarity and SEO value (aim for 120–160 characters).

---

## Phase 9 — Final Hardcoded-Link Audit

- [x] Search the codebase for `wpanchorbay` — keep intentional WPAnchorBay footer/source-brand references and WPAnchorBay-owned defaults; replace accidental project placeholders.
- [x] Search for `example.com` — replace with the real domain or remove.
- [x] Search for `docs-boilerplate-starlight` — replace in any user-visible strings (keep in `BASE_PATH` only if that is the actual repo name).
- [x] Confirm no component or page hardcodes a URL that should come from `src/lib/links.ts`.
- [x] Verify all footer links, social links, and nav links resolve correctly. Confirm the navbar GitHub link is hidden when `REPO_URL` is empty.
- [x] Verify the "Edit this page" GitHub links point to the correct repository.

---

## Phase 10 — QA & Pre-launch Verification

- [x] Run `pnpm run build` — confirm zero errors and zero warnings. If `pnpm` is missing, stop and ask the user to install/enable `pnpm` instead of using another package manager.
- [x] Run `pnpm run preview` and manually browse the site:
  - [x] Homepage renders correctly (hero, cards, footer).
  - [x] Sidebar navigation loads all pages without 404s.
  - [x] Light mode and dark mode both look correct.
  - [x] Images (logo, OG image, hero image) all load.
  - [x] All internal links resolve correctly.
  - [x] External links open in new tabs where expected.
- [ ] Validate the OG image renders correctly using a social preview tool (e.g., [opengraph.xyz](https://www.opengraph.xyz/)).
- [x] Confirm `llms.txt` and `llms-full.txt` are accessible and contain the expected page summaries.
- [x] Confirm `.well-known/mcp.json` is accessible and contains correct project metadata.
- [ ] Push to the main branch and verify the GitHub Actions `deploy.yml` workflow completes successfully.
- [ ] Verify the live deployed site matches the local preview.

---

## Done!

All phases complete. The documentation site is ready to publish.
