# Research Notes — 2026-09-01

## YouTube Coverage

Searches ran for all 8 curated creators. YouTube is egress-blocked for direct page fetches; used web search to surface recent titles.

### Charlie Automates (@charlieautomates)
- Recent videos found: "#1 Claude Code Repo Today (Nobody's Talking About It)" (July 8), "2 Claude Code Repos NOBODY'S Talking About Yet" (April 3), various from June-August.
- No specific Claude Code tool coverage from the past 7 days confirmed. Skip this run.

### IndyDevDan (@indydevdan)
- "Claude Code's New Upgrade Lets You Automate Any Task" posted ~4 weeks ago (August). No confirmed Aug 25–Sep 1 content.
- Skip for creator_buzz this week.

### Chase AI (@Chase-H-AI)
- Top 10 Claude Code Skills, Plugins & CLIs — April 2026 video. No specific Aug 25–Sep 1 content found.
- Skip for creator_buzz this week.

### Tech With Tim (@TechWithTim)
- Multiple Claude Code videos found but none confirmed past 7 days (week of Aug 25–Sep 1).
- Skip this run.

### Simon Scrapes (@simonscrapes)
- "NEW Claude Code Update is ABSURD" — 2 weeks ago (~August 18). No confirmed past-7-day content.
- Skip this run.

### Developers Digest (@DevelopersDigest)
- No specific titles found for past 7 days.

### UI Collective (@UICollectiveDesign) and Adrien AI Designer (@adrienaidesigner)
- No specific recent content found in search results.

**Summary**: No creator confirmed new coverage in the Aug 25–Sep 1 window. No creator_buzz boosts this round.

---

## Key Research Findings

### 1. andrej-karpathy-skills — BRAND NEW TO DIGEST
- **GitHub**: `multica-ai/andrej-karpathy-skills` (also referenced as `forrestchang/andrej-karpathy-skills`)
- **Stars**: ~209K (multica-ai fork), with forrestchang as cited original creator
- **Stars growth**: 97.8K as of April-June → 161K mid-summer → ~209K now — massive sustained growth
- **What it is**: A single CLAUDE.md file + Claude Code plugin/skill encoding Andrej Karpathy's four LLM coding pitfalls (Think Before Coding, Simplicity First, Surgical Changes, Goal-Driven Execution)
- **Install**: `/plugin marketplace add forrestchang/andrej-karpathy-skills && /plugin install andrej-karpathy-skills@karpathy-skills`
- **Signal**: Referenced by multiple blog sites, devtalk forum, byteiota, agentpedia; described as "most popular behavioral guidelines for AI coding agents"
- **Category**: design, skill (behavior/cost reduction angle)

### 2. Claude Code Limits — September 14, 2026 Announcement
- Announced by @ClaudeDevs on August 29, 2026
- Starting Sept 14: permanent +25% to baseline weekly limits (Pro, Max, Team, Enterprise)
- BUT: the temporary +50% boost (in place since May) ends Sept 13
- NET EFFECT: ~17% reduction from today's levels for heavy users
- Coverage: BleepingComputer, AndroidHeadlines, StartupFortune, daily.dev, explainx.ai, implicator.ai
- Community reaction: frustrated; Anthropic framing called out as misleading ("quiet downgrade")
- **Category**: cost, official

### 3. GitHub Trending (weekly, overall) — no Claude-specific items in top 20
- Top weekly trending dominated by general dev tools (Zod, NVIDIA/Ghidra, PostHog)
- InvokeAI (+127 this week) and Giskard-OSS for AI eval are notable but not Claude-specific

### 4. GitHub Topics claude-code-skills
- `csift` (25 stars) — "missing tool to sift Claude Code sessions: regex search across all record types, recover files, extract images, inspect subagent topologies" — small but genuinely useful utility
- `local-ai-code-assistant` (123 stars) — offline Claude on Apple Silicon via MLX
- `claude-code-docs` (49 stars) — official docs as 3MB metadata plugin

### 5. Anthropic What's New (most recent)
- **Week 34 (Aug 17–21, v2.1.234–v2.1.239)**: `/design` artboard workflow in CLI + Desktop; Concise output style; Device cards for remote control; `ANTHROPIC_DEFAULT_MODEL` env var
- **Week 33 (Aug 10–14)**: Auto-continue after usage limit (Desktop); Fork mode on by default; GitLab MR support; `@` session mentions
- Week 34 covered about 2 weeks ago — not brand new news

### 6. Agent Plugins 1.0.0 (Aug 6)
- Open standard from Amazon, Anysphere, Microsoft, OpenAI, Vercel at `github.com/agentplugins/agent-plugins-spec`
- Too old (3.5 weeks) to be hot news today; likely covered in prior digests

---

## Dedup Check

Confirmed not in submissions.json or past 7 days of digests:
- andrej-karpathy-skills ✓ NEW
- claude-code-limits-sept14 ✓ NEW (different from yesterday's aug31 story which was about the boost expiry)

Recurring items still trending (in last 7 days):
- obra-superpowers, ui-ux-pro-max-skill, garrytan-gstack, cathrynlavery-diagram-design, video-shotcraft, generative-media-skills, caveman, claude-mem, mattpocock-skills, hermes-agent-herald, graphify, understand-anything, claude-code-compliance-api, alirezarezvani-claude-skills, agentic-awesome-skills, scientific-agent-skills

---

## Top 15 Ranking Plan

1. andrej-karpathy-skills (DESIGN/skill, 209K, NEW — biggest star count of any new item)
2. claude-code-limits-sept14 (COST/official, NEW — affects all users starting Sept 14)
3. obra-superpowers (skill, 272K, Day 21)
4. mattpocock-skills (skill, 220K, Day 13)
5. hermes-agent-herald (skill+mcp, 238K, Day 8)
6. ui-ux-pro-max-skill (design, 121K, Day 10)
7. graphify (mcp+cost, 112K, Day 7)
8. garrytan-gstack (design+skill, 90K, Day 10)
9. caveman (cost, 102K, Day 9+)
10. claude-mem (cost, 92.6K, Day 9)
11. understand-anything (design+skill, 81K, Day 6)
12. agentic-awesome-skills (skill, 45.6K, Day 4)
13. scientific-agent-skills (skill, 37.6K+, Day 4)
14. alirezarezvani-claude-skills (skill, 25.3K, Day 2)
15. cathrynlavery-diagram-design (design+skill, 26K, Day 10)
