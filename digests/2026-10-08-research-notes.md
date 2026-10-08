# Research Notes — 2026-10-08

## Sources Checked

### YouTube Coverage
Checked all 8 channels from `sources/youtubers.json`. No channel could be confirmed with new Claude Code content in the past 7 days via web search (YouTube site: queries returned noisy third-party mirrors, not direct video pages).

| Channel | Result |
|---------|--------|
| @charlieautomates | No Oct 2026 content confirmed |
| @Chase-H-AI | No Oct 2026 content confirmed; last known blog post Aug 12, 2026 |
| @adrienaidesigner | No Oct 2026 content confirmed |
| @indydevdan | "Self Improving Subagents with Memory" video found but dated ~259 days ago, not Oct 2026 |
| @simonscrapes | A guide on "Claude Code without coding skills" referenced on third-party site; no direct Oct 2026 video confirmed |
| @UICollectiveDesign | No Oct 2026 content confirmed |
| @DevelopersDigest | No Oct 2026 content confirmed |
| @TechWithTim | Multiple beginner tutorials confirmed from earlier 2026 (254K+ views) but no Oct 2026 content confirmed |

**No creator_buzz fields populated this run** — no YouTuber coverage verifiable for the past 7 days.

---

### GitHub Trending (Oct 5–8, 2026)
Source: `marc-ko/daily-trending-repo` issues #571–574.

**Oct 5** top entries: universal-modder (3389), OpenDots (3302), dots (2608), yomiyasu (1436), floorplan-3d (1404), muse-gadget-sdk (1271), answer-me-with-html (1190), vibe-wise (1137), photocraft (1136), sales-crm (1060)

**Oct 6** top entries: universal-modder (4006), photocraft (2303), yomiyasu (1551), answer-me-with-html (1550), sales-crm (1512), muse-gadget-sdk (1470), REDox (1091), SkyCraft (992), bloodborne_pc (819), easyread (813)

**Oct 7** top entries: openai/math (5165), answer-me-with-html (1854), sales-crm (1598), muse-gadget-sdk (1586), bloodborne_pc (1352), effectcraft (1033), huashu-art-motion (899), hairline (870), Stronghold-Protocol (851), backburner (799)

**Oct 8** top entries: openai/math (10642), answer-me-with-html (2200), huashu-art-motion (2007), muse-gadget-sdk (1707), sales-crm (1643), x_gift_bot (1011), Stronghold-Protocol (946), replica-skill (924), gdp-ts (747), leviathan (673)

### Key Items Researched

- **storytold/photocraft**: 23.8k stars, clean-room Photoshop rewrite in Rust, 500+ commands accessible via MCP server (`photocraft-cli mcp`). Trending Oct 5–7. AGENTS.md included. Not in prior digests.
- **nykooi1/vibe-wise**: 3.1k stars, MIT, Claude Code learning plugin — asks for approach before coding, explains what changed after. Trending Oct 5. Install via `/plugin install vibe-wise@anthropic-plugin-directory`.
- **Jakeschincariol/replica-skill**: ~1k stars, 11 Claude Code skills for full app-clone pipeline (recon → architect → design → build → test → brand → deploy). Trending #8 Oct 8. Plugin marketplace install.
- **alchaincyf/huashu-art-motion**: 2.3k stars, agent skill for AI art animation in 35 styles + 9 explainer grammars; installed via `npx skills add`. Trending #3 Oct 8.
- **openai/math**: 11.7k stars in 2 days. 719 mathematical manuscripts from an internal OpenAI reasoning model. No Claude Code tie, but largest viral AI signal this week.
- **facebookincubator/muse-gadget-sdk**: 1.7k stars, launched Oct 2. Meta's open-source SDK for AI-connected hardware accessories (ESP32 + Linux SDKs); AGENTS.md ships with the repo.
- **Anthropic v2.1.292–293**: v2.1.293 (Oct 7) makes Haiku 5.5 the default Haiku model; v2.1.292 (Oct 6) adds `--marketplace` flag to plugin install and effort setting for Agent tool. Source: Releasebot + claude.com/docs/cowork/changelog.
- **kargulstudio/sales-crm**: 1.7k stars by Oct 8. Next.js 16 + React 19 + Tailwind 4 boilerplate with CLAUDE.md, AGENTS.md, `.claude/skills`, `.agents/skills` pre-configured. Trending 4 days straight Oct 5–8.
- **Claude Code Mods platform**: Confirmed community repos (OneWave-AI, hamzafer, whyashthakker). Uncertain on official Anthropic announcement date — a French outlet cited Oct 1 but no primary Anthropic source confirmed. Requires Claude Code 2.1.287+. Not included in digest due to unverified announcement date.
- **OX Security MCP audit**: Covered by The Hacker News (Oct 6) — 15,465 public MCP servers audited, zero marketplace vetting found. Expired domains, consumer-tunneled hosts.

### Other Sources Checked
- HN Algolia: Found "MCP server reduces Claude Code context by 98%" (older) and MCP OAuth exploit story (Oct week)
- Reddit r/ClaudeAI / r/ClaudeCode: No direct threads retrieved; Releasebot confirmed v2.1.293 Oct 7
- Anthropic news: anthropic.com/news index retrieved but showed Oct 2025 entries, not Oct 2026
- simonwillison.net: Most recent Claude Code coverage from July 2026 fireside chat, nothing new Oct 2026
- Product Hunt: No specific Oct 2026 Claude Code launches found
- TLDR AI / Ben's Bites / latent.space: Not directly indexed this run due to time

### Dedup Check
Items NOT in submissions.json or last 7 days of digests: photocraft, vibe-wise, replica-skill, huashu-art-motion, openai/math, muse-gadget-sdk, anthropic-v2.1.293, OX security report, sales-crm.

`answer-me-with-html` appeared in Oct 7 digest — included as recurring_note.
