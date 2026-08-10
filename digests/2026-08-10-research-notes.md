# Research Notes — 2026-08-10

## YouTube Coverage

YouTube domains are blocked by the egress proxy; channel pages could not be fetched directly. Coverage inferred from web search snippets only.

| Creator | Handle | Recent Claude Code Content (past 7d) |
|---|---|---|
| TechWithTim | @TechWithTim | No August 2026 content found via search |
| IndyDevDan | @indydevdan | "Claude Code Deep Mastery" playlist active; no specific Aug 2026 video found |
| Chase AI | @Chase-H-AI | No specific August 2026 video found; @Chase-H-AI covered ui-ux-pro-max-skill v2.0 earlier this week |
| Simon Scrapes | @simonscrapes | No August 2026 video found via search |
| Developers Digest | @DevelopersDigest | Not specifically checked this run |
| UI Collective | @UICollectiveDesign | Not specifically checked this run |
| Charlie Automates | @charlieautomates | "Claude Code Just Took The Job of My CMO" posted early August; "3-step agentic OS" post on blog |
| Adrien AI Designer | @adrienaidesigner | Not specifically checked this run |

No tool received 2+ YouTuber boosts this week (no viral multiplier applied).

## Anthropic Announcements

### v2.1.224 — August 7, 2026
- **Self-hosted environments** (`claude self-hosted-runner`): Teams can now run Claude Code sessions on their own infrastructure. Team + Enterprise plans. Announced at https://claude.com/blog/run-claude-code-sessions-on-your-own-compute
- **Archive plugin source**: Install plugins from a zip over HTTPS without git or npm
- **Cross-session SendMessage**: Claude Code sessions can now message each other; `ListAgents` discovers active sessions (macOS + Linux)
- Removed 200-subagent-per-session spawn cap

### v2.1.225 — August 8, 2026
- Gateway spend-limit support in usage warnings
- Bug fixes: 401 token refresh, MCP OAuth macOS, auto mode safety filter, cross-session message expiry

### Auto Mode → Default August 14
- Covered yesterday (claude-code-auto-mode-default). Still 4 days away; kept in digest.

## GitHub Topics Scan

Fetched `github.com/topics/claude-code` — top 20 results:

| Rank | Repo | Stars |
|---|---|---|
| 1 | affaan-m/ECC | 239K |
| 2 | NousResearch/hermes-agent | 228.3K |
| 3 | farion1231/cc-switch | 126K |
| 4 | nextlevelbuilder/ui-ux-pro-max-skill | 115K |
| 5 | Graphify-Labs/graphify | 105K |
| 6 | DietrichGebert/ponytail | 100K |
| 7 | JuliusBrussee/caveman | 97.2K |
| 8 | thedotmack/claude-mem | 90.3K |
| 9 | addyosmani/agent-skills | 85.6K |
| 10 | nexu-io/open-design | 82.9K |
| 11 | Egonex-AI/Understand-Anything | 78.8K |
| 12 | rtk-ai/rtk | 75.5K |
| 13 | shareAI-lab/learn-claude-code | 73.8K |
| 14 | ComposioHQ/awesome-claude-skills | 72.2K |
| 15 | Panniantong/Agent-Reach | 70.2K |
| 16 | ruvnet/ruflo | 67.6K (submissions.json — skip) |
| 17 | headroomlabs-ai/headroom | 65.8K |
| 18 | gsd-build/get-shit-done | 64.7K (ARCHIVED — skip) |
| 19 | shanraisshan/claude-code-best-practice | 64.3K |
| 20 | santifer/career-ops | 63.4K |

## Dedup Check

- `ruflo` — in submissions.json → skip
- `get-shit-done` — repo archived → skip
- `context-mode` — in submissions.json → skip
- `taste-skill` — in submissions.json → skip
- `hermes-agent` — NOT in submissions.json, NOT in last 7 days of digests → new item
- `rtk` — NOT in submissions.json, NOT in last 7 days of digests → new item
- `agent-skills` — NOT in submissions.json, NOT in last 7 days of digests → new item

## Items Dropped From Yesterday

- `oh-my-openagent` — not in today's GitHub topics top 20; Day 5; dropping
- `last30days-skill` — Day 3; borderline, dropping to make room for stronger new items
- `reverse-skill` — Day 2; short viral moment, star count (22.3K) too small to hold long-term
- `claude-code-auto-mode-default` — covered yesterday and the day before; replaced with the self-hosted environments which is newer and fresher

## Final Selection (15 items)

1. ui-ux-pro-max-skill — design, Day 4, 115K
2. graphify — design+cost, Day 19, 105K
3. open-design — design, Day 11, 82.9K
4. understand-anything — design, Day 15, 78.8K
5. ponytail — cost, Day 4, 100K
6. caveman — cost, Day 18, 97.2K
7. claude-mem — cost, Day 5, 90.3K
8. rtk — cost, NEW, 75.5K
9. headroom — cost, Day 13, 65.8K
10. claude-code-self-hosted-environments — Anthropic, NEW (Aug 7)
11. ecc — Day 18, 239K
12. andrej-karpathy-skills — Day 24, 194K
13. hermes-agent — agent, NEW, 228.3K
14. cc-switch — plugin, Day 4, 126K
15. agent-skills — skill, NEW, 85.6K
