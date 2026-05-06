# Research Notes — 2026-05-06

Research started: 2026-05-06 16:04 UTC  
Research ended: ~16:13 UTC (536s elapsed)

---

## YouTube Coverage

### @charlieautomates (8,080 subs)
- Posted "You Need To Change How You Use Your Claude Code Sessions" (1 day ago, ~May 5)
- Posted "Claude just got another superpower..." (recent, title only — 403 on YouTube page fetch)
- Previously covered **graphify** (safishamsi) as "the core of their replaces OpenClaw context-management stack" — this coverage is still live
- No new specific tool mentions extracted this run (YouTube 403 errors on fetch)

### @Chase-H-AI (109K subs)
- Blog (chaseai.io) active on Claude Code skills and plugins  
- No specific new videos within 72h confirmed

### @indydevdan (129K subs)  
- "Claude Code Deep Mastery" playlist active  
- "8 Claude Code Skills Every Developer Needs in 2026" video in results  
- No specific new tools in past 72h confirmed via search

### @simonscrapes (71.8K subs)
- Memory systems comparison featuring claude-mem was earlier this week (still in May 5 digest)  
- No new specific tool coverage confirmed for May 4–6

### @adrienaidesigner (4,050 subs)
- No content found in past 7 days for Claude Code

### @UICollectiveDesign (52,500 subs)
- No specific video in past 7 days found

### @DevelopersDigest (61,500 subs)
- Blog post "Best Claude Code Skills in 2026" active  
- No specific new video in past 72h confirmed

### @TechWithTim (2M subs)
- No specific Claude Code content in past 72h confirmed

**Viral signal this run:** No item confirmed with 2+ YouTuber coverage in past 7 days (graphify still carries @charlieautomates signal from prior coverage).

---

## GitHub Trending (May 6)

From direct trending page fetch and searches:

| Repo | Stars | Notes |
|------|-------|-------|
| addyosmani/agent-skills | 29.7k | Production-grade skills by Addy Osmani (Google Chrome PM) |
| Hmbown/DeepSeek-TUI | 12.9k | Rust TUI for DeepSeek; MCP support but not Claude-specific |
| InsForge/InsForge | 8.3k | Postgres backend built for AI coding agents |
| virattt/dexter | 24.2k | Autonomous financial research agent |
| bytedance/deer-flow | 65.4k | Long-horizon SuperAgent (Python) — not Claude-specific |

---

## GitHub Topics — claude-code (recently updated)

Notable recent items (not in submissions.json or recent digests):
- **gossipcat-ai** (25 stars) — multi-agent code review orchestration
- **claudette** (26 stars) — Claude Code companion tool
- **engram** (16 stars) — local-first context compression
- **agentplane** (42 stars) — audit layer for coding agents
- **agentic-bootstrap** (2 stars) — one-shot host setup for AI agents

---

## Confirmed New Candidates (verified, not in submissions or recent digests)

### mattpocock/skills ★ 62.6k (HIGH PRIORITY)
- Skills for Real Engineers — directly from TypeScript educator Matt Pocock's .claude directory
- 60,000 newsletter subscribers; trending on GitHub ~May 2–3
- Key skills: grill-me, tdd, to-issues, to-prd, diagnose, caveman (token-compressed comms), zoom-out
- install: `npx skills@latest add mattpocock/skills`
- NOT in any recent digest or submissions.json

### addyosmani/agent-skills ★ 29.7k (HIGH PRIORITY)
- By Addy Osmani (Google Chrome engineering manager, web performance book)
- 7 slash commands (/spec, /plan, /build, /test, /review, /code-simplify, /ship) across 20 skills
- "Anti-rationalization tables" — documents excuses agents use to skip steps with counter-arguments
- Google engineering practices: Hyrum's Law, test pyramid, Beyonce Rule, Chesterton's Fence
- install: `/plugin marketplace add addyosmani/agent-skills`
- NOT in any recent digest or submissions.json

### claudian ★ 10.3k (HIGH PRIORITY)
- Obsidian plugin embedding Claude Code/Codex directly in vault
- Vault becomes the agent's working directory; @mention system, inline edit with word-level diff
- MCP server integration, plan mode, multi-tab conversation history
- install: Download from GitHub releases, place in vault/.obsidian/plugins/claudian/
- NOT in any recent digest or submissions.json

