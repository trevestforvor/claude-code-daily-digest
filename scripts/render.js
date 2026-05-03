#!/usr/bin/env node
// Renders the Claude Code digest site from JSON data files.
// Reads: submissions.json, digests/*.json, catchups/*.json, catchup-2026-ytd.json
// Writes: index.html, submissions.html, digests/*.html, catchups/*.html, catchup-2026-ytd.html
// No external dependencies — pure Node stdlib.

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');

const BADGE_COLORS = {
  design:      ['#3b2b5c', '#c4b5fd'],
  cost:        ['#1f4d3d', '#6ee7b7'],
  viral:       ['#5c2323', '#fca5a5'],
  anthropic:   ['#5c3a1f', '#fdba74'],
  marketplace: ['#1f3a5c', '#93c5fd'],
  mcp:         ['#1f4d4d', '#67e8f9'],
  plugin:      ['#5c4a1f', '#fde68a'],
  skill:       ['#5c2343', '#f9a8d4'],
};

// Derived tags applied to every item at render time. Rules are matched against
// `name + hook + categories + install`. Categories are always included as tags.
// Order is irrelevant; duplicates are deduped. Keep the list lean — extra tags
// add noise to cards and search results.
const TAG_RULES = [
  // Visual
  { tag: 'design',      match: /\b(design|aesthetic|visual identity|ui\/ux|ui design)\b/i },
  { tag: 'frontend',    match: /\b(frontend|front-end|html artifact|landing page|design system|component library|jsx component|design tokens|ui kit)\b/i },
  { tag: 'animation',   match: /\b(animation|animate|motion blur|easing|transition|animator)\b/i },
  { tag: 'branding',    match: /\b(brand guideline|brand color|brand identity|typography|font pairing|palette|poppins|lora)\b/i },
  // Media
  { tag: 'video',       match: /\b(video|mp4|cinema|cinematic|filmmaking|veo|sora|kling|seedance|hailuo|remotion)\b/i },
  { tag: 'image',       match: /\b(image generation|image gen|text-to-image|t2i|stable diffusion|flux|sdxl|midjourney|ideogram|nano-banana|gpt image)\b/i },
  { tag: '3d',          match: /\b(3d|gaussian splat|three\.js|r3f|webgl|mesh|3-d)\b/i },
  { tag: 'audio',       match: /\b(tts|text-to-speech|voice clon|voice gen|audiobook|narration|speech)\b/i },
  { tag: 'screencast',  match: /\b(screen studio|screen record|screencast|demo recording)\b/i },
  // Claude Code shape
  { tag: 'mcp',         match: /\bmcp\b|model context protocol/i },
  { tag: 'skill',       match: /\bskill\b/i },
  { tag: 'plugin',      match: /\bplugin\b/i },
  { tag: 'agent',       match: /\b(agent framework|multi-agent|agentic|agent orchestrat|ai agent)\b/i },
  { tag: 'harness',     match: /\b(harness|orchestrat)\b/i },
  { tag: 'subagent',    match: /\b(subagent|agent persona|agent collection|specialized agents)\b/i },
  // Cognition
  { tag: 'memory',      match: /\b(memory|long-term memory|recall|knowledge graph|vector memory)\b/i },
  { tag: 'context',     match: /\b(context engineering|context window|context management|context usage|project memory)\b/i },
  { tag: 'model',       match: /\b(language model|\bllm\b|mixture-of-experts|\bmoe\b|fine-tun|open-source model)\b/i },
  // Efficiency
  { tag: 'cost',        match: /\b(cost|cheaper|free for|token usage|token reduction|pricing|subscription|byok)\b/i },
  { tag: 'token',       match: /\b(token usage|token reduction|tokens|cuts.*token)\b/i },
  { tag: 'local',       match: /\b(local-first|on-device|offline|self-host|mlx|ollama|local gpu|run.*locally|local ai)\b/i },
  { tag: 'proxy',       match: /\b(proxy|reroute|router|route.*api)\b/i },
  // Meta
  { tag: 'anthropic',   match: /\banthropic\b|\bclaude\.ai\b|anthropics\/skills|claude\.com\/plugins/i },
  { tag: 'viral',       match: /\b(\d[\d,.]*k? stars|trending|#1|got \$\d|raised \$|hit #)\b/i },
  { tag: 'alternative', match: /\b(alternative to|alternative — |open-source alternative|self-hosted alternative|open alternative)\b/i },
  { tag: 'marketplace', match: /\b(marketplace|directory|curated list|awesome list|collection of)\b/i },
  // I/O
  { tag: 'terminal',    match: /\b(terminal|\bcli\b|command-line|command line)\b/i },
  { tag: 'browser',     match: /\b(browser|chrome|playwright|web automat)\b/i },
  { tag: 'scraping',    match: /\b(scrap|crawl|extract data)\b/i },
  // Devtools
  { tag: 'security',    match: /\b(secret|security|\.env|credential|leak)\b/i },
  { tag: 'review',      match: /\b(code review|linting|\blint\b)\b/i },
  { tag: 'testing',     match: /\b(testing|test suite|unit test|integration test|\be2e\b)\b/i },
  { tag: 'debugger',    match: /\b(debug|debugger)\b/i },
  { tag: 'search',      match: /\b(search engine|retrieval|\brag\b|search api|web search|hnsw)\b/i },
  // Learning
  { tag: 'education',   match: /\b(course|tutorial|training|learning science|lesson)\b/i },
];

const deriveTags = (item) => {
  const text = `${item.name || ''} ${item.hook || ''} ${(item.categories || []).join(' ')} ${item.install || ''}`;
  const tags = new Set(item.categories || []);
  for (const { tag, match } of TAG_RULES) {
    if (match.test(text)) tags.add(tag);
  }
  return [...tags];
};

const MONTHS = ['January','February','March','April','May','June','July','August','September','October','November','December'];

const BASE_CSS = `
:root { color-scheme: dark; }
* { box-sizing: border-box; }
body { margin: 0; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; background: #0b0d10; color: #e6e9ef; line-height: 1.5; }
.wrap { max-width: 820px; margin: 0 auto; padding: 48px 24px; }
a { color: #7aa2f7; text-decoration: none; }
a:hover { color: #a3bffa; }
h1 { font-size: 28px; margin: 0 0 8px; }
h2 { font-size: 22px; margin: 40px 0 12px; border-bottom: 1px solid #1e232b; padding-bottom: 8px; }
h3 { margin: 0 0 6px; font-size: 17px; }
h3 a { color: #e6e9ef; }
h3 a:hover { color: #a3bffa; }
p.sub { color: #9aa3b2; margin: 0 0 32px; }
.crumb { color: #9aa3b2; font-size: 13px; margin-bottom: 16px; }
.hero { display: grid; gap: 12px; margin: 0 0 40px; }
.hero-card { position: relative; border: 1px solid #1e232b; border-radius: 12px; padding: 20px 24px; background: linear-gradient(180deg, #0f1217 0%, #0b0d10 100%); transition: border-color 0.15s; }
.hero-card:hover { border-color: #3a4049; }
.hero-card h2 { margin: 0 0 6px; font-size: 18px; color: #e6e9ef; border: none; padding: 0; }
.hero-card p { margin: 0; color: #9aa3b2; font-size: 14px; }
.hero-card .arrow { position: absolute; top: 20px; right: 24px; color: #6a7280; font-size: 20px; }
.hero-card code { background: #1a1e25; padding: 1px 5px; border-radius: 3px; font-size: 12px; }
.section-title { font-size: 13px; font-weight: 600; color: #9aa3b2; text-transform: uppercase; letter-spacing: 0.05em; margin: 32px 0 12px; }
.monthly-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(160px, 1fr)); gap: 8px; margin-bottom: 32px; }
.monthly-grid .mini { display: flex; justify-content: space-between; align-items: center; padding: 10px 14px; border: 1px solid #1e232b; border-radius: 8px; background: #0f1217; color: #e6e9ef; font-size: 14px; }
.monthly-grid .mini:hover { border-color: #3a4049; }
.monthly-grid .mini .count { color: #6a7280; font-size: 12px; }
.daily-list { border: 1px solid #1e232b; border-radius: 12px; padding: 4px 0; background: #0f1217; }
.daily-item { display: flex; justify-content: space-between; align-items: center; padding: 12px 20px; border-bottom: 1px solid #1e232b; gap: 16px; }
.daily-item:last-child { border-bottom: none; }
.daily-item .date { color: #e6e9ef; font-variant-numeric: tabular-nums; white-space: nowrap; }
.daily-item .teaser { color: #9aa3b2; font-size: 13px; flex: 1; text-align: right; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.empty { color: #6a7280; font-size: 13px; padding: 20px; text-align: center; font-style: italic; }
.item { padding: 20px 0; border-top: 1px solid #1e232b; }
.item:first-of-type { border-top: none; }
.item .hook { color: #c2c8d4; font-size: 14px; margin: 6px 0 10px; }
.item .secondary { font-size: 12px; color: #6a7280; margin-bottom: 8px; }
.item .secondary a { color: #7aa2f7; }
.badges { display: flex; flex-wrap: wrap; gap: 6px; margin: 8px 0; align-items: center; }
.badge { font-size: 11px; padding: 2px 10px; border-radius: 999px; font-weight: 500; letter-spacing: 0.02em; }
.trend, .stars { font-size: 11px; color: #9aa3b2; }
.recurring { margin-top: 6px; font-size: 12px; color: #fbbf24; }
.tags { margin-top: 4px; font-size: 11px; color: #6a7280; line-height: 1.5; }
pre { background: #1a1e25; border: 1px solid #2a3039; border-radius: 8px; padding: 10px 42px 10px 12px; overflow-x: auto; font-size: 13px; position: relative; margin: 8px 0 4px; }
pre code { font-family: "SF Mono", Monaco, Menlo, Consolas, monospace; color: #e6e9ef; }
.copy { position: absolute; top: 6px; right: 6px; background: #2a3039; border: none; color: #e6e9ef; padding: 3px 8px; border-radius: 4px; font-size: 11px; cursor: pointer; font-family: inherit; }
.copy:hover { background: #3a4049; }
details { margin-bottom: 16px; border: 1px solid #1e232b; border-radius: 12px; background: #0f1217; }
summary { cursor: pointer; font-weight: 600; font-size: 16px; padding: 16px 20px; user-select: none; list-style: none; display: flex; justify-content: space-between; align-items: center; }
summary::-webkit-details-marker { display: none; }
summary::after { content: "▸"; color: #6a7280; transition: transform 0.15s; font-size: 12px; }
details[open] summary::after { transform: rotate(90deg); }
summary .count { color: #6a7280; font-weight: 400; font-size: 13px; }
.month-body { padding: 0 20px 12px; }
.toc { position: sticky; top: 0; background: #0b0d10; border-bottom: 1px solid #1e232b; display: flex; flex-wrap: wrap; gap: 16px; padding: 12px 0; margin: 0 0 24px; z-index: 10; }
.toc a { color: #e6e9ef; font-size: 13px; }
.toc a .count { color: #6a7280; }
.foot { margin-top: 40px; padding-top: 20px; border-top: 1px solid #1e232b; color: #6a7280; font-size: 12px; }
`;

const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

const readJSON = (p, fallback) => {
  try { return JSON.parse(fs.readFileSync(p, 'utf8')); }
  catch { return fallback; }
};

// Items may arrive as a raw array OR wrapped in {items: [...]} — normalize.
const asItems = data => {
  if (Array.isArray(data)) return data;
  if (data && Array.isArray(data.items)) return data.items;
  if (data && Array.isArray(data.data)) return data.data;
  return [];
};

const humanDate = iso => {
  const [y, m, d] = iso.split('-').map(Number);
  return `${MONTHS[m-1]} ${d}, ${y}`;
};

const humanMonth = ym => {
  const [y, m] = ym.split('-').map(Number);
  return `${MONTHS[m-1]} ${y}`;
};

const renderBadges = (categories = []) =>
  categories.map(c => {
    const [bg, fg] = BADGE_COLORS[c] || ['#2a3039', '#c2c8d4'];
    return `<span class="badge" style="background:${bg};color:${fg}">${esc(c)}</span>`;
  }).join(' ');

const renderInstall = cmd => {
  if (!cmd) return '';
  return `<pre><button class="copy">copy</button><code>${esc(cmd)}</code></pre>`;
};

const renderItem = (item, opts = {}) => {
  const { rank, showStars = true, showTrend = true } = opts;
  const rankPrefix = rank != null ? `#${rank}. ` : '';
  const secondary = (item.secondary_urls || [])
    .map(u => `<a href="${esc(u)}">${esc(u.replace(/^https?:\/\//, ''))}</a>`)
    .join(' · ');
  const stars = showStars && item.stars_approx
    ? `<span class="stars">📈 ~${Number(item.stars_approx).toLocaleString()} stars</span>`
    : '';
  const trend = showTrend && item.month
    ? `<span class="trend">↑ ${humanMonth(item.month)}</span>`
    : '';
  const recurring = item.recurring_note
    ? `<div class="recurring">${esc(item.recurring_note)}</div>`
    : '';
  const cats = item.categories || [];
  const extraTags = deriveTags(item).filter(t => !cats.includes(t));
  const tagsLine = extraTags.length > 0
    ? `<div class="tags">${extraTags.map(esc).join(' · ')}</div>`
    : '';
  return `
<article class="item">
  <h3><a href="${esc(item.primary_url || '#')}">${rankPrefix}${esc(item.name || 'Untitled')}</a></h3>
  ${item.hook ? `<p class="hook">${esc(item.hook)}</p>` : ''}
  ${secondary ? `<div class="secondary">Also: ${secondary}</div>` : ''}
  <div class="badges">${renderBadges(cats)} ${trend} ${stars}</div>
  ${tagsLine}
  ${renderInstall(item.install)}
  ${recurring}
</article>`;
};

const pageShell = (title, body, opts = {}) => {
  const { breadcrumb } = opts;
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${esc(title)}</title>
<style>${BASE_CSS}</style>
</head>
<body>
<div class="wrap">
${breadcrumb ? `<div class="crumb"><a href="${esc(breadcrumb.href)}">← ${esc(breadcrumb.label)}</a></div>` : ''}
${body}
</div>
<script>
document.querySelectorAll('.copy').forEach(b => b.addEventListener('click', (e) => {
  e.preventDefault();
  navigator.clipboard.writeText(b.parentElement.querySelector('code').innerText);
  const t = b.innerText; b.innerText = 'copied'; setTimeout(() => b.innerText = t, 1200);
}));
</script>
</body>
</html>`;
};

// --- Renderers ---

const renderDailyDigest = (date, items) => {
  const header = `<h1>Daily Digest — ${humanDate(date)}</h1><p class="sub">Top ${items.length} hottest Claude Code ecosystem items from the past 72 hours.</p>`;
  const cards = items.map(i => renderItem(i, { showTrend: false })).join('\n');
  return pageShell(`Daily Digest — ${humanDate(date)}`, header + cards, {
    breadcrumb: { href: '../index.html', label: 'Back to hub' }
  });
};

const renderMonthlyCatchup = (month, items) => {
  const sorted = [...items].sort((a, b) => (a.rank_in_month || 99) - (b.rank_in_month || 99));
  const header = `<h1>${humanMonth(month)} Catchup</h1><p class="sub">Top ${items.length} hottest Claude Code items trending in ${humanMonth(month)}.</p>`;
  const cards = sorted.map((i, idx) => renderItem(i, { rank: i.rank_in_month || idx + 1, showTrend: false })).join('\n');
  return pageShell(`${humanMonth(month)} Catchup`, header + cards, {
    breadcrumb: { href: '../index.html', label: 'Back to hub' }
  });
};

const renderAggregated = data => {
  const sections = ['design', 'cost', 'viral', 'general'];
  const titles = { design: 'Design', cost: 'Cost & Tokens', viral: 'Viral', general: 'Anthropic / General' };
  const toc = sections.map(s => {
    const count = ((data.categories && data.categories[s]) || []).length;
    return `<a href="#${s}">${titles[s]} <span class="count">(${count})</span></a>`;
  }).join('');
  const content = sections.map(s => {
    const items = (data.categories && data.categories[s]) || [];
    if (items.length === 0) return '';
    const cards = items.map((it, i) => renderItem(it, { rank: i + 1 })).join('\n');
    return `<section id="${s}"><h2>${titles[s]}</h2>${cards}</section>`;
  }).join('\n');
  const monthLinks = (data.source_months || [])
    .map(m => `<a href="catchups/${m}.html">${humanMonth(m)}</a>`)
    .join(' · ');
  const total = sections.reduce((n, s) => n + ((data.categories && data.categories[s]) || []).length, 0);
  const header = `<h1>Claude Code YTD Catchup — 2026</h1><p class="sub">Top ${total} hottest items from Jan 1 through today. Deduped across ${(data.source_months || []).length} months.</p>`;
  const footer = `<footer class="foot">Source months: ${monthLinks || 'none'} · Dedup count: ${data.dedup_count || 0} · Generated ${esc(data.generated_at || '')}</footer>`;
  return pageShell('YTD 2026 Catchup', header + `<nav class="toc">${toc}</nav>` + content + footer, {
    breadcrumb: { href: 'index.html', label: 'Back to hub' }
  });
};

const renderSubmissions = submissions => {
  const groups = {};
  for (const s of submissions) {
    const ym = (s.added_date || '0000-00').slice(0, 7);
    if (!groups[ym]) groups[ym] = [];
    groups[ym].push(s);
  }
  const months = Object.keys(groups).sort().reverse();
  const body = months.length === 0
    ? `<div class="empty"><p>No submissions yet.</p><p>Add one with <code>/digest-add &lt;item&gt;</code>.</p></div>`
    : months.map((ym, idx) => {
        const items = groups[ym];
        const open = idx === 0 ? 'open' : '';
        const cards = items.map(i => renderItem(i, { showStars: false, showTrend: false })).join('\n');
        return `<details ${open}><summary>${humanMonth(ym)} <span class="count">${items.length} item${items.length === 1 ? '' : 's'}</span></summary><div class="month-body">${cards}</div></details>`;
      }).join('\n');
  const header = `<h1>Your Submissions</h1><p class="sub">Items you've captured manually via <code>/digest-add</code>. Auto-dedup'd from the daily cron.</p>`;
  return pageShell('Your Submissions', header + body, {
    breadcrumb: { href: 'index.html', label: 'Back to hub' }
  });
};

const renderIndex = (manifest, searchItems = []) => {
  const hero = [];
  if (manifest.hasCatchup) {
    hero.push(`<a href="catchup-2026-ytd.html" class="hero-card"><span class="arrow">→</span><h2>🗓️ YTD 2026 Catchup — Top 100</h2><p>Retrospective of the hottest items from the start of 2026. Grouped by category.</p></a>`);
  }
  if (manifest.hasSubmissions) {
    hero.push(`<a href="submissions.html" class="hero-card"><span class="arrow">→</span><h2>✍️ Your Submissions</h2><p>Items you've added manually via <code>/digest-add</code>.</p></a>`);
  }
  const monthlies = manifest.monthlies
    .map(m => `<a href="catchups/${m.month}.html" class="mini">${humanMonth(m.month)} <span class="count">${m.count}</span></a>`)
    .join('');
  const dailies = manifest.dailies.length > 0
    ? manifest.dailies.map(d => {
        const teaser = d.hook ? esc(d.hook) : `${d.count} item${d.count === 1 ? '' : 's'}`;
        return `<div class="daily-item"><a href="digests/${d.date}.html" class="date">${humanDate(d.date)}</a><span class="teaser">${teaser}</span></div>`;
      }).join('')
    : `<div class="empty">No daily digests yet — first run at 9am PT today.</div>`;
  const safeData = JSON.stringify(searchItems).replace(/</g, '\\u003c');
  const body = `
<h1>Claude Code Daily Digest</h1>
<p class="sub">Hottest Claude Code skills, plugins, MCPs &amp; releases. Updated daily at 9am PT.</p>
<input type="search" id="q" class="search" placeholder="Search items — try &quot;design tokens&quot;, &quot;ollama&quot;, &quot;cost&quot;…" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false">
<div id="search-results" class="search-results" hidden></div>
<div id="default-content">
${hero.length > 0 ? `<div class="hero">${hero.join('')}</div>` : ''}
${manifest.monthlies.length > 0 ? `<div class="section-title">Monthly catchups</div><div class="monthly-grid">${monthlies}</div>` : ''}
<div class="section-title">Daily digests</div>
<div class="daily-list">${dailies}</div>
</div>
<style>
.search { width: 100%; padding: 12px 16px; border: 1px solid #1e232b; border-radius: 8px; background: #0f1217; color: #e6e9ef; font-size: 15px; font-family: inherit; margin: 0 0 16px; }
.search:focus { outline: none; border-color: #3a4049; }
.search::-webkit-search-cancel-button { filter: invert(0.6); cursor: pointer; }
.search-results { border: 1px solid #1e232b; border-radius: 12px; padding: 4px 0; background: #0f1217; margin-bottom: 32px; }
.search-result { padding: 14px 20px; border-bottom: 1px solid #1e232b; }
.search-result:last-child { border-bottom: none; }
.search-result h4 { margin: 0 0 4px; font-size: 15px; font-weight: 600; }
.search-result h4 a { color: #e6e9ef; }
.search-result h4 a:hover { color: #a3bffa; }
.search-result p { margin: 0 0 6px; color: #9aa3b2; font-size: 13px; }
.search-result .meta { color: #6a7280; font-size: 11px; }
.search-result .meta a { color: #7aa2f7; }
.no-results { color: #6a7280; padding: 20px; text-align: center; font-style: italic; font-size: 13px; }
</style>
<script id="search-data" type="application/json">${safeData}</script>
<script>
(function(){
  var data;
  try { data = JSON.parse(document.getElementById('search-data').textContent); } catch (e) { data = []; }
  var input = document.getElementById('q');
  var out = document.getElementById('search-results');
  var def = document.getElementById('default-content');
  var timer;
  var esc = function(s){ return String(s == null ? '' : s).replace(/[&<>"']/g, function(c){ return ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'})[c]; }); };
  function render(q) {
    var words = q.toLowerCase().split(/\\s+/).filter(Boolean);
    if (!words.length) { out.hidden = true; def.hidden = false; out.innerHTML = ''; return; }
    def.hidden = true;
    out.hidden = false;
    var matches = [];
    for (var i = 0; i < data.length; i++) {
      var it = data[i];
      var hay = ((it.name || '') + ' ' + (it.hook || '') + ' ' + (it.categories || []).join(' ') + ' ' + (it.tags || []).join(' ') + ' ' + (it.install || '')).toLowerCase();
      var ok = true;
      for (var j = 0; j < words.length; j++) { if (hay.indexOf(words[j]) === -1) { ok = false; break; } }
      if (ok) matches.push(it);
    }
    if (!matches.length) { out.innerHTML = '<div class="no-results">No matches for &quot;' + esc(q) + '&quot;.</div>'; return; }
    matches = matches.slice(0, 40);
    out.innerHTML = matches.map(function(it){
      var allTags = ((it.categories || []).concat((it.tags || []).filter(function(t){ return (it.categories || []).indexOf(t) === -1; }))).map(esc).join(' · ');
      return '<div class="search-result">'
        + '<h4><a href="' + esc(it.primary_url || '#') + '">' + esc(it.name) + '</a></h4>'
        + (it.hook ? '<p>' + esc(it.hook) + '</p>' : '')
        + '<div class="meta">' + (allTags ? allTags + ' · ' : '') + '<a href="' + esc(it.source_url) + '">' + esc(it.source_label) + '</a></div>'
        + '</div>';
    }).join('');
  }
  input.addEventListener('input', function(){
    clearTimeout(timer);
    timer = setTimeout(function(){ render(input.value.trim()); }, 60);
  });
})();
</script>`;
  return pageShell('Claude Code Daily Digest', body);
};

// --- Main ---

const main = () => {
  const manifest = { hasCatchup: false, hasSubmissions: false, dailies: [], monthlies: [] };
  const searchEntries = [];
  const toSearchEntry = (it, kind, source_label, source_url) => ({
    kind,
    name: it.name || 'Untitled',
    hook: it.hook || '',
    categories: it.categories || [],
    tags: deriveTags(it),
    install: it.install || '',
    primary_url: it.primary_url || '',
    source_label,
    source_url,
  });

  // Submissions
  const submissions = asItems(readJSON(path.join(ROOT, 'submissions.json'), []));
  fs.writeFileSync(path.join(ROOT, 'submissions.html'), renderSubmissions(submissions));
  manifest.hasSubmissions = true;
  for (const s of submissions) searchEntries.push(toSearchEntry(s, 'submission', 'Submission', 'submissions.html'));
  console.log(`rendered submissions.html (${submissions.length} items)`);

  // Daily digests
  const digestsDir = path.join(ROOT, 'digests');
  if (fs.existsSync(digestsDir)) {
    const jsonFiles = fs.readdirSync(digestsDir).filter(f => /^\d{4}-\d{2}-\d{2}\.json$/.test(f));
    for (const f of jsonFiles) {
      const date = f.replace(/\.json$/, '');
      const items = asItems(readJSON(path.join(digestsDir, f), []));
      fs.writeFileSync(path.join(digestsDir, date + '.html'), renderDailyDigest(date, items));
      const firstName = items[0] ? items[0].name : null;
      manifest.dailies.push({ date, count: items.length, hook: firstName });
      for (const it of items) searchEntries.push(toSearchEntry(it, 'daily', `Daily — ${humanDate(date)}`, `digests/${date}.html`));
      console.log(`rendered digests/${date}.html (${items.length} items)`);
    }
    manifest.dailies.sort((a, b) => b.date.localeCompare(a.date));
  }

  // Monthly catchups
  const catchupsDir = path.join(ROOT, 'catchups');
  if (fs.existsSync(catchupsDir)) {
    const jsonFiles = fs.readdirSync(catchupsDir).filter(f => /^\d{4}-\d{2}\.json$/.test(f));
    for (const f of jsonFiles) {
      const month = f.replace(/\.json$/, '');
      const items = asItems(readJSON(path.join(catchupsDir, f), []));
      fs.writeFileSync(path.join(catchupsDir, month + '.html'), renderMonthlyCatchup(month, items));
      manifest.monthlies.push({ month, count: items.length });
      for (const it of items) searchEntries.push(toSearchEntry(it, 'monthly', `${humanMonth(month)} Catchup`, `catchups/${month}.html`));
      console.log(`rendered catchups/${month}.html (${items.length} items)`);
    }
    manifest.monthlies.sort((a, b) => b.month.localeCompare(a.month));
  }

  // Aggregated YTD
  const aggregated = readJSON(path.join(ROOT, 'catchup-2026-ytd.json'), null);
  if (aggregated) {
    fs.writeFileSync(path.join(ROOT, 'catchup-2026-ytd.html'), renderAggregated(aggregated));
    manifest.hasCatchup = true;
    console.log(`rendered catchup-2026-ytd.html`);
  }

  // Dedup search entries: prefer daily (most context) > submission > monthly.
  const PRIORITY = { daily: 0, submission: 1, monthly: 2 };
  const byKey = new Map();
  for (const e of searchEntries) {
    const key = (e.primary_url || e.name || '').toLowerCase();
    if (!key) continue;
    const existing = byKey.get(key);
    if (!existing || PRIORITY[e.kind] < PRIORITY[existing.kind]) byKey.set(key, e);
  }
  const searchItems = [...byKey.values()].map(({ kind, ...rest }) => rest);

  // Index
  fs.writeFileSync(path.join(ROOT, 'index.html'), renderIndex(manifest, searchItems));
  console.log(`rendered index.html (search index: ${searchItems.length} unique items)`);
};

main();
