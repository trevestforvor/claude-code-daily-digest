# Daily Digest Research Notes — 2026-08-20

Research window: past 72h (Aug 17–20, 2026); some Aug 5–16 items still trending.

## YouTube coverage (past 7 days)

- **@charlieautomates** — no NEW Claude Code video in the past 7 days. Most recent: "Claude Code's New Upgrade Lets You Automate Any Task (Claude Code Full Tutorial for 2026)" (~2 weeks ago, https://www.youtube.com/watch?v=ZbawXiYm4Go). Nothing to promote to `creator_buzz` this run.
- **@Chase-H-AI** (109K subs) — posted "Give Me 50 Minutes, I'll Give You 1000+ Hours Of Claude Code Knowledge (2026 Guide)" (~1 week ago, https://www.youtube.com/watch?v=U6k4MeVks_Y). General masterclass — not tied to one tool. Also within 2 weeks: "The #1 Claude Code Design Skill Just Got a HUGE Upgrade" (ui-ux-pro-max coverage, https://www.youtube.com/watch?v=RVeCbPg0liw). Keeps `@Chase-H-AI` credit on ui-ux-pro-max item.
- **@indydevdan** (129K subs) — recent video "The August 2026 AI Coding Championship — 4 Agents, 3 Tasks, 1 Winner (Real Receipts)" (~2 weeks ago, https://www.youtube.com/watch?v=DSw6kLv54wI). Compares Codex vs Claude Code vs Qwen3.8-Max vs Kimi K3. No net-new tool discovery from it.
- **@simonscrapes** — no NEW Claude Code content in past 7 days (last: June 5, 2026).
- **@TechWithTim** (2M subs) — no Claude Code content this week to surface.
- **@UICollectiveDesign**, **@adrienaidesigner**, **@DevelopersDigest** — nothing directly covering a specific new tool this week (skipping this run).

**Cross-creator overlap:** No tool covered by 2+ curated YouTubers in the past week to warrant a viral boost.

## Anthropic official (past 15 days)

- **Aug 5**: Inference hooks — beta for Claude Enterprise; webhook-based inline DLP for chat/Cowork/Claude Code. https://claude.com/blog (via https://www.digitalapplied.com/blog/claude-enterprise-inference-hooks-dlp-guide)
- **Aug 6/7**: Self-hosted environments for Claude Code — public beta on Team & Enterprise; shipped in v2.1.224. `claude self-hosted-runner`. https://claude.com/blog/run-claude-code-sessions-on-your-own-compute
- **Aug 12**: Claude Cowork in Chrome side panel — full Cowork session (skills/connectors/history) in the extension; cross-device continuity. Max/Team today, Pro over coming weeks. https://claude.com/blog/cowork-chrome-side-panel
- **Aug 13**: "Claude Tag now reads even more of the room" — Anthropic blog.
- **Aug 14**: Auto mode became default permission mode for new sessions on Pro/Max/Team.
- **Aug 17**: Anthropic /design command research preview (already covered in yesterday's digest).
- **Aug 17**: Claude Code v2.1.234 — subagent controls (CLAUDE_CODE_MAX_CONCURRENT_SUBAGENTS default 20; nested subagents off by default; --max-budget-usd now halts background subagents). Spellcheck in prompt. Terminal UI polish.
- **Aug 18**: Anthropic wide auth outage across claude.ai, API, Claude Code, Cowork (~36 min). https://startupfortune.com/claude-ai-suffers-widespread-outage-across-all-its-models-on-august-18/
- **Aug 18**: v2.1.235 — Piebald tracker released same day.
- **Aug 19**: Weekly limits 50% boost extended through Aug 31, 2026 (@ClaudeDevs 1.3M+ views).
- **Compliance API** (Aug rollout): Extended to Cowork and Claude Code (desktop, web, CLI). https://claude.com/blog/compliance-api-cowork-and-claude-code
- **Claude Code claude-api skill compression**: context load cut from ~200k → ~25k tokens by on-demand doc loading.
- Ecosystem: **ElevenLabs MCP for Claude** shipped this week.

## Security

- **CVE-2026-54316** — disclosed at Black Hat USA on Aug 5 by Novee Security. Claude Code's pre-approved WebFetch access to huggingface.co was abused as a covert exfiltration channel: attacker instructs Claude to hit attacker-controlled HF repo paths; HF's public download counter reveals bits of any accessible data (env vars, files, tokens). Chain reached RCE on anthropics/claude-code itself with a single GitHub issue. Affects 0.2.54 → 2.1.162; **fixed in 2.1.163**. NVD CVSS v3.1 9.1. GHSA-fg94-h982-f3mm. Repro lab: https://github.com/InertFluid/cve-2026-54316-lab
- **ChainDrop npm worm** (early Aug) — plants Claude Code SessionStart hook + VS Code folderOpen task; fires on workspace open. https://thehackernews.com/2026/08 (Pillar Security). Not surfacing as separate item — noted for context.

## New / trending community projects

- **zhaoxuya520/reverse-skill** — ~25.9K stars, +8,386 in a week per trending trackers. Client-neutral skill router for reverse engineering / authorized pentesting: 41 routing rules (R0–R40), 163 bilingual regression benchmarks, on-demand toolchain bootstrapping. v1.0.1 released **Aug 8, 2026** (refactored to client-agnostic routing.json). Works with Claude Code, Kiro, Cursor, Cline, Codex, OpenCode. https://github.com/zhaoxuya520/reverse-skill
- **Piebald-AI/claude-code-system-prompts** — updated within minutes of every Claude Code release; current cut is **v2.1.235 (Aug 18)**. All 27 builtin tool descriptions, subagent prompts (Plan/Explore/Task), utility prompts, plus token counts. CHANGELOG spans 260 versions. Fresh signal for anyone reverse-engineering CC behavior. https://github.com/Piebald-AI/claude-code-system-prompts
- **HKUDS/ClawTeam** — 5.5K stars, v0.2.0 (Mar 23, 2026). Multi-agent swarm CLI (leader spawns worker agents in isolated git worktrees + tmux windows). Compatible w/ Claude Code, Codex, OpenClaw, nanobot, Cursor. Templates: hedge-fund, code-review, research-paper. https://github.com/HKUDS/ClawTeam. Fork w/ OpenClaw defaults: https://github.com/win4r/ClawTeam-OpenClaw
- **BigBodyCobain/Shadowbroker** — self-hosted OSINT platform (ADS-B, AIS, satellites, USGS quakes, CCTV, GPS jamming). Bi-directional agentic AI channel; any HMAC-SHA256-signing agent (Claude Code, GPT, LangChain) can connect as an analyst. https://github.com/bigbodycobain/shadowbroker
- **luchasarie/bro-skill + Dillon Mulroy's dotfiles** — `/bro` skill (7-line SKILL.md) restates the last message in plain English. Hit HN Aug 4 with 100K+ eyeballs. Fun/viral but low substance — noted for context.

## Recurring items (yesterday's digest → today)

- **multica-ai/andrej-karpathy-skills** — Day 31, ~203K stars. Longest-running item in current window.
- **obra/superpowers** — Day 9, ~272K stars (#1 skills framework).
- **affaan-m/ECC** — Day 26, ~241K stars.
- **NousResearch/hermes-agent** — Day 9, ~232K stars.
- **farion1231/cc-switch** — Day 10, ~127K stars.
- **nextlevelbuilder/ui-ux-pro-max-skill** — Day 13, ~118K stars (Chase AI still surfacing).
- **Graphify-Labs/graphify** — Day 27, ~107K stars.
- **DietrichGebert/ponytail** — Day 13, ~104K stars.
- **JuliusBrussee/caveman** — Day 26, ~99K stars (approaching 100K).
- **thedotmack/claude-mem** — Day 13, ~91K stars.
- **Egonex-AI/Understand-Anything** — Day 6, ~80K stars.
- **mattpocock/skills** — Day 2, ~220K stars.
- **OthmanAdi/planning-with-files** — Day 2, ~26.2K stars.

## Sources

- Anthropic blog: https://claude.com/blog-category/announcements
- What's new: https://code.claude.com/docs/en/whats-new
- Havoptic release tracker: https://www.havoptic.com/tools/claude-code
- CVE database: SentinelOne / GitHub advisories / Novee Security
- Aradotso trending: https://github.com/aradotso/trending-skills
- Simon Willison Aug entries: https://simonwillison.net/tags/claude-code/

## Skipped (not enough signal / already covered / older than 72h edge)

- /design command (in yesterday's digest)
- Ralph Wiggum plugin (peaked Q1 2026)
- AAS Core (Aug 17 digest)
- no-ai-slop (Aug 17 digest)
- FlorianBruniaux/claude-code-ultimate-guide (Aug 17 digest)
- alirezarezvani/claude-skills (Aug 17 digest)
- Sculptor by Imbue, CodeGraph, memsearch, etc. (Aug 18 digest)
- ChainDrop npm worm (early Aug, security news but not a tool)
- /bro skill (July 25 build; joke skill)
