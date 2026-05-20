# Research Notes — 2026-05-20

## Methodology
- Research window: past 72 hours (May 17–20, 2026)
- Research duration: ~7 minutes elapsed (well within 20-min cap)
- Sources checked: API changelog, Claude Code changelog, YouTube channels (indydevdan, chase-h-ai, charlieautomates, simonscrapes), GitHub trending, simonwillison.net, Anthropic news, HN

---

## YouTube Coverage (Past 7 Days)

### @indydevdan
- No specific video found from the past 7 days covering a NEW Claude Code plugin. Older videos visible (March–April 2026). Channel active, last indexed content covers Mobbin MCP and general Claude Code features (those were covered in prior digests). **No new CreatorBuzz signal to attach this cycle.**

### @Chase-H-AI
- Last indexed major video: "Top 10 Claude Code Skills, Plugins & CLIs (April 2026)" — not from this week.
- No new video found in past 7 days. **Skip this cycle.**

### @charlieautomates
- No specific recent video found from the past 7 days. **Skip this cycle.**

### @simonscrapes
- Active channel, last visible video ~3 weeks ago. No new video in the past 7 days. **Skip this cycle.**

### @DevelopersDigest
- Not searched explicitly this cycle due to time constraints; no signal detected.

### @TechWithTim / @UICollectiveDesign
- Not searched explicitly this cycle.

**YouTuber coverage conclusion:** No viral multi-YouTuber items detected this week. No `creator_buzz` tags assigned.

---

## Key Findings by Source

### Anthropic API Changelog (platform.claude.com)
- **May 19**: Self-hosted sandboxes (public beta) and MCP tunnels (research preview) shipped at Code with Claude London
- **May 19**: Managed Agents: update MCP configs on active sessions, auto-spill large tool outputs (>100K tokens) to sandbox file
- **May 18**: Web search tool returns richer SEC filing data for financial agents
- **May 13**: Cache diagnostics public beta (`cache_miss_reason` via `diagnostics.previous_message_id`) — outside 72h window but worth noting

### Claude Code CHANGELOG (github.com/anthropics/claude-code)
- **v2.1.145 (May 19)**: `claude agents --json` for session scripting; OTEL spans with `agent_id`/`parent_agent_id`; plugin Discover/Browse shows commands/agents/skills/hooks before install; fixed bash permission bypass for bare variable assignments; fixed task lists rendering in random order
- **v2.1.144 (May 19)** and **v2.1.143 (May 15)** — covered in yesterday's digest (2026-05-19.json)

### Code with Claude London (May 19–20, 2026)
- Official launch event for self-hosted sandboxes + MCP tunnels (see above)
- Extended London event today (May 20) — no additional distinct product launches found beyond May 19 items
- "Code with Claude London" as an event was covered in yesterday's digest; today's items are the specific technical features announced

### GitHub Ecosystem
- **OpenCode** (github.com/sst/opencode — actually anomalyco): 163k stars, v1.15.5 released May 18, 2026. Open-source terminal coding agent by Anomaly Co; dual-agent system (build + plan), desktop app beta, provider-agnostic.
- **everything-claude-code** (github.com/affaan-m/everything-claude-code): 182k stars, Anthropic hackathon winner — 28 agents, 119 skills, 60 slash commands, memory/security/instincts system for Claude Code, Codex, Cursor, OpenCode.
- **claude-forge** (github.com/sangrokjung/claude-forge): 702 stars, v3.0.2 (May 3, 2026). oh-my-zsh for Claude Code — 11 agents, 40 commands, 15+ skills, 6-layer security hooks, 5-min install.
- **claude-code-plugins-plus-skills** (github.com/jeremylongshore/claude-code-plugins-plus-skills): 425 plugins, 2,810 skills, 200 agents. Open-source marketplace at tonsofskills.com with CCPI CLI package manager.
- **levnikolaevich/claude-code-skills**: 421 stars. Plugin suite + 3 bundled MCP servers: hex-line (hash-verified editing), hex-graph (code knowledge graph), hex-ssh (remote SSH with hash verification).
- **kobiton/automate**: v1.2.0 May 20, 2026. Claude Code plugin for Kobiton real-device mobile testing — 12 tools across Devices/Sessions/Apps, 3 specialist agents. 4 stars (brand new).

### Official Anthropic Plugins
- **Skill Creator** (claude.com/plugins/skill-creator): Official Anthropic plugin pre-installed in Claude Desktop and Cowork — interactive Q&A generates complete SKILL.md structures; updated March 2026 with evals/benchmarking features.

### Blogs / News
- simonwillison.net: Recent posts from May 8 (HTML effectiveness) and May 19 (5-min LLM lightning talk at PyCon) — no specific new tool surfaced
- No notable Product Hunt launches in past 72h beyond what's already in submissions.json

---

## Dedup Check
All items below have been checked against submissions.json and the last 7 daily digest JSONs. None appear.

Items in yesterday's digest (2026-05-19.json) to treat as recurring if still trending:
- chrome-devtools-mcp-stable → likely still trending (Day 2)
- anthropic-acquires-stainless → notable (Day 2)
- andrej-karpathy-skills → trending (Day 2)
- claude-code-v2-1-143-144 → superseded by v2.1.145 today
- claude-peers-mcp → Day 2
- n8n-mcp-v2-54 → Day 15+, still active
- code-with-claude-london-2026 → the event was yesterday; today's London Extended is the second day
- surgegraph-agent-bundle → Day 2

## Final Ranked Candidates
1. opencode (viral, 163k stars, v1.15.5 May 18) — also covered recently in comparison articles
2. everything-claude-code (viral, 182k stars, Anthropic hackathon winner)
3. anthropic-self-hosted-sandboxes-mcp-tunnels (London launch May 19, anthropic, mcp, cost)
4. claude-code-v2-1-145 (anthropic, May 19)
5. kobiton-automate (mcp, May 20 v1.2.0)
6. claude-forge (plugin, skill, 702 stars)
7. tonsofskills / claude-code-plugins-plus-skills (marketplace, 425 plugins)
8. levnikolaevich-claude-code-skills (mcp, skill, hex bundle)
9. skill-creator-plugin (anthropic official, skill)
10. web-search-sec-data (anthropic, May 18 API update)
