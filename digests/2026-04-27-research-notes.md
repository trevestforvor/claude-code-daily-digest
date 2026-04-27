# Research Notes — 2026-04-27

## Timing
- Start: 1777306287 (Unix)
- Elapsed at notes-write: ~730s (~12 min of 20-min cap)

---

## YouTube Coverage (Past 7 Days)

### @charlieautomates (8,080 subs)
- **"Claude Routines Just Dropped, And It's Perfect"** — recent (exact date unclear but within last 7 days). Covers Claude Code Routines (cloud-scheduled tasks) introduced April 14.
- Blog post: "Claude Code Remote Just Ended OpenClaw: Here's Why I Switched" — explains how native Routines + Agent SDK replaces third-party OpenClaw/Hermes setups.
- **Graphify** (safishamsi/graphify) mentioned as a key knowledge-graph tool.
- **PAUL** (ChristopherKahler/paul), **CARL**, **BASE** — also mentioned in their tooling stack.

### @Chase-H-AI (109,000 subs)
- **"Top 10 Claude Code Skills, Plugins & CLIs (April 2026)"** (3 weeks ago) — covered superpowers, ui-ux-pro-max-skill, agent-browser, gws (already in Apr 26 digest).
- **"Top 5 Claude Code Skills + Tools for Design (April 2026)"** (2 weeks ago).
- **"Top 10 Claude Code Frontend Design Skills, Plugins, & CLIs"** (2 weeks ago) — specifics unclear.
- **"8 Claude Code Skills Every Developer Needs in 2026"** — posted ~3 days ago (April 24). Covers skills from a senior Amazon/Microsoft engineer POV. Items not confirmed but a fresh high-signal video.

### @simonscrapes (71,800 subs)
- **"The Claude Code Setup Nobody Shows You (Replaces OpenClaw + Hermes)"** — 1 week ago. Explains five-layer Claude Code system (memory, skills, interaction, scheduling, business context) to replace paid frameworks.
- **"Master Claude Design in One Video (Full Course)"** — 1 day ago (April 26). Full course on Claude Design (Anthropic Labs product). Likely covers design skills and workflows.

### @indydevdan (129,000 subs)
- No confirmed new content specifically about new tools in the past 72h. Last confirmed items: Shopify AI Toolkit, Automattic WordPress (both in Apr 25 digest).

### @TechWithTim (2,000,000 subs)
- "CLAUDE CODE MASTERCLASS 4 HOURS: Build & Sell (2026)" covered in Apr 24 digest. No new videos in past 72h confirmed.

### @UICollectiveDesign (52,500 subs)
- No confirmed new content in past 72h.

### @DevelopersDigest (61,500 subs)
- Covered CodeBurn TUI dashboard (confirmed: article on "Codeburn: The First TUI That Actually Shows Where Your Claude Max Subscription Is Going").

---

## Key New Items Found (Past 72h / Not in Any Digest This Week)

### 1. graphify (safishamsi/graphify) — 36,300 stars
- Knowledge graph for Claude Code. Turns code, docs, papers, images into a queryable graph.
- PreToolUse hook auto-injects graph context before file searches. CLAUDE.md auto-updated.
- Claims 70x fewer tokens per search vs brute-force file reads.
- v0.5.0 released April 23, 2026.
- Install: `uv tool install graphifyy && graphify install`
- Covered by @charlieautomates.

### 2. Claude Code Routines (Anthropic) — Official Feature
- Launched April 14, 2026 alongside the desktop redesign (desktop redesign was in Apr 25 digest but Routines NOT covered yet).
- Docs: code.claude.com/docs/en/web-scheduled-tasks
- Cloud-hosted scheduled Claude Code sessions. Three trigger types: Schedule (cron/preset), API (HTTP POST endpoint), GitHub events (PR opened, release published).
- Runs autonomously, full tool access, no permission prompts during run.
- Plan limits: Pro 5/day, Max 15/day, Team/Enterprise 25/day.
- Create at claude.ai/code/routines or CLI: `/schedule`.
- Research preview as of April 14.
- @charlieautomates has a dedicated video about it.

### 3. Claude Mythos Preview (Anthropic) — New Model
- Announced April 7, 2026. Gated research preview ("Project Glasswing").
- Partners: AWS, Apple, Cisco, Google, NVIDIA, Linux Foundation, Microsoft, JP Morgan, etc.
- SWE-bench 93.9%, USAMO 97.6%. Identified thousands of zero-days in every major OS and browser.
- Available via Claude API, Amazon Bedrock, Google Vertex AI, Microsoft Foundry — but only to Project Glasswing participants.
- $25/$125 per M input/output tokens. Anthropic committed $100M in usage credits to participants.
- Primary URL: anthropic.com/glasswing

