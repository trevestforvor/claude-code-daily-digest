# Research Notes — 2026-07-21

## YouTube Coverage

### Channels with confirmed content in past 7 days (July 14–21)

| Channel | Video | URL | Tools/Repos |
|---|---|---|---|
| Tech With Tim (2M) | "Claude Just Changed Completely: Here's How It Works (In 2026)" (~Jul 14) | https://www.youtube.com/watch?v=bj04doEDOY4 | Claude Instructions Template |
| Chase AI (109K) | "This Repo Just Solved The #1 Claude + Codex Headache" (~Jul 16) | https://www.youtube.com/watch?v=neK8ydl0Vlk | MCP bridging Claude + Codex (exact repo unconfirmed) |
| UI Collective (52.5K) | "Grok Just Beat Claude Code at UI Design" (~Jul 14) | https://www.youtube.com/watch?v=eQ3EhQRibpQ | Grok 4.5 vs Claude Code comparison |

### Channels with no confirmed content in past 7 days
- **IndyDevDan (129K)**: Last confirmed activity early June 2026 (AI Summer series). No Jul 14–21 videos found.
- **Simon Scrapes (71.8K)**: Last confirmed Jul 7 (MCP web scraping). No Jul 14–21 videos found.
- **Developers Digest (61.5K)**: Active blog coverage but no specific video URL found for window.
- **Charlie Automates (8K)**: Jul 7 video featured `Understand Anything` (just outside window).
- **Adrien AI Designer (4K)**: Jul 7 "Claude Design FULL Tutorial" (just outside window).

### Multi-YouTuber signal
- No item was covered by 2+ YouTubers in the strict Jul 14–21 window.
- `andrej-karpathy-skills` was covered by Charlie Automates on Jun 17 — outside 7d window.
- `Understand Anything` was Charlie's Jul 7 pick — just outside window.

---

## Anthropic News (Past 72h)

### Releases
- **v2.1.216 (Jul 20)**: Two permission bypass fixes in auto mode (compound Bash redirects + invisible Unicode in PowerShell), quadratic slowdown fix for long sessions, worktree subagent git isolation fix, AskUserQuestion continues-when-should-wait fix. 40+ bugs.
- **v2.1.215 (Jul 19)**: Already in Jul 20 digest — /verify and /code-review no longer auto-run.
- **v2.1.214 (Jul 18)**: Already in Jul 20 digest — EndConversation tool + permission hardening.

### Events
- **Cat Wu + Thariq Shihipar fireside (Jul 21, AI Engineer World's Fair)**: Claude Tag lands 65% of product engineering PRs for the Claude Code team itself. Claude Tag is "multiplayer by default" and "proactive instead of reactive." Claude Code ships features to Anthropic employees first. Video: https://www.youtube.com/watch?v=uU5Gv2h8-9g

### Science
- **Jacobian conjecture counterexample (Jul 20)**: Levent Alpoge (Anthropic, Harvard) used Claude Fable 5 to find a polynomial map C³→C³ that disproves the 87-year-old Jacobian conjecture (Keller 1939). Confirmed as a verification preprint; not yet journal-published. Biggest AI-in-science headline of the week.

### Other
- **Fable 5 now in Max + Team Premium (Jul 20)**: At 50% of weekly limits, $100 credit for Pro/Team Standard.
- **Claude Code runtime is Rust-based Bun (since v2.1.181, Jun 17)**: First major media coverage this week (Simon Willison Jul 19). Cold start 65ms vs 180ms on M2; peak memory down ~40MB. Bun was acquired by Anthropic in late 2025.

---

## New GitHub Items (not in any previous digest)

| Slug | Stars | Why notable |
|---|---|---|
| planning-with-files | 25.6K | Manus-style persistent markdown planning, crash-proof across /clear |
| codebase-memory-mcp | 33.6K | 99% token reduction for codebase queries, SQLite knowledge graph |
| headroom | 60.9K | Comprehensive context compression (20–95%), MCP + proxy + SDK |
| rtk | 72.3K | Rust Token Killer, 60–90% savings on CLI commands; JetBrains controversy |
| career-ops | 60.8K | AI job search skill, #1 GitHub trending this week, 12K forks |
| stitch-skills | 6.4K | Google's first-party Agent Skills library for Stitch MCP |

## Recurring Items Status

| Slug | Days | Stars | Status |
|---|---|---|---|
| gstack | Day 2 | 123K | Keep |
| ui-ux-pro-max-skill | Day 2 | 108K | Keep |
| ponytail | Day 2 | 87.1K | Keep |
| ecc | Day 2 | 232K | Keep |
| last30days-skill | Day 2 | 52.9K | Keep |
| addyosmani-agent-skills | Day 2 | 79.6K | Keep |
| scientific-agent-skills | Day 2 | 31.3K | Drop (better items) |
| andrej-karpathy-skills | Day 5 | 194K+ | Keep (still top by stars) |
| piebald-ai-system-prompts | Day 4 | 11.9K | Drop (lower priority) |
| anthropic-code-migration | Day 4 | - | Drop (fading) |
| claude-reflect | Day 5 | - | Drop (fading) |
| understand-anything | Day 7 | 75.5K | Drop (7th day) |
| claude-code-best-practice | Day 7 | ~63K | Drop (7th day) |
| html-anything | Day 6 | 7.8K | Drop (6th day) |

---

## Final 15 Selection

1. planning-with-files (NEW, design)
2. gstack (Day 2, design)
3. ui-ux-pro-max-skill (Day 2, design)
4. codebase-memory-mcp (NEW, cost)
5. headroom (NEW, cost)
6. ponytail (Day 2, cost)
7. rtk (NEW, cost)
8. career-ops (NEW, general/viral)
9. ecc (Day 2, general)
10. last30days-skill (Day 2, mcp/skill)
11. addyosmani-agent-skills (Day 2, skill)
12. claude-code-v2-1-216 (NEW, anthropic)
13. claude-tag-fireside (NEW, anthropic)
14. jacobian-conjecture (NEW, anthropic)
15. andrej-karpathy-skills (Day 5, design/general)