### InsForge ★ 8.3k (MEDIUM-HIGH)
- Postgres backend with auth, storage, compute, AI gateway — semantic layer built for coding agents
- 1.6x faster, 30% fewer tokens, 1.7x higher accuracy vs Supabase on agent benchmark
- Apache 2.0, Docker Compose self-hosted; Claude Code integrates via MCP server
- install: `git clone + docker compose -f docker-compose.prod.yml up`
- NOT in any recent digest or submissions.json

### sangrokjung/claude-forge ★ 660 (v3.0.2 May 3)
- oh-my-zsh for Claude Code — 11 specialized agents, 36 slash commands, 24 skills, 15 hooks, 9 rule files
- 6-layer security hooks, 5-minute install, v3.0.2 released May 3
- install: `/plugin marketplace add sangrokjung/claude-forge`
- NOT in any recent digest or submissions.json

---

## Official Anthropic Updates (past 72h)

### Claude Code v2.1.129 (May 6, 01:40 UTC) — FRESH
- `--plugin-url <url>` flag to fetch plugin .zip from URL (no need to clone repo)
- `CLAUDE_CODE_PACKAGE_MANAGER_AUTO_UPDATE` for background Homebrew/WinGet auto-upgrade
- Ctrl+R history picker now searches ALL prompts across ALL projects (was per-session)
- Experimental `themes` and `monitors` moved under `"experimental": {}` in plugin manifests
- Multiple bug fixes: /clear, /context token waste, UI/UX
- v2.1.131 (May 6, 07:47) followed with VS Code Windows fix and Mantle auth fix

### Anthropic Finance Agents + Microsoft 365 (announced May 5)
- URL: https://www.anthropic.com/news/finance-agents
- 10 ready-to-run agent templates: pitch builder, meeting preparer, earnings reviewer, model builder, market researcher, KYC screener, valuation reviewer, general ledger reconciler, month-end closer, statement auditor
- Each ships as a plugin in Claude Cowork AND Claude Code, and as a cookbook for Managed Agents
- M365 add-ins: Excel, PowerPoint, Word (Outlook coming soon); context carries between apps
- New data connectors: Dun & Bradstreet, Guidepoint, IBISWorld, Verisk + Moody's MCP app (600M+ companies)
- Partner plugins from Goldman Sachs, Blackstone integration announced same day

---

## Items from May 1 Digest (5 days ago) — Potential Recurring

These were in the May 1 digest but NOT in May 3, 4, or 5:
- graphify (36.3k stars) — @charlieautomates coverage ongoing
- claw-code (185k+ stars) — Rust rewrite of Claude Code
- wshobson/agents (34.5k stars)  
- last30days-skill (24.5k stars)
- claude-code-best-practice (47.6k stars)
- VoltAgent/awesome-agent-skills (19.2k → 20.4k stars)
- antigravity-awesome-skills (35.8k stars)
- claude-code-plugins-plus-skills / jeremylongshore (2k+ stars)

Items in May 4 but NOT May 5:
- hermes-agent (131k stars)
- superpowers (178k stars)
- everything-claude-code (173k stars)
- career-ops (42.1k stars)
- garrytan-gstack (82.7k stars)

---

## HN Signal
- HN Algolia API returned 403 (blocked)
- Web search confirmed HN has active Claude Code discussion but no specific breakout story in past 72h

## Reddit Signal
- No specific Reddit post extracted for past 72h (search limitations)

## Blogs
- Simon Willison published "Vibe coding and agentic engineering are getting closer than I'd like" on May 6 — covers Claude Code philosophy, no new tools surfaced
- latent.space: [AINews] Agents for Everything Else article was recent but 403 on fetch

---

## SKIPPED / LOW SIGNAL
- DeepSeek-TUI: No Claude Code integration mentioned; DeepSeek-specific
- Hmbown/DeepSeek-TUI: Same
- bytedance/deer-flow: Not Claude Code specific
- agentplane (42 stars), claudette (26 stars), engram (16 stars): Too early-stage
- levnikolaevich/claude-code-skills (454 stars): Replaced by claude-forge for better signal
