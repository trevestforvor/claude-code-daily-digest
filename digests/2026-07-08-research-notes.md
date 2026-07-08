# Research Notes — 2026-07-08

## YouTube Coverage This Week (July 1–8)

### @adrienaidesigner (Adrien AI Designer, 4K subs)
**2 confirmed videos in window:**
- "Claude Design 2.0 Just Changed Everything..." (~July 1–2)
- "Anthropic just dropped Claude Design 2.0 (MASSIVE Upgrades)"
**Tools covered:** Claude Design 2.0, /design-sync, brand system consistency, Claude Code ↔ Claude Design bidirectional sync, WYSIWYG canvas editing, PDF/PPTX export.
→ **Item candidate: claude-design-sync**

### @UICollectiveDesign (UI Collective, 52.5K subs)
**Recent video:**
- "Claude Design Just Changed Everything (New Update)" — covers June 17 Claude Design 2.0 update
**Tools covered:** Claude Design, /design-sync, design system imports, non-designer-friendly tooling.
→ **Corroborates: claude-design-sync**

### @indydevdan (IndyDevDan, 129K subs)
**Confirmed video July 7:**
- "FREE Claude Desktop + Claude Code! Full Setup With Real Anthropic Models (July 2026)"
**Tools covered:** Claude Code free tier, official Anthropic models, no-subscription setup guide.
Adjacent coverage: Skills vs. MCP architecture guide.

### @charlieautomates (Charlie Automates, 8K subs)
**Recent videos (June window, still highly surfaced):**
- "2 Claude Code Repos NOBODY'S Talking About Yet" → SEED + PAUL (Chris Kahler repos, already in July 5 digest)
- "Claude Skills + Hermes Agent = 24/7 Agents" → Hermes Agent (already in submissions.json, skip)

### @simonscrapes (Simon Scrapes, 71.8K subs)
- "My Claude Code Workflow for 2026" — practical workflow overview
- "Web Scraping with Claude Code" — agentic scraping tutorial
No new tools surfaced beyond general Claude Code workflow content.

### @DevelopersDigest (Developers Digest, 61.5K subs)
**Blog/video in window:**
- "Claude Sonnet 5 Developer Guide: Migration, API, and Effort Levels" (July 4) — covers Sonnet 5 as Claude Code's new default
- "Best Claude Code Skills in 2026: A Curated Directory" — skills ranking
**Tools covered:** Claude Sonnet 5, Fable 5 restoration, skills directories, pricing.

### @Chase-H-AI (Chase AI, 109K subs)
No confirmed July 1-8 video URL surfaced. Blog at chaseai.io mentions: "Ten Claude Code skills, plugins, and CLIs I'd install first in 2026" — mentions Codex plugin, awesome-design.md.

### @TechWithTim (Tech With Tim, 2M subs)
No confirmed July 1-8 upload found. Most recent was May 6 tutorial.

---

## Cross-Channel Viral Signals
| Item | Channels | Strength |
|---|---|---|
| Claude Design 2.0 / /design-sync | Adrien (2 videos), UI Collective, IndyDevDan-adjacent | VERY STRONG |
| SEED + PAUL (Chris Kahler) | Charlie Automates | Moderate — already in July 5 digest |
| Hermes Agent + Claude Code | Charlie Automates | Strong — already in submissions.json |
| IndyDevDan free Claude Code setup | IndyDevDan | Moderate — educational video, not a tool |

---

## New Items Found (Not in submissions.json or recent digests)

### claude-design-sync — Claude Design 2.0 / /design-sync
- URL: https://claude.com/blog/claude-design-stays-on-brand-for-daily-work
- Launched June 17, 2026
- 1 million users in first week
- Key features: importable design systems, bidirectional sync with Claude Code (/design-sync + /design commands), WYSIWYG canvas editing, fix for token-burning problem
- Covered by Adrien AI Designer (2 videos), UI Collective, multiple press outlets (VentureBeat, Blockchain Council, etc.)
- Strong DESIGN signal — still top coverage theme one week after launch

