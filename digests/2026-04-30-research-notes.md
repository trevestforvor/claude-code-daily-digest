# Research Notes — 2026-04-30

Research started at ~1777565914 unix. Elapsed at end: ~480s (8 min).

## Summary of Research Approach

- Searched YouTuber channels: @Chase-H-AI, @indydevdan, @charlieautomates, @simonscrapes, @TechWithTim
- Sources: GitHub trending, Reddit, HN, Anthropic news, simonwillison.net, releasebot.io, 9to5mac, etc.

---

## YouTube Coverage (Past 7 Days)

### @Chase-H-AI (109K subs)
- **"Claude Code + Higgsfield MCP = Content MACHINE"** (published ~April 29-30, 2026)
  - Covers: Higgsfield MCP server (official AI image/video generation MCP, 30+ models)
  - https://www.youtube.com/watch?v=20BDYk-CU_o
- **"Claude Code Tutorial: Full AI Coding Workflow for Beginners (2026)"** (1 day ago)
  - General tutorial, not tool-specific
  - https://www.youtube.com/watch?v=vGx5Y_gSEO0

### @indydevdan (129K subs)
- **"My Pi Agent Teams. Claude Code Leak SIGNAL. Harness Engineering"** (~mid-April, ~3 weeks ago)
  - Covers: disler/pi-vs-claude-code repo, harness engineering concept
  - https://www.youtube.com/watch?v=RairMJflUSA
- **"Dive into Claude Code: The Design Space of Today's and Future AI Agent Systems (Apr 2026)"**
  - https://www.youtube.com/watch?v=HRI34v68igw
- No fresh video in past 72h from IndyDevDan for new tools.

### @charlieautomates (8K subs)
- No specific recent videos found in past 72h. Likely posted something but not discoverable via web search.

### @simonscrapes (71.8K subs)
- **"Every Claude Code Memory System Compared"** - already in April 24 digest
- No new videos found in past 72h.

### @TechWithTim (2M subs)
- **"Claude Code Build & Sell Masterclass"** - already in April 24 digest
- No new videos in past 72h found.

### @UICollectiveDesign (52.5K subs)
- No specific recent video found for past 72h.

### @DevelopersDigest (61.5K subs)
- No specific recent video found for past 72h.

---

## Key Findings: Items From Past 72h (April 27–30, 2026)

### 1. Higgsfield MCP (LAUNCH: April 30, 2026)
- Official MCP server from Higgsfield AI for image/video generation
- URL: https://higgsfield.ai/mcp (hosted MCP at https://mcp.higgsfield.ai/mcp)
- 30+ models: Seedance 2.0, Sora 2, Kling 3.0, Veo 3.1, WAN 2.6, Hailuo 02 (video); GPT Image 2, Flux 2, Seedream 5.0 Lite (image)
- Marketing Studio presets: UGC, unboxing, TV spot, hyper motion, product review
- Soul Character tool for cast consistency across multi-shot productions
- @Chase-H-AI covered in video from April 29-30
- Signal: Covered by multiple outlets (Phemex News, MCP.Directory, LobeHub), same-day @Chase-H-AI video

### 2. Anthropic: Claude for Creative Work — 9 New Connectors (April 28, 2026)
- Official announcement: https://www.anthropic.com/news/claude-for-creative-work
- Blender: natural-language Python API interface, Anthropic joined Blender Dev Fund as Corporate Patron (€240k/year)
- Adobe: 50+ Creative Cloud tools (Photoshop, Premiere, Express)
- Autodesk Fusion: 3D modeling via conversation
- Ableton: grounds Claude in Live/Push official docs
- Splice: music samples
- Plus 4 more (9 connectors total)
- Coverage: 9to5Mac, DEVELOP3D, RedShark News, unite.ai, letsdatascience.com, MusicTech, DigitalProduction

### 3. Claude Code v2.1.120–2.1.123 (April 28–29, 2026)
- v2.1.120 (Apr 28): ultrareview non-interactive CI mode (`claude ultrareview [target]`), Windows PowerShell support (no git required), `${CLAUDE_EFFORT}` env var for skills
- v2.1.121 (Apr 28): `alwaysLoad` MCP server option, `claude plugin prune`, type-to-filter skills search box, PostToolUse hooks can replace tool output via `hookSpecificOutput.updatedToolOutput`
- v2.1.122 (Apr 28): Bedrock service tier env var (`ANTHROPIC_BEDROCK_SERVICE_TIER`), PR URL paste in /resume finds originating session (GitHub, GitLab, Bitbucket)
- v2.1.123 (Apr 29): OAuth 401 retry loop fix
- Official source: https://code.claude.com/docs/en/changelog

### 4. Piebald-AI/tweakcc
- 1.3k stars. Customize CC system prompts, themes, toolsets, unlock unreleased features, support AGENTS.md. v4.0 added custom patches API via sandboxed scripts.
- https://github.com/Piebald-AI/tweakcc

### 5. Piebald-AI/claude-code-system-prompts
- Tracks all CC system prompts + tool descriptions across 165 versions. Updated within minutes of each release. GitHub releases notify stargazers. Updated for v2.1.123 (April 28).
- https://github.com/Piebald-AI/claude-code-system-prompts

