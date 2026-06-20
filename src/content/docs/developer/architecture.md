---
title: Architecture Overview
description: High-level runtime architecture and the extension boundaries external developers can rely on.
---

## Runtime Shape

UpsellBay is a WooCommerce-native offer engine. Its runtime code lives under `app/` and uses the namespace `WPAnchorBay\UpsellBay`.

The plugin follows a small-service architecture:

- `upsellbay.php`
  Loads the plugin, runs environment checks, and starts the bootstrap.
- `app/Core/Plugin.php`
  Coordinates service registration, WordPress hooks, and module startup order.
- `app/Core/Container.php`
  Provides a lightweight dependency container for runtime services.

## Main Modules

- `Core`
  Shared identifiers, bootstrap, settings, installer, scheduler, and hook helpers.
- `Admin`
  WooCommerce admin screens such as Offers, Settings, Tools, Help, and Wizard.
- `Api`
  REST route registration and controller classes.
- `Data`
  Repositories and session storage adapters.
- `Domain`
  Business logic for offers, rules, discounts, storefront rendering, analytics, attribution, cart mutation, logging, and compatibility checks.
- `Integrations`
  WooCommerce-specific integrations such as Block Checkout and licensing.
- `Utils`
  Cross-cutting helpers including rate limiting, token handling, and import/export.

## Storefront Flow

At runtime, UpsellBay follows this path:

1. An offer is loaded from the private `upsellbay_offer` CPT.
2. Rules and schedule checks determine whether the offer is eligible.
3. A placement renderer builds escaped storefront HTML for classic WooCommerce contexts.
4. Public REST routes handle accept and dismiss actions using a plugin-issued session token.
5. Attribution and aggregate analytics are written server-side.

Block Checkout support follows the same business rules, but uses WooCommerce Blocks integration points instead of classic PHP render hooks.

## Public vs Private Contract

External developers should treat these as the supported integration surface:

- Documented hooks and filters
- REST routes under `upsellbay/v1`
- Shared identifiers from `Core\Constants`
- Offer export/import JSON shape

Avoid coupling to:

- The internal container wiring
- Admin page markup or CSS selectors
- Private class construction details
- Direct database writes outside documented storage contracts
