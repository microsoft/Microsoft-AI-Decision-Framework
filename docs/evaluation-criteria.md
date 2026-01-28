---
layout: default
title: Evaluation Criteria
nav_order: 6
description: "Framework for evaluating complexity, skills, budget, and governance"
---

# Evaluation Criteria
{: .no_toc }

Use this module as the scoring rubric before selecting Microsoft AI technologies.
{: .fs-6 .fw-300 }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## Purpose

This module anchors the broader Microsoft AI Decision Framework by teaching how to score readiness across complexity, skills, budget, and governance before you dive into detailed technology choices.

Treat the scenarios and recommendations below as illustrative patterns that reinforce the concepts explained in the rest of the repo—not turnkey prescriptions. The goal is to make your tradeoffs explicit (speed vs. control, governance vs. flexibility) so the final platform choice is easier to defend and operate.

---

## Evaluation Framework

### Technical Complexity Assessment

**Question:** How complex is your use case?

| Complexity Level | Characteristics | Recommended Technologies |
|-----------------|-----------------|--------------------------|
| **Low** | Simple Q&A, existing knowledge base, single data source | M365 Copilot, Copilot connectors (Graph connectors), Declarative Agents |
| **Medium** | Multiple data sources, workflow automation, approvals | Copilot Studio, AI Builder, Power Automate |
| **High** | Custom models, multi-agent orchestration, custom evaluation | Microsoft Foundry, M365 Agents SDK, Agent Framework, Agent Framework + AG-UI (Preview)[^agui-eval] |
| **Very High** | Multi-step reasoning, complex state management | Microsoft Foundry + Agent Framework, custom pipelines |

**Key Indicators:**
- Data sources: 1 (low) vs 5+ (high)
- Workflow: Linear (low) vs branching/parallel (high)
- Reasoning: Simple lookup (low) vs multi-step inference (high)
- Evaluation: User feedback (low) vs custom metrics (high)

---

### Skills & Resources

**Question:** What skills do you have?

| Skill Level | Resources | Time | Recommended |
|-------------|-----------|------|-------------|
| **Makers** | No devs, 1-3 people | 10-20 hrs/week | Copilot Studio, AI Builder |
| **Makers + Dev** | Occasional dev help | 20-30 hrs/week | Studio + custom actions |
| **Pro Developers** | Full dev team | 40+ hrs/week | M365 SDK, Microsoft Foundry |
| **Data Scientists** | ML expertise | 40+ hrs/week | Microsoft Foundry, custom models |

---

### Budget Assessment

Budget decisions need to capture total cost of ownership—per-user Microsoft 365 licensing, Copilot Studio credits, Azure consumption, and the engineering hours required to build, test, and operate the stack. Use the groupings in [Decision Framework – Question 2 (Build Style)]({{ '/docs/decision-framework#question-2-build-style--control-level' | relative_url }}) and the blueprints in [Implementation Patterns]({{ '/docs/implementation-patterns' | relative_url }}) to determine which capability groups you will combine before picking a band.[^copilot-cost][^copilot-credits][^foundry-cost]

Mix-and-match approaches (for example, a Copilot Studio front door that delegates orchestration to Microsoft Foundry or Microsoft Foundry Agent Service) let you shift costs between licensing and Azure meters as the solution matures—plan for that runway instead of assuming a static stack.[^studio-byom]

For teams extending work-grounded experiences beyond licensed users, the Microsoft 365 Copilot Retrieval API now supports pay-as-you-go consumption (Preview) for tenant-level data sources such as SharePoint and Copilot connectors. This gives you a metered option for grounding while staying in the Microsoft 365 governance boundary.[^retrieval-paygo]

