---
layout: default
title: Evaluation Criteria
nav_order: 6
description: "Framework for evaluating complexity, skills, budget, and governance"
---

# Evaluation Criteria
{: .no_toc }

**"Trade-offs, not solutions."**

This module is the **scoring rubric** for your architecture. Before you commit to a technology, you must evaluate the project against four hard constraints: **Architectural Load** (Complexity), **Delivery Capabilities** (Skills), **Economic Model** (Budget), and **Risk Profile** (Governance).

Use this page to turn abstract requirements into defensible engineering decisions.

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## 1. Complexity Assessment (Architectural Load)

**The Trade-off:** The "Inverse Law of Control." As you adopt higher-level abstractions (SaaS), you gain velocity but lose granular control over the runtime and orchestration.

**The Analogy:** Think of this like **Construction**.
* **Tier 1 (Furnished Condo):** You live in someone else's building. You can change the decor (System Prompt), but you can't move the walls.
* **Tier 2 (Prefab Home):** You assemble modular rooms. You pick the appliances (Connectors) and the layout, but the foundation is pre-poured.
* **Tier 3 (Custom Build):** You pour the concrete. You choose the wiring, HVAC, and security. If the roof leaks, you fix it.
* **Tier 4 (Skyscraper):** Complex engineering. Requires steel frameworks, wind tunnel testing (Evals), and a specialized crew to operate.



**Question:** What is the *structural* complexity of the solution?

| Complexity Tier | System Characteristics | Architecture Pattern | Typical Microsoft Path | Evidence Required |
| :--- | :--- | :--- | :--- | :--- |
| **Tier 1: Informational**<br>*(Read-Only)* | Single knowledge domain. Little or no durable state. | **Grounded retrieval** (RAG where generation is used) | M365 Copilot or a Microsoft 365/Copilot Studio **Declarative Agent**; Azure AI Search with Microsoft Foundry for custom retrieval | Citation quality, access trimming, freshness, data boundary, and failure behavior |
| **Tier 2: Transactional**<br>*(Deterministic)* | Linear steps, defined API calls, and explicit approvals | **Orchestrated workflow** | Azure Logic Apps, Power Automate, or Copilot Studio agent flows | Idempotency, connector identity, rollback, approval ownership, and audit trail |
| **Tier 3: Reasoning**<br>*(Probabilistic)* | Multi-step planning, tool choice, custom state, or strict latency targets | **Plan-and-execute** | Copilot Studio; Foundry **Prompt Agent (GA)** for managed orchestration; Agent Framework or M365 Agents SDK for code-owned orchestration | Tool accuracy, state recovery, latency budget, evaluation thresholds, and runtime ownership |
| **Tier 4: Autonomous**<br>*(Nondeterministic)* | Long-running work, multi-agent delegation, or recursive correction | **Bounded autonomous or multi-agent orchestration** | Agent Framework (**GA core**); Copilot Studio connected agents (**Preview**); Foundry A2A endpoint (**Preview**). Use Hosted Agents only when the [constraint card]({{ '/docs/technologies#the-hosted-agent-constraint-card' | relative_url }}) fits | Bounded autonomy, isolation, stop conditions, escalation, protocol direction, and end-to-end observability |

Microsoft path sources: [^complexity-paths]

---

## 2. Skills & Resources (Delivery Team)

**The Trade-off:** **Abstraction vs. Rigor.** Low-code tools abstract away infrastructure but constrain the developer's workflow (ALM). Pro-code tools offer infinite flexibility but require you to manage the plumbing (Identity, Networking, State).

**Question:** What is the composition of the delivery team?

