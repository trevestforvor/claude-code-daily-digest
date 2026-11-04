# Research Notes — 2026-11-04

## YouTube Coverage (past 7 days)

Searched all 8 channels from sources/youtubers.json. Direct YouTube indexing was largely blocked by the proxy; results came through Podwise and Lilys.ai aggregators.

| Channel | Recent Claude Code Content | Notes |
|---|---|---|
| @indydevdan (IndyDevDan, 129k) | Last confirmed: Feb 9, 2026 — multi-agent orchestration with Opus 4.6, Tmux, agent sandboxes | No Nov 2026 content found — skip this run |
| @Chase-H-AI (Chase AI, 109k) | Last confirmed: May 2026 open-source tools roundup | No Nov 2026 content found — skip this run |
| @simonscrapes (Simon Scrapes, 71.8k) | Last confirmed: April 2026 — Claude Code memory systems, CC 2.0 | No Nov 2026 content found — skip this run |
| @charlieautomates (Charlie Automates, 8k) | No results found | Skip this run |
| @TechWithTim (Tech With Tim, 2M) | Last confirmed: Feb 2026 beginners guide | No Nov 2026 content found — skip this run |
| @DevelopersDigest (Developers Digest, 61.5k) | No confirmed results | Skip this run |
| @UICollectiveDesign (UI Collective, 52.5k) | No confirmed results | Skip this run |
| @adrienaidesigner (Adrien AI Designer, 4k) | No results found | Skip this run |

**Summary:** No confirmed new YouTube content from curated channels in the past 7 days. Likely reflects proxy/index lag rather than actual posting silence. No `creator_buzz` can be populated this run.

---

## GitHub Topics — claude-code (top 20, as of Nov 4, 2026)

From direct fetch of github.com/topics/claude-code:

| Repo | Stars | Status |
|---|---|---|
| morluto/rea | 430k | Recurring (already in digest) |
| affaan-m/ECC | 297k | Recurring |
| NousResearch/hermes-agent | 260k | In submissions.json |
| DietrichGebert/ponytail | 184k | Recurring |
| farion1231/cc-switch | 152k | Recurring |
| nextlevelbuilder/ui-ux-pro-max-skill | 145k | Recurring |
| Graphify-Labs/graphify | 142k | Recurring |
| JuliusBrussee/caveman | 117k | Recurring |
| stablyai/orca | 115k | Recurring |
| **thedotmack/claude-mem** | **113k** | **NEW — not in submissions.json or recent digests** |
| addyosmani/agent-skills | 113k | Recurring |
| **paperclipai/paperclip** | **111k** | **NEW — not in submissions.json** |

## GitHub Topics — claude-code-skills (recently updated)

From direct fetch of github.com/topics/claude-code-skills:

| Repo | Stars | Status |
|---|---|---|
| **shanraisshan/claude-code-best-practice** | **68.5k** | **NEW — not in submissions.json** |
| **sickn33/agentic-awesome-skills** | **49.1k** | **NEW — not in submissions.json** |
| VoltAgent/awesome-agent-skills | 36.8k | NEW — not in submissions.json |
| alirezarezvani/claude-skills | 29.3k | NEW — not in submissions.json |
| OthmanAdi/planning-with-files | 27.9k | In yesterday's digest (day 2) |
| wanshuiyin/Auto-claude-code-research-in-sleep | 18.6k | NEW — potential |
| browser-act/skills | 6.3k | NEW — potential |
| rebelytics/one-skill-to-rule-them-all | 3.7k | NEW — potential |

## Official Anthropic Releases (past 72h)

**v2.1.318 (November 4, 2026 — today)**
- `effort` option on `$.model.fork` — side jobs can run at a lower effort level (cost saver for routine parallel work)
- `assume_role` on `mantle` upstreams — cross-account AWS roles + per-developer cost attribution
- `loginExpiresAt` in `claude auth status` + `credential_expires_at` in `claude -p` JSON output
- Cloud sessions can now start without selecting a repository

