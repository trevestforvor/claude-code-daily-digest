# Research Notes — 2026-05-05

Research started: 1777997241 (elapsed ~365s at write time)

---

## YouTube Coverage (past 7 days)

### @simonscrapes (Simon Scrapes, 71.8k subs)
- **"Stop Downloading Claude Code Skills. Do This Instead."** (uploaded ~April 30, 5 days ago) — https://www.youtube.com/watch?v=FD53kEpLh9c
  - Argues against downloading isolated skills; recommends building integrated skill *systems* with an orchestrator skill managing dependencies.
  - Does not promote a specific repo—conceptual/methodology video.
- **"Build Real AI Systems With Claude Code (Step-by-Step)"** (3 weeks ago)
- **"Don't Fall Behind! Every Claude Code Update (Apr 2026)"** (March 31)
- Note: "Stop Fixing Your Claude Skills. Autoresearch Does It For You" (https://www.youtube.com/watch?v=qKU-e0x2EmE) — channel unknown, title explicitly references autoresearch. Strong signal for uditgoenka/autoresearch.

### @Chase-H-AI (Chase AI, 109k subs)
- **"Top 10 Claude Code Skills, Plugins & CLIs (April 2026)"** — https://www.youtube.com/watch?v=KjEFy5wjFQg
  - YouTube page returned 403; specific tools in video unverified. April video, published before the 72h window.
- Note: channel is active and regularly posts skill/plugin roundups.

### @indydevdan (IndyDevDan, 129k subs)
- No confirmed recent Claude Code video from the past 72h via search. Channel page returned 403.
- Skip this run.

### @charlieautomates (Charlie Automates, 8k subs)
- Blog post: "I Gave Claude Cowork My Worst Inbox (47,693 Emails)" — about Claude Cowork (not a tool repo).
- YouTube content not directly surfaced for past 72h. Skip for creator_buzz this run.

### @adrienaidesigner (Adrien | AI Designer, 4k subs)
- No Claude Code content found in past 7 days.

### @UICollectiveDesign (UI Collective, 52.5k subs)
- No specific new video in past 72h confirmed.

### @DevelopersDigest (Developers Digest, 61.5k subs)
- Not directly surfaced in past 72h research.

### @TechWithTim (Tech With Tim, 2M subs)
- Not directly surfaced in past 72h research.

---

## Candidate Items (new, not in recent 7-day digests)

### TIER 1 — Strong candidates

1. **uditgoenka/autoresearch** — https://github.com/uditgoenka/autoresearch
   - Stars: 4.3k | Forks: 331
   - Latest: v2.0.03 released May 2, 2026
   - Autonomous goal-directed iteration skill for Claude Code (+ OpenCode, Codex). Inspired by Karpathy's autoresearch paper/repo.
   - Concept: Set GOAL → agent runs Modify→Verify→Keep/Discard loop forever.
   - 11 commands, automatic rollback, git-based memory, domain-agnostic.
   - YouTube: "Stop Fixing Your Claude Skills. Autoresearch Does It For You" — explicit title reference.
   - Discussion #528 on karpathy/autoresearch: "76% latency drop, zero manual tuning."
   - NOT in submissions.json or any recent digest.
   - Install: `npx skills add uditgoenka/autoresearch`

2. **skyvern** — https://github.com/Skyvern-AI/skyvern (approx 21k stars)
   - Browser automation via vision-LLMs; featured W18 skill in claude-code-plugins-plus-skills marketplace.
   - Shipped `/qa` and `/smoke-test` Claude Code skills.
   - Skyvern blog post: "Getting Claude to QA its own work" (May 2026 publish date unclear but fresh).
   - Concrete: 70% PR one-shot rate (up from 30%), QA loop cut in half.
   - Install: `pip install skyvern && skyvern setup claude-code`
   - NOT in submissions.json or any recent digest.

3. **alirezarezvani/claude-skills** — https://github.com/alirezarezvani/claude-skills
   - Stars: 13.8k | Forks: 1.8k
   - 235+ production-ready skills across 9 domains: engineering, marketing, product, compliance, C-level advisory.
   - 305 Python CLI tools (stdlib-only). Works with 12 AI coding tools (Claude Code, Codex, Gemini CLI, Cursor, Aider, Windsurf, Kilo Code, OpenCode, Augment, Antigravity, OpenClaw, Hermes Agent).
   - NOT in submissions.json or any recent digest.
   - Install: `/plugin marketplace add alirezarezvani/claude-skills`

4. **BeehiveInnovations/pal-mcp-server** — https://github.com/BeehiveInnovations/pal-mcp-server
   - Stars: 11.5k | Forks: 992
   - Multi-model MCP server: Claude Code + Gemini/OpenAI/Azure/Grok/Ollama/OpenRouter. Formerly zen-mcp-server.
   - 50+ models, CLI-to-CLI bridge (clink), context revival, conversation continuity.
   - NOT in submissions.json or any recent digest (zen-mcp-server was different slug).
   - Install: `git clone https://github.com/BeehiveInnovations/pal-mcp-server.git && ./run-server.sh`

### TIER 2 — Solid candidates

5. **Claude Code v2.1.128** — https://github.com/anthropics/claude-code/releases/tag/v2.1.128
   - Released May 4, 2026
   - Key: bare `/color` picks random session color; `/mcp` shows tool count per server; `--plugin-dir` accepts `.zip` archives; `--channels` works with console auth; `workspace` is reserved MCP server name; git EnterWorktree creates from local HEAD.
   - Last digest had v2.1.126 (May 1).
   - NOT in any recent digest.

6. **ComposioHQ/awesome-claude-plugins** — https://github.com/ComposioHQ/awesome-claude-plugins
   - Stars: 1.6k | Forks: 365
   - 40+ plugins organized in 9 categories; 500+ app integrations (connect-apps plugin). JS-heavy.
   - NOT in submissions.json or any recent digest.
   - Install: `claude --plugin-dir ./plugin-name`

7. **quemsah/awesome-claude-plugins** — https://github.com/quemsah/awesome-claude-plugins
   - Stars: 637 | Forks: 80
   - Data-driven approach: n8n workflows auto-collect adoption metrics across 15.5k repos.
   - Unique angle: ranking by actual usage/stars rather than editorial curation.
   - NOT in any digest.

8. **rohitg00/awesome-claude-code-toolkit** — https://github.com/rohitg00/awesome-claude-code-toolkit
   - Stars: 1.5k | Forks: 470
   - 135 agents, 35 curated skills + SkillKit (400k skills), 42 commands, 176+ plugins, 20 hooks.
   - Last updated March 2026 — slightly old but comprehensive.
   - NOT in recent digests.
   - Install: `/plugin marketplace add rohitg00/awesome-claude-code-toolkit`

9. **zerowing113/claude-youtube-skill** — https://github.com/zerowing113/claude-youtube-skill
   - Converts YouTube videos/playlists to detailed markdown with embedded players + clickable timestamps.
   - Requires Python 3.8+; auto-installs youtube-transcript-api + yt-dlp.
   - Install: clone + `python setup.py`, invoke via `/youtube [URL]`
   - Stars unknown/small; novel use case.

10. **Anthropic Enterprise Joint Venture** — https://techcrunch.com/2026/05/04/anthropic-and-openai-are-both-launching-joint-ventures-for-enterprise-ai-services/
    - Announced May 4, 2026: Anthropic building enterprise AI services company with Blackstone, H&F, Goldman Sachs.
    - Business news, not a tool/skill — lower relevance for digest format.

### Already-covered in past 7 days (SKIP)
- awesome-agent-skills (VoltAgent) — April 28, 29, May 1
- antigravity-awesome-skills — April 29, 30, May 1
- claude-code-plugins-plus-skills — April 28-May 1
- anthropics/claude-plugins-official — April 30
- claude-code-ultrareview — April 28
- claude-code-custom-themes — April 28
- claude-managed-agents-memory — April 29, May 1
- graphify — April 27-29
- claw-code — April 27-May 1
- codeburn — April 27, 29
- caveman — April 28-29
- claude-code-routines — April 27
- claude-mythos-glasswing — April 30
- etc.

---

## Anthropic Official Updates (past 72h)
- Claude Code v2.1.128 (May 4) — see above
- Week 17 What's New: /ultrareview public research preview, session recap, custom themes, web redesign (April 20-24)
- Week 16: Claude Opus 4.7 default on Max/Team Premium, xhigh effort, Routines, /effort slider, native binaries (April 13-17)
- Enterprise JV with Blackstone/H&F/Goldman (May 4)

---

## Key Signal: Recurring items eligible for recurring_note
- If autoresearch hits digests multiple days it should get recurring_note
- pal-mcp-server could note "formerly zen-mcp-server"
