# Research Notes — 2026-08-07

## YouTube Coverage

Checked all 8 channels from sources/youtubers.json. YouTube domain is blocked from WebFetch; used web search to identify recent content.

### @charlieautomates (Charlie Automates — 8K subs)
- **"Stop Hiring a CMO. Build One In Claude Code Instead."** — published ~1 week ago
  - Covers: Graphify (knowledge graph), CARL (domain-specific CLAUDE.md loader), advertising-ops skill, SEED, PAUL frameworks. No new third-party repo coverage beyond the Charlie OS stack.
- No new third-party tool discovery this week from this channel.

### @Chase-H-AI (Chase AI — 109K subs)
- **"Turn Claude Into A Design GENIUS In 3 Simple Steps"** — published ~2 weeks ago
  - Covers design skill workflow; no specific repo name extractable from search snippets
- **"This Skill Turns Fable 5 & GPT 5.6 Into Web Design MONSTERS"** — published ~1 month ago
  - Likely covers ui-ux-pro-max-skill or hallmark (strong design skill signal)
- No Claude Code content in strict past 7 days confirmed.

### @simonscrapes (Simon Scrapes — 71.8K subs)
- No new Claude Code content in past 7 days confirmed from search results.

### @indydevdan (IndyDevDan — 129K subs)
- No specific new video from past 7 days identified in search results.

### @UICollectiveDesign, @DevelopersDigest, @TechWithTim, @adrienaidesigner
- No new Claude Code content in past 7 days confirmed.

**YouTube signal this week:** Low. Only @charlieautomates had a video in the past week, focusing on his own system (no boostable third-party repos). No items qualify for creator_buzz boosting this cycle.

---

## Anthropic Official (HIGH SIGNAL)

### Claude Code 2.1.224 — August 7, 2026
Major release with several enterprise-grade features:
- **`claude self-hosted-runner`**: Run Claude Code sessions on your own machines/containers (Team/Enterprise plans). Fixed/On-demand runner modes. Sessions routed via claude.ai admin settings.
- **Cross-session messaging**: `SendMessage` and `ListAgents` tools let Claude Code sessions message each other across machines (macOS/Linux). New `crossSessionInbound` / `dialogExpiry` settings.
- **Removed 200-subagent-per-session spawn cap**: Long-running sessions no longer refuse new agents. Concurrency/depth limits still apply.
- **Archive plugin source**: Install plugins from zip over HTTPS without git/npm; optional SHA-256 pinning.
- **Advanced sandbox credential masking**: JWT-aware masking with `maskClaims`, AWS SigV4 re-signing.
- **Bedrock region preference**: `ANTHROPIC_BEDROCK_REGION_PREFIX` env var.
- Source: https://code.claude.com/docs/en/changelog

---

## GitHub Topics / High-Star New Items

### cc-switch (farion1231/cc-switch) — 125,400 stars
- Cross-platform desktop All-in-One for Claude Code, Claude Desktop, Codex, Gemini CLI, Grok Build, OpenCode, OpenClaw, Hermes Agent
- 50+ provider presets, unified MCP & Skills management, cloud sync (Dropbox/iCloud/WebDAV), cost analytics
- Tauri + web technologies; macOS/Windows/Linux
- Install: `brew install --cask cc-switch`
- NOT in submissions.json; NOT in any recent digest
- Crossed 104K milestone article from Augment Code; now at 125.4K

### ui-ux-pro-max-skill (nextlevelbuilder/ui-ux-pro-max-skill) — 114,400 stars
- Design System Generator: 84 UI styles (Glassmorphism, Claymorphism, Brutalism, Bento Grid, AI-Native UI...), 192 color palettes, 74 font pairings, 22 tech stacks
- 161 industry-specific reasoning rules across 34 product categories
- v2.0 introduced flagship Design System Generator feature
- Install: `npm install -g ui-ux-pro-max-cli && uipro init --ai claude`
- Supports 14+ AI coding tools
- NOT in submissions.json; NOT in any recent digest

### ponytail (DietrichGebert/ponytail) — 98,100 stars
- Forces laziest solution: 7-rung decision ladder, YAGNI, stdlib-first, one line > fifty
- Benchmarks: ~54% less code (up to 94%), ~20% cheaper, ~27% faster
- Preserves security, accessibility, validation (unlike caveman which only targets prose)
- Install: `/plugin marketplace add DietrichGebert/ponytail`
- NOT in submissions.json; NOT in any recent digest

---

## Recurring Trending Items (from prior digests, still active)

| Slug | Stars | Day Count | Notes |
|------|-------|-----------|-------|
| ecc | 239K | Day 15 | Ecosystem leader |
| andrej-karpathy-skills | 194K | Day 21 | Still most-cited CLAUDE.md |
| graphify | ~104K | Day 16 | 70x cost cut, strong |
| caveman | 96.7K | Day 15 | Canonical output-token tool |
| claude-mem | 90K | Day 2 | Memory compression, fast growing |
| open-design | 82.9K | Day 8 | Design engine |
| understand-anything | 77.8K | Day 12 | Codebase KB graph |
| oh-my-openagent | 67.4K | Day 2 | Multi-agent orchestration |
| headroom | 63.1K | Day 10 | 92% token savings on search |
| hallmark | 19.2K | Day 11 | Anti-slop design |
| context-mode | 19.6K | Day 5 | 98% context reduction |

Dropped from rotation today (stale/lower priority): composio-awesome-claude-skills (Day 3 → Day 4), drawio-skill (Day 2 → Day 3), i-have-adhd (Day 2 → Day 3), claude-opus-5 (Day 3 → Day 4). All are still valid recurring items for tomorrow if space opens.

---

## Other Signals

- **Simon Willison** (simonwillison.net, domain blocked): Jul 31 post "Stateless MCP has recaptured my interest" mentioned `mcp-explorer` and `datasette-mcp` tools. Could not fetch details; noting for future tracking.
- **MCP catalog**: Crossed 9,800 servers, Playwright MCP now #1 most-used globally.
- **Hermes Agent**: 227K stars in GitHub topics (already in submissions.json).
- **oh-my-openagent**: 67.4K stars confirmed, Day 2 in digest.

---

## Elapsed Time
Research completed at ~300s (5 minutes). Well within 20-minute cap.
