# Research Notes — 2026-06-29

## YouTube Coverage (Past 7 Days)

| Channel | Subscribers | Recent Claude Code Content? |
|---|---|---|
| @TechWithTim | 2M | Not confirmed this week |
| @indydevdan | 129k | Not confirmed this week |
| @simonscrapes | 71.8k | Not confirmed this week (403 on direct channel fetch) |
| @DevelopersDigest | 61.5k | Blog posts on pricing/features, no confirmed new video |
| @UICollectiveDesign | 52.5k | Not confirmed this week |
| @Chase-H-AI | 109k | Active in Claude Code agentic OS content, no specific June 27-29 video confirmed |
| @charlieautomates | 8.08k | Channel active, no specific June 27-29 video confirmed |
| @adrienaidesigner | 4.05k | Not searched directly |

**Note:** YouTube search via web did not surface specific video titles with publish dates for June 22-29 from curated channels this run. No items boosted for creator signal this round.

---

## High-Signal Items Found (Past 72h: June 26–29, 2026)

### 1. Fable 5 Day 17 + Austria Urges EU to Host Anthropic (BREAKING)
- **Sources:** Seoul Economic Daily, Trending Topics EU, ibtimes.sg, beincrypto.com, cryptobriefing.com — all published June 28–29
- Austria State Secretary for Digitalization Alexander Pröll sent a formal letter to EU Commission VP Henna Virkkunen urging EU member states to "jointly explore the strategic establishment and participation of Anthropic within the European Union"
- Cites Fable 5 / Mythos 5 export ban as direct cause; first EU member state to make this formal institutional move
- Fable 5 still offline globally Day 17; Axios "on track soon" from June 27 still the latest signal
- No new Anthropic statement as of June 29
- Anthropic litigation ongoing (separate DOD track); Mythos 5 available to ~100 US gov/infra orgs

### 2. OpenKnowledge (inkeep/open-knowledge) — Show HN June 27, v0.20.0 June 29
- **Source:** github.com/inkeep/open-knowledge, Show HN, techtimes June 28, aiweekly.co
- 1,500 GitHub stars; GPL-3.0
- AI-native WYSIWYG markdown editor built on yjs CRDT; dual-observer model keeps ProseMirror rich-text + raw Markdown in sync
- Auto-detects Claude Code, Codex, Cursor on local system; ships with MCP server + skills for agentic search and knowledge graph
- Install: `npm install -g @inkeep/open-knowledge && ok init && ok start --open`
- Built by Inkeep (YC-backed)
- v0.20.0 released June 29 — very fresh

### 3. context-mode (mksglu/context-mode) — 18.3k Stars, 98% Token Reduction
- **Source:** github.com/mksglu/context-mode; mcpmarket, pulsemcp
- 18,300 GitHub stars; 2,054 commits
- MCP plugin that sandboxes tool output: 315 KB → 5.4 KB (98% reduction). Tool calls write results to disk, Claude reads a condensed summary
- Session continuity: tracks file edits, git ops, tasks in SQLite so sessions resume exactly where they left off after compaction
- "Think in Code" pattern: encourages agents to write analysis scripts instead of requesting multiple file reads
- Install: `/plugin marketplace add mksglu/context-mode` or `npm install -g context-mode`
- NOT in submissions.json or any recent digest

### 4. alirezarezvani/claude-skills — 18,961 Stars, 337 Skills for 13 AI Tools
- **Source:** github.com/alirezarezvani/claude-skills; agentskill.work
- 18,961 stars (as of latest sync data June 2026)
- 337 skills: 30+ agent personas, 70+ slash commands, 330+ skills + references across engineering, DevOps, marketing, product, compliance, C-level advisory (CFO/CMO/CRO/CPO etc.), research ops, finance
- Works natively with 13 tools: Claude Code, Codex, Gemini CLI, OpenClaw, Hermes, Cursor, Aider, Windsurf, Kilo Code, OpenCode, Augment, Antigravity, Mistral Vibe
- Includes Answer Engine Optimization skills for LLM citations
- NOT in submissions.json or any recent digest

