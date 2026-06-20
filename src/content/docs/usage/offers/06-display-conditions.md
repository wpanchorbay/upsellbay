---
title: Display Conditions
description: Configure inventory, user role, and discount eligibility settings.
---

## Runtime Eligibility Guards

Offers are filtered out automatically if they fail these conditions:

- **Stock Level:** Out of stock products do not render.
- **Duplicate Detection:** Exclude if the offered product is already present in the shopper's cart.
- **License Limitations:** Offers are disabled if the license is invalid (unless fail-open settings apply).
- **Priority Gating:** Only show higher priority items to prevent UI clutter.

## Related Topics

- [Placement Locations](../../storefront/placements)
- [Display Settings](../../usage/settings/02-display)
