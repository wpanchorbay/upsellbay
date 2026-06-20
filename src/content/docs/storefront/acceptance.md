---
title: Offer Acceptance & Rejection
description: Customer action flow when adding or dismissing offers.
---

## Acceptance Workflows

- **AJAX Additions:** Checkbox selection calls an AJAX request, updates cart totals, and recalculates order details without page reloads.
- **Attribution Tagging:** Order items added via offers are tagged with `_ub_offer_id` and `_ub_placement` in order metadata.
- **Dismissal Caching:** Dismissed offers set session flags to avoid re-rendering during active buyer sessions.
