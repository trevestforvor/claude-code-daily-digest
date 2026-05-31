# Research Notes — 2026-05-31

## YouTube Coverage (past 7 days)

Searched: @charlieautomates, @Chase-H-AI, @indydevdan, @simonscrapes, @TechWithTim

- **@charlieautomates**: Recent videos found but nothing confirmed from May 25–31 window. Past content: "SEED + PAUL = Claude Code Meta" (March 25), channel active on plugin/skill topics.
- **@Chase-H-AI (Chase AI)**: "Claude Code + Higgsfield MCP = Content MACHINE" (April 29, outside 72h). Channel page (403 on direct fetch). No confirmed May 28–31 content.
- **@indydevdan**: Has "Claude Code Deep Mastery" playlist. No specific video from May 25–31 confirmed.
- **@simonscrapes**: "The Easiest Way to Get Ahead With Claude Code" (March 21). No May 28–31 content confirmed.
- **@TechWithTim**: Search didn't surface May 28–31 content specifically; general Claude Code tutorial presence.

**No items received 2+ YouTuber viral boost this week** (no confirmed overlapping coverage in past 7 days from our tracked channels).

---

## Candidate Items

### 1. VoltAgent/awesome-design-md ⭐ TOP PICK (DESIGN)
- **URL**: https://github.com/VoltAgent/awesome-design-md
- **Stars**: 85.5k (was 71k recently, +292 this week per star-history.com)
- **What**: 57 brand DESIGN.md files (Apple, Stripe, Notion, Airbnb, Anthropic, etc.) you drop into a project — coding agents generate brand-matched UI
- **Concept**: DESIGN.md = a plain-text design system that AI reads to generate consistent UI
- **Not in submissions or digests** ✅ NEW

### 2. Claude Opus 4.8 + Dynamic Workflows (ANTHROPIC OFFICIAL)
- **URL**: https://www.anthropic.com/news/claude-opus-4-8
- **Blog**: https://claude.com/blog/introducing-dynamic-workflows-in-claude-code
- **Released**: May 28, 2026
- **Key**: Dynamic workflows = up to 1,000 subagents, 16 concurrent. Ultracode = `/effort ultracode` = xhigh + automatic workflow orchestration. Fast mode: 2x cost / 2.5x speed. Example: Bun rewrite (750K lines, 11 days, 99.8% test pass)
- **Not in submissions or digests** ✅ NEW

### 3. alirezarezvani/claude-skills (v2.9.0, updated May 28)
- **URL**: https://github.com/alirezarezvani/claude-skills
- **Stars**: 16.7k
- **What**: 337 skills for Claude Code + 12 other agents. Standout: Skill Security Auditor (pre-install vulnerability scan), C-Suite agent collection (66 personas), cross-platform (13 tools), 533 Python tools using stdlib only
- **Install**: `/plugin marketplace add alirezarezvani/claude-skills`
- **Not in submissions or digests** ✅ NEW

### 4. colbymchenry/codegraph (RECURRING — Day 6 from May 26)
- **URL**: https://github.com/colbymchenry/codegraph
- **Stars**: 35.1k (was ~21k on May 26, +14k in one week peak)
- **Release**: v0.9.7 May 28 — active development
- **What**: Pre-indexed code knowledge graph. ~62% fewer tool calls, ~57% fewer tokens, 23% faster. 100% local. Works with Claude Code, Cursor, Codex, Gemini, OpenCode, Kiro.
- **Install**: `npx @colbymchenry/codegraph` or `curl -fsSL ... | sh`
- **Was in May 26 digest** — still trending, new release, justified recurring

### 5. anthropics/claude-plugins-official
- **URL**: https://github.com/anthropics/claude-plugins-official
- **Stars**: 28.9k
- **What**: Official Anthropic-managed directory of curated Claude Code plugins. Has /plugins (Anthropic) + /external_plugins (community). Install via `/plugin install {name}@claude-plugins-official`
- **Not in submissions or digests** ✅ NEW

