# Research Notes — 2026-10-12

## Elapsed: ~370s of 1200s cap

---

## YouTube Coverage

### @charlieautomates (Charlie Automates, ~8k subs)
- No specific Oct 10–12 video confirmed via search index.
- charlesdove977/claude-x-jev repo appeared on charlieautomates.com/free-resources — strong ecosystem tie.
- Prior coverage (~45 days ago): YouTube Short "5 Claude Plugins You Needed YESTERDAY."
- Blog post "The Best Claude Code Skills in 2026 (And the Order to Install Them)" live on site.
- Blog post "Understand Anything: The Claude Code Plugin That Maps Any Codebase" — featured in Oct 11 digest already.

### @Chase-H-AI (Chase AI, ~109k subs)
- No specific Oct 2026 video confirmed. Most recent blog post found: "The Claude Code Guide: What Actually Matters in 2026" (Aug 12, 2026).

### @indydevdan (IndyDevDan, ~129k subs)
- No Oct 2026 video found in search index. Channel described as covering MCP, hooks, CLAUDE.md at engineering depth.

### @simonscrapes (Simon Scrapes, ~71.8k subs)
- No Oct 2026 video found. Third-party write-up of a "zero coding skills" Claude Code guide circulating.

### @UICollectiveDesign, @DevelopersDigest, @TechWithTim
- No specific Oct 2026 videos confirmed.

**Summary:** No strong YouTuber signal confirmed for past 72h. Cannot add `creator_buzz` to any item this run without fabricating.

---

## Claude Code Official Releases (Oct 6–9, 2026)

All recent versions already covered in digests:
- v2.1.296 (Oct 9): Sonnet 5.5 cache reads halved → in Oct 10 digest
- v2.1.295 (Oct 8): onFailure:"block" hooks, OSC 7501 → in Oct 9 digest
- v2.1.294 (Oct 8): Hook instruction fix → in Oct 9 digest
- v2.1.293 (Oct 7): Haiku 5.5 default → in Oct 11 digest
- v2.1.292 (Oct 6): --marketplace flag, effort param, Mods additions → in Oct 8 digest
- No v2.1.297+ found as of research cutoff.

**Claude Code Mods** (launched Oct 1, v2.1.287): TypeScript functions inside plugins that can rewrite prompts, block tool calls, etc. Feature is still very new but already in Oct 8 digest's version item. Third-party resource: modmyclaude/claude-code-mods (1★).

---

## GitHub Topics — claude-code-skill / claude-skills / claude-code-plugin (Updated Oct 12)

All updated "Oct 12" per topic pages. Star counts and key items:

### claude-skills topic (10,895 repos):
| Repo | Stars | Notes |
|---|---|---|
| paperclipai/paperclip | 101k | Open-source agent management app (NOT in any digest) |
| code-yeongyu/oh-my-openagent | 70k | In Oct 9+10 digests, SKIP |
| linny006/trending-claude-skills | 126 | In Aug 21 digest, SKIP |
| travsteward/openwriter | 34 | NEW: markdown editor for agents |
| exmergo/dex | 74 | NEW: analytics engineering toolkit for dbt |
| wenlan-app/wenlan | 79 | NEW: local-first wiki + MCP plugin |
| CorvinLabs/CorvinOS | 17 | NEW: self-hosted agent OS w/ compliance |
| cortex-ai-skills (alexander-danilenko) | 16 | NEW: opinionated coding skills |
| tedix-hq/tedix | 6 | NEW: AI coworkers with approval gates |
| Lucasli6833/slop-cop | 3 | NEW: detects AI writing patterns |
| scientific-thinking-general | 0 | Too generic |

### claude-code-plugin topic (recently updated):
| Repo | Stars | Notes |
|---|---|---|
| kimmingul/xllm | 2 | Multi-LLM advisor plugin |
| Ying-Kai-Liao/flow | 0 | Parallel git worktree runner |
| clownware/bouncer | 1 | YAML policy hook (no LLM) |
| hamza-aziz-ai/codex-claude-council | 3 | ChatGPT + Claude debate plugin |
| its-magdy/qa-warden | 0 | Playwright E2E from plain specs |
| modmyclaude/claude-code-mods | 1 | Curated tested mods collection |

### claude-code-skill topic:
| Repo | Stars | Notes |
|---|---|---|
| Jakeschincariol/youtube-agent-skill | 1.2k | NEW: 11 YouTube channel skills |
| charlesdove977/claude-x-jev | 54 | NEW: COST — fast decisions via Jev on OpenRouter |
| agentprivacy-skills (mitchuski) | 1 | ZK proofs + decentralized identity skills |
| NASA-PDS/pds-agent-skills | 1 | NASA PDS workflow skills |

---

## Other Sources

### Anthropic
- Claude Haiku 5.5: Released Oct 7 — in Oct 11 digest
- Field guide to Claude Code cloud sessions: Published Oct 7 (blog)
- No new Oct 10–12 Anthropic product announcements found

### Reddit / HN
- Reddit not accessible directly. No top posts surfaced via search for Oct 2026
- HN: No specific threads found via algolia (DNS not reachable from this environment)

### Product Hunt
- No Oct 2026 Claude Code launches confirmed

---

## Items to SKIP (submissions.json match or 7-day digest repeat)
- alirezarezvani/claude-skills
- claude-seo (AgriciDaniel) — in May/Jun/Jul/Aug digests; v2.4.2 is new but repeatedly featured
- linny006/trending-claude-skills — Aug 21 digest
- Any jakeschincariol/replica-skill → different from youtube-agent-skill (new)
- autoharness, claude-octopus, oh-my-openagent, awesome-claude-code-toolkit, etc.

---

## Final Candidate List (ranked)

1. paperclipai/paperclip (101k★) — viral, agent management
2. Jakeschincariol/youtube-agent-skill (1.2k★) — 11 YouTube skills
3. exmergo/dex (74★) — dbt analytics engineering
4. wenlan-app/wenlan (79★) — wiki plugin
5. charlesdove977/claude-x-jev (54★) — COST
6. travsteward/openwriter (34★) — DESIGN: markdown editor
7. CorvinLabs/CorvinOS (17★) — compliance agent OS
8. alexander-danilenko/cortex-ai-skills (16★) — coding skills
9. tedix-hq/tedix (6★) — AI coworkers
10. Lucasli6833/slop-cop (3★) — slop detection
11. hamza-aziz-ai/codex-claude-council (3★) — ChatGPT+Claude debate
12. kimmingul/xllm (2★) — multi-LLM plugin
13. clownware/bouncer (1★) — YAML policy hook
14. Ying-Kai-Liao/flow (0★) — parallel worktrees
15. its-magdy/qa-warden (0★) — E2E test generator
