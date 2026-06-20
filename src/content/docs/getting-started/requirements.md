---
title: Requirements
description: Technical requirements and operational assumptions for running UpsellBay in a WooCommerce store.
---

## Minimum Versions

UpsellBay currently targets the following minimum platform versions:

- PHP `8.1+`
- WordPress `6.9+`
- WooCommerce `10.8+`

These version expectations come from the plugin's runtime baseline.

## WooCommerce Assumptions

- WooCommerce must be installed and active
- Offer products must be valid WooCommerce products
- The store should use standard WooCommerce data and checkout behavior
- You should validate your exact theme and plugin stack before live rollout

## Recommended Store Conditions

- HTTPS enabled across storefront and checkout
- A theme that already works well with WooCommerce templates
- A staging site for validating placement appearance and conflicts
- At least one completed test order if you plan to use thank-you page offers

## Operational Expectations

- UpsellBay stores aggregate offer analytics without customer PII
- Order attribution is written through WooCommerce CRUD APIs
- Offer session behavior is temporary and time-bounded
- Global settings are stored in one normalized settings option

## Checkout Note

UpsellBay's product direction includes modern WooCommerce compatibility, but you should still validate checkout behavior in your exact environment before rollout. If your store relies heavily on custom checkout extensions or Cart/Checkout Blocks, review the [Compatibility Guide](/upsellbay/compatibility/) and test on staging first.

## Before You Install

Confirm that you have:

1. A WooCommerce store meeting the version requirements above
2. Permission to manage WooCommerce settings
3. At least one product you can use as an offer product
4. A test path for previewing product, cart, checkout, and thank-you placements
