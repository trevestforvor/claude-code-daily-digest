# Research Notes — 2026-09-05

## Timer
- Started: ~1788624393 (epoch)
- Stopped research: ~1788624693 (~300s elapsed, well within 20-min cap)

## YouTube Coverage

### @charlieautomates (Charlie Automates, ~8k subs) — HIGH SIGNAL THIS WEEK
- **"Claude Code Is Now FREE Forever! Full Tutorial (2026)"** — covers OmniRoute setup for Claude Code with free tokens from 150+ providers. URL: https://www.youtube.com/watch?v=x4FxvP5IGQs
- **"#1 Claude Code Repo Today (Nobody's Talking About It)"** — featured a trending Claude Code repo. URL: https://www.youtube.com/watch?v=LM14h8RBXuM
- **"SEED + PAUL = The Claude Code Meta Nobody's Talking About"** (blog post + video) — covers ChristopherKahler/seed + ChristopherKahler/paul as a two-step idea→build pipeline. URL: https://www.charlieautomates.com/blog/seed-paul-claude-code-meta/
- **Very active this week** — 3+ relevant videos on specific tools; OmniRoute + SEED/PAUL are this week's Charlie signal.

### @Chase-H-AI (Chase AI, ~109k subs)
- **"The #1 Claude Code Design Skill Just Got a HUGE Upgrade"** (Aug 4, 2026) — covers Impeccable 4.0 (already in submissions.json — SKIP). URL: https://www.youtube.com/watch?v=RVeCbPg0liw
- No new tool coverage in the past 72h not already in submissions.json.

### @indydevdan (IndyDevDan, ~129k subs)
- **"Build an MCP Server from Scratch in 2026"** — covers MCP server building patterns. URL: https://www.youtube.com/watch?v=YKIUt9ytxIE (Aug 5, 2026, on edge of 72h window)
- No new specific tool coverage in past 72h.

### @simonscrapes (Simon Scrapes, ~71.8k subs)
- **"Has Claude Code Just Killed N8N?"** — discussion about Claude Code Routines as automation builder vs n8n/Make. Not a specific tool launch; skip.
- No specific new tool coverage in past 72h.

### @TechWithTim (Tech With Tim, ~2M subs)
- No Claude-Code-specific new video clearly in past 72h.

### @UICollectiveDesign, @DevelopersDigest, @adrienaidesigner
- No relevant Claude Code content found in past 72h search results.

---

## Candidate Items Found

### STRONG (featured / high signal)
1. **OmniRoute** (diegosouzapw/OmniRoute) — 61.5k stars, free AI gateway with 352 providers (150+ free), 1.47B free tokens/month for Claude Code, RTK+Caveman compression 15-95% tokens saved. Featured prominently by @charlieautomates ("Claude Code Is Now FREE Forever!"). BIGGEST cost item this week.

2. **Claude Commerce Agents** (anthropics/commerce-agents) — Anthropic open-source, Apache 2.0, launched Sept 2. Shopping + merchant agents blueprint for retail/travel/telecom/entertainment, deployable on Anthropic API, Bedrock, Vertex, Foundry. Includes Claude Code plugin. Partners: Accenture, Mastercard, Visa.

3. **Inference Hooks** (claude.com/blog/claude-enterprise-inference-hooks) — Anthropic Enterprise beta (entered beta Aug 5). Open webhook protocol: external security server inspects every prompt + tool call before Claude sees it, returns allow/deny. One config covers claude.ai, Cowork, MCP, skills, Claude Code simultaneously. Integrates with Netskope, Palo Alto, Proofpoint, Zscaler. DISTINCT from "enterprise-frontier-safeguards" (yesterday's item = zero data retention + activity logs).

4. **PAUL** (ChristopherKahler/paul) — 1.2k stars. Plan-Apply-Unify Loop for Claude Code. 26 commands, BDD acceptance criteria, Execute/Qualify loops, STATE.md persistence, BASE v2 integration. Featured by @charlieautomates as part of SEED+PAUL meta.

5. **SEED** (ChristopherKahler/seed) — 346 stars. AI project incubator for Claude Code. 5 typed project categories → PLANNING.md → zero-friction PAUL handoff. Featured by @charlieautomates alongside PAUL.

### MEDIUM (verified, solid)
6. **trace-mcp** (nikolai-vysotskyi/trace-mcp) — 133 stars. MCP server that indexes repo once, builds framework-aware dependency graph; 90.6% fewer input tokens per PR review (13,595 → 1,326 median), 81 languages, 87 framework integrations, MIT. No telemetry.

7. **Reticle** (reticlehq/reticle) — 441 stars. Verification layer: AI agents observe live running app (network responses, store state, console errors, React commits) → pass/fail with file:line pointers. Claude Code plugin + MCP. Install: `npx skills add reticlehq/reticle` or `/plugin marketplace add reticlehq/reticle`.

8. **Claude Code changelog Sept 5 (2.1.261)** — New items NOT yet covered by Sept 3/4 digests: `/skill-doctor` shows unused skills + context cost for pruning; `managedMcpServers` lets orgs push MCP servers to every user; `--permission-prompts none` for headless; `SendMessage`/`ListAgents` cross-machine on Bedrock/Vertex/Foundry.

9. **rohitg00/awesome-claude-code-toolkit** — 2.4k stars. Most structured Claude Code resource list: 135 agents, 35 curated skills (+400k via SkillKit), 42 commands, 176+ plugins, 20 hooks, 14 MCP configs, 26 companion apps.

### SKIPPED
- Impeccable 4.0 (Chase AI coverage) — already in submissions.json
- Simon Scrapes "Has Claude Code killed N8N?" — discussion, not a specific tool
- teng-lin/notebooklm-py (19k stars, trending) — Gemini-focused, not Claude Code
- OmniRoute forks (multiple forks exist; featuring canonical diegosouzapw/OmniRoute)

---

## Dedup Check
All candidate items verified NOT in submissions.json and NOT in last 7 days of digests.
