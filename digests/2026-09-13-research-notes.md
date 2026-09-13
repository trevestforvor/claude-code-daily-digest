# Research Notes — 2026-09-13

## Research window
- Start: 2026-09-13 ~16:05 UTC
- Elapsed at writing: ~228s
- Sources checked: YouTubers (5 searched, 1 with relevant recent content), GitHub topics, trending page, web search (Reddit/HN proxied), Anthropic changelog, GitHub repos direct

---

## YouTube Coverage (past 7 days)

### @charlieautomates — Charlie Automates
- **"2 Claude Code Repos NOBODY'S Talking About Yet"** — video URL https://www.youtube.com/watch?v=ildGgQB9rYE confirmed in search results. YouTube domain is blocked from direct fetch; specific repos covered could not be verified. **Skip creator_buzz credit until repos confirmed.**
- "Don't Setup a Claude Code Second Brain Until You Watch This." — obsidian-second-brain; covered in prior digest.
**Active this week on Claude Code tool discovery.** No specific repo confirmed for today's items.

### @Chase-H-AI — Chase AI
- "Claude Code + Higgsfield MCP = Content MACHINE" — covered Higgsfield MCP skill (robonuggets/higgsfield-skill). Posted ~1 week ago but Higgsfield-skill has only 61 stars — too low to include in digest.
- "GPT 6 Astra Is INSANE for Motion Design" — posted ~5 days ago, not Claude Code specific.
- Most recent verified Claude Code video: August 4, 2026. **No verified September 6–13 Claude Code videos confirmed.**

### @indydevdan — IndyDevDan
No verified September 6–13 videos. Most recent content appears to be June/July 2026. **Skip this run.**

### @simonscrapes — Simon Scrapes
No September 6–13 content confirmed. **Skip this run.**

### @adrienaidesigner — Adrien | AI Designer
No recent videos found. **Skip this run.**

### @DevelopersDigest — Developers Digest
No September 6–13 YouTube content confirmed. **Skip this run.**

### @TechWithTim — Tech With Tim
No September 2026 specific videos confirmed. **Skip this run.**

### @UICollectiveDesign — UI Collective
No September 6–13 content confirmed. **Skip this run.**

---

## Anthropic / Official Releases

### Claude Code v2.1.270 (September 12, 2026)
- Minor fix only: fixed read-only git commands unexpectedly asking for permission (regression from 2.1.269).
- **Not a significant enough release to warrant its own digest item.**

### Claude Code v2.1.269 (September 11, 2026)
- Already in 09-12 digest as `claude-code-2-1-269`. Day 2 carry-forward with recurring_note.

---

## New Candidate Items (never in any digest)

### DESIGN priority

**ui-ux-pro-max-skill** (nextlevelbuilder/ui-ux-pro-max-skill)
- 127.3k stars
- Design system generator: 79 UI styles, 192 color palettes, 74 font pairings, 22 tech stacks
- Install: `npm install -g ui-ux-pro-max-cli && uipro init --ai claude`
- "Turns Claude Code into a senior product designer"
- Never in any digest → INCLUDE (top priority: DESIGN)

### VIRAL / ECOSYSTEM

**hermes-agent** (NousResearch/hermes-agent)
- 245.1k stars — biggest agent framework on GitHub, larger than any Claude Code repo
- Self-improving agent: writes its own skills every 15 tool calls, persistent memory, cross-session identity
- Has a built-in claude-code SKILL.md — can delegate to Claude Code as a subagent
- Crossed 100K stars faster than any prior agent framework
- Install: `curl -fsSL https://hermes-agent.nousresearch.com/install.sh | bash`
- Never in any digest → INCLUDE (VIRAL priority, ecosystem signal)

**cc-switch** (farion1231/cc-switch)
- 132.6k stars
- Cross-platform desktop app managing 7 AI coding tools: Claude Code, Codex, OpenCode, OpenClaw, Grok Build, Hermes Agent, Claude Desktop
- Provider config, MCP server, Skills management across all tools from one UI
- Built with Tauri 2, Rust, React; install: `brew install --cask cc-switch` (macOS)
- Never in any digest → INCLUDE (VIRAL/GENERAL priority)

---

## Recurring Items (yesterday's digest, still trending)

- **i-have-adhd** (ayghri): 44k stars (+900 since yesterday). Day 2.
- **archify** (tt-a1i): 60.4k stars (+1.1k since yesterday). Day 2.
- **video-shotcraft** (Vincentwei1021): 8.4k stars. Day 2.
- **spotify-portal-shunt** (spotify/portal-ai-plugins): Day 2.
- **function-hooks** (anthropics/claude-code#91870): Day 2.
- **ralph-wiggum** (anthropics/claude-code/plugins/ralph-wiggum): Day 3.
- **claude-code-smart-reports** (platform.claude.com): Day 2.
- **zilliz-claude-context**: Day 3.
- **trace-mcp** (nikolai-vysotskyi): Day 2.
- **browser-act-skills**: Day 2.
- **mattpocock-skills**: Day 2.
- **claude-code-best-practice**: Day 2.

## Dropped (fading — 5+ days running)

- **agentic-awesome-skills**: 5 consecutive days (09-09 through 09-12). Drop.
- **oh-my-openagent**: 5 consecutive days (09-09 through 09-12). Drop.

---

## Final Ranking (15 items)

1. ui-ux-pro-max-skill (DESIGN, new)
2. hermes-agent (VIRAL, 245k stars, new)
3. cc-switch (VIRAL, 133k stars, new)
4. i-have-adhd (VIRAL Day 2)
5. archify (DESIGN Day 2)
6. trace-mcp (COST Day 2)
7. spotify-portal-shunt (COST Day 2)
8. function-hooks (ANTHROPIC Day 2)
9. ralph-wiggum (ANTHROPIC Day 3)
10. claude-code-smart-reports (ANTHROPIC Day 2)
11. zilliz-claude-context (GENERAL Day 3)
12. browser-act-skills (GENERAL Day 2)
13. claude-code-best-practice (GENERAL Day 2)
14. video-shotcraft (GENERAL Day 2)
15. mattpocock-skills (GENERAL Day 2)
