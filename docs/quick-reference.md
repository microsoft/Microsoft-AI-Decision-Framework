---
layout: default
title: Quick Reference
nav_order: 10
description: "Fast lookup table for Microsoft AI technologies"
---

# Quick Reference: Technology by Need
{: .no_toc }

{: .note }
This page provides fast-lookup tables for common scenarios. For detailed decision logic, see the [Decision Framework]({{ '/docs/decision-framework' | relative_url }}).


## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}


## CAF Agent Adoption Quick Cues

- **Phases in one line:** Plan (business + tech + org + data), Govern & secure (responsible AI, controls, environment prep), Build (single vs multi, orchestrate, secure process), Operate (integrate, monitor, retire). [CAF AI agent adoption](https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/ai-agents/).
- **When not to use an agent:** Highly deterministic workflows or static Q&A/content generation → use code or plain RAG. [Business plan](https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/ai-agents/business-strategy-plan).
- **SaaS vs build:** Use SaaS agents when they meet requirements; if not, prototype on Foundry or Copilot Studio before committing to custom builds. [Technology plan](https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/ai-agents/technology-solutions-plan-strategy).
- **Single vs multi:** Start single; go multi-agent only for hard security/compliance boundaries, distinct owning teams, or planned modular growth. [Single vs multiple](https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/ai-agents/single-agent-multiple-agents).
- **Prioritize use cases fast:** Score business impact, feasibility, desirability; pick high-impact, low-friction pilots first.
- **Org roles:** Platform owns guardrails, workload teams own use cases and data, AI CoE advises and standardizes. [Organizational readiness](https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/ai-agents/organization-people-readiness-plan).
- **Build safely:** Use workflows for deterministic control, treat instructions as versioned config, gate tool calls, isolate memory per role/tenant, and run evaluations before production. [Build process](https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/ai-agents/build-secure-process).
- **Operate with evidence:** Keep an agent inventory/identity, centralize logging, track cost and quotas, red team regularly, retire unused agents. [Manage agents](https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/ai-agents/integrate-manage-operate).

![CAF agent decision tree](../images/ai-agent-decision-tree.svg)
*CAF decision tree: SaaS first, then build; validate single vs multi during planning.*
---


![How to prioritize agent use cases](../images/prioritize-agent-use-cases.png)
*Use impact × feasibility × desirability to rank pilots.*

![Typical agent responsibilities across the organization](../images/agent-teams.png)
*Platform governs; workloads deliver; AI CoE advises and enforces patterns.*

![Data architecture for Fabric, OneLake, Foundry, and Azure](../images/data-architecture-fabric-onelake-foundry-azure-microsoft.svg)
*Anchor grounding in governed data (OneLake/Fabric/Foundry) with clear landing zones.*

**Sources (CAF):**

- [AI agent adoption](https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/ai-agents/) (Updated: 2025-11-22)
- [Business plan for AI agents](https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/ai-agents/business-strategy-plan) (Updated: 2025-11-22)
- [Technology plan for AI agents](https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/ai-agents/technology-solutions-plan-strategy) (Updated: 2025-11-22)
- [Organizational readiness for AI agents](https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/ai-agents/organization-people-readiness-plan) (Updated: 2025-11-22)
- [Single agent or multiple agents](https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/ai-agents/single-agent-multiple-agents) (Updated: 2025-11-22)
- [Process to build agents across your organization](https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/ai-agents/build-secure-process) (Updated: 2025-11-22)
- [Manage AI agents across your organization](https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/ai-agents/integrate-manage-operate) (Updated: 2025-11-22)

---

## Technology by User Experience

