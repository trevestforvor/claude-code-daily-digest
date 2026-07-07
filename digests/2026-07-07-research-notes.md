# Research Notes — 2026-07-07

Research window: ~450s (well under 1200s cap)

---

## YouTube Coverage (past 7 days)

### @charlieautomates (Charlie Automates, ~8K subs)
- "SEED + PAUL = Claude Code Meta" — covers SEED (AI Project Incubator) and PAUL (Plan-Apply-Unify Loop) combo as a "meta" framework; exact tools named unclear (403 on fetch)
- "2 Claude Code Repos NOBODY'S Talking About Yet" — covers two unknown repos; couldn't confirm names (403 on YouTube fetch)
- "AI Summer 2026 | Claude Code & Choosing the Right Model | Week 3, Day 1" — focus on Fable 5 → Sonnet 5 model transition
- Signal this run: SEED+PAUL combo, unknown 2 repos

### @Chase-H-AI (Chase AI, ~175K followers cross-platform)
- Most recent Claude Code content: "Your Claude Code Carousels Suck (Here's The Fix)" (June 2), "Claude Code + Higgsfield MCP = Content MACHINE" (April 29)
- No July 2026 Claude Code tool coverage confirmed → **SKIP this run**

### @simonscrapes (Simon Scrapes, ~71.8K subs)
- "We Just Hit The Point Of No Return With Claude Code" — 2 weeks ago (late June), general; couldn't confirm tools
- "14 GENIUS Ways to Give Claude Code SUPERPOWERS" — ~4 weeks ago (June 2026); title strongly suggests coverage of obra/superpowers plugin (same name, same framing). Couldn't verify directly (403). Treated as probable signal.
- Signal this run: probable obra/superpowers coverage

### @indydevdan (IndyDevDan, ~129K subs)
- No July 2026 Claude Code videos found in searches → **SKIP this run**

### @UICollectiveDesign (UI Collective, ~52.5K subs)
- No July 2026 content found → **SKIP this run**

### @DevelopersDigest (Developers Digest, ~61.5K subs)
- Ongoing coverage of Claude Code updates; no specific tool/skill July videos found

### @TechWithTim (Tech With Tim, ~2M subs)
- No July 2026 Claude Code content found → **SKIP this run**

### @adrienaidesigner (Adrien AI Designer, ~4K subs)
- No July 2026 content found → **SKIP this run**

---

## Key Findings

### New Items (not in submissions.json, not in recent 7-day digests)

1. **obra/superpowers** — 249K stars (grown from 150K in April, 170K in May); official Claude marketplace listing; v6.1.1 (July 2, 2026); "agentic skills framework & software development methodology"; 14 skills covering TDD, debugging, brainstorming, subagent orchestration, code review, git worktrees; created by Jesse Vincent (Prime Radiant). Simon Willison: "one of the most creative users of coding agents." SimonScrapes video "14 GENIUS Ways to Give Claude Code SUPERPOWERS" probable coverage. Three repos in ecosystem: obra/superpowers, obra/superpowers-marketplace, obra/superpowers-lab.

2. **Fable 5 "Fablepocalypse" (TODAY July 7)** — The 50% weekly subscription allowance for Fable 5 ended today. From July 7 onward, Fable 5 on all plans requires usage credits at $10/Mtok input, $50/Mtok output. Simon Willison coined "Fablepocalypse" and upgraded to $200/month Max plan to extend his Fable window. Heavy users hit the 50% cap before July 7 arrived.

3. **Claude Code v2.1.202** (July 6, 2026) — Dynamic workflow size setting added to /config (small/medium/large advisory guideline); workflow.run_id + workflow.name OTel attributes; fixed critical bug: re-invoking a loaded skill no longer appends duplicate instructions; /review <pr> rolled back to single-pass fast review (use /code-review for multi-agent); fixed background session stability, SSH link clicks, Remote Control command routing, voice dictation unbounded retries, /rename on background sessions; improved /workflows layout with wider titles and dedicated time column.

