# Research Notes — 2026-07-04

## YouTube Coverage (Past 7 Days)

| Creator | Subscribers | Recent Claude Code Content | Notes |
|---|---|---|---|
| @Chase-H-AI | 109K | "Use These 17 Claude Plugins, It Will Make You 10x Better" (~1 week ago) | Confirmed video exists; could not access content via YouTube (403 blocks). Ponytail and headroom plausibly included given timing. |
| @indydevdan | 129K | "Watch This If You're Just Learning How to Use Claude Code in 2026" (~5 days ago) | YouTube 403 blocked; could not extract tool list. |
| @simonscrapes | 71.8K | No Claude Code content found in past 7 days | Skip this week |
| @charlieautomates | 8K | No dedicated Claude Code content found in past 7 days | Skip this week |
| @DevelopersDigest | 61.5K | No specific Claude Code tool content found this week | Skip this week |
| @TechWithTim | 2M | Last Claude Code content: May 22, 2026 ("I Built the Same App With Claude Code and Codex") | No recent Claude Code content |
| @UICollectiveDesign | 52.5K | Not searched this run | |
| @adrienaidesigner | 4K | Not searched this run | |

**Key observation:** Multiple YouTube channels NOT from the curated list have covered ponytail in the past 2 weeks — at least 6 videos, including comparison videos (Caveman vs Headroom vs Ponytail). Could not confirm which curated channels covered it.

---

## Research Sources Checked

- GitHub releases: anthropics/claude-code (v2.1.200, v2.1.201 — July 3)
- GitHub topics: claude-code (recently updated)
- HN searches: Show HN posts mentioning Claude Code, July 2026
- Product Hunt: MCP/Claude Code searches (last 72h)
- Releasebot: anthropic/claude-code July 2026
- simonwillison.net: recent post July 2 (Fable 5 async research session)
- Chase AI blog: chaseai.io (403 blocked)

---

## New Items Found (Not in Prior Digests)

### 1. ponytail (DietrichGebert/ponytail)
- **Stars:** 73.7k (launched June 12; 44K by June 21 in 9 days)
- **Latest release:** v4.8.4 — "lazy in Hermes now" — June 29, 2026
- **What it does:** Injects a 7-rung minimalism decision ladder into Claude Code (and 6 other agents). Before writing code, Claude must ask: Does this need to exist? Already in codebase? Standard library? Native feature? Installed dependency? One liner? Else: minimum. Cuts code output 54% on benchmarks, saves 22% tokens.
- **Benchmark:** FastAPI + React repo, 12 feature tasks: -54% lines, -22% tokens, -20% cost, -27% time, 100% safety.
- **Install:** `/plugin marketplace add DietrichGebert/ponytail`
- **YouTube coverage:** Multiple channels (~6+ videos in past 2 weeks); could not confirm specific curated channels
- **NOT in any prior digest or submissions.json**

### 2. headroom (headroomlabs-ai/headroom)
- **Stars:** 56.4k
- **Latest release:** v0.30.0 — July 3, 2026 (today)
- **What it does:** Sits between your shell/agent and the LLM. Compresses tool outputs, logs, files, and RAG chunks 60-95% before they reach the model. SmartCrusher for JSON, CodeCompressor for AST, Kompress-v2-base for text. Also reduces output tokens via verbosity steering. headroom learn mines failed sessions to write correction files.
- **Install:** `pip install "headroom-ai[all]"`
- **NOT in any prior digest or submissions.json**

### 3. PMB (oleksiijko/pmb)
- **Stars:** 290
- **Latest release:** v1.2.2 — June 30, 2026
- **What it does:** Local-first persistent project memory MCP for Claude Code, Cursor, Codex, Zed. SQLite, no cloud, no API keys. Hybrid search: BM25 + vector + entity graph. Recall in ~35ms. Appeared in HN "Show HN: Recall – Local project memory for Claude Code" (~1 week ago, HN item 48622590).
- **Install:** `pip install pmb-ai && pmb setup && pmb connect claude-code`
- **NOT in any prior digest or submissions.json**

### 4. Glance (DebugBase/glance)
- **Stars:** 154
- **What it does:** MCP server that gives Claude Code a real Playwright-powered Chromium browser. 30 tools: 19 browser control, 7 test automation, 4 session/visual. Inline screenshots (base64), 12 assertion types, session recording, visual regression, network/console monitoring.
- **Install:** `npm install -g glance-mcp`
- **NOT in any prior digest or submissions.json**

### 5. Claude Code v2.1.200/201 (July 3, 2026)
- **v2.1.200** (July 3, 16:52): Changed "default" permission mode to "Manual" across CLI, VS Code, JetBrains. AskUserQuestion dialogs no longer auto-continue by default (opt in via /config). Background session fixes, screen-reader improvements.
- **v2.1.201** (July 3, 23:50): Claude Sonnet 5 sessions no longer use mid-conversation system role for harness reminders.
- **NOT in any prior digest**

---

## Recurring Items (Still Trending)

| Item | First Covered | Stars | Status |
|---|---|---|---|
| mattpocock/skills | July 3 | 155K | Day 2 — viral |
| gstack-garry-tan | July 3 | 119K | Day 2 — viral |
| ECC (affaan-m) | July 2 | 211K | Day 3 — still massive |
| claude-code-steganography | July 2 | n/a | Day 3 — still in international press |
| claude-code-router | July 3 | 35.5K | Day 2 |
| PAL MCP server | July 3 | 11.6K | Day 2 |
| skills-janitor | July 3 | n/a | Day 2 |
| claude-code-limits-july13 | July 2 | n/a | Day 3 — still active through July 13 |
| fable5-day19-restored | July 1 | n/a | Day 4 — 50% usage cap still through July 7 |
| claude-sonnet-5 | July 1 | n/a | Day 4 — still default model |

---

## Items Checked but NOT Included (covered in prior digests/submissions)

- vibedock: June 24
- recall (raiyanyahya): June 24
- rohitg00/awesome-claude-design: June 9
- rtk: May 10+
- graphify: May 1+
- caveman, claude-mem, career-ops: May 3+
- ui-ux-pro-max-skill: May 24
- hermes-agent, cc-switch: May 3+
- codeburn: May 1+
- claude-code-youtube-mcp: June 6
- trend-pulse: June 9
- ruflo: submissions.json
- taste-skill: submissions.json
- jeremylongshore/claude-code-plugins-plus-skills: covered 6+ times
- claude-context (Zilliz): June 11