| **Where Users Interact** | **Recommended Technologies** | **Use When** |
|---------------------------|------------------------------|--------------|
| **Microsoft 365 Apps** | **Free** Microsoft 365 Copilot Chat (included) + Graph Connectors for baseline pilots; Microsoft 365 Copilot add-on + declarative agents for work-grounded copilots; **Frontier Word/Excel/PowerPoint creation agents (Preview)** require admin Frontier opt-in and Anthropic data-sharing consent; mobile parity for custom engine/message-extension agents (iOS/Android)[^mobile-ext-qr]; Copy to Copilot Studio (rolling out) copies data sources/actions but GPTs/custom actions must be reattached[^copy-to-studio-qr] | Need managed copilots embedded in Word, Excel, Outlook, or Teams with tenant-level governance—start with the free chat surface and graduate to the hero add-on when Graph grounding or in-app assistants are required; use Frontier creation agents only for controlled pilots |
| **Microsoft Teams Only** | Copilot Studio, M365 Agents SDK | Teams-centric chat or calling scenarios where admins may enforce "only during the call" retention |
| **Custom Web/Mobile App** | Azure AI Foundry, Foundry Agent Service (Standard setup) | Building standalone applications while keeping files, search, and thread storage in customer-owned Azure resources |
| **Governance / Registry** | Agent 365 (Preview); Foundry Control Plane; M365 Agent Registry lifecycle (publish/activate/deploy/pin/block/remove/delete/owner transfer/export)[^agent-registry-qr] | Centralize agent identity/registry, conditional access, and security posture across M365/Azure agents |
| **Custom Web/Mobile UI with streaming** | Microsoft Agent Framework + AG-UI protocol (Preview) | Need Server-Sent Events streaming, backend tool rendering, shared state, and human approvals in bespoke front-ends |
| **Multiple Channels** | M365 Agents SDK | Deliver one agent across Microsoft 365 Copilot, Teams, web, email, SMS, and other channels |
| **Power Platform** | Copilot Studio, AI Builder | Integrated with low-code Power Apps/Power Automate workloads |
| **Enterprise Workflows** | Azure Logic Apps AI Agents (Preview), MCP Server | Workflow automation that needs autonomous/conversational agent patterns with Easy Auth guardrails |
| **Data Grounding / RAG** | Azure AI Search knowledge bases (agentic retrieval, preview); Graph Connectors (M365); Microsoft 365 Copilot Search API (Preview) for OneDrive hybrid semantic+lexical search[^search-api-qr] | ACL- and label-aware search with reasoning effort/partial responses (Search); tenant-scoped content for M365 copilots (Graph); hybrid OneDrive search for custom engine agents (Search API) |
| **Developer Tools** | GitHub Copilot Extensions | IDE and development workflow integration |

**Sources:**

