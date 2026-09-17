# Research Notes — 2026-09-17

Research window: ~505 seconds (~8.5 minutes). 13 items identified.

---

## YouTube Coverage

### @charlieautomates (Charlie Automates)
- **Blog post**: "Understand Anything: The Claude Code Plugin That Maps Any Codebase (Even If You Can't Code)" — dedicated post on Egonex-AI/Understand-Anything, called it "GitHub's #1 repo of the day"
- **Blog post**: "Build an Agentic OS in 3 Steps (2026 Claude Code Tutorial)"
- Videos found from earlier in 2026 (Jan–Feb), not the past 72h: "This Plugin Cut My Claude Tokens in Half", "This New Claude Plugin Will 100x Your Output"
- No new YouTube video confirmed from past 72h, but blog activity on Understand-Anything is recent signal.

### @Chase-H-AI (Chase AI, 109K subs)
- Recent videos (past ~2 weeks): "Claude Code + Higgsfield MCP = Content MACHINE", "Turn Claude Into A Web Design Genius in 3 Steps With Seedance 2.5", "GPT-6 Astra Just Unlocked Motion Design + After Effects" (3 days ago)
- Covered #1 Claude Code Design Skill upgrade (August 4, 2026)
- Strong signal on Higgsfield MCP integration + design tools.

### @indydevdan (IndyDevDan, 129K subs)
- Active "Claude Code Deep Mastery" playlist ongoing
- "AI Summer 2026 | Claude Code & Choosing the Right Model" — recent
- No specific new tool/plugin identified for this 72h window.

### @simonscrapes (Simon Scrapes, 71.8K subs)
- No new Claude Code content confirmed from past 72h. Older content from earlier 2026 months.

### @UICollectiveDesign (UI Collective, 52.5K subs)
- No content found for past 72h.

### @adrienaidesigner (Adrien AI Designer, 4K subs)
- No content found for past 72h.

### @DevelopersDigest (Developers Digest, 61.5K subs)
- Not explicitly checked (time constraint).

### @TechWithTim (Tech With Tim, 2M subs)
- Most recent Claude-related content: "Codex vs Claude - an Honest Comparison" (3 weeks ago), "Save 95% of Your Tokens - OpenClaw Full Tutorial"
- No Claude-specific new content from past 72h confirmed.

---

## Key Finds

### DESIGN (highest priority)
- **nexu-io/open-design** — 96.7k stars. Open-source Claude Design alternative. Local-first desktop app, 151 DESIGN.md packages, 25+ agents supported, HTML/PDF/PPTX/MP4 export. Held #1 on GitTrend. 40k stars in first 2 weeks. V0.21.0 "Reliable, Start to Finish."

### Official Anthropic
- **Claude Cowork + Chat merge** — Sep 16, 2026. Anthropic folds Cowork into single Claude experience. Claude Docs and Claude Slides launch in beta. Claude Design moves into regular chat. Rolling out to Pro & Max.
- **Claude Code v2.1.274** — Sep 17, 2026. Memory critical warnings, MCP startup wait bound, self-healing corrupted transcripts, active /goal preservation, improved Code Review.
- **Claude Code v2.1.273** — Sep 15, 2026. VSCode agent map with per-agent transcripts, forking --remote-control sessions, skills synced from claude.ai trash on org disable.
- **Claude Code v2.1.271** — Sep 14, 2026. Fast mode in remote sessions, per-command allowed_domains, omitClaudeMd frontmatter.
- /skill-doctor (v2.1.261, Sep 4): shows unused skills and context cost.

### COST/TOKEN (second priority)
- **rtk-ai/rtk** — 80.8k stars. CLI proxy reducing token consumption 60-90%. Single Rust binary, zero deps. `brew install rtk`. Supports Claude Code and 11+ other agents. Smart filtering for git, npm, cargo, docker output.

