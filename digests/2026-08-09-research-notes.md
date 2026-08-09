# Research Notes — 2026-08-09

## Summary

Strong new signal today: Anthropic's auto mode becoming the default (Aug 14) is the headline item, backed by HN front page, 9to5Mac, The New Stack, and Cryptonomist coverage. The security research routing skill (reverse-skill) has 8,386 stars gained this week and is GitHub trending. Core recurring stack remains strong: graphify (Day 18), caveman (Day 17), ecc (Day 17), andrej-karpathy-skills (Day 23).

---

## YouTube Coverage (past 7 days)

### Chase AI (@Chase-H-AI, 175K+ subs)
- **"The #1 Claude Code Design Skill Just Got a HUGE Upgrade"** — posted ~6 days ago (≈ Aug 3). Covers ui-ux-pro-max-skill and its v2.0 Design System Generator upgrade. Added creator_buzz to ui-ux-pro-max-skill.
- Other recent uploads: "This Skill Turns Fable 5 & GPT 5.6 Into Web Design MONSTERS" (within 7 days), "Your Claude Code Carousels Suck (Here's The Fix)" — design-focused content, no new tool identified beyond design skills already tracked.

### Charlie Automates (@charlieautomates, 8K subs)
- "#1 Claude Code Repo Today (Nobody's Talking About It)" — from July 8, outside 7-day window; covered Understand Anything (already in digest).
- "2 Claude Code Repos NOBODY'S Talking About Yet" — timing unclear, covered bradautomates/claude-video (14.7K stars, /watch command for video analysis). Not included in today's digest due to lower star count (14.7K < current digest floor).
- No verified Claude Code content from Charlie Automates in the strict past 7 days.

### IndyDevDan (@indydevdan, 129K subs)
- No specific new Claude Code video identified in the past 7 days. Channel continues agentic engineering focus; no new tool featured to add to digest.

### TechWithTim (@TechWithTim, 2M subs)
- No specific new Claude Code video identified in the past 7 days.

### Simon Scrapes (@simonscrapes, 71.8K subs)
- No specific new Claude Code video identified in the past 7 days.

### UI Collective (@UICollectiveDesign, 52.5K subs)
- No specific new Claude Code video identified in the past 7 days.

### Developers Digest (@DevelopersDigest, 61.5K subs)
- No specific new Claude Code video identified in the past 7 days.

### Adrien AI Designer (@adrienaidesigner, 4K subs)
- No specific new Claude Code video identified in the past 7 days.

---

## Key Research Findings

### New Items

1. **Claude Code Auto Mode Default** (Anthropic official)
   - URL: https://claude.com/blog/auto-mode-default-in-claude-code
   - Starting August 14, 2026: auto mode becomes the default for new sessions on Pro, Max, and Team plans
   - Safety classifier blocks 89% of dangerous commands vs. 13.6% caught by human approvers
   - As of Aug 9: classifier overhead no longer counts toward usage limits
   - HN: https://news.ycombinator.com/item?id=49214994 (front page)
   - 9to5Mac: https://9to5mac.com/2026/08/07/psa-claude-code-enabling-auto-mode-as-default-next-week-anthropic-says/
   - The New Stack, Cryptonomist, Threads also covered it

2. **zhaoxuya520/reverse-skill** (22.3K stars, GitHub trending)
   - Security research routing skill: maps APK/binary/CTF challenge types to correct tool (jadx, Frida, IDA, Ghidra, radare2, burp-mcp)
   - 8,386 stars gained in the past week — GitHub trending
   - Not in submissions.json, not in Aug 2-8 digests

3. **Claude Code 2.1.225** (Aug 8 release — alongside 2.1.224 release train)
   - Gateway spend-limit support (warns on usage cap, names cap + reset time)
   - Workspace trust prompt for `claude agents` in untrusted dirs
   - SendMessage: can now START conversations with Remote Control sessions by name (not just reply)
   - Photos from Claude app now shown directly to Claude (no disk read tool call)
   - Fixed transient 401 errors, MCP OAuth macOS 401 intermittent failures
   - Decided: fold into claude-code-2-1-224 entry update OR drop in favor of auto-mode item (chose latter)

4. **bradautomates/claude-video** (14.7K stars)
   - /watch command: accepts YouTube/TikTok/Vimeo/local file → extracts frames + transcript → hands to Claude
   - Charlie Automates covered it
   - Star count (14.7K) below current digest floor; held for future consideration

5. **MCP 2026-07-28 spec** (Anthropic)
   - Stateless core, OAuth/OIDC enterprise auth, Tasks/Apps versioned extensions
   - Appeared in July 26-29 digests; covered by digest already; fading from Aug 2-8 window

### Investigated but Excluded (previously covered in earlier digests or fading)

- **obra/superpowers** (269.6K stars): Featured in May-July 2026 digests extensively; absent from Aug 2-8 cycle (dropped as fading). Not re-introduced.
- **mattpocock/skills** (210.8K stars): Same as above — featured in July digests, dropped from Aug cycle.
- **lean-ctx** (3.5K stars): MCP server for context compression; too low star count for current digest.
- **jeremylongshore/claude-code-plugins-plus-skills** (2.6K stars): Marketplace hub, too low star count.
- **MCP 2026 spec**: Covered in July 28-29 digests, fading.

### Dropped from Aug 8 Digest

- **context-mode** (19.6K stars, Day 7 complete): Rotating out to make room for new Anthropic auto mode item. Still strong but lower urgency.
- **claude-code-2-1-224** (Day 3): Superseded by 2.1.225; combined coverage folded into historical record. Auto mode announcement covers the more impactful Anthropic news today.

### Chase AI Creator Buzz Update

Chase AI's "@Chase-H-AI" video "The #1 Claude Code Design Skill Just Got a HUGE Upgrade" (posted ~Aug 3) covers ui-ux-pro-max-skill v2.0 with Design System Generator. Adding `creator_buzz: ["@Chase-H-AI"]` to that item.

---

## Final Digest Plan (15 items)

Ranked by category priority: DESIGN → COST/TOKEN → VIRAL → ANTHROPIC → GENERAL

**New (2):** claude-code-auto-mode-default, reverse-skill  
**Recurring (13):** graphify (Day 18), ui-ux-pro-max-skill (Day 3, +Chase AI buzz), open-design (Day 10), understand-anything (Day 14), ponytail (Day 3), caveman (Day 17), claude-mem (Day 4), oh-my-openagent (Day 4), last30days-skill (Day 2), headroom (Day 12), ecc (Day 17), andrej-karpathy-skills (Day 23), cc-switch (Day 3)  
**Dropped (2):** context-mode, claude-code-2-1-224
