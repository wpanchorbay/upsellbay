---
title: Creating an Offer
description: Field-by-field guide to the Add Offer and Edit Offer screens in UpsellBay.
---

## The Add Offer Screen

The Add/Edit Offer screen is organized into sections:

- Required basics
- Targeting rules
- Discount
- Display settings
- Schedule and priority
- Advanced metadata

This page explains every field in the order merchants see it.

Replace with: the full Add Offer screen with all sections expanded.

## Required Basics

<img
  src="/upsellbay/assets/screenshots/offers/upsellbay-add-offer--required-basics.png"
  alt="UpsellBay Create Offer - Required Basics Section"
  data-lightbox="true"
/>

### Offer name

Internal name only. Shoppers do not see this.

### Status

- `Draft`: safe working state while building
- `Active`: eligible to show to shoppers
- `Paused`: temporarily disabled without deleting the setup

An offer must be `Active` before shoppers can see it.

### Offer type

Determines where the offer belongs:

- `Checkout bump`
- `Product page offer`
- `Cart offer`
- `Thank-you follow-on offer`

### Offer goal

The goal describes the intent of the offer:

- `Add-on`
- `Upgrade`
- `Protection`
- `Threshold Helper`
- `Follow-on`

It helps with conflict detection and reporting interpretation.

### Offer product

The WooCommerce product shoppers add from the offer.

Important behaviors:

- required for live offers
- must exist, be purchasable, and be in stock
- checkout bump and thank-you offers require a simple product or variation
- subscription products cannot receive UpsellBay discounts

### Reason label

A short supporting label such as `Recommended`, `Exclusive`, or `Most Popular`.

### Section heading

Controls the heading shown above the cart offer list in block and classic checkout. Leave blank to use the default Recommended for you.

### Headline

Primary shopper-facing message. Required for live offers.

### Body text

Optional short description below the headline. Supports limited formatting.

### Button text

The call to action shoppers click. Required for live offers.

## Targeting Rules

<img
  src="/upsellbay/assets/screenshots/offers/upsellbay-add-offer--targeting-rules.png"
  alt="UpsellBay Create Offer - Targeting Rules Section"
  data-lightbox="true"
/>

### Rule matching

Controls how multiple rules work together:

- `All rules`
- `Any rule`

### Rules

Rules are edited through the visual builder and stored as structured JSON. 

When creating rules that target specific products (such as "Cart contains product" or "Viewed product"), you can seamlessly select **multiple products** within a single rule. The dropdown utilizes a native WooCommerce search interface equipped with infinite scrolling, allowing you to easily browse large catalogs. Selected products clearly display their name, ID, and price to ensure accurate targeting.

Full rule types are documented in [Targeting Rules](./04-targeting-rules/).

## Discount

<img
  src="/upsellbay/assets/screenshots/offers/upsellbay-add-offer--discount.png"
  alt="UpsellBay Create Offer - Discount Section"
  data-lightbox="true"
/>

### Discount type

Options:

- `No discount`
- `Percentage`
- `Fixed amount off`
- `Fixed offer price`

Discount math is calculated server-side. Percentage discounts cannot exceed 100.

### Discount value

The numeric input used by the selected discount type.

## Display Settings

<img
  src="/upsellbay/assets/screenshots/offers/upsellbay-add-offer--display-settings.png"
  alt="UpsellBay Create Offer - Display Settings"
  data-lightbox="true"
/>

### Show product image

Toggles whether UpsellBay should render the WooCommerce product image when available.

### Display position

Each offer type has one expected predefined position:

- Checkout bump -> `before_submit`
- Product page offer -> `after_add_to_cart`
- Cart offer -> `after_cart_table`
- Thank-you offer -> `order_received_actions`

### Advanced JSON

Advanced users can preserve extra placement keys here.

## Schedule and Priority

<img
  src="/upsellbay/assets/screenshots/offers/upsellbay-add-offer--schedule-and-priority.png"
  alt="UpsellBay Create Offer - Schedule and Priority Settings"
  data-lightbox="true"
/>

### Start date

Optional start timestamp.

### End date

Optional end timestamp. End date must be after start date.

### Priority

Lower numbers win when multiple eligible offers compete for the same placement.

## Advanced Metadata

<img
  src="/upsellbay/assets/screenshots/offers/upsellbay-add-offer--advanced-metadata.png"
  alt="UpsellBay Create Offer - Advanced Metadata Settings"
  data-lightbox="true"
/>

### Performance

Read-only summary after the offer has been saved and starts receiving traffic.

### Trigger product IDs

Comma-separated WooCommerce product IDs used as a direct trigger filter.

### Trigger category IDs

Comma-separated WooCommerce category IDs used as a direct category trigger filter.

### Conflict override

Allows a merchant to bypass conflict prevention. Use only when the overlap is intentional.

### Conflict override reason

Required justification when override is enabled for an active offer.
