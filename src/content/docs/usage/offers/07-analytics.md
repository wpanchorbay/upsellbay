---
title: Offer Analytics
description: Track impressions, acceptances, dismissals, and attributed revenue.
---

## Performance Metrics Capture

UpsellBay writes basic stats occurrences without storing user session details:

- **Views (Impressions):** Logged when an offer UI renders.
- **Accepts:** Logged when the checkbox is selected or CTA clicked.
- **Dismissals:** Logged if the buyer explicitly removes or closes the block.
- **Revenue Attributed:** Value of the product added via the offer layout.

## Database Reporting

Updates are staged locally and reconciled daily to the daily stats table (`upsellbay_offer_stats_daily`).

## Related Topics

- [Dashboard Overview](../../usage/dashboard)
- [Data & Storage Schema](../../developer/data-and-storage)
