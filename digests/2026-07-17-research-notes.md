# Research Notes — 2026-07-17

## YouTube Coverage

### @charlieautomates (8K subs)
- **Recent blog (July 8):** "Understand Anything: The Claude Code Plugin That Maps Any Codebase" — covered Egonex-AI/Understand-Anything (already in digest Jul 15-16)
- **Recent blog (July, date unclear):** "Claude Code Remote Just Ended OpenClaw: Here's Why I Switched" — Claude Code's built-in remote control (Trusted Devices for Remote Control) now covers most OpenClaw use cases for Max plan users
- **Recent blog (earlier):** "SEED + PAUL = The Claude Code Meta Nobody's Talking About" — covered ChristopherKahler/seed (315 stars) + ChristopherKahler/paul (1.1K stars); SEED = AI project incubator, PAUL = Plan-Apply-Unify Loop. Stars too low to include in digest.
- **Video "2 Claude Code Repos NOBODY'S Talking About Yet"** — appears to be from April 2026, not recent content this week
- **No new video from July 14-17 confirmed** this run

### @indydevdan (129K subs)
- Recent video: "FREE Claude Desktop + Claude Code! Full Setup With Real Anthropic Models (July 2026)" — intro/setup content, ~1 week ago. No specific tool discoveries.
- No new ecosystem tool coverage found this week.

### @simonscrapes (71.8K subs)
- Recent video covers "Build Real AI Systems With Claude Code (Step-by-Step)" and "How Smart People Are Using Claude Code Skills to Automate Anything" — general workflows, no specific new tool surfaced.
- Covered obra/superpowers in prior weeks (already in digest).

### @Chase-H-AI, @adrienaidesigner, @UICollectiveDesign, @DevelopersDigest, @TechWithTim
- No specific new Claude Code tool discoveries surfaced for July 14-17 this run.

---

## New Items Found This Run

### 1. Claude Code v2.1.212 (Released TODAY July 17, 2026) 🔥
- URL: https://github.com/anthropics/claude-code/releases/tag/v2.1.212
- Key changes:
  - **/fork redesigned**: now copies conversation into a new BACKGROUND session (visible in `claude agents`) while keeping current session active; old in-session behavior moved to `/subtask`
  - **`claude auto-mode reset`**: new command to restore default auto-mode configuration
  - **`/resume`**: pick and resume past sessions as background sessions
  - **MCP auto-background**: tool calls running longer than 2 minutes automatically move to background (CLAUDE_CODE_MCP_AUTO_BACKGROUND_MS)
  - **Session limits**: WebSearch capped at 200/session (CLAUDE_CODE_MAX_WEB_SEARCHES_PER_SESSION), subagents capped at 200/session (CLAUDE_CODE_MAX_SUBAGENTS_PER_SESSION)
  - **Security fix**: worktree symlink vulnerability at `.claude/worktrees` patched
  - **Bug**: plan mode was auto-running file-modifying Bash commands without permission — fixed
  - **Prompt caching now works** behind LLM gateways (Bedrock, Vertex, custom base URLs)
  - **Reduced token usage** in inter-agent messaging

### 2. multica-ai/andrej-karpathy-skills — 194K Stars 🔥🔥🔥
- URL: https://github.com/multica-ai/andrej-karpathy-skills
- A single CLAUDE.md file with 4 behavioral rules derived from Andrej Karpathy's observations on LLM coding pitfalls
- Four rules: Think Before Coding, Simplicity First, Surgical Changes, Goal-Driven Execution
- Install: `/plugin marketplace add forrestchang/andrej-karpathy-skills` / `/plugin install andrej-karpathy-skills@karpathy-skills`
- 194K stars (was 144K in June, 101K earlier). One of the fastest-growing AI workflow repos ever.
- MIT licensed. Forrest Chang / multica-ai org.
- **Not in submissions.json, not in any recent digest** — first appearance today.

### 3. Claude Reflect — Anthropic Usage Dashboard (Launched July 9)
- URL: https://www.anthropic.com/news/reflect-with-claude
- Built-in dashboard tracking Claude usage habits across topics, patterns, task types
- 1/3/6/12 month lookback windows; AI Fluency framework (Delegation/Description/Discernment/Diligence)
- Quiet hours, AI break nudges, wellbeing features
- Available in beta to Free/Pro/Max users with memory on
- TechCrunch coverage July 9; multiple outlets covered launch
- **Not in any recent digest** — never appeared.

---

## Recurring Items Tracked (Days in Digest as of Jul 17)

| Slug | Day | Stars | Status |
|------|-----|-------|--------|
| obra-superpowers | 11 | 252K+ | Continuing |
| mattpocock-skills | 17 | ~172K | Continuing |
| graphify | 12 | ~86K | Continuing, daily releases |
| caveman | 8 | ~88K | Continuing |
| cc-switch | 8 | ~118K | Continuing |
| claude-mem | 8 | ~87K | Continuing |
| claude-video | 7 | ~11K | Continuing |
| html-video | 2 | ~4K | Day 2 (from Jul 16) |
| html-anything | 2 | 7.8K | Day 2 (from Jul 16) |
| understand-anything | 3 | ~74K | Day 3 |
| claude-code-best-practice | 3 | ~63K | Day 3 |
| awesome-claude-code-subagents | 4 | ~21K | Day 4 |
| statewright | 4 | n/a | Dropping (Show HN buzz fading) |
| learn-claude-code | 4 | ~69K | Dropping (fading) |

## Items Dropping Today
- **statewright** (Day 4): Show HN buzz has likely peaked
- **learn-claude-code** (Day 4): Curriculum repo, steady but not trending

## Not Included (Low Signal / Stars)
- tonone-ai/tonone: 58 stars — too small
- ChristopherKahler/seed: 315 stars — too small
- ChristopherKahler/paul: 1.1K stars — borderline, not enough
- FlorianBruniaux/claude-code-ultimate-guide: 4.2K stars — interesting but modest
- aws-samples/sample-claude-code-agent-team: 42 stars — sample only
- jeremylongshore/claude-code-plugins-plus-skills: 2.2K stars — community marketplace, not trending this week

## YouTube Coverage Summary
- **@charlieautomates**: covered Understand-Anything (Jul 8), Claude Code Remote (date unclear)
- **@simonscrapes**: obra/superpowers (prior weeks)
- No new tool specifically surfaced by 2+ YouTubers this week that hasn't already appeared in digest

## Sources Checked
- GitHub: anthropics/claude-code releases
- GitHub: multica-ai/andrej-karpathy-skills
- GitHub: tonone-ai/tonone
- Anthropic newsroom (July 2026)
- charlieautomates.com/blog (July 2026)
- YouTube channels: charlieautomates, indydevdan, simonscrapes
- releasebot.io/updates/anthropic/claude-code
- HN search (ycombinator July 2026)
- Reddit (no strong hits in 72h window)
