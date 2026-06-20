---
title: Safety Rules & Guardrails
description: Strict code isolation policies, PII-safe operations, and CartBay anti-coupling.
---

## Operational Safety

AI Agents must follow these absolute rules:

- **CartBay Anti-Coupling:** Do not read or write to CartBay tables or options. No abandoned cart email recovery flows are permitted.
- **HPOS Compliance:** Only query WooCommerce objects using WC CRUD APIs (do not query database tables directly).
- **PII Protection:** Never write user emails, names, or addresses to logs or dashboard analytics tables.
