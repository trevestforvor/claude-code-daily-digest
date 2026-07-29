# Research Notes — 2026-07-29

## Timer
- Start: ~1785341233 (~315s elapsed at checkpoint)

## YouTube Coverage

### @Chase-H-AI (109K subs)
- **"This Skill Turns Fable 5 & GPT 5.6 Into Web Design MONSTERS"** (https://youtube.com/watch?v=KBH8P0z2AL8) — YouTube 403'd, couldn't extract specific skill/repo. Description mentions Higgsfield MCP + Skool community. No single verifiable item to feature.
- **"3 Ways To Fix Claude Code's #1 Web Design Problem"** — about 1 week ago (July 22). General web design workflow, no specific repo surfaced.
- No new unique items from Chase AI this window.

### @charlieautomates (8K subs)
- Blog post: "Understand Anything: The Claude Code Plugin That Maps Any Codebase (Even If You Can't Code)" — covers Egonex-AI/Understand-Anything, already in digest since July 27.
- No new items surfaced in the past 72h.

### @indydevdan (129K subs)
- Most recent videos are from early July (setup tutorials, beginner guides). No new dedicated tool/plugin video found in past 72h.

### @simonscrapes (71.8K subs)
- No specific new video found in past 72h focused on a specific tool.

### @UICollectiveDesign (52.5K subs)
- No specific new video found in past 72h.

### @DevelopersDigest (61.5K subs)
- Published "Codex and Claude Code in July 2026: Agent Controls Are the Feature" — covers agent controls broadly. No specific repo to feature.

### @TechWithTim (2M subs)
- No specific new video found in past 72h.

**YouTuber viral signal for this run:** No single item covered by 2+ YouTubers. Hallmark still has @Chase-H-AI credit from July 25 (within 7 days). Understand-Anything still has @charlieautomates credit.

---

## GitHub Trending (July 29, 2026)

### New Items Found

1. **headroomlabs-ai/headroom** — 63.1K stars — trending today
   - Compresses tool outputs, logs, RAG chunks before they reach LLM
   - 92% savings on code search (17,765 → 1,408 tokens), 92% on SRE debugging
   - MCP server + Python library + proxy + `headroom wrap claude` CLI
   - Install: `pip install "headroom-ai[all]"` then `headroom wrap claude`
   - **INCLUDE**

2. **Panniantong/Agent-Reach** — 62.3K stars — updated July 28
   - Gives any AI agent read/search access to 13 platforms: Twitter/X, Reddit, YouTube, GitHub, Bilibili, XiaoHongShu, Facebook, Instagram, LinkedIn, RSS, general web
   - Zero API fees; free open-source backends (bird CLI, yt-dlp, Jina Reader, Exa)
   - Install: `npx skills add Panniantong/Agent-Reach@agent-reach`
   - **INCLUDE**

3. **sickn33/agentic-awesome-skills (AAS Core)** — 44.1K stars — trending today
   - 1,993+ skills across dev, testing, security, infrastructure, product, marketing
   - Agent-first: Claude inspects project → searches local catalog → selects skill IDs → AAS validates via local MCP
   - `aas-stack.json` manifest locks selections; max 128 skills
   - v15.6.0; agent-first-preview
   - Install: `npx agentic-awesome-skills`
   - **INCLUDE**

4. **ypollak2/llm-router** — 60 stars — too low, skip

---

## Official Anthropic / MCP News

1. **MCP 2026-07-28 Spec** — announced July 28, 2026
   - Primary URL: https://modelcontextprotocol.io/specification/2026-07-28
   - Blog: https://blog.modelcontextprotocol.io/posts/2026-07-28/
   - Key changes:
     - **Stateless core**: no session handshake, no Mcp-Session-Id; every request self-describing via _meta headers; serverless/edge deployable
     - **Multi Round-Trip Requests**: stateless core with multiple round trips
     - **Header-based routing** and cacheable list results
     - **Authorization hardening**: OAuth 2.0 + OIDC alignment (Entra, Okta)
     - **Extensions framework**: MCP Apps (server-rendered UI), Tasks (async/long-running ops), Enterprise Managed Auth (IdP-based)
     - **MCP Tunnels** (research preview): connect to private-network MCP servers with no inbound firewall rules, no public endpoints
   - Beta SDKs: Python, TypeScript, Go, C# now live
   - 400M monthly SDK downloads (4× increase this year)
   - **INCLUDE**

2. **Claude Code changelog** (July 24-29):
   - v2.1.220 (July 25): bug fixes only — not feature-worthy
   - v2.1.219 (July 24): Opus 5, depth-3 subagents, DirectoryAdded hook — covered yesterday as Opus 5 item

---

## Reddit / HN Signals
- r/ClaudeCode: Post about "a skill that saves Claude usage for thinking (judge) and hands grunt-work to cheaper/free LLM models" — matches llm-council-skill pattern (gcpdev/llm-council-skill), low stars, skip
- r/ClaudeAI: "well-received Reddit post praising a Claude skill that condensed 8 years of product design experience" — couldn't find specific repo; likely existing design skill
- HN: No specific high-traction claude code posts found in past 72h

---

## Recurring Items Status (July 29)

| Slug | Day | Stars | Keep? |
|------|-----|-------|-------|
| graphify | 7 | ~97.5K | Yes |
| andrej-karpathy-skills | 12 | 194K+ | Yes |
| caveman | 6 | ~93.7K | Yes |
| ecc | 6 | ~234.5K | Yes |
| claude-opus-5 | 5 | — | Yes |
| hallmark | 2 | ~19.2K | Yes |
| claude-video | 2 | ~11.8K | Yes |
| understand-anything | 3 | ~74.7K | Yes |
| superpowers | 4 | 941K installs | Yes |
| ralph-wiggum | 5 | 139K | Yes |
| book-to-skill | 2 | ~11K | Yes |
| snip | — | — | Drop (make room) |
| paul-seed-framework | — | — | Drop (make room) |
| chrome-devtools-mcp | — | — | Drop (make room) |
| anthropic-economic-index-connector | — | — | Drop (make room) |

---

## Items Skipped (low signal or already in submissions.json)
- llm-router: 60 stars, not ready
- llm-council-skill: not enough signal
- doc-to-skill / other small repos: couldn't verify
