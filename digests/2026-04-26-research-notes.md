# Research Notes — 2026-04-26

## YouTube Coverage (past 7 days)

### @Chase-H-AI (109K subs) — ACTIVE
- **"Top 10 Claude Code Skills, Plugins & CLIs (April 2026)"** (youtube.com/watch?v=KjEFy5wjFQg) — ~2 weeks old. Covered: obra/superpowers, nextlevelbuilder/ui-ux-pro-max-skill, vercel-labs/agent-browser, googleworkspace/cli (gws), andrej-karpathy-skills. Main discovery source for several items.
- **"Top 5 Claude Code Skills + Tools for Design (April 2026)"** (youtube.com/shorts/weNHvvolEds) — ~2 weeks old. Design-focused short. Covered UI/UX design skills.
- **"Top 10 Claude Code Frontend Design Skills, Plugins, & CLIs"** (youtube.com/watch?v=Q9ty3eopOPs) — additional design coverage.

### @charlieautomates (8K subs) — ACTIVE
- **"Claude just got another superpower..."** (youtube.com/watch?v=jeA-KBv0b68) — Based on search results, likely covers Claude Design (launched April 17). Already in April 20 digest.
- **"Claude just got another superpower (but they kept it quiet!)"** (youtube.com/watch?v=rW7NvKnIEqk) — Different video, specific tool unknown (403 block).
- "The ONLY Claude Code Tutorial You'll Ever Need in 2026" — tutorial video.
- "Claude Routines Just Dropped, And It's Perfect" — routines already in April 22 digest.

### @indydevdan (129K subs) — ACTIVE
- **"Dive into Claude Code"** (youtube.com/watch?v=HRI34v68igw) — Already in April 23 digest (dive-into-claude-code-vila).
- **"Every New Claude Code Feature Explained! (2026)"** (youtube.com/watch?v=sJVxwwaF0sU) — Features overview. No single new tool.
- **"Claude Code is all you need in 2026"** (youtube.com/watch?v=0hdFJA-ho3c) — Evergreen content.

### @simonscrapes (71.8K subs) — ACTIVE
- **"Every Claude Code Memory System Compared"** — Already in April 24 digest.
- **"Claude Code Leak — The April Fools' Prank That Wasn't"** — About claw-code, already in April 23 digest.

### @TechWithTim (2M subs) — Covered last week
- Claude Code masterclass already in April 24 digest.

### @UICollectiveDesign (52.5K subs) — No new Claude Code content found this week.

### @adrienaidesigner (4K subs) — No new Claude Code content found this week.

### @DevelopersDigest (61.5K subs) — No specific new Claude Code tool coverage found.

---

## Key Candidates Found (not in recent digests)

### TIER 1 — Hot, not in any April 20-25 digest

1. **obra/superpowers** (159-168k stars, Global Rank #36)
   - Structured agentic methodology: Brainstorm → Design → Plan → Code → Verify
   - 14 composable skills, official Anthropic marketplace (since Jan 15, 2026)
   - Multiple YouTube videos + Chase AI Top 10. Growing rapidly in April 2026.
   - Install: `/plugin marketplace add obra/superpowers`

2. **nextlevelbuilder/ui-ux-pro-max-skill** (55.8k stars)
   - Design intelligence: 161 palettes, 57 font pairings, 99 UX guidelines, 10 tech stacks
   - v2.0 has Design System Generator AI reasoning engine
   - Covered by @Chase-H-AI in Top 10 + Top 5 Design April videos
   - Install: `npx skills add nextlevelbuilder/ui-ux-pro-max-skill`

3. **vercel-labs/agent-browser** (~29.8k stars)
   - Browser automation CLI for AI agents (Vercel official)
   - Works with Claude Code, Codex, Gemini CLI, Cursor, Windsurf
   - Bash-driven: navigate, click, fill, screenshot, extract
   - Covered by @Chase-H-AI in Top 10 April 2026
   - Install: `npm install -g agent-browser && agent-browser install && npx skills add agent-browser`

4. **googleworkspace/cli (gws)** (~19.9k stars)
   - Official Google Workspace CLI: Drive, Gmail, Calendar, Sheets, Docs, Chat, Admin
   - Dynamically built from Google Discovery Service — auto-discovers new APIs
   - Launched March 2, 2026 with 4,900 stars in first 3 days
   - Has built-in agent skills; companion gws-claude-plugin adds 92 Claude Code skills
   - Install: `npm install -g @googleworkspace/cli` or `brew install googleworkspace-cli`

5. **Claude Code Ultraplan** (Anthropic research preview)
   - /ultraplan command sends planning to cloud session while terminal stays free
   - Inline comments, emoji reactions, outline sidebar for plan review
   - Requires Claude Code v2.1.91+, GitHub repo, Claude Code web account
   - Not found in any April 20-25 digest
   - Install: `npm update -g @anthropic-ai/claude-code` then `/ultraplan <prompt>`

### TIER 2 — Solid candidates

6. **anthropics/anthropic-cli (ant)** — Official CLI for Claude API; go install; YAML versioning; Claude Code integration
7. **dchu917/ctx** — Cross-agent /resume with workstreams + transcript binding; Show HN April 23
8. **v2.1.119/v2.1.120 regression survival checklist** — 8 regressions, April 24, practical safety item
9. **hesreallyhim/awesome-claude-code** (~41k stars) — curated list of skills/hooks/slash-commands/plugins
10. **marckrenn/claude-code-changelog** — prompt/flag/metadata tracker across CC releases; companion to @ClaudeCodeLog

### TIER 3 — Lower priority

- hacktivist123/agent-session-resume — cross-agent session resume skill
- WadeWarren/gws-claude-plugin — 92 GWS skills specifically for Claude Code
- ChromeDevTools/chrome-devtools-mcp — Official Chrome DevTools MCP
- Dicklesworthstone/cross_agent_session_resumer

---

## Dedup check
- All of the above were checked against submissions.json and April 20-25 digests — none appear.
- claude-routines: already in April 22 digest
- claude-design: already in April 20, 25 digests
- gstack: already in April 22 digest
- get-shit-done: already in April 20-22 digests
