# Research Notes — 2026-08-15

## Timer
START: 1786810113 (Unix). Elapsed at notes write: ~500s of 1200s limit.

## YouTube Coverage

Checked all 8 sources from sources/youtubers.json. YouTube direct fetching blocked — relied on web search to surface video titles and publication dates.

| Creator | Channel | Recent Claude Code Content (past 7d) | Tools/Repos Mentioned |
|---------|---------|--------------------------------------|----------------------|
| Tech With Tim | @TechWithTim | No new videos within 72h found. Last relevant: "Claude Just Got a Superpower No One's Talking About" (~Aug 8) | Not verified within 72h |
| IndyDevDan | @indydevdan | "August 2026 AI Coding Championship" (2 weeks ago) — outside 72h window. No new videos within 72h | Not applicable this run |
| Chase AI | @Chase-H-AI | "Give Me 50 Minutes, I'll Give You 1000+ Hours Of Claude Code Knowledge" posted Aug 11 (4 days ago) — borderline 72h. Mentioned: ponytail, last30days, Jarvis (all previously covered or in submissions) | ponytail (recurring), last30days (was in Aug 8/9), Jarvis/openjarvis (in submissions) |
| Charlie Automates | @charlieautomates | "Claude Code's New Upgrade Lets You Automate Any Task" (1 week ago, outside 72h). "Stop Hiring a CMO" (2 weeks ago) | No verifiable new tool mentions within 72h |
| Simon Scrapes | @simonscrapes | No recent Claude Code video found within 72h | N/A |
| UI Collective | @UICollectiveDesign | No recent content found within 72h | N/A |
| Developers Digest | @DevelopersDigest | No specific recent video found within 72h | N/A |
| Adrien AI Designer | @adrienaidesigner | No recent content found within 72h | N/A |

**Multi-YouTuber signal this week**: None confirmed within 72h. Chase AI covered ponytail (4 days ago) but that's a recurring item and just one creator.

## Key Sources Checked

- **GitHub trending** (topics/claude-code sorted by updated): Got top 20 repos with star counts
- **Claude Code changelog** (code.claude.com/docs/en/changelog): Full details for v2.1.229–v2.1.233 (Aug 12–14)
- **Anthropic blog/announcements**: Compliance API expansion (Aug 11), Claude for Government (July 7)
- **HN Algolia**: Blocked — used web search instead
- **Simon Willison**: Covered auto-mode-default (Aug 8) and Claude Opus 5 system prompt (Aug 9) — both outside 72h
- **Reddit**: Indirect via web search — no new specific repos surfaced
- **Product Hunt**: No specific August 12–15 Claude Code launches found

## New Items Found (Past 72h)

### 1. Claude Code v2.1.232 + v2.1.233 (Aug 13–14, 2026) — Anthropic
**Slug**: `claude-code-v2-1-232`
**Primary URL**: https://code.claude.com/docs/en/changelog
**Key features**:
- v2.1.232 (Aug 13): Subagent forking enabled by default (`subagent_type: "fork"` inherits full conversation + prompt cache); @-mention another Claude session by name in any prompt (uses SendMessage); GitLab secret redaction; GitLab plugin marketplace support (bare gitlab.com URLs now clone like github.com); Session naming uniqueness with auto-deduplication
- v2.1.233 (Aug 14): GitLab MR URL support in `--worktree` and `claude agents` view (MRs display as `!N`); `forward_user_identity` gateway setting for per-user spend attribution; Memory cgroup support on Linux (`CLAUDE_CODE_TOOL_MEMORY_LIMIT`); WebFetch TTL config (`CLAUDE_CODE_WEBFETCH_CACHE_TTL_MS`); **Removed todo/task-tracking tools** on Opus 4.8+/Sonnet 5/Fable 5/Mythos 5 (restore with `CLAUDE_CODE_ENABLE_TODO_TOOLS=1`)
**Categories**: anthropic

### 2. Compliance API Expansion — Claude Code + Cowork (Aug 11, 2026) — Anthropic
**Slug**: `compliance-api-cowork-code`
**Primary URL**: https://claude.com/blog/compliance-api-cowork-and-claude-code
**Key details**: Compliance API now covers Claude Cowork (desktop, web, mobile) and Claude Code (CLI + desktop). Enterprise beta. Security/compliance teams pull unified session content + metadata for audits and eDiscovery through the same Compliance API interface already used for Claude chats.
**Categories**: anthropic

### 3. VoltAgent/awesome-agent-skills (30.3K stars, updated Aug 13–14) — Community
**Slug**: `awesome-agent-skills`
**Primary URL**: https://github.com/VoltAgent/awesome-agent-skills
**Key details**: 1,497+ skills from official dev teams (Anthropic, Google, Stripe, Cloudflare, Netlify, Vercel, Figma, Microsoft, OpenAI, Trail of Bits, Sentry, Expo, HuggingFace, MongoDB, ClickHouse, HashiCorp). Anti-slop curation — "real-world skills created and used by actual engineering teams, not mass AI-generated stuff." Recent PRs include Venice.ai (20 skills), Microsoft Azure (multi-language), TestMu AI (50+ test automation). Active in August 2026 with skills like cc-thinking-skills, storyblok-skill.
**Categories**: skill

## Items Deduped Out (in recent 7-day digests or submissions.json)

| Slug | Reason |
|------|--------|
| taste-skill | In submissions.json |
| ruflo | In submissions.json |
| career-ops | In submissions.json |
| rtk | In Aug 10 + Aug 11 digests |
| headroom | In Aug 8/9/10 digests |
| open-design | In Aug 8/9 digests |
| oh-my-openagent | In Aug 14 digest |
| i-have-adhd | In Aug 14 digest |
| planning-with-files | In Aug 13/14 digests |
| agent-reach | In Aug 13/14 digests |
| learn-claude-code | In Aug 13 digest |
| nanoclaw | In Aug 13 digest |
| claude-for-government | Announced July 7 — over 72h ago; outside research window |

## Recurring Items Kept (still trending, star counts updated)

| Slug | Stars (today) | Day | Note |
|------|--------------|-----|------|
| obra-superpowers | ~272K | 4 | Top skills framework |
| andrej-karpathy-skills | ~195K | 28 | #1 CLAUDE.md framework |
| ecc | ~240K | 22 | Agent OS |
| hermes-agent | ~231K | 5 | NousResearch |
| ui-ux-pro-max-skill | ~117K | 9 | Design skill, Chase AI coverage |
| graphify | ~107K | 23 | 70x cost cut |
| ponytail | ~103K | 9 | Laziness ladder |
| caveman | ~98.4K | 22 | 65% output compression |
| claude-mem | ~90.8K | 9 | Persistent context |
| understand-anything | ~79.4K | 3 | Knowledge graph |
| kepano-obsidian-skills | ~44.9K | 4 | Obsidian CEO's skills |
| claude-code-auto-mode-default | N/A | 5 | Now live for all paid users |