### 4. CodeBurn (getagentseal/codeburn) — 4,300 stars
- TUI dashboard for Claude Code token cost observability. Show HN posted ~1 day ago (April 26).
- Reads JSONL session transcripts from ~/.claude/projects/ — no proxy/wrapper needed.
- 13 task category classifications, one-shot success rate tracking, CSV/JSON export.
- Multi-provider: Claude Code, Codex, Cursor, GitHub Copilot.
- Optional macOS menubar app (latest menubar release April 25, 2026).
- Install: `npm install -g codeburn` or `npx codeburn`

### 5. zilliztech/claude-context — 9,800 stars
- MCP plugin for semantic code search using BM25 + dense vector hybrid search.
- Gives Claude full-codebase semantic context without manual file inclusion.
- Requires: OpenAI API key (embeddings) + Zilliz Cloud (Milvus vector store).
- Supports Claude Code, Cursor, Windsurf, Claude Desktop.
- Install: See README (requires OpenAI API key + Zilliz Cloud)

### 6. Almanac MCP (openalmanac.org) — HN Show HN 6 days ago
- Installs an MCP into Claude Code that provides proper web access for deep research.
- "Turn Claude Code into a Deep Research agent."
- Install: `npx openalmanac setup`
- Primary URL: news.ycombinator.com/item?id=47855284 (GitHub URL not confirmed)

### 7. Chase-H-AI "8 Claude Code Skills Every Developer Needs in 2026" (video)
- Posted April 24 (3 days ago). YouTube: youtube.com/watch?v=Va-U1dqhwzk
- 109k channel. Skills from a senior Amazon/Microsoft engineer POV.
- Specific skills not confirmed from research; included as fresh high-signal coverage signal.

### 8. SimonScrapes "Master Claude Design in One Video (Full Course)" (video)
- Posted April 26 (1 day ago). YouTube: youtube.com/watch?v=-_aQquBH5PU
- 71.8k channel. Full course on Claude Design (Anthropic Labs product).

---

## Recurring Items (Still Trending)

### caveman (JuliusBrussee/caveman) — Day 8
- Was 39.7k on April 20, now 47.8k (+8.1k in 7 days). Very viral.
- Appeared in April 20 and April 23 digests.

### everything-claude-code (affaan-m) — Day 8
- Was 162k on April 20, now 168k (+6k in 7 days).
- Appeared in April 20 and April 23 digests.

### claw-code (ultraworkers) — Day 5
- Was 185k on April 23, global rank #23. Clean-room Rust rewrite.
- Appeared in April 23 digest.

### code-review-graph (tirth8205) — Day 8
- Was 11.7k on April 20, now 13.4k (+1.7k).
- Appeared in April 20 digest.

### claude-mem (thedotmack) — Day 8+
- 46k+ stars. Appeared in April 20 and April 23 digests.

### get-shit-done — Day 8
- 55.2k stars. Appeared in April 20 digest.

### claude-code-best-practice (shanraisshan) — Day 5
- 47.6k stars. Appeared in April 23 digest.

---

## Items Skipped / Not Included

- **ChristopherKahler/paul** — 799 stars, too low signal.
- **ChristopherKahler/carl** — 320 stars, too low signal.
- **ChristopherKahler/base** — 71 stars, too low signal.
- **VILA-Lab/Dive-into-Claude-Code** — 174-608 stars, already in Apr 23 digest.
- **rohitg00/awesome-claude-design** — 385 stars, too low.
- **affaan-m/everything-claude-code** — Already in April 20 and 23, included as recurring.
- **levenokolaevich/claude-code-skills** — Already in April 20 and 23 digests.
- **Claude Code Source Leak** — March 31, old news.
- **Claude Mythos sandbox escape** — Safety news, not directly ecosystem tooling.
- **sickn33/antigravity-awesome-skills** — Not enough fresh signal for today.

---

## Dedup Check (vs submissions.json + last 7 days)

Confirmed NOT in submissions.json or any of the Apr 20–26 digests:
- graphify ✓
- claude-code-routines ✓ (desktop-redesign in Apr 25 did NOT mention Routines)
- claude-mythos-preview ✓ (Opus 4.7 was covered but not Mythos)
- codeburn ✓
- zilliztech-claude-context ✓
- almanac-mcp ✓
- chase-h-ai-8-skills-video ✓
- simonscrapes-master-design ✓

Confirmed recurring (in prior digests, still trending):
- caveman — Apr 20 + Apr 23
- everything-claude-code — Apr 20 + Apr 23
- claw-code — Apr 23
- code-review-graph — Apr 20
- claude-mem — Apr 20 + Apr 23
- get-shit-done — Apr 20
- claude-code-best-practice — Apr 23
