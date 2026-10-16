# Research Notes — 2026-10-16

## YouTube coverage (Oct 10–16 2026)

Searched top 5 by subscriber count: TechWithTim (2M), IndyDevDan (129k), Chase-H-AI (109k→163k per CreatorDB), Simon Scrapes (72k), Developers Digest (62k). `site:youtube.com` searches failed again to surface specific individual video pages — Google does not index YouTube channel uploads well via that operator.

| Creator | Finding |
|---|---|
| @charlieautomates | No confirmed new videos in past 7 days. Skipping this run. |
| @Chase-H-AI | CreatorDB reports 163k YouTube followers (updated Aug 15, 2026). Blog at chaseai.io has Claude Code guides active through Aug 2026; no new Oct video confirmed. |
| @TechWithTim | No Oct 2026 video confirmed. Beginner tutorial series active but not indexed. |
| @simonscrapes | No Oct 2026 content confirmed. |
| @DevelopersDigest | No Oct 2026 content confirmed. |
| @indydevdan | No Oct 2026 items confirmed. "Deep Mastery" playlist still active. |
| @UICollectiveDesign | Not searched this run (time constraint). |
| @adrienaidesigner | Not searched this run (time constraint). |

**Cross-YouTuber viral signal**: No items confirmed covered by 2+ sources/youtubers.json creators this week. No creator_buzz boost applied.

## New items found (not in submissions.json or past 7-day digests)

### mvanhorn/last30days-skill
- GitHub: https://github.com/mvanhorn/last30days-skill
- MIT-licensed Python agent skill. Install `/last30days` as MCP bundle or via npx skills add.
- Researches any topic across Reddit, X, YouTube, HN, Polymarket, and web → synthesizes cited summary.
- 63,449 stars and 5,529 forks as of 2026-10-03. v3.26.0 published Oct 1, 2026.
- Notable security note: bundles Python/shell helpers; optional API keys/browser cookies needed for some sources.
- Install: `npx -y skills add mvanhorn/last30days-skill --agent claude-code`
- Source: ossinsight.io, explainx.ai, claudeskills.info, anavem.com
- Category: skill, mcp

### Piebald-AI/claude-code-system-prompts
- GitHub: https://github.com/Piebald-AI/claude-code-system-prompts
- Tracks all Claude Code system prompts with token counts. Updated within minutes of each Claude Code release.
- Covers v2.1.300 (Oct 14, 2026). 515 prompts listed. 27 built-in tool descriptions + sub-agent prompts.
- A reference tool (not installable), but widely used by Claude Code hackers/plugin authors.
- Source: sourcepulse.org, skillsindex.dev, claudedigest.com
- Category: reference

## Claude Code release notes (Oct 2026)
- v2.1.301 (Oct 15, 2026): Fixes retry behavior and VS Code diagnostics.
- v2.1.299 (Oct 13-14): Various bug fixes. (Already in Oct 14 digest as anthropic-claude-code-v2-1-299)
- v2.1.293: Default switched to Haiku 5.5 (1M context window).
- v2.1.287: Introduced Claude Mods (small TypeScript functions to customize Claude Code behavior). "You Should Know" mod opt-in.

## Dedup results for recurring items (Oct 13-15 digests checked)
Items carrying forward from Oct 15 digest (all verified still-trending based on star trajectories):
- cathrynlavery-diagram-design (Day 10 today)
- thedotmack-claude-mem (Day 3 at 100k milestone)
- shanraisshan-claude-code-best-practice (GitHub Trending #1)
- code-yeongyu-oh-my-openagent (Day 9)
- tigerless-labs-autoharness (Day 9)
- vincentwei1021-video-shotcraft (Day 3)
- florianbruniaux-claude-code-ultimate-guide (Day 8)
- nykooi1-vibe-wise (Day 9)

Day-2 items (first appeared Oct 15, so Day 2 today):
- wheresryan22-anatomy, lowenbjer-terse, mattpocock-skills, obra-superpowers, affaan-m-ecc
