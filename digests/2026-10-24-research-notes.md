# Research Notes — 2026-10-24

## Summary

Research ran ~350s (within 20-min cap). GitHub topics were the primary signal source today; YouTube searches returned only third-party aggregators, not direct channel pages.

---

## YouTube Coverage

### @charlieautomates (Charlie Automates)
- No verifiable new videos found in past 72h via web search. `site:youtube.com` searches returned scrapers/aggregators only.
- Skipped this run; no specific tool mentions to report.

### @Chase-H-AI (Chase AI, 163k subs)
- Blog (chaseai.io) was unreachable during this run (DNS failure).
- Third-party aggregators note recent posts on skills/token optimization, latest visible was August 2026.
- Skipped this run; unable to confirm October 2026 uploads.

### @adrienaidesigner (Adrien | AI Designer, 4k subs)
- No verifiable new videos found this week. Skipped.

### @indydevdan (IndyDevDan, 129k subs)
- No October 2026 uploads verifiable via web search. Skipped.

### @simonscrapes (Simon Scrapes, 72k subs)
- No search results for October 2026. Skipped.

### @UICollectiveDesign (UI Collective, 53k subs)
- No search results for October 2026. Skipped.

### @DevelopersDigest (Developers Digest, 62k subs)
- No specific October 2026 content verifiable. Skipped.

### @TechWithTim (Tech With Tim, 2M subs)
- Older Claude Code tutorials mentioned in aggregators (254k-386k views) but no new October 2026 uploads confirmed.
- Skipped this run.

**Note:** YouTube `site:` searches are unreliable — returning aggregator mirrors instead of youtube.com pages. No YouTuber from sources/youtubers.json could be directly verified for October 21–24 content this run.

---

## GitHub Topics: claude-code (sorted by stars)

| Repo | Stars | Last Updated |
|------|-------|-------------|
| morluto/rea | 377k | Oct 24 |
| affaan-m/ECC | 288k | Oct 24 |
| NousResearch/hermes-agent | 257k | Oct 24 |
| DietrichGebert/ponytail | 175k | Oct 18 |
| farion1231/cc-switch | 148k | Oct 24 |
| nextlevelbuilder/ui-ux-pro-max-skill | 140k | Oct 23 |
| Graphify-Labs/graphify | 134k | Oct 23 |
| JuliusBrussee/caveman | 115k | Oct 24 |
| addyosmani/agent-skills | 110k | Oct 13 |
| paperclipai/paperclip | 107k | Oct 24 (skip: in submissions.json) |
| stablyai/orca | 105k | Oct 24 |
| thedotmack/claude-mem | 103k | Oct 24 |
| Leonxlnx/taste-skill | 102k | Oct 20 (skip: in submissions.json) |
| Panniantong/Agent-Reach | 102k | Oct 23 |
| tt-a1i/archify | 88.6k | Oct 24 |
| Egonex-AI/Understand-Anything | 88k | Oct 22 |
| rtk-ai/rtk | 84.4k | Oct 23 |
| cheaper-inference/OmniRoute | 80.6k | Oct 24 |

**New items not in any of last 3 digests:**
- affaan-m/ECC (288k) — Agent harness with 71 agents, 311 skills, hooks, security scanner (AgentShield)
- NousResearch/hermes-agent (257k) — Adaptive multi-provider agent with messaging gateways, cron, terminal UI
- addyosmani/agent-skills (110k) — 25 prod-grade engineering skills by Addy Osmani

---

## GitHub Topics: claude-code-skills (sorted by stars)

Top active items:
- shanraisshan/claude-code-best-practice (68k, Oct 24) — in 10/21 digest
- sickn33/agentic-awesome-skills (48.4k, Oct 24) — in 10/21 digest
- VoltAgent/awesome-agent-skills (36.3k, Oct 24) — in 10/21 digest
- OthmanAdi/planning-with-files (27.6k, Oct 23) — in 10/21 digest
- wanshuiyin/Auto-claude-code-research-in-sleep (18k, Oct 24) — in 10/21 digest

---

## MCP Server Topic (recently updated)

- archestra-ai/archestra (4.4k, Oct 24) — Enterprise AI platform with MCP registry + gateway
- HoldMyBeer-gg/blenderwright (175, Oct 24) — Blender MCP server
- ashlrai/phantom-secrets (18, Oct 24) — Swaps real API keys for placeholder tokens (security)

---

## Claude Code Official Changelog (Oct 21–24)

| Version | Date | Key changes |
|---------|------|-------------|
| v2.1.310 | Oct 23 | Monitor tool on Bedrock/Vertex/Foundry; Enterprise custom roles; Windows hook fail-open fix |
| v2.1.309 | Oct 22 | Large security release: sandbox shell startup file leak fixed, MCP config protection, redirect-based deny-rule bypass fixed, Windows PowerShell cd/Set-Location hardening |
| v2.1.308 | Oct 22 | Bug fixes only |
| v2.1.307 | Oct 21 | `claude_code.safety_event` OTel event; `@claude review stop`; HTTP MCP duplicate call fix |

**Most notable:** v2.1.309 is the largest security release since plugin sandboxing shipped. Multiple sandbox escape vectors closed.

---

## Other Sources

- simonwillison.net: DNS failure, couldn't access
- Product Hunt: No major Claude Code launches found in October 2026 window
- Reddit/HN: DNS failures on direct access; no specific threads found via web search
- devflokers article on trending repos: DNS failure

---

## Items Already in Submissions.json (skip)
- taste-skill (leonxlnx)
- paperclipai/paperclip

## Items Already in Last 3 Digests (recurring or drop)
- 10/23: farion1231/cc-switch, nextlevelbuilder/ui-ux-pro-max-skill, graphifylabs/graphify, juliusbrussee/caveman, thedotmack/claude-mem, stablyai/orca, panniantong/Agent-Reach, tt-a1i/archify, rtk-ai/rtk, cheaper-inference/OmniRoute, egonex-ai/Understand-Anything
- 10/22: DietrichGebert/ponytail, headroomlabs/headroom, stablyai/orca (Day 3)
- 10/21: morluto/rea, shanraisshan/claude-code-best-practice, sickn33/agentic-awesome-skills, VoltAgent/awesome-agent-skills, OthmanAdi/planning-with-files, wanshuiyin/ARIS, vibheksoni/stealth-browser-mcp, ljagiello/ctf-skills
