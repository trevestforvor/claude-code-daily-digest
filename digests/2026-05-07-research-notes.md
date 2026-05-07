# Research Notes — 2026-05-07

## Summary
Heavy-signal day dominated by the **Code with Claude 2026 developer conference** held in San Francisco on May 6 (yesterday). Three major Anthropic announcements plus four v2.1.x releases in 72 hours. Community ecosystem: new cross-agent skills library, updated ultimate guide, and a notable MCP security disclosure getting HN traction.

---

## YouTube Coverage

### @indydevdan (IndyDevDan, 129K subs)
- "My Pi Agent Teams. Claude Code Leak SIGNAL. Harness Engineering" (recent, April 2026) — covers pi coding agent ecosystem as a Claude Code alternative/cross-compatible harness, pi-skills repo (badlogic), pi-subagents, disler/pi-vs-claude-code. Signal: Pi agent skill cross-compatibility is shaping the skill ecosystem.
- "How to Use Claude Code for FREE (2026)" — 6 days ago. About running Claude Code against free endpoints/proxies.
- No specific tools extracted (YouTube pages 403 on WebFetch).

### @Chase-H-AI (Chase AI, 109K subs)
- "Claude Code + Higgsfield MCP = Content MACHINE" — 1 week ago. Covers Higgsfield MCP (already in April 30 digest).
- "Top 10 Claude Code Skills, Plugins & CLIs (April 2026)" — 1 month ago. No new items.

### @simonscrapes (Simon Scrapes, 71.8K subs)
- "Don't Fall Behind! Every Claude Code Update (Apr 2026)" — late March/early April 2026. Covered April updates.
- "Build Real AI Systems With Claude Code (Step-by-Step)" — 3 weeks ago.
- No items from past 72h from this channel.

### @TechWithTim (Tech With Tim, 2M subs)
- "Code with Claude 2026: Opening Keynote" — 1 day ago. Covers the Code with Claude SF event, Anthropic announcements.
- "Claude Code In One Shot | Build Production Ready Apps | 2026" — 4 days ago.

### @charlieautomates (Charlie Automates, 8K subs)
- No new Claude Code videos in past 7 days found. Charlie is getting married May 30 (noted on website). Likely posting less.
- Charlie was featured on graphify (April 29 digest) as creator_buzz.

### @DevelopersDigest (Developers Digest, 61.5K subs)
- Not specifically searched; site:youtube.com results were mixed with other content.

### @UICollectiveDesign (UI Collective, 52.5K subs)
- Not specifically searched in this run.

### @adrienaidesigner (Adrien AI Designer, 4K subs)
- Not searched (time constraint).

**Creator buzz summary:** No item covered by 2+ YouTubers this run. @TechWithTim covered the Code with Claude 2026 event (boosting event-related items).

---

## Code with Claude 2026 (May 6 — San Francisco) — Main Signal

Three announcements at the event plus widely-covered rate limit increase:

### 1. Claude Managed Agents: Dreaming + Outcomes + Multi-Agent Orchestration
- **Dreaming** (research preview): scheduled background process reviews past sessions, extracts patterns, curates memory stores, self-improves agents. Users control how much automation (fully automatic or review-before-apply).
- **Outcomes** (public beta): write a rubric; a separate Claude instance grades output in isolation from the agent's reasoning; Anthropic internal benchmarks show +10 percentage-point success on hardest tasks.
- **Multi-Agent Orchestration** (public beta): lead agent breaks task into sub-tasks, assigns to parallel sub-agents on shared filesystem, all traceable in Claude Console.
- Coverage: SD Times, Digital Trends, SiliconANGLE, The Decoder, The New Stack, CryptoBriefing, Techzine, 9to5Mac, US News, TestingCatalog.
- URL: platform.claude.com/docs/en/managed-agents + https://thenewstack.io/anthropic-managed-agents-dreaming-outcomes/

