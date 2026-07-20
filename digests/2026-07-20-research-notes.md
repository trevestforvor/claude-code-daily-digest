# Research Notes — 2026-07-20

## YouTube Coverage

### @charlieautomates (Charlie Automates, ~8K subs)
- **"#1 Claude Code Repo Today (Nobody's Talking About It)"** — confirmed to be about **Egonex-AI/Understand-Anything** (secondary_url in 2026-07-19 digest matches https://www.youtube.com/watch?v=LM14h8RBXuM)
- **"2 Claude Code Repos NOBODY'S Talking About Yet"** (https://www.youtube.com/watch?v=ildGgQB9rYE) — could not access content (403); not attributed to specific repos without verification
- Blog post "Understand Anything: The Claude Code Plugin That Maps Any Codebase" — confirms ongoing Understand-Anything coverage

### @Chase-H-AI (Chase AI, ~175K subs)
- **"Use These 17 Claude Plugins, It Will Make You 10x Better"** — posted ~3 weeks ago (early-mid July 2026). Could not fetch video content (403). Not attributed to specific repos without verification.

### @indydevdan (IndyDevDan, ~129K subs)
- No specific Claude Code video found in past 7 days. Skipped this run.

### @simonscrapes (Simon Scrapes, ~71.8K subs)
- Covered obra/superpowers (noted in 2026-07-19 digest). No new video confirmed this week.

### @adrienaidesigner, @UICollectiveDesign, @DevelopersDigest, @TechWithTim
- No specific Claude Code videos found in past 7 days. Skipped.

---

## New Items Discovered

### HIGH SIGNAL — NEW

**garrytan/gstack** (123K stars)
- Garry Tan (YC President & CEO) open-sourced his personal Claude Code setup: 23 opinionated tools mimicking roles (CEO, Designer, Eng Manager, Release Manager, Doc Engineer, QA). Claims shipped 3 production services + 40+ features in 60 days while running YC full-time. References Karpathy's "stopped coding since December" statement. MIT. DESIGN category.
- Install: `git clone --single-branch --depth 1 https://github.com/garrytan/gstack.git ~/.claude/skills/gstack && cd ~/.claude/skills/gstack && ./setup`

**nextlevelbuilder/ui-ux-pro-max-skill** (108K stars)
- AI design intelligence: generates complete design systems, 84+ UI styles, 192+ product-type color palettes, 22 tech stacks, 98 UX guidelines. v2.11.0 (July 2026). Works with Claude Code, Cursor, Windsurf, 15+ AI assistants. DESIGN category.
- Install: `npm install -g ui-ux-pro-max-cli && uipro init --ai claude`

**DietrichGebert/ponytail** (86.5K stars)
- "The laziest senior dev in the room" — prioritizes eliminating code over writing it. Claims ~54% LOC reduction, ~20% cost savings, ~27% faster execution. Philosophy: YAGNI → reuse → stdlib → native features → already-installed deps → single-liners → minimal implementation. COST category.
- Install: `/plugin marketplace add DietrichGebert/ponytail`

**affaan-m/ECC** (211.9K stars)
- "Agent harness performance optimization system": 67+ specialized agents, 278+ skills, 94+ legacy command shims, configurable hooks. Supports Claude Code, Cursor, OpenCode, Codex. Code review, TDD, security scanning (via AgentShield), CI/CD optimization. MIT, weekly updates.
- Install: `/plugin marketplace add https://github.com/affaan-m/ECC`

**mvanhorn/last30days-skill** (52.9K stars, v3.16.0 July 16)
- #1 trending on GitHub this week. AI agent skill researching topics across Reddit, X, YouTube, TikTok, HN, Polymarket, GitHub, arXiv. Discovery mode ("what's trending?") vs topic mode. Zero-config for core sources. 175+ merged PRs, 50+ contributors.
- Install: `/plugin marketplace add mvanhorn/last30days-skill`

**addyosmani/agent-skills** (79.4K stars)
- Addy Osmani (Google Chrome/Lighthouse) production-grade engineering workflows: 8 slash commands (/spec, /plan, /build, /test, /review, /webperf, /code-simplify, /ship), 24 total skills across 6 phases. MIT.
- Install: `npx skills add addyosmani/agent-skills`

**K-Dense-AI/scientific-agent-skills** (31.3K stars)
- 148 ready-to-use scientific skills; 100+ scientific databases; 70+ Python packages (RDKit, Scanpy, PyTorch Lightning); 9 lab platform integrations (Benchling, DNAnexus, Opentrons). 160K+ scientists. v2.53.0 June 2026.
- Install: `npx skills add K-Dense-AI/scientific-agent-skills`

### ANTHROPIC OFFICIAL

**Claude Code v2.1.215** (July 19)
- Key change: Claude no longer auto-runs /verify and /code-review skills — users must invoke explicitly. Follows v2.1.214 (EndConversation tool, permission hardening, progress heartbeat).

---

## Recurring Items Status (from 2026-07-19 digest)

| Slug | Day in Digest | Status |
|---|---|---|
| obra-superpowers | Day 13 | DROP — saturated |
| andrej-karpathy-skills | Day 3 | KEEP (Day 4) — 194K stars |
| volt-agent-skills | Day 1 | DROP — lower priority given new items |
| html-anything | Day 4 | KEEP (Day 5) — design category |
| understand-anything | Day 5 | KEEP (Day 6) — @charlieautomates coverage |
| tweakcc | Day 2 | DROP — lower priority given new items |
| claude-reflect | Day 3 | KEEP (Day 4) — Anthropic official |
| anthropic-code-migration | Day 2 | KEEP (Day 3) — widely shared |
| piebald-ai-system-prompts | Day 2 | KEEP (Day 3) — updated for v2.1.215 |
| claude-code-v2-1-214 | Day 2 | UPGRADE to v2.1.215 entry |
| agentkey | Day 2 | DROP — lower priority given new items |
| aws-agent-toolkit | Day 2 | DROP — lower priority given new items |
| unabyss | Day 2 | DROP — lower priority given new items |
| claude-code-best-practice | Day 5 | KEEP (Day 6) — ~63K stars |
| rohitg00-awesome-claude-code-toolkit | Day 2 | DROP — lower priority |

---

## Dedup Check
All new items verified against submissions.json and last 7 days of digests. No conflicts found.
