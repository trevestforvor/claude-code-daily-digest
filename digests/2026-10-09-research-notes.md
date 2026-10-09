# Research Notes — 2026-10-09

## Summary
Research window: ~7 minutes elapsed. Parallel WebSearch across GitHub trending, Reddit r/ClaudeCode, Hacker News, Product Hunt, and secondary aggregators. Many results returned third-party aggregators rather than primary GitHub/YouTube pages; all unverified primary URLs are flagged below.

---

## YouTube Coverage (Oct 7–9)

| Creator | Handle | Subs | Oct 7–9 Content Found |
|---|---|---|---|
| Charlie Automates | @charlieautomates | 8.1k | None confirmed |
| Chase AI | @Chase-H-AI | 109k | None confirmed for Oct 7–9 (last confirmed: Ponytail and Context Mode) |
| Adrien AI Designer | @adrienaidesigner | 4k | None confirmed |
| IndyDevDan | @indydevdan | 129k | None confirmed for Oct 7–9 (last confirmed: jevgrep Oct 3–4) |
| Simon Scrapes | @simonscrapes | 71.8k | None confirmed |
| UI Collective | @UICollectiveDesign | 52.5k | None confirmed |
| Developers Digest | @DevelopersDigest | 61.5k | None confirmed for Oct 7–9 |
| Tech With Tim | @TechWithTim | 2M | None confirmed |

Note: site:youtube.com searches returned third-party aggregator pages only; no curated YouTuber had verified fresh Oct 7–9 Claude Code content. Skip creator_buzz for all items this run.

---

## Dedup Check

### Already in submissions.json (skip all)
repomix, obsidian-mind, hermes-desktop, claude-swarm, cocoindex, goose, mempalace, vibeyard, accomplise, halo, etc. (full list in submissions.json).

### Already in digests/2026-10-08.json (Day 1 → Day 2 today)
- storytold-photocraft (23.8k) → Day 2
- nykooi1-vibe-wise (3.1k) → Day 2
- jakeschincariol-replica-skill (1k) → Day 2
- alchaincyf-huashu-art-motion (2.3k) → Day 2
- openai-math (11.7k) → Day 2
- facebookincubator-muse-gadget-sdk (1.7k) → Day 2 (low signal, borderline)
- anthropic-claude-code-v2-1-293 → already covered; today has v2.1.294–295
- ox-security-mcp-audit-2026 → Day 2 (still resonating)
- kargulstudio-sales-crm (1.7k) → Day 2
- qingYunA-answer-me-with-html (2.2k) → Day 3

### Already in digests/2026-10-07.json (Day 1 → Day 3 if still strong, else drop)
- cathrynlavery-diagram-design: 44.7k → 46.6k — KEEP (strong Day 3)
- thedotmack-claude-mem: 97.5k → 98.6k — KEEP (strong Day 3)
- morluto-rea: was dropped Oct 8; skip re-entry
- ayghri-i-have-adhd: dropped Oct 8; skip
- othmanadi-planning-with-files: dropped Oct 8; skip
- cloudflare-security-audit-skill: dropped Oct 8; skip
- trycua-cua: dropped Oct 8; skip
- nvidia-skills: dropped Oct 8; skip
- feder-cr-dots: dropped Oct 8; skip
- nanaism-yomiyasu: dropped Oct 8; skip
- copilotkit-opendots: dropped Oct 8; skip

### Items from Oct 4–6 digests (drop — 4+ days, fading)
- ponytail: 8+ days, drop
- caveman: 8+ days, drop
- ui-ux-pro-max-skill: 9+ days, drop
- jevgrep: 9+ days, drop
- affaan-m-ecc: 9+ days, drop
- graphify: 9+ days, drop
- addyosmani-agent-skills: 9+ days, drop
- context-mode: 3–4 days — already fading after Oct 6 Day 1, skip
- mattpocock-skills: same, skip
- panniantong-agent-reach: same, skip
- rehan-remade-universal-modder: Day 5 on Oct 6, drop

---

