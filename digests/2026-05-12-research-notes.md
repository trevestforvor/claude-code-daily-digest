# Research Notes — 2026-05-12

## Timer
- Start: 1778601758 (Unix)
- End (approx): ~284s into research

## YouTube Coverage

### @Chase-H-AI (Chase AI, 109K subs)
- **"Claude Code + Higgsfield MCP = Content MACHINE"** (~2 weeks ago, ~April 28) — covers Higgsfield MCP server launch (April 30), image/video generation from Claude Code, 30+ models including Sora 2, Veo 3.1, Kling 3.0
- Blog post: "Claude Code + Obsidian: Persistent Memory That Works" (May 5, 2026)
- Note: Higgsfield MCP video is ~14 days ago, just outside the 7-day creator_buzz window

### @indydevdan (IndyDevDan, 129K subs)
- "Claude Code Deep Mastery" playlist active; no specific video found in past 7 days via search
- Channel page not crawlable. No creator_buzz applied.

### @DevelopersDigest (61.5K subs)
- Could not confirm specific Claude Code videos in past 7 days. Skipped.

### @simonscrapes (Simon Scrapes, 71.8K subs)
- "The Easiest Way to Get Ahead With Claude Code" from March 21, 2026 — no recent week content found. Skipped.

### @TechWithTim (2M subs)
- No specific videos found for this week. Search returned conference coverage instead. Skipped.

### @charlieautomates (8K subs)
- No specific videos found in past 7 days via search. Skipped.

### @adrienaidesigner (4K subs)
- No specific videos found. Skipped.

### @UICollectiveDesign (52.5K subs)
- No specific videos found this week. Skipped.

---

## Key Findings

### NEW — Anthropic official (Code with Claude 2026 Developer Conference, May 6)
- **Claude Managed Agents: Dreaming, Outcomes, Multiagent Orchestration** — Dreaming (research preview): scheduled background process reviews sessions, extracts patterns, curates memories between runs; Harvey pilot saw 6x task completion improvement. Outcomes (public beta): rubric-based grader evaluates in separate context window. Multiagent Orchestration (public beta): lead agent fans out to parallel specialist subagents.
- **Claude Code Routines** — Cloud-hosted Claude Code runs: packages prompt + repos + tools/connectors, runs on recurring cadence, on-demand, or GitHub events (PR, release). One Routine can combine all three triggers.
- **Rate limits doubled** — Claude Code 5-hour limits doubled for Pro/Max/Team/Enterprise. Peak-hour throttling removed for Pro/Max. Powered by Colossus 1 (SpaceX compute deal).
- **Creative connectors** — Blender, Adobe, Ableton, Affinity, Autodesk Fusion, Resolume Arena, SketchUp, Splice added.

### NEW — Claude Code v2.1.139 (May 11, 2026)
- `claude agents` command (Research Preview): see all sessions
- `/goal` command: set completion conditions; Claude continues until met
- `claude plugin details <name>`: component inventory + token costs
- MCP stdio servers now receive `CLAUDE_PROJECT_DIR` env var
- Improved transcript navigation; multiple UI/UX fixes

### NEW — Design/trending
- **VoltAgent/awesome-design-md** — 76.3K stars (was 71K days ago), 73 DESIGN.md brand design system files (Apple, Stripe, Uber, Anthropic/Claude, Tesla, Notion, Figma, Supabase, etc.). Drop one file into project, Claude generates matching UI. Just plain markdown.
- **addyosmani/agent-skills** — 40.2K stars. Addy Osmani (now at Anthropic, ex-Google Chrome DevRel). 22 skills covering full dev lifecycle: DEFINE → PLAN → BUILD → VERIFY → REVIEW → SHIP. Google engineering culture baked in. Cross-platform (Claude Code, Cursor, Gemini CLI, Windsurf).

### NEW — Security hot topic
- **Mitiga MCP OAuth token theft** (disclosed April 10, Anthropic said "out of scope" April 12) — npm postinstall hooks silently rewrite ~/.claude.json to redirect MCP traffic through attacker proxy. Persists even after token rotation (hooks rewrite config on next load). Covered by SecurityWeek, eSecurity Planet, multiple security outlets.
- **CVE MCP Server** (mukul975/cve-mcp-server, 561 stars) — 27 security intelligence tools across 21 APIs: CVE lookup, EPSS, CISA KEV, MITRE ATT&CK, Shodan, VirusTotal.

### NEW — MCP content creation
- **Higgsfield MCP** — Official MCP server (higgsfield.ai/mcp). 30+ image and video generation models. Install: `claude mcp add --transport http --scope user higgsfield https://mcp.higgsfield.ai/mcp`. Models include Sora 2, Veo 3.1, Kling 3.0, Soul 2.0. Covered by Chase AI ~2 weeks ago.

### Continuing from May 10
- **caveman** (57.4K+ stars) — Day 2; still hot
- **RTK** (45.5K+ stars) — Day 2; still hot
- **claude-mem** (74.4K stars) — Day 2
- **everything-claude-code** (178K stars) — Day 2
- **get-shit-done** (61.3K+ stars) — Day 2
- **graphify** (45.9K stars) — Day 2
- **hesreallyhim/awesome-claude-code** (43.2K stars) — Day 5, still the canonical reference
- **last30days-skill** — Day 2

### Dropped (fading)
- 9router (day 5+), snyk (day 4), piebald (day 5), owl-listener (day 5), prismatic (day 4), browserbase (day 4+), alirezarezvani (day 6+), claude-microsoft-365 (day 4), n8n-MCP, PAL MCP, hermes-agent, skyvern, superpowers

---

## Dedup Check vs submissions.json
Checked: kepano-obsidian-skills (in submissions — skip), remotion (in submissions — skip), glif-mcp-server (in submissions — skip)

## Rankings
1. DESIGN: awesome-design-md (76.3K stars, biggest growth)
2. DESIGN/SKILL: addyosmani/agent-skills (40.2K, Addy Osmani at Anthropic)
3. ANTHROPIC: Claude Managed Agents Dreaming/Outcomes/Multiagent
4. ANTHROPIC: Claude Code Routines
5. ANTHROPIC: v2.1.139 (claude agents + /goal)
6. ANTHROPIC/COST: Rate limits doubled + Colossus 1
7. MCP: Higgsfield MCP (content creation)
8. GENERAL: Mitiga MCP OAuth attack warning
9. COST: caveman (day 2)
10. COST: RTK (day 2)
11. SKILL: claude-mem (day 2)
12. SKILL/GENERAL: everything-claude-code (day 2)
13. GENERAL: get-shit-done (day 2)
14. GENERAL: hesreallyhim/awesome-claude-code (day 5)
15. GENERAL: graphify (day 2)
