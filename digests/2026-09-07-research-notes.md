# Research Notes — 2026-09-07

## Summary

Research took ~7.5 minutes. YouTube direct fetching blocked (charlieautomates.com, youtube.com domains blocked by egress proxy). Searched via web search for YouTuber content. Found 2 fresh Anthropic items and 1 strong comeback.

---

## YouTube Coverage (September 1–7, 2026)

- **@charlieautomates** — Domain charlieautomates.com blocked by proxy. Search results show blog posts matching prior digest items (SEED+PAUL, Graphify, Agentic OS). No new Sept 4–7 content verifiable.
- **@Chase-H-AI** — Blog posts visible (17 Best Claude Code Plugins, 10 Frontend Design Skills, Claude Code Guide 2026). No specific Sept 4–7 new video found.
- **@indydevdan** — Channel listing blocked. No September 2026-specific new videos surfaced in searches. Known playlist active for Claude Code Deep Mastery.
- **@simonscrapes** — No September 2026 new content found in search results.
- **@UICollectiveDesign**, **@DevelopersDigest**, **@TechWithTim**, **@adrienaidesigner** — Not searched this run (time cap).

No cross-YouTuber viral signal confirmed for any single tool this week.

---

## New Candidates (Past 72h)

### 1. Claude Code 2.1.262 — Workflow Tool 5.7k→1k Token Cut + Managed Settings Fix
- Source: code.claude.com/docs/en/changelog, gradual.ai
- Features: Workflow tool description shrunk from 5,700→~1,000 tokens (script-writing reference moved to bundled `workflow-authoring` skill); client-side timeout, MCP startup-mode, and stream-watchdog env vars no longer trigger settings-approval prompt
- Direct cost savings for any session using the Workflow tool (~4,700 tokens saved per session)
- Not covered in any prior digest (prior changelog items: 2.1.261=Sept4, 2.1.260=Sept3, etc.)

### 2. `ant apply` v1.30.0 — Terraform-Style IaC for Claude Managed Agents (Sept 3)
- Source: platform.claude.com/docs/en/cli-sdks-libraries/cli/apply, alphasignal.ai
- Adds `ant apply` to the `ant` CLI: describe agents, environments, skills, memory stores, and deployments as files, run `ant apply`, approve plan — writes `claude-lock.json` lockfile
- AlphaSignal covered: "Anthropic Ships Terraform-Style Workflow to Deploy Claude Agents From Code"
- Not in any September digest

### 3. Claude-BugHunter — 4.3K Stars; 82 Skills Bug Hunting Bundle
- Source: github.com/elementalsouls/Claude-BugHunter
- 82 skills, 15 slash commands, 681 disclosed-report patterns across 24 vulnerability classes
- Focuses on external attack surface: web apps, APIs, cloud misconfigs, enterprise perimeter
- New and not covered in any prior digest

### 4. Ponytail Comeback — 128.6K Stars (was 104K on Aug 19)
- Source: skillsllm.com, coddykit.com
- Last featured Aug 19. Grew ~24K stars since then. Still trending.
- 7-rung laziness ladder: 54% less code, 20% cheaper, 27% faster

---

## Recurring Items Status

| Slug | Day | Stars | Keep? |
|------|-----|-------|-------|
| caveman | Day 15 | 103.9K | Yes |
| claude-code-limits-sept14 | Day 10 | — | Yes (7 days!) |
| fable-5-1 | Day 6 | — | Yes |
| andrej-karpathy-skills | Day 8 | ~209K | Yes |
| planning-with-files | Day 6 | 26.6K | Yes |
| oh-my-openagent | Day 2 | 68.8K | Yes |
| orca | Day 2 | 62.6K | Yes |
| graphify | Day 13 | 112K | Marginal — keep |
| obra/superpowers | Day 27 | ~272K | Drop (too stale) |
| mattpocock-skills | Day 19 | ~248K | Drop (stale) |

---

## Dropped / Skipped

- **Self-hosted environments**: Covered in Aug 10 digest. Sept 6 quickstart publication is docs update, not new feature.
- **--restricted flag**: Shipped Aug 27, covered in Aug 28 digest.
- **NanoClaw**: Last covered Aug 29, no new hook.
- **Managed Agents effort/webhooks**: Released July 22, out of window.
- **Sonnet 5 pricing locked**: Announced Aug 11, out of window.

---

## Final Top 12

1. claude-code-changelog-sept7 — Workflow tool 5.7k→1k tokens (COST, NEW)
2. ant-apply — Terraform for Claude (ANTHROPIC, NEW)
3. ponytail — Comeback 128.6K (DESIGN/COST)
4. caveman — Day 15 (COST)
5. claude-code-limits-sept14 — Day 10, 7 days! (COST)
6. fable-5-1 — Day 6 (COST)
7. andrej-karpathy-skills — Day 8 (DESIGN)
8. planning-with-files — Day 6 (SKILL)
9. oh-my-openagent — Day 2 (COST)
10. orca — Day 2 (PLUGIN)
11. claude-bughunter — NEW (SECURITY)
12. graphify — Day 13 (MCP/COST)
