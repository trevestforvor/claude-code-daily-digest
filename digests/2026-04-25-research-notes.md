# Research Notes — 2026-04-25

## YouTube Coverage

### @indydevdan (129K subs)
- **"New Shopify AI Toolkit: Claude Code Setup + Demo (April 2026)"** — posted ~2 weeks ago. Covers Shopify/Shopify-AI-Toolkit, an official open-source MCP server connecting Claude Code to Shopify store management, docs, and GraphQL schemas.
- **"WordPress.com Just Released a Claude Code Plugin for WordPress - Here's What It Does"** — posted 3 days ago. Covers Automattic/claude-code-wordpress.com, the official WordPress.com Claude Code plugin.
- **"Top 10 Claude Code Skills, Plugins & CLIs (April 2026)"** — posted ~2 weeks ago. YouTube 403 on fetch; specific tools not confirmed.
- **"Top 10 Claude Code Skill, Plugins, and CLIs (Part 2)"** — Short, ~2 weeks ago.
- **"7 Claude Code Plugins I Use to Run My ENTIRE Business"** — March 2026.

### @Chase-H-AI (109K subs)
- **"Top 5 Claude Code Skills + Tools for Design (April 2026)"** — posted ~1 week ago. Covers design-focused skills; specific repos not confirmed (YouTube 403).
- **"CLAUDE CODE MASTERCLASS 4 HOURS: Build & Sell (2026)"** — posted ~4 days ago (also attributed to other creators; likely TechWithTim cross-promotion).
- Channel active, focused on no-code AI and Claude workflows.

### @charlieautomates (8K subs)
- No new Claude Code content confirmed in past week. Site search did not surface unique Charlie Automates videos posted this week. SKIP this run.
- **"Claude Managed Agents Just Dropped, And It Kills n8n"** (Ob5Vu-gD3mo) surfaced but could not confirm it's Charlie Automates vs. another creator (YouTube 403).

### @simonscrapes (71.8K subs)
- **"Every Claude Code Memory System Compared (So You Don't Have To)"** — posted 2 days ago. ⚠️ ALREADY IN APRIL 24 DIGEST as `simonscrapes-memory-systems-compared`. Skip.
- **"Stop Using Claude Code in Terminal (It's Holding You Back)"** — posted ~3 weeks ago. Covers IDE integrations/desktop app usage.
- **"Master Claude Code in 2 Hours (What Actually Matters)"** — posted ~2 weeks ago.

### @TechWithTim (2M subs)
- Multiple Claude Code masterclass videos; primarily already covered.

### @UICollectiveDesign (52.5K subs)
- Not specifically searched this run; Claude Design launch (April 17) would likely draw their attention given design focus.

### @DevelopersDigest (61.5K subs)
- Not specifically searched this run.

### @adrienaidesigner (4K subs)
- Not specifically searched this run; relevant to Claude Design launch.

---

## High-Signal Items Found

### Anthropic Official Releases (April 2026)
1. **Claude Design** — Anthropic Labs, April 17, 2026. Visual design tool (prototypes, slides, one-pagers) powered by Opus 4.7. Available to Pro/Max/Team/Enterprise. Integrates with Claude Code via handoff bundles. TechCrunch covered it. URL: https://www.anthropic.com/news/claude-design-anthropic-labs

2. **Claude Code Desktop Redesign** — April 14-15, 2026. Full parallel sessions sidebar, drag-and-drop panes, integrated terminal + file editor, rebuilt diff viewer. Blog: https://claude.com/blog/claude-code-desktop-redesign

3. **Claude Opus 4.7** — April 16, 2026. 87.6% SWE-bench Verified, new tokenizer (1.0–1.35× more tokens), task budgets, substantially better vision. Same pricing as Opus 4.6 ($5/$25 per MTok). URL: https://www.anthropic.com/news/claude-opus-4-7

4. **Anthropic Managed Agents** — April 8, 2026. Managed execution layer for AI agents. Deploy agents as code with managed runtime, state, OAuth, sandboxing. $0.08/session-hour. InfoQ coverage. URL: https://www.infoq.com/news/2026/04/anthropic-managed-agents/

5. **Anthropic April 23 Postmortem** — ALREADY IN APRIL 24 DIGEST as `anthropic-april23-postmortem`. SKIP.

