# Project Constitution & Philosophy

## Research & Point of View

### What We Are Building

This repository is a **comprehensive decision engine** for Microsoft's AI portfolio. It is not just a documentation site; it is a **mental framework** designed to prevent "shiny object syndrome" by teaching a disciplined way of thinking.

### The Goal

**To teach a way of thinking.**

We aim to instill a mental framework for evaluating AI problems, rather than just providing a catalog of tools. The goal is to stop customers and architects from picking a technology (e.g., "I want an Agent") before they understand their problem. It forces a structured "Business → Experience → Technology" (BXT) flow to ensure the selected tool actually fits the requirement.

### The Point of View

* **Methodology over Memorization:** Microsoft ships new AI features weekly. Memorizing the product list is futile. This repo teaches the *logic* of how to choose, which survives product renames.
* **Problem-First Architecture:** We prioritize understanding the *problem* (use cases, edge cases, constraints) over picking a *solution*. Technology is a means to an end, not the starting point.
* **Holistic Trade-offs:** Decisions are never just technical. They must weigh budget, timeline, team skills, and governance.
* **Anti-Hype:** It is intentionally "Level 300-400" (technical/architectural). It rejects marketing fluff in favor of engineering reality (e.g., "Does this actually support VNET injection?" vs. "It's enterprise-ready").
* **Source-Backed Truth:** If it’s not in the official Microsoft Learn documentation, it doesn't exist in this framework.

---

## The Constitution (Guidelines)

To keep this repository aligned with its mission, we adhere to the following "Constitution":

### Article I: The Source-Backed Principle

#### "If you can't link it, you can't claim it."

* Every capability, feature, and limitation must be validated against official **Microsoft Learn** documentation.
* Marketing blogs are secondary; engineering docs are primary.
* **Rule:** Never assume a feature exists because of a product name (e.g., assuming "Fabric Data Agents" are autonomous orchestrators just because they are called "Agents").

### Article II: The Anti-Shoeboxing Mandate

#### "Don't force a square peg into a round hole."

* Do not twist a technology's definition to fit a user's request. If a user asks for a "multi-agent system" in Logic Apps, we must say "Logic Apps is an orchestrator, not an agent framework," rather than pretending it fits.
* **Rule:** Explicitly state what a technology *cannot* do.

### Article III: Status Transparency

#### "Preview is not Production."

* We must rigorously distinguish between **General Availability (GA)**, **Public Preview**, and **Experimental**.
* **Rule:** Every diagram and table must visually flag non-GA features (e.g., `<br/><i>Preview</i>`).

### Article IV: The Order of Operations

#### "Business before Technology."

* Content must guide users through the **BXT Framework**:
  1. **Business:** Is this viable? (ROI)
  2. **Experience:** Is this desirable? (Chat vs. API)
  3. **Technology:** Is this feasible? (Security/Skills)
* **Rule:** Don't recommend a "Solution" (Layer 3-5) without first checking if a "Consumption" (Layer 1) tool solves the problem for free.

### Article V: The Navigation Mandate

#### "Teach the map, not just the destination."

* Our goal is to teach users *how* to navigate Microsoft's changing landscape, not just give them a static answer.
* **Rule:** Always reference official decision trees and frameworks (see `ADDITIONAL_RESEARCH.md`) to ground our guidance in Microsoft's recommended paths.

### Article VI: The Immutable Intent of Core Files

#### "Respect the purpose of the document."

Certain files have a specific educational or methodological purpose that must not be diluted by product marketing or inventory lists.

* **`docs/capability-model.md` (The "What"):**
  * **Intent:** Defines *abstract capabilities* (e.g., "Consumption," "Extensibility," "Orchestration") independent of specific products.
  * **Guardrail:** Do not turn this into a product feature list. Products are only examples of capabilities, not the definition.
* **`docs/decision-framework.md` (The "How"):**
  * **Intent:** Defines the *methodology* and *mindset* for making decisions (BXT, 9 Questions).
  * **Guardrail:** Do not clutter this with technology specs. It is about the *process* of choosing, not the choices themselves.
* **`docs/evaluation-criteria.md` (The "Measure"):**
  * **Intent:** Defines the *metrics* and *dimensions* for assessment (Complexity, Governance, Skills).
  * **Guardrail:** Do not fill this with product comparison tables. It defines the *ruler*, not the things being measured.

