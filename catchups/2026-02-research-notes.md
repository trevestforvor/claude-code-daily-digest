# Claude Code Ecosystem — February 2026 Research Notes

Compiled 2026-04-20 from parallel research across GitHub API (created:2026-02), Anthropic news, Hacker News, Reddit, Simon Willison archive, Latent Space episodes, and TechCrunch / The Register / VentureBeat / TheHackerNews coverage.

## Anthropic Official News (Feb 2026)

| Date | Item | URL | Notes |
|---|---|---|---|
| Feb 3 | Apple Xcode 26.3 + Claude Agent SDK | https://www.anthropic.com/news/apple-xcode-claude-agent-sdk | Native Agent SDK in Xcode |
| Feb 5 | Claude Opus 4.6 launched | https://www.anthropic.com/news/claude-opus-4-6 | 1M ctx, agent teams |
| Feb 5 | Claude in PowerPoint preview (Max/Team/Ent) | https://claude.com/claude-for-powerpoint | |
| Feb 7 | Fast mode for Opus 4.6 | https://simonwillison.net/2026/Feb/7/claude-fast-mode/ | 2.5x faster, 6x price |
| Feb 7 | Claude Code v2.1.36 release | https://claude-world.com/articles/claude-code-2136-release/ | /fast command + Opus 4.6 perf |
| Feb 10 | Claude Cowork on Windows | https://venturebeat.com/technology/anthropics-claude-cowork-finally-lands-on-windows-and-it-wants-to-automate | Full feature parity |
| Feb 12 | Claude Code revenue: $2.5B run-rate | https://simonwillison.net/2026/Feb/12/anthropic/ | |
| Feb 17 | Claude Sonnet 4.6 launched | https://www.anthropic.com/news/claude-sonnet-4-6 | New default, 79.6% SWE-bench |
| Feb 17 | Anthropic + Infosys partnership | https://www.anthropic.com/news/anthropic-infosys | Regulated industries |
| Feb 19 | OAuth policy: third-party tools banned | https://www.theregister.com/2026/02/20/anthropic_clarifies_ban_third_party_claude_access/ | OpenClaw ban |
| Feb 20 | Claude Code Security (limited preview) | https://www.anthropic.com/news/claude-code-security | AI vulnerability scanner |
| Feb 20 | Claude in PowerPoint expands to Pro | https://gigazine.net/gsc_news/en/20260220-claude-in-powerpoint/ | |
| Feb 22 | Claude C Compiler post (Opus 4.6 + parallel agents) | https://simonwillison.net/2026/Feb/22/ccc/ | Boots Linux x86/ARM/RISC-V |
| Feb 24 | Cowork enterprise plugins + 12 MCP connectors | https://techcrunch.com/2026/02/24/anthropic-launches-new-push-for-enterprise-agents-with-plugins-for-finance-engineering-and-design/ | Private marketplaces |
| Feb 25 | Anthropic acquires Vercept | https://www.anthropic.com/news/acquires-vercept | Computer-use startup |
| Feb 25 | Claude Code Remote Control | https://simonwillison.net/2026/Feb/25/claude-code-remote-control/ | Mobile + web bridge |
| Feb 26 | Claude for Open Source (Free Max 20x for 6mo) | https://simonwillison.net/2026/Feb/27/claude-max-oss-six-months/ | 10K maintainers |

## GitHub Repos Created Feb 2026 (sorted by stars)

Source: GitHub API search `created:2026-02-01..2026-02-28`. Stars as of 2026-04-20.

- nanobot (HKUDS) — ~40K — viral lightweight personal AI agent — https://github.com/HKUDS/nanobot
- addyosmani/agent-skills — ~18K — production-grade skills format from Addy Osmani (Google) — https://github.com/addyosmani/agent-skills
- Panniantong/Agent-Reach — ~17.9K — scrape Twitter/Reddit/YT/GitHub free — https://github.com/Panniantong/Agent-Reach
- mattpocock/skills — ~16.5K — Matt Pocock's personal `.claude/skills` — https://github.com/mattpocock/skills
- Donchitos/Claude-Code-Game-Studios — ~14.1K — 49 agents/72 workflows for Unity/Unreal/Godot — https://github.com/Donchitos/Claude-Code-Game-Studios
- tirth8205/code-review-graph — ~11.7K — local knowledge graph MCP, 6.8x fewer tokens — https://github.com/tirth8205/code-review-graph
- mksglu/context-mode — ~8.2K — context window optimization plugin, claims 98% reduction — https://github.com/mksglu/context-mode
- anthropics/financial-services-plugins — ~7.7K — Anthropic's official financial services plugin pack — https://github.com/anthropics/financial-services-plugins
- nicobailon/visual-explainer — ~7.6K — HTML/slide skill for diagrams/diff reviews — https://github.com/nicobailon/visual-explainer
- ComposioHQ/agent-orchestrator — ~6.4K — parallel coding-agent orchestrator from Composio — https://github.com/ComposioHQ/agent-orchestrator
- chenhg5/cc-connect — ~5.6K — bridge Claude Code to Slack/Discord/Telegram/WeChat — https://github.com/chenhg5/cc-connect
- mukul975/Anthropic-Cybersecurity-Skills — ~5K — 754 cybersecurity skills (MITRE/NIST) — https://github.com/mukul975/Anthropic-Cybersecurity-Skills
- builderz-labs/mission-control — ~4.2K — multi-agent dispatch + spend dashboard — https://github.com/builderz-labs/mission-control
- google-gemini/gemini-skills — ~3.3K — Google adopting Anthropic Skills format — https://github.com/google-gemini/gemini-skills
- matt1398/claude-devtools — ~3.1K — visual UI for Claude Code logs/tool calls/token usage — https://github.com/matt1398/claude-devtools
- Gentleman-Programming/engram — ~2.7K — persistent agent memory MCP server (Go+SQLite) — https://github.com/Gentleman-Programming/engram
- anthropics/claudes-c-compiler — ~2.6K — Opus 4.6's Rust C compiler showcase — https://github.com/anthropics/claudes-c-compiler

