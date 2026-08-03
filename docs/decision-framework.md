---
layout: default
title: Decision Framework
nav_order: 4
description: "Three-phase decision methodology for selecting Microsoft AI technologies"
---

<!-- markdownlint-disable-next-line MD025 -->
# Three-Phase Decision Methodology

{: .no_toc }

Use this document as your intake playbook. It keeps the decision anchored in business outcomes and user experience before you select technologies. It builds primarily on Microsoft's actively maintained [CAF AI adoption](https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/ai/) and [AI agent adoption](https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/ai-agents/) guidance, plus [AI architecture design](https://learn.microsoft.com/en-us/azure/architecture/ai-ml/) and Microsoft's [Responsible AI principles and approach](https://www.microsoft.com/en-us/ai/principles-and-approach). It also draws the intake scorecard from earlier [Business Envisioning](https://learn.microsoft.com/en-us/microsoft-cloud/dev/copilot/isv/business-envisioning) and [Capability Envisioning](https://learn.microsoft.com/en-us/microsoft-cloud/dev/copilot/isv/capability-envisioning) guidance (see the currency note in Phase 1) and references the [Copilot Extensibility Planning Guide](https://learn.microsoft.com/en-us/microsoft-365/copilot/extensibility/planning-guide) and [Microsoft 365 Copilot adoption guidance](https://learn.microsoft.com/en-us/microsoft-365/copilot/microsoft-365-copilot-enablement-resources) for organizational readiness.

**One rule governs every page that follows: never lead with a product.** Outcome first, then the use case, then the concept, then the analogy. And only then the name of a thing you can buy. Every question below is sequenced to make that discipline hard to skip.

{: .note }
> **See [Visual Framework]({{ '/docs/visual-framework' | relative_url }}) for workflow diagrams** that illustrate how to apply this framework as an intake process.

## The Intake Filter

{: .no_toc }

**Stop "Shiny Object Syndrome" before it starts.**

Most failed AI projects start with "I want to build an agent." Successful projects start with a problem. Use this filter as a gate: if you cannot answer these three questions, do not proceed to technology selection.

1.  **What business outcome am I trying to achieve?** (The precise ROI or problem solved). If the outcome is unclear, pause and rewrite the problem statement before picking any tool.
2.  **What user experience delivers that outcome?** (The Human Element). Prototype the interaction first. Does it actually need a chat bot, or just a smarter search bar?
3.  **Does a tool already exist?** (The Evolution Mentality).
    *   **Check existing tools first:** Can Microsoft 365 Copilot or a standard SaaS feature solve this with zero coding?
    *   **Evolve only when necessary:** Start rigid (SaaS). Move to configuration (Low-Code) only if the standard tool fails. Move to construction (Pro-Code) only if the configuration hits a wall. Do not start at "Custom Build" by default.

## Experience Framing (UX + Autonomy)

Before you select platforms, frame the **experience**. Microsoft's UX guidance for generative AI uses three primary labels: **Immersive**, **Assistive**, and **Embedded**.[^uxguidance] Those are the words that will appear in a Microsoft design review. They are also, frankly, a little abstract at 9am, so we hang our own analogy on them: **the Destination, the Companion, and the Feature**. The analogy is ours; the labels are Microsoft's.

*   **Immersive ("The Destination"):** "I go to the AI to do my work." The AI is the place. (A dedicated chat canvas.)
*   **Assistive ("The Companion"):** "The AI travels with me while I work." The AI rides shotgun. (A sidebar in the app you were already using.)
*   **Embedded ("The Feature"):** "The AI fixes one specific thing in my flow." The AI is a button. (A *Summarize* action on a support ticket.)

| Microsoft's label | Our analogy | When It Fits | Decision Implication |
| :--- | :--- | :--- | :--- |
| **Immersive** | The Destination | Deep, whole‑canvas work with a knowledge base | Likely needs a dedicated UI surface |
| **Assistive** | The Companion | In‑app help where users already work | Favor existing app surfaces and extensions |
| **Embedded** | The Feature | Lightweight, single‑entity interactions | Favor targeted UI entry points and narrow scope |

{: .warning }
> **Currency note:** the ISV UX guidance page carrying these labels was last updated 2024-09-26 (roughly 22 months old at the time of writing). The vocabulary is still the clearest Microsoft has published, but check for newer articulation before you quote it in a design doc.

Start by deciding **UI vs no‑UI**. If the experience is UI‑based, choose **chat‑first** vs **embedded-in-app**. If the experience is headless, define the **trigger model** (event, schedule, or system alert) and the **human‑approval points** up front.

UX guidance also emphasizes:

- **Human in control** (user remains the pilot)
- **Avoid anthropomorphizing** (set correct expectations)
- **Consider direct and indirect stakeholders**

**Autonomy decision:** Some agents are conversational and user‑initiated; others run headlessly on triggers or schedules. Decide how much autonomy is required and where humans must approve actions before selecting a platform.

## Storybook view: From vision to operating system

This framework tells a **story**: how a technical leader moves from a good idea to a governed, production-ready AI system.

1. **Envision:** Validate viability, desirability, and feasibility before you build, using the scorecard in Phase 1. [Business Envisioning](https://learn.microsoft.com/en-us/microsoft-cloud/dev/copilot/isv/business-envisioning)
2. **Choose the approach:** Apply **Capability Envisioning** to select *adopt/extend a Copilot*, *build a custom copilot*, or *build on Fabric*. [Capability Envisioning](https://learn.microsoft.com/en-us/microsoft-cloud/dev/copilot/isv/capability-envisioning)
3. **Adopt and govern:** Use the CAF AI adoption stages to sequence Strategy → Plan → Ready → Govern → Secure → Manage. [AI adoption](https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/ai/)
4. **Architect for production:** Start with CAF AI PaaS baselines and Azure Architecture Center AI guidance. [CAF AI architectures](https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/ai/platform/architectures), [AI architecture design](https://learn.microsoft.com/en-us/azure/architecture/ai-ml/)
5. **Build & run agents responsibly:** Align to AI agent adoption guidance, **Plan for agents → Govern & secure agents → Build agents → Manage agents**, and to Microsoft's six Responsible AI principles: Fairness, Reliability & Safety, Privacy & Security, Inclusiveness, Transparency, and Accountability. [AI agent adoption](https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/ai-agents/), [Responsible AI](https://aka.ms/RAI), [Responsible AI policies (CAF)](https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/ai/responsible-ai-policies)

This storybook view complements the three phases below without replacing them.


## Table of contents

{: .no_toc .text-delta }

1. TOC
{:toc}

---

## Phase 1: Business Impact Assessment

**The Trade-off: Enthusiasm vs. Evidence.** Every AI idea arrives with a champion and a demo. Very few arrive with a business case, a user who wants it, and a data estate that can support it. This phase is the gate that asks for all three before anyone is allowed to say a product name out loud.

**The Analogy: The Three-Legged Stool.** **Viability** is whether the business case survives contact with a spreadsheet. **Desirability** is whether anyone actually wants it. **Feasibility** is whether you can build and run it. Saw off any one leg and the thing falls over, no matter how beautiful the other two are. A viable, feasible idea nobody wants is shelfware. A desirable, feasible idea with no ROI is a hobby. A viable, desirable idea your data cannot support is a demo that never ships.

If those three words feel familiar, they should. **They are not Microsoft's invention and they are older than AI.** Desirability, feasibility, and viability are the classic design-thinking lenses, and they have been used to triage product ideas for decades. That heritage is exactly why we build on them: they have already survived several technology cycles, which is more than can be said for most of the vocabulary in this field.

Microsoft's current articulation lives in the **Cloud Adoption Framework**, which scores AI and agent use cases on business impact, technical feasibility, and user desirability.[^aiagentadoption] That is the actively maintained guidance, it is written for enterprise teams, and it is where you should look for current vocabulary and the adoption sequence that follows this phase.

{: .note }
> **On BXT: we keep it, and here is the honest reason.** Microsoft's **Business-Experience-Technology (BXT)** framing maps one-to-one onto these three lenses: Business is viability, Experience is desirability, Technology is feasibility. Its source page is **ISV-scoped and has not been refreshed since September 2024**, and Microsoft's current CAF AI guidance does not reference it, so treat it as an antecedent rather than as live guidance.
>
> **It still earns its place, because the two are not competing.** CAF tells you *what to weigh and what to do next*; BXT is the only one of the two that hands you a **worked scorecard**: nine named subcomponents, a prioritization plot, four decision quadrants, and a monetization model. That operational detail has not been superseded, and nothing newer replaces it. Use CAF's vocabulary with your stakeholders and BXT's scorecard in the room. If a reader's organization already speaks BXT, they lose nothing by keeping it.

**This is where the Golden Rule is enforced.** The scorecard is the mechanism that makes "never lead with a product" operational: you cannot complete it by naming a platform. You have to argue the business case first. That is the entire point of the exercise, and it is why this stays a named phase rather than being folded into anything else.

### 1. Viability (Business)

{: .no_toc }

- ROI beyond general productivity gains?
- Quantifiable cost savings or revenue increase?
- Strategic alignment?
- TCO vs. benefit analysis?

### 2. Desirability (Experience)

{: .no_toc }

- Motivating reason to use over current alternative?
- Solves painful, frequent problem?
- Measurable adoption?
- Natural workflow fit?

### 3. Feasibility (Technology)

{: .no_toc }

- Current team skillsets?
- Hire/train/partner decisions?
- Data accessible & governable?
- Infrastructure and compliance ready?

### Strategic Fit & Prioritization: The Scorecard

{: .no_toc }

**This is the part that has no modern replacement, which is precisely why it is still here.** CAF tells you which three lenses to weigh; it does not hand you a way to rank twelve competing ideas on a Tuesday. Business Envisioning does, and nothing newer has superseded the mechanics:

- **Step 1, Strategic Fit Score (1 to 5):** name the business objective, the key results (OKRs), and the primary stakeholders. If you cannot name a stakeholder who will be measured on this, you do not have a use case. You have an interest.
- **Step 2, Score the nine subcomponents:**

| Lens | The three subcomponents |
| :--- | :--- |
| **Viability** (BXT: Business) | Executive strategy alignment · Business value · Change management timeframe |
| **Desirability** (BXT: Experience) | Key personas · Value proposition · Change resistance |
| **Feasibility** (BXT: Technology) | Implementation and operations risks · Sufficient safeguards · AI/LLM fit |

- **Step 3, Plot two metrics:** degree of *strategic business impact* against degree of *executional fit*.
- **Step 4, Read the quadrant you land in:** **Shelve**, **Research**, **Incubate**, or **Accelerate to MVP**.

The quadrant names matter more than they look. "Research" and "Incubate" are not polite ways of saying no. They are funded, time-boxed answers that keep a good idea alive without pretending it is ready. Most portfolios fail because they only have two verbs: *build* and *ignore*.

If you are building a product rather than an internal tool, the same source asks how you will monetize it: **Core**, **Extend**, or **Add-on**.

See [Business Envisioning](https://learn.microsoft.com/en-us/microsoft-cloud/dev/copilot/isv/business-envisioning) for the full scoring approach. Note the currency caveat above.

### Two Frameworks, Nine Identical Criteria

{: .no_toc }

**Here is the part worth pausing on.** Microsoft's Cloud Adoption Framework scores AI agent use cases with three lenses of its own, written years later, by a different team, for a different audience.[^aiagentadoption] Score each candidate 1 to 5:

| CAF lens | What it asks | The equivalent |
| :--- | :--- | :--- |
| **Business impact** | Executive strategy alignment, business value, change management timeframe | Viability: the same three subcomponents, near-verbatim |
| **Technical feasibility** | Implementation and operation risks, sufficient safeguards, technology fit | Feasibility: the same three subcomponents |
| **User desirability** | User pain points, solution acceptance, change readiness, stakeholder support | Desirability: restated for enterprise adoption |

Two Microsoft frameworks, built years apart for different audiences, converged on the same nine criteria. And both landed on lenses that design practice has used for decades. **That convergence is the useful signal.** It is why we are comfortable keeping the older scorecard: the thing being measured has proven stable even as the products, the vocabulary, and the documentation around it churned.

So do not run both. **Score once**, using whichever vocabulary your stakeholders already speak, and borrow the operational mechanics from whichever source has them.

The winning use case is rarely the flashiest one. It is the one with enough value, enough readiness, and enough user pull to survive contact with production.

### Decision Gate

{: .no_toc }

- If any dimension scores low -> Revisit use case, defer project, or move to "Shelve/Research/Incubate" quadrants
- If all dimensions score medium-high -> Proceed to Phase 2 (Technology Selection)

---

## Phase 2: Technology Groupings (Question 0 + Nine Critical Questions)

Apply these questions **sequentially** after passing the Phase 1 assessment. Each question creates **technology groupings** rather than jumping to specific recommendations. The groupings feed into Phase 3 for final selection.

{: .note }
> **Important:** These questions create buckets/categories. Final technology selection happens in **Phase 3** based on scenario-specific criteria (time-to-market, complexity, budget, etc.).

Use these gates to stay simple first. Start with a SaaS agent when it meets the requirement; step into low-code or pro-code only when the need is explicit. Frame every answer as a balance of speed, control, and shared responsibility (SaaS → PaaS → IaaS), and prefer interoperable standards (e.g., MCP) to reduce rework. Align this phase with the Cloud Adoption Framework AI strategy and AI agent adoption guidance to keep your governance, data strategy, and interoperability assumptions consistent across teams.[^aiagentadoption]

---

### Pre-Question: Do you need an agent at all?

{: .no_toc }

Before you choose approaches, confirm whether the problem truly requires an agent:

- **Structured, predictable work** → deterministic code or non‑generative AI
- **Static knowledge retrieval** → classic RAG without tool execution or multi‑step reasoning

Agents introduce nondeterminism, latency, and cost. Use them only when reasoning or tool orchestration is required. See [When not to use AI agents](https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/ai-agents/business-strategy-plan#when-not-to-use-ai-agents).[^whennotagents]

---

### Pre-Question: Capability Envisioning (Approach Selection)

{: .no_toc }

Before you work the questions below, select the **approach** that best fits the use case:

- **Adopt or extend a Microsoft Copilot** (fast time-to-value, limited customization)
- **Build a custom copilot** (custom experience, multi-channel, advanced orchestration)
- **Build an application on Fabric** (data-heavy, analytics-centric apps with AI embedded)

These approaches are **not mutually exclusive**; many solutions blend them. Use the Capability Envisioning considerations (data, customization, development complexity, end-user, business value, risk/compliance) to pick the lead approach.[^capabilityenvisioning]

{: .warning }
> **Currency note.** Capability Envisioning was last updated **2025-01-16** (roughly 18 months old at the time of writing) and, like Business Envisioning, is written for **ISVs**. Both pages are load-bearing gates in this framework, so the honesty is worth the clause: the *three approaches* remain a sound way to frame the choice, but check for newer articulation before you quote the page in a design review.

---

### Question 0: Has Someone Already Built This?

{: .no_toc }

**The Trade-off: Ownership vs. Overhead.** Every agent you build is an agent you must instruct, ground, evaluate, patch, monitor, budget for, and eventually retire. Every agent you *adopt* is somebody else's on-call rotation. The cheapest agent in your estate is the one Microsoft or a partner already runs for you.

**This is the Ladder's first two rungs, and they are a gate.** [Microsoft AI Stack]({{ '/docs/ai-stack' | relative_url }}) walks the full escalation: *Use → Browse → Configure → Extend → Build declarative → Build custom engine*. Question 0 asks something narrower and harder: **can you say out loud why each rung below you failed?** Not "did we look." Teams always say they looked. Why did it fail. If you cannot answer that for rungs 1 and 2, you are not choosing to build; you are defaulting to it.

This is not our opinion. Microsoft encodes buy-before-build in its own documentation:

> *"A wide range of agents built by Microsoft and Microsoft partners are available to support multiple business functions… You can deploy these agents as-is or further customize them by incorporating your organization's knowledge and business logic."* (Microsoft 365 Copilot extensibility overview)[^extensibilityoverview]

> *"When Copilot itself doesn't fully address your organization's requirements out-of-the-box, consider building an agent."* (Extensibility planning guide)[^planningguide]

> *"As an admin, you can configure and deploy out-of-the-box agents without having to create and publish a new agent. However, when your organization needs to customize Copilot functionality… users and developers at your organization can build agents that you can manage and deploy."* (Microsoft 365 agents admin guide)[^m365agentsadmin]

Read those three quotes in order and an escalation ladder falls out of them. **You must climb it one rung at a time, and you must be able to say out loud why each rung failed you.**

| Rung | The question you must answer "no" to before climbing | Effort |
| :--- | :--- | :--- |
| **1. Use** | Does the AI experience our people already have simply answer this? | Zero |
| **2. Browse** | Has Microsoft or a partner already shipped an agent for this business function? | Minutes |
| **3. Configure** | Can an admin enable and scope that agent without a developer? | Hours |
| **4. Extend** | Can we point an existing Copilot at our knowledge and our actions? | Days |
| **5. Build declarative** | Can instructions + knowledge + actions on Microsoft's model and orchestrator do it? | Days to weeks |
| **6. Build custom engine** | Do we genuinely need our own model, orchestration, and hosting? | Weeks to months |

**Microsoft ships more of rungs 1 to 3 than most architects realize.** CAF's own buy-before-build inventory names Microsoft 365 Copilot agents (**App Builder, Workflows, Researcher, Analyst, Surveys**), the **GitHub Copilot agent**, **Fabric data agents**, **Azure Copilot agents**, **Dynamics 365 agents**, and **Security Copilot agents** as SaaS options to evaluate *before* you commission a build.[^aiagentadoption] Walk that list before you write a design doc.

#### The other axis: who built it?

{: .no_toc }

Rung 2 begs a second question: *whose agent is this, and what does that imply for trust?* Microsoft's Agent Registry answers it with four publisher types, verbatim:[^agentregistry]

| Type | Microsoft's definition | What it implies for you |
| :--- | :--- | :--- |
| **Microsoft agents** | "Agents built and maintained by Microsoft." | Microsoft owns the lifecycle and the model behind it |
| **External partner-built agents** | "Agents built by trusted non-Microsoft developers and published for broader or public availability." | Your vendor-risk process applies, not just your SDLC |
| **Published by your org** | "Custom agents approved and published by your organization for broader use. These agents might be referred to as LOB (Line of Business) agents." | You own support, evaluation, and retirement |
| **Shared by creator** | "Agents created and shared by individual users or developers at your organization. These agents are commonly referred to as Shared agents." | The long tail: the part of the estate that grows while nobody is watching |

{: .warning }
> **Terminology hygiene:** Microsoft does **not** use "first-party/1P" or "third-party/3P" as documented terminology anywhere in this docset. The slang is common in hallway conversation; the four types above are what your admin center actually shows you. Use the real names in writing.

**The gate:** if you cannot name the rung you are on and articulate why the rung below it failed, you have not finished Question 0. Do not proceed to Question 1.

{: .tip }
> This question operationalizes the framework's order of operations: check whether an end-user copilot solves the problem for free before you design a solution. See [Capability Model]({{ '/docs/capability-model' | relative_url }}) for the capability groupings this ladder maps onto.

---

### Question 1: Which Bucket Is This? (Then, Where Does It Live?)

{: .no_toc }

**Start with who benefits, not where the pixels go.** The old instinct is to ask "will this be in Teams or on our website?" That question is answerable, which makes it feel like progress. But it quietly assumes there is a UI at all, and it tells you nothing about who is measured on the outcome.

So ask the bucket question first. The **3 AI Buckets** (*AI for You*, *AI as a Product or Feature*, and *AI for Your Codebase*) are defined in the [Capability Model]({{ '/docs/capability-model' | relative_url }}). Each one routes to a completely different cast of technologies, a different budget line, and a different owner. Pick the bucket, *then* narrow to where the experience lives inside it.

#### Bucket 1: AI for You (internal productivity)

{: .no_toc }

The beneficiary is your own workforce. The default surface is the one they already have.

- **Inside Microsoft 365 apps** (Copilot Chat, Teams, Word, Excel, Outlook) → Start with the free, included **Microsoft 365 Copilot Chat** surface for every eligible user, then graduate to the **Microsoft 365 Copilot** add-on when you need Graph-grounded answers and in-app copilots.[^copilotforall] Stay inside the Microsoft 365 trust boundary using built-in agents, Copilot Studio's Microsoft 365 channels, or Graph connectors.
- **Adjacent to those apps** → declarative agents that extend Copilot with your knowledge and actions, governed by the same tenant controls.

#### Bucket 2: AI as a Product or Feature (customers, or systems)

{: .no_toc }

The beneficiary is outside your org chart, or is another system entirely. Now the UX framing from earlier in this page does real work.

- **Custom or multi-channel** (web, mobile, SMS, email) → **M365 Agents SDK**, **Microsoft Foundry**, or **Azure Logic Apps** to reach every endpoint consistently. Pair Agent Framework with the AG-UI protocol when you need streaming UI, shared state, or human-in-the-loop approvals in bespoke web or mobile experiences.[^agui-overview]
- **API/headless** workloads → design for services that call the agent as a capability rather than a UI. There is no UX question here; there is a contract question. Skip to Question 4 and Question 7.

#### Bucket 3: AI for Your Codebase (the developer loop)

{: .no_toc }

The beneficiary is the team that builds everything else. This bucket has its own ladder, and it climbs from "helps me type" all the way to "is a production agent in my Azure subscription."

1. **Assist in the editor.** GitHub Copilot in the IDE. Synchronous, human-driven, zero governance surface beyond your existing policies. Code completions and next-edit suggestions are not billed against AI credits.
2. **Delegate asynchronously.** The **Copilot cloud agent** (renamed from "coding agent") takes an issue and returns a pull request while you do something else. GA on all paid Copilot plans, including Student; **not** available on Copilot Free. This is the moment the developer loop becomes an *agent* story rather than an *autocomplete* story: work happens when you are not looking, and review becomes the control point.
3. **Codify the team's practice.** Custom agents are Markdown files with YAML frontmatter (`.github/agents/NAME.md` for a repo; org- and enterprise-level equivalents in `.github`/`.github-private`), and **`AGENTS.md`** is GitHub's official "agent instructions" mechanism with a documented precedence order. GitHub's own caveat is worth quoting to your team before you standardize on it: agent instructions are *"currently not supported by all Copilot features."* Custom agents are GA for the cloud agent, VS Code, and Visual Studio; **Public Preview** for JetBrains, Eclipse, and Xcode.
4. **Build on the harness.** The **GitHub Copilot SDK** is GA and wraps the Copilot CLI engine over JSON-RPC, with bindings for Python, TypeScript, Go, .NET, Java, and Rust. This is where a developer-loop experiment turns into a product.
5. **Host it as an enterprise agent.** **Microsoft Foundry Agent Service** explicitly lists the GitHub Copilot SDK as a supported framework for **Hosted agents**. That is the seam where the developer plane hands off to the enterprise plane.

{: .warning }
> ⚠️ **Know this before you pick a language.** Microsoft Foundry **Hosted agents support Python and C# only.** If you build your Copilot SDK agent in Go, Rust, Java, or TypeScript, it is **not directly hostable** as a Foundry Hosted agent. You will be self-hosting it, or rewriting it. Choose the language at step 4 with step 5 already in mind. This is the single most expensive detail in the developer-loop journey.

{: .tip }
> Use the groupings from this question with the capability grouping mappings in [Microsoft AI Stack]({{ '/docs/ai-stack' | relative_url }}) and the examples in [Scenarios]({{ '/docs/scenarios' | relative_url }}).

---

### Question 2: The Spectrum of Control (Build Style)

{: .no_toc }

Instead of a binary choice (Low-Code vs. Pro-Code), map your need to the **Spectrum of Control**. Think of this like **"The Kitchen"**:

1.  **Dining Out (SaaS):** Order off the menu. Fast, high quality, zero prep. (Example: **Microsoft 365 Copilot**).
2.  **Meal Kit (Orchestration/Low-Code):** You get the ingredients and the recipe, but you assemble it. Faster than scratch, but adjustable. (Example: **Copilot Studio**).
3.  **Scratch Cooking (Foundation/Pro-Code):** You buy raw ingredients and own the kitchen. Infinite possibility, but you do the dishes. (Example: **Microsoft Foundry / Agent SDK**).

*   **SaaS Layer:** Default here. Use Declarative Agents or built-in Copilot extensibility.
*   **Orchestration Layer:** Use Copilot Studio when you need custom logic but want managed infrastructure.
*   **Foundation Layer:** Use Foundry or Agent Framework only when you need custom model tuning, private networking, or complex non-standard behaviors.

{: .tip }
> For side-by-side capabilities, see the development approach matrices in [Quick Reference]({{ '/docs/quick-reference' | relative_url }}) and [Technologies]({{ '/docs/technologies' | relative_url }}).

Default to SaaS (built-in Copilot / Copilot Studio) when it meets the need; reach for PaaS (Foundry) when you need extensibility; use IaaS only when full-stack control is necessary. Favor MCP-friendly choices to keep integrations portable.

---

### Question 3: Data Grounding Pattern

{: .no_toc }

**Question 2 chose your kitchen. Question 3 stocks the pantry. And this is where most agent projects actually die.**

Nobody's post-mortem says "the orchestration framework was wrong." They say the agent confidently cited a policy document that was superseded eighteen months ago, or it answered a question the user was not cleared to ask. Grounding is not a feature you bolt on after the demo lands. It is the majority of the engineering.

CAF's warning is blunt and worth repeating until it stops being necessary: **agents synthesize information, they do not magically fix bad data.** If the estate is fragmented, stale, or over-permissioned, the agent inherits that mess. Then it puts a confident voice on it.

Start by separating three jobs people routinely conflate:

- **Grounding (RAG):** retrieve the right files or records *per request*.
- **Memory:** decide whether conversations persist at all (Copilot Studio Dataverse variables, Foundry Agent Service thread stores in Cosmos DB, or your own implementation). Standard agent setup provisions customer-owned Azure Storage, Azure AI Search, and Cosmos DB containers for thread data.[^standardsetup]
- **Analytics:** plan transcript retention, telemetry, and review processes *before* launch. **Translytical Task Flows** in Fabric let you trigger actions directly from an analytical report, which blurs this line deliberately.

#### The grounding plane, by job to be done

{: .no_toc }

Choose by the shape of the question you need answered, not by the logo on the service. Statuses matter here more than anywhere else on this page. Several of these are Preview, and a Preview grounding store is a Preview production system.

| The job | Microsoft anchor | Status |
| :--- | :--- | :--- |
| Search across documents and mixed content, with query planning handled for you | **Azure AI Search agentic retrieval** | **GA via the 2026-04-01 REST API**; portal experiences remain **preview-only** |
| Keep vectors beside your operational relational data | **Azure Database for PostgreSQL** with **pgvector** | **GA** |
| Generate embeddings and call models *from inside the database* | PostgreSQL **`azure_ai` extension** | Available in the Azure AI docset for PostgreSQL |
| Vector search beside JSON operational data at scale | **Azure Cosmos DB** vector search: flat/kNN, quantized flat, and DiskANN index types (must be enabled as a feature) | Docs do not state a GA date; confirm status before you commit |
| Vector search inside the system of record you already run | **`VECTOR_SEARCH()`** on Azure SQL Database, SQL database in Fabric, and SQL Server 2025 (SQL Server 2025 additionally requires the `PREVIEW_FEATURES` database-scoped configuration) | **Preview** on all three |
| Conversational analytics over the analytics estate | **Fabric data agents** (formerly "AI skills"; requires F2+ or P1+ capacity) | **GA** |
| Ontologies, graph models, and semantic models over that estate | **Fabric IQ** | **Preview** |
| One copy of the data underneath all of the above | **OneLake** | **GA** |
| Low-latency cache, session state, and vectors | **Azure Managed Redis** | **GA** |

Grounding also stays inside the Microsoft 365 trust boundary when the answer lives in work content: **Microsoft Graph** and Graph connectors remain the shortest path for Bucket 1 scenarios.

#### Document the data contract

{: .no_toc }

Before selecting the platform, write these five answers down. If you cannot, you are not ready to choose a store:

- **Authoritative sources:** Which systems are *allowed* to ground answers?
- **Retrieval pattern:** Search, API, MCP tool, or a blend?
- **Permission model:** Does the agent inherit user permissions, or use service-level access? (These are not close to equivalent.)
- **Freshness requirement:** Is yesterday's index good enough, or does the agent need live data?
- **Audit trail:** Can you explain which source informed a given answer or action?

{: .tip }
> See [Implementation Patterns]({{ '/docs/implementation-patterns#pattern-3-microsoft-365-knowledge-grounding' | relative_url }}) for ingestion blueprints and [Evaluation Criteria]({{ '/docs/evaluation-criteria#complexity-assessment-architectural-load' | relative_url }}) for scoring considerations.

---

### Question 4: Orchestration Complexity (The Coin)

{: .no_toc }

Use **"The Coin"** mental model (from the [Capability Model]({{ '/docs/capability-model' | relative_url }})) to determine if you need a soloist, a team, or a connected ecosystem.

**The Two Sides:**
*   **Side A (The Face):** Interactive agents that talk to humans (e.g., Copilot Studio). Optimized for speed and conversation history.
*   **Side B (The Force):** Invisible agents that monitor systems/triggers (e.g., Logic Apps, Foundry Agent Service). Optimized for reliability and duration.

**The Advanced Scenario: Convergence**
The strongest architectures connect both sides. An **Invisible Agent** (Side B) might monitor a database for days. When it finds an anomaly, it doesn't just log it. It wakes up an **Interactive Agent** (Side A) to ping the human user with context.
*   *Decision:* If you need both behaviors, do not choose between them. Use **Copilot Studio** as the "front office" (User Interaction) and **Foundry/Logic Apps** as the "back office" (Deep Work), connected via API or Agent protocols.

**The Complexity Spectrum:**

Before you reach for agents at all, note that Azure Architecture Center frames this as a spectrum with three stops, not a binary:

| Stop | What it is | When it's right |
| :--- | :--- | :--- |
| **Direct model call** | A prompt in, a completion out. No tools, no loop. | Classification, extraction, summarization: anything with a single, bounded step |
| **Single agent with tools** | One reasoning loop that can call functions, search, and APIs | Microsoft's own note: *"often the right default for enterprise use cases"* |
| **Multi-agent orchestration** | Several agents with distinct roles, coordinating | Boundaries you cannot cross with one identity, one team, or one lifecycle |

**Orchestration Levels:**
*   **Single Agent (The Soloist):** One agent using tools. Good for simple Q&A. (Declarative Agents).
*   **Multi-Agent (The Orchestra):** A central "brain" directs specific workers. Good for complex tasks within one boundary. (Hub-and-Spoke).
*   **Connected Agents (The Mesh):** Independent agents across different organizations or tools discover and message each other. Good for enterprise-wide collaboration without a central bottleneck. (Agent-to-agent: **A2A is GA in Copilot Studio as of April 2026**; Foundry Agent Service exposes an incoming A2A endpoint in **Preview**.)

**The default is a Soloist. And Microsoft says so too.** Do not start with an orchestra because the problem *sounds* complex. CAF's rule is blunt: begin with a single agent and test it. Reach for multiple agents only when one of three things is true: you cross a security or compliance boundary, separate teams own separate domains, or you already know the system will keep growing. Everything else starts single, because every handoff you add buys latency, cost, and a new way to fail. **Audition the soloist before you hire the orchestra.** Earn the second agent with evidence, not with a hunch.

{: .warning }
> **Status caution on multi-agent features.** Copilot Studio's multi-agent surface is moving fast and is *not* uniformly GA. **Confirmed GA:** generative orchestration (and the default for new agents), **computer use (May 2026)**, and **A2A (April 2026)**. **Status not stated by Microsoft** for child agents (which Microsoft calls *"inline agents, also known as child agents"*), connected Copilot Studio agents, Foundry agents, Fabric data agent connections, and M365 Agents SDK agent connections. And the what's-new feed still carries **"Connect other agents (Preview)"** and **"Foundry IQ connect (Preview)"** entries, which rules out a blanket GA reading. **The ambiguity here is Microsoft's, not ours.** Verify the exact capability you need on the day you architect, and treat unstated as unproven.

{: .note }
> The orchestration comparison tables in [Feature Comparison]({{ '/docs/feature-comparison' | relative_url }}) highlight the trade-offs.

---

### Question 5: Compliance & Trust Boundary

{: .no_toc }

Answer "Where does my data go, and who can act on it?" before choosing a platform.

- **M365 trust boundary** - Prompts, responses, and Graph data remain inside Microsoft 365; best for regulated organizations needing tenant guarantees.
- **Power Platform boundary** - Copilot Studio keeps core data in-region but inherits the compliance posture of every connector you call and sends web search queries to Bing consumer services.[^transcriptcontrols][^copilotcalls]
- **Azure landing zone** - Microsoft Foundry and Foundry Agent Service adopt your subscription's network, identity, and policy controls, with private networking and customer-managed keys available by design.
- **Hybrid approaches** - Mix Declarative Agents and custom agents, or route everything through Azure API Management for centralized policy enforcement.

#### Identity: one agent, one identity

{: .no_toc }

**If you cannot attribute an action, you cannot govern it.** For twenty years we solved this for humans and then quietly gave service accounts a pass. Agents make that shortcut untenable. An agent acts on its own initiative, at machine speed, across systems a service account was never meant to touch. The shared credential left in a drawer was always a bad idea; it is now a bad idea that runs by itself, at three in the morning, faster than anyone reviews.

**Microsoft Entra Agent ID** is the product that supplies it. Note the word *product*, which is Microsoft's own: *"Microsoft Entra Agent ID is a product within Microsoft Entra that provides the platform for creating and managing agent identities and agent identity blueprints."* It is **generally available**, and Microsoft states plainly that *"Agent ID is available for all Microsoft Entra customers."*[^entraagentid] Design your agents assuming each one carries a distinct identity, because the platform now assumes it too.

**Then ask the second question, because the identity does not answer it.** Attribution and authorization are separate: the identity decides whose name appears in the log, and the authentication flow decides whose permissions fetch the data. Microsoft's own logging documentation observes that an agent *"can sign in with either user-delegated or app-only permissions"*, which is the seam worth naming, because an agent with its own identity may still be reaching your systems on a human's behalf. For interactive agents that is usually correct, since the agent cannot exceed the person using it. The pattern that deserves scrutiny is the one where **a single human's credentials end up serving every caller**, which is how a convenience becomes a privilege-escalation path nobody documented. Ask of every agent, and of every tool inside it, since these are configured separately: *whose permissions does this carry, and does one person's access serve everybody?*

#### Inventory: the board you watch

{: .no_toc }

An identity per agent is only useful if something is counting the agents. **Agent 365** (**GA 2026-05-01**, per-user licensing, included in Microsoft 365 E7) supplies that layer, with the **Agent Registry** as the roll call. It is the same registry whose four publisher types you met in Question 0.[^agent365] Microsoft's guidance is that E5 *"works best… as a pre-requisite."*

#### Govern by risk, not by checklist

{: .no_toc }

**Here is the sharpest sentence Microsoft has published on agent governance:**

> *"A single governance checklist applied to every agent fails in both directions. It over-governs simple agents… It under-governs complex agents…"*[^governrisk]

That failure mode is worth sitting with, because most organizations pick one and suffer. Over-govern, and your meeting-summarizer needs a change advisory board, so nobody builds anything. Under-govern, and the agent with write access to your ERP gets the same review as the meeting summarizer.

Microsoft's sorting rule is the **assist-to-execute line**, quoted in full because the wording does real work:

> *"The clearest risk signal is the assist-to-execute line. An agent that drafts a paragraph, suggests an answer, or summarizes a document **assists** a person who stays in the loop and owns the outcome. An agent that updates a customer record, submits a ticket, or moves money **executes** a change in a system of record."*[^governrisk]

Sort your estate into tiers on that basis:

| Tier | Scope (Microsoft's words) | Required controls |
| :--- | :--- | :--- |
| **Tier 1: Low risk**<br>Individual productivity agents | "assist one person or a small team with everyday work, such as summarizing, drafting, and searching" | Named owner; basic monitoring of usage and errors; standard release checklist; self-service deployment within published guardrails |
| **Tier 2: Medium risk**<br>Expert-knowledge and internal service agents | "answer domain questions or run internal services where a wrong answer can mislead people or disrupt operations" | Named owner **plus** a domain-expert validator; knowledge-quality monitoring; formal release gate; accuracy tracking and feedback loops |
| **Tier 3: High risk**<br>Business-critical agents | Agents whose failure damages the business directly | The heaviest controls in your organization; treat as you would a change to a system of record |

Microsoft's closing instruction is the one to put on the wall: **"Sort every agent by what it does, not by how impressive it looks."**

#### Shadow AI: the trust boundary you didn't draw

{: .no_toc }

**Every boundary discussed above assumes your organization drew it. Here is the one your users draw for you.**

**The Analogy: The Unlocked Side Door.** You can spend a fortune on the lobby turnstiles, the badge readers, and the visitor log. None of it matters if someone props open the loading-bay door because it's a shorter walk to the car park. Autonomous AI agents that an employee installs on a laptop are that door: capable, unbadged, unlogged, and inside.

This is no longer hypothetical, and Microsoft is no longer treating it as such. It now ships **detection and blocking** for unsanctioned local AI agents:

- **Microsoft 365 admin center, Shadow AI** (**Frontier / public preview**). Requires **E5**, Intune enrollment, Frontier opt-in, and Global Secure Access for traffic metadata. **OpenClaw** is currently the only agent with **both detection *and* blocking** available; blocking creates an Intune policy named **`A365 - Block OpenClaw`**.
- **Microsoft Intune** ships a **"Local AI Agent Baseline - OpenClaw"** security baseline, collects device properties that discover *"local AI agents, like OpenClaw,"* and has in-development work to mark devices noncompliant when prohibited AI agents are found.
- **Microsoft Defender for Endpoint** local AI agent discovery (**Preview**) enumerates a category it calls *"Claw-based agents: OpenClaw, Clawpilot, QClaw, Claw/Nanobot,"* alongside **AI agent runtime protection**.
- **Detection only, no blocking today:** ChatGPT Desktop, Ollama Desktop, Poe Desktop, Claw/ZeroClaw, OpenCode, Claude Desktop.

Two operational facts to design around: Intune policy propagation takes **15 minutes to 8 hours**, and **blocking applies only to managed Windows devices enrolled in Intune**. An unmanaged laptop is outside every control on this list.

**Treat this as a decision input, not an afterthought.** If your people can install an autonomous local agent on a device that touches corporate data, that is a trust-boundary question, and you must answer it *before* you architect anything, because it changes what "inside the boundary" means. The uncomfortable version of the question: *would I know?*

{: .note }
> Detailed matrices for network isolation, identity, and governance live in [Technologies]({{ '/docs/technologies#network-isolation-decision-matrix' | relative_url }}) and [Evaluation Criteria]({{ '/docs/evaluation-criteria#governance--compliance-the-security-perimeter' | relative_url }}).

---

### Question 6: Scale and Cost Requirements

{: .no_toc }

**The Analogy: The Three Meters.** An old house has one electricity bill. A converted house has three: gas, electric, and water, each with its own meter, its own supplier, and its own way of surprising you. An AI estate is a converted house. The architect who tracks only Azure tokens will be genuinely astonished by the invoice.

**Meter 1: Copilot Credits (the Microsoft 365 side).** Pay-as-you-go at **$0.01 per credit**. This is what metered agent usage draws down for Copilot Chat and agent scenarios in Microsoft 365.

**Meter 2: GitHub AI credits (the developer side).** Also **1 credit = $0.01**. Copilot **Business** includes **1,900 credits per user per month**; **Enterprise** includes **3,900**. Two things every architect should internalize: **code completions and next edit suggestions are not billed**, so the everyday flow is free at the margin. And a promotional allowance of **3,000 / 7,000** is running that **ends 2026-09-01**. Budget against the 1,900/3,900 baseline, not the promo. See The Migration Calendar at the end of this page.

**Meter 3: Azure (the platform side).** Pay-per-token by default, **Provisioned Throughput Units (PTU)** when you need predictable capacity and latency, **batch** when latency does not matter, and **priority processing** when it does. Sitting beside it: **Fabric Capacity Units (CUs)**, which is what your analytics-grounded agent quietly consumes.

Then model the shape of the demand:

- **Predictable spend** - Free (included) Copilot Chat for baseline pilots, Microsoft 365 Copilot per-user licensing when you need Graph grounding and in-app copilots, or Copilot Studio prepaid capacity packs for governed makers.
- **Variable spend with guardrails** - Microsoft Foundry/Foundry Agent Service pay-per-token, Copilot Studio PAYG metering, with rate limits and budget alerts to control spikes.
- **Custom throttling** - M365 Agents SDK or Agent Framework solutions where you own auto-scaling and rate limiting.
- **Zero marginal cost (Local)** - Windows AI Foundry / Edge AI (Phi-4-mini) for high-frequency, privacy-sensitive tasks where you trade cloud reasoning power for zero inference cost.

#### Prepurchase: two vehicles, one queue

{: .no_toc }

Microsoft offers **two distinct prepurchase plans**, and people routinely mistake them for one:[^p3plan][^copilotcreditp3]

| | **Copilot Credit Pre-Purchase Plan** | **Microsoft Agent Prepurchase Plan** |
| :--- | :--- | :--- |
| Unit | **CCCU** (Copilot Credit CUs) | **ACU** (Agent CUs) |
| Covers | Eligible Copilot Credit usage | Select services across **Microsoft Foundry, Microsoft Copilot Studio, Microsoft Fabric, and GitHub** |
| Value | 1 CCCU pays down US$1 of qualifying retail cost | 1 ACU pays down US$1 of qualifying retail cost, purchased at a tiered discount |

**The precedence chain: this is the part that changes your forecast.** Microsoft states the rule verbatim: *"Reservations always apply before prepurchase plans."* The full order:

1. Microsoft Foundry **PTU Reservations**
2. Microsoft **Fabric Capacity Reservations**
3. **Copilot Credit Prepurchase Plan**
4. **Microsoft Agent Prepurchase Plan:** *"Applied last to remaining AI usage across all platforms."*

**The principle to remember: narrow benefits burn before broad benefits.** Which means the broad plan is your safety net, not your first line of defense. Buy it to catch the spill, not to cover the core.

{: .warning }
> **Read the terms before you commit.** Both plans are Azure Reservations with a **1-year term**, **auto-renew is ON by default**, and **all purchases are final**: no cancellation, exchange, split, or merge. This is one of the few genuinely irreversible decisions in this entire framework. Treat it accordingly.

{: .note }
> See [Evaluation Criteria]({{ '/docs/evaluation-criteria#scale--performance-the-envelope' | relative_url }}) for capacity planning guidance and [Technologies]({{ '/docs/technologies' | relative_url }}) for service-specific quota references.

---

### Question 7: Can the Agent Take Destructive Actions?

{: .no_toc }

**Microsoft has a sharper name for what this question is really asking. It calls this the assist-to-execute line:**

> *"The clearest risk signal is the assist-to-execute line. An agent that drafts a paragraph, suggests an answer, or summarizes a document **assists** a person who stays in the loop and owns the outcome. An agent that updates a customer record, submits a ticket, or moves money **executes** a change in a system of record."*[^governrisk]

Everything below hangs off that one distinction. An agent that *assists* is wrong occasionally and a human catches it. An agent that *executes* is wrong occasionally and your finance team catches it, three weeks later, in a reconciliation. Same model, same prompt, completely different blast radius.

So ask the question plainly. *Does this thing change state in a system of record?* Let the answer set the guardrails:

- **Draft-only (assists)** - M365 Copilot keeps humans in control and logs activity automatically.[^m365admin]
- **Configurable execution (crosses the line under your control)** - Copilot Studio can call flows or APIs, so design approval steps and audit coverage explicitly.[^agentflows][^humanreview]
- **Autonomous execution (executes)** - Microsoft Foundry/Foundry Agent Service (tool calling, OpenTelemetry tracing) and M365 Agents SDK (custom guardrails) enable full automation, but only when you provide your own safety framework.[^aifoundrytrace][^agentssdk]

Pair this with the risk tiers in Question 5. They are the same idea viewed from the governance side rather than the design side. And keep Microsoft's instruction in view: **"Sort every agent by what it does, not by how impressive it looks."**

**One nuance worth knowing before you assume code execution equals danger.** Agents increasingly write and run code to do the things models do badly, such as exact arithmetic or assembling a file. That sounds like it should raise the risk tier, and often it does not, because the execution environment may have no way out. Copilot Studio's sandbox is the clearest current example: code running there cannot call an API, send mail, or write to a document library regardless of what it imports, and every external effect still has to travel through a configured tool. **The question is never "can it run code?" It is "what can the code reach?"** An agent that computes in an isolated sandbox and then calls one approved tool is easier to reason about than an agent that writes no code at all but holds a connector to your ERP.

{: .tip }
> Use the [Action Safety Guardrail Playbook]({{ '/docs/evaluation-criteria#the-action-safety-guardrail-playbook' | relative_url }}) for guardrail recipes and [Evaluation Criteria]({{ '/docs/evaluation-criteria#action-safety--content-safety' | relative_url }}) to score risk.

---

### Question 8: Team Skills & Ownership

{: .no_toc }

Select a platform your organization can build and sustain.

- **Makers / fusion teams** - Copilot Studio, AI Builder, Power Apps Plan Designer (AI-assisted architecture).[^copilotstudio][^aibuilderoverview]
- **Professional developers** - M365 Agents SDK, Microsoft Foundry, Agent Framework, Teams SDK, with full CI/CD ownership.[^declarativecomparison][^agentstoolkitoverview][^foundryoverview]
- **AI/ML engineers** - Microsoft Foundry and Azure Machine Learning for custom models and evaluations.[^aiarchitecture]
- **Integration architects** - Logic Apps, API Management, Power Automate for enterprise workflows and connector governance.[^logicappsoverview]

Also name the operating model:

| Owner | Accountability |
| :--- | :--- |
| **Platform team** | Shared guardrails, identity, network, policy, observability, and approved patterns |
| **Workload team** | Business outcome, domain data, user experience, testing, and day-to-day improvement |
| **AI CoE** | Standards, reusable assets, intake process, skills development, and advisory review |

If nobody owns the agent after launch, you did not build a product. You created a liability with a chat interface.

{: .tip }
> The skills matrix in [Evaluation Criteria]({{ '/docs/evaluation-criteria#skills--resources-delivery-team' | relative_url }}) keeps the decision evidence-based.

---

### Question 9: Does the Agent Need to Initiate Actions?

{: .no_toc }

Determine whether the agent is purely reactive or must trigger events on its own.

- **Reactive with delegated execution** - M365 Copilot waits for a user prompt but can sustain background execution via **Copilot Cowork** (**GA worldwide 2026-06-16**), breaking complex tasks into plans that run with human checkpoints. Copilot Studio Declarative Agents remain prompt-initiated.[^m365reactive][^copilotstudioevent]
- **Proactive capable** - Copilot Studio custom engine agents (Power Automate triggers), Azure Logic Apps, Microsoft Foundry/Foundry Agent Service integrations, and M365 Agents SDK listeners can respond to schedules, webhooks, or system alerts.[^logicappstrigger][^agentservicega]
Declarative Agents are reactive by design; proactive workflows require custom engine orchestration or event-driven services.

{: .tip }
> Use the automation sections in [Implementation Patterns]({{ '/docs/implementation-patterns#pattern-4-multi-channel-custom-engine-agent-with-m365-agents-sdk' | relative_url }}) to blueprint event-driven designs.

---

## Timeless Principles for AI Architecture

These principles keep the framework durable as products rename or shift capabilities.

- **Standardize first:** Favor open or widely adopted extensibility standards (today that means MCP) to avoid reimplementing the same integrations.
- **Cloud-to-edge continuity:** Design so workloads can move between cloud, edge, and local runtime based on latency, data gravity, or cost - not vendor defaults.
- **Composability over monoliths:** Build small, specialized agents that can delegate or coordinate (A2A/connected agents) instead of a single brittle mega-agent.
- **Integrated security by design:** Pick platforms with identity, network boundary, content safety, and auditability built in-do not bolt them on later.
- **Unify the data estate:** Keep operational, analytical, and search data coherent to simplify grounding, evaluations, and governance.

---

[^uxguidance]: *Creating a dynamic UX: guidance for generative AI applications*, Microsoft Learn. Updated 2024-09-26 (~22 months old, currency-flagged). [https://learn.microsoft.com/en-us/microsoft-cloud/dev/copilot/isv/ux-guidance](https://learn.microsoft.com/en-us/microsoft-cloud/dev/copilot/isv/ux-guidance)
[^standardsetup]: *Built-in enterprise readiness with standard agent setup*, Microsoft Learn. Updated 2026-02-27. [https://learn.microsoft.com/en-us/azure/foundry/agents/concepts/standard-agent-setup](https://learn.microsoft.com/en-us/azure/foundry/agents/concepts/standard-agent-setup)
[^aiagentadoption]: *AI agent adoption*, Microsoft Learn. Updated 2025-12-03. [https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/ai-agents/](https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/ai-agents/)
[^whennotagents]: *Business strategy plan: When not to use AI agents*, Microsoft Learn. Updated 2025-12-05. [https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/ai-agents/business-strategy-plan#when-not-to-use-ai-agents](https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/ai-agents/business-strategy-plan#when-not-to-use-ai-agents)
[^transcriptcontrols]: *Control transcript access and retention*, Microsoft Learn. Updated 2025-11-10. [https://learn.microsoft.com/en-us/microsoft-copilot-studio/admin-transcript-controls](https://learn.microsoft.com/en-us/microsoft-copilot-studio/admin-transcript-controls)
[^copilotcalls]: *Manage Microsoft 365 Copilot in Teams calls*, Microsoft Learn. Updated 2025-07-01. [https://learn.microsoft.com/en-us/microsoftteams/copilot-teams-calling-transcription](https://learn.microsoft.com/en-us/microsoftteams/copilot-teams-calling-transcription)
[^m365admin]: *Copilot in Microsoft 365 admin centers*, Microsoft Learn. Updated 2025-10-23. [https://learn.microsoft.com/en-us/microsoft-365/copilot/copilot-for-microsoft-365-admin](https://learn.microsoft.com/en-us/microsoft-365/copilot/copilot-for-microsoft-365-admin)
[^agentflows]: *Agent flows in Microsoft Copilot Studio FAQ*, Microsoft Learn. Updated 2025-04-14. [https://learn.microsoft.com/en-us/microsoft-copilot-studio/flows-faqs](https://learn.microsoft.com/en-us/microsoft-copilot-studio/flows-faqs)
[^humanreview]: *Use your prompt in Power Automate*, Microsoft Learn. Updated 2026-01-14. [https://learn.microsoft.com/en-us/ai-builder/use-a-custom-prompt-in-flow](https://learn.microsoft.com/en-us/ai-builder/use-a-custom-prompt-in-flow)
[^aifoundrytrace]: *Set up tracing in Microsoft Foundry (preview)*, Microsoft Learn. Updated 2026-03-27. [https://learn.microsoft.com/en-us/azure/foundry/observability/how-to/trace-agent-setup](https://learn.microsoft.com/en-us/azure/foundry/observability/how-to/trace-agent-setup)
[^agentssdk]: *Create and deploy an agent with Microsoft 365 Agents SDK*, Microsoft Learn. Updated 2025-09-23. [https://learn.microsoft.com/en-us/microsoft-365/copilot/extensibility/create-deploy-agents-sdk](https://learn.microsoft.com/en-us/microsoft-365/copilot/extensibility/create-deploy-agents-sdk)
[^copilotstudio]: *Copilot Studio overview*, Microsoft Learn. Updated 2026-02-09. [https://learn.microsoft.com/en-us/microsoft-copilot-studio/fundamentals-what-is-copilot-studio](https://learn.microsoft.com/en-us/microsoft-copilot-studio/fundamentals-what-is-copilot-studio)
[^aibuilderoverview]: *Overview of AI Builder*, Microsoft Learn. Updated 2026-01-14. [https://learn.microsoft.com/en-us/ai-builder/overview](https://learn.microsoft.com/en-us/ai-builder/overview)
[^declarativecomparison]: *Choose the right tool to build your Declarative Agent*, Microsoft Learn. Updated 2026-02-04. [https://learn.microsoft.com/en-us/microsoft-365/copilot/extensibility/declarative-agent-tool-comparison](https://learn.microsoft.com/en-us/microsoft-365/copilot/extensibility/declarative-agent-tool-comparison)
[^agentstoolkitoverview]: *Microsoft 365 Agents Toolkit Overview*, Microsoft Learn. Updated 2025-09-03. [https://learn.microsoft.com/en-us/microsoftteams/platform/toolkit/agents-toolkit-fundamentals](https://learn.microsoft.com/en-us/microsoftteams/platform/toolkit/agents-toolkit-fundamentals)
[^foundryoverview]: *What is Microsoft Foundry?*, Microsoft Learn. Updated 2026-03-13. [https://learn.microsoft.com/en-us/azure/foundry/what-is-foundry](https://learn.microsoft.com/en-us/azure/foundry/what-is-foundry)
[^aiarchitecture]: *AI architecture design*, Microsoft Learn. Updated 2026-01-13. [https://learn.microsoft.com/en-us/azure/architecture/ai-ml/](https://learn.microsoft.com/en-us/azure/architecture/ai-ml/)
[^logicappsoverview]: *What is Azure Logic Apps?*, Microsoft Learn. Updated 2025-09-11. [https://learn.microsoft.com/en-us/azure/logic-apps/logic-apps-overview](https://learn.microsoft.com/en-us/azure/logic-apps/logic-apps-overview)
[^m365reactive]: *Privacy and protections*, Microsoft Learn. Updated 2026-03-03. [https://learn.microsoft.com/en-us/copilot/privacy-and-protections](https://learn.microsoft.com/en-us/copilot/privacy-and-protections)
[^logicappstrigger]: *Agentic workflows and the agent loop in Azure Logic Apps*, Microsoft Learn. Updated 2026-02-19. Consumption is explicitly in preview; Standard carries no preview banner on the agent loop, though some Standard capabilities (e.g. using an LLM API) are marked preview. [https://learn.microsoft.com/en-us/azure/logic-apps/agent-workflows-concepts](https://learn.microsoft.com/en-us/azure/logic-apps/agent-workflows-concepts)
[^cpsteams]: *Get started with Copilot Studio for Teams*, Microsoft Learn. Classic chatbot creation retirement and Teams-plan maker scope. [https://learn.microsoft.com/en-us/microsoft-copilot-studio/fundamentals-get-started-teams](https://learn.microsoft.com/en-us/microsoft-copilot-studio/fundamentals-get-started-teams)
[^agentservicega]: *What is Microsoft Foundry Agent Service?*, Microsoft Learn. Updated 2026-03-25. [https://learn.microsoft.com/en-us/azure/foundry/agents/overview](https://learn.microsoft.com/en-us/azure/foundry/agents/overview)
[^copilotstudioevent]: *Create automated copilots triggered by events*, Microsoft Learn. GA 2025-03-24. [https://learn.microsoft.com/en-us/power-platform/release-plan/2024wave2/microsoft-copilot-studio/create-automated-copilots-triggered-events](https://learn.microsoft.com/en-us/power-platform/release-plan/2024wave2/microsoft-copilot-studio/create-automated-copilots-triggered-events)
[^agui-overview]: *AG-UI integration with Agent Framework*, Microsoft Learn. Preview, Updated 2025-11-11. [https://learn.microsoft.com/en-us/agent-framework/integrations/ag-ui/](https://learn.microsoft.com/en-us/agent-framework/integrations/ag-ui/)
[^copilotforall]: *Overview of Microsoft 365 Copilot Chat*, Microsoft Learn. Updated 2026-01-20. [https://learn.microsoft.com/en-us/copilot/overview](https://learn.microsoft.com/en-us/copilot/overview)
[^copilot-licensing]: *License options for Microsoft 365 Copilot*, Microsoft Learn. Updated 2026-01-20. [https://learn.microsoft.com/en-us/microsoft-365-copilot/microsoft-365-copilot-licensing#microsoft-365-copilot-chat](https://learn.microsoft.com/en-us/microsoft-365-copilot/microsoft-365-copilot-licensing#microsoft-365-copilot-chat)
[^capabilityenvisioning]: *Choosing an approach with Capability Envisioning*, Microsoft Learn. Updated 2025-01-16 (~18 months old, currency-flagged); ISV-scoped. [https://learn.microsoft.com/en-us/microsoft-cloud/dev/copilot/isv/capability-envisioning](https://learn.microsoft.com/en-us/microsoft-cloud/dev/copilot/isv/capability-envisioning)
[^cafaiadoption]: *AI adoption (CAF)*, Microsoft Learn. Updated 2026-01-07. [https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/ai/](https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/ai/)
[^cafaiarch]: *CAF AI PaaS architectures*, Microsoft Learn. Updated 2025-12-03. [https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/ai/platform/architectures](https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/ai/platform/architectures)
[^raistandard]: *Microsoft Responsible AI*: principles and approach. [https://aka.ms/RAI](https://aka.ms/RAI) · *Responsible AI policies (CAF)*: [https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/ai/responsible-ai-policies](https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/ai/responsible-ai-policies) · *Microsoft AI principles and approach*: [https://www.microsoft.com/en-us/ai/principles-and-approach](https://www.microsoft.com/en-us/ai/principles-and-approach)
[^m365adoption]: *Microsoft 365 Copilot adoption guide*, Microsoft Learn. Updated 2026-03-24. [https://learn.microsoft.com/en-us/microsoft-365/copilot/microsoft-365-copilot-enablement-resources](https://learn.microsoft.com/en-us/microsoft-365/copilot/microsoft-365-copilot-enablement-resources)
[^p3plan]: *Optimize Microsoft Foundry and Copilot Credit costs with Microsoft Agent pre-purchase plan*, Microsoft Learn. Updated 2026-07-17. [https://learn.microsoft.com/en-us/azure/cost-management-billing/reservations/agent-pre-purchase](https://learn.microsoft.com/en-us/azure/cost-management-billing/reservations/agent-pre-purchase)
[^copilotcreditp3]: *Copilot Credit Pre-Purchase Plan*, Microsoft Learn. Updated 2026-07-17. [https://learn.microsoft.com/en-us/azure/cost-management-billing/reservations/copilot-credit-p3](https://learn.microsoft.com/en-us/azure/cost-management-billing/reservations/copilot-credit-p3)
[^extensibilityoverview]: *Extend Microsoft 365 Copilot: agents overview*, Microsoft Learn. [https://learn.microsoft.com/en-us/microsoft-365/copilot/extensibility/agents-overview](https://learn.microsoft.com/en-us/microsoft-365/copilot/extensibility/agents-overview)
[^planningguide]: *Microsoft 365 Copilot extensibility planning guide*, Microsoft Learn. [https://learn.microsoft.com/en-us/microsoft-365/copilot/extensibility/planning-guide](https://learn.microsoft.com/en-us/microsoft-365/copilot/extensibility/planning-guide)
[^m365agentsadmin]: *Microsoft 365 agents admin guide*, Microsoft Learn. [https://learn.microsoft.com/en-us/microsoft-365/copilot/agent-essentials/m365-agents-admin-guide](https://learn.microsoft.com/en-us/microsoft-365/copilot/agent-essentials/m365-agents-admin-guide)
[^agentregistry]: *Agent Registry in the Microsoft 365 admin center*, Microsoft Learn. [https://learn.microsoft.com/en-us/microsoft-365/admin/manage/agent-registry](https://learn.microsoft.com/en-us/microsoft-365/admin/manage/agent-registry)
[^entraagentid]: *What is Microsoft Entra Agent ID?*, Microsoft Learn. *"Agent ID is available for all Microsoft Entra customers."* [https://learn.microsoft.com/en-us/entra/agent-id/what-is-microsoft-entra-agent-id](https://learn.microsoft.com/en-us/entra/agent-id/what-is-microsoft-entra-agent-id) · *What's new in Microsoft Entra Agent ID*: *"Microsoft Entra Agent ID is now generally available."* [https://learn.microsoft.com/en-us/entra/agent-id/whats-new-agent-id](https://learn.microsoft.com/en-us/entra/agent-id/whats-new-agent-id)
[^agent365]: *Microsoft Agent 365 overview*, Microsoft Learn. GA 2026-05-01. [https://learn.microsoft.com/en-us/microsoft-agent-365/overview](https://learn.microsoft.com/en-us/microsoft-agent-365/overview)
[^governrisk]: *Govern agents by risk*, Microsoft Learn (Agentic Center of Excellence). [https://learn.microsoft.com/en-us/agents/center-of-excellence/govern-agents-risk](https://learn.microsoft.com/en-us/agents/center-of-excellence/govern-agents-risk)
[^foundryworkflowsretire]: *Microsoft Foundry workflows*, Microsoft Learn. Retirement notice and migration guide. [https://learn.microsoft.com/en-us/azure/foundry/](https://learn.microsoft.com/en-us/azure/foundry/)

## Phase 3: Scenario-Specific Selection

**Purpose:** Given the technology groupings from Phase 2, apply scenario-specific criteria to select the optimal tool for your specific requirements.

{: .note }
> **This phase answers: "Given my groupings, which specific technology should I choose?"**

**Apply these criteria in order:**

Phase 3 is about evidence: run short, time-boxed experiments to validate the simplest option that works. Compare SaaS vs low-/pro-code on time-to-market, fit, and governance before you commit.

### 1. Time to Market Urgency

{: .no_toc }

Think in experiment steps: start with the fastest viable option (often SaaS or managed PaaS), move to low-/pro-code when specific requirements demand it. Delivery speed depends on your team's skills and familiarity; learning curves can invert what looks fastest.

**Days (Immediate):**

- M365 Copilot (built-in agents, no setup)
- Copilot Studio templates (Declarative Agents)

**Weeks (Fast):**

- Copilot Studio (custom engine agents with low-code)
- Azure Logic Apps (visual designer + agentic workflows)
- M365 Agents SDK (with Teams SDK for Teams-only)

**Months (Custom):**

- Microsoft Foundry + custom development
- M365 Agents SDK + Agent Framework (complex orchestration)
- Foundry Agent Service (managed PaaS for enterprise-scale)

{: .note }
> **Cross-reference:** [Scenarios]({{ '/docs/scenarios' | relative_url }})

---

### 2. Managed vs. Self-Managed Preference

{: .no_toc }

Decide how much you want to own and what you're willing to trade: SaaS for speed/less to manage, PaaS (Foundry/Agent Service) for governed extensibility with minimal plumbing, self-managed only when full-stack control is necessary. An 80% fit that ships now can beat a perfect fit that arrives late; factor team skills and learning curves when you choose.

**Managed (SaaS/PaaS):**

- Microsoft 365 Copilot (fully managed)
- Copilot Studio (SaaS platform)
- Foundry Agent Service (managed agent runtime)

**Self-Managed (Infrastructure Control):**

- Microsoft Foundry (you manage compute, networking)
- M365 Agents SDK (you host and deploy)
- Azure Logic Apps (Standard plan, self-hosted integration runtime)

**Hybrid:**

- Copilot Studio with BYOK/BYOM (managed platform + your infrastructure)
- Microsoft Foundry + Foundry Agent Service (code-first + managed runtime)

Prefer platforms and connectors that support open/interoperable patterns (e.g., MCP) to reduce switching costs as products evolve.

{: .note }
> **Cross-reference:** [Feature Comparison]({{ '/docs/feature-comparison' | relative_url }}) - Deployment row

---

### 3. Complexity Level

{: .no_toc }

**Low Complexity (Simple Q&A, basic actions):**

- Copilot Studio Declarative Agents
- M365 Copilot with Graph Connectors
- AI Builder models (prebuilt document processing)

**Medium Complexity (Multi-step workflows, integrations):**

- Copilot Studio custom engine agents with BYOK/BYOM
- M365 Agents SDK with simple orchestration
- Azure Logic Apps agentic workflows

**High Complexity (Multi-agent, custom orchestration, advanced evals):**

- Microsoft Foundry + Foundry Agent Service
- M365 Agents SDK + Agent Framework (checkpointing, workflow orchestration)
- Custom solutions with Agent Framework

{: .note }
> **Cross-reference:** [Evaluation Criteria]({{ '/docs/evaluation-criteria' | relative_url }}) - Complexity table

---

### 4. Budget & Licensing Model

{: .no_toc }

**Predictable Per-User:**

- M365 Copilot add-on ($30/user/month, requires eligible base license; web-based Copilot Chat is included)[^copilot-licensing]

**Usage-Based (No upfront commitment):**

- Copilot Studio Pay-As-You-Go ($0.01/Copilot Credit)
- Microsoft Foundry (serverless, pay-per-token)

**Prepaid Capacity:**

- Copilot Studio prepaid packs (predictable high-volume)
- Microsoft Foundry provisioned throughput (PTU)

**Prepurchase (two distinct plans):**

- **Copilot Credit Pre-Purchase Plan:** CCCUs against eligible Copilot Credit usage[^copilotcreditp3]
- **Microsoft Agent Prepurchase Plan:** ACUs against select services across Microsoft Foundry, Copilot Studio, Microsoft Fabric, and GitHub[^p3plan]
- Tiered pricing with volume discounts; 1-year term; auto-renew ON by default; **all purchases final**
- Remember the precedence: *"Reservations always apply before prepurchase plans"* (see Question 6)

**Azure Consumption:**

- Microsoft Foundry (token-based pricing)
- Foundry Agent Service (compute + storage)
- Azure Logic Apps (execution-based)

{: .note }
> **Cross-reference:** [Evaluation Criteria]({{ '/docs/evaluation-criteria' | relative_url }}) - Budget Considerations

---

### 5. Integration Requirements

{: .no_toc }

**Need Enterprise Connectors (1,400+)?**

- **Azure Logic Apps** (cloud + on-premises, MCP server, agentic workflows)

**Need Power Platform Connectors (1,000+)?**

- **Copilot Studio** + **Power Automate** (Cloud Flows or Agent Flows)

**Need Document Processing?**

- **AI Builder** (Power Platform scenarios)
- **Azure Document Intelligence** (custom/advanced scenarios)

**Need Multi-Channel Deployment?**

- **M365 Agents SDK** (10+ channels: Web, Mobile, SMS, WhatsApp, Teams, M365 Copilot)
- **Copilot Studio** (M365 + custom channels)

{: .note }
> **Cross-reference:** [Implementation Patterns]({{ '/docs/implementation-patterns' | relative_url }}) - Pattern 4: Multi-Channel Custom Engine Agent

---

### 6. Orchestration-Specific Needs

{: .no_toc }

**Need Checkpointing (Long-running, human-in-loop)?**

- **Microsoft Agent Framework** (Executor/Edge workflows, built-in checkpointing)
- **Azure Logic Apps** (state management, workflow designer)

**Need Multi-Agent Collaboration?**

- **Foundry Agent Service** (incoming A2A endpoint **Preview** for lightweight direct delegation; not deterministic workflow orchestration)
- **Copilot Studio.** **Confirmed GA:** generative orchestration (the default for new agents), computer use (May 2026), and A2A (April 2026). **Status not stated by Microsoft** for the rest of the multi-agent surface: child/inline agents, connected Copilot Studio agents, Foundry agents, Fabric data agent connections, and M365 Agents SDK agent connections. The what's-new feed currently shows **"Connect other agents (Preview)"**, which contradicts any blanket GA reading.
- **Agent Framework** (Handoff/Magentic patterns)

**Need Workflow Automation + AI?**

- **Azure Logic Apps agentic workflows** (the **agent loop**; autonomous/conversational, MCP server)
- **Copilot Studio Agent Flows** (native flows in Studio)
- **Power Automate Cloud Flows** (1,000+ connectors, long-running)

{: .warning }
> **Status, stated precisely.** **Consumption** agentic workflows are **explicitly in preview**. Microsoft's banner reads *"Consumption agentic workflows capability is in preview and is subject to the Supplemental Terms of Use for Microsoft Azure Previews."* **Standard** carries **no preview banner on the agent loop itself**, though specific Standard capabilities (such as using an LLM API) *are* marked preview. Note the careful wording: no preview banner is not the same as a GA statement, and Microsoft has not made one here. Check the current status for the exact capability you need.[^logicappstrigger]

{: .note }
> **Cross-reference:** [Feature Comparison]({{ '/docs/feature-comparison' | relative_url }}) - Workflow Orchestration Platform Comparison

---

### 7. Operationalize & Govern (CAF + Responsible AI)

{: .no_toc }

Selection is only half the decision. Before you finalize, confirm you can **adopt, govern, and operate** the solution:

- **CAF AI adoption:** Ensure you can execute Strategy → Plan → Ready → Govern → Secure → Manage for the chosen platform.[^cafaiadoption]
- **Architecture baselines:** Start from proven AI architectures and design guides before custom designs.[^cafaiarch][^aiarchitecture]
- **Agent lifecycle:** If you're building agents, align to CAF's four phases: **Plan for agents → Govern & secure agents → Build agents → Manage agents**.[^aiagentadoption]
- **Responsible AI:** Validate the full lifecycle against Microsoft's six Responsible AI principles (Fairness, Reliability & Safety, Privacy & Security, Inclusiveness, Transparency, and Accountability) and your own CAF responsible AI policies.[^raistandard]
- **Change management:** If Microsoft 365 Copilot is part of the rollout, align to adoption and readiness guidance.[^m365adoption]

---

### Phase 3 Decision Output Template

{: .no_toc }

After applying all criteria, document your selection:

**Selected Technology:** [Your Choice]

**Rationale:**

- **Phase 2 Groupings:** [List groupings from 9 questions]
- **Time to Market:** [Days/Weeks/Months + why this matters]
- **Managed vs Self-Managed:** [Preference + reasoning]
- **Complexity Level:** [Low/Medium/High + specific requirements]
- **Budget Model:** [Per-user/Usage/Consumption + constraints]
- **Integration Needs:** [Key connectors/systems required]
- **Orchestration Requirements:** [Checkpointing/Multi-agent/Workflows]


**Architecture Pattern:** [Reference [Implementation Patterns]({{ '/docs/implementation-patterns' | relative_url }}) Pattern 1-5]

**Trade-offs Accepted:** [What you're giving up, reference [Evaluation Criteria]({{ '/docs/evaluation-criteria' | relative_url }})]

**Next Steps:** [Pilot, POC, or full deployment]

---

## Phase 4: Operate, Govern Continuously, and Retire

Selection is the start of the job, not the end. Governance is not a gate you pass once. It is the nightly service. Treat the running estate the way an air traffic controller treats a sky full of planes: every agent on the board, named, owned, and watched.

- **One board, one control plane:** Keep every agent in a single inventory or registry. No shadow deployments.
- **One identity per agent:** Actions must be attributable. Bind each agent to a distinct identity and owner.
- **Watch for drift:** Behavior and risk change after launch. Monitor activity and red-team after major model or architecture changes.
- **Manage the meter:** Cap tokens, right-size models, and route deterministic steps to plain code.
- **Retire what went quiet:** Audit on a schedule and decommission dormant agents.

An agent you cannot see, attribute, or switch off is not in production. It is just at large.

---

## The Migration Calendar

**Nothing forces an architecture decision like a date.**

You can argue about the elegant option for two quarters. You cannot argue with a retirement notice. Every framework on this page helps you choose well, but the calendar is what makes you choose *at all*, and it is the most reliably ignored artifact in enterprise AI planning. Print it. Put the dates in the same place you keep certificate expiries, because that is exactly what they are.

**The Analogy: The Tide Table.** The tide is not negotiating with you. It is published, it is precise, and the only question is whether your boat is where it needs to be when the water moves.

| Date | What happens | Your move |
| :--- | :--- | :--- |
| ~~2025-11-10~~ *(passed)* | **GitHub App-based Copilot Extensions deprecated.** Note the scope: only GitHub App-based Extensions. Client-side VS Code Copilot Extensions remain fully supported. | Migrate to **MCP servers** |
| ~~June 2026~~ *(passed)* | **Copilot Studio for Teams: classic chatbot creation retired.** Verbatim: *"After the end of June 2026, it will no longer be possible to use the Copilot Studio for Teams app to create classic chatbots. The app will redirect you to the Copilot Studio web app instead."* **Scope:** this hits **makers on a Teams plan**, who *"are limited to creating agents that use classic orchestration… and they can only publish these agents to Microsoft Teams."* Standalone Copilot Studio subscriptions are unaffected. | Rebuild in the Copilot Studio web app[^cpsteams] |
| **2026-09-01** | **GitHub AI-credit promotion ends.** Business drops 3,000 → **1,900** credits/user/month; Enterprise 7,000 → **3,900**. | Re-baseline the developer budget against the standing allowance, not the promo |
| **2026-12-01** | **Microsoft Foundry retires workflows.** | Pick a migration path (see below) |
| **2027-03-31** | **Azure Cache for Redis Enterprise and Enterprise Flash retire** (disabled 2027-04-01), the nearest infrastructure deadline in the stack | Move to **Azure Managed Redis** (GA) |
| **2028-09-30** | **Azure Cache for Redis Basic, Standard, and Premium retire** (disabled 2028-10-01) | Move to **Azure Managed Redis** (GA) |

### The Foundry Workflows retirement, in Microsoft's words

{: .no_toc }

> *"Microsoft Foundry is retiring workflows on December 1, 2026. If you're looking to build new workflows, use Microsoft Agent Framework. To migrate existing workflows, see the Migration guide section of this article for all supported paths."*[^foundryworkflowsretire]

Three supported paths, and the right one depends on what you were actually using the visual designer *for*. That is a Question 4 answer, not a migration answer:

- **Microsoft Agent Framework:** the recommended path. Exported YAML is reusable with minimal changes.
- **Azure Logic Apps:** the path that keeps a visual designer, aimed at business-process automation. Microsoft's term for the capability is **agentic workflows**, built around an **agent loop**. Mind the status before you commit a migration to it: Consumption agentic workflows are explicitly in preview, and Standard carries no preview banner on the agent loop itself while some Standard capabilities are still marked preview.[^logicappstrigger]
- **Agent-to-agent (A2A):** the lightweight path when all you needed was a handoff between agents.

One detail worth knowing before you panic: **your YAML definitions remain executable when deployed as Hosted Agents.** What goes away after the date is the visual designer and in-portal execution. The logic survives; the canvas does not.

---

**Next:** [Scenarios]({{ '/docs/scenarios' | relative_url }}) - Apply the framework to real-world use cases

---
