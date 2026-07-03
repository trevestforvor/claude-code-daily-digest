# Research Notes — 2026-07-03

## Research Window
- Start: ~2026-07-03T00:00 UTC
- Stop: ~2026-07-03T00:09 UTC (elapsed ~510s out of 1200s cap)

## YouTube Coverage (Past 7 Days)

### TechWithTim (2M subs)
- "Watch This If You're Just Learning How to Use Claude Code in 2026" — 4 days ago (June 29)
  - YouTube 403 blocked fetch, could not extract specific tools mentioned.

### IndyDevDan (129K subs)
- "The ULTIMATE Beginner Guide to Claude Code in 2026" — ~2 weeks ago (June 19)
  - No specific tool mentions confirmed; YouTube 403 blocked fetch.
- Same-titled video appeared in search (shared URL with TechWithTim results — may be separate video)

### Chase AI (109K subs)
- "Claude Code + Higgsfield MCP = Content MACHINE" — April 29, 2026 (not past 7 days)
- "Your Claude Code Carousels Suck (Here's The Fix)" — ~1 month ago
  - No recent (past 7d) Claude Code videos confirmed for Chase AI.

### Simon Scrapes (71.8K subs)
- "Watch This If You're Serious About Claude Code (Most People Skip This Step)" — 1 week ago (June 26)
  - YouTube 403 blocked fetch, could not extract specific tools.

### Developers Digest (61.5K subs)
- Primarily blog content (developersdigest.tech), not specific YouTube videos in past 7d.

### Charlie Automates (8.1K subs)
- "FULL Claude Code Tutorial For Beginners in 2026!" — 3 days ago (June 30)
  - YouTube 403 blocked; could not extract tools.
- "The Top 10 Claude Code Plugins to 10x Your Next Project (June '26)" — ~1 month ago
- "5 Claude Code Skills I Can't Live Without (174,000+ Github Stars)" — April 30, 2026
  - References 174K total stars across skills — likely references gstack + mattpocock combined

**YouTuber tastemaker notes:** No confirmed 2+ YouTuber overlap on single tools in past 7d due to YouTube 403 blocking. Cannot assign `creator_buzz` with confidence this run. Skipped this run for all.

---

## High-Signal Findings

### NEW / FRESH (past 72h)