### 5. CCPM (automazeio/ccpm) — 8.2k Stars, GitHub Issues + Worktrees for Parallel Agents
- **Source:** github.com/automazeio/ccpm; daily.dev; aroussi.com post
- 8,200 GitHub stars; project management skill system for Agents
- Uses GitHub Issues as the database + Git worktrees for parallel Claude Code execution; up to 12 agents concurrently
- Spec-driven: PRD → GitHub issues → parallel agents each working in their own worktree, no conflicts
- Context preserved across sessions via project files (not chat history)
- Compatible with Claude Code, Factory, Amp, OpenCode, Codex, Cursor (agentskills.io standard)
- Install: `git clone https://github.com/automazeio/ccpm.git && ln -s /path/to/ccpm/skill/ccpm ~/.claude/skills/ccpm`
- NOT in submissions.json or any recent digest

### 6. ARIS — wanshuiyin/auto-claude-code-research-in-sleep, ~11.6k Stars
- **Source:** github.com/wanshuiyin/auto-claude-code-research-in-sleep; skillsllm.com
- ~11,600 GitHub stars
- Lightweight Markdown-only skills for autonomous ML research: cross-model review loops, idea discovery (creative + literature-grounded), paper writing, experiment automation
- No framework lock-in — works with Claude Code, Codex, OpenClaw, or any LLM agent
- Skills: research-pipeline, auto-paper-improvement-loop, idea-creator, research-review, paper-writing, figure-spec, experiment-queue
- Tested on ICLR 2026 theory paper: typical +4.5 review score improvement across 3 rounds
- NOT in submissions.json or recent digests

### 7. Trends-MCP (trendsmcp/trends-mcp) — Live Trend Data from 20+ Sources
- **Source:** github.com/trendsmcp/trends-mcp; trendsmcp.ai
- MCP server for live trend data: Google Search, YouTube, TikTok, Reddit, Amazon, Wikipedia, News sentiment, Web Traffic, App Downloads, Steam, npm, and more
- Updated June 21 2026
- Normalized 0–100 scoring across all platforms; works with Claude, Cursor, VS Code, Copilot, ChatGPT, Windsurf, Cline, Raycast
- Free tier: 100 req/month, 20/day, no credit card
- Install: `claude mcp add trends-mcp` (key from trendsmcp.ai)
- NOT in submissions.json or recent digests

### 8. Anthropic Economic Index "Cadences" Report (June 2026)
- **Source:** anthropic.com/research/economic-index-june-2026-report
- Key finding: Claude Code on weekends shifts toward AI agent design, quant trading, gaming — away from backend architecture + API debugging. "Builder" usage pattern revealed
- Survey of ~9,700 users: 6 in 10 expect higher AI task share next year; 35%+ expect AI to do most/nearly all work tasks within 12 months
- Links Claude usage data (May–June 2026) to survey responses via privacy-preserving methods
- NOT confirmed as June 26-29 publish; possibly earlier in June

---

## Items Excluded from Today's Digest
- **Claude Code v2.1.195** — already in June 27 digest (Week 26 recap)
- **Fable 5 "on track to return soon"** — already in June 28 digest (Day 16); today: Day 17 + Austria angle is the update
- **OpenKnowledge HN Stars** — HN post exists but couldn't verify upvote count
- **Anthropic IPO S-1** — Filed June 1, too far outside 72h window

---

## Dedup Check
- alirezarezvani/claude-skills: NOT in submissions.json (checked all 80+ entries), NOT in any June 2026 digest
- context-mode (mksglu): NOT in submissions (not same as Zilliz claude-context from June 26 digest)
- ccpm: NOT in submissions
- ARIS: NOT in submissions
- OpenKnowledge: NOT in submissions
- Trends-MCP: NOT in submissions

---

## Research Elapsed Time: ~11 minutes
