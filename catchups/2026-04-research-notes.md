# April 2026 Catchup — Research Notes

Window: Apr 1 – Apr 20, 2026 (month in progress). Today: 2026-04-20.

## Anthropic official releases (April 2026)

- **Claude Opus 4.7 GA** (Apr 16): SWE-bench Verified ~87.6%, new `xhigh` effort level, 2,576px vision, same $15/$75 per-Mtok pricing; rolled across API, Bedrock, Vertex, Foundry. https://www.anthropic.com/news/claude-opus-4-7
- **Claude Code Routines** (Apr 14, research preview): schedule / HTTP / GitHub-webhook triggered cloud automations. Pro 5/day, Max 15/day, Team/Ent 25. https://claude.com/blog/introducing-routines-in-claude-code
- **Claude Code Desktop redesign** (Apr 14): multi-session sidebar, drag-and-drop pane layout, integrated terminal, in-app file editor, rebuilt diff viewer, expanded preview pane (HTML/PDF/local app servers). https://venturebeat.com/orchestration/we-tested-anthropics-redesigned-claude-code-desktop-app-and-routines-heres-what-enterprises-should-know
- **/ultrareview** — spins up multiple cloud reviewer agents, each independently verifies bugs before surfacing. Pro/Max get 3 free runs.
- **v2.1.110 — /tui fullscreen + push notifications** (Apr 15): flicker-free fullscreen mode without restart; mobile push notifications tool when Remote Control + "Push when Claude decides" enabled; Ctrl+O toggles verbose transcript; `/focus` command. https://claude-world.com/articles/claude-code-21110-release/
- **Computer use in Claude Code CLI** (week of Mar 30–Apr 3): Claude opens native apps, clicks through UI, tests own changes. Enabled via `/mcp` → computer-use.
- **Session recap + prompt-cache controls**: new `/recap` command, 1-hour and forced 5-minute prompt-cache controls, Skill-tool access to built-in slash commands like `/init`, `/review`, `/security-review`.
- **Monitor tool + PID-namespace subprocess sandboxing on Linux**: stream events from background scripts; isolate subprocesses with PID namespaces.
- **xhigh effort level + interactive effort slider**: `/effort` without args opens arrow-navigated slider. xhigh is default in Claude Code.
- **Auto mode for Opus 4.7 on Max**: permission-auto mode now available for Opus 4.7 on Max.
- **Claude Design** launch (Apr 17): AI design tool for prototypes, decks, marketing assets; handoff to Claude Code; Figma stock −6.4% on news. https://venturebeat.com/technology/anthropic-just-launched-claude-design-an-ai-tool-that-turns-prompts-into-prototypes-and-challenges-figma
- **Vertex AI setup wizard** from login screen; **Auto (match terminal) theme**; /resume picker defaults to current dir; /model warns before switch.

## Viral / community stories (Mar 31 – Apr 20)

- **Claude Code source-code leak** via npm source map in `@anthropic-ai/claude-code@2.1.88`, 59.8MB `.map`, ~512k LOC TypeScript, ~1,900 files. Revealed hidden flags, always-on **KAIROS** daemon, autoDream memory consolidation, "undercover mode" for OSS contributions. Mirror repo hit 84k★/82k forks. https://venturebeat.com/technology/claude-codes-source-code-appears-to-have-leaked-heres-what-we-know
- **npm axios supply-chain trojan** same morning (Mar 31, 00:21–03:29 UTC): malicious `axios` 1.14.1 / 0.30.4 with cross-platform RAT bundled by users who installed/updated Claude Code in that window. https://thehackernews.com/2026/04/claude-code-tleaked-via-npm-packaging.html
- **"Gaslightus 4.7"** — r/ClaudeCode backlash thread, 1.7k upvotes: Opus 4.7 invents files, defends hallucinated tests across 10 turns, obsessively scans benign PowerPoints for malware.
- **Caveman plugin** by JuliusBrussee — "talk like caveman" → 75% fewer output tokens. HN front page ~883–10,000 upvotes; 20k+ GH stars. https://github.com/JuliusBrussee/caveman
- Reddit complaints: usage limits hit faster than expected on Claude Code; Anthropic statement acknowledged the issue.

## Plugins / skills / tools trending in April

- **/dev for Claude Code** (Product Hunt Apr '26) — Tech-Lead slash command orchestrating Worker agents in git worktrees. 6-phase workflow (PRD → arch → code → QA → review → iterate). https://www.producthunt.com/products/dev-for-claude-code
- **CC-BEEPER** (PH Apr 15, #6, 220 upvotes) — floating macOS pager for Claude Code: permissions, voice input, spoken recaps, 4 auto-accept modes.
- **Masko Code** — macOS/Linux desktop mascot that watches your agents real-time, MIT/local.
- **CCHub** — Tauri v2 + React + Rust desktop control panel for Claude/Codex/Gemini CLI ecosystem: MCP marketplace, config profiles, skills browser, security audit. https://github.com/
- **Tech Digest skill** (camilleroux/tech-digest) — `/digest` pulls HN Daily + Lobste.rs RSS, score-filtered, zero deps.
- **last30days-skill** (mvanhorn/last30days-skill) — cross-source research skill (Reddit, X, YouTube, HN, Polymarket).
- **create-viral-content skill** (aaaronmiller/create-viral-content) — social-media virality assistant skill.
- **Tons of Skills marketplace** + **ccpi CLI package manager** — 423 plugins, 2,849 skills, 177 agents; `pnpm add -g @intentsolutionsio/ccpi`. https://tonsofskills.com/
- **awesome-claude-code** (jmanhype, hesreallyhim) — active April commits.

## MCP servers & adjacent infra (Apr '26)

- **Cloudflare Code Mode MCP Server** — AI-agent interaction with 2,500+ API endpoints from 1.17M → ~1k tokens (−99.9%). https://www.infoq.com/news/2026/04/cloudflare-code-mode-mcp-server/
- **WordPress Playground MCP** — `@wp-playground/mcp`, one-command wire-up, WebSocket, PHP exec, file I/O.
- **Azure MCP Server 2.0 stable** — self-hosted remote-MCP support.
- **MCP Tool Search** — lazy loading, claimed −95% context usage.

## Simon Willison April posts

- "Cleanup Claude Code Paste" tool (Apr 6). https://simonwillison.net/2026/Apr/6/cleanup-claude-code-paste/
- Datasette 1.0a28 (Apr 17) — mostly built with Claude Code + Opus 4.7. https://simonwillison.net/2026/Apr/17/datasette/
- Claude system prompts as git timeline (Apr 18).
- Claude Token Counter with model comparisons (Apr 20).

## Sources (headline)

- anthropic.com/news/claude-opus-4-7
- claude.com/blog/introducing-routines-in-claude-code
- code.claude.com/docs/en/whats-new
- code.claude.com/docs/en/routines
- thehackernews.com (leak + supply chain)
- venturebeat.com (desktop + Claude Design)
- simonwillison.net
- github.com/JuliusBrussee/caveman
- github.com/jeremylongshore/claude-code-plugins-plus-skills
- tonsofskills.com
- tldr.tech/tech/2026-04-01
- producthunt.com (CC-BEEPER, Masko Code, /dev for Claude Code)
- dev.to / claudefa.st / findskill.ai

## Ranking notes

- No single category >12. Anthropic tier limited to 11.
- Caveman tagged [viral, cost, plugin] — single slot, multi-category.
- Month is incomplete; called out in footer.
