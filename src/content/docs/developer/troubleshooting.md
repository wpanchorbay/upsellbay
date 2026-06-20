---
title: Troubleshooting Guide
description: System diagnostics, logging file paths, and known issue solutions.
---

## Common Issues & Fixes

- **Offer Fails to Render:** Check that **Test Mode** is active or verify that rule filters are satisfied.
- **Block Checkout Errors:** Confirm WooCommerce block compatibility is active.
- **Stats Dashboard is Blank:** Verify the daily cron task rolled over data to `{$wpdb->prefix}upsellbay_offer_stats_daily`.

## Log Files

Logs are written under `wp-content/uploads/wc-logs/upsellbay-*.log`.

## Related Topics

- [Help & Diagnostics](../../usage/help)
- [Testing & QA](../testing-and-qa)
