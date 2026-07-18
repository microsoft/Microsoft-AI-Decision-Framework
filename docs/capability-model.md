---
layout: default
title: Capability Model
nav_order: 2
description: "Capability framing for Microsoft AI choices"
---

# Capability Model
{: .no_toc }

Every AI conversation starts in the wrong place.

Someone walks into the room and says, "We need an agent." Or worse: "We need to use Foundry." They've jumped to a platform before they've named the outcome, described the user, or asked whether AI is even the right tool. This is how projects fail - not from bad technology, but from skipping the thinking that should come before the technology.

This page teaches that thinking. Not a decision tree - those come later. This is the mental framework that makes decision trees *useful*. Learn it once, and it survives every product rename, every Build keynote, every "everything is an agent now" news cycle.

The flow is always the same: **Outcomes → Behaviors → Platforms.** Who benefits and how? What does the AI actually *do*? Only then: which building blocks support that behavior?

**How to use this page:**

1. Start with **outcomes** - name which AI conversation you are in (The 3 AI Buckets).
2. Pass the **checkpoint** - verify AI is even the right tool.
3. Define **behavior** - describe what the agent does before you name a product (The Coin & 5 Dimensions).
4. Map to **building blocks**: match behaviors to Capability Groupings and the Microsoft IQ layers.
5. Choose your **build path** - pick the right layer of the New Full Stack.

For a detailed intake workflow, see [Decision Framework]({{ '/docs/decision-framework' | relative_url }}).

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## The 3 AI Buckets

Start by naming **who benefits and how**. This keeps early conversations grounded in outcomes before you debate platforms.

| Bucket | What It Is | Key Distinction |
| :--- | :--- | :--- |
| **AI for You** | Tools for all users in the enterprise | Helps people do *their* work with Microsoft 365 Copilot, app copilots, and governed personal productivity agents. |
| **AI as a Product or Feature** | AI built into your apps or agents | AI becomes part of what your organization ships: custom agents, embedded features, RAG, semantic search, image generation, knowledge graphs, or business workflows. |
| **AI for Your Codebase** | AI inside the developer workflow | AI helps build, refactor, review, test, document, and modernize software. The output may or may not contain AI features. |

### The "AI Podcast" Problem
Why do we need these buckets? Because "AI" has become a uselessly broad search term.

Imagine opening Spotify, Apple Podcasts, or YouTube and searching for "AI." The results look relevant, but they are actually three different conversations stacked on top of each other:

* **The Employee** wants to get through the workday faster with Microsoft 365 Copilot. *(AI for You)*
* **The Product Builder** wants to put AI inside an app, agent, or business workflow. *(AI as a Product or Feature)*
* **The Developer** wants agentic help building the codebase itself, from GitHub Copilot to coding agents. *(AI for Your Codebase)*

All three episodes might have "AI" in the title. Only one is useful for the problem in front of you.

That vagueness is what this model fixes. Before you search, listen, ask, or debate, name the bucket. "I want an AI podcast" is too broad. "I want AI for You" means productivity and personal work. "I want AI as a Product or Feature" means architecture and product design. "I want AI for Your Codebase" means developer workflow and software delivery.

The bucket is the filter you set before you hit play. Choose the wrong one and you import the wrong assumptions, the wrong governance model, and the wrong advice.

---

## Checkpoint: Do You Even Need an Agent?

Not every AI problem needs an agent. Microsoft’s AI agent guidance explicitly calls out cases where **agents add unnecessary cost, latency, and risk**.

* **Structured and predictable tasks:** Use deterministic code or non‑generative AI when the workflow is rule‑based and predictable.
* **Static knowledge retrieval:** Use classic RAG for single‑turn question answering or summarization from a fixed index. If there’s no tool execution or multi‑step reasoning, an agent is overkill.

