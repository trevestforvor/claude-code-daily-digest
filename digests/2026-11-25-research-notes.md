# Research Notes — 2026-11-25

## Research window: past 72h (Nov 22–25, 2026)
## Elapsed research time: ~6 min (well under 20-min cap)

---

## YouTube Coverage

### Channels checked (by subscriber count, top 5):
1. **@TechWithTim** (2M subs) — No November 2026 Claude Code content found in search results.
2. **@indydevdan** (129K subs) — No November 2026 content indexed. Last confirmed: Feb 9, 2026 on Claude Code Multi-Agent Orchestration with Opus 4.6 and Tmux.
3. **@Chase-H-AI** (109K subs) — No November 2026 video found. Last confirmed: May 2026 roundup of 10 new open-source Claude Code tools. Blog active at chaseai.io.
4. **@simonscrapes** (71.8K subs) — No November 2026 content. Last confirmed: June 3, 2026 "Team Agentic OS Architecture."
5. **@DevelopersDigest** (61.5K subs) — No November 2026 content found.

**Other channels (skipped this run):**
- **@UICollectiveDesign** — No November 2026 content found (last confirmed: March 3, 2026 claude design workflow).
- **@charlieautomates** — Channel handle not resolving to clear YouTube results; linked to Skool community instead.
- **@adrienaidesigner** — Not checked (time constraint).

**Conclusion:** No YouTuber from sources/youtubers.json covered items in the past 7 days with verifiable November 2026 dates. No `creator_buzz` signals this run.

---

## Official Anthropic / Changelog

### v2.1.332 (November 25, 2026) — TODAY — HIGHEST SIGNAL
- **Skills from MCP servers (beta)** — appear in `/` menu as `server:skill`. Other skills keep names.
- `PreSkillShellCommand` hook event — can refuse a skill or command's inline shell commands.
- `sonnet` on GCP Agent Platform + Microsoft Foundry → Sonnet 5.5; `opus` → Opus 5.5; Foundry default = Sonnet 5.5.
- macOS: `computer-use` is now a reserved skill name.
- Desktop Code tab sessions default to `claude-code-desktop` OTEL service name.
- `CLAUDE_CODE_OAUTH_TOKEN` now accepts `oat02-` prefix (update proxy rules/log scrubbers).
- **Source:** https://code.claude.com/docs/en/changelog

### v2.1.331 (November 23, 2026) — ALREADY IN NOV 24 DIGEST
- Code Mode in terminal sessions on Bedrock/GCP/Foundry.
- `optionalDependencies` in plugin manifests.
- `CLAUDE_CODE_DISABLE_RESPONSE_COMPRESSION` env var.
- Plugin marketplaces auto-update by default after Nov 30.

### v2.1.330 (November 20, 2026) — NOT YET IN ANY DIGEST
- **`easel`** — built-in mod that draws charts, on Pro/Max/(Team/Enterprise where available), macOS + Linux. Toggle in `/config`.
- Enterprise sign-in via Anthropic Enterprise Admin Console.
- **Scheduled tasks and `/loop` now run up to 30 days** (was 7).
- More `rm` commands aimed at root/home ask for approval.

### v2.1.329 / v2.1.328 (November 19, 2026)
- `/tasks` now lists scheduled tasks, `/loop` wakeups, goal, and forks.
- Code Mode works with OpenTelemetry.
- Auto mode for Opus 4.6 and Sonnet 4.6 on Bedrock/GCP/Foundry/Claude gateway.
- `"onFailure": "block"` for `mcp_tool` hooks.

---

## GitHub / Community Tools

### High Signal — COST / TOKEN SAVINGS
- **BeagleLathe/lathe** — Local MCP server bundling multi-step file ops into single calls. ~46% fewer tool calls, ~10% cheaper, ~29% faster (self-reported, 9 fixtures). PyPI: `uv tool install beaglelathe`. GitHub: https://github.com/BeagleLathe/lathe. Product Hunt launch (undated but recent).
- **JuliusBrussee/caveman** — Skill that makes Claude use terse caveman-speak prose while keeping code/commands intact. ~65% output token reduction (self-reported benchmark). MIT. Install: `claude plugin install caveman@caveman`. GitHub: https://github.com/JuliusBrussee/caveman. Trending on GitHub (Telegram channel tracker).
- **CocoIndex-Code (cocoindex-io/cocoindex-code)** — AST-aware semantic search MCP. Parses via Tree-sitter, embeds incrementally, serves via CLI or MCP. Apache 2.0. Install: `claude mcp add cocoindex-code -- ccc mcp`. PyPI v0.2.22 latest. URL: https://www.cocoindex.io/cocoindex-code. Product Hunt listing (this week).
- **TraxAgent** — AI spend intelligence platform. Read-only MCP server for checking Claude Code/Codex/Cursor spend per developer + team alerts. Free up to $100/month spend. URL: https://www.producthunt.com/p/traxagent. Install: See README (MCP server config).

