# April 2026 Catchup — Research Notes

Date compiled: 2026-04-20 (month in progress)
Window: 2026-04-01 → 2026-04-20

## Method

GitHub MCP: topic/name/description searches restricted to created:>2026-04-01,
sorted by stars. Web verified for Anthropic-official events only.

## Macro trends

1. **Token-cost pain hits critical** — `caveman` (JuliusBrussee, 2026-04-04)
   exploded to ~39.8k stars in 16 days by telling Claude to "talk caveman" for
   ~65% token savings. Spawned a whole cluster: graphify (31k), codeburn (2.9k),
   claude-usage (1.1k), codesight (940), stacklit, LeanKG, darwin-skill.
2. **Karpathy "LLM Wiki" pattern** dominates personal-KB space — claude-obsidian
   (2.2k), llmwiki (563), karpathy-llm-wiki (524), obsidian-wiki (482),
   swarmvault (243), second-brain (191), claude-memory-compiler (827).
3. **Design-system-as-skill** wave — hue (385), design-extract (1.1k),
   material-3-skill (732), diagram-design (813), awesome-claude-design (558),
   rohitg00/awesome-claude-design (147).
4. **Human/persona distillation skills** — awesome-persona-distill-skills
   (3.9k), awesome-human-distillation (521), yupi-skill (217), forge-skill (60),
   cyber-figures (19).
5. **Anthropic official — Opus 4.7 + Routines + Desktop redesign**
   - 2026-04-14: Routines launched (cloud scheduled/API/GitHub-triggered CC runs)
   - 2026-04-15: Redesigned Claude Code desktop app with parallel-session sidebar
   - 2026-04-16: Claude Opus 4.7 GA — xhigh effort, task budgets, /ultrareview,
     2576px vision, 87.6% SWE-bench, Auto mode for Max
   - anthropics/claude-desktop-buddy (Apr 9, 871★) — Bluetooth API reference
     for Cowork + Code Desktop.
6. **Managed Agents API** skills emerged — claude-managed-agents-skill,
   build-managed-agents.
7. **autoresearch v2** — evo (evo-hq, 486★), auto-deep-researcher-24x7 (593★),
   darwin-skill (1.3k★) iterate the overnight-research idea from March.
8. **Career / productivity megatemplates** — career-ops (santifer, 36.7k★),
   antivibe (591★).
9. **Chinese ecosystem extremely hot** — Claude-Code-Source-Study (1.2k),
   obsidian-ai-orange-book (679), wx-favorites-report (500).

## Candidate pool (35+ items, GitHub-verified)

### Viral breakouts (April creation, >500 stars)
- JuliusBrussee/caveman — 2026-04-04, ~39,767★ — token-saving meme skill
- santifer/career-ops — 2026-04-04, ~36,719★ — job-search system
- safishamsi/graphify — 2026-04-03, ~31,028★ — knowledge-graph skill
- yizhiyanhua-ai/fireworks-tech-graph — 2026-04-10, ~3,849★ — tech-diagram skill
- getagentseal/codeburn — 2026-04-13, ~2,950★ — cost observability TUI
- kyegomez/OpenMythos — 2026-04-18, ~2,858★ — theoretical Claude Mythos rebuild
- AgriciDaniel/claude-obsidian — 2026-04-07, ~2,201★ — Karpathy wiki skill
- xixu-me/awesome-persona-distill-skills — 2026-04-06, ~3,938★ — persona catalog
- alchaincyf/darwin-skill — 2026-04-13, ~1,359★ — autonomous skill evolution
- luyao618/Claude-Code-Source-Study — 2026-04-02, ~1,194★ — CN source study
- Manavarya09/design-extract — 2026-04-15, ~1,115★ — design system MCP
- phuryn/claude-usage — 2026-04-07, ~1,086★ — token usage dashboard
- PrathamLearnsToCode/paper2code — 2026-04-03, ~955★ — paper→impl skill
- Houseofmvps/codesight — 2026-04-04, ~940★ — context generator
- adamlyttleapps/claude-skill-app-onboarding-questionnaire — 2026-04-06, ~923★
- anthropics/claude-desktop-buddy — 2026-04-09, ~871★ — Bluetooth reference
- coleam00/claude-memory-compiler — 2026-04-06, ~827★
- cathrynlavery/diagram-design — 2026-04-16, ~813★ — editorial diagrams
- hamen/material-3-skill — 2026-04-09, ~732★ — MD3 skill
- alchaincyf/obsidian-ai-orange-book — 2026-04-11, ~679★
- codejunkie99/agentic-stack — 2026-04-15, ~671★ — portable .agent folder
- ProjectBarks/gopher-code — 2026-04-02, ~599★ — Claude Code rewritten in Go
- Xiangyue-Zhang/auto-deep-researcher-24x7 — 2026-04-08, ~593★
- mohi-devhub/antivibe — 2026-04-10, ~591★ — learn what AI writes
- lucasastorian/llmwiki — 2026-04-04, ~563★ — Karpathy wiki MCP impl
- VoltAgent/awesome-claude-design — 2026-04-18, ~558★
- Astro-Han/karpathy-llm-wiki — 2026-04-05, ~524★
- mliu98/awesome-human-distillation — 2026-04-02, ~521★
- zhuyansen/wx-favorites-report — 2026-04-16, ~500★ — WeChat favorites skill
- evo-hq/evo — 2026-04-05, ~486★ — autoresearch tree-search plugin
- Ar9av/obsidian-wiki — 2026-04-06, ~482★
- millionco/claude-doctor — 2026-04-15, ~475★
- fivetaku/insane-search — 2026-04-07, ~430★
- dominikmartn/hue — 2026-04-12, ~385★ — brand→design system
- ThinkWatchProject/ThinkWatch — 2026-04-02, ~363★ — AI gateway (Rust)
- zeroc00I/LLM-anonymization — 2026-04-13, ~212★ — pentest PII anonymizer
- swarmclawai/swarmvault — 2026-04-06, ~243★