**v2.1.317 (November 3, 2026)**
- Email privacy gate: asks before web/shell tool sends account email
- `onFailure: "block"` for Agent SDK hook callbacks
- `GET /v1/organizations/analytics/cost` gateway endpoint
- Already featured in Nov 3 digest

**v2.1.316 (October 31, 2026)**
- `CLAUDE_CODE_DISABLE_ULTRATHINK` env var
- `CLAUDE_CODE_SUBAGENT_EFFORT` env var
- Opus 4.8 fast mode deprecated → removal Nov 30, 2026
- Already outside past-72h window

## thedotmack/claude-mem — Key Facts
- 113k GitHub stars (Nov 4 2026)
- Persistent memory compression system for AI coding agents
- Auto-captures tool usage observations, generates semantic summaries, injects into future sessions
- Agent-agnostic (Claude Code, Gemini CLI, Codex) since v13.1.0
- Web viewer at localhost:37777
- Install: `npx claude-mem install` (the npm global install is SDK only; this is the full setup command)
- Also available via `/plugin marketplace add thedotmack/claude-mem`

## paperclipai/paperclip — Key Facts
- 111k GitHub stars (Nov 4 2026)
- Open-source AI agent orchestration platform
- Agents get roles and reporting structures; tasks move through ticket system
- Budgets, approvals, tool restrictions per agent
- Connects to Claude Code, Codex, Gemini CLI as adapters
- MIT license, launched March 2, 2026
- 71k stars / 13.4k forks as of late June 2026 (now 111k per topic page)
- Install: unclear — likely Docker or git clone

## sickn33/agentic-awesome-skills — Key Facts
- 49.1k GitHub stars (Nov 4 2026, still actively updated)
- 2,884 skills under skills/<name>/SKILL.md + plugins
- Works with Claude Code, Cursor, Gemini CLI, Codex
- MIT (code) + CC BY 4.0 (content)
- Also known as "antigravity-awesome-skills" in older listings
- Install: `npx skills add sickn33/agentic-awesome-skills --skill <name>`

## worktrunk (max-sixty) — Key Facts
- Rust CLI for git worktree management, designed for parallel AI agent workflows
- `wt switch -x claude -c feature-a` creates branch + worktree + launches Claude Code
- Available via Homebrew, Cargo, winget
- ~8k stars (trending in GitHub explore Nov 4)
- Last version: 0.19.0 (Jan 2026 per one source)
- May be too low-star / too old to include today

---

## Candidates Dropped
- harneo library: unverifiable, only one secondary source
- worktrunk: 8k stars, last major update Jan 2026 — not trending enough
- VoltAgent/awesome-agent-skills: 36.8k stars, solid but slots full — could feature next run
- coreyhaines31/marketingskills: 58.3k stars, featured Nov 3 — dropping today to make room for new items
- K-Dense-AI/scientific-agent-skills: 56k stars, featured Nov 3 — dropping today
- teng-lin/notebooklm-py: 20.1k stars, featured Nov 3 — dropping today

---

## Final 15 for Digest

1. Claude Code v2.1.318 (official, today)
2. nextlevelbuilder/ui-ux-pro-max-skill (design, day 5, 145k)
3. DietrichGebert/ponytail (cost, day 5, 184k)
4. thedotmack/claude-mem (memory/cost, NEW, 113k)
5. JuliusBrussee/caveman (cost, day 5, 117k)
6. affaan-m/ECC (cost/skill, day 6, 296k)
7. Graphify-Labs/graphify (cost/skill, day 5, 142k)
8. farion1231/cc-switch (cost/plugin, day 5, 152k)
9. morluto/rea (viral, day 11, 430k)
10. obra/superpowers (viral, day 7, 311k)
11. stablyai/orca (design/plugin, day 5, 115k)
12. addyosmani/agent-skills (skill, day 5, 113k)
13. paperclipai/paperclip (orchestration/plugin, NEW, 111k)
14. sickn33/agentic-awesome-skills (skill, NEW, 49.1k)
15. OthmanAdi/planning-with-files (cost/skill, day 2, 27.9k)
