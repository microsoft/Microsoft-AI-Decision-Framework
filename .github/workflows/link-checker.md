---
description: "Weekly broken-link sweep across docs/ and README.md with a PR (fallback issue) of safe fixes."

on:
  schedule: weekly on monday
  workflow_dispatch:
  roles: [admin, maintainer, write]

engine:
  id: copilot
  model: claude-sonnet-4.6

timeout-minutes: 20

permissions:
  contents: read
  issues: read
  pull-requests: read

network:
  allowed:
    - defaults
    - github
    # Broad allowlist required because link checking validates arbitrary external URLs.
    # Keep this scoped to docs domains we actually link to; expand as needed.
    - "learn.microsoft.com"
    - "azure.microsoft.com"
    - "techcommunity.microsoft.com"
    - "microsoft.github.io"
    - "platform.openai.com"
    - "www.anthropic.com"
    - "openai.com"
    - "ai.google.dev"

tools:
  github:
    toolsets: [default]
  edit:
  bash: ["curl", "grep", "find", "awk", "sed"]
  web-fetch:

safe-outputs:
  create-pull-request:
    title-prefix: "[Maintenance] Fix broken links"
    labels: [documentation, automation]
    draft: true
    fallback-as-issue: true   # Microsoft org may block PR creation by Actions; fall back to an issue.
  create-issue:
    title-prefix: "[Maintenance] Broken links needing review"
    labels: [documentation, needs-triage]
    max: 1
---

# Documentation Link Checker

You are a careful documentation maintainer. Find broken links in the docs, propose only high-confidence replacements, and surface the rest for human review. Respect the project's storytelling voice — never rewrite prose, only swap URLs.

## Phase 1: Discover

1. Enumerate all markdown files in the repo, focused on `README.md` and `docs/**/*.md`.
2. Extract every URL (markdown links `[text](url)` and bare URLs). Skip `mailto:`, anchors, and intra-repo relative links unless the target file is missing.
3. Deduplicate the URL list.

## Phase 2: Validate

1. For each external URL, run `curl -sIL -o /dev/null -w "%{http_code} %{url_effective}\n" --max-time 15 <url>` and capture the final status code after redirects.
2. Treat as broken: `404`, `410`, `5xx`, and connection failures. Treat `403` as suspicious (some sites block CI user-agents) — flag for human review, don't auto-patch.
3. For relative links, verify the target file exists in the repo.

## Phase 3: Plan

Group findings into three buckets:

- **Auto-fix (high confidence):** Microsoft Learn page moved to a new canonical URL, a `github.com` repo renamed with an obvious redirect target, or a clearly versioned doc path. Confirm the replacement returns `200` before proposing it.
- **Needs review:** `403`, ambiguous redirects, or any case where multiple plausible replacements exist.
- **Skip:** Transient `5xx` on one attempt — retry once; if it still fails, move to "Needs review".

## Phase 4: Execute

1. For Auto-fix items, edit the markdown files to swap only the URL. Preserve link text, surrounding prose, and markdown formatting exactly.
2. Open a draft pull request via the `create-pull-request` safe output summarizing:
   - Total links scanned
   - Auto-fixed (table: file, old URL, new URL, reason)
   - Needs review (table: file, URL, status code, suggested action)
   - Skipped
3. If the org blocks Actions-created PRs, the safe output falls back to an issue automatically — no extra work needed.
4. If only "Needs review" items exist (nothing safe to auto-fix), use `create-issue` instead of opening an empty PR.

## Guardrails

- **Never** modify surrounding prose, headings, or formatting. URL swaps only.
- **Never** invent replacement URLs. If you can't verify a candidate returns `200`, mark it "Needs review".
- **Never** touch `CONSTITUTION.md` or `.github/copilot-instructions.md` link policies — those are governed separately.
