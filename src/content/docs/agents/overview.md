---
title: Agent Access & Capabilities
description: Guidelines for AI coding agents operating and inspecting UpsellBay.
---

## AI Integration

UpsellBay is built to be easily navigated by AI coding agents.

### Discovery Endpoints

- **Discovery Index:** Public LLM indexing at `/llms.txt` and full text corpus at `/llms-full.txt`.
- **MCP configuration:** MCP configurations exposed at `/.well-known/mcp.json` to allow agents to interact with live stats diagnostics.
