# Research Notes — 2026-10-25

## Summary

Research ran ~386s (within 20-min cap). YouTube channel searches returned only third-party aggregators; no direct channel content verified for Oct 22–25. GitHub topic searches and direct repo fetches were the primary signal. All recurring items verified against last 7 days of digests (Oct 18–24).

---

## YouTube Coverage

### @charlieautomates — Skipped
No verifiable new videos found for Oct 22–25 via web search. Site: operator returns scrapers only.

### @Chase-H-AI (Chase AI, 163k subs) — Skipped
chaseai.io blog: most recent Claude Code posts visible are from August 2026. No October uploads confirmed.

### @adrienaidesigner — Skipped
No verifiable new videos in past 7 days.

### @indydevdan (IndyDevDan, 129k subs) — Skipped
No October 2026 uploads verifiable.

### @simonscrapes (Simon Scrapes, 72k subs) — Skipped
No October 2026 content confirmed.

### @UICollectiveDesign (UI Collective, 53k subs) — Skipped
No October 2026 content confirmed.

### @DevelopersDigest (Developers Digest, 62k subs) — Skipped
No October 2026 content confirmed.

### @TechWithTim (Tech With Tim, 2M subs) — Skipped
Aggregators mention older tutorials (254k–386k views) but no new Oct 22–25 uploads confirmed.

**Note:** No creator from sources/youtubers.json could be directly verified for Oct 22–25 content. `site:youtube.com` searches consistently return aggregator mirrors rather than channel pages. No `creator_buzz` applied to any item this run.

---

## GitHub Topics: claude-code (by star count, verified Oct 25)

| Repo | Stars (approx) | Status |
|------|---------------|--------|
| morluto/rea | 382.8k | **NEW to digest** — never appeared in any prior digest |
| affaan-m/ECC | 288k+ | Day 2 (was in Oct 24) |
| NousResearch/hermes-agent | 257k+ | Day 2 (was in Oct 24) |
| DietrichGebert/ponytail | 176k | Day 4 (was in Oct 22, dropped Oct 23–24, still growing +3.1k since Oct 22) |
| farion1231/cc-switch | 148k+ | Day 3 (was in Oct 23, Oct 24) |
| nextlevelbuilder/ui-ux-pro-max-skill | 141k+ | Day 4 (was in Oct 22, 23, 24) |
| graphifylabs/graphify | 135k+ | Day 3 (was in Oct 23, Oct 24) |
| addyosmani/agent-skills | 111k+ | Day 2 (was in Oct 24) |
| stablyai/orca | 106k+ | Day 7 (was in Oct 19–24) — FADING, dropped from today |
| thedotmack/claude-mem | 104k+ | Day 3 (was in Oct 23, Oct 24) |
| panniantong/Agent-Reach | 103k+ | Day 3 (was in Oct 23, Oct 24) |
| juliusbrussee/caveman | 115k+ | Day 3 (was in Oct 23, Oct 24) |
| tt-a1i/archify | 89k+ | Day 3 (was in Oct 23, Oct 24) |
| egonex-ai/understand-anything | 88k+ | Day 3 (was in Oct 23, Oct 24) |
| rtk-ai/rtk | 85k+ | Day 3 (was in Oct 23, Oct 24) |
| cheaper-inference/OmniRoute | 81k+ | Day 3 (was in Oct 23, Oct 24) |

**New item confirmed NOT in submissions.json or any prior digest:**
- morluto/rea (382.8k stars) — REA (Reverse Engineer Anything), MCP server + CLI for reverse engineering binaries, Electron apps, APKs, .NET assemblies. Created April 14, 2026. Stars: 234k (Oct 14) → 330k (Oct 19) → 382.8k (Oct 25) = accelerating. MIT licensed. `npx rea-agents setup`.

**Recurring item re-added (was in Oct 22, dropped Oct 23-24):**
- DietrichGebert/ponytail (176k) — Laziness-first code skill. Was in Oct 22 at 172.9k; now 176k (+3.1k in 3 days = ~7k/week steady). Day 4 recurring_note.

---

## Anthropic Official

- v2.1.310 (Oct 23): latest confirmed release. Monitor tool on Bedrock/Vertex/Foundry.
- v2.1.307 (Oct 21): `/claude-api api-version`, `claude_code.safety_event` OTel event — ALREADY covered in Oct 22 digest (slug: anthropic-claude-code-v2-1-307).
- v2.1.304-309: covered in Oct 23 digest (comprehensive item).
- v2.1.311+: No release confirmed for Oct 24-25. Skip official item today.

---

## Other Sources Checked

- **Reddit/HN:** No Oct 22–25 posts found directly; search returned general guides.
- **Product Hunt:** No Oct 22–25 Claude Code launches found.
- **Forkast article on "MCP Tasks and Elicitations" (Oct 24):** Could not verify against Anthropic sources. Per web search, MCP elicitation shipped in March 2026 (v2.1.76), not newly launched. Dropping from digest.
- **Sonnet 5.5 cache read price cut ($0.10/M, was $0.20/M):** From v2.1.296 (Oct 9) — already 16 days ago, skip.
- **cloudflare/security-audit-skill (38.6k):** Was in Oct 22, now fading.
- **paperclipai/paperclip:** Skip per Oct 24 research notes (in submissions.json).

---

## Decision: Drop Today

- stablyai/orca (Day 7, no new activity signal — fading)
- Anthropic official item (nothing new since Oct 24's coverage of v2.1.310)
- MCP Tasks/Elicitations (unverified, likely old feature)
