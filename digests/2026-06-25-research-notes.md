# Research Notes — 2026-06-25

## Summary
Today's digest covers two major Anthropic stories (Alibaba distillation attack, Claude Code v2.1.191), the ongoing Fable 5 suspension (Day 13), two highly-starred skill frameworks (Superpowers 238K, PAUL 1K), and the ChristopherKahler Claude Code toolkit (CARL + SEED) promoted by Charlie Automates.

## YouTube Coverage (past 7 days)

### @charlieautomates (8K subs)
- **"SEED + PAUL = The Claude Code Meta Nobody's Talking About"** (blog + video) — Featured ChristopherKahler's SEED (project incubator) + PAUL (Plan-Apply-Unify Loop) as a structured development stack. Also covered CARL (Context Augmentation & Reinforcement Layer) for dynamic rule loading.
- **"Claude Code Remote Just Ended OpenClaw: Here's Why I Switched"** — Compared Claude Code Remote (Anthropic's managed agent infrastructure) vs OpenClaw self-hosted setup. Key claim: managed sandbox eliminates local process management overhead.
- Items surfaced: SEED, PAUL, CARL (all ChristopherKahler repos)

### @TechWithTim (2M subs)
- **"The ULTIMATE Beginner Guide to Claude Code in 2026"** (1 week ago) — Beginner tutorial, no specific new tools highlighted.
- **"Claude Just Got a Superpower No One's Talking About"** (May 11) — Visual capabilities via Higgsfield MCP (already covered in past digests).
- No new tool coverage this week.

### @indydevdan (129K subs)
- **"Claude 4 ADVANCED AI Coding: How I PARALLELIZE Claude Code with Git Worktrees"** — Parallelizing Claude Code with git worktrees (content from May 2025, not new this week).
- No new tool coverage in past 72h.

### @simonscrapes (71.8K subs)
- **"Auto Claude: AI Coding on Steroids!"** — Setup for Claude Code running autonomously for hours, spawning sub-agents. No specific new repos.
- **"How Smart People Are Using Claude Code Skills to Automate Anything"** — Skills automation general tutorial.

### @Chase-H-AI (109K subs)
- No videos found specifically for Claude Code skills/plugins in past 72h.

### @UICollectiveDesign (52.5K subs), @DevelopersDigest (61.5K subs), @adrienaidesigner (4K subs)
- No Claude Code specific content found in past 72h.

## Major Items Researched

### Anthropic vs Alibaba Distillation Attack (June 24)
- 28.8M exchanges, 25K fraudulent accounts, April 22 – June 5
- Letter sent to Senate Banking Committee (Warren + Scott) June 10, made public June 24
- Tom's Hardware, CNBC, BusinessStandard, Benzinga, Bloomberg all covered
- Targeted Claude's software-engineering + agentic-reasoning capabilities
- Larger than DeepSeek (150K), MiniMax (13M), Moonshot (3.4M) combined in absolute exchange count
- Anthropic wrote to White House directly

### Claude Code v2.1.191 (June 24)
- `/rewind` command: resume from before `/clear` 
- 37% CPU reduction during streaming via 100ms text-update coalescing
- Sandbox network permission memory (session-wide, not per-prompt)
- MCP OAuth retry + headless env support
- Multiple bug fixes: scroll jump, zombie background agents, `/voice` org restriction message

### Fable 5 Ban — Day 13
- No new restoration developments beyond Alibaba news
- Kalshi ~68% by July 1, 74% by mid-July
- Alibaba letter is the most significant new piece of public evidence for the rationale

### Superpowers (obra/superpowers)
- 238K stars (was ~200K on 6/13, ~121K in April)
- Complete TDD methodology, systematic debugging, subagent orchestration, git worktrees
- In official Anthropic marketplace since January 15, 2026
- Builder.io blog post "The Structured Workflow That Actually Works" drove recent traffic

### ChristopherKahler / Chris AI Systems toolkit
- **CARL**: 351 stars, keyword-matched rules, ~50% token savings, MCP server
- **PAUL**: 1,012 stars, Plan-Apply-Unify Loop, structured dev loop
- **SEED**: 270+ stars, project incubator, type-aware → PLANNING.md
- **SkillSmith**: 54 stars (too small, skip)
- **BASE**: Builder's Automated State Engine (less coverage, skip)
- Charlie Automates covered SEED+PAUL in "The Claude Code Meta Nobody's Talking About"

### Vokal (vokal.team)
- Collaboration space for human + AI agent teams
- #2 Product Hunt of day, 100+ teams signed up
- Supports Claude Code, Codex CLI, Hermes Agent, OpenCode, MCP/ACP agents
- NOT in any past digests

### Publora (publora.com)
- Social media API for AI agents, MCP-native
- 18 tools, 10 networks, full engagement loop
- Product Hunt launch June 10, 2026
- NOT in any past digests

### Trends MCP (trendsmcp/trends-mcp)
- SKIP: covered in digests 6/6, 6/9, 6/13 — too recent

### Items skipped (in last 7 days):
- VoltAgent/awesome-agent-skills (6/22)
- CC Switch (6/24)
- Everything-Claude-Code ECC (6/20)
- claude-code-plugins-plus-skills (6/19)
- antigravity-awesome-skills (6/24, 6/23, 6/21)
- Recall Claude Memory (6/24)
- claude-mem (6/23)
