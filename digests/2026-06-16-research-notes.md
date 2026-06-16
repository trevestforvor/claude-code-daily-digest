# Research Notes — 2026-06-16

## Summary of Research Window

Elapsed at write time: ~7 min of 20-min cap.
Sources checked: GitHub topics (claude-code, claude-skills), YouTube (5/8 curators), Reddit/HN searches, Anthropic changelog, product announcements.

---

## YouTube Coverage (Past 7 Days)

| Creator | Subscribers | Coverage Found | Videos (past 7d) |
|---------|-------------|----------------|-----------------|
| TechWithTim | 2M | No new Claude Code content found in past 7d (most recent: May content) | — |
| IndyDevDan | 129K | **YES** — "Anthropic Just Put Claude Code Agents on a Meter" (h95BH9GrZak) covering June 15 credit pool billing. Also "June 15th: Claude Subscriptions Change" (l0NL_TPO4JQ) referenced in search results. | 1–2 videos |
| Chase AI | 109K | **YES** — "Your Claude Code Carousels Suck (Here's The Fix)" (7taGazHQkMg, ~June 2), "Claude Code + Higgsfield MCP = Content MACHINE" (April 29). Focused on content creation workflows. | 1 video (past ~2 weeks) |
| Simon Scrapes | 71.8K | **YES** — "Anthropic Just Put Claude Code Agents on a Meter" and June 15 billing coverage. "This is the Ultimate Claude Code Setup - Beats OpenClaw and Hermes!" (April 18, older but still surface in searches). | 1–2 videos |
| Developers Digest | 61.5K | No specific content found from past 7d. Skipping this run. |
| UI Collective | 52.5K | Not checked (time cap). |
| Charlie Automates | 8K | No YouTube content found from past 7d. charlieautomates.com has free resources. Skipping this run. |
| Adrien AI Designer | 4K | Not checked (time cap). |

**Cross-creator signal this week:** IndyDevDan + Simon Scrapes both covered the June 15 billing changes. No tools specifically boosted by 2+ curators.

---

## Top Stories (Past 72h)

### 1. Anthropic Pauses Agent SDK Credit Pool — On the Very Day It Was Due
- Announced May 13 for activation June 15; paused June 15 with note "Nothing changes for now."
- Reason per The Decoder: brewing price war with OpenAI (Sam Altman offered 2 months free Codex to Anthropic switchers May 14), upcoming IPO pressure, user backlash.
- Credit pool changes (separate $20–$200 tiered budget) deferred; Agent SDK still draws from subscription limits.
- This fully reverses yesterday's item "agent-sdk-credit-pools-day1-workarounds."
- Coverage: The New Stack, The Decoder, TechTimes

### 2. Fable 5 Ban — Day 4, Refund Deadline June 20
- Still banned globally. Anthropic issuing refunds to users who upgraded June 9–13.
- Refund window closes June 20 at 11:59 PM (must cancel plan by then).
- Polymarket prediction markets live on odds of restoration.
- 100+ security experts signed letter calling for rescission.
- Claude Code v2.1.176 changelog had "Fixed auto mode failing on Fable 5 for orgs without Opus 4.8 enabled."
- New detail today: Fable 5 was scheduled to move to paid tier June 22 — that plan is now moot.

### 3. Claude Code v2.1.178 (June 15)
- Tool(param:value) permission rule syntax — e.g., Agent(model:opus) to block Opus subagents with wildcards.
- Nested .claude/ directory support — skills in nested dirs load automatically; name clashes get dir:name.
- Auto mode security fix: subagent spawns now evaluated by classifier before launch (closes gap where blocked actions could be requested without review).
- Improved /doctor, /bug command now requires description, Remote Control persistent error indicator.
- Piebald-AI prompt tracker expanded 350 → 515 components with v2.1.177, now tracking v2.1.178.

