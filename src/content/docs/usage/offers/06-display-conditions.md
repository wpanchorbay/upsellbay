---
title: Display Settings, Schedule & Conflicts
description: Configure how an offer renders, when it runs, and how it behaves around conflicts.
---

## Display Settings

### Show Product Image
This toggle controls whether the storefront offer includes the WooCommerce product image. Enabling this often increases conversion rates for visual products, while disabling it creates a more compact, text-focused UI.

### Hide If In Cart
This ensures the offer automatically hides if the customer already has the exact offered product in their cart. 
- **Leave checked** for generic cross-sells (e.g., an accessory) to avoid confusing duplicates.
- **Uncheck** if you are offering add-ons or selling additional quantities at a discount where having the product in the cart is expected and desired.

### Display Position
UpsellBay validates the saved position against the offer type. Each offer type maps natively to one highly optimized area:

- **Checkout Bump** -> Injected into the checkout area, typically right before the final submission button.
- **Product Page Offer** -> Positioned seamlessly after the add-to-cart form.
- **Cart Offer** -> Displayed prominently in the cart review area.
- **Thank-You Offer** -> Rendered securely on the post-purchase order received page.

## Schedule

### Start Date
Set a timestamp for when the offer should go live. Leave this blank if the offer should be eligible immediately upon activation.

### End Date
Set a timestamp for when the offer should automatically expire. Leave this blank if the offer should remain continuously available until manually paused or deleted.

## Priority & Conflict Resolution

### Priority Configuration
Priority determines which offer wins when multiple active offers qualify for the exact same placement simultaneously. 

- **Lower number = stronger priority** (e.g., Priority 1 wins against Priority 5).
- **Higher number = fallback behavior**.

### Smart Conflict Detection
UpsellBay proactively checks active offers to prevent poor customer experiences, flagging issues such as:

- **Placement Crowding**: Too many offers targeting the same page space.
- **Priority Ties**: Multiple offers competing with the exact same priority level.
- **Funnel Overlap**: Conflicting logic that might trap or confuse a shopper.

### Conflict Override
This setting bypasses UpsellBay's built-in conflict prevention logic. **Use this with extreme caution**—it should only be enabled when overlapping offers are strictly intentional. When enabling an override, you must provide a documented reason to maintain a clear audit trail of why the safety check was bypassed.
