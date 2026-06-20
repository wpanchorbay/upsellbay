---
title: Storefront Performance
description: Client-side resource sizing, lazy loading, and page-speed impacts.
---

## Performance Guidelines

To avoid conversion leakage, storefront components must load quickly:

- **Target Overhead:** Under 150ms added server processing time under traffic.
- **Asset Caching:** Scripts and styling are cached statically and loaded only on pages where placements are active.
- **AJAX Deferral:** Rule evaluations are deferred until basic theme components complete initial rendering.

## Related Topics

- [Architecture Overview](../../developer/architecture)
- [Storefront Offer Rendering](../rendering)
