# Additional Research & Official Decision Frameworks

This document serves as a curated index of **official Microsoft decision frameworks, architecture guides, and strategic methodologies**. Use these resources to validate architectural decisions, understand trade-offs, and navigate the complex AI landscape.

> **Note:** All links point to official Microsoft Learn documentation. Always verify the "Last Updated" date on the source to ensure relevance.

---

## 1. High-Level Strategy & Decision Trees

### [Create your AI strategy](https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/scenarios/ai/strategy)

**When to use:** At the very beginning of a project (Phase 1: Business Impact Assessment).

**Why:** It defines the three primary consumption patterns (SaaS, PaaS, IaaS) and maps them to organizational maturity.

**Key Takeaways:**

* **SaaS (Copilot):** Use for immediate productivity (Individual/Workforce).
* **PaaS (Copilot Studio / AI Foundry):** Use for custom business processes and "extensibility".
* **IaaS (VMs/Containers):** Use only when you need absolute control over the model serving infrastructure (rare for most enterprises).
* **Decision Tree:** Explicitly maps "Enhance productivity" → M365 Copilot vs. "Automate business functionality" → Copilot Studio.

### [Choose the right AI model](https://learn.microsoft.com/en-us/azure/architecture/ai-ml/guide/choose-ai-model)

**When to use:** When selecting a specific Foundation Model (FM) or Small Language Model (SLM) in Azure AI Foundry.

**Why:** Prevents "model hype" by forcing a selection based on **Task Fit**, **Cost**, and **Availability**.

**Key Takeaways:**

* **Task Fit:** Does the model actually support the modality (Text, Image, Audio)?
* **Cost:** Serverless (Pay-as-you-go) vs. Provisioned Throughput (Fixed cost).
* **Non-criteria:** Explicitly advises *against* choosing based on "Cultural popularity" or "Publisher hype."

---

## 2. Platform Selection Guides ("When to pick what")

### [Choose between M365 Copilot and Copilot Studio](https://learn.microsoft.com/en-us/microsoft-365-copilot/extensibility/copilot-studio-experience)

**When to use:** When deciding between "Extending M365 Copilot" (Layer 2) and "Building a Custom Agent" (Layer 3).

**Why:** This is the most common confusion point. This guide clarifies the "Audience" and "Governance" distinctions.

**Key Takeaways:**

* **M365 Copilot:** For *Information Workers*, *Individuals*, and *Lightweight Q&A*.
* **Copilot Studio:** For *External Customers*, *Departmental Workflows*, *Complex Orchestration*, and *IT Help Desk*.

### [Select Azure PaaS solutions for AI](https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/scenarios/ai/platform/resource-selection)

**When to use:** When you've decided to build "Custom" (Layer 4) and need to pick specific Azure services.

**Why:** Distinguishes between **Generative** (AI Foundry, OpenAI) and **Non-generative** (Document Intelligence, Vision, Speech) workloads.

**Key Takeaways:**

* **Azure AI Foundry:** The unified platform for *building* GenAI apps.
* **Azure AI Services:** The "pre-built" APIs for specific cognitive tasks (Vision, Speech).
* **Azure Machine Learning:** For *training* your own models (requires data science expertise).

---

## 3. Architecture & Design Methodology

### [Design methodology for AI workloads](https://learn.microsoft.com/en-us/azure/well-architected/ai/design-methodology)

**When to use:** During the "Feasibility" and "Architecture" phases.

**Why:** Moves beyond "picking a tool" to "designing a system."

**Key Takeaways:**

* **Experimental Mindset:** Design for continuous adjustment; AI is probabilistic, not deterministic.
* **Inner/Outer Loops:** Distinguish between "Model Refinement" (Inner) and "Production Monitoring" (Outer).

### [Application design for AI workloads](https://learn.microsoft.com/en-us/azure/well-architected/ai/application-design)

**When to use:** When writing the technical specification.

**Why:** Covers the "Edge Cases" that break projects (Latency, Token Limits, Security).

**Key Takeaways:**

* **Start with Business Outcomes:** Don't start with "I want GPT-4." Start with "I want to reduce support ticket time."
* **Design for Observability:** You must track "Accuracy Drift" and "Inference Latency" from Day 1.
* **Externalize Prompts:** Treat prompts as configuration (code), not magic strings.

---

## 4. Recent Updates (Post-Ignite / Late 2025)

### [Fabric Data Agents & Copilot Studio Integration](https://learn.microsoft.com/en-us/fabric/data-science/data-agent-microsoft-copilot-studio)

**Status:** Preview (as of late 2025).

**Context:** Allows "Chat with your Data" (Fabric) to be exposed as an "Agent" in Copilot Studio.

**Why it matters:** Bridges the gap between "Analytics" (Fabric) and "Action" (Copilot Studio).

### [Azure AI Foundry (formerly AI Studio)](https://learn.microsoft.com/en-us/azure/ai-foundry/what-is-azure-ai-foundry)

**Context:** The unified branding for all "Build your own AI" experiences.

**Why it matters:** If you see references to "Azure AI Studio," map them mentally to "Azure AI Foundry."

---

## 5. The "Book of News" & Announcements

* **Search Query:** "Microsoft Ignite 2025 Book of News"
* **Usage:** Use the Book of News to find the *exact* marketing name for a new feature, then immediately search Microsoft Learn for the *technical* documentation to validate it.
* **Warning:** The Book of News is marketing material. It announces *intent*. The Learn docs confirm *reality*.
