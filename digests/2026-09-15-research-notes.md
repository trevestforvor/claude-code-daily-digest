# Research Notes — 2026-09-15

## YouTube Coverage

### @charlieautomates (8.1k subs)
- **"8 Insane GitHub Repos That 10x Your Claude Code Setup"** (published ~Sep 14, 2026, 1 day ago at search time)
  - Covered: `img2threejs` (image → Three.js 3D), `Reticle` (browser app verification), `Chisel` (token shrinking), UI skills library, `Uroboros` (requirements clarifier), Swift UI skills, `Caliper` (skill quality tester), `Antislop` (bad pattern fixer)
- **"Don't Setup a Claude Code Second Brain Until You Watch This."** (recent) — covers planning/context management tools
- **Understand Anything blog post** — covered `Egonex-AI/Understand-Anything` in July 2026 (too old for this digest)
- **"5 Claude Code Plugins for UI/UX Design (September 2026)"** — covered: Awesome Design (111k★), Impeccable (63.7k★, in submissions), Taste Skill (in submissions), Playwright CLI, img2threejs (14.4k★)

### @indydevdan (129k subs)
- Recent video: "AI Summer 2026 | Claude Code & Choosing the Right Model | Week 3, Day 1" — general Claude Code positioning, no specific new tool identified this cycle
- Maintains "Claude Code Deep Mastery" playlist; no single new repo highlighted in past 3 days from search results

### @simonscrapes (71.8k subs)
- "How Smart People Are Using Claude Code Skills to Automate Anything" — general skills content; no specific new repo identified for Sep 13-15
- Most recent content appears to be from March-April 2026 in search results

### @Chase-H-AI (109k subs)
- No specific Sep 13-15 content found in searches; blocked from YouTube direct fetch

### @adrienaidesigner (4.1k subs)
- No content found for this period

### @TechWithTim (2M subs)
- No Claude Code-specific content identified for Sep 13-15

### @UICollectiveDesign (52.5k subs)
- No content found for this period

### @DevelopersDigest (61.5k subs)
- No content found for this period

**Key tastemaker signal:** `img2threejs` appeared in Charlie Automates' "8 Insane GitHub Repos" video. No cross-channel amplification this week.

---

## Candidate Items

### High-confidence new items

1. **claude-mem** — `thedotmack/claude-mem` — 93.9k★ — Persistent context across agent sessions via 5 lifecycle hooks + SQLite + Chroma vector search. Works with Claude Code, OpenClaw, Grok Bot, Codex, Gemini, Hermes, Copilot, OpenCode. Install: `npx claude-mem install`. NOT in any recent digest or submissions.json.

2. **img2threejs** — `img2threejs/img2threejs` — 16.1k★ — Converts reference images to procedural Three.js models as TypeScript code (no meshes, no photogrammetry). 8-stage quality-gated pipeline. Featured by @charlieautomates Sep 14. Install: clone to skills folder, invoke via `/img2threejs [prompt]`. NOT in submissions.

3. **nanoclaw** — `nanocoai/nanoclaw` — 30.8k★ — Lightweight OpenClaw alternative that runs in containers. Connects to WhatsApp, Telegram, Slack, Discord, Gmail. Memory + scheduled jobs + Anthropic Agents SDK. Install: `bash nanoclaw.sh`. NOT in any recent digest.

4. **distilly** — `harr1sz/distilly` — 24.8k★ — Builds portable Person Profiles from colleagues/friends/celebrities/yourself as reusable agent skills. Multi-source (Slack, WeChat, PDFs, X posts). Supports 8 agent hosts natively. NOT in digests or submissions.

5. **awesome-agent-skills** — `VoltAgent/awesome-agent-skills` — 34.4k★ — 1,497+ hand-picked agent skills from official dev teams (Stripe, Google, Microsoft, Vercel, Cloudflare, Trail of Bits, etc.) + community. Compatible with Claude Code, Codex, Gemini CLI, Cursor. Updated Sep 15. NOT in digests or submissions.

6. **planning-with-files** — `OthmanAdi/planning-with-files` — 26.9k★ — "Manus-style" file-based planning for agents: 3 markdown files survive context loss, SHA-256 attestation, multi-agent isolation. Install: `npx skills add OthmanAdi/planning-with-files --skill planning-with-files -g`. RECURRING: was in Sep 8 digest only; 7-day gap; updated Sep 15 = re-trending.

7. **ctf-skills** — `ljagiello/ctf-skills` — 3.3k★ — Agent skills for 10 CTF categories (web, pwn, crypto, reverse, forensics, OSINT, malware, AI/ML, misc, orchestrator). Updated Sep 13. Install: `npx skills add ljagiello/ctf-skills`. NOT in submissions.

8. **oh-story-claudecode** — `zenstory-ai/oh-story-claudecode` — 6.9k★ — 13 skills for Chinese web novel (网文) writing: chart scanning, novel deconstruction, writing, de-AI-ification, cover generation. Updated Sep 15. Install: `npx skills add zenstory-ai/oh-story-claudecode -y -g`. NOT in submissions.

### Anthropic Official

9. **Messages API compact-on-demand** — `platform.claude.com/docs` — Sep 14 release — Compact-on-demand via beta header `compact-2026-09-04`. Summarizes conversation mid-session without waiting for context limit. COST category.

10. **Claude Code v2.1.271** — Sep 14 release — Fast mode for Claude Code Remote sessions; mouse support in /config panel. Minor but useful remote workflow improvement.

11. **Claude Managed Agents auto policies** — Sep 10 release — New `auto` option for permission policies in Claude Managed Agents + `ant beta:sessions connect` CLI command. Agent governance feature.

### Recurring (recent digests)

12. **claude-code-best-practice** — `shanraisshan/claude-code-best-practice` — 65.9k★ — Was in Sep 12-13 digests; not in Sep 14. Updated Sep 15. Still in active development. Day 4 recurring.

---

## Items Dropped (fading from last 7 days)

- `oh-my-openagent` — was in Sep 8-12 (5 consecutive days), absent Sep 13-14 → fading
- `understand-anything` — was in Sep 9-11, absent Sep 12-14 → fading  
- `agentic-awesome-skills` (sickn33) — was in Sep 9-12, absent Sep 13-14 → fading (note: VoltAgent/awesome-agent-skills is different and new)
- `claude-code-limits-sept14` — was in Sep 8-11, absent since → fading
- `caveman`, `ponytail`, `orca`, `andrej-karpathy-skills` — all Sep 8-11 only → fading
- `video-shotcraft`, `function-hooks`, `trace-mcp`, `archify`, `spotify-portal-shunt` — Sep 12-14, may reappear tomorrow
- `ralph-wiggum`, `claude-code-smart-reports`, `mattpocock-skills`, `i-have-adhd` — recurring Sep 11-14, dropped today to avoid overrepresentation

## HN Signal
- "Claude Code as a Daily Driver: Claude.md, Skills, Subagents, Plugins, and MCPs" (HN #48289950) — recent general discussion, no single standout tool
- "A Claude Code and Codex Skill for Deliberate Skill Development" (HN #48130679) — no specific GitHub link confirmed

## Product Hunt (Sep 13, 2026)
- `Anysite.io` (459 upvotes) — B2B lead gen agent; not Claude Code-specific
- `Loqua` (405 upvotes) — voice to structured actions; not Claude Code-specific
- `Raycast 2.0` (318 votes) — AI workflows for Mac; mainstream but not Claude Code-specific
- `Jackalope` (80 votes) — unified IDE for Claude Code + Codex + Grok + OpenCode; interesting but niche
