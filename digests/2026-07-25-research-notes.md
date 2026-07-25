# Research Notes — 2026-07-25

## Timer
Started: ~1784995556 unix. Elapsed at end of research: ~472s (under 1200s cap).

---

## YouTube Coverage (past 7 days)

### Chase AI (@Chase-H-AI, 109K subs)
- **"3 Ways To Fix Claude Code's #1 Web Design Problem"** (July 23) — featured SkillUI → already in July 24 digest as `skillui`
- **"Claude Code + Nano Banana 2 = Insane 3D Websites"** — already in July 24 digest as `nano-banana-claude-plugin`
- **"Claude Code Has Evolved"** — general Claude Code overview video; no specific new tool identified for digest

### Charlie Automates (@charlieautomates, 8K subs)
- **"Understand Anything"** blog post → already in July 23 digest as `understand-anything`
- **"This Claude Code Plugin Automates My Entire Youtube Content Strategy"** — uses `bradautomates/head-of-content` (176 stars, Claude Cowork skill, not Claude Code), too small to include
- No specific new tool for July 22-25 window

### Simon Scrapes (@simonscrapes, 71.8K subs)
- Most recent relevant: "Claude just got another superpower (but they kept it quiet!)" — from April 24, 2026. Not within 72h window.
- No July 22-25 content found. Skip this run.

### IndyDevDan (@indydevdan, 129K subs)
- No specific new video found in July 22-25 window. Skip this run.

### TechWithTim (@TechWithTim, 2M subs)
- "Something Big Is Happening" tweet — likely about Claude Opus 5 launch (July 24). No specific tool beyond the model itself.
- No dedicated Claude Code plugin/skill video found for July 22-25.

### DevelopersDigest (@DevelopersDigest, 61.5K subs)
- Published "Best Claude Code Skills in 2026" article (not YouTube). No specific July 22-25 new tool found.

### Adrien AI Designer (@adrienaidesigner, 4K subs)
- No July 22-25 content found. Skip this run.

---

## Key Findings

### 🚨 BIGGEST NEWS: Claude Opus 5 (July 24, 2026)
- **Model**: `claude-opus-5`
- **Price**: $5/$25 per MTok (same as Opus 4.8)
- **Context**: 1M tokens
- **Benchmarks**: 96.0% SWE-bench Verified, 79.2% SWE-bench Pro, 3× next-best on ARC-AGI 3
- **Fast mode**: $10/$50 per MTok at 2.5× speed
- Default Opus model in Claude Code from v2.1.219
- Coverage: MarkTechPost, BitsMinds, WinCentral, codersera, digitalapplied, interestingengineering, BenchLM

### Claude Code v2.1.219 (July 24) + v2.1.218 (July 22)
v2.1.219 key additions (beyond Opus 5):
- `DirectoryAdded` hook fires when `/add-dir` or SDK `register_repo_root` adds a directory
- `sandbox.network.strictAllowlist` — deny non-allowlisted hosts in sandboxed commands
- `workflowSizeGuideline` settings key
- Nested subagents up to depth 3 by default (was 1)
- `mcp_server_errors` in headless stream-json init event

v2.1.218 (July 22) — already in July 24 digest as `claude-code-v2-1-218`:
- `/code-review` as background subagent
- `context: fork` skills auto-background
- Various bug fixes

### chrome-devtools-mcp
- **Source**: github.com/ChromeDevTools/chrome-devtools-mcp (OFFICIAL Chrome DevTools team)
- **Stars**: 47.6K as of July 24
- **Features**: 29 tools — browser automation, performance profiling, memory snapshots, Lighthouse audits, network inspection, console messages
- **Install**: `npx -y chrome-devtools-mcp@latest`
- Coverage: WhiteBoard Coder blog (July 2026), Claude.com plugins page, multiple install guides
- NOT in submissions.json

### Ralph Wiggum Plugin
- **Source**: github.com/anthropics/claude-code/tree/main/plugins/ralph-wiggum (OFFICIAL Anthropic)
- **Stars**: 139K, 22.3K forks
- **What it does**: Stop hook blocks Claude's exit attempts, re-feeds the same prompt until completion or `--max-iterations` limit reached. Simple while-true loop pattern.
- **Commands**: `/ralph-loop "task" --completion-promise "DONE" --max-iterations 50`
- **Coverage**: Mentioned as "viral" and "hot" in Reddit r/ClaudeAI; looking4offswitch blog; aicodingdaily
- NOT in submissions.json

### alirezarezvani/claude-skills
- **Stars**: 15.3K (as of July 14); was #1 GitHub Trending July 5, 2026
- **Content**: 345 skills, 30+ agents, 70+ custom commands, 330+ skills
- **Compatibility**: 13 tools: Claude Code, Codex, Gemini CLI, Cursor, Aider, Windsurf, Kilo Code, OpenCode, Augment, Hermes Agent, OpenClaw, Mistral Vibe, Antigravity
- **Install**: `npx skills add alirezarezvani/claude-skills`
- NOT in submissions.json

### dev-browser (SawyerHood/dev-browser)
- **Stars**: ~6.5K
- **What it does**: Browser automation Claude skill with QuickJS WASM sandbox (no host filesystem/network access), persistent page state, DOM analysis, Chrome extension support
- **Install**: `npx skills add SawyerHood/dev-browser`
- Referenced in hesreallyhim/awesome-claude-code
- NOT in submissions.json

### Recurring Items

| Item | First appearance | Stars | Status |
|------|-----------------|-------|--------|
| graphify | July 23 (Day 1) | ~95K+ | ↑ Day 3 |
| ecc | July 23 (Day 1) | 232K+ | Day 2 (not in July 24) |
| andrej-karpathy-skills | July 23 (Day 1) | 194K+ | Day 8+ |
| caveman | July 23 (Day 1) | ~92.3K | Day 2 (not in July 24) |
| cc-switch | July 23 (Day 1) | 120K | Day 2 (not in July 24) |
| claude-mem | July 23 (Day 1) | 88.3K | Day 2 (not in July 24) |

### mocca-hub
- github.com/valehelle/mocca-hub — desktop marketplace + workspace for Claude Code plugins
- Posted on HN ~July 18, "Show HN: Mocca – Claude Code wrapper where Plugin takes center stage"
- Star count not verified — low confidence, omit unless confirmed

---

## Items Skipped / Not Included
- head-of-content (bradautomates) — 176 stars, Claude Cowork only, not Claude Code
- DesktopCommanderMCP — last updated Jan 2026, not breaking news
- Superpowers — reached 150K stars in April 2026, too old for this cycle
- PostToolUse `updatedToolOutput` — shipped at v2.1.121 (months ago), not July 22-25
- dev-browser by wrsmith108 (fork) — use canonical SawyerHood version
