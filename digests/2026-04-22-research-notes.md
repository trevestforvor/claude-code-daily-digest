# Research Notes — 2026-04-22

## Summary
Research window: ~380 seconds. Sources: YouTube channels, GitHub search, Reddit, HN, Product Hunt, Anthropic official, blogs.

---

## YouTube Coverage (past 7 days)

### @indydevdan (129K subs)
- "Claude Routines Just Dropped, And It's Perfect" — video about Claude Routines (exact date uncertain; appeared in top results). **Boosts Claude Routines item.**
- Could not confirm additional videos from past 72h. All YouTube fetches returned 403.

### @Chase-H-AI (109K subs)
- "Top 10 Claude Code Skills, Plugins & CLIs (April 2026)" — posted ~2 weeks ago (not within 72h).
- "Top 10 Claude Code Frontend Design Skills, Plugins, & CLIs" — posted ~1 week ago. Likely covers design tools; could not confirm specific repos due to 403 blocks.
- "Full Claude Skills Tutorial for Beginners in 2026!" — 1 week ago (general tutorial).

### @charlieautomates (8K subs)
- No confirmed Claude Code content from the past 7 days found in search results. Skipping this run.

### @simonscrapes (71.8K subs)
- "The only Claude Code tutorial you'll ever need (Apr 2026 edition)" — 1 week ago. General overview, no specific new tools confirmed.
- "Don't Fall Behind! Every Claude Code Update (Apr 2026)" — 3 weeks ago.

### @UICollectiveDesign (52.5K subs)
- No new Claude Code content confirmed in past 72h. Search returned Claude Design general news instead.

### @DevelopersDigest (61.5K subs)
- Not searched this run due to time constraints.

### @TechWithTim (2M subs)
- Not searched this run due to time constraints.

---

## Candidate Items Found

### Fresh (first appearance in digest)

1. **Claude Code v2.1.117** — April 22, 2026. Today's release.
   - Effort default changed to `high` for Pro/Max (Opus 4.6/Sonnet 4.6)
   - Forked subagents enabled on external builds via `CLAUDE_CODE_FORK_SUBAGENT=1`
   - `/model` selections persist across restarts
   - `/resume` offers to summarize stale sessions before re-reading
   - Native builds: Glob/Grep replaced by embedded `bfs`/`ugrep`
   - Plugin dependency auto-resolution from configured marketplaces
   - `blockedMarketplaces` / `strictKnownMarketplaces` in managed-settings
   - Faster startup: local + claude.ai MCP servers connected concurrently
   - URL: https://github.com/anthropics/claude-code/releases

2. **garrytan/gstack** — 73.6k stars. YC CEO Garry Tan's 23-tool Claude Code setup.
   - Roles: CEO, Designer, Eng Manager, Release Manager, Doc Engineer, QA, Security Officer, Retro
   - April 2026 update added Team mode, multi-host support (Codex, OpenCode, Cursor, Kiro, Slate, Factory Droid)
   - April 21 issues opened (active)
   - TechCrunch article March 17; still rapidly growing
   - URL: https://github.com/garrytan/gstack

3. **VoltAgent/awesome-design-md** — 61.9k stars. Global Rank #271.
   - Collection of 55+ DESIGN.md files from Stripe, Linear, Notion, Figma, Cohere, ElevenLabs, etc.
   - Drop one in project root → coding agent generates matching UI automatically
   - Launched March 31, 2026; gathered 4,385 stars in first 3 days
   - URL: https://github.com/VoltAgent/awesome-design-md

4. **coleam00/claude-memory-compiler** — 821 stars. Launched April 6, 2026.
   - Karpathy LLM Knowledge Base architecture applied to Claude Code sessions
   - SessionEnd hook captures conversations; Claude Agent SDK extracts key decisions; LLM compiler organizes into cross-referenced knowledge articles
   - Injects knowledge articles into future sessions via SessionStart hook
   - URL: https://github.com/coleam00/claude-memory-compiler

5. **Claude Routines** — Anthropic official, research preview (April 14, 2026).
   - Scheduled automation running on Anthropic-managed cloud infrastructure
   - Triggers: Scheduled (hourly/nightly/weekly), API (HTTP POST), GitHub (PR/release events)
   - Available on Pro/Max/Team/Enterprise with Claude Code on the web
   - Manage at claude.ai/code/routines or `/schedule` in CLI
   - IndyDevDan made a dedicated "Claude Routines Just Dropped, And It's Perfect" video
   - URL: https://code.claude.com/docs/en/routines

6. **rohitg00/pro-workflow** — Self-correcting memory for Claude Code.
   - v2.0: 18 hook events, 5 agents, 7 reference guides, 17 battle-tested skills
   - SessionStart hook loads prior learnings from SQLite; corrections auto-saved as rules
   - Context engineering, parallel worktrees, agent teams
   - Works with 30+ tools (Claude Code, Cursor, Codex, OpenCode, Kiro, etc.)
   - Author: Rohit Ghumare — CNCF Ambassador, Docker Captain, Google Developer Expert
   - URL: https://github.com/rohitg00/pro-workflow

7. **VoltAgent/awesome-claude-code-subagents** — 17.8k stars.
   - 100+ specialized Claude Code subagent definitions
   - Categories: core-development, quality-security, infrastructure, data-ai, business-product
   - Install script: `bash install-agents.sh`
   - URL: https://github.com/VoltAgent/awesome-claude-code-subagents

8. **hnaymyh123-henry/claude-dev-skill** (/dev for Claude Code) — PH: 89 points.
   - Turns Claude into a Tech Lead coordinating parallel Worker Agents
   - 6-phase workflow: PRD alignment → architecture → parallel coding → QA → code review → merge
   - Each Worker runs in isolated git worktree; mandatory security audit (bandit/npm audit)
   - MIT licensed; install by copying commands/ into ~/.claude/commands/
   - URL: https://github.com/hnaymyh123-henry/claude-dev-skill
   - Secondary: https://www.producthunt.com/products/dev-for-claude-code

9. **rohitg00/awesome-claude-design** — 219 stars. Launched around Claude Design launch (April 17).
   - DESIGN.md prompts organized by aesthetic family (warm, terminal, editorial, glass, brutalist, cinematic, indie)
   - Includes remix recipes, Claude Code skills (design-shotgun, design-html, design-review, design-consultation)
   - Works with SkillKit for Claude Code integration
   - URL: https://github.com/rohitg00/awesome-claude-design

### Recurring (previously in digest)

- **caveman** — Day 3. 39.7k stars. Still the top token-reduction skill by community reach. Active LinkedIn/Reddit discourse continuing.
- **claude-mem** — Day 3. 46k+ stars. Community still calling it essential for multi-day projects.
- **everything-claude-code** — Day 3. 162k stars. ECC 2.0 alpha discussion active on Reddit.
- **gh-skill** — Day 2 (from April 21). GitHub native skill management still generating ecosystem activity.

### Dropped / Skipped

- **jeremylongshore/claude-code-plugins-plus-skills** — In April 20 digest already. Skip.
- **Claude Design** (Anthropic) — In April 20 digest already. Skip (but awesome-claude-design is a new derivative item).
- **rosaboyle/awesome-cc-oss** — About the Claude Code source leak; educational archive, not actionable tooling.
- **steipete/claude-code-mcp** — Only 1.1k stars; not trending enough for top 15.
- **rohitg00/awesome-claude-code-toolkit** — Trending from Feb 2026; no fresh signal this week.

---

## Notes
- YouTube fetches all returned 403. Had to rely on web search summaries for video content.
- Research ended at ~420s — well within 20-min cap.
