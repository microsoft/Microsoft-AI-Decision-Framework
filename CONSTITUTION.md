# Project Constitution & Philosophy

## Research & Point of View

### What We Are Building

This repository is a **comprehensive decision engine** for Microsoft's AI portfolio. It is not just a documentation site; it is a **mental framework** designed to prevent "shiny object syndrome" by teaching a disciplined way of thinking.

### The Goal

**To teach a way of thinking.**

We aim to instill a mental framework for evaluating AI problems, rather than just providing a catalog of tools. The goal is to stop customers and architects from picking a technology (e.g., "I want an Agent") before they understand their problem. It forces a structured flow—**Outcomes $\rightarrow$ Behaviors $\rightarrow$ Platforms**—to ensure the selected tool actually fits the requirement.

### The Point of View

* **Methodology over Memorization:** Microsoft ships new AI features weekly. Memorizing the product list is futile. This repo teaches the *logic* of how to choose, which survives product renames.
* **Problem-First Architecture:** We prioritize understanding the *problem* (use cases, edge cases, constraints) over picking a *solution*. Technology is a means to an end, not the starting point.
* **Holistic Trade-offs:** Decisions are never just technical. They must weigh budget, timeline, team skills, and governance.
* **Anti-Hype:** It is intentionally "Level 300-400" (technical/architectural). It rejects marketing fluff in favor of engineering reality.
* **Accuracy over Citation:** Technical claims must be accurate and verifiable against official Microsoft documentation. Verification is the standard — not exhaustive inline citation. When a fact matters, confirm it against Microsoft Learn or official product docs. When a link genuinely helps the reader go deeper, include it. But do not let citation maintenance slow down the mission of teaching. Links rot; good thinking endures.

### Writing Style & Voice

**This is the soul of the project.** We write to **change how people think**, not just what they pick. We act as a **Storyteller** and **Guide**. Every contributor — human or AI — must write in this voice.

* **The Teaching Triad:** We bridge the gap between abstract concepts and specific products using **universal analogies**. This is non-negotiable. Every major concept needs all three legs:
    1. **The Concept** — the abstract principle.
    2. **The Analogy** — a universal, memorable metaphor (thermostats, kitchens, coins, orchestras).
    3. **The Product** — the Microsoft technology that fulfills the concept.
    * *Bad:* "Use Copilot Studio for triggers." (Assumes product knowledge).
    * *Good:* "Think of an Invisible Agent like a thermostat (The Analogy). It waits for a temperature change to trigger an action (The Concept). In Microsoft's stack, Copilot Studio handles these triggers (The Product)."
* **Named Mental Models:** Give ideas handles people can grab. "The Coin," "The Kitchen," "The AI Podcast Problem," "The Furnished Condo vs. The Skyscraper" — these sticky names are what make the framework memorable and durable. Invent new ones when they serve the reader.
* **Narrative Arcs:** Structure documents like a story. There is a protagonist (the builder), an inciting incident (the business problem), and a resolution (the architecture). Open sections with bold trade-off statements or provocative questions, not dry definitions.
* **Conversational Authority:** Write like a senior architect mentoring a colleague over coffee — direct, confident, occasionally irreverent, always grounded. Avoid corporate jargon and committee-speak.
* **Thought Leadership:** Lead with principles and decision levers, not product pitches. The reader should walk away understanding *why* they should choose something, not just *what* to choose.

### Style Exemplars

The gold standard for this project's voice lives in these files:

* **`docs/capability-model.md`** — The Teaching Triad in action: "The Coin," "The 5 Dimensions," "The AI Podcast Problem."
* **`docs/decision-framework.md`** — Narrative arc from intake filter to selection: "Stop Shiny Object Syndrome before it starts."
* **`docs/evaluation-criteria.md`** — Trade-off framing and analogies: "The Furnished Condo vs. The Skyscraper," "The Kitchen."

When writing or editing, read these first. Match their rhythm, their boldness, and their refusal to be boring.

---

## The Constitution (Guidelines)

To keep this repository aligned with its mission, we adhere to the following "Constitution":

