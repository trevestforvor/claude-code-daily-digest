# Research Notes — 2026-07-13

Research elapsed: ~508s (within 1200s cap)

---

## YouTube Coverage

Searched all 8 curated YouTubers for July 6–13, 2026 content. Findings:

- **Charlie Automates** (@charlieautomates): Recent videos include "This Plugin Cut My Claude Tokens in Half" and "This New Claude Plugin Will 100x Your Output" but dates appear to be pre-July 2026 (Feb–May). No specific July tool confirmed. No creator_buzz assigned.
- **IndyDevDan** (@indydevdan): YouTube pages blocked (403). No July-specific videos confirmed.
- **Chase AI** (@Chase-H-AI): Only channel page found, no specific July 2026 videos surfaced.
- **Simon Scrapes** (@simonscrapes): Mentioned as top educator with Agentic Academy. No specific July tools identified.
- **TechWithTim** (@TechWithTim): Most recent Claude Code videos from May 2026. No July-specific videos confirmed.
- **UI Collective** (@UICollectiveDesign): No results.
- **Developers Digest** (@DevelopersDigest): A "Build and Deploy Claude Skills and MCP Servers | The Complete 2026 Guide" video appeared ~3 weeks ago but channel identity unconfirmed.
- **Adrien | AI Designer** (@adrienaidesigner): No results.

**Conclusion**: No confirmed multi-YouTuber coverage this week that maps to specific new tools. No creator_buzz fields can be assigned with confidence this run.

---

## High-Signal Candidates Found

### Trending Today (July 13, 2026)

1. **mvanhorn/last30days-skill** — 51.9k stars, #1 GitHub trending today. AI agent skill that researches any topic across Reddit, X, YouTube, HN, Polymarket, GitHub, arXiv, Techmeme, LinkedIn, TikTok. Scores by real engagement (upvotes, likes, views). Install: `npx skills add mvanhorn/last30days-skill -g`. Multi-platform: Claude Code, Codex, Gemini CLI, Cursor, etc.

2. **sickn33/agentic-awesome-skills** — 43.1k stars, v14.3.1 released **today** (July 13). Installable library of 1,948+ agentic skills for Claude Code, Cursor, Codex CLI, Gemini CLI, Kiro, GitHub Copilot, OpenCode, Autohand Code, Antigravity. Role-based bundles + execution workflows. Install: `npx agentic-awesome-skills`.

3. **yusufkaraaslan/Skill_Seekers** — 14.5k stars, updated July 13. Converts 18+ source types (documentation sites, GitHub repos, PDFs, EPUB, Jupyter Notebooks, OpenAPI specs, Confluence, Notion, YouTube videos, and more) into 16+ platform-specific skill formats (Claude ZIP+YAML, Gemini, OpenAI, LangChain, Pinecone, etc.). MCP server with 40 tools. Conflict detection between docs and code. Install: `pip install skill-seekers`.

### This Week (July 6–12, 2026)

4. **alirezarezvani/claude-skills** — 22.5k stars. 355 production-ready skills across 18 domains: engineering (52 core + 81 advanced), marketing, product, compliance, C-level advisory, business ops, research, finance. 602 zero-dependency Python tools. Works with 13 platforms. Cross-convert via `./scripts/convert.sh --tool all`. Install: `/plugin install engineering-skills@claude-code-skills`.

5. **echoxiangzhou/auto-claude-code-research-in-sleep (ARIS)** — 13.2k stars, updated July 12. Autonomous ML research via cross-model loops: Claude executes, GPT/other reviews. 31 composable skills, 5 end-to-end research workflows. Pure Markdown, no lock-in. Works with Claude Code, Cursor, OpenClaw, Codex CLI. Install: `bash install_aris.sh`.