### Anthropic-official / cross-vendor
- anthropics/claude-desktop-buddy — Apr 9 — Bluetooth API reference
- Claude Opus 4.7 GA — Apr 16 (anthropic.com/news)
- Claude Code Routines — Apr 14 (claude.com/blog)
- Claude Code Desktop redesign — Apr 15

## Final Top 25

1. caveman (JuliusBrussee) — viral — token-savings meme skill, 39.8k★
2. career-ops (santifer) — viral — 36.7k★ job-search megakit
3. graphify (safishamsi) — skill — 31k★ knowledge graph
4. Claude Opus 4.7 — anthropic — Apr 16 GA, xhigh, task budgets
5. Claude Code Routines — anthropic — Apr 14 cloud automation
6. awesome-persona-distill-skills — marketplace — 3.9k★ persona catalog
7. fireworks-tech-graph — skill — 3.8k★ diagram skill
8. codeburn — cost — 2.9k★ TUI cost observability
9. OpenMythos — viral — 2.8k★ Claude Mythos rebuild
10. claude-obsidian — skill — 2.2k★ Karpathy wiki skill
11. darwin-skill — skill — 1.3k★ autonomous skill evolution
12. Claude-Code-Source-Study — viral — 1.2k★ CN source study
13. design-extract — design — 1.1k★ design system extractor MCP
14. claude-usage — cost — 1.1k★ token usage dashboard
15. paper2code — skill — 955★ paper→implementation
16. codesight — cost — 940★ universal context generator
17. claude-desktop-buddy — anthropic — 871★ Bluetooth API ref
18. claude-memory-compiler — plugin — 827★
19. diagram-design — design — 813★ editorial diagrams
20. material-3-skill — design — 732★ MD3
21. gopher-code — viral — 599★ Claude Code in Go
22. antivibe — skill — 591★ learn-what-AI-writes
23. llmwiki — mcp — 563★ Karpathy wiki impl w/ MCP
24. awesome-claude-design — marketplace — 558★
25. evo (evo-hq) — plugin — 486★ autoresearch tree-search

## Balance check

- viral:       5  (caveman, career-ops, OpenMythos, CC-Source-Study, gopher-code)
- skill:       7  (graphify, fireworks-tech-graph, claude-obsidian, darwin, paper2code, antivibe, plus)
- cost:        3  (codeburn, claude-usage, codesight)
- design:      3  (design-extract, diagram-design, material-3-skill)
- anthropic:   3  (Opus 4.7, Routines, desktop-buddy)
- plugin:      2  (claude-memory-compiler, evo)
- mcp:         1  (llmwiki)
- marketplace: 2  (awesome-persona-distill-skills, awesome-claude-design)

No category >12. Anthropic + cost + design + viral each reasonable.
