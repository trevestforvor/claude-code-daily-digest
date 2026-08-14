# Research Notes — 2026-08-14

## Time Budget
- Start: 1786724741 (unix)
- Research ended: ~313s elapsed (well within 1200s cap)

## Checkpoint: Dedup Sources
- Checked `submissions.json` — 95+ slugs/URLs on file
- Checked `digests/2026-08-12.json` and `digests/2026-08-13.json`
- All candidates screened against both lists

---

## YouTube Coverage (Past 7 Days)

YouTube direct fetch blocked by egress proxy. Used web search to identify recent content.

### @indydevdan (IndyDevDan, 129K subs)
- No specific new tool/skill coverage identified in searches for Aug 7–14 2026.
- Channel is active but no concrete video titles surfaced for this window.
- **Skip this run. Noted in research notes.**

### @Chase-H-AI (Chase AI, 109K subs)
- Prior coverage of `ui-ux-pro-max-skill` confirmed (named it "#1 Claude Code Design Skill" at v2.0 launch); this coverage was referenced in Aug 12 digest.
- No new specific video for Aug 7–14 identified this run.
- `creator_buzz` for ui-ux-pro-max-skill retained from prior confirmation.

### @simonscrapes (Simon Scrapes, 71.8K subs)
- No specific new tool/skill coverage identified in searches for Aug 7–14 2026.
- **Skip this run. Noted.**

### @charlieautomates (Charlie Automates, 8K subs)
- No specific coverage identified this run.
- **Skip.**

### @DevelopersDigest (Developers Digest, 61.5K subs)
- No specific new tool coverage in searches.
- Past post confirmed: covered MCP 2026-07-28 migration.
- **Skip for new items this run.**

### @TechWithTim (Tech With Tim, 2M subs)
- YouTube search returned recent video: "Claude Code's New Upgrade Lets You Automate Any Task" (1 week ago).
- Title aligns with v2.1.232 subagent forking announcement but no specific tool repo identified.
- **Cannot verify specific tool; no creator_buzz added.**

### @UICollectiveDesign (UI Collective, 52.5K subs)
- No specific Aug 7–14 coverage identified.
- **Skip this run.**

### @adrienaidesigner (Adrien AI Designer, 4K subs)
- No specific coverage identified.
- **Skip.**

---

## Claude Code Changelog (Past 72h)

### v2.1.232 — Aug 13, 2026
- **Subagent forking now on by default**: `subagent_type: "fork"` inherits full conversation + prompt cache
- **@ mention syntax**: type @ in prompt to reference another Claude session; uses SendMessage
- **GitLab plugin marketplace support**: bare `gitlab.com` URLs work like GitHub
- **Fable 5 as advisor**: orgs with Fable access can use `/model fable` again
- Security: PowerShell bypass fix, Windows Cygwin-style symlink bypass fix, nested git repo trust fix, GitLab token redaction

### v2.1.231 — Aug 13
- MCP OAuth fix (Slack redirect URI)

### v2.1.229 — Aug 12
- Plugin marketplace `command` sources
- ListAgents: disconnected RC sessions marked `offline`, cloud sessions labeled `cloud`

### v2.1.228 — Aug 11
- Cross-session messaging improvements
- Write tool: newer models can overwrite files they haven't read

---

## Auto Mode Default — Went Live Today (Aug 14)

Anthropic made auto mode the default permission mode for Pro/Max/Team starting today. Previously announced Aug 7, flagged in digest as "ships Aug 14" for past 3 days. Today is the actual rollout. Heavy coverage: TechCrunch, The Register, 9to5Mac, Simon Willison, TheNewStack, HN 49214994 (300+ comments).

---

## Security Vulnerability (Fixed — Informational)

- **CVE-2026-54316** (Claude Code): Hugging Face download counter used as exfiltration channel, leaking API key one character at a time. Fixed in v2.1.163. All releases 0.2.54–2.1.163 affected. Presented at Black Hat USA Aug 5.
- **CVE-2026-12537** (Gemini CLI): CVSS 10.0 OS command injection in container launcher via crafted `.gemini/.env`. Fixed in Gemini CLI 0.39.1.
- Both fixed, current Claude Code is v2.1.232. Informational only — no action needed for current users.

---

## GitHub Trending / New Candidates (Past 72h)

### NEW ITEMS (not in submissions.json or recent digests)

**Egonex-AI/Understand-Anything** — 79.3K stars
- Claude Code skill turning any codebase into interactive knowledge graph
- Multi-agent pipeline: 5 specialized agents (Tree-Sitter for static facts, LLM for semantic)
- Features: searchable node graph, diff impact analysis, architecture tours, domain views
- Install: `/plugin marketplace add Egonex-AI/Understand-Anything && /plugin install understand-anything`
- Updated Aug 11, 2026. Augment Code article; Mervin Praison covered it.
- Categories: design, cost