| Budget Band | Typical Stack | Primary Cost Drivers | Mix & Match Considerations |
|-------------|---------------|----------------------|----------------------------|
| **Free / Included / < $500/mo** | Free (included) Microsoft 365 Copilot Chat + Copilot connectors (Graph connectors) + declarative agents | Baseline Microsoft 365 licensing (Copilot Chat included, zero incremental license cost), tenant governance time, light maker effort | Keep workloads inside the first two capability groupings (End‑user copilots and Extensibility) to prove value quickly; reuse connectors later in Copilot Studio or Microsoft Foundry as needs grow |
| **$500-$2K/mo** | Microsoft 365 Copilot add-on pilots, Copilot Studio Lite/Full, AI Builder, Power Automate approvals | Per-user Microsoft 365 Copilot licenses (Graph grounding, in-app copilots), Copilot Credits for generative answers/flows, connector usage, part-time maker/developer capacity[^copilot-credits] | Add Microsoft 365 Copilot on top of Copilot Chat for hero experiences; add Studio and targeted Azure APIs only when custom logic is required; budget for approval flows and DLP policy design |
| **$2K-$10K/mo** | Copilot Studio front door + Microsoft Foundry / Microsoft Foundry Agent Service, M365 Agents SDK pilots | Azure OpenAI tokens, App Service or Functions hosting, vector stores, CI/CD + observability effort[^copilot-cost][^foundry-cost] | Split workloads so Studio handles UX/governance while Azure hosts orchestration; shift spend toward Azure as more automation moves out of Studio |
| **$10K+/mo** | Full Microsoft AI stack (Agent Framework, Logic Apps, Microsoft Foundry Agent Service) with enterprise data plane | Dedicated AI/ML teams, Azure landing zone hardening, custom evaluations, agent telemetry pipelines[^foundry-cost] | Expect blended spend: Studio or M365 endpoints for front doors plus Azure services for workflows, memory, and safety tooling |

> **Note:** These dollar ranges illustrate relative investment levels rather than contractual pricing. Always reconcile them with your actual licensing agreements, Copilot Credit allocations, Azure consumption forecasts, and staffing models.

---

### Time to Production

Time-to-production is also multi-track: it is common to land a Copilot Studio or Microsoft 365 Copilot pilot in days while Microsoft Foundry foundations (data ingestion, landing zones, evaluations) progress in parallel. Blend these tracks to shrink overall runway rather than treating each technology choice as mutually exclusive.[^studio-byom][^foundry-cost]

| Timeline | Representative Path | Key Activities | Levers & Tradeoffs |
|----------|---------------------|---------------|--------------------|
| **Days** | Enable free (included) Microsoft 365 Copilot Chat + Graph Connectors pilot | Confirm eligible licensing, scope data sources, run adoption enablement | Fastest path to value (no incremental license spend) but limited action automation; great for validating demand before deeper investment |
| **1-2 Weeks** | Turn on Microsoft 365 Copilot add-on for a focused group and/or launch Copilot Studio template with governed connectors and approvals | Approve premium licenses, configure Copilot Credits capacity, attach Power Automate approvals, enforce DLP policies | Low-code build speed; adding Microsoft 365 Copilot unlocks work-grounded chat and in-app copilots while Studio handles hosting and security[^copilot-credits] |
| **1-2 Months** | Keep Copilot Studio as the front door while adding custom actions, BYOM prompts, or Microsoft Foundry orchestration | Build APIs or Microsoft Foundry Agent Service skills, set up CI/CD, connect to private data via gateways | Perfect for hybrid stacks—Studio pilots stay live while Azure capabilities roll in; schedule time for testing, observability, and managed gateway setup[^studio-byom][^foundry-cost] |
| **3-6 Months** | Productionize pro-code agents (M365 Agents SDK, Agent Framework, Microsoft Foundry) with enterprise landing zone controls | Provision VNets/private endpoints, implement tool guardrails, run evaluations, harden telemetry + governance | Highest control and autonomy; longer runway driven by infra changes, compliance evidence, and multi-environment DevOps. Parallel pilots in Studio/M365 keep users engaged during the build |

> **Note:** These timeframes are directional examples spanning pilots through production handoff. Actual schedules depend on compliance reviews, procurement, existing Azure landing zones, and how many platforms (M365, Copilot Studio, Azure) you run in parallel.

---

### Governance & Compliance

