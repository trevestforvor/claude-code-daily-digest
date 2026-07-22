# Research Notes — 2026-07-22

## Research window: ~72h back (July 19–22, 2026)

---

## YouTube Coverage

### @Chase-H-AI (Chase AI, 109K subs) — ACTIVE
- **"This Skill Turns Fable 5 & GPT 5.6 Into Web Design MONSTERS"** (~2 weeks ago, ~July 8)
  - Covers: `kpab/claude-fable-5-skills` — 10 Fable 5-native skills, `/grill-codex` command
  - Pattern: Fable plans → Codex builds → Fable reviews; ~130K tokens on expensive Fable side vs full Fable build
  - Blog post: https://www.chaseai.io/blog/combine-fable-5-and-soul-5-6-skill
  - Note: Published ~July 8, slightly outside 72h window but still circulating

### @indydevdan (IndyDevDan, 129K subs) — PARTIAL
- **"Claude 4 ADVANCED AI Coding: How I PARALLELIZE Claude Code with Git Worktrees"** — recent
  - Covers: Git worktrees technique for parallel Claude instances, not a specific tool/repo
  - Not included in digest (no installable tool)

### @TechWithTim (Tech With Tim, 2M subs) — GENERAL TUTORIALS
- **"FULL Claude Code Tutorial For Beginners in 2026!"** (~3 weeks ago)
  - General tutorial, not tool-specific
- Videos are educational, not pointing to specific new tools this week

### @simonscrapes (Simon Scrapes, 71.8K subs) — NO RECENT CLAUDE CONTENT
- No specific recent Claude Code videos found this run

### @DevelopersDigest (61.5K subs) — NO SPECIFIC RECENT CONTENT FOUND

### @UICollectiveDesign (52.5K subs) — NO SPECIFIC RECENT CONTENT FOUND

### @charlieautomates (Charlie Automates, 8K subs) — NO SPECIFIC RECENT CONTENT FOUND

### @adrienaidesigner (4K subs) — NO SPECIFIC RECENT CONTENT FOUND

---

## High-Signal Items Past 72h

### Anthropic Official

#### 1. Fable 5 Permanent in Max/Team Premium (July 20)
- **URL**: https://enterprisedna.co/resources/news/anthropic-fable-5-permanent-max-team-premium-july-20-2026/
- **Simon Willison**: https://simonwillison.net/2026/Jul/18/claude-make-fable-5-permanent/
- Beginning July 20, Fable 5 included in all Max and Team Premium plans at 50% of limits
- Pro/Team Standard users keep pay-as-you-go with a one-time $100 credit
- Backed by SpaceX Colossus 1 deal (300MW, 220K+ NVIDIA GPUs) + per-call efficiency improvements
- Ends months of access chaos since June Fable 5 launch

#### 2. Claude Code Limits Extended to August 19
- @ClaudeDevs: "We're also keeping Claude Code weekly limits 50% higher, now through August 19"
- Applies to Pro, Max, Team, seat-based Enterprise
- Originally ran through July 19, then July 19 extension, now August 19
- Source: https://x.com/ClaudeDevs/status/2078511173759324328

#### 3. Claude Code v2.1.217 (July 21, 2026)
- Emoji shortcode autocomplete (`:heart:` → ❤️)
- Max concurrent subagents limit (default 20, env: `CLAUDE_CODE_MAX_CONCURRENT_SUBAGENTS`)
- Nested subagents disabled by default (opt-in via `CLAUDE_CODE_MAX_SUBAGENT_SPAWN_DEPTH`)
- Bug fix: SKILL.md/CLAUDE.md paths frontmatter with many brace groups was OOM-killing CLI
- Bug fix: Windows auto-update failures leaving claude.exe missing
- Source: https://github.com/anthropics/claude-code/releases/tag/v2.1.217
- Also: v2.1.216 was yesterday's digest item

#### 4. Bun Rewritten in Rust by 64 Claude Agents, Now Powers Claude Code (Simon July 19)
- Bun's founder Jarred Sumner ported 960K+ lines of Zig → Rust in 11 days using 64 parallel Claude instances (pre-release Fable 5)
- Cost: ~$165K in API spend
- Motivation: Bun had a long-standing memory leak that was severely impacting Claude Code, its largest customer
- Claude Code adopted the Rust port; Simon Willison's July 19 post notes 10% faster Linux startup
- Source: https://simonwillison.net/2026/Jul/19/claude-code-in-bun-in-rust/

### Community Tools / Repos

