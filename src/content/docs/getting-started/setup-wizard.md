---
title: Setup Wizard
description: Use the first-run wizard to create a safe draft offer and enable admin-only preview mode.
---

## What The Setup Wizard Does

The Setup Wizard creates a first draft offer from a small set of required inputs. It is intentionally minimal and is best used when you want a clean starting point before moving into the full offer editor.

When you submit the wizard:

- UpsellBay creates a draft offer using placement-specific defaults
- The selected product becomes the offered product
- Your headline replaces the default headline
- If you leave **Enable test mode** checked, test mode is turned on globally
- The created offer is saved as the first-offer reference in plugin settings

## Wizard Fields

### Placement

Choose the storefront location you want to test first:

- `Checkout bump`
- `Product page offer`
- `Cart offer`
- `Thank-you follow-on offer`

This choice also sets the default copy, default offer goal, and default display position behind the scenes.

### Offer product

This is the product shoppers can add from the offer. Use the product search control to find the exact item.

Choose a product that is:

- Purchasable
- In stock
- Easy to explain in one short line of copy
- Appropriate for the selected placement

### Headline

This is the primary offer message. Keep it short and concrete.

### Preview first / Enable test mode

When checked, UpsellBay enables global test mode so only admins and store managers can safely preview eligible offers before shoppers see them.

## What The Wizard Does Not Ask Yet

The wizard deliberately skips advanced fields such as:

- status selection
- detailed targeting rules
- discount strategy
- schedule
- priority
- conflict override

You configure those inside the full offer editor after the draft is created.

## Screenshot Placeholder

![Placeholder screenshot for the setup wizard](/upsellbay/assets/screenshots/example-screenshot.png)

Replace with: the full Setup Wizard screen showing placement, product picker, headline, and test mode.

## Recommended Workflow

1. Pick the first placement you want to validate.
2. Choose one product with obvious relevance to that placement.
3. Write a short headline.
4. Leave test mode enabled.
5. Create the draft.
6. Open the newly created offer and finish the rest of the configuration in the full editor.
