# Research Notes — 2026-11-16

## Summary
Research window: ~5 min. Sources searched: YouTube channel searches, GitHub trending, HN, Reddit, Anthropic release notes, skill marketplaces, TechBeat/HackerNoon, product directories.

---

## YouTube Coverage

Searched all 8 curated channels for November 2026 content. The site:youtube.com operator failed to restrict results to YouTube; all results came from third-party aggregators and podcast indexes.

**Tech With Tim (@TechWithTim, 2M subs):** Most recent Claude Code content found was August 2026 — a "Free AI Agent Builders Course" announcement. No November 2026 content confirmed.

**IndyDevDan (@indydevdan, 129K subs):** Most recent content found was April 2026 — "Claude Code 2.0 Agentic Coding" video. No November 2026 content confirmed.

**Chase AI (@Chase-H-AI, 109K subs):** Most recent content found was April 2026 — "Top 10 Claude Code Skills, Plugins & CLIs (April 2026)." No November 2026 content confirmed. Chase AI blog (chaseai.io) has skill/plugin posts but none dated November 2026.

**Simon Scrapes (@simonscrapes, 71.8K subs):** Most recent content found was April 2026 — "Claude Code 2.0: Loops, Scheduled Tasks, Google Workspace, and Skills." No November 2026 content confirmed.

**Charlie Automates (@charlieautomates, 8K subs):** No November 2026 content found. Last clear mention was Feb 2026.

**UI Collective (@UICollectiveDesign, 52.5K subs):** Not specifically searched (ran out of time for all 8).

**Developers Digest (@DevelopersDigest, 61.5K subs):** Not specifically searched.

**Adrien AI Designer (@adrienaidesigner, 4K subs):** Not specifically searched.

**Note:** No items in today's digest can be confirmed as covered by any YouTuber from sources/youtubers.json in the past 7 days. `creator_buzz` is omitted from all items.

---

## Key Findings

### Design (top priority)
1. **NiazMorshed2007/reanimate** — New reverse-engineering animation skill. 5-step loop: record → spec → build → verify → repeat. Outputs CSS/Framer Motion/GSAP/three.js. WebGL/Canvas capture with `--gl`. Requires Bun 1.1+.

2. **google-labs-code/stitch-skills** — Google Labs official design-to-code skill pack. 15 skills across 3 plugins (stitch-design 6, stitch-build 5, stitch-utilities 4). Requires Stitch MCP server. ~8.7k stars.

3. **mattpocock/skills** — "Skills For Real Engineers" by TypeScript educator Matt Pocock. 27 skills: 20 engineering + 7 productivity. /grill-me interviews you before work starts. GLOSSARY.md shared vocabulary system. Re-entered GitHub trending Sep 2026.

### Marketplace / Skill Collections
4. **hackernoon/cuttlefish-agent-skills** — HackerNoon's Project Cuttlefish.MD. 2,806 license-checked skills in 9 category plugins: Dev Workflow (530), Writing & Blogging (706), Design & UI (131), Marketing & SEO (307), QA & Testing (422), Security (102), Data & Science (599), Learn Tech (8), HackerNoon Originals (1). Featured on TechBeat TODAY (11/16/2026).

5. **mvanhorn/last30days-skill** — Research skill across 30+ sources (Reddit, X, YouTube, HN, Polymarket, GitHub, arXiv, DEV.to, Bluesky, etc.), ranked by engagement not SEO. v3.31.0. 63k+ stars.

### Security
6. **elementalsouls/Claude-BugHunter** — Bug bounty + red team skill bundle. 83 skills, 15 slash commands, 681 HackerOne patterns. Categories: 58 web app (XSS/SQLi/SSRF/IDOR), 10 enterprise (M365/Okta/vCenter), 6 reporting, 5 recon, 4 methodology. Trending.

### Workflow/Game Dev
7. **Donchitos/Claude-Code-Game-Studios** — Template for building browser games. 49 agents, 75 skills, 15 hooks, 62 templates. Engines: Web, Godot 4, Unity, UE5. Brief-first → automated checks → incremental growth pipeline.

### Vendor Official
8. **NVIDIA/skills** — Official NVIDIA-verified agent skills. Signed with NVIDIA root cert, skill-card.md governance, BENCHMARK.md quality gates. Daily sync from product repos. 70+ product areas (Isaac, CUDA-X, NeMo, BioNeMo, Jetson, etc.).

### Anthropic Official
9. **Claude Code v2.1.319** (Nov 6) — MCP tasks now run in background (CLAUDE_CODE_DISABLE_MCP_TASKS=1 to opt out). New `permissions.denyInsteadOfPrompting` setting. Gateway admin controls for Claude apps. `latest` and `next` npm tags point to this release.

---

## GitHub Trending (Nov 14–16 window)
From GitRank (2026-11): hallmark (already in submissions), Claude-Code-Game-Studios, reanimate. Build with Claude "trending now": ace-step (music gen via runcomfy CLI), apple-design. Noted coddykit article on Nov 2026 trends highlighting stitch-skills and NVIDIA quality gates.

## Security News (not included as digest items — no install)
- Nov 7: Claude Code "don't ask again" file leaking passwords/keys to public GitHub repos (The Hacker News)
- Nov 15: Trojanized Claude Code extension pushed to Cursor marketplace via stolen Fireworks AI key (~5k users affected)
- Nov 16: Claude Code VS Code extension file-location hide vulnerability (unpatched at publication)

---

## Items Continuing from Yesterday's Digest

| Item | Was | Now | Still Trending? |
|------|-----|-----|-----------------|
| thedotmack/claude-mem | Day 6 | Day 7 | Yes — 83.9k stars, long GitHub weekly streak |
| addyosmani/agent-skills | Day 2 | Day 3 | Yes — 117.5k stars, broad cross-agent adoption |
| sickn33/agentic-awesome-skills | Day 3 | Day 4 | Yes — 49.8k stars, v20.8.0 this week |
| alchaincyf/huashu-art-motion | Day 2 | Day 3 | Yes — updated yesterday, 7k stars |
| zenstory-drama-skills | Day 2 | Day 3 | Yes — 4.3k stars, active |
| zenstory-oh-story-claudecode | Day 2 | Day 3 | Yes — 8.6k stars, active |

Dropped from yesterday: obra-superpowers, nuwa-skill, video-shotcraft, best-practice, awesome-agent-skills, aris, darwin-skill, one-skill-to-rule-them-all, pstack-claude (Day 2+, fading signal).
