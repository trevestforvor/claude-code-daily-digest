# Research Notes — 2026-05-23

## Summary

Research window: ~500s (well within 20-min cap).
Sources checked: GitHub releases, YouTube search (8 curated creators), Product Hunt, Reddit (no results), HN, simonwillison.net, latent.space, releasebot.io, direct GitHub page fetches.

---

## YouTube Coverage (Past 7 Days)

### @indydevdan (129K subs)
- "I Mapped Every Claude Code Concept So You Don't Have To (Full 2026 Roadmap)" — 5 days ago. General concept map, no specific new tools surfaced.
- No confirmed coverage of specific new tools this week.

### @Chase-H-AI (109K subs)
- "Claude Code + Higgsfield MCP = Content MACHINE" — tools covered: Higgsfield MCP (already in submissions). No new items from Chase this week.

### @charlieautomates (8K subs)
- "Claude Code FREE UNLIMITED 2026" (1 week ago) — covers free proxy tools (already in submissions). No new unique tools found.

### @simonscrapes (71.8K subs)
- No recent Claude Code-specific content found this week. Skipped.

### @TechWithTim (2M subs)
- "I Built the Same App With Claude Code and Codex" — 1 day ago (comparison video). Claude Code won on tool-heavy/architecture work; Codex on scoped tasks. Does not surface new installable tools.
- "Claude Just Got a Superpower No One's Talking About" — about the Superpowers plugin (obra/superpowers). Strong viral signal.

### @UICollectiveDesign (52.5K subs)
- Not checked this run (time constraint). No signal found.

### @DevelopersDigest (61.5K subs)
- Not checked this run (time constraint). No signal found.

### Superpowers YouTube Coverage (Multiple Creators, Unverified by Handle)
Multiple videos covering the Superpowers plugin appeared in search this week:
- "This Is The Only Claude Code Plugin You'll EVER Need (Superpowers)"
- "Claude Code Now Has SUPERPOWERS! (plugin)"
- "Claude Code + SUPERPOWERS = The End of Vibe Coding? (Full Tutorial)"
- "This One Plugin Just 10x'd Claude Code"
- Spanish/Portuguese videos also found — international reach.
YouTube pages returned 403; unable to confirm which of our 8 tracked handles made these. Counted as viral signal without confirmed creator_buzz handles.

---

## Key Findings by Source

### GitHub Releases (Anthropic)
- **v2.1.149** (May 22): `/usage` per-category breakdown (skills, subagents, plugins, per-MCP costs), `/diff` keyboard nav, GFM checkbox rendering, `allowAllClaudeAiMcps` enterprise setting, PowerShell permission bypass fix, git worktree sandbox fix. 12+ UI/UX bug fixes.
- **v2.1.150** (May 23): internal infrastructure only, no user-facing changes.

### GitHub (Community)
- **obra/superpowers** — 204K stars, v5.1.0 May 4. Official Anthropic plugin marketplace. Agentic skills framework: TDD, systematic debugging, subagent-driven dev, brainstorming. Multiple YouTube tutorials published this week.
- **WithWoz/wozcode-plugin** — v0.3.71 May 22, YCombinator company, official Anthropic-approved plugin. Reduces token usage 25–55% by collapsing 9 tool calls to 2 (replaces read+edit chains with batch operations). `wozcode.com`.
- **yvgude/lean-ctx** — 2.1k stars, v3.6.16 released May 22. AST-aware context compression (Tree-sitter, 21 languages), 51+ MCP tools, 95+ shell patterns, up to 99% token savings. Local-first Rust binary.
- **siteboon/claudecodeui** (CloudCLI) — 11.2k stars, v1.32.0 May 13. Web+mobile UI for Claude Code sessions; responsive, git integration, shell terminal, session management. `npx @cloudcli-ai/cloudcli`.
- **wanshuiyin/Auto-claude-code-research-in-sleep** (ARIS) — 10.4k stars, v0.4.11 May 18. 74+ markdown-only skills for autonomous ML research. Cross-model review loops (Claude writes, GPT reviews). Zero dependencies.
- **elementalsouls/Claude-BugHunter** — 51 skills, 15 slash commands, 574+ disclosed HackerOne patterns across 24 vulnerability classes. For authorized bug-bounty/red-team engagements.
- **elementalsouls/Claude-OSINT** — 1.3k stars. 90+ recon modules, 48 secret-regex patterns, 80+ dorks, 9 read-only credential validators. Authorized OSINT.
- **RousselPaul/masko-code** — MIT, free, macOS. Desktop mascot that watches Claude Code terminal; permission alerts via speech bubble, session switching shortcuts. Product Hunt 214 upvotes.
- **tylergraydev/claude-code-tool-manager** — 322 stars, v3.10.0 May 17. Desktop GUI (Tauri/Svelte) for MCP server management, command/skill creation, session explorer, usage analytics. macOS.
- **rohitg00/awesome-claude-code-toolkit** — 1.8k stars. Separate from pro-workflow. 135 agents, 176+ plugins, 35 skills + 400K via SkillKit, 42 commands, 20 hooks, 14 MCP configs. Comprehensive reference toolkit.

### Product Hunt
- **WOZCODE** — listed with strong signal. YC-backed, official plugin.
- **Masko Code** — March 16, 2026 launch, #7 daily leaderboard, 214 upvotes.

### HN / Blogs
- "Code Review for Claude Code" HN thread (linked to /code-review command from v2.1.146–147). No new tools surfaced.
- MIT Technology Review (May 21): recap of Code with Claude London — no new tool announcements.
- simonwillison.net: Playwright MCP TIL, no new tools from past 72h.
- latent.space: MCP Apps coverage (Jan 2026, already old).

### Skipped / Already Covered
- MCP Apps (January 2026 launch) — too old
- 1Code (January 2026 launch) — too old
- Claude Managed Agents Dreaming/Outcomes/Webhooks — covered in May 20 digest
- TonsBySkills/CCPI, claude-hud, awesome-agent-skills — already in recent digests
- Trends-MCP (rugvedp) — 14 stars, too small
- claude-code-youtube-mcp (wynandw87) — 1 star, too small
