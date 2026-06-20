---
title: Placement Locations
description: Details on placement locations, custom selectors, and theme anchors.
---

## Target Placement Hooks

UpsellBay hooks into core WooCommerce storefront hooks:

- **Product Page:** `woocommerce_before_add_to_cart_form` or `woocommerce_after_add_to_cart_form`.
- **Cart Page:** `woocommerce_before_cart_totals` or `woocommerce_cart_collaterals`.
- **Checkout Bump:** `woocommerce_review_order_before_submit` (Classic) or block slot/fill boundaries (Blocks).
