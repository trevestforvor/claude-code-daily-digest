# Research Notes — 2026-05-09

**Research window:** ~450s of 1200s cap used

---

## YouTube Coverage (past 7 days)

| Creator | Recent Videos | Tools Mentioned |
|---|---|---|
| @Chase-H-AI (109K) | "Claude Code + Higgsfield MCP = Content MACHINE" (~1 week ago) | Higgsfield (already in submissions.json) |
| @TechWithTim (2M) | "Full Claude Code Tutorial for Non-Technical Beginners in 2026" (~1 week ago) | Tutorial only, no new tools surfaced |
| @indydevdan (129K) | No specific new videos identified in past 7 days | — |
| @charlieautomates (8K) | No specific new videos identified in past 7 days | — |
| @simonscrapes (71.8K) | No specific new videos identified in past 7 days | — |
| @UICollectiveDesign (52.5K) | No specific new videos identified in past 7 days | — |
| @DevelopersDigest (61.5K) | No specific new videos identified in past 7 days | — |

**Summary:** Weak YouTube signal this round. No YouTubers from curated list covered tools in past 7 days that surfaced novel items. Chase-H-AI's video covered Higgsfield (already in submissions.json).

---

## Key Finds by Source

### Anthropic Official (May 6-9 range)

- **Claude Code v2.1.136** (May 8, 2026): `settings.autoMode.hard_deny` for unconditional block rules; MCP servers no longer disappear after `/clear`; Fixed MCP OAuth refresh token losses (daily re-auth no longer needed); Fixed API 400 error with extended thinking + redacted thinking blocks after tool calls; WSL2: Image paste from Windows clipboard now works; Fixed `--resume`/`--continue` with underscores in project paths; 50+ additional bug fixes.
- **Claude Code v2.1.137** (May 9): Fixed VSCode extension failing to activate on Windows.  
- **Claude Code v2.1.138** (May 9): Internal fixes. Current latest.
- **Claude for Microsoft 365** (May 7-8, 2026): Excel, Word, PowerPoint add-ins now GA; Outlook add-in in public beta. Via Microsoft Marketplace, works on Windows/Mac/web. Available to all paid Claude plans. No separate Copilot add-on fee. URL: claude.com/claude-for-microsoft-365
- **Code with Claude 2026** (May 6, SF): API volume 17x YoY; doubled 5hr limits (already in May 7 digest); Code Review GA; Routines (already covered April 14).

### GitHub Trending (weekly)

- **mattpocock/skills**: 67,706 stars (+14,928 this week) — already in past digests
- **sickn33/antigravity-awesome-skills**: 36,900 stars, 1,450+ skills, v10.10.0 (May 4), multi-tool installer. Now in submissions.json — skip.
- **ruvnet/ruflo**: 47,537 stars — in submissions.json (ruflo)
- **TauricResearch/TradingAgents**: 72,328 stars — in submissions.json (tradingagents)
- **browserbase/skills**: 2,908 stars — Claude Agent SDK + web browsing, NEW
- **anthropics/financial-services**: 16,900 stars — already covered as anthropic-finance-agents (May 6)
- **decolua/9router**: 6,266 stars — smart cost router, NEW

### Reddit/Community (past 3 days)

- r/ClaudeCode heavily active (96K members)
- Opus 4.7 backlash thread still running (1.7K upvotes, "Gaslightus 4.7")
- Claude Code vs Codex debate ongoing
- Rate limit complaints remain hot

### HN (past 72h)

- Show HN: Almanac MCP — ~3 weeks ago, outside window
- Show HN: Ctx — cross-agent /resume — recency unclear
- No clear fresh HN hits within past 72h

### New Tools (fresh, not in recent digests or submissions.json)

1. **decolua/9router** — 6.3K stars, 20-40% token savings via smart 3-tier provider fallback
2. **Snyk for Claude Code** — May 8 launch, MCP-based security scanning. `npx -y snyk@latest mcp configure --tool=claude-cli`
3. **prismatic-io/prismatic-skills** — May 4 launch, integration specialist plugin, 5 skill modes
4. **browserbase/skills** — 2.9K stars, 11 skills for web browsing with anti-bot
5. **Claude for Microsoft 365** — Anthropic official, Excel/Word/PowerPoint GA + Outlook beta (May 7)
6. **Claude Code v2.1.136** — May 8 release, major MCP stability + autoMode.hard_deny

### Recurring Items Still Trending

- **superpowers** (Day 6): 178K stars, still #1 DESIGN
- **owl-listener-designer-skills** (Day 2): 87 skills, comprehensive design coverage
- **hermes-agent** (Day 6): 131K stars, self-improving agent
- **piebald-system-prompts** (Day 2): 10K stars, v2.1.136-updated
- **hesreallyhim-awesome-claude-code** (Day 2): 43K stars
- **n8n-mcp** (Day 5): 20.1K stars, MCP automation hub
- **pal-mcp-server** (Day 5): 11.5K stars, multi-model MCP
- **skyvern** (Day 6): 21.5K stars, added new context from v2.1.136
- **alirezarezvani-claude-skills** (Day 5): 14.1K stars

### Dropped (Day 7+, no new developments)

- garrytan-gstack (Day 7)
- cc-switch (Day 7)
- oh-my-openagent (Day 7)
- career-ops (Day 7)
- nanobot (Day 7)

---

## Final 15 Candidate Ranking

Priority: DESIGN > COST/TOKEN > VIRAL > ANTHROPIC > general

1. superpowers [DESIGN, recurring]
2. owl-listener-designer-skills [DESIGN, recurring]
3. decolua-9router [COST, NEW]
4. claude-microsoft-365 [ANTHROPIC, NEW]
5. claude-code-v2-1-136 [ANTHROPIC, NEW]
6. hermes-agent [VIRAL, recurring]
7. snyk-claude-code [MCP, NEW]
8. n8n-mcp [MCP, recurring]
9. pal-mcp-server [MCP/COST, recurring]
10. prismatic-skills [SKILL, NEW]
11. browserbase-skills [MCP, NEW]
12. alirezarezvani-claude-skills [SKILL, recurring]
13. piebald-system-prompts [general, recurring]
14. hesreallyhim-awesome-claude-code [general, recurring]
15. skyvern [general/cost, recurring]
