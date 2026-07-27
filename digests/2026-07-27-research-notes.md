# Research Notes — 2026-07-27

## Timer
Research started; elapsed ~480s at time of writing (limit 1200s).

---

## YouTube Coverage (past 7 days)

### @charlieautomates (8K subs)
- **"#1 Claude Code Repo Today (Nobody's Talking About It)"** — ~3 weeks ago (≈July 6–7). Featured: **Egonex-AI/Understand-Anything** (74.7K stars) — multi-agent pipeline that builds an interactive knowledge graph + web dashboard for any codebase. Strong buy signal.
- **"2 Claude Code Repos NOBODY'S Talking About Yet"** — April 3, 2026. Too old for this digest.
- **"SEED + PAUL = Claude Code Meta"** — March 25, 2026. Too old, but PAUL/SEED are now resurging (PAUL 1K stars, SEED 281 stars).
- "Understand Anything" blog post (charlieautomates.com) — covers Egonex-AI/Understand-Anything in depth.

### @Chase-H-AI (109K subs)
- **"3 Ways To Fix Claude Code's #1 Web Design Problem"** — ≈4 days ago (≈July 23). Focuses on Anthropic's official `frontend-design` plugin. frontend-design already in submissions.json (via impeccable/taste-skill).
- **"This Skill Turns Fable 5 & GPT 5.6 Into Web Design MONSTERS"** — 2 weeks ago. Covers a multi-model skill running Fable 5 (planning) + GPT 5.6 in Codex (build). Not a standalone repo to feature.

### @indydevdan (129K subs)
- No videos from past 7 days found in search. Recent content: Claude Code workflow videos from Jan–Mar 2026. Skip this run.

### @simonscrapes (71.8K subs)
- No videos from past 7 days specifically about Claude Code found. Skip this run.

### @UICollectiveDesign (52.5K subs)
- No recent videos in past 7 days found. Skip this run.

### @DevelopersDigest (61.5K subs)
- No specific videos from past 7 days found. Skip this run.

### @TechWithTim (2M subs)
- No specific recent videos found. Skip this run.

### @adrienaidesigner (4K subs)
- No specific recent videos found. Skip this run.

**YouTuber boost signal:** Egonex-AI/Understand-Anything covered by @charlieautomates (3 weeks ago, still strong). No item was covered by 2+ YouTubers in the past 7 days.

---

## GitHub / Product / Anthropic Sources (past 72h)

### Claude Code Releases (July 24–27)
- **v2.1.220** (July 25) — bug fixes and reliability improvements only. Not worth standalone item.
- **v2.1.219** (July 24) — Claude Opus 5 default, DirectoryAdded hook, sandbox.network.strictAllowlist, depth-3 subagents. Already in digest.
- **v2.1.218** (July 22) — `/code-review` now runs as background subagent (doesn't fill conversation), stacked /commands target it, screen-reader text deletion announcements, Windows path fix. 37 total changes. NOT in any prior digest. Good item.

### Anthropic Official
- Claude Opus 5: still Day 3 (launched July 24). Ecosystem adoption continuing.
- No new Anthropic news in past 72h beyond Opus 5 adoption.

### High-Signal Repos Found (not in submissions.json, not in recent digests)
1. **Egonex-AI/Understand-Anything** — 74.7K stars. Multi-agent pipeline builds knowledge graph + interactive web dashboard for any codebase. Works with Claude Code, Codex, Cursor, Copilot, Gemini CLI. Featured by @charlieautomates.
   - Install: `/plugin marketplace add Egonex-AI/Understand-Anything && /plugin install understand-anything`
   - Also: GoodDingo/understand-anything fork (53.5K stars)

2. **ChristopherKahler/paul** — 1K stars. Plan-Apply-Unify Loop for Claude Code. Enforces strict Plan→Apply→Unify cycle with acceptance-criteria-first development. Paired with:
   - **ChristopherKahler/seed** (281 stars) — AI project incubator (type-aware interview → structured plan ready for PAUL)
   - **ChristopherKahler/carl** — Context Augmentation & Reinforcement Layer (keyword-matched domain rules, just-in-time)
   - Install: `npx paul-framework` (on npm as paul-framework 1.4.0)

3. **rohitg00/awesome-claude-code-toolkit** — 135 agents, 35 curated skills (+400K via SkillKit), 42 commands, 176+ plugins, 20 hooks, 15 rules, 7 templates, 14 MCP configs, 26 companion apps, 52 ecosystem entries. Was #1 GitHub trending Feb 2026.
   - Install: `git clone https://github.com/rohitg00/awesome-claude-code-toolkit`

4. **jeremylongshore/claude-code-plugins-plus-skills** — 425 plugins, 2,810 skills, 200 agents. Open-source marketplace at tonsofskills.com with ccpi CLI package manager. Updated daily via GitHub Actions. 2.4K stars.
   - Install: See README / tonsofskills.com

### Items from submissions.json to SKIP (already submitted)
- dive-into-claude-code (VILA-Lab) — already in submissions.json (added 2026-05-03)
- frontend-design plugin — impeccable + taste-skill + anthropic-theme-factory already in submissions.json

### HN / Reddit
- No specific viral HN or Reddit threads from July 24–27 found beyond Opus 5 discussion.

### Blogs
- simonwillison.net: wrote about Claude Opus 5 on July 24. No other fresh items for the digest.

---

## Recurring Status (July 27)

| Item | Days in Digest | Still Trending? |
|------|----------------|-----------------|
| graphify | Day 5 | Yes (~95K stars) |
| andrej-karpathy-skills | Day 10 | Yes (194K+ stars) |
| caveman | Day 4 | Yes (92.3K stars) |
| superpowers | Day 2 | Yes (200K+ stars, 941K installs) |
| ecc | Day 4 | Yes (232K+ stars) |
| cc-switch | Day 4 | Yes (120K stars) |
| claude-mem | Day 4 | Yes (88.3K stars) |
| claude-opus-5 | Day 3 | Yes — Opus 5 ecosystem adoption |
| ralph-wiggum | Day 3 | Yes (139K stars) |
| chrome-devtools-mcp | Day 3 | Yes (47.6K stars) |
| dev-browser | Day 3 | Fading (6.5K stars) — drop |
| planning-with-files | Day 2 | Stable (25.8K stars) — drop to make room |
| claude-code-best-practice | Day 2 | Stable (63.5K) — drop to make room |
| agentic-awesome-skills | Day 2 | Stable (43.9K) — drop to make room |
| wanshuiyin-aris | Day 2 | Fading (13.9K) — drop |

---

## Final 15-Item Lineup

**Fresh:**
1. Egonex-AI/Understand-Anything — DESIGN + viral
2. v2.1.218 /code-review as background — ANTHROPIC
3. ChristopherKahler/paul (PAUL + SEED framework) — DESIGN
4. rohitg00/awesome-claude-code-toolkit — GENERAL
5. jeremylongshore/claude-code-plugins-plus-skills — SKILL

**Recurring:**
6. graphify — Day 5 — DESIGN + COST
7. andrej-karpathy-skills — Day 10 — DESIGN
8. superpowers — Day 2 — SKILL
9. caveman — Day 4 — COST
10. ecc — Day 4 — SKILL
11. cc-switch — Day 4 — GENERAL
12. claude-mem — Day 4 — COST + MCP
13. claude-opus-5 — Day 3 — ANTHROPIC + COST
14. ralph-wiggum — Day 3 — ANTHROPIC
15. chrome-devtools-mcp — Day 3 — MCP
