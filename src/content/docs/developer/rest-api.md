---
title: REST API Reference
description: Endpoints under namespace upsellbay/v1, parameters, and permission validation.
---

## API Namespaces

Endpoints are exposed under the namespace `upsellbay/v1` in `app/Api/Routes/`.

### Public Endpoints

- `GET /offer-preview` - View eligible offers.
- `POST /bump-toggle` - Add/remove items from checkout.
- `POST /cart-offer-add` - Add cross-sells to carts.
- `POST /dismiss` - Dismiss promotional items.

### Administrative Endpoints

- `GET /analytics/summary` - Get reporting dashboard values.
- `POST /import` - Import offer templates.

## Security & Validation

All public write routes are rate-limited, and admin endpoints require `manage_woocommerce` permissions and valid nonces.

## Related Topics

- [Architecture Overview](../architecture)
- [Agent Access & Capabilities](../../agents/overview)