6. **VS Code 1.128** (July 8) — Multi-chat Claude agent sessions (branch/compare/parallel), Auto mode for Claude Agent (classifier reviews actions), 1M token context support for Claude Opus 4.7+, Copilot Vision GA. Major Claude boost in the most popular IDE.
   URL: https://code.visualstudio.com/updates/v1_128

7. **jeremylongshore/claude-code-plugins-plus-skills** — 425 plugins (19 categories), 2,810 skills, 200 agents. Open-source marketplace powering tonsofskills.com. ccpi CLI: `pnpm add -g @intentsolutionsio/ccpi`. Quality-validated against Anthropic spec.

8. **SawyerHood/dev-browser** — 6.4k stars. Browser automation skill with QuickJS WASM sandboxing. Persistent sessions, full Playwright API. ~4 min task completion for ~$0.88 vs $2.81+ alternatives. Install: `npm install -g dev-browser && dev-browser install`.

9. **FlorianBruniaux/claude-code-ultimate-guide** — 5.4k stars, 706 forks, 430K+ lines. 271 quiz questions, 225 production-ready templates, 11 whitepapers (472 pages), threat database with 655+ catalogued malicious skills. CLI proxy reduces token consumption 60–90%.
   URL: https://github.com/FlorianBruniaux/claude-code-ultimate-guide

10. **arturogarrido/claudinho** — 24 stars, v0.9.1 released July 9. Live 2026 World Cup scores in Claude Code + Cursor CLI statusline + MCP server. No API keys, ESPN data, Polymarket market signals. 9 read-only MCP tools. Install: `npm i -g @claudinho/cli && claudinho init claude`.

11. **Claude Code /doctor upgrade** (v2.1.205, Week 28) — /doctor now fixes issues instead of just reporting. Checks health, finds unused skills/MCP/plugins vs context cost, deduplicates CLAUDE.md, flags slow hooks. Also alias `/checkup`. Not specifically covered as standalone item in recent digests (desktop browser was covered July 11; v2.1.207 covered July 12).
    URL: https://code.claude.com/docs/en/commands

### Anthropic Official Updates

- **v2.1.207 bug fixes** (July 11) → Already in July 12 digest as `claude-code-v2-1-207`. SKIP.
- **Weekly limits extended to July 19** → Already in July 12 digest as `claude-code-limits-july13`. SKIP.
- **/doctor upgrade** (v2.1.205) → Covered as item 11 above.

---

## Dedup Verification

All 11 candidates checked against:
- submissions.json (68 items): No matches
- digests/2026-07-12.json slugs: No matches
- digests/2026-07-11.json slugs: No matches
- digests/2026-07-10.json slugs: No matches

All items are fresh.

---

## Final Ranking for Digest (Top 12)

1. mvanhorn/last30days-skill — #1 trending, 51.9k stars (VIRAL, SKILL)
2. sickn33/agentic-awesome-skills — 43.1k stars, released today (SKILL, MARKETPLACE)
3. alirezarezvani/claude-skills — 22.5k stars, 355 skills/18 domains (SKILL)
4. ARIS — 13.2k stars, ML research loops (SKILL)
5. yusufkaraaslan/Skill_Seekers — 14.5k stars, docs→skill converter (SKILL, MCP)
6. VS Code 1.128 — multi-chat Claude agents, auto mode (PLUGIN, ANTHROPIC)
7. jeremylongshore/claude-code-plugins-plus-skills — 425 plugins+2810 skills (MARKETPLACE, SKILL)
8. SawyerHood/dev-browser — 6.4k stars, cost-efficient browser (SKILL, COST)
9. FlorianBruniaux/claude-code-ultimate-guide — 5.4k stars, 655 malicious-skill DB (MARKETPLACE)
10. claudinho — World Cup 2026 statusline + MCP (SKILL, MCP, VIRAL)
11. Claude Code /doctor upgrade — v2.1.205 setup checkup (ANTHROPIC)
12. [levnikolaevich/claude-code-skills — 515 stars, 18 engineering capabilities — may drop for space]
