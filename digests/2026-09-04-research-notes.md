# Research Notes — 2026-09-04

## Timer
Research started at 1788538184. Well within 20-minute cap (~330s elapsed at note-write time).

## YouTube Coverage

### @Chase-H-AI (109K subs) — OLDER CONTENT (outside 72h)
- Most recent video found: "Give Me 50 Minutes, I'll Give You 1000+ Hours Of Claude Code Knowledge (2026 Guide)" (~3 weeks ago, ~Aug 14)
- "The #1 Claude Code Design Skill Just Got a HUGE Upgrade" — posted Aug 4, 2026 (30+ days ago, outside 72h window)
- Blog post: "Impeccable 4.0: Best Claude Code Design Skill" on chaseai.io
- Featured **pbakaus/impeccable** — in submissions.json, SKIP. No new Chase AI content inside 72h.

### @indydevdan (129K subs) — NO RECENT MATCH (72h)
- Most recent found: "Self Improving Subagents with Memory (claude code)" — Jan 2026
- No September 2026 video surfaced in search

### @simonscrapes (71.8K subs) — NO RECENT MATCH (72h)
- Most recent YouTube hits from Feb-June 2026
- No September 2026 video surfaced

### @charlieautomates (8K subs) — NO RECENT MATCH (72h)
- No September 2026 content found
- Was featured in graphify coverage (Day 9-10 now)

### @adrienaidesigner, @DevelopersDigest, @TechWithTim, @UICollectiveDesign — NOT CHECKED
- No time for these; search results dominated by older content

---

## Key Findings — Past 72h (Sep 2-4, 2026)

### NEW: Anthropic Enterprise Frontier Safeguards (EFS)
Source: https://www.unite.ai/anthropic-announces-enterprise-frontier-safeguards-customer-held-data/
Secondary: https://www.marktechpost.com/2026/09/02/anthropic-enterprise-frontier-safeguards-efs/

Announced ~Sep 1-2, 2026:
- Zero data retention PLUS cross-session misuse detection
- Activity logs route to customer-owned AWS S3, Azure Blob, or GCS under customer encryption keys
- Anthropic operates detection logic with no human review of content
- Co-developed with 100+ customers incl. Goldman Sachs, Morgan Stanley, Citi, BofA, Wells Fargo
- Supports: Claude Code, Claude Enterprise, Claude Platform, Bedrock, Google Agent Platform, MS Foundry
- Phased rollout targeted fall 2026; interim: zero data retention on Fable 5/5.1 available now

### NEW: Claude Code 2.1.260 (Sep 3, 2026)
Source: https://code.claude.com/docs/en/changelog

Key features:
- `/diff` command: opens real-time diff panel in fullscreen showing uncommitted changes as Claude edits
- Prompt cache diagnostics in `/cost` (likely causes for cache misses)
- `/reload-plugins` added to headless/Remote Control sessions
- Text-form `/advisor` for desktop and headless sessions
- 30+ bug fixes: parentheses in file permission rules, zsh commands bypassing Bash gates,
  Workflow subagents restarting during compaction, GitLab nested subgroup detection, etc.
- Improved: prompt caching on Fable 5.1 after tool results, `/ultrareview` timeout 30→45 min,
  auto-compact at ~967K tokens for 1M-context models

### NOTABLE: datasette-mcp 0.2 (Sep 1, 2026)
Source: https://github.com/datasette/datasette-mcp
Released by Simon Willison — adds /-/mcp stateless MCP 2.0 server to any Datasette instance.
Only 13 stars. Too small for digest. Skipped.

### NOTABLE: oh-my-openagent
Source: https://github.com/code-yeongyu/oh-my-openagent
68.7K stars. Model-agnostic multi-agent orchestrator (Claude, GPT, Kimi, GLM).
Not in submissions.json. Large established project but not Claude Code-specific.
Consider for future digest. Skipped this run (not enough Claude Code-specific signal).

### GitHub: Recently Updated (claude-code topic, Sep 4)
- sahil87/run-kit: 56 stars — phone-first tmux console, agent-agnostic
- FreePeak/devagent: 4 stars — autonomous backend delivery agent
- retif/claudecode-linter: 3 stars — standalone linter with 90 rules

All very small. Not featured.

---

## Known Items Skipped (in submissions.json)
- pbakaus/impeccable (Impeccable 4.0) — Chase AI covered, major new version, but in submissions.json

---

## Recurring Items — Updated Day Counts
| Slug | Stars (approx) | Day # | Status |
|------|---------------|-------|--------|
| obra-superpowers | 272K | 24 | Keep |
| mattpocock-skills | 220K | 16 | Keep |
| andrej-karpathy-skills | 209K | 5 | Keep (still climbing) |
| caveman | ~102K | 12 | Keep |
| graphify | 112K+ | 10 | Keep |
| garrytan-gstack | ~90K | 13 | Keep |
| understand-anything | 81K | 9 | Keep |
| claude-code-limits-sept14 | — | 7 | Keep (10 days left Sept 14) |
| agentic-awesome-skills | 45.9K | 7 | Keep |
| claude-code-best-practice | 65.6K | 2 | Keep (still fresh) |
| alirezarezvani-claude-skills | 25.5K | 5 | Keep |
| planning-with-files | 26.6K | 2 | Keep |
| voltagent-awesome-agent-skills | 33.7K | 2 | Keep |
| aris-ml-research | 15.7K | — | Drop (fading, weak signal) |

---

## Notes on Sources
- YouTube and many major sites blocked by egress proxy
- anthropic.com, simonwillison.net blocked — used web search only
- Star counts from search results as of Sep 4, 2026
- All EFS details verified across multiple news sources (Unite.AI, MarkTechPost, SecurityWeek, neomanex)