## Pre-existing repos that spiked in Feb 2026

- obra/superpowers — ~55.5K stars (was viral after Anthropic marketplace acceptance Jan 15, exploded Feb) — https://github.com/obra/superpowers
- alirezarezvani/claude-skills — 5.2K+ stars — https://github.com/alirezarezvani/claude-skills
- rohitg00/awesome-claude-code-toolkit — high traction Feb — https://github.com/rohitg00/awesome-claude-code-toolkit

## Surveys / Engineering Stats

- **Pragmatic Engineer Survey (run Jan 27 – Feb 17 2026)**: Claude Code = #1 most-loved tool at 46% vs Cursor 19% vs Copilot 9%. ~1000 respondents. https://newsletter.pragmaticengineer.com/p/ai-tooling-2026

## Security drumbeat

- CVE-2025-59536 + CVE-2026-21852 (Check Point, disclosed Feb 25) — RCE via .claude/settings.json hooks — https://research.checkpoint.com/2026/rce-and-api-token-exfiltration-through-claude-code-project-files-cve-2025-59536/
- 341 malicious skills found in ClawHub marketplace (supply-chain warning)
- Top MCP security resources (Adversa, Feb 2026)

## Final 25 selection (balanced by category, Feb-anchored)

1. Claude Opus 4.6 — anthropic — Feb 5
2. Claude Sonnet 4.6 — anthropic — Feb 17
3. Apple Xcode 26.3 + Claude Agent SDK — anthropic — Feb 3
4. Claude Code Security preview — anthropic — Feb 20
5. Claude Cowork on Windows — anthropic — Feb 10
6. Anthropic acquires Vercept — anthropic — Feb 25
7. Claude in PowerPoint expands to Pro — anthropic — Feb 20
8. Anthropic + Infosys partnership — anthropic — Feb 17
9. Cowork enterprise plugin marketplaces / 12 connectors — marketplace — Feb 24
10. anthropics/financial-services-plugins — marketplace — Feb 2026
11. Fast mode for Opus 4.6 (/fast in Claude Code) — cost — Feb 7
12. Claude for Open Source program (Free Max 6mo) — cost — Feb 26
13. matt1398/claude-devtools — cost — Feb 2026
14. Claude Code Remote Control — viral — Feb 25
15. Pragmatic Engineer Survey: Claude Code most loved — viral — Feb 17
16. Anthropic OAuth third-party ban policy — design — Feb 19
17. Claude C Compiler (Opus 4.6 parallel agents) — design — Feb 22
18. obra/superpowers (marketplace explosion) — skill — Feb 2026
19. addyosmani/agent-skills — skill — Feb 2026
20. mattpocock/skills — skill — Feb 2026
21. mukul975/Anthropic-Cybersecurity-Skills — skill — Feb 2026
22. tirth8205/code-review-graph — mcp — Feb 2026
23. Gentleman-Programming/engram — mcp — Feb 2026
24. mksglu/context-mode — plugin — Feb 2026
25. ComposioHQ/agent-orchestrator — plugin — Feb 2026

Distribution: anthropic 8, skill 4, cost 3, marketplace 2, mcp 2, design 2, plugin 2, viral 2 = 25 ✓

## Caveats

- "OpenClaw"-branded Chinese repos (linuxhsj, nexu, golutra) excluded — likely botted stars.
- nanobot at 40K stars in 2.5mo flagged as unverified growth — excluded from top 25 to be safe.
- Some skill collections (Donchitos game-studios, Claude-SEO) excluded for category balance, not impact.
- Reddit-only items excluded due to inability to verify exact Feb 2026 dates from web search.
