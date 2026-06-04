# Research Notes — 2026-06-04

Start time: ~16:07 UTC. Elapsed: ~9 min at checkpoint.

## YouTube Coverage

### Charlie Automates (@charlieautomates, 8k subs)
No specific new video from June 1–4 found. Channel is focused on Claude Code as an automated content engine. No new tool signals this week.

### Chase AI (@Chase-H-AI, 109k subs)
Running an "Agentic OS" workshop. Recent videos covered Superpowers plugin (already in June 1 digest). No new tool from June 1–4 identified.

### IndyDevDan (@indydevdan, 129k subs)
Creator of `claude-code-hooks-mastery` (3.7k ★) and `claude-code-hooks-multi-agent-observability` (1.4k ★) — both older items, not June 1–4 launches. No new video identified.

### Simon Scrapes (@simonscrapes, 71.8k subs)
Content around Claude Code + N8N full-stack workflows. No specific June 1–4 video identified.

### UI Collective (@UICollectiveDesign, 52.5k subs)
"I Gave Claude Code & Codex Access to 600,000 UI Designs" — about Mobbin MCP (already in June 1 digest). "Claude Code for Designers: All the Ways to Use It" ~1 week old.

### Tech With Tim (@TechWithTim, 2M subs)
"Something Big Is Happening" post (timing unclear). No specific June 1–4 tool identified.

### Developers Digest (@DevelopersDigest, 61.5k subs)
Covers every major Anthropic release in concise format. No specific June 1–4 standalone tool.

### Adrien AI Designer (@adrienaidesigner, 4k subs)
No specific June 1–4 content found.

**YouTube signal this cycle:** No new tools identified from YouTubers in the past 72h. No viral boost (2+ creators covering same tool) applies this cycle.

---

## High-Signal Items Found (June 1–4, 2026)

| Item | Status |
|------|--------|
| Context7 (Upstash) — 52k ★, 348k installs | NEW — standalone item |
| Windsurf → Devin Desktop + ACP + claude-agent-acp | NEW |
| Claude Code v2.1.162 (June 3) | NEW — extends June 3 digest's v2.1.159–161 |
| Flatt Security supply chain attack research (June 1) | NEW |
| transilienceai/communitytools — pentesting, 100% CTF | NEW |
| agent37.com — monetize Claude skills, Stripe | NEW |
| efij/secure-claude-code — YARA-style guardrails | NEW |
| netresearch/claude-code-marketplace — agentskills.io | NEW |
| datasette-agent-micropython (Simon Willison, June 2) | NEW |
| harish-garg/security-scanner-plugin | NEW |

## Items Skipped (Already in Prior Digests)
- anthropic/claude-code security-guidance plugin → May 27 digest
- wshobson/agents → May 1 and May 6 digests
- mukul975/cve-mcp-server → May 1 digest
- forrestchang/andrej-karpathy-skills → May 19, May 27 digests
- code-with-claude-tokyo → June 1 digest
- antigravity-awesome-skills → June 1 digest
- obra/superpowers → June 1 digest (with Chase-H-AI buzz)
- mobbin-mcp-design → June 1 digest
- ecc-everything-claude-code → May 30 digest
- opencode-sst → May 31 digest
- jimliu/baoyu-skills → June 2 digest

## Anthropic Releases (Past 72h)
- **v2.1.162** (June 3): `claude agents --json` `waitingFor` field; Windsurf renamed to Devin Desktop in `/ide` menu; Remote Control footer pill; slash command autocomplete fills prompt; fixed WebFetch permissions; fixed Windows path handling.
- **v2.1.161** (June 2): OTEL resource attributes on metrics; `/mcp` collapses unused connectors; fixed background subagent output corruption; fixed `/autofix-pr` in git worktrees.
- **v2.1.160** (June 2): Security prompt before writing shell startup files; `acceptEdits` mode prompts before writing build-tool configs; fixed WSL clipboard; fixed completed session history loss.

## Key Ecosystem News
- **Windsurf → Devin Desktop** (June 2): Cognition rebranded Windsurf, launched ACP (Agent Client Protocol) support — an open standard for running AI coding agents inside any ACP-compatible editor. Claude Code is an ACP-compatible agent. The `agentclientprotocol/claude-agent-acp` repo adapts Claude Agent SDK for ACP clients (Devin Desktop, JetBrains, VS Code, Zed).
- **Flatt Security research** (June 1): Supply chain attack via a single GitHub Issue in Claude Code GitHub Actions — patched in v1.0.94. Affects any repo using the workflow; Anthropic's own repos were at risk.
- **Claude Code GitHub Actions CVSS 9.4 CVE** — disclosed alongside Flatt research.
