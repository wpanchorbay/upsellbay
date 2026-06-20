---
title: Dashboard Overview
description: Overview of the UpsellBay admin reporting dashboard.
---

## Performance Metrics

The UpsellBay main dashboard compiles operational metrics to track promotional impact:

- **Attributed Revenue:** Total checkout purchases containing accepted offers.
- **Conversion Rate:** The percentage of impressions that result in an accepted offer.
- **AOV Impact:** Estimation of average order value increases driven by accepted offers.
- **Placement Performance:** Comparison charts detailing product, cart, checkout, and thank-you conversions.

## Reporting Architecture

To prevent performance issues during store traffic spikes, the dashboard queries the aggregate database table (`upsellbay_offer_stats_daily`) instead of scanning live WooCommerce order records.

## Related Topics

- [Offer Analytics](../offers/07-analytics)
- [General Settings](../settings/01-general)
