# Research Notes — 2026-09-02

## Timer
START: 1788365305 | Approx elapsed at note-write: ~180s

## YouTube Coverage (past 7 days)

### @charlieautomates (Charlie Automates)
- Recent blog post: "SEED + PAUL = The Claude Code Meta Nobody's Talking About" — covers two free plugins, SEED (turns raw idea into PAUL-ready build plan) and PAUL. Part of the 3-step Agentic OS tutorial (Graphify + SEED + PAUL + Hermes + Railway).
- "#1 Claude Code Repo Today (Nobody's Talking About It)" — featured Understand Anything (already recurring in digest).
- No undiscovered NEW tool surfaced this week beyond what's already tracked.

### @Chase-H-AI (Chase AI)
- Blog post "Impeccable 4.0: Best Claude Code Design Skill" — detailed breakdown of v4.0 features. **However: impeccable is in submissions.json → excluded from digest.**
- "17 Best Claude Code Plugins, Skills & CLIs (2026)" — no single new item not already tracked.
- No new YouTube video found for the past 7 days specifically.

### @indydevdan (IndyDevDan)
- No specific Claude Code content found in past 7 days via search. Skipping this run.

### @simonscrapes (Simon Scrapes)
- "NEW Claude Code Update is ABSURD" — approximately 2 weeks old, covers Claude Code updates. Not within past-7-day window.
- No fresh September content surfaced.

### @UICollectiveDesign, @DevelopersDigest, @TechWithTim
- No September 2026 Claude Code-specific content found in search results. Skipping this run.

---

## Key Findings — New Items

### 1. Fable 5.1 / Mythos 5.1 (Anthropic, Sept 1 2026)
- **URL**: https://www.anthropic.com/news/claude-fable-5-1
- **Signal**: Multiple major tech outlets (VentureBeat, 9to5Mac, BusinessToday, CryptoBriefing)
- Cache reads: $1.00 → $0.25 per million tokens (75% drop). Same headline pricing ($10/$50/M tokens).
- 1M context window, 128K output tokens. New Terminal-Bench 4.0 + Humanity's Last Exam records.
- Mythos 5.1 = restricted-access variant for vetted cybersecurity + life sciences orgs.
- 25–45% effective cost reduction for typical to highly-agentic workloads.
- **Category**: cost, official

### 2. Claude Code Self-Hosted Environments (Anthropic, public beta)
- **URL**: https://claude.com/blog/run-claude-code-sessions-on-your-own-compute
- Announced Aug 6, 2026; now public beta for Team + Enterprise plans.
- Sessions run inside your own network/infrastructure. Compliance-friendly. Files stay on org machines.
- Not available for ZDR orgs.
- **Category**: official

### 3. Statewright
- **URL**: https://github.com/statewright/statewright
- **HN**: https://news.ycombinator.com/item?id=48108778 (120+ upvotes, "Show HN")
- 490 GitHub stars. Rust state-machine engine. Constrains AI agent tool access per workflow phase.
- Claude Code plugin via MCP bridge. Install: `/plugin marketplace add statewright/statewright`
- SWE-bench result: 2/10 → 10/10 on a 5-task subset with two local models.
- "Agents are suggestions, states are laws."
- **Category**: mcp, skill

---

## Items Excluded

- **impeccable**: In submissions.json. Impeccable 4.0 is a major update (63K stars, 253K installs, 23 commands, 177 design worlds, browser editor). Worth tracking but excluded per dedup rules.
- **hermes-agent**: In submissions.json.
- **SEED + PAUL**: Interesting concept from Charlie Automates but no verified GitHub repo/star count found. Skip (can't verify).
- **Unabyss** (Product Hunt): Connects Claude to Slack/Gmail/Notion/GitHub. Too little verifiable data.

---

## Recurring Items (from previous digest)

| Slug | Day | Status |
|------|-----|--------|
| obra/superpowers | 22 | Keep — still #1 by stars |
| andrej-karpathy-skills | 2 | Keep — fresh |
| claude-code-limits-sept14 | 4 | Keep — Sept 14 is 12 days away |
| mattpocock/skills | 14 | Keep |
| caveman | 10 | Keep — cost signal strong |
| claude-mem | 10 | Keep — cost signal |
| cathrynlavery/diagram-design | 11 | Keep — design focus |
| graphify | 8 | Keep — cost/MCP, Charlie coverage |
| garrytan/gstack | 11 | Keep |
| understand-anything | 7 | Keep |
| alirezarezvani/claude-skills | 3 | Keep — fresh |
| agentic-awesome-skills | 5 | Keep |
| scientific-agent-skills | 5 | Drop — niche, make room for new |
| hermes-agent | 9 | Excluded (submissions.json) |

---

## Sources
- Charlie Automates blog: charlieautomates.com
- Chase AI blog: chaseai.io  
- VentureBeat: Fable 5.1 cache pricing
- Anthropic: claude.com/blog/run-claude-code-sessions-on-your-own-compute
- Hacker News: news.ycombinator.com/item?id=48108778
- GitHub: github.com/statewright/statewright
