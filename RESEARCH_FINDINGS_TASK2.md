# Research Findings: Task 2.1 (Azure AI & Foundry)

**Date:** November 24, 2025
**Source:** Microsoft Ignite 2025 Book of News (November 18-21, 2025)
**Focus:** Azure AI Foundry Agent Service, Model Router, Foundry IQ
**Philosophy:** Problem-First (Why -> How -> What)

---

## 1. Azure AI Foundry Agent Service

### The Problem
Building enterprise agents requires solving complex infrastructure problems: state management (memory), secure execution, tool orchestration, observability (tracing), and scaling. Developers often waste time building "plumbing" instead of agent logic.

### The Solution: Agent Service (GA May 2025, Major Updates Nov 2025)
A fully managed platform for building, deploying, and scaling AI agents. It abstracts the infrastructure complexity.

*   **New Capabilities (Ignite 2025 - Preview):**
    *   **Hosted Agents:** Run containerized agentic apps (code-first) on managed infrastructure without managing Kubernetes. Supports Microsoft Agent Framework, LangGraph, CrewAI.
    *   **Multi-Agent Workflows:** Coordinate specialized agents to execute multi-step business processes (visual designer or code-first API).
    *   **Memory:** Built-in state management to retain context, preferences, and history across sessions.
    *   **Agent 365 Integration:** Deploy agents directly to Microsoft 365 apps (Teams, Outlook) with enterprise governance.

### Decision Framework (The "How")
*   **When to choose:**
    *   You need a "batteries-included" platform for agents.
    *   You want to avoid managing Kubernetes or compute for agent runtimes.
    *   You need built-in enterprise security (Entra ID, VNETs) and observability.
*   **When to avoid:**
    *   You need absolute control over the LLM loop (use Semantic Kernel/LangChain directly if the managed service is too opinionated).
    *   You are building a simple "stateless" RAG bot (Azure OpenAI "On Your Data" might be sufficient).

### Impact on Documentation
*   **`docs/technologies.md`:** Add "Azure AI Foundry Agent Service" as a primary **Layer 3 (Development Platform)** technology.
*   **`docs/visual-framework.md`:** Update "Multi-Agent Orchestration" diagram to feature "Connected Agents" and "Hosted Agents".
*   **`docs/decision-framework.md`:** Update Q2 (Build Style) to include "Managed Agent Service" vs. "Self-Hosted Code".

---

## 2. Azure AI Model Router

### The Problem
"Model Selection Anxiety." Developers struggle to balance cost vs. intelligence.
*   Using GPT-4o for everything is too expensive.
*   Using GPT-4o-mini for everything fails on complex tasks.
*   Building a custom "router" (if/else logic) is brittle and hard to maintain.

### The Solution: Model Router (GA Nov 18, 2025)
A deployable endpoint that acts as a traffic controller. It analyzes the *complexity* of the prompt and routes it to the most cost-effective model that can handle it.

*   **Key Capabilities:**
    *   **Dynamic Routing:** Routes between GPT-4.1 family, GPT-5 family, gpt-oss-120b, DeepSeek-v3.1, Llama-4, and Grok 4.
    *   **Single Endpoint:** Your app talks to one URL; the router handles the backend complexity.
    *   **Routing Profiles:** Configure "Optimize for Quality" vs. "Optimize for Cost".
    *   **Performance:** Delivers up to 40% faster responses and 50% lower costs (per Ignite 2025).

### Decision Framework (The "How")
*   **When to choose:**
    *   You have a high-volume application with mixed query complexity (simple FAQs + complex reasoning).
    *   You want to reduce token costs without degrading user experience.
*   **When to avoid:**
    *   You need *guaranteed* deterministic behavior from a specific model version.
    *   Your workload is homogeneous (always simple or always complex).

### Impact on Documentation
*   **`docs/technologies.md`:** Add "Model Router" under **Layer 4 (AI Services)**.
*   **`docs/decision-framework.md`:** Add a decision point for "Model Strategy" (Static vs. Dynamic).

---

## 3. Foundry IQ (formerly Agentic Retrieval)

### The Problem
"The Compound Question Failure."
*   User asks: "Compare the pricing of Product A and Product B."
*   Classic RAG searches for "Compare pricing Product A Product B" -> Returns nothing because no single document contains the comparison.
*   Result: "I don't know."

### The Solution: Foundry IQ (Preview Nov 2025)
The next generation of RAG, offering a smarter way to connect agents with data.

*   **Key Capabilities:**
    *   **Unified Knowledge Base:** Connects to Azure data services, SharePoint, Fabric IQ, and the web.
    *   **Agentic Retrieval:** Performs query planning, iterative search, reflection, and synthesis.
    *   **Managed Service:** Fully managed knowledge system designed to ground AI agents.

### Decision Framework (The "How")
*   **When to choose:**
    *   Your users ask multi-part, comparative, or analytical questions.
    *   Your data is fragmented across many documents.
*   **When to avoid:**
    *   Latency is critical (Agentic Retrieval adds LLM processing time to the search step).
    *   Queries are simple lookups (Classic RAG is faster and cheaper).

### Impact on Documentation
*   **`docs/technologies.md`:** Update "Azure AI Search" to include "Foundry IQ".
*   **`docs/decision-framework.md`:** Update Q3 (Data Strategy) to distinguish between "Simple Retrieval" and "Foundry IQ".

---

## Summary of Updates Needed

| Technology | Layer | Status | Key Decision Factor |
| :--- | :--- | :--- | :--- |
| **Agent Service** | 3 (Platform) | GA (May '25) / Preview (Nov '25) | Managed vs. Self-Hosted Infrastructure |
| **Model Router** | 4 (Service) | GA (Nov '25) | Cost/Performance Optimization |
| **Foundry IQ** | 4 (Service) | Preview (Nov '25) | Complex/Compound Query Handling |
