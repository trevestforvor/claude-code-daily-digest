# Research Notes — 2026-08-29

## Sources checked
- GitHub topics: claude-code-skills, claude-skills
- HN Algolia (via search): recent claude code discussions
- YouTube searches (direct fetch blocked; used web search)
- simonwillison.net
- Anthropic Claude Code changelog (code.claude.com/docs/en/changelog)
- GitHub repos: Understand-Anything, nanoclaw, scientific-agent-skills, VoltAgent/awesome-agent-skills, ayghri/i-have-adhd
- charlieautomates.com blog

## YouTube coverage

### @charlieautomates (8,080 subs)
- Blog post "Build an Agentic OS in 3 Steps (2026 Claude Code Tutorial)" — mentions **Graphify**, SEED, PAUL, Hermes Agent, Railway. No specific YouTube video URL confirmed for past 72h (charlieautomates.com blocked by proxy). The video "This New Claude Plugin Will 100x Your Output" appeared in search results linked to Claude plugins — unconfirmed as Charlie's.

### @Chase-H-AI (109K subs)
- Search results showed Claude Code skills/plugins coverage but no specific video from Aug 27–29 confirmed.

### @indydevdan (129K subs)
- "AI Summer 2026 | Claude Code & Choosing the Right Model | Week 3, Day 1" is the most recent identifiable video but date not confirmed within 72h window. Channel active ~5 days ago per metadata.

### @simonscrapes (71.8K subs)
- In 2026-08-27.json: had `creator_buzz` on weekly limits item. No new video confirmed for Aug 27–29.

### @TechWithTim (2M subs)
- No specific new video confirmed for past 72h.

### @UICollectiveDesign, @adrienaidesigner, @DevelopersDigest
- No specific content confirmed for past 72h.

**Summary**: YouTube proxy blocks prevented direct channel fetches. No creator_buzz added this run — only confirmed coverage carries that field.

## New candidate items (not in recent digests)

### Claude Code v2.1.251 (Aug 28, 2026) — OFFICIAL
- PreModelSwitch/PostModelSwitch hook events
- Spend limit bar in `/usage` + `rate_limits.spend_limit` status line field  
- Per-session prompt-cache line in `/cost` with hit ratio, misses, tokens re-cached
- **Critical security fixes**: symlink bypass on file tools, plugin command path traversal, Workflow tool reading outside approved locations, Grep/Glob symlink deny bypass
- Fixed Opus 5 failures with xhigh/max effort + thinking disabled
- Primary URL: https://code.claude.com/docs/en/changelog
- Categories: official, cost

### Understand-Anything (81K stars) — DESIGN
- Lum1104/Understand-Anything / Egonex-AI/Understand-Anything
- Claude Code plugin + multi-platform (Cursor, Copilot, Codex, Gemini CLI)
- Converts codebases to interactive knowledge graphs: color-coded layers, semantic search, diff impact analysis, guided architectural tours
- Install: `/plugin marketplace add Egonex-AI/Understand-Anything`
- Updated: Aug 26, 2026

### ayghri/i-have-adhd (25.5K stars) — VIRAL/SKILLS
- Skill that makes Claude Code "answer first" — lead with action, number steps, cap lists at 5, eliminate filler
- Viral on Threads (sscottdev post), blog coverage on codingbeautydev, enterprisedna
- "It already has 11k GitHub stars. It does one simple thing: Answer first"
- Rapid growth: launched ~5.3K → now 25.5K

### K-Dense-AI/scientific-agent-skills (37.6K stars) — SKILLS
- 165+ validated skills, 100+ scientific databases (PubChem, ChEMBL, UniProt, ClinicalTrials, FDA)
- Used by 190K+ scientists worldwide (per README)
- Covers bioinformatics, cheminformatics, clinical research, proteomics, drug discovery
- Install: `npx skills add K-Dense-AI/scientific-agent-skills`

### VoltAgent/awesome-agent-skills (33.2K stars) — SKILLS
- 1000+ curated agent skills from official engineering teams
- Featured: Anthropic (DOCX/PPTX/PDF/design), Microsoft (133+ Azure skills), Vercel, Cloudflare, Netlify, Stripe, Hugging Face, TestMu AI
- No traditional install — access via `officialskills.sh/[org]/skills/[skill-name]`
- Primary URL: https://github.com/VoltAgent/awesome-agent-skills

### nanocoai/nanoclaw (30.6K stars) — TOOLS
- Lightweight OpenClaw alternative: agents run in Docker containers with filesystem isolation
- Multi-channel: WhatsApp, Telegram, Discord, Slack, Teams, iMessage
- Credentials via Agent Vault, scheduled tasks, per-agent workspace
- Install: `git clone https://github.com/nanocoai/nanoclaw.git nanoclaw-v2 && cd nanoclaw-v2 && bash nanoclaw.sh`

## Recurring items carried forward

- **obra/superpowers** → Day 18 (272K stars, still #1 by stars)
- **mattpocock/skills** → Day 10 (220K stars, still active installs)
- **hermes-agent** → Day 4 (238K, Herald release still driving momentum)
- **cc-switch** → Day 19 (130K, steady)
- **ui-ux-pro-max-skill** → Day 6 (121K, top design-system skill)
- **graphify** → Day 4 (112K+, YC-backed, growing)
- **claude-mem** → Day 6 (92.6K — up from 91.9K yesterday)
- **claude-code-weekly-limits-aug31** → FINAL: 2 DAYS LEFT (expires Aug 31)
- **agentic-awesome-skills** → Day 3 (45.6K, v16.2.0)

## Dropped from rotation
- andrej-karpathy-skills (Day 40 — too long, fading)
- caveman (Day 6 — fading, 100K milestone passed)
- claude-code-best-practice (Day 3 — not in top 15 vs newer items)
- ai-job-search (Day 2 — dropped to make room for stronger newcomers)

## Elapsed time
~8 minutes at research-notes write time.
