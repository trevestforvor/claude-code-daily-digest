# Research Notes — 2026-08-04

## Summary
Research window: ~500s of 1200s limit. No research notes existed from a prior crash today, so full research cycle ran.

---

## YouTube Coverage (past 7 days)

| Channel | Subscribers | August Content Found? | Notes |
|---|---|---|---|
| @TechWithTim | 2M | No | Most recent Claude Code content from May–June 2026. No August-specific tool features found in past 72h. |
| @indydevdan | 129K | No (mid-July) | "Claude Just Changed Completely" posted ~3 weeks ago (mid-July). Covered new Claude features (auto-plan, auto-memory, voice mode) — no specific new tool to surface. |
| @Chase-H-AI | 109K | No (mid-July) | "This Repo Just Solved The #1 Claude + Codex Headache" from ~3 weeks ago. Appears to feature openai/codex-plugin-cc (already covered May 2026). Most recent: "You're Using Claude Code Wrong (Add Codex)" — same repo. |
| @simonscrapes | 71.8K | No | Claude Code Changelog 2.1.208–2.1.215 video (July 14–19). No specific new tool surfaced in past 72h. |
| @DevelopersDigest | 61.5K | No | No specific August 2026 tool features found. |
| @UICollectiveDesign | 52.5K | No | No August content found. |
| @charlieautomates | 8.1K | Minimal | YouTube Short "Anthropic's surprise move breaks Claude plans in half" — no specific tool featured. April 2026 was last major repo spotlight ("2 Claude Code Repos NOBODY'S Talking About Yet"). |
| @adrienaidesigner | 4K | No | No Claude Code content found in past 7 days. |

**Verdict:** No YouTubers from the curated list produced new Claude Code tool spotlights in the past 72h. No `creator_buzz` boosts apply to new items this cycle.

---

## New Items Found

### stablyai/orca ⭐ 37.2K — ADE for Parallel Agent Fleets
- **URL:** https://github.com/stablyai/orca
- **Status:** NOT in any digest (7-day or historical match in 5/1 and 5/6 were false positives — grep confirmed no "orca" in those files)
- **Stars:** 37.2K (verified via GitHub fetch today)
- **Last updated:** Active — 7,961 commits on main
- **Install:** `brew install --cask stablyai/orca/orca`
- **What it does:** Fan one prompt across 5 parallel coding agents (Claude Code, Codex, OpenCode, Cursor, 30+ others), each in its own isolated git worktree. Mobile companion (iOS/Android), Ghostty-class WebGL terminals, Design Mode (click UI elements → send HTML/CSS/screenshots to agent), GitHub/Linear integration, SSH worktrees for remote.
- **Context:** Topped GitHub Trending in July 2026. Crossed 31K stars in 4 months. YC W22 backed. Very strong signal.
- **Category:** agents, general

### mksglu/context-mode ⭐ 19.6K — 98% Context Reduction MCP
- **URL:** https://github.com/mksglu/context-mode
- **Status:** Was in May 2026 digests (5/1, 5/3–5/6) but NOT in past 7 days. Grown from ~2.5K to 19.6K stars since May — still trending.
- **Stars:** 19.6K (verified via GitHub fetch today)
- **Install:** `/plugin marketplace add mksglu/context-mode && /plugin install context-mode@context-mode`
- **What it does:** MCP server sitting between Claude Code and tool outputs. Sandboxes outputs (98% reduction: 315KB → 5.4KB over a full session). Intent-driven filtering for outputs >5KB: indexes full output, searches for relevant sections, returns only matches. Also provides session persistence (SQLite), programmatic analysis, 17-platform routing. Playwright snapshots: 56KB→299B (99%); GitHub Issues: 59KB→1.1KB (98%). Session life extended from ~30min to ~3 hours.
- **Category:** cost, mcp

### generalaction/emdash ⭐ 5.3K — YC W26 Open-Source ADE
- **URL:** https://github.com/generalaction/emdash
- **Status:** NOT in any digest
- **Stars:** 5.3K (updated July 29, 2026)
- **Install:** See README (desktop app)
- **What it does:** Desktop ADE (YC W26). Run multiple coding agents in parallel, each in its own git worktree. Linear, GitHub, Jira, GitLab, Asana, Featurebase, Monday.com integrations for sending issues directly to agents. One-place diff review, PR creation, CI check inspection, merge. SSH support for remote machines. Works with Claude Code, Codex, OpenCode, Amp.
- **Category:** agents, general

### FlorianBruniaux/claude-code-ultimate-guide ⭐ 5.7K — Security-Focused Ultimate Guide + MCP
- **URL:** https://github.com/FlorianBruniaux/claude-code-ultimate-guide
- **Status:** NOT in any digest
- **Stars:** 5.7K (updated July 29, 2026)
- **Install:** Add MCP: `npx -y claude-code-ultimate-guide-mcp`
- **What it does:** 24K+ lines of documentation, 268 production-ready templates, 473-question quiz, 48 Mermaid diagrams, **security threat database tracking 28 CVEs and 655 malicious skills**, MCP server for searching 20K+ lines of docs from inside Claude Code. CC BY-SA 4.0 / CC0 1.0.
- **Category:** design, general
- **Decision:** Lower star count. Not surfaced in this digest cycle; file for tomorrow if it gains traction.

---

## Official Anthropic Updates (August 4, 2026)
- **Focus View for VSCode:** Chat-menu toggle (Ctrl+Alt+F) hides tool activity behind expandable per-turn summary with live running-tool indicator.
- **mode: "mask"** for sandbox credential files on Linux/WSL.
- **Security fix:** Bash tool permission-check bypass where zsh could execute hidden commands in `[[ ]]` regex conditionals — now fixed.
- **Context:** Official Claude Code changelog for today. Relevant to VSCode users but not a new installable tool/skill.

---

## Other Sources Checked
- **HN:** Recent Show HN items: "Mu – Tools for Agents" (2 days ago, micro/mu — not Claude-Code-specific enough), "Context Mode" (already captured above), "Playwright Skill" (Oct 2025, too old).
- **Reddit:** r/ClaudeAI and r/ClaudeCode — no specific new viral repo found in 72h.
- **Anthropic news:** Claude for Open Source expanded July 8 (covered in earlier digests likely); 50% usage boost extended through Aug 19; Sonnet 5 pricing ends Aug 31.
- **simonwillison.net:** July 2026 newsletter and Aug 1–2 posts — mathematical advances, open letters on AI. No new Claude Code tool featured.
- **Product Hunt:** No Claude Code items in past 72h surfaced.

---

## Dropped from Yesterday's Digest
- **omnigent** (Day 2): Dropped to make room for new items. Can return if gains traction.
- **planning-with-files** (Day 7): 7-day threshold reached. Still solid at 25.9K stars but making room.
- **awesome-agent-skills** (Day 5): Solid at 29.5K but yielding to two stronger new entries.

---

## Recurring Items (continued)
All items from yesterday's digest except the 3 dropped above continue with incremented day counts. Star counts unchanged from yesterday (no significant delta expected in 24h for these).
