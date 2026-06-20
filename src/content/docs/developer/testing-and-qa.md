---
title: Testing & QA
description: QA validation, PHPUnit, PHPStan, PHPCS, and E2E Playwright tests.
---

## Test Frameworks

UpsellBay requires verifying code quality prior to commits:

- **PHPCS:** Runs WordPress Coding Standards lint tasks.
- **PHPStan:** Validates static typing rules.
- **PHPUnit:** Exercises database CRUD and rule engines.
- **Playwright:** Validates storefront checkouts and Block Checkout behaviors.

### Run Quality Scripts

```bash
composer phpcs
composer phpstan
composer test
```

## Related Topics

- [Build Process](../build-process)
- [Release Process](../release-process)