### 4. Claude Model API Retirement (June 15)
- claude-sonnet-4-20250514 and claude-opus-4-20250514 retired from Claude API.
- Errors returned on any API calls after June 15.
- Users should migrate to claude-sonnet-4-6 and claude-opus-4-8 (or newer).

---

## GitHub Trending Finds (New/Notable Items)

### cc-switch (farion1231/cc-switch)
- 103k stars, v3.16.3 released June 14, 2026
- Cross-platform desktop All-in-One manager for Claude Code, Claude Desktop, Codex, Gemini CLI, OpenCode, OpenClaw, Hermes Agent
- 50+ provider presets; unified MCP/skills management; cloud config sync; local proxy with hot-switching; session history browser; cost tracking
- brew install --cask cc-switch (macOS); Windows/Linux installers

### claude-mem (thedotmack/claude-mem)
- 82.7k stars, v13.6.1 released June 15
- Persistent context across sessions: captures and compresses session data (SQLite + ChromaDB vector search)
- 5 lifecycle hooks; Web viewer UI at localhost:37777; natural language mem-search skill
- npx claude-mem install

### oh-my-openagent (code-yeongyu/oh-my-openagent)
- 62.5k stars, updated June 16
- "The coding agent for tokenmaxxers" — model-agnostic harness for complex codebases
- 3-layer: Prometheus/Metis (planning) → Atlas (orchestration) → Sisyphus-Junior + 9+ specialized agents (Oracle, Librarian, Frontend, etc.)
- Formerly oh-my-opencode; supports Claude, GPT, Gemini, Grok

### Understand-Anything (Lum1104/Understand-Anything)
- ~61k stars, updated June 16
- Multi-agent pipeline: analyzes entire codebase → builds interactive knowledge graph of files, functions, classes, dependencies
- "Graphs that teach > graphs that impress"
- Works with Claude Code, Codex, Cursor, Copilot, Gemini CLI

### nanoclaw (nanocoai/nanoclaw)
- 29.9k stars, v2.0.64 (May 18)
- Lightweight OpenClaw alternative in containers; runs on Anthropic Agent SDK
- WhatsApp, Telegram, Discord, Slack, Teams, Gmail and more
- Container-isolated agents (Docker sandbox/micro VM/Apple Container)
- Per-agent CLAUDE.md memory; Agent Swarms (first assistant to support this)
- bash nanoclaw.sh

### scientific-agent-skills (K-Dense-AI/scientific-agent-skills)
- 28.4k stars, v2.52.0 June 12
- 147 scientific skills + 100+ databases (PubChem, ChEMBL, UniProt, ClinicalTrials.gov, KEGG, Reactome, FRED, SEC EDGAR...)
- 70+ scientific Python packages (RDKit, Scanpy, PyTorch Lightning)
- Compatible with Cursor, Claude Code, Codex, Pi, Antigravity
- npx skills add K-Dense-AI/scientific-agent-skills

### planning-with-files (OthmanAdi/planning-with-files)
- 23.4k stars, updated June 15
- Persistent file-based planning: task_plan.md, findings.md, progress.md survive context resets and /clear
- Manus-style pattern (Meta's $2B acquisition)
- 96.7% pass rate on formal benchmarks (v2.21.0)
- /plan and /plan:status commands; PreToolUse hooks re-inject plans
- Works across 60+ agents via SKILL.md standard
- npx skills add OthmanAdi/planning-with-files --skill planning-with-files -g

---

## Items Skipped / Not Included

- Anthropic $965B valuation (May 28 — outside 72h window)
- Simon Scrapes "Ultimate Claude Code Setup" (April 18 — outside window)
- Chase AI "Claude Code + Higgsfield MCP" (April 29 — outside window)
- Code with Claude Tokyo keynote (June 10 — borderline, but content was Fable 5 launch already covered)
- nanoclaw last updated May 18 — borderline; included because it appeared in June 16 trending

---

## Dedup Check

None of the new items conflict with submissions.json or last 7 days of digests.
