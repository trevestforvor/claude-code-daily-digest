# April 2026 Catchup — Research Notes

Date compiled: 2026-04-20
Window: 2026-04-01 → 2026-04-20 (partial month; Apr is in-progress)

## Method

- Primary: GitHub MCP topic searches (claude-code, claude-skill, agent-skills,
  mcp-server, claude-plugin, anthropic) for creation window 2026-04-01..2026-04-20,
  sorted by stars. Star counts captured 2026-04-20.
- Secondary: WebSearch over Anthropic news, releasebot, simonwillison.net,
  TechCrunch/VentureBeat, medium.com, YouTube, Product Hunt, DEV.to.
- Note: WebFetch to reddit/hn.algolia/latent.space often 403s in env, so
  Reddit/HN signal pulled from WebSearch result summaries.

## Macro trends in April 2026 (partial month)

1. **Caveman mode went nuclear** — JuliusBrussee/caveman (created 2026-04-04)
   hit ~39.9k ★ in 16 days. Viral on X, Reddit, HN, LinkedIn; featured Yahoo,
   Decrypt, ProductHunt, skool.com. 65–75% output-token cut by stripping
   filler. Single biggest breakout of the month.
2. **Career-Ops open-source moment** — santifer/career-ops (2026-04-04), ~36.7k ★.
   Founder landed Head of Applied AI role after 700+ tracked applications;
   Garry Tan amplified. Biggest "personal OS built on CC" viral story.
3. **Graphify wave** — safishamsi/graphify (2026-04-03), ~31.1k ★. Knowledge-graph
   skill claiming 71x token reduction; reposted via simonwillison, Medium,
   CLSkills. Triggered many "LLM Wiki" copies (Karpathy pattern).
4. **Claude Opus 4.7 + Claude Design** — Anthropic shipped Opus 4.7 on
   2026-04-16 (SWE-bench 87.6%) and Claude Design on 2026-04-17 (Figma stock
   dropped 7.28% same day). CC added Auto mode, /effort xhigh, /tui,
   push-notification tool.
5. **Karpathy "LLM Wiki" implementations** — lucasastorian/llmwiki (566★),
   Astro-Han/karpathy-llm-wiki (525★), nvk/llm-wiki (246★), plus 5+ more —
   pattern dominated mid-April.
6. **Design-system skills** surged — hue, design-extract, awesome-claude-design
   (×2), styleseed — riding Claude Design launch.
7. **Token-saving dashboards** (codeburn, claude-usage, TokenTracker,
   claude-code-lsp-enforcement-kit, ai-codex, clauditor) — Opus 4.7 tier raised
   cost pressure again.
8. **Post-leak continuation** — April 1 saw a wave of "cleaned leak" forks:
   soongenwong/claudecode (994★), 0Chencc/clawgod (806★), he-yufeng/CoreCoder
   (592★), SafeRL-Lab/cheetahclaws (581★), x1xhlol/better-clawd (394★).
9. **Persona/skill distillation** stayed strong — awesome-persona-distill-skills
   (3,939★), agenmod/immortal-skill (604★), yupi-skill (217★).

## Candidate pool (top-sorted)

### Anthropic official / cross-vendor
- **Claude Opus 4.7** — 2026-04-16, SWE 87.6%, Auto mode for Max, /effort xhigh
- **Claude Design (Anthropic Labs)** — 2026-04-17, research preview; ships
  handoff bundle into Claude Code
- CC changelog 2.1.69 → 2.1.101: /tui, push-notif tool, MCP maxResultSizeChars,
  disableSkillShellExecution

### Viral breakouts (≥500★ or huge velocity)
- JuliusBrussee/caveman — 2026-04-04, **39,946★** ← #1 of April
- santifer/career-ops — 2026-04-04, **36,748★**
- safishamsi/graphify — 2026-04-03, **31,104★**
- kyegomez/OpenMythos — 2026-04-18, 3,122★
- soongenwong/claudecode — 2026-04-01, 994★ (post-leak Rust fork)
- 0Chencc/clawgod — 2026-04-01, 806★ (runtime patch)
- he-yufeng/CoreCoder — 2026-04-01, 592★ (~950 LoC mini-CC)
- SafeRL-Lab/cheetahclaws — 2026-04-01, 581★
- x1xhlol/better-clawd — 2026-04-01, 394★
- grayashh/buddy-reroll — 2026-04-01, 244★ (April-Fool CC buddy pet)

### Skills
- xixu-me/awesome-persona-distill-skills — 2026-04-06, 3,939★
- AgriciDaniel/claude-obsidian — 2026-04-07, 2,216★
- PrathamLearnsToCode/paper2code — 2026-04-03, 958★
- agenmod/immortal-skill — 2026-04-01, 604★
- Xiangyue-Zhang/auto-deep-researcher-24x7 — 2026-04-08, 595★
- mohi-devhub/antivibe — 2026-04-10, 592★
- Astro-Han/karpathy-llm-wiki — 2026-04-05, 525★
- mliu98/awesome-human-distillation — 2026-04-02, 521★
- keli-wen/agentic-harness-patterns-skill — 2026-04-01, 234★
- Master-skill (xr843) — 2026-04-04, 235★
- yupi-skill (liyupi) — 2026-04-09, 217★

