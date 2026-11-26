# Research Notes — 2026-11-26

**Research window:** ~20 minutes (1200s cap), context resumed from prior session at ~780s elapsed  
**Date range checked:** November 23–26, 2026 (72-hour window)

---

## YouTube Coverage

Checked all 8 curated creators in `sources/youtubers.json`:

| Creator | Channel | Checked | Nov 23–26 Content Found |
|---------|---------|---------|------------------------|
| Charlie Automates | @charlieautomates | WebSearch | None verifiable |
| Chase AI | @Chase-H-AI | WebSearch | None verifiable |
| Adrien AI Designer | @adrienaidesigner | WebSearch | None verifiable |
| IndyDevDan | @indydevdan | WebSearch | None verifiable |
| Simon Scrapes | @simonscrapes | WebSearch | None verifiable |
| UI Collective | @UICollectiveDesign | WebSearch | None verifiable |
| Developers Digest | @DevelopersDigest | WebSearch | None verifiable |
| TechWithTim | @TechWithTim | WebSearch | None verifiable |

**Note:** youtube.com is blocked in this cloud execution environment. All checks used `site:youtube.com` WebSearch queries. No creator returned verifiable Nov 23–26 video titles, URLs, or view counts via indirect search results. No `creator_buzz` data can be confirmed for today's digest.

---

## GitHub / Community Signals

### Trending (confirmed via WebFetch / WebSearch)

| Repo | Stars | ±Week | Last Covered | Status |
|------|-------|-------|--------------|--------|
| Leonxlnx/taste-skill | 121.9K | +9.1K | Nov 7 | ELIGIBLE (>7d) |
| nutlope/hallmark | 61.5K | +4.8K | Nov 13 | ELIGIBLE (>7d) |
| wilwaldon/Claude-Code-Frontend-Design-Toolkit | 1.4K | n/a | Never | NEW |
| mvanhorn/last30days-skill | 75.6K | +5,302 | Nov 22 | RECURRING (4d) |
| elementalsouls/Claude-BugHunter | 24.2K | +11.5K/wk | Nov 22 | RECURRING (4d) |
| obra/superpowers | 323K | n/a | Nov 20 | RECURRING (6d) |
| obsidianmd/obsidian-skills | 53.9K | n/a | Never | NEW |
| backnotprop/plannotator | 15.2K | n/a | Nov 18 | ELIGIBLE (8d) |
| ag-ui-protocol/ag-ui | 21.8K | +1.4K/wk | Nov 18 | ELIGIBLE (8d) |
| garrytan/gbrain | 14K | n/a | Nov 10 | ELIGIBLE (16d) |
| Shopify/shopify-ai-toolkit | 654 | n/a | Never | NEW (official Shopify) |
| anthropics/knowledge-work-plugins | 37K | n/a | Nov 6 | ELIGIBLE (20d) |

### Anthropic Official News (Nov 23–26)

- **Skills from MCP Servers public beta** (announced ~Nov 24): Tasks + Elicitation APIs now GA; early adopters confirmed: Shopify, GitHub, Supabase, HubSpot, Atlassian. This was yesterday's (Nov 25) lead item — recurring note warranted given new GA context.
- **Claude Code v2.1.332** (Nov 25): Skills from MCP in beta, `PreSkillShellCommand` hook, Sonnet alias updates on GCP/Foundry. Already covered Nov 25.

### Product Hunt

- Searched for Claude Code items in past 72h. BeagleLathe was Nov 25's item. No new PH items found.

### Reddit / HN

- WebSearch for r/ClaudeAI and r/ClaudeCode Nov 24–26: Matt Pocock's grill-me still prominent (covered Nov 24), no new viral posts confirmed in 72h window.
- HN: hn.algolia.com blocked; indirect WebSearch returned no new major HN threads.

---

## Dedup Check (Past 7 Days)

Items excluded (covered Nov 19–25):
- claude-code-v2-1-332-mcp-skills (Nov 25) → RECURRING ONLY
- claude-code-v2-1-330-easel (Nov 25)
- beaglelathe-lathe (Nov 25)
- juliusbrussee-caveman (Nov 25)
- cocoindex-code (Nov 25)
- skillsovermcp-com (Nov 25)
- czlonkowski-n8n-skills (Nov 25)
- trailofbits-skills (Nov 25)
- sambhav-mcp-demo (Nov 25)
- apple-xcode-plugin (Nov 25)
- traxagent (Nov 25)
- anthropic-champion-kit (Nov 25)
- davila7-claude-code-templates-mcp-skills (Nov 25)
- mantrana-mcp (Nov 25)
- emilkowalski-skills (Nov 24)
- claude-code-v2-1-331 (Nov 24)
- mattpocock-skills (Nov 24)
- blader-humanizer (Nov 24)
- opus-4-8-fast-mode-eol (Nov 24)
- unity-claude-code-plugin (Nov 24)
- jakeschincariol-youtube-agent-skill (Nov 24)
- sergebulaev-youtube-skills (Nov 24)
- vincentwei1021-video-shotcraft (Nov 23)
- qingyuna-answer-me-with-html (Nov 23)
- michael-denyer-pstack-claude (Nov 23)
- the911fund-skill-of-skills (Nov 23)
- elementalsouls-claude-bughunter (Nov 22) → RECURRING OK
- mvanhorn-last30days (Nov 22) → RECURRING OK
- google-stitch-skills (Nov 22)
- obra-superpowers (Nov 20) → RECURRING OK

---

## Final Ranked List (13 items)

Priority: DESIGN > COST/TOKEN > viral YouTuber (none today) > Anthropic official > general

| Rank | Slug | Category | Type |
|------|------|----------|------|
| 1 | leonxlnx-taste-skill | DESIGN | new (>7d) |
| 2 | nutlope-hallmark | DESIGN | new (>7d) |
| 3 | wilwaldon-frontend-design-toolkit | DESIGN | new (never) |
| 4 | claude-code-v2-1-332-mcp-skills | OFFICIAL | recurring (1d) — GA context |
| 5 | anthropics-knowledge-work-plugins | OFFICIAL | new (>7d) |
| 6 | shopify-ai-toolkit | ENTERPRISE/OFFICIAL | new (never) |
| 7 | garrytan-gbrain | MCP | new (>7d) |
| 8 | elementalsouls-claude-bughunter | TOOL | recurring (4d) |
| 9 | mvanhorn-last30days | SKILL | recurring (4d) |
| 10 | obra-superpowers | FRAMEWORK | recurring (6d) |
| 11 | obsidianmd-obsidian-skills | PLUGIN | new (never) |
| 12 | backnotprop-plannotator | TOOL | new (>7d) |
| 13 | ag-ui-protocol-ag-ui | PROTOCOL | new (>7d) |
