# Research Notes — 2026-09-10

## Summary
Research window: past 72 hours (Sept 7–10, 2026). Elapsed at close: ~300s.

---

## YouTube Coverage

### @charlieautomates (Charlie Automates, ~8K subs)
- **"Don't Setup a Claude Code Second Brain Until You Watch This"** — posted ~Sept 3, 2026 (~1 week ago). Covers the second-brain skill ecosystem, warns about common pitfalls in obsidian-based second brain setups. Promotes their "Charlie OS" personal system but also references `eugeniughelbur/obsidian-second-brain` and the broader second-brain skill category.
- **"SEED + PAUL = Claude Code Meta"** — covers ChristopherKahler/seed + ChristopherKahler/paul as a combined design → execution workflow. Charlie calls this the "Claude Code Meta nobody's talking about." Exact date unclear but within ~2 weeks.
- Prior Charlie content: "The Karpathy Method That 10x'd My Claude Code" (June 17) — outside 72h.

### @Chase-H-AI (Chase AI, ~109K subs)
- Featured `chaseai-yt/claudex-loop` previously (captured in Sept 9 digest). No new confirmed content in 72h window from search.

### @indydevdan (IndyDevDan, ~129K subs)
- "This MCP Gives Claude Code 600,000+ Real Design References" — published July 7, 2026. About the Mobbin MCP for 600K+ UI design references. Outside 72h window, not included in today's digest as a new item.
- "Claude Code Deep Mastery" playlist active.

### @simonscrapes (Simon Scrapes, ~71.8K subs)
- No specific content confirmed within 72h window. Known for quick coverage of new Claude Code feature drops; likely covered 2.1.267 soon after release.

### @TechWithTim (Tech With Tim, ~2M subs)
- No new content confirmed within 72h window.

### @UICollectiveDesign, @adrienaidesigner, @DevelopersDigest
- No specific content confirmed within 72h window.

---

## Anthropic Releases (Sept 7–10)

### Claude Code 2.1.267 — September 9, 2026
- `maxEffortLevel` setting: caps effort level on every provider (Bedrock, Vertex, Foundry)
- `--system-prompt-snapshot off`: renders system prompt fresh every request
- 30+ bug fixes: major prompt-cache stability improvements (mid-session MCP/plugin tools, resumed sessions, model switching, subagents), VSCode fixes (cyclic parent links 100% CPU hang, WSL2 paste, CRLF edits, RTL text, Remote-SSH), Claude Code web fixes, Claude Tag fixes
- 1 GB cap on tool results saved to disk with truncation notice

### Claude Code 2.1.266 — September 8, 2026
- Critical fix for CLAUDE_CODE_USE_GATEWAY regression breaking API-key/proxy setups

### Claude Code 2.1.265 — September 8, 2026
- Plugin directory support (`--plugin-dir` points at folder, hot-reloads)
- `/skill-doctor` (also in 2.1.261)
- Live Workflow view overhaul

### Claude Fable 5.1 / Claude Mythos 5.1 — September 1, 2026
- Fable 5.1: 75% cache read price drop (covered from Day 1, today Day 10)
- Mythos 5.1: identical model with different safeguard levels, limited to vetted cyberdefenders and life scientists in the US

---

## New GitHub Items (Past 72h)

### eugeniughelbur/obsidian-second-brain — ~4.4K stars
- Persistent memory for Claude Code + 6 other CLI agents via Obsidian vault
- 45 commands: hybrid semantic search, self-rewriting notes, keyless web research, scheduled background agents
- Hit 1,024 stars in 7 weeks; now at 4.4K
- Charlie Automates covered second-brain category (inc. this repo) ~1 week ago
- Install: `/plugin marketplace add eugeniughelbur/obsidian-second-brain && /plugin install obsidian-second-brain@obsidian-second-brain`

### ChristopherKahler/paul + ChristopherKahler/seed — PAUL: 1.2K stars, SEED: 281 stars
- PAUL (Plan-Apply-Unify Loop): structured AI dev loop that closes every plan with UNIFY, preventing context rot
- SEED: type-aware project incubator, guided exploration from raw idea → structured plan → PAUL handoff
- Charlie Automates: "SEED + PAUL = Claude Code Meta"
- Install: `npx paul-framework@latest init` + `/plugin marketplace add ChristopherKahler/seed`

### elementalsouls/Claude-BugHunter — ~4.4K stars
- Drop-in skill bundle for bug hunting and external red-team work
- 82 skills, 15 slash commands, 681 disclosed HackerOne patterns across 24 vulnerability classes
- Enterprise identity + infrastructure attack matrices
- Trending on trendshift.io
- Install: `/plugin marketplace add elementalsouls/Claude-BugHunter && /plugin install claude-bughunter@claude-bughunter`

---

## Recurring / Ongoing Items

| Item | Stars | Days Featured |
|------|-------|---------------|
| obra/superpowers | ~272K | Day 30 |
| andrej-karpathy-skills | ~209K | Day 11 |
| ECC (affaan-m/ECC) | 254K | Day 3 |
| DietrichGebert/ponytail | 128.6K | Day 5 (comeback) |
| JuliusBrussee/caveman | 103.9K | Day 19 |
| oh-my-openagent | 68.8K | Day 5 |
| orca | 62.6K | Day 6 |
| understand-anything | 54.7K | Day 2 |
| agentic-awesome-skills | 45.4K | Day 2 |
| claude-code-limits-sept14 | — | Day 14 (3 days to cutover) |
| fable-5-1 | — | Day 10 |

## Dropped / Fading (not included today)
- impeccable-4 (66.5K) — Day 3, dropped to make room for new
- context-mode (21.6K) — Day 2, lower than understand-anything
- ARIS (14.2K) — Day 2, lower stars
- claudex-loop (1.7K) — Day 2, lowest stars
