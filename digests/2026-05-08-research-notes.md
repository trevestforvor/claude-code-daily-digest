# Research Notes — 2026-05-08

## YouTube Coverage (past 7 days)

| Creator | Video | Notes |
|---|---|---|
| @charlieautomates | "This 1 MCP Just Made AI Image & Video 100x EASIER" (~May 1, 1 week ago) | Specific MCP tool unverified — search results point to fal-image-video-mcp (8 stars) or ultra-mcp; neither meets star threshold |
| @indydevdan | "I Didn't Know You Could Use Claude Code Like This" (~May 5, 3 days ago) | Video loaded with 403; specific tools/repos unverified |
| @simonscrapes | "Build Real AI Systems With Claude Code (Step-by-Step)" (~April 17) | Outside 7-day window |
| @Chase-H-AI | No specific Claude Code video confirmed in past 7 days | Channel page loads but no video titles surfaced |
| @UICollectiveDesign | "Claude Design Isn't Just Design" and "How to Build ACTUALLY Beautiful UI With This Claude Code Skill" | Dates unconfirmed, likely older than 7 days |
| @DevelopersDigest | Blog posts May 5-6 about Claude Code, no YouTube video confirmed | No creator_buzz applied |
| @TechWithTim | No specific Claude Code video confirmed in past 7 days | |

**Virality signal:** No item this cycle confirmed covered by 2+ YouTubers from sources/youtubers.json within 7 days.

---

## Key Research Findings

### New items (not in any prior digest)

1. **Claude Code v2.1.133** (May 7, 23:49 UTC)
   - `worktree.baseRef` setting (`fresh` | `head`) — choose whether worktrees branch from `origin/<default>` or local HEAD
   - `sandbox.bwrapPath` / `sandbox.socatPath` (Linux/WSL custom binary paths)
   - Hooks receive `effort.level` and `$CLAUDE_EFFORT` env var
   - Critical fixes: parallel sessions 401 auth race condition; subagents not discovering project/user/plugin skills; subagents in isolated worktrees denied read/edit to files inside own worktree; stale worktrees from prior sessions reused; `Edit`/`Write` allow rules on drive roots; HTTP proxy + mTLS not respected for MCP OAuth

2. **Piebald-AI/claude-code-system-prompts** (10K stars, updated May 8 for v2.1.133)
   - Extracts Claude Code's complete system prompt from compiled source per release
   - Tracks 172 versions from v2.0.14 through today; CHANGELOG.md documents every prompt mutation
   - Contains: main system prompt, 24 builtin tool descriptions, Plan/Explore/Task sub-agent prompts, Ultraplan mode, CLAUDE.md generation, compaction, security review, agent creation, 25+ builtin skills

3. **hesreallyhim/awesome-claude-code** (43K stars)
   - Hand-curated list of skills, hooks, slash-commands, orchestrators, apps, plugins
   - Undergoing restructuring as of May 2026 (README_CLASSIC preserved as alternative)
   - 1,157 commits, 3.6K forks, 290 watchers — canonical community reference

4. **Owl-Listener/designer-skills** (Marie Claire Dean) (970 stars)
   - 87 skills and 27 commands across 8 plugins for Claude Code
   - Plugins: design-research, design-systems, ux-strategy, ui-design, interaction-design, prototyping-testing, design-ops, designer-toolkit
   - Endorsed publicly by Adham Dannaway on X (large design community following)
   - Install: `/plugin marketplace add Owl-Listener/designer-skills`

### Recurring items (already in past digests, still tracking)

- **alirezarezvani/claude-skills**: appeared May 5 at 13.8K; now 14.1K (+300 in 3 days) — Day 4 trending
- **n8n-mcp**: appeared May 5 at 20.1K — Day 4, still relevant (v2.50.4)
- **pal-mcp-server** (formerly zen-mcp-server): appeared May 5 at 11.5K — Day 4
- **superpowers**: 178K stars, Day 5
- **garrytan-gstack**: 82.7K, Day 6
- **cc-switch**: 61.4K, Day 6
- **oh-my-openagent**: 55K, Day 6
- **hermes-agent**: 131K, Day 5
- **career-ops**: 42.1K, Day 6
- **nanobot**: 41.6K, Day 6

### Dropped items (fading)

- claw-code (185K, Day 8+) — dropped after Day 6 in May 6; no new signal
- graphify (36.3K) — dropped
- claude-code-best-practice (47.6K) — dropped
- wshobson/agents — dropped
- awesome-agent-skills — dropped
- last30days-skill — dropped

---

## Other signals checked

- **HN**: "Claude Skills are awesome, maybe a bigger deal than MCP" thread (item 45619537) — active discussion but 403 loading
- **GitHub trending** (daily): No Claude Code-specific repos surfaced in main trending list
- **Anthropic news**: No new Anthropic blog posts today beyond what was in May 7 digest
- **Product Hunt**: Masko Code (desktop mascot for Claude Code agents) — no star count found, no install command
- **levnikolaevich/claude-code-skills**: 458 stars — too small for inclusion
- **rohitg00/awesome-claude-code-toolkit**: 1.5K stars, already in May 5 digest
- **vs-agentic** (adospace): only 27 stars — too small
- **fal-image-video-mcp**: 8 stars — too small
- **ultra-mcp**: unverified star count
