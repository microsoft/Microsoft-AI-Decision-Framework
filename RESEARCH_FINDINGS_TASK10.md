# Research Findings - Task 10: Developer Tools (GitHub & VS Code)

**Source:** Microsoft Build 2025 Book of News (May 2025)
**Focus:** GitHub Copilot, GitHub Models, Agentic DevOps, VS Code

## 1. Agentic DevOps & GitHub Copilot

### GitHub Copilot Coding Agent (Preview)
*   **Concept:** Evolution from "in-editor assistant" to "autonomous, asynchronous developer agent".
*   **Capabilities:**
    *   Integrated directly into the GitHub platform (web).
    *   Can be assigned tasks: refactoring, improving test coverage, fixing defects, implementing features.
    *   **Autonomous Loop:** Can test, iterate, and refine code independently.
    *   **Collaboration:** Can collaborate with other agents across the software lifecycle.
*   **Key Distinction:** "Copilot is an AI teammate, not just a tool."

### GitHub Copilot Agent Mode (Preview)
*   **Concept:** "Peer programmer" mode within the IDE.
*   **Capabilities:**
    *   Builds features, refactors legacy code, self-heals when things break.
    *   **Multi-file editing:** Can analyze codebase and edit across multiple files.
    *   **Action-oriented:** Runs tests, fixes errors, suggests terminal commands.
    *   **Availability:** VS Code, Visual Studio. Expanding to JetBrains, Eclipse, Xcode.

### App Modernization (Preview)
*   **Target:** Java and .NET applications.
*   **Capabilities:**
    *   **Assessment:** Code assessment for modernization.
    *   **Remediation:** Remediates code, configurations, and dependencies across thousands of files.
    *   **Upgrade Plans:** Autonomously generates and executes upgrade plans (e.g., .NET version upgrades).
    *   **Scale:** Reduces effort from days/months to hours.

### Azure SRE Agent (Preview)
*   **Role:** Site Reliability Engineering agent.
*   **Capabilities:**
    *   **Monitoring:** Continuously monitors Azure apps (Kubernetes, PaaS, Serverless, Databases).
    *   **Response:** Automatically responds to production alerts.
    *   **RCA:** Autonomously mitigates issues and determines Root Cause Analysis.
    *   **Integration:** Works with GitHub Copilot to assign issues to agents in GitHub for resolution.

## 2. GitHub Models (Preview)
*   **Concept:** Models as a Service (MaaS) integrated directly into GitHub.
*   **Capabilities:**
    *   **Hub:** Single hub to explore, test, and compare models (OpenAI, Meta, Cohere, Microsoft, Mistral).
    *   **Workflow Integration:** Embedded in PRs, commits, code reviews, CI/CD.
    *   **Prompt Engineering:** Create, store, evaluate, and share prompts.
    *   **Evaluation:** Automated model evaluations to select best model for cost/performance.
    *   **Governance:** Organization-level model controls.

## 3. VS Code & Developer Experience

### Open-Sourcing GitHub Copilot Chat (Rolling out)
*   **Announcement:** AI capabilities from GitHub Copilot extensions for VS Code are moving to the open-source VS Code repository.
*   **Goal:** Transparency and community-driven innovation.

### PostgreSQL Extension for VS Code (Preview)
*   **Features:**
    *   **Copilot Integration:** Natural language to SQL, query assistance.
    *   **Management:** Connection manager, Object explorer, Query editor, Results viewer.
    *   **Context:** Supports Azure, local Docker, and on-premises PostgreSQL.

### Windows Developer Tools
*   **WinGet Configuration:** GA Summer 2025. Setup dev environments with a single command.
*   **WSL:** Now fully open source (GA).
*   **"Edit" Editor:** New command-line text editor for Windows (Insider Summer 2025).

## 4. Impact Analysis for Framework

### Updates to `docs/technologies.md`
*   **GitHub Copilot:** Split into "Copilot (Assistant)" and "Copilot Coding Agent (Autonomous)".
*   **GitHub Models:** Add as a new technology under "Development Platforms" (Layer 3) or "AI Services" (Layer 4).
*   **VS Code:** Update with "Agent Mode" and PostgreSQL extension.

### Updates to `docs/scenarios.md`
*   **New Scenario:** "Agentic DevOps" - End-to-end lifecycle management (Code -> Test -> Deploy -> Monitor -> Fix).
*   **New Scenario:** "App Modernization" - Mass refactoring of legacy Java/.NET apps.

### Updates to `docs/implementation-patterns.md`
*   **Model Selection:** Update to include GitHub Models as a selection/evaluation platform.
*   **Agentic Workflow:** The "SRE Agent -> GitHub Issue -> Coding Agent -> PR" flow is a perfect example of the "Agent Workflows" pattern.
