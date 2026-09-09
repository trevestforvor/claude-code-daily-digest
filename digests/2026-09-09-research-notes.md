# Research Notes — 2026-09-09

## Sources Checked
- YouTube: @charlieautomates, @Chase-H-AI, @indydevdan, @simonscrapes, @UICollectiveDesign
- GitHub trending (weekly)
- Reddit r/ClaudeAI, r/ClaudeCode (past 3 days)
- HN Algolia (blocked, search-based fallback)
- Anthropic changelog / releasebot
- Product Hunt (blocked, search-based fallback)
- simonwillison.net, latent.space, AI newsletters

---

## YouTube Coverage (Past 7 Days)

### @charlieautomates
- **understand-anything** — July 8, 2026 blog post + video. Outside the 7-day window, so no `creator_buzz` credit today. Still a high-signal item at 54.7k stars.
- Other recent content focuses on Higgsfield cinematic video workflows and VS Code integration.

### @Chase-H-AI
- "GPT 6 Astra Is INSANE for Motion Design" — September 8, 2026 (yesterday). Covers GPT-6 Astra + Higgsfield MCP + Seedance 2.5 for motion graphics. Compares directly to Fable 5.1. Not about a specific new skill.
- "Your Claude Code Carousels Suck (Here's The Fix)" — recent but date unconfirmed. Covers social media carousel skills.
- "This Skill Turns Fable 5 & GPT 5.6 Into Web Design MONSTERS" — July 11, 2026. Covers `claudex-loop` (chaseai-yt/claudex-loop). Outside 7-day window, no `creator_buzz`.
- Skill confirmed on their GitHub: `chaseai-yt/claudex-loop` (1.7k stars).

### @indydevdan
- Recent content from Feb–June 2026. No confirmed new Claude Code–specific content in the past 7 days. Skipping this run.

### @simonscrapes
- No confirmed new September 2026 content found. Most recent content from earlier 2026 (Top 10 Claude Code skills monthly roundups). Skipping this run.

### @UICollectiveDesign
- No confirmed new September 2026 content found. May 2026 video "Claude Code for Designers: All the Ways to Use It." Skipping this run.

### @DevelopersDigest, @TechWithTim
- Not checked (time constraint / no recent Claude Code signal found in search results).

---

## Key Candidates

### Anthropic Official

**1. Claude Code 2.1.266 (September 8, 2026)**
- URL: https://code.claude.com/docs/en/changelog
- New `--plugin-dir` flag: point at a folder, any child with a manifest loads; new additions/removals are picked up while running.
- `/workflows` view overhaul: tool calls marked running/failed/done, inputs/results accessible with Enter.
- Slash command improvements: filterable list for mid-prompt commands, bare name search for plugin skills.
- Fixed CLAUDE_CODE_USE_GATEWAY regression (2.1.265 bug).
- Fixed plugin path symlink containment bypass on macOS/Linux (security fix).
- Improved session resume performance for long, file-heavy sessions.
- VSCode: auto-archiving of inactive sessions (14-day default).

**2. /skill-doctor (Claude Code 2.1.261, September 4-5, 2026)**
- URL: https://code.claude.com/docs/en/changelog
- Shows which loaded skills were never invoked in a session + exact token cost per turn.
- Interactive mode: opens in Plugin Manager Stats tab.
- Headless `-p`: prints plain text.
- Context: Anthropic removed 80%+ of Claude Code's own system prompt with no measurable eval drop.

### New GitHub Tools / Skills

**3. understand-anything (Egonex-AI/Understand-Anything)**
- GitHub: https://github.com/Egonex-AI/Understand-Anything
- Stars: 54,700
- Multi-agent pipeline → knowledge graph → React Flow dashboard.
- `/understand-chat` command for NL queries backed by the graph.
- Install: `/plugin marketplace add Lum1104/Understand-Anything && /plugin install understand-anything`
- Also at: https://understand-anything.com/

**4. AAS Core (sickn33/agentic-awesome-skills)**
- GitHub: https://github.com/sickn33/agentic-awesome-skills
- Stars: 45,400
- Local, agent-first control plane: 2,115+ skills, CLI, local MCP (`compose_stack` read-only tool), Workbench.
- Claude/Codex browse the full catalog, select skill IDs, validate stack.
- Install: `npx agentic-awesome-skills`

**5. context-mode (mksglu/context-mode)**
- GitHub: https://github.com/mksglu/context-mode
- Stars: 21,600 (as of Sept 9 direct fetch)
- 98% tool output reduction (315 KB → 5.4 KB).
- Sandboxes raw data, persists session state in SQLite (FTS5 + BM25 retrieval on compaction).
- 11 MCP tools + full lifecycle hooks, 17 platforms.
- Install: `/plugin marketplace add mksglu/context-mode && /plugin install context-mode@context-mode`
- Featured in Sept 6 GitHub trending recap.

**6. ARIS — Auto-Research-In-Sleep (echoxiangzhou/auto-claude-code-research-in-sleep)**
- GitHub: https://github.com/echoxiangzhou/auto-claude-code-research-in-sleep
- Stars: 14,200
- 82 composable Markdown-only Claude Code skills for autonomous ML research.
- Workflows: `/idea-discovery`, `/auto-review-loop`, `/paper-writing`, `/research-pipeline`.
- Cross-model: Claude Code writes, external LLM critiques; AAAI 2026 accepted.
- Install: `git clone https://github.com/echoxiangzhou/auto-claude-code-research-in-sleep && bash auto-claude-code-research-in-sleep/tools/install_aris.sh .`

**7. claudex-loop (chaseai-yt/claudex-loop)**
- GitHub: https://github.com/chaseai-yt/claudex-loop
- Stars: 1,700
- 4-phase cross-model plan hardening: recon → interrogate → Codex adversarial review → cross-model build & inspection.
- "Whoever built it never grades it." Catches plan gaps before code is written.
- Install: `/plugin marketplace add chaseai-yt/claudex-loop && /plugin install claudex-loop@claudex-loop`

### Recurring / Trending

- **claude-code-limits-sept14**: 4 days to cutover (Sept 14 permanent +25%, but ends current +50% boost, net −17%)
- **fable-5-1**: Day 9 — cache reads still 75% cheaper
- **caveman**: Day 18 — 103.9k stars
- **ponytail**: Comeback Day 3 — 128.6k stars
- **andrej-karpathy-skills**: Day 10 — 209k stars
- **obra-superpowers**: Day 29 — 272k stars, still #1 framework by star count
- **oh-my-openagent**: Day 4 — 68.8k stars
- **orca**: Day 5 — 62.6k stars

---

## Items Skipped / Not Used

- FlorianBruniaux/claude-code-ultimate-guide (5.9k stars — too low for viral ranking, good reference but no 72h hook)
- Seedance 2.5 / GPT-6 Astra / Higgsfield (not Claude Code skill/plugin; covered by Chase AI but as model comparison)
- Social media carousel skills (no dominant single tool, fragmented market)
- rohitg00/awesome-claude-code-toolkit (curated list, not a tool; 135 agents but no clear freshness hook)
- Tabbit AI, Mireye (general agent infra, not Claude Code specific)
- claude-code-ultimate-guide (5.9k stars only)

## Research Time
~6 minutes elapsed (under 20-minute cap).
