# Research Notes — 2026-09-22

**Elapsed at end of research:** ~4 min (well within 20-min cap)

---

## YouTube Coverage (past 7 days)

### @charlieautomates (8K subs)
- **"#1 Claude Code Repo Today (Nobody's Talking About It)"** (July 8, 2026) — featured Understand-Anything (already in past digests). No fresh September videos detected in this run; channel still active.
- Recent blog post: "SEED + PAUL = The Claude Code Meta Nobody's Talking About" — no specific tool candidate extracted.
- **Skip this cycle** — no new videos in the last 72h confirmed.

### @Chase-H-AI (109K subs)
- Appears to not have posted new Claude Code content in the past 72h. No September 22 videos surfaced.
- **Skip this cycle.**

### @indydevdan (129K subs)
- "Every New Claude Code Feature Explained! (2026)" surfaces repeatedly in search. Playlist: "Claude Code Deep Mastery" — no specific new video in past 72h.
- **Skip this cycle.**

### @simonscrapes (71.8K subs)
- No specific new video in past 72h surfaced.

### @UICollectiveDesign (52.5K subs)
- Nothing new in past 72h surfaced.

### @DevelopersDigest (61.5K subs)
- Nothing new in past 72h surfaced.

### @TechWithTim (2M subs)
- Not checked in depth; no specific signal found.

### @adrienaidesigner (4K subs)
- Not checked in depth.

**Note:** YouTuber signals are weak this cycle — no item gets a creator_buzz boost. No item should be boosted to rank 3.

---

## Key New Candidates Found

### High-Priority New Items

1. **Unity Official Plugin** (`claude.com/plugins/unity`) — Launched September 9, 2026. Unity Technologies published a first-party Claude Code plugin with 29 engine skills written by Unity engineers. Covers uGUI, UI Toolkit, 2D, tilemaps, IAP, localization, multiplayer, Shader Graph, URP, audio, navigation, physics. Install: `/plugin install unity`. Solves the "outdated tutorial" problem — agents no longer pull from stale forum posts. Multiple press articles (The Decoder, PocketGamer, Explainx, Mixed News). Strong TOOLS/DESIGN signal.

2. **claude-mem** (`thedotmack/claude-mem`) — 94.5K stars, v13.25.3. Persistent context across sessions — captures tool usage, compresses with AI, injects into future sessions. Cost-reduction angle: no re-explaining projects each session. Works with Claude Code, Cursor, Codex, Grok Bot, OpenCode, Hermes. New: Grok Bot support with awareness push pilot. Install: `npx claude-mem install`.

3. **oh-my-openagent** (`code-yeongyu/oh-my-openagent`) — 69.3K stars. Graph engineering orchestration TUI for OpenCode, Gemini, OpenAI, Claude. Updated Sep 22. *Note: distinct from oh-my-claudecode (yeachan-heo) which is already in past digests.*

4. **scientific-agent-skills** (`K-Dense-AI/scientific-agent-skills`) — 46.1K stars (up from 23.4K in May). "The #1 Agent Skills library for science, used by 190,000+ scientists worldwide." 165 validated skills, 100+ scientific databases covering biology, chemistry, medicine, drug discovery. Compatible with Claude Code, Cursor, Codex, Pi, Antigravity.

5. **wshobson/agents** (`wshobson/agents`) — 39.9K stars. Multi-harness agentic plugin marketplace supporting Claude Code, Codex, Cursor, OpenCode, Copilot, Antigravity, Pi. Updated Sep 21.

6. **nanoclaw** (`nanocoai/nanoclaw`) — 30.8K stars. Lightweight Docker/container-based Claude Code agent alternative to OpenClaw. Connects to WhatsApp, Telegram, Slack, Discord, Teams, iMessage, Matrix, Gmail, etc. Per-agent container isolation, scheduled jobs, memory. Built on Anthropic's Claude Agent SDK. V2 released. Clone + `bash nanoclaw.sh`.

7. **planning-with-files** (`OthmanAdi/planning-with-files`) — 27.1K stars, v3.20.5. Manus-style persistent markdown planning — three markdown files survive /clear, compaction, session crashes. 3/3 blind A/B wins; 96.7% assertion pass rate. 60+ agent support. Install: `npx skills add OthmanAdi/planning-with-files --skill planning-with-files -g`.

