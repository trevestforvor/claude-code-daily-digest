# Research Notes — 2026-08-11

## YouTube Coverage

YouTube pages are blocked by the egress proxy; channel content inferred from web search snippets only.

| Creator | Handle | Recent Content (past 7d) |
|---|---|---|
| Chase AI | @Chase-H-AI | "The August 2026 AI Coding Championship" (1 wk ago) — benchmarks 4 agents; "The Claude Code + Obsidian Setup That Now Runs My Life" — likely covers kepano/obsidian-skills; "This Skill Turns Fable 5 & GPT 5.6 Into Web Design MONSTERS" — Chase blog confirms a Fable+GPT skill |
| IndyDevDan | @indydevdan | "Claude Code Deep Mastery" playlist active; no specific Aug 8–11 video found |
| Charlie Automates | @charlieautomates | Blog: "Build an Agentic OS in 3 Steps (2026 Claude Code Tutorial)"; no new YouTube video confirmed this week |
| Simon Scrapes | @simonscrapes | No August 8–11 video found via search |
| TechWithTim | @TechWithTim | No August 2026 video confirmed |
| UI Collective | @UICollectiveDesign | Not checked this run |
| Developers Digest | @DevelopersDigest | Not checked this run |
| Adrien AI Designer | @adrienaidesigner | Not checked this run |

No tool received 2+ verified YouTuber boosts in the past 7d (no viral multiplier applied). Chase AI's Obsidian video is inferred (YouTube page blocked; not confirmed for creator_buzz).

## Anthropic Announcements

### v2.1.224 — August 7, 2026 (previously noted; not yet featured as standalone digest item)
- **Cross-session messaging** (ListAgents + SendMessage): Claude Code sessions on the same machine can now discover each other and exchange text messages. macOS + Linux (incl. WSL 2); not native Windows. Covered: MacRumors, 9to5Mac, MLQ News, Medium (Jerry PM/CodeToDeploy), HN item 49222824.

### v2.1.225 — August 8, 2026
- Gateway spend-limit support in usage warnings
- Workspace trust prompt for `claude agents` in untrusted directories
- Bug fixes: 401 token refresh, MCP OAuth macOS, auto mode safety filter, cross-session message expiry in headless sessions

### v2.1.226 — August 8, 2026
- Bug fixes and reliability improvements

### v2.1.227 — August 10, 2026
- Bug fixes: feature flag subscription tier evaluation, Bash failures under `claude-code-action`, `/tui` rewind
- Slash-command menu UX improvements (blue selection, bolded matched chars)

## GitHub Topics Scan (today)

| Rank | Repo | Stars (est.) |
|---|---|---|
| 1 | affaan-m/ECC | 239K |
| 2 | NousResearch/hermes-agent | ~229K |
| 3 | farion1231/cc-switch | ~127K |
| 4 | nextlevelbuilder/ui-ux-pro-max-skill | ~116K |
| 5 | Graphify-Labs/graphify | ~105K |
| 6 | DietrichGebert/ponytail | ~101K |
| 7 | JuliusBrussee/caveman | ~97.7K |
| 8 | thedotmack/claude-mem | ~90.8K |
| 9 | addyosmani/agent-skills | ~86K |
| 10 | nexu-io/open-design | ~83K |
| 11 | Egonex-AI/Understand-Anything | ~79.3K |
| 12 | rtk-ai/rtk | ~76K |
| 13 | shareAI-lab/learn-claude-code | ~73.8K |
| 14 | ComposioHQ/awesome-claude-skills | ~72.2K |
| 15 | Panniantong/Agent-Reach | ~70.2K |
| 16 | headroomlabs-ai/headroom | ~65.8K |
| 17 | shanraisshan/claude-code-best-practice | ~64.3K |
| 18 | santifer/career-ops | ~63.4K |
| 19 | kepano/obsidian-skills | 44.9K |
| 20 | automazeio/ccpm | 8.3K |

## New Items Investigated

### Claude Code Cross-Session Messaging (Anthropic, Aug 7)
- Sessions can discover each other via `ListAgents`, send text via `SendMessage`
- macOS + Linux; only text passes (no history/files/permissions)
- Use cases: hand-off summaries, cross-session warnings when a change breaks a parallel task, question-and-answer between two agents mid-task
- Extended in v2.1.225: `SendMessage` can now reach Remote Control sessions on other machines by name
- Covered: MacRumors, MLQ News, Medium, HN 49222824
- NOT in any prior digest — confirmed new item

### kepano/obsidian-skills (44.9K stars)
- Created by Steph Ango (Kepano), CEO of Obsidian — extremely high credibility
- 5 agent skills: obsidian-markdown, obsidian-bases, json-canvas, obsidian-cli, defuddle
- "THE CEO OF OBSIDIAN JUST OPEN-SOURCED THE CLAUDE CODE SKILLS HE WAS USING PRIVATELY IN HIS OWN VAULT. 40,000 STARS IN A FEW WEEKS" (viral tweet, @chewadot)
- Chase AI posted "The Claude Code + Obsidian Setup That Now Runs My Life" this week — inferred coverage (YouTube blocked; not confirmed)
- Install: `npx skills add https://github.com/kepano/obsidian-skills`

### automazeio/ccpm (8.3K stars)
- Project management for AI agents via GitHub Issues + Git worktrees for parallel execution
- 8.3K stars / 831 forks — growing but too small for today's digest

### simonw/llm v0.32 (Released Aug 4)
- Released Aug 4 — outside 72h research window (Aug 8–11); skip as new item

### Ralph Wiggum Plugin (anthropics/claude-code/plugins/ralph-wiggum)
- Official Anthropic autonomous loop plugin — feeds same prompt back after session exit
- Active discussion on Reddit this week ("hot thing")
- No star count available separately (lives inside the claude-code repo)
- Interesting but difficult to represent without concrete metrics

## Dedup Check

- `open-design` — in prior digests; Day 12, no new news → DROP to make room
- `headroom` — in prior digests; Day 14, no new news → DROP to make room
- `claude-code-cross-session-messaging` — NOT in submissions.json, NOT in prior digests → ADD
- `kepano-obsidian-skills` — NOT in submissions.json, NOT in prior digests → ADD
- All other recurring items confirmed still absent from submissions.json

## Items Dropped vs Yesterday

- `open-design` (Day 12, ~83K) — stable, no fresh news, freeing slot
- `headroom` (Day 14, ~65.8K) — stable, no fresh news, freeing slot

## Final Selection (15 items)

1. kepano-obsidian-skills — design+skill, NEW, 44.9K
2. ui-ux-pro-max-skill — design+skill, Day 5, ~116K
3. graphify — design+cost, Day 20, ~105K
4. understand-anything — design+skill, Day 16, ~79.3K
5. ponytail — cost+skill, Day 5, ~101K
6. caveman — cost+skill, Day 19, ~97.7K
7. claude-mem — cost, Day 6, ~90.8K
8. agent-skills — skill, Day 2, ~86K
9. rtk — cost, Day 2, ~76K
10. ecc — skill+agent, Day 19, 239K
11. andrej-karpathy-skills — skill, Day 25, ~195K
12. hermes-agent — agent, Day 2, ~229K
13. cc-switch — plugin, Day 5, ~127K
14. claude-code-self-hosted-environments — anthropic, Day 2
15. claude-code-cross-session-messaging — anthropic, NEW
