---
title: Data & Storage Schema
description: CPT settings, custom tables, meta prefixing, and HPOS data CRUD.
---

## Database Entities

### 1. Custom Post Type (`upsellbay_offer`)
- Config parameters live under CPT entries.
- Metadata options are prefixed with `_ub_` (e.g., `_ub_placement_type`).

### 2. Plugin Option Table
- Global configuration parameters reside inside one Option entry: `upsellbay_settings`.

### 3. Custom Statistics Table
- Performance stats are recorded daily inside: `{$wpdb->prefix}upsellbay_offer_stats_daily`.
- Contains no customer PII.

## Related Topics

- [Architecture Overview](../architecture)
- [REST API Reference](../rest-api)
