# Research Notes — 2026-10-06

Research window: ~230 seconds

## YouTube Coverage

### @Chase-H-AI (109K subs)
- **"9 Hottest GitHub Repos For Claude Code (Oct. 2026)"** (uploaded ~4 days ago, URL: youtube.com/watch?v=e3vex7__Pqc) — covered trending repos including context-mode and mattpocock/skills based on plugin ranking signals.
- **"Claude AI FREE Unlimited? Get 1M API Requests for Claude Code (2026)"** (uploaded ~3 days ago) — tutorial on running Claude Code free via NVIDIA NIM, OpenRouter free-tier; not a tool/plugin recommendation, skipped from digest.

### @TechWithTim (2M subs)
- Same "9 Hottest GitHub Repos For Claude Code (Oct. 2026)" URL appeared in TechWithTim search results — likely this is a Chase AI video that cross-ranked; not a TechWithTim production. No confirmed TechWithTim original Claude Code content this week.

### @IndyDevDan (129K subs)
- Search surfaced "Self Improving Subagents with Memory (claude code)" — appears to be from earlier in 2026, no confirmed new October content this week. Skipped.

### @simonscrapes (71.8K subs)
- No confirmed new Claude Code content in October 2026. Skipped.

### @charlieautomates (8K subs)
- No confirmed new posts in the 72h window; SEED+PAUL coverage was last week (already in Oct 5 digest). Skipped.

### @adrienaidesigner (4K subs)
- No confirmed Claude Code content this week.

### @UICollectiveDesign (52.5K subs)
- No confirmed new content this week.

### @DevelopersDigest (61.5K subs)
- Blog coverage of mattpocock/skills and context-mode in trending round-up. Noted.

---

## New Candidate Items

### 1. mksglu/context-mode — 25.5k stars
- Context window optimization: sandboxes tool output (98% reduction), persists session memory, routes across 17 platforms via MCP+hooks
- Compresses 315KB sessions to 5KB (verified via MindStudio blog)
- Install: `/plugin marketplace add mksglu/context-mode` + `/plugin install context-mode@context-mode`
- Appeared in Chase AI trending round-up and DevelopersDigest
- **INCLUDE** — strong COST signal

### 2. mattpocock/skills — 277.8k stars
- 38 skills for "real engineers" from Matt Pocock's .agents directory
- Key skills: /grill-with-docs, /wayfinder, /tdd, /code-review, /diagnosing-bugs, /implement
- Install: `claude plugins install mattpocock-skills`
- Multiple viral HN threads and Reddit discussions
- **INCLUDE** — very high viral signal, strong star count

### 3. Panniantong/agent-reach — 92.5k stars, +1.1k today
- 13 internet platforms, zero API fees: Twitter/X, Reddit, YouTube, GitHub, Bilibili, Instagram, LinkedIn, etc.
- Multi-backend routing, MCP-compatible
- Install: Tell agent to read install.md (see README)
- Strong velocity (1.1k stars today)
- **INCLUDE** — viral + mcp/productivity

### 4. mvschwarz/openrig — 5.4k stars
- Multi-agent harness: Claude Code + Codex in a single YAML topology
- `rig up`, `rig send`, `rig broadcast`, terminal UI
- Install: `npm install -g @openrig/cli`
- Multiple forks already (social proof)
- **INCLUDE** — novel orchestration angle

### 5. elementalsouls/Claude-BugHunter — 4.8k stars
- 83 skills, 681 bug patterns, 24 vulnerability classes, Burp Suite MCP
- Bug bounty/red-team focused
- Install: `/plugin marketplace add elementalsouls/Claude-BugHunter`
- **INCLUDE** — strong security vertical, clearly focused

### 6. zilliztech/claude-context — 12.6k stars
- Semantic code search MCP: hybrid BM25 + dense vectors
- ~40% token reduction (creator-verified)
- Requires OpenAI API key + Zilliz Cloud/Milvus
- **INCLUDE** — COST signal, though higher setup friction

