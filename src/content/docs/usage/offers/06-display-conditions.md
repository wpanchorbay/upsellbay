---
title: Display Settings, Schedule & Conflicts
description: Configure how an offer renders, when it runs, and how it behaves around conflicts.
---

## Show Product Image

This toggle controls whether the storefront offer includes the WooCommerce product image when one is available.

## Display Position

UpsellBay validates the saved position against the offer type. Each offer type maps to one expected area:

- Checkout bump -> checkout area before submission
- Product page offer -> after the add-to-cart form
- Cart offer -> cart offer area
- Thank-you offer -> thank-you follow-on area

## Schedule

### Start date

Leave blank if the offer should be eligible immediately.

### End date

Leave blank if the offer should stay available until you pause, edit, or delete it.

## Priority

Priority decides which offer wins when multiple active offers qualify for the same placement.

- Lower number = stronger priority
- Higher number = fallback behavior

## Conflict Detection

UpsellBay checks active offers for:

- placement crowding
- priority ties
- likely funnel overlap

### Conflict override

This bypasses conflict prevention and should be used only when the overlap is intentional and documented.
