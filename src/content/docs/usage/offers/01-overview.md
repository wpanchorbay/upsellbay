---
title: Offers Overview
description: Understand the Offers screen, list table controls, and the lifecycle of an UpsellBay offer.
---

## What The Offers Screen Does

<img
  src="/upsellbay/assets/screenshots/offers/upsellbay-offers-overview.png"
  alt="UpsellBay Offers Overview"
  data-lightbox="true"
/>

The **Offers** tab is the operational center for live merchandising. It lets you:

- create offers
- search and filter existing offers
- check placement and health at a glance
- open the add/edit screen
- preview supported storefront locations
- delete offers

## Offers Table Columns

### Offer

The internal title of the offer. Row actions appear here:

- `Edit`
- `View Live`
- `Delete`

### Placement

Shows which storefront location the offer belongs to.

### Status

The current workflow state:

- `Draft`
- `Active`
- `Paused`

### Health

Health is a conflict indicator, not a guarantee of perfect UX.

- A green success icon means no conflict warning was detected.
- A warning icon means UpsellBay detected placement crowding, a priority tie, or likely funnel overlap.

### Priority

Lower numbers win when multiple eligible offers compete for the same placement.

### Views / Accepts / Revenue

These are offer-level summary values pulled into the table so you can quickly compare performance.

## Filters and Search

The table supports:

- search by visible row content
- placement filter
- status filter
- health filter
- sortable columns such as title, status, priority, views, accepts, and revenue

## Offer Lifecycle

### Draft

Use Draft while you are still configuring copy, rules, or discount logic.

### Active

Active offers are eligible to render for shoppers when the placement, rules, and product state all allow it.

### Paused

Paused offers keep their configuration but stop rendering.

## Preview Behavior

`View Live` uses placement-aware preview logic:

- Product offer: links to the offered product page
- Cart offer: links to the cart page
- Checkout bump: links to checkout
- Thank-you offer: uses the most recent qualifying WooCommerce order when available