### alibaba-bans-claude-code
- URL: https://techcrunch.com/2026/07/04/alibaba-reportedly-bans-employees-from-using-claude-code/
- Alibaba banned all employees from Claude Code effective July 10, 2026
- Also covered: The Next Web, SCMP, Tom's Hardware, TechRadar, BankInfoSecurity
- Reason: steganographic tracking code incident; employees directed to switch to "Qoder"
- Context: Anthropic accused Alibaba's Qwen lab of running the largest known distillation attack on Claude (28.8 million exchanges via 25,000 fraudulent accounts, April–June 2026)
- Very strong VIRAL signal — geopolitical escalation

### claude-science
- URL: https://www.anthropic.com/news/claude-science-ai-workbench
- Launched June 30, 2026 (beta for Pro, Max, Team, Enterprise)
- AI workbench for scientists with 60+ curated skills/connectors for genomics, single-cell, proteomics, structural biology, cheminformatics
- Not a new model — runs on existing Claude models
- $30K AI for Science grants available through July 15
- Covered: TechCrunch, TechTimes, DataConomy, MLQ, pharmaphorum

### claude-code-v2-1-203
- URL: https://code.claude.com/docs/en/changelog
- Released July 7, 2026
- Key features: login-expiry warning for background sessions, grey ⏸ badge for manual permission mode, MCP roots/list updated with additional working directories, VSCode "Enable Remote Control for all sessions" toggle
- Performance: -7 MB binary size, -7 MB startup memory via lazy loading
- NEW: Claude Code available in FedRAMP High Government Desktop (public beta)
- Bug fixes: macOS background agent stall (15-20s false low-memory detection fixed), multiple worktree/daemon fixes

---

## Recurring Items — Status Update for July 8

| Slug | Last Day | Today | Key Updates |
|---|---|---|---|
| fable5-metered-billing | Day 7 | Day 8 | Billing cliff HIT July 7 — usage credits required going forward |
| claude-code-steganography | Day 7 | Day 8 | Alibaba ban effective July 10 is major new development; still no Anthropic post-mortem |
| claude-code-limits-july13 | Day 6 | Day 7 | 5 days remaining (expires July 13 at 6 PM PDT) |
| mattpocock-skills | Day 5 | Day 6 | 155K stars; /grill-me still driving adoption |
| karpathy-claude-md-v10 | Day 6 | Day 7 | ~225K combined stars, still fastest-growing CLAUDE.md |
| obra/superpowers | Day 1 | Day 2 | 249K stars; Simon Scrapes video still driving growth |
| antigravity-awesome-skills | Day 2 | Day 3 | 42K stars; cross-platform skill library |
| graphify | Day 2 | Day 3 | 74.8K stars; PostgreSQL live schema, Streamable HTTP MCP |
| claude-code-routines | Day 2 | Day 3 | Official Anthropic cloud scheduling |
| wshobson/agents | Day 1 | Day 2 | 37.6K stars; 88 plugins, 194 agents |
| piebald-ai-system-prompts | Day 1 | Day 2 | 11.6K stars, 515 prompt strings from v2.1.202 |

---

## Items Dropped (insufficient new signal)
- jeremylongshore-plugins-plus-skills (Day 2 — 2.5K stars, not enough new signal)
- claude-forge (Day 2 — 774 stars, no new developments)
- cass-session-search (Day 2 — no new signal)

---

## Sources
- Adrien AI Designer YouTube: https://www.youtube.com/watch?v=58CQM6I6DZg
- Claude Design 2.0 VentureBeat: https://venturebeat.com/technology/anthropic-ships-major-claude-design-overhaul...
- Claude Design official: https://claude.com/blog/claude-design-stays-on-brand-for-daily-work
- Alibaba ban TechCrunch: https://techcrunch.com/2026/07/04/alibaba-reportedly-bans-employees-from-using-claude-code/
- Alibaba ban SCMP: https://www.scmp.com/tech/big-tech/article/3359375/alibaba-bans-staff-using-claude-code-over-anthropic-spyware-concerns
- Claude Science: https://www.anthropic.com/news/claude-science-ai-workbench
- Claude Code v2.1.203: https://code.claude.com/docs/en/changelog
- IndyDevDan July 7 video: https://www.youtube.com/watch?v=wdlwuoSXci4
- Claude Code changelog (gradually.ai): https://www.gradually.ai/en/changelogs/claude-code/
