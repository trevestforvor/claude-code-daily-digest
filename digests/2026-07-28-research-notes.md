# Research Notes — 2026-07-28

## YouTube Coverage (Past 7 Days)

### @charlieautomates (Charlie Automates, ~8K subs)
- Most recent visible video: "2 Claude Code Repos NOBODY'S Talking About Yet" (published April 2026) — too old for this cycle.
- Previously identified July content: covered `Understand-Anything` ("#1 Claude Code Repo Today") and `paul-seed-framework` ("SEED + PAUL = Claude Code Meta"). No NEW video identified from the past 72h that surfaces fresh tools.
- **Skip this run.** Note in notes.

### @Chase-H-AI (Chase AI, ~109K subs)
- Active this month (July 2026) with multiple Fable 5 + design skill videos:
  - "This Skill Turns Fable 5 & GPT 5.6 Into Web Design MONSTERS" (~July 14, 2 weeks ago)
  - "Claude Fable 5 + New Design Skill = Beautiful $10,000 Websites" (~July 14)
  - "3 Ways To Fix Claude Code's #1 Web Design Problem" (recent)
  - "Claude Code + Higgsfield MCP = Content MACHINE" (recent)
  - "Your Claude Code Carousels Suck (Here's The Fix)" (recent)
- **Tool signal:** Chase AI's "New Design Skill" videos (July 14) coincide exactly with Hallmark going viral (#1 Trendshift July 15). Strong circumstantial tie → boost Hallmark.

### @indydevdan (IndyDevDan, ~129K subs)
- No specific Claude Code content identified from the past 7 days. Most recent was a general Claude setup guide. **Skip this run.**

### @simonscrapes (Simon Scrapes, ~71.8K subs)
- No content identified from July 2026 (most recent was June 5, 2026). **Skip this run.**

### @TechWithTim (Tech With Tim, ~2M subs)
- No specific Claude Code skill/plugin content identified from the past 7 days. **Skip this run.**

### @UICollectiveDesign (UI Collective, ~52.5K subs)
- Not searched; no results surfaced naturally. **Skip this run.**

### @adrienaidesigner (Adrien | AI Designer, ~4K subs)
- Not searched; no results surfaced naturally. **Skip this run.**

### @DevelopersDigest (Developers Digest, ~61.5K subs)
- Not searched specifically; likely covered Opus 5/Claude Code releases. Monitor tomorrow.

---

## Key New Items Found (Past 72h + Hot This Week)

### 🔥 Top GitHub Trending Today (July 28)
1. **bradautomates/claude-video** — 11.8K stars, +989 stars TODAY. Enables Claude to "watch" videos: downloads, extracts frames (smart budgeting), Whisper transcription, deduplication. `/watch` skill. Top star gainer in Claude Code space today.
2. **virgiliojr94/book-to-skill** — 11K+ stars, +366 today. Converts PDFs/EPUBs/DOCX into agent skills with 24–51× token reduction. Very strong cost story.
3. **affaan-m/ECC** — 234.5K stars, +692 today. Still actively gaining (Day 5 from July 27 count).

### 🎨 Design
4. **Nutlope/hallmark** — 19.2K stars (was 12.2K on July 15 when #1 trending). Anti-AI-slop design skill: 57 slop-test gates, 20 themes, 4 verbs (build/audit/redesign/study). By Hassan El Mghari (Together AI). Chase-H-AI likely covered it. `npx skills add nutlope/hallmark`.
5. **rixinhahaha/snip** — 46.1K stars. Visual whiteboard between humans and AI agents. Renders diagrams, HTML, UI → human annotates directly on output → agent iterates. Works with Claude Code, Cursor, Windsurf. Electron + Ollama. `brew install --cask rixinhahaha/snip/snip`.

### 🏛️ Anthropic Official
6. **Anthropic Economic Index Connector** — Launched July 22, 2026. Lets anyone query the Anthropic Economic Index (real AI economic usage data, privacy-protected) in plain English in any Claude conversation. Free, ~1 min setup. Any model.

### 📚 Education / General
7. **FlorianBruniaux/claude-code-ultimate-guide** — 5K+ stars, 430K+ lines, 271 quizzes, 225 templates, 11 whitepapers (472 pages). Comprehensive learning resource for all Claude Code features. Install: `git clone https://github.com/FlorianBruniaux/claude-code-ultimate-guide`.

### 🔒 Security
8. **trailofbits/skills** — 6.2K stars. Trail of Bits (leading security research firm) Claude Code skills for security research, vulnerability detection, and audit workflows. `npx skills add trailofbits/skills`.

---

## Claude Code Platform Updates

### Week 29 (July 13–17, 2026) — v2.1.207–v2.1.212
- **Artifacts call your MCP connectors**: Published artifacts can now pull live data through each viewer's own MCP connectors. Public sharing links, editor roles, Claude Tag artifact creation also added.
- **Screen reader mode**: `--ax-screen-reader` flag, `CLAUDE_AX_SCREEN_READER` env var, or `axScreenReader` setting.
- `/fork` now creates a background session (old behavior is `/subtask`).
- Session-wide caps: WebSearch and subagent spawns each default to 200.
- MCP tool calls > 2 min auto-background.
- "Always allow" rules save at repo root (persist across worktrees).

### Week 28 (July 6–10, 2026) — v2.1.202–v2.1.206 (already in July 26/27 digests implicitly)
- In-app browser on Desktop.
- `/doctor` full setup checkup.

### v2.1.220 (July 24) — covered in July 27 digest as claude-code-v2-1-218 (actually v2.1.218 was July 22 specifically).

---

## Recurring Items Still Trending

| Item | Stars | Status |
|------|-------|--------|
| Graphify | 97.4K | Day 6, updated July 28 |
| Andrej Karpathy Skills | 194K+ | Day 11, still dominant |
| Caveman | 93.7K | Day 5, updated July 27 |
| Superpowers | 200K+, 941K installs | Day 3 |
| Understand-Anything | 74.7K | Day 2 |
| PAUL+SEED | 1K+281 stars | Day 2 |
| ECC | 234.5K | Day 5, +692 today |
| Claude Opus 5 | Platform | Day 4, ecosystem still adapting |
| Ralph Wiggum | 139K | Day 4 |
| Chrome DevTools MCP | 47.6K | Day 4 |

---

## Items Dropped from Today
- **claude-code-v2-1-218**: 6 days old, already well-covered.
- **cc-switch**: Day 5, fading.
- **claude-mem**: Day 5, fading.
- **rohitg00-awesome-claude-code-toolkit**: Day 2 from July 27; nothing new to add today.

---

## Research Time
- Start: epoch 1785254804
- End: ~epoch 1785255211
- Elapsed: ~407 seconds (< 20 min cap)
