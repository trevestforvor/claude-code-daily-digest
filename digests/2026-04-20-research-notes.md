# Research Notes — 2026-04-20

## Sources Scanned
- GitHub topics: claude-code, claude-mcp (by stars desc)
- Reddit: r/ClaudeAI, r/ClaudeCode (via web search)
- Hacker News: algolia search (past 72h)
- Anthropic: anthropic.com/news, code.claude.com/docs/en/changelog, github.com/anthropics/claude-code/releases
- Simon Willison: simonwillison.net/tags/claude-code
- Product Hunt: hunted.space, producthunt.com
- Dev.to, Medium, various aggregators

## Sources With Signal Today
- GitHub topics/claude-code (major hits)
- Anthropic changelog (v2.1.111–2.1.114 this week)
- Anthropic news (Claude Design, Opus 4.7)
- Product Hunt (CC-Beeper #6 Apr 15, Masko Code)
- Reddit (Opus 4.7 reception, regression anger thread)
- Simon Willison (system prompt timeline article Apr 18)

## SKIP (submissions.json)
- openwolf (slug: openwolf, URL: github.com/cytostack/openwolf)

---

## Findings

### OFFICIAL ANTHROPIC
1. **Claude Design** — launched April 17, 2026
   - URL: https://anthropic.com/news/claude-design (TechCrunch: techcrunch.com/2026/04/17/...)
   - Powered by Opus 4.7; generates prototypes, slides, one-pagers from prompts
   - Can read company codebase + design files to apply design system
   - Research preview for Pro/Max/Team/Enterprise
   - Figma stock dropped 7.28% on launch day; Mike Krieger left Figma board Apr 14
   - Category: anthropic, design

2. **Claude Opus 4.7** — released April 16, 2026
   - URL: https://anthropic.com/news/claude-opus-4-7
   - SWE-bench 87.6% in xhigh mode
   - New xhigh effort level between high and max
   - /ultrareview: parallel multi-agent code review in the cloud
   - Auto mode now available for Max subscribers (not just Teams/Enterprise/API)
   - Vision: 98.5% visual-acuity, 3.75MP images (3× higher than Opus 4.6)
   - Price unchanged: $5/M input, $25/M output
   - Category: anthropic

3. **Claude Code v2.1.111–2.1.114** — April 15-18, 2026
   - URL: https://code.claude.com/docs/en/changelog
   - v2.1.113: CLI now spawns native binary (not bundled JS); sandbox.network.deniedDomains; OSC 8 URLs
   - v2.1.111: /tui fullscreen, push notifications, /less-permission-prompts skill, plan files named after prompt
   - v2.1.110: /tui command, Ctrl+O verbose transcript, /plugin favorites
   - Category: anthropic

### VIRAL / HIGH STAR
4. **everything-claude-code** (162k stars)
   - URL: https://github.com/affaan-m/everything-claude-code
   - Agent harness optimization: 48 agents, 183 skills, 34 language rules, 14+ MCP configs
   - v1.10.0 April 2026: desktop dashboard GUI, ECC 2.0 alpha
   - Install: `/plugin install everything-claude-code@everything-claude-code` or `./install.sh --profile full`
   - Category: viral, skill, plugin

5. **get-shit-done** (55.2k stars, updated April 19 2026)
   - URL: https://github.com/gsd-build/get-shit-done
   - Meta-prompting + spec-driven development system for Claude Code
   - /gsd-new-project, /gsd-plan-phase, /gsd-execute-phase, /gsd-spike, /gsd-sketch
   - Install: `npx get-shit-done-cc@latest`
   - Category: viral, skill

6. **claude-mem** (63.8k stars listed on GH topics; augmentcode.com confirmed 46.1k+ with 3k stars in one day)
   - URL: https://github.com/thedotmack/claude-mem
   - Plugin: auto-captures sessions, compresses with Claude Agent SDK, injects context on next session
   - SQLite + Chroma vector search, cross-platform
   - Install: `npx claude-mem install`
   - Category: viral, plugin, cost

7. **caveman** (39.7k stars)
   - URL: https://github.com/JuliusBrussee/caveman
   - Viral "why use many token when few token do trick" meme-skill
   - Cuts ~65-75% output tokens, ~46% input tokens, preserves technical accuracy
   - Install: `claude plugin marketplace add JuliusBrussee/caveman && claude plugin install caveman@caveman`
   - LinkedIn post by Arjan Brussee with 30+ comments; Product Hunt launch
   - Category: cost, viral, skill

### COST / TOKEN OPTIMIZATION
8. **code-review-graph** (11.7k stars, v2.3.2 Apr 14 2026)
   - URL: https://github.com/tirth8205/code-review-graph
   - MCP server: builds AST knowledge graph with tree-sitter + SQLite
   - 6.8× fewer tokens on reviews, up to 49× on daily tasks
   - Install: `pip install code-review-graph && code-review-graph install && code-review-graph build`
   - Category: mcp, cost

### DESIGN / VISUAL
9. **Understand-Anything** (8.6k stars, v2.3.1 Apr 12 2026)
   - URL: https://github.com/Lum1104/Understand-Anything
   - Multi-platform plugin: visual knowledge graph + business logic dashboard
   - "graphs that teach > graphs that impress"
   - Install: `/plugin install understand-anything`
   - Category: design, plugin

### PRODUCTIVITY / UX TOOLS
10. **CC-Beeper** (133 GH stars; 220 PH upvotes Apr 15 2026, #6 on PH daily)
    - URL: https://github.com/vecartier/cc-beeper
    - Floating macOS pager: see what Claude does, respond by voice, never miss permission request
    - 100% Swift, zero dependencies, local, no telemetry
    - Install: Download from releases or `brew install --cask cc-beeper`
    - Category: design, viral

11. **claude-squad** (7.1k stars, v1.0.17 Mar 12 2026)
    - URL: https://github.com/smtg-ai/claude-squad
    - Terminal app: manage multiple Claude Code/Codex/Gemini agents in isolated git workspaces
    - Install: `curl -fsSL https://raw.githubusercontent.com/smtg-ai/claude-squad/main/install.sh | bash`
    - Category: viral, plugin

12. **Masko Code** (github: RousselPaul/masko-code)
    - URL: https://github.com/RousselPaul/masko-code
    - Desktop mascot companion, watches agents, speech bubbles for permissions
    - Ships with Clippy + community mascots; generate custom at masko.ai
    - Free, MIT, 100% local
    - Install: Download DMG from masko.ai
    - Category: design, viral

### MARKETPLACES / COLLECTIONS
13. **claude-code-plugins-plus-skills** (2k+ stars, tonsofskills.com)
    - URL: https://github.com/jeremylongshore/claude-code-plugins-plus-skills
    - 423 plugins, 2,849 skills, 177 agents — open-source marketplace
    - ccpi CLI: `pnpm add -g @intentsolutionsio/ccpi && ccpi install [plugin-name]`
    - Category: marketplace

14. **levnikolaevich/claude-code-skills** (413 stars)
    - URL: https://github.com/levnikolaevich/claude-code-skills
    - Full dev lifecycle: 7 core plugins + hex-line, hex-graph, hex-ssh MCP servers
    - Install: `/plugin marketplace add levnikolaevich/claude-code-skills` then `/plugin install setup-environment@levnikolaevich-skills-marketplace`
    - Category: plugin, mcp

15. **awesome-claude-plugins** (ComposioHQ, 1.4k stars)
    - URL: https://github.com/ComposioHQ/awesome-claude-plugins
    - Curated 40+ plugins: connect-apps flagship (500+ integrations), frontend-design, CCHub, etc.
    - Category: marketplace, plugin

### ALSO NOTED
- Simon Willison Apr 18: "Claude system prompts as a git timeline" — extracted Opus 4.6→4.7 system prompt diff
  URL: https://simonwillison.net/2026/Apr/18/extract-system-prompts/
- Claude Code regression anger thread: 1,060 upvotes (early April, fading)
- Claude Code source leak (Mar 31) — still discussed but not 72h
- /dev for Claude Code skill (hnaymyh123-henry, 109 stars) — parallel worker agents, bash install.sh