## Fresh Candidates (not in any recent digest)

### 1. tigerless-labs/autoharness — FRESH
- **URL**: https://github.com/tigerless-labs/autoharness (secondary source; unverified primary)
- **Stars**: ~9.7k (July snapshot per secondary source)
- **Signal**: Product Hunt #1 launch (date unconfirmed). Self-learning skill layer: observes actual Claude Code sessions, extracts behavioral patterns, generates SKILL.md updates. MIT. CORE-Bench vendor claim: 42% → 78% after 50 sessions.
- **Category**: skill, cost
- **Install**: `/plugin marketplace add tigerless-labs/autoharness` + `/plugin install autoharness@autoharness`
- **Caveat**: Star count and Product Hunt date from secondary source only.

### 2. code-yeongyu/oh-my-openagent — FRESH
- **URL**: https://github.com/code-yeongyu/oh-my-openagent (secondary source)
- **Stars**: ~68k
- **Signal**: Updated Oct 9; v4.19.4; npm package. Multi-harness orchestration layer for Claude Code, Cursor, Codex, Gemini CLI, OpenHands. One config file drives all. YAML-defined agent topology.
- **Category**: plugin
- **License**: SUL-1.0 (non-permissive — worth noting)
- **Install**: `npx oh-my-openagent@latest`
- **Caveat**: Star count from secondary aggregator; SUL-1.0 restricts commercial use.

### 3. FlorianBruniaux/claude-code-ultimate-guide — FRESH
- **URL**: https://github.com/FlorianBruniaux/claude-code-ultimate-guide (secondary source)
- **Stars**: 5.4k
- **Signal**: 430K+ lines, v3.44.1. Updated Oct 7. Ships as queryable MCP server: `npx -y claude-code-ultimate-guide-mcp@latest`. Ask Claude to query it from within a session.
- **Category**: skill, marketplace
- **Install**: `npx -y claude-code-ultimate-guide-mcp@latest`

### 4. trendsmcp-ai/Trends-MCP — FRESH
- **URL**: https://github.com/trendsmcp-ai/Trends-MCP (secondary source)
- **Signal**: Live trend data from 25+ platforms (Google Trends, YouTube trending, Reddit hot, Amazon bestsellers, Wikipedia trending). 100 req/day free tier from trendsmcp.ai. Gives Claude Code real-time trend data for market research, content strategy, and competitor analysis.
- **Category**: mcp
- **Install**: `npx @trendsmcp/trends-mcp@latest`
- **Caveat**: URL and star count unverified.

### 5. Claude Code v2.1.294–295 — FRESH ANTHROPIC
- **URL**: https://code.claude.com/docs/en/changelog (official)
- **Signal**: Per secondary source (munderdiffl.in "Agent Tools Today Oct 9"): v2.1.295 adds hook option to block an action if the hook cannot start or times out. v2.1.294 details unclear. Highly plausible given Anthropic's cadence.
- **Category**: anthropic
- **Caveat**: Version numbers from one secondary source; official changelog is the only canonical source.

---

## Star Count Updates (recurring items)

| Item | Oct 7 | Oct 8 | Oct 9 (est.) | Change |
|---|---|---|---|---|
| cathrynlavery/diagram-design | 44.7k | 45.5k | ~46.6k | +1.9k in 2 days |
| thedotmack/claude-mem | 97.5k | 98.1k | ~98.6k | +1.1k in 2 days |
| qingYunA/answer-me-with-html | 2.0k | 2.2k | ~2.3k | Still trending Day 3 |

---

## Items Considered But Dropped

- **facebookincubator-muse-gadget-sdk**: Day 2, 1.7k stars — low signal, gadget SDK not Claude Code specific. Drop.
- **morluto/rea**: Was dropped after Oct 7 Day 1 in Oct 8 digest — don't re-add.
- **ox-security-mcp-audit-2026**: Day 2 — security story still resonating, keep briefly.
- **openai-math**: Day 2, 11.7k — not Claude Code specific but largest viral AI signal; include for context.
