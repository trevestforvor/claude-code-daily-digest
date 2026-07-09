# Research Notes — 2026-07-09

## YouTube Coverage (past 7 days)

### @charlieautomates (8K subs)
- "Watch This If You're Just Learning How to Use Claude Code in 2026" (1 week ago)
- "How to Build Effective Claude Code Agents in 2026" (3 weeks ago)
- "2 Claude Code Repos NOBODY'S Talking About Yet" — April 3, 2026 (older, not recent)
- **No specific new tool drops in the last 7 days confirmed for a specific repo match**

### @Chase-H-AI (109K subs)
- "Use These 17 Claude Plugins, It Will Make You 10x Better" (~2 weeks ago, late June 2026)
- Could not fetch video content (403) — skipping specific plugin list
- Not a July 7–9 release, not boosting any specific items

### @indydevdan (129K subs)
- "New Claude Code Update Changes AI Agents Forever!" — recent but couldn't confirm exact date or tool
- "Claude Code Agent View in 2026: What Changed" (1 month ago)
- Not covering new tool in 72h window with verifiable link

### @simonscrapes (71.8K subs)
- "Every Claude Code Memory System Compared (So You Don't Have To)" — older
- "FREE Claude Desktop + Claude Code! Full Setup With Real Anthropic Models (July 2026)" — 2 days ago (July 7)
  - Covers free Cowork + official Anthropic models; no new tool disclosed
- No new tool drops with verifiable links for this week

### @adrienaidesigner (4K subs)
- Covered Claude Design 2.0 extensively last week (already in July 8 digest)
- No new July 7–9 videos found

### @UICollectiveDesign (52.5K subs)
- No new July 7–9 content found

### @DevelopersDigest (61.5K subs)
- No specific July 7–9 content with Claude Code tool drops confirmed

### @TechWithTim (2M subs)
- No specific July 7–9 content confirmed

**YouTube boost note:** No single tool was covered by 2+ YouTubers from sources/youtubers.json in the past 7 days with verifiable evidence. Not applying viral boosts.

---

## New Items Found (July 7–9, 2026)

### 1. Claude Reflect (NEW — July 9, Anthropic)
- Announced today; coverage: TechCrunch ("quietly selling you on AI"), Digital Trends ("your usual yearly Wrapped, but with Anthropic's AI"), Engadget ("wants to help you log off of Claude"), Mezha, TechBuzz, BitcoinWorld, TestingCatalog
- Usage reflection dashboard: summarizes Claude activity over 1/3/6/12 months
- Breaks down: topics engaged, task-type patterns, 4D AI Fluency Framework (delegation, description, discernment, diligence)
- Features: quiet hours, break nudges after chosen usage amount, reflection prompts
- Availability: Free, Pro, Max users with Memory turned on (Settings on web + desktop)
- Also: Enterprise admin analytics now shows usage+cost by group/user with artifacts created, files edited, skills/connectors used
- Privacy: incognito + health-integration convos excluded entirely

### 2. Claude Cowork Mobile/Web (MISSED — announced July 7)
- NOT in July 7 or July 8 digests — major feature that slipped through
- Coverage: TechCrunch, MacRumors, VentureBeat, 9to5Mac, Android Authority
- VentureBeat headline: "most users aren't coding" (key data reveal)
- Cowork now on iOS, Android, and claude.ai web (previously desktop-only)
- Background cloud execution: tasks run in cloud even with laptop closed
- Cross-device continuity: start on desktop, check on phone, pick up anywhere
- Microsoft 365 write tools: draft email, manage calendar, OneDrive/SharePoint files
- Shared home tab: Chat and Cowork in one sidebar on web+desktop
- Mobile notifications when Claude needs approval or has output ready
- Doubled Cowork usage limits through August 5, 2026

### 3. Claude Code v2.1.205 (NEW — July 8, after July 8 digest)
- July 8 digest had v2.1.203+v2.1.204; v2.1.205 released later that day
- Auto mode: new rule blocks tampering with session transcript files
- /doctor command: full setup checkup (install, auth, permissions, hooks)
- JSON schema: fixed --json-schema silently producing unstructured output on invalid schema
- JSON schema: fixed format keyword being rejected
- Fixed: message sent while Claude working silently lost when --max-turns hit
- Fixed: Windows worktree removal deleting files outside worktree (NTFS junction/symlink)
- Fixed: background agents staying shown as "failed"/"completed" after resume with SendMessage

### 4. ARIS (Auto-Research-In-Sleep) — wanshuiyin/Auto-claude-code-research-in-sleep
- 13.2K stars, first release v0.1.0 on 2026-04-02, current v0.4.21 (June 28)
- 70+ Markdown-only skills for full ML research pipeline (no framework, no lock-in)
- Skills: /research-pipeline, /paper-writing, /paper-slides, /rebuttal, /idea-creator, /proof-checker, /citation-audit, /experiment-bridge
- Cross-model adversarial review: Claude Code executes, GPT-5.5 xhigh reviews
- Anti-hallucination: DBLP/CrossRef citation audit
- Persistent Research Wiki; supports Feishu/Zotero/Obsidian/GPU integrations
- Manual-review MCP (#246) for zero-cost cross-model review (paste to DeepSeek/Kimi/ChatGPT)
- Works with Claude Code, Codex, OpenClaw, or any LLM agent
- Install: `git clone github.com/wanshuiyin/Auto-claude-code-research-in-sleep && bash tools/install_aris.sh`
- Multiple forks at echoxiangzhou/, mumulin5/ — community activity strong

### 5. alirezarezvani/claude-skills
- ~21.8K stars (per direct GitHub page fetch), v2.11.1 released July 3, 2026
- 355 skills across 18 domains, 83 marketplace plugins, 602 Python CLI tools, 711 templates
- 13-tool compatibility: Claude Code, Codex, Gemini CLI, OpenClaw, Hermes, Cursor, Aider, Windsurf, Kilo Code, OpenCode, Augment, Antigravity, Mistral Vibe
- Note: star count inconsistency across sources (5.2K to 23.3K cited); direct fetch showed 21.8K
- Not in recent digests (last 7 days)

---

## Recurring Items (with July 9 status)

- **alibaba-bans-claude-code**: Day 2 — BAN EFFECTIVE TOMORROW (July 10). Most time-sensitive.
- **claude-code-steganography**: Day 9 — Alibaba ban imminent. Anthropic post-mortem STILL not published.
- **claude-code-limits-july13**: Day 8 — 4 days remaining. Expires July 13 6 PM PDT.
- **fable5-metered-billing**: Day 9 — Billing now fully active. Fading but still operational.
- **mattpocock-skills**: Day 7 — 155K stars, /grill-with-docs now prominent.
- **graphify**: Day 4 — Daily release cadence continues.
- **karpathy-claude-md-v10**: Day 8 — ~225K combined stars.
- **obra-superpowers**: Day 3 — 249K stars, Kimi Code/Pi/Antigravity harnesses added.
- **career-ops**: Day 2 — 57.6K stars, viral story continues.
- **claude-science**: Day 2 — Grants open through July 15 (6 days left).
- **mvanhorn-last30days-skill**: Day 2 — Was #1 GitHub trending July 8.

---

## Skipped Items
- doc2skill (28 stars — too few)
- Skill Seekers / yusufkaraaslan (no star count confirmed, v3.7.0 but niche audience)
- Charlie Automates "2 repos" video — April 2026, too old for 72h window
- rugvedp/Trends-MCP — too small
