# Research Notes — 2026-11-03

## Network constraints
- youtube.com: BLOCKED (not in session's allowed network domains)
- simonwillison.net: BLOCKED
- hn.algolia.com: BLOCKED
- docs.anthropic.com: BLOCKED (fetched via code.claude.com instead)
- GitHub, code.claude.com: accessible

---

## YouTube Coverage

**All 8 creators checked via web search (youtube.com blocked for direct fetch)**

- **@charlieautomates** (8k subs): Web search found no November 2026 specific videos. No clips covering this week's items found. SKIP this run.
- **@Chase-H-AI** (109k subs): chaseai.io blog was found but no YouTube videos from November 2026 identified. SKIP.
- **@adrienaidesigner** (4k subs): Not specifically searched. No YouTube access. SKIP.
- **@indydevdan** (129k subs): Web search found no November 2026 videos. SKIP.
- **@simonscrapes** (72k subs): Not specifically searched. YouTube blocked. SKIP.
- **@UICollectiveDesign** (52k subs): Not searched. SKIP.
- **@DevelopersDigest** (62k subs): Not specifically searched. SKIP.
- **@TechWithTim** (2M subs): Not specifically searched. SKIP.

**Note:** YouTube is inaccessible from this session. All creator coverage is unverified this run. No `creator_buzz` populated.

---

## GitHub Topics Analysis (claude-code, claude-skills)

Top 20 by stars from `github.com/topics/claude-code` (visited Nov 3):
1. morluto/rea — 426k stars, Nov 3 (**recurring Day 10+**)
2. affaan-m/ECC — 296k stars, Nov 2 (**recurring Day 5**)
3. NousResearch/hermes-agent — 260k stars, Nov 3 (recurring older)
4. DietrichGebert/ponytail — 184k stars, Oct 29 (**recurring Day 4**)
5. farion1231/cc-switch — 152k stars, Nov 3 (**recurring Day 4**)
6. nextlevelbuilder/ui-ux-pro-max-skill — 145k stars, Nov 2 (**recurring Day 4**)
7. Graphify-Labs/graphify — 142k stars, Nov 2 (**recurring Day 4**)
8. JuliusBrussee/caveman — 117k stars, Nov 3 (**recurring Day 4**)
9. stablyai/orca — 114k stars, Nov 3 (**recurring Day 4**)
10. addyosmani/agent-skills — 113k stars, Nov 1 (**recurring Day 4**)
11. thedotmack/claude-mem — 112k stars, Nov 3 (recurring, covered multiple times)
12. paperclipai/paperclip — 111k stars, Nov 3 (recurring, covered)
13. Leonxlnx/taste-skill — 109k stars, Nov 3 (recurring, covered)
14. Panniantong/Agent-Reach — 108k stars, Nov 1 (recurring)
15. tt-a1i/archify — 93.1k stars, Nov 3 (recurring)
16. Egonex-AI/Understand-Anything — 90.2k stars, Oct 26 (older recurring)
17. rtk-ai/rtk — 85.4k stars, Nov 3 (recurring)
18. cheaper-inference/OmniRoute — 84.2k stars, Nov 3 (recurring)
19. career-ops-hq/career-ops — 79.8k stars, Nov 3 (recurring)
20. shareAI-lab/learn-claude-code — 79.8k stars, Oct 27 (recurring)

From `github.com/topics/claude-skills` — items not in last 7-day digests:
- **code-yeongyu/oh-my-openagent** — 70.7k stars, Nov 3 (last featured Oct 26 = 8 days, borderline)
- **coreyhaines31/marketingskills** — 58.3k stars, Oct 31 (last featured Oct 26 = 8 days)
- **K-Dense-AI/scientific-agent-skills** — 56k stars, Nov 2 (last featured Aug 29 = 65 days, FRESH)
- **OthmanAdi/planning-with-files** — 27.9k stars, Nov 3 (last featured Jul 30 = 96 days, FRESH)
- **teng-lin/notebooklm-py** — 20.1k stars, Nov 3 (last featured Oct 11 = 23 days, FRESH)
- **latent-spaces/brag** — 20.1k stars, Oct 23 (last featured Oct 21 = 13 days, FRESH-ish)

---

## Anthropic Official

**Claude Code v2.1.317 — released Nov 3, 2026 (TODAY)**
- `onFailure: "block"` for Agent SDK hook callbacks — blocks the tool call on hook failure
- Privacy gate: Claude now asks before web or shell tools send the user's account email
- `/schedule` warns about unrequested connectors
- Cost report API endpoint: `GET /v1/organizations/analytics/cost` in the Claude apps gateway admin API
- `CLAUDE_CODE_DISABLE_NESTED_SESSION_ID` env var
- Link card in cloud sessions

**Claude Design sunset notice**: standalone Claude Design closes December 14, 2026 (first mentioned in v2.1.302 on Oct 16).

**Anthropic Courses**: Anthropic Skills donated to Agentic AI Foundation on Oct 22 (covered Oct 30 digest).

---

## HN / Reddit / Product Hunt
- hn.algolia.com blocked. Could not fetch HN directly.
- Reddit: not directly searchable. No specific posts verified.
- Product Hunt: no specific Nov 2026 launches surfaced via web search.

---

## Items Deduped Against submissions.json and Recent Digests

Skipped (in submissions.json):
- taste-skill (Leonxlnx) — already in submissions
- impeccable (pbakaus) — in submissions
- career-ops — in submissions (santifer/career-ops, also career-ops-hq variant recently featured)

Skipped (in last 7 days digests Oct 27–Nov 2):
- thedotmack/claude-mem
- paperclipai/paperclip
- Panniantong/Agent-Reach
- rtk-ai/rtk
- cheaper-inference/OmniRoute
- tt-a1i/archify
- blader/humanizer
- ChromeDevTools/chrome-devtools-mcp
- DeusData/codebase-memory-mcp
- vercel-labs/agent-desktop
- DayuanJiang/next-ai-draw-io
- oraios/serena
- JetBrains/thinkrail
- beenuar/AiSOC
- mattpocock/skills
- lightpanda-io/browser
- shareAI-lab/learn-claude-code
- conorbronsdon/avoid-ai-writing

---

## Final 15 Selected (see digest JSON)

1. anthropic-claude-code-v2-1-317 (official, Nov 3)
2. dietrichgebert-ponytail (COST, recurring Day 4, 184k)
3. nextlevelbuilder-ui-ux-pro-max-skill (DESIGN, recurring Day 4, 145k)
4. juliusbrussee-caveman (COST, recurring Day 4, 117k)
5. morluto-rea (VIRAL, recurring Day 10+, 426k)
6. affaan-m-ecc (COST/VIRAL, recurring Day 5, 296k)
7. obra-superpowers (VIRAL, recurring Day 6, ~311k)
8. coreyhaines31-marketingskills (NEW after 8d, 58.3k)
9. k-dense-ai-scientific-agent-skills (NEW after 65d, 56k)
10. othmanadi-planning-with-files (NEW after 96d, 27.9k)
11. teng-lin-notebooklm-py (NEW after 23d, 20.1k)
12. farion1231-cc-switch (VIRAL, recurring Day 4, 152k)
13. stablyai-orca (VIRAL, recurring Day 4, 114k)
14. addyosmani-agent-skills (DESIGN, recurring Day 4, 113k)
15. graphify-labs-graphify (DESIGN/infra, recurring Day 4, 142k)
