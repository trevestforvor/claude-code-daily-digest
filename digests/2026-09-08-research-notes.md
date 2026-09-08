# Research Notes — 2026-09-08

**Run started:** 2026-09-08 16:13 UTC  
**Research cap:** 1200s  
**Sources checked:** YouTube (search, 5 channels), GitHub trending, GitHub topics, HN, Reddit, Anthropic changelog, releasebot.io (blocked), Simon Willison (blocked), chaseai.io (blocked), charlieautomates.com (blocked), agent-skills.cc (blocked)

---

## YouTube Coverage (Past 7 Days)

### @Chase-H-AI (109K subs)
- **"The #1 Claude Code Design Skill Just Got a HUGE Upgrade"** — Covers Impeccable 4.0 upgrade (Aug 4). Outside 7-day window but the key Impeccable coverage.
- **"Claude Code Just Got Its Biggest Design Upgrade Of The Year (And Here's How To Master It)"** — ~2 weeks ago (~Aug 25). Also outside 7-day window.
- **"This Skill Turns Fable 5 & GPT 5.6 Into Web Design MONSTERS"** — Title only found; date unknown. Could not fetch YouTube or chaseai.io (egress blocked).
- **"Claude Code + Higgsfield MCP = Content MACHINE"** — Date unknown; focuses on Higgsfield MCP integration.
- **"Your Claude Code Carousels Suck (Here's The Fix)"** — Date unknown.
- _No confirmed videos within strict 7-day window (Sept 1–8). Will not populate `creator_buzz` for Chase-H-AI this run._

### @charlieautomates (8K subs)
- **"Claude Code Remote Just Ended OpenClaw"** — charlieautomates.com/blog confirmed. Covers Claude Code Remote + OpenClaw comparison (date unknown; charlieautomates.com egress blocked).
- **"Build an Agentic OS in 3 Steps"** — Ongoing Graphify/SEED/PAUL/Hermes/Railway coverage. Featured Graphify prominently. Previously documented in digest as `graphify` entry.
- _No new videos verified in strict 7-day window. `creator_buzz: @charlieautomates` retained only for graphify (prior confirmed coverage)._

### @indydevdan (129K subs)
- **"Every New Claude Code Feature Explained! (2026)"** — Exists on YouTube. Date not confirmed within 72h. Claude Code Deep Mastery playlist active.
- _No specific new tool or plugin surfaced from this channel in past 72h._

### @simonscrapes (71.8K subs)
- **"How to use Claude Code For Free in 2026"** — ~1 week ago. Focuses on cost-reduction methods (not a specific new tool).
- _No new tool item surfaced._

### @adrienaidesigner, @UICollectiveDesign, @DevelopersDigest, @TechWithTim
- No specific new videos surfaced in past 72h for these channels.

---

## Key New Candidates Found

### 1. Impeccable 4.0 — pbakaus/impeccable (66.5K stars)
- DESIGN skill. 23 commands, 61 deterministic detector rules, in-browser live mode.
- v4.0 added Live mode and Worlds for visual iteration. Chase-H-AI: "The #1 Claude Code Design Skill."
- Install: `npx impeccable install`, then `/impeccable init`
- **Not in any recent digest (sept4–sept7). Strong DESIGN candidate.**

### 2. ECC — Everything Claude Code — affaan-m/ECC (254K stars)
- Agent harness performance optimization system. 286 skills, 68 agents, 94 commands.
- ECC 2.1 added Plan Canvas (browser-based plan review), Kimi Code support, self-hosted compute via Itô GPU marketplace.
- Install: `npx ecc-universal setup`
- **Not in any recent digest. Trending at 250.4K on Sept 6 leaderboard (+6,361 in week).**

### 3. DeepSeek Harness — deepseek-ai/deepseek-harness (216.1K stars)
- Everything-is-a-plugin agent framework by DeepSeek AI. Published Aug 13; 95K stars in first 2 days.
- Claude Code and Codex work as plugins within it. Web UI + SSH run modes.
- Install: `npx @deepseek-ai/dsh web`
- **Not in any recent digest. Viral item with extraordinary growth.**