**Claude Code v2.1.199** (July 2, 2026)
- Stacked slash-skill invocations: now loads up to 5 leading skills at once (e.g. `/skill1:skill2:skill3`)
- New `disableBundledSkills` setting + `CLAUDE_CODE_DISABLE_BUNDLED_SKILLS` env var
- SSL certificate errors now show actionable guidance immediately
- Streaming responses preserve partial output on mid-stream API errors
- Background agent daemon Linux crash fixed (~50s cycle)
- Background agents cold-start failures on macOS over SSH fixed
- URL: https://github.com/anthropics/claude-code/releases
- Not previously covered (v2.1.198 was yesterday's digest)

**Omnigent v0.4.0** (omnigent-ai/omnigent) — July 3, 2026 (TODAY)
- 6.1K stars, 796 forks
- Databricks open-source meta-harness: orchestrates Claude Code, Codex, Cursor, Pi, OpenCode, Hermes, custom agents
- v0.4.0 released today; adds cross-device session sync, governance policies, cloud sandboxing (Modal, E2B, K8s)
- Previously covered June 19 as `omnigent-databricks` (slug)
- Install: `curl -fsSL https://raw.githubusercontent.com/omnigent-ai/omnigent/main/scripts/install_oss.sh | sh`

**Skills Janitor v1.4.0** (khendzel/skills-janitor) — June 28, 2026
- 108 stars, Product Hunt presence
- "Tinder for your Claude Code skills" — swipe interface to delete unused skills
- /janitor-swipe: rapid triage UI; /janitor-tokens: cost per skill; /janitor-report: health audit; /janitor-discover: find new skills
- Works with Claude Code and OpenAI Codex, zero external dependencies
- Users typically clear 30-40% of skill token costs
- Not previously covered
- Install: `/plugin marketplace add khendzel/skills-janitor`

### STILL-VIRAL (not new 72h, but never covered in digests)

**garrytan/gstack** (March 12, 2026)
- 119K stars (grew 10K stars in first 48 hours, 50K in 16 days)
- YC CEO Garry Tan's 23-role Claude Code toolkit: CEO, Designer, Eng Manager, QA, Release Manager, Doc Engineer
- Each role = specialized slash command; real browser automation via /browse and /qa
- Not in any previous digest or submissions.json
- Install: `git clone --single-branch --depth 1 https://github.com/garrytan/gstack.git ~/.claude/skills/gstack && cd ~/.claude/skills/gstack && ./setup`
- Very high viral signal despite age — 119K stars outstanding

**mattpocock/skills** (v1.0.1 June 17, 2026; 155K stars)
- Matt Pocock (TypeScript educator, Total TypeScript)
- Went 22K stars in 24h on launch; now 155K stars
- Key skills: /grill-me (relentless design interview), /grill-with-docs (builds CONTEXT.md + ADRs), /improve-codebase-architecture, /triage, /to-prd, /to-issues, /handoff
- Philosophy: 5-stage loop — grill → spec → slice → ship → refactor
- Not in any previous digest or submissions.json
- Install: `npx skills@latest add mattpocock/skills`

**musistudio/claude-code-router** (updated July 2026; 35.5K stars)
- Routes Claude Code / Codex / ZCode requests to any model provider
- Supports: OpenAI, Anthropic, Gemini, OpenRouter, DeepSeek, SiliconFlow, Moonshot, Kimi Code, Mistral, Z.AI, Bailian, custom
- Desktop control panel + conditional routing rules + fallback handling
- Categories: cost (route to cheaper providers), mcp-adjacent
- Not in previous digests or submissions.json
- Install: See GitHub releases (macOS/Windows/Linux desktop app)

**BeehiveInnovations/pal-mcp-server** (v9.8.2; 11.6K stars)
- "The power of Claude Code / GeminiCLI / CodexCLI + [Gemini / OpenAI / OpenRouter / Azure / Grok / Ollama / All] working as one"
- Multi-model orchestration via MCP; `clink` tool for CLI-to-CLI bridging
- Tools: chat, thinkdeep, planner, consensus, codereview, precommit, debug, apilookup, challenge
- Not in previous digests or submissions.json
- Install: `git clone https://github.com/BeehiveInnovations/pal-mcp-server.git && cd pal-mcp-server && ./run-server.sh`

**agent-sh/agentsys** (v6.0.0 May 29, 2026; 885 stars)
- "AI writes code. This automates everything else"
- 24 plugins, 49 agents, 44 skills for Claude Code, OpenCode, Codex, Cursor, Kiro
- Persistent state across session interruptions; branch management, CI/CD, deployment workflows
- Not in previous digests or submissions.json
- Install: `npm install -g agentsys && agentsys`

### ALREADY COVERED / SKIP
- alirezarezvani/claude-skills — covered June 7 + June 14 + June 29
- rohitg00/awesome-claude-code-toolkit — covered June 9 + June 13 + June 30
- FlorianBruniaux/claude-code-ultimate-guide — covered June 2 + June 9 + June 27
- claude-forge-sangrokjung — covered June 7
- ECC affaan-m — covered June 7 + June 20 + yesterday
- glebis/claude-skills — covered June 7
- omnigent first coverage — June 19 (using as recurring today)
- Claude Design — covered June 19
- Claude Sonnet 5 — covered 2 days ago (July 1)
- Claude in Chrome GA — covered yesterday
- Claude Code v2.1.198 — covered yesterday

## HN Discussions (Past 72h)
- "Claude Code as a Daily Driver: Claude.md, Skills, Subagents, Plugins, and MCPs" (HN #48289950) — recent discussion thread. Could not verify exact date; could not fetch HN page due to network restrictions.
- No new high-signal Show HN posts confirmed from past 72h specifically.

## Anthropic News (Past 72h)
- Claude Science grant applications open through July 15 (new detail beyond yesterday's coverage)
- Enterprise: richer admin analytics, model-level entitlements, spend alerts

## Reddit (Past 72h)
- Reddit blocked; no verified posts.

## Product Hunt (Past 72h)
- Skills Janitor — product listing confirmed
- "Agent Skills" indexing 100K+ skills — could be new listing

## Rankings for Digest
1. gstack (119K stars, design priority — Designer role, never covered) — DESIGN
2. mattpocock/skills (155K stars, design priority — /grill-me, /improve-codebase-architecture) — DESIGN
3. Skills Janitor (cost priority, fresh v1.4.0) — COST
4. claude-code-router (cost priority, 35.5K stars, July 2026 update) — COST
5. Claude Code v2.1.199 (Anthropic official, stacked skills feature) — OFFICIAL
6. Omnigent v0.4.0 (multi-agent, recurring item, fresh release today) — AGENT
7. pal-mcp-server (multi-model MCP, 11.6K stars) — MCP
8. agentsys (885 stars, automation layer) — AGENT

Total: 8 items (under 15 cap, good quality over quantity).
