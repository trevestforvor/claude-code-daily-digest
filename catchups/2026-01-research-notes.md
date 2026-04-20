# Research notes — January 2026 Claude Code ecosystem catchup

Sources: GitHub API (api.github.com) for repos with topics `claude-code`, `claude-skill`, `mcp-server`, `claude-plugin`, `claude-code-plugin`, `agent-skills` created:2026-01-01..2026-01-31 sorted by stars; web search; simonwillison.net archive; anthropic webinars/news.

Star counts captured on 2026-04-20.

## Anthropic / official launches (Jan 2026)

- **Claude Cowork** — research preview launched Jan 12, 2026 ("Claude Code for the rest of your work"). Desktop app that can read/edit/create files locally. Initially Max-only; opened to Pro ($20/mo) on Jan 16. https://simonwillison.net/2026/Jan/12/claude-cowork/ and https://www.anthropic.com/webinars/future-of-ai-at-work-introducing-cowork
- **Claude Code 2.1** — first shipped Jan 7, 2026 per Medium recap. Expanded plugin / skill / marketplace system. (Release notes: https://platform.claude.com/docs/en/release-notes/claude-code).
- **Anthropic Plugins/marketplace** expanded for Claude Code + Cowork — https://claude.com/plugins, https://github.com/anthropics/claude-plugins-official.

## GitHub: topic:claude-code created Jan 2026 (sorted by stars)

Captured via api.github.com.

1. affaan-m/everything-claude-code — 161,633⭐ — created 2026-01-18 — "The agent harness performance optimization system. Skills, instincts, memory, security, and research-first development for Claude Code, Codex, Opencode, Cursor and beyond." — JS — install: `/plugin marketplace add https://github.com/affaan-m/everything-claude-code` then `/plugin install everything-claude-code@everything-claude-code`
2. sickn33/antigravity-awesome-skills — 34,073⭐ — created 2026-01-14 — 1,431+ agentic skills installable lib — `npx antigravity-awesome-skills`
3. rtk-ai/rtk — 30,424⭐ — created 2026-01-22 — Rust CLI proxy reducing LLM token consumption 60-90% — `brew install rtk`
4. Yeachan-Heo/oh-my-claudecode — 30,168⭐ — created 2026-01-09 — "Teams-first Multi-agent orchestration for Claude Code" — `/plugin marketplace add https://github.com/Yeachan-Heo/oh-my-claudecode` then `/plugin install oh-my-claudecode`
5. qwibitai/nanoclaw — 27,560⭐ — created 2026-01-31 — "lightweight alternative to OpenClaw that runs in containers for security" — clone+`/setup`
6. mvanhorn/last30days-skill — 22,885⭐ — created 2026-01-23 — researches topics across Reddit/X/YouTube/HN/Polymarket/web — `/plugin marketplace add mvanhorn/last30days-skill`
7. jarrodwatts/claude-hud — 20,062⭐ — created 2026-01-02 — Claude Code plugin showing context usage, active tools, agents, todos — `/plugin marketplace add jarrodwatts/claude-hud`
8. OthmanAdi/planning-with-files — 19,125⭐ — created 2026-01-03 — "Manus-style persistent markdown planning" — `npx skills add OthmanAdi/planning-with-files --skill planning-with-files -g`
9. manaflow-ai/cmux — 14,847⭐ — created 2026-01-28 — Ghostty-based macOS terminal with vertical tabs & notifications for AI coding agents — `brew tap manaflow-ai/cmux && brew install --cask cmux`
10. ComposioHQ/open-claude-cowork — 3,882⭐ — created 2026-01-13 — Open source Claude Cowork with 500+ SaaS integrations — git clone + setup.sh
11. FlorianBruniaux/claude-code-ultimate-guide — 3,729⭐ — created 2026-01-09 — docs from beginner to power user; MCP server `npx -y claude-code-ultimate-guide-mcp`
12. Galaxy-Dawn/claude-scholar — 3,448⭐ — created (Jan 2026) — research assistant for academic+dev
13. michaelshimeles/ralphy — 2,778⭐ — created 2026-01-15 — autonomous bash script running Claude Code / Codex / OpenCode / Cursor in loop until PRD complete — `npm install -g ralphy-cli`
14. nyldn/claude-octopus — 2,758⭐ — created 2026-01-15 — "Put up to 8 AI models on every coding task" — `/plugin marketplace add https://github.com/nyldn/claude-octopus.git` then `/plugin install octo@nyldn-plugins`
15. decolua/9router — 2,729⭐ — created Jan 2026 — routes coding tools to 40+ providers / 100+ models — `npm install -g 9router`
16. Q00/ouroboros — 2,448⭐ — created 2026-01-14 — spec-driven development framework — `curl -fsSL https://raw.githubusercontent.com/Q00/ouroboros/main/scripts/install.sh | bash`
17. tech-leads-club/agent-skills — 2,151⭐ — Jan 2026 — secure validated skill registry
18. njbrake/agent-of-empires — 1,638⭐ — created 2026-01-09 — Rust TUI/web to manage multiple Claude Code/OpenCode agents — `brew install aoe` or `curl install.sh`
19. yoanbernabeu/grepai — ~1,600⭐ — Jan 2026 — semantic code search via vector embeddings for AI agents
20. softaworks/agent-toolkit — ~1,600⭐ — Jan 2026 — curated skill collection

## topic:agent-skills Jan 2026

- VoltAgent/awesome-openclaw-skills — 46,684⭐ — created 2026-01-25 — 5,400+ OpenClaw skills curated
- JimLiu/baoyu-skills — 15,520⭐ — created 2026-01-13 — BaoYu content/AI/image-gen/social skills — `npx skills add jimliu/baoyu-skills`
- aden-hive/hive — 10,102⭐ — created 2026-01-12 — Multi-Agent Harness for Production AI — `git clone` + `./quickstart.sh`
- trailofbits/skills — 4,688⭐ — created 2026-01-14 — 40+ security-focused skills — `/plugin marketplace add trailofbits/skills`
- antfu/skills — 4,645⭐ — created 2026-01-28 — Anthony Fu curated Vue/Vite skills — `pnpx skills add antfu/skills --skill='*'`

## topic:mcp-server Jan 2026

- dadbodgeoff/drift — 777⭐ — created 2026-01-19 — codebase intelligence MCP server, remembers decisions across sessions
- christopherkarani/Wax — 709⭐ — created 2026-01-20 — single-file memory layer, sub-ms RAG, Apple Silicon, pure Swift
- marcoaapfortes/Mantic.sh — 546⭐ — structural code search engine for AI agents
- FuzzingLabs/mcp-security-hub — 525⭐ — created 2026-01-06 — offensive security MCP servers (Nmap, Ghidra, Nuclei, SQLMap, Hashcat)
- Natfii/UnrealClaude — 509⭐ — Unreal Engine 5.7 Claude integration
- samvallad33/vestige — 480⭐ — cognitive memory for AI agents, FSRS-6 spaced repetition

## topic:claude-skill Jan 2026

- assafelovic/skyll — 225⭐ — autonomous skill discovery, REST API + MCP server — `pip install skyll`
- PleasePrompto/google-ai-mode-skill — 142⭐ — free Google AI search with citations, browser automation

## topic:claude-code-plugin Jan 2026

- nyldn/claude-octopus — 2,758⭐ (already listed)
- guanyang/antigravity-skills — 665⭐
- wondelai/skills — 660⭐
- keskinonur/claude-code-ios-dev-guide — 603⭐
- zscole/adversarial-spec — 528⭐ — iteratively refines specs via multi-LLM debate until consensus

## Notes on ranking

- Category spread target: anthropic/official (1), marketplace/skill-collection, design/workflow-plugins, cost-optimization, mcp-servers, viral CLIs, multi-agent.
- All stars verified via api.github.com 2026-04-20.
- Skipped items with unverified install commands.
