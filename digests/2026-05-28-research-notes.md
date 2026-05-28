# Research Notes — 2026-05-28

Research window: 72h (since May 25, 2026). Hard limit 1200s.
Elapsed at checkpoint: ~830s.

---

## YouTube Coverage (past 7 days)

| Creator | Subs | Content this week | Tools mentioned |
|---|---|---|---|
| TechWithTim | 2M | "I Built the Same App With Claude Code and Codex" (~1 wk ago) | openai/codex-plugin-cc [already May 25 digest] |
| TechWithTim | 2M | "Claude Just Got a Superpower No One's Talking About" (~2 wks) | Higgsfield MCP [already submissions.json] |
| IndyDevDan | 129K | "I Mapped Every Claude Code Concept So You Don't Have To" (~1 wk) | educational, no new tool |
| IndyDevDan | 129K | "Claude + Figma MCP Complete Workflow | 3 Months Experience!" (~2 wks) | Figma MCP (established) |
| Chase AI | 109K | "Top 10 Claude Code Skills, Plugins & CLIs (April 2026)" | April video, outside 72h window |
| Simon Scrapes | 71.8K | No Claude Code-specific video found this week | — |
| Charlie Automates | 8K | No YouTube video found; blog + community (3,300+ operators) active | cc-switch (already May 25) |
| Developers Digest | 61.5K | Claude Code update coverage; no specific fresh tool video | — |
| UI Collective | 52.5K | "Claude for Designers" video (already in May 27 digest) | — |

**No item had 2+ YouTuber coverage this week within the 72h window.**

---

## Candidate Items (deduped)

### Already covered — SKIP
- `cc-switch` (farion1231) — May 25 digest
- `zilliz-claude-context` — May 26 digest
- `alirezarezvani-claude-skills` — May 22-24 digest range
- `awesome-agent-skills` (VoltAgent) — May 22-24 digest range
- `claude-plugins-official` (Anthropic) — May 22-24 digest range
- `anthropic-security-guidance` — May 27 digest
- `claude-code-v2-1-152` — May 27 digest
- `openai/codex-plugin-cc` — May 25 digest
- `ui-collective` video — May 27 digest
- OpenCode milestone article — mid-May (too old)
- Figma blog "From Claude Code to Figma" — Feb 17, 2026 (too old)

### NEW candidates

1. **jeremylongshore/claude-code-plugins-plus-skills** — 2.3K ★, v4.33.0 May 26. Largest open-source Claude Code marketplace: 425 plugins + 2810 skills + 200 agents. tonsofskills.com frontend. `ccpi` CLI (`pnpm add -g @intentsolutionsio/ccpi`). "Killer Skill of Week": kobiton-automate.

2. **K-Dense-AI/scientific-agent-skills** — 26.4K ★, v2.44.0 May 27 (yesterday!). 140 ready-to-use science skills + 78 scientific databases (PubChem, ChEMBL, UniProt, ClinVar, etc.). Drug discovery, RNA-seq, single-cell analysis, protein design. Compatible with Claude Code, Codex, Cursor, Antigravity. 160,000+ scientists claim. `npx skills add K-Dense-AI/scientific-agent-skills`.

3. **nanocoai/nanoclaw** — 29.5K ★, v2.0.64 May 18. Container-isolated lightweight OpenClaw alternative. Connects to 13 messaging apps (WhatsApp, Telegram, Discord, Slack, Teams, iMessage, Matrix, etc.). Uses Anthropic Agent SDK natively. Multiple community forks found = viral signal.

4. **Claude Code v2.1.153** — Released May 28 (today). `skipLfs` option for git/github plugin sources; one-time notice when npm can't auto-update; status line commands now get `COLUMNS` + `LINES` env vars; PR column shows "PR #N" format; macOS background agents now show as "Claude Code" in Privacy & Security with persistent permissions across upgrades; `/model` selection saves as default when pressing Enter. Install: `npm update -g @anthropic-ai/claude-code`.

5. **sangrokjung/claude-forge** — 715 ★, v3.0.2 May 3. "oh-my-zsh for Claude Code": 11 specialized agents, 40 commands, 15 skills, 6-layer security hooks (leaked credentials, unsafe remote commands, destructive DB ops, MCP rate limiting, code vulnerability detection, usage tracking), end-to-end pipelines (plan→TDD→review→verify→commit→PR). `curl -fsSL https://raw.githubusercontent.com/sangrokjung/claude-forge/main/install.sh | bash`.

6. **kobiton/automate** — 9 ★, v1.2.2 May 27. Claude Code plugin for Kobiton real-device cloud mobile testing. 13 tools: Devices (list/reserve/status/terminate), Sessions (list/get/artifacts/terminate), Apps (upload/confirm/list/get), Account (getCredential). Featured as "Killer Skill of Week" on tonsofskills.com (Grade A). `/plugin marketplace add kobiton/automate`.

7. **Sebastian Buzdugan Medium/HN: "I tested Claude Code as a Daily Driver"** — Medium article published ~May 27, went viral on HN (item 48289950, 1 day ago). 14-day test of Claude.md, Skills, Subagents, Plugins, MCPs — documents what worked and what broke. Strong community signal.

8. **Simon Willison "Anthropic and OpenAI have found product-market fit"** — May 27. Data-driven editorial on Claude Code's developer capture, how it's eating Cursor/Copilot.

9. **activepieces/activepieces** — 22.5K ★, appeared on GitHub Trending this week. "~400 MCP servers for AI agents" workflow automation. Not Claude-specific but widely used with Claude Code via MCP.

10. **hesreallyhim/awesome-claude-code** — 36.8K ★. Canonical hand-curated list of Claude Code skills, hooks, agents, plugins. Actively maintained (1,474+ issues/PRs). Not in any past digest or submissions.json.

---

## Design category

No strong fresh design-specific item found within the 72h window. Closest options were the Figma blog (Feb 17, too old) and the UX Collective Figma design system article (May 2026, exact date unknown). Will omit design-specific items unless date-verified.

---

## Ranking (final order for digest)

Priority: DESIGN > COST/TOKEN > VIRAL > ANTHROPIC > GENERAL

1. `kdense-scientific-agent-skills` — SKILL, strong freshness (May 27), huge stars (26.4K)
2. `nanoclaw` — PLUGIN, large stars (29.5K), viral (multiple forks)
3. `cc-plugins-plus-skills` — MARKETPLACE, fresh (May 26), 425 plugins
4. `claude-code-v2-1-153` — ANTHROPIC, very fresh (May 28)
5. `claude-forge` — PLUGIN/SKILL, security angle, 6-layer hooks
6. `kobiton-automate` — MCP, curated pick (tonsofskills "Killer Skill")
7. `cc-daily-driver-test` — COMMUNITY, HN viral May 27
8. `simonw-pmi-claude-code` — EDITORIAL, May 27
9. `activepieces` — MCP/GENERAL, trending GitHub
10. `awesome-claude-code` — RESOURCE, 36.8K ★, canonical