### 6. VoltAgent/awesome-design-md
- 4,385 stars (3 days after launch March 31). 55+ brand DESIGN.md files (Stripe, Figma, Linear, Notion) formatted for AI coding agents.
- https://github.com/VoltAgent/awesome-design-md

### 7. VoltAgent/awesome-claude-design
- 68 DESIGN.md design system inspirations. One-shot UI scaffold.
- https://github.com/VoltAgent/awesome-claude-design

### 8. VoltAgent/awesome-claude-code-subagents
- 18.1k stars. 100+ specialized CC subagents with domain-specific intelligence, granular tool permissions, and model-routing (routes to right Claude model by task).
- https://github.com/VoltAgent/awesome-claude-code-subagents

### 9. sickn33/antigravity-awesome-skills
- 35.8k stars. 1,400+ agentic skills. Installer CLI, bundles, workflows. Supports .claude/skills/ path + marketplace.
- https://github.com/sickn33/antigravity-awesome-skills

### 10. jeremylongshore/claude-code-plugins-plus-skills
- 423 plugins, 2,849 skills, 177 agents. tonsofskills.com marketplace. ccpi CLI package manager.
- https://github.com/jeremylongshore/claude-code-plugins-plus-skills

### 11. anthropics/claude-plugins-official
- Official Anthropic-managed directory of high-quality Claude Code plugins. Internal (Anthropic) + external (partner) plugins.
- https://github.com/anthropics/claude-plugins-official

### 12. levnikolaevich/claude-code-skills
- 421 stars. Plugin suite + bundled MCP servers for Claude Code. Full delivery lifecycle. Includes hex-line (hash-verified editing), hex-graph (code knowledge graph), hex-ssh (remote SSH) custom MCPs.
- https://github.com/levnikolaevich/claude-code-skills

### 13. Claude Mythos Preview / Project Glasswing (Anthropic, April 7, 2026)
- Anthropic's specialized cybersecurity model. 83% success rate on zero-day vulnerability discovery (vs 67% Opus 4.6). Invitation-only. Launch partners: AWS, Apple, Broadcom, Cisco, CrowdStrike, Google, JPMorgan, Linux Foundation, Microsoft, NVIDIA, Palo Alto Networks.
- $25/$125 per M tokens. $100M in usage credits committed.
- Official: https://www.anthropic.com/project/glasswing
- Simon Willison: https://simonwillison.net/2026/Apr/7/project-glasswing/
- NOTE: April 7, not in 72h window, but not in any previous digest.

### 14. travisvn/awesome-claude-skills
- 11.9k stars. Curated list of Claude Skills, resources, tools for customizing Claude AI workflows.
- https://github.com/travisvn/awesome-claude-skills

### 15. coa00/claude-push
- Mobile push notifications for Claude Code permission requests via ntfy.sh. Allow/Deny from phone when CC asks permission.
- https://github.com/coa00/claude-push
- Relevant now that CC v2.1.120 added official mobile push notifications for Remote Control.

---

## Items NOT Included (reasons)

- disler/pi-vs-claude-code: only 488 stars, niche
- ai-boost/awesome-harness-engineering: only 616 stars, limited signal
- rohitg00/awesome-claude-design: only 219 stars
- Claude Cowork GA: April 9 (too old for 72h)
- Claude Mythos (April 7): borderline but included since not in any prior digest

## Dedup — All Slugs From Previous Digests Checked
submissions.json: openwolf, lyra-2, hyperframes, voxcpm, open-higgsfield-ai, claude-code-local, open-pencil, free-claude-code, taste-skill, impeccable, emil-kowalski-skill, anthropic-courses, archon, anthropic-theme-factory, anthropic-brand-guidelines, kepano-obsidian-skills, remotion, minimax-m2, modly, varlock, openscreen, mirofish, 3dsvg

2026-04-24.json: huashu-design, diagram-design-cathrynlavery, html-ppt-skill, design-extract, andrej-karpathy-skills, anthropic-april23-postmortem, anthropics-skills-official, n8n-skills, agentic-stack, awesome-claude-code-toolkit, simonscrapes-memory-systems-compared, techwithttim-claude-code-masterclass-2026

2026-04-25.json: claude-design, claude-code-desktop-redesign, claude-opus-4-7, cc-switch, anthropic-managed-agents, gh-skill-cli, shopify-ai-toolkit, alirezarezvani-claude-skills, anthropic-cybersecurity-skills, automattic-claude-code-wordpress, ccs, voltagent-awesome-agent-skills, awesome-claude-plugins-metrics, claude-code-ultimate-guide, elvismdev-claude-wordpress-skills

2026-04-26.json: superpowers, ui-ux-pro-max-skill, agent-browser, googleworkspace-cli-gws, claude-code-ultraplan, anthropic-cli-ant, cc-v2-1-119-120-regressions, ctx-cross-agent, hesreallyhim-awesome-claude-code, claude-code-changelog-marckrenn, gws-claude-plugin
