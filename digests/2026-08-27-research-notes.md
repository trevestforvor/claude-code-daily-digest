# Research Notes — 2026-08-27

Research window: ~280s (well under 1200s cap)

---

## YouTube Coverage

| Creator | Recent Videos (Aug 2026) | Tools/Repos Mentioned |
|---|---|---|
| **@charlieautomates** (Charlie Automates, 8.1K subs) | "#1 Claude Code Repo Today (Nobody's Talking About It)" (Jul 8) | YouTube blocked — couldn't access video; repo unverified |
| **@Chase-H-AI** (Chase AI, 109K subs) | "The #1 Claude Code Design Skill Just Got a HUGE Upgrade" (3 weeks ago) | Design skill — likely ui-ux-pro-max-skill; couldn't confirm via YouTube (blocked) |
| **@indydevdan** (IndyDevDan, 129K subs) | "FREE Claude Desktop + Claude Code — Complete Setup Guide (Updated Aug 2026)" (3 days ago); "The August 2026 AI Coding Championship — 4 Agents, 3 Tasks, 1 Winner" (3 weeks ago) | No specific tool pitched; general Claude Code setup guide |
| **@simonscrapes** (Simon Scrapes, 71.8K subs) | "Claude Code just raised your weekly limit 50% — automatically, through Aug 31" (~1 week ago) | **Confirmed: claude-code-weekly-limits-aug31** |
| **@DevelopersDigest** (Developers Digest, 61.5K subs) | No Claude Code content found from Aug 2026 | — |
| **@UICollectiveDesign** | Not searched (time constraint) | — |
| **@adrienaidesigner** | Not searched (time constraint) | — |
| **@TechWithTim** | Not searched (time constraint) | — |

Note: YouTube direct fetches are blocked by the egress proxy. Video content verified only through search snippet descriptions.

---

## Anthropic Official

- **Claude Code Week 34 (Aug 17–21, v2.1.234–v2.1.239)**:
  - `/design` research preview — editable UI artboards in CLI; picks one to implement
  - **Concise output style** — leads with result, skips preamble (v2.1.237)
  - **Remote Control GA** — device card on phone to start sessions on your machine
  - `ANTHROPIC_DEFAULT_MODEL` env var
  - `notify_when_idle` on SendMessage for cross-session idle alerts
  - GitLab MR badge in footer
  - `keybindingFlavor: "readline"` for Bash-style Ctrl+W
  - Optional `spellcheck` setting
  - `CLAUDE_CODE_GOAL_CHECKIN_MINUTES` for /goal background task check-ins

- **Claude Code v2.1.243–v2.1.246** (shipped Aug 25 — already in digest Day 2)

- **Claude Code +50% Weekly Limits** extended through Aug 31 (4 days left as of today)

---

## GitHub — New/Trending Items

| Repo | Stars | Status |
|---|---|---|
| shanraisshan/claude-code-best-practice | 65.2K | #1 on claude-code-skills topic; updated Aug 27 |
| sickn33/agentic-awesome-skills | 45.5K | v16.2.0; 2,005+ skills; local agent control plane |
| VoltAgent/awesome-agent-skills | 32.9K | Curated 1,497+ official skills from 100+ tech teams |
| OthmanAdi/planning-with-files | 26.4K | v3.11.0 halved token cost (2,254→1,042); Manus-style |
| mksglu/context-mode | 20.2K | MCP; 98% context compression; 17-platform routing |
| wanshuiyin/Auto-claude-code-research-in-sleep | 14.2K | ARIS; 82 skills; autonomous ML research overnight |
| Vincentwei1021/video-shotcraft | 6.5K | 152 shot recipes; 209 motion previews; updated Aug 2026 |

---

## Recurring Items Check

| Slug | Days in Digest | Stars | Status |
|---|---|---|---|
| obra/superpowers | Day 16 | ~272K | Trending; #1 skills framework |
| andrej-karpathy-skills | Day 38 | ~203K | Still trending; longest-running item |
| mattpocock/skills | Day 8 | ~220K | Still active |
| ui-ux-pro-max-skill | Day 4 | 121K+ | Design; trending |
| cc-switch | Day 17 | ~130K | Keep — large ecosystem |
| caveman | Day 4 post-100K | 101K+ | Cost item; trending |
| claude-mem | Day 4 | 91.9K | Trending |
| claude-code-weekly-limits-aug31 | Day 5 | — | 4 days to Aug 31 deadline |

**Dropped today** (fading or too many recurring): garrytan/gstack (Day 5), wshobson/agents (Day 5), cathrynlavery/diagram-design (Day 5), graphify (returning), hermes-agent (returning), understand-anything (returning), florian-claude-code-ultimate-guide (Day 4), boris-cherny-80-percent-prompt (already done).

---

## Dedup Check vs submissions.json
- All new items are not in submissions.json (verified against all 50+ slugs).
