# Research Findings - Task 8: Migration, Upgrade Paths & Interoperability

**Source:** Microsoft Build 2025 Book of News
**Date:** May 2025
**Focus:** Migration paths, shared resources, and interoperability between Low-Code (Copilot Studio) and Pro-Code (Azure AI Foundry/Agent Service).

## 1. The "Progressive Enhancement" Upgrade Path

The "cliff" between low-code and pro-code is being replaced by a "bridge" or "progressive enhancement" model. You no longer have to rewrite a Copilot Studio agent to add pro-code capabilities; you inject them.

### Key Mechanisms:
1.  **BYO Models (Bring Your Own Model):**
    *   **Capability:** Copilot Studio makers can now select from 1,900+ models in the Azure AI Foundry Model Catalog (including fine-tuned models) to power their agents.
    *   **Status:** Preview.
    *   **Impact:** Allows a low-code agent to use a specialized, high-performance, or domain-specific model without leaving the low-code environment.

2.  **Agent Handoff & Orchestration:**
    *   **Capability:** Copilot Studio can "hand off" tasks to multi-agent systems orchestrated by **Azure AI Foundry Agent Service**.
    *   **Status:** Preview.
    *   **Impact:** A Copilot Studio agent can act as the "front door" or "tier 1 support," delegating complex, multi-step reasoning tasks to a pro-code agent swarm running in Azure, then receiving the result back.

3.  **Shared Knowledge (RAG):**
    *   **Capability:** Copilot Studio can consume **Azure AI Search** vectorized indices directly.
    *   **Status:** Generally Available.
    *   **Impact:** Knowledge bases don't need to be migrated. The same index powering a custom Python RAG app can be connected to a Copilot Studio agent.

## 2. Interoperability Standards

Microsoft is moving towards a standardized "Agentic Web" where agents from different platforms can collaborate.

### Protocols:
1.  **Agent2Agent (A2A) Protocol:**
    *   **Description:** Enables secure, peer-to-peer communication between agents without centralized intermediaries.
    *   **Support:** Native support in **Copilot Studio**, **Azure AI Foundry**, and **Teams**.
    *   **Status:** Preview.
    *   **Use Case:** A Supply Chain agent (Pro-code/Foundry) can autonomously message a Procurement agent (Low-code/Copilot Studio) to check inventory.

2.  **Model Context Protocol (MCP):**
    *   **Description:** Standardized way for agents to access data and tools.
    *   **Support:** First-party support across Copilot Studio, Dynamics 365, Azure AI Foundry, and GitHub.
    *   **Status:** GA (Protocol support), Preview (Specific implementations).
    *   **Impact:** "Write once, run anywhere" for tools. A tool built for a Foundry agent can be exposed to a Copilot Studio agent via MCP.

## 3. Migration Scenarios

| From | To | Mechanism | Status |
| :--- | :--- | :--- | :--- |
| **Copilot Studio (Standard)** | **Copilot Studio (Enhanced)** | **BYO Model:** Swap the default model for a specialized Foundry model. | Preview |
| **Copilot Studio** | **Azure AI Agent Service** | **Handoff:** Keep the CS agent as the UI/Orchestrator, delegate sub-tasks to Agent Service. | Preview |
| **Custom Python Agent** | **M365 Ecosystem** | **M365 Agents SDK:** Wrap the custom agent to publish to Teams/Outlook. | GA |
| **Siloed Data** | **Shared Knowledge** | **Azure AI Search:** Index data once, consume in both CS and Custom Apps. | GA |

## 4. Tooling Updates

*   **Azure AI Foundry Agent Service:** Now **Generally Available**. Supports Semantic Kernel and AutoGen concepts in a unified runtime.
*   **M365 Agents Toolkit for Visual Studio:** Integrates M365 Agents SDK and Azure AI Foundry. **Generally Available**.
*   **Microsoft Entra Agent ID:** Assigns a unique identity to agents for security and governance. **Preview**.

## 5. Strategic Takeaway for Decision Framework

The decision is no longer binary ("Low Code" OR "Pro Code"). It is now a spectrum of **Composition**:
*   **Start** with Copilot Studio for speed and M365 integration.
*   **Enhance** with BYO Models for better reasoning.
*   **Extend** with Azure AI Agent Service for complex orchestration.
*   **Connect** via A2A and MCP for ecosystem collaboration.
