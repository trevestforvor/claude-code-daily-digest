# Research Notes — 2026-06-18

## YouTube Coverage

### @charlieautomates (8,080 subs)
- **"Claude Code Knowledge Graph Setup (Graphify + Obsidian)"** — blog post on charlieautomates.com this week; featured Graphify (safishamsi/graphify, 68.4k stars) as the "always-on knowledge graph" layer that cuts session tokens up to 49×.
- **"Claude Skills + Hermes Agent = 24/7 Agents"** — posted June 15 (3 days ago). Covers three paths to autonomous agent loops: Hermes (self-hosted VPS), Claude managed agents, and n8n MCP (czlonkowski/n8n-mcp) as the workflow automation backbone. No new standalone repos but reinforces n8n-mcp as the loop automation pick.

### @Chase-H-AI (109,000 subs)
- **"The NEW Way to Use Claude Code in 2026 (Loops)"** — posted June 15 (3 days ago). Explains the loop engineering paradigm shift: `/loop` (recurring scheduled prompts) and `/goal` (run-until-condition). Mentions n8n MCP as the recommended autonomous-loop backend. This video is the highest-signal trigger for the loop engineering mainstream moment.
- Previous: "Top 10 Claude Code Plugins — June '26" (covered in June 17 digest).

### @simonscrapes (71,800 subs)
- **"You're Only Using 10% of Claude Code"** (June 16) — covered in June 17 digest.
- **"Claude Code Masterclass for Non-Coders"** (June 14) — covered in June 17 digest.
- **"How To Use Claude Code Anywhere (VPS & Mobile Setup)"** — posted ~June 11 (1 week ago). VPS + Tailscale + tmux + Mosh + Hostinger ($5/mo). Generic infrastructure, no Claude-specific new tools. Skipped as a main item.

### @indydevdan (129,000 subs)
- No new Claude Code video in past 72h detected. Recent content: "Tactical Agentic Coding" course launch. Skipped this run.

### @adrienaidesigner (4,050 subs)
- No new video detected in past 72h. Skipped.

### @UICollectiveDesign (52,500 subs)
- No new video detected in past 72h. Skipped.

### @DevelopersDigest (61,500 subs)
- No new video detected in past 72h. Skipped.

### @TechWithTim (2,000,000 subs)
- No new Claude Code video detected in past 72h. Skipped.

---

## High-Signal Sources

### GitHub Trending
- **safishamsi/graphify** — 68.4k stars. Knowledge graph skill (Tree-sitter + LLM, 40+ languages), cuts tokens 49×. Charlie Automates featured. Strong candidate.
- **mvanhorn/last30days-skill** — 44.3k stars, v3.3.0 (May 17). Multi-platform research across Reddit/X/YouTube/HN/Polymarket/GitHub. Trending item confirmed.
- **czlonkowski/n8n-mcp** — 21.8k stars, v2.59.0 released **June 18** (today). MCP for 1,845 n8n workflow nodes. Very timely.
- **automazeio/ccpm** — 8.2k stars. GitHub Issues + Git worktrees for parallel agent execution. PRD → Epics → Issues → parallel agents.
- **zilliztech/claude-context** — 11.9k stars. Semantic code search MCP (requires OpenAI + Milvus). Skipped in favor of graphify (cleaner setup).
- **rohitg00/awesome-claude-code-toolkit** — 135 agents, 176+ plugins; older project, skipped.

### Anthropic Official
- **Claude Code v2.1.181** (June 17) — `/config key=value`, CLAUDE_CLIENT_PRESENCE_FILE, sandbox.allowAppleEvents, Bun 1.4 upgrade, auto-retry on API drops mid-thinking, improved subagent panel with auto-hide.
- **Workload Identity Federation GA** (June 17) — Replaces static API keys with OIDC short-lived tokens (AWS IAM, GCP, Azure, GitHub Actions, Okta). Service accounts per workload.
- **Opus 4.8 Build Day winners** (June 17) — Tekton (3D architecture reconstruction), Custom Universe (robotics synthetic data), Sim Francisco (election forecasting).
- **Fable 5 ban Day 6** — No restoration. New: Anthropic privacy policy update (effective July 8) allows US citizen ID bypass via government ID. Refund window closes June 20.

### Viral / Paradigm Shifts
- **Loop Engineering** — Peter Steinberger tweet (6.5M views), Boris Cherny ("I don't prompt Claude — loops do"), Addy Osmani essay, Chase AI June 15 video, 2,200+ X posts. The week's dominant conceptual thread. No single repo but built around Claude Code `/loop` + `/goal` commands.
- **Unreal Engine 5.8 MCP** — Released June 17 at Unreal Fest Chicago. First major game engine with built-in experimental MCP server. Claude Code, Codex, Cursor can drive the Unreal Editor natively.

### Blogs / Newsletters
- Simon Willison (June 16 TIL): Cloudflare MCP + Claude Code — covered in June 17 digest.
- Latent.Space, Ben's Bites, TLDR AI: No new Claude Code–specific tool announcements June 17-18 detected.

---

## Dedup Status
None of the top 10 candidates appear in submissions.json or any of the last 7 days of digests.

## Final Candidate List (ranked)
1. graphify — COST (49× tokens, 68.4k stars, Charlie Automates featured)
2. last30days-skill — VIRAL (44.3k stars, #1 trending Claude skill)
3. loop-engineering — VIRAL (6.5M views, Chase AI + Addy Osmani + Boris Cherny)
4. n8n-mcp — MCP (21.8k stars, updated today v2.59.0, Chase AI featured)
5. unreal-engine-58-mcp — DESIGN + MCP (game engine first-party MCP, June 17)
6. fable5-day6-id-workaround — RECURRING (Day 6, new ID workaround angle)
7. claude-code-v2-1-181 — ANTHROPIC (June 17, /config syntax, Bun 1.4)
8. opus-48-build-day-winners — ANTHROPIC VIRAL (June 17 hackathon winners)
9. wif-claude-platform — ANTHROPIC (June 17 GA, OIDC keyless auth)
10. ccpm — SKILL (8.2k stars, GitHub Issues + worktrees for parallel agents)
