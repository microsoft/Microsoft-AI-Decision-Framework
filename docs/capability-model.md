---
layout: default
title: Capability Model
nav_order: 2
description: "Capability framing for Microsoft AI choices"
---

# Capability Model
{: .no_toc }

This page is **not a decision tree**. It is a teaching aid for *how to think* about AI choices before you pick a technology. Treat it like a workshop guide: start with people and outcomes, then move to capability groupings, and only later talk about platforms. Capabilities shift quickly, so validate your choices against current Microsoft Foundry and Copilot Studio documentation before committing.

**How to use this page:**

1. Start with **definitions and outcomes** (Buckets).
2. Verify if AI is the right tool (**Checkpoint**).
3. Determine behavior using the **Agent Framework** (The Spectrum & Dimensions).
4. Map the work to the **Capability Groupings** and **Implementation Layers**.

For a detailed intake workflow, see [Decision Framework]({{ '/docs/decision-framework' | relative_url }}).

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## 1. Foundational Vocabulary

Before reasoning about capabilities, we must align on the language.

### Clarify the Language (copilot vs Copilot)
* **copilot** (lowercase) = a *concept*: a natural‑language assistant that helps users create, reason, and act. See [Copilot glossary](https://learn.microsoft.com/en-us/copilot/glossary).
* **Copilot** (uppercase) = a *product family*: Microsoft 365 Copilot, Dynamics 365 Copilot, Security Copilot, and more. See [ISV extensibility story](https://learn.microsoft.com/en-us/microsoft-cloud/dev/copilot/isv/isv-extensibility-story).

This distinction matters. You can build a copilot experience without using a Microsoft Copilot product, and you can extend Microsoft Copilot products without building your own UI.

---

## 2. Orientation: Three Capability Buckets

Start by naming **who benefits and how**. This keeps early conversations grounded in outcomes before you debate platforms.

| Bucket | What It Is | Key Distinction |
| :--- | :--- | :--- |
| **Copilot for Everyone** | AI as personal assistant | Helps people do *their* work and life tasks. |
| **AI as Product/Capability** | AI is the value delivered to end users | Standalone agents, embedded features, or LLM‑powered integrations where users consume AI outcomes. |
| **Agentic Coding** | Autonomous technical builder | AI builds software or systems; the output may or may not contain AI features. |

### The "AI Podcast" Problem
Why do we need these buckets? Imagine searching for "AI" in a podcast app. The results are a chaotic flood because they mix three different intents:

* **The "Life Hack" Listener:** Wants to know how to use Copilot and ChatGPT for parenting advice or "10 tips to organize my day." *(Bucket 1: Personal Productivity)*
* **The AI Architect:** Wants to know how to orchestrate multi-agent systems to ship a new feature to their customers. *(Bucket 2: Shipping Value)*
* **The Developer:** Wants to know how to use an autonomous coding agent to refactor legacy code in the background. *(Bucket 3: Agentic Coding)*

If you don't separate these channels, you risk applying "life hack" advice to enterprise architecture. Three buckets, three different conversations.

---

## 3. Checkpoint: Do You Even Need an Agent?

Not every AI problem needs an agent. Microsoft’s AI agent guidance explicitly calls out cases where **agents add unnecessary cost, latency, and risk**.

* **Structured and predictable tasks:** Use deterministic code or non‑generative AI when the workflow is rule‑based and predictable.
* **Static knowledge retrieval:** Use classic RAG for single‑turn question answering or summarization from a fixed index. If there’s no tool execution or multi‑step reasoning, an agent is overkill.

See [When not to use AI agents](https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/ai-agents/business-strategy-plan#when-not-to-use-ai-agents).

---

## 4. The Agent Framework

If you have determined you need an agent, use this framework to describe *what kind* of AI capability you’re building—before you name a product.

### What is an agent?
In Microsoft guidance, agents can handle tasks, take actions, and operate in conversation or via triggers. They can be assistive or autonomous depending on how you design them. See [Copilot Studio overview](https://learn.microsoft.com/en-us/microsoft-copilot-studio/fundamentals-what-is-copilot-studio).

### Two Sides of the Spectrum (The Coin)
When thinking about agents, consider two ends of a spectrum.

**Side A: Interactive Agents (The Face)**
These are the agents we look at. We poke them, and they poke back. They are conversational, visual, and present.
*(Examples: Copilot, ChatGPT, GitHub Copilot).*

**Side B: Invisible Agents (The Force)**
Flip the coin. These are the agents that look at the world for us. They live in the background—monitoring data, waiting for triggers, and acting without us needing to be present.

### How to Choose Your Agent: The 5 Dimensions
Once you know which side of the coin you're on, you have to decide how that agent behaves.

**1. Interface: The Conversation vs. The Trigger (UI vs. No-UI)**
This defines how the engagement begins. Interactive Agents rely on **Conversational UI**—you talk, and it answers. Invisible Agents rely on **Triggers**—a new email arrives, a database updates, or a timer goes off. One is designed for human engagement; the other is designed for seamless system integration.

**2. Relationship: The Copilot vs. The Captain (Assistive vs. Autonomous)**
This defines who holds the steering wheel. **Assistive** agents work *with* you—they wait for your input to move forward, keeping a human in the loop. **Autonomous** agents work *for* you—once you give them the goal, they drive themselves, making decisions and executing tasks until the job is done or they hit a guardrail.

**3. Logic: The Recipe vs. The Chef (Deterministic vs. Non-Deterministic)**
This defines how the agent thinks. **Deterministic** flows are like a recipe: "If X happens, do Y." They are rigid, predictable, and 100% accurate, which is perfect for strict compliance tasks. **Non-Deterministic** agents use reasoning. You give them a goal ("Plan a travel itinerary"), and they figure out the necessary steps themselves, adding intelligence and adaptability to the process.

**4. Structure: The Soloist vs. The Orchestra (Single-Agent vs. Multi-Agent)**
This defines the scope of capability. A **Single Agent** is a generalist; it tries to handle the query alone. **Multi-Agent** systems function like a department of specialists. One agent might be the "Researcher," another the "Writer," and another the "Editor," passing the work between them to solve complex problems that a single model couldn't handle effectively.

**5. Collaboration: The Handoff (Agent-to-Agent Workflow)**
This defines how the team plays together. The true power of AI isn't just in isolated agents, but in **Orchestration**. In an advanced workflow, an Invisible Agent (Side B) might detect a server crash and immediately wake up an Interactive Agent (Side A) to alert the engineer, handing off all the context instantly. It connects the two sides of the coin into a single, fluid operation.

---

## 5. Capability Groupings (Building Blocks)

Now that you have defined the behavior, map it to the right building block. These five groupings are not a maturity ladder—they are components you can mix and match.

### 1. End‑user copilots (ready‑made UI)
The capability is the **experience surface** itself (chat, in‑app assistants, agent menus).
* **Web‑grounded vs work‑grounded chat:** (e.g., Microsoft 365 Copilot Chat vs Microsoft 365 Copilot). [Copilot Chat overview](https://learn.microsoft.com/en-us/copilot/overview)
* **In‑app copilots:** Assistive UI inside Microsoft 365 apps. [Which Copilot is right](https://learn.microsoft.com/en-us/copilot/microsoft-365/which-copilot-for-your-organization)
* **Frontier agents:** Early access for Word, Excel, and PowerPoint. [Word/Excel/PowerPoint Agents (Frontier)](https://learn.microsoft.com/en-us/copilot/microsoft-365/wordexcelppt-agents)

### 2. Extensibility into existing copilots
If your users already live in Microsoft apps, extend what they already use.
* **Plugins:** Surface your data and actions inside Microsoft Copilots.
* **Graph connectors:** Bring external content into the Microsoft 365 ecosystem so Copilot can reason over it.
See [ISV extensibility story](https://learn.microsoft.com/en-us/microsoft-cloud/dev/copilot/isv/isv-extensibility-story).

### 3. Build AI apps and agents (hybrid by default)
This grouping is for **custom experiences**. Your app may be 95% deterministic and still include a meaningful AI feature.
* **Agent flows and workflows:** Support mixing deterministic steps with AI reasoning (e.g., Copilot Studio agent flows, Foundry multi‑agent workflows).

### 4. AI services and building blocks
This grouping sits beneath apps: models, tools, retrieval, evaluations, and governance. Microsoft Foundry unifies agents, models, and tools with enterprise‑grade management. See [Microsoft Foundry overview](https://learn.microsoft.com/en-us/azure/ai-foundry/what-is-foundry?view=foundry&preserve-view=true).

### 5. Specialized agents (don’t rebuild what already exists)
Microsoft and partners ship specialized agents for specific domains.
* **Microsoft 365 Copilot agents:** Integrated into the Microsoft 365 Copilot experience.
* **Azure SRE Agent (Preview):** Operational automation for Azure environments. [Azure SRE Agent overview](https://learn.microsoft.com/en-us/azure/sre-agent/overview)
* **GitHub Copilot agent mode & coding agent:** Autonomous coding tasks. [GitHub Copilot in VS Code](https://code.visualstudio.com/docs/copilot/overview#_autonomous-coding)

---

## 6. Mindset Shift: The Convergence of Low-Code & Pro-Code

We need to retire the idea that "Low-Code is for amateurs" and "Pro-Code is for developers." In the AI era, this binary is dead.

**For the Technical Professional:**
Do not confuse "configuration" with "lack of capability." Tools like Copilot Studio are increasingly becoming IDEs for conversational AI. They offer code views, variable management, and API integrations that require an engineering mindset to wield effectively.
* **Velocity:** Using a graphical interface to handle state management or auth flows isn't "cheating"—it's efficient.
* **The Hybrid Reality:** Modern "Pro-Code" tools (like Foundry) now include visual prompt flow builders, while "Low-Code" tools (like Copilot Studio) allow for raw code injection.

**The New Rule:**
Choose the tool based on the **problem complexity**, not your job title. A Principal Architect should use a low-code canvas if it solves the problem 10x faster, and a Business Analyst should respect the engineering rigor required to manage a complex agent workflow.

---

## 7. Implementation: The Right Tool for the Right Job

Do not think of this as "Copilot Studio vs. Microsoft Foundry." Think of it as a **spectrum of control**. You will often use these tools together in an "AND" conversation, not an "OR" decision.

### The Three Layers of Build
Most enterprise architectures use a combination of all three layers.

**1. The SaaS Layer (Microsoft 365 Copilot)**
* **Focus:** Consumption & Configuration.
* **The Role:** This is your "Frontend." It provides the chat interface, the security perimeter, and the integration into Word, Teams, and Excel.
* **The Build:** You don't build the engine; you tune it. You configure Graph Connectors to feed it data and manage plugins to give it skills.

**2. The Orchestration Layer (Copilot Studio)**
* **Focus:** Extension & Logic.
* **The Role:** This is your "Middleware." Whether you are a developer or a maker, this is where you define **behavior**.
* **The Build:** Developers use this to stitch together APIs, manage conversation state, and build complex agent workflows. It serves as the bridge, taking raw models and turning them into structured business processes that can be published to M365.

**3. The Foundation Layer (Microsoft Foundry)**
* **Focus:** Deep Customization & Model Ops.
* **The Role:** This is your "Engine Room." This is for when the out-of-the-box models aren't enough.
* **The Build:** Here, you fine-tune models, manage vector stores, and evaluate prompt performance. It is deeply technical, but its output (a custom model or agent) is often consumed by the Orchestration Layer.

### The "Better Together" Architecture
A robust AI solution often spans all three:

1. **Foundry** hosts a custom-tuned model for analyzing proprietary engineering specs.
2. **Copilot Studio** consumes that model, adds a "Human Handoff" logic flow, and enforces access controls.
3. **Microsoft 365 Copilot** acts as the user interface, allowing an engineer in Teams to query the specs without leaving their chat.

---

**Next:** [Decision Framework]({{ '/docs/decision-framework' | relative_url }}) - Apply BXT and critical questions to shortlist technologies

---

## Sources

* [ISV extensibility story](https://learn.microsoft.com/en-us/microsoft-cloud/dev/copilot/isv/isv-extensibility-story) (Updated: 2024-09-20)
* [Capability Envisioning](https://learn.microsoft.com/en-us/microsoft-cloud/dev/copilot/isv/capability-envisioning) (Updated: 2024-09-20)
* [Copilot glossary](https://learn.microsoft.com/en-us/copilot/glossary) (Updated: 2024-05-13)
* [Copilot Chat overview](https://learn.microsoft.com/en-us/copilot/overview) (Updated: 2026-01-13)
* [Which Copilot is right for your organization](https://learn.microsoft.com/en-us/copilot/microsoft-365/which-copilot-for-your-organization) (Updated: 2025-10-29)
* [Copilot Studio overview](https://learn.microsoft.com/en-us/microsoft-copilot-studio/fundamentals-what-is-copilot-studio) (Updated: 2025-12-15)
* [Microsoft Foundry overview](https://learn.microsoft.com/en-us/azure/ai-foundry/what-is-foundry?view=foundry&preserve-view=true) (Updated: 2026-01-05)
* [When not to use AI agents](https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/ai-agents/business-strategy-plan#when-not-to-use-ai-agents) (Updated: 2025-12-05)
* [Word, Excel, and PowerPoint Agents (Frontier)](https://learn.microsoft.com/en-us/copilot/microsoft-365/wordexcelppt-agents) (Updated: 2026-01-14)
* [Azure SRE Agent overview](https://learn.microsoft.com/en-us/azure/sre-agent/overview) (Updated: 2025-12-08)
* [GitHub Copilot in VS Code](https://code.visualstudio.com/docs/copilot/overview#_autonomous-coding) (Updated: 2026-01-08)
* [About GitHub Copilot coding agent](https://docs.github.com/en/copilot/concepts/agents/coding-agent/about-coding-agent) (Accessed: 2026-01-28)