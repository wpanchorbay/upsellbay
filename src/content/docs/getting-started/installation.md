---
title: Installation
description: Install and activate the private UpsellBay WooCommerce plugin safely on a WordPress site.
---

UpsellBay is two plugins that work together:

- **UpsellBay - Order Bump for WooCommerce** (the free plugin) provides the checkout bump, the offer editor, the setup wizard, and the Offers list and dashboard.
- **UpsellBay Pro** (`upsellbay.zip`, distributed by WPAnchorBay) builds on the free plugin. It adds the product page, cart, and thank-you offers, the Tools tab, the License and Logs settings sections, and Pro analytics.

UpsellBay Pro does not run on its own. Install and activate the free plugin first, then Pro. Install both like normal WordPress plugin ZIPs and activate them from the WordPress admin.

## Before You Install

Confirm the store meets the [Requirements](/upsellbay/getting-started/requirements/), especially WooCommerce and PHP versions.

## Install from WordPress Admin

Install and activate WooCommerce and the free UpsellBay plugin first. Then get the UpsellBay Pro ZIP (`upsellbay.zip`) from the WPAnchorBay site, your purchase email, or the marketplace you purchased from, and follow these steps:

<img src="/upsellbay/assets/screenshots/install/1-install-plugin-page.png" alt="Install Plugin Page - UpsellBay" data-lightbox="true" />

1. In WordPress admin, go to **Plugins**.
2. Make sure you have already installed [WooCommerce](/upsellbay/getting-started/requirements/#woocommerce) and activated it.
3. Click **Add New**.

<img src="/upsellbay/assets/screenshots/install/2-add-plugin-page.png" alt="Add New Plugin Page - UpsellBay" data-lightbox="true" />

4. Click **Upload Plugin**.

<img src="/upsellbay/assets/screenshots/install/3-upload-plugin-page.png" alt="Upload Plugin Page - UpsellBay" data-lightbox="true" />

5. Choose the UpsellBay ZIP (`upsellbay.zip`) file.

6. Click **Install Now**.

<img src="/upsellbay/assets/screenshots/install/4-activate-plugin-page.png" alt="Activate Plugin Page - UpsellBay" data-lightbox="true" />

7. Click **Activate Plugin**.

:::note
If the free UpsellBay plugin is missing, inactive, or older than version 1.0.1, UpsellBay Pro shows an admin notice and does not start.
:::

## After Activation

When the free plugin is activated, UpsellBay saves its default settings and registers the private offer post type.

You can go to the UpsellBay dashboard by clicking on the **Overview** link on the UpsellBay row of the plugins list.

<img src="/upsellbay/assets/screenshots/install/5-installed-plugin-page.png" alt="Installed Plugin Page - UpsellBay" data-lightbox="true" />

**UpsellBay appears in:**

There  are several ways to access UpsellBay:

- **WordPress Admin Direct:** `WooCommerce > UpsellBay`
- **From Plugins  Page:** `Plugins > UpsellBay > Manage`

**Verify Installation:**

- Confirm `WooCommerce > UpsellBay`can be found and opens.
- Confirm no WooCommerce-missing notice appears.
- Continue to [Setup Wizard](/upsellbay/getting-started/setup-wizard/).


## Updating UpsellBay

UpsellBay Pro uses a private updater connected to the WPAnchorBay license server. Activate a valid license key under **Settings -> License** to receive updates. See [License Activation](/upsellbay/getting-started/license-activation/).

:::note
The free UpsellBay plugin has no license settings. Offers keep working without a license; it is needed for updates and support.
:::
