# Research Notes — 2026-10-20

## Summary
Research completed in ~282 seconds (well within 20-min limit). Official Anthropic changelog fetched directly from code.claude.com/docs/en/changelog confirming v2.1.303–304 releases (Oct 18–19). GitHub trending signals gathered via web searches. YouTube channel searches returned no verified direct coverage for the past 7 days from any curated channel.

---

## YouTube Coverage

Searches run for all 8 channels. No verified Claude Code content from the past 7 days confirmed for any channel. Reasons:

- **@charlieautomates**: Site searches returned no YouTube pages; charlieautomates.com blog returned no Oct 2026 posts.
- **@Chase-H-AI**: chaseai.io blog shows March 2026 as most recent tracked post (skill creator evals). No Oct 2026 video confirmed.
- **@adrienaidesigner**: Not searched this run (under 5K subscribers, time-constrained).
- **@indydevdan**: Searches returned no October 2026 video pages.
- **@simonscrapes**: No Oct 2026 video confirmed. A general content summary cited his Claude Code guide (no coding skills needed) but no date.
- **@UICollectiveDesign**: Not searched this run.
- **@DevelopersDigest**: Not searched this run.
- **@TechWithTim**: Not searched this run.

**Conclusion:** No creator_buzz entries added to any item in today's digest. No item received a viral boost from YouTuber coverage.

---

## Official Anthropic Changelog (October 2026)

Source: code.claude.com/docs/en/changelog (fetched directly)

| Version | Date | Highlights |
|---|---|---|
| v2.1.304 | Oct 19 | Mod `tool.check` with `decider: "person"` and `isReadOnly`; `/auto-mode-setup` expanded to Bedrock/Vertex/Foundry; `/claude-api managed-agents-secure` check; Code Review levels (Quick/Standard/Deep) selectable in UI |
| v2.1.303 | Oct 18 | Bug fixes and reliability improvements only |
| v2.1.302 | Oct 16 | `CLAUDE_CODE_AUTO_MODE_MODEL`; Idle compaction toggle in `/config`; fork subagents on by default outside terminal; standalone Claude Design sunset notice (closes Dec 14, 2026) |
| v2.1.301 | Oct 15 | `CLAUDE_CODE_RETRY_WATCHDOG_MAX_USAGE_LIMIT_WAIT_MS`; vim `%` motion; multi-line `rows` for mod inputs; LaTeX math in VS Code |
| v2.1.300 | Oct 14 | Mod `virtualText` and `prompt.change` hook; `/advisor` on Claude Platform on AWS; OpenTelemetry GenAI attributes; Slack Connect in Claude Tag |
| v2.1.299 | Oct 14 | `CLAUDE_CODE_DISABLE_FILE_MENTIONS`; idle compaction for 200K+ token convos at ~54 min idle; `$.session.identity()` for managed mods; MCP allow rules now exact-match only (breaking change) |
| v2.1.296 | Oct 9 | Sonnet 5.5 cache reads → $0.10/M; `CLAUDE_CODE_WORKFLOW_SUBAGENT_MODEL`; Read `allow_large` |
| v2.1.295 | Oct 8 | `onFailure: "block"` for hooks; OSC 7501 terminal status protocol; MCP description limit → 16,384 chars |

**Already covered in prior digests:**
- v2.1.295 → covered Oct 19 (anthropic-claude-code-v2-1-295-hooks-block)
- v2.1.296 → covered Oct 19 (anthropic-sonnet55-cache-price-cut)
- v2.1.299–302 → covered Oct 17 (anthropic-claude-code-v2-1-302)
- Code Review GA → covered Oct 18 (anthropic-claude-code-review-ga)

**New for today:**
- v2.1.303–304 not yet covered → included in digest

---

## GitHub Trending & Other Sources

### morluto/rea
- Description: Reverse Engineer Anything — MCP server + CLI that gives agents reverse-engineering capabilities for native binaries, JS/Electron, .NET assemblies
- Stars: Conflicting data. Unreliable sources quoted 234K; more reliable npm/directory sources show 90–400 stars. EXCLUDED due to unverifiable star count.
- GitHub Trending: ~Oct 9–14
- Install: npx -y @morluto/rea setup --yes (unverified against README)

### cathrynlavery/diagram-design
- Stars: ~55.1K (verified Oct 14 in prior digest); estimated 55–57K Oct 20
- Already covered in Oct 16 digest (Day 10). Now Day 14.
- Still design-category priority, but long-running recurring item.
- INCLUDED as recurring (strong design signal, still referenced heavily).

### FlorianBruniaux/claude-code-ultimate-guide
- Stars: ~4.4–5.4K (stale figures from May 2026)
- Ships an MCP server (`claude-code-ultimate-guide-mcp@1.3.1`) that exposes the guide in-agent
- Updated Oct 17
- EXCLUDED — star count too low and stale; not strong enough signal

### rohitg00/awesome-claude-code-toolkit
- Catalog repo: 135 agents, 35 skills, 42 commands, 176+ plugins
- No verified recent activity or star count
- EXCLUDED

### iha2/superlite
- Referenced by Trendshift as +84 stars in 3 days (Oct 18–20) — very small
- No other verification found
- EXCLUDED

### OthmanAdi/planning-with-files
- ~20.4K stars (last updated May 2026). Not fresh.
- EXCLUDED

### claude design standalone site closing (Dec 14)
- Confirmed via Anthropic support article
- Already covered in Oct 17 digest (buried in v2.1.302 note)
- NOT a new item for today

---

## Items in Today's Digest (15)

1. anthropic-claude-code-v2-1-304 (NEW) — Anthropic official
2. nextlevelbuilder-ui-ux-pro-max-skill (↑ Day 2) — design
3. cathrynlavery-diagram-design (↑ Day 14) — design recurring
4. rtk-ai-rtk (↑ Day 2) — cost
5. farion1231-cc-switch (↑ Day 2) — tool
6. graphify-labs-graphify (↑ Day 2) — skill/tool
7. mattpocock-skills (↑ Day 5) — skill
8. obra-superpowers (↑ Day 5) — skill
9. affaan-m-ecc (↑ Day 5) — plugin
10. stablyai-orca (↑ Day 2) — tool
11. panniantong-agent-reach (↑ Day 2) — mcp/tool
12. egonex-ai-understand-anything (↑ Day 2) — plugin
13. shareai-lab-learn-claude-code (↑ Day 2) — tool
14. code-yeongyu-oh-my-openagent (↑ Day 10+) — plugin
15. piebald-ai-claude-code-system-prompts (↑ recurring) — now at 516+ versions