| Team Profile | Optimization | Delivery Evidence | Typical Microsoft Path |
| :--- | :--- | :--- | :--- |
| **Makers / Fusion** | **Velocity.** Focus on subject matter expertise and business logic. | Environment strategy, reusable connectors, test ownership, and an engineering escalation path | Copilot Studio for managed agent authoring; AI Builder and Power Automate for document, prompt, and business-process building blocks |
| **Pro Developers** | **Lifecycle.** Focus on CI/CD, unit testing, and version control. | Source control, automated tests, deployment gates, telemetry, and on-call ownership | Agent Framework and M365 Agents SDK for code-owned orchestration and channels; Microsoft Foundry for models, tools, evaluation, and managed agent services; Azure Container Apps or AKS for customer-operated hosting |
| **Data Scientists** | **Precision.** Focus on grounding and model behavior. | Reproducible datasets, evaluation thresholds, drift monitoring, and a production engineering partner | Microsoft Foundry for model selection, evaluation, fine-tuning, and safety work, paired with an application team that owns the production runtime |

These are ownership paths, not job-title boxes. A fusion team can cross rows; what matters is that every production responsibility has a named owner.[^skills-paths]

{: .tip }
> **The Convergence Principle:** Do not treat "Pro Code" and "Low Code" as binary. Treat them as two crews on the same build: one shapes the experience quickly; the other owns the structural engineering behind it.

---

## 3. Budget Assessment

Architects must speak the language of finance. You need to capture Total Cost of Ownership (TCO): licensing, consumption, and the engineering hours required to build it.

**Question:** Is your budget model based on **Capital Expenditure** (Pre-paid seats) or **Operating Expenditure** (Consumption)?

