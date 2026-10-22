---
title: Offer Analytics
description: Review offer-level performance data, aggregate dashboard metrics, and what the numbers mean.
---

## Where Analytics Appear

UpsellBay surfaces performance data in two convenient locations:

- **Global Dashboard**: Provides aggregate, date-range reporting across all active campaigns to gauge overall plugin impact.
- **Offer Editor**: Displays a read-only performance summary directly within the individual offer configuration screen for quick, contextual insights.

## Metrics Captured

To help you measure ROI accurately, UpsellBay tracks the following metrics for each offer:

- **Views**: The number of times the offer was successfully rendered to a shopper.
- **Accepts**: The number of times the shopper clicked to add the offered item to their cart or order.
- **Dismissals**: The number of times the shopper explicitly clicked the close/dismiss button on the offer.
- **Revenue**: The total monetary value attributed to the offer (calculated from successful checkout completions).
- **Discount Total**: The aggregate value of discounts applied specifically through this offer.
- **Orders**: The total number of unique orders that include this offer.
- **Accept Rate**: The conversion percentage (Accepts divided by Views).

## How The Counts Are Recorded

- **Two stores:** The Offers list and the free dashboard show counters kept on each offer. UpsellBay Pro's date-range dashboard reads a separate daily stats table. They are not reconciled with each other, so the two can show different totals.
- **Accepts and revenue:** An accept only adds to the Accepts count. Revenue, discount total, and orders are recorded once, when the order is recorded, so accepting an offer does not add revenue by itself.
- **Checkout bump views in Pro:** A Classic Checkout bump is counted in Pro's table once per offer per server request, however many times the offer markup is built in that request.

## How To Interpret The Data

Understanding the context behind the numbers helps refine your strategy:

- **High Views + Low Accepts**: Often points to weak product fit, uncompelling copy, or a discount that isn't enticing enough. Consider testing a different offer goal.
- **Low Views**: Usually indicates that the targeting rules are too strict, the trigger products aren't getting traffic, or the placement is currently disabled.
- **High Accept Rate + Low Revenue**: Can still be a major win! If the offer is on a low-traffic product but converts well, it is successfully driving incremental AOV. Leave it active.
