# Research Notes — 2026-10-19

## Sources checked
- GitHub topics: claude-code, claude-skills
- github.com/trending (weekly)
- Anthropic official changelog (code.claude.com/docs/en/changelog)
- YouTube channel searches (charlieautomates, Chase AI, IndyDevDan, simonscrapes, UI Collective, DevelopersDigest, TechWithTim)
- Reddit r/ClaudeAI, r/ClaudeCode (via web search)
- HN algolia (via web search)
- General search for Oct 2026 tools

---

## YouTube Coverage (last 7 days)

No specific October 2026 videos confirmed for any of the 8 curated YouTubers.

- **@charlieautomates**: No confirmed video found for Oct 12-19, 2026. Searches returned general roundup pages, not channel-specific results.
- **@Chase-H-AI**: Chase AI blog active (last noted post Aug 2026 on skills/MCPs). No specific YouTube upload confirmed for Oct 2026.
- **@adrienaidesigner**: Not surfaced in searches. Skipped this run.
- **@indydevdan**: No confirmed Oct 2026 video. Mentioned in roundup guides for CLAUDE.md/hooks/MCP walkthroughs but no specific upload date found.
- **@simonscrapes**: Not surfaced in searches this run.
- **@UICollectiveDesign**: Not surfaced in searches this run.
- **@DevelopersDigest**: Not surfaced in searches this run.
- **@TechWithTim**: Not surfaced in searches this run.

**creator_buzz** left empty for all items this run — no confirmed YouTuber coverage verified.

---

## Skipped from recent 7-day digests (deduped)
- morluto/rea — Oct 13 digest
- DietrichGebert/ponytail — Oct 13 digest
- addyosmani/agent-skills — Oct 13 digest
- anthropic-claude-code-v2-1-299 (idle compaction) — Oct 14 digest
- FlorianBruniaux/claude-code-ultimate-guide — Oct 14, 15, 16 digests
- JuliusBrussee/caveman — Oct 15 digest
- anthropic-claude-code-v2-1-302 (fork subagents default) — Oct 17 digest
- anthropic-claude-code-review-ga — Oct 18 digest
- paperclipai/paperclip — Oct 12, 17, 18 digests
- thedotmack/claude-mem — Oct 16, 18 digests

---

## Top candidates (fresh)

### GitHub Topics — claude-code (by stars, as of Oct 19)
| Repo | Stars | Updated | Category |
|---|---|---|---|
| farion1231/cc-switch | 146.3k | Oct 19 | tool |
| nextlevelbuilder/ui-ux-pro-max-skill | 137.5k | Oct 15 | design |
| Graphify-Labs/graphify | 128.9k | Oct 16 | skill |
| Panniantong/Agent-Reach | 99.5k | Oct 15 | cli |
| stablyai/orca | 97.9k | Oct 19 | orchestrator |
| Egonex-AI/Understand-Anything | 87k | Oct 12 | plugin |
| tt-a1i/archify | 85.8k | Oct 19 | skill |
| rtk-ai/rtk | 84k | Oct 19 | cost/token |
| shareAI-lab/learn-claude-code | 78.8k | Sep 28 | educational |
| diegosouzapw/OmniRoute | 78.4k | Oct 19 | gateway |
| alirezarezvani/claude-skills | 28.4k | unknown | skills |

### Anthropic Official Changelog (fresh, not in recent digests)
- **v2.1.296 (Oct 9)**: Sonnet 5.5 cache reads → $0.10/M (from $0.20/M). [cost]
- **v2.1.295 (Oct 8)**: `onFailure: "block"` for command/HTTP hooks; OSC 7501 terminal protocol; MCP tool description limit raised to 16K chars.
- **v2.1.300 (Oct 14)**: `/advisor` on Claude Platform on AWS; gzip compression for large API requests.
- **v2.1.301 (Oct 15)**: `CLAUDE_CODE_RETRY_WATCHDOG_MAX_USAGE_LIMIT_WAIT_MS`; `%` motion in vim mode; OTel tool_decision events.

---

## Key findings
- **DESIGN winner**: nextlevelbuilder/ui-ux-pro-max-skill (137.5k stars) — full design system generator, supports React/Tailwind/SwiftUI/Flutter, auto-activates on UI requests.
- **COST winner**: rtk-ai/rtk (84k stars) — CLI proxy that cuts 60-90% token use on dev commands. Pairs well with Caveman (already covered Oct 15).
- **Sonnet 5.5 cache price cut** (Anthropic official) — cache reads halved to $0.10/M, massive cost improvement for long sessions.
- **cc-switch** (146.3k) — fastest-growing desktop app for multi-agent management; covers Claude Code, Codex, Gemini CLI, Grok Build.
- **Graphify** (128.9k) — local AST-based codebase knowledge graph, no embeddings, no LLM needed for indexing.
- **Orca** (97.9k) — fleet orchestrator with mobile companion app; each agent gets its own git worktree.
- **Agent-Reach** (99.5k) — gives agents access to Twitter/X, Reddit, YouTube, GitHub via one CLI.
- **Understand-Anything** (87k) — Claude Code plugin, guided tours + diff impact analysis + domain mapping.
- **Archify** (85.8k) — one `npx skills add` command turns any idea/codebase into interactive HTML diagram.
- **OmniRoute** (78.4k) — free MIT AI gateway routing to hundreds of providers with automatic fallback.
- **learn-claude-code** (78.8k) — 17-lesson harness engineering course building a nano agent from scratch.
- **v2.1.295 hooks**: `onFailure: "block"` makes hooks enforce blocking behavior, significant reliability upgrade.
