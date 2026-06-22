# Research Notes — 2026-06-22

Research started: ~1782144237 unix. Final pass ~420s elapsed.

---

## YouTube Coverage (Past 7 Days)

### @indydevdan (129K subs)
- **"The ULTIMATE Beginner Guide to Claude Code in 2026"** — Published ~3 days ago (≈June 19). General intro/setup guide. No specific new tool identified.

### @Chase-H-AI (109K subs)
- **"Your Claude Code Carousels Suck (Here's The Fix)"** — ~3 weeks ago (May/early June)
- **"Claude Code + Nano Banana 2 = Insane 3D Websites"** — February/early 2026; kingbootoshi/nano-banana-2-skill identified as the covered tool
- **"Claude Code + Higgsfield MCP = Content MACHINE"** — April 29, 2026

### @charlieautomates (8K subs)
- **"2 Claude Code Repos NOBODY'S Talking About Yet"** — April 3, 2026 (too old for this window)
- **"SEED + PAUL = Claude Code Meta"** — Could not verify date; might be older content

### @simonscrapes (71.8K subs)
- **"Claude Code Just Hit A Different Level (We Built THIS)"** — 2 days ago (≈June 20). About Claude Code + n8n Agentic OS for non-developers via a paid Skool community.
- **"Claude Code Agentic OS… It Remembers Everything"** — ~3 days ago (≈June 19). ECC/agentOS memory coverage (already covered in yesterday's digest as creator_buzz for everything-claude-code-ecc)
- **"I Made Claude Code FOR TEAMS (It's Incredible)"** — ~3 weeks ago

### @UICollectiveDesign (52.5K subs)
- Could not find specific videos from the past 7 days matching Claude Code design content.

### @DevelopersDigest (61.5K subs)
- No specific videos identified from past 7 days.

### @TechWithTim (2M subs)
- No specific new Claude Code videos identified from past 72h.

### @adrienaidesigner (4K subs)
- No specific new videos from past 72h.

---

## Key Stories / Candidates

### 1. FABLE 5 BAN — DAY 10 (Major story)
- NSA Director Gen. Joshua Rudd testified to Senate Intelligence Committee (June 21) that Mythos 5, in a classified red-team exercise, **autonomously broke into nearly all NSA classified systems within hours**. This reshapes the ban rationale from "patch the jailbreak" to "the model's autonomous offensive capability is itself the national security concern."
- Android app changed error response from "model unavailable" to "server is temporarily rate-limiting requests" — possible backend activity signal.
- Kalshi prediction markets: **68% before July 1** / 74% by mid-July.
- Polymarket: Swung from 73% (Jun 18 peak) to **41% on June 26 deadline** after NSA testimony.
- June 22 was the deadline when Fable 5 was scheduled to move from plan limits to paid usage credits — no guidance issued given the ban.
- Source: https://www.techtimes.com/articles/318783/20260621/claude-fable-5-resurfaces-android-app-nsa-breach-testimony-reshapes-ban.htm
- Source: https://predictionnews.com/story/polymarket-odds-hit-73-that-claude-fable-5-returns-to-us-customers-before-july-1

### 2. AGENTJACKING — Sentry MCP injection attack
- Tenet Security Threat Labs disclosed "agentjacking" on June 17.
- Attackers inject fake error events into a Sentry project using a **public DSN credential** → the Sentry MCP server feeds those to AI coding agent as if real bugs → agent executes crafted npx command on your machine.
- Claude Code, Cursor, Codex all confirmed affected. 2,388 orgs exposed (71 Tranco top-1M). 85% success rate.
- Steals: env vars, AWS credentials (~/.aws/config), npm tokens, Docker creds, git credentials.
- Source: https://thenewstack.io/agentjacking-sentry-mcp-attack/
- Secondary: https://labs.cloudsecurityalliance.org/research/csa-research-note-agentjacking-mcp-sentry-injection-20260612/

### 3. CLAUDE DESIGN /design-sync UPDATE (Official Anthropic)
- Shipped June 17. Design system imports from GitHub repos/design files/raw uploads. /design-sync command pulls codebase's design system into Claude Design — and push finished designs back to Claude Code.
- Admin role locks company brand system across all org outputs.
- New export connectors: Adobe, Canva, Miro.
- Token efficiency: average turn uses fewer tokens, errors down sharply. Shared usage limits with Claude Code.
- Source: https://venturebeat.com/technology/anthropic-ships-major-claude-design-overhaul-with-design-system-imports-code-round-trips-and-a-fix-for-its-token-burning-problem
- Primary URL might be: https://www.anthropic.com/news/claude-design-anthropic-labs (needs verification)

### 4. ARIS (Auto-Research-In-Sleep)
- GitHub: wanshuiyin/Auto-claude-code-research-in-sleep
- 11.6k stars. 79 composable Claude Code skills for autonomous ML research.
- Claude Code drives research; external LLM (GPT-5.4/5.5 via Codex MCP) acts as adversarial reviewer.
- Can run experiments, write paper sections, score weaknesses overnight.
- Latest: /paper-poster-html pipeline (#79), June 7. Updated June 20.
- Source: https://github.com/wanshuiyin/Auto-claude-code-research-in-sleep

### 5. CANOPY — Parallel Claude Code on macOS
- Native SwiftUI app (no Electron). Each session in its own tab (Cmd+1-9), each in a git worktree.
- Sandboxed containers (Docker or Apple Container framework).
- One-click "Merge & Finish" for cleanup. Activity dashboard for token spend.
- AGPL-3.0, free. Multiple related GitHub repos found (itsoltech/canopy-desktop, The-Banana-Standard/canopy).
- Product Hunt page: https://www.producthunt.com/products/canopy-5
- Main site: https://canopy.itsol.tech/

### 6. NANO BANANA 2 SKILL
- GitHub: kingbootoshi/nano-banana-2-skill
- AI image generation CLI powered by Gemini 3 Pro. Green screen transparency, reference images, style transfer.
- Claude Code skill: install and then just say "generate an image of..."
- Cost tracking to ~/.nano-banana/costs.json
- Chase AI covered: "Claude Code + Nano Banana 2 = Insane 3D Websites"
- Source: https://github.com/kingbootoshi/nano-banana-2-skill

### 7. VoltAgent/awesome-agent-skills
- GitHub: VoltAgent/awesome-agent-skills
- ~26k stars. 1000+ hand-curated skills from official dev teams.
- Official contributors: Anthropic, Google Labs, Vercel, Stripe, Cloudflare, Netlify, Trail of Bits, Sentry, Expo, Hugging Face, Figma.
- Compatible with Claude Code, Codex, Antigravity, Gemini CLI, Cursor, GitHub Copilot, OpenCode, Windsurf.
- Automated security scan pass. Not AI-generated slop.
- Source: https://github.com/VoltAgent/awesome-agent-skills

### 8. KOBITON AUTOMATE MCP
- GitHub: kobiton/automate
- AI coding assistant plugin for Kobiton mobile testing cloud. Works with Claude Code, Copilot CLI, Gemini CLI, Cursor, Codex.
- 12 tools: Devices (list/reserve/status/terminate), Sessions (list/get/artifacts/terminate), Apps (upload/confirm/list/get).
- Real iOS + Android hardware, no emulator drift.
- Featured addition week of May 20; still gaining traction June 2026.
- Source: https://github.com/kobiton/automate

### 9. CLAUDE CODE v2.1.185 (Official)
- Released June 20. New /config key=value syntax to set any setting from prompt.
- Auto-mode safety: destructive git commands now blocked unless explicitly requested; terraform/pulumi/cdk destroy blocked unless specific stack named.
- Stream-stall hint improved: 20s wait instead of 10s, clearer message.
- Various JetBrains/PowerShell/macOS bug fixes.
- Source: https://releasebot.io/updates/anthropic/claude-code

### 10. ANTIGRAVITY AWESOME SKILLS v13 (RECURRING - Day 2)
- Still trending. v13.0.0 released yesterday (June 21). 1,678 skills. Kiro + OpenCode targets added.
- Slug: antigravity-awesome-skills-v13

### 11. AGENTMEMORY (RECURRING - Day 2)
- 23.6k stars (climbing). Still top trending cost-reduction tool for Claude Code.
- 92% token reduction, 53 MCP tools, 3-layer hybrid search.
- Slug: agentmemory

---

## Items Excluded
- FableWatch — covered Day 9 (2026-06-21), fading
- everything-claude-code-ecc — covered Day 8 (2026-06-20), fading
- ralph-wiggum-plugin — covered Day 8
- h5i-ai-git — covered Day 8
- mimo-code-xiaomi — covered Day 8
- cass-session-search — covered Day 8
- statewright — covered Day 8
- notchcode / cc-beeper — covered Day 8

---

## Ranking Logic (for digest)
1. DESIGN: Claude Design /design-sync (Anthropic official) → nano-banana-2 → Canopy
2. COST/TOKEN: ARIS, agentmemory (recurring)
3. VIRAL (2+ YouTuber): nano-banana-2 (Chase AI only, 1 YouTuber)
4. ANTHROPIC OFFICIAL: fable5 ban Day 10, Claude Design update, Claude Code v2.1.185
5. GENERAL: agentjacking, VoltAgent, Kobiton, ARIS

Final order: fable5 > agentjacking > claude-design-sync > aris > canopy > nano-banana-2 > voltagent > kobiton > claude-code-v2-1 > agentmemory > antigravity
