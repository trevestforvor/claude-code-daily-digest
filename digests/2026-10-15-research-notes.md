# Research Notes — 2026-10-15

## YouTube coverage (Oct 8–14 2026)

Searched top 5 by subscriber count: TechWithTim (2M), IndyDevDan (129k), Chase-H-AI (109k), Simon Scrapes (72k), Developers Digest (62k). `site:youtube.com` searches failed to surface individual video pages (Google does not index YouTube well via site: operator). Fell back to secondary blog/transcript mirrors.

| Creator | Finding |
|---|---|
| @charlieautomates | No confirmed new videos in past 7 days. Skipping this run. |
| @Chase-H-AI | Blog shows Claude Code guides from Aug/Jul 2026; no confirmed Oct 2026 video. |
| @TechWithTim | Beginner tutorial series active but no new Oct 2026 video confirmed. |
| @simonscrapes | Referenced a non-coding Claude Code workflow guide (no Oct 2026 date confirmed). |
| @DevelopersDigest | MCP vs. Skills comparison blog post; no confirmed Oct 2026 video. |
| @indydevdan | Claude Code Deep Mastery playlist active; no Oct 2026 items confirmed. |
| @UICollectiveDesign | Not searched this run (time constraint). |
| @adrienaidesigner | Not searched this run (time constraint). |

**Cross-YouTuber viral signal**: No items confirmed covered by 2+ sources/youtubers.json creators this week. No creator_buzz boost applied.

## New items found (not in submissions.json or past 7-day digests)

### wheresryan22/anatomy
- Created Oct 8, 2026. ~6,500 stars by Oct 12 (4 days). Very fresh and viral.
- Produces interactive isometric SVG + WebGL artifacts from a one-line text brief.
- `/anatomy <brief>` slash command. Standalone HTML + SVG + React/Next.js outputs.
- v1.0 released Oct 10, 2026. MIT.
- Install: `npx skills add wheresryan22/anatomy -g -a claude-code`
- Source: ccleaks.com (Oct 11), wavect.io (Oct 12), kunalganglani.com blog
- Category: design, skill

### lowenbjer/claude-terse (terse plugin)
- New Claude Code plugin by Karl Lowenbjer.
- 46–54% fewer words in replies; 32–51% lower API cost on Fable 5.1 + Opus 5.5.
- MIT, v1.2.2. Applies writing rules across replies, docs, commits, subagent output.
- Install: `/plugin marketplace add lowenbjer/claude-terse` then `/plugin install terse@terse`
- Source: everydev.ai, zeli.app, trendshift.io/repositories/277690
- Category: cost

### drona23/claude-token-efficient
- Single CLAUDE.md with 11 brevity rules. Zero code, zero hooks.
- Claims 63% output token reduction (independent review: ~40%). 5.7k stars, +15/day Oct 2026.
- Last code push Jun 16, 2026 but still trending in cost-reduction roundups.
- Install: `curl -o CLAUDE.md https://raw.githubusercontent.com/drona23/claude-token-efficient/main/CLAUDE.md`
- Source: gittrend.io, computingforgeeks.com
- Category: cost

### obra/superpowers
- Jesse Vincent's plan-first agentic skills framework. MIT.
- 270k+ stars (Sep 4: 282k, Oct 4: 295k — one source). Listed on Anthropic official marketplace.
- "Superpowers" bucket enforces planning before coding. 14+ skills.
- Install: `npx skills add obra/superpowers --skill using-superpowers`
- Source: productize.life, skillselion.com, awesomeclaudeskills.com
- Category: skill, viral
- Note: Long-running repo, likely covered in older digest (>7 days). Recurring trending.

### mattpocock/skills
- Matt Pocock (Total TypeScript) personal skills repo. MIT.
- Stars grew 58.5k (May) → 279k (Oct) — massive recent growth.
- 38 skills including TDD, grilling, git-guardrails, code review, debugging.
- Install: `/plugin install mattpocock-skills` (managed, auto-updates) or `npx skills@latest add mattpocock/skills` (editable). Not both.
- Source: mer.vin, mcp.directory, geekbye.com, devpik.com
- Category: skill, viral

### affaan-m/ECC (Everything Claude Code)
- Agent harness performance optimization system. MIT. v2.2.3 (Oct 1, 2026).
- 272k+ stars (Oct 3). Skills, instincts, memory, security, research-first development.
- Works with Claude Code, Codex, Opencode, Cursor and beyond.
- Source: github.com/affaan-m/ecc, pasqualepillitteri.it (Jun), enterprisedna.co (Jul)
- Category: skill, viral, cost
- Note: Long-running repo, likely covered in older digest (>7 days). Recurring trending.

### juliusbrussee/caveman
- Text compression skill pack. 9 skills, 563k total installs.
- lite to ultra modes: lite drops filler words; ultra writes bare fragments + tables.
- Skills: caveman-compress, caveman-commit, caveman-review, caveman-help, others.
- Install: `npx -y skills add juliusbrussee/caveman --skill caveman-help --agent claude-code`
- Source: claudemarketplaces.com, claudepluginhub.com (trending this week)
- Category: cost

## Still trending from recent digests (eligible for recurring_note)

| Slug | Last Known | Status |
|---|---|---|
| cathrynlavery-diagram-design | 55.1k stars, Day 8 (Oct 14) | Still #1 ecosystem. Day 9. |
| thedotmack-claude-mem | 100.7k stars (Oct 14) | Crossed 100k, still growing. |
| code-yeongyu-oh-my-openagent | 70k stars (Oct 14) | Active development. |
| tigerless-labs-autoharness | 11.1k stars (Oct 14) | +1.4k since Oct 9, steady. |
| shanraisshan-claude-code-best-practice | 67.5k stars (Oct 14) | GitHub #1 trending. |
| florianbruniaux-claude-code-ultimate-guide | 5.6k stars (Oct 14) | Active. |

## Other notable findings
- Claude Haiku 5.5 is now the default model in Claude Code (v2.1.293, Oct 7) — covered Oct 10 digest.
- Claude Code v2.1.299 covered in Oct 14 digest.
- Claude Mods (v2.1.287, Oct 1) covered in an earlier week digest.
- cxpak (barnett-studios/cxpak) — MCP server with 26 codebase intelligence tools via `cxpak serve --mcp .`. Limited data, not enough to verify for inclusion.
- AgriciDaniel/claude-youtube — YouTube growth skill; in slug list via jakeschincariol-youtube-agent-skill similarity. Skipped.
- No 2026-10-13/14 Anthropic changelog entry beyond v2.1.299.