### 4. Claude Code Self-Hosted Runner (public beta)
- Anthropic public beta for Team/Enterprise. Run Claude Code sessions on your own infrastructure.
- Single command: `claude self-hosted-runner`. Keeps repo/artifacts local; inference still via Anthropic API.
- Primary URL: `https://claude.com/blog/run-claude-code-sessions-on-your-own-compute`
- **Not in any recent digest.**

### 5. alirezarezvani/claude-skills (25.7K stars, up from 25.5K on Sept 4)
- Already in digest as recurring. Day 9 for Sept 8. Star count growing.

### 6. FlorianBruniaux/claude-code-ultimate-guide (5.9K stars, updated Sept 5 v3.43.0)
- Comprehensive documentation guide. Too low star count to justify new slot when better items available.
- Skipped in favor of stronger items.

---

## GitHub Trending / Leaderboard Data (Sept 6, 2026)
Source: githublb.vercel.app/topic/claude-code

| Repo | Stars | Week Growth |
|------|-------|-------------|
| archify | 50.1K | +20,676 (+70.3%) |
| skills (mattpocock) | 253.5K | +12,896 (+5.4%) |
| ponytail | 128.6K | +12,612 (+10.9%) |
| deepseek-harness | 213.6K | +10,771 (+5.3%) |
| ECC | 250.4K | +6,361 (+2.6%) |

Items already in digest: archify (Sept6), mattpocock-skills (recurring), ponytail (comeback Sept7).
New items from this data: deepseek-harness, ECC.

---

## Claude Code Changelog (Sept 4–8)
- **v2.1.263 (Sept 6)**: Bug fixes only.
- **v2.1.261 (Sept 4)**: bashOutputMaxChars/taskOutputMaxChars (up to 128K), auto-compact for 1M-context models, --append-subagent-system-prompt-file, improved prompt caching fix. These features were published Sept 4 and covered in the "claude-code-changelog-sept5" entry from the Sept 5 digest (per overlap analysis). No standalone changelog entry needed for Sept 8.

---

## HN Items
- "Show HN: Playwright Skill for Claude Code — Less context than playwright-MCP" (HN #45642911). Interesting but could not retrieve the GitHub URL due to egress blocking. Skipped to avoid fabricating URL.
- "Show HN: UI and MCP server for analyzing Claude Code history" (HN #46500801). Could not retrieve details.

---

## Reddit / Other
- Reddit discussions about usage limits and skills, consistent with what's already in the digest.
- Product Hunt: No new Claude Code skills with verified URLs found.

---

## Recurring Items to Continue (Sept 8)

| Slug | First Featured | Day Count Sept 8 | Still Trending? |
|------|---------------|-----------------|-----------------|
| caveman | Aug 23 | Day 17 | Yes — 103.9K stars, v2.5.0 live |
| claude-code-limits-sept14 | Aug 27 | Day 12 | **Yes — 5 days until cutover!** |
| fable-5-1 | Sept 1 | Day 8 | Yes — cache cost story |
| andrej-karpathy-skills | Aug 30 | Day 10 | Yes — ~209K stars |
| planning-with-files | Aug 31 | Day 8 | Yes — 26.6K stars |
| oh-my-openagent | Sept 6 | Day 3 | Yes — 68.8K stars |
| graphify | Aug 25 | Day 15 | Yes — @charlieautomates buzz |
| obra-superpowers | Aug 11 | Day 28 | Fading; still #1 by stars |
| ponytail | Comeback Sept 7 | Comeback Day 2 | Yes — star surge |
| orca | Sept 5 | Day 4 | Yes — 62.6K stars |
| alirezarezvani-claude-skills | Aug 31 | Day 9 | Yes — growing |

Items dropped for space: agentic-awesome-skills, mattpocock-skills, voltagent-awesome-agent-skills, claude-code-best-practice, claude-bughunter.