| Budget Type | Current Microsoft Alignment | Verified Example *(US list, accessed July 13, 2026)* | TCO and Decision Check |
| :--- | :--- | :--- | :--- |
| **Existing entitlement / included rights** | Start with Microsoft 365 Copilot Chat and included Copilot Studio use rights before buying net-new capacity | Copilot Chat is automatically included at no extra cost with an eligible Microsoft 365 subscription. Some employee-facing Copilot Studio usage is included for authenticated Microsoft 365 Copilot-licensed users, subject to documented conditions and fair-use limits.[^budget-entitlement] | Verify tenant eligibility, user identity, channel, invoked feature, grounding mode, and fair-use conditions. “Included” does not mean every agent action or autonomous trigger is zero-rated. |
| **Per-user license** | Microsoft 365 Copilot when value follows a defined employee population | **$30.00 user/month, paid yearly**; a separate qualifying Microsoft 365 plan is required.[^budget-m365] | Model assigned versus active users, adoption and enablement, support, annual commitment, regional pricing, taxes, and enterprise agreement discounts. |
| **Capacity or pay-as-you-go** | Copilot Studio capacity packs for predictable shared usage; PAYG for variable usage | **$200.00 per 25,000-Copilot-Credit pack/month**. PAYG has no upfront license commitment and bills the Copilot Credits consumed during the monthly period; Microsoft does not publish a single flat cost per interaction because credit rates vary by feature.[^budget-studio] | Forecast the mix of answers, grounding, actions, flows, voice, and AI tools, not just conversation count. Track pooled capacity, environment allocation, enforcement, unused monthly capacity, and separately billed BYOM usage. |
| **Azure consumption and provisioned throughput** | Microsoft Foundry models, Agent Service tools, memory, and Hosted Agent compute; PTU for dedicated model throughput where justified | Standard model usage is billed by model-specific input/output token meters. Tools can use transaction, session, retrieval, or storage meters. Hosted Agents add container **vCPU-hour and GiB-hour** consumption. Provisioned deployments are billed **per PTU per hour** or through Azure reservations. Use the live pricing pages and [Azure pricing calculator](https://azure.microsoft.com/en-us/pricing/calculator/) for numeric estimates.[^budget-foundry] | Include retries, cached versus uncached tokens, output ratio, tool calls, storage, networking, observability, active-session compute, idle provisioned capacity, quota, and engineering operations. Confirm PTU capacity before purchasing a reservation. |
| **Shared commitment** | Microsoft Agent Prepurchase Plan for eligible usage spanning Copilot Credits, Microsoft Foundry, and other listed services | **1 ACU pays down US$1 of qualifying retail cost, purchased at a tiered discount** (~5 to 6% in Microsoft's worked examples). One-year term, auto-renew on by default, and **all purchases are final**: no cancel, exchange, split, or merge. Microsoft's published Tier 1 illustration uses 20,000 CUs, a $19,000 plan cost, and a hypothetical $20,000 PAYG workload, an illustrative saving, not a universal quote.[^budget-prepurchase] | Forecast eligible usage and benefit precedence first: reservations and narrower prepurchase benefits apply before the shared plan. Check term, renewal, non-refundable commitment, unused balance risk, scope, and chargeback ownership. |

{: .tip }
> **Procurement Simplification:** The Microsoft Agent Prepurchase Plan creates a shared ACU commitment for eligible Copilot Studio, Microsoft Foundry, and other listed service usage. Use it when forecasted consumption across those services supports a one-year commitment. See [Microsoft Agent Prepurchase Plan](https://learn.microsoft.com/en-us/azure/cost-management-billing/reservations/agent-pre-purchase).

### The Three Wallets

**One solution, three currencies, three finance conversations.** The uncomfortable truth of an end-to-end agent estate is that nobody hands you a single bill. An architect now carries three wallets, and they do not talk to each other:

| Wallet | Unit and rate | Where it drains | What catches teams out |
| :--- | :--- | :--- | :--- |
| **Copilot Credits** | Pay-as-you-go at **US$0.01 per credit**; also sold in capacity packs | The Microsoft 365 plane: Copilot Studio, agent actions, and metered Copilot experiences | Credit rates vary by feature, so "cost per conversation" is not a number Microsoft publishes |
| **GitHub AI credits** | **1 credit = US$0.01.** Copilot Business includes **1,900 per user/month**; Enterprise **3,900** | The developer plane: agents, model requests, and agentic workflows | A promotional uplift to **3,000 / 7,000** is documented as **ending 2026-09-01**. Do not build a business case on the promotional number |
| **Azure meters (and Fabric CUs)** | Per-token, **PTU** per hour, batch, priority processing; **Fabric Capacity Units (F2 to F8192)** | The platform plane: models, tools, hosting, and any grounding that lives in Fabric | Idle provisioned capacity and retries are invisible in a demo and very visible in month three |

**The Analogy:** it is the same as running a business with a corporate card, a departmental purchasing account, and a prepaid transit pass. Every one of them buys real things. None of them tops up the others. If your TCO model has one line item, you have modeled one third of the estate.

### The Order of the Burn

**Two prepurchase products exist, and they are not the same product.** The **Copilot Credit Prepurchase Plan** buys **CCCUs** and covers eligible Copilot Credit usage. The **Microsoft Agent Prepurchase Plan** buys **ACUs** and covers select services across Microsoft Foundry, Microsoft Copilot Studio, Microsoft Fabric, and GitHub. Both are Azure Reservations, one-year term, auto-renew on by default, all purchases final.

Microsoft states the precedence verbatim: *"Reservations always apply before prepurchase plans."* The burn order is:

1. Microsoft Foundry **PTU Reservations**
2. Microsoft Fabric **Capacity Reservations**
3. **Copilot Credit Prepurchase Plan** (CCCU)
4. **Microsoft Agent Prepurchase Plan** (ACU): *"Applied last to remaining AI usage across all platforms."*

**The principle worth memorizing: narrow benefits burn before broad benefits.** It is the gift-card rule. You spend the store card before the credit card, because the store card is worthless anywhere else. Model your commitments in that order or you will strand the narrow ones and over-buy the broad one.[^budget-prepurchase-order]

{: .warning }
> Coverage of Copilot Cowork and Work IQ usage by either prepurchase plan is **not stated in Microsoft's documentation**. Treat it as unknown and confirm with your account team before you assume it in a forecast.

{: .warning }
> Consumption models require **Quota Management**. An ungoverned autonomous agent can burn through a monthly token budget in hours if it enters a loop. Require spending caps, alerts, and an owner in the selected cost-management layer.

---

## 4. Time to Production (The Runway)

**The Trade-off:** **Convenience vs. Customization.** You can launch a standard pattern in days, or a bespoke architecture in months.

| Timeline | Delivery Shape | Typical Microsoft Path | What Must Already Be True |
| :--- | :--- | :--- | :--- |
| **Days** | Configure an existing governed surface | **M365 Copilot**, built-in agents, or a **Declarative Agent**[^time-saas] | Data is ready, access is approved, and no custom runtime is required |
| **Weeks** | Compose managed capabilities and integrations | **Copilot Studio** for managed low-code agents; **Logic Apps** for deterministic integration workflows[^time-managed] | Connectors, test environments, approval paths, and support ownership exist |
| **Months** | Build and operate a custom runtime | **Microsoft Agent Framework** or **M365 Agents SDK**, hosted through **Microsoft Foundry**, **Azure Container Apps**, or **AKS** as requirements dictate[^time-code] | Landing zone, identity, networking, CI/CD, evaluation, and on-call practices are funded |

{: .tip }
> **Products are anchors, not clocks.** Copilot Studio can take months when the integrations are difficult; a code-first agent can take days when the platform foundation already exists. Use the product column to identify Microsoft's likely delivery path, then use the readiness column to test whether the timeline is credible.

---

## 5. Governance & Compliance (The Security Perimeter)

This is the "Go/No-Go" gate. You must define your **Data Boundary** and **Action Safety**.

### The Trust Boundary Decision
**Question:** Does the data stay in a service-managed tenant boundary or move into a customer-operated cloud boundary?



* **Tenant-managed boundary:** Score inherited identity, retention, audit, residency, and admin controls.
* **Connector-mediated boundary:** Score every downstream system; a governed front door does not sanitize an ungoverned API.
* **Customer-operated cloud boundary:** Score network isolation, private endpoints, keys, logging, patching, and incident ownership.

### Apply the Boundary: Typical Microsoft Paths

| Measured Boundary | Typical Microsoft Path | Evidence to Demand |
| :--- | :--- | :--- |
| **Tenant-managed** | M365 Copilot and Microsoft 365 **Declarative Agents**, governed through the applicable Microsoft 365 identity, compliance, and administrative controls | Permission trimming, audit, retention, residency, sharing, and publishing behavior for the exact surface |
| **Connector-mediated** | Copilot Studio with Power Platform governance, or Azure Logic Apps with Azure identity and network controls | Caller versus service identity, connector DLP, downstream API policy, secrets, and approval ownership |
| **Customer-operated cloud** | Microsoft Foundry and Foundry Agent Service for managed AI capabilities; Azure Container Apps or AKS when the team owns the application host | Entra identity, RBAC, private networking, storage, regional support, logging, patching, and incident response |
| **Identity and fleet control** | **Microsoft Entra Agent ID** (**generally available**; Microsoft states it is *"available for all Microsoft Entra customers"*) for the agent identity itself; **Microsoft Agent 365** (**GA**, per-user licensing, Microsoft 365 E5 documented as working best as a prerequisite, included in **Microsoft 365 E7**) for registry, map, and fleet posture; **Agent Governance Toolkit v4.1.0** (**Public Preview OSS; zero GA features**) for optional application-layer enforcement | Inventory is not interception: verify enforcement point, version pinning, API stability, telemetry, and support ownership. Before you claim you have a fleet, confirm every agent in it has an identity you can name |

**No badge, no building.** An agent without a directory identity is a contractor who walked onto the site without signing in. You cannot audit what you cannot name. These three are different jobs, not competing products, and you score them separately: **Microsoft Entra Agent ID** is the badge office, a named product inside Microsoft Entra that issues agent identities and identity blueprints. **Agent 365** is the site register that tells you who is on the floor and what they touched. The **Agent Governance Toolkit** is the door lock on an individual room. Fleet governance provides inventory, lifecycle, and posture visibility; application middleware enforces runtime controls for code-owned agents.[^governance-paths]

### Action Safety & Content Safety
**Question:** What is the "Blast Radius" of a mistake?

* **Read-Only Risk:** Hallucination/Grounding errors. (Mitigation: RAG + Citations).
* **Destructive Risk:** Data modification/Deletion. (Mitigation: Human-in-the-loop).

#### Sort First: The Assist-to-Execute Line

**Before you rank risk, you have to sort it. And impressiveness is the wrong sort key.** Microsoft is blunt about why a single checklist fails: *"A single governance checklist applied to every agent fails in both directions. It over-governs simple agents… It under-governs complex agents…"* Its instruction is one sentence long: *"Sort every agent by what it does, not by how impressive it looks."*

**The Analogy:** the difference between a co-pilot who reads out the checklist and a co-pilot with hands on the yoke. Same seat, same uniform, completely different failure mode. Microsoft names that line:

> *"The clearest risk signal is the assist-to-execute line. An agent that drafts a paragraph, suggests an answer, or summarizes a document **assists** a person who stays in the loop and owns the outcome. An agent that updates a customer record, submits a ticket, or moves money **executes** a change in a system of record."*

Microsoft's Center of Excellence guidance then sorts agents into three risk tiers:

| Tier | Scope (Microsoft's wording) | Required controls |
| :--- | :--- | :--- |
| **Tier 1: Low risk**<br>*Individual productivity* | Agents that *"assist one person or a small team with everyday work, such as summarizing, drafting, and searching"* | Named owner; basic monitoring of usage and errors; standard release checklist; self-service deployment within published guardrails |
| **Tier 2: Medium risk**<br>*Expert-knowledge and internal service* | Agents that *"answer domain questions or run internal services where a wrong answer can mislead people or disrupt operations"* | Named owner **plus** a domain-expert validator; knowledge-quality monitoring; formal release gate; accuracy tracking and feedback loops |
| **Tier 3: High risk**<br>*Business-critical* | Microsoft documents a third, business-critical tier. **We have not verified its exact scope and control wording.** Read the source before you quote it in a governance policy | *(verify at source)* |

Source: [Govern agents by risk](https://learn.microsoft.com/en-us/agents/center-of-excellence/govern-agents-risk), Microsoft Learn.

**Crosswalk to the playbook below.** Microsoft sorts by *who owns the outcome*; the Blast Radius rubric sorts by *what the action can destroy*. They line up: Tier 1 with Low (Read), Tier 2 with Medium (Write), Tier 3 with High (Destructive). But they are not interchangeable. Score both: one tells you how much process the agent needs, the other tells you where the stop button goes.

#### The Action Safety Guardrail Playbook
Use this rubric to design approval checkpoints before promoting an agent to production.

| Risk Level | Definition | Guardrail Requirement |
| :--- | :--- | :--- |
| **Low (Read)** | Search, lookup, summarize. | **Audit Log.** Log the query and response for post-hoc analysis. |
| **Medium (Write)** | Create draft, update status. | **User Confirmation.** The agent presents a draft/plan; User must explicitly click "Execute." |
| **High (Destructive)** | Delete, transfer funds, change permission. | **Middleware Interception.** The agent triggers a request; a Service Owner must approve via a separate channel.[^humanreview] |

**Implementation Example (Pro-Code):**
For high-risk actions in code-first agents, implement middleware that intercepts the specific tool call:

```typescript
async function executeToolWithApproval(toolName: string, params: any) {
  if (isDestructive(toolName)) {
    const approval = await requestHumanApproval(toolName, params);
    if (!approval.approved) { return { error: "Action rejected by reviewer" }; }
  }
  return await executeTool(toolName, params);
}
```

### Deterministic Runtime Controls

Approval flows catch mistakes at decision points, but what about the space *between* decisions? An agent approved to call an API can still pass malformed arguments, leak context, or loop indefinitely. Score two independent layers: **runtime enforcement** (what calls and arguments are allowed) and **behavioral evaluation** (whether the system obeys under adversarial and ordinary tests).

* **Agent Governance Toolkit v4.1.0 (Public Preview, MIT OSS):** Wraps agent tools with a policy engine that evaluates YAML, OPA, or Cedar rules before execution. Policies can allow, deny, audit, or require approval for a tool call, while recording the decision and agent identity. The Agent Control Specification (ACS) policy layer remains beta; main v5 is unreleased, and GA feature coverage is zero. Pin the release and test policy/schema upgrades. See the [Agent Governance Toolkit documentation](https://microsoft.github.io/agent-governance-toolkit/) and [repository](https://github.com/microsoft/agent-governance-toolkit).
* **ASSERT (Microsoft Responsible AI, MIT OSS):** Turns natural-language behavior specifications into executable single-turn and multi-turn evaluations. It runs those tests against models, agents, and multi-agent systems, captures OpenTelemetry/OpenInference traces, uses trace-grounded scoring, and writes reviewable artifacts for CI and regression testing. See the [ASSERT repository](https://github.com/responsibleai/ASSERT).

Use Agent Governance Toolkit for deterministic runtime policy decisions and ASSERT for pre-production and regression evidence. The [Feature Comparison]({{ '/docs/feature-comparison' | relative_url }}) covers their architectural scope and maturity.

---

## 6. Scale & Performance (The Envelope)

**Question:** What are the latency and throughput requirements?

| Scale & Performance Profile | Latency / Throughput Pattern | Copilot Studio Fit | Microsoft Foundry Fit |
| --- | --- | --- | --- |
| **Departmental** | Moderate concurrency, business-hours traffic, and interactive response times | **Strong fit** for managed low-code agent experiences when environment quotas, Copilot Credit consumption, connectors, and flows meet the target | **Targeted fit** when the solution needs Azure model choice, networking, data services, or custom application control |
| **Enterprise** | Sustained or bursty regional traffic, tighter latency targets, and recovery objectives | **Strong fit with capacity planning.** Load-test the complete agent path, including knowledge, connectors, tools, and flows | **Strong fit for custom applications.** Select model deployments and regional quotas, then own application scaling, telemetry, fallback, and recovery |
| **High-scale / latency-sensitive** | High sustained throughput, strict tail-latency targets, or dedicated capacity requirements | **Validate carefully.** Product and environment quotas, tool latency, and throttling determine fit; makers do not directly control the underlying model deployment capacity | **Preferred when dedicated model throughput or custom scaling is required.** Use the appropriate PAYG quota or PTU deployment, design regional recovery, and host custom code on Azure Container Apps or AKS. Apply the [Hosted Agent constraint card]({{ '/docs/technologies#the-hosted-agent-constraint-card' | relative_url }}) before selecting Hosted Agents |

**Key Limits to Watch:**

* **Copilot Studio:** Validate current product and environment quotas, Copilot Credit consumption, connector limits, tool latency, and throttling behavior for the complete experience.
* **Microsoft Foundry:** Model token and request quotas are regional. Select PAYG or provisioned throughput from measured demand, then test fallback, recovery, and any application-host scaling limits.

**The Envelope:** Load tests must prove the quotas, scaling behavior, latency, and recovery controls of the selected platform.[^scale-paths]

---

## Evaluation Checklist

Before moving to the [Implementation Patterns]({{ '/docs/implementation-patterns' | relative_url }}), confirm you have scored the scenario:

**Lifecycle:**

* [ ] Technology status (GA/Preview/Deprecated) confirmed against [Quick Reference: Lifecycle Status]({{ '/docs/quick-reference' | relative_url }})?
* [ ] Go-live date checked against any active retirement deadlines?
* [ ] Publish targets validated for agent distribution?
* [ ] Governance, observability, and evaluation tooling identified?

**Architecture:**

* [ ] Complexity Level (Config vs. Engineering) identified?
* [ ] Data boundaries mapped?

**Resources:**

* [ ] Team capability (Maker vs. Dev vs. DS) aligned to tool?
* [ ] ALM/DevOps requirements defined?

**Governance:**

* [ ] Trust boundary defined (service-managed, connector-mediated, or customer-operated)?
* [ ] Action Safety Guardrails defined?

**Budget:**

* [ ] Cost model selected (License vs. Metered)?
* [ ] Estimated monthly spend band identified?

---

## Next Steps

**Feature comparison:**
→ [Feature Comparison]({{ '/docs/feature-comparison' | relative_url }})

**Visual guidance:**
→ [Visual Framework]({{ '/docs/visual-framework' | relative_url }})

**Real examples:**
→ [Scenarios]({{ '/docs/scenarios' | relative_url }})

**Architecture patterns:**
→ [Implementation Patterns]({{ '/docs/implementation-patterns' | relative_url }})

---

**Last Updated:** July 13, 2026

[^time-saas]: [Microsoft 365 Copilot overview](https://learn.microsoft.com/en-us/microsoft-365-copilot/) and [Declarative Agents for Microsoft 365 Copilot](https://learn.microsoft.com/en-us/microsoft-365/copilot/extensibility/overview-declarative-agent), Microsoft Learn.
[^time-managed]: [Copilot Studio overview](https://learn.microsoft.com/en-us/microsoft-copilot-studio/fundamentals-what-is-copilot-studio) and [Azure Logic Apps overview](https://learn.microsoft.com/en-us/azure/logic-apps/logic-apps-overview), Microsoft Learn.
[^time-code]: [Microsoft Agent Framework overview](https://learn.microsoft.com/en-us/agent-framework/overview/), [M365 Agents SDK overview](https://learn.microsoft.com/en-us/microsoft-365/agents-sdk/agents-sdk-overview), [Microsoft Foundry overview](https://learn.microsoft.com/en-us/azure/foundry/what-is-foundry), [Azure Container Apps overview](https://learn.microsoft.com/en-us/azure/container-apps/overview), and [Azure Kubernetes Service overview](https://learn.microsoft.com/en-us/azure/aks/what-is-aks), Microsoft Learn.
[^complexity-paths]: [CAF AI agent adoption](https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/ai-agents/), [Declarative Agents for Microsoft 365 Copilot](https://learn.microsoft.com/en-us/microsoft-365/copilot/extensibility/overview-declarative-agent), [Copilot Studio overview](https://learn.microsoft.com/en-us/microsoft-copilot-studio/fundamentals-what-is-copilot-studio), [Logic Apps overview](https://learn.microsoft.com/en-us/azure/logic-apps/logic-apps-overview), [Power Automate overview](https://learn.microsoft.com/en-us/power-automate/getting-started), [Agent Framework overview](https://learn.microsoft.com/en-us/agent-framework/overview/), and [Foundry Agent Service overview](https://learn.microsoft.com/en-us/azure/foundry/agents/overview), Microsoft Learn.
[^skills-paths]: [Copilot Studio overview](https://learn.microsoft.com/en-us/microsoft-copilot-studio/fundamentals-what-is-copilot-studio), [AI Builder overview](https://learn.microsoft.com/en-us/ai-builder/overview), [Agent Framework overview](https://learn.microsoft.com/en-us/agent-framework/overview/), [M365 Agents SDK overview](https://learn.microsoft.com/en-us/microsoft-365/agents-sdk/agents-sdk-overview), and [Microsoft Foundry overview](https://learn.microsoft.com/en-us/azure/foundry/what-is-foundry), Microsoft Learn.
[^budget-entitlement]: [Microsoft 365 Copilot licensing](https://learn.microsoft.com/en-us/microsoft-365-copilot/microsoft-365-copilot-licensing) and [Copilot Studio billing and licensing](https://learn.microsoft.com/en-us/microsoft-copilot-studio/billing-licensing), Microsoft Learn. Accessed July 13, 2026.
[^budget-m365]: [Microsoft 365 Copilot enterprise pricing](https://www.microsoft.com/en-us/microsoft-365-copilot/pricing/enterprise), Microsoft. Accessed July 13, 2026.
[^budget-studio]: [Copilot Studio pricing](https://www.microsoft.com/en-us/microsoft-365-copilot/pricing/copilot-studio), [billing and licensing](https://learn.microsoft.com/en-us/microsoft-copilot-studio/billing-licensing), and [Copilot Credit billing rates](https://learn.microsoft.com/en-us/microsoft-copilot-studio/requirements-messages-management#copilot-credits-billing-rates), Microsoft. Accessed July 13, 2026.
[^budget-foundry]: [Foundry Agent Service pricing](https://azure.microsoft.com/en-us/pricing/details/foundry-agent-service/), [Azure OpenAI in Foundry Models pricing](https://azure.microsoft.com/en-us/pricing/details/cognitive-services/openai-service/), and [provisioned throughput for Foundry Models](https://learn.microsoft.com/en-us/azure/foundry/openai/concepts/provisioned-throughput), Microsoft. Accessed July 13, 2026.
[^budget-prepurchase]: [Microsoft Agent Prepurchase Plan](https://learn.microsoft.com/en-us/azure/cost-management-billing/reservations/agent-pre-purchase), Microsoft Learn. Accessed July 13, 2026. Microsoft’s worked example explicitly labels the Copilot Credit and PTU unit rates as hypothetical assumptions.
[^budget-prepurchase-order]: [Copilot Credit Prepurchase Plan](https://learn.microsoft.com/en-us/azure/cost-management-billing/reservations/copilot-credit-p3) and [Microsoft Agent Prepurchase Plan](https://learn.microsoft.com/en-us/azure/cost-management-billing/reservations/agent-pre-purchase), Microsoft Learn. GitHub credit allowances and the promotional expiry: [GitHub Copilot billing concepts](https://docs.github.com/en/copilot/concepts/billing), GitHub Docs.
[^governance-paths]: [Data, privacy, and security for Microsoft 365 Copilot](https://learn.microsoft.com/en-us/microsoft-365/copilot/microsoft-365-copilot-privacy), [Copilot Studio security and governance](https://learn.microsoft.com/en-us/microsoft-copilot-studio/security-and-governance), [Foundry virtual networks](https://learn.microsoft.com/en-us/azure/foundry/agents/how-to/virtual-networks), [What is Microsoft Entra Agent ID](https://learn.microsoft.com/en-us/entra/agent-id/what-is-microsoft-entra-agent-id), [Microsoft Agent 365 overview](https://learn.microsoft.com/en-us/microsoft-agent-365/overview), and [Agent Governance Toolkit announcement](https://opensource.microsoft.com/blog/2026/04/02/introducing-the-agent-governance-toolkit-open-source-runtime-security-for-ai-agents/).
[^humanreview]: [Use your prompt in Power Automate](https://learn.microsoft.com/en-us/ai-builder/use-a-custom-prompt-in-flow), Microsoft Learn.
[^scale-paths]: [Copilot Studio quotas and limits](https://learn.microsoft.com/en-us/microsoft-copilot-studio/requirements-quotas), [Foundry Models quotas and limits](https://learn.microsoft.com/en-us/azure/foundry/foundry-models/quotas-limits), [Agent Service limits, quotas, and regions](https://learn.microsoft.com/en-us/azure/foundry/agents/concepts/limits-quotas-regions), [Azure Container Apps scaling](https://learn.microsoft.com/en-us/azure/container-apps/scale-app), and the [AKS baseline architecture](https://learn.microsoft.com/en-us/azure/architecture/reference-architectures/containers/aks/baseline-aks), Microsoft Learn.

**Next:** [Implementation Patterns]({{ '/docs/implementation-patterns' | relative_url }}) - Apply the scoring outcomes to pick execution patterns
