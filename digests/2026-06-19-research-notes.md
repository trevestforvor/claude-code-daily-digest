# Research Notes — 2026-06-19

## Elapsed: ~570s of 1200s cap

## YouTube Coverage

### @charlieautomates (8K subs)
- Last confirmed coverage: June 18 digest — Graphify (knowledge graph + Obsidian setup)
- Website blog post from June 4 about YouTube automation with Claude AI
- **No new Claude Code video confirmed June 17-19** — skip this run.

### @Chase-H-AI (109K subs)
- Prior coverage: "Loops" video (June 15) covered in June 18 digest
- "Top 10 Claude Code Plugins — June '26" covered in June 17 digest
- **No new video confirmed June 17-19** — skip this run.

### @simonscrapes (71.8K subs)
- "You're Only Using 10% of Claude Code" (June 16) — covered in June 17 digest
- "Claude Code Masterclass for People Who Don't Code" (June 14) — covered in June 17 digest
- **No new video confirmed June 17-19**; channel publishes 1-2x per week.

### @indydevdan (129K subs)
- "My Pi Agent Teams. Claude Code Leak SIGNAL. Harness Engineering" — April 6 (older)
- "Engineers, DELETE the BASH Tool" — May 2026
- "One Agent Is NOT ENOUGH: Agentic Coding BEYOND Claude Code" — likely May/June
- "Tactical Agentic Coding" course published June 13, 2026 (14-module, 6.5h course, not a YouTube video)
- **No new YouTube video confirmed June 17-19** — skip this run.

### @DevelopersDigest (61.5K subs)
- Blog post about Omnigent meta-harness (June 13) — Databricks
- Blog post about Claude Code agent teams/subagents for 2026
- **No new YouTube video confirmed specifically June 17-19.**

### @simonscrapes / @UICollectiveDesign / @TechWithTim / @adrienaidesigner
- No new Claude Code videos confirmed for June 17-19 specifically in these searches.

## Key Findings — Past 72h

### Anthropic Official (June 17-19)
1. **Claude Code Artifacts** (June 18) — Beta for Team & Enterprise. Turns terminal session output into live, shareable interactive HTML pages. Use cases: PR walkthroughs, incident pages, dashboards, checklists. Private org-only sharing + version history. URL: claude.com/blog/artifacts-in-claude-code
2. **Claude Design June 2026** (June 17) — Major overhaul. Design system imports (GitHub repos/files/uploads). /design-sync bidirectional Claude Code ↔ Design sync. Direct canvas editing. Auto brand-compliance checks. VentureBeat called it "a fix for Claude Design's token-burning problem." URL: claude.com/blog/claude-design-stays-on-brand-for-daily-work
3. **Enterprise-Managed MCP Auth / Okta** (June 18) — Zero-touch MCP connector provisioning. Admin sets up in Okta → users get auto-access on first Claude login. 7 providers at launch (Asana, Atlassian, Figma, Supabase, Slack soon). Ramp with 2,000 employees live Day 1.
4. **Claude Code v2.1.183** (June 19, released today) — Auto mode now blocks: git reset --hard, git checkout -- ., git clean -fd, git stash drop (without explicit request); git commit --amend on agent-not-made commits; terraform/pulumi/cdk destroy. Also: deprecated model warnings, attribution.sessionUrl setting, /config --help.

### Viral / Recurring
5. **Fable 5 Ban Day 7** — Trump at G7 France said talks "going fine." Fable 5 #1 DeepSWE (70% PASS@1, 3 pts ahead of GPT-5.5). Refund deadline June 20 at 11:59 PM.

### Community Tools (high signal)
6. **Omnigent (Databricks)** — June 13 open-source by Matei Zaharia. Meta-harness above Claude Code, Codex, Pi. 4k stars. Polly orchestrator plans + delegates to parallel sub-agents with cross-vendor code review. Apache 2.0.
7. **antigravity-awesome-skills** (sickn33) — v12.9.0 released June 19. "Design Skills and Registry Quality Tools" update. 41.1k stars, 1,646+ SKILL.md playbooks across Claude Code, Cursor, Codex, Gemini, Antigravity.
8. **claude-code-system-prompts** (Piebald-AI) — 11.2k stars. Exposes all 515 Claude Code prompt components auto-updated on each release. Updated June 18 for v2.1.182.
9. **cc-safety-net** (kenryu42) — 1.4k stars, v1.0.6 June 15. PreToolUse hook blocking destructive git/fs commands across Claude Code + Codex + Gemini + Copilot CLIs.
10. **claude-seo** (AgriciDaniel) — 9.3k stars, v2.2.0 June 12. Universal SEO plugin: 25 sub-skills + 18 sub-agents + DataForSEO/Firecrawl/Banana extensions.
11. **tonsofskills / claude-code-plugins-plus-skills** (jeremylongshore) — 425 plugins, 2,810 skills, 200 agents. Open-source marketplace at tonsofskills.com with ccpi CLI.
12. **cve-mcp-server** (mukul975) — 1k stars. 27 security intelligence tools across 21 APIs (NVD, EPSS, KEV, ATT&CK, Shodan, VirusTotal). Zero inbound ports, no telemetry.

## Dedup Check
- All above items confirmed NOT in submissions.json
- All confirmed NOT in June 16-18 digests (checked three files)
- No YouTuber coverage confirmed for community tool items this run (except indirect signal from DevelopersDigest blog on Omnigent)

## Skipped / Low signal
- claude-seo v2.2.0 is June 12 (at edge of 72h window but solid signal at 9.3k stars)
- CVE MCP Server last code update April 14 but cybersecurity press coverage seems recent
- Legal MCP connectors (20+ from May 12) — too old
- Managed Agents cron/vaults — covered June 12 digest
- cc-switch, claude-mem — covered June 16 digest
