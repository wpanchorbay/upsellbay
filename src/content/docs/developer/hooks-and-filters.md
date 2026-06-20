---
title: Hooks & Filters
description: Stable WordPress hooks for extending UpsellBay without coupling to private internals.
---

## Hook Policy

UpsellBay exposes hooks at service boundaries, not inside every internal class.

All documented hook names use the `upsellbay_` prefix.

## Filters

| Hook | Purpose | Signature |
| --- | --- | --- |
| `upsellbay_offer_schema` | Extend normalized offer defaults. | `(array $defaults): array` |
| `upsellbay_available_placements` | Extend placement labels for integration UIs. | `(array $placements): array` |
| `upsellbay_placement_config_positions` | Adjust predefined placement position labels. | `(array $positions): array` |
| `upsellbay_offer_query_args` | Adjust offer repository query args. | `(array $query_args, array $filters): array` |
| `upsellbay_rule_context` | Add server-derived values to rule evaluation. | `(array $context): array` |
| `upsellbay_rule_result` | Override one normalized rule result. | `(bool $result, array $rule, array $context): bool` |
| `upsellbay_eligible_offers` | Adjust eligible offers after validation and prioritization. | `(array $offers, string $placement, array $context): array` |
| `upsellbay_render_offer_html` | Adjust already-escaped storefront markup. | `(string $html, array $offer, string $placement, array $context): string` |
| `upsellbay_offer_price` | Adjust the server-calculated offer price. | `(string $offer_price, string $original_price, array $meta): string` |
| `upsellbay_discount_amount` | Adjust the server-calculated discount amount. | `(string $discount_amount, string $original_price, string $offer_price, array $meta): string` |
| `upsellbay_attribution_meta` | Add non-PII attribution data before WooCommerce CRUD writes. | `(array $meta, array $offer, string $placement): array` |
| `upsellbay_analytics_event` | Adjust aggregate analytics payloads before persistence. | `(array $payload): array` |

## Actions

| Hook | Fires when | Signature |
| --- | --- | --- |
| `upsellbay_offer_created` | A validated offer is created. | `(int $offer_id, array $offer): void` |
| `upsellbay_offer_updated` | A validated offer is updated. | `(int $offer_id, array $offer): void` |
| `upsellbay_offer_deleted` | An offer is deleted. | `(int $offer_id): void` |
| `upsellbay_offer_rendered` | A storefront placement renders an offer. | `(int $offer_id, string $placement, array $offer, array $context): void` |
| `upsellbay_offer_accepted` | A shopper accepts an offer through a public route. | `(int $offer_id, string $placement, array $result): void` |
| `upsellbay_offer_dismissed` | A shopper dismisses an offer for the current session. | `(int $offer_id, string $placement): void` |
| `upsellbay_attribution_written` | Attribution data is written to a WooCommerce object. | `($item, array $meta, array $offer, string $placement): void` |
| `upsellbay_follow_on_order_created` | A thank-you follow-on order is linked to its source data. | `($order, int $source_order_id, int $source_offer_id): void` |
| `upsellbay_daily_stats_reconciled` | A daily aggregate row is repaired or reconciled. | `(string $date, int $offer_id, string $placement): void` |

## Import and Export Filters

| Hook | Purpose | Signature |
| --- | --- | --- |
| `upsellbay_export_payload` | Adjust the portable export envelope. | `(array $payload, array $offers): array` |
| `upsellbay_import_mapping` | Normalize product mapping before resolution. | `(array $mapping, array $offer, int $index): array` |
| `upsellbay_import_sku_match` | Resolve a product ID from a portable SKU. | `(int $product_id, string $sku, array $mapping, array $offer): int` |
| `upsellbay_import_post_status` | Choose the imported post status. | `(string $post_status, array $offer, int $index): string` |
| `upsellbay_import_validation_errors` | Add validation errors without bypassing import rules. | `(array $errors, array $payload): array` |

## Extension Rules

- Treat hook inputs as untrusted unless they were produced server-side by UpsellBay.
- Do not bypass capabilities, nonces, session-token validation, or server-side pricing rules.
- Keep custom attribution and analytics data non-PII.
