# Research Notes — 2026-08-12

## YouTube Coverage

YouTube pages are blocked by the egress proxy; channel content inferred from web search snippets only.

| Creator | Handle | Recent Content (past 7d) |
|---|---|---|
| TechWithTim | @TechWithTim | No confirmed Aug 9–12 video; general Claude Code tutorial backlog only |
| IndyDevDan | @indydevdan | No confirmed Aug 9–12 video found via search |
| Chase AI | @Chase-H-AI | "The August 2026 AI Coding Championship" (1–2 wks ago); "#1 Claude Code Design Skill Just Got a HUGE Upgrade" (1 wk ago = ui-ux-pro-max-skill v2.0, already in digest). "Turn Claude Into A Design GENIUS In 3 Simple Steps" (3 wks ago). No confirmed Aug 9–12 video covering a new tool. |
| Charlie Automates | @charlieautomates | "Stop Hiring a CMO. Build One In Claude Code Instead." (2 wks ago). No confirmed Aug 9–12 video; Understand-Anything remains the most recent distinct tool featured. |
| Simon Scrapes | @simonscrapes | No Aug 9–12 video confirmed |
| UI Collective | @UICollectiveDesign | Not checked — no results found |
| Developers Digest | @DevelopersDigest | Not checked — no results found |
| Adrien AI Designer | @adrienaidesigner | Not checked — no results found |

No item received 2+ confirmed YouTuber boosts in the past 7d. No creator_buzz applied this run.

## Anthropic Announcements

### v2.1.228 — August 11, 2026
- Fixed interactive sessions that could stop redrawing entirely after a rare internal layout error
- Fixed git/Git Bash not found on Windows when Claude Code launched from a parent of the git install
- Fixed /tui reverting to an older model when /model had been changed since the last response
- Fixed cross-session messaging sometimes starting without an inbox in the first session after install

### Auto Mode Becomes Default — August 14, 2026 (MAJOR)
- **Announcement date**: August 7–10, 2026 (Anthropic blog Aug 8, TechCrunch Aug 9, The Register Aug 10)
- **Effective date**: August 14, 2026 for new sessions
- **Affected plans**: Pro, Max, Team (opt-in for Enterprise/API; default coming to those "in the coming month")
- Claude Code will proceed without step-by-step approval unless an action is "irreversible, destructive, or aimed outside your environment"
- A classifier runs every action; when blocked, Claude usually finds a safer path or asks
- **Safety stats**: Internal test with 1,053 paid users — auto mode caught 89% of dangerous commands vs 13.6% for human manual review; humans approve 97% of prompts reflexively (approval fatigue)
- **Trajectory Labs test**: 720 prompt injection attacks attempted; auto mode blocked all 720 (GPT-5.6 Sol on Codex allowed 5.83% through)
- **Config**: `Shift+Tab` cycles permission mode; admins use `defaultMode`/`disableAutoMode` in managed settings
- **Opt-out**: users who already set a personal default may get a one-time switch prompt; org-managed defaults are unchanged
- Coverage: Anthropic blog, TechCrunch, The Register, 9to5Mac, InfoWorld, Dataconomy, Simon Willison, The New Stack, GBHackers, Enterprise DNA, BigGo Finance, KuCoin, Threads (@claudeai), HN items 49214994 and 49239021
- NOT in any prior digest — ADD

### Self-Hosted Environments (Day 3) — already in digest

### Cross-Session Messaging (Day 2) — already in digest

## Security Story (outside strict 72h window but not in prior digests)

### CVE-2026-54316 + CVE-2026-12537 — Black Hat USA, August 5–8, 2026
- Novee Security researchers showed a GitHub issue with no repo privileges could execute code on CI runners
- Claude Code: CVE-2026-54316 — command validator stripped single-quoted text before its 23 checks, allowing a payload in `git push --receive-pack` to reach the runner untouched; also leaked API key one character at a time via Hugging Face's public download counter
- Fixed in Claude Code v2.1.163 (affects 0.2.54 through 2.1.163)
- Gemini CLI: CVE-2026-12537 — OS command injection via crafted .gemini/.env file, scores 10.0; fixed in Gemini CLI 0.39.1
- Coverage: The Hacker News, GBHackers, TechApple Global, Hackread, Digital Today, CSA Labs
- Published August 7–8 — just outside 72h window (Aug 9–12); NOT in any prior digest
- Decision: SKIP from digest — outside window and security-focused (not a tool to install)

