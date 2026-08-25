# Research Notes — 2026-08-25

**Research window:** past 72h (Aug 22–25, 2026)
**Start time:** 1787674237 (Unix epoch)

---

## YouTube Coverage

### Channels checked:
- **@indydevdan** (129K subs): Aug 21 featured the August 2026 AI Coding Championship video (Claude Code vs Codex vs Qwen3.8-Max vs Kimi K3). No new video found in Aug 22–25 window.
- **@Chase-H-AI** (109K subs): No specific video found in Aug 22–25 window.
- **@simonscrapes** (71.8K subs): Simon Scrapes' "19 Claude Prompting Mistakes" article appeared in Geeky Gadgets on Aug 24. No dedicated new video found in Aug 22–25 window.
- **@DevelopersDigest** (61.5K subs): Website (developersdigest.tech) covering Claude Code but no specific new video in window.
- **@UICollectiveDesign** (52.5K subs): No specific video found in window.
- **@TechWithTim** (2M subs): No specific video found in Aug 22–25 window.
- **@charlieautomates** (8K subs): Blog post "3-Step Agentic OS" was featured Aug 21. No new video identified in Aug 22–25 window.
- **@adrienaidesigner** (4K subs): No specific video found in window.

**YouTube note:** YouTube domain is blocked by the network proxy; channel pages could not be fetched directly. Signal from YouTube was gathered via web search results instead. None of the curated creators had a clearly identifiable new video in the Aug 22–25 window. No creator_buzz signals to assign today.

---

## Key Findings (Aug 22–25, 2026)

### Top Story (NEW)
- **Claude Code v2.1.243 + v2.1.245** (Aug 25, today): Biggest Anthropic release in weeks. New `modelPicker` setting curates /model picker with ordered, labeled list (any model ID including Vertex/Bedrock). `promptCacheTtl` + `subagentPromptCacheTtl` let API/cloud users keep 1-hour cache on main conversation while subagents run at 5 min — a real cost lever. `modelPricing` managed setting uses org's contracted rates instead of list price for /cost, status line, telemetry. Keyless sign-in (Console account). Linux binary compressed with zstd: ~75 MB from ~340 MB. 40–70 MB less memory per session. Faster startup. Loops breakdown in /usage. 30+ bug fixes. v2.1.245 (same day) fixed a startup crash on glibc 2.44 distros (Arch, CachyOS, Fedora Rawhide).

### Anthropic (ongoing)
- **Claude Code +50% weekly limits → Aug 31** — Day 3 of coverage. Now 6 days left on the extension. Still the most-discussed cost topic in the community.

### Trending recurring (still active)
- obra/superpowers (~272K stars) — Day 14
- mattpocock/skills (~220K stars) — Day 6
- andrej-karpathy-skills (~203K stars) — Day 36
- cc-switch (~129K stars) — Day 15
- ui-ux-pro-max-skill (120.5K stars) — Day 2
- caveman (101K+ stars) — Day 2 post 100K milestone
- claude-mem (91.5K stars) — Day 2
- garrytan/gstack (89.7K stars) — Day 3
- boris-cherny-80-percent-prompt — Day 2
- wshobson/agents (39.1K stars) — Day 3
- cathrynlavery/diagram-design (25.7K stars) — Day 3
- alirezarezvani/claude-skills (24.2K stars) — Day 3
- florian-claude-code-ultimate-guide (5.8K stars) — Day 3

### Investigated but not included
- **rohitg00/pro-workflow** (2.8K stars): Self-correcting memory compounding over 50+ sessions. Only 2.8K stars as of Aug 9; already covered in May 2026 digest. Excluded.
- **CalebDane7/cortex**: 250-token self-correcting memory. Star count unverified.
- **VILA-Lab/Dive-into-Claude-Code**: Academic paper, ~1.8K stars. Not enough signal.
- **Ralph Wiggum plugin**: Covered July 22, 2026. Not fresh.
- **Anthropic text watermarking**: Covered Aug 17, 2026. Not fresh.
- **agent-plugins-spec**: Covered Aug 18, 2026. Not fresh.
- **planning-with-files**: Covered Aug 19, 2026 and Aug 1. Too recent to repeat.
- **aradotso/trending-skills**: Low star count, not enough signal for today.
- **ComposioHQ/awesome-claude-skills**: Covered Aug 5–6. Not fresh.
- **2x off-peak usage promotion**: That was a March 2026 event. Not running now.

---

## Sources
- code.claude.com/docs/en/changelog (fetched directly)
- Web searches across GitHub topics, YouTube, Reddit, HN, Releasebot, Geeky Gadgets