### 2. Rate Limits Doubled + SpaceX Deal
- 2x limits for Pro, Max, Team, Enterprise (seat-based); peak-hours removed for Pro/Max.
- API Tier 1: +1,500% input tokens/min, +900% output tokens/min.
- SpaceX deal: 220,000+ NVIDIA GPUs at Colossus 1 Memphis.
- Coverage: Engadget, 9to5Google, PCWorld, XDA, Dataconomy, MakeUseOf.
- URL: https://www.anthropic.com/news/higher-limits-spacex

### 3. Claude Code on Desktop (new surface)
- Full-screen native desktop app (third surface after CLI and IDE extensions).
- Full-screen preview, image display, rich outputs.
- Anthropic also highlighted /ultrareview (cloud fleet of bug-hunting agents, in public research preview since Week 17 April 20-24).
- URL: https://claude.com/code-with-claude/san-francisco

---

## Claude Code Releases (May 4–6)

Four releases: v2.1.128, v2.1.129, v2.1.131, v2.1.132.
- `--plugin-url <url>` to fetch plugin .zip from any URL (v2.1.129)
- `skillOverrides` setting: off/user-invocable-only/name-only (v2.1.129)
- `CLAUDE_CODE_PACKAGE_MANAGER_AUTO_UPDATE` (v2.1.129)
- `CLAUDE_CODE_SESSION_ID` in Bash subprocess env (v2.1.132)
- Ctrl+R searches all prompts across all projects by default (v2.1.129)
- Fixed: unbounded MCP stdio memory growth, in-project Bash permission rules, NFD character corruption in vim (v2.1.132)

---

## Community Signals

### alirezarezvani/claude-skills
- 5,200+ GitHub stars, 232+ skills across 9 domains, works with 9 coding agents.
- Version 2.3.0 (April 11, 2026).
- Not in any prior digest.

### FlorianBruniaux/claude-code-ultimate-guide
- 181 installable plugin templates, 48 Mermaid diagrams, 271-question quiz.
- 655 malicious-skills database + 28 CVE threat modeling docs.
- Updated ~3 days ago (May 4-5).
- Not in any prior digest. Star count unverified.

### steipete/claude-code-mcp
- ~1.1k stars, by Peter Steinberger (@steipete).
- Wraps Claude Code as one-shot MCP tool — "agent in your agent."
- Complements Anthropic's new Multi-Agent Orchestration launch.
- Not in any prior digest.

### MCP Token Theft — Mitiga Research
- Attack chain: inject malicious MCP server into ~/.claude.json → intercept OAuth tokens → persistent SaaS access.
- Disclosed to Anthropic April 10; Anthropic said "out of scope" April 12.
- Covered: SecurityWeek, HN discussion.
- URL: https://www.mitiga.io/blog/claude-code-mcp-token-theft-mitm

### Pi Coding Agent Ecosystem
- badlogic/pi-skills: Claude Code-compatible skills for pi (open-source CC competitor from Mario Zechner).
- IndyDevDan covered "Pi Agent Teams" in April. Cross-agent skill compatibility pattern emerging.
- Not strong enough for this digest (stars unverified).

---

## Dedup Check
Items NOT in submissions.json or last 7 days of digests:
- claude-managed-agents-dreaming-outcomes ✓ NEW
- anthropic-doubled-limits-spacex ✓ NEW
- claude-code-on-desktop ✓ NEW
- claude-code-v2-1-128-132 ✓ NEW
- alirezarezvani-claude-skills ✓ NEW
- florian-claude-code-ultimate-guide ✓ NEW
- claude-code-mcp-steipete ✓ NEW
- mcp-token-theft-mitiga ✓ NEW
- hermes-agent (May 3 Day 1 → Day 5 today) — RECURRING
- garrytan-gstack (May 3 Day 1 → Day 5 today) — RECURRING
- cc-switch (May 3 Day 1 → Day 5 today) — RECURRING
- oh-my-openagent (May 3 Day 1 → Day 5 today) — RECURRING
- career-ops (May 3 Day 1 → Day 5 today) — RECURRING (borderline)
- nanobot (May 3 Day 1 → Day 5 today) — RECURRING (borderline)