### 6. microsoft/azure-skills (v1.1.62, May 29)
- **URL**: https://github.com/microsoft/azure-skills
- **Stars**: 1.1k
- **What**: Official Microsoft agent plugin. 20+ Azure skills (deploy, diagnose, cost optimize). Install via `/plugin install azure@claude-plugins-official`. Latest release May 29 2026.
- **Not in submissions or digests** ✅ NEW

### 7. bradautomates/claude-video
- **URL**: https://github.com/bradautomates/claude-video
- **Stars**: 1.6k
- **What**: /watch skill — Claude downloads any video, extracts frames, transcribes audio, hands all to Claude for analysis. v0.1.3 May 8.
- **Install**: `/plugin marketplace add bradautomates/claude-video` then `/plugin install watch@claude-video`
- **Not in submissions or digests** ✅ NEW (slightly outside 72h window but recent)

### 8. sst/opencode (OpenCode)
- **URL**: https://github.com/sst/opencode
- **Stars**: 161k (vs Claude Code's 124k — just overtook it)
- **What**: Model-agnostic open-source alternative to Claude Code. 75+ providers, Ollama support. Anthropic legal request in March to strip Claude Pro/Max OAuth.
- **Not in submissions or digests** ✅ NEW

### 9. simonwillison.net — "How we contain Claude across products" (May 30)
- **URL**: https://simonwillison.net/2026/May/30/how-we-contain-claude/
- **What**: Anthropic's sandboxing overview — gVisor (claude.ai), Seatbelt/Bubblewrap (Claude Code local), full VM (Claude Cowork). First comprehensive public breakdown of their containment architecture.
- **Not in submissions or digests** ✅ NEW

### 10. nikvdp/cco
- **URL**: https://github.com/nikvdp/cco
- **Stars**: 402
- **What**: Thin protective layer — wraps Claude Code in best available sandbox (sandbox-exec on macOS, bubblewrap on Linux, Docker fallback). Seamless UX.
- **Install**: `curl -fsSL https://raw.githubusercontent.com/nikvdp/cco/master/install.sh | bash`
- **Not in submissions or digests** ✅ NEW

### 11. levnikolaevich/claude-code-skills
- **URL**: https://github.com/levnikolaevich/claude-code-skills
- **Stars**: 480
- **What**: 7 plugins + 4 bundled MCP servers (hex-line hash-verified editing, hex-graph code knowledge graph, hex-ssh remote SSH, hex-research markdown indexing). Full delivery lifecycle.
- **Install**: `/plugin marketplace add levnikolaevich/claude-code-skills`
- **Not in submissions or digests** ✅ NEW

### 12. rohitg00/awesome-claude-code-toolkit
- **URL**: https://github.com/rohitg00/awesome-claude-code-toolkit
- **Stars**: 1.9k
- **What**: 135 agents, 35 skills, 42 commands, 176+ plugins, 20 hooks, 15 rules, 7 templates, 14 MCP configs, 26 companion apps. Structured into 10 agent categories.
- **Not in submissions or digests** ✅ NEW (though it's a list repo, lower priority)

---

## Items Skipped (why)
- **Higgsfield MCP**: April 30 launch, Chase AI video April 29 — outside 72h window
- **VILA-Lab/Dive-into-Claude-Code**: Already in submissions.json
- **2389-research/claude-plugins**: 64 stars, too low
- **rugvedp/Trends-MCP**: 15 stars, too small

---

## Dedup check
- May 28 digest: cc-plugins-plus-skills ✅ (jeremylongshore — different from alirezarezvani)
- May 28 digest: claude-forge ✅ (sangrokjung — different)  
- May 30 digest: ecc-everything-claude-code ✅ (affaan-m/ECC — different)
- May 30 digest: claude-managed-agents-sandboxes ✅ (different from dynamic workflows)
- May 26 digest: codegraph — recurring with note ✅
