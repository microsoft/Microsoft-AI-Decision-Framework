# Research Findings - Task 6: Edge & Windows AI (Build 2025)

**Status:** Complete
**Date:** November 2025
**Focus:** Windows AI Foundry, Edge AI APIs, Phi-4-mini, and the "Hybrid Loop" architecture.

---

## 1. Executive Summary

Build 2025 introduced significant advancements in **Local AI**, formalizing the "Hybrid Loop" pattern where workloads dynamically shift between the cloud (Azure AI Foundry) and the edge (Windows AI Foundry). The introduction of **Phi-4-mini** (3.8B parameters) and standardized **Edge AI APIs** in the browser enables zero-latency, privacy-first scenarios that were previously impossible or required heavy custom engineering.

## 2. Key Announcements & Validation

### 2.1 Windows AI Foundry (formerly Windows Copilot Runtime)
*   **Concept:** A unified platform that abstracts hardware acceleration (NPU, GPU, CPU) for local inference.
*   **Key Component:** **Foundry Local**, allowing developers to run open-source models (like Phi-4-mini, Llama 3) directly on Windows devices without managing ONNX Runtime complexities manually.
*   **Status:** **Preview**.
*   **Impact:** Moves "Local AI" from a niche optimization to a standard architectural choice in Layer 4 (Infrastructure).

### 2.2 Edge AI APIs & Phi-4-mini
*   **Concept:** Standardized JavaScript APIs (`window.ai.prompt`, `window.ai.summarize`) built into Microsoft Edge.
*   **Model:** Powered by **Phi-4-mini**, a 3.8B parameter Small Language Model (SLM) embedded in the browser/OS.
*   **Capabilities:** Summarization, translation, and text generation with **zero latency** and **zero server cost**.
*   **Status:** **Experimental / Developer Preview**.
*   **Impact:** Enables "Zero Marginal Cost" AI for high-frequency, low-complexity tasks.

### 2.3 Model Context Protocol (MCP) on Windows
*   **Concept:** Windows acts as a local MCP host, allowing agents (both local and cloud) to query local system resources (File System, WSL, PowerShell) via standardized MCP tools.
*   **Status:** **Preview**.
*   **Impact:** Bridges the gap between cloud agents and local desktop context.

---

## 3. Framework Impact Analysis

### 3.1 Decision Framework (`docs/decision-framework.md`)
*   **Question 6 (Scale & Cost):** The "Cost" decision now has a fourth option: **"Zero Marginal Cost (Local)"**. This is a critical trade-off against the "Variable Spend" of cloud tokens.
*   **Trade-off:** Local = Zero Cost + Privacy, but limited reasoning power (SLM vs LLM) and hardware dependency.

### 3.2 Capability Model (`docs/capability-model.md`)
*   **Layer 4 (Infrastructure):** "Windows AI Foundry / Edge AI" is now a distinct infrastructure component alongside Azure OpenAI and Fabric. It provides the *runtime* for local agents.

### 3.3 Scenarios (`docs/scenarios.md`)
*   **New Scenario:** **"Privacy-First / Offline Field Agent"**.
    *   **Problem:** Field workers with sensitive IP and no internet.
    *   **Solution:** Windows App + Windows AI Foundry + Phi-4-mini.
    *   **Why:** Satisfies strict data residency (device-only) and connectivity constraints.

### 3.4 Visual Framework (`docs/visual-framework.md`)
*   **Architecture Decision:** The "API/Headless" path now branches to **"Local/Edge"** hosting, leading to Windows AI Foundry.

---

## 4. Recommendations for Documentation Updates

| Document | Section | Action | Status |
| :--- | :--- | :--- | :--- |
| `docs/technologies.md` | New Section | Add "Windows AI Foundry" and "Edge AI & Phi-4-mini". | **Done** |
| `docs/decision-framework.md` | Q6 (Cost) | Add "Zero marginal cost (Local)" option. | **Done** |
| `docs/capability-model.md` | Layer 4 | Add "Windows AI Foundry / Edge AI" row. | **Done** |
| `docs/scenarios.md` | New Scenario | Add Scenario 6: Privacy-First Field Agent. | **Done** |
| `docs/visual-framework.md` | Decision Tree | Add branch for Local/Edge hosting. | **Done** |

---

## 5. References

*   [Windows AI Foundry Documentation](https://learn.microsoft.com/en-us/windows/ai/)
*   [Edge AI APIs Explainer](https://learn.microsoft.com/en-us/microsoft-edge/ai-apis)
*   [Phi-4-mini Model Card](https://azure.microsoft.com/en-us/products/phi)
