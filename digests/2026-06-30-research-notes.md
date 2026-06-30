# Research Notes — 2026-06-30

## Summary
12 items identified across DESIGN, COST/TOKEN, official releases, and general tools. No items from prior 7-day digests included. Research ran ~9 minutes.

## YouTube Coverage

### @Chase-H-AI (109K subs) — ACTIVE this week
- Video: "The Top 10 Claude Code Plugins to 10x Your Next Project (June '26)" (https://www.youtube.com/watch?v=IShdbDP4Jgg)
- Description mentions: "awesome-design.md", Codex plugin, NotebookLM CLI, GWS — these are likely real Claude Code plugins/skills. VoltAgent/awesome-claude-design is a DESIGN.md collection and is plausibly what is being referenced.
- This is the most recent Chase AI video found via web search. Video appeared in top search results for "Chase AI claude code June 2026".

### @indydevdan (129K subs) — Content found, recent unclear
- indydevdan (Bret Kramer) channel found active. `disler/infinite-agentic-loop` is associated with this creator but no specific recent Claude Code video from past 7 days was independently confirmed.
- No specific post from past 72h confirmed.

### @simonscrapes (71.8K subs) — No specific video found
- Channel page returned but no specific recent video confirmed in search results.

### @DevelopersDigest (61.5K subs) — Indirectly confirmed
- Blog post "Codex vs Claude Code in June 2026: The Fable 5 Era Rematch" found at developersdigest.tech — active coverage of Claude Code ecosystem.

### @TechWithTim (2M subs) — No specific new video found
- Channel exists, last confirmed Claude Code video was older than 7 days.

### @UICollectiveDesign (52.5K subs) — No specific new video found

### @charlieautomates (8K subs) — Channel active; no specific new video confirmed
- Search did not return a specific new video from past 7 days.

### @adrienaidesigner (4K subs) — Not checked (below top-5 threshold)

---

## Candidates Found

### DESIGN (Priority 1)
1. **VoltAgent/awesome-claude-design** (https://github.com/VoltAgent/awesome-claude-design) — 2.9k stars, 68 DESIGN.md files across 11 industry categories, ready-to-use design system inspirations for Claude Design. Drop one in, scaffold a full UI in one shot. Possible Chase AI coverage ("awesome-design.md" mentioned in video).

2. **Sculptor (imbue-ai/sculptor)** (https://github.com/imbue-ai/sculptor) — 189 stars. Desktop app (Mac Apple Silicon + Linux) for parallel Claude Code agents in isolated Docker containers. Show HN June 28: https://news.ycombinator.com/item?id=45427697. v0.38.0 released June 28, 2026. Actively developed by Imbue AI.

### COST/TOKEN (Priority 2)
3. **code-review-graph (tirth8205)** (https://github.com/tirth8205/code-review-graph) — 19k stars, 82x median token reduction across 6 real repos (38x–528x range). Tree-sitter for AST parsing, SQLite for graph, 30+ MCP tools. Last updated June 10. `pip install code-review-graph`. Not previously in any digest.

### NEWS / FABLE5 NARRATIVE
4. **Fable 5 Day 18 — Return Imminent** — July 1 prediction market deadline 24h away. Trump administration visibly softening: Jerusalem Post headline "Fable 5 to come back online", Capacity Global "return imminent". Partial Mythos 5 US restore (Commerce Secretary June 26 letter) already happened. Fable 5 still globally dark. Anthropic source told Axios "security concerns resolved, model will redeploy outside US soon."

### OFFICIAL (Priority 4)
5. **Claude Code v2.1.196** (https://github.com/anthropics/claude-code/releases) — June 29, 2026. Org default models, readable default session names, clickable file attachments (Cmd/Ctrl-click → Finder/Explorer), MCP server approval security improvements, background session reliability. Previous digest covered v2.1.195.

6. **Piebald-AI/claude-code-system-prompts v2.1.197** (https://github.com/Piebald-AI/claude-code-system-prompts) — 11.5k stars. Updated to v2.1.197 on June 30, 2026 (today). Went from 350 to 515+ prompts as of June 12 (major expansion). Updated within minutes of each Claude Code release. Previous digest covered v2-1-186.

### GENERAL (Priority 5)
7. **K-Dense-AI/scientific-agent-skills** (https://github.com/K-Dense-AI/scientific-agent-skills) — 29.7k stars (highest in today's research). 148 ready-to-use scientific skills + 100+ databases (biology, chemistry, medicine, drug discovery). 160K scientists. Compatible with Cursor, Claude Code, Codex, Pi, Antigravity. Last updated June 23. `npx skills add K-Dense-AI/scientific-agent-skills`.

8. **jeremylongshore/claude-code-plugins-plus-skills** (https://github.com/jeremylongshore/claude-code-plugins-plus-skills) — 2.5k stars. 425 plugins + 2,810 skills + 200 agents. Open-source marketplace at tonsofskills.com. ccpi CLI package manager. 8-field rubric validation, 19 categories, 30 contributors. Last refreshed May 28 2026 but npm metrics updated daily.

9. **VILA-Lab/Dive-into-Claude-Code** (https://github.com/VILA-Lab/Dive-into-Claude-Code) — 1.7k stars. Reverse-engineered Claude Code v2.1.88 source from the March npm leak (512K lines). Key finding: only 1.6% of codebase is AI decision logic; 98.4% is deterministic infrastructure. arXiv: 2604.14228 (April 14, 2026). Multilingual (EN/JA/KO/ZH).

10. **rohitg00/awesome-claude-code-toolkit** (https://github.com/rohitg00/awesome-claude-code-toolkit) — 2.2k stars. 135 agents, 35 curated skills (+400K via SkillKit), 42 commands, 176+ plugins, 20 hooks, 15 rules, 7 templates, 14 MCP configs, 26 companion apps.

11. **levnikolaevich/claude-code-skills** (https://github.com/levnikolaevich/claude-code-skills) — 505 stars. Plugin suite + 4 bundled MCP servers: hex-line (hash-verified editing), hex-graph (codebase SQLite knowledge graph), hex-ssh (hash-verified SSH editing), hex-research (markdown hypothesis graph). v2026.05.06.

12. **quemsah/awesome-claude-plugins** (https://github.com/quemsah/awesome-claude-plugins) — 926 stars. Automated n8n workflow that indexes 24,586 repositories for Claude Code plugin adoption, generates ranked top-100 leaderboard. Updated June 30, 2026.

---

## Excluded / Not Included
- `statewright` — already in prior digest
- `mcp-self-hosted-sandboxes` — already in prior digest  
- `claude-context` (zilliztech) — already in prior digest
- `fable5-day17-austria-eu` — yesterday's digest
- `voltagent-awesome-agent-skills` — already in prior digest
- `ccpm` — already in prior digest
- `okf-skills` — only 19 stars, too small
- `LibreUIUX-Claude-Code` — only 70 stars, too small
- Code with Claude SF/London/Tokyo — events were in May/June 10, outside 72h
- Claude Code source leak (Latent Space) — occurred March 31, outside 72h
- Enterprise MCP Auth (Okta) — announced June 18, outside strict 72h window
