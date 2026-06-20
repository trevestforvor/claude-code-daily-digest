# Research Notes — 2026-06-20

## Elapsed cap check
Research window: ~581s of 1200s at time of writing.

---

## YouTube Coverage (past 7 days)

### @Chase-H-AI (109K subs)
- **"This Open Source Repo Solves Claude Code's Biggest Problem"** (18h ago) — covers affaan-m/everything-claude-code (ECC), framing it as solving the "vanilla Claude Code problem." ✅ Featured in digest.
- **"The Claude Code + Obsidian Setup That Now Runs My Life"** (May 16) — outside 72h window.

### @simonscrapes (71.8K subs)
- **"Claude Code Agentic OS… It Remembers Everything"** (1 day ago / June 19) — covers the agentic-os skill inside ECC / pattern for persistent memory. ✅ Covered via ECC item in digest.
- **"You're Only Using 10% of Claude Code"** (June 16) — covered in June 17 digest.
- **"Claude Code Masterclass for People Who Don't Code"** (June 14) — covered in June 17 digest.

### @TechWithTim (2M subs)
- **"The ULTIMATE Beginner Guide to Claude Code in 2026"** (1 day ago) — general tutorial, no specific new tool featured. Not digested as a separate item.

### @indydevdan (129K subs)
- No specific Claude Code content in the last 7 days found. Skipped this run.

### @DevelopersDigest (61.5K subs)
- No specific YouTube videos found in past 72h. Blog posts only (Codex vs Claude Code, pricing reality check, best skills directory). Skipped this run.

### @charlieautomates (8K subs)
- No new videos found in past 72h. Was previously featured in June 18 digest (graphify, n8n-mcp). Skipped this run.

### @UICollectiveDesign (52.5K subs)
- No new videos found in past 72h. Skipped this run.

### @adrienaidesigner (4K subs)
- No new videos found in past 72h. Skipped this run.

---

## High-Signal Items Found (past 72h)

### 1. Fable 5 Ban Day 8 (RECURRING)
- Refund window closes **TODAY** (June 20, 11:59 PM) for June 9-13 subscribers who cancelled
- Trump at G7 Évian-les-Bains: "talks going fine" (first presidential comment, June 19)
- No restoration announcement. Anthropic privacy policy ID bypass effective July 8.
- Ongoing — everyone on Opus 4.8. slug: fable5-ban-day8

### 2. Everything Claude Code (ECC) — affaan-m
- GitHub: github.com/affaan-m/everything-claude-code (also shows as affaan-m/ECC)
- 175k stars, 28 agents, 119 skills, 60 slash commands, 34 rules, 20+ hooks, 14 MCP servers
- Chase AI (109K subs) featured it 18h ago: "This Open Source Repo Solves Claude Code's Biggest Problem"
- Simon Scrapes (71.8K subs) featured agentic-os skill from ECC 1 day ago: "Claude Code Agentic OS… It Remembers Everything"
- Two YouTubers from sources list → boosted viral signal. slug: everything-claude-code-ecc

### 3. Ralph Wiggum Plugin (OFFICIAL ANTHROPIC)
- URL: github.com/anthropics/claude-code/tree/main/plugins/ralph-wiggum
- Also in claude-plugins-official/plugins/ralph-loop
- Official Claude Code plugin. Stop hook intercepts exit attempts → re-feeds same prompt → loops until completion
- Commands: /ralph-loop, /cancel-ralph
- Named after Simpsons character: "persistent iteration despite setbacks"
- Getting viral Reddit/r/ClaudeAI attention in June 2026, docs updated June 2026
- Created by Geoffrey Huntley (July 2025), packaged by Anthropic
- slug: ralph-wiggum-plugin

### 4. h5i — AI-Aware Git Sidecar
- GitHub: github.com/h5i-dev/h5i
- 411 stars, v0.2.1 released June 18, 2026 (within 72h)
- "Git tracks the diff. h5i tracks the run."
- 95% token compression on logs, 3.5x richer PR briefs, 1.8x faster multi-agent loops
- Agent Radio (h5i msg): lets Claude Code and Codex have real-time conversations via Git (no server, no socket — conflict-free append-only log in Git ref)
- HN: "Claude Code and Codex can have real-time conversation via Git" — item 48345837
- Install: curl -fsSL https://raw.githubusercontent.com/h5i-dev/h5i/main/install.sh | sh
- slug: h5i-ai-git

