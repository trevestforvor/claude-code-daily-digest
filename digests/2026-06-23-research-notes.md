# Research Notes — 2026-06-23

## YouTube Coverage

### @charlieautomates (Charlie Automates, 8k subs)
- "2 Claude Code Repos NOBODY'S Talking About Yet" found in search (YouTube 403 blocked direct fetch). No specific tool names confirmed; included in search results from past week.
- General coverage: "How to Build Effective Claude Code Agents in 2026" (5 days ago) — workflow focus, no specific tools extracted.

### @Chase-H-AI (Chase AI, 109k subs)
- "The Top 10 Claude Code Plugins to 10x Your Next Project (June '26)" — Published ~2 weeks ago. Confirmed from search: covers Codex plugin, Google Workspace CLI, Firecrawl CLI, Playwright CLI, Superbase CLI. Full list not extractable (YouTube 403).
- Most installed per Anthropic marketplace June 1: Frontend Design (829k installs), Superpowers (752k), Context7 (349k).

### @simonscrapes (Simon Scrapes, 71.8k subs)
- "Claude Code Just Hit A Different Level (We Built THIS)" — 3 days ago. No tool names confirmed.
- "Claude Code Agentic OS… It Remembers Everything" — 4 days ago. Linked to agentmemory / claude-mem ecosystem.

### @UICollectiveDesign (UI Collective, 52.5k subs)
- "Claude Design + Claude Code — Build a Flutter App with PROPER UI 2026" — May 2026. Not recent 72h.
- "Claude Cowork for Designers" — recent but full content not extracted.

### @indydevdan (IndyDevDan, 129k subs)
- No specific June 2026 Claude Code tool video confirmed. Channel page visible but no recent tool-specific content identified.

### @TechWithTim (Tech With Tim, 2M subs)
- No recent (past week) Claude Code specific content confirmed.

### @DevelopersDigest (Developers Digest, 61.5k subs)
- No specific past-72h Claude Code tool video confirmed.

### @adrienaidesigner (Adrien AI Designer, 4k subs)
- No recent content confirmed.

**YouTuber signal this week:** Simon Scrapes covered memory/agentic-OS topic (two videos in 3-4 days). Chase AI covered plugins list. No 2+ YouTuber overlap on any single new tool this week to trigger the viral boost.

---

## Key Candidates

### Tier 1 — Fresh (72h or very recently trending)

**Claude Code v2.1.186** (Anthropic, June 22)
- `claude mcp login/logout <name>` — first CLI command to auth MCP servers without the interactive /mcp menu; supports `--no-browser` stdin redirect for SSH headless flows
- `respondToBashCommands: true` — new default behavior: bash output now auto-triggers Claude to respond (set false to opt out)
- Skills section added to /plugin Installed tab
- Status filtering (press f) in /workflows agent detail view
- Bug fixes: JetBrains flickering, Kitty Shift+non-ASCII drops, Windows PowerShell hang, macOS orphaned processes at 100% CPU
- 33 changes total
- Source: code.claude.com/docs/en/changelog

**Fable 5 Ban — Day 11** (Recurring)
- June 22 was the scheduled billing transition to usage-credit overage ($10/M input, $50/M output) — Anthropic issued no guidance
- explainx.ai published "Is Fable 5 Back? No" today June 23
- August 1, 2026 (60 days from June 2 EO) is the structural deadline for the pre-brief framework
- Polymarket + Kalshi odds still elevated but below peak
- Everyone still on Opus 4.8

**claude-mem v13.8.0** (thedotmack, June 21)
- 83.9k stars (was ~74.8k ~2 weeks ago = +9k in 2 weeks)
- v13.8.0 June 21: per-session telemetry rollups for cost-per-observation calculations
- v13.7.1 June 21: Node floor fixed (≥20.12.0, not ≥20.0.0 — was causing silent auth failures)
- v13.7.0 June 20: PostHog telemetry overhaul, per-session rollups replace wall-clock windows
- Broad compatibility: Claude Code, OpenClaw, Codex, Gemini CLI, Copilot, Cursor, Hermes, OpenCode, Windsurf
- Install: `npx claude-mem`
- Source: github.com/thedotmack/claude-mem