## GitHub Topics Scan

| Repo | Stars (est.) | Status |
|---|---|---|
| affaan-m/ECC | 239K | In digest Day 20 |
| NousResearch/hermes-agent | ~229K | In digest Day 3 |
| obra/superpowers | ~270K (Jul 24) | NOT in any digest — NEW candidate |
| farion1231/cc-switch | ~127K | In digest Day 6 |
| nextlevelbuilder/ui-ux-pro-max-skill | ~116K | In digest Day 6 |
| Graphify-Labs/graphify | ~105K | In digest Day 21 |
| DietrichGebert/ponytail | ~101K | In digest Day 6 |
| JuliusBrussee/caveman | ~97.7K | In digest Day 20 |
| thedotmack/claude-mem | ~90.8K | In digest Day 7 |
| addyosmani/agent-skills | ~86K | In digest Day 3 |
| multica-ai/andrej-karpathy-skills | ~195K | In digest Day 26 |
| kepano/obsidian-skills | 44.9K | In digest Day 2 |

## New Item: obra/superpowers (~270K stars)

- Creator: Jesse Vincent (@obra) + Prime Radiant
- 270,549 GitHub stars as of July 24, 2026 (June: 224K; started at 40.9K in early 2026)
- Accepted into official Anthropic Claude Code plugin marketplace January 15, 2026
- A complete software-development methodology for coding agents: brainstorm → plan → TDD (RED-GREEN-REFACTOR) → review before merge
- 14+ skills that chain together across the dev lifecycle
- Supports Claude Code, Cursor, Gemini CLI, Codex, GitHub Copilot CLI, OpenCode (v5.0+)
- Simon Willison called Jesse Vincent "one of the most creative users of coding agents" he knows
- Medium post: "I Gave Claude Code a Brain. It's Called Superpowers — and It Has 150,000 GitHub Stars for a Reason" (earlier in 2026)
- NOT in submissions.json, NOT in any prior digest → ADD
- Install: `npx skills add obra/superpowers` or `/plugin install superpowers@claude-plugins-official`

## Items NOT Meeting Bar

- rohitg00/awesome-claude-code-toolkit — 2,420 stars, too small
- cordwainersmith/Claudoscope — 201 stars, too small
- Claude Cowork Mobile Expansion — Announced July 7, outside 72h window; already old news
- Background /code-review (v2.1.218, July 22) — outside 72h window

## Dedup Check

- obra/superpowers: NOT in submissions.json (checked all entries), NOT in any recent digest → ADD
- claude-code-auto-mode-default: NOT in submissions.json, NOT in any prior digest → ADD
- All recurring items confirmed absent from submissions.json

## Items Dropped vs Yesterday

- understand-anything (Day 17, ~79.3K) — stable, no fresh news
- rtk (Day 3, ~76K) — stable, no fresh news

## Final Selection (15 items)

1. claude-code-auto-mode-default — Anthropic, NEW, HUGE
2. obra-superpowers — skill+methodology, NEW, ~270K
3. ui-ux-pro-max-skill — design+skill, Day 6, ~116K, Chase AI
4. kepano-obsidian-skills — design+skill, Day 2, 44.9K
5. graphify — design+cost, Day 21, ~105K
6. ponytail — cost+skill, Day 6, ~101K
7. caveman — cost+skill, Day 20, ~97.7K
8. claude-mem — cost, Day 7, ~90.8K
9. andrej-karpathy-skills — skill, Day 26, ~195K
10. ecc — skill+agent, Day 20, 239K
11. hermes-agent — agent, Day 3, ~229K
12. cc-switch — plugin, Day 6, ~127K
13. agent-skills — skill, Day 3, ~86K
14. claude-code-self-hosted-environments — Anthropic, Day 3
15. claude-code-cross-session-messaging — Anthropic, Day 2
