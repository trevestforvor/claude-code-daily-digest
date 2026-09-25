# Research Notes — 2026-09-25

## Research Window
72 hours: September 22–25, 2026.

---

## YouTube Coverage

### @Chase-H-AI (Chase AI, 109K subs)
- "The #1 Claude Code Design Skill Just Got a HUGE Upgrade" (Aug 4, 2026) — covered Impeccable 4.0 (already in submissions.json)
- "Turn Claude Into A Web Design Genius in 3 Steps With Seedance 2.5" (Aug 23, 2026) — covered Seedance 2.5 video generation skills
- No new videos in past 72h found. Most recent content ~Aug 23.

### @charlieautomates (Charlie Automates, 8K subs)
- "5 Claude Plugins You Needed YESTERDAY" (~1 month ago from search results) — no specific items extractable this run
- "If you're using Claude Code, you need to install these 5 AI plugins and skills" (recent Shorts) — mentions find-skills
- No new specific items confirmed in past 72h.

### @indydevdan (IndyDevDan, 129K subs)
- No new Claude Code videos confirmed in past 72h from web searches (channel active ~4 weeks ago per listing).

### @simonscrapes (Simon Scrapes, 71.8K subs)
- Most recent Claude Code content found: "How Anthropic Teams ACTUALLY use Claude Code day to day" (June 5, 2026)
- No new videos in past 72h confirmed.

### @UICollectiveDesign (UI Collective, 52.5K subs)
- "Claude Code can finally design: I tested /design (Claude Code CLI)" found but from August 2026
- No new September videos confirmed.

### @DevelopersDigest (Developers Digest, 61.5K subs)
- No specific new videos found in past 72h.

### @TechWithTim (Tech With Tim, 2M subs)
- No new Claude Code specific content found in past 72h.

### @adrienaidesigner (Adrien | AI Designer, 4K subs)
- No new content found.

**YouTuber coverage summary**: No clear multi-YouTuber coverage of a single item this week to trigger viral boost. Chase AI covered Seedance 2.5 in August. Most channels appear to be on a weekly-to-monthly cadence.

---

## Key Anthropic Releases (Past 72h)

### Claude Code v2.1.282 (September 24, 2026)
- Added `maxProseWidth` setting: caps prose width in wide terminals while tables/code blocks keep full width
- Added `allowClaudeInChromeWithManagedMcp` managed setting: lets `claude --chrome` run alongside an exclusive `managed-mcp.json`
- Added startup notice + `/status` and `claude doctor` entries listing telemetry variables
- Added `store.readiness_grace_seconds` to the Claude apps gateway
- Added scrollbar to `/feedback` drafts list in fullscreen mode
- Fixed: requests failing with 400 error in conversations with decryption-failed web search history

### Claude Opus 5.5 (September 22, 2026) — MODEL LAUNCH
- Fable 5.1-level performance at 40% lower cost than Opus 5
- Pricing: $4/$20 per MTok (in/out), $0.20/MTok cache reads, 30% faster
- 1M token context window, 128k max output, always-on adaptive thinking
- Enhanced safety: strongest model on behavioral audit; better prompt injection resistance
- Available: AWS, Google Cloud, Microsoft Azure; API ID: `claude-opus-5-5`
- **Note**: Claude Code v2.1.280 default switch was covered in Sept 23 digest. The model page/pricing deserves separate entry.

---

## High-Signal Ecosystem Items (Past 72h)

### AgriciDaniel/claude-seo — v2.4.0 (September 24, 2026)
- 17,547 stars, 2,572 forks as of Sept 24
- v2.4.0 adds `/seo` agentic audit for AI agent readiness (Lighthouse, WebMCP, llms.txt)
- Optional Matomo extension; installer keeps secrets off command line
- MIT licensed, 26 sub-skills + 19 sub-agents covering all major SEO verticals
- Primary URL: https://github.com/AgriciDaniel/claude-seo

### google/artemis (September 9, 2026)
- 9,800 stars, 974 forks as of late Sept 2026
- Android automation framework with MCP server integration for Claude Code, Codex, Antigravity, Windsurf
- 99%+ success rate on AndroidWorld Benchmark
- Apache 2.0, by Google's Pixel Test Engineering team
- One-click install: `git clone https://github.com/google/artemis.git && cd artemis && ./start.sh`

### getappz/lean-ctx
- 2,330+ stars (June 2026 baseline)
- Context intelligence layer for AI agents: one local Rust binary, 76 MCP tools
- 60–90% fewer tokens as receipt; AST-aware compression, session caching
- Local-first, works with Claude Code, Cursor, Copilot, Windsurf, Codex, Gemini

### rohitg00/awesome-claude-design
- 1,102 stars (DESIGN category — top priority)
- DESIGN.md prompts organized by aesthetic families: brutalist, cinematic, data-dense, editorial, glass, indie, playful, remix, terminal, warm
- Includes remix recipes, video teardowns, community showcase
- Companion to rohitg00/awesome-claude-code-toolkit (covered Sept 16)

### jeurtr/seedance-skill
- Comprehensive Claude Code skill for ByteDance Seedance 2.5
- 30-second native 4K video generation; multimodal references (30 images, 10 videos, 10 audio)
- Consolidates 6 community repos into one skill file
- Covered by Chase AI (Aug 23 video)

### AgriciDaniel/claude-blog (v2.2.0 Aug 2026)
- 1,200 stars; 30 sub-skills + 5 agents for blog content
- 5-gate Blog Delivery Contract (v1.9.0); dual-optimized for Google + AI citations
- MIT licensed; same creator as claude-seo

### ghuntley/how-to-ralph-wiggum
- 1,200–1,400 stars; viral "autonomous loop" technique for Claude Code
- Ralph Wiggum technique: pure shell loop that re-prompts the agent on each stop until objective criteria (compiler, linter, tests) pass
- Going viral on social media; named after Simpsons character
- Also: anthropics/claude-code official ralph-wiggum plugin in main repo

### claude-world/trend-pulse
- Free trending topics aggregator: 20 sources, zero auth
- CLI + Python library + MCP Server
- Returns normalized scores 0–100 for cross-platform trend comparison
- Works with Claude Code via `@trend-pulse`

---

## Dedup Check
- ARTEMIS: not in submissions.json or recent digests ✓
- lean-ctx: not in submissions.json or recent digests ✓ 
- claude-seo: not in submissions.json or recent digests ✓
- claude-blog: not in submissions.json or recent digests ✓
- awesome-claude-design: not in submissions.json (awesome-claude-code-toolkit was covered Sept 16 but different repo) ✓
- seedance-skill: not in submissions.json or recent digests ✓
- ralph-wiggum: not in submissions.json or recent digests ✓
- trend-pulse: not in submissions.json or recent digests ✓
- claude-opus-5-5: not in submissions.json; Sept 23 covered v2.1.280 Claude Code default switch, not the model page itself ✓
- v2.1.282: not yet covered (v2.1.280 was in Sept 23 digest) ✓

---

## Elapsed Research Time
~10 minutes
