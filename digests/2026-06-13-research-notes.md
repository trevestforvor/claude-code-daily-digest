# Research Notes — 2026-06-13

## YouTube Coverage

### @simonscrapes (71.8k subs)
- **"14 GENIUS Ways to Give Claude Code SUPERPOWERS"** (posted June 12, 2026 — yesterday)
  - URL: https://www.youtube.com/watch?v=mNawxNjrR_E
  - Covered: obra/superpowers plugin (Anthropic marketplace, 170k+ stars, TDD + subagents + planning)
  - This is this week's standout creator signal for the Superpowers item.

### @Chase-H-AI (109–175k subs)
- "Top 10 Claude Code Plugins to 10x Your Next Project" (June 6) — already featured in June 7 digest
- No new Claude Code video in the June 10–13 window from web searches.

### @TechWithTim (2M subs)
- General Claude Code tutorials visible in searches, but no specific new video June 10–13 confirmed.

### @indydevdan (129k subs)
- Claude Code MCP tutorials visible but no specific new video June 10–13 confirmed.

### @UICollectiveDesign (52.5k subs)
- "Claude Code + 3D Animations" video (last week's standout, already in June 10 digest).

### @DevelopersDigest (61.5k subs)
- "Claude Code Dynamic Workflows: The Complete Guide" — blog article published alongside the Anthropic launch. No specific YouTube video confirmed for the 72h window.

### @charlieautomates (8k subs)
- No new Claude Code video confirmed in the past 7 days from web searches.

---

## Candidate Items Found

### 1. Claude Code Dynamic Workflows + `/deep-research`
- **URLs**: https://claude.com/blog/introducing-dynamic-workflows-in-claude-code, https://code.claude.com/docs/en/workflows
- **What**: JS scripts that orchestrate subagents at scale; Claude writes the script, the runtime executes in background while session stays live
- **Trigger**: `ultracode` keyword in prompt (since v2.1.160, June 2), or `/effort ultracode` for session-wide; natural-language requests also work
- **Bundled**: `/deep-research` fans out web searches, cross-checks sources, returns cited report
- **Caps**: 16 concurrent agents, 1,000 total per run; resumable within same session
- **Requires**: v2.1.154+, all paid plans
- **Signal**: Official Anthropic, multiple blog/news articles, InfQ coverage, DevelopersDigest guide

### 2. Superpowers Plugin (obra/superpowers)
- **URL**: https://github.com/obra/superpowers
- **YouTube**: Simon Scrapes "14 GENIUS Ways" (June 12): https://www.youtube.com/watch?v=mNawxNjrR_E
- **Stats**: 170k+ GitHub stars, 752,120 installs in Anthropic marketplace (#2 most installed overall)
- **What**: TDD, Socratic brainstorming, micro-task planning, subagent-driven development with code review
- **In marketplace**: Yes (official Anthropic plugin since Jan 15, 2026)
- **Signal**: VERY HIGH — Simon Scrapes coverage yesterday, #2 marketplace install rank

### 3. agmsg (fujibee/agmsg)
- **URL**: https://github.com/fujibee/agmsg
- **PH**: #5 Product of Day, June 9, 219 upvotes, 39 comments
- **Stars**: 460
- **What**: ~500 lines of bash + SQLite; lets Claude Code, Codex, Gemini CLI, Copilot CLI message each other through a shared local SQLite file. No daemon, no network, no framework. Monitor mode = ~5s latency delivery; turn mode = between-turn polling.
- **Install**: `bash <(curl -fsSL https://raw.githubusercontent.com/fujibee/agmsg/main/setup.sh)`
- **Signal**: Fresh (PH June 9), practical multi-agent need

### 4. Claude Code v2.1.176 (June 12)
- **URL**: https://code.claude.com/docs/en/changelog
- **What**: Session titles in conversation language (`language` setting), `footerLinksRegexes` setting for footer badges, improved Bedrock credential caching, fixed hook `if` conditions for Read/Edit/Write path patterns (e.g., `Edit(src/**)`, `Read(~/.ssh/**)`), fixed `/copy` in tmux over SSH, fixed background sessions showing "Working" indefinitely, cloud session authentication timeouts fixed.
- **Install**: `npm update -g @anthropic-ai/claude-code`
- **Note**: v2.1.174/175 already in June 12 digest; v2.1.176 was released same day and not yet covered

### 5. ARIS (auto-claude-code-research-in-sleep)
- **URL**: https://github.com/echoxiangzhou/auto-claude-code-research-in-sleep
- **Stars**: ~11.6k (main repo, per SkillsLLM; fork wanshuiyin shows 0)
- **What**: 31–79 composable Markdown skills for autonomous ML research. Claude Code drives experiments; external LLM (GPT-5.4/5.5) acts as adversarial reviewer. Covers idea discovery, 4-round paper review, narrative-to-LaTeX, rebuttal drafting. No framework lock-in.
- **Updated**: May 2026 (latest update May 14 on verified fork)
- **Install**: `git clone ... && cp skills/* ~/.claude/skills/`
- **Signal**: Moderate; strong for ML researcher audience

### 6. antigravity-awesome-skills (sickn33)
- **URL**: https://github.com/sickn33/antigravity-awesome-skills
- **Stars**: 40.6k, updated June 12 (yesterday)
- **What**: 1,541+ reusable SKILL.md playbooks for Claude Code, Cursor, Codex CLI, Gemini CLI, Antigravity, and more. CLI installer with --claude flag. Specialized plugin bundles by domain. MIT.
- **Install**: `npx antigravity-awesome-skills`

### 7. trendsmcp/trends-agent-claude
- **URL**: https://github.com/trendsmcp/trends-agent-claude
- **Stars**: 0 (brand new)
- **What**: MCP connecting Claude to live trend data across Google, YouTube, TikTok, Reddit, Amazon, Wikipedia, news sentiment, App Store, Steam, npm. Three tools: get_trends (time series), get_growth (% change), get_top_trends (live feeds). 0-100 scale normalized.
- **Free tier**: 100 req/month, no credit card
- **Install**: `claude mcp add`

### 8. jeremylongshore/claude-code-plugins-plus-skills (tonsofskills.com)
- **URL**: https://github.com/jeremylongshore/claude-code-plugins-plus-skills
- **Stars**: ~2.2–2.4k
- **What**: Open-source marketplace + ccpi CLI: 425 plugins, 2,810 skills, 200 agents. All validated against Anthropic's Claude Code specification. Browse at tonsofskills.com.
- **Install**: `pnpm add -g @intentsolutionsio/ccpi` then `ccpi install <pack>`

### 9. rohitg00/awesome-claude-code-toolkit
- **URL**: https://github.com/rohitg00/awesome-claude-code-toolkit
- **What**: 135 agents, 35 curated skills (+400k via SkillKit), 42 commands, 176+ plugins, 20 hooks, 15 rules, 7 templates, 14 MCP configs, 26 companion apps, 52 ecosystem entries
- **Note**: Was #1 trending GitHub in Feb 2026; companion to rohitg00/awesome-claude-design (in June 9 digest)

### 10. 2389-research/claude-plugins
- **URL**: https://github.com/2389-research/claude-plugins
- **What**: 28 plugins and MCP servers — TDD, multi-agent orchestration, iterative refinement, binary RE, structured decisions. Install any skill in one command.

---

## Items SKIPPED
- alirezarezvani/claude-skills → Already in June 7 digest (slug: alirezarezvani-claude-skills)
- claude-peers-mcp → Already in June 7 digest
- Anthropic June 15 credit pools → Already in June 9 and June 12 digests (recurring_note already applied)
- Claude Fable 5 sabotage walkback → Already in June 12 digest
- Anthropic Connector Observability → Already in June 12 digest
- Statewright → Already in June 12 digest
- zilliz-claude-context → Already in June 5 and June 11 digests
- Dynamic Workflows: Confirmed NOT in any June 5–12 digest item as standalone. Include.
- rohitg00/awesome-claude-design → June 9 digest. NOT the awesome-claude-code-toolkit; different repo.
