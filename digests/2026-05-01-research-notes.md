# Research Notes — 2026-05-01

## Timer
- START: 1777651711 (approx elapsed at note-write time: ~400s of 1200s cap)

---

## YouTube Coverage (past 7 days: Apr 24 – May 1)

### @charlieautomates (Charlie Automates, ~8K subs)
- Most recent identifiable Claude Code content: "Top 10 Claude Code Skills, Plugins & CLIs (April 2026)" — estimated ~3 weeks ago, NOT in 7-day window.
- "Top 5 Claude Code Skills + Tools for Design (April 2026)" (YouTube Short) — estimated ~2 weeks ago, NOT in 7-day window.
- **No new videos in past 7 days** identified. Skipped.

### @Chase-H-AI (Chase AI, ~109K subs)
- "Claude Code + Higgsfield MCP = Content MACHINE" (youtube.com/watch?v=20BDYk-CU_o) — posted April 28/29. Already captured in Apr 30 digest (higgsfield-mcp, creator_buzz: @Chase-H-AI).
- No other new Claude Code tools covered in past 7 days.

### @indydevdan (IndyDevDan, ~129K subs)
- Most recent identifiable Claude Code content: "12 Claude Code Features Every Engineer Should Know: Subagents, CLAUDE.md, Checkpoints, MCP, and more" — March 27, 2026. NOT in 7-day window.
- **No new videos in past 7 days** identified. Skipped.

### @TechWithTim (Tech With Tim, ~2M subs)
- No new Claude Code content in past 7 days identified. Skipped.

### @simonscrapes (Simon Scrapes, ~71.8K subs)
- "Build Real AI Systems With Claude Code (Step-by-Step)" — ~2 weeks ago. NOT in 7-day window.
- **No new videos in past 7 days** identified. Skipped.

### @DevelopersDigest (Developers Digest, ~61.5K subs)
- No specific videos identified in searches. Skipped.

### @UICollectiveDesign (UI Collective, ~52.5K subs)
- Not identified in searches this run. Skipped.

### @adrienaidesigner (Adrien | AI Designer, ~4K subs)
- Not identified in searches this run. Skipped.

**Conclusion**: No YouTubers from the curated list produced new Claude Code tool/skill/plugin coverage in the past 7 days that would add creator_buzz to today's items.

---

## High-Signal Source Findings

### Anthropic Official (Apr 28 – May 1)

**Claude Security — Public Beta (April 30, 2026)**
- URL: https://www.anthropic.com/news/claude-code-security
- Launched April 30 to all Enterprise customers; Team/Max access follows shortly.
- Powered by Opus 4.7 — scans entire codebases by tracing data flows, reading source, examining cross-file interactions (not just pattern matching).
- New public beta features: scheduled scans, CSV/Markdown export, webhooks to Slack, Jira, etc.
- Partnership integrations: CrowdStrike, Palo Alto Networks, SentinelOne, Trend Micro TrendAI, Wiz.
- Hundreds of organizations have used since closed preview; found vulns that other tools missed for years.
- Accessible at claude.ai/security.

**Claude Code v2.1.126 (May 1, 2026)**
- `/model` picker lists models from gateway's `/v1/models` endpoint (custom gateway support).
- `claude project purge [path]` — delete all Claude Code state (transcripts, tasks, file history, config).
- `--dangerously-skip-permissions` now bypasses prompts for protected paths (.claude/, .git/, .vscode/, shell config).
- `claude auth login` accepts OAuth code pasted into terminal when browser callback can't reach localhost.
- `claude_code.skill_activated` OpenTelemetry event fires for user-typed slash commands.
- Auto mode: spinner turns red when permission check stalls.
- PowerShell 7 detection improvements on Windows.

**v2.1.123 (April 29)**: already covered in Apr 29 digest.
**v2.1.122 (April 28)**: already covered in Apr 29 digest.

### GitHub — New/Trending

**guizang-ppt-skill** (op7418) — 4.5k stars
- URL: https://github.com/op7418/guizang-ppt-skill
- DESIGN category — turns a prompt into a single-file horizontal-swipe HTML presentation deck.
- 10 layouts, 5 curated themes (Ink Classic, Indigo Porcelain, Forest Ink, Kraft Paper, Dune), WebGL animated hero backgrounds.
- Optional GPT-M 2.0 image generation integration.
- Install: `npx skills add https://github.com/op7418/guizang-ppt-skill --skill guizang-ppt-skill`
- YouTube Short exists: https://www.youtube.com/shorts/ERXgZRVFa8A (unknown creator — not from our list)
- NOT in any of the last 7 daily digests. NEW.

