---
layout: default
title: Feature Comparison
nav_order: 9
description: Comprehensive side-by-side technology comparisons
---

# Feature Comparison
{: .no_toc }

{: .note }
Detailed side-by-side comparisons of Microsoft AI technologies. Use this page after you’ve clarified requirements in the [Decision Framework]({{ '/docs/decision-framework' | relative_url }}), so the tables confirm trade-offs (rather than driving the decision by brand names alone).

{: .note }
**Sanity check before you compare:** If the work is deterministic, repeatable, or can be expressed as a clear function/workflow, **don’t use an agent**—use a workflow, API integration, or traditional code. Agents are best when the task is ambiguous, multi-step, and conversational, where the steps can’t be fully specified up front.[^when-not-agent]

---

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## Comprehensive Platform Comparison

Quick view of core platforms (M365 Copilot, Studio, Foundry, Agent Framework, Logic Apps) across UX, governance, orchestration, and hosting trade-offs.

**How to use this section:** Start with the columns that match your trust boundary and channel needs, then compare orchestration and governance features to validate whether you should stay in SaaS, step into low-code, or move to pro-code.

| Feature | M365 Copilot | Copilot Studio | Microsoft Foundry (Azure) | **Microsoft Agent Framework** | **AG-UI Protocol (Preview)** | Microsoft Foundry Agent Service | M365 Agents SDK | **Azure Logic Apps** |
|---------|--------------|----------------|------------------|------------------------------|----------------------------|------------------------|-----------------|----------------------|
| **User Experience** | M365 apps (Frontier creation agents Preview[^frontier-agents]) + mobile parity for custom engine/message-extension agents[^mobile-ext] | Custom channels | Custom apps | Embedded in apps | Protocol-based web/mobile UI | Custom apps | Copilot/Teams/Web | **Custom/Conversational** |
| **Build Approach** | No-build (consume) | Low-code to pro-code | Code-first | Pro-code (orchestration SDK) | Pro-code protocol integration (ASP.NET Core, FastAPI) | Code-first | Pro-code | **Visual designer + code** |
| **Data Boundary** | M365 tenant | M365 or Azure | Azure | Any | Inherits host runtime | Azure | M365 or Azure | **Azure** |
| **Governance** | Tenant-integrated (automatic) + registry lifecycle (publish/activate/deploy/pin/block/remove/delete/owner transfer/export)[^agent-registry] | Tenant or workload | Workload-tailored (custom) | Application-level | Inherits host app controls; approvals via middleware | Workload-tailored (custom) | Tenant or workload | **Azure RBAC** |
| **Admin Center** | M365 admin center | Power Platform admin | Azure RBAC | Application-level | Host platform (Azure/App) | Azure RBAC | M365 admin center | **Azure portal** |
| **Licensing Model** | Per-user (\/month) | Metered messages | Azure consumption | Open-source (free) | Open-source adapters (no license) | Azure consumption | Included in M365 | **Consumption or Standard** |
| **Extensibility** | Via Studio/SDK + Copilot Search API (Preview, OneDrive hybrid search)[^search-api] | Plugins, connectors | Full custom | Workflow orchestration | Seven protocol features (streaming, backend tool rendering, human approvals, generative UI, shared/predictive state) | Full custom | Full custom | **1,400+ connectors** |
| **Deployment** | Microsoft-managed | Microsoft-managed | Self-managed | Self-managed (SDK) | Self-hosted endpoints (ASP.NET Core, FastAPI) | Microsoft-managed | Self-managed | **Self-managed (Azure)** |
| **Time to Value** | Immediate | Days to weeks | Weeks to months | Weeks (with dev skills) | Weeks (requires pro dev + UI build) | Weeks to months | Weeks | **Days to weeks** |
| **Skill Level** | End user | Maker to developer | Developer/engineer | Developer (C#/Python) | Developers (front-end + back-end) | Developer/engineer | Developer | **Developer** |
| **Orchestration** | Built-in | Built-in | Custom | **Workflow-based (Executor/Edge)** | Inherits Agent Framework orchestration | Managed orchestration | BYO orchestrator | **Visual workflow** |
| **Checkpointing** | N/A | No | Custom | **Yes (built-in)** | Inherits from orchestrator | No | Via orchestrator | **State management** |
| **AI Agent Workflows** | N/A | Via agent flows | Via Microsoft Foundry Agent Service[^aafs-triggers] | N/A | N/A (UI protocol) | ✅ Yes | N/A | **✅ Yes (Preview)**[^logicapps-agents] |
| **MCP Server** | N/A | ❌ No | ✅ Yes (MCP tool)[^aafs-mcp] | N/A | N/A | ⚠️ Custom | N/A | **✅ Yes (Preview)**[^logicapps-mcp] |
| **Optimized For** | Productivity at scale | Speed to market + connectors | Latency & control | Workflow orchestration | Bespoke agent UI with streaming & approvals | Managed agents | Pro-code flexibility | **Enterprise integration** |
| **Latency Profile** | <1s (M365 apps) | <1s (managed platform) | <100ms (direct API) | Workflow processing | SSE streaming (depends on backend) | <100ms (direct API) | <1s (M365 integration) | Workflow processing |
| **Infrastructure Model** | Microsoft-managed | SaaS (managed) | PaaS (self-managed) | SDK (self-managed) | SDK bridging host + client | PaaS (self-managed) | SDK (self-managed) | PaaS (self-managed) |
| **Best For** | Broad productivity | Custom agents | Custom AI apps | **Workflow orchestration** | Custom branded experiences and generative UI atop Agent Framework | Managed agents | Pro-code extensions | **Enterprise integration + AI** |

[^frontier-agents]: Frontier Word/Excel/PowerPoint creation agents (Preview) require admin Frontier opt-in (Frontier is the early access program for experimental/preview Copilot features), Anthropic provider connection, and acceptance of Anthropic commercial terms; data is processed outside Microsoft-managed environments. Sources: [Word/Excel/PowerPoint Agents](https://learn.microsoft.com/en-us/copilot/microsoft-365/wordexcelppt-agents), [Microsoft 365 Copilot admin user access](https://learn.microsoft.com/en-us/copilot/microsoft-365/microsoft-365-copilot-page#user-access).
[^mobile-ext]: Microsoft 365 Copilot release notes (Nov 24, 2025) – mobile support for custom engine agents and message-extension agents on iOS/Android. Source: [Microsoft 365 Copilot release notes - Nov 24, 2025](https://learn.microsoft.com/en-us/copilot/microsoft-365/release-notes#november-24,-2025) (Retrieved: 2025-01-27).
[^agent-registry]: Agent Registry lifecycle actions (publish, activate, deploy, pin, block, remove, delete, reassign owner, export inventory). Source: [Agent Registry in the Microsoft 365 admin center](https://learn.microsoft.com/en-us/microsoft-365/admin/manage/agent-registry?view=o365-worldwide#admin-actions-to-manage-agents) (Retrieved: 2026-01-23).
[^search-api]: Overview of the Microsoft 365 Copilot Search API (Preview) for hybrid semantic + lexical search across OneDrive via Graph `/beta`. Source: [Microsoft 365 Copilot Search API overview](https://learn.microsoft.com/en-us/microsoft-365-copilot/extensibility/api/ai-services/search/overview) (Retrieved: 2025-10-20).
[^when-not-agent]: Agent Framework guidance on when *not* to use an agent (prefer deterministic functions/workflows). Source: [Microsoft Agent Framework overview](https://learn.microsoft.com/en-us/agent-framework/overview/agent-framework-overview).
[^aafs-triggers]: *What's new in Microsoft Foundry Agent Service*, Microsoft Learn. May 2025 GA update includes Azure Logic Apps triggers for agents. Source: [Foundry Agent Service - What's new](https://learn.microsoft.com/en-us/azure/ai-foundry/agents/whats-new?view=foundry-classic) (Retrieved: 2025-10-08).
[^logicapps-agents]: *Workflows with AI agents and models in Azure Logic Apps (Preview)*, Microsoft Learn. Source: [Logic Apps agent workflows concepts](https://learn.microsoft.com/en-us/azure/logic-apps/agent-workflows-concepts) (Retrieved: 2025-11-18).
[^aafs-mcp]: *What's new in Microsoft Foundry Agent Service*, Microsoft Learn. June 2025 update announces the MCP tool. Source: [Foundry Agent Service - What's new](https://learn.microsoft.com/en-us/azure/ai-foundry/agents/whats-new?view=foundry-classic) (Retrieved: 2025-10-08).
[^logicapps-mcp]: *Set up Standard logic apps as remote MCP servers (Preview)*, Microsoft Learn. Source: [Set up Standard logic apps as remote MCP servers](https://learn.microsoft.com/en-us/azure/logic-apps/set-up-model-context-protocol-server-standard) (Retrieved: 2025-11-18).

---

## Developer Agent Comparison
{: .tech-heading }

Contrast packaged Microsoft agents (Coding, SRE, App Modernization) by trigger, action scope, and human-in-the-loop expectations.

| Feature | GitHub Copilot Coding Agent | Azure SRE Agent | GitHub Copilot App Modernization |
|---------|-----------------------------|-----------------|----------------------------------|
| **Primary Role** | Autonomous Developer | Site Reliability Engineer | Migration Specialist |
| **Trigger** | GitHub Issue | Azure Monitor Alert | Manual Invocation |
| **Action Space** | Codebase (Read/Write), Tests | Azure Resources (Read/Action), Logs | Codebase (Mass Refactor) |
| **Output** | Pull Request | RCA Report, Fix PR | Upgrade Plan, PR |
| **Human Loop** | PR Review | Alert Acknowledgment | Plan Approval, PR Review |
| **Underlying Model** | Optimized Coding Models | Specialized SRE Models | Migration-Tuned Models |
| **Context Window** | Repository-aware | Log/Metric-aware | Dependency-aware |
| **Status** | Preview | Preview | Preview |

---

## Workflow Orchestration Platform Comparison

**Agentic workflows** automate business processes and orchestrate AI agents through deterministic sequences with AI integration. Microsoft provides three primary technologies for different development approaches and team skills.

Use this matrix to choose between Agent Framework Workflows, Logic Apps AI Agent Workflows, and Copilot Studio agent flows based on skills, hosting, connectors, and checkpointing needs.

### Technology Options
{: .no_toc }

| Feature | **Agent Framework Workflows** | **Logic Apps AI Agent Workflows** | **Copilot Studio Agent Flows** |
|---------|------------------------------|-----------------------------------|--------------------------------|
| **Approach** | Pro-code (C#, Python) | Visual designer + code | Low-code (natural language/visual) |
| **Architecture** | Graph-based (Executors + Edges) | Workflow designer + connectors | Workflow designer + connectors |
| **Checkpointing** | ✅ Yes (built-in) | ✅ Yes (state management) | ❌ No |
| **Type Safety** | ✅ Yes (compile-time) | ⚠️ Partial (schema validation) | ⚠️ Partial (schema validation) |
| **AI Integration** | Native (\IChatClient\) | Azure OpenAI, Microsoft Foundry (Azure), Microsoft Foundry Agent Service | Azure OpenAI, Microsoft Foundry (Azure), Microsoft Foundry Agent Service |
| **Connectors** | Custom code (any API) | 1,400+ connectors + custom code | 1,000+ (Power Platform) |
| **Hosting** | Self-managed (Azure) | Azure Portal | Microsoft SaaS (managed) |
| **Licensing** | Open-source (free SDK) | Azure consumption/Standard | Copilot Studio Credits |
| **DevOps** | ✅ Yes (code-based CI/CD) | ✅ Yes (GitHub Actions, Azure DevOps) | ✅ Yes (Pipelines, GitHub Actions, Azure DevOps) |
| **MCP Server** | ⚠️ Custom | ✅ Yes (Preview) | ❌ No |
| **Status** | Public Preview | Preview (Consumption agent workflows), GA (core) | GA |
| **Best For** | Multi-agent orchestration + checkpointing | Enterprise integration + AI agents | Fast automation within Studio agents |

**Sources:**
- [Agent Framework Workflows](https://learn.microsoft.com/en-us/agent-framework/overview/agent-framework-overview)
- [Logic Apps Agent Workflows](https://learn.microsoft.com/en-us/azure/logic-apps/agent-workflows-concepts)
- [Copilot Studio Agent Flows](https://learn.microsoft.com/en-us/microsoft-copilot-studio/flows-overview)
- [Agent Flows vs Cloud Flows FAQ](https://learn.microsoft.com/en-us/microsoft-copilot-studio/flows-faqs)

**Last Updated:** 2024-10-30
**Confidence Level:** High (official Microsoft documentation for all three technologies)

---

## When to Use Each Workflow Technology

### Agent Framework Workflows
{: .no_toc }

**Use When:**
- Type-safe workflow orchestration with compile-time validation is required
- Checkpointing needed for long-running or human-in-the-loop processes
- Multi-agent patterns required (Sequential, Concurrent, Handoff, Magentic)
- Pro-code development team (C#, Python) available
- Integrating with M365 Agents SDK

**Don't Use When:**
- Low-code approach preferred
- Need 1,000+ pre-built connectors
- Fast time-to-market is critical priority
- No development team available

**Sources:**
- [Agent Framework Workflows Overview](https://learn.microsoft.com/en-us/agent-framework/overview/agent-framework-overview) (Updated: 2025-10-01)

---

### Logic Apps AI Agent Workflows
{: .no_toc }

**Use When:**
- Enterprise integration with 1,400+ connectors (cloud + on-premises) required
- Visual designer + code hybrid approach fits team skills
- Azure-native hosting with DevOps deployments needed
- MCP server capabilities required (expose workflows as AI tools)
- Autonomous or conversational agent workflows with Azure OpenAI

**Don't Use When:**
- Purely low-code approach needed (use Copilot Studio instead)
- Budget constraints prohibit Azure consumption costs
- M365-only governance required
- Compile-time type safety is critical (use Agent Framework instead)

**Sources:**
- [Logic Apps Agent Workflows Concepts](https://learn.microsoft.com/en-us/azure/logic-apps/agent-workflows-concepts) (Updated: 2025-11-18)

---

### Copilot Studio Agent Flows
{: .no_toc }

**Use When:**
- Native automation within Copilot Studio agents needed (no separate license)
- Fastest time-to-value with low-code/natural language approach required
- Managed SaaS preferred (no infrastructure management)
- Business process automation for Studio agents
- Makers without coding skills available

**Don't Use When:**
- Checkpointing or state persistence required for long workflows
- Complex multi-agent orchestration needed
- Full DevOps control and Azure-native hosting required
- MCP server capabilities needed

**Sources:**
- [Copilot Studio Flows Overview](https://learn.microsoft.com/en-us/microsoft-copilot-studio/flows-overview) (Updated: 2025-11-21)

---

## Data Grounding Technology Comparison

Side-by-side grounding options (Copilot connectors, AI Search, Fabric, Cosmos, PostgreSQL, SQL Server) by search mode, boundary, and best-fit workloads.

| Feature | **Copilot connectors** | **Azure AI Search** | **Microsoft Fabric** | **Cosmos DB** | **PostgreSQL** | **SQL Server 2025** |
|---------|---------------------|---------------------|----------------------|----------------|----------------|---------------------|
| **Vector Search** | No (semantic index only) | ✅ Yes (IVF, HNSW) | ✅ Yes (Lakehouse via external tools) | ✅ Yes (IVF, HNSW, DiskANN) | ✅ Yes (pgvector, IVF) | ✅ Yes (DiskANN) |
| **Hybrid Search** | No | ✅ Yes (vector + keyword) | ✅ Yes (SQL endpoint + external) | ✅ Yes | ✅ Yes | ✅ Yes |
| **Data Boundary** | M365 tenant | Azure | Azure (OneLake) | Azure | Azure | On-premises or Azure |
| **Index Target** | Microsoft Graph (connector ingestion) | Azure AI Search index / knowledge bases (agentic retrieval, preview) | Lakehouse Delta tables, Warehouse tables | Cosmos DB collection | PostgreSQL table | SQL Server table |
| **Access Method** | Graph API (Copilot connector APIs) | REST API, SDKs (`2025-11-01-preview` for knowledge bases) | ADLS Gen2 APIs, SQL endpoint, Fabric Data Agents | SDKs, REST API | SQL, pgvector | T-SQL, VECTOR type |
| **Best For** | M365-centric knowledge (Copilot, Search, Context IQ) | Azure-native RAG with ACL/label enforcement and agentic retrieval | Analytics data + unified data platform | Transactional + vector data | PostgreSQL workloads with AI | SQL Server workloads with AI |
| **Licensing** | Included with M365 | Azure consumption (agentic retrieval preview on free tier quotas) | Fabric capacity (F2+) | Azure consumption | Azure consumption | SQL Server license |
| **Status** | GA | GA (agentic retrieval preview) | GA (Platform), Preview (Data Agents) | GA | GA | Preview |

**Sources:**
- [Microsoft 365 Copilot connectors overview](https://learn.microsoft.com/en-us/graph/connecting-external-content-connectors-overview) (Updated: 2025-07-21)
- [Azure AI Search what's new](https://learn.microsoft.com/en-us/azure/search/whats-new#november-2025) (Updated: 2025-12-18)
- [Microsoft Fabric Platform](https://learn.microsoft.com/en-us/fabric/fundamentals/microsoft-fabric-overview) (Updated: 2025-12-19)
- [Microsoft Foundry (Azure) FAQ](https://learn.microsoft.com/en-us/azure/ai-foundry/faq?view=foundry-classic) (Updated: 2026-01-23)
- [Cosmos DB Vector Search](https://learn.microsoft.com/en-us/azure/cosmos-db/vector-search) (Updated: 2025-09-25)
- [Azure Database for PostgreSQL AI](https://learn.microsoft.com/en-us/azure/postgresql/azure-ai/generative-ai-overview) (Updated: 2026-01-20)
- [SQL Server 2025 Vectors](https://learn.microsoft.com/en-us/sql/sql-server/ai/vectors?view=sql-server-ver17) (Updated: 2025-07-24)

**Confidence Level:** High for GA technologies, Medium for SQL Server 2025 Preview

---

### Azure AI Search Agentic & Hybrid Preview Highlights
{: .no_toc }

| Feature | Status | Notes | API Version | Documentation |
|---------|--------|-------|-------------|----------------|
| Knowledge bases (renamed from knowledge agents) | Preview | Routes `/knowledgebases/*`, `outputMode` replaces `outputConfiguration`, `retrievalReasoningEffort` (minimal/low/medium) replaces fast path; partial responses supported. | 2025-11-01-preview | [Agentic retrieval migration](https://learn.microsoft.com/en-us/azure/search/agentic-retrieval-how-to-migrate) |
| Knowledge sources | Preview | Indexed/remote SharePoint, indexed OneLake, web/Bing, search index, Azure Blob; `ingestionParameters` wrap embeddings/chat models, schedules, `contentExtractionMode` (Content Understanding). Portal uses 2025-08-01-preview objects—migrate for 2025-11-01-preview. | 2025-11-01-preview | [Knowledge sources](https://learn.microsoft.com/en-us/azure/search/agentic-knowledge-source-overview) |
| Content Understanding skill | Preview | Rich Markdown/table extraction and chunking without Text Split; billed to Foundry resource. | 2025-05-01-preview | [Content Understanding skill](https://learn.microsoft.com/en-us/azure/search/cognitive-search-skill-content-understanding) |
| Semantic ranker on free tier | GA | Semantic reranking available on free tier with volume limits. | n/a | [Semantic ranker](https://learn.microsoft.com/en-us/azure/search/semantic-how-to-enable-disable) |
| Hybrid/vector debug & control | Preview | `truncationDimension` for MRL embeddings, `filterOverride` for vector-only filters in hybrid queries, `debug` subscores for RRF, token-based Text Split parameters. | 2024-09-01-preview | [Hybrid search preview](https://learn.microsoft.com/en-us/azure/search/hybrid-search-how-to-query#example-hybrid-search-with-filters-targeting-vector-subqueries-preview) |

**Last Updated:** January 28, 2026

---

## Agent Development Approach Comparison

Declarative vs custom engine: when to stay low-code with managed orchestration versus bringing your own orchestrator and hosting.

| **Approach** | **Declarative Agents** | **Custom Engine Agents** |
|--------------|------------------------|--------------------------|
| **Definition** | Pre-built orchestration; configure instructions, knowledge, actions | Bring your own orchestrator (Agent Framework (Preview) recommended, LangChain (Third-party)) |
| **Best For** | Simple → Moderate complexity; fast time-to-market | Complex workflows; multi-agent systems; custom reasoning |
| **Development Model** | Low-code (Copilot Studio) or Pro-code (M365 Agents Toolkit) | Pro-code only; full control over logic |
| **Orchestration** | Microsoft-managed orchestration (GPT-based) | You control orchestration framework and model selection |
| **M365 Integration** | Native M365 Copilot integration | Can integrate via M365 Agents SDK |
| **Typical Timeline** | Days to weeks | Weeks to months |
| **Skill Level** | Makers (low-code) or Developers (pro-code) | Developers required |

**Sources:**
- [Declarative Agents for Microsoft 365 Copilot](https://learn.microsoft.com/en-us/microsoft-365-copilot/extensibility/overview-declarative-agent) (Updated: 2025-12-01)
- [Custom Engine Agents Overview](https://learn.microsoft.com/en-us/microsoft-365-copilot/extensibility/overview-custom-engine-agent) (Updated: 2026-01-13)

**Confidence Level:** High (official Microsoft guidance)

---

## Custom Engine Agent Tool Comparison

Tooling snapshot for custom engine agents across Copilot Studio, Teams SDK, and M365 Agents SDK (channels, orchestration fit, developer experience).

| **Tool** | **Copilot Studio** | **Teams SDK** | **M365 Agents SDK** |
|----------|---------------------|----------------------|---------------------|
| **Primary Use Case** | Low-code custom engine agents | Bot Framework migration path | Multi-channel pro-code agents |
| **Orchestration Options** | Agent Framework (Preview) recommended, LangChain (Third-party) | Teams SDK (Action Planner) | Agent Framework (Preview) recommended, LangChain (Third-party) |
| **Deployment Channels** | Teams, M365 Copilot | Teams-focused | 10+ channels (Teams, Slack, web chat, etc.) |
| **Developer Experience** | Visual designer + code | Code-first | Code-first with Toolkit in VS Code |
| **Target Audience** | Makers and developers | Bot Framework developers | Professional developers |
| **Licensing Model** | Per-user subscription | Included with M365 | Included with Azure Bot Service |
| **Status** | GA | GA | GA |

**Publishing scope:** Only agents built with the Teams SDK, M365 Agents SDK, or Foundry can be published to the Microsoft Commercial Store via Agents Toolkit; Copilot Studio agents are org-only by default. Source: [Custom engine agents for Microsoft 365 overview](https://learn.microsoft.com/en-us/microsoft-365-copilot/extensibility/overview-custom-engine-agent).

**Sources:**
- [Copilot Studio Custom Engine Agents](https://learn.microsoft.com/en-us/microsoft-365-copilot/extensibility/overview-custom-engine-agent) (Updated: 2026-01-13)
- [Teams SDK Overview](https://learn.microsoft.com/en-us/microsoftteams/platform/teams-ai-library/welcome) (Updated: 2025-11-17)
- [M365 Agents SDK](https://learn.microsoft.com/en-us/microsoft-365/agents-sdk/agents-sdk-overview) (Updated: 2025-11-21)

**Confidence Level:** High (all GA, official Microsoft documentation)

---

{: .note-title }
> Related Pages
>
> - For technology selection guidance, see [Decision Framework]({{ '/docs/decision-framework' | relative_url }})    
> - For fast lookup tables, see [Quick Reference]({{ '/docs/quick-reference' | relative_url }})
> - For architecture patterns, see [Implementation Patterns]({{ '/docs/implementation-patterns' | relative_url }})

---

**Next:** [Quick Reference]({{ '/docs/quick-reference' | relative_url }}) - Fast lookup tables to accompany the matrices

---
