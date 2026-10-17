# Research Notes — 2026-10-17

**Timer:** ~700s used of 1200s cap.

---

## YouTube Coverage

| Creator | Subscribers | Recent Claude Code Activity |
|---------|------------|----------------------------|
| @charlieautomates | 8K | Covered `charlie947/motion-graphics-skills` in "Best Skills Install Order" guide; older coverage of Understand Anything and SEED+PAUL workflow (no new video confirmed this week) |
| @Chase-H-AI | 176K | "How to Build an Agentic OS" (Sep 25), "The Agentic OS Setup That Will 10x Claude Code" (transcript found but no Oct date confirmed) |
| @simonscrapes | 71.8K | "Claude Code Skills Are Broken – Beginner to Pro" surfaced on Skool but no Oct date confirmed |
| @indydevdan | 129K | No confirmed Oct 2026 video |
| @DevelopersDigest | 61.5K | Published full Claude Code Mods guide at developersdigest.tech; active Mods coverage this month |
| @UICollectiveDesign | 52.5K | No confirmed Oct 2026 video |
| @adrienaidesigner | 4K | No confirmed Oct 2026 video |
| @TechWithTim | 2M | No confirmed Oct 2026 specific video |

**Key creator signal:** @charlieautomates explicitly mentioned `charlie947/motion-graphics-skills` in install-order guide. @DevelopersDigest covered Claude Code Mods extensively. Neither gave boost to the same item in this window so no "2+ YouTuber" viral multiplier triggered.

---

## Sources Checked

- **Anthropic official changelog** (`code.claude.com/docs/en/changelog`) — fetched directly ✅
- **GitHub topics/claude-skills** — fetched directly, 20 repos with live star counts ✅
- **GitHub repos fetched:** `paperclipai/paperclip`, `NevaMind-AI/memU`, `latent-spaces/brag` ✅
- **Havoptic / Releasebot** — October 2026 Claude Code release tracker
- **charlieautomates.com** — blog posts and free resources
- **Web searches:** YouTube channels, Reddit (no results Oct 14-17), HN, Product Hunt (no fresh results)
- **Skipped:** TikTok, Facebook, X/Twitter

---

## Key Findings

### Official Anthropic releases (Oct 14-16)
- **v2.1.299 (Oct 14):** Idle compaction for 200K+ token convos after ~54 idle minutes; `/usage` warnings; MCP allow-rule scoping fix.
- **v2.1.300 (Oct 14):** `prompt.change` mod hook; `/advisor` on AWS Claude Platform; Slack Connect in Claude Tag; cache_creation OTel metrics.
- **v2.1.301 (Oct 15):** `CLAUDE_CODE_RETRY_WATCHDOG_MAX_USAGE_LIMIT_WAIT_MS`; LaTeX math rendering in VS Code; `%` vim motion; OTel `classifier_verdict`.
- **v2.1.302 (Oct 16):** `CLAUDE_AUTO_MODE_MODEL` env var to pin specific model for client-side auto mode classifier (cost lever!); idle compaction in `/config`; **sunset notice: standalone Claude Design closes December 14, 2026**; fork subagents on by default outside terminal; 43 bug fixes.

### Community tools (past 72h or still active)
- **OneWave-AI/claude-code-mods** (Oct 2): 10 MIT mods, 155 tests. launch-codes, token-ledger, session-wrapped.
- **charlie947/motion-graphics-skills**: 13 skills for in-code motion graphics (no After Effects). Covered by @charlieautomates.
- **paperclipai/paperclip** (103.5K stars, updated Oct 17): Multi-agent orchestration. Last in Oct 12 digest.
- **ayghri/i-have-adhd** (57.5K stars, updated Oct 11): ADHD output style. Last in Oct 13 digest.
- **latent-spaces/brag** (16.4K stars): `/brag` turns a project into a launch video. Last in Oct 11 digest.
- **NevaMind-AI/memU** (14.6K stars, updated Oct 17): Cross-session wiki memory. Last in Oct 3 digest.
- **K-Dense-AI/scientific-agent-skills** (52.1K stars, updated Oct 15): 177+ scientific skills. Last in Oct 11 digest.

---

## Dedup Decisions

| Candidate | Decision | Reason |
|-----------|----------|--------|
| taste-skill | SKIP | In submissions.json |
| addyosmani-agent-skills | SKIP | Oct 13 digest, not clearly trending |
| nextlevelbuilder-ui-ux-pro-max | SKIP | Fading — last Oct 6, dropped after 10-day run |
| egonex-ai-understand-anything | SKIP | Fading — last Oct 11, long history |
| anthropic-claude-mods (v2.1.287) | SKIP | Covered in Oct 2 digest |
| claude-code-hooks-onfailure (v2.1.295) | SKIP | Covered in Oct 9 digest |
| anthropic-claude-code-v2-1-296 pricing | SKIP | Covered in Oct 10 digest |
| coreyhaines31-marketingskills | SKIP | Last Oct 11, not enough new detail to describe it well |
| titanwings-distilly | SKIP | Last Oct 11, not enough detail found |
| ayghri-i-have-adhd | INCLUDE (recurring) | 57.5K stars, still growing ~5K since Oct 13 |
| paperclipai-paperclip | INCLUDE (recurring) | Active push Oct 17, 103.5K stars |
| latent-spaces-brag | INCLUDE (recurring) | 6 days, launched hosted option |
| nevamind-ai-memu | INCLUDE (recurring) | 14-day gap, active Oct 17 |
| k-dense-ai-scientific-agent-skills | INCLUDE (recurring) | Updated Oct 15, possible star jump |

---

## Final Ranked List

1. anthropic-claude-code-v2-1-302 — COST (auto mode model pin) + DESIGN sunset announcement
2. onewave-ai-claude-code-mods — COST + PLUGIN (community mods)
3. charlie947-motion-graphics-skills — DESIGN (@charlieautomates)
4. paperclipai-paperclip — PLUGIN (103.5K, multi-agent, updated today)
5. ayghri-i-have-adhd — DESIGN (57.5K, recurring +5K)
6. latent-spaces-brag — DESIGN (launch video generator)
7. nevamind-ai-memu — general (wiki memory, updated today)
8. k-dense-ai-scientific-agent-skills — general (52.1K, updated Oct 15)
