# Research Notes — 2026-06-21

## YouTube Coverage This Week

| Creator | Channel | What They Covered |
|---------|---------|-------------------|
| @simonscrapes | Simon Scrapes (71.8K subs) | "Claude Code Just Hit A Different Level" (1 day ago, June 20) — agentic business automation with n8n; no single new tool featured |
| @simonscrapes | Simon Scrapes | "Claude Code Agentic OS… It Remembers Everything" — ECC's agentic-os skill; "This Open Source Repo Solves Claude Code's Biggest Problem" — ECC (both from ~June 18-19, ECC covered in June 20 digest) |
| @Chase-H-AI | Chase AI (109K subs) | "This Open Source Repo Solves Claude Code's Biggest Problem" — ECC (covered June 20 digest) |

No new tool announcements identified from YouTubers in the last 24 hours beyond ECC (already June 20).

---

## New Items Found (not in submissions.json or June 14–20 digests)

### 1. Fable 5 Ban Day 9 (RECURRING)
- Still suspended (Day 9 of ban)
- Refund window officially closed June 20 at 11:59 PM
- Anthropic MD of International Chris Ciauri: "We are very confident that in the coming days, the models will become available again" (made at Seoul office opening, June 18)
- Trump at G7 signalled he no longer views Anthropic as national security threat; but Commerce Dept directive still legally in effect
- Prediction markets: 57% odds restoration before July 1, 67% before July 10, 75% before July 17 (Kalshi)
- Restoration framework will include: identity verification + geo-fencing (echoing July 8 privacy policy ID bypass)
- White House EO deadline August 1, 2026 (60-day task for NSA/Treasury/CISA to build voluntary pre-release framework)
- Resolution path: Anthropic agrees to pre-brief framework going forward, not "fix the jailbreak"
- Sources: https://www.anthropic.com/news/fable-mythos-access, https://news.kalshi.com/p/fable-5-odds-anthropic-access-restored-july-57-percent, https://www.koreajoongangdaily.com/business/anthropic-confident-of-reenabling-mythos-fable-5-access-in-coming-days-executive/12727522

### 2. FableWatch (NEW - not in any digest)
- URL: https://fablewatch.com/
- Automated Fable 5 API return monitor
- Pings the claude-fable-5 API every 60 seconds
- Alerts via email, SMS, and automated phone calls when model returns
- Swarm plan: dedicated VPS fires 400+ parallel API calls (covering 400+ questions) to extract max knowledge before suspension, dataset is yours to keep
- Also auto-fixes GitHub PR bugs, resolves open issues, opens fix PRs while model is online
- Competitor services also emerged: isfableback.com, isfable5back.com, fable5.app/news
- Not affiliated with Anthropic
- Featured on huntscreens.com (Product Hunt adjacent site)
- Sources: https://fablewatch.com/, https://huntscreens.com/products/fablewatch

### 3. agentmemory (rohitg00/agentmemory) — 23.6k stars (NOT in any digest)
- URL: https://github.com/rohitg00/agentmemory
- "#1 Persistent memory for AI coding agents based on real-world benchmarks"
- 53 MCP tools, 6 resources, 3 prompts, 15 skills
- 95.2% retrieval accuracy on benchmarks
- 92% reduction in token consumption vs. pasting full context
- Hybrid search: BM25 keyword + semantic vector + knowledge graph
- Real-time viewer dashboard at localhost:3113
- Works with Claude Code, GitHub Copilot, Cursor, Codex, Gemini CLI, OpenCode
- v0.9.27 (June 7, 2026). Created Feb 25, 2026. 280+ commits, 13 contributors
- Peaked GitHub Trending rank #2 on May 13 with 5,800 stars; now 23.6k
- Apache 2.0. Language: TypeScript
- Sources: https://github.com/rohitg00/agentmemory, https://alphasignalai.substack.com/p/how-agentmemory-works-and-how-to

### 4. antigravity-awesome-skills v13.0.0 (sickn33/antigravity-awesome-skills) — 41.2k stars (RECURRING, v12.9.0 was June 19)
- URL: https://github.com/sickn33/antigravity-awesome-skills
- v13.0.0 released TODAY (8 hours ago per npm "last published 8 hours ago")
- 1,678+ skills (up from 1,646 in v12.9.0)
- Major version bump (12 → 13)
- Added Kiro and OpenCode as new install targets alongside Claude, Cursor, Codex, Gemini
- Sources: https://www.npmjs.com/package/antigravity-awesome-skills, https://github.com/sickn33/antigravity-awesome-skills

---

## Items Ruled Out (already covered)

- scientific-agent-skills: In June 16 digest (within 7-day window) ❌
- WOZCODE: In May 23 digest (190 stars, too small to re-feature) ❌
- digital-marketing-pro: No star count found, skip ❌
- claude-forge: 660-722 stars, v3.0.2 (May docs patch), not particularly hot today ❌
- claw-code: In May 1-8 digests, old story ❌
- levnikolaevich/claude-code-skills: In June 15 digest (within 7-day window) ❌
- dive-into-claude-code: In submissions.json ❌
- Fable 5 hidden guardrails apology: From June 9-12 window, covered in early June digests ❌
- Fable 5 Bedrock data sharing: From launch period, not new for today ❌
- Claude Code v2.1.185: Too minor (single stream-stall hint change, June 20) ❌
- cve-mcp-server: In June 19 digest ❌
- ECC (Everything Claude Code): In June 20 digest ❌

---

## Summary

Strong picks: Fable 5 Day 9 (major recurring story), FableWatch (genuinely new viral service), agentmemory (23.6k stars, first appearance), antigravity v13.0.0 (today's major version release).

Today is a light research day — the ecosystem is mostly processing the Fable 5 ban aftermath, and most recent tools launched June 17-20 were covered in those digests. The 4-item digest reflects honest research, not fabrication.
