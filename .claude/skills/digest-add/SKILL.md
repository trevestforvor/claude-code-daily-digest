---
name: digest-add
description: Add an item to the Claude Code Daily Digest's submissions list. Given a free-text name, GitHub handle, or URL, researches the project, structures a submission entry, appends to submissions.json, re-renders the site, commits to the working branch, resolves any merge conflicts deterministically, creates or updates the draft PR, and enables auto-merge. Use whenever the user names a project they want to add ("add Foo", "Foo bar baz" with no other context), pastes a GitHub URL with no question attached, dumps a list of items, or asks to "fix the PR" / "resolve conflicts" on the digest branch.
---

# digest-add

End-to-end automation for adding items to the digest. The user typically just types the project name; this skill does the rest.

## When to invoke

- User names one or more projects: `Foo`, `Foo, Bar`, `Foo bar baz`
- User pastes a GitHub or product URL with no other text
- User says "add X to the digest"
- User asks to "fix the PR" or "resolve conflicts" → skip straight to the **Conflict resolution** section
- User asks to "merge the PR" → skip to **Auto-merge**

If the request includes a real question ("what does X do?", "compare X vs Y"), do not invoke; answer the question.

## Working branch

Always use `claude/add-digest-items-phone-BDouh`. Create it if missing:
```bash
git rev-parse --verify claude/add-digest-items-phone-BDouh 2>/dev/null || git checkout -b claude/add-digest-items-phone-BDouh
```

## Step 1 — Sync with main

```bash
git fetch origin main
git merge origin/main --ff-only 2>&1 | tail -2
```

If fast-forward fails because the branch has unpushed work, attempt a regular merge — conflicts are handled below.

## Step 2 — Research the item

Goal: produce `{name, primary_url, secondary_urls, hook, categories, install}`.

1. If the input is a URL, `WebFetch` it directly. Prompt: *"One-sentence description, what it does, install command, license, approximate stars."*
2. If `WebFetch` returns 403/404 or the input is just a name, `WebSearch` with the name plus context like "claude code 2026 github" or "AI 2026". Then fetch the most plausible repo.
3. Resolve typos by searching — phone autocorrect is common (e.g. `Lightningixel` → `lightningpixel`, `Mempalace` → `MemPalace`).
4. If the item is ambiguous, ask the user for the GitHub URL rather than guess.

### Hook style
One or two sentences. Lead with the most distinctive feature, end with a stat (star count, license, performance number) when available. Em-dashes are fine. Past examples:

> "Open-source 230B-param MoE (10B active) tuned for coding + agentic tool use — ~8% the price of Sonnet at 2× speed, with M2.7 ranking #1 among open-source models on Artificial Analysis."

> "Self-healing browser harness — thin CDP layer that hands an LLM full control of a real Chrome over one websocket, then has the agent write the missing capabilities mid-run."

### Categories (use ONLY these 8)

`design`, `cost`, `viral`, `anthropic`, `marketplace`, `mcp`, `plugin`, `skill`.

Items outside the Claude Code ecosystem (e.g. media downloaders, finance apps) can have an empty `categories: []` — the auto-tagger in `render.js` still derives tags from name/hook/install.

## Step 3 — Dedup check

```bash
grep -l "<primary_url>" submissions.json digests/*.json catchups/*.json 2>/dev/null
```

- Already in `submissions.json` → tell the user, do not re-add.
- Only in `digests/*.json` or `catchups/*.json` → still safe to add (renderer dedupes the search index by `primary_url`, daily entries win the link target).

## Step 4 — Append entry

Edit `submissions.json`. The file is a JSON array; insert before the closing `]`. Use kebab-case slug, today's date in `YYYY-MM-DD`, `"added_by": "user"`.

```json
{
  "slug": "<kebab-case>",
  "name": "<Display Name>",
  "primary_url": "https://github.com/...",
  "secondary_urls": [],
  "hook": "...",
  "categories": [],
  "install": "",
  "added_date": "YYYY-MM-DD",
  "added_by": "user"
}
```

`install` is the most useful single command (preferred order: `npm install -g …`, `pip install …`, `npx skills add owner/repo`, `docker run …`, `git clone …`). Leave empty if there's no canonical install path.

## Step 5 — Render + commit + push

```bash
node scripts/render.js 2>&1 | tail -2
git add submissions.json submissions.html index.html
git commit -m "$(cat <<'EOF'
Add <Display Name> (<one-line why>)

https://claude.ai/code/session_<SESSION_ID>
EOF
)"
git push -u origin claude/add-digest-items-phone-BDouh 2>&1 | tail -3
```

The render log line `rendered index.html (search index: N unique items)` is what to report back to the user.

## Step 6 — Open or update PR

Check whether a PR is already open for the branch (the most recent merged PR doesn't count). If none, create a draft via `mcp__github__create_pull_request`:

- `owner`: `trevestforvor`
- `repo`: `claude-code-daily-digest`
- `head`: `claude/add-digest-items-phone-BDouh`
- `base`: `main`
- `draft`: `true`
- `title`: `Add <Display Name>` (or a batch title for multiple items)
- `body`: short summary table — slug, categories, hook

If a PR already exists, the push just appends to it; no action needed unless the user asks to refresh the description.

## Step 7 — Enable auto-merge

Once the PR is up and CI is passing (or about to start), enable auto-merge via `mcp__github__enable_pr_auto_merge` with `merge_method: "SQUASH"`. Squash keeps `main`'s history clean; the per-commit detail lives on the branch.

If CI is `in_progress` you can still enable auto-merge — GitHub merges when checks pass.

## Conflict resolution

Triggered by the user saying "fix the PR" or by `git merge` reporting `CONFLICT`.

The only file that ever conflicts is `index.html` — it's deterministically regenerated. Resolve by:

```bash
git checkout --ours index.html
node scripts/render.js
git add -A
git commit --no-edit
git push
```

Never touch the dailies, catchups, or `submissions.json` while resolving — `main` only adds new daily-digest JSONs, and `render.js` integrates them automatically. If a non-index conflict appears, stop and ask the user.

## Reporting

After the workflow completes, one or two sentences:

> Pushed onto PR #N. `<owner/repo>` — <one-line summary>. Tagged `<categories>`. Search index now <N>.

Include the GitHub URL only if the user wouldn't already have it from the PR notification.