#### 5. sickn33/agentic-awesome-skills (43.7K stars)
- AAS Core: local agent-first control plane, 1,987+ agentic skills
- Local MCP server, Workbench UI, stack validation before applying
- V15.3.0, 2,366 commits, active dev
- Install: `npx agentic-awesome-skills`
- Updated: July 22, 2026
- URL: https://github.com/sickn33/agentic-awesome-skills

#### 6. wanshuiyin/Auto-claude-code-research-in-sleep — ARIS (13.7K stars)
- 80 composable Claude Code skills for autonomous ML research
- Cross-model adversarial review: Claude Code drives research, GPT-5.6-Sol (via Codex MCP) reviews
- No framework lock-in — pure Markdown SKILL.md files
- v0.4.22 (July 2026), group-based skill selection
- URL: https://github.com/wanshuiyin/Auto-claude-code-research-in-sleep

#### 7. browser-act/skills (4.6K stars)
- Browser automation CLI for AI agents, anti-bot bypass (Cloudflare, DataDome)
- Three browser modes: Chrome, stealth privacy, stealth fixed identity
- Claims: 93% token reduction vs raw HTML workflows, 90% fewer error-retry loops
- Install: `npx skills add https://github.com/browser-act/skills --skill browser-act`
- MIT, 457 commits
- Updated: July 21, 2026

#### 8. kpab/claude-fable-5-skills (13 stars, but Chase AI 109K subs coverage)
- 10 Fable 5-native skills: effort calibration, scope control, autonomous continuation
- Key skill: `/grill-codex` — 4-stage interview-plan-build-review where Codex does the heavy lifting
- ~130K Fable tokens for a full web app (vs ~850K for all-Fable)
- Install: `/plugin marketplace add kpab/claude-fable-5-skills`
- URL: https://github.com/kpab/claude-fable-5-skills
- Chase AI blog: https://www.chaseai.io/blog/combine-fable-5-and-soul-5-6-skill

#### 9. SamurAIGPT/Generative-Media-Skills (3.9K stars)
- 41 multi-modal workflow recipes: image, video, audio via muapi.ai
- Skills: Cinema Director, UI Designer, Logo Creator, Seedance 2, Suno V5 music
- 16 video skills, 21 image/design skills, 5 social media skills
- Works with Claude Code, Cursor, Gemini CLI as MCP server
- Install: `npx skills add SamurAIGPT/Generative-Media-Skills --all`
- URL: https://github.com/SamurAIGPT/Generative-Media-Skills

#### 10. EpicGames/unreal-engine-skills-for-claude-code-plugin (147 stars)
- Official Epic Games plugin via MCP
- Exposes hundreds of Unreal Editor tools across 30+ toolsets
- Covers actors, blueprints, materials, Niagara, Sequencer, State Trees, GAS, automation testing
- URL: https://github.com/EpicGames/unreal-engine-skills-for-claude-code-plugin
- Install: See README (requires Unreal Engine 5+)

#### 11. Ralph Wiggum (Official Anthropic, in anthropics/claude-code)
- Self-drive mode: feeds same prompt back to Claude each turn until done
- Implements stop-hook pattern; set max iterations to avoid runaway token burn
- Install: `/plugin install ralph-wiggum@claude-plugins-official`
- URL: https://github.com/anthropics/claude-code/tree/main/plugins/ralph-wiggum

---

## Recurring Items (appeared in last 7 days of digests)

- **andrej-karpathy-skills** — Day 5 in July 21 digest → Day 6 today; 194K+ stars, DESIGN priority
- **jacobian-conjecture** — Day 1 in July 21 digest → Day 2 today; still circulating
- **claude-tag-fireside** — Day 1 in July 21 digest → Day 2 today; Cat Wu + Thariq fireside
- **claude-code-best-practice** — Day 6 in July 20 digest, skipped July 21 → Day 8 now; 63.3K stars

---

## Items Checked & Excluded

- **J-Space (Anthropic interpretability)** — July 6, outside 72h window; excluded
- **IndyDevDan Git Worktrees video** — technique, no installable tool; excluded
- **Chase AI web design video** — covered via kpab/claude-fable-5-skills item
- **TechWithTim tutorials** — general education; excluded
- **Simon Scrapes, Developers Digest, UI Collective, Charlie Automates, Adrien AI Designer** — no specific Claude Code tool content found this run

---

## Data Quality Notes

- YouTube pages returned 403 errors (blocked without auth) — channel pages not fetchable
- simonwillison.net returned 403 — used search summaries
- star counts from GitHub topic page fetches (direct fetch succeeded)
- Bun story confirmed via multiple independent sources

