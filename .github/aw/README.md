# GitHub Agentic Workflows: Setup Notes

This repo uses [GitHub Agentic Workflows (`gh-aw`)](https://github.github.com/gh-aw/). Workflows live in `.github/workflows/*.md`; each compiles to a `*.lock.yml` that GitHub Actions actually runs.

## 1. The `COPILOT_GITHUB_TOKEN` SSO gotcha (Microsoft org)

The Copilot engine requires a repository secret named `COPILOT_GITHUB_TOKEN`. **It must be a fine-grained Personal Access Token whose Resource Owner is your personal account, not the Microsoft organization.** GitHub Apps, OAuth tokens, and classic PATs are not supported for this secret.

Why org-owned PATs fail here:

- `Copilot Requests` is an **account-level** permission, not an org-level one. Org-owned fine-grained PATs don't expose it.
- Routing through Microsoft SSO adds nothing because the AI inference call is billed against the **token owner's** Copilot subscription, not the org's seat.

### Create the right token

1. Open this pre-filled link (already scoped correctly):
   <https://github.com/settings/personal-access-tokens/new?name=COPILOT_GITHUB_TOKEN&description=GitHub+Agentic+Workflows+-+Copilot+engine+authentication&user_copilot_requests=read>
2. Verify:
   - **Resource owner**: your personal GitHub account (e.g. `chrismckee1`), **not** an org.
   - **Account permissions → Copilot Requests**: `Read`.
   - No repository permissions are needed for this secret.
3. Generate, copy the token.
4. Add it to this repo:

   ```powershell
   gh aw secrets set COPILOT_GITHUB_TOKEN --value "<paste-token>"
   ```

   Or: repo **Settings → Secrets and variables → Actions → New repository secret**.

Your personal account must have an active Copilot subscription. AI usage is billed against that account's monthly premium-request quota.

### When you actually do need a Microsoft-org token

Only needed for *additional* GitHub auth (cross-repo reads, project updates, triggering CI on agent-created PRs). For those, use a **GitHub App** scoped to the repos you need (`tools.github.github-app:` / `safe-outputs.github-app:`). It avoids the SSO dance entirely and mints short-lived tokens per run. See [Authentication](https://github.github.com/gh-aw/reference/auth/#using-a-github-app-for-authentication).

## 2. Keep the runtime current, and never let Dependabot bump it alone

The compiler and the runtime are one unit. Every `*.lock.yml` records the compiler that produced it (`compiler_version` in its `gh-aw-metadata` header) and pins `github/gh-aw-actions/setup` to that same release. At activation, the setup action recomputes the workflow's frontmatter hash and refuses to start if it disagrees with the hash stored in the lock file. **Bumping the setup action without recompiling breaks the workflow** with `E009 CONFIG_HASH_MISMATCH`, which gh-aw reports as a "stale lock file" issue.

That is exactly what broke the link checker from August to September 2026: the lock was compiled with v0.71.5, Dependabot bumped the setup action to v0.86.2 on August 18 (#64) and then to v0.88.0 (#77) and v0.89.0 (#82), and every weekly run from August 24 on failed at activation (#67, #71, #74, #78, #83).

`.github/dependabot.yml` now ignores `github/gh-aw-actions/*`, the same compiler-managed rule gh-aw writes itself. Upgrade the compiler and runtime together instead:

```powershell
gh extension install github/gh-aw   # one-time
gh extension upgrade gh-aw          # move the local compiler to the latest release
gh aw compile --dependabot          # regenerate *.lock.yml and actions-lock.json; keep the Dependabot ignore rule
gh aw validate                      # confirm every workflow compiles cleanly
```

Commit `actions-lock.json`, `.gitattributes`, and any updated `*.lock.yml` (plus `.github/dependabot.yml` if the compiler touched it) in one change. If a Dependabot PR ever proposes a `github/gh-aw-actions/setup` bump again, close it and recompile instead.

> Avoid versions `0.68.4` through `0.71.3`; upstream flagged a billing-impact bug in that range.

## 3. After editing a workflow

- **Markdown body only changed** → no recompile needed; takes effect on next run.
- **Frontmatter changed** (permissions, tools, network, safe-outputs, engine, schedule) → run `gh aw compile <workflow-name>` and commit the `.lock.yml`.

## 4. PR creation in Microsoft-managed repos

Microsoft org policy frequently blocks PR creation by `GITHUB_TOKEN`. The link-checker workflow uses `fallback-as-issue: true`, so a blocked PR automatically becomes an issue with the diff attached, and the workflow does not fail. If you want real PRs end-to-end, set a `GH_AW_CI_TRIGGER_TOKEN` secret to a fine-grained PAT with `contents: read & write` on this repo (see [Triggering CI](https://github.github.com/gh-aw/reference/triggering-ci/)).

## 5. Useful commands

```powershell
gh aw status                  # list workflows and their state
gh aw secrets bootstrap       # check which secrets are configured
gh aw logs                    # recent runs and token usage
gh aw audit <run-id>          # per-run cost / token breakdown
```
