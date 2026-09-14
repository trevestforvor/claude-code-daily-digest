# Research Notes — 2026-09-14

## Research Window
- Start: 2026-09-14T00:00 UTC (approximate)
- Coverage: past 72h (Sept 11–14, 2026)
- Elapsed: ~5 min research (well within 20-min cap)

---

## YouTube Coverage

### @Chase-H-AI (109k subs) — ACTIVE
- **"The #1 Claude Code Design Skill Just Got a HUGE Upgrade"** (Aug 4, 2026) — about **Impeccable 4.0** (already in submissions.json)
- **"Turn Claude Into A Web Design Genius in 3 Steps With Seedance 2.5"** (~Aug 24, 2026) — covers Seedance 2.5 + Higgsfield workflow
- **"GPT 6 Astra Is INSANE for Motion Design"** (Sept 8, 2026) — coverage of OpenAI GPT-6 Astra (competitor), not a Claude Code specific tool
- No Claude Code-specific tool launches in past 72h confirmed from this channel

### @indydevdan (129k subs) — ACTIVE
- **"The NEW Ultimate Beginner's Guide To Claude (September 2026)"** (~Sept 1, 2026) — general guide, no specific new tool featured
- No specific Claude Code tool launch coverage in past 72h confirmed

### @simonscrapes (71.8k subs) — NO RECENT (>6w gap)
- Latest Claude Code video is from June 2026; no September content found — skip this run

### @charlieautomates (8k subs) — NO RESULTS
- No indexed YouTube videos found for past 7 days — skip this run

---

## Key Findings by Source

### Anthropic Official (Past 72h — HIGH SIGNAL)
- **v2.1.269 (Sept 11)**: `claude plugin eval` — run a plugin's eval suite, get scored JSON+HTML results with no-plugin baseline; 6 grader types; CI gate for skills/plugins. Covered by MarkTechPost, aiidelist, explainx.ai
- **v2.1.269 (Sept 11)**: `/output-style [name]` — 4 built-in output styles (Concise, Explanatory, Learning, default); works over Remote Control and cloud/headless sessions
- **v2.1.270 (Sept 12)**: Bug fix — read-only git commands unexpectedly asking for permission

### GitHub High-Signal Repos
- **NVIDIA/skills** — 3.3k stars, 400+ official NVIDIA agent skills (Physical AI, Jetson, CUDA-Q, cuOpt, cuDF, NeMo, DeepStream, TAO, Holoscan, Medical AI); Claude Code / Codex / Cursor compatible; daily automated sync
- **alirezarezvani/claude-skills** — 25.9k stars, 380+ skills for 13 agents (Claude Code, Codex, Gemini CLI, OpenClaw, Hermes, Cursor, Aider, Windsurf, etc.); engineering, marketing, product, finance, productivity
- **K-Dense-AI/scientific-agent-skills** — 43.2k stars, 165 validated science skills, 100+ scientific databases; 190k+ scientists; was trending Sept 1 (+1,980 stars that day)
- **OSideMedia/higgsfield-ai-prompt-skill** — 380 stars, 32 sub-skills for Higgsfield/Seedance 2.5/Kling 3.0 cinematics; Hell Grind pipeline, Soul ID, MCSLA, 18 genre templates (DESIGN category)

### Still Trending from Recent Digests
- **mattpocock/skills** — 260k stars, +~1.2k/day (Day 3) — viral
- **i-have-adhd** — 44k stars (Day 3) — still viral
- **archify** — 60.4k stars, +1.1k/24h (Day 3) — still growing
- **ralph-wiggum** — Day 4 (official Anthropic plugin)
- **trace-mcp** — Day 3, cost category (72.7% token reduction)
- **spotify-portal-shunt** — Day 3, cost category
- **function-hooks** — Day 3
- **claude-code-smart-reports** — Day 3
- **video-shotcraft** — Day 3, design category

### Items SKIPPED
- `jeurtr/seedance-skill` — only 2 stars
- GPT-6 Astra — OpenAI competitor model, not Claude Code ecosystem
- `higgsfield` — different item already in submissions.json
- `impeccable` — already in submissions.json
- `agentic-awesome-skills` — was in Sept 10–12 digests, fading

---

## Final Candidate List (15 items)
Ranked: DESIGN → COST/TOKEN → VIRAL → ANTHROPIC → GENERAL

1. higgsfield-ai-prompt-skill (DESIGN, new)
2. video-shotcraft (DESIGN, Day 3)
3. archify (DESIGN+general, Day 3)
4. trace-mcp (COST, Day 3)
5. spotify-portal-shunt (COST, Day 3)
6. mattpocock-skills (VIRAL, Day 3)
7. i-have-adhd (VIRAL, Day 3)
8. claude-plugin-eval (ANTHROPIC OFFICIAL, new Sept 11)
9. output-style-command (ANTHROPIC OFFICIAL, new Sept 11)
10. ralph-wiggum (ANTHROPIC PLUGIN, Day 4)
11. claude-code-smart-reports (ANTHROPIC, Day 3)
12. nvidia-skills (GENERAL, new, 3.3k stars)
13. scientific-agent-skills (GENERAL, 43.2k stars)
14. alirezarezvani-claude-skills (GENERAL, 25.9k stars)
15. function-hooks (GENERAL, Day 3)
