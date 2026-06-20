---
title: Hooks & Filters
description: Complete filter and action hook documentation for developers.
---

## Extensibility Hooks

Customize targeting and display operations using custom WordPress filter/action hooks.

### Filter Hooks

- `upsellbay_is_offer_eligible` - Filter offer status before rendering.
- `upsellbay_offer_discount` - Modify discounts programmatically.
- `upsellbay_placements_selectors` - Modify storefront placement targets.

### Action Hooks

- `upsellbay_offer_accepted` - Action triggered when a buyer accepts an offer.
- `upsellbay_stats_daily_rolled_up` - Action triggered upon daily cron reconciliation.

## Related Topics

- [Architecture Overview](../architecture)
- [Background Jobs](../background-jobs)
