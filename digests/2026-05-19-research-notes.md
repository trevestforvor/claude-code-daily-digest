# Research Notes — 2026-05-19

## Summary
Research window: ~10 min. Sources checked: GitHub, web search, YouTube (indirect via search), Anthropic news, HN, Reddit.

---

## YouTube Coverage (May 12–19, 2026)

YouTube channel pages returned HTTP 403 — no direct video fetches possible. Coverage inferred from web search:

- **@charlieautomates**: Recent posts include "Claude Code Remote Just Ended OpenClaw" (Remote Control launched Feb 2026, not new), "SEED + PAUL = The Claude Code Meta Nobody's Talking About" (SEED has 256 stars — low signal), "Build Custom Website with Claude Code, Google Stitch & 21st.dev" (March 2026 tutorial). No items from Charlie this run with star counts worth featuring.
- **@Chase-H-AI**: "Top 10 Claude Code Skills, Plugins & CLIs (April 2026)" from April. No May 15–19 video found with identifiable tools.
- **@simonscrapes**: "This is the Ultimate Claude Code Setup - Beats OpenClaw and Hermes!" found in search results — exact date unclear; "Don't Fall Behind! Every Claude Code Update (Apr 2026)" is April. No new May tools surfaced from Simon this week.
- **@indydevdan**: Channel page 403. No specific May 15–19 IndyDevDan video found in searches that would surface a new tool.
- **@UICollectiveDesign**, **@DevelopersDigest**, **@TechWithTim**: Not checked in depth this run due to time.

No `creator_buzz` attributions in today's digest — couldn't verify YouTuber coverage of specific items within 7-day window.

---

## Key Items Found

### 1. Chrome DevTools MCP — v1.0.0 stable (May 18)
- **URL**: https://github.com/ChromeDevTools/chrome-devtools-mcp
- **Stars**: 40K
- Chrome DevTools team (Google) just hit 1.0 stable on May 18 (v1.0.0 + v1.0.1 patch same day)
- 40+ tools: browser control, Lighthouse audits, performance tracing, screenshots, heap snapshots
- Install: `claude mcp add chrome-devtools --scope user npx chrome-devtools-mcp@latest`
- Also: `/plugin marketplace add ChromeDevTools/chrome-devtools-mcp`
- NOT in any previous digest or submissions

### 2. Anthropic Acquires Stainless (~$300M, May 18)
- **URL**: https://www.anthropic.com/news/anthropic-acquires-stainless
- Stainless: NYC startup founded 2022 by former Stripe engineer Alex Rattray
- Auto-generates and maintains SDKs (TypeScript, Python, Go, Java, Kotlin, Swift) from API specs
- Used by OpenAI, Google, Cloudflare, and Anthropic itself
- Post-acquisition: ALL hosted Stainless products shutting down — competitors lose access
- Anthropic SDK generation becomes exclusive capability
- NOT in any previous digest or submissions

### 3. andrej-karpathy-skills — 137K / 220K combined stars
- **URL**: https://github.com/forrestchang/andrej-karpathy-skills
- Created Jan 27, 2026 by Forrest Chang after Karpathy's viral X post about 80% agent coding
- 4 rules: Think Before Coding, Simplicity First, Surgical Changes, Goal-Driven Execution
- TechTimes article May 18 covered crossing 220K combined stars (forrestchang + multica-ai)
- NOT in any previous digest (only autoresearch was covered May 5, different repo)
- Install: `/plugin marketplace add forrestchang/andrej-karpathy-skills`

### 4. Claude Code v2.1.143 + v2.1.144
- v2.1.143 (May 15): Plugin dependency enforcement, projected context cost estimates in /plugin marketplace, MCP_TOOL_TIMEOUT now applies to HTTP/SSE servers
- v2.1.144 (May 19): /resume for bg sessions (bg indicator), /model now per-session only (press d for default), paginated MCP tools/list fix (was truncating to first page), 75s startup hang fix, file descriptor exhaustion in skill dirs fixed

### 5. n8n-mcp — v2.54.0 (May 18) [RECURRING from May 5]
- **URL**: https://github.com/czlonkowski/n8n-mcp
- v2.54.0 May 18, 21.1K stars (up from 20.1K on May 5)
- 215 total releases over ~14 weeks; template library now 2,352 workflows
- Was featured May 5 at v2.50.4

### 6. claude-peers-mcp — Multi-Claude messaging
- **URL**: https://github.com/louislva/claude-peers-mcp
- 2K stars, TypeScript + Bun
- Lets all Claude Code sessions on same machine discover each other and send messages ad-hoc
- Broker daemon on localhost:7899 with SQLite persistence
- Work summaries based on project context for each session
- NOT in any previous digest or submissions

### 7. Code with Claude London — May 19–21
- **URL**: https://claude.com/code-with-claude/london
- Second tour stop after San Francisco (May 6)
- Main London event May 19, Extended London for indie devs May 20
- Livestreamed keynote; no major model announcements expected (SF pattern)

### 8. SurgeGraph Agent Bundle — May 19 launch
- **URL**: https://www.newsfilecorp.com/release/297956/SurgeGraph-Now-Available-as-an-AgentNative-CLI-MCP-Server-and-Claude-Code-Skill-for-AEO-and-GEO-Workflows
- First dedicated AEO/GEO platform to ship full agent bundle: Go binary CLI + MCP + Claude Code skill
- Handles content research, draft, publish, and AI citation monitoring workflows
- Local SQLite mirror for offline/token-efficient agent queries
- Niche (AI SEO) but unique category in ecosystem

---

## Items Skipped / Not Strong Enough
- **claude-skill-antivirus** (claude-world): 69 stars, April 3 release, too small despite interesting security angle
- **claude-forge** (sangrokjung): 701 stars, not high enough
- **SEED/PAUL** (ChristopherKahler): 256 stars on SEED, too small
- **alirezarezvani/claude-skills**: Already in May 5 digest
- **n8n-mcp** (czlonkowski): Already in May 5 digest — included today as recurring
- **rohitg00/awesome-claude-code-toolkit**: Already in May 5 digest
- **jeremylongshore/claude-code-plugins-plus-skills**: Already in May 1 digest
- **trendsmcp/trends-agent-claude**: 0 stars
- **claude-code-remote-control**: Launched Feb 2026, old news
- **Claude Design**: Launched April 17, 2026, not fresh
- **Trail of Bits skills**: tldrsec article from Feb 2026, old
- **Gates Foundation $200M**: Not Claude Code-specific
- **Code with Claude London announcements**: No major new features confirmed as of research time
