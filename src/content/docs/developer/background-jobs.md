---
title: Background Jobs
description: Idempotent Action Scheduler tasks, rollups, and data cleanup.
---

## Job Management

UpsellBay schedules background operations via Action Scheduler under the `upsellbay` group.

- **Reconciliation Task:** Rollover session clicks to the daily stats table (`upsellbay_offer_stats_daily`).
- **Cleanup Task:** Prunes stale tracking transients and session metrics.
- **License Checker:** Verifies license activation status weekly.