8. **alirezarezvani/claude-skills** (`alirezarezvani/claude-skills`) — 26.2K stars, 380 skills across 20+ domains (engineering, marketing, compliance, C-level advisory, research, business ops). 727 Python CLI scripts, zero dependencies. Skill Security Auditor included. 13 platforms. Install: `/plugin marketplace add alirezarezvani/claude-skills`.

9. **distilly** (`titanwings/distilly`) — 25K stars. Formerly "Colleague Skill". Distills how someone thinks into a portable Person Profile packaged as an Agent Skill. Three families: colleague, relationship, celebrity. Multi-source: Lark, DingTalk, Slack, WeChat, email, PDFs. Six-dimension research pipeline for celebrity profiles. Updated August 24.

10. **video-shotcraft** (`Vincentwei1021/video-shotcraft`) — 9.2K stars. Turns Claude Code into a motion-design studio for cinematic product/launch videos. 157 shot recipe cards, 214 motion previews, 149 sound effects, beat-synced cuts. Remotion-based. 2.5D camera movements. JianYing export. Install: `npx skills add Vincentwei1021/video-shotcraft`.

11. **Skill_Seekers** (`yusufkaraaslan/Skill_Seekers`) — 15K stars. Converts any documentation website, GitHub repo, or PDF into a Claude AI skill with conflict detection. Updated Sep 20. Install: See README.

12. **obsidian-second-brain** (`eugeniughelbur/obsidian-second-brain`) — 4.6K stars, v0.15 "The Port" (September 2026 — adds Windows support). Persistent memory across AI sessions integrated with Obsidian vaults. 47 commands, scheduled agents (morning brief, nightly consolidation, weekly review), hybrid semantic search, OKM anti-stale architecture. Install: `/plugin marketplace add eugeniughelbur/obsidian-second-brain`.

### Claude Code Platform Update (Anthropic)
- **Skills/plugins sync from claude.ai** — Added syncing of skills and plugins enabled on your claude.ai account to terminal sessions signed in with it (opt-out: `syncClaudeAiSkills: false`). Also added a send-now key (ctrl+enter), gateway sign-in improvements. Fixed 400 error when `ANTHROPIC_BASE_URL` points at a proxy (regression from v2.1.275). Source: code.claude.com/docs/en/changelog.

---

## Recurring Items Still Trending (from past 7-day digests)

- **nexu-io-open-design** — Day 7, still the DESIGN infrastructure anchor at 96.7K+ stars.
- **dietrichgebert-ponytail** — Day 5, COST #1 anchor at 143.6K stars.
- **juliusbrussee-caveman** — Day 5, still the easiest token savings (106.5K+ stars).
- **rtk-ai-rtk** — Day 7, tool-output compression (80.8K stars).
- **tt-a1i-archify** — Day 6, DESIGN diagram skill (67.1K stars). Consider dropping.

---

## Dedup Checks (SKIP — already covered)

- Egonex-AI/Understand-Anything (already in past digests)
- ayghri/i-have-adhd (already in past digests)
- affaan-m-ecc (already in past digests)
- yeachan-heo/oh-my-claudecode (already in past digests — different from oh-my-openagent)
- anthropic-one-claude + anthropic-claude-code-projects (already covered)
- dietrichgebert-ponytail, juliusbrussee-caveman, rtk-ai-rtk, nexu-io-open-design, cathrynlavery-diagram-design, etc. — recurring, use recurring_note

---

## Final Ranking Plan (15 items)

Priority order: DESIGN → COST/TOKEN → viral → Anthropic → general

1. Unity Official Plugin (DESIGN/tools, Anthropic-adjacent)
2. video-shotcraft (DESIGN/skill)
3. claude-mem (COST/skill, 94.5K)
4. planning-with-files (skill, proven perf, strong signal)
5. nanoclaw (agents/tools, security angle)
6. scientific-agent-skills (agents/skill, 46.1K, huge user base)
7. oh-my-openagent (agents/tools, 69.3K)
8. wshobson/agents (agents/tools, 39.9K)
9. alirezarezvani/claude-skills (skill, 26.2K)
10. distilly (skill, 25K)
11. Skill_Seekers (skill, 15K)
12. obsidian-second-brain (skill, v0.15 fresh release signal)
13. nexu-io-open-design (DESIGN, recurring Day 7)
14. dietrichgebert-ponytail (COST, recurring Day 5)
15. Claude Code platform update — skills sync from claude.ai (Anthropic)
