---
title: Developer Guide
description: External developer reference for UpsellBay architecture, storage contracts, REST routes, and hooks.
---

## For External Developers

This section is for agencies, plugin authors, and store engineers building around UpsellBay.

It focuses on the stable integration surface only:

- Plugin architecture and module boundaries
- Public data identifiers and storage contracts
- REST routes you can call safely
- Hooks and filters intended for extension work

Internal build, release, QA, and team workflow notes are intentionally excluded from this section.

## Start Here

- [Architecture Overview](/upsellbay/developer/architecture/) for the runtime map and extension boundaries
- [Data & Storage](/upsellbay/developer/data-and-storage/) for identifiers, meta keys, and persistence rules
- [REST API](/upsellbay/developer/rest-api/) for current route contracts
- [Hooks & Filters](/upsellbay/developer/hooks-and-filters/) for stable extension points

## Integration Rules

- Treat `WPAnchorBay\UpsellBay\Core\Constants` as the source of truth for shared identifiers.
- Use documented hooks, REST routes, and WooCommerce CRUD objects instead of patching private internals.
- Do not write directly to WooCommerce order tables or rely on admin HTML structure.
- Do not trust client-sent price, discount, or eligibility values when integrating with public routes.
