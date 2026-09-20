# Research Notes — 2026-09-20

## Summary
72-hour window: Sept 17–20, 2026. YouTube direct page access blocked (www.youtube.com egress blocked); used search-result snippets and creator blogs instead. HN Algolia also blocked; used search-based approximations.

---

## YouTube Coverage (Sept 13–20, 2026)

### @charlieautomates (8K subs)
- **"[Free on Github] My Claude Code Jarvis AI Assistant Runs My Business"** (5 days ago, ~Sept 15) — featured a "Jarvis" repo for business automation with Claude Code. Likely adewaskar/jarvis or ethanplusai/jarvis (could not access video page directly).
- **"Don't Setup a Claude Code Second Brain Until You Watch This"** (3 weeks ago) — covered charlie947/ai-second-brain (already in Sept 16 digest).
- No coverage of items from the past 72h that are NOT already in digests.

### @Chase-H-AI (109K subs)
- **"The #1 Claude Code Design Skill Just Got a HUGE Upgrade"** — covered Impeccable 4.0 (impeccable is in submissions.json, skip). Chase AI blog confirms this is Impeccable.
- **"Claude Code Just Got Its Biggest Design Upgrade Of The Year"** (3 weeks ago) — general Claude Code design workflow video.
- No new repos from past 72h beyond impeccable.

### @indydevdan (129K subs)
- Recent videos from 3 weeks ago: "How to use Claude Code For Free in 2026", "How To Use Claude Code With Visual Studio 2026". 
- No Claude Code tool/skill video confirmed from Sept 17–20 window; no new repos surfaced.

### @simonscrapes (71.8K subs)
- Most recent Claude Code video found: "NEW Claude Code Update is INSANE!" (June 2026). No Sept 2026 content found in search results.

### @DevelopersDigest (61.5K subs)
- General Claude Code coverage ongoing; no specific new tool/repo from Sept 17–20 surfaced.

### @TechWithTim (2M subs)
- "Codex vs Claude - an Honest Comparison" (3 weeks ago). No Sept 17–20 Claude Code tool launches found.

### @UICollectiveDesign (52.5K subs) and @adrienaidesigner (4K subs)
- No Sept 17–20 content surfaced in searches.

**Conclusion:** No tool received 2+ YouTuber coverage in the past 72h window. Charlie Automates covered jarvis-type repos (adewaskar/ethanplusai) ~5 days ago which gives minor boost signal to ethanplusai/jarvis.

---

## GitHub Trending / New Repos

### NEW items (not in any prior digest or submissions.json):

1. **bitjaru/styleseed** — 960 stars. Design-method engine: 23 agent skills, 74 design rules, quality gate (0-100 score). Enforces expert design judgment in Claude Code, Codex, Cursor. `npx skills add bitjaru/styleseed`. Not in any digest.

2. **SeanJ1ang/design-judge-skills** — 1,000 stars. Evidence-driven skills for design award research, evaluation, award matching, entry writing. 22,125 aggregated observations from iF DESIGN, Red Dot, IDEA, K-Design, GOOD DESIGN. Tested on K-Design 2026 (40.87% top-115 accuracy). Not in any digest.

3. **earthtojake/text-to-cad** — 16.2K stars. Agent skills for CAD, CAE, CAM: STEP/STL/3MF/GLB exports, robot URDF/SRDF/SDF, G-code slicing, SendCutSend + Bambu integrations. `npx skills add earthtojake/text-to-cad`. Not in any digest.

4. **latent-spaces/brag** — 6K stars. One-command launch video generator powered by Hyperframes: voiceover, motion graphics, marketing copy, share-ready output in `brag-output/`. Mentioned in Latent Space ecosystem. Not in any digest.

5. **numman-ali/openskills** — 10.8K stars. Universal skills loader: brings Anthropic's SKILL.md format to Claude Code, Cursor, Windsurf, Aider, Codex, anything that reads AGENTS.md. `npm i -g openskills`. Not in any digest.

6. **ethanplusai/jarvis** — 779 stars. macOS voice assistant for Claude Code: talk to your Mac, Claude brainstorms + builds + notifies when it needs you. Uses your Claude subscription, no separate API key. Built by ethanplus.ai. Not in any digest; Charlie Automates posted about "My Claude Code Jarvis AI" ~5 days ago (minor signal).

### Recurring items still trending:

- **nexu-io/open-design** — 96.7K+ stars (from Sept 17 digest). Dominating design category.
- **cathrynlavery/diagram-design** — 41.1K+ stars (from Sept 18 digest). Top diagram skill.
- **juliusbrussee/caveman** — 106.5K+ stars (from Sept 18 digest). Still #1 COST tool.
- **rtk-ai-rtk** — 80.8K+ stars (from Sept 17 digest). Token compression.
- **egonex/understand-anything** — 83K+ stars (from Sept 17 digest). Charlie Automates blog coverage.
- **graphify-labs/graphify** — 119K+ stars (from Sept 17 digest). Fastest-growing codebase tool.
- **yeachan-heo/oh-my-claudecode** — 39.2K+ stars (from Sept 17 digest). Multi-agent orchestration.
- **wanshuiyin/aris** — 16.3K stars (from Sept 18 digest). ML research bundle.
- **statewright/statewright** — 491 stars (from Sept 18 digest). State-machine MCP.

---

## Other Sources

### Reddit / HN
- Reddit r/ClaudeCode: Usage limit discussions continuing (limits raised 25% permanently on Sept 14). No specific new tool virality found.
- HN: "Claude Code as a Daily Driver" thread active (item 48289950, date unknown — HN was blocked). Statewright HN thread confirmed from search snippets.

### Anthropic Official
- Claude Code Projects Beta (in submissions.json, skip).
- v2.1.277–278 AGENTS.md support (in submissions.json, skip).
- v2.1.279+ (Sept 19–20): mostly bug fixes — unexpected logout fix, startup hanging fix, artifact link handling, subagent model fixes on Bedrock/Vertex. No major new feature for a standalone item.

### Product Hunt
- No specific new Claude Code skills confirmed trending on PH Sept 17–20.

### Blogs
- aicodingdaily.substack: "GPT-5.4 Design Skill" article from March 2026 (not recent).
- Ben's Bites: covered Claude Code limits increase (Sept 14).

---

## Skipped (in submissions.json)
anthropic-claude-code-projects-beta, claude-code-v2-1-277-278, dietrichgebert-ponytail, cloudflare-security-audit-skill, coldteadotai-abide, kunchenguid-backpass, kunchenguid-compact-adviser, awlevin-typesafe-computer-use, chaseai-yt-claudex-loop, charlesdove977-advertising-ops, netresearch-agent-rules-skill, modem-dev-ossrules, sickn33-agentic-awesome-skills, leonardleroy-i-dont-believe-you, malav2110-explain-diff-html, impeccable, and ~50 older submissions.

## Notes on access limits
- youtube.com: BLOCKED (couldn't fetch video pages directly)
- hn.algolia.com: BLOCKED
- anthropic.com: BLOCKED
- releasebot.io: BLOCKED
Used web search snippets as proxies for these sources.
