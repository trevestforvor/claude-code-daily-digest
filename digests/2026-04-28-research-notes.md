# Research Notes — 2026-04-28

## YouTube Coverage

### @indydevdan (129k subs)
- "Dive into Claude Code: The Design Space of Today's and Future AI Agent Systems (Apr 2026)" — 1 week ago (https://www.youtube.com/watch?v=HRI34v68igw). Video covering the arXiv paper 2604.14228 by VILA Lab. Not confirmed as IndyDevDan's own video; appeared in searches mixing channels.
- No other clearly new IndyDevDan videos in past 72h confirmed.

### @Chase-H-AI (109k subs)
- "Top 10 Claude Code Skills, Plugins & CLIs (April 2026)" — 3 weeks ago (already covered in prior digests via superpowers, ui-ux-pro-max, agent-browser items)
- "New Shopify AI Toolkit: Claude Code Setup + Demo (April 2026)" — 2 weeks ago. Covers Shopify + Claude Code integration. Not enough detail to safely include a specific tool.
- No clearly new Chase-H-AI videos in past 72h confirmed.

### @charlieautomates (8k subs)
- No clearly new videos past 72h confirmed; last covered items (graphify, routines) already in digests.

### @simonscrapes (71.8k subs)
- "Every Claude Code Memory System Compared (So You Don't Have To)" — 5 days ago. Comparison of memory systems (claude-mem, graphify, and others). Already covered those tools in prior digests.
- "Master Claude Design in One Video (Full Course)" — yesterday's digest already included this.

### @UICollectiveDesign, @DevelopersDigest, @TechWithTim
- No clearly new Claude Code-specific videos past 72h confirmed.

## Summary: No YouTuber 2x boost applies today (no single tool covered by 2+ curated YouTubers in past 7 days that isn't already in prior digests).

---

## Key Research Findings

### Anthropic Official (Week 17 — April 20–24, v2.1.114→v2.1.119)
1. **/ultrareview** — Research preview. Multi-agent fleet in cloud reviews branch/PR, independently verifies each finding. 3 free runs for Pro+Max through May 5, then $5–20 as extra usage. `claude ultrareview` for CI. Requires claude.ai auth; not on Bedrock/Vertex/Foundry.
2. **Session Recap (/recap)** — Auto one-liner on returning to a terminal session. Configurable in /config; `/recap` on demand.
3. **Custom Themes (/theme)** — v2.1.118. Named color themes from /theme picker or ~/.claude/themes/ JSON. Plugins can ship themes.
4. **Claude Code on the web redesign** — New look for claude.ai/code. Sessions sidebar, drag-and-drop. (Less novel given prior routines/desktop coverage.)

### Anthropic Official (v2.1.121 — April 28, today)
- `alwaysLoad` option for MCP server config (skips tool deferral)
- `claude plugin prune` (removes orphaned auto-installed deps)
- Type-to-filter in `/skills`
- `PostToolUse` hooks can replace tool output for all tools
- MCP servers auto-retry up to 3x on transient startup errors
- Worktree switching
- PreCompact hook blocking
- Background plugin monitors
- `/proactive` alias

### Anthropic Engineering Postmortem (April 23–24)
- 3 root causes for March–April quality regression: (1) caching bug clears thinking every turn after idle (March 26), (2) reasoning effort silently downgraded high→medium (March 4, reverted April 7), (3) verbosity-reduction prompt hurt coding (April 16, reverted April 20). Covered by Simon Willison (simonwillison.net/2026/Apr/24/) and HN item #47878905. All fixed.

### Community Tools
- **VILA-Lab/Dive-into-Claude-Code** — 841 stars. arxiv 2604.14228. "1.6% of Claude Code is AI decision logic, 98.4% is deterministic infrastructure." Companion repo with design guidance for agent builders. YouTube video posted ~1 week ago.
- **vecartier/cc-beeper** — 161 GitHub stars, 220 Product Hunt upvotes (#6 on April 15). macOS widget, 8 state indicators, voice input (WhisperKit+Kokoro), 4 auto-approval presets, global hotkeys. 100% Swift, macOS 14+, no telemetry.
- **VoltAgent/awesome-agent-skills** — 19.2k stars. 1,100+ agent skills from official dev teams (Anthropic, Google, Vercel, Stripe, Cloudflare, Netlify, Microsoft, HuggingFace, Figma). officialskills.sh. "Hand-picked, not AI-slop generated."
- **jeremylongshore/claude-code-plugins-plus-skills** — 2k stars. 423 plugins, 2,849 skills, 177 agents. ccpi CLI package manager, tonsofskills.com. 18+ categories, MIT-licensed, updated daily by GH Actions.
- **rohitg00/awesome-claude-design** — 399 stars. DESIGN.md files across 9 aesthetic families. Launched April 17 alongside Claude Design.

### Dedup Check (skipped per submissions.json + last 7 days digests)
Already covered (skip): openwolf, lyra-2, hyperframes, voxcpm, open-higgsfield-ai, claude-code-local, open-pencil, free-claude-code, taste-skill, impeccable, emil-kowalski-skill, anthropic-courses, archon, anthropic-theme-factory, anthropic-brand-guidelines, kepano-obsidian-skills, remotion, minimax-m2, modly, varlock, openscreen, mirofish, 3dsvg, superpowers, ui-ux-pro-max-skill, agent-browser, googleworkspace-cli-gws, claude-code-ultraplan, anthropic-cli-ant, cc-v2-1-119-120-regressions, ctx-cross-agent, hesreallyhim-awesome-claude-code, claude-code-changelog-marckrenn, gws-claude-plugin, graphify, claude-code-routines, claude-mythos-preview, codeburn, caveman, everything-claude-code, zilliztech-claude-context, claw-code, code-review-graph, claude-mem, get-shit-done, almanac-mcp, claude-code-best-practice, chase-h-ai-8-skills-2026, simonscrapes-master-claude-design
