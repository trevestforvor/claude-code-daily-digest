# Research Notes — 2026-07-11

## YouTube Coverage (curated creators, past 7 days)

### @indydevdan (IndyDevDan — 129K subs)
- **"This MCP Gives Claude Code 600,000+ Real Design References"** — published ~July 7 (4 days ago). Covers the official Mobbin MCP, which surfaces 600K+ real UI screenshots from 1,100+ apps directly inside Claude Code. Strong DESIGN signal. Video: https://www.youtube.com/watch?v=ljHRWIYMYf4

### @Chase-H-AI (Chase AI — 109K subs)
- No Claude Code skill/plugin videos found in past 7 days. Last relevant video appears to be "Your Claude Code Carousels Suck (Here's The Fix)" from June 2, 2026. Skip this week.

### @TechWithTim (Tech With Tim — 2M subs)
- Recent videos found: "Watch This If You're Just Learning How to Use Claude Code in 2026" and "FULL Claude Code Tutorial For Beginners in 2026" — both tutorial/overview content, no specific new tools mentioned. No strong tool-signal from TechWithTim this week.

### @simonscrapes (Simon Scrapes — 71.8K subs)
- Recent videos from March–April 2026. No confirmed new videos in past 7 days.

### @DevelopersDigest (Developers Digest — 61.5K subs)
- No Claude Code-specific recent videos confirmed. Search returned Anthropic conference coverage (May 2026), not recent week.

### @charlieautomates (Charlie Automates — 8.08K subs)
- Confirmed coverage of cc-switch on July 7 (from earlier digests). No new unique tool coverage confirmed for July 8–11.

### @adrienaidesigner (Adrien | AI Designer — 4.05K subs)
- No confirmed recent videos in past 7 days.

### @UICollectiveDesign (UI Collective — 52.5K subs)
- No confirmed recent videos in past 7 days.

---

## Key Findings

### New items (not in submissions.json or last 7 digests)

1. **bradautomates/claude-video** — 7,400 stars as of this run; was ~5,400 earlier this week; growth ~1,000+/day. Plugin that gives Claude the ability to watch any video (YouTube, TikTok, Instagram, local files). Extracts frames + transcripts. One of fastest-growing Claude Code plugins of July 2026.
   - Install (Claude Code): `/plugin marketplace add bradautomates/claude-video` then `/plugin install watch@claude-video`
   - GitHub: https://github.com/bradautomates/claude-video

2. **Mobbin MCP** — Official MCP from Mobbin (screen design library) launched May 13, 2026. Provides 600K+ real UI screens from 1,100+ apps directly in Claude Code. Covered by IndyDevDan July 7. DESIGN category. Not in submissions.
   - Install: `claude mcp add mobbin --scope user --transport http https://api.mobbin.com/mcp`
   - Docs: https://docs.mobbin.com/mcp/clients/claude-code
   - Unofficial GitHub: https://github.com/pdcolandrea/mobbin-mcp

3. **Claude Code Desktop in-app browser** (Week 28, v2.1.202) — Sandboxed browser built into Claude Code Desktop. Claude can pull up docs, design references, external sites, and interact with pages the same way it does local dev-server previews. Not separately highlighted in any daily digest despite being the headline Week 28 feature.
   - Docs: https://code.claude.com/docs/en/whats-new/2026-w28

4. **Claude Code auto mode on Bedrock/Vertex/Foundry** (July 11 release) — Auto mode is now the DEFAULT on all three major third-party cloud platforms. Bedrock also updated to Claude Opus 4.8. Relevant for enterprise users avoiding manual permission prompts.

### Items in recent digests — recurring signal

- **fable5-metered-billing** — Free Fable 5 access extended to July 12; that is TOMORROW. Critical deadline.
- **claude-code-limits-july13** — Weekly limits +50% expire July 13. 2 days remaining.
- **obra-superpowers** — 252K+ stars, ongoing additions.
- **mattpocock-skills** — 164K stars, /grill-me & /grill-with-docs sticky.
- **graphify** — 81.8K stars, daily cadence, 71.5x token savings.
- **caveman** — 87.6K stars, 65–75% token cut.
- **cc-switch** — 116K stars, Day 2 since first digest appearance.
- **claude-mem** — 86.7K stars, persistent memory via ChromaDB.
- **karpathy-claude-md-v10** — ~225K combined stars, still fastest-growing behavioral skill.
- **claude-science** — $30K grants close July 15. 4 days remaining.
- **claude-code-steganography** — Day 11. Anthropic post-mortem still not published.

### Items evaluated but skipped

- **imsaif/design-with-claude** — Only 9 stars. Not trending.
- **Strix AI pentest** (usestrix/strix, 36K stars) — Multi-LLM tool; not Claude Code-specific enough for this digest.
- **claude-code-router** (musistudio, ~33K stars) — Already appeared in 2026-07-04 digest. Mature project.
- **pal-mcp-server** (BeehiveInnovations, ~11K stars) — Already in 2026-07-04 digest.
- **Anthropic $965B valuation** — News from May 28; outside 72h window.
- **rohitg00/awesome-claude-code-toolkit** — Only ~2.1–2.3K stars; not trending.
- **Simon Willison sqlite-utils with Fable** — Niche developer blog post; low viral signal for this digest.

---

## Sources consulted

- YouTube search (site:youtube.com per creator handle)
- GitHub search (claude-code, mcp-server, claude-skill topics)
- Claude Code What's New page (code.claude.com/docs/en/whats-new)
- Anthropic newsroom
- simonwillison.net
- HN / Reddit search
- Releasebot.io (403, couldn't access)
