# Daily Digest Research Notes — 2026-07-10

Research elapsed: ~372s (limit 1200s).

---

## YouTube Coverage

### @charlieautomates (Charlie Automates, ~8K subs)
**1 confirmed video this week (July 3–10):**
- "FREE Claude Desktop + Claude Code! Full Setup With Real Anthropic Models (July 2026)" — ~July 7, 2026
  - URL: https://www.youtube.com/watch?v=wdlwuoSXci4
  - Key tool covered: **farion1231/cc-switch** (ccswitch.io) — Tauri/Rust desktop app for switching Claude Code between providers (Claude, Codex, Gemini CLI, OpenCode, OpenClaw, Hermes) from the system tray; unified MCP + Skills management

### @Chase-H-AI (Chase AI, ~109K subs)
No confirmed videos in the July 3–10 window. Most recent was "The Agentic OS Setup That Will 10x Claude Code" (~June 26).

### @indydevdan (IndyDevDan, ~129K subs)
Direct search found recent IndyDevDan video results but no specific Claude Code tool coverage confirmed for July 3–10 window (pending agent result). Known recent: generic Claude Code tutorials.

### @simonscrapes (Simon Scrapes, ~71.8K subs) / @UICollectiveDesign / @DevelopersDigest / @TechWithTim
No specific new videos from July 3–10 confirmed within research window.

**YouTuber verdict:** @charlieautomates covered cc-switch on July 7 — boosts that item. No 2-YouTuber overlap this week for any single tool.

---

## Anthropic / Official Releases

### Claude Code v2.1.206 (July 10, 2026 — today)
- 27 CLI changes shipped
- Security help restricted to authorized/educational use; DoS, supply-chain, and detection-evasion requests refused
- Background agents auto-upgrade after Claude Code updates (no stale-session penalty on attach)
- /cd now suggests directory paths inline (matching /add-dir)
- /doctor check proposes trimming large committed CLAUDE.md files
- /commit-push-pr auto-allows git push to configured push remote
- Gateway: /login supports Anthropic-operated public gateway endpoints
- EnterWorktree asks confirmation before entering worktrees outside .claude/worktrees/
- Expired logins now show /login prompt instead of misleading model error
- Source: https://github.com/anthropics/claude-code/releases

### Claude Code v2.1.205 (July 8)
- Already in yesterday's digest as claude-code-v2-1-205. Now superseded by v2.1.206.

### Fable 5 Free Access Extended to July 12
- Anthropic extended Fable 5 promotional access (up to 50% of weekly limits) through July 12 11:59 PM PT, announced via @claudeai
- Source: digitalapplied.com/blog/anthropic-fable-5-access-extended-july-12-2026

### VS Code 1.128 (July 8)
- Multi-chat Claude agent sessions: one session can fork into parallel peer chats, each with own history/model
- Quick chats for workspace-less one-off questions
- Copilot Vision GA (image/PDF context in Chat)
- 1M-token context for Opus 4.7+
- Source: code.visualstudio.com/updates/v1_128 / visualstudiomagazine.com

### Alibaba Ban — EFFECTIVE TODAY (July 10)
- Ban took effect today. Employees directed to Qoder.
- Day 3 of story (broke July 8 in digest)

### Claude Science grants
- $30K grants close July 15 — 5 days from today.
- Day 3 in digest.

---

## GitHub Trending / New Discoveries

### JuliusBrussee/caveman ⭐ 87.6K (+7,184/week)
- URL: https://github.com/JuliusBrussee/caveman
- "why use many token when few token do trick" — Claude Code skill that cuts 65% of output tokens by rewriting responses in caveman-speak while preserving all technical accuracy (code blocks, error strings, symbols untouched)
- Six intensity levels: lite / full (default) / ultra / wenyan-lite / wenyan-full / wenyan-ultra
- /caveman-compress rewrites CLAUDE.md + memory files to shrink every future session context (~46% token reduction on memory files)
- /caveman-stats shows lifetime tokens saved in statusline
- Categories: cost, skill
- Install: `npx skills add JuliusBrussee/caveman`

