---
layout: default
title: Decision Framework
nav_order: 2
description: "Three-phase decision methodology for selecting Microsoft AI technologies"
---

# Three-Phase Decision Methodology
{: .no_toc }

This framework integrates Microsoft's [Business-Experience-Technology (BXT) Framework](https://learn.microsoft.com/en-us/microsoft-cloud/dev/copilot/isv/business-envisioning), [Cloud Adoption Framework AI Strategy](https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/scenarios/ai/strategy), and [M365 Copilot Extensibility Decision Guidance](https://learn.microsoft.com/en-us/microsoft-365-copilot/extensibility/agents-overview).

💡 **See [Visual Framework]({{ '/docs/visual-framework' | relative_url }}) for workflow diagrams** that illustrate how to apply this framework as an intake process.


## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## Phase 1: Business Impact Assessment (BXT Framework)

Microsoft's official [Business-Experience-Technology (BXT) framework](https://learn.microsoft.com/en-us/microsoft-cloud/dev/copilot/isv/business-envisioning) requires every AI initiative to prove **Business viability**, **Experience desirability**, and **Technology feasibility** before you fund build work. Use this phase to quantify value, adoption, and delivery readiness up front—if any dimension falls short, pause or reshape the scenario before moving to technology choices.

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

### Decision Gate
{: .no_toc }

- ❌ **Any dimension scores low** → Revisit use case, defer project, or move to "Research/Incubate" quadrant
- ✅ **All dimensions score medium-high** → Proceed to Phase 2 (Technology Selection)

---

## Phase 2: Technology Groupings (Nine Critical Questions)

Apply these questions **sequentially** after passing the BXT assessment. Each question creates **technology groupings** rather than jumping to specific recommendations. The groupings feed into Phase 3 for final selection.

💡 **Important:** These questions create buckets/categories. Final technology selection happens in **Phase 3** based on scenario-specific criteria (time-to-market, complexity, budget, etc.).

---

### Question 1: User Experience Location
{: .no_toc }

Identify the primary place people will engage with the agent. The interaction surface immediately narrows the candidate technologies.

- **M365 apps** (Copilot Chat, Teams, Office Apps) → Stay inside the Microsoft 365 trust boundary with built-in agents, Copilot Studio M365 channels, or Graph connectors.
- **Custom or multi-channel** (web, mobile, SMS, email) → Use M365 Agents SDK, Azure AI Foundry, or Logic Apps to reach every endpoint consistently. Pair Agent Framework with the AG-UI protocol when you need streaming UI, shared state, or human-in-the-loop approvals in bespoke web/mobile experiences.[^agui-overview]
- **API/headless** workloads → Design for services that call the agent as a capability rather than a UI.

📎 Use the groupings from this question with the layer mappings in [Five-Layer Capability Model]({{ '/docs/capability-model' | relative_url }}) and the examples in [Scenarios]({{ '/docs/scenarios' | relative_url }}).

---

### Question 2: Build Style & Control Level
{: .no_toc }

Decide how much engineering control you need versus how fast you must ship.

- **Low-code / managed** – Copilot Studio Full, AI Builder, Copilot Studio Lite. Makers and developers can deliver in days when declarative orchestration is enough.
- **Pro-code / customizable** – M365 Agents SDK, Azure AI Foundry, Microsoft Agent Framework, AG-UI protocol (Preview), Teams AI Library. Full control over orchestration, hosting, and integrations while surfacing agents in any UI channel.[^agui-overview]
- **Hybrid** – Start in Copilot Studio for speed, then bring in Azure AI Foundry or Agent Framework when custom logic or private hosting is required.

🧭 For side-by-side capabilities, see the development approach matrices in [Quick Reference]({{ '/docs/quick-reference' | relative_url }}) and [Technologies]({{ '/docs/technologies' | relative_url }}).

---

### Question 3: Data Grounding Pattern
{: .no_toc }

Separate how you ground answers from how you persist history or analytics.

- **Grounding (RAG)** – Retrieve the right files or records per request (Microsoft Graph, Azure AI Search, Cosmos DB, PostgreSQL, SQL Server 2025). Standard agent setup provisions customer-owned Azure Storage, Azure AI Search, and Cosmos DB containers for thread data.[^standardsetup]
- **Memory** – Decide if conversations should persist (Copilot Studio Dataverse variables, Azure AI Agent Service thread stores, custom implementations).
- **Analytics** – Plan transcript retention, telemetry, and review processes before launch.