**last30days-skill** (mvanhorn) — 24.5k stars
- URL: https://github.com/mvanhorn/last30days-skill
- Researches any topic across 12+ platforms: Reddit, X, YouTube, TikTok, Instagram, HN, Polymarket, GitHub, Threads, Pinterest, Bluesky, Perplexity, web.
- v3: intelligent entity resolution, cross-source cluster merging, GitHub person-mode.
- Created by Matt Van Horn (co-founder of June, acquired by Weber; co-founder of Lyft predecessor).
- Install: `/plugin marketplace add mvanhorn/last30days-skill` then `/plugin install last30days@last30days-skill`
- NOT in any of the last 7 daily digests. NEW.

**CVE MCP Server** (mukul975) — 493 stars
- URL: https://github.com/mukul975/cve-mcp-server
- MCP server that gives Claude 27 security intelligence tools across 21 APIs (NVD, EPSS, CISA KEV, MITRE ATT&CK, Shodan, VirusTotal, AbuseIPDB, GreyNoise, etc.)
- Created April 14, 2026.
- Composite 0–100 risk score using CVSS, EPSS, KEV status, PoC availability.
- Works without API keys for 8 tools; graceful degradation.
- Outbound HTTPS only, no telemetry.
- Install: `git clone https://github.com/mukul975/cve-mcp-server.git && cd cve-mcp-server && pip install -e .`
- NOT in any of the last 7 daily digests. NEW. Pairs well with Claude Security launch.

### Recurring Items (still trending from last 7 days)

| Slug | Stars | Days Active | Last in Digest |
|---|---|---|---|
| claw-code | 185k+ | Day 8 | Apr 27, 28, 29, 30 |
| graphify | 36.3k | Day 4 | Apr 27, 28, 29 |
| wshobson-agents | 34.5k | Day 2 | Apr 29 |
| codeburn | 4.3k | Day 4 | Apr 27, 29 |
| awesome-agent-skills | 19.2k | Day 3 | Apr 28, 29 |
| claude-code-best-practice | 47.6k | Day 4 | Apr 27, 29 |
| claude-managed-agents-memory | public beta | Day 2 | Apr 29 |
| claude-code-plugins-plus-skills | 2k+ | Day 3 | Apr 28, 29, 30 |
| antigravity-awesome-skills | 35.8k | Day 2 | Apr 29, 30 |
| zilliztech-claude-context | 9.8k | Day 4 | Apr 27, 29 |

### Reddit / HN

- No specific viral HN posts in past 72h about new tools (beyond Claude Security launch coverage).
- Reddit r/ClaudeAI and r/ClaudeCode: discussion ongoing about Claude Security beta, claw-code, skill recommendations.

### Skipped / Out of Scope

- Anthropic $900B valuation round (business news, not a tool).
- Pentagon/DOD blacklist discussion (policy, not a tool).
- Everything-claude-code v2.0.0-rc.1 — was in Apr 28 digest.
- alirezarezvani/claude-skills (13.4k stars) — was in Apr 25 digest (within 7 days).
- hesreallyhim/awesome-claude-code (~42k stars) — was in Apr 26 digest (within 7 days).

---

## Candidate List for Digest

Priority order per ranking rules:

1. guizang-ppt-skill — DESIGN (priority 1)
2. claude-security-public-beta — ANTHROPIC (priority 4) + COST (priority 2)
3. claude-code-v2-1-126 — ANTHROPIC (priority 4)
4. graphify — COST (priority 2, recurring Day 4)
5. codeburn — COST (priority 2, recurring Day 4)
6. last30days-skill — COST/skill (new)
7. claw-code — VIRAL (priority 3, recurring Day 8)
8. cve-mcp-server — MCP (new)
9. claude-managed-agents-memory — ANTHROPIC (recurring Day 2)
10. wshobson-agents — skill (recurring Day 2)
11. awesome-agent-skills — skill (recurring Day 3)
12. claude-code-best-practice — skill (recurring Day 4)
13. claude-code-plugins-plus-skills — skill (recurring Day 3)
14. antigravity-awesome-skills — skill (recurring Day 2)
15. zilliztech-claude-context — MCP (recurring Day 4)
