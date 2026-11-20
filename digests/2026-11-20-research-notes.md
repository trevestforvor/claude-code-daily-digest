# Research Notes — 2026-11-20

## Summary

Research window: ~200s elapsed at first checkpoint.
Sources checked: Official Claude Code changelog, GitHub trending trackers, YouTube searches, Reddit searches, HN searches, Anthropic news, Product Hunt.

---

## YouTube coverage

Searched all 8 curated channels. No confirmed new Claude Code videos from the past 7 days were found for any channel. Notes per channel:

- **@charlieautomates** — No November 2026 video found in search results. Most recent result was a Skool community repost from earlier 2026.
- **@Chase-H-AI (Chase AI)** — 183K subs, 797 videos as of Nov 2026. Latest blog post on chaseai.io was August 2026. No specific November 2026 video confirmed.
- **@adrienaidesigner** — Not searched directly this run; no results appeared in adjacent searches.
- **@indydevdan** — No November 2026 video found. Most recent podcast listing was Feb 2026 on Claude Code multi-agent + tmux.
- **@simonscrapes** — Most recent video found was June 2026 "Team Agentic OS." No November 2026 upload confirmed.
- **@UICollectiveDesign** — Not searched directly this run.
- **@DevelopersDigest** — Not searched directly this run.
- **@TechWithTim** — Not searched directly this run.

**Creator buzz this week:** None confirmed. No YouTubers from sources/youtubers.json covered items in a verifiable way in the past 7 days.

---

## High-signal items found

### Official Anthropic
- **Claude Code v2.1.328** (Nov 19): Auto mode for Opus 4.6/Sonnet 4.6 on Bedrock/GCP/Azure/Foundry; `"onFailure": "block"` for `mcp_tool` hooks; `/code-review` now bugs+CLAUDE.md only.
- **Claude Code v2.1.329** (Nov 19): `/tasks` lists scheduled tasks + `/loop` wakeups with one-key stop; OpenTelemetry in Code Mode; trust dialog for hooks.

### GitHub trending / new tools
- **obra/superpowers** — 322k stars, complete software dev methodology by Jesse Vincent. Available via official Anthropic marketplace. NOT previously found in last-7-days digests or submissions.json.
- **lemomo-ai/lemo-opuscar** — 19k stars, 99 film styles for Claude Code generated in code by Claude Opus 5.5. MIT/CC BY-NC. Plugin install.
- **multica-ai/andrej-karpathy-skills** — 132K–205K stars. Single CLAUDE.md with Karpathy-inspired guardrails. Very high community adoption.
- **Louis-CFM/coucou** — 7.4k stars. Mac notch + iPhone lock screen companion for monitoring/approving agent requests. macOS/Windows/Linux/Android.
- **Leonxlnx/earshot** — 5.3k stars. MCP server giving agents audio I/O: describe sounds, match audio to text, generate SFX from code recipes. CPU-only, MIT.
- **haydenschmitty/floorplan** — 5.5k stars. Claude/Codex draws an interactive codebase map. MIT, plugin install.

### Recurring (still trending)
- **thedotmack/claude-mem** — Day 11 of GitHub weekly trending streak (started ~Nov 10). 83.9k stars.
- **addyosmani/agent-skills** — Day 7 (started ~Nov 14). 117.5k+ stars.
- **sickn33/agentic-awesome-skills** — Day 8 (started ~Nov 13). 49.8k stars, v20.8.0.
- **alchaincyf/huashu-art-motion** — Day 7 (started ~Nov 14). 7k stars.
- **zenstory-ai/drama-skills** — Day 7 (started ~Nov 14). 4.3k stars.
- **zenstory-ai/oh-story-claudecode** — Day 7 (started ~Nov 14). 8.6k stars.

### Items checked but excluded
- **emergent.sh skill-finder** (ydmitry) — Could not verify GitHub repo; excluded.
- **getaero-io/gtm-eng-skills** — Could not verify details; excluded.
- **qybaihe/bla** — Binary defense tool, not Claude Code-specific enough.
- **Claude-BugHunter** — Covered in 2026-11-16 digest; excluded from today.
- **obra/superpowers** star count (322k) confirmed via direct GitHub fetch.

---

## Dedup exclusions (from last 7 days)
Nov 16: reanimate-skill, google-stitch-skills, mattpocock-skills, hackernoon-cuttlefish, mvanhorn-last30days, claude-code-v2-1-319, elementalsouls-claude-bughunter, donchitos-game-studios, nvidia-agent-skills, thedotmack-claude-mem (Day 7), addyosmani-agent-skills (Day 3), sickn33-agentic-awesome-skills (Day 4), alchaincyf-huashu-art-motion (Day 3), zenstory-drama-skills (Day 3), zenstory-oh-story-claudecode (Day 3)

Nov 17: nextlevelbuilder-ui-ux-pro-max-skill, tt-a1i-archify, graphify-labs-graphify, juliusbrussee-caveman, rtk-ai-rtk, cheaper-inference-omniroute, claude-code-v2-1-326, farion1231-cc-switch, stablyai-orca, paperclipai-paperclip, panniantong-agent-reach, code-yeongyu-oh-my-openagent, egonex-ai-understand-anything

Nov 18: backnotprop-plannotator, claude-fable-5-2, yetone-magpie, affaan-ecc, alibaba-open-code-review, ag-ui-protocol, claude-code-v2-1-327, kyegomez-swarms, cursor-plugins, czlonkowski-n8n-skills, tencent-loopforge, ha-mcp, slackapi-slack-skills

Nov 19: patch-gg-pixelfx, tangency-labs-solidcraft, rehan-remade-universal-modder, microsoft-tokeneconomizer, nvidia-skillevaluator, anthropic-skills-plugins-nov30, chromedevtools-chrome-devtools-mcp, keygraphhq-shannon, jakeschincariol-replica-skill
