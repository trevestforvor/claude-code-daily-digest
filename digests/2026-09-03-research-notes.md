# Research Notes — 2026-09-03

## Timer
Research started ~365s into run. Well within 20-minute cap.

## YouTube Coverage

### @Chase-H-AI (109K subs) ✅ ACTIVE
- Recent video: "The #1 Claude Code Design Skill Just Got a HUGE Upgrade" (https://www.youtube.com/watch?v=RVeCbPg0liw)
- Blog post: "Impeccable 4.0: Best Claude Code Design Skill" (chaseai.io)
- Featured: **pbakaus/impeccable** (65.2K stars) — in submissions.json, SKIP as new item but strong signal
- Also referenced Agentic OS workflow, skills stacking

### @indydevdan (129K subs) ✅ ACTIVE  
- Recent video: "Self Improving Subagents with Memory (claude code)" (https://www.youtube.com/watch?v=KoS7w--Cu94)
- Referenced: **UniM0cha/self-improving-skills** — Hermes Agent-style closed learning loop
- YouTube blocked; couldn't confirm exact tool, but self-improving-skills pattern matches

### @simonscrapes (71.8K subs) — OLDER CONTENT
- Most recent YouTube hits from Feb-June 2026 (no confirmed Sep 2026 video found)
- No specific September 2026 video surfaced in search

### @charlieautomates (8K subs) — NO RECENT MATCH
- No September 2026 content found in searches
- Was featured in graphify coverage (recurring, Day 9)

### @adrienaidesigner (4K subs) — NO RECENT MATCH
- No September 2026 content found

### @DevelopersDigest, @TechWithTim, @UICollectiveDesign — NOT CHECKED
- Ran out of time for these; larger channels may have content but not prioritized

---

## Key Findings

### Official Anthropic Updates (Claude Code 2.1.257-2.1.259)
Source: https://code.claude.com/docs/en/changelog

**2.1.259** (Sep 2, 2026):
- `managedMcpServers` org setting for HTTP/SSE MCP servers to all users
- `--permission-prompts none` for headless unattended hosts
- GitLab merge request recognition (MR !N in tool summary)
- `--json` flag for `claude plugin validate`
- Major fix: concurrent sessions no longer silently revert each other's ~/.claude.json
- Improved /workflows JSON syntax highlighting + folding

**2.1.258** (Sep 1, 2026):
- Fixed macOS 12 (Monterey) launch regression from 2.1.255

**2.1.257** (Sep 1, 2026):
- Claude Fable 5.1 (`claude-fable-5-1`) added as new default Fable model (1M ctx, $10/$50/Mtok, $0.25 cache reads)
- `timeFormat` + `timeZone` settings (12/24h, UTC, strftime)
- Containment Escape rule in auto mode (metadata-credential fetches, cross-tenant reach no longer auto-approved)
- `CLAUDE_CODE_SUBAGENT_MODEL_FORCE` env var
- First-read prompt for files outside working directories

**2.1.251-2.1.256** (late Aug):
- `PreModelSwitch` + `PostModelSwitch` hook events
- Live subagent tool call streaming to Remote Control
- Spend limit bar in `/usage`, per-session cache metrics in `/cost`
- Cross-session messaging improvements

### GitHub Trending (claude-code-skills topic, Sep 3, 2026)
1. **shanraisshan/claude-code-best-practice** — 65.6K stars, "from vibe coding to agentic engineering", updated Sep 3
2. **sickn33/agentic-awesome-skills** — 45.9K stars (up from 45.6K), updated Sep 3
3. **VoltAgent/awesome-agent-skills** — 33.7K stars, 1000+ official dev team skills, updated Sep 2
4. **OthmanAdi/planning-with-files** — 26.6K stars, crash-proof file-based planning, updated Sep 2
5. **wanshuiyin/Auto-claude-code-research-in-sleep** (ARIS) — 15.7K stars, autonomous ML research, updated Sep 3

### Known Items Skipped (in submissions.json):
- pbakaus/impeccable (65.2K stars) — Chase-H-AI coverage, strong signal but in submissions.json
- NousResearch/hermes-agent — in submissions.json

### Recurring Items from Digests (still trending):
| Slug | Stars (approx) | Day # | Status |
|------|---------------|-------|--------|
| obra-superpowers | 272K | 23 | Keep |
| mattpocock-skills | 220K | 15 | Keep |
| andrej-karpathy-skills | 209K | 4 | Keep |
| caveman | 102K | 11 | Keep |
| graphify | 112K | 9 | Keep |
| garrytan-gstack | 90K | 12 | Keep |
| understand-anything | 81K | 8 | Keep |
| claude-code-limits-sept14 | — | 6 | Keep (11 days left) |
| agentic-awesome-skills | 45.9K | 6 | Keep |
| alirezarezvani-claude-skills | 25.5K | 4 | Keep |

### Items Dropped (fading):
- claude-mem (Day 11) — drop
- cathrynlavery/diagram-design (Day 12) — drop

---

## Notes on Sources
- YouTube direct fetches blocked by egress proxy
- simonwillison.net, releasebot.io, gradually.ai, news.ycombinator.com also blocked
- Research conducted via web search only
- All star counts are from search results as of Sep 3, 2026