### VIRAL (large star counts, newly appearing in digest)
- **Panniantong/Agent-Reach** — 82.8k stars. Internet visibility for AI agents. Twitter, Reddit, YouTube, GitHub, Bilibili, XiaoHongShu — zero API fees. First-choice + backup backend, auto-routes on failure. `agent-reach doctor` diagnostic.
- **shareAI-lab/learn-claude-code** — 77k stars. 17-lesson Python tutorial building a Claude agent harness from scratch. Tool use, permissions, context management, task systems, agent teams.
- **Egonex-AI/Understand-Anything** — 83k stars. In 09-11 digest (6 days ago). Charlie Automates blog post confirms continued momentum. Still top-10 on GitHub trending. Interactive codebase knowledge graph.

### Agents / Multi-agent
- **yeachan-heo/oh-my-claudecode** — 39.2k stars. Teams-first multi-agent orchestration for Claude Code. Zero learning curve, 19 specialized agents with intelligent model routing.
- **smtg-ai/claude-squad** — 8.5k stars. Manage multiple AI terminal agents in isolated git worktrees. `brew install claude-squad`.

### Skills Ecosystem  
- **sickn33/agentic-awesome-skills** — 46.5k stars. In digests 09-10 to 09-12 (last 5-9 days). V17.4.0, now 2,115+ skills. Still actively updated.
- **glebis/claude-skills** — 378 stars. 100 skills covering meetings, research, media gen, TDD, publishing. Small but broad coverage.

### Codebase Intelligence  
- **Graphify-Labs/graphify** — 119k stars. Was in 09-08 digest (9 days ago). Grown from ~90k to 119k stars since July. Knowledge graph via deterministic AST parsing, no vector store, offline.
- **colbymchenry/codegraph** — NEW. Pre-indexed code knowledge graph, auto-syncs on code changes. Worth monitoring.

### Docs / Guides
- **FlorianBruniaux/claude-code-ultimate-guide** — 6k stars. 430K+ lines. 48 Mermaid diagrams, 271-question quiz, threat modeling (655-entry malicious skills DB), TDD/SDD/BDD templates, enterprise governance.

### Testing
- **lackeyjb/playwright-skill** — 3.1k stars. General-purpose Playwright automation skill for coding agents. Claude writes custom scripts per request. `npx skills add lackeyjb/playwright-skill --skill playwright-skill --global --yes`

### Content / Media
- **Higgsfield MCP** — Official Higgsfield MCP giving access to 30+ image/video models (Seedance 2.0, Sora 2, Veo, Kling). Chase AI covered with "Claude Code + Higgsfield MCP = Content MACHINE." `claude mcp add --transport http --scope user higgsfield https://mcp.higgsfield.ai/mcp`

---

## Items SKIPPED (already in submissions.json or very recent digests)
- ComposioHQ/awesome-claude-skills — IN_SUBMISSIONS
- ECC, hermes-agent — IN_SUBMISSIONS or recent digest
- taste-skill — IN_SUBMISSIONS
- obra/superpowers — in 09-16 digest
- claude-mem — in 09-15 digest
- graphify — in 09-08 digest (included as recurring given 119k → big growth)
- Understand-Anything — in 09-11 digest (included as recurring per Charlie Automates coverage)
- caveman, ponytail, ui-ux-pro-max-skill — in 09-11 to 09-13 digests
- cc-switch, hermes-agent — in 09-13 digest
- openclaw — in 09-16 digest

---

## Final 13 Items for Digest
1. nexu-io/open-design (DESIGN, 96.7k)
2. anthropic-claude-unified-experience (official, Sep 16-17)
3. rtk-ai/rtk (COST, 80.8k)
4. Panniantong/Agent-Reach (viral, 82.8k)
5. Egonex-AI/Understand-Anything (recurring, 83k, Charlie Automates)
6. shareAI-lab/learn-claude-code (77k, NEW)
7. yeachan-heo/oh-my-claudecode (39.2k, NEW)
8. sickn33/agentic-awesome-skills (recurring, V17.4.0, 46.5k)
9. Graphify-Labs/graphify (recurring, 119k, growing fast)
10. claude-code-v2-1-274 (official changelog)
11. FlorianBruniaux/claude-code-ultimate-guide (6k, NEW)
12. smtg-ai/claude-squad (8.5k, NEW)
13. lackeyjb/playwright-skill (3.1k, NEW)
