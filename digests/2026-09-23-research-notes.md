# Research Notes — 2026-09-23

## Timing
- Research window: ~5 min elapsed (well within 20 min cap)
- Today: 2026-09-23

---

## YouTube Coverage

### @charlieautomates (Charlie Automates) — 8,080 subs
- **"Don't Setup a Claude Code Second Brain Until You Watch This"** — published ~3 weeks ago (early Sept 2026). Covers second-brain setup approaches for Claude Code. YouTube blocked from direct fetch; confirmed via search.
- **"#1 Claude Code Repo Today (Nobody's Talking About It)"** — July 8, 2026. Highlights individual repo (unverified which one).
- **"2 Claude Code Repos NOBODY'S Talking About Yet"** — April 2026.
- No confirmed specific tool mentioned that matches this week's candidates. Noted: covers second-brain / knowledge repos frequently.

### @Chase-H-AI (Chase AI) — 109,000 subs
- Channel active; recent videos confirmed. No specific September 2026 video title confirmed for this week from search.
- Historically covers top-10 Claude Code skills/plugins weekly.

### @indydevdan (IndyDevDan) — 129,000 subs
- "Claude Code Deep Mastery" playlist active. Recent Sep 2026 content confirmed but no specific tool/repo tied to this week's items surfaced.
- "AI Summer 2026 | Claude Code & Choosing the Right Model | Week 3, Day 1" found.

### @simonscrapes (Simon Scrapes) — 71,800 subs
- Not found in this week's specific search results for Sept 20-23. No coverage to note.

### @UICollectiveDesign (UI Collective) — 52,500 subs
- No specific Sept 2026 video found in searches.

### @DevelopersDigest — 61,500 subs
- Covers Anthropic releases; expected to cover v2.1.280 / Opus 5.5 news.

### @TechWithTim — 2,000,000 subs
- No specific Sept 23 video found.

**Note:** YouTube domain is network-blocked in this environment; all YouTube data is from web search snippets only.

---

## Top Signal Items Found

### Anthropic Official
1. **Claude Code v2.1.280** (Sept 22, 2026) — Claude Opus 5.5 now the default Opus model (1M context, $4/$20/Mtok, $0.20 cache reads), mouse wheel in fullscreen skills list, dim ◯ for disabled skills, Ctrl+C dialog fix, symlinked path write fix.
2. **AGENTS.md support** (v2.1.277, Sept 18) — covered in Sept 19 digest already.
3. **anthropics/knowledge-work-plugins** — 24k stars, 11 production plugins for sales, legal, finance, data. Last updated Sept 14.
4. **anthropics/claude-plugins-official** — 36.6k stars, official curated plugin directory, external plugins must pass security/quality review.
5. **anthropics/claude-plugins-community** — read-only mirror of community plugin marketplace.

### Claude Mods Ecosystem
- **Claude Mods** (issue #91870) were covered in digests Sept 12–14. Now gated behind `CLAUDE_CODE_ENABLE_FUNCTION_HOOKS=1` in v2.1.280.
- **karanb192/awesome-claude-code-mods** — NEW tracking repo, nightly scans 72 mods, footprint scorer L0–L3. Also yash-gadodia fork.
- Community demos: Tetris-in-Claude, Mermaid inline, sensitive data hover masking, diff pane docking.

### Trending / Viral
- **fast-jev-compaction** (0x4007/fast-jev-compaction) — 4,066 stars, hit #3 on GitHub trending Sept 22 (6,070 that day). Replaces Claude Code compaction with Jev-based decision scoring: keeps tool calls verbatim, only drops stale ones. Explosion reported by Enterprise DNA Sept 19. Cost-saving.
- **ZCode** (zai-org/ZCode) — ~5k stars, #4 on trending Sept 22. Z.ai's TypeScript coding agent harness (desktop/web/terminal). Multi-model support.

### Developer Tooling
- **matt1398/claude-devtools** — 3.9k stars. Missing DevTools for Claude Code: visual session log, per-turn token attribution, subagent trees, context window timeline. `brew install --cask claude-devtools`.
- **steipete/claude-code-mcp** — 1.3k stars. Claude Code as one-shot MCP server (thin CLI wrapper, `--dangerously-skip-permissions` default). By Peter Steinberger.
- **grahama1970/claude-code-mcp-enhanced** — Enhanced Claude Code MCP with orchestration, reliability improvements, self-contained execution patterns.
- **av/skilled** — TUI skill usage dashboard across Claude Code, OpenCode, Codex, Grok, Droid. Zero network/telemetry, 30fps, 16-week heatmap.

### Curated Resources
- **ComposioHQ/awesome-claude-skills** — 74.7k stars, global rank #238. Curated list of Claude Skills with SaaS workflow integrations.
- **hesreallyhim/awesome-claude-code** — 47.6k stars. Hand-picked collection of Claude Code resources (skills, agents, status lines, devtools, plugins).
- **SKZL-AI/boris-cherny-claude-code-playbook** — 132 tips from Boris Cherny (Head of Claude Code, Anthropic), auto-updated 2-3x/day, visual dashboard with filters and timeline.

### Deduplication Notes
- Skipping: rohitg00/awesome-claude-code-toolkit (in digest), FlorianBruniaux/claude-code-ultimate-guide (in digest), function-hooks issue #91870 (in digest Sept 12-14), changelog v2.1.277-278 (in digest Sept 19), stablyai/orca (in digest Sept 21), quemsah/awesome-claude-plugins (in digest).
- Including changelog again with new slug for v2.1.280 (Opus 5.5 is a meaningful pricing/capability change).

---

## HN (72h)
- hn.algolia.com blocked in this environment; found via web search only. Most-cited recent thread: MCP server reducing context consumption 98% (HN item 47193064 — repo not confirmed, skipped).

## Product Hunt (72h)
- `/dev for Claude Code` — 6-phase SOP turning Claude Code into a Tech Lead with parallel Worker Agents. Product Hunt listing confirmed.
- `claude-devtools` — on Product Hunt.
- `Skilled` — TUI dashboard on Product Hunt listing.

## Reddit (r/ClaudeAI, r/ClaudeCode)
- r/ClaudeCode confirmed 4,200+ weekly contributors.
- Ralph Wiggum Claude Code plugin trending on social media (repo URL not confirmed).
- General fast-jev-compaction buzz noted from enterprise DNA coverage.

---

## Final Selection: 14 items
(Ranked: DESIGN → COST → Viral → Anthropic official → General)