### Plugins / harnesses / templates
- repowise-dev/claude-code-prompts — 2026-04-01, 947★
- MioMioOS/MioIsland — 2026-04-01, 353★ (mac Dynamic Island)
- IyadhKhalfallah/clauditor — 2026-04-02, 367★
- VoltAgent/awesome-claude-design — 2026-04-18, 576★
- evo-hq/evo — 2026-04-05, 486★
- NYCU-Chung/my-claude-devteam — 2026-04-11, 221★
- johnkf5-ops/the-dev-squad — 2026-04-01, 215★
- OMARVII/claude-alloy — 2026-04-07, 82★
- OdradekAI/bundles-forge — 2026-04-05, 104★
- kirilxd/claude-tutor — 2026-04-07, 69★

### Cost / token / memory
- getagentseal/codeburn — 2026-04-13, 2,967★
- phuryn/claude-usage — 2026-04-07, 1,092★
- lucasrosati/claude-code-memory-setup — 2026-04-12, 274★
- nesaminua/claude-code-lsp-enforcement-kit — 2026-04-10, 241★
- skibidiskib/ai-codex — 2026-04-02, 241★
- mm7894215/TokenTracker — 2026-04-05, 223★
- abhisekjha/pith — 2026-04-15, 63★

### MCP servers
- Manavarya09/design-extract — 2026-04-15, 1,120★ (design-system MCP)
- lucasastorian/llmwiki — 2026-04-04, 566★
- ThinkWatchProject/ThinkWatch — 2026-04-02, 364★ (enterprise AI gateway)
- irinabuht12-oss/google-meta-ads-ga4-mcp — 2026-04-06, 310★
- swarmclawai/swarmvault — 2026-04-06, 243★
- RyjoxTechnologies/Octopoda-OS — 2026-04-02, 153★
- yantrikos/yantrikdb-server — 2026-04-05, 114★
- FreePeak/LeanKG — 2026-04-13, 83★
- klemensgc/modular-context-obsidian-plugin — 2026-04-05, 76★
- glincker/stacklit — 2026-04-09, 62★

### Design-system
- Manavarya09/design-extract — 1,120★
- VoltAgent/awesome-claude-design — 576★
- dominikmartn/hue — 2026-04-12, 387★
- bitjaru/styleseed — 2026-04-07, 305★
- rohitg00/awesome-claude-design — 2026-04-19, 154★
- KAOPU-XiaoPu/web-design — 2026-04-16, 96★

### Education / reverse-engineering
- VILA-Lab/Dive-into-Claude-Code — 2026-04-11, 376★
- joyehuang/Learn-Open-Harness — 2026-04-07, 302★
- Harzva/learn-likecc — 2026-04-01, 158★
- thtskaran/claude-code-analysis — 2026-04-01, 47★

## Top 25 ranking (final)

Sorted by April 2026 traction. Apr is partial-month; ranking reflects stars
plus qualitative spike signal. Categories capped ≤12.

1. **caveman** (JuliusBrussee) — viral · 39.9k ★
2. **career-ops** (santifer) — viral · 36.7k ★
3. **graphify** (safishamsi) — skill · 31.1k ★
4. **Claude Opus 4.7** — anthropic (Apr 16)
5. **Claude Design** (Anthropic Labs) — anthropic (Apr 17)
6. **awesome-persona-distill-skills** — marketplace · 3.9k ★
7. **OpenMythos** (kyegomez) — viral · 3.1k ★
8. **codeburn** (getagentseal) — cost · 2.97k ★
9. **claude-obsidian** (AgriciDaniel) — skill · 2.2k ★
10. **design-extract** (Manavarya09) — design · 1.12k ★
11. **claude-usage** (phuryn) — cost · 1.09k ★
12. **soongenwong/claudecode** — viral · 994 ★ (post-leak Rust)
13. **paper2code** (PrathamLearnsToCode) — skill · 958 ★
14. **claude-code-prompts** (repowise-dev) — marketplace · 947 ★
15. **clawgod** (0Chencc) — viral · 806 ★
16. **immortal-skill** (agenmod) — skill · 604 ★
17. **auto-deep-researcher-24x7** — skill · 595 ★
18. **antivibe** (mohi-devhub) — skill · 592 ★
19. **awesome-claude-design** (VoltAgent) — design · 576 ★
20. **llmwiki** (lucasastorian) — mcp · 566 ★
21. **MioIsland** (MioMioOS) — plugin · 353 ★
22. **ThinkWatch** (enterprise AI gateway) — mcp · 364 ★
23. **evo** (evo-hq) — plugin · 486 ★
24. **my-claude-devteam** (NYCU-Chung) — plugin · 221 ★
25. **styleseed** (bitjaru) — design · 305 ★

Category counts:
- viral 5, skill 6, anthropic 2, cost 2, design 3, mcp 2, marketplace 2, plugin 3
- Max 6 (skill), all ≤ 12 ✓
