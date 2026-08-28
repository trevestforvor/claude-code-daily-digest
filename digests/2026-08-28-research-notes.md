# Research Notes — 2026-08-28

## YouTube Coverage

### Chase-H-AI (@Chase-H-AI, 109K subs)
- "The #1 Claude Code Design Skill Just Got a HUGE Upgrade" — ~4 weeks ago (late July / early Aug). Covers Impeccable v4.0 upgrade. Impeccable is in submissions.json so skip as item, but Chase covered it.
- "Turn Claude Into A Design GENIUS In 3 Simple Steps" — ~late July 2026.
- "Give Me 50 Minutes, I'll Give You 1000+ Hours Of Claude Code Knowledge (2026 Guide)" — ~mid-August (2 weeks ago).
- No new Chase video confirmed in the past 7 days for a tool not already tracked. Skipping Chase coverage this run as no new eligible item identified.

### IndyDevDan (@indydevdan, 129K subs)
- Activity recorded ~4 days ago (around Aug 24). "Claude Code is all you need in 2026" surfaced but publish date unclear from search. No specific new tool identified from IndyDevDan in the past 7 days beyond general Claude Code coverage.

### TechWithTim (@TechWithTim, 2M subs)
- "Claude Code's New Upgrade Lets You Automate Any Task (Claude Code Full Tutorial for 2026)" — posted ~3 weeks ago. Covers Claude Code's broader automation upgrades, no specific new tool to link.

### Simon Scrapes (@simonscrapes, 71.8K subs)
- Results show April 2026 and June 2026 content. No confirmed new video in the past 7 days covering a new tool/skill.

### Charlie Automates (@charlieautomates, ~8K subs)
- Blog: "Understand Anything: The Claude Code Plugin That Maps Any Codebase" — Egonex-AI/Understand-Anything already in Aug 26 digest. Blog also covers "The Karpathy Method That 10x'd My Claude Code" and "Build AI CMO With Claude Code." No new eligible tool this week.

### Developers Digest (@DevelopersDigest, 61.5K subs)
- No specific Claude Code video confirmed past 7 days.

### UI Collective (@UICollectiveDesign, 52.5K subs)
- No confirmed new video in past 7 days.

---

## Key Findings

### NEW (past 72h, not in submissions.json, not in recent digests)

**1. Claude Cowork Built-In Browser (Aug 26 2026)**
- Anthropic blog: https://claude.com/blog/cowork-built-in-browser
- Claude now has a browser built into the Cowork desktop app. No extension needed. Opens sites in a side panel. Claude navigates, reads pages, clicks, types. Separate from personal browser. Rolling out to Pro/Max/Team now, Enterprise already live.
- Coverage: The New Stack, Enterprise DNA, Gizmodo, 9to5Mac, ithinkdiff.com, AIToolsReview, explainx.ai
- Significant news — biggest Claude desktop announcement in weeks.

**2. Claude Code v2.1.247–v2.1.250 (Aug 26–28 2026)**
- Changelog: https://code.claude.com/docs/en/changelog
- v2.1.247 (Aug 26): `/claude-api cost-optimize` — profiles and optimizes Claude API spend; SendFeedback tool; /claude-api Admin API coverage
- v2.1.248 (Aug 27): `--restricted` mode (removes Bash/code/WebFetch tools, keeps file tools in cwd, refuses bypassPermissions — key for CI/sandboxed use); cross-session messaging (SendMessage/ListAgents) now works on Bedrock, Vertex, and Foundry plus telemetry-disabled configs; per-agent `experimental.cacheTtl` in frontmatter; Enterprise usage credits via /usage-credits for AWS Marketplace
- v2.1.250 (Aug 28): bug fixes and reliability
- v2.1.247 and v2.1.248 are substantive releases. Treat as combined item.

**3. MadsLorentzen/ai-job-search (New to digest, ~37.2K stars)**
- GitHub: https://github.com/MadsLorentzen/ai-job-search
- Claude Code–based job application agent. Four slash commands: /setup (profile), /scrape (find/rank postings), /apply (drafter-reviewer pattern for tailored CV + cover letter), /interview (prep questions). Was #1 GitHub trending in July 2026. First appeared publicly around Q1/Q2 2026.
- Not in submissions.json, not in any digest this week.

### RECURRING (still trending, already in rotation)

- **obra/superpowers** — ~272K stars, Day 17
- **mattpocock-skills** — ~220K stars, Day 9
- **hermes-agent** (NousResearch) — ~238K stars, Day 3 since Herald release + Streaming TTS/A2A v1.0
- **andrej-karpathy-skills** (multica-ai) — ~203K stars, Day 39
- **cc-switch** (farion1231) — ~130K stars, Day 18
- **ui-ux-pro-max-skill** (nextlevelbuilder) — 121K stars, Day 5
- **graphify** (Graphify-Labs) — ~112K stars, Day 3
- **caveman** (JuliusBrussee) — 101K+ stars, Day 5 post-100K milestone
- **claude-mem** (thedotmack) — 91.9K stars, Day 5
- **claude-code-weekly-limits-aug31** — EXPIRES AUG 31 11:59 PM PT (3 days left). Peak urgency — final warning.
- **claude-code-best-practice** (shanraisshan) — 65.2K stars, Day 2
- **agentic-awesome-skills** (sickn33) — 45.5K stars, Day 2

### SKIPPED

- Impeccable (pbakaus/impeccable) — in submissions.json. Chase-H-AI covered v4.0 upgrade but repo is submitted already.
- Trail of Bits skills (trailofbits/skills) — 6.9K stars, created January 2026. Too old and small for 72h window.
- Claude Code v2.1.241–243 — already covered in Aug 25-26 digests.
- Clawd (dcodesdev/clawd) — only 7 stars, too small.
- ECC (affaan-m/ECC) — in submissions.json and covered Aug 22.
- graphify via submissions.json — tracked as recurring via Aug 26 digest.
- hermes-agent via submissions.json — tracked as recurring via Aug 26 digest.
- discernment-nudge skill (anthropics/skills) — added Aug 17, not in 72h window.

---

## Summary

Top story today: Claude Cowork gets a built-in browser (Aug 26). Claude Code v2.1.248 adds restricted mode and cross-session messaging on Bedrock/Vertex/Foundry. Weekly limits expire in 3 days. 12 recurring items remain in the digest rotation.
