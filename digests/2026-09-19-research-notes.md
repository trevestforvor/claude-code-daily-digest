# Research Notes — 2026-09-19

Research window: 72h (Sep 17–19, 2026). Elapsed: ~650s (well under 20min cap).

---

## YouTube Coverage

### @charlieautomates (8K subs)
- **Video (4 days ago, Sep 15):** "[Free on Github] My Claude Code Jarvis AI Assistant Runs My Business" — covers the `charlesdove977/advertising-ops` (CMO in a Box) skill and the broader Charlie OS stack (CARL, PAUL, SEED, Skillsmith). Direct item: `advertising-ops`.
- **Video (3 weeks ago):** "Don't Setup a Claude Code Second Brain Until You Watch This" — covered `second-brain-skills` (already in 09-16 digest).

### @Chase-H-AI (109K subs)
- No new September 2026 video found in search. `claudex-loop` (chaseai-yt) is their channel's repo; growing from 1.7K → 2.2K stars since Sep 9 digest.

### @indydevdan (129K subs)
- Recent videos: "Every Claude Code Skill I Use to Drive My Entire Development Process" (Aug 13) and "6 Agent Skills That Upgrade Your Vibe Coding Setup" (3 weeks ago). No new Sep 2026 video found. Skills featured not new to the digest.

### @simonscrapes (71.8K subs)
- No specific Sep 2026 video found.

### @TechWithTim (2M subs)
- Recent: "Codex vs Claude — an Honest Comparison" (3 weeks ago). No specific Sep 2026 Claude Code skill/tool video found.

### @DevelopersDigest (61.5K subs)
- No specific Sep 2026 video found.

### @UICollectiveDesign (52.5K subs)
- No specific Sep 2026 video found.

### @adrienaidesigner (4K subs)
- No specific Sep 2026 video found.

**Note:** No tool was covered by 2+ YouTubers in the past 7 days. Single-creator signal: @charlieautomates → `advertising-ops`, @Chase-H-AI (indirect) → `claudex-loop`.

---

## Theme of the Day: AGENTS.md

Claude Code v2.1.277 (Sep 18) adds native AGENTS.md support — if no CLAUDE.md exists, Claude reads AGENTS.md instead. This unlocked a cluster of new tooling:
- `backpass` (kunchenguid) — trains AGENTS.md from session transcripts via gradient descent
- `agent-rules-skill` (netresearch) — auto-generates AGENTS.md following the agents.md spec
- `ossrules` (modem-dev) — curated library of real AGENTS.md + CLAUDE.md files with annotations
- `abide` (coldteadotai) — enforces AGENTS.md/CLAUDE.md rules per-edit via TypeSafe Jev

---

## Key Findings

### Anthropic Official (highest impact today)
1. **Claude Code Projects Beta** (Sep 17) — parallel cloud sessions from one project conversation. Each thread is a full Opus-backed Claude Code cloud session on its own branch. Select Pro/Max users first, waitlist for others. Covered by The Register, Techstrong.ai, MLQ.ai, Times of AI, blockchain.news, itechpost, kingy.ai, implicator.ai.
2. **Claude Code v2.1.277-278** (Sep 18-19) — AGENTS.md support (read AGENTS.md when no CLAUDE.md), server-side auto mode classifier (no overhead charges for API/Enterprise/Bedrock/Vertex), VS Code agent map view, background task status indicators. ~55-60 fixes each.

### New (not in last 7 days)
- **abide** (coldteadotai): 124 stars, Show HN: Policy enforcement for coding agents. Per-edit TypeSafe Jev checks cost ~$0.00004/check.
- **backpass** (kunchenguid): 1.1K stars. "Gradient descent for your AGENTS.md" — reads session transcripts, proposes evidence-backed diffs, human gate before writing.
- **compact-adviser** (kunchenguid): 118 stars. Classifies whether to run /compact via two Jev questions; confidence threshold adjusts from 0.90→0.50 as context fills.
- **typesafe-computer-use** (awlevin): 429 stars. OCR + TypeSafe classifier for macOS computer-use; $0.0002/decision vs $0.032 for Claude Opus 5 (155× cheaper, 14-40× faster latency).
- **advertising-ops** (charlesdove977): 86 stars. Scrapes long-running Meta Ad Library ads, tears down video creative frame-by-frame, then generates aligned copy + image/video variations. Charlie Automates "My Claude Code Jarvis AI" video (Sep 15).
- **agent-rules-skill** (netresearch): 76 stars. Generates AGENTS.md files following the agents.md convention. Supports Claude Code, Copilot, Cursor.
- **ossrules** (modem-dev): 25 stars. Library of real AGENTS.md and CLAUDE.md files from OSS projects with analysis. Public JSON API.
- **i-dont-believe-you** (LeonardLeroy): 16 stars. Skill that runs 8 shell commands before an agent can claim tests pass — catches disabled tests, removed assertions, swallowed errors.
- **explain-diff-html** (malav2110): 7 stars. Transforms PRs and diffs into self-contained interactive HTML walkthroughs (background, intuition, code flow in execution order, quiz).

### Recurring (>7 days old, still active)
- **ponytail** (DietrichGebert): 141K stars. Last featured Sep 7-11 (8-12 days ago). Still dominant code-efficiency skill.
- **claudex-loop** (chaseai-yt): 2.2K stars. Last featured Sep 9 (10 days ago). Grew from 1.7K → 2.2K stars.
- **cloudflare/security-audit-skill**: 15.6K stars. Last featured Sep 16 (3 days ago). Grew from 13K → 15.6K in 2 days (+2.6K). Still trending fast.
- **agentic-awesome-skills** (sickn33): 46.6K stars. Last featured Sep 12 (7 days ago). Updated Sep 19. Still growing with 2,115+ agentic skills.

### Items evaluated but dropped
- `claude-spring-architect` (ice-lfernandes): 3 stars — too small
- `explain-diff-html`: Included despite 7 stars — genuinely new from today's scan
- NVIDIA/skills: 3.4K stars, in 09-14 (5 days ago) — within 7-day window, not included
- Commerce Agents (anthropics): In 09-05 (14 days ago), webinar Sep 18 — not fresh enough standalone
- squad-mcp: 4 stars — too small
- agentic-awesome-skills: on the boundary (09-12 = exactly 7 days ago), included as recurring

---

## Sources Checked
- GitHub topics: claude-code-skills, claude-skills, claude-code
- GitHub daily discovery scan (mattbutlerengineering/ai-tooling issue #621)
- YouTube: All 8 curated channels searched
- Anthropic changelog: code.claude.com/docs/en/changelog (verified v2.1.273-278)
- The Register, MLQ.ai, Techstrong.ai, Times of AI, blockchain.news (Projects Beta coverage)
- josedacruz.com top trending Sep 9-15 week
- HN: Show HN for abide
