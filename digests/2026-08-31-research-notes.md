# Research Notes — 2026-08-31

## Research window
Started: ~08:28 UTC | Elapsed at checkpoint: ~8 min | Hard cap: 20 min

## YouTube coverage

### @charlieautomates (8K subs)
- Recent video: "Build an Agentic OS in 3 Steps (2026 Claude Code Tutorial)" — covers Graphify + SEED + PAUL + Hermes + Railway
- Also covered: "Claude Code + Graphify = Local RAG (Unlimited Memory)" — Graphify deep-dive
- Graphify has been Charlie's recurring focus this week; covered in Aug 28–29 digests already
- No new Claude Code videos in the past 72h identified beyond the Agentic OS one (older than 72h)

### @Chase-H-AI (109K subs)
- Recent: claudex-loop (Chase AI's own 4-phase plan hardening skill for Claude Code)
- Blog posts active; no specific new YouTube video identified from Aug 28–31 directly
- claudex-loop repo: github.com/chaseai-yt/claudex-loop (four-phase plan hardening; install via /plugin marketplace add chaseai-yt/claudex-loop)

### @indydevdan (129K subs)
- "The August 2026 AI Coding Championship" — compares Claude Code vs Codex vs Qwen3.8-Max vs Kimi K3 on same tasks; posted ~1 month ago
- No new Claude Code-specific videos identified from Aug 28–31

### @simonscrapes (71.8K subs)
- No new Claude Code-specific videos identified from Aug 28–31; last identified coverage was weekly limits update (in older digests)

### @UICollectiveDesign (52.5K subs)
- No new Claude Code-specific videos from Aug 28–31 identified

### @DevelopersDigest (61.5K subs)
- No specific video identified in past 72h

### @TechWithTim (2M subs)
- No specific Claude Code video from Aug 28–31 identified

### @adrienaidesigner (4K subs)
- No specific video identified in past 72h

## Key discoveries

### Official Anthropic (past 72h)
1. **Compliance API expansion to Claude Code** (Aug 26) — GA for Enterprise; logs Claude Code CLI and desktop app sessions (text, tool_use, tool_result blocks) through the same Compliance API as Claude chat. Covers bash commands, reads/writes, MCP tool calls. Admins can audit local Claude Code agent sessions. Source: claude.com/blog/compliance-api-cowork-and-claude-code
2. **Claude Code weekly limits EXPIRE TODAY** (Aug 31) — +50% boost ends at 11:59 PM PT tonight; 3rd extension, no permanent commitment.
3. **Claude Code v2.1.248** (Aug 27) — `--restricted` flag, `experimental.cacheTtl`, cross-session messaging on Bedrock/Vertex. (Already in Aug 28 digest as v2.1.247–250)
4. **Claude Code v2.1.247** (Aug 26) — `/claude-api cost-optimize` command. (Already in Aug 28 digest)

### Enterprise MCP (Aug 24)
- Enterprise-managed auth for MCP connectors GA — admins authorize once, employees get it automatically. Likely in Aug 24–25 digests (not confirmed via direct read, but falls outside 72h window from Aug 31).

### Community — new (not in recent digests)
1. **alirezarezvani/claude-skills** — 380 skills, 30+ agents, 70+ custom commands, updated Aug 31. 25.3K stars.
2. **jeremylongshore/tons-of-skills-marketplace** — 471 plugins, 3,069 skills, 347 agents, ccpi CLI package manager.
3. **anthropics/claude-plugins-community** — Anthropic's official read-only mirror of 2,282+ security-scanned community plugins.

### Community — recurring (still trending)
- **obra/superpowers** (272K, Day 20)
- **mattpocock/skills** (220K, Day 12)
- **hermes-agent** (238K, Day 6)
- **ui-ux-pro-max-skill** (121K, Day 9)
- **garrytan/gstack** (~90K, Day 9)
- **graphify** (112K, Day 6) — Charlie Automates coverage
- **caveman** (~102K, Day 8)
- **claude-mem** (92.6K, Day 8)
- **understand-anything** (81K, Day 5)
- **cathrynlavery/diagram-design** (25.7K, Day 9)
- **video-shotcraft** (6.8K, Day 4)
- **generative-media-skills** (3.4K, Day 2)

### Dropped (fading)
- **cc-switch** (130K, Day 21) — recurring too long, dropping
- **agentic-awesome-skills** — in Aug 29, 30 digests; gave way to newer items
- **autoharness**, **memsearch**, **claude-octopus** — from Aug 30; too small / Day 2

## Dedup check
- All submissions.json slugs checked — no slug collisions with new items
- All items from Aug 28–30 digests reviewed; only recurring items brought forward where still trending

## GitHub ecosystem stats (Aug 31)
- awesome-claude-plugins tracker: 36,457 total Claude Code repositories indexed
- anthropics/claude-plugins-community: 2,282 community plugins
- alirezarezvani/claude-skills: updated today (Aug 31)