**ayghri/i-have-adhd** — 20.5K stars
- Claude Code skill that stops agent from "burying the answer"; ADHD-friendly output
- 10 behaviors: action first, number steps, cap lists at 5, no preamble/recap/closers
- Went viral quickly: "11K stars" in early posts, now 20.5K
- Threads.com viral post from @sscottdev
- Categories: skill
- Install: see INSTALL.md (claude plugin command)

**code-yeongyu/oh-my-openagent (LazyCodex)** — 67.9K stars
- Multi-model tokenmaxxing agent harness; named "the coding agent for tokenmaxxers"
- Models: Sisyphus (Opus 5 + Kimi K3 + GLM-5), Hephaestus (GPT-5.6 Sol), Prometheus (Fable 5 + Kimi K3)
- Full Claude Code compatibility: "Every hook, command, skill, MCP, plugin works here unchanged"
- Features: hash-anchored edits, LSP integration, AST-Grep, built-in MCPs, Team Mode, ultrawork
- Install: `bunx oh-my-openagent install`
- Updated Jul 27, 2026; topic shows active
- Categories: agent, cost

**shanraisshan/claude-code-best-practice** — 64.5K stars
- "From vibe coding to agentic engineering — practice makes claude perfect"
- Community-curated best practices, workflows, and tips from Claude team + ecosystem
- Hit GitHub Trending Day #1 in March 2026; HTML/Markdown format; MIT
- Updated Aug 14, 2026 (today)
- Considered for inclusion but dropped — not enough install signal (not a runnable plugin)

**wanshuiyin/Auto-claude-code-research-in-sleep (ARIS)** — 14.7K stars
- Autonomous ML research skills: cross-model review loops, idea discovery, experiment automation
- Lightweight Markdown-only, no framework lock-in; works with Claude Code, Codex, OpenClaw
- Skills cover: literature review, experiment design, paper writing, code-to-paper
- Considered for inclusion; dropped in favor of items with higher star counts/install signal

**K-Dense-AI/scientific-agent-skills** — 33.5K stars
- 158+ ready-to-use skills for science: biology, chemistry, medicine, drug discovery
- 100+ scientific databases; compatible with Claude Code, Cursor, Codex, Copilot
- "Used by 170,000+ scientists worldwide"
- Considered; dropped to stay under 15 slots

---

## Recurring Items — Status (from Aug 13 digest)

| Slug | Stars (Aug 13) | Day (Aug 13) | Stars Now | Day (Aug 14) | Status |
|------|----------------|--------------|-----------|--------------|--------|
| obra/superpowers | ~272K | 2 | ~272K | 3 | keep |
| ui-ux-pro-max-skill | ~116K | 7 | ~116K | 8 | keep |
| kepano/obsidian-skills | 44.9K | 2 | 44.9K | 3 | keep |
| graphify | ~105K | 21 | ~105K | 22 | keep |
| ponytail | ~102K | 6 | ~102K | 7 | keep |
| caveman | ~97.7K | 20 | ~97.7K | 21 | keep |
| claude-mem | ~90.8K | 7 | ~90.7K | 8 | keep |
| agent-skills | ~86.8K | 3 | ~86.8K | — | DROPPED (replaced by new items) |
| andrej-karpathy-skills | ~195K | 26 | ~195K | 27 | keep |
| ecc | 239K | 20 | 239K | 21 | keep |
| hermes-agent | ~229K | 3 | ~229K | 4 | keep |
| cc-switch | ~127K | 6 | ~127K | 7 | keep |
| claude-code-auto-mode-default | — | 2 | — | 3 (LIVE) | keep — NOW LIVE |
| claude-code-self-hosted-environments | — | 3 | — | — | DROPPED (room for new) |
| claude-code-cross-session-messaging | — | 2 | — | — | DROPPED (room for new) |

---

## Final 15 Selection

1. claude-code-auto-mode-default (Anthropic — LIVE TODAY)
2. ui-ux-pro-max-skill (DESIGN, Day 8)
3. kepano/obsidian-skills (DESIGN, Day 3)
4. understand-anything (DESIGN+cost, NEW)
5. graphify (COST, Day 22)
6. ponytail (COST, Day 7)
7. caveman (COST, Day 21)
8. claude-mem (COST, Day 8)
9. obra/superpowers (Day 3, viral #1)
10. andrej-karpathy-skills (Day 27, canonical)
11. ecc (Day 21)
12. hermes-agent (Day 4)
13. oh-my-openagent (NEW, multi-model)
14. cc-switch (Day 7)
15. i-have-adhd (NEW, viral)
