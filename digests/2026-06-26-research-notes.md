# Research Notes — 2026-06-26

## YouTube Coverage

Checked all 8 curated creators for content published June 19-26, 2026.

### Active this week:
- **@simonscrapes (71.8K subs):** Posted "Watch This If You're Serious About Claude Code (Most People Skip This Step)" ~1 day ago (June 25). Best-practices-focused, no specific new tool mentioned. Also "I Made Claude Code FOR TEAMS (It's Incredible)" ~3 weeks ago.
- **@Chase-H-AI (109K subs):** Posted "How To Start a YouTube Channel With Claude AI in 2026" ~3 days ago (June 23). Topic is content automation with Claude, not a new specific tool. Older video (April 29): "Claude Code + Higgsfield MCP = Content MACHINE" — Higgsfield MCP already covered in submissions.json.
- **@charlieautomates (8K subs):** Recent video "2 Claude Code Repos NOBODY'S Talking About Yet" covers SEED + PAUL — both already covered in June 25 digest. Also mentioned Skillsmith (ChristopherKahler/skillsmith, 111 stars, 22 days old) — low priority given star count.
- **@TechWithTim (2M subs):** "How to Build Effective Claude Code Agents in 2026" (~1 week ago, ~June 19). General agent-building tutorial, no specific new tool.
- **@indydevdan (129K subs):** Claude Code /loop and /goal commands tutorial content — these are built-in Claude Code features, not third-party tools.

### Not active this week:
- @adrienaidesigner (4K subs) — no Claude Code content found in past 7 days
- @UICollectiveDesign (52.5K subs) — no new Claude Code content found in past 7 days
- @DevelopersDigest (61.5K subs) — no Claude Code-specific content found in past 7 days

### Key finding:
No YouTubers from the curated list covered any of today's new digest items specifically. No creator_buzz signals for new tools this cycle.

---

## Items Researched and Included

### 1. Claude Code v2.1.193 (June 25, 2026)
- Source: https://code.claude.com/docs/en/changelog (verified via WebFetch)
- Key features: `autoMode.classifyAllShell` setting routes all Bash/PowerShell through auto-mode classifier; auto-mode denial reasons added to transcript and `/permissions`; live file path autocomplete in bash mode (`!`); `claude_code.assistant_response` OpenTelemetry log event (requires `OTEL_LOG_ASSISTANT_RESPONSES=1`); automatic memory-pressure reaping for idle background shell commands; startup notice when MCP servers need authentication; improved background agent auth reliability.
- Status: INCLUDED (new version not covered in yesterday's digest which had v2.1.191)

### 2. Fable 5 / Mythos 5 Ban — Day 14
- Source: Prior digests + research agents
- Status: INCLUDED (recurring; July 8 ID verification now 12 days away, August 1 EO deadline 36 days; Kalshi ~68% by July 1 unchanged from prior day; Anthropic.com page returned 403 so no new official statement confirmed today)

### 3. ECC — Everything Claude Code (affaan-m/ECC)
- Source: GitHub search + direct URL verification (two independent fetches)
- Stars: 211.9K+, Forks: 32.5K+, 230+ contributors
- Features: 67 agents, 271 skills, 92 legacy command shims; v2.0.0 stable June 2026; cross-harness (Claude Code, Codex, Cursor, OpenCode, Gemini, Zed)
- Not in submissions.json or any recent digest
- Status: INCLUDED (viral, massive project)

### 4. last30days-skill (mvanhorn/last30days-skill)
- Source: GitHub search agent + direct URL verification
- Stars: 46.9K
- Features: AI agent skill for researching any topic across Reddit, X/Twitter, YouTube, HN, Polymarket, GitHub, TikTok, Instagram, Bluesky; "Best Takes" clustering; comparison mode; HTML export; MIT
- Not in submissions.json or any recent digest
- Status: INCLUDED

### 5. Takumi (kane50613/takumi)
- Source: GitHub trending developers page + direct URL verification
- Stars: 2.1K, trending today
- Features: Render JSX, HTML, CSS to PNG/JPEG/WebP/GIF/SVG/APNG without headless browser; drop-in `next/og` replacement; Rust-based, Tailwind v4, CSS Grid; edge-runtime compatible; bun/npm
- Not in submissions.json or any recent digest
- Status: INCLUDED (DESIGN category, trending today, fills design slot)

### 6. claude-context (zilliztech/claude-context)
- Source: GitHub search agent + direct URL verification
- Stars: 12K+
- Features: Semantic code search MCP; BM25 + dense vector hybrid search; Merkle-tree incremental indexing; AST-based chunking; ~40% token reduction vs loading full dirs; multi-provider (OpenAI, VoyageAI, Ollama, Gemini); works with Milvus/Zilliz Cloud
- Not in submissions.json or any recent digest (codebase-memory-mcp was a different project covered June 24)
- Status: INCLUDED (cost/mcp category, solid)

### 7. worktrunk (max-sixty/worktrunk)
- Source: GitHub trending developers page + direct URL verification
- Stars: 5.6K, v0.61.0 (June 21, 2026), trending developer today
- Features: CLI for git worktree management designed for parallel AI agent workflows; three core commands (switch, list, merge); AI-generated commit messages; hooks; per-worktree dev server; Rust; MIT/Apache 2.0; Homebrew + Cargo + WinGet + pacman + conda
- Not in submissions.json or any recent digest
- Status: INCLUDED (parallel agent workflow tool, fresh)

### 8. parallel-code (johannesjo/parallel-code)
- Source: GitHub search agent + direct URL verification
- Stars: 750, v1.9.0
- Features: Desktop app (macOS .dmg, Linux .AppImage/.deb) for parallel Claude Code + Codex + Gemini sessions, each in isolated git worktrees; tiled panel layout; built-in diff viewer; focus mode; per-task notes; keyboard-first; MIT, free
- Not in submissions.json or any recent digest
- Status: INCLUDED

### 9. Claude-Code-Agent-Monitor (hoangsonww/Claude-Code-Agent-Monitor)
- Source: GitHub trending + direct URL verification (670 stars, updated ~3h ago today)
- Features: Real-time monitoring dashboard (Node/Express/React/Vite/TailwindCSS/WebSockets); Kanban board; D3.js orchestration diagrams; 25 MCP tools; Electron desktop app; token/tool analytics; web push notifications; spawn sessions from dashboard; internationalization (EN/ZH/VI)
- Not in submissions.json or any recent digest
- Status: INCLUDED

---

## Items Researched but EXCLUDED

- **Skillsmith** (ChristopherKahler/skillsmith): 111 stars, 22 days old. Too low signal for a digest slot today.
- **Trends-MCP** (trendsmcp/trends-mcp): ~13 stars on rugvedp fork. Too small, website 403. Skip.
- **/dev for Claude Code**: Search found 0 results. Could not verify. Skip.
- **ECC star count ambiguity**: Two independent fetches confirmed 211.9K — included with confidence.
- **Tom Brown/Fable 5 negotiations**: Mentioned by research agent but could not verify via direct URL (all relevant pages returned 403/error). Not included in Day 14 hook as unverified.
- **Agentmemory** (rohitg00/agentmemory): Already covered June 21-22. Still climbing but no new release this week.
- **Enterprise MCP Okta**: Already covered June 19.
- **Claude Tag**: Already covered June 24.
- **JetBrains integration**: Was already covered June 22/23 in mcp-self-hosted-sandboxes item.

---

## Elapsed Time: ~420s / 1200s limit