🧩 See [Implementation Patterns]({{ '/docs/implementation-patterns#pattern-3-microsoft-365-knowledge-grounding' | relative_url }}) for ingestion blueprints and [Evaluation Criteria]({{ '/docs/evaluation-criteria#6-memory-analytics--conversation-history' | relative_url }}) for scoring considerations.

---

### Question 4: Orchestration Complexity
{: .no_toc }

Match orchestration tooling to conversation and workflow depth.

- **Simple Q&A** – Declarative agents, Copilot Studio’s generative orchestration, built-in M365 Copilot experiences.
- **Deterministic workflows** – Copilot Studio Agent Flows, Azure Logic Apps, or Agent Framework workflows when you need checkpoints or human approval steps.
- **Multi-agent or custom logic** – Azure AI Agent Service connected agents, Agent Framework, or custom engines via M365 Agents SDK when collaboration or advanced reasoning is required.

🧠 The orchestration comparison tables in [Feature Comparison]({{ '/docs/feature-comparison' | relative_url }}) highlight the trade-offs.

---

### Question 5: Compliance & Trust Boundary
{: .no_toc }

Answer “Where does my data go, and who can act on it?” before choosing a platform.

- **M365 trust boundary** – Prompts, responses, and Graph data remain inside Microsoft 365; best for regulated organizations needing tenant guarantees.
- **Power Platform boundary** – Copilot Studio keeps core data in-region but inherits the compliance posture of every connector you call and sends web search queries to Bing consumer services.[^transcriptcontrols][^copilotcalls]
- **Azure landing zone** – Azure AI Foundry and Agent Service adopt your subscription’s network, identity, and policy controls, with private networking and customer-managed keys available by design.
- **Hybrid approaches** – Mix declarative and custom agents, or route everything through Azure API Management for centralized policy enforcement.

🔐 Detailed matrices for network isolation, identity, and governance live in [Technologies]({{ '/docs/technologies#network-isolation-capabilities' | relative_url }}) and [Evaluation Criteria]({{ '/docs/evaluation-criteria#governance--compliance' | relative_url }}).

---

### Question 6: Scale and Cost Requirements
{: .no_toc }

Model the usage pattern and budget envelope early so you can select the right consumption model.

- **Predictable spend** – M365 Copilot per-user licensing or Copilot Studio prepaid capacity packs.
- **Variable spend with guardrails** – Azure AI Foundry/Agent Service pay-per-token, Copilot Studio PAYG metering, with rate limits and budget alerts to control spikes.
- **Custom throttling** – M365 Agents SDK or Agent Framework solutions where you own auto-scaling and rate limiting.

📊 See [Evaluation Criteria]({{ '/docs/evaluation-criteria#scale--performance' | relative_url }}) for capacity planning guidance and [Technologies]({{ '/docs/technologies' | relative_url }}) for service-specific quota references.

---

### Question 7: Can the Agent Take Destructive Actions?
{: .no_toc }

Clarify action safety expectations and determine whether humans must remain in the loop.

- **Draft-only** – M365 Copilot keeps humans in control and logs activity automatically.[^m365admin]
- **Configurable execution** – Copilot Studio can call flows or APIs, so design approval steps and audit coverage explicitly.[^agentflows][^humanreview]
- **Autonomous execution** – Azure AI Foundry/Agent Service (tool calling, OpenTelemetry tracing) and M365 Agents SDK (custom guardrails) enable full automation, but only when you provide your own safety framework.[^aifoundrytrace][^agentssdk]

🛡️ Use the [Action Safety Guardrail Playbook]({{ '/docs/evaluation-criteria#action-safety-guardrail-playbook' | relative_url }}) for guardrail recipes and [Evaluation Criteria]({{ '/docs/evaluation-criteria#action-safety--content-safety' | relative_url }}) to score risk.

---

### Question 8: Team Skills & Ownership
{: .no_toc }

Select a platform your organization can build and sustain.

- **Makers / fusion teams** – Copilot Studio, AI Builder, Power Platform templates.[^copilotstudio][^aibuilderoverview]
- **Professional developers** – M365 Agents SDK, Azure AI Foundry, Agent Framework, Teams AI Library, with full CI/CD ownership.[^declarativecomparison][^agentstoolkitoverview][^foundryoverview]
- **AI/ML engineers** – Azure AI Foundry and Azure Machine Learning for custom models and evaluations.[^aiarchitecture]
- **Integration architects** – Logic Apps, API Management, Power Automate for enterprise workflows and connector governance.[^logicappsoverview]

