# Research Notes — 2026-10-04

Research window: ~362s elapsed (limit 1200s).

---

## YouTube Coverage (past 7 days)

### @Chase-H-AI (109K subs) — ACTIVE this week
- **"Claude Mods Is The Biggest Claude Code Upgrade Since Skills"** (2 days ago) — covers v2.1.287 Mods feature (already in Oct 2 digest). No fresh tool signals beyond Mods this week.

### @indydevdan (129K subs) — ACTIVE this week
- **"8 Claude Code skills I use for building better AI evals"** (3 days ago) — Claude Code skills for the AI Evals October 2026 cohort. YouTube blocked this session; specific repos not confirmed from title alone.

### @simonscrapes (71.8K subs) — ACTIVE recently
- "Every Claude Code Concept Explained in 9 Minutes (2026)" (3 days ago) — tutorial overview, no specific tool signals

### @TechWithTim (2M subs) — No new Claude Code content confirmed this week
### @UICollectiveDesign (52.5K subs) — No new content confirmed this week
### @DevelopersDigest (61.5K subs) — No new content confirmed this week
### @adrienaidesigner (4K subs) — No new content confirmed this week
### @charlieautomates (8K subs) — No new confirmed video in past 7 days (site blocked; blog shows Sep 2026 content)

---

## Key Candidates Found

### Fresh items (not in past 7-day digests)

1. **tt-a1i/archify** — 77.1k stars, DESIGN category
   - Agent skill turning any idea, plan, or codebase into interactive architecture/workflow/sequence diagrams
   - Self-contained HTML with motion, dark/light themes, crisp export (PNG/SVG/WebM)
   - Verifiable — typed JSON IR with deterministic validation checks; can read Mermaid as input
   - Supports Claude Code, Codex, Cursor, OpenCode
   - Install: `npx skills add tt-a1i/archify -g`
   - Source: GitHub topics search + skillsllm.com (77.1k stars)

2. **Claude Code Projects Redesigned** — ANTHROPIC official (beta Sep 17, expanding)
   - Coordinator-driven parallel agent threads; each thread gets its own cloud session, branch, and repo copy
   - Project Library collects user-added files + artifacts from all threads
   - Cloud sessions keep running after you close your laptop
   - Was NOT in any recent 7-day digest
   - Source: marktechpost, unite.ai, timesofai coverage

3. **"You Should Know" built-in mod** — ANTHROPIC, v2.1.287 (Oct 2)
   - A side agent that runs in parallel and flags things you or Claude might miss
   - Enable: `/plugin enable cc-plugin-you-should-know@builtin` (first-party sessions with telemetry)
   - Distinct from Mods itself; a specific named builtin shipped with the Mods launch
   - Source: aicoder.com news item, dev.classmethod coverage

4. **edenfunf/reelmimic** — 1.2k stars (trending Oct 4)
   - Show it a video you love → get a new video in the same style
   - Multi-agent crew (Claude Code or Codex): planner, builder, reviewer agents working in parallel
   - Watercolor, crayon, and custom style support; 30–60s video takes 1–3.5 hrs
   - Trending in Oct 4 daily discovery (GitHub daily trending #8 and NanoClaw #215)
   - Source: NanoClaw Radar #215, marc-ko daily trending repo #570

### Recurring items continuing from past digests

- **ui-ux-pro-max-skill** (nextlevelbuilder): Day 8, 131.9k stars — DESIGN category priority
- **ponytail**: Day 4, 150.1k stars — Chase AI coverage
- **caveman**: Day 4, 109k stars — still at #1 COST
- **coucou**: Day 4, 3.3k stars (up from 3.1k) — v0.1.6 "Mochi on the desktop"
- **jevgrep**: Day 3 (reappearing since Sep 30), 2.1k stars — IndyDevDan coverage
- **ECC**: Day 3, 272k stars — #1 on claude-code topic
- **graphify**: Day 3, 123.4k stars — strong ecosystem adoption
- **addyosmani-agent-skills**: Day 3, 101k stars
- **karpathy-skills**: Day 2, 210k stars
- **gstack**: Day 2, 135k stars
- **universal-modder**: Day 2, 2.8k stars — still in Oct 4 trending

---

## Items Skipped / Deduped

- planning-with-files: in Sep 29 digest → faded, not re-appearing
- i-have-adhd: in Sep 29–30 → faded after 2 days
- context-mode (mksglu): in Sep 29, 30, Oct 01 → faded
- claude-code-best-practice (shanraisshan): 6+ day run Sep 27–Oct 02 → too stale
- agentic-awesome-skills (sickn33): in Sep 27 only → faded; only 47k stars (lower than other items this week)
- understand-anything (Egonex-AI): Oct 03 Day 1 → bumped to make room for fresh items; 85.3k stars but dropped
- memU (NevaMind-AI): Oct 03 Day 1 → bumped to make room
- OpenRig (mvschwarz): Day 4 → dropped to make room for fresh items
- claude-for-government: Oct 03 Day 1 → dropped
- graphify: kept (Day 3, 123.4k)

---

## Sources Checked
- YouTube: 5 of 8 creators covered (YouTube egress blocked for direct page fetches)
- GitHub topics: claude-code-skills, claude-skills, claude-skills, agent-skills
- NanoClaw Radar #215 (Oct 4, 2026) — confirmed trending items
- marc-ko daily-trending-repo #570 (Oct 4) — confirmed universal-modder #2, reelmimic #8
- mattbutlerengineering ai-tooling #659 (Oct 4) — new MCP servers
- HN search — playwright skill HN, context-mode 98% HN
- Anthropic announcements: claude code projects beta, v2.1.287 Mods, v2.1.288 reliability
- dev.to/medium.com — Claude Code Mods coverage
- Product Hunt — claude-devtools, Skills Janitor, /dev for Claude Code
- simonwillison.net / latent.space — blocked or no new Claude Code specific tools