### Article I: The Fact vs. Framework Distinction
#### "Cite the Specs, Own the Story."
* **Technical Truths:** Claims about what a product *is*, what it *does*, specific limits, pricing, or availability must be validated against official **Microsoft documentation** sources. Verify accuracy before publishing. Include links where they genuinely serve the reader — but exhaustive inline citations are not required for every technical statement. The goal is correctness, not a bibliography.
* **Conceptual Truths:** Thought leadership, analogies, and mental models (e.g., "The Coin," "The Podcast") are the creative engine of this repository. These do not require citations because they are the *lens* we created to teach the material.
* **Rule:** Never invent a feature to fit a narrative, but fearlessly invent narratives to explain the features.

### Article II: The Anti-Shoeboxing Mandate
#### "Don't force a square peg into a round hole."
* Do not twist a technology's definition to fit a user's request. If a user asks for a "multi-agent system" in Logic Apps, we must say "Logic Apps is an orchestrator, not an agent framework," rather than pretending it fits.
* **Rule:** Explicitly state what a technology *cannot* do.

### Article III: Status Transparency
#### "Preview is not Production."
* We must rigorously distinguish between **General Availability (GA)**, **Public Preview**, and **Experimental**.
* **Rule:** Every diagram and table must visually flag non-GA features.

### Article IV: The Order of Operations
#### "Outcomes $\rightarrow$ Behaviors $\rightarrow$ Platforms."
* Content must guide users through the decision flow:
    1.  **Outcomes (Buckets):** Who benefits and how?
    2.  **Behaviors (Framework):** How does the agent act? (Assistive vs. Autonomous, UI vs. No-UI).
    3.  **Platforms (Groupings):** Which tool supports that behavior?
* **Rule:** Do not recommend a "Solution" (Capability Groupings 3–5) without first checking if an **End‑user copilot** (Capability Grouping 1) solves the problem for free.

### Article V: The Navigation Mandate
#### "Teach the map, not just the destination."
* Our goal is to teach users *how* to navigate Microsoft's changing landscape, not just give them a static answer.
* **Rule:** Always reference official decision trees and frameworks to ground our guidance in Microsoft's recommended paths.

### Article VI: The Immutable Intent of Core Files
#### "Balance the Concept, the Analogy, and the Product."
Certain files have a specific educational purpose.

* **`docs/capability-model.md` (The "What"):**
    * **Intent:** Defines *capabilities* and *mental models* (e.g., "The Coin," "The 5 Dimensions").
    * **Guardrail:** Use the **Teaching Triad**. Products are permitted here only as concrete examples of a concept, after an analogy has established understanding. Products illustrate; they do not define.
* **`docs/decision-framework.md` (The "How"):**
    * **Intent:** Defines the *methodology* and *intake process* (BXT, 9 Questions).
    * **Guardrail:** Do not clutter this with technology specs. It is about the *process* of choosing.

### Article VII: The Teaching Mandate
#### "Explain the 'Why' before the 'What'."
* Content must teach a **way of thinking** through story, principles, and frameworks.
* **Rule:** If a section reads like a product chooser, rewrite it to explain *how to decide* based on underlying principles (e.g., "Velocity vs. Control") rather than just product names.

### Article VIII: The Collaborative Mandate
#### "No Product Supremacy."
* We reject the narrative that one product is "better" than another (e.g., "Foundry vs. Copilot Studio"). This is a false conflict.
* **Rule:** Always frame technologies as **roles in a cast**.
    * *Bad:* "Foundry is better than Copilot Studio because it has code."
    * *Good:* "Copilot Studio plays the role of the Orchestrator, managing the flow, while Foundry plays the role of the Engine, powering the deep reasoning. They are teammates, not rivals."

### Article IX: The Storyteller Mandate
#### "If it's boring, rewrite it."
* The creative voice is not decoration — it is the delivery mechanism. A dry feature comparison teaches nothing; a well-told analogy changes how someone thinks permanently.
* **Rule:** Every document, section, and edit must pass the "coffee test" — would a senior architect stay engaged reading this over coffee, or would they skim past it? If the answer is skim, the writing needs work.
* **Rule:** AI agents working on this project must write in the same storytelling voice as the humans. They are co-authors, not transcriptionists. Refer to the Style Exemplars and the Teaching Triad before every edit.