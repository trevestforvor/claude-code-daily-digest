# Research Notes — 2026-10-22

## Summary
Research completed in ~300s (within 20-min cap). GitHub trending was the primary signal source today; YouTube was not accessible (DNS failure), Reddit search returned no posts from the past 72h.

---

## YouTube Coverage (Past 7 Days)
All YouTube channel URLs (youtube.com) returned DNS errors from this environment.
Attempted web searches for all 8 curated YouTubers — results returned only secondary aggregator sites, no confirmed October 2026 video content from:

- @TechWithTim (2M subs) — no recent Claude Code video confirmed
- @indydevdan (129K subs) — no recent Claude Code video confirmed
- @Chase-H-AI (163K subs) — last known blog post ~Aug 12, 2026; no Oct video found
- @charlieautomates (8K subs) — no recent video confirmed
- @simonscrapes (71.8K subs) — no recent video confirmed
- @UICollectiveDesign (52.5K subs) — no recent video confirmed
- @DevelopersDigest (61.5K subs) — no recent video confirmed
- @adrienaidesigner (4K subs) — not searched (no time)

One video found via indirect search: "How the Claude Code team does code review" (https://www.youtube.com/watch?v=yzJogVGupvs) — appears to be Anthropic's own channel, not a curated YouTuber.

No `creator_buzz` fields populated this run.

---

## High-Signal Candidates

### From GitHub Trending (Oct 21–22, 2026)

| Repo | Stars | +Today/Yesterday | Notes |
|------|-------|-----------------|-------|
| cloudflare/security-audit-skill | 38,640 | +2,979 | #4 trending Oct 22 |
| DietrichGebert/ponytail | 172,933 | +1,949 | #4 trending Oct 21 |
| MadsLorentzen/ai-job-search | 63,400 | +3,861 | #1 trending Oct 21 |
| anthropics/knowledge-work-plugins | 31,399 | +303 | Anthropic official |
| headroomlabs-ai/headroom | 77,500 | +549 | Token compression MCP |
| stablyai/orca | 100,000 | +1,565 | Recurring (Oct 19, 20, 22) |
| lidge-jun/opencodex | 17,800 | active | Provider proxy |
| wshobson/agents | 41,500 | +93 | Multi-harness marketplace |
| anomalyco/opencode | 219,112 | +1,240 | Dropped — not Claude-specific |

### From Anthropic Changelog (Past 72h)
- v2.1.308: Bug fixes only
- v2.1.307: Added `claude_code.safety_event` OTel event, `/claude-api api-version` (moves to API 2026-10-21), Code Review `@claude review stop` command, fixed 26 bugs
- v2.1.306: Fixed `claude -p` "Not logged in" in cloud sessions
- v2.1.305: `sandbox.allowNestedUserNamespaces` on Linux, `allowedMcpServers` filtering fix

### Claude Code Review — Now GA (Oct 15, 2026)
- URL: https://claude.com/resources/articles/code-review-is-now-generally-available
- 3× faster (20min → 6-10min), new Quick/Standard/Deep depth modes
- Available: Claude Team + Enterprise
- Simon Willison blogged about it Oct 16: https://simonwillison.net/2026/Oct/16/code-review/

### From Claude Code Topics (Updated Oct 22)
- gnibu/tokens-on-track — macOS menu bar quota tracker, MCP server integration
- ElirazKed/claude-code-pr-watch — 9 stars, live PR status pane mod

---

## Dedup Check
- graphify-labs/graphify: IN submissions.json → SKIP
- ruflo (ruvnet): IN submissions.json → SKIP
- agency-agents (msitarzewski): IN submissions.json → SKIP
- sickn33/agentic-awesome-skills: IN Oct 21 digest → SKIP
- stablyai/orca: in Oct 19+20 (not Oct 21) — INCLUDE as recurring
- tigerless-labs/autoharness: IN Oct 15 digest → SKIP
- mattpocock/skills: IN Oct 15+20 digests → SKIP

---

## Sources Not Accessible
- simonwillison.net — DNS failure
- hn.algolia.com — DNS failure
- reddit.com — no recent posts returned by search
- youtube.com — DNS failure