### thedotmack/claude-mem ⭐ 86.7K
- URL: https://github.com/thedotmack/claude-mem
- Persistent context across every agent session via 5 lifecycle hooks (SessionStart through SessionEnd)
- SQLite + ChromaDB vector storage; AI-compressed session summaries; semantic search across all past sessions
- Free, local-only, Apache 2.0; v13.10.2
- Install: `npx claude-mem install`
- Categories: plugin

### farion1231/cc-switch ⭐ 116K
- URL: https://github.com/farion1231/cc-switch
- Tauri + Rust desktop app (cross-platform) that manages Claude Code, Codex, Gemini CLI, OpenCode, OpenClaw, Hermes Agent from one system-tray GUI
- 50+ built-in provider presets; unified MCP server management; Claude Skills panel; Claude Desktop now a first-class surface
- v3.16.5; official site: ccswitch.io
- Install: see ccswitch.io
- Categories: cost, plugin
- creator_buzz: @charlieautomates (July 7 video: "FREE Claude Desktop + Claude Code! Full Setup With Real Anthropic Models")

### asgeirtj/system_prompts_leaks ⭐ 55.7K (+7,149/week)
- URL: https://github.com/asgeirtj/system_prompts_leaks
- Canonical archive of extracted system prompts: Claude Fable 5 (~3,800 lines), Opus 4.8, Claude Code, Claude Design, ChatGPT 5.5 Thinking, Codex, Gemini 3.5 Flash, Antigravity, Grok, Cursor, Copilot, Perplexity, VS Code, and more
- CC0-1.0 (public domain); updated regularly
- Washington Post covered in May 2026: "see the hidden rules behind AI"
- Categories: viral

### addyosmani/agent-skills ⭐ 76.6K (+7,236/week)
- URL: https://github.com/addyosmani/agent-skills
- Addy Osmani (Google Chrome engineering lead) — 24 production-grade engineering skills across the full spec/plan/build/test/review/ship lifecycle
- Compatible with Claude Code, Cursor, Codex, Copilot, Gemini CLI, Cline, and 70+ others
- MIT; install: /plugin marketplace add addyosmani/agent-skills

### bradautomates/claude-video ⭐ 7.1K (+3.6K/week)
- URL: https://github.com/bradautomates/claude-video
- /watch skill: paste a YouTube/TikTok/X/Instagram/local video URL → Claude downloads, extracts smart frames (scene-aware dedup), transcribes with Whisper or free captions, hands everything to Claude
- Zero config on macOS (yt-dlp + ffmpeg via brew on first run)
- Categories: skill

### Other notable items from GitHub topic scan
- affaan-m/ECC (228K stars) — 278 skills, 67 subagents, 94 command shims, hooks + AgentShield security scanning; already likely in older digests
- headroomlabs-ai/headroom (58.3K) — 60-95% token compression, lib + proxy + MCP server
- manaflow-ai/cmux (24.1K) — agent-native macOS terminal with vertical tabs + notification rings for subagents
- DietrichGebert/ponytail (79.9K) — active today but no confirmed description
- Egonex-AI/Understand-Anything (72.5K) — active today

---

## Recurring Items (from yesterday's digest, Day N today)

| Item | Day | Key Update |
|------|-----|-----------|
| alibaba-bans-claude-code | Day 3 | Ban effective TODAY July 10 |
| claude-code-steganography | Day 10 | Alibaba ban is now effective |
| claude-code-limits-july13 | Day 9 | 3 days left (expires July 13 6pm PDT) |
| fable5-metered-billing | Day 10 | Free access extended to July 12 |
| obra-superpowers | Day 4 | 252K stars (was 249K) |
| graphify | Day 5 | 81.8K stars (was 74.8K); +7K in week |
| mattpocock-skills | Day 8 | 164K stars (was 155K) |
| career-ops | Day 3 | 59.5K stars (was 57.6K) |
| karpathy-claude-md-v10 | Day 9 | ~225K combined, still growing |
| claude-science | Day 3 | 5 days left on $30K grants (July 15) |

Dropped from yesterday's 15 to make room:
- claude-reflect (Day 2 → aged out)
- claude-cowork-mobile (Day 3 → aged out)
- aris-auto-research (Day 2 → aged out)
- mvanhorn-last30days-skill (Day 3 → aged out)
- claude-code-v2-1-205 → replaced by v2.1.206