See [When not to use AI agents](https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/ai-agents/business-strategy-plan#when-not-to-use-ai-agents).
### The Right Tool for the Step: Deterministic Code Is Not the Expensive Option Anymore

Even *inside* an agent architecture, not every step deserves an LLM call. State machines, rule engines, and well‑written `if/else` code give you what language models fundamentally lack: **predictability, observability, and recoverability**.

There is a common misconception that deterministic code is the "expensive" path: that writing and maintaining code costs more than letting an agent figure it out at runtime. That argument had more weight before agentic coding tools (GitHub Copilot, coding agents) collapsed the cost of writing deterministic logic. Today, an AI can *write* the state machine for you in minutes. The code it produces runs faster, costs less per execution, and fails in ways you can actually debug. The agent call it replaces runs slower, costs more per invocation, and fails in ways that require prompt archaeology.

**The anti-pattern:** Reaching for agentic orchestration to avoid writing code. Don't use nondeterminism as a shortcut when the logic is known. Every LLM call introduces latency, token cost, and unpredictable behavior. Reserve that budget for steps where reasoning, ambiguity, or natural‑language understanding genuinely adds value.

The best architectures mix and match. Let agents handle the *thinking*: intent recognition, multi-step planning, ambiguity resolution. Let deterministic code handle the *doing*: validation, routing, transformation, and anything with a known correct answer. The two aren't rivals; they're teammates with different job descriptions.

---

## The Agent Framework

If you have determined you need an agent, use this framework to describe *what kind* of AI capability you're building, before you name a product.

### What is an agent?
In Microsoft guidance, agents can handle tasks, take actions, and operate in conversation or via triggers. They can be assistive or autonomous depending on how you design them. See [Copilot Studio overview](https://learn.microsoft.com/en-us/microsoft-copilot-studio/fundamentals-what-is-copilot-studio).

### The Anatomy of an Agent: Five Parts

Before you argue about *which* agent, know what every agent is made of. Microsoft’s agent guidance breaks it into five parts. Picture a new hire on their first day.

| Part | Plain-English role | Failure mode if ignored |
| :--- | :--- | :--- |
| **Model** | The reasoning engine | The agent cannot interpret ambiguity |
| **Instructions** | The job description and boundaries | The agent wanders outside its lane |
| **Retrieval** | The trusted knowledge it can consult | The agent guesses when it should cite |
| **Actions** | The tools and APIs it can use | The agent talks but cannot do |
| **Memory** | The state it carries forward | The agent forgets the work in progress |

Take away retrieval and you get confident fiction. Take away actions and you get a clever talker who never ships. Most "the agent is broken" complaints trace back to one missing part, not a bad model.

### Three Altitudes of Agent

Agents fly at three altitudes, and altitude sets how much trust and governance you owe them.

1. **Retrieval (the Librarian):** Finds and synthesizes information for a human to act on. Lowest risk, fastest to value.
2. **Action (the Clerk):** Takes a defined step inside a workflow: updates a record, files a ticket, triggers a process. It needs guardrails because it touches systems.
3. **Automation (the Operator):** Runs multi-step work with little oversight, deciding when to proceed, stop, or escalate. Highest value, highest blast radius, strictest governance.

Climb only as high as the outcome demands. A Librarian dressed up as an Operator is just risk you did not need.

### Two Sides of the Spectrum (The Coin)
When thinking about agents, consider two ends of a spectrum.

**Side A: Interactive Agents (The Face)**
These are the agents we look at. We poke them, and they poke back. They are conversational, visual, and present.
*(Examples: Copilot, ChatGPT, GitHub Copilot).*

**Side B: Invisible Agents (The Force)**
Flip the coin. These are the agents that look at the world for us. They live in the background, monitoring data, waiting for triggers, and acting without us needing to be present.

A new sub-category of Invisible Agents is the **Autopilot**: always-on agents that work autonomously with their own identity, continuously acting on your behalf across apps and systems without needing to be prompted each time. Microsoft Scout (Experimental, Frontier) is the first Autopilot agent, staying active in the background to coordinate work across Teams, Outlook, OneDrive, and SharePoint.

### How to Choose Your Agent: The 5 Dimensions
Once you know which side of the coin you're on, you have to decide how that agent behaves.

**1. Interface: The Conversation vs. The Trigger (UI vs. No-UI)**
This defines how the engagement begins. Interactive Agents rely on **Conversational UI**: you talk, and it answers. Invisible Agents rely on **Triggers**: a new email arrives, a database updates, or a timer goes off. One is designed for human engagement; the other is designed for seamless system integration.

**2. Relationship: The Copilot vs. The Captain (Assistive vs. Autonomous)**
This defines who holds the steering wheel. **Assistive** agents work *with* you: they wait for your input to move forward, keeping a human in the loop. **Autonomous** agents work *for* you: once you give them the goal, they drive themselves, making decisions and executing tasks until the job is done or they hit a guardrail. The line is blurring - Copilot Cowork (Frontier Preview) lets M365 Copilot take the wheel for minutes or hours while you steer at checkpoints, occupying a middle ground between Copilot and Captain.

**3. Logic: The Recipe vs. The Chef (Deterministic vs. Non-Deterministic)**
This defines how the agent thinks. **Deterministic** flows are like a recipe: "If X happens, do Y." They are rigid, predictable, and 100% accurate, which is perfect for strict compliance tasks. **Non-Deterministic** agents use reasoning. You give them a goal ("Plan a travel itinerary"), and they figure out the necessary steps themselves, adding intelligence and adaptability to the process.

**4. Structure: The Soloist vs. The Orchestra (Single-Agent vs. Multi-Agent)**
This defines how many workers the job really needs. A **Single Agent** keeps the work in one place. It is faster to test, easier to govern, and cheaper to operate. A **Multi-Agent** system separates specialists when the business process crosses security boundaries, involves multiple accountable teams, or is expected to grow into several domains.

The default move is not "build an orchestra." The default move is "audition the soloist." Start with a single-agent test unless a boundary forces separation.

**5. Collaboration: The Handoff (Agent-to-Agent Workflow)**
This defines how the team plays together. The true power of AI isn't just in isolated agents, but in **Orchestration**. In an advanced workflow, an Invisible Agent (Side B) might detect a server crash and immediately wake up an Interactive Agent (Side A) to alert the engineer, handing off all the context instantly. It connects the two sides of the coin into a single, fluid operation.

---

## Capability Groupings (Building Blocks)

Now that you have defined the behavior, map it to the right building block. These five groupings are not a maturity ladder; they are components you can mix and match.

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
* **Microsoft Scout (Experimental, Frontier):** Microsoft's first Autopilot agent - an always-on personal agent that proactively coordinates work across Teams, Outlook, OneDrive, and SharePoint. Powered by OpenClaw open-source technology and Work IQ. Access requires Frontier enrollment, Intune policy configuration, and a GitHub Copilot license. [Introducing Microsoft Scout](https://www.microsoft.com/en-us/microsoft-365/blog/2026/06/02/introducing-microsoft-scout-your-always-on-personal-agent/) | [Setup instructions](https://learn.microsoft.com/microsoft-scout)
* **Azure SRE Agent (Preview):** Operational automation for Azure environments. [Azure SRE Agent overview](https://learn.microsoft.com/en-us/azure/sre-agent/overview)
* **GitHub Copilot agent mode & coding agent:** Autonomous coding tasks. [GitHub Copilot agents in VS Code](https://code.visualstudio.com/docs/copilot/agents/overview)

### Microsoft IQ: The Four Intelligence Layers

**The Concept:** An agent that can only search documents sees the organization through a keyhole. It finds what was written down, but it doesn't know what happened in last week's meeting, who owns the decision, what the sales data says about the outcome, or what's happening in the market outside the building. Real intelligence requires four layers: knowing what was *recorded*, understanding what's *happening*, interpreting what it all *means*, and seeing what's *out there*.

Microsoft IQ is the umbrella for four intelligence surfaces that give agents distinct kinds of awareness. You can adopt each layer independently, but agents that combine multiple layers answer questions no single layer can.

**The Analogy: Memory, Awareness, Understanding, and Horizon.**

Think about how a seasoned leader navigates a complex decision. They draw on four distinct kinds of intelligence:

* **Memory** is what the organization has written down. Policies, contracts, specifications, reports, research. It's the accumulated knowledge base. You can search it, cite it, and trust it because it's governed. But memory alone is static. It tells you what the answer *was*, not what the situation *is*.

* **Awareness** is the live pulse of work. Who said what in which meeting. What the team agreed to in a Teams thread. What's on the calendar for next week. What the ServiceNow ticket says about the outage, what the SAP system shows for the purchase order, what the JIRA board reveals about sprint velocity. Awareness isn't just M365 signals; it extends through 1,500+ connectors into ServiceNow, SAP, Salesforce, Azure DevOps, Dynamics 365, and any system with a REST API. This is the layer that turns fragments of data into the full context of work.

* **Understanding** is the business logic that gives data meaning. "Customer" isn't just a row in a table. It has relationships (places Orders, belongs to a Segment, has a Lifetime Value), rules (if inventory drops below threshold, trigger replenishment), and a semantic structure that's consistent across every dashboard, agent, and report. Understanding lets agents reason about the business itself, not just the files or conversations about it.

* **Horizon** is what's happening beyond the organization's walls. Market shifts, competitor moves, regulatory changes, breaking news, academic research, emerging trends. No company operates in a vacuum, and no agent should either. Horizon intelligence lets agents ground their reasoning in the live web, so the answer isn't just "what do *we* know?" but "what does the *world* know right now?"

Most teams start their agent journey with Memory (connect a knowledge base) and stop there. The agents that deliver breakthrough value are the ones that also have Awareness (they understand how work happens), Understanding (they reason in the language of the business), and Horizon (they see what's happening outside the building).

**The Product Anchors:**

* **Foundry IQ** is the Memory layer. Status varies by surface: agentic retrieval and managed knowledge bases are GA via REST API, while the portal experience and newer capabilities remain in Preview. Built on Azure AI Search agentic retrieval, connected to agents via MCP. Auto-chunking, vector embedding, permission-aware retrieval with ACL sync and Purview sensitivity label enforcement. Citation-backed responses grounded in enterprise documents, SharePoint, OneLake, Azure Blob, and web sources.

* **Work IQ** (Preview) is the Awareness layer, and it's the same intelligence layer that powers Microsoft 365 Copilot. When you connect an agent to Work IQ, you give it the same contextual brain Copilot uses. Work IQ is exposed as a single endpoint surface through MCP, REST API, and A2A so agents and apps can use one integration model across conversational, application, and agent-to-agent scenarios. Its MCP surface provides compact, generic tools for mail, calendar, files, people, chat, and sites, with policy-enforced, user-scoped execution. Dataverse intelligence extends Work IQ into structured business data understanding. Governance and usage controls are centralized in the M365 Admin Center with platform observability.

* **Fabric IQ** is the Understanding layer. A semantic intelligence workload in Microsoft Fabric, part of the Microsoft IQ family. It defines the language of your business through ontologies (entity types, relationships, properties, business rules), graph models for cross-domain reasoning and dependency analysis, Power BI semantic models for trusted KPIs, and operations agents that can trigger governed actions when business conditions are met. Some features carry Preview caveats at the individual feature level. Fabric IQ ensures that every agent, dashboard, and application speaks the same business vocabulary.

* **Web IQ** (Limited Access) is the Horizon layer. It provides web-grounded intelligence for agents, enabling them to search, synthesize, and reason over live internet content. Where Foundry IQ grounds agents in your documents and Work IQ grounds them in organizational activity, Web IQ grounds them in the broader world. This opens a class of behaviors where agents can autonomously research external sources, monitor competitive landscapes, or validate internal assumptions against public data. No dedicated Microsoft Learn page is available as of June 2026.

Each IQ layer is standalone, but agents that combine two, three, or all four answer questions that no single layer can: "What does the policy say (Memory), who agreed to change it last quarter (Awareness), what does the usage data show since the change (Understanding), and how does our approach compare to what the industry is doing (Horizon)?"

---

## The New Full Stack

The low-code vs. pro-code war is over. Here's what killed it.

For years, the industry drew a bright line: "low-code is for citizen developers" on one side, "pro-code is for real engineers" on the other. The line made sense when code was expensive. Writing a state machine, wiring up auth flows, managing deployment pipelines - these tasks demanded specialized skills and weeks of calendar time. Low-code existed as a category because the alternative cost too much.

That economics has collapsed. Agentic coding tools - GitHub Copilot, coding agents, AI-assisted development - have made writing deterministic logic fast and cheap. A coding agent can scaffold a validated state machine in minutes. The cost argument that justified the binary no longer holds. And on the other side, tools like Copilot Studio now offer code views, variable management, and API integrations that demand an engineering mindset to wield effectively. The "low-code" canvas has become an IDE for conversational AI.

**The New Rule:** Choose the tool based on the **problem**, not your job title. A Principal Architect should use Copilot Studio if it solves the problem 10× faster. A Business Analyst working in Foundry isn't out of their depth - they're using the right tool for *their* use case. The tool does not define the role. The problem defines the tool.

### Three Layers, One Architecture

Do not think of this as "Copilot Studio vs. Microsoft Foundry." Think of it as a **spectrum of control** - three layers that most enterprise architectures use together. This is an "AND" conversation, not an "OR" decision.

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

### Why the Economics Now Match the Architecture
Historically, the "AND" conversation stalled at procurement: separate billing for Copilot Studio and Foundry forced teams into premature "OR" decisions driven by budget silos rather than architecture fit. The **Microsoft Agent Pre-Purchase Plan (P3)** removes that friction. Organizations purchase **Agent Commit Units (ACUs)** in a single pool that pays down both Copilot Credit and Microsoft Foundry usage. One contract, one meter, flexible allocation across layers. This is Microsoft financially codifying the "Better Together" architecture: build in Foundry, orchestrate in Studio, deploy to M365, and let a unified budget follow the workload. See [Agent Pre-Purchase Plan](https://learn.microsoft.com/en-us/azure/cost-management-billing/reservations/agent-pre-purchase).

---

**Next:** [Decision Framework]({{ '/docs/decision-framework' | relative_url }}) - Apply BXT and critical questions to shortlist technologies

---

{: .note }
> **The Human Side:** Technology choices are only half the equation. How your team *partners* with AI matters just as much as which platform they use. See [AI Instinct: The Human Framework]({{ '/docs/ai-instinct' | relative_url }}) for the four instincts that make AI partnership as natural as breathing.

---

## Sources

* [Copilot Chat overview](https://learn.microsoft.com/en-us/copilot/overview) (Updated: 2026-01-13)
* [Which Copilot is right for your organization](https://learn.microsoft.com/en-us/copilot/microsoft-365/which-copilot-for-your-organization) (Updated: 2026-03-24)
* [Copilot Studio overview](https://learn.microsoft.com/en-us/microsoft-copilot-studio/fundamentals-what-is-copilot-studio) (Updated: 2026-02-09)
* [Microsoft Foundry overview](https://learn.microsoft.com/en-us/azure/foundry/what-is-foundry?view=foundry&preserve-view=true) (Updated: 2026-03-13)
* [When not to use AI agents](https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/ai-agents/business-strategy-plan#when-not-to-use-ai-agents) (Updated: 2025-12-05)
* [Word, Excel, and PowerPoint Agents (Frontier)](https://learn.microsoft.com/en-us/copilot/microsoft-365/wordexcelppt-agents) (Updated: 2026-03-30)
* [Azure SRE Agent overview](https://learn.microsoft.com/en-us/azure/sre-agent/overview) (Updated: 2025-12-08)
* [GitHub Copilot agents in VS Code](https://code.visualstudio.com/docs/copilot/agents/overview) (Updated: 2026-03-18)
* [About GitHub Copilot coding agent](https://docs.github.com/en/copilot/concepts/agents/coding-agent/about-coding-agent) (Accessed: 2026-01-28)
* [Agent Pre-Purchase Plan (P3)](https://learn.microsoft.com/en-us/azure/cost-management-billing/reservations/agent-pre-purchase) (Updated: 2026-01-15)
* [Introducing Microsoft Agent Factory](https://techcommunity.microsoft.com/blog/azure-ai-foundry-blog/introducing-microsoft-agent-factory/4470732) (Published: 2025-11-18)
* [Introducing Microsoft Scout](https://www.microsoft.com/en-us/microsoft-365/blog/2026/06/02/introducing-microsoft-scout-your-always-on-personal-agent/) (Published: 2026-06-02)
