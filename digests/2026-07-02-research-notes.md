# Research Notes — 2026-07-02

Research window: ~20 min. Started at ~16:05 UTC.

## YouTube Coverage (past 7 days)

Sources checked: TechWithTim (2M subs), IndyDevDan (129K), Chase AI (109K), Simon Scrapes (71.8K), Developers Digest (61.5K), UI Collective (52.5K), Charlie Automates (8.1K), Adrien AI Designer (4K).

- **TechWithTim**: Beginner Claude Code tutorial playlist active; no new tool-discovery content in past 72h specifically. "Something Big Is Happening" X post (June 30) referenced general AI-first software factory trends, not a specific tool.
- **Charlie Automates**: "How to Build Effective Claude Code Agents in 2026" (~2 weeks ago); no new video in past 72h.
- **Chase AI**: General Claude Code plugins/skills content, no specific July video found in search window.
- **Simon Scrapes**: "Auto Claude: AI Coding on Steroids!" and "Claude Opus 4.6 Deep Dive" exist but exact publish dates unclear; neither is confirmed past 72h.
- **IndyDevDan**: June 14, 2026 video ("Kimi K2.7 vs GLM-5.2 in Hermes Agent"); no Claude Code specific content in past 72h.
- **Developers Digest, UI Collective, Adrien AI Designer**: No Claude Code coverage found in past 72h.

**Verdict**: No YouTuber from the curated list had Claude Code–specific content in the past 72 hours. No `creator_buzz` signal applies to today's items.

---

## High-Signal Items Found

### 1. Claude Code Steganography Discovery — HN #1, 605 Points (VIRAL)
- Discovery by thereallo.dev (June 30, 2026): Claude Code v2.1.196 had been encoding hidden Unicode markers in system prompts since v2.1.91 (April 2, 2026) to detect Chinese proxies / AI lab routing.
- Mechanism: Date separator flipped (2026-06-30 → 2026/06/30) and apostrophe in "Today's" cycled through 4 Unicode chars to encode proxy hostname info.
- Hit HN #1 at 605 points / 190 comments. The Register, Semafor, The Information, TechTimes all covered.
- Anthropic confirmed: "experiment to prevent account abuse from unauthorized resellers and protect against distillation." Fix merged, shipped in v2.1.197.
- Primary URL: https://thereallo.dev/blog/claude-code-prompt-steganography
- HN: https://news.ycombinator.com/item?id=48734373
- The Register: https://www.theregister.com/ai-and-ml/2026/07/01/anthropic-is-removing-its-covert-code-for-catching-chinese-competitors/5265366

### 2. Claude Code v2.1.198 — Background Agents Auto-PR, Explore→Opus, /dataviz (OFFICIAL, July 1)
- Background agents launched from `claude agents` now auto-commit, push, and open a **draft PR** when finishing code work in a worktree — no longer stops to ask.
- Built-in **Explore agent upgraded from Haiku to Opus** (inherits main session model, capped at Opus).
- **/dataviz skill** added for chart/dashboard design guidance with runnable color-palette validator.
- New Notification hook events: `agent_needs_input` and `agent_completed` for background sessions.
- 18 bug fixes to agent infrastructure, network resilience, fullscreen UI.
- Primary URL: https://github.com/anthropics/claude-code/releases
- Source: https://x.com/ClaudeCodeLog/status/2072425708467486973

### 3. ECC (affaan-m/ECC) — 211.9K Stars, v2.0.0 June 2026 (ECOSYSTEM, HUGE)
- Agent harness performance optimization system: 261 skills, "instincts" (auto-triggered behavior patterns), memory optimization, security (AgentShield integration), research-first development.
- Works across Claude Code, Codex, Opencode, Cursor, Gemini, Zed, GitHub Copilot, and more. MIT.
- v2.0.0 (June 2026): stable graduation; control-plane substrate, worktree-lifecycle service.
- 211.9K stars, 32.5K forks, 230+ contributors.
- Primary URL: https://github.com/affaan-m/ECC
- NOT in submissions.json.

### 4. Claude in Chrome GA — All Max Users (OFFICIAL, July 1)
- Remaining Max waitlist users granted access July 1, 2026. Chrome extension now in general availability.
- Defaults to Haiku 4.5 for fast response; users can switch to Sonnet 4.5.
- New: Claude handles image uploads; screenshot + screen-region selection for visual queries.
- Primary URL: https://claude.com/claude-for-chrome

### 5. claude-context (Zilliz) — 12K Stars, Code Search MCP (COST, MCP)
- MCP server adding BM25 + dense vector hybrid semantic code search to Claude Code and 12 other agents.
- "Make entire codebase the context for any coding agent" — only loads relevant code nodes, not whole directories.
- v0.1.15. Supports OpenAI, VoyageAI, Gemini, Ollama embeddings. Works with Claude Code, Codex, Gemini CLI, Cursor, Windsurf, VS Code, Augment, and more.
- ~12K stars, ~890 forks.
- Primary URL: https://github.com/zilliztech/claude-context
- NOT in submissions.json.

### 6. Claude Code Weekly Limits +50% Through July 13 (COST, Anti-Codex)
- Anthropic raised Claude Code weekly usage limits 50% for all paid plans through July 13, 2026.
- Stacks with separate 2× 5-hour limit doubling. Already live — no opt-in needed.
- Framed as a response to engineering teams splitting workloads between Claude Code and Codex after OpenAI shipped `/goal` autonomous loops.
- HN discussion: https://news.ycombinator.com/item?id=48126429
- apidog: https://apidog.com/blog/claude-code-weekly-limits-50-percent-increase-july-2026/

### 7. Pexo Skills (pexoai/pexo-skills) — 729 Stars, 3.7K Installs (DESIGN)
- Collection of open-source agent skills for AI content creation: images, audio, video.
- Pexo-agent auto-selects from 10+ models (Seedance 2, Kling 3.0, Veo 3.1) per content type.
- 5 input types: text-to-video, image-to-video, URL-to-video, script-to-video, audio-to-video.
- Full pipeline: multi-shot sequencing, music, subtitles, lip sync, final assembly.
- Compatible with Claude Code, OpenClaw, Cursor, and Agent Skills spec.
- Primary URL: https://github.com/pexoai/pexo-skills

---

## Items Checked But Skipped
- skill-of-skills (the911fund): only 20 stars — too early.
- Piebald-AI/claude-code-system-prompts v2.1.198: recurring; covered June 30, minor update.
- Claude Code Foundations webinar (July 8): event, not a tool.
- Charlie Automates / TechWithTim recent videos: not past 72h specifically.

---

## Dedup Check
- All 7 items above are absent from submissions.json.
- None appeared in July 1, June 30, or June 29 digests.
- ECC (affaan-m) is not in submissions though other affaan-m repos are; ECC is a distinct major project.
