---
title: Tools 
description: Easily migrate, backup, and restore your UpsellBay offers and global settings.
---

<img
  src="/upsellbay/assets/screenshots/upsellbay-tools.png"
  alt="UpsellBay - Tools Page"
  data-lightbox="true"
/>

The **Tools** tab in UpsellBay provides a robust data migration system. Whether you are moving from a staging site to production, sharing templates between stores, or simply taking a backup, the Tools page handles it all.

## Export Data

The Export tool generates a complete, structured JSON file of your UpsellBay setup. 

**What is exported?**
- All Active and Paused Offers (including their rules, discounts, and placement configurations).
- Global Plugin Settings (including placement toggles, limits, and style tokens).
- Note: Analytics, logs, and sensitive data (like license keys) are *not* exported.

To export, simply click **Export Whole Data**. A `.json` file (e.g., `upsellbay-export-YYYY-MM-DD.json`) will be downloaded to your computer.

## Import Data

The Import tool allows you to safely upload an exported `.json` file and restore your setup. The process uses a **two-step preview** system to ensure you have full control before any data is saved to your store.

### Step 1: Upload and Preview
1. Choose the `.json` file you previously exported.
2. Click **Upload and Preview**. 
3. UpsellBay will analyze the file and present a summary of what was found (e.g., Global Settings and the number of Offers).

### Step 2: Import Preferences
On the Preview screen, you can configure exactly how the incoming data should be handled:

- **Import global settings**: Checked by default if settings exist in the file. Uncheck this if you only want to import offers without overwriting your store's current styling and configurations.
- **Append "(Import)" to offer titles**: Check this if you want to easily distinguish the newly imported offers from your existing ones.
- **Duplicates Handling**: If an imported offer has the exact same title as an offer already on your store, you can choose a strategy:
  - **Create duplicate offers**: Imports the offer alongside the existing one.
  - **Skip importing**: Ignores the incoming offer.
  - **Overwrite existing**: Updates the existing offer with the incoming configuration.

Once you are satisfied with your preferences, click **Confirm Import** to apply the changes.