### High Signal — DESIGN / UI
- **easel** — Built-in mod (see v2.1.330 above). No external repo — Anthropic built-in.

### High Signal — MCP / SKILLS ECOSYSTEM
- **skillsovermcp.com** — Hosted service (free, open source) that turns any public GitHub repo of SKILL.md files into a remote MCP endpoint, compatible with Claude Code, Cursor, and Codex. Site metadata dated 2026-11-21. URL: https://www.skillsovermcp.com/. Repo: https://github.com/skills-mcp/skills-mcp.
- **sambhav/mcp-demo** — Python MCP server implementing Agent Skills over MCP with per-client negotiation (SEP-2640). Skills served via `resources` tier; Claude Code 2.1.332+ loads them natively. GitHub: https://github.com/sambhav/mcp-demo.
- **davila7/claude-code-templates** — PR #1701 adds Skills over MCP component, targeting Claude Code 2.1.331+. GitHub: https://github.com/davila7/claude-code-templates.

### High Signal — WORKFLOW / INTEGRATIONS
- **czlonkowski/n8n-skills** — 14 Claude Code skills for building n8n workflows (+ hooks layer, router skill). 6.1k-6.5k GitHub stars, 1k forks. Requires n8n-mcp MCP server. GitHub: https://github.com/czlonkowski/n8n-skills. Install: `claude plugin install n8n-skills@czlonkowski`.
- **trailofbits/skills** — 60+ security-focused agent skills served as an MCP server (via skillsovermcp.com and self-hosted). 6.8k-8k GitHub stars. GitHub: https://github.com/trailofbits/skills. Install: `claude skill install trailofbits/skills`.

### Official Plugins
- **Apple Xcode plugin** — Added to `anthropics/claude-plugins-official` on November 6, 2026 (author: Apple Inc.). Plugin runs `xcrun agent plugin path --plugin-format claude`; skills generated locally by Xcode. Install: `claude plugin install xcode@claude-plugins-official` (after adding marketplace). URL: https://claudemarketplaces.com/plugins/anthropics-claude-plugins-official/xcode.
- **champion-kit** — Anthropic official Champions productivity plugin. Helps Champions run hackathons and office hours, find patterns, write AI maturity reports. 7 skills + 1 agent. Install: `claude plugin install champion-kit@claude-plugins-official`. URL: https://claudemarketplaces.com/plugins/anthropics-claude-plugins-official/champion-kit.

### Other
- **Mantrana** — MCP server: 4 specialist AI "jurors" review a brief and produce a phased technical spec. URL: https://mantrana.co/mcp. Product Hunt: https://www.producthunt.com/p/mantrana. No GitHub repo confirmed.

---

## HN / Blogs
- HN Algolia not reachable (blocked by network policy in this cloud session).
- Simon Willison's tags feed shows Claude Code content last through November 3, 2026 (nothing newer indexed).
- ThezVI Substack: "Claude Code #4: From the Before Times" is recent but not dated within 72h.

---

## Product Hunt (Past 72h)
- CocoIndex-Code — "Launched this week" per PH listing.
- BeagleLathe — On Product Hunt (undated).
- Mantrana — On Product Hunt.
- TraxAgent — On Product Hunt (peerlist.io listing corroborates).

---

## Dedup Check (not to repeat from recent digests)
Skipped: emilkowalski-skills, claude-code-v2-1-331, mattpocock-skills, blader-humanizer, opus-4-8-fast-mode-eol, unity-claude-code-plugin, jakeschincariol-youtube-agent-skill, sergebulaev-youtube-skills (Nov 24), and all 15 items from Nov 23 and Nov 22 digests.

v2.1.332 (today), v2.1.330 (easel), and all other items above are CLEAR of recent digests.
