---
title: Release Process
description: Versioning, POT regeneration, and WooCommerce Marketplace submission.
---

## Release Checklist

1. Regenerate POT files: `bun run i18n:make-pot`.
2. Confirm PHPStan and PHPUnit tests pass.
3. Update version numbers in `upsellbay.php` and `readme.txt`.
4. Package the plugin ZIP archive: `zip -r upsellbay.zip .`.
5. Upload to WooCommerce Marketplace / QIT validation channels.

## Related Topics

- [Testing & QA](../testing-and-qa)
- [Architecture Overview](../architecture)
