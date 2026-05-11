---
description: "Weekly broken-link sweep across docs/ and README.md with a PR (fallback issue) of safe fixes."

on:
  schedule: weekly on monday
  workflow_dispatch:
  roles: [admin, maintainer, write]

engine:
  id: copilot
  model: claude-sonnet-4.6

timeout-minutes: 25

permissions:
  contents: read
  issues: read
  pull-requests: read

# `steps:` runs OUTSIDE the firewall sandbox before the agent starts.
# We use lychee here because the agent's bash sandbox can't reach arbitrary
# external URLs — link checking inherently hits domains we can't pre-list.
# The agent only sees lychee's JSON report and reasons about fixes.
steps:
  - name: Run lychee link check
    id: lychee
    uses: lycheeverse/lychee-action@82202e5e9c2f4ef1a55a3d02563e1cb6041e5332 # v2.4.1
    with:
      args: >-
        --no-progress
        --max-concurrency 16
        --timeout 20
        --max-retries 1
        --accept 200..=299,403,429
        --exclude-mail
        --exclude-loopback
        --exclude '^(mailto|tel|file):'
        --format json
        --output /tmp/lychee-report.json
        './**/*.md'
      fail: false
      jobSummary: true
    env:
      GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}

  - name: Stage lychee report for agent
    run: |
      mkdir -p /tmp/gh-aw
      cp /tmp/lychee-report.json /tmp/gh-aw/lychee-report.json
      echo "lychee report ready ($(wc -c < /tmp/gh-aw/lychee-report.json) bytes)"

network:
  allowed:
    - defaults
    - github

tools:
  edit:
  bash: ["cat", "jq", "grep", "find", "awk", "sed", "head", "tail", "wc"]

safe-outputs:
  create-pull-request:
    title-prefix: "[Maintenance] Fix broken links"
    labels: [documentation, automation]
    draft: true
    fallback-as-issue: true   # Microsoft org may block PR creation by Actions.
  create-issue:
    title-prefix: "[Maintenance] Broken links needing review"
    labels: [documentation, needs-triage]
    max: 1
---

# Documentation Link Checker

A link checker (`lychee`) has already validated every URL in `**/*.md` from a regular GitHub Actions step **outside** the AI sandbox — so the network is no longer your problem. Your job is to read its report and propose only high-confidence fixes.

The report is at `/tmp/gh-aw/lychee-report.json`. It is the source of truth for which links are broken; do not re-check URLs yourself.

## Phase 1: Read the report

1. Load `/tmp/gh-aw/lychee-report.json`. The schema is roughly:
   ```json
   { "success_map": { "<file>": [ { "url": "...", "status": { ... } } ] },
     "error_map":   { "<file>": [ { "url": "...", "status": { ... } } ] } }
   ```
2. Use `cat` and `jq` to extract every entry in `error_map` (these are the broken links).
3. Print a quick count by status code so the run log is useful even if nothing else is.

## Phase 2: Triage into three buckets

For each broken link, decide which bucket it belongs in.

- **Auto-fix:** You can name a replacement URL with high confidence based on documentation knowledge — for example, a Microsoft Learn page that moved under a new path, or a GitHub repo that was renamed. The replacement must be a well-known canonical URL. **Do not invent URLs.** If you are guessing, it belongs in "Needs review".
- **Needs review:** The link is broken but the right replacement isn't obvious, or multiple candidates exist, or the status was `403`/`429` (could be CI-blocking, not actually dead).
- **Skip:** Transient errors, or links inside `node_modules/`, build outputs, or vendored content.

## Phase 3: Execute

1. For **Auto-fix** items only, edit the markdown files to swap **only the URL**. Preserve link text, prose, indentation, and markdown formatting exactly. Never touch surrounding sentences.
2. Open a draft pull request via the `create-pull-request` safe output. The body must contain:
   - Total links scanned, total broken (from the lychee report)
   - **Auto-fixed** table: file, old URL → new URL, reason
   - **Needs review** table: file, URL, status code, your best guess (or "no clear replacement")
   - Skipped count
3. If you have **nothing** to auto-fix (zero high-confidence changes), call `create-issue` instead of opening an empty PR.
4. If the org blocks Actions-created PRs, `fallback-as-issue: true` converts the PR into an issue automatically — no extra work needed.

## Guardrails

- **URL swaps only.** Never modify prose, headings, code blocks, or formatting.
- **Never invent replacements.** If you can't cite the new canonical URL from documentation you actually know, the item belongs in "Needs review".
- **Never touch** `CONSTITUTION.md`, `.github/copilot-instructions.md`, or anything under `.github/aw/`.
- **Never alter** more than 20 files in a single PR. If you'd exceed that, group fixes by domain and only ship the most confident batch; flag the rest for review.
