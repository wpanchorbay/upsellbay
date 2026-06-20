---
title: Frequently Asked Questions
description: Find answers to common questions about the UpsellBay WooCommerce native offer engine.
---

Here are answers to the most frequently asked questions about configuring, operating, and extending UpsellBay.

## General Questions

### What is UpsellBay?
UpsellBay is a premium WooCommerce-native Average Order Value (AOV) offer engine. It allows merchants to display relevant, targeted offers during the buying journey, including:
- **Product Page**: Add-ons or frequently-bought-together offers.
- **Cart Page**: Cross-sells and threshold-based helper offers.
- **Checkout**: Order bumps on classic and block checkouts.
- **Thank-You Page**: Post-purchase checkout offers that start a separate follow-on journey.

### Does UpsellBay replace the WooCommerce checkout?
No. Unlike standard funnel builders that replace the checkout with a custom flow, UpsellBay preserves your existing checkout journey. It integrates directly into the WooCommerce classic and Block Checkouts without altering the payment gateways or checkout structure.

### Does UpsellBay require CartBay to run?
No. UpsellBay is completely independent. It is designed, installed, and operated without any reliance on CartBay options, sessions, database tables, REST routes, or scheduled jobs.

---

## Technical & Compatibility

### Is UpsellBay compatible with High-Performance Order Storage (HPOS)?
Yes. UpsellBay is fully compatible with WooCommerce HPOS (formerly Custom Order Tables). It strictly uses the WooCommerce CRUD APIs (`wc_get_order()`, `$order->update_meta_data()`, etc.) and does not query or write to standard WordPress postmeta or custom tables directly for order details.

### Does it support Block Checkout?
Yes. UpsellBay supports modern WooCommerce Block checkouts using official extensibility points, Slot/Fill, Store API integration, and documented checkout fields.

### Are there any performance impacts?
UpsellBay is highly optimized for performance:
- **Checkout Overhead**: Adds less than 150ms p95 server time with 50 active offers (object cache disabled).
- **Rule Evaluation**: Evaluates rule sets in less than 10ms p95 per request.
- **Dashboard Load**: Dashboard metrics use daily aggregate rollups, ensuring loading times under 500ms even with 100,000+ orders.

---

## Analytics & Attribution

### How is attributed revenue calculated?
When a customer accepts an offer (e.g., checks a checkout bump or clicks "Add to Cart" on a cross-sell), the plugin records the accepted offer ID. Once the order is successfully processed, the revenue of that specific offer item is attributed to the offer. 

### Does UpsellBay collect customer PII?
No. In compliance with security and privacy best practices, all analytics data stored in the `{$wpdb->prefix}upsellbay_offer_stats_daily` table is aggregated and contains no customer PII (Personally Identifiable Information) or sensitive identifiers.
