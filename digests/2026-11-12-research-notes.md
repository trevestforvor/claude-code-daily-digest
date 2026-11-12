# Research Notes — 2026-11-12

## Sources Checked

- GitHub trending tracker (linny006/trending-claude-skills) — snapshot ~Nov 2 (most recent available)
- Soum-Code/master-skill-hub weekly skill report (issue #4, covers ~Nov 9 period)
- Web search for GitHub topics: claude-code, claude-skill, mcp-server, anthropic
- Reddit r/ClaudeAI, r/ClaudeCode: no specific Nov 2026 hot posts indexed
- HN Algolia: not accessible from cloud session network
- Anthropic news: web search confirmed Fable 5.2 / Mythos 5.2 (Nov 9) and Personal Finance (Nov 5)
- simonwillison.net: most recent Claude Code post indexed ~Oct 16 2026, nothing from Nov
- Product Hunt: not accessible from cloud session network
- skillselion.com: not accessible from cloud session network

## YouTube Coverage (Nov 2026)

**TechWithTim** (2M subs): Most recent indexed Claude Code content is "Full Tutorial for Beginners" (Feb 2026). No Nov 2026 content found. Skipped this run.

**IndyDevDan** (129K subs): Most recent indexed content Feb 9, 2026 ("Claude Code Multi-Agent Orchestration"). No Nov 2026 content found. Skipped this run.

**Chase AI** (109K subs): Most recent indexed content Aug 2026. No Nov 2026 content found. Skipped this run.

**Simon Scrapes** (71.8K subs): Most recent indexed content June 2026 ("Team Agentic OS Architecture"). No Nov 2026 content found. Skipped this run.

**Developers Digest** (61.5K subs): No Claude Code content from Nov 2026 found. Skipped this run.

**Charlie Automates** (8K subs): youtube.com not accessible from cloud session. No indexed Nov 2026 content found on third-party sites. Skipped this run.

**Adrien AI Designer** (4K subs): Not searched (small channel, low priority). Skipped this run.

**UI Collective** (52.5K subs): Not searched. Skipped this run.

**Conclusion**: No YouTubers from curated list confirmed Claude Code content in past 7 days. No creator_buzz fields populated. No viral boost applied.

## Candidate Items Identified

### High Priority
1. **mksglu/claude-context-mode** — 34k stars. MCP plugin keeps tool output out of context window; routes large reads/fetches/shell to local SQLite FTS5 index. Median 99.4% byte reduction. Install: `claude plugin marketplace add mksglu/context-mode`. HN front-page hit (538 points, 101 comments).
2. **Anthropic Fable 5.2 / Mythos 5.2** — Released Nov 9. Same underlying model, two tiers (Fable: GA, Mythos: vetted-only). 30% faster than 5.1, $8/$40 per million tokens. #1 on Artificial Analysis Intelligence Index v5. FrontierCode 2.0: 49.1% at Xhigh. Mythos 5.2: 89.6% on CVE Rediscovery eval.
3. **Anthropic Personal Finance in Claude** — Launched Nov 5. Read-only bank/card account access via Plaid. US paid users (Pro, Max, Ultra). Conversations not used for training.
4. **michael-denyer/pstack-claude** — 3733 stars (Nov 2 snapshot). Port of Lauren Tan's Cursor pstack to Claude Code + Codex, Pi, Copilot, Muse, Antigravity. Auto-routes via SessionStart hook. Install: `/plugin marketplace add michael-denyer/pstack-claude`.
5. **reticlehq/reticle** — 1.3k stars. Agents verify their own code by driving the running app; returns pass/fail/cannot-tell per check with file:line evidence. `npx @reticlehq/server`. Show HN on HN.

### Medium Priority
6. **affaan-m/ECC** — 285k stars. Everything Claude Code — the big skills OS. 50 skills newly passing vetting this week (commit d2ef2680). `/plugin marketplace add https://github.com/affaan-m/ECC`.
7. **QingYunA/answer-me-with-html** — 6.3k stars. Claude Code skill; agent writes Markdown, CLI builds single-page HTML with diagrams/tables/code. Model writes ~1/8 the tokens of raw HTML.
8. **Natively-AI-assistant/natively-cluely-ai-assistant** — 3.3k stars. Desktop AI meeting assistant; has own SKILL.md slash commands, CLAUDE.md, .mcp.json, tagged claude-code and claude-skills. Source-available, free for personal use.
9. **DUNHKpcc/Claude-Guardian** — 2k stars. All-in-one Claude account safety and risk prevention skill. Needs Python 3.10+, works with Claude Code and Codex.
10. **JasonColapietro/suede-creator-skills** — 124 stars. SEO/marketing/code-review skills + stdio MCP server + PyPI package. Suede Awesome Everything directory scores skills 0–99. Install: `/plugin marketplace add JasonColapietro/suede-creator-skills`.

### Lower Priority
11. **the911fund/skill-of-skills** — 84 stars. Quality-ranked discovery engine for skills/plugins/MCPs. MIT. site: skills.911fund.io.
12. **getaero-io/gtm-eng-skills** — 75 stars. 10 GTM skills (email enrichment, TAM building, signal discovery, etc.) running on Deepline CLI with 28+ data providers. `npx skills add getaero-io/gtm-eng-skills --all`.
13. **joshLong145/ambits** — 17 stars. Visualizes and reports code coverage within LLM coding sessions (Rust).
14. **eric861129/workflow-skill-router** — 17 stars. Routes Claude Code + Codex work through one skill per phase.

## Dedup Check (skipped items)
Already in recent digests (Nov 7–10):
- pbakaus/impeccable, blader/humanizer, anthropics/claude-plugins-official, anthropics/skills, garrytan/gbrain, homeassistant-ai/ha-mcp, claude-code v2.1.319, microsoft/skills, anthropics/claude-quickstarts, k-dense-ai/scientific-agent-skills, morluto/rea, obra/superpowers, DietrichGebert/ponytail, thedotmack/claude-mem, mattpocock/skills, cathrynlavery/diagram-design, google-gemini/gemini-skills, vercel-labs/agent-browser, cloudflare-security-audit-skill, siteboon/claudecodeui, appwrite/claude-plugin, egonex-ai/Understand-Anything, code-yeongyu/oh-my-openagent, leonxlnx/taste-skill, tt-a1i/archify, meta/astryx

In submissions.json (skipped):
- taste-skill, impeccable (already there)
