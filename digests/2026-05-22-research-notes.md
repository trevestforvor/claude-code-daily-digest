# Research Notes — 2026-05-22

## YouTube Coverage

| Creator | Subs | Recent Claude Code content (past 7 days) |
|---|---|---|
| **IndyDevDan** | 129K | ✅ "I Mapped Every Claude Code Concept So You Don't Have To (Full 2026 Roadmap)" ~May 18 — covers 2026 roadmap concepts; no specific third-party tools identified |
| **Chase AI** | 109K | ❌ Most recent was "Use These NEW Open Source Claude Code Tools or Fall Behind" ~3 weeks ago (early May). Nothing confirmed in past 72h. |
| **TechWithTim** | 2M | ❌ "The Ultimate Claude Code Guide | MCP, Skills & More" was April 13. Nothing confirmed this week. |
| **Simon Scrapes** | 71.8K | ❌ "The Easiest Way to Get Ahead With Claude Code" — date unclear; no past-72h content confirmed. |
| **Charlie Automates** | 8K | Partial — blog post "SEED + PAUL = The Claude Code Meta Nobody's Talking About" found but publish date not confirmed. Covered CARL plugin. |
| **Developers Digest** | 61.5K | ❌ Blog articles about Claude Code skills; no new YouTube video confirmed this week. |
| **UI Collective** | 52.5K | ❌ No recent Claude Code content found. |
| **Adrien AI Designer** | 4K | ❌ Not checked (time constraint). |

**Creator boost signal:** IndyDevDan posted within 72h but no specific tools confirmed from the video.

---

## Key Findings by Source

### Anthropic Official
- **Claude Code v2.1.147** (May 21) — major: renames `/simplify` → `/code-review` with effort levels + `--comment` for inline PR comments; pinned bg sessions; enterprise login security fix; 30+ bug fixes
- **Claude Code v2.1.148** (May 22, TODAY) — hotfix: Bash tool exit-code-127 regression from v2.1.147
- **anthropics/skills** (139K ★) — May 19 commit added CMA (Claude Managed Agents) API skill updates
- **KPMG alliance** (May 19-20) — 276K employees, Claude Code embedded in KPMG Blaze for legacy IT modernization
- **anthropics/claude-plugins-official** (24.2K ★) — 55+ curated official plugins including claude-code-setup, claude-for-legal, financial-services; launched Jan 2026, never appeared in any digest

### Ecosystem (Major)
- **Google Antigravity 2.0** (May 19, Google I/O) — standalone agent-first platform; natively supports Claude Sonnet 4.6 and Claude Opus 4.6 (multi-model: Gemini 3.5, GPT-OSS-120B too); new CLI at github.com/google-antigravity/antigravity-cli (468 ★, published May 19); replaces Gemini CLI. Major competitive and ecosystem signal.

### Cost/Tooling
- **ccusage v20.0.3** (ryoppippi/ccusage, 14.5K ★) — released May 22 today; tracks tokens + costs from Claude Code, Codex, OpenCode, Gemini CLI, and 13+ more AI coding tools from local logs; zero data upload

### Community/Third-Party
- **pro-workflow** (rohitg00/pro-workflow, 2.2K ★) — last release v3.3.0 May 9; self-correcting SQLite memory compounding over 50+ sessions; parallel worktrees via `claude -w`; 17 skills. Not in any digest.
- **VILA-Lab/Dive-into-Claude-Code** (1.2K ★) — architectural analysis: 512K LOC, 98.4% deterministic; 7 safety layers, 54 tools, 27 hook events; cross-comparison with OpenClaw and Hermes-Agent
- **ChristopherKahler/carl** (334 ★) — context augmentation plugin; replaces static CLAUDE.md with keyword-triggered dynamic rules; 50% token reduction claimed. Not in any digest. Featured on Charlie Automates blog.
- **NicolasPrimeau/artel** (1 ★, today!) — coordination layer for Claude Code agent fleets; shared semantic memory, async messaging, task queuing, session continuity across machines; Docker-based
- **yeaight7/agent-powerups** (5 ★) — "Oh My Zsh for coding agents"; reusable skills, slash commands, MCP configs, hooks, AGENTS.md templates, `apx` CLI; v0.5.0 May 20

### Press
- **MIT Technology Review** (May 21) — "Anthropic's Code with Claude showed off coding's future—whether you like it or not" — mainstream signal

### Deduped / Already Covered
- garrytan/gstack (101K ★) — last in digest May 8; fading, no new updates in 72h → DROP
- anthropic-acquires-stainless — covered May 19
- claude-design-token-doubled — covered May 21
- claude-code-v2-1-146 — covered May 21
- kobiton-automate-plugin — covered May 20
- tonsofskills-ccpi — covered May 20
- andrej-karpathy-skills — covered May 19

---

## Ranking Notes
- **DESIGN first** — no strong design item this run beyond Antigravity's IDE angle
- **COST second** — ccusage v20.0.3 released today; very strong
- **VIRAL third** — Antigravity 2.0 is the week's biggest ecosystem story
- **ANTHROPIC fourth** — v2.1.147-148, KPMG, skills CMA update, claude-plugins-official
- **GENERAL fifth** — pro-workflow, dive-into-claude-code, carl
