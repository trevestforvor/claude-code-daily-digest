# Research Notes — 2026-06-14

## YouTube Coverage

**Charlie Automates (@charlieautomates, 8k subs)**
- No specific June 13–14 content identified. Older content about PAUL/GSD frameworks.
- SKIP this run.

**Chase AI (@Chase-H-AI, 109k subs)**
- "Your Claude Code Carousels Suck (Here's The Fix)" — 2 weeks ago, not in 72h window.
- "Claude Code + Higgsfield MCP = Content MACHINE" — April 29, out of window.
- SKIP this run.

**IndyDevDan (@indydevdan, 129k subs)**
- "June 15th: Claude Subscriptions Change" (https://www.youtube.com/watch?v=l0NL_TPO4JQ) — appears very recent, covers the credit pool billing change going live tomorrow June 15.
- No other June 14 content confirmed.
- Credit pool item already covered June 12 digest; IndyDevDan as creator_buzz.

**Simon Scrapes (@simonscrapes, 71.8k subs)**
- "14 GENIUS Ways to Give Claude Code SUPERPOWERS" — June 12, ALREADY COVERED in June 13 digest (Superpowers plugin item).
- Other n8n + GSD content: older.
- SKIP this run (main video already captured yesterday).

**UI Collective, Developers Digest, Tech With Tim**
- No specific June 13–14 Claude Code videos identified in search.
- SKIP this run.

---

## Top Stories Found (past 72h)

### TIER 1 — Breaking / Critical

1. **US Government Directs Anthropic to Suspend Fable 5 & Mythos 5** (June 12–13)
   - Trump admin / Commerce Dept export control directive arrived June 12 @ 5:21pm ET
   - Trigger: "Pliny the Liberator" published a Fable 5 jailbreak on X/Twitter June 10; govt cited "potential jailbreak" and national security
   - Anthropic couldn't restrict to US citizens only → disabled for ALL users globally
   - Fallback: Opus 4.8 for all Fable 5 sessions
   - Anthropic disagrees: "narrow potential jailbreak should not be cause for recalling a commercial model deployed to hundreds of millions"
   - Fortune: defense/cybersecurity CEO says the prompting was for defense purposes, not malicious
   - Sources: anthropic.com/news/fable-mythos-access, Axios, Bloomberg, CNBC, TechRadar, Simon Willison June 13

2. **Credit Pool Goes Live June 15 (TOMORROW)** 
   - Already covered June 12 digest (Day 1), June 13 digest not in there but was day 4 in June 12
   - IndyDevDan posted video about it (https://www.youtube.com/watch?v=l0NL_TPO4JQ)
   - RECURRING NOTE for today

### TIER 2 — Hot / Trending

3. **NVIDIA SkillSpector** (released June 13)
   - GitHub trending today: +962 stars, 5,000 total
   - Security scanner for AI agent skills: 64 vulnerability patterns, 16 categories
   - Research stat: 26.1% of all skills have vulnerabilities; 5.2% show malicious intent
   - Part of NVIDIA Verified Agent Skills ecosystem (162 signed skills)
   - OpenClaw collaboration announced
   - Install: `make install` or Docker

4. **Kimi K2.7 Code** (released June 11–12)
   - Moonshot AI (China), 1T params / 32B active MoE
   - Beats Claude Opus 4.8 on MCPMark: 81.1% vs 76.4%
   - 30% fewer reasoning tokens vs K2.6
   - Modified MIT license (commercial use OK)
   - 256K context window; paired with Kimi Code CLI
   - Available: moonshotai/Kimi-K2.7-Code on HuggingFace; unsloth GGUF available

5. **JFrog Plugin for Claude Code** (June 10, official Anthropic partnership)
   - Enterprise supply chain governance in Claude Code
   - Scans artifacts & dependencies as code is written
   - Real-time license compliance, package security, provenance validation
   - claude.com/plugins/jfrog

6. **Microsoft skills-for-fabric** (first public drop, updated June 11)
   - Official Microsoft repo: collection of skills and MCP for Microsoft Fabric
   - Cross-tool: Claude Code, Copilot CLI, VS Code, Cursor, Windsurf, Codex/Jules
   - Coverage: SQL Data Warehouse, Spark/Lakehouse, Power BI, Eventhouse/KQL, Eventstreams
   - PowerShell install script

### TIER 3 — Ecosystem / Notable

7. **ECC v2.0.0 Stable** (June 2026 milestone)
   - 211.9k stars, 32.5k forks (massive)
   - Cross-harness OS: Claude Code, Cursor, Codex, OpenCode, Gemini, Zed
   - 64 specialized agents, 262+ skills
   - AgentShield security integration (102 security rules)
   - Previously in digests: No — affaan-m/ECC not in submissions.json

8. **Piebald-AI/tweakcc**
   - Customize Claude Code's system prompts, toolsets, themes
   - "Unlock private/unreleased features"
   - Cross-platform, supports AGENTS.md

9. **Piebald-AI/claude-code-system-prompts** (expanded June 12 for v2.1.177)
   - 350 → 515 prompts documented (+165)
   - Updated within minutes of each release
   - 27 builtin tool descriptions + sub-agent prompts

10. **alirezarezvani/claude-skills** (updated June 10, v2.10.3)
    - 337 skills across 17 domains
    - 30+ agents, 70+ custom commands
    - Works with Claude Code, Codex, Gemini CLI, Cursor, and 8 more agents

11. **Claude Code as a Daily Driver** (HN post item 48289950, ~1 week ago)
    - Best technical breakdown of skills vs subagents vs plugins vs hooks vs MCPs
    - Key insight: "Don't enable all MCPs at once — your 200k context can shrink to 70k"

---

## Dedup check (vs submissions.json + recent digests)
- submissions.json: ECC/everything-claude-code NOT present. JFrog NOT present. Microsoft/skills-for-fabric NOT present. Kimi K2 NOT present (only MiniMax M2.7 is there).
- Recent digests: Fable 5 sabotage walkback (June 12 digest) ≠ government suspension (June 13 news). Credit pool (June 12 digest, day 4+). SkillSpector: new. Kimi K2.7: new. JFrog: new. Microsoft Fabric: new. ECC: new.
