# Research Notes — 2026-06-12

Research window: ~12 min (735s elapsed at note-write time, hard cap 1200s)

## YouTube Coverage

### Charlie Automates (@charlieautomates, 8k subs)
- "Your Claude Code Carousels Suck (Here's The Fix)" — posted ~June 5. Covers open-carrusel + instagram-carousel-skill (both already in June digests).
- "GSD + Claude Code = Meta Destroying UI Builder" — older
- "Everyone Uses GSD. Smart Devs Use PAUL." — older
- "This Plugin Cut My Claude Tokens in Half" — Feb 11, covers Graphify/CARL (old)
- **Verdict**: No new tool signal this week beyond already-featured items.

### Chase AI (@Chase-H-AI, 109k subs)
- "Your Claude Code Carousels Suck (Here's The Fix)" — same video as Charlie, covered open-carrusel (already in June digests)
- No new videos found from June 10-12 window.

### IndyDevDan (@indydevdan, 129k subs)
- Covered "Anthropic Just Put Claude Code Agents on a Meter" (June 9 billing change) — already in June 9 digest with creator_buzz.
- Latest GitHub activity: claude-code-hooks-multi-agent-observability (already featured June 9 digest)
- **Verdict**: No new tool signal this week.

### Simon Scrapes (@simonscrapes, 71.8k subs)
- "June 15th: Claude Subscriptions Change" (June 8, 4 days ago) — covers billing change, already in digests
- "Claude Fable 5 JUST Dropped - FREE Until June 22" — already featured
- **Verdict**: No new tool signal this week.

### TechWithTim (@TechWithTim, 2M subs)
- No Claude Code videos found from the past 7 days.

### Developers Digest (@DevelopersDigest, 61.5k subs)
- "Fable 5 Leaves Your Claude Plan on June 22" — billing/model coverage (already in digests)
- "AI Coding Tools Pricing: The June 2026 Reality Check" — pricing overview
- **Verdict**: No new tool signal this week.

### UI Collective (@UICollectiveDesign, 52.5k subs) + Adrien AI Designer (@adrienaidesigner)
- No new Claude Code videos found from June 10-12 window.

---

## High-Signal Items Found

### Anthropic Official (past 72h)

1. **"Secret Sabotage" Walkback (June 10-11)** — Fable 5 system card revealed covert capability degradation for frontier AI researchers; Anthropic reversed after community backlash. Fortune June 10, Simon Willison June 11. Very viral.

2. **Claude Managed Agents: Cron Schedules + Credential Vaults (June 9-10)** — Agents can run on cron schedules on Claude's cloud infra; API key vaults with domain-scoped secrets (agent never sees real key). Public beta.

3. **Claude Code v2.1.174 + v2.1.175 (June 12, today)** — Both released today.
   - v2.1.174: VSCode usage attribution (/usage shows per-skill/agent/MCP/plugin cost breakdowns over 24h/7d); /model picker fixes.
   - v2.1.175: enforceAvailableModels managed setting — enterprise model governance that prevents users from widening an admin-set model allowlist.

4. **Connector Observability (June 8)** — Dashboard for MCP connector developers: adoption, active users, errors, latency, per-product breakdown. Admin/Owner only on Team/Enterprise.

5. **Anthropic June 15 Credit Pool (recurring)** — 3 days away. Already in June 9 digest.

### Security

6. **Mitiga Labs: MCP OAuth Token Hijack (Security Boulevard June 10)** — Security Boulevard published fresh "agent containment" framing of Mitiga's May 8 research. 5-step attack: malicious npm package → postinstall hook modifies ~/.claude.json → redirects MCP traffic → steals OAuth tokens (Jira, GitHub, Confluence). Anthropic said out of scope. No patch planned.

### Community Tools

7. **Statewright** — Visual state machines for AI agents as MCP gateway. Show HN. Per-state tool restrictions for Claude Code. SWE-bench test: 2/10 → 10/10 with Statewright constraints. Apache 2.0 engine + FSL cloud.

8. **cavekit (JuliusBrussee)** — 1k stars. Spec-driven development with caveman encoding (~75% fewer tokens). /ck:spec, /ck:build, /ck:check. v4 rewrite on main. From the creator of the caveman skill (51k+ stars). Not in any digest (distinct from caveman).

9. **Nylas CLI / Email MCP** — Official multi-provider email MCP: Gmail, Outlook, Exchange, Yahoo, iCloud, IMAP. 16 tools. Confirmation hash before sending. `nylas mcp install`. Not in any digest or submissions.

### Other Signals
- claude-code at 131K GitHub stars
- rohitg00/awesome-claude-code-toolkit — already in June 9 digest
- Dynamic workflows — already in multiple digests (announced June 2)
- "Great Productivity Panic" Bloomberg — old (February 26, 2026)
- Karpathy CLAUDE.md — recurring, in many digests
- Caveman skill — in multiple digests, fading

---

## Summary

Top stories today: Fable 5 "secret sabotage" reversal (viral, new angle), Managed Agents cron+vaults, v2.1.174-175 (VSCode cost attribution), Connector Observability, MCP OAuth hijack (no patch). June 15 billing imminent.
