---
title: Introduction to UpsellBay
description: Understand what UpsellBay does, where it fits in WooCommerce, and how it increases AOV without replacing checkout.
---

## What UpsellBay Is

UpsellBay is a WooCommerce-native offer engine for increasing average order value without replacing your store's checkout flow. It adds targeted offers to four native stages of the buying journey:

- Product page
- Cart
- Checkout
- Thank-you page

UpsellBay is designed for merchants who want higher order values while keeping WooCommerce recognizable and stable.

## What UpsellBay Does

- Creates and stores offers inside a dedicated UpsellBay offer type
- Evaluates targeting rules against the current shopper and cart context
- Renders eligible offers in supported storefront placements
- Tracks aggregate, non-PII performance metrics such as views, accepts, dismissals, revenue, and discounts
- Gives store managers a WooCommerce-native admin workflow for creation, preview, filtering, and diagnostics

## What UpsellBay Does Not Try To Be

- It is not a funnel builder
- It is not a checkout replacement
- It is not an abandoned cart recovery tool
- It does not depend on CartBay
- It does not require you to redesign the storefront just to run one offer

## Main Admin Areas

Inside **WooCommerce -> UpsellBay**, the plugin is organized into a few practical areas:

- **Dashboard** for store status and aggregate performance
- **Offers** for creating, editing, previewing, filtering, and deleting offers
- **Settings** for global behavior, style tokens, license management, data retention, and logs
- **Tools** for masked diagnostics and import validation
- **Help** for documentation and support links
- **Setup Wizard** for creating a safe first draft offer

## Offer Placements

UpsellBay offers can be placed in four different locations:

### Product page offer

Use this when the shopper is evaluating a product and you want to recommend a complementary item before they leave the page.

### Cart offer

Use this when the shopper has already built intent and is reviewing the basket. This is a strong place for cross-sells and threshold-helper style offers.

### Checkout bump

Use this when the shopper is close to ordering and you want to present a single low-friction add-on near the order submission area.

### Thank-you follow-on offer

Use this when you want to promote a second purchase after the order is complete. In the current v1 flow, the shopper is sent to a separate follow-on checkout rather than a tokenized one-click charge.

## How UpsellBay Chooses What To Show

An offer is considered for display only when all of the following line up:

1. UpsellBay is globally enabled in Settings.
2. The placement is globally enabled in Settings.
3. The individual offer is set to `Active`.
4. The offered product is valid, purchasable, and in stock.
5. The placement matches the offer type.
6. The schedule and targeting rules match the current context.
7. The placement limit has not already been filled by higher-priority eligible offers.

