# Research Notes — 2026-04-23

## Research Window
- Start: 2026-04-23 16:15 UTC
- End: ~16:21 UTC (372s elapsed, well within 20-min cap)

## YouTube Coverage

### @charlieautomates (Charlie Automates, 8k subs)
No specific Claude Code videos confirmed in the past 7 days. Search returned generic 2026 results. Skipped this run.

### @Chase-H-AI (Chase AI, 109k subs)
- "Top 10 Claude Code Skills, Plugins & CLIs (April 2026)" — ~2 weeks ago (outside 7-day window). No confirmed past-72h content found.
- "Dive into Claude Code: The Design Space of Today's and Future AI Agent Systems (Apr 2026)" — 2 days ago (appeared in Chase AI search results — possible coverage or co-promotion)

### @adrienaidesigner (Adrien AI Designer, 4k subs)
No Claude Code content found in past 7 days. Skipped.

### @indydevdan (IndyDevDan, 129k subs)
- **"Dive into Claude Code: The Design Space..." (youtube.com/watch?v=HRI34v68igw)** — 2 days ago (April 21). Strong signal — this video/paper from VILA-Lab appeared in IndyDevDan's results.
- **"Learn Claude Code with Lydia Hallie from Anthropic FREE!" (youtube.com/shorts/ijsrILEcdVc)** — ~1 week ago. IndyDevDan YouTube Short promoting the Frontend Masters workshop.
- "Top 5 Claude Code Skills + Tools for Design (April 2026)" — YouTube Short, 1 week ago. Generic but covers design tooling.

### @simonscrapes (Simon Scrapes, 71.8k subs)
Search returned Simon Willison blog post (different person). No YouTube content confirmed from @simonscrapes in past 7 days. Skipped.

### @UICollectiveDesign (UI Collective, 52.5k subs)
No specific content found in past 7 days. Skipped.

### @DevelopersDigest (Developers Digest, 61.5k subs)
No specific content found in past 7 days. Skipped.

### @TechWithTim (Tech With Tim, 2M subs)
No specific content found in past 7 days. Skipped.

## Key Items Found

### New Items (not in any prior digest)

1. **MeiGen-AI-Design-MCP** (jau123/MeiGen-AI-Design-MCP) — 591 stars, 72 forks
   - "Turn Claude Code / OpenClaw into your local Lovart." Local ComfyUI + 1,500+ prompt templates + parallel generation.
   - Install: `npx meigen init claude`

2. **Anthropic Pro Plan Removal Controversy** (April 21-22)
   - Anthropic quietly removed Claude Code from Pro plan pricing page with no announcement.
   - Covered by: The Register, PCWorld, Simon Willison, Ed Zitron (Where's Your Ed At), The New Stack.
   - Company said "2% test" but public pricing reflected it as universal change.

3. **claw-code** (ultraworkers/claw-code) — 185-188k stars, global rank #23
   - Open-source Rust rewrite of Claude Code architecture, launched April 1.
   - Fastest-ever GitHub repo to hit 100k stars. Not in any prior digest (digests started Apr 20).
   - Built by Sigrid Jin after Claude Code source was accidentally published to npm.

4. **claude-desktop-buddy** (anthropics/claude-desktop-buddy) — 1.2k stars
   - Official Anthropic BLE hardware bridge for Claude desktop app.
   - #2 Product of Day on Product Hunt April 20, 387 upvotes.
   - ESP32 desk pet reference implementation.

5. **Claude Code v2.1.118** — Released April 23 (today)
   - Vim visual mode (v/V), `/usage` merges `/cost`+`/stats`, custom named themes, hooks can invoke MCP tools directly.

6. **shanraisshan/claude-code-best-practice** — 47.6k stars
   - "From vibe coding to agentic engineering." 82+ tips including Boris Cherny (Claude Code creator) input.
   - Updated April 23; hit GitHub Trending Day #1 in March.

7. **Lydia Hallie Frontend Masters "Claude Code Deep Dive"** — April 21
   - Free full-day workshop by Anthropic DX engineer. CLAUDE.md, skills, MCP servers from scratch, hooks, subagents, worktrees.
   - frontendmasters.com/workshops/advanced-claude-code/
   - IndyDevDan posted YouTube Short about it.

8. **VILA-Lab/Dive-into-Claude-Code** — 608 stars
   - Academic paper (arXiv 2604.14228) + systematic analysis of Claude Code.
   - "98.4% Infrastructure, 1.6% AI" key insight. YouTube video 2 days ago (HRI34v68igw).

9. **Piebald-AI/claude-code-system-prompts** — 9.4k stars
   - All Claude Code system prompts extracted per release. Updated within minutes of each release. 160+ versions tracked.

10. **jeremylongshore/claude-code-plugins-plus-skills** — 2,000+ stars
    - 423 plugins, 2,849 skills, 177 agents. tonsofskills.com marketplace + ccpi CLI package manager.

11. **levnikolaevich/claude-code-skills** — 421 stars
    - Full Agile delivery lifecycle. hex-line (hash-verified editing), hex-graph (knowledge graph), hex-ssh (remote SSH) MCP servers.

### Recurring Items
- **caveman** — Day 4. 39.7k stars. Still most-cited token reduction; Pro controversy creates renewed interest.
- **claude-mem** — Day 4. 46k+ stars. Still broadly recommended.
- **everything-claude-code** — Day 4. 162k stars. ECC 2.0 alpha discussion ongoing.

## Dedup Checks
- Verified: None of the new items above appear in submissions.json (only openwolf) or in digests/2026-04-20, 21, 22.json.
- claw-code was NOT in any of the three prior digests despite launching April 1.

## Sources
- The Register, PCWorld, Simon Willison, Ed Zitron (Pro removal)
- releasebot.io, claudefa.st/blog/guide/changelog (release notes)
- GitHub: anthropics/claude-desktop-buddy, VILA-Lab/Dive-into-Claude-Code, Piebald-AI/claude-code-system-prompts, ultraworkers/claw-code, shanraisshan/claude-code-best-practice
- Product Hunt / hunted.space
- frontendmasters.com, YouTube searches
