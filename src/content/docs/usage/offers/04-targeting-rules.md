---
title: Targeting Rules
description: Learn every supported targeting rule in UpsellBay and how rule matching changes eligibility.
---

## How Rules Work

Rules are evaluated against the current product, cart, and shopper context.

## Rule Matching Modes

<img
  src="/upsellbay/assets/screenshots/offers/upsellbay-offer-rules.png"
  alt="UpsellBay Create Offer - Targeting Rules Section"
  data-lightbox="true"
/>

### All rules

Every rule must match.

### Any rule

A single matching rule is enough.

## Supported Rule Types

- `cart_product`
- `cart_category`
- `cart_tag`
- `cart_subtotal`
- `viewed_product`
- `user_role`
- `customer_order_count`
- `customer_lifetime_spend`
- `stock_status`
- `exclude_if_product_in_cart`

## Supported Operators

For numeric rules:

- `eq`
- `neq`
- `gt`
- `gte`
- `lt`
- `lte`

For list and relationship rules:

- `eq`
- `contains`
- `not_in`

## Validation Notes

- Numeric rules require numeric values
- Unsupported operators are rejected
- Unsupported stock states are rejected
- Empty rule values are rejected for active offers