- [Copilot for all: Introducing Microsoft 365 Copilot Chat](https://www.microsoft.com/en-us/microsoft-365/blog/2025/01/15/copilot-for-all-introducing-microsoft-365-copilot-chat/) (Updated: 2025-01-15)
- [Microsoft 365 Copilot release notes — November 24, 2025](https://learn.microsoft.com/en-us/copilot/microsoft-365/release-notes#november-24,-2025)
- [Built-in enterprise readiness with standard agent setup](https://learn.microsoft.com/en-us/azure/ai-foundry/agents/concepts/standard-agent-setup) (Updated: 2025-06-16)
- [Agent 365 capabilities](https://learn.microsoft.com/en-us/microsoft-agent-365/admin/capabilities-entra) (Retrieved: 2025-12-08)
- [Agent Registry in the Microsoft 365 admin center](https://learn.microsoft.com/en-us/microsoft-365/admin/manage/agent-registry?view=o365-worldwide#admin-actions-to-manage-agents) (Retrieved: 2025-12-08)
- [Foundry Control Plane overview](https://learn.microsoft.com/en-us/azure/ai-foundry/control-plane/overview) (Updated: 2025-11-18)
- [Azure AI Search what's new](https://learn.microsoft.com/en-us/azure/search/whats-new#november-2025) (Updated: 2025-11-18)
- [Microsoft 365 Copilot Search API overview](https://learn.microsoft.com/en-us/microsoft-365-copilot/extensibility/api/ai-services/search/overview) (Retrieved: 2025-12-09)
- [Workflows with AI agents and models in Azure Logic Apps (Preview)](https://learn.microsoft.com/en-us/azure/logic-apps/agent-workflows-concepts) (Updated: 2025-10-09)
- [Microsoft 365 Agents Toolkit](https://learn.microsoft.com/en-us/microsoft-365/developer/overview-m365-agents-toolkit) (Updated: 2025-05-30)
- [AG-UI integration with Agent Framework](https://learn.microsoft.com/en-us/agent-framework/integrations/ag-ui/) (Preview, Updated: 2025-11-11)
- [Copy a Copilot agent to Microsoft Copilot Studio](https://learn.microsoft.com/en-us/microsoft-365-copilot/extensibility/copilot-agent-to-studio) (Retrieved: 2025-12-09)

**Confidence Level:** High (all technologies GA except Logic Apps AI Agents Preview)

[^mobile-ext-qr]: Mobile parity for custom engine agents and message-extension agents on iOS/Android. Source: Microsoft 365 Copilot release notes (November 24, 2025).
[^agent-registry-qr]: Agent Registry lifecycle actions in M365 admin center: publish, activate, deploy, pin, block, remove, delete, reassign owner, export inventory. Source: Agent Registry documentation (Retrieved: 2025-12-08).
[^search-api-qr]: Microsoft 365 Copilot Search API (Preview) for hybrid semantic + lexical search across OneDrive via Graph `/beta`. Source: Search API overview (Retrieved: 2025-12-09).
[^copy-to-studio-qr]: Copy to Copilot Studio (rolling out) copies agent data sources and actions; GPTs and custom actions must be reattached. Source: Copy a Copilot agent to Microsoft Copilot Studio (Retrieved: 2025-12-09).

---

## Agentic Retrieval Quick Facts

- Knowledge agents are now **knowledge bases** (Preview, `2025-11-01-preview`); routes `/knowledgebases/*`, `outputMode` + `retrievalReasoningEffort` (minimal/low/medium) replace fast path.
- Knowledge sources (Preview): indexed SharePoint, remote SharePoint (Copilot Retrieval API, ACL-trimmed), indexed OneLake, web/Bing, search index, Azure Blob; `ingestionParameters` wraps embeddings/chat models/Content Understanding; portal creates `2025-08-01-preview` objects—migrate for `2025-11-01-preview`.
- Semantic ranker is available on **free tier** (quota limits); enable on the service before using KBs.
- Hybrid/vector preview (`2024-09-01-preview`): MRL `truncationDimension`, `filterOverride` for vector-only filters, `debug` subscores for RRF, token-based Text Split parameters.
- Content Understanding skill (Preview) replaces Text Split for richer chunking; billed to Foundry resource when used via `contentExtractionMode`.

## Agent Development Approach Comparison

| **Approach** | **Declarative Agents** | **Custom Engine Agents** |
|--------------|------------------------|--------------------------|
| **Definition** | Microsoft-managed orchestration where you supply instructions, knowledge, actions | Bring your own orchestration, models, and tooling for bespoke agents |
| **Best For** | Rapid delivery of guided experiences in M365 apps | Advanced workflows, multi-agent patterns, or non-M365 channels |
| **Development Model** | Low-code (Copilot Studio) or pro-code via Agents Toolkit scaffolding | Pro-code using Agents SDK, Teams AI Library, or custom frameworks |
| **Orchestration** | Microsoft 365 Copilot orchestrator handles planning and grounding | You decide orchestration (Semantic Kernel, LangChain, Teams AI action planner, etc.) |
| **M365 Integration** | Native to Microsoft 365 Copilot UI and Teams | Requires explicit integration via M365 Agents SDK or Teams AI Library |
| **Typical Timeline** | Days to a few weeks | Weeks to months |
| **Skill Level** | Makers or full-stack developers | Professional developers |

**Sources:**

- [Declarative agents for Microsoft 365 Copilot overview](https://learn.microsoft.com/en-us/microsoft-365-copilot/extensibility/overview-declarative-agent) (Updated: 2025-09-11)
- [Custom engine agents for Microsoft 365 overview](https://learn.microsoft.com/en-us/microsoft-365-copilot/extensibility/overview-custom-engine-agent) (Updated: 2025-09-12)

**Confidence Level:** High (official Microsoft guidance)

---

## Custom Engine Agent Tool Comparison

| **Tool** | **Copilot Studio** | **Teams AI Library** | **M365 Agents SDK** |
|----------|---------------------|----------------------|---------------------|
| **Primary Use Case** | Managed SaaS for custom agents with built-in governance | Collaborative agents inside Teams | Pro-code agents running across M365 and third-party channels |
| **Orchestration** | Copilot Studio-managed orchestrator | Built-in Teams AI action planner | Bring your own orchestration (Semantic Kernel, LangChain, custom) |
| **Supported Channels** | Microsoft 365 Copilot, Teams, partner apps, mobile apps, custom websites | Microsoft 365 Copilot, Teams | Microsoft 365 Copilot, Teams, web, email, SMS, Office add-ins, custom sites |
| **Development Experience** | Low-code UI with Power Platform controls | Visual Studio/VS Code libraries for C#, TS/JS, Python | Agents Toolkit scaffolding for .NET/JS with multi-channel deployment |
| **Ideal Team** | Makers or fusion dev teams | Teams-focused pro dev squads | Professional developers delivering enterprise-scale agents |
| **Status** | GA | GA | GA |

**Sources:**

- [Custom engine agents for Microsoft 365 overview](https://learn.microsoft.com/en-us/microsoft-365-copilot/extensibility/overview-custom-engine-agent) (Updated: 2025-09-12)
- [Microsoft 365 Agents Toolkit](https://learn.microsoft.com/en-us/microsoft-365/developer/overview-m365-agents-toolkit) (Updated: 2025-05-30)
- [Teams AI Library overview](https://learn.microsoft.com/en-us/microsoftteams/platform/bots/how-to/teams-conversational-ai/teams-conversation-ai-overview) (Updated: 2025-07-01)

**Confidence Level:** High (all GA, official Microsoft documentation)

---

## Data Grounding Pattern by Source

| **Data Source Type** | **Recommended Approach** | **Technologies** |
|----------------------|--------------------------|------------------|
| **SharePoint/OneDrive** | Graph Connectors | Microsoft Graph Connectors SDK, Copilot Studio connectors |
| **External Structured Data** | Graph Connectors (inside M365) or Azure AI Search (Foundry Agent Service standard setup) | Microsoft Graph Connectors, Azure AI Search |
| **Unstructured Documents** | Vector search with chunking | Azure AI Search, Azure OpenAI Embeddings |
| **Real-Time Transactional Data** | API-based grounding | API plugins, Functions, Logic Apps agent workflows |
| **Multimodal Content** | Azure AI Content Understanding (Preview) | Process documents, images, audio, video with reasoning |
| **Database Vectors** | AI-capable databases with managed embeddings | Azure Cosmos DB for NoSQL (standard setup: 3 × 1000 RU containers), PostgreSQL (GA), SQL Server 2025 (Preview) |
| **Microsoft Fabric Platform** | Direct data access | Lakehouse (Delta tables), Warehouse (T-SQL), OneLake (ADLS Gen2 APIs), SQL analytics endpoint |
| **Microsoft Fabric via Agent** | Conversational data layer | Fabric Data Agents (Preview) with Copilot Studio or Foundry Agent Service |

**Sources:**

- [Microsoft Graph Connectors](https://learn.microsoft.com/en-us/graph/connecting-external-content-connectors-overview) (Updated: 2025-09-20)
- [Retrieval-augmented generation with Azure AI Search](https://learn.microsoft.com/en-us/azure/search/retrieval-augmented-generation-overview) (Updated: 2025-10-12)
- [Azure AI Content Understanding](https://learn.microsoft.com/en-us/azure/ai-services/content-understanding/overview) (Updated: 2025-10-28)
- [Built-in enterprise readiness with standard agent setup](https://learn.microsoft.com/en-us/azure/ai-foundry/agents/concepts/standard-agent-setup) (Updated: 2025-06-16)
- [Azure Cosmos DB integration with Foundry Agent Service](https://learn.microsoft.com/en-us/azure/cosmos-db/gen-ai/azure-agent-service) (Updated: 2025-08-26)
- [Workflows with AI agents and models in Azure Logic Apps (Preview)](https://learn.microsoft.com/en-us/azure/logic-apps/agent-workflows-concepts) (Updated: 2025-10-09)
- [Microsoft Fabric overview](https://learn.microsoft.com/en-us/fabric/fundamentals/microsoft-fabric-overview) (Updated: 2025-11-03)
- [Azure AI Foundry FAQ](https://learn.microsoft.com/en-us/azure/ai-foundry/faq) (Updated: 2025-11-03)

**Confidence Level:** High for GA technologies, Medium for Preview (Fabric Data Agents, Content Understanding)

---

## Memory & Analytics by Technology

{: .note }
**Common Customer Confusion**: Grounding (RAG) ≠ Memory ≠ Analytics

| Technology | 📋 Grounding (RAG) | 💾 Memory / Thread Storage | 📊 Analytics / Transcripts | Admin Access | Retention Control |
|------------|-------------------|------------------------------|----------------------------|--------------|-------------------|
| **M365 Copilot** | ✅ M365 content per request | ❌ No tenant-wide memory export; user history lives in mailbox/Graph | ⚠️ Copilot activity history, Teams call summaries if policy allows | ⚠️ Purview/eDiscovery only | ✅ Purview retention policies; Teams calling policy can force "only during the call" |
| **Copilot Studio** | ✅ M365 data, Dataverse, connectors | ⚠️ Dataverse variables per conversation | ✅ Session reports, transcript downloads, ROI analytics | ✅ Transcript Viewer role required | ✅ Toggle Dataverse save, default 30-day retention, bulk delete |
| **Foundry Agent Service** | ✅ Azure AI Search, Cosmos DB, Fabric, tools | ✅ BYO thread storage in Cosmos DB (standard setup) | ⚠️ Custom telemetry (App Insights, OpenTelemetry) | ✅ Customer RBAC on Azure resources | ✅ Customer deletes threads/files in own storage |
| **M365 Agents SDK** | ✅ Custom (developer implements) | ⚠️ Custom (developer implements thread storage) | ⚠️ Custom (Application Insights, custom logging) | ⚠️ Custom (developer implements) | ⚠️ Custom (developer implements) |

**Key Compliance Questions:**

- **Where is conversation history stored?** → M365 Copilot (user mailbox/Purview), Copilot Studio (Dataverse), Foundry Agent Service (customer Cosmos DB), SDK (customer datastore)
- **How long is it retained?** → M365 Copilot (Purview retention or user deletion), Copilot Studio (policy configurable, 30-day default), Foundry Agent Service (customer-defined lifecycle), SDK (custom)
- **Who can query chat logs?** → M365 Copilot (admins via eDiscovery, users see activity history), Copilot Studio (admins with Transcript Viewer role), Foundry Agent Service (Azure RBAC), SDK (custom controls)
- **Can we scrub PII?** → Foundry Agent Service (customer deletes in Cosmos/Storage), Studio (bulk delete transcripts), M365 Copilot (user clears activity history, Purview retention)
- **Can we run without saved transcripts?** → Teams calling "Only during the call" mode keeps speech-to-text transient; Copilot Studio toggle stops Dataverse saving.

**Sources:**

- [Data, privacy, and security for Microsoft 365 Copilot](https://learn.microsoft.com/en-us/copilot/microsoft-365/microsoft-365-copilot-privacy) (Updated: 2025-09-05)
- [Control transcript access and retention](https://learn.microsoft.com/en-us/microsoft-copilot-studio/admin-transcript-controls) (Updated: 2025-03-07)
- [Manage Microsoft 365 Copilot in Teams calls](https://learn.microsoft.com/en-us/microsoftteams/copilot-teams-calling-transcription) (Updated: 2025-07-01)
- [Built-in enterprise readiness with standard agent setup](https://learn.microsoft.com/en-us/azure/ai-foundry/agents/concepts/standard-agent-setup) (Updated: 2025-06-16)
- [Azure Cosmos DB integration with Foundry Agent Service](https://learn.microsoft.com/en-us/azure/cosmos-db/gen-ai/azure-agent-service) (Updated: 2025-08-26)

**Confidence Level:** High (all technologies GA)

---

## Orchestration Complexity Decision Matrix

| **Complexity Level** | **Characteristics** | **Recommended Technologies** |
|----------------------|---------------------|------------------------------|
| **Simple (Q&A)** | Single-turn conversations, basic RAG | Declarative Agents (Copilot Studio or M365 Agents Toolkit) |
| **Moderate (Task Execution)** | Multi-turn, 1-5 actions, simple branching | Declarative Agents with API plugins, Foundry Agent Service |
| **Complex (Workflows)** | Sequential workflows, conditional logic | Declarative Agents + Power Automate, Agent Framework workflows |
| **Advanced (Multi-Agent)** | Agent-to-agent delegation, parallel execution | Copilot Studio multi-agent, Foundry Agent Service, Agent Framework |
| **Expert (Custom Reasoning)** | Custom orchestration logic, model selection | Custom engine agents with Microsoft 365 Agents SDK, Teams AI Library, or Foundry Agent Service |

**Sources:**

- [Agent Framework orchestration patterns](https://learn.microsoft.com/en-us/azure/ai-services/agents/concepts/agent-framework) (Updated: 2025-07-18)
- [Custom engine agents for Microsoft 365 overview](https://learn.microsoft.com/en-us/microsoft-365-copilot/extensibility/overview-custom-engine-agent) (Updated: 2025-09-12)
- [Microsoft 365 Agents Toolkit](https://learn.microsoft.com/en-us/microsoft-365/developer/overview-m365-agents-toolkit) (Updated: 2025-05-30)

**Confidence Level:** High (official patterns documented)

---

## Budget & Timeline Quick Guide

| **Scenario** | **Fastest Path** | **Most Cost-Effective (Long-Term)** |
|--------------|------------------|-------------------------------------|
| **Extend M365 Copilot (Knowledge Only)** | Graph Connectors (days) | Graph Connectors (no additional cost) |
| **Extend M365 Copilot (Knowledge + Actions)** | Declarative Agent (Copilot Studio, 1-2 weeks) | Declarative Agent (M365 Agents Toolkit, 2-4 weeks) |
| **Custom Multi-Channel Agent** | M365 Agents SDK with templates (2-4 weeks) | Azure AI Foundry (consumption-based, 4-8 weeks) |
| **Multi-Agent Orchestration** | Copilot Studio (low-code, 2-4 weeks) | Foundry Agent Service (managed, 4-8 weeks) |
| **Enterprise Workflow Automation** | Azure Logic Apps AI Agents Preview (1-2 weeks) | Azure AI Foundry + Agent Framework (4-8 weeks) |

**Key Budget Considerations:**

- **M365-Centric:** Per-user licensing (Copilot Studio, M365 Copilot)
- **Azure-Native:** Consumption-based (Azure OpenAI tokens, AI Search queries, compute)
- **Hybrid:** Mix of per-user and consumption models

**Sources:**

- [Copilot Studio Pricing](https://www.microsoft.com/en-us/microsoft-copilot/microsoft-copilot-studio#Plans) (Updated: 2024-10-01)
- [Azure AI Services Pricing](https://azure.microsoft.com/en-us/pricing/details/cognitive-services/) (Updated: 2024-10-15)

**Confidence Level:** Medium (pricing models subject to change)

---

## Governance Decision Quick Reference

| **Requirement** | **M365 Trust Boundary** | **Azure Workload Boundary** |
|-----------------|-------------------------|------------------------------|
| **Data Residency** | M365 tenant region | Azure region selection |
| **Identity Management** | Entra ID (automatic) | Entra ID + Azure RBAC |
| **Approval Workflows** | M365 admin center (Integrated Apps) | Azure custom workflows |
| **Audit Logging** | Purview + M365 audit logs | Azure Monitor + Log Analytics |
| **Data Classification** | Purview DLP policies | Azure Policy + custom tagging |
| **Deployment Control** | IT admin approval (tenant-wide settings) | Azure DevOps, CI/CD pipelines |
| **Real-Time Meeting/Call Transcripts** | Teams calling policy can enforce "Only during the call" to avoid post-call storage | Build ephemeral transcript handling or disable logging in custom stack |

{: .note }
**Copilot Studio compliance snapshot:** Covered under HIPAA BAA, HITRUST CSF, FedRAMP High, SOC, ISO 9001/20000-1/22301/27001/27017/27018/27701, PCI DSS, CSA STAR, UK G-Cloud, OSPAR, K-ISMS, Singapore MTCS Level 3, and Spain ENS High (audit artifacts via the Microsoft Service Trust Portal). (Updated: 2024-12-20)

**Best For:**

- **M365 Trust Boundary:** Organizations with strong Microsoft 365 governance already in place
- **Azure Workload Boundary:** Organizations requiring granular control, custom policies, or Azure-native compliance

**Sources:**

- [Data, privacy, and security for Microsoft 365 Copilot](https://learn.microsoft.com/en-us/copilot/microsoft-365/microsoft-365-copilot-privacy) (Updated: 2025-09-05)
- [Manage Microsoft 365 Copilot in Teams calls](https://learn.microsoft.com/en-us/microsoftteams/copilot-teams-calling-transcription) (Updated: 2025-07-01)
- [Azure AI Services security and compliance](https://learn.microsoft.com/en-us/azure/ai-services/openai/concepts/security) (Updated: 2025-06-20)
- [Ensure compliance with Copilot Studio](https://learn.microsoft.com/en-us/microsoft-copilot-studio/admin-certification) (Updated: 2024-12-20)

**Confidence Level:** High (official Microsoft compliance documentation)

---

{: .note-title }
> Quick Navigation
>
> - For decision logic behind these recommendations, see [Decision Framework]({{ '/docs/decision-framework' | relative_url }})
> - For detailed architecture patterns, see [Implementation Patterns]({{ '/docs/implementation-patterns' | relative_url }})
> - For real-world examples, see [Scenarios]({{ '/docs/scenarios' | relative_url }})

---

**Next:** [Resources]({{ '/docs/resources' | relative_url }}) - Official Microsoft references to keep research evidence-backed
