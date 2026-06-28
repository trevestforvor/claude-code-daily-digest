# Research Notes — 2026-06-28

## Summary

8 confirmed items for today's digest. No new Claude Code release (v2.1.195 was last, covered June 27). Fable 5 story has significant new developments (Day 16, Axios "soon" scoop). Karpathy CLAUDE.md v10 is the day's big viral item.

---

## YouTube Coverage

- **@Chase-H-AI**: "The Top 10 Claude Code Plugins to 10x Your Next Project (June '26)" (https://www.youtube.com/watch?v=IShdbDP4Jgg) — mentioned GWS plugin, Codex plugin, NotebookLM CLI connector. Also "How to Build Effective Claude Code Agents in 2026" (~1 week ago). Could not verify exact content (YouTube 403).
- **@simonscrapes**: "Watch This If You're Serious About Claude Code (Most People Skip This Step)" (June 25, https://www.youtube.com/watch?v=CBcyKfpldTo); "Claude Code Has Quietly Evolved (People Haven't Noticed)" (June 23). Content not retrievable (YouTube 403).
- **@charlieautomates**: SEED/PAUL/CARL content already covered in June 25 digest. No new Claude Code content this week beyond that.
- **@indydevdan, @adrienaidesigner, @UICollectiveDesign, @DevelopersDigest, @TechWithTim**: No new Claude Code-specific content identified in past 7 days.

---

## Confirmed Items

### 1. karpathy-claude-md-v10 (viral, skill) ★★★
- Andrej Karpathy CLAUDE.md v10 — 6 new agent self-check rules. Circulated June 27 on X.
- Rules: verification before fixing, debugging discipline, dependency hygiene, named loop failure modes.
- 200,000+ combined stars across forks (forrestchang/andrej-karpathy-skills + multica-ai/andrej-karpathy-skills).
- TechTimes covered June 28. Authenticity unconfirmed — Karpathy joined Anthropic pre-training ~5 weeks ago.
- primary: https://github.com/multica-ai/andrej-karpathy-skills
- secondary: https://github.com/forrestchang/andrej-karpathy-skills, https://www.techtimes.com/articles/319214/20260628/karpathy-claudemd-grows-ten-rules-new-self-check-protocol-ai-coding-loops.htm
- install: npx skills add multica-ai/andrej-karpathy-skills

### 2. fable5-mythos-day16-soon (recurring, anthropic, viral) ★★★
- Day 16. Mythos 5 cleared for US critical infrastructure via Annex A + Lutnick letter (~100 orgs).
- Axios June 27 scoop: Fable 5 "on track to return soon" after weekend government talks.
- Zhipu GLM-5.2 (MIT open-source, Hugging Face) matches Mythos on CTF/static-vuln/agentic-bug-finding benchmarks — weakening national security rationale for ban.
- Pentagon/NSA final green light still pending. Everyone still on Opus 4.8.
- primary: https://www.anthropic.com/news/fable-mythos-access
- secondary: https://www.axios.com/2026/06/27/anthropic-fable-5-return-soon, https://gizmodo.com/expect-claude-fable-5-to-be-turned-back-on-in-a-matter-of-days-report-says-2000778672, https://www.nbcnews.com/tech/tech-news/us-government-gives-anthropic-green-light-limited-re-release-mythos-5-rcna352018

### 3. zhipu-glm-52 (viral, cost) ★★
- Zhipu GLM-5.2, MIT-licensed open-source model on Hugging Face.
- Matches Mythos 5 on CTF challenges, static vulnerability analysis, and agentic bug-finding benchmarks.
- No regional restrictions; released June 13.
- Directly weakens national-security rationale for Fable 5 export ban.
- primary: https://huggingface.co/ZhipuAI/GLM-5.2

### 4. claude-cognitive (cost, skill) ★★
- Attention-based working memory for Claude Code.
- HOT files (>0.8 attention) get full injection, WARM (0.25–0.8) headers only, COLD skipped.
- Multi-instance state sharing. 449 stars.
- primary: https://github.com/GMaN1911/claude-cognitive

### 5. statewright (mcp) ★★
- State machine guardrails for Claude Code / Codex / Cursor / Pi via MCP.
- Rust engine (Apache 2.0), MCP gateway (FSL-1.1-ALv2 → Apache 2.0 in 2029).
- Per-state tool restrictions: Claude sees 5 tools instead of 30.
- SWE-bench subset: local models 2/10 → 10/10 with constraints. 402 stars. Show HN.
- primary: https://statewright.ai/
- secondary: https://github.com/statewright/statewright, https://news.ycombinator.com/item?id=48108778

### 6. gws-claude-plugin (skill) ★★
- 92 skills for full Google Workspace (Gmail, Drive, Calendar, Sheets, Docs, Chat, Slides, Forms, Tasks, Keep, Meet, Classroom+).
- Google shipped gws CLI March 2026.
- 4,900 stars. Chase AI featured in June 2026 "Top 10" video.
- primary: https://github.com/WadeWarren/gws-claude-plugin
- creator_buzz: @Chase-H-AI (June 2026 Top 10 video)

### 7. claude-trusted-devices-remote (anthropic) ★
- Added June 26: Team/Enterprise admins can require device verification before Remote Control sessions.
- Enrollment only offered after full sign-in. Off by default.
- primary: https://code.claude.com/docs/en/remote-control

### 8. awesome-claude-connectors (mcp, marketplace) ★
- 511 verified MCP integrations directory as of June 26.
- This week's 26 additions include 5 agent-ops tools: AgentGuard, Origin, Mnemoverse Memory, AgentMail, Alpic.
- primary: https://github.com/rdmgator12/awesome-claude-connectors

---

## Items Skipped

- claude-code-v2-1-195 (Week 26 Recap) — already in June 27 digest
- claude-code-artifacts — covered June 19 digest
- enterprise-mcp-okta — covered June 19 digest
- All slugs in submissions.json — skipped per guardrails
