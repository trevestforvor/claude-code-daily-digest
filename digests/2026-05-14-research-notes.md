# Research Notes — 2026-05-14

## YouTube Coverage (past 7 days)

### @indydevdan (129K subs)
- Covered **mobbin-mcp** within 12 hours of its May 13 launch (confirmed in prior digest)
- Channel has "Claude Code Deep Mastery" playlist, active weekly. No new Claude Code tool launch videos found in past 72h beyond mobbin-mcp.

### @Chase-H-AI (109K subs)
- Found video "Top 10 des Skills, plugins sur Claude Code (mai 2026)" at https://www.youtube.com/watch?v=YcX4VcGBIiU (French title, likely Chase posting multi-language versions)
- Previous videos: "Top 10 Claude Code Skills, Plugins & CLIs (April 2026)" at https://www.youtube.com/watch?v=KjEFy5wjFQg
- Chase covered higgsfield-mcp (confirmed in May 12 digest)
- Could not view video content to confirm specific May 2026 tool picks.

### @simonscrapes (71.8K subs)
- Posted "THIS Gives Claude Skills a Massive Upgrade (It's Easy!)" ~2 weeks ago: https://www.youtube.com/watch?v=FD53kEpLh9c
- Could not view content; suspected to cover mattpocock/skills given timing overlap with that repo's viral growth (+6.4K stars/week)
- Not confirmed, so NOT including in creator_buzz

### @TechWithTim (2M subs)
- No Claude Code-specific videos found via search in past week
- SKIP for this run

### @DevelopersDigest (61.5K subs)
- Posted "Best Claude Code Skills in 2026: A Curated Directory" (general roundup, no specific new tool)
- SKIP for this run

---

## Key Candidates Found

### NEW items (past 72h):

**anthropic-agent-sdk-credits** (COST+ANTHROPIC)
- Announced ~May 12-13, 2026
- Reverses April 2026 ban on third-party agents (OpenClaw, etc.) on Claude subscriptions
- Starting June 15: programmatic usage moves to separate credit pool (Pro: $20/mo, Max 5x: $100, Max 20x: $200; no rollover)
- Also announced: +50% temporary weekly Claude Code limits through July 13 (stacked on earlier 2× 5-hour limit doubling)
- Coverage: VentureBeat, XDA-Developers, HN thread (47633396), InfoWorld
- Primary URL: https://venturebeat.com/technology/anthropic-reinstates-openclaw-and-third-party-agent-usage-on-claude-subscriptions-with-a-catch

**claude-for-small-business** (ANTHROPIC)
- Launched May 13, 2026 — https://www.anthropic.com/news/claude-for-small-business
- 15 workflows + 15 skills + connectors to 8 business tools
- Integrates: QuickBooks, PayPal, HubSpot, Canva, DocuSign, Google Workspace, Microsoft 365, Slack/Square/Stripe/Webflow
- Toggle install inside Claude Cowork; no extra charge
- Coverage: 9to5Mac, Axios, SiliconANGLE, Inc., digit.in

**claude-code-v2-1-141** (ANTHROPIC)
- Released May 13, 2026 at 23:19 UTC
- Key: Rewind "Summarize up to here", `claude agents --cwd`, background agents preserve permission mode, MCP auto-retry 3×, `CLAUDE_CODE_PLUGIN_PREFER_HTTPS` env var, `ANTHROPIC_WORKSPACE_ID` env var

**mattpocock/skills** (DESIGN+SKILL+VIRAL)
- Created Feb 3, 2026; 81.5K stars (+6.4K/week = #1 weekly-trending AI repo on GitHub as of May 14)
- Matt Pocock (Total TypeScript) published his .claude/skills/ directory — 17 Markdown files
- Standouts: caveman (75% token cut), diagnose, tdd, zoom-out, prototype, grill-with-docs, git-guardrails
- Install: `npx skills@latest add mattpocock/skills`

**mvanhorn/last30days-skill** (SKILL)
- 25.8K stars, v3.2.0 released May 10, 2026
- Researches topics across Reddit, X, YouTube, TikTok, HN, Polymarket, GitHub, web simultaneously
- Scores by engagement metrics (upvotes, views, prediction odds) not editorial algorithms
- Install: `/plugin marketplace add mvanhorn/last30days-skill`

### Recurring (still trending):

- **mobbin-mcp** — Day 2 (launched May 13, IndyDevDan covered)
- **awesome-design-md** — Day 3 (~80K stars, climbing)
- **addyosmani-agent-skills** — Day 3 (40.2K stars)
- **playwright-cli** — Day 2 (10.3K stars, 4x token reduction)
- **caveman** — Day 4 (57K+ stars; mattpocock/skills bundles caveman, amplifying signal)
- **rtk** — Day 4 (45.5K stars)
- **claude-for-legal** — Day 2 (Anthropic, May 12)
- **claude-platform-aws** — Day 2 (Anthropic, May 11)
- **claude-managed-agents-2026** — Day 3
- **mitiga-mcp-oauth-attack** — Day 3 (no fix from Anthropic)

### Investigated but skipped:
- **obra/superpowers** (189K stars) — too established, probably covered in older digests; last commit May 4
- **rohitg00/awesome-claude-code-toolkit** — last updated March 2026, 1.7K stars
- **VoltAgent/awesome-agent-skills** — 16.5K stars, general collection, lower signal
- **nblintao/awesome-claude-code-postleak-insights** — April 2026 leak analysis, outside 72h window
- **jeremylongshore/claude-code-plugins-plus-skills** — 2.2K stars, updated March 2026

---

## Dedup Check

None of the new items (anthropic-agent-sdk-credits, claude-for-small-business, claude-code-v2-1-141, mattpocock-skills, last30days-skill) appear in submissions.json or last 7 days of digests.

## Final Ranked List (15 items)

1. mattpocock-skills (DESIGN+SKILL+VIRAL — #1 trending repo)
2. anthropic-agent-sdk-credits (COST+ANTHROPIC — controversial, major impact)
3. claude-for-small-business (ANTHROPIC — new official product)
4. claude-code-v2-1-141 (ANTHROPIC — latest release)
5. mobbin-mcp (DESIGN+MCP — Day 2, IndyDevDan)
6. awesome-design-md (DESIGN — Day 3)
7. addyosmani-agent-skills (DESIGN+SKILL — Day 3)
8. playwright-cli (COST — Day 2)
9. caveman (COST — Day 4, mattpocock crossover)
10. rtk (COST — Day 4)
11. last30days-skill (SKILL — new)
12. claude-for-legal (ANTHROPIC — Day 2)
13. claude-platform-aws (ANTHROPIC — Day 2)
14. claude-managed-agents-2026 (ANTHROPIC — Day 3)
15. mitiga-mcp-oauth-attack (general — Day 3)
