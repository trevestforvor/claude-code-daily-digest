# Research Notes — 2026-05-27

## Timing
- Research start: ~15:27 UTC
- Elapsed at completion: ~926 seconds (~15 min)
- Hard cap: 1200 seconds

---

## YouTube Coverage (Past 7 Days)

| Creator | Channel | Recent Activity (72h window: May 24–27) |
|---|---|---|
| **@UICollectiveDesign** | UI Collective (52.5k subs) | "Claude Code for Designers: All the Ways to Use It" — posted **May 26**. Covers Figma MCP write-to-canvas, Claude Design Voice/Video/3D/Shaders, design skills. **Strong signal — within 72h.** |
| **@simonscrapes** | Simon Scrapes (71.8k subs) | "Claude Code has a new UI (pair it with Claude OS)" (~2 weeks ago = ~May 13), outside 72h window. No new video identified within past 72h. |
| **@Chase-H-AI** | Chase AI (109k subs) | "Top 10 des Skills, plugins sur Claude Code (mai 2026)" (YouTube v=YcX4VcGBIiU) — date unclear, possibly this week. YouTube blocked direct fetch; specific tools not extracted. "Comment Créer Sans Limite avec l'IA" from ~1 week ago. |
| **@charlieautomates** | Charlie Automates (8k subs) | Site active at charlieautomates.com with Agentic OS workshop. Mentioned CC Switch and GSD2 in context. No verified video within 72h. |
| **@indydevdan** | IndyDevDan (129k subs) | No specific video from past 7 days identified. Channel has "Claude Code Deep Mastery" playlist as ongoing content. |
| **@TechWithTim** | Tech With Tim (2M subs) | No specific video from past 7 days identified. |
| **@DevelopersDigest** | Developers Digest (61.5k subs) | Blog post "Best Claude Code Skills in 2026" at developersdigest.tech — no specific new tools from past 72h. |
| **@adrienaidesigner** | Adrien AI Designer (4k subs) | No recent content found within 72h. |

**Viral overlap:** Only UI Collective had verifiable content within 72h. No multi-YouTuber convergence on a single tool this week.

---

## Key Candidates Researched

### Confirmed Fresh (Not in May 20–26 Digests)

1. **Anthropic security-guidance plugin** (May 27, TODAY)
   - Source: SecurityWeek, helpnetsecurity, cybersecuritynews, multiple outlets
   - 3-level hooks (file edit, model turn, commit); 25 dangerous patterns; 30–40% reduction in PR security issues
   - Free for all plans; works via `/plugin install security-guidance@claude-plugins-official`

2. **Claude Code v2.1.152** (May 27, TODAY)
   - Source: code.claude.com/docs/en/changelog (fetched directly)
   - Key: `/code-review --fix`, `disallowed-tools` in skill frontmatter, `/reload-skills`, `MessageDisplay` hook, `SessionStart` title, `--fallback-model`, auto mode no consent, vim `/` history

3. **forrestchang/andrej-karpathy-skills** (157k stars)
   - Source: GitHub fetch, multiple web articles
   - Single CLAUDE.md; 4 behavioral constraints; #1 GitHub weekly trending for 28 days
   - Amplified by Karpathy joining Anthropic May 19

4. **Karpathy joins Anthropic** (May 19)
   - Source: TechCrunch, Axios, CNBC, VentureBeat
   - Pre-training team; will use Claude to accelerate pretraining research
   - Not found in any May 20–26 digest

5. **rebelytics/one-skill-to-rule-them-all** (Task-Observer, ~500 stars)
   - Source: aiweekly.co alert, claudskills.com, multiple GitHub issues
   - Viral r/ClaudeAI thread this week; self-improving meta-skill

6. **DeusData/codebase-memory-mcp** (2.7k stars)
   - Source: GitHub fetch, russ.cloud blog (May 10), pulsemcp.com
   - 99% token reduction; 155 languages; zero deps; auto-configures 11 agents
   - Not found in any May 20–26 digest

7. **mobile-next/mobile-mcp** (5k stars)
   - Source: GitHub search, best-of-mcp-servers leaderboard
   - iOS/Android automation via MCP; updated May 17 2026
   - Not found in any May 20–26 digest

8. **UI Collective "Claude Code for Designers"** (May 26)
   - Source: YouTube search result
   - 52.5k-subscriber design-systems channel; posted yesterday

9. **uditgoenka/autoresearch** (4.7k stars, v2.1.2 May 23)
   - Source: GitHub fetch
   - Karpathy-inspired autonomous iteration; any verifiable metric
   - Not found in any May 20–26 digest

10. **ComposioHQ/awesome-claude-skills** (62.1k stars)
    - Source: GitHub fetch
    - 1,000+ skills; 78 SaaS integrations; cross-platform; progressive loading
    - Not found in any May 20–26 digest

---

## Excluded Items (Reasons)

| Item | Reason |
|---|---|
| kobiton-automate-plugin | In May 20 digest |
| claude-forge v3.0.2 | In May 20 digest |
| levnikolaevich/claude-code-skills | In May 20 digest |
| tonsofskills-ccpi | In May 20 digest |
| superpowers (obra) | In May 23 digest |
| lean-ctx | In May 23 digest |
| awesome-claude-code-toolkit (rohitg00) | In May 23 digest |
| everything-claude-code (affaan-m) | In May 20 digest |
| opencode v1.15.5 | In May 20 digest |
| self-hosted-sandboxes + MCP tunnels | In May 20 digest |
| mattpocock/skills | In May 24 digest |
| caveman/cavekit/cavemem | In May 24 digest |
| glasswing-initial-update | In May 24 digest |
| claude-squad | In May 26 digest |
| chrome-devtools-mcp | In May 26 digest |
| claude-seo / claude-ads | In May 24 digest |
| gsd-build/gsd-2 | Only 7.7k stars, project migrated to open-gsd/gsd-pi, confusing status |
| DatasetteAgent (simonw) | Only 11 stars, too early (v0.1a4) |
| 0xmariowu/Autosearch | Only 22 stars |
| ithiria894/awesome-claude-code-workflows | Only 101 stars |
| figma MCP write-to-canvas | Feb 2026 announcement, likely in older digests |
| steipete/claude-code-mcp | Archived May 15 2026, 1.3k stars |
| Claude Design (Anthropic Labs) | Launched April 17 2026, likely in older digests |
| finance agents | May 5 announcement, too old for 72h window |
| andrej Karpathy CNBC/VentureBeat coverage | Merged into karpathy-joins-anthropic item |

---

## Signal Summary

- **Strongest today**: security-guidance plugin + v2.1.152 (both May 27 official)
- **Biggest community signal**: andrej-karpathy-skills (157k stars, #1 trending) + task-observer (viral r/ClaudeAI)
- **Best cost/token item**: codebase-memory-mcp (99% reduction)
- **Best design item**: UI Collective video (May 26, 52.5k subs)
- **Best MCP item**: mobile-mcp (5k stars, iOS/Android)
