---
title: Data & Storage
description: Storage contracts, shared identifiers, and the persistence rules external integrations should follow.
---

## Shared Identifiers

These values are part of the public integration surface:

| Identifier | Value |
| --- | --- |
| Namespace root | `WPAnchorBay\UpsellBay\` |
| Text domain | `upsellbay` |
| Plugin slug | `upsellbay` |
| REST namespace | `upsellbay/v1` |
| Option prefix | `upsellbay_` |
| Offer and attribution meta prefix | `_ub_` |
| Hook prefix | `upsellbay_` |
| Offer post type | `upsellbay_offer` |
| Stats table suffix | `upsellbay_offer_stats_daily` |
| Action Scheduler group | `upsellbay` |

## Storage Model

### Offers

- Offers are stored in the private `upsellbay_offer` post type.
- Configuration is stored as `_ub_` post meta.
- External code should create or normalize offer payloads through the plugin schema, not by guessing raw meta.

Core fields external integrations usually care about:

| Meta key | Purpose |
| --- | --- |
| `_ub_offer_type` | Placement type: checkout, product, cart, or thank-you |
| `_ub_status` | Draft, paused, or active state |
| `_ub_offer_product_id` | Product being offered |
| `_ub_discount_type` | Discount mode |
| `_ub_discount_value` | Discount amount |
| `_ub_headline` | Shopper-facing title |
| `_ub_rules` | Normalized eligibility rules |
| `_ub_rules_match` | `all` or `any` rule logic |
| `_ub_placement_config` | Placement-specific configuration |
| `_ub_hide_if_in_cart` | Whether to hide the offer if the product is already in cart |
| `_ub_priority` | Lower numbers render first |

### Settings

- Global plugin settings are stored in the single option `upsellbay_settings`.

### Analytics

- Aggregate daily analytics are stored in `{$wpdb->prefix}upsellbay_offer_stats_daily`.
- The table is non-PII by design and is meant for reporting, not customer history reconstruction.
- The table belongs to UpsellBay Pro. The free plugin does not create it.

#### Two stat stores

Offer interactions are kept in two places:

| Store | Written by |
| --- | --- |
| Offer counters: post meta `_ub_counter_<type>` on the offer (`views`, `accepts`, `dismissals`), shown in the Offers list and the free dashboard | The free plugin, from its `upsellbay_offer_*` actions. Pro's `HostStatsBridge` re-fires Pro placement events (product page, cart, thank-you) on those actions. |
| Pro daily table `{$wpdb->prefix}upsellbay_offer_stats_daily` | Pro's `AnalyticsRecorder`. Pro placements record directly; for `checkout_bump`, `HostStatsBridge` records the free plugin's events. |

Each placement flows one way, so an event is not counted twice in the same store. The two stores are separate and are not reconciled with each other.

In the Pro table, `AnalyticsRecorder::record_accept( $offer_id, $placement, $date )` increments accepts only. Orders, revenue, and discount total are added once, by `record_order()`, when the order is recorded.

### Logs

- Operational logs are stored in `{$wpdb->prefix}upsellbay_logs`.

### Session State

- UpsellBay stores accepted offers, dismissed offers, cart item keys, placement context, and hashed validation tokens in the WooCommerce session.
- Session storage should not contain email addresses, phone numbers, license keys, or payment identifiers.

## Order Attribution

UpsellBay writes order and order-item attribution through WooCommerce CRUD objects, not direct SQL.

Key attribution meta includes:

- `_ub_offer_id`
- `_ub_offer_type`
- `_ub_offer_placement`
- `_ub_discount_type`
- `_ub_discount_amount`
- `_ub_source_context`
- `_ub_source_order_id`
- `_ub_source_offer_id`
- `_ub_follow_on_order`

Since free 1.0.2 these item meta keys are hidden on the admin order screen through the `woocommerce_hidden_order_itemmeta` filter. They are still stored on the order item and readable through the WooCommerce CRUD API.

## Integration Rules

- Use WooCommerce CRUD APIs for orders and order items.
- Do not write directly to HPOS tables, `wp_postmeta`, or order item meta tables.
- Do not store customer PII in custom analytics or session extensions.
- Use the documented import/export flow for portable offer templates.