| Level | Constraints | Approach | Why |
|-------|-------------|----------|-----|
| **High** | M365 tenant boundary only, strict DLP, no training on data | M365 Copilot | M365 trust boundary, strictest governance |
| **Medium-High** | Data sovereignty, RBAC, external connector controls, gateway for private access | Copilot Studio + DLP | Configurable, **external connectors inherit compliance** |
| **High (Azure)** | VNet isolation, private endpoints, CMK, no public egress | Microsoft Foundry / Microsoft Foundry Agent Service | Azure landing zone controls, sovereign data |
| **High (Custom)** | Self-hosted, custom VNet, air-gapped support | M365 Agents SDK | Customer controls all networking |
| **Low** | Minimal, hosting platform dependent | Agent Framework | Maximum flexibility |

**Critical Considerations - Data Boundary:**

- **M365 Copilot:** Data NEVER leaves M365 tenant boundary. No training on tenant data. Inherits M365 compliance (GDPR, HIPAA, FedRAMP). **Microsoft Purview for AI (Preview)** extends DLP and sensitivity labels to prevent agents from summarizing "Internal Only" documents.
- **Copilot Studio:** ⚠️ External connectors (custom APIs, non-Microsoft systems) **inherit external system's compliance posture**. Web search uses external sources—evaluate DPA alignment for your tenant. Compliance certifications: HIPAA, FedRAMP, SOC, ISO, PCI DSS. Power Platform DLP policies (environment/tenant-level) control connector access. **Purview DSPM (Preview)** now audits unauthenticated user activity.
- **Microsoft Foundry / Microsoft Foundry Agent Service:** Full Azure controls (VNet, private endpoints, CMK, Azure Policy). Governed by your Azure landing zone. **Microsoft Defender for AI (Preview)** provides runtime threat protection. **Azure AI Content Safety** provides Prompt Shields (GA) and Spotlighting (Preview) to block jailbreaks and injection attacks.

**Critical Considerations - Network Isolation:**

- **Microsoft Foundry / Microsoft Foundry Agent Service:** ✅ Full private networking support. Standard Setup with Private Networking = no public egress by default. Supports air-gapped environments.
- **Copilot Studio:** ⚠️ Managed SaaS; use on-premises data gateway (for on-prem systems) or VNet data gateway (GA, for Azure resources) for private access. For fully air-gapped requirements, prefer self-hosted or Foundry private networking.
- **M365 Agents SDK:** ✅ Self-hosted = customer controls networking. Supports VNet integration, private endpoints, air-gapped Azure deployments. Full responsibility for network security.
- **M365 Copilot:** ⚠️ Managed SaaS without custom VNet support; use gateway architecture for on-prem data access.

**Critical Considerations - Permissions & Identity Model:**

- **M365 Copilot:** ✅ Always user-scoped. "It only sees what I can see" = TRUE (architecturally guaranteed). Actions attributed to individual users.
- **Copilot Studio:** ⚠️ Dual auth mode: User authentication (user-scoped) OR Agent author authentication (service account). Service accounts can exceed individual user permissions. **Critical for actions that write data.**
- **Microsoft Foundry:** ⚠️ API key (bypasses user identity) OR Entra ID (per-user RBAC, managed identities). **Microsoft Entra Agent ID (Preview)** assigns unique identities to agents for granular permission management and auditability.[^entra-agentid-ec]
- **M365 Agents SDK:** ⚠️ Custom auth design: Delegated permissions (user-scoped) OR Application permissions (service principal, tenant-wide scope). **Requires documented auth architecture for audit.**

### Action Safety & Content Safety
{: .no_toc }

**Key considerations:**

- **M365 Copilot:** ✅ User-in-the-loop always (drafts only, user executes). Cannot take destructive actions. ✅ Content moderation + prompt injection defenses built-in.
- **Copilot Studio:** ⚠️ Actions can execute (Power Automate flows, custom connectors). No built-in human approval. **Add approval workflows for destructive actions.** ✅ Content moderation blocks malicious prompts.
- **Microsoft Foundry / Microsoft Foundry Agent Service:** ⚠️ Tool calling with autonomous planning loops. No built-in approval. **Implement human-in-the-loop + OpenTelemetry tracing.** ✅ Content safety via Azure AI Content Safety (Prompt Shields GA, Spotlighting Preview).
- **M365 Agents SDK:** ⚠️ Custom design (developer responsibility). No built-in action safety or approval. **Implement custom guardrails.** Content safety depends on implementation.