**tweakcc v4.1.1** (Piebald-AI, June 18)
- Customize Claude Code's system prompts, create custom toolsets, input pattern highlighters, themes
- v4.0.0 added API (npm i tweakcc) — sandboxed custom patches without forking, remote config URL
- v4.1.1: 165 new prompts, backfilled coverage for 2.1.141–2.1.173, improved theme schema, /clear-screen command
- Updated for Claude Code 2.1.186
- Companion: claude-code-system-prompts (star to get notified of each CC release)
- Source: github.com/Piebald-AI/tweakcc

### Tier 2 — Recent/Strong

**Claudoscope** (cordwainersmith, ~April–May 2026)
- Native macOS SwiftUI menu bar app (no Dock presence until window opens)
- Real-time secrets detection: 10+ credential pattern families (GitHub PAT/OAuth, OpenAI, Anthropic, Stripe, Slack, npm, Google, SendGrid, Shopify, DO, Linear, PyPI, HuggingFace, Azure, Vault, Docker); Stripe live keys + OpenAI service keys escalated to ERROR
- Session analytics, conversation history, cost estimation, project insights
- Reads ~/.claude/projects/ via macOS FSEvents — no network, no polling, fully local
- Source: github.com/cordwainersmith/Claudoscope / claudoscope.com

**CVE MCP Server** (mukul975, recent)
- Production-grade MCP server with 27 security intelligence tools across 21 APIs
- APIs: CVE/NVD, EPSS, CISA KEV, MITRE ATT&CK, Shodan, VirusTotal, and more
- Categories: Core Vuln Intel, Exploit & Attack Intel, Advanced Risk & Reporting, Network Intel, Threat Intel
- Python + FastMCP + httpx + aiosqlite, outbound HTTPS only, no telemetry, no API key logging
- Source: github.com/mukul975/cve-mcp-server

**Claude-BugHunter** (elementalsouls, ~June 2026)
- 2,538 stars (growing)
- 71 skills, 15 slash commands, 681 disclosed-report patterns across 24 CVE classes
- Enterprise attack matrices: M365/Entra, Okta, vCenter, SSL-VPN, SharePoint, cloud IAM
- Install: `/plugin marketplace add elementalsouls/Claude-BugHunter`
- Source: github.com/elementalsouls/Claude-BugHunter

**Simon Willison — Moebius 0.2B WebGPU** (simonwillison.net, June 22)
- Used Claude Code to port Moebius 0.2B image inpainting model from PyTorch/CUDA to browser via ONNX Runtime Web + WebGPU
- Claude suggested ONNX Runtime Web, then autonomously drove the porting
- Working demo: simonw.github.io/moebius-web/ — 1.27GB weights cached in browser Cache Storage after first run
- Good evidence of Claude Code handling complex ML framework translation tasks

**Code with Claude Tokyo / Self-hosted Sandboxes** (Anthropic, June 10–11)
- Anthropic announced two Claude Managed Agents capabilities:
  - Self-hosted sandboxes (public beta): user-configures tool execution environments with Cloudflare, Daytona, Modal, Vercel
  - MCP tunnels (research preview): agents can reach MCP servers inside private networks
- Source: youtube.com/watch?v=N4efO8viXXo

**claude-code-system-prompts** (Piebald-AI, June 22)
- Updated within minutes of v2.1.186 release
- Contains all 27 builtin tool descriptions + sub agent prompts + utility prompts
- Star the repo to get GitHub release notifications for each Claude Code version
- Source: github.com/Piebald-AI/claude-code-system-prompts

---

## Items Deduped (already in recent digests)
- agentmemory (rohitg00) — in yesterday's (2026-06-22)
- antigravity-awesome-skills v13.0.0 — in yesterday's (2026-06-22)
- voltagent-awesome-agent-skills — in 2026-06-22
- claude-code-v2.1.185 — in 2026-06-22
- canopy — in 2026-06-22
- nano-banana-2-skill — in 2026-06-22
- fable5-ban (Day 10) — in yesterday's; Day 11 update is fresh

## Items Checked But Skipped
- Dynamic workflows: Launched May 29 with Opus 4.8 — too old (not 72h)
- Mitiga Labs MCP Token Theft: Published May 7, 2026 — too old
- WOZCODE: Established since Oct 2025, no major new release in 72h
- /dev for Claude Code: Launched Product Hunt April 2026
- Code with Claude Tokyo: June 10, 13 days ago — borderline, may include if needed
