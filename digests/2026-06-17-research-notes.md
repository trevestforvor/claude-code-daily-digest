# Research Notes — 2026-06-17

## Timer
START: 1781712389 | Research concluded at ~700s elapsed

---

## YouTube Coverage (past 7 days)

| Creator | Handle | Recent Video | Date | Tools/Repos Mentioned |
|---------|--------|-------------|------|----------------------|
| Simon Scrapes | @simonscrapes | "You're Only Using 10% of Claude Code (I'm Being Serious)" | June 16 (yesterday) | CrawlForge MCP, multi-skill pipelines, skill chaining |
| Simon Scrapes | @simonscrapes | "Claude Code Masterclass for People Who Don't Code" | June 14 (3 days ago) | 7-level progression: prompting → slash commands → skills → hooks → MCP → multi-agent |
| Chase AI | @Chase-H-AI | "The Top 10 Claude Code Plugins to 10x Your Next Project (June '26)" | June 2026 | Codex plugin, awesome-design.md, NotebookLM CLI, GWS |
| IndyDevDan | @indydevdan | No specific Claude Code video found in past 7 days — SKIP | — | — |
| Charlie Automates | @charlieautomates | Most recent Claude Code content: "2 Claude Code Repos NOBODY'S Talking About Yet" (April 3) — too old for this run | — | — |
| UI Collective | @UICollectiveDesign | No specific June 2026 Claude Code video found — SKIP | — | — |
| Developers Digest | @DevelopersDigest | Coverage of /effort ultracode and Agent View this week via blog posts (not confirmed video) | — | ultracode, agent view |
| Tech With Tim | @TechWithTim | No specific June 2026 Claude Code video found in search — SKIP | — | — |

**Two-YouTuber cross-coverage signal**: No confirmed item was covered by 2+ channels from our list this week. Simon Scrapes is the strongest signal source (2 videos in 3 days).

---

## Key Sources & Items Found

### Anthropic Official (past 72h)
- **Claude Code v2.1.179** (June 16) — bug fixes: mid-stream connection drop (partial responses preserved), WSL2 mouse-wheel regression fix, Linux sandbox glob bug, survey single-digit capture bug, welcome banner stacking, Ctrl+O subagent transcript, remote session "still running" display
- **Claude Code v2.1.178** was yesterday's digest entry — skip as standalone but note in recurring
- **/effort ultracode** — xhigh reasoning + auto-orchestrate Dynamic Workflows. In production since v2.1.154 (May 28). Dynamic Workflows covered June 13 digest as `claude-code-dynamic-workflows`. Mark as recurring. Heavy week-3 tutorial coverage.
- **Claude Code Agent View** (`claude agents`) — launched May 11 (v2.1.139), not yet in Jun 10-16 digests. Full-screen CLI dashboard for all background sessions. Research Preview.
- **claude-code-action** (anthropics/claude-code-action) — Anthropic's official GitHub Action for PRs/issues. Renewed interest after Microsoft Security Blog June 5 disclosure (covered June 11 as microsoft-claude-code-cicd-security but action itself not covered as standalone).

### Design Tools
- **Figma Skills for Claude Code** — official Figma Skills on canvas opened to agents (March 24, 2026). /figma-use foundational skill. Available via Figma Claude Code plugin. Not yet in any digest.
- **AgentNotch** (AppGram/agentnotch) — free MIT macOS menu bar app in Mac notch, shows live Claude Code + Codex tool calls. No telemetry. Not in digests.
- **AgentPeek** (agentpeek.app) — $15 one-time, native macOS, token usage (5h/7d), live permission prompts, works from Ghostty/tmux/iTerm. Not in digests.

### MCP/Plugins
- **CrawlForge MCP** (mysleekdesigns/crawlforge-mcp) — 20 scraping tools (fetch_url, stealth_mode, scrape_with_actions, extract_content, deep_research). 1000 free credits. npm install -g crawlforge-mcp-server. @simonscrapes named it explicitly.
- **Firecrawl Claude Plugin** (firecrawl/firecrawl-claude-plugin) — official Firecrawl plugin for Claude Code, web scraping+crawl+search with auto JS rendering, anti-bot, proxy rotation.
- **Simon Willison TIL: Cloudflare MCP + Claude Code** (June 16) — tried Cloudflare MCP, couldn't edit specific rules, fell back to Cloudflare API directly. Practical MCP limits signal.
- **quemsah/awesome-claude-plugins** — n8n-based automated tracker of plugin adoption metrics. Not in digests.
- 2389-research/claude-plugins — COVERED June 13 ✗
- jeremylongshore/claude-code-plugins-plus-skills — COVERED June 13 ✗
- rohitg00/awesome-claude-code-toolkit — COVERED June 13 ✗

### Viral/Community
- **Karpathy CLAUDE.md** (multica-ai/andrej-karpathy-skills) — 144K stars on main repo, 220K+ combined. June 2026 Medium article marks milestone. Not in any digest.
- **Simon Scrapes "10% of Claude Code"** (June 16) — explicit CrawlForge MCP mention, skill-chaining evangelism.
- **Chase AI Top 10 Plugins June '26** — YouTube monthly ranked list.

---

## Items Already Covered (skip)
- claude-code-dynamic-workflows — June 13 ✗ (mark ultracode as recurring)
- claude-code-plugins-plus-skills — June 13 ✗
- 2389-research-claude-plugins — June 13 ✗
- rohitg00-awesome-claude-code-toolkit — June 13 ✗
- claude-code-v2-1-178 — June 16 ✗ (v2.1.179 is new)
- microsoft-claude-code-cicd-security — June 11 ✗
- hesreallyhim-awesome-claude-code — June 11 ✗
- claude-code-nested-subagents (various) — June 11/15 ✗
- claude-managed-agents-cron-vaults — June 12 ✗

---

## Final Top 15 (ranked)

1. figma-skills-claude-code [DESIGN]
2. agentnotch [DESIGN]
3. agentpeek [DESIGN, COST]
4. claude-code-ultracode [COST, OFFICIAL] (recurring from dynamic-workflows June 13)
5. simon-scrapes-10pct-claude-code [VIRAL] @simonscrapes June 16
6. chase-ai-top10-plugins-june26 [VIRAL] @Chase-H-AI
7. karpathy-claude-md [VIRAL]
8. claude-code-agent-view [OFFICIAL]
9. crawlforge-mcp [MCP]
10. firecrawl-claude-plugin [MCP]
11. simonw-cloudflare-mcp-til [MCP]
12. claude-code-action-official [OFFICIAL]
13. simon-scrapes-masterclass-noncoders [VIRAL] @simonscrapes June 14
14. quemsah-awesome-claude-plugins [MCP]
15. claude-code-v2-1-179 [OFFICIAL] (recurring from v2-1-178 June 16)
