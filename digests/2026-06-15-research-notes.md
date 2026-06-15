# Research Notes — 2026-06-15

## Summary
Today is dominated by the Fable 5/Mythos 5 ban escalation (Day 3 — Anthropic engineers physically in Washington), the first day of Agent SDK credit pool activation, and the nested sub-agents depth-5 feature from v2.1.172.

## YouTube Coverage

### @Chase-H-AI (109k subs)
- **"The Top 10 Claude Code Plugins to 10x Your Next Project (June '26)"** — https://www.youtube.com/watch?v=IShdbDP4Jgg — Posted ~1 week ago. YouTube blocked direct WebFetch. Chase AI's blog referenced "the Codex plugin and awesome-design.md to NotebookLM CLI and GWS" as top picks. Could not verify full list; excluded from creator_buzz to avoid fabrication.
- **"The Most Powerful Claude Code Feature In Months Dropped & Nobody is Talking About It"** — https://www.youtube.com/watch?v=6cmi7qyFwEE — YouTube blocked WebFetch, could not verify subject. Excluded.
- **"Claude Code + Obsidian Setup That Now Runs My Life"** — https://www.youtube.com/watch?v=glAoiBWVkmU — Likely kepano/obsidian-skills (already in submissions.json). Excluded.

### @indydevdan (129k subs)
- **"June 15th: Claude Subscriptions Change"** — https://www.youtube.com/watch?v=l0NL_TPO4JQ — Confirmed his breakdown of Agent SDK credit pool changes. Already documented in submissions.json item `anthropic-june15-agent-sdk-billing` with creator_buzz.
- Other June videos appear general ("Claude Code is all you need in 2026", "My Claude Code Workflow for 2026") — couldn't verify if they covered specific new tools.

### @charlieautomates (8k subs)
- **"This NEW Claude Code Update is INSANE!"** — https://www.youtube.com/watch?v=tSmqMslJHHQ — YouTube blocked WebFetch. Could not verify subject. Excluded.
- Charlie Automates channel focuses on "Claude Code operating layer that scales with you." No verifiable new tool coverage confirmed this week.

### @simonscrapes (71.8k subs)
- Site search returned no direct YouTube results. The June 12 Superpowers video was already documented in June 13 digest.
- No new Simon Scrapes videos confirmed for June 13–15 window.

### @UICollectiveDesign (52.5k subs)
- Not searched this run due to time constraints.

### @DevelopersDigest (61.5k subs)
- Not searched this run due to time constraints.

### @TechWithTim (2M subs)
- Not searched this run due to time constraints.

### @adrienaidesigner (4k subs)
- Not searched this run due to time constraints.

## Key Stories Found (past 72h)

### 1. Fable 5 Export Ban — Day 3: Washington Negotiations (TODAY)
- Source: TechTimes, QZ, Fox Business, BeInCrypto
- New today: Anthropic dispatched Tom Brown (co-founder/chief compute officer) and policy chief Sarah Heck to Washington DC. Emergency meetings with Commerce Secretary Howard Lutnick and Cyber Director Sean Cairncross. Amazon CEO Andy Jassy now confirmed as the official who flagged the jailbreak to US government officials (Amazon scientists found partial bypass of Fable 5 safeguards). Fox Business: a Trump administration official called Anthropic's conduct "reckless." No deal announced as of June 15. Both sides want Fable 5 online; path to fix unclear.
- Verdict: HIGH PRIORITY. New angle, different primary URL from existing submissions.json entry.

### 2. Nested Sub-Agents (5 Levels Deep) — v2.1.172 (June 10)
- Not covered in June 11–14 digests (those covered 173–176 but not 172).
- Key: For months "subagents cannot spawn subagents" was a hard guardrail. v2.1.172 lifted it: 5 levels, foreground can go deeper, background capped at 5. Each level = fresh 200K context. ~7× token cost per branch. Purpose: context isolation, not parallelization. ruflo project filed ADR-147.
- Verdict: INCLUDE as new Anthropic feature.

### 3. Agent SDK Credit Pools — Day 1 Activation (TODAY)
- Credit pools activated at midnight June 15. GenAI Unplugged published workarounds guide. Zed workaround: interactive `claude` terminal sessions still use subscription limits. The New Stack documented no automatic fallback.
- Verdict: INCLUDE as new angle (different primary URL from submissions.json entry).

### 4. elementalsouls/Claude-BugHunter v2.1 (June 5)
- 2.4k stars, 373 forks. 71 skills across 10 bug-hunting categories, 15 slash commands, 681 disclosed-report patterns across 24 vulnerability classes + enterprise identity/infra attack matrices. v2.1 (June 5). Plugin marketplace installable.
- Verdict: INCLUDE. Not in submissions.json or any recent digest. Security research/bug bounty use case, well-documented.

### 5. levnikolaevich/claude-code-skills (no specific date)
- 492 stars. Plugin suite covering full delivery lifecycle + 3 bundled MCP servers: hex-line-mcp (hash-verified file editing), hex-graph-mcp (code knowledge graph with framework-aware overlays), hex-ssh-mcp (hash-verified remote editing over SSH). Agile pipeline, project bootstrap, docs generation, codebase audits, performance optimization.
- Verdict: INCLUDE. Not in submissions.json. The MCP servers have a genuinely differentiated angle (hash verification as editing trust layer).

### 6. Replicas — Cloud VMs for Claude Code/Codex (early June, ~2 weeks ago)
- 221 Product Hunt upvotes. Runs Claude Code or Codex in isolated VMs with real dev environments. Trigger from Slack, Linear, or GitHub. Bring-your-own subscription and API keys. No GitHub URL confirmed.
- Verdict: INCLUDE at lower priority. Especially relevant today as developers scramble to understand what runs where under the new credit pool rules. Primary URL = PH page (no GitHub found).

## Items Not Included / Skipped

- Karpathy CLAUDE.md (~144k stars on one mirror, ~220k combined) — trending since January 2026, covered extensively in prior ecosystem coverage; no fresh June 13-15 angle beyond star count milestone.
- Claude for Legal (May 12) — outside 72h window; no fresh coverage this week specifically.
- Claude Code v2.1.169 features (safe mode, /cd, post-session hook, plugin init) — likely covered in June 11 digest which I did not read.
- Obviously Works skills collection — couldn't verify star count or recent activity.
- Replicas GitHub URL — not found; using PH as primary.
- Chase AI Top 10 June video contents — YouTube blocked WebFetch; can't verify specific tools featured.

## GitHub Trending Summary
- anthropic/claude-code: 131k stars (steady growth)
- hinet/claude-code (leak rewrite): 50k stars in 2 hours back in April — old story
- Karpathy CLAUDE.md forks: 144k+ on main, 220k+ combined — trending since January
- ECC: 211.9k stars (already in submissions.json)
- No new GitHub repos trending today specifically identified

## HN/Reddit Activity
- "Claude Code as a Daily Driver" HN post (ID: 48289950) from ~June 8 — not in digest windows; useful reference.
- No specific Reddit threads from June 13-15 confirmed.
