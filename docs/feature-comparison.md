---
layout: default
title: Feature Comparison
nav_order: 9
description: Comprehensive side-by-side technology comparisons
---

# Feature Comparison

{: .note }
Detailed side-by-side comparisons of Microsoft AI technologies. For decision guidance, see the [Decision Framework]({{ '/docs/decision-framework' | relative_url }}).

---

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## Comprehensive Platform Comparison

| Feature | M365 Copilot | Copilot Studio | Microsoft Foundry (Azure) | **Microsoft Agent Framework** | **AG-UI Protocol (Preview)** | Foundry Agent Service | M365 Agents SDK | **Azure Logic Apps** |
|---------|--------------|----------------|------------------|------------------------------|----------------------------|------------------------|-----------------|----------------------|
| **User Experience** | M365 apps (Frontier creation agents Preview[^frontier-agents]) | Custom channels | Custom apps | Embedded in apps | Protocol-based web/mobile UI | Custom apps | Copilot/Teams/Web | **Custom/Conversational** |
| **Build Approach** | No-build (consume) | Low-code to pro-code | Code-first | Pro-code (orchestration SDK) | Pro-code protocol integration (ASP.NET Core, FastAPI) | Code-first | Pro-code | **Visual designer + code** |
| **Data Boundary** | M365 tenant | M365 or Azure | Azure | Any | Inherits host runtime | Azure | M365 or Azure | **Azure** |
| **Governance** | Tenant-integrated (automatic) | Tenant or workload | Workload-tailored (custom) | Application-level | Inherits host app controls; approvals via middleware | Workload-tailored (custom) | Tenant or workload | **Azure RBAC** |
| **Admin Center** | M365 admin center | Power Platform admin | Azure RBAC | Application-level | Host platform (Azure/App) | Azure RBAC | M365 admin center | **Azure portal** |
| **Licensing Model** | Per-user (\/month) | Metered messages | Azure consumption | Open-source (free) | Open-source adapters (no license) | Azure consumption | Included in M365 | **Consumption or Standard** |
| **Extensibility** | Via Studio/SDK | Plugins, connectors | Full custom | Workflow orchestration | Seven protocol features (streaming, backend tool rendering, human approvals, generative UI, shared/predictive state) | Full custom | Full custom | **1,400+ connectors** |
| **Deployment** | Microsoft-managed | Microsoft-managed | Self-managed | Self-managed (SDK) | Self-hosted endpoints (ASP.NET Core, FastAPI) | Microsoft-managed | Self-managed | **Self-managed (Azure)** |
| **Time to Value** | Immediate | Days to weeks | Weeks to months | Weeks (with dev skills) | Weeks (requires pro dev + UI build) | Weeks to months | Weeks | **Days to weeks** |
| **Skill Level** | End user | Maker to developer | Developer/engineer | Developer (C#/Python) | Developers (front-end + back-end) | Developer/engineer | Developer | **Developer** |
| **Orchestration** | Built-in | Built-in | Custom | **Workflow-based (Executor/Edge)** | Inherits Agent Framework orchestration | Managed orchestration | BYO orchestrator | **Visual workflow** |
| **Checkpointing** | N/A | No | Custom | **Yes (built-in)** | Inherits from orchestrator | No | Via orchestrator | **State management** |
| **AI Agent Workflows** | N/A | Via agent flows | Via Agent Service[^aafs-triggers] | N/A | N/A (UI protocol) | ✅ Yes | N/A | **✅ Yes (Preview)**[^logicapps-agents] |
| **MCP Server** | N/A | ❌ No | ✅ Yes (MCP tool)[^aafs-mcp] | N/A | N/A | ⚠️ Custom | N/A | **✅ Yes (Preview)**[^logicapps-mcp] |
| **Optimized For** | Productivity at scale | Speed to market + connectors | Latency & control | Workflow orchestration | Bespoke agent UI with streaming & approvals | Managed agents | Pro-code flexibility | **Enterprise integration** |
| **Latency Profile** | <1s (M365 apps) | <1s (managed platform) | <100ms (direct API) | Workflow processing | SSE streaming (depends on backend) | <100ms (direct API) | <1s (M365 integration) | Workflow processing |
| **Infrastructure Model** | Microsoft-managed | SaaS (managed) | PaaS (self-managed) | SDK (self-managed) | SDK bridging host + client | PaaS (self-managed) | SDK (self-managed) | PaaS (self-managed) |
| **Best For** | Broad productivity | Custom agents | Custom AI apps | **Workflow orchestration** | Custom branded experiences and generative UI atop Agent Framework | Managed agents | Pro-code extensions | **Enterprise integration + AI** |

[^frontier-agents]: Frontier Word/Excel/PowerPoint creation agents (Preview) require admin Frontier opt-in, Anthropic provider connection, and acceptance of Anthropic commercial terms; data is processed outside Microsoft-managed environments. Sources: [Word/Excel/PowerPoint Agents](https://learn.microsoft.com/en-us/copilot/microsoft-365/wordexcelppt-agents), [Microsoft 365 Copilot admin user access](https://learn.microsoft.com/en-us/copilot/microsoft-365/microsoft-365-copilot-page#user-access).
[^aafs-triggers]: *What's new in Microsoft Foundry (Azure) Agent Service*, Microsoft Learn. May 2025 GA update includes Azure Logic Apps triggers for agents.
[^logicapps-agents]: *Workflows with AI agents and models in Azure Logic Apps (Preview)*, Microsoft Learn. Retrieved: 2025-11-10.
[^aafs-mcp]: *What's new in Microsoft Foundry (Azure) Agent Service*, Microsoft Learn. June 2025 update announces the MCP tool.
[^logicapps-mcp]: *Set up Standard logic apps as remote MCP servers (Preview)*, Microsoft Learn. Retrieved: 2025-11-10.

---

## Developer Agent Comparison
{: .tech-heading }

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

### Technology Options
{: .no_toc }

| Feature | **Agent Framework Workflows** | **Logic Apps AI Agent Workflows** | **Copilot Studio Agent Flows** |
|---------|------------------------------|-----------------------------------|--------------------------------|
| **Approach** | Pro-code (C#, Python) | Visual designer + code | Low-code (natural language/visual) |
| **Architecture** | Graph-based (Executors + Edges) | Workflow designer + connectors | Workflow designer + connectors |
| **Checkpointing** | ✅ Yes (built-in) | ✅ Yes (state management) | ❌ No |
| **Type Safety** | ✅ Yes (compile-time) | ⚠️ Partial (schema validation) | ⚠️ Partial (schema validation) |
| **AI Integration** | Native (\IChatClient\) | Azure OpenAI, Microsoft Foundry (Azure), Agent Service | Azure OpenAI, Microsoft Foundry (Azure), Agent Service |
| **Connectors** | Custom code (any API) | 1,400+ connectors + custom code | 1,000+ (Power Platform) |
| **Hosting** | Self-managed (Azure) | Azure Portal | Microsoft SaaS (managed) |
| **Licensing** | Open-source (free SDK) | Azure consumption/Standard | Copilot Studio Credits |
| **DevOps** | ✅ Yes (code-based CI/CD) | ✅ Yes (GitHub Actions, Azure DevOps) | ✅ Yes (Pipelines, GitHub Actions, Azure DevOps) |
| **MCP Server** | ⚠️ Custom | ✅ Yes (Preview) | ❌ No |
| **Status** | Public Preview | Preview (Agents), GA (core) | GA |
| **Best For** | Multi-agent orchestration + checkpointing | Enterprise integration + AI agents | Fast automation within Studio agents |

**Sources:**
- [Agent Framework Workflows](https://learn.microsoft.com/en-us/azure/ai-services/agents/concepts/agent-framework)
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
- [Agent Framework Workflows Overview](https://learn.microsoft.com/en-us/azure/ai-services/agents/concepts/agent-framework) (Updated: 2024-10-20)

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
- [Logic Apps Agent Workflows Concepts](https://learn.microsoft.com/en-us/azure/logic-apps/agent-workflows-concepts) (Updated: 2024-10-28)

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
- [Copilot Studio Flows Overview](https://learn.microsoft.com/en-us/microsoft-copilot-studio/flows-overview) (Updated: 2024-10-05)

---

## Data Grounding Technology Comparison

| Feature | **Graph Connectors** | **Azure AI Search** | **Microsoft Fabric** | **Cosmos DB** | **PostgreSQL** | **SQL Server 2025** |
|---------|---------------------|---------------------|----------------------|----------------|----------------|---------------------|
| **Vector Search** | No (semantic index only) | ✅ Yes (IVF, HNSW) | ✅ Yes (Lakehouse via external tools) | ✅ Yes (IVF, HNSW, DiskANN) | ✅ Yes (pgvector, IVF) | ✅ Yes (DiskANN) |
| **Hybrid Search** | No | ✅ Yes (vector + keyword) | ✅ Yes (SQL endpoint + external) | ✅ Yes | ✅ Yes | ✅ Yes |
| **Data Boundary** | M365 tenant | Azure | Azure (OneLake) | Azure | Azure | On-premises or Azure |
| **Index Target** | Microsoft Graph | Azure AI Search index / knowledge bases (agentic retrieval, preview) | Lakehouse Delta tables, Warehouse tables | Cosmos DB collection | PostgreSQL table | SQL Server table |
| **Access Method** | Graph API | REST API, SDKs (`2025-11-01-preview` for knowledge bases) | ADLS Gen2 APIs, SQL endpoint, Fabric Data Agents | SDKs, REST API | SQL, pgvector | T-SQL, VECTOR type |
| **Best For** | M365-centric knowledge | Azure-native RAG with ACL/label enforcement and agentic retrieval | Analytics data + unified data platform | Transactional + vector data | PostgreSQL workloads with AI | SQL Server workloads with AI |
| **Licensing** | Included with M365 | Azure consumption (agentic retrieval preview on free tier quotas) | Fabric capacity (F2+) | Azure consumption | Azure consumption | SQL Server license |
| **Status** | GA | GA (agentic retrieval preview) | GA (Platform), Preview (Data Agents) | GA | GA | Preview |

**Sources:**
- [Microsoft Graph Connectors](https://learn.microsoft.com/en-us/graph/connecting-external-content-connectors-overview) (Updated: 2024-09-20)
- [Azure AI Search what's new](https://learn.microsoft.com/en-us/azure/search/whats-new#november-2025) (Updated: 2025-11-18)
- [Microsoft Fabric Platform](https://learn.microsoft.com/en-us/fabric/fundamentals/microsoft-fabric-overview) (Updated: 2025-11-03)
- [Fabric AI Foundry Integration](https://learn.microsoft.com/en-us/azure/ai-foundry/faq) (Updated: 2025-11-03)
- [Cosmos DB Vector Search](https://learn.microsoft.com/en-us/azure/cosmos-db/vector-search) (Updated: 2024-10-08)
- [Azure Database for PostgreSQL AI](https://learn.microsoft.com/en-us/azure/postgresql/flexible-server/generative-ai-overview) (Updated: 2024-09-30)
- [SQL Server 2025 Vectors](https://learn.microsoft.com/en-us/sql/relational-databases/vectors/vectors-sql-server) (Updated: 2024-10-20)

**Confidence Level:** High for GA technologies, Medium for SQL Server 2025 Preview

---

## Agent Development Approach Comparison

| **Approach** | **Declarative Agents** | **Custom Engine Agents** |
|--------------|------------------------|--------------------------|
| **Definition** | Pre-built orchestration; configure instructions, knowledge, actions | Bring your own orchestrator (Agent Framework Preview recommended, LangChain third-party) |
| **Best For** | Simple → Moderate complexity; fast time-to-market | Complex workflows; multi-agent systems; custom reasoning |
| **Development Model** | Low-code (Copilot Studio) or Pro-code (M365 Agents Toolkit) | Pro-code only; full control over logic |
| **Orchestration** | Microsoft-managed orchestration (GPT-based) | You control orchestration framework and model selection |
| **M365 Integration** | Native M365 Copilot integration | Can integrate via M365 Agents SDK |
| **Typical Timeline** | Days to weeks | Weeks to months |
| **Skill Level** | Makers (low-code) or Developers (pro-code) | Developers required |

**Sources:**
- [Declarative Agents for Microsoft 365 Copilot](https://learn.microsoft.com/en-us/microsoft-365-copilot/extensibility/copilot-studio-declarative-agents) (Updated: 2024-10-15)
- [Custom Engine Agents Overview](https://learn.microsoft.com/en-us/microsoft-365-copilot/extensibility/copilot-studio-custom-engine-agent) (Updated: 2024-10-18)

**Confidence Level:** High (official Microsoft guidance)

---

## Custom Engine Agent Tool Comparison

| **Tool** | **Copilot Studio** | **Teams AI Library** | **M365 Agents SDK** |
|----------|---------------------|----------------------|---------------------|
| **Primary Use Case** | Low-code custom engine agents | Bot Framework migration path | Multi-channel pro-code agents |
| **Orchestration Options** | Agent Framework Preview recommended, LangChain third-party | Teams AI Library framework | Agent Framework Preview recommended, LangChain third-party |
| **Deployment Channels** | Teams, M365 Copilot | Teams-focused | 10+ channels (Teams, Slack, web chat, etc.) |
| **Developer Experience** | Visual designer + code | Code-first | Code-first with Toolkit in VS Code |
| **Target Audience** | Makers and developers | Bot Framework developers | Professional developers |
| **Licensing Model** | Per-user subscription | Included with M365 | Included with Azure Bot Service |
| **Status** | GA | GA | GA |

**Sources:**
- [Copilot Studio Custom Engine Agents](https://learn.microsoft.com/en-us/microsoft-365-copilot/extensibility/copilot-studio-custom-engine-agent) (Updated: 2024-10-18)
- [Teams AI Library Overview](https://learn.microsoft.com/en-us/microsoftteams/platform/bots/how-to/teams-conversational-ai/teams-conversation-ai-overview) (Updated: 2024-07-31)
- [M365 Agents SDK](https://learn.microsoft.com/en-us/microsoft-365/dev/m365-agents-sdk/overview) (Updated: 2024-10-22)

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
