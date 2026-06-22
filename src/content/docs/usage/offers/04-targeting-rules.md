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

Here is the complete list of supported rule types, their expected values, and supported operators.

| Rule Type | Description | Value Type | Supported Operators |
| --- | --- | --- | --- |
| `cart_product` | Cart contains product | List (Products) | `contains`, `not_in` |
| `cart_category` | Cart contains category | List (Categories) | `contains` |
| `cart_tag` | Cart contains tag | List (Tags) | `contains` |
| `cart_subtotal` | Cart subtotal is | Number | `gt`, `gte`, `lt`, `lte`, `eq`, `neq` |
| `viewed_product` | Currently viewing product | List (Products) | `contains` |
| `user_role` | User role is | List (Roles) | `contains` |
| `customer_order_count` | Customer order count is | Number | `gt`, `gte`, `lt`, `lte`, `eq`, `neq` |
| `customer_lifetime_spend` | Customer lifetime spend is | Number | `gt`, `gte`, `lt`, `lte`, `eq`, `neq` |
| `stock_status` | Offered product stock status is | Stock Status | `eq` |
| `exclude_if_product_in_cart` | Exclude if cart contains product | List (Products) | `not_in` |

*Note: `lifetime_spend` is accepted as an alias for `customer_lifetime_spend`, and `exclude_product_in_cart` is accepted as an alias for `exclude_if_product_in_cart`.*

## Supported Operators and Aliases

The system normalizes operators and accepts various aliases to make API integration easier.

| Canonical Operator | Description | Accepted Aliases |
| --- | --- | --- |
| `eq` | Equals | `is` |
| `neq` | Does not equal | `is_not` |
| `contains` | Contains | `in`, `eq`* |
| `not_in` | Does not contain | `not_contains`, `neq`* |
| `gt` | Greater than | `greater_than`, `>` |
| `gte` | Greater than or equal to | `greater_or_equal`, `>=` |
| `lt` | Less than | `less_than`, `<` |
| `lte` | Less than or equal to | `less_or_equal`, `<=` |

*\*If `eq` is passed for a rule that expects `contains`, it will automatically be normalized to `contains`. The same applies for `neq` mapping to `not_in`.*

## Validation Notes

- Numeric rules (`cart_subtotal`, `customer_order_count`, `customer_lifetime_spend`) require numeric values.
- List rules accept single values or arrays of values.
- Unsupported operators are rejected.
- Unsupported stock states are rejected (supported states: `instock`, `outofstock`, `onbackorder`).
- Empty rule values are rejected for active offers.