📚 The skills matrix in [Evaluation Criteria]({{ '/docs/evaluation-criteria#skills--resources' | relative_url }}) keeps the decision evidence-based.

---

### Question 9: Does the Agent Need to Initiate Actions?
{: .no_toc }

Determine whether the agent is purely reactive or must trigger events on its own.

- **Reactive only** – M365 Copilot and Copilot Studio declarative agents wait for a user prompt before doing anything.[^m365reactive][^copilotstudioevent]
- **Proactive capable** – Copilot Studio custom engine agents (Power Automate triggers), Azure Logic Apps, Azure AI Foundry/Agent Service integrations, and M365 Agents SDK listeners can respond to schedules, webhooks, or system alerts.[^logicappstrigger][^agentservicega]

⚙️ Use the automation sections in [Implementation Patterns]({{ '/docs/implementation-patterns#pattern-4-multi-channel-custom-engine-agent' | relative_url }}) to blueprint event-driven designs.

---

[^standardsetup]: *Built-in enterprise readiness with standard agent setup*, Microsoft Learn. Updated 2025-06-16.
[^transcriptcontrols]: *Control transcript access and retention*, Microsoft Learn. Updated 2025-03-07.
[^copilotcalls]: *Manage Microsoft 365 Copilot in Teams calls*, Microsoft Learn. Updated 2025-07-01.
[^m365admin]: *Copilot in Microsoft 365 admin centers*, Microsoft Learn. Updated 2025-10-23.
[^agentflows]: *Agent flows in Microsoft Copilot Studio FAQ*, Microsoft Learn. Updated 2025-04-14.
[^humanreview]: *Use your prompt in Power Automate*, Microsoft Learn. Updated 2025-09-08.
[^aifoundrytrace]: *Trace and Observe AI Agents in Azure AI Foundry (preview)*, Microsoft Learn. Updated 2025-10-01.
[^agentssdk]: *Create and deploy an agent with Microsoft 365 Agents SDK*, Microsoft Learn. Updated 2025-09-23.
[^copilotstudio]: *Copilot Studio overview*, Microsoft Learn. Updated 2025-07-15.
[^aibuilderoverview]: *Overview of AI Builder*, Microsoft Learn. Updated 2025-08-29.
[^declarativecomparison]: *Choose the right tool to build your declarative agent*, Microsoft Learn. Updated 2025-09-17.
[^agentstoolkitoverview]: *Microsoft 365 Agents Toolkit Overview*, Microsoft Learn. Updated 2025-09-03.
[^foundryoverview]: *What is Azure AI Foundry?*, Microsoft Learn. Updated 2025-09-19.
[^aiarchitecture]: *AI architecture design*, Microsoft Learn. Updated 2025-02-03.
[^logicappsoverview]: *What is Azure Logic Apps?*, Microsoft Learn. Updated 2025-09-11.
[^m365reactive]: *Privacy and protections*, Microsoft Learn. Updated 2025-08-15.
[^logicappstrigger]: *Trigger an agent by using Logic Apps (preview)*, Microsoft Learn. Updated 2025-10-17.
[^agentservicega]: *What's new in Azure AI Foundry Agent Service*, Microsoft Learn. Updated 2025-05-15.
[^copilotstudioevent]: *Create automated copilots triggered by events*, Microsoft Learn. GA 2025-03-24.
[^agui-overview]: *AG-UI integration with Agent Framework*, Microsoft Learn. Preview, Updated 2025-11-11.

## Phase 3: Scenario-Specific Selection

**Purpose:** Given the technology groupings from Phase 2, apply scenario-specific criteria to select the optimal tool for your specific requirements.

💡 **This phase answers: "Given my groupings, which specific technology should I choose?"**

**Apply these criteria in order:**

### 1. Time to Market Urgency
{: .no_toc }

**Days (Immediate):**

- M365 Copilot (built-in agents, no setup)
- Copilot Studio templates (declarative agents)

**Weeks (Fast):**

- Copilot Studio (custom engine agents with low-code)
- Azure Logic Apps (visual designer + AI agent workflows)
- M365 Agents SDK (with Teams AI Library for Teams-only)

**Months (Custom):**

- Azure AI Foundry + custom development
- M365 Agents SDK + Agent Framework (complex orchestration)
- Azure AI Agent Service (managed PaaS for enterprise-scale)

💡 **Cross-reference:** [Scenarios]({{ '/docs/scenarios' | relative_url }})

