---
title: Storefront Offer Rendering
description: AJAX loading and theme rendering behavior for storefront offers.
---

## Rendering Workflow

1. Page loads the template containers.
2. Storefront script initiates an AJAX/REST call to check eligibility.
3. If eligible, the server generates HTML/JSON templates.
4. The storefront container loads the layout with a transition animation.

## CSS Isolation

All styling uses specific prefix namespaces (`#upsellbay-*` and `.upsellbay-*`) to prevent styling bleed to theme classes.
