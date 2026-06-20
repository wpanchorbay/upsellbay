---
title: Architecture Overview
description: Internal module architecture, dependency container, and bootstrap layer of UpsellBay.
---

## Structural Layout

UpsellBay organizes its code logic inside the `app/` directory under the PHP namespace `WPAnchorBay\UpsellBay`.

### Core Bootstrap Layer

- **Plugin main file (`upsellbay.php`):** Handles environment checks, autoloader setups, lifecycle hooks, and initial bootstrap.
- **Plugin bootstrap (`app/Core/Plugin.php`):** Coordinates the activation sequence, boot hooks, and registers modules inside the service container.
- **Container (`app/Core/Container.php`):** A lightweight service container mapping interfaces to dependencies.

## Related Topics

- [Data & Storage Schema](../data-and-storage)
- [Hooks & Filters](../hooks-and-filters)
