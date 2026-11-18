# Research Notes — 2026-11-18

## Summary of Research Process
- Research started at approximately 2026-11-18T00:00 UTC
- Elapsed research time: ~7 minutes of 20-minute cap used
- YouTube was blocked (youtube.com not in allowed domains) — used search aggregators and podwise.ai

## YouTube Coverage (past 7 days)
YouTube direct access was blocked in this cloud session. Searched via aggregators:

- **@indydevdan** — No confirmed videos from Nov 15-18, 2026. Last confirmed content found: Feb 9, 2026 (Claude Code multi-agent + Opus 4.6).
- **@Chase-H-AI** — No confirmed November 2026 videos. Last confirmed: May 2026 "10 open-source Claude Code tools" roundup.
- **@charlieautomates** — No confirmed November 2026 videos. Last confirmed: Feb 23, 2026.
- **@simonscrapes** — No confirmed November 2026 videos. Last confirmed: April 2026.
- **@UICollectiveDesign, @TechWithTim, @DevelopersDigest** — Not checked directly (YouTube blocked). No aggregator hits for November 2026.

**Notable signal from aggregators:** A video titled "Claude Code Has a Plugin Problem" was uploaded 2026-11-16 (creator not identified). Referenced in a NeuralTrust security analysis about 317 plugins on the official marketplace.

## High-Signal Candidates Found

### Anthropic Official
1. **Claude Fable 5.2 / Mythos 5.2** (Nov 9, 2026)
   - 30% faster than Fable 5.1
   - Price cut: $8/$40 per 1M tokens (down from $10/$50) = 20% reduction
   - 55% fewer blocks overall
   - Available in Claude Code with 1M token default
   - Fast mode: 2.5x speed at 2x price
   - URL: https://www.anthropic.com/claude/fable
   
2. **Claude Code 2.1.327** (Nov 17, 2026)
   - `claude mcp add-json <name> -` reads JSON from stdin
   - `/tui classic` for non-fullscreen renderer
   - `/status` lists broken files, keybinding errors
   - VS Code: "Add to Chat" in Explorer right-click
   - URL: https://code.claude.com/docs/en/changelog

### GitHub Trending (Today, Nov 18)
From github-trending-daily issue #39 and direct GitHub trending:
- affaan-m/ECC — 305,828 stars, trending
- alibaba/open-code-review — 54,100 stars, trending
- obra/superpowers — 319,549 stars (already in Nov 15 digest)
- mvanhorn/last30days — 69,376 stars (already in Nov 16 digest)
- google-labs-code/stitch-skills — 10,209 stars (already in Nov 16 digest)
- elementalsouls/Claude-BugHunter — 9,890 stars (already in Nov 16 digest)
- cursor/plugins — 16,988 stars, trending
- ag-ui-protocol/ag-ui — 20,160 stars, trending
- backnotprop/plannotator — 13,181 stars, trending
- yetone/magpie — 38,600 stars, updated today
- kyegomez/swarms — 7,400 stars, updated today

### New Items Verified
3. **affaan-m/ECC** — Everything Claude Code harness, 305K stars, AgentShield security scanner, 156-311 skills
4. **alibaba/open-code-review** — Alibaba AI code review CLI, 54.1K stars, explicit Claude Code plugin
5. **yetone/magpie** — Cross-platform model router (38.6K stars), Claude Code + all agents, failover/cost tracking
6. **ag-ui-protocol/ag-ui** — AG-UI 1.0 open protocol for agent→frontend (20.4K stars)
7. **backnotprop/plannotator** — Browser-based agent review surface (13.3K stars)
8. **cursor/plugins** — Official Cursor plugin marketplace (17.1K stars) with .claude-plugin support
9. **kyegomez/swarms** — Enterprise multi-agent Python framework (7.4K stars), MCPDeployer
10. **czlonkowski/n8n-skills** — 14 n8n workflow skills for Claude Code (6.7K stars)
11. **homeassistant-ai/ha-mcp** — Home Assistant MCP server (3.9K stars), 85+ tools
12. **Tencent/LoopForge** — Self-hosted agent team workspace (3.8K stars)
13. **slackapi/slack-skills-plugin** — Official Slack plugin (170 stars) with Slack MCP

## Dedup Check
All 13 candidates verified NOT in submissions.json or digests from last 7 days.

## Items Dropped (in recent digests)
- obra/superpowers (Nov 15)
- addyosmani-agent-skills (Nov 14, 15, 16) — fading
- sickn33-agentic-awesome-skills — fading
- mvanhorn/last30days (Nov 16)
- google-stitch-skills (Nov 16)
- elementalsouls/Claude-BugHunter (Nov 16)
- wanshuiyin/ARIS (Nov 15)
- JuliusBrussee/caveman (Nov 17)
- claude-code-v2-1-326 (Nov 17)
- thedotmack-claude-mem (multiple days) — fading
- zenstory items — fading

## Plugin Marketplace Context
Per NeuralTrust (Nov 9, 2026): 317 official plugins on Anthropic's marketplace; 263 point to external sources. Context7 at 417,801 installs, GitHub plugin at 319,381 installs.