#### Action Safety Guardrail Playbook
{: #action-safety-guardrail-playbook .no_toc }

**Why it matters:** These controls operationalize the Action Safety score. Use them to design approval checkpoints, logging, and escalation workflows before promoting an agent to production.

**Guardrail Workflow:**

1. **Classify actions by risk** (read-only, write, destructive) and document examples.
2. **Decide approval paths** for medium/high risk actions (manager approval, security desk, or service owner).
3. **Enforce boundaries** by limiting which tools can execute autonomously and which require explicit human confirmation.
4. **Monitor and trace** every execution (OpenTelemetry, Purview, Application Insights) so auditors can reconstruct the decision path.

**Action Risk Classification**

| Risk Level | Examples | Approval Required | Recommended Treatment |
|------------|----------|-------------------|-----------------------|
| **Low (Read)** | Search, lookup, reporting | No | Allow automatically; log only |
| **Medium (Write)** | Create record, update status, send notification | Optional | Approval or post-execution review in regulated domains |
| **High (Destructive)** | Delete, disable, approve spend, security changes | Yes | Always require human-in-the-loop before execution |

**Guardrails by Platform**

**M365 Copilot (built-in experiences)**

- User always executes the final action; drafts remain user-scoped. No extra guardrails required beyond Purview auditing.
- Reference: [Microsoft 365 Copilot security](https://learn.microsoft.com/en-us/copilot/microsoft-365/microsoft-365-copilot-ai-security) (Updated: 2026-01-27)

**Copilot Studio (SaaS)**

- Add **Start and wait for an approval** inside Power Automate flows before any destructive action.
- Validate parameters with condition blocks (e.g., amount thresholds) and environment-level DLP policies.
- Enable Dataverse audit logs so transcripts/actions are reviewable by compliance teams.
- Reference: [Actions for Microsoft 365 Copilot (Public Preview)](https://learn.microsoft.com/en-us/microsoft-365-copilot/extensibility/overview-business-applications) (Updated: 2026-01-22)

**Microsoft Foundry / Microsoft Foundry Agent Service (PaaS)**

- Implement human-in-the-loop middleware for high-risk tool calls; store approvals in durable storage.
- Use OpenTelemetry tracing and Azure Monitor to capture full tool execution chains.
- Apply Azure Policy/API Management allowlists so agents can only call approved endpoints.
- Reference: [Foundry Agent Service transparency note (Foundry classic docs)](https://learn.microsoft.com/en-us/azure/ai-foundry/responsible-ai/agents/transparency-note?view=foundry-classic) (Updated: 2025-11-19)

**M365 Agents SDK (custom code)**

- Build explicit approval middleware that routes destructive actions to a reviewer before execution.
- Classify actions in code (read/write/destructive) and enforce deny-by-default for destructive categories.
- Log every action with initiating user identity via Application Insights or custom telemetry.
- Reference: [Microsoft 365 Agents SDK overview](https://learn.microsoft.com/en-us/microsoft-365/agents-sdk/agents-sdk-overview) (Updated: 2025-11-24)

**Architecture Recipes**

- **Approval Workflow (Power Automate):** `User Request → Agent Plans Action → [If Destructive] → Trigger Approval Flow → Manager Approves/Rejects → Execute or Cancel`
- **Human-in-the-Loop Middleware (custom code):**
    ```typescript
    async function executeToolWithApproval(toolName: string, params: any) {
      if (isDestructive(toolName)) {
        const approval = await requestHumanApproval(toolName, params);
        if (!approval.approved) {
          return { error: "Action rejected by reviewer" };
        }
      }
      return await executeTool(toolName, params);
    }
    ```
- **Read-Only Core with Delegated Execution:** `Agent → Generates plan → Presents to user → User clicks "Execute" → Authenticated API call runs under user's identity`

**Action Safety Decision Matrix**

| Technology | Built-in Safety | Approval Mechanism | Tracing | Best For |
|------------|-----------------|-------------------|---------|----------|
| **M365 Copilot** | ✅ User-in-the-loop | N/A (draft drafts only) | Purview audit logs | Maximum safety |
| **Copilot Studio** | ⚠️ Actions can execute | Power Automate approvals | Dataverse audit logs | Low-code with approvals |
| **Microsoft Foundry / Microsoft Foundry Agent Service** | ⚠️ Autonomous execution | Custom middleware | OpenTelemetry, Azure Monitor | Pro-code with tracing |
| **M365 Agents SDK** | ❌ Custom design | Custom implementation | Custom telemetry | Full custom control |

> **Documentation tip:** capture the guardrail decisions in your change log so audit reviewers know why specific approvals and rate limits exist.

**Critical Considerations - Proactive Capabilities (Question 9):**

- **Reactive only:** M365 Copilot, Copilot Studio declarative agents (user-initiated interactions only).[^m365reactive-ec][^copilotstudioevent-ec]
- **Proactive capable:** Copilot Studio custom engine agents (Power Automate triggers), Logic Apps (event-driven), Microsoft Foundry (Functions/triggers), M365 Agents SDK (custom event listeners).[^copilotstudioevent-ec][^logicappstrigger-ec][^agentservicega-ec][^agentssdk-ec]

---

### Memory, Analytics & Conversation History

**Question for Legal/Audit Teams:**

Understanding where conversation data is stored and who can access it is **critical** for regulated industries (healthcare, finance, legal).

**Key Questions to Answer:**
- Where is conversation history stored?
- How long is it retained?
- Who can access it?
- Can we scrub PII from transcripts?
- Does this meet our compliance requirements (HIPAA, GDPR, SOX)?

**Technology Comparison:** See [Quick Reference - Memory & Analytics]({{ '/docs/quick-reference#memory--analytics-by-technology' | relative_url }}) for detailed comparison table.

**Critical Distinctions:**
- **M365 Copilot:** Grounding ONLY (NO per-user memory extractable by admins). Activity history in user mailbox (Purview-governed).
- **Copilot Studio:** Grounding + Dataverse memory variables. Full transcript access for admins (critical for regulated review).
- **Microsoft Foundry Agent Service:** BYO thread storage (customer Cosmos DB). Customer responsible for retention, PII scrubbing.
- **M365 Agents SDK:** Custom implementation (developer implements everything).

💡 **Cross-reference:** See [Decision Framework Q3]({{ '/docs/decision-framework#question-3-data-grounding-pattern' | relative_url }}) - Grounding vs Memory vs Analytics distinction

---

### Scale & Performance

**Understanding Performance Trade-Offs:**

Performance optimization varies by platform and use case. Choose based on your priorities:

| Dimension | Copilot Studio | Microsoft Foundry | Decision Driver |
|-----------|----------------|------------------|-----------------|
| **Development Velocity** | Days to weeks (low-code platform) | Weeks to months (custom code) | Speed to market vs full customization |
| **Connector Ecosystem** | 1,400+ Power Platform connectors | Custom API integrations | Pre-built integrations vs custom control |
| **Runtime Latency** | <1s (managed orchestration) | Low-latency optimized paths with PTU/streaming (workload-dependent) | Response time requirements |
| **Operational Overhead** | Low (Microsoft-managed SaaS) | Higher (self-managed PaaS) | Operational preferences |
| **Context Window** | 400k (platform-managed)[^studio-context] | 400k (full model access) | Context vs convenience trade-off |
| **Throughput Scaling** | Requests per minute (RPM)-based (message billing) | Tokens per minute (TPM)-based (provisioned capacity) | Cost model preferences |

[^studio-context]: Effective context in Copilot Studio varies by configuration; full model context available in Microsoft Foundry when you manage infrastructure and evaluation pipelines.

**Scenario-Based Selection:**

**Choose Copilot Studio when:**

- Speed to market is critical (rapid iteration, quick delivery)
- Leveraging Power Platform's 1,400+ built-in connectors and triggers
- Prefer managed infrastructure (SaaS convenience)
- Response times <1s are acceptable
- Built-in governance and ALM are priorities
- Team includes makers and developers
- **Testing:** [Power CAT Copilot Studio Kit](https://learn.microsoft.com/en-us/microsoft-copilot-studio/guidance/kit-overview) for automated agent validation (response match, topic match, generative answers, multi-turn scenarios)

**Choose Microsoft Foundry when:**

- Latency-sensitive workloads need architectural control (optimize with PTU, caching, and streaming)
- Need full architectural control and optimization
- High-throughput scenarios (PTU provisioning)
- **Testing:** [Foundry evaluations](https://learn.microsoft.com/en-us/azure/ai-foundry/how-to/evaluate-generative-ai-app) with built-in metrics (groundedness, relevance, coherence) and evaluator library support
- Custom patterns beyond platform capabilities
- Custom integrations outside standard connector ecosystem
- Team has Azure and AI engineering expertise
- Pair with the AG-UI protocol (Preview) when you need SSE streaming, shared state, or human approvals surfaced directly in custom web or mobile clients.[^agui-eval]

**Complementary Use:**

Many organizations use both platforms - Copilot Studio for rapid deployment with rich connector integration, Microsoft Foundry for performance-critical custom applications. The platforms serve complementary needs, not competitive choices.

#### Scale Planning by User Volume
{: .no_toc }

| Scale | Users | Requests/Day | Copilot Studio Fit | Microsoft Foundry Fit |
|-------|-------|--------------|-------------------|---------------------|
| **Small** | <100 | <1K | ✅ Ideal (rapid deployment) | ⚠️ May be over-engineered |
| **Medium** | 100-1K | 1K-50K | ✅ Strong (with capacity planning) | ✅ Strong (with cost optimization) |
| **Large** | 1K-10K | 50K-500K | ⚠️ Monitor quotas carefully | ✅ Ideal (PTU provisioning) |
| **Enterprise** | 10K+ | 500K+ | ⚠️ Requires premium capacity | ✅ Ideal (enterprise scale) |

#### Rate Limits & Cost Model Trade-Offs
{: .no_toc }

**Copilot Studio:**

- **Environment-level quotas:**
  - General messages: 8,000 requests per minute (RPM) per Dataverse environment
  - Generative AI: 50 RPM/1,000 RPH (1-10 packs), 80 RPM/1,600 RPH (11-50 packs), 100 RPM/2,000 RPH (51-150 packs), +1 RPM/+20 RPH per extra 10 packs; 10 RPM/200 RPH for trial/dev; 100 RPM/2,000 RPH for PAYG and Microsoft 365 Copilot users
- **Shared across agents:** All agents in environment share quota pool
- **Channel limits:** Includes support for Teams, Microsoft 365, SharePoint, Web (Direct Line), Mobile, Azure Bot Service, and numerous third-party channels
- **Power Platform requests:** 250K/24h for standard subscription (flows triggered by agents)
- **Cost predictability:** Prepaid packs or PAYG ($0.01/Copilot Credit)
- **Increase limits:** Purchase additional credit packs or enable pay-as-you-go; overage enforcement is tied to Copilot Credits
- **Best for:** Predictable workloads, call centers, internal use cases with capacity planning

**Microsoft Foundry / Microsoft Foundry Agent Service:**

- **Tokens per minute (TPM) quotas:** Per region/model (request increases available)
- **Variable cost:** Per-token billing scales with traffic
- **Cost optimization:** Model routing, provisioned throughput units (PTU) reservations, caching strategies
- **Best for:** Variable traffic patterns, public-facing channels with guardrails

**M365 Agents SDK:**

- **Custom auto-scaling:** Developer controls rate limiting and scaling logic
- **Flexible cost:** Hosting + token-based (if using Azure OpenAI)
- **Full control:** Custom traffic management and optimization
- **Best for:** Complex custom requirements, existing Azure infrastructure

**Sources:**

- [Copilot Studio Quotas and Limits](https://learn.microsoft.com/en-us/microsoft-copilot-studio/requirements-quotas) (Updated: 2026-01-12)
- [Resolve Throttling Errors](https://learn.microsoft.com/en-us/troubleshoot/power-platform/copilot-studio/licensing/throttling-errors-agents) (Updated: 2024-10-15)
- [Optimize Latency in CPS](https://learn.microsoft.com/en-us/microsoft-copilot-studio/guidance/optimize-minimize-latency) (Updated: 2024-09-20)
- [Performance and Latency - Foundry](https://learn.microsoft.com/en-us/azure/ai-foundry/openai/how-to/latency) (Updated: 2025-11-26)
- [Power Platform Request Limits](https://learn.microsoft.com/en-us/power-platform/admin/api-request-limits-allocations) (Updated: 2024-10-18)

**Last Updated:** 2026-01-28

---

💡 **Cross-reference:** See [Decision Framework Q6]({{ '/docs/decision-framework#question-6-scale-and-cost-requirements' | relative_url }})

---

## Decision Matrix

| Situation | Start | Path |
|-----------|-------|------|
| Makers, low budget, M365 data | M365 + Graph Connectors | → Studio |
| Makers, workflows | Copilot Studio + AI Builder | → Add BYOK |
| Devs, multi-channel | M365 SDK + Studio | → Microsoft Foundry |
| Devs, custom models | Microsoft Foundry | → Add Agent Framework |
| Data scientists | Microsoft Foundry + Agent Framework | → BYOM |

---

## Evaluation Checklist

**Technical:**
- [ ] Identified data sources
- [ ] Assessed data quality
- [ ] Determined integrations
- [ ] Evaluated constraints

**Skills:**
- [ ] Confirmed skill levels
- [ ] Identified team size
- [ ] Assessed learning curve
- [ ] Planned knowledge transfer

**Budget:**
- [ ] Estimated setup costs
- [ ] Projected ongoing costs
- [ ] Set realistic timeline
- [ ] Planned contingency

**Governance:**
- [ ] Reviewed data sovereignty
- [ ] Confirmed compliance needs
- [ ] Assessed audit requirements
- [ ] Planned DLP policies

**Scale:**
- [ ] Estimated users
- [ ] Projected volume
- [ ] Assessed performance needs
- [ ] Planned monitoring

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

**Last Updated:** January 28, 2026  
**Next:** [Implementation Patterns]({{ '/docs/implementation-patterns' | relative_url }}) - Apply the scoring outcomes to pick execution patterns

---

[^copilot-cost]: *Cost considerations for extending Microsoft 365 Copilot*, Microsoft Learn. Updated 2025-05-19.
[^copilot-credits]: *Copilot Studio requirements, billing, and Copilot Credits*, Microsoft Learn. Updated 2025-11-05.
[^foundry-cost]: *Manage costs in Microsoft Foundry*, Microsoft Learn. Updated 2025-10-17.
[^studio-byom]: *Bring your own Microsoft Foundry models to Copilot Studio prompts*, Microsoft Learn. Updated 2025-11-13.
[^retrieval-paygo]: *Microsoft 365 Copilot Retrieval API pay-as-you-go consumption (Preview)*, Microsoft Learn. Updated 2026-01-23.
[^m365reactive-ec]: *Privacy and protections*, Microsoft Learn. Updated 2025-08-15.
[^copilotstudioevent-ec]: *Create automated copilots triggered by events*, Microsoft Learn. GA 2025-03-24.
[^logicappstrigger-ec]: *Trigger an agent by using Logic Apps (preview)*, Microsoft Learn. Updated 2025-06-30.
[^agentservicega-ec]: *What's new in Foundry Agent Service*, Microsoft Learn. Updated 2025-05-15.
[^agentssdk-ec]: *Bring your agents into Microsoft 365 Copilot*, Microsoft Learn. Updated 2025-09-12.
[^agui-eval]: *AG-UI integration with Agent Framework*, Microsoft Learn. Preview, Updated 2025-11-11.
[^entra-agentid-ec]: *What is Microsoft Entra Agent ID?*, Microsoft Learn. Updated 2025-11-18.
