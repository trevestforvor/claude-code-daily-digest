# June 2026 Catchup — Research Notes

## Summary

- **Daily digests consumed:** 29 (`digests/2026-06-01.json` through `digests/2026-06-30.json`)
- **Unique items after dedup:** 262 (deduped by `slug`)
- **Total raw item-appearances across the month:** 293

## Top 5 most-recurring items

1. **antigravity-awesome-skills** (`antigravity-awesome-skills v12.9.0 — Design Skills Drop for 1,646-Skill Cross-Agent Catalog`) — 4 appearances (2026-06-01, 06-05, 06-13, 06-19)
2. **ARIS (Auto-Research-In-Sleep)** — 3 appearances
3. **last30days-skill** — 3 appearances
4. **alirezarezvani/claude-skills** — 3 appearances
5. **levnikolaevich/claude-code-skills** — 3 appearances

## Anomalies

- **Missing digest date:** `2026-06-08` has no corresponding daily digest file — the month otherwise has full coverage (29 of 30 possible days).
- **Duplicate slugs with different names across appearances (24 items):** these are expected/by-design — the consolidation keeps the *last* (freshest) name/hook per slug, per the task spec. Notable examples include version-bump retitles (`antigravity-awesome-skills` appeared under 4 different titles as it moved v12.0.0 → v12.9.0; a separate `antigravity-awesome-skills-v13` slug was used for the v13.0.0 relaunch), star-count updates (`alirezarezvani-claude-skills`, `rohitg00-awesome-claude-code-toolkit`), and countdown-style hook rewrites for the June 15 Agent SDK billing story (`anthropic-june15-agent-sdk-billing`, 3 distinct headlines as the date approached). No cases were found where the same slug pointed to genuinely different projects.
- No within-day duplicate slugs were found in any single daily digest file.
