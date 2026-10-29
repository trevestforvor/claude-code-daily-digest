# Research Notes — 2026-10-29

## Sources Checked

### YouTube (YouTubers from sources/youtubers.json)
YouTube is **not accessible** from this cloud session's network policy (DNS resolution fails for youtube.com). No direct channel pages or video listings could be fetched. No YouTuber coverage verified for this run.

**YouTube coverage summary (all channels):**
- @charlieautomates — Could not access; no videos verified this week
- @Chase-H-AI — Could not access; no videos verified this week
- @adrienaidesigner — Could not access; no videos verified this week
- @indydevdan — Could not access; no videos verified this week
- @simonscrapes — Could not access; no videos verified this week
- @UICollectiveDesign — Could not access; no videos verified this week
- @DevelopersDigest — Could not access; no videos verified this week
- @TechWithTim — Could not access; no videos verified this week

*No creator_buzz entries added this run due to access restriction.*

### GitHub Topics
- `claude-skills` topic: 15 repos fetched, sorted by recent update (Oct 22-29 window)
- `claude-code-plugins` topic: 21 of 908 repos fetched

### Other Sources
- `reddit.com r/ClaudeAI, r/ClaudeCode`: site: operator returned no Reddit results; indirect signal from aggregators only
- `HN (hn.algolia.com)`: No direct HN threads confirmed past week. One third-party source confirmed `ayghri/i-have-adhd` hit 324 pts / 256 comments on HN (specific date not confirmed but within recent window)
- `Anthropic release notes` (support.claude.com): Direct fetch confirmed Oct 2026 entries
- `simonwillison.net`: No results for October 2026
- `Product Hunt`: No October 2026 launches confirmed

---

## October 2026 Anthropic Official Releases

| Date | Item | Notes |
|------|------|-------|
| Oct 21 | Claude Duet research preview | Proactive agent app for Pro/Max plans |
| Oct 15 | Code Review GA (Team/Enterprise) | From secondary source; not confirmed on official notes |
| Oct 9 | Claude Managed Agents dynamic workflows (beta) | Platform release notes |
| Oct 7 | Claude Haiku 5.5 | Cheapest/fastest Anthropic model |
| Oct 7 | Monthly API credits for Max/Team | Link Claude Console org in billing |

---

## GitHub Topics Summary (Oct 22-29 active)

### claude-skills topic (top by stars, not in prior digests)
| Repo | Stars | Last Updated | Status |
|------|-------|-------------|--------|
| ayghri/i-have-adhd | 59.3k | Oct 19 | NEW — HN viral (324pts, 256 comments) |
| wshobson/agents | 42.0k | Oct 26 | NEW — multi-harness plugin marketplace |
| VoltAgent/awesome-agent-skills | 36.6k | Oct 29 | NEW — 1,000+ curated skills |
| nanocoai/nanoclaw | 31.1k | Oct 28 | NEW — container-isolated agent framework |
| alirezarezvani/claude-skills | 29k | Oct 29 | NEW — 380+ skills collection |
| alchaincyf/huashu-design | 28.1k | Oct 23 | NEW — HTML-native design skill |

### claude-code-plugins topic (top by stars, not in prior digests)
| Repo | Stars | Last Updated | Status |
|------|-------|-------------|--------|
| wesammustafa/Claude-Code-Everything-You-Need-to-Know | 3.5k | Oct 29 | NEW — comprehensive guide |
| jeremylongshore/tons-of-skills-marketplace | 2.9k | Oct 29 | NEW — model-agnostic marketplace |
| quemsah/awesome-claude-plugins | 1.5k | Oct 29 | NEW — automated plugin index |
| timescale/pg-aiguide | 1.9k | Oct 28 | NEW — PostgreSQL MCP + skills |
| bitwize-music-studio/claude-ai-music-skills | 607 | Oct 28 | NEW — music production skills |
| boshu2/agentops | 450 | Oct 28 | NEW — DevOps for AI agents |
| athola/claude-night-market | 343 | Oct 28 | NEW — 23 plugins (TDD, git, PR) |
| hamzafer/claude-code-mods | 407 | Oct 27 | NEW — hook-based mods |
| firecrawl/firecrawl-claude-plugin | 249 | Oct 25 | NEW — Firecrawl web scraping plugin |

### Already covered in prior digests (skipped)
- paperclipai/paperclip (10-27), thedotmack/claude-mem (10-26), tt-a1i/archify (10-26), Egonex-AI/Understand-Anything (10-26), code-yeongyu/oh-my-openagent (10-26), coreyhaines31/marketingskills (10-26), K-Dense-AI/scientific-agent-skills (10-26), OthmanAdi/planning-with-files (10-26), mksglu/context-mode (10-27), phuryn/pm-skills (10-27)

---

## Install Commands Verified
- `alchaincyf/huashu-design`: `npx skills add alchaincyf/huashu-design` (README confirmed)
- `wshobson/agents`: `/plugin marketplace add wshobson/agents` then `/plugin install <name>@claude-code-workflows` (README confirmed)
- `nanocoai/nanoclaw`: `git clone https://github.com/nanocoai/nanoclaw.git nanoclaw-v2 && bash nanoclaw.sh` (README confirmed)
- `ayghri/i-have-adhd`: `claude plugin marketplace add ayghri/i-have-adhd` (secondary source, INSTALL.md exists per README)
