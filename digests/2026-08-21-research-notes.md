# Research Notes — 2026-08-21

## YouTube Coverage

### IndyDevDan (@indydevdan, 129K subs)
- **"The August 2026 AI Coding Championship — 4 Agents, 3 Tasks, 1 Winner (Real Receipts)"** (~Aug 6–7, 2026). Claude Code vs Codex vs Qwen3.8-Max vs Kimi K3 head-to-head benchmark with real receipts.
- No Claude Code content found strictly from Aug 18–21.

### Charlie Automates (@charlieautomates, 8K subs)
- **"Build an Agentic OS in 3 Steps"** — blog post + YouTube tutorial covering Graphify, SEED, PAUL, Hermes, Railway for a deployed agentic app. Recent; confirmed on charlieautomates.com.
- No Aug 18–21 specific video confirmed.

### Tech With Tim (@TechWithTim, 2M subs) — No Aug 18–21 Claude Code content found.
### Chase AI (@Chase-H-AI, 109K subs) — No Aug 2026 Claude Code content found.
### Simon Scrapes (@simonscrapes, 71.8K subs) — No Aug 2026 Claude Code content found.
### Developers Digest (@DevelopersDigest, 61.5K subs) — General coverage; no specific tool.
### UI Collective (@UICollectiveDesign, 52.5K subs) — No specific Aug 18–21 content found.
### Adrien AI Designer (@adrienaidesigner, 4K subs) — No specific Aug 18–21 content found.

**Summary:** IndyDevDan is the only curated YouTuber with a very recent Claude Code-focused video (early August championship benchmark). Charlie Automates has recent tutorial content on Agentic OS. No 2+ YouTuber overlap on a single tool this week.

---

## Claude Code Changelog (Past 72h = Aug 18–21, 2026)

Fetched directly from code.claude.com/docs/en/changelog.

### v2.1.235 (August 18)
- **Spellcheck in prompt input**: Optional `spellcheck` setting using aspell/hunspell/ispell
- Vim mode: NORMAL mode preserved when toggling transcript/panels
- `/permissions` and `/add-dir` usable mid-turn; dialogs openable mid-turn in fullscreen
- `/goal` clears itself on unrecoverable errors; `claude setup-token` rejects extra args
- Various rendering, dialog, and slash-command bug fixes

### v2.1.236 (August 19)
- **`ANTHROPIC_DEFAULT_MODEL` env var**: Sets default model for new sessions; `/model` picks override it
- **`notify_when_idle` in SendMessage**: Opt-in one-shot idle notification for cross-session async coordination (macOS/Linux)
- **macOS sandbox wildcard deny rules**: `**/.env` style rules take precedence, cover directories, can't bypass by renaming
- `/goal`: idle sessions auto-check-in at 30/60/120 minutes
- Auto mode improved on Bedrock/Vertex/Foundry
- Improved git status check (no longer fooled by `status.showUntrackedFiles=no`)
- 20+ bug fixes (clipboard, MCP logs, fullscreen, Remote Control, SendMessage, tmux, etc.)

### v2.1.237 (August 20)
- **Concise output style**: Built-in style that skips preamble/narration while maintaining thoroughness; selectable in `/config` → Output style
- Fixed prompt caching for LLM gateways/custom base URLs

### v2.1.238 (August 20)
- **`keybindingFlavor: "readline"`**: Ctrl+W deletes back to previous whitespace (Bash-style)
- **Plugin marketplace `headersHelper`**: Run command to mint HTTP headers for catalog/archive fetches (enables secure token-based plugin distribution)
- **Self-hosted runner improvements**: `--defer-shutdown-max-min` flag, `--proxy-authorization-command` support
- Memory leak fix: subagent tool results now release after leaving display window (long sessions)
- 20+ bug fixes across cross-session messaging, Remote Control, MCP elicitation, terminal rendering, proxy errors

---

## Ecosystem Items

### Framer External Agents (DESIGN — top priority)
- Framer 3.0 launched native External Agents support: Claude Code, Cursor, Codex, Gemini CLI get direct canvas/CMS/component access without manual MCP setup
- Covered by: Framer official docs, Frameplate blog, Medium (new design stack article)
- URL: https://www.framer.com/agents/external/

### ARIS (Auto-Research-In-Sleep) — RECURRING
- mumulin5/ARIS: ~14.9K stars; updated August 19, 2026
- 82 composable Claude Code skills for autonomous ML research
- Cross-model collaboration: Claude Code drives research, external LLM reviews critically
- Papers accepted at AAAI 2026
- Last in digest: Aug 16 (Day ~5 in window)

### 0xDarkMatter/claude-mods v3.7.0 (August 2026)
- 103 skills, 13 styles, 13 hooks, 14 rules, 3 agents
- v3.7.0 adds: hono-ops (Hono v4 on Cloudflare Workers with typed bindings, zValidator, RPC, streaming, onError, vitest-pool-workers) + rembg-ops (transparent-PNG cutouts with deterministic fallback ladder)
- URL: https://github.com/0xDarkMatter/claude-mods

### tonsofskills.com / jeremylongshore/claude-code-plugins-plus-skills
- 471 plugins, 3,069 skills, 347 agents for Claude Code
- Open-source marketplace at tonsofskills.com with `ccpi` CLI package manager
- Grade A rating (July 2026 review)
- URL: https://github.com/jeremylongshore/claude-code-plugins-plus-skills

### linny006/trending-claude-skills
- Auto-updated leaderboard of trending claude-skills repos, refreshed every 15 min
- 33,702 repos indexed as of Aug 16, 2026
- URL: https://github.com/linny006/trending-claude-skills

### IndyDevDan — "August 2026 AI Coding Championship" (~Aug 6–7)
- YouTube: https://www.youtube.com/watch?v=DSw6kLv54wI
- Claude Code vs Codex vs Qwen3.8-Max vs Kimi K3 on 3 real tasks with receipts

### Charlie Automates — "Build an Agentic OS in 3 Steps"
- Blog: https://charlieautomates.com/blog/the-3-step-system-to-build-an-agentic-os/
- Stack: Graphify, SEED, PAUL, Hermes, Railway — demonstrated live from blank folder to deployed app

---

## Recurring Items Still Trending (Aug 21)

| Slug | Day | Stars (approx) | Notes |
|------|-----|-----------------|-------|
| andrej-karpathy-skills | Day ~32 | ~203K | Approaching one-month milestone |
| obra-superpowers | Day ~10 | ~272K | Consistent growth |
| caveman | Day ~27 | ~99K | Approaching 100K milestone |

---

## Items Excluded (already in recent digests)
- FlorianBruniaux/claude-code-ultimate-guide — Aug 17
- rohitg00/awesome-claude-code-toolkit — Aug 18
- claude-code-auto-mode-default — Aug 14+
- claude-code-self-hosted-environments — Aug 20
- piebald-claude-code-system-prompts — Aug 20
- hkuds-clawteam — Aug 20
- claude-code-v2-1-234-subagent-controls — Aug 20
