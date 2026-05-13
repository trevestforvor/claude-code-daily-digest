# Research Notes — 2026-05-13

## Timer
- Start: 1778688398 (Unix)
- Elapsed at writing: ~567s (well within 1200s cap)

---

## YouTube Coverage

### @indydevdan (IndyDevDan, 129K subs)
- **"Mobbin's MCP changes how we design in Claude Code"** — posted ~12 hours ago (May 12/13, 2026). Covers the brand-new Mobbin MCP server launch: 621,500+ real app screens accessible directly from Claude Code. Identifies it as transformative for UI-building agents. Very strong creator_buzz signal.
- No other Claude Code-specific videos found in past 7 days.

### @Chase-H-AI (Chase AI, 109K subs)
- No new Claude Code videos in past 7 days found via search. Previous (Higgsfield, ~May 1) is outside the 7-day window.
- **Claude AI Full Tutorial May 2026: The Settings, Models & Features Most People Miss** — ~1 week ago (general tutorial, not a specific tool).

### @charlieautomates (Charlie Automates, 8K subs)
- No specific Claude Code videos found in past 7 days. Skipped.

### @adrienaidesigner (Adrien AI Designer, 4K subs)
- No specific videos found. Skipped.

### @simonscrapes (Simon Scrapes, 71.8K subs)
- No specific videos found in past 7 days. Skipped.

### @UICollectiveDesign (UI Collective, 52.5K subs)
- No specific videos found this week. Skipped.

### @DevelopersDigest (Developers Digest, 61.5K subs)
- No specific Claude Code videos confirmed in past 7 days. Skipped.

### @TechWithTim (Tech With Tim, 2M subs)
- No specific Claude Code-focused videos in past 7 days. Skipped.

---

## Key Findings (New Items in 72h Window)

### NEW — Mobbin MCP (launched May 13, 2026)
- **Primary URL:** https://mobbin.com/mcp
- Official MCP server from Mobbin giving Claude Code, Cursor, Lovable access to 621,500+ real app screens and 142,200+ flows from shipped apps.
- Covers fintech, e-commerce, health, productivity, social, SaaS — including subscription-only, region-locked, and niche apps.
- IndyDevDan covered it 12 hours after launch — strong tastemaker signal.
- Install: `npx -y mobbin-mcp auth` then `claude mcp add mobbin -- npx -y mobbin-mcp`
- Requires paid Mobbin account. Currently in beta.

### NEW — Claude for Legal (launched May 12, 2026)
- **Primary URL:** https://www.anthropic.com/news/claude-for-legal (inferred)
- **Coverage:** TechCrunch (May 12), Artificial Lawyer (May 12), LawNext (May 12), Yahoo Finance
- 20+ new MCP connectors linking Claude to legal software (DocuSign, Box, and major legal platforms)
- 12 new practice-area plugins: Commercial Legal, Corporate Legal (M&A diligence, board consents), Employment Legal, Privacy Legal, Product Legal, Regulatory Legal, AI Governance Legal, IP Legal, Litigation Legal (deposition prep, chronology building, brief drafting)
- Available to all paying Claude customers on any plan tier; no separate fee.

### NEW — Claude Platform on AWS (GA: May 11, 2026)
- **Primary URL:** https://aws.amazon.com/claude-platform/
- Full native Claude Platform experience through AWS account: Claude Managed Agents (beta), Skills (beta), MCP connector (beta), Files API (beta), web search, web fetch, code execution, prompt caching, citations, batch processing, Claude Console.
- Auth via AWS IAM (SigV4) or API keys. Billing through single AWS invoice. CloudTrail audit logging.
- Available in 17 regions globally. First cloud provider to offer native Claude Platform access.
- Activated via AWS Marketplace.

### NEW — Microsoft Playwright CLI (first release May 7, 2026)
- **Primary URL:** https://github.com/microsoft/playwright-cli
- v0.1.13 (latest, May 7). 10.3K stars.
- CLI alternative to Playwright MCP for coding agents: saves browser state to compact YAML files on disk instead of streaming full accessibility trees into context.
- 4x fewer tokens than MCP (114K tokens → 27K tokens per typical session per Microsoft benchmarks).
- Used by Claude Code via Bash tool (same as git/npm). Works alongside Claude Code with no config.
- Install: `npm install -g @playwright/cli@latest`

---

## Continuing Items (from May 12 digest)

### Day 2 — awesome-design-md (VoltAgent)
- Still at 76.3K+ stars (was 71K just days ago). Growing fast.

### Day 2 — addyosmani-agent-skills
- 40.2K stars. Addy Osmani at Anthropic. 22 skills, full dev lifecycle.

### Day 2 — claude-managed-agents-2026
- Dreaming, Outcomes, Multiagent Orchestration — all still in active rollout.
- Claude Code Routines also Day 2 — folding into this note.

### Day 2 — claude-code-rate-limits-colossus
- Rate limits doubled, peak throttling removed, Colossus 1 compute backing.

### Day 2 — claude-code-v2-1-139
- /goal, claude agents (Research Preview), claude plugin details — all active.
- v2.1.140 (May 12) added case-insensitive subagent_type matching + bug fixes only.

### Day 2 — mitiga-mcp-oauth-attack
- Still circulating in security communities. No fix from Anthropic yet.

### Day 3 — caveman
- 57.4K+ stars. Still trending.

### Day 3 — RTK
- 45.5K+ stars. Still trending.

### Day 3 — claude-mem
- 74.4K stars. Still trending.

### Day 3 — everything-claude-code
- 178K stars. Still the most comprehensive harness.

### Day 3 — get-shit-done
- 61.3K+ stars. Still actively used.

---

## Dropped (fading or duplicate)
- claude-code-routines (Day 2 → merged into claude-managed-agents-2026 note)
- higgsfield-mcp (Day 2 → related to submissions.json item "higgsfield")
- graphify (Day 3 → fading, dropping to make room for new items)
- hesreallyhim-awesome-claude-code (Day 6 → fading)

---

## Dedup Check vs submissions.json
- higgsfield (submissions) covers higgsfield-mcp → SKIP
- All other new items checked: Mobbin MCP, Claude for Legal, Claude Platform on AWS, Playwright CLI — none in submissions.json
- playwright-cli: not in digests or submissions — NEW
- mobbin-mcp: not in digests or submissions — NEW
- claude-for-legal: not in digests or submissions — NEW
- claude-platform-aws: not in digests or submissions — NEW

---

## Rankings (today's digest)
1. DESIGN: Mobbin MCP (new today, IndyDevDan coverage, viral)
2. DESIGN: awesome-design-md (Day 2, 76.3K+ stars)
3. COST: Playwright CLI (new, 4x fewer tokens)
4. COST: caveman (Day 3)
5. COST: RTK (Day 3)
6. COST: claude-code-rate-limits-colossus (Day 2)
7. ANTHROPIC: Claude for Legal (new, 20+ connectors, 12 plugins)
8. ANTHROPIC: Claude Platform on AWS (GA)
9. ANTHROPIC: claude-managed-agents-2026 (Day 2)
10. ANTHROPIC: claude-code-v2-1-139 (Day 2)
11. DESIGN/SKILL: addyosmani-agent-skills (Day 2)
12. SKILL: claude-mem (Day 3)
13. GENERAL: everything-claude-code (Day 3)
14. GENERAL: get-shit-done (Day 3)
15. GENERAL: mitiga-mcp-oauth-attack (Day 2, security)
