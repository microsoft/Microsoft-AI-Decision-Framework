---
engine:
  id: copilot
  version: latest
on:
  schedule: weekly
  workflow_dispatch:

permissions:
  contents: read
  issues: read
  pull-requests: read

safe-outputs:
  create-pull-request:
    title-prefix: "[Maintenance] Fix broken links"
    labels: [documentation, automation]

strict: false

tools:
  github:
    toolsets: [repos, pull_requests]
  edit:
  bash: ["curl", "grep", "find"]
  web-fetch:

network:
  allowed: ["*"]
---

# Documentation Link Checker

Your task is to ensure our documentation links are healthy by orchestrating a structured TaskOps workflow that finds, plans, and safely patches broken links.

## Phase 1: Research

1. Search the repository to discover all markdown (`.md`) files in our structure, particularly `docs/` and `README.md`.
2. Extract URLs (both internal and external links) from the markdown content. You can leverage the workspace and bash tools for this.
3. Validate each URL (e.g. returns a 404/403/500 error or does not resolve).

## Phase 2: Plan

1. For any broken link identified, search for a valid reliable replacement via web searches.
2. Group the findings into a clear list of what can be safely corrected, and what needs human intervention.

## Phase 3: Execute (DailyOps)

1. Use your file editing capabilities to patch the reliable replacement URLs directly into the markdown files.
2. If you find a broken link but cannot confidently find a reliable replacement, do not change it.
3. Finish your work by formally invoking the safe output to create a pull request containing all updated files. Provide a descriptive summary outlining the failed links, the resolved links, and any you skipped.
4. Respect our documentation's established tone and NEVER alter the surrounding conversational content or markdown formatting.
