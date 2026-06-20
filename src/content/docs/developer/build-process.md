---
title: Build Process
description: Asset compiling, bun tasks, and internationalization commands.
---

## Asset Building

Frontend script compiling is handled via webpack and Astro scripts:

- **Source Location:** `src/` directory.
- **Compiled Files:** Written to the `assets/` directory.

### Build Commands

```bash
# Build production assets
bun run build

# Rebuild POT localization template
bun run i18n:make-pot
```
