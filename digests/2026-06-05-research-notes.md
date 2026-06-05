# Research Notes — 2026-06-05

## YouTube Coverage

### @Chase-H-AI (109K subs)
- **"Your Claude Code Carousels Suck (Here's The Fix)"** — posted 3 days ago (June 2, 2026). Covers carousel skill ecosystem for social media content creation. Specific skills/repos: instagram-carousel-skill (jeevanbavandla), threads-carousel-claude-skill (itchernetski), open-carrusel (Hainrixz). Strong design signal.
- **"Claude Code + Higgsfield MCP = Content MACHINE"** — posted April 29, 2026 (outside 72h window).

### @indydevdan (129K subs)
- **"Claude 4 ADVANCED AI Coding: How I PARALLELIZE Claude Code with Git Worktrees"** — recent video. Popularized the parallel worktrees pattern; parallel-code (johannesjo) likely spun out of or inspired by this trend.
- **"Agent Experts: Finally, Agents That ACTUALLY Learn"** — recent, discusses agentic memory patterns but no specific tool to extract.

### @TechWithTim (2M subs)
- Recent: "I Built the Same App With Claude Code and Codex" — comparison piece, no specific tools to extract as items.
- No videos from past 7 days with actionable tool coverage.

### @simonscrapes (71.8K subs)
- Content visible: "Don't Fall Behind! Every Claude Code Update (Apr 2026)" — April, outside window.
- No verifiable YouTube content from past 7 days.

### @DevelopersDigest (61.5K subs)
- No specific videos with tool coverage found in past 7 days via search.

### @charlieautomates (8.08K subs)
- Website blog: "Claude Code Remote Just Ended OpenClaw: Here's Why I Switched" (recent blog post but couldn't access body, no specific tools extracted beyond Claude Code Remote itself).
- No verifiable YouTube video from past 7 days.

### @UICollectiveDesign (52.5K subs) and @adrienaidesigner (4K subs)
- No Claude Code content in past 7 days found.

---

## High-Signal Candidates (Past 72h)

### Anthropic Official
1. **"When AI Builds Itself"** (anthropic.com/institute/recursive-self-improvement, June 4) — Claude wrote >80% of Anthropic's production code in May 2026. Engineers shipping 8x code/day vs 2024.
2. **Claude Code v2.1.163 + v2.1.165** (June 4-5) — managed settings with version guards (`requiredMinimumVersion`/`requiredMaximumVersion`), `/plugin list` with filters, `Stop`/`SubagentStop` hooks returning `additionalContext`, `\$` escape in skill bodies.
3. **Code with Claude Tokyo** — June 10, 2026 (5 days out), with Extended June 11.

### Cost/Token Stories
4. **Uber $1,500 monthly cap** (June 2-3) — Bloomberg, Fortune, Simon Willison coverage. Uber burned entire 2026 AI budget in 4 months on Claude Code + Cursor. COO questioning ROI.
5. **zilliztech/claude-context** (9.8k stars) — Code search MCP, 40% token reduction via semantic search + AST chunking. Incremental indexing via Merkle trees.

### VIRAL (GitHub Stars)
6. **claude-code-best-practice** (shanraisshan, 56.5k stars, 903 commits) — "from vibe coding to agentic engineering," 83 tips, covers Subagents/Commands/Skills/Workflows/Hooks. Hit GitHub Trending Day #1 in March 2026.
7. **antigravity-awesome-skills** (sickn33, 39.8k stars, v12.0.0 released June 3) — 1,508+ installable skill playbooks for Claude Code, Cursor, Codex, Gemini. `npx antigravity-awesome-skills`.
8. **last30days-skill** (mvanhorn, 28.1k stars, v3.3.0 May 17) — researches any topic across Reddit/X/YouTube/HN/Polymarket/Bluesky, synthesizes grounded summary with citations. Was #1 GitHub trending when launched.
9. **VoltAgent/awesome-agent-skills** (24.3k stars) — 1000+ official skills from Anthropic, Google, Vercel, Stripe; updated May 29, 2026.

### Design
10. **open-carrusel** (Hainrixz, 303 stars) — AI Instagram carousel builder: chat with Claude, get Next.js/Puppeteer rendered PNGs at 1080×1350px. MIT, local-first.
11. **instagram-carousel-skill** (jeevanbavandla) — Claude Code + Claude.ai skill for pixel-perfect branded carousels. Covered by Chase AI 3 days ago.

### General / Tools
12. **parallel-code** (johannesjo, 703 stars, v1.10.0 June 1) — run Claude Code, Codex, Gemini side by side in isolated git worktrees. IndyDevDan popularized the pattern.
13. **Unabyss** (PH #1 May 25, 454 upvotes) — MCP personal context vault (persona.md, voice.md, company.md). Claude Code install: `claude mcp add --transport http unabyss https://mcp.unabyss.com/`.

---

## Dedup Check (vs submissions.json + last 7 digest days)
None of the above appear in submissions.json or digests/2026-05-29 through 2026-06-04.

Note: ARIS (auto-research-in-sleep) was in June 3 digest — last30days-skill is a different project.
Note: jeremylongshore/claude-code-plugins-plus-skills was June 3 — VoltAgent/awesome-agent-skills is different.
Note: composio-awesome-claude-plugins was June 3 — VoltAgent is different.

## Elapsed Time at Notes-Write
~342 seconds (~5.7 min of 20-min cap).
