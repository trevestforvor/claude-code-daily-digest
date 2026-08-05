# Research Notes — 2026-08-05

Research window: ~10 min of web searches across YouTubers, GitHub, HN, Anthropic, MCP blog.

---

## YouTube Coverage

### @charlieautomates (8K subs)
- **"2 Claude Code Repos NOBODY'S Talking About Yet"** (youtube.com/watch?v=ildGgQB9rYE) — covers PAUL (ChristopherKahler/paul, 1.2K stars, Plan-Apply-Unify Loop) and SEED (ChristopherKahler/seed, 324 stars, AI project incubator). Also mentions Skillsmith and CARL from the same Chris AI Systems framework. **Adding PAUL+SEED as a combined item with @charlieautomates creator_buzz.**
- "#1 Claude Code Repo Today (Nobody's Talking About It)" — Understand-Anything (already in digest, Day 10).

### @Chase-H-AI (109K subs)
- "The Top 10 Claude Code Plugins to 10x Your Next Project (June '26)" (youtube.com/watch?v=IShdbDP4Jgg) — covered various top plugins. Could not fetch the video page (403). No confirmed new items attributable specifically to this video.
- "Top 10 Claude Code Frontend Design Skills, Plugins, & CLIs" (Q9ty3eopOPs) — frontend-focused, no specific new items identified beyond what's in existing digest.

### @TechWithTim (2M subs)
- General "FULL Claude Code Tutorial for Beginners in 2026!" — beginner tutorial, no specific new ecosystem tools identified. Skip.

### @simonscrapes (71.8K subs)
- "How Anthropic Teams ACTUALLY use Claude Code day to day (for non-engineers)" (June 5, 2026) — Anthropic internal workflows, not past-72h. Skip.
- Most recent content from March-June 2026. No August/late July content found. Skip this week.

### @indydevdan (129K subs)
- Channel active via "Claude Code Deep Mastery" playlist, but no specific July/August 2026 videos confirmed. Skip this run.

### @UICollectiveDesign, @DevelopersDigest, @adrienaidesigner
- No specific new July/August 2026 content confirmed for these channels. Skip.

---

## Key Findings by Source

### Anthropic Official
- **Claude Opus 5** released July 24, 2026 (v2.1.219). 1M context, $5/$25 per MTok (same as Opus 4.8), near-Fable 5 intelligence. New: 3-level effort toggle (low/medium/high), nested subagents to depth 3. Available Claude.ai, Claude Code, API, Cowork same day.
- **Claude Security Plugin** beta released July 22, 2026. GitHub: anthropics/claude-code-security-review (~4.3K stars). Multi-agent scanner: architecture mapper, threat modeler, vulnerability hunters, independent verifiers. `/security-review` command. Requires v2.1.144+, Python 3.8+. Also ships as GitHub Actions step.
- **Claude Code v2.1.221/222** (August 4): Focus view (Ctrl+Alt+F in VSCode), sandbox credential masking, prompt-audit subcommand, worktree isolation security fixes, PreToolUse hook bypass fix.
- **Claude Code v2.1.212** (July 17): `/fork` copies to background, `/subtask` replaces in-session subagent, WebSearch per-session cap (200), subagent spawn cap (200), `/resume` picker.

### MCP Official
- **MCP 2026-07-28** spec finalized July 28. Stateless core (removes sessions + initialize), header-based routing, cacheable list results, auth hardening, formal extensions framework for Multi Round-Trip Requests. GitHub's MCP server already supports it. Anthropic rolling out Claude support. Migration guides published.

### GitHub
- **ComposioHQ/awesome-claude-skills** — 71.9K stars (not in any prior digest). 1,000+ production-ready skills, 11 domains, Composio connect-apps integration.
- **elementalsouls/Claude-BugHunter** — 3.3K stars. 82 skills, 15 slash commands, 681 disclosed-report patterns, 24 vulnerability classes. Assessed for digest but ranking 16th — dropping in favor of stronger items.
- **jeremylongshore/claude-code-plugins-plus-skills** — 2.6K stars, 471 plugins, 3,179 skills. Solid but narrower audience; not included today.
- **FlorianBruniaux/claude-code-ultimate-guide** — 430K+ lines, limited star confirmation. Not included today.

### HN
- Active discussion threads on MCP 2026-07-28 (stateless spec) — strong community interest.
- Older threads on skills vs MCP servers, Claude Code as daily driver.

### ccusage
- Was covered in 2026-05-22 digest. Skip (not new).

---

## Candidates Selected for Digest (15 items)

**New (4):** claude-opus-5, mcp-2026-07-28, claude-security-plugin, composio-awesome-claude-skills  
**New + creator_buzz (1):** paul-seed (@charlieautomates)  
**Recurring (10):** andrej-karpathy-skills (Day 19), ecc (Day 13), graphify (Day 14), caveman (Day 13), open-design (Day 6), understand-anything (Day 10), headroom (Day 8), orca (Day 2→3 recalc), context-mode (Day 2→3), hallmark (Day 9)

---

## Dropped (too old / small / unverifiable)
- claude-bughunter: 3.3K stars — solid but displacing would hurt bigger recurring items; slot went to paul-seed (creator_buzz signal)
- awesome-agent-skills: Day 5, 29.5K stars — dropped to make room for new items
- aas-core: Day 8, 44.4K — dropped
- claude-code-best-practice: Day 8, 63.9K — dropped
- alirezarezvani-claude-skills, generative-media-skills, emdash: Days 3+, falling from 72h window