---

### 2. Managed vs. Self-Managed Preference
{: .no_toc }

**Managed (SaaS/PaaS):**

- Microsoft 365 Copilot (fully managed)
- Copilot Studio (SaaS platform)
- Azure AI Agent Service (managed agent runtime)

**Self-Managed (Infrastructure Control):**

- Azure AI Foundry (you manage compute, networking)
- M365 Agents SDK (you host and deploy)
- Azure Logic Apps (Standard plan, self-hosted integration runtime)

**Hybrid:**

- Copilot Studio with BYOK/BYOM (managed platform + your infrastructure)
- Azure AI Foundry + Agent Service (code-first + managed runtime)

💡 **Cross-reference:** [Feature Comparison]({{ '/docs/feature-comparison' | relative_url }}) - Deployment row

---

### 3. Complexity Level
{: .no_toc }

**Low Complexity (Simple Q&A, basic actions):**

- Copilot Studio declarative agents
- M365 Copilot with Graph Connectors
- AI Builder models (prebuilt document processing)

**Medium Complexity (Multi-step workflows, integrations):**

- Copilot Studio custom engine agents with BYOK/BYOM
- M365 Agents SDK with simple orchestration
- Azure Logic Apps AI agent workflows

**High Complexity (Multi-agent, custom orchestration, advanced evals):**

- Azure AI Foundry + Azure AI Agent Service
- M365 Agents SDK + Agent Framework (checkpointing, workflow orchestration)
- Custom solutions with Agent Framework

💡 **Cross-reference:** [Evaluation Criteria]({{ '/docs/evaluation-criteria' | relative_url }}) - Complexity table

---

### 4. Budget & Licensing Model
{: .no_toc }

**Predictable Per-User:**

- M365 Copilot ($30/user/month, included in Microsoft 365 E5)

**Usage-Based (No upfront commitment):**

- Copilot Studio Pay-As-You-Go ($0.01/Copilot Credit)
- Azure AI Foundry (serverless, pay-per-token)

**Prepaid Capacity:**

- Copilot Studio prepaid packs (predictable high-volume)
- Azure OpenAI provisioned throughput (PTU)

**Azure Consumption:**

- Azure AI Foundry (token-based pricing)
- Azure AI Agent Service (compute + storage)
- Azure Logic Apps (execution-based)

💡 **Cross-reference:** [Evaluation Criteria]({{ '/docs/evaluation-criteria' | relative_url }}) - Budget Considerations

---

### 5. Integration Requirements
{: .no_toc }

**Need Enterprise Connectors (1,400+)?**

- **Azure Logic Apps** (cloud + on-premises, MCP server, AI agent workflows)

**Need Power Platform Connectors (1,000+)?**

- **Copilot Studio** + **Power Automate** (Cloud Flows or Agent Flows)

**Need Document Processing?**

- **AI Builder** (Power Platform scenarios)
- **Azure Document Intelligence** (custom/advanced scenarios)

**Need Multi-Channel Deployment?**

- **M365 Agents SDK** (10+ channels: Web, Mobile, SMS, WhatsApp, Teams, M365 Copilot)
- **Copilot Studio** (M365 + custom channels)

💡 **Cross-reference:** [Implementation Patterns]({{ '/docs/implementation-patterns' | relative_url }}) - Pattern 4: Multi-Channel Custom Engine Agent

---

### 6. Orchestration-Specific Needs
{: .no_toc }

**Need Checkpointing (Long-running, human-in-loop)?**

- **Microsoft Agent Framework** (Executor/Edge workflows, built-in checkpointing)
- **Azure Logic Apps** (state management, workflow designer)

**Need Multi-Agent Collaboration?**

- **Azure AI Agent Service** (connected agents, managed orchestration)
- **Copilot Studio** (child agents + connected agents, supports Fabric data agents)
- **Agent Framework** (Handoff/Magentic patterns)

**Need Workflow Automation + AI?**

- **Azure Logic Apps AI Agent Workflows** (autonomous/conversational, MCP server)
- **Copilot Studio Agent Flows** (native flows in Studio)
- **Power Automate Cloud Flows** (1,000+ connectors, long-running)

💡 **Cross-reference:** [Feature Comparison]({{ '/docs/feature-comparison' | relative_url }}) - Workflow Orchestration Platform Comparison

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

**Next:** [Five-Layer Capability Model]({{ '/docs/capability-model' | relative_url }}) - Map the Microsoft AI portfolio to the nine questions
