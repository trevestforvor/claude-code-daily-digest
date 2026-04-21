# Research Notes — 2026-04-21

## Sources Scanned
- GitHub topics: claude-code, agent-skills, claude-skills (by stars desc)
- Reddit: r/ClaudeAI, r/ClaudeCode (via web search — limited indexing)
- Hacker News: algolia API (403 blocked), searched via web
- Anthropic: github.com/anthropics/claude-code/releases
- Simon Willison: simonwillison.net (via web search)
- Product Hunt: hunted.space/history (403 blocked), via web search
- Blogs: dev.to, medium, SiliconAngle, 9to5Mac, VentureBeat
- GitHub CLI changelog: github.blog/changelog

## Blocked Sources
- hunted.space (403)
- news.ycombinator.com (403 on front page)
- hn.algolia.com (403 on API calls)
- releasebot.io (403)
- code.claude.com/docs/en/changelog (503)

---

## Findings

### OFFICIAL ANTHROPIC
1. **Claude Code v2.1.116** — April 20, 2026
   - URL: https://github.com/anthropics/claude-code/releases
   - /resume up to 67% faster on large sessions (40MB+)
   - Faster MCP startup: deferred `resources/templates/list` for multiple stdio servers
   - Inline thinking progress indicators: "still thinking" → "thinking more" → "almost done thinking"
   - /config search now matches option values, not just keys
   - /doctor works while Claude is responding
   - /reload-plugins auto-installs missing dependencies
   - Security: sandbox auto-allow no longer bypasses dangerous-path checks for rm/rmdir
   - Multiple terminal rendering and keyboard fixes
   - Install: `npm update -g @anthropic-ai/claude-code`

### VIRAL / HIGH STAR (NEW)
2. **ComposioHQ/awesome-claude-skills** — 55.4k stars, 5.9k forks
   - URL: https://github.com/ComposioHQ/awesome-claude-skills
   - 78+ SaaS automation skills: CRM (Salesforce, HubSpot), PM (Jira, Linear, Notion), comms (Slack, Teams, Discord), DevOps (GitHub, GitLab), finance (Stripe, Shopify)
   - connect-apps plugin: real-world actions across 1000+ apps via Composio backend
   - Cross-platform: works in Claude.ai, Claude Code, and API
   - NOT in yesterday's digest (confused with awesome-claude-PLUGINS which is a different repo)
   - Category: design, skill, viral

3. **VoltAgent/awesome-agent-skills** — 16.7k stars
   - URL: https://github.com/VoltAgent/awesome-agent-skills
   - 1,100+ hand-picked skills from official teams (Anthropic, Google, Vercel, Cloudflare, Netlify, Stripe, Microsoft, Hugging Face) + community
   - "Hand-picked, not AI-slop generated" tagline
   - Multi-platform: Claude Code, Codex, Gemini CLI, Cursor, GitHub Copilot
   - 322 commits, systematic org-based structure
   - Install: `gh skill install VoltAgent/awesome-agent-skills <skill-name> --agent claude-code`
   - Category: skill, viral

4. **alirezarezvani/claude-skills** — 12.2k stars
   - URL: https://github.com/alirezarezvani/claude-skills
   - 235+ production skills across 9 domains: engineering, marketing, C-level advisory, compliance, product, QA, Playwright testing
   - 305 stdlib-only Python CLI scripts (zero pip installs)
   - v2.0.0 March 4, 2026; v2.3.0 April 2026 with 30 marketplace plugins
   - Cross-platform: 12 tools via scripts/convert.sh (Claude Code, Codex, Gemini CLI, Cursor, Aider)
   - Category: skill, viral

### GITHUB ECOSYSTEM
5. **GitHub `gh skill`** (v2.90.0, April 16, 2026)
   - URL: https://github.com/cli/cli/releases/tag/v2.90.0
   - Secondary: https://github.blog/changelog/2026-04-16-manage-agent-skills-with-github-cli/
   - Native `gh skill install/search/update/publish` for agent skills
   - Targets Claude Code specifically: `gh skill install <owner>/<repo> <skill> --agent claude-code --scope user`
   - Every release SHA-pinned for supply chain safety
   - Public preview, subject to change
   - Install: `gh extension upgrade --all` (requires gh >= v2.90.0)
   - Category: viral, skill

### COST / TOKEN OPTIMIZATION (NEW)
6. **zilliztech/claude-context** — 6.4k stars
   - URL: https://github.com/zilliztech/claude-context
   - Code search MCP: hybrid BM25 + dense vector embeddings
   - AST-aware chunking for intelligent code segmentation
   - Milvus/Zilliz Cloud vector storage
   - ~40% token reduction vs loading entire directories
   - Incremental Merkle-tree re-indexing (only changed files)
   - Multi-platform: Claude Code, Cursor, VS Code, Windsurf
   - Category: mcp, cost

### SKILL MANAGEMENT (NEW)
7. **runkids/skillshare** — 1.6k stars, v0.19.3 April 19, 2026
   - URL: https://github.com/runkids/skillshare
   - Single-command sync: pushes skills/agents/rules to 50+ AI platforms simultaneously
   - Install from GitHub, GitLab, or self-hosted Git
   - Zero-dependency Go binary, no telemetry, offline-capable
   - Built-in prompt injection and data exfiltration security scanning
   - Web dashboard for visual management
   - Install: `curl -fsSL https://raw.githubusercontent.com/runkids/skillshare/main/install.sh | sh`
   - Category: skill

### RECURRING (from 2026-04-20 digest, still trending)
8. **caveman** (39.7k stars) — viral "few token" meme, Product Hunt launched, LinkedIn post viral
9. **claude-mem** (46k+ stars) — gained 3k in one day; momentum likely holding
10. **get-shit-done** (55.2k stars) — updated April 19, 2026 (yesterday)
11. **code-review-graph** (11.7k stars) — top MCP for token reduction
12. **understand-anything** (8.6k stars) — visual codebase knowledge graph
13. **cc-beeper** (220 PH upvotes Apr 15) — macOS pager, still referenced
14. **claude-squad** (7.1k stars) — multi-agent terminal manager
15. **everything-claude-code** (162k stars) — ECC 2.0 alpha

### ALSO NOTED / SKIPPED
- Routines + Desktop redesign (April 14) — 7 days old, outside 72h window; next time
- Whoff Agents (0 stars, paid skill pack $47) — skip
- awesome-cc-oss (88 stars, source leak archive) — skip, old event
- claude-mods 0xDarkMatter (17 stars) — too low signal
- daymade/claude-code-skills (887 stars) — decent but lower priority
- quemsah/awesome-claude-plugins (531 stars) — interesting n8n automation but low signal
- Opus 4.7 backlash thread ("Gaslightus 4.7") — discussion thread, not a tool
- Simon Willison Apr 18 system prompt diff article — info content, not a tool

### SKIP (submissions.json)
- openwolf (slug: openwolf)

### SKIP (yesterday's digest)
- claude-design, claude-opus-4-7, claude-code-v2-1-111-114, cc-beeper (recurring only), masko-code, understand-anything (recurring only), caveman (recurring only), code-review-graph (recurring only), claude-mem (recurring only), everything-claude-code (recurring only), get-shit-done (recurring only), claude-squad (recurring only), claude-code-plugins-plus-skills, awesome-claude-plugins (ComposioHQ), levnikolaevich-claude-code-skills
