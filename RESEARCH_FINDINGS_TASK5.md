# Research Findings: Task 5 - Business Applications (Build 2025 & Framework Impact)

**Source:** Microsoft Build 2025 Book of News (May 2025) & Power Platform 2025 Release Wave 2 Plans.
**Focus:** Framework Impact Analysis (Architecture, Decision Making, Teaching).

## 1. Executive Summary: The "Agentic" Shift

The Build 2025 announcements mark a fundamental shift from "Copilot as an Assistant" to "Agents as a Team." The introduction of **Agent2Agent (A2A)** protocols and **Model Context Protocol (MCP)** support fundamentally changes the architecture of Microsoft AI solutions.

**Key Architectural Shifts:**
1.  **Decentralized Orchestration:** Agents can now talk to agents (A2A) without a central "brain" script, challenging the traditional "Hub and Spoke" orchestration model.
2.  **Standardized Connectivity:** MCP replaces bespoke connector logic with a universal protocol, making Dynamics 365 and Logic Apps "Servers" that any agent can query.
3.  **AI-Assisted Architecture:** Power Apps "Plan Designer" moves AI from *generating code* to *generating architecture* (data models, roles, flows), lowering the "Feasibility" barrier in the BXT framework.

---

## 2. Framework Impact Analysis

### A. Impact on Capability Model (The "What")

| Layer | Feature | Impact Description |
| :--- | :--- | :--- |
| **Layer 2 (Extensibility)** | **MCP Support** | **Major Shift.** Extensibility is no longer just "Plugins" or "Graph Connectors." It is now **MCP Servers**. Dynamics 365 and Logic Apps expose themselves as MCP servers, allowing agents to "read" them as standardized context. |
| **Layer 3 (Development)** | **Agent2Agent (A2A)** | **New Capability.** Copilot Studio agents can now be published as "skills" that *other* agents can call. This blurs the line between "Bot" and "Skill." |
| **Layer 3 (Development)** | **Plan Designer** | **Accelerator.** Power Apps Plan Designer uses AI to generate the *solution structure* (Dataverse tables, security roles), effectively automating the "Solution Architect" role for Layer 3 builds. |
| **Layer 4 (Infrastructure)** | **Agent Service** | **Consolidation.** Azure AI Agent Service (GA) becomes the managed runtime for all pro-code agents, unifying the hosting model for Foundry and custom code. |

### B. Impact on Decision Framework (The "How")

The **BXT Framework** and **9 Critical Questions** must evolve to account for these new capabilities.

#### 1. BXT Phase: Feasibility (Technology)
*   **Old Thinking:** "Do we have the skills to design a complex Dataverse schema?"
*   **New Thinking (Plan Designer):** "Can we use Plan Designer to draft the schema and just *review* it?"
*   **Impact:** Drastically reduces the "Feasibility" barrier for complex business apps.

#### 2. Question 4: Orchestration Complexity
*   **Old Decision:** "Simple Q&A" vs "Deterministic Workflow (Logic Apps)."
*   **New Decision:**
    *   **Centralized:** Logic Apps / Agent Service (Standard workflow).
    *   **Decentralized:** Agent2Agent (A2A). Do we need agents to collaborate autonomously?
*   **Impact:** Adds a third orchestration pattern: **Collaborative/Mesh**.

#### 3. Question 5: Compliance & Trust Boundary
*   **New Consideration:** With A2A, data flows *between* agents. Governance must now track "Agent-to-Agent" trust, not just "User-to-Agent."
*   **Impact:** Security reviews must assess the *chain* of agents, not just the single endpoint.

### C. Teaching Implications (The "Mindset")

We must stop teaching "Connectors" as the only way to integrate. We must start teaching **"Context Protocols" (MCP)**.

*   **Shift 1:** From "Building an API wrapper" to "Exposing an MCP Server."
*   **Shift 2:** From "Designing a Chatbot" to "Designing an Agent Team" (A2A).
*   **Shift 3:** From "Writing Code" to "Reviewing Plans" (Plan Designer).

---

## 3. Detailed Feature Analysis (Build 2025)

### 1. Power Apps Plan Designer (GA)
*   **What it is:** An AI agent inside Power Apps Studio that takes a business problem description and generates a full solution plan: Dataverse tables, relationships, sample data, and app structure.
*   **Framework Role:** **Layer 3 Accelerator.** It automates the "boring" parts of app creation.
*   **Decision Factor:** Use when "Time to Market" is critical and domain expertise is high, but technical architecture skills are low.

### 2. Agent2Agent (A2A) Protocol (Preview)
*   **What it is:** A protocol allowing Copilot Studio agents to discover and invoke other agents.
*   **Framework Role:** **Layer 3 Orchestration.** Enables "Mesh" architectures.
*   **Decision Factor:** Use when you have distinct domain agents (e.g., "HR Agent," "IT Agent") that need to collaborate without a human routing the chat.

### 3. Model Context Protocol (MCP) Support
*   **What it is:** Support for the open standard MCP, allowing agents to connect to data sources (like Dynamics 365) as "Servers."
*   **Framework Role:** **Layer 2 & 4 Connectivity.** Standardizes how agents "see" the world.
*   **Decision Factor:** Use MCP-compatible tools when building agents that need to consume complex, unstructured context from multiple systems.

### 4. Agent Feed (Early Access)
*   **What it is:** A new UI pattern in Power Apps that shows a "feed" of agent activities, insights, and "human-in-the-loop" requests.
*   **Framework Role:** **Layer 1/3 Experience.** Moves beyond "Chat" to "Feed-based" interaction.
*   **Decision Factor:** Use for "Long-running" or "Asynchronous" agent tasks where the user doesn't need to stare at a chat window.

---

## 4. "Ignited" Context (2025 Release Wave 2)

*Note: The user referenced "Ignited announcements." While the provided source was Build 2025 (May), the "2025 Release Wave 2" (Oct 2025 - Mar 2026) aligns with the Ignite timeframe.*

*   **Automation Center (Preview):** A centralized dashboard for monitoring all agent and bot activity across the tenant. (Governance Impact).
*   **Process Mining + Agents:** Agents can now "read" process mining maps to identify automation opportunities autonomously. (Proactive Capability).

---

## 5. Recommendations for Documentation Updates

1.  **Update `capability-model.md`:** Add **Agent Service** to Layer 3 and **MCP** to Layer 2/4.
2.  **Update `decision-framework.md`:** Update **Question 4 (Orchestration)** to include A2A/Mesh patterns.
3.  **Update `technologies.md`:** Add **Plan Designer** and **Agent Feed** entries.
4.  **New Diagram:** Create a "Collaborative Agent" (A2A) diagram in `visual-framework.md` to show how decentralized orchestration works compared to Logic Apps.

---
**Next Steps:**
1.  Review this analysis.
2.  Update the core documentation files (`capability-model.md`, etc.) to reflect these architectural shifts.