4. **wshobson/agents** — 37.6K stars; multi-harness plugin marketplace for Claude Code, Codex CLI, Cursor, OpenCode, GitHub Copilot, Gemini CLI; 88 plugins, 194 agents, 158 skills, 106 commands; PluginEval quality framework; tiered model strategy (Fable 5 for autonomous, Haiku for operational); single Markdown source deploys to all harnesses.

5. **jeremylongshore/claude-code-plugins-plus-skills** — 2.5K stars; 425 published npm packages, 2,810 skills, 200 agents; marketplace at tonsofskills.com; ccpi CLI (`pnpm add -g @intentsolutionsio/ccpi`); v4.33.0; "Killer Skill of the Week" feature highlights new contributions (current: databricks-pack, finds ~$27K/month leaks).

6. **Piebald-AI/claude-code-system-prompts** — 11.6K stars; 515 individual system prompt strings extracted from Claude Code compiled source; updated within minutes of each release; changelog tracking 228 versions since v2.0.14; now tracks v2.1.202 (July 6, 2026). Reverse-engineering / transparency project.

7. **sangrokjung/claude-forge** — 774 stars; v3.1.0 (June 30, 2026); "oh-my-zsh for Claude Code"; 11 specialist agents, 34 slash commands, 25 skills, 6-layer security hooks, 4 MCP server connections (browser automation, docs, Chrome DevTools); install via `/plugin marketplace add sangrokjung/claude-forge`.

8. **Dicklesworthstone/coding_agent_session_search (cass)** — 946 stars; unified TUI/CLI to index and search coding agent session history across 20+ providers (Claude, Codex, Cursor, Aider, Gemini, etc.); <60ms latency with edge n-gram indexing; optional local semantic search (MiniLM/Snowflake Arctic/Nomic); rich 3-pane terminal UI; HTML export with AES-256; `brew install dicklesworthstone/tap/cass`.

### Recurring Items with New Angles

- **graphify** (74.8K stars) — Day 2 recurring. Still ~1 release/day velocity. v0.8.35+; new additions: Visual Studio .slnx support, Streamable HTTP MCP transport, live PostgreSQL schema introspection, CodeBuddy platform support.

- **karpathy-claude-md** (~225K combined stars) — Day 2 recurring. Still fastest-growing behavioral skill of 2026.

- **claude-code-steganography** — Day 7 recurring. Anthropic post-mortem still pending. 12+ outlets still running coverage.

- **claude-code-limits-july13** — +50% weekly limits through July 13 (6 days remaining).

- **antigravity-awesome-skills** (42K stars) — Day 2 recurring.

- **mattpocock-skills** (155K stars) — Day 3 recurring.

- **claude-code-routines** — Day 2 recurring. Official cloud-scheduled agents.

### Items Checked but Dropped
- **pdf-mcp** (jztan): 74 stars — too small for digest
- **cass/statewright**: couldn't find
- **claude-blog** (AgriciDaniel): 1.3K stars, v1.9.1 May 20 — not fresh enough
- ponytail + headroom: Day 4+ recurring, dropping (fading)
- hesreallyhim/awesome-claude-code: 47.8K stars — in submissions already (listed as "awesome-openclaw-usecases" or similar)

---

## Sources
- YouTube search (site:youtube.com queries for each channel) — 403s on direct fetch
- github.com/sangrokjung/claude-forge, /jztan/pdf-mcp, /obra/superpowers, /Piebald-AI/claude-code-system-prompts, /jeremylongshore/claude-code-plugins-plus-skills, /Dicklesworthstone/coding_agent_session_search, /wshobson/agents
- code.claude.com/docs/en/changelog (v2.1.202 July 6)
- anthropic.com/news (via search), fable5.app, digitalapplied.com, bleepingcomputer.com
- simonwillison.net (June newsletter, July 3 Fable's judgement, July 5 sqlite-utils)
- github.com/trending (no Claude Code repos in top 15 this week)
- reddit searches — no indexed results returned
- hn.algolia.com — indirect (403 on direct API)