### GitHub Trending / Community Tools
6. **cc-switch** (farion1231/cc-switch) — 51.2k stars, Rust/Tauri. Cross-platform desktop app unifying Claude Code, Codex, Gemini CLI, OpenCode, OpenClaw. v3.14.1 released April 23, 2026. 50+ provider presets, MCP/skills management, usage tracking, cloud sync, session manager. URL: https://github.com/farion1231/cc-switch. Install: `brew tap farion1231/ccswitch && brew install --cask cc-switch`

7. **gh skill CLI** — GitHub CLI v2.90.0, April 16, 2026. Standardized `gh skill install/update/publish/search/preview/pin` commands for agent skills. SHA-pinning, multi-agent compatibility (Claude Code, Copilot, Cursor, Codex, Gemini CLI). URL: https://github.blog/changelog/2026-04-16-manage-agent-skills-with-github-cli/

8. **Shopify AI Toolkit** (Shopify/Shopify-AI-Toolkit) — April 9, 2026, 250 stars. Official Shopify open-source MCP server. Connects Claude Code to Shopify docs, GraphQL API schemas, code validation, and live store management. MIT licensed. Covered by @indydevdan. URL: https://github.com/Shopify/Shopify-AI-Toolkit. Install: `/plugin marketplace add Shopify/shopify-ai-toolkit`

9. **alirezarezvani/claude-skills** — 12.7k stars, 235+ skills across 9 domains (engineering, marketing, product, compliance, C-level). v2.0 March 4, 2026. Works with 12+ AI coding platforms. URL: https://github.com/alirezarezvani/claude-skills

10. **mukul975/Anthropic-Cybersecurity-Skills** — 5.7k stars, 754 skills, v1.2.0 April 6, 2026. 26 security domains mapped to MITRE ATT&CK, NIST CSF 2.0, MITRE ATLAS, D3FEND, NIST AI RMF. Compatible with 26+ AI platforms. URL: https://github.com/mukul975/Anthropic-Cybersecurity-Skills. Install: `npx skills add mukul975/Anthropic-Cybersecurity-Skills`

11. **Automattic/claude-code-wordpress.com** — 18 stars. Official WordPress.com Claude Code plugin by Automattic. Generates full block themes from plain English; /quick-build and /design-site workflows; auto-deploys to WordPress Studio. Covered by @indydevdan 3 days ago. URL: https://github.com/Automattic/claude-code-wordpress.com

12. **kaitranntt/ccs** — 2.1k stars, v7.74.0 (701 releases). Multi-provider profile manager. Switch between Claude Code, Codex, Gemini CLI + 300+ models via OpenRouter. Visual usage dashboard. URL: https://github.com/kaitranntt/ccs. Install: `npm install -g @kaitranntt/ccs`

13. **VoltAgent/awesome-agent-skills** — 1000+ curated skills from official dev teams + community. Compatible with Claude Code, Codex, Gemini CLI, Cursor, and more. URL: https://github.com/VoltAgent/awesome-agent-skills

14. **quemsah/awesome-claude-plugins** — Automated plugin adoption metrics across GitHub repos using n8n workflows. Indexed 13,501 total repos as of April 22, 2026. URL: https://github.com/quemsah/awesome-claude-plugins

15. **FlorianBruniaux/claude-code-ultimate-guide** — Comprehensive beginner-to-power-user guide with templates, agentic workflow guides, quizzes, cheatsheet. URL: https://github.com/FlorianBruniaux/claude-code-ultimate-guide

### Other Notable (not in top 15)
- Claude Code /powerup system for interactive onboarding + MCP 500K character output limit — recent update
- Claude source leak (March 31, 2026) — trending older story, MCP security context
- awesome-cc-oss (rosaboyle) — archival of source leak resources, not a tool
- elvismdev/claude-wordpress-skills — community WordPress skills
- Claude Code Pro plan controversy — already in April 23 digest

---

## Dedup Confirmed Clear (not in submissions.json or last 7 days):
claude-design, claude-code-desktop-redesign, claude-opus-4-7, anthropic-managed-agents, cc-switch, gh-skill-cli, shopify-ai-toolkit, alirezarezvani-claude-skills, anthropic-cybersecurity-skills, automattic-claude-code-wordpress, ccs, voltagent-awesome-agent-skills, awesome-claude-plugins-metrics, claude-code-ultimate-guide

## Items to Skip (already in recent digests):
- anthropic-april23-postmortem (April 24)
- anthropics-skills-official (April 24)
- simonscrapes-memory-systems-compared (April 24)
- awesome-claude-code-toolkit (April 24)
- n8n-skills (April 24)
- everything-claude-code (April 22-23)
- claude-mem (April 22-23)
- caveman (April 22-23)
- claude-code-pro-removal (April 23)
