# Research Notes — 2026-05-15

## Timer
- Research started: 2026-05-15, ~18:47 UTC
- Research ended: ~18:53 UTC (~368 seconds elapsed out of 1200s limit)

## YouTube Coverage (past 7 days)

### IndyDevDan (@indydevdan, 129K subs)
- "Use Free Claude Code in Google Antigravity IDE 2026 (Full Tutorial)" — 3 days ago; covers running Claude Code free via Google Antigravity IDE (built by ex-Windsurf team, launched with Gemini 3 Nov 2025). No new tool surfaced beyond the Antigravity IDE itself.
- "The 2026 Cold Email Playbook (Built Entirely in Claude Code)" — 2 days ago; workflow demo, no specific tool.
- "Claude Code FREE UNLIMITED 2026 🤯 (No Ollama, No GPU, No Nvidia Nim)" — 2 days ago; using Minimax 2.5 via OpenCode. Cost/token angle.
- **Confirmed prior coverage:** Mobbin MCP (covered within 12h of May 13 launch).

### Chase AI (@Chase-H-AI, 109K subs)
- "Use These NEW Open Source Claude Code Tools or Fall Behind" — ~2 weeks ago; outside 7-day window.
- No new videos confirmed in past 7 days matching the 72h window.

### Charlie Automates (@charlieautomates, 8K subs)
- "This 1 MCP Just Made AI Image & Video 100x EASIER" — recent but could not fetch video content (403). Could not confirm tools covered.
- "Claude Code + Graphify = Local Rag (Unlimited Memory)" — April 9; outside window.

### Simon Scrapes (@simonscrapes, 71.8K subs)
- "Agentic Academy Skool Group Review" — ~2 weeks ago; outside window.
- No Claude Code tool discovery videos confirmed in past 7 days.

### Tech With Tim (@TechWithTim, 2M subs)
- No recent Claude Code content found in search results for past 7 days.

### UI Collective, Developers Digest, Adrien AI Designer
- No specific Claude Code content confirmed within 7-day window from search results.

**YouTuber viral boosts this run:** None confirmed (no tool covered by 2+ YouTubers from sources/youtubers.json in past 7 days, beyond Mobbin MCP from IndyDevDan on May 13 — already in digest).

---

## New Candidates Found

### 1. Claude Code v2.1.142 (May 14, 22:55 UTC)
- From: github.com/anthropics/claude-code/releases (fetched successfully)
- Key features: Fast mode now defaults to Opus 4.7 (was 4.6); new `claude agents` flags for background sessions (--add-dir, --settings, --mcp-config, --permission-mode, --model, --effort); plugins with root-level SKILL.md (no skills/ dir) now surfaced as skills; `/plugin details` and `claude plugin details` now show LSP servers.
- Notable fixes: MCP_TOOL_TIMEOUT now applies per-request; background agents no longer crash-loop with Claude-in-Chrome extension; daemon exits cleanly after `brew upgrade`.

### 2. OthmanAdi/planning-with-files
- Stars: 21,300; forks: 1,900
- Last commit: May 14, 2026 (v2.38.0)
- Concept: Manus-style persistent markdown planning — replicates the workflow that made Manus AI worth $2B to Meta (Dec 2025 acquisition). Creates task_plan.md, findings.md, progress.md as agent working memory; survives context resets.
- New this week: /plan-goal composes with Claude Code's /goal (v2.1.139, May 12); /plan-loop composes with /loop.
- Install: `npx skills add OthmanAdi/planning-with-files --skill planning-with-files -g`

### 3. Signadot /signadot-validate (May 12)
- Source: SiliconANGLE May 12; Signadot blog; DEV Community post by Signadot
- What: Skill that connects Claude Code (and Codex/Cursor) to Signadot's platform for validating code changes in production-like Kubernetes sandboxes before returning to developer. Uses MCP server for cluster discovery + CLI for local dev loop.
- Stars: N/A (official company skill, not a community GitHub repo with tracked stars)
- Install: "See signadot.com" (requires Signadot account)

### 4. PwC + Anthropic Partnership Expansion (May 14)
- Source: SiliconANGLE
- 30,000 PwC U.S. professionals to train on Claude Code and Claude Cowork; joint Center of Excellence; Claude-native finance group inside PwC's Office of CFO.
- Not included as standalone item (enterprise business partnership, less actionable for Claude Code developer audience).

---

## Recurring Items Status

| Slug | First Day | Today's Day | Decision |
|------|-----------|-------------|----------|
| mattpocock-skills | May 14 | Day 2 | ✅ Keep |
| anthropic-agent-sdk-credits | May 14 | Day 2 | ✅ Keep |
| claude-for-small-business | May 14 | Day 2 | ✅ Keep (tour started May 14) |
| last30days-skill | May 14 | Day 2 | ✅ Keep |
| mobbin-mcp | May 13 | Day 3 | ✅ Keep |
| playwright-cli | May 13 | Day 3 | ✅ Keep |
| claude-for-legal | May 13 | Day 3 | ✅ Keep |
| awesome-design-md | May 12 | Day 4 | ✅ Keep (still ~80K stars) |
| addyosmani-agent-skills | May 12 | Day 4 | ✅ Keep |
| claude-platform-aws | May 12 | Day 4 | ✅ Keep |
| claude-managed-agents-2026 | May 11 | Day 5 | ✅ Keep (Dreaming access open) |
| mitiga-mcp-oauth-attack | May 11 | Day 5 | ✅ Keep (no fix yet) |
| caveman | May 10 | Day 6 | ❌ Drop (fading) |
| rtk | May 10 | Day 6 | ❌ Drop (fading) |

---

## Sources Not Yielding New Items
- GitHub trending page: No Claude-specific repos in top weekly trending (dominated by burn/Rust, stable-diffusion-webui, bun, openai-cookbook)
- Product Hunt: No fresh Claude Code tool launches found in past 72h
- HN Algolia: 403 error; search-based approach found MCP security news (already covered)
- Reddit r/ClaudeAI / r/ClaudeCode: Fetch blocked; search-based found general discussions, no specific new tools
- Simon Willison blog: 403 error
- TLDR AI / Ben's Bites / latent.space: Not searched (time efficient given enough items found)

---

## Final 15 Items for Digest

1. claude-code-v2-1-142 (new)
2. mattpocock-skills (↑ Day 2)
3. planning-with-files (new)
4. anthropic-agent-sdk-credits (↑ Day 2)
5. awesome-design-md (↑ Day 4)
6. playwright-cli (↑ Day 3)
7. addyosmani-agent-skills (↑ Day 4)
8. mobbin-mcp (↑ Day 3)
9. claude-for-small-business (↑ Day 2)
10. signadot-validate (new)
11. claude-for-legal (↑ Day 3)
12. claude-platform-aws (↑ Day 4)
13. last30days-skill (↑ Day 2)
14. claude-managed-agents-2026 (↑ Day 5)
15. mitiga-mcp-oauth-attack (↑ Day 5)
