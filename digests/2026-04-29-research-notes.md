# Research Notes — 2026-04-29

## Sources Checked

- YouTube: @charlieautomates, @Chase-H-AI, @simonscrapes, @indydevdan, @TechWithTim
- GitHub trending: claude-code, agent-skills, mcp-server, claude-plugin topics
- Reddit: r/ClaudeAI, r/LocalLLaMA (past 3 days)
- HN: algolia search for claude code, MCP, skills (past 72h)
- Anthropic: platform.claude.com release notes, code.claude.com whats-new
- GitHub repos: direct fetches for new/trending repositories

---

## YouTube Coverage (Past 7 Days)

| Creator | Video | Date | Mentions |
|---|---|---|---|
| @Chase-H-AI | "8 Claude Code Skills Every Developer Needs" | April 26 (3 days ago) | superpowers, ui-ux-pro-max-skill, agent-browser, gws — **already in April 27 digest** |
| @simonscrapes | "Master Claude Design in One Video (Full Course)" | April 28 (1 day ago) | Claude Design — **already in April 28 digest** |
| @charlieautomates | "Claude Code + Graphify = Local Rag" | ~3 weeks ago | graphify — **already recurring in digest** |
| @indydevdan | No new Claude Code-specific video found in past 72h | — | — |
| @TechWithTim | No Claude Code-specific video found in past 72h | — | — |
| @UICollectiveDesign | Not found (past 7 days) | — | — |
| @DevelopersDigest | Not found (past 7 days) | — | — |

No item received 2+ YouTuber coverage in the past 72h window. Chase AI and Charlie Automates are both active but their relevant content precedes the current window by 3–21 days.

---

## Key Findings

### Anthropic Official (Past ~72h)
- **Claude Code v2.1.122** (April 28): PR Resume URL — paste any PR URL into `/resume` to find the session that created it (GitHub, GitLab, GitHub Enterprise, Bitbucket). Also: `ANTHROPIC_BEDROCK_SERVICE_TIER` env var, OAuth token handling fix, Auto mode for Max subscribers with Opus 4.7, xhigh effort level for Opus 4.7.
- **Claude Code v2.1.123** (April 29 today): OAuth fix for `CLAUDE_CODE_DISABLE_EXPERIMENTAL_BETAS=1` retry loop.
- **Claude Managed Agents Memory** (April 23, public beta): Memory for Claude Managed Agents is now in public beta under `managed-agents-2026-04-01` header. Stores memories as Markdown files on a filesystem; agents can read/write/update using existing bash/code execution tools. Early adopters: Netflix, Rakuten, Wisedocs (97% reduction in first-pass errors), Ando (30% speed increase). Covered by SD Times, ETIH EdTech News, Testing Catalog, Data Center Knowledge.
- **NOTE: April 30 deprecation** (TOMORROW): 1M token context window beta for Sonnet 4.5 and Sonnet 4 retires. Affects `context-1m-2025-08-07` beta header. Migrate to Sonnet 4.6 or Opus 4.6.

### New GitHub Repositories (Past 72h or Strongly Active)
- **sickn33/antigravity-awesome-skills** — 35.7k stars, v10.7.0 released April 26. 1,400+ agentic skills for Claude Code, Cursor, Codex CLI, Gemini CLI, and Antigravity. Install: `npx antigravity-awesome-skills`. Cross-agent with `--claude`, `--cursor`, `--gemini`, `--codex`, `--antigravity` flags.
- **wshobson/agents** — 34.5k stars, updated April 28. 184 specialized AI agents, 16 multi-agent orchestrators, 150 skills, 78 focused plugins. PluginEval quality framework, Agent Teams plugin, Conductor plugin. Install: `/plugin marketplace add wshobson/agents`.
- **VoltAgent/awesome-claude-code-subagents** — 18.7k stars. 131 specialized subagents with independent context windows (preventing cross-contamination). Smart Opus/Sonnet/Haiku routing. 10 categories. Install: `./install-agents.sh`.
- **Piebald-AI/claude-code-system-prompts** — 9.7k stars. Complete extraction of Claude Code's system prompts, 24 builtin tool descriptions, sub-agent prompts, updated within minutes of each release. **Updated today for v2.1.123.** Companion: **tweakcc** for patching individual system prompt pieces locally. 165+ version changelog.
- **alirezarezvani/claude-skills** — 13.2k stars, v2.0.0 March 4. 232+ skills across 9 domains (engineering, product, marketing, C-level). Last release March 2026 — not fresh enough for today.

### HN Items (Past 72h)
- **halfwhey/claudraband** (Show HN: "Claude Code for the Power User") — 276 stars. Wraps Claude Code TUI in controlled terminal, resumable sessions, HTTP daemon, ACP server, TypeScript lib. Latest release April 18. Interesting but low stars.
- **sverrirsig/claude-control** — 109 stars, v0.15.0 April 16. macOS dashboard for multiple Claude Code sessions. Low stars, not fresh enough.

### Recurrents Status
- **claw-code**: ↑ Day 7, still 185k+ stars
- **graphify**: ↑ Day 3, 36.3k stars, @charlieautomates coverage
- **awesome-agent-skills**: ↑ Day 2, 19.2k stars
- **claude-code-plugins-plus-skills**: ↑ Day 2, 2k stars
- **codeburn**: ↑ Day 3, 4.3k stars
- **almanac-mcp**: ↑ Day 3
- **zilliztech-claude-context**: ↑ Day 3, 9.8k stars
- **claude-code-best-practice**: ↑ Day 6, 47.6k stars
- **caveman**: ↑ Day 10 — FADING, keep as brief mention
- **code-review-graph**: Day 10 — DROPPING (fading)
- **everything-claude-code**: Day 10 — DROPPING (fading)
- **claude-mem**: Day 9+ — DROPPING
- **get-shit-done**: Day 10 — DROPPING

### Reddit/HN Notable
- No major new viral threads in r/ClaudeAI or r/LocalLLaMA in past 72h specifically
- Source code leak discussions (March 31) continue in background but past the viral peak
- April 30 deprecation thread expected on HN tomorrow

### Skipped / Not Fresh Enough
- rosaboyle/awesome-cc-oss: 95 stars (too small)
- steipete/claude-code-mcp: 1.3k stars but last updated May 2025
- rohitg00/awesome-claude-code-toolkit: 1.5k stars only
- opcode (getAsterisk): 21.7k stars but last release August 2025
- alirezarezvani/claude-skills: last release March 2026, not recent enough

---

## Final Item List (15)

1. claude-managed-agents-memory (NEW, Anthropic)
2. antigravity-awesome-skills (NEW, 35.7k stars)
3. wshobson-agents (NEW, 34.5k stars)
4. claude-code-system-prompts-tweakcc (NEW, 9.7k stars, updated today)
5. awesome-claude-code-subagents (NEW, 18.7k stars)
6. claw-code (↑ Day 7)
7. awesome-agent-skills (↑ Day 2)
8. graphify (↑ Day 3)
9. codeburn (↑ Day 3)
10. claude-code-plugins-plus-skills (↑ Day 2)
11. claude-code-best-practice (↑ Day 6)
12. almanac-mcp (↑ Day 3)
13. zilliztech-claude-context (↑ Day 3)
14. claude-code-v2-1-122-123 (NEW, Anthropic — v2.1.122/123 April 28-29)
15. caveman (↑ Day 10, fading)
