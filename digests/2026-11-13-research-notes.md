# Research Notes — 2026-11-13

## YouTube Coverage (Nov 10–13, 2026)

YouTube.com was blocked in this cloud session (DNS resolution fails). All YouTube checks were done via web search only.

| Channel | Subs | Nov 10–13 coverage found? | Notes |
|---|---|---|---|
| @charlieautomates | 8,080 | ❌ | No Nov 2026 videos indexed by search |
| @Chase-H-AI | 109,000 | ❌ | Last indexed content from May 2026 |
| @adrienaidesigner | 4,050 | ❌ | No recent Claude Code content found |
| @indydevdan | 129,000 | ❌ | Last indexed Feb 2026 video on multi-agent orchestration |
| @simonscrapes | 71,800 | ❌ | Last indexed Apr 2026 video on memory systems |
| @UICollectiveDesign | 52,500 | ❌ | No recent content found |
| @DevelopersDigest | 61,500 | ❌ | No specific Nov 2026 content |
| @TechWithTim | 2,000,000 | ❌ | No specific Nov 2026 Claude Code content found |

**Summary:** No creator buzz confirmed this week. No items boosted for multi-creator viral coverage.

---

## Key Signals Found (Past 72h + Trending)

### NEW — Nov 12–13

**Claude for Manufacturing** (Anthropic)
- Announced Nov 12, 2026
- 17 workflow skills covering: quoting/RFQ, non-conformance reports (NCRs), production reporting, maintenance diagnosis, morning reports
- 4 connectors: Autodesk Fusion, Infor, Microsoft 365, Oracle NetSuite
- Webinar scheduled Nov 17: "Put Your Plant's Know-How to Work" + Model Hardware Standard research preview
- Sources: dataconomy.com, unite.ai, pasqualepillitteri.it (all HTTPS-blocked in this session), webinar URL confirmed: claude.com/resources/webinars/...
- Install: via claude.com/plugins (enterprise Cowork plugin, no CLI install confirmed)
- NOTE: This is a Cowork (claude.ai) plugin, not a Claude Code CLI plugin

### NEW — Nov 9–10

**Claude Code v2.1.321**
- Released Nov 9/10 (npm stable was 2.1.311 as of Nov 10)
- Fable 5.2 (claude-fable-5-2) set as default Fable model
- Fast mode: up to 2.5x faster token generation
- Security fixes: MCP OAuth token leakage (secrets sent to wrong host), read-only Bash sandbox bypass
- Source: labmemo.com, newreleases.io
- Install: `npm install -g @anthropic-ai/claude-code@2.1.321`

---

### TRENDING — Appeared on GitHub Weekly Trending (Nov 2–13)

**haydenschmitty/floorplan**
- Interactive codebase map + health check plugin for Claude Code and Codex
- Features: draw map of whole app, show imports/connections, screen-based exploration, ask the map questions, flag exposed keys/open DB tables/unverified webhooks
- Trending since Oct 27; 2,000+ stars gained in that period
- Install confirmed: `claude plugin marketplace add haydenschmitty/floorplan && claude plugin install floorplan@floorplan`
- Source: README fetched directly

**nutlope/hallmark**
- Anti-AI-slop design skill by Hassan El Mghari (Nutlope) and Together AI
- 20 curated visual themes, 65 pre-ship design quality gates
- Works with Claude Code, Cursor, Codex
- 46,953 stars (claudeskills.info, Jun 2026), trending weekly in Nov 2026
- Source: Multiple directories + Medium article from May 2026 launch

**Donchitos/Claude-Code-Game-Studios**
- 49 AI agents + 72 workflow skills for game development with Claude Code
- 18.7k stars (SourcePulse), 5,719 stars gained this week (trendshift)
- MIT licensed, Shell-based framework
- Source: ossinsight.io, aitoolly.com (Nov 2–5 trending coverage)

**thedotmack/claude-mem** ← RECURRING from Nov 10 digest
- Persistent memory for Claude Code + 10+ other agents
- 7,482 stars gained this week (trendshift weekly snapshot)
- Still strongly trending → include as recurring

**bradautomates/claude-video**
- /watch command: downloads video, extracts frames with ffmpeg, pulls captions/transcripts with yt-dlp, hands to Claude
- 13.9k stars, 8.1k installs
- Requires ffmpeg, yt-dlp
- Source: claudeskills.info (Jul 1, 2026), claude.com marketplace

**alirezarezvani/claude-skills**
- 410 skills + 120 agent configs for Claude Code, Codex, Gemini CLI, Cursor, 8+ coding agents
- Covers engineering, marketing, product, compliance, C-level, research, finance
- 19.8k stars (ossinsight, Jul 2026 snapshot)
- Source: GitHub releases page, multiple directories

**digitalsamba/claude-code-video-toolkit**
- Full video production pipeline in Claude Code using open-source AI models
- Script, AI voiceover, music, video clips, render — all from Claude Code
- 2.3k stars
- Source: awesome.ecosyste.ms (Aug 2026)

**linny006/trending-claude-skills**
- Auto-updated leaderboard of trending claude-skills and AI agent repos
- Refreshed every 15 minutes
- Meta-tool for discovering what's rising
- Source: GitHub search result, confirmed repo exists

---

## Dedup Check

Already covered in recent digests (SKIP):
- thedotmack/claude-mem → Nov 10 digest → keep as RECURRING only
- anthropics/claude-plugins-official Nov batch → Nov 10 digest
- anthropics/skills additions → Nov 10 digest
- claude-code v2.1.319 → Nov 10 digest (v2.1.321 is NEWER → include)
- anthropic-fable-5-2 model → Nov 12 digest (but v2.1.321 making it default is new)
- mksglu-context-mode, pstack-claude, reticle, ECC, etc. → Nov 12 digest

## Anthropic News

- **Claude Fable 5.2** + **Claude Mythos 5.2**: Released Nov 9, 2026 (covered Nov 12 digest)
- **Anthropic IPO**: Targeted week of Nov 16, aiming to raise ~$100B. Revenue $33.24B for 9 months through Sep 30, 2026.
- **Claude for Manufacturing**: Announced Nov 12. Webinar Nov 17.
- **Plugin management change**: Starting Nov 30, Enterprise plugins stop working in Cowork/Code tab where Skills is turned off.