### 7. rebelytics/one-skill-to-rule-them-all — 3k stars
- Meta-skill: watches sessions, captures patterns, generates skill improvements
- 1,600+ observations logged; 81 skills created/improved by it
- CC BY 4.0
- **INCLUDE** — novel self-improving concept

### 8. Claude Code v2.1.290 (Oct 5–6)
- agent.spawn API, mod serverToolUses hook, managed agents onboarding
- Also v2.1.289: plugin-defined agents with own prompts/tools/effort
- **INCLUDE** — Anthropic official

---

## Checked But Skipped

- **answer-me-with-html** (1.55k stars) — too small, not enough evidence
- **one-skill-to-rule-them-all** — actually included, see above
- **claude-ads** (9.7k stars) — specialized paid-media skill; not enough 72h buzz to include over stronger candidates
- **claude-blog** (2.3k stars) — too small
- **yomiyasu** (1.55k, Japanese text refinement) — niche language-specific, not enough broad signal
- **trend-pulse** (claude-world/trend-pulse) — interesting but no star signal found
- **TechWithTim "9 Hottest" video** — appears to be Chase AI's video, attribution unclear, skipped direct credit

---

## Recurring Items Assessment

- **universal-modder**: still #1 global trending on Oct 6 (marc-ko tracking confirms 4,006 stars) → **KEEP Day 4**
- **nextlevelbuilder-ui-ux-pro-max-skill**: 131.9k+ stars, design staple, covered 10 days → **KEEP Day 10** (borderline)
- **affaan-m-ecc**: 272k stars, #1 on claude-code topic → **KEEP Day 5**
- **dietrichgebert-ponytail**: 156k stars, still cited in every cost tutorial → **KEEP Day 6**
- **juliusbrussee-caveman**: 109k stars, still #2 cost skill → **KEEP Day 6**
- **multica-ai-andrej-karpathy-skills**: 210k stars → **KEEP Day 4**
- **graphify-labs-graphify**: 123.4k stars, Day 4 → **KEEP Day 4** (last day before dropping)
- **manaflow-ai-cmux**: Day 2 only in Oct 5 digest → skipping (not enough trending signal to continue)
- **dzhng-jevgrep**: Day 5 → **DROP** (fading)
- **louis-cfm-coucou**: Day 6, small 3.4k → **DROP** (fading)
- **garrytan-gstack**: Day 4 → **DROP** (fading, covered by mattpocock/skills category)
- **addyosmani-agent-skills**: Day 4 → **DROP** (fading, covered by mattpocock/skills)
- **kahler-seed-paul**: Day 2 → **DROP** (not enough sustained signal)
- **anthropic-you-should-know-mod**: now superseded by v2.1.290 item → replaced
- **tt-a1i-archify**: was in Oct 4 only → DROP (not enough signal)
- **epicgames-unreal-engine-skills**: Oct 5 → DROP (fading)
- **nykooi1-vibe-wise**: Oct 5 → DROP (fading)
- **edenfunf-reelmimic**: Oct 4 → DROP
- **anthropic-claude-code-projects-redesign**: Oct 4 → DROP

---

## Final 15 (ranked)

1. mksglu-context-mode (COST #1)
2. mattpocock-skills (viral, 277k)
3. panniantong-agent-reach (viral, 92.5k)
4. zilliztech-claude-context (COST)
5. anthropic-claude-code-v2-1-290 (Anthropic official)
6. mvschwarz-openrig (orchestration)
7. elementalsouls-claude-bughunter (security)
8. rebelytics-one-skill-to-rule-them-all (meta)
9. rehan-remade-universal-modder (recurring, Day 4)
10. nextlevelbuilder-ui-ux-pro-max-skill (recurring, Day 10, design)
11. affaan-m-ecc (recurring, Day 5)
12. dietrichgebert-ponytail (recurring, Day 6, cost)
13. juliusbrussee-caveman (recurring, Day 6, cost)
14. multica-ai-andrej-karpathy-skills (recurring, Day 4)
15. graphify-labs-graphify (recurring, Day 4)