### 5. MiMo Code — Xiaomi's Claude Code Fork
- GitHub: github.com/XiaomiMiMo/MiMo-Code
- 10k stars, V0.1.0 released June 10, 2026 (HN front page 488 points)
- Fork of OpenCode with Xiaomi's persistent cross-session memory
- 82% SWE-bench Verified vs 79% for Claude Code (self-reported)
- 86.7% Terminal-Bench 2.0 vs Claude Code's 65.4%
- Install: curl -fsSL https://mimo.xiaomi.com/install | bash OR npm install -g @mimo-ai/cli
- MIT license
- slug: mimo-code-xiaomi

### 6. CASS — Coding Agent Session Search
- GitHub: github.com/Dicklesworthstone/coding_agent_session_search
- 917 stars, Rust CLI (v0.1.61)
- Unified TUI + CLI to search conversation history across 20+ AI coding agents (Claude Code, Codex, Cursor, Aider, Gemini CLI, etc.)
- Sub-60ms full-text search + optional semantic search, SSH multi-machine support, encrypted HTML export
- HN Show HN: "UI and MCP server for analyzing Claude Code history. No more lost ideas" (item 46500801)
- Install: curl -fsSL "https://raw.githubusercontent.com/Dicklesworthstone/coding_agent_session_search/main/install.sh" | bash -s -- --easy-mode --verify
- Also via Homebrew + Scoop
- slug: cass-session-search

### 7. Statewright — State Machine Guardrails
- GitHub: github.com/statewright/statewright
- 404 stars, v1.1.0 released June 1, 2026
- "Agents are suggestions, states are laws"
- Rust engine enforces per-state tool restrictions for Claude Code, Codex, Cursor via MCP plugin + hooks
- Visual workflow editor at statewright.ai
- HN Show HN (item 48108778)
- Apache 2.0 (open-source engine) + commercial tiers
- Install: /plugin marketplace add statewright/statewright
- slug: statewright

### 8. "Claude Code + YouTube = $62k/Month" — Viral Pattern
- Multiple YouTube videos (r9bblbwIyiU, 5LPDUk04J2Y, others), one posted 4 days ago (June 16)
- Tutorial showing how to automate faceless YouTube channel using Claude Code + Higgsfield
- Getting traction on X and TikTok
- Not a specific tool/repo but a viral pattern driving new Claude Code interest
- ChatYT listed it as trending
- slug: claude-code-youtube-62k

### 9. Notchcode — MacBook Notch + Windows Pill Agent Monitor
- Product Hunt: producthunt.com/products/notchcode
- Launched 1 day ago (June 19, 2026)
- Free, MIT, no telemetry
- Notch glows when agent needs input, one tap focuses right terminal
- Works with Claude Code + Codex, runs locally
- GitHub: sk-ruban/notchi (or notchcode)
- Note: Similar to AgentNotch and AgentPeek (June 17 digest) but newest entry
- slug: notchcode

### 10. CC-BEEPER — Floating Retro Pager for Claude Code
- GitHub: github.com/vecartier/cc-beeper
- 172 stars, v1.0.0 April 12, 2026 (Product Hunt featured recently in June)
- 8 pixel-art states (Snoozing, Working, Done, Error, Allow?, Input?, Listening, Recap)
- Voice response via WhisperKit + Kokoro TTS
- 4 auto-accept presets (Strict → YOLO)
- Global hotkeys, 10 shell color themes
- macOS 14+ only, download DMG
- slug: cc-beeper

### 11. Masko Code — Desktop Mascot Agent Monitor
- Product Hunt: producthunt.com/products/masko-code
- Desktop mascot that watches Claude Code agents. Speech bubbles appear for permission prompts.
- MIT, free, open source
- Less info available — skipping for now

---

## Items Checked but Excluded
- **Xiaomi MiMo Code** — included (10 days old but still trending)
- **Masko Code** — insufficient info, skipping
- **Claude Code Agentic OS pattern** — folded into ECC item
- **Claude billing split (June 15)** — possibly covered in June 15 digest, outside 72h
- **Latent Space Claude Code for Finance** — couldn't verify publication date
- **agent-handshake (jbrick2070)** — similar to h5i, skipping to avoid duplication
- **Statewright provisional patent** — included, interesting detail
- **CC-BEEPER** — including (most distinctive of the notch-style apps)
- **MiMo Code** — including despite being 10 days old (still viral, not covered before)

---

## Dedup Check (vs submissions.json)
- "everything-claude-code" NOT in submissions.json ✅ OK to include
- All other items not in submissions.json ✅

## Dedup Check (vs recent digests)
- June 17: agentnotch, agentpeek — both notch apps. Notchcode is new (Day 3), but new entry.
- June 18: n8n-mcp (charlieautomates), loop-engineering (Chase AI) — different from today's ECC items
- June 19: fable5-ban-day7 → today is Day 8 ✅ recurring
