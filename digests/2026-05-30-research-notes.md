# Research Notes — 2026-05-30

Research window: ~11 min (658s at stop). Hard cap 1200s.

## YouTube Coverage (past 7 days)

### @Chase-H-AI (109k subs)
- "The Claude Code + Obsidian Setup That Now Runs My Life" — published ~2 weeks ago (mid-May). Covers obsidian-mind / claude-obsidian type setups.
- "Top 10 Claude Code Frontend Design Skills, Plugins, & CLIs" — published April 15, 2026. Covered: official frontend-design skill, Firecrawl, React Best Practices. Too old for today.
- No confirmed new video in the last 3 days.

### @indydevdan (129k subs)
- No specific video confirmed in the last 7 days. Channel is posting regularly but couldn't surface exact recent title.

### @charlieautomates (8k subs)
- "This 1 MCP Just Made AI Image & Video 100x EASIER" — recent but exact date unconfirmed.
- "Claude Code + Graphify = Local Rag (Unlimited Memory)" — April 2026.

### @simonscrapes (71.8k subs)
- Last visible post: late April 2026 ("Don't Fall Behind! Every Claude Code Update (Apr 2026)").
- No new content confirmed in the last 7 days.

### @UICollectiveDesign (52.5k subs)
- "Claude Code for Designers: All the Ways to Use It" — May 26 (already covered in May 27 digest).

### @DevelopersDigest (61.5k subs)
- Active blog articles; last YouTube content not specifically confirmed this week but blog had codeburn write-up.

### @TechWithTim (2M subs)
- No recent Claude Code video confirmed this week.

## Key Findings

### New Anthropic Releases (72h window)
- **v2.1.156** (May 29): Fixes thinking blocks for Opus 4.8 (API errors).
- **v2.1.157** (May 29): Plugins in `.claude/skills` auto-load without marketplace; `claude plugin init <name>`; `EnterWorktree` mid-session switching; OTEL `tool_parameters` when `OTEL_LOG_TOOL_DETAILS=1`.
- **v2.1.158** (May 30): Auto mode on Bedrock, Vertex, Foundry for Opus 4.7+4.8; streaming tool execution always enabled across all providers; improved auto-mode exfil detection (bulk repo content transfers).
- **Claude Managed Agents Self-Hosted Sandboxes + Webhooks** (announced May 27 alongside security-guidance): Tool execution moves to your own infra (Cloudflare/Daytona/Modal/Vercel/AWS); webhooks for session lifecycle events. Dreaming and Outcomes were announced May 6 at Code with Claude.

### Recent Ecosystem Releases (72h window)
- **claude-obsidian v1.9.2** (AgriciDaniel, May 28, 5.8k stars): Self-organizing AI second brain for Obsidian + Claude Code. 15 skills, methodology modes (LYT/PARA/Zettelkasten), multi-writer safety, hybrid retrieval, 10-principle thinking framework, hot cache.
- **context-mode** (mksglu, 2.5k stars, Show HN): MCP + hooks that sandboxes tool output, reducing context 315KB→5.4KB (98%). Works via PreToolUse/PostToolUse hooks; 15 platforms. Already merged into awesome-claude-code issue list.
- **claude-peers-mcp** (louislva, ~1.5-1.7k stars): MCP that lets Claude Code instances on the same machine discover each other and message ad-hoc; local broker on :7899, SQLite persistence.

### Trending (not in last 7 days of digests)
- **ECC / Everything Claude Code** (affaan-m/ECC, 192k stars): The community standard agent harness — 28 agents, 119 skills, 60 commands; Claude Code + Cursor + OpenCode + Codex. ecc-guide skill updated May 26. v1.9.0 current. Not in May 23-29 digests.
- **Claude for Legal** (anthropics/claude-for-legal, May 12): 20+ MCP connectors, 12 practice-area plugins. Thomson Reuters CoCounsel + Free Law Project CourtListener. Not in May 23-29 digests, but outside 72h window.
- **datasette-agent** (simonwillison, v0.1a4 May 24): Extensible AI assistant for Datasette; Claude Code and Codex write plugins for it.

## Dedup — Already Covered (skip)
- codegraph: May 26 digest
- andrej-karpathy-skills: May 27 digest
- anthropic-security-guidance: May 27 digest
- codebase-memory-mcp: May 27 digest
- claude-code-v2-1-152/153/154: May 27/28/29 digests
- codeburn: May 29 digest
- awesome-design-md: May 29 digest
- cc-switch: May 25+29 digests
- mattpocock-skills: May 23+29 digests (recurring)
- alirezarezvani-claude-skills: May 29 digest
- activepieces-mcp: May 28 digest
- antigravity-awesome-skills: May 25 digest
- awesome-claude-code-hesreallyhim: May 23+28 digests

## Not Included (insufficient data or outside 72h)
- Claude for Legal (May 12, outside 72h, may cover as separate run)
- GitHub Copilot App native builds (May 14, outside 72h)
- Figma Code to Canvas (February 2026, too old)
- Trends-MCP (rugvedp, September 2025, too old)
- Almanac MCP (April 21 HN post, outside 72h)
