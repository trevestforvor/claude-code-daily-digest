# Research Notes — 2026-06-27

## Time check
Start: 1782576220 | Elapsed at note-write: ~500s (~8 min)

---

## YouTube Coverage (past 7 days)

### Charlie Automates (@charlieautomates, ~8k subs)
- **"AI Summer 2026 | Claude Code & Choosing the Right Model | Week 3, Day 1"** — video about model selection within Claude Code; curated signal for Opus/Sonnet/Haiku choice guidance. (https://www.youtube.com/watch?v=Thylf8WVuK8)
- **"2 Claude Code Repos NOBODY'S Talking About Yet"** — specific repos not identified (YouTube 403s, search result metadata only); video from ~April 3 2026 (not within 72h window). Not included.
- Charlie Automates posted multiple times this week on Claude Code; "AI Summer" daily series ongoing. ✅ Secondary URL signal.

### IndyDevDan (@indydevdan, ~129k subs)
- **"Agent Experts: Finally, Agents That ACTUALLY Learn"** — (https://www.youtube.com/watch?v=zTcDwqopvKE). YouTube 403d. Could not confirm specific tools/repos mentioned. Could not identify specific items from this video.
- Recent content focus: "Claude 4 ADVANCED AI Coding: How I PARALLELIZE Claude Code with Git Worktrees" — covers worktree parallel patterns (previously covered in digest). No new unique items surfaced.

### Simon Scrapes (@simonscrapes, ~71.8k subs)
- Channel confirmed active; could not retrieve specific June 2026 videos (limited search results). No specific items surfaced for this run.

### Tech With Tim (@TechWithTim, ~2M subs)
- No specific June 2026 Claude Code content surfaced. Possible video but not verified.

### UI Collective, Adrien AI Designer, Developers Digest
- No specific new Claude Code content verified for this week.

---

## Key Items Found

### 1. Anthropic Mythos 5 — Partial US Institutional Release (BREAKING)
- **Source**: Semafor, CNN, Fortune, 9to5Mac, CNBC (June 26–27, 2026)
- US Commerce Secretary Howard Lutnick signed letter June 26, 2026 clearing Mythos 5 for 100+ US companies and government agencies.
- Anthropic "worked with the US government to address risks." Project Glasswing = invite-only cybersecurity initiative for Mythos 5.
- Fable 5 (consumer model) still restricted; talks ongoing but no timeline.
- This is Day 15 of the ongoing ban saga (covered daily from Day 8 in digest).
- Categories: anthropic, viral

### 2. Claude Code Week 26 / v2.1.195
- **Source**: code.claude.com/docs/en/whats-new (fetched directly)
- v2.1.185–v2.1.195 range, June 22–26, 2026 + June 27 hotfixes
- Key features: `claude mcp login` / `claude mcp logout`, `/rewind` now works to restore before `/clear`, shell mode responds to command output, background subagents now surface permission prompts
- June 27 additions: fullscreen mouse click controls, hook matcher fixes for hyphenated IDs, voice dictation fix, ~37% CPU reduction during streaming
- Categories: anthropic

### 3. claude-howto (luongnv89)
- https://github.com/luongnv89/claude-howto
- 38.5k stars, 4.6k forks. MIT. Updated to Claude Code v2.1.160.
- 10-module visual guide: slash commands, memory, skills, subagents, MCP, hooks, plugins, checkpoints, advanced features, CLI reference
- Mermaid diagrams, 11–13hr learning path, copy-paste templates
- Not in prior digests or submissions.json
- Categories: viral, marketplace

### 4. GitHub Copilot — Claude as Agent Provider in JetBrains IDEs
- **Source**: github.blog/changelog (June 22, 2026)
- Claude is now the agent inside GitHub Copilot for JetBrains IDEs (public preview)
- Install Claude Code CLI, set CLI path in JetBrains settings, select "Claude" as agent provider
- Currently bypass permissions mode; configurable permissions planned
- Categories: anthropic, viral

### 5. n8n-mcp (czlonkowski)
- https://github.com/czlonkowski/n8n-mcp
- 22k stars, 3.5k forks, TypeScript, MIT
- MCP server bridging AI assistants (Claude, etc.) with n8n workflow automation
- 2,063 n8n nodes (816 core + 1,247 community), 2,352 workflow templates
- v2.61.0 released June 26, 2026 (231 total releases — very active)
- Install: `npx n8n-mcp` or self-hosted via Docker
- Not in prior digests or submissions.json
- Categories: mcp

### 6. palmier-pro (palmier-io)
- https://github.com/palmier-io/palmier-pro
- 9.2k stars, GPLv3, Swift (98.6%), macOS 26 (Tahoe/Apple Silicon only)
- Trending around June 22-23, 2026
- AI video editor with built-in Seedance/Kling video generation; bundles MCP server for Claude Code/Desktop/Cursor integration
- Free download (generative AI features need subscription)
- Not in prior digests or submissions.json
- Categories: design, mcp

### 7. bumblebee (perplexityai)
- https://github.com/perplexityai/bumblebee
- 4.6k stars, Go, zero non-stdlib deps, v0.1.2 June 18, 2026
- Read-only supply chain scanner for MCP servers; reads ~/.claude.json and .mcp.json configs
- 3 scan profiles (baseline, project, deep), maintained threat intel catalogs from public security reports
- Install: `go install github.com/perplexityai/bumblebee/cmd/bumblebee@latest`
- Not in prior digests or submissions.json
- Categories: mcp, skill (security)

### 8. claude-seo (AgriciDaniel)
- https://github.com/AgricIDaniel/claude-seo
- 10k stars, MIT, v2.2.0 June 12, 2026
- 25 sub-skills + 18 sub-agents: technical SEO, E-E-A-T, schema, GEO/AEO, backlinks, local SEO, international SEO, Google APIs, PDF/Excel reporting
- Install: `/plugin marketplace add AgriciDaniel/claude-seo`
- Not in prior digests or submissions.json
- Categories: skill

### 9. MCP OAuth Token Hijacking (Mitiga Labs)
- https://www.mitiga.io/blog/claude-code-mcp-token-theft-mitm
- 5-step MITM attack chain: malicious npm postinstall hook modifies ~/.claude.json, silently redirecting MCP traffic through attacker infrastructure, stealing OAuth bearer tokens
- Tokens: persistent (refresh token stored), broadly scoped, stored in plaintext, unattributable server-side
- Reported to Anthropic April 10; Anthropic acknowledged but said out-of-scope. No patch planned.
- Security Week and Security Boulevard coverage in June 2026
- Note: Different from the agentjacking-sentry-mcp story (June 22) — this is MCP traffic MITM vs Sentry injection
- Categories: mcp, security

### 10. claude-code-ultimate-guide (FlorianBruniaux)
- https://github.com/FlorianBruniaux/claude-code-ultimate-guide
- 5.2k stars, CC BY-SA 4.0 + CC0. Founding Engineer at Méthode Aristote.
- 430K+ lines: 24k-line main guide, 48 Mermaid diagrams, 28 CVEs tracked, 655 malicious skills catalog, 271-question quiz, 181 production templates
- Ships an MCP server for integration into Claude Code sessions
- Not in prior digests or submissions.json
- Categories: marketplace

### 11. Charlie Automates — AI Summer 2026 Model Selection
- YouTube: https://www.youtube.com/watch?v=Thylf8WVuK8
- Charlie Automates (curated YouTuber, ~8k subs) — "AI Summer 2026 | Claude Code & Choosing the Right Model | Week 3, Day 1"
- Content: guidance on which model to use (Opus vs Sonnet) for which tasks within Claude Code
- Signal: ongoing "AI Summer" daily series from Charlie Automates — high posting cadence this week

---

## Items Skipped / Excluded

- `claude-code-system-prompts` (Piebald-AI) — covered June 23 as `claude-code-system-prompts-v2-1-186`; now at v2.1.195 but incremental update only
- CVE-2025-59536 / CVE-2026-21852 (Check Point) — patched in Oct 2025 / Jan 2026; old news that circulated March 2026
- Various MCP Travel security story (2.1M records) — not enough detail to verify
- claude-code-ultimate-guide (FlorianBruniaux) 5.2k stars — may include as lower-ranked item
- superpowers-238k — covered June 25
- IndyDevDan video — couldn't confirm specific tools/repos

---

## Rankings Summary

1. fable5-mythos5-partial-us-release (anthropic, viral) — major resolution story
2. claude-code-v2-1-195 (anthropic) — week 26 recap with key features
3. claude-howto (viral) — 38.5k stars tutorial
4. github-copilot-claude-jetbrains (anthropic, viral) — new IDE integration
5. n8n-mcp (mcp) — 22k stars, very active, June 26 release
6. palmier-pro (design, mcp) — 9.2k stars macOS AI video editor + MCP
7. bumblebee (mcp) — 4.6k stars Perplexity supply chain scanner
8. claude-seo (skill) — 10k stars SEO plugin
9. mcp-oauth-mitm (mcp) — security story, no patch
10. claude-code-ultimate-guide (marketplace) — 5.2k stars reference
