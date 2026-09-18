# Research Notes — 2026-09-18

## Summary
Focused 72h window: Sep 15–18, 2026. Heavy GitHub API search + web search. YouTube (blocked) and Product Hunt (blocked) accessed only via search results. Latent.Space also blocked.

---

## YouTube Coverage (past 7 days)

YouTube direct fetching blocked by network proxy. Search-based findings:

- **@charlieautomates** — Blog post this week covering Egonex-AI/Understand-Anything (already in Sep 17 digest). No new Sep 15-18 video with fresh tool discovered via search. Noted as "skip this run."
- **@Chase-H-AI** — No specific Sep 15-18 video confirmed via search.
- **@indydevdan** — disler/infinite-agentic-loop referenced in search results; no confirmed new Sep 15-18 Claude Code video.
- **@simonscrapes** / **@DevelopersDigest** / **@TechWithTim** / **@UICollectiveDesign** / **@adrienaidesigner** — No confirmed Sep 15-18 content found via search. Skipping this run.

**No YouTuber cross-coverage boost applied this digest.**

---

## High-Signal Sources Checked

### Anthropic Official / Claude Code Changelog
- **v2.1.275 (Sep 17)** — Skills sync from claude.ai to terminal sessions (`syncClaudeAiSkills`/`syncClaudeAiPlugins`), send-now key (ctrl+enter), `/plugin install --marketplace`, memory dialog in VSCode.
- **v2.1.276 (Sep 18)** — Bug fix for 400 error when `ANTHROPIC_BASE_URL` points at proxy (regression from 2.1.275).
- **v2.1.273 (Sep 15)** — Gateway hint headers (`x-claude-code-request-class` etc.), remote-control session forking.
- **v2.1.274 (Sep 17)** — Memory warning, OTel spans, click-to-expand for agent messages.

### GitHub Trending (topic:claude-code, topic:claude-code-skills)
- **Caveman** (JuliusBrussee/caveman) — 106.5K stars. COST. v2.7.0. In past digests but still #1 token reducer; Adobe documented 1.4-2.4× cost reduction.
- **diagram-design** (cathrynlavery/diagram-design) — 41.1K stars. DESIGN. 39 editorial diagram types, v2.5.10. In past digests.
- **ARIS** (wanshuiyin/Auto-claude-code-research-in-sleep) — 16.3K stars. ML research automation. Updated Sep 16 with Fable 5.1 support. In past digests.
- **statewright** (statewright/statewright) — 491 stars. State machine guardrails via MCP. In past digests.
- **boss-skill** (echoVic/boss-skill) — 558 stars. Auditable multi-agent engineering team workflow (PM/Architect/QA roles). **NOT in any past digest or submissions.json.**
- **EvoOntology** (ruc-datalab/EvoOntology) — 148 stars. Self-evolving ontology for data agents. Created Sep 15. **NEW.**
- **jev-review** (NiazMorshed2007/jev-review) — 112 stars. Local-first MCP for continuous code review. Created Sep 17. **NEW.**
- **vibetube** (mutonby/vibetube) — 58 stars. Desktop multicam recorder + Claude Code/Codex AI video editing. Created Sep 15. **NEW.**
- **seanswarm** (ccai40359-wq/seanswarm) — 53 stars. Multi-agent workflow skills (research fan-out, dual-channel docs). Created Sep 16. **NEW.**
- **GPUtw-Skill** (GPUtw-ai/GPUtw-Skill) — 52 stars. GPUtw GPU cloud REST API skill. Created Sep 15. **NEW.**
- **skillranker** (Dicklesworthstone/skillranker) — 43 stars. Rust CLI skill ranker using Jev/TypeSafe.ai. Created Sep 17. **NEW.**
- **friday** (friday-memory/friday) — 36 stars. Open-source persistent cognitive memory layer for coding agents (Neo4j + MCP). Created Sep 16. **NEW.**
- **claude-code-mods** (karanb192/claude-code-mods) — 27 stars. New "mods" category for Claude Code; includes builder skill + mods. Created Sep 15. **NEW.**
- **agent-router** (nidhi-singh02/agent-router) — 25 stars. CLI picks the right coding agent + model for a task. Created Sep 17. **NEW.**

### Reddit / HN
- **Claude Code limit cut controversy** — Sep 14 HN thread (49491631): 50% temporary boost expired Sep 13, replaced by permanent 25% increase over baseline → net ~17% reduction vs what users had. Anthropic deleted original announcement and clarified.
- HN had discussion on Statewright visual state machines (already in past digests).

### Blogs
- **simonwillison.net** — Sep 16: "Claude Cowork and chat are now one Claude" — already covered in Sep 17 digest as `anthropic-claude-unified-experience`.
- Latent.Space Sep 16-17: Claude Code Projects (parallel cloud sessions from single conversation) — domain blocked, cannot verify primary URL. Not included.

### Product Hunt
- Product Hunt blocked by proxy. Caveman appeared in search results as featured; Crew (Aug 7) too old.

---

## Dedup Status

Items verified NOT in submissions.json or past digests (eligible as new):
- boss-skill, EvoOntology, jev-review, vibetube, seanswarm, GPUtw-Skill, skillranker, friday, claude-code-mods, agent-router

Items in past digests (eligible as recurring if still trending):
- caveman, diagram-design, ARIS, statewright

Items in submissions.json or past digests (skip):
- hermes-agent, ECC, cc-switch, ui-ux-pro-max-skill, addyosmani/agent-skills, headroom, career-ops, orca, graphify, Agent-Reach, rtk, claude-mem, taste-skill, diagram-design

---

## Final Selection for Digest
15 items: 10 new + 4 recurring + 1 official changelog.
