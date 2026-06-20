---
title: REST API Reference
description: Current REST routes exposed by UpsellBay and the security rules around them.
---

## Namespace

All routes live under `upsellbay/v1`.

## Public Storefront Routes

These routes are designed for storefront interactions. They require a valid UpsellBay session token and are rate-limited.

| Route | Method | Purpose | Required params |
| --- | --- | --- | --- |
| `/bump-toggle` | `POST` | Accept or remove a checkout bump. | `offer_id`, `accepted`, `token`, optional `placement` |
| `/cart-offer-add` | `POST` | Accept a product, cart, or thank-you offer. | `offer_id`, `token`, optional `placement`, optional `source_order_id` |
| `/dismiss` | `POST` | Dismiss an offer for the current session. | `offer_id`, `token`, optional `placement` |

Public routes do not trust client-sent price, discount, stock, or eligibility values. Those are recalculated server-side.

## Admin Routes

These routes are intended for WooCommerce admins and editor tooling.

| Route | Method | Purpose | Access |
| --- | --- | --- | --- |
| `/offer-preview` | `GET` | Return a safe preview payload for an offer editor request. | `manage_woocommerce` |
| `/products` | `GET` | Product search for offer setup. | `manage_woocommerce` |
| `/categories` | `GET` | Category search for rule and trigger setup. | `manage_woocommerce` |
| `/recommendations` | `GET` | Product recommendations for offer setup. | `manage_woocommerce` |
| `/license/activate` | `POST` | Activate a stored license key. | `manage_woocommerce` |
| `/license/status` | `GET` | Read current license status. | `manage_woocommerce` |
| `/license/deactivate` | `POST` | Remove local license state. | `manage_woocommerce` |

## Planned, Not Yet Public

The plugin architecture reserves space for analytics summary and import routes, but external developers should not rely on undocumented endpoints until they are shipped and documented here.

## Security Rules

- Public write routes require a valid plugin-issued session token.
- Public write routes are rate-limited before expensive work runs.
- Admin routes require `manage_woocommerce`.
- Sensitive values such as license keys, raw tokens, and payment identifiers should never be exposed in custom route responses.
