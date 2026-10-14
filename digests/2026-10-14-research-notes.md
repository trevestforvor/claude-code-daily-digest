# Research Notes — 2026-10-14

## Run summary
- Start: 2026-10-14T00:00 UTC (approx)
- Research elapsed: ~6 min at checkpoint
- Hard limit: 20 min

---

## YouTube Coverage

YouTube DNS was unreachable from this environment (`getaddrinfo ENOTFOUND www.youtube.com`) — all 8 curated channel direct fetches failed. Indirect searches were attempted for each channel.

| Creator | Handle | Result |
|---|---|---|
| Charlie Automates | @charlieautomates | No verifiable Oct 2026 videos found |
| Chase AI | @Chase-H-AI | Blog at chaseai.io has "17 Best Claude Code Plugins, Skills & CLIs" guide (no date confirmed for Oct 2026); channel has ~163k subs. No specific Oct video title found. |
| Adrien AI Designer | @adrienaidesigner | No verifiable Oct 2026 videos found |
| IndyDevDan | @indydevdan | No verifiable Oct 2026 videos found |
| Simon Scrapes | @simonscrapes | No verifiable Oct 2026 videos found |
| UI Collective | @UICollectiveDesign | No verifiable Oct 2026 videos found |
| Developers Digest | @DevelopersDigest | No verifiable Oct 2026 videos found |
| Tech With Tim | @TechWithTim | No verifiable Oct 2026 videos found |

**No creator_buzz could be verified for any item this run.**

---

## High-signal sources checked

- **GitHub topics**: claude-code-skills (2,180 repos), claude-skills (11,203 repos) — sorted by updated
- **Claude Code changelog**: code.claude.com — v2.1.299 released Oct 14
- **GitHub trending blog** (devflokers.com): DNS unreachable
- **Reddit**: No direct HN or Reddit access (hn.algolia.com DNS failure); used web search proxies
- **Anthropic news**: No Oct 2026 primary source found; secondary coverage only
- **French guide** (camilleroux.com): DNS unreachable

---

## Candidate items considered

### NEW today (not in any digest Oct 7–13)

| Slug | Stars | Status |
|---|---|---|
| shanraisshan/claude-code-best-practice | 67.5k | GitHub Trending #1 today — INCLUDE |
| Vincentwei1021/video-shotcraft | 11.9k | New, design/skills — INCLUDE |
| zenstory-ai/oh-story-claudecode | 7.6k | New, Chinese novel writing — INCLUDE |
| rebelytics/one-skill-to-rule-them-all | 3.3k | New, meta-skill — INCLUDE |
| zenstory-ai/drama-skills | 2.9k | New today, AI short drama — INCLUDE |
| amElnagdy/delegate-skills | 2.4k | New, delegate to sub-agent — INCLUDE |
| Claude Code v2.1.299 | — | Official Anthropic release Oct 14 — INCLUDE |

### Recurring (still growing)

| Slug | Stars Oct 9 | Stars Today | Growth | Action |
|---|---|---|---|---|
| cathrynlavery/diagram-design | 46.6k | 55.1k | +8.5k | INCLUDE (strongest signal) |
| thedotmack/claude-mem | 98.6k | 100.7k | +2.1k + 100k milestone | INCLUDE |
| code-yeongyu/oh-my-openagent | 68k | 70k | +2k | INCLUDE |
| tigerless-labs/autoharness | 9.7k | 11.1k | +1.4k | INCLUDE |
| storytold/photocraft | 23.8k | ~24.2k | ~+400 | INCLUDE (strong design signal) |
| nykooi1/vibe-wise | 3.1k | ~3.1k+ | slow | INCLUDE (useful) |
| FlorianBruniaux/claude-code-ultimate-guide | 5.4k | ~5.6k | ~+200 | INCLUDE |

### Dropped (fading / already in submissions.json)

| Slug | Reason |
|---|---|
| OthmanAdi/planning-with-files | Was in Oct 11 digest at 27.5k; still 27.5k today — flat, DROP |
| wanshuiyin/ARIS | Was in Oct 11 at 17.5k; still 17.5k today — flat, DROP |
| titanwings/distilly | Was in Oct 11 at 25.5k; still 25.6k today — flat, DROP |
| tt-a1i/archify | IN SUBMISSIONS.JSON — SKIP |
| sickn33/agentic-awesome-skills | IN SUBMISSIONS.JSON — SKIP |
| ayghri/i-have-adhd | IN SUBMISSIONS.JSON — SKIP |
| QingYunA/answer-me-with-html | Day 8+, likely fading, DROP |

---

## Claude Code v2.1.299 — key additions (Oct 14)

- `CLAUDE_CODE_DISABLE_FILE_MENTIONS`: passes file paths from `@` mentions, not their contents
- **Idle compaction**: conversations of 200K+ tokens idle for ~54 min are auto-compacted before cache expires — saves tokens
- `/effort` and `/fast` in agent view
- `--disallow-tools` for `claude plugin eval`
- Mod additions: `$.prompt.media`, `$.session.identity()`, `Text`/`Box` styling, `queue` door
- 131 bug fixes, 16 improvements
- MCP allow rules now scope to named server only (`mcp__a` no longer matches `mcp__a__b`)
- `UserPromptSubmit` hooks now run before skill/command expansion

---

## Notes

- No new Anthropic news releases found for Oct 2026 beyond the changelog
- diagram-design is the strongest growing item: +8.5k stars in 5 days (Oct 9→14)
- claude-mem crossing 100k is a milestone worth noting
- Two zenstory-ai repos (oh-story + drama-skills) show a pattern: fiction/creative writing niche growing rapidly
