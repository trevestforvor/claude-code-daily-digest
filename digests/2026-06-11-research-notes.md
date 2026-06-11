# Research Notes — 2026-06-11

## Timing
- Start: 1781194061 (UTC)
- Research window: ~14 min of 20 min cap

---

## YouTube Coverage

### @charlieautomates (8K subs)
- No new videos in past 7 days confirmed. Last verifiable content from March 2026. Skipped this run.

### @Chase-H-AI (109K/175K subs)
- **"Your Claude Code Carousels Suck (Here's The Fix)"** — already covered in June 5 digest (open-carrusel, instagram-carousel-skill).
- **"10 Skills, Plugins, & CLIs that 10x Claude Code (June)"** — already covered June 7 digest.
- No new Chase AI video confirmed in past 72h. Community notes mention recent carousel and Higgsfield content (older).

### @adrienaidesigner (4K subs)
- Several Claude Design tutorials: "Claude Design : le guide complet pour les non designers (2026)" and "Build a Design Portfolio with AI: Claude Design + Google Antigravity". Claude Design was launched April 17 so this content isn't new this week. No specific new video in past 72h confirmed.

### @indydevdan (129K subs)
- **"June 15th: Claude Subscriptions Change"** (https://www.youtube.com/watch?v=l0NL_TPO4JQ) — posted ~3 days ago. Content covers Anthropic's June 15 billing split; ALREADY COVERED in June 9 digest as `anthropic-june15-agent-sdk-billing`. Skipped.
- **"Anthropic Just Put Claude Code Agents on a Meter"** — same topic, already covered June 9.

### @simonscrapes (71.8K subs)
- **"I Made Claude Code FOR TEAMS (It's Incredible)"** — posted ~1 week ago (June 4-5). Covers multi-agent teamwork in Claude Code. Specific tool/repo could not be independently verified from external sources — YouTube 403s blocked fetch. Skipped per guardrails (no fabrication).
- **"How To Use Claude Code Anywhere (VPS & Mobile Setup)"** — posted 3 days ago (June 8). Tutorial about deploying Claude Code on a VPS and accessing from mobile. No specific novel tool/repo identified beyond standard setup guides. Skipped.
- **"Claude Code Just Changed Social Media Carousels Forever"** — same carousel theme, covered June 5.

### @UICollectiveDesign (52.5K subs)
- **"Claude Code for Designers: All the Ways to Use It"** (2 weeks ago) — general Claude Code design overview. No specific new tool/repo.
- **"I Gave Claude Code & Codex Access to 600,000 UI Designs"** (May 11) — features Refero; already in submissions.json.

### @DevelopersDigest (61.5K subs)
- Channel page found, no specific new video confirmed in past 72h. Skipped.

### @TechWithTim (2M subs)
- **"Anthropic Just Put Claude Code Agents on a Meter"** — same billing topic, already covered June 9. No new TechWithTim video confirmed.

---

## Key Items Found (New — Not in Any Prior Digest)

| Item | Stars | Source | Decision |
|------|-------|--------|----------|
| oh-my-claudecode (Yeachan-Heo) | 36.2k | GitHub trending, website | ✅ INCLUDE — VIRAL + COST |
| Claude Code v2.1.172–173 (nested sub-agents) | — | Anthropic changelog June 10-11 | ✅ INCLUDE — ANTHROPIC |
| Boris Cherny Fortune double-header | — | Fortune June 8-9 | ✅ INCLUDE — VIRAL |
| mukul975/cve-mcp-server | 1k | cybersecuritynews.com | ✅ INCLUDE — MCP security |
| elementalsouls/Claude-BugHunter | 1.9k | GitHub | ✅ INCLUDE — skill security |
| zilliztech/claude-context | 11.8k | GitHub | ✅ INCLUDE — MCP + COST |
| 777genius/agent-teams-ai | 1.3k | GitHub | ✅ INCLUDE — plugin |
| cs50victor/claude-code-teams-mcp | small | GitHub | ✅ INCLUDE — MCP |
| hesreallyhim/awesome-claude-code | 46k | GitHub | ✅ INCLUDE — marketplace |
| Microsoft CI/CD security blog (June 5) | — | Microsoft Security Blog | ✅ INCLUDE — security |

## Items Already in Digests (Skipped)
- Claude Opus 4.8 + Dynamic Workflows: covered May 29 digest
- Claude Code safe mode / /cd: covered June 9 digest
- Anthropic June 15 billing change: covered June 9 digest
- Claude Fable 5 in GitHub Copilot: covered June 10 digest
- Graphify: covered June 9 digest
- trailofbits/skills: covered June 10 digest
- CVE-2025-59536 / CVE-2026-21852: patched in Oct 2025 / Jan 2026, old news
- refero.design/mcp: in submissions.json
- steipete/claude-code-mcp: archived May 15, covered May 7

## Items in submissions.json (Skipped)
- refero, impeccable, taste-skill, emil-kowalski-skill, open-codesign, repomix, etc.

## Anthropic Releases (June 9-11)
- v2.1.173 (June 11): Fixed Fable 5 model names with [1m] suffix; fixed spurious "sandbox dependencies missing" warning on Windows
- v2.1.172 (June 10): Sub-agents can now spawn sub-agents (up to 5 levels deep); search bar for plugin browsing; Amazon Bedrock reads AWS_REGION from ~/.aws config; fixed 1M context stuck sessions; fixed wildcard domain rules in WebFetch
- v2.1.170 (June 9): Introducing Claude Fable 5 in Claude Code (COVERED yesterday)

## Anthropic News (June 8-9)
- Boris Cherny: Two Fortune articles at Brainstorm Tech Aspen — June 8 ("tens of thousands of agents") + June 9 ("comparing AI costs to wrong thing")
- Code with Claude Tokyo: Extended Founders Day June 11 (COVERED yesterday)

## Other High-Signal Sources
- Microsoft Security Blog (June 5): Claude Code GitHub Action CI/CD prompt injection → /proc/self/environ secret exfiltration; patched v2.1.128
- cybersecuritynews.com: CVE MCP Server (mukul975) covered June 2026
- HN / Reddit: No new specific tools surfaced (searches returned low-signal results)
- Product Hunt: No new Claude Code launches found in past 72h
- Latent.space: "Claude Code Source Leak" episode is from March 2026 (old)
