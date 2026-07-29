---
layout: default
title: Resources & Next Steps
nav_order: 13
description: Key takeaways and resources by role
---

# Resources & Next Steps
{: .no_toc }

**Everything on this page exists because the framework deliberately stopped short of it.**

The preceding pages taught you how to decide. They avoided version numbers, licensing tiers, and release dates on purpose. Those age badly, and a methodology built on them ages with them. This page is where the volatile material lives, organized so you can find the current truth when you need it.

Treat it as a reading list with a shelf life. Microsoft Learn stamps every page with a last-updated date; check it before a production decision, and assume anything here could have moved since you last looked.

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## Key Takeaways

1. **Start with user experience**: Where users interact drives technology choice
2. **Choose simplest tool that meets requirements**: Developers can use low-code or pro-code; makers limited to low-code; let complexity and time-to-market decide
3. **Match governance approach to your needs**: M365 tenant-integrated (ready to use, fast) vs Azure workload-tailored (precise control for specific requirements)
4. **Plan for scale**: Start simple, architect for growth
5. **Integration matters**: Technologies work together, not in isolation
6. **Prioritize governance**: Especially for Microsoft 365 Copilot extensions and custom agents; keep agent inventory current via Agent Registry/Agent 365
7. **Adopt staged security blueprints**: Use Microsoft Purview deployment models to secure agent data and interactions
8. **Think beyond agents**: Connectors, plugins, and extensibility matter
9. **Budget appropriately**: Understand per-user, consumption, and the **two distinct Azure prepurchase plans**: the Copilot Credit Pre-Purchase Plan (CCCUs) and the Microsoft Agent Prepurchase Plan (ACUs)
10. **Iterate and learn**: Start small, measure, expand
11. **Stay current**: Capabilities evolving rapidly, especially in preview
---

## Role-Based Next Steps

### For Architects & Technical Decision Makers
{: .no_toc }

1. Review this decision framework with stakeholders
2. Map your requirements to the nine decision questions
3. Identify pilot scenarios for chosen technologies
4. Plan proof of concept with clear success criteria
5. Consider governance and compliance early

**Key Resources:**

- [What's new in Microsoft Foundry](https://learn.microsoft.com/en-us/azure/foundry/whats-new-foundry)
- [M365 Copilot Extensibility Overview](https://learn.microsoft.com/en-us/microsoft-365/copilot/extensibility/)
- [Microsoft 365 Copilot release notes - November 25, 2025](https://learn.microsoft.com/en-us/microsoft-365/copilot/release-notes#november-25,-2025)
- [Agent Registry in the Microsoft 365 admin center](https://learn.microsoft.com/en-us/microsoft-365/admin/manage/agent-registry?view=o365-worldwide#admin-actions-to-manage-agents) (Updated: 2026-01-23)
- [Secure and govern Microsoft 365 Copilot agents (Purview blueprint)](https://learn.microsoft.com/en-us/purview/deploymentmodels/depmod-sc-agents-deployment)
- [Microsoft Agents hub (Plan → Design → Adopt → Improve)](https://learn.microsoft.com/en-us/agents/). Microsoft's own agent docset: archetype framework, maturity model, transformation patterns, Center of Excellence, evaluation
- [Cloud Adoption Framework for AI](https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/ai/)
- [CAF for AI agents](https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/ai-agents/): Plan for agents → Govern & secure agents → Build agents → **Manage agents**
- [Well-Architected Framework: AI workloads](https://learn.microsoft.com/en-us/azure/well-architected/ai/). There is **no separate WAF service guide for agents**; CAF routes agent teams here
- [Baseline Microsoft Foundry Chat Reference Architecture](https://learn.microsoft.com/en-us/azure/architecture/ai-ml/architecture/baseline-microsoft-foundry-chat)
- [Copilot Credit Pre-Purchase Plan (CCCUs)](https://learn.microsoft.com/en-us/azure/cost-management-billing/reservations/copilot-credit-p3)
- [Microsoft Agent Prepurchase Plan (ACUs)](https://learn.microsoft.com/en-us/azure/cost-management-billing/reservations/agent-pre-purchase) covers "select services across Microsoft Foundry, Microsoft Copilot Studio, Microsoft Fabric, and GitHub costs"

---

### For Developers
{: .no_toc }

1. Explore the [Microsoft Foundry portal](https://ai.azure.com/?cid=learnDocs) and samples
2. Install M365 Agents SDK Toolkit in VS Code
3. Review Agent Framework documentation
4. Experiment with prompt engineering
5. Understand evaluation frameworks

**Key Resources:**

- [Microsoft Foundry quickstart](https://learn.microsoft.com/en-us/azure/foundry/quickstarts/get-started-code)
- [Microsoft Agent Framework workflows](https://learn.microsoft.com/en-us/agent-framework/user-guide/workflows/overview)
- [M365 Agents Toolkit (VS Code)](https://marketplace.visualstudio.com/items?itemName=TeamsDevApp.ms-teams-vscode-extension)
- [Microsoft Agent Framework documentation](https://learn.microsoft.com/en-us/agent-framework/overview/agent-framework-overview)
- [Semantic Kernel documentation](https://learn.microsoft.com/en-us/semantic-kernel/overview/)
- [Agentic retrieval quickstart for Azure AI Search](https://learn.microsoft.com/en-us/azure/search/search-get-started-agentic-retrieval)
- [Microsoft 365 Copilot Search API overview (Preview)](https://learn.microsoft.com/en-us/microsoft-365/copilot/extensibility/api/ai-services/search/overview) (Updated: 2025-10-20)
- [Copy an agent to Copilot Studio](https://learn.microsoft.com/en-us/microsoft-365/copilot/extensibility/copy-agent-to-copilot-studio) (Updated: 2026-01-26)
- [GitHub Copilot SDK: getting started](https://docs.github.com/en/copilot/how-tos/copilot-sdk/getting-started) (GA; Python, TypeScript, Go, .NET, Java, Rust)
- [GitHub Copilot SDK + Microsoft Agent Framework integration](https://docs.github.com/en/copilot/how-tos/copilot-sdk/integrations/microsoft-agent-framework)
- [Foundry hosted agents: language support](https://learn.microsoft.com/en-us/azure/foundry/agents/concepts/hosted-agents): *"Hosted agents support Python and C#."* A Go, Rust, or Java Copilot SDK agent is **not** directly hostable there

---

### For Makers & Business Users
{: .no_toc }

1. Request Copilot Studio access from IT
2. Complete Copilot Studio learning paths
3. Identify high-value automation candidates
4. Start with templates and pre-built components
5. Collaborate with IT on governance

**Key Resources:**

- [What's new in Copilot Studio](https://learn.microsoft.com/en-us/microsoft-copilot-studio/whats-new#notable-changes)
- [Copilot Studio documentation](https://learn.microsoft.com/en-us/microsoft-copilot-studio/)
- [Copilot Studio learning paths](https://learn.microsoft.com/en-us/training/browse/?products=microsoft-copilot-studio)
- [Power Platform community](https://community.powerplatform.com/)
- [Copy an agent to Copilot Studio](https://learn.microsoft.com/en-us/microsoft-365/copilot/extensibility/copy-agent-to-copilot-studio) (Updated: 2026-01-26)

---

### For IT Admins
{: .no_toc }

1. Review M365 Copilot admin capabilities
2. Understand agent approval workflows
3. Configure Integrated Apps settings
4. Plan connector governance
5. Implement monitoring and usage tracking

**Key Resources:**

- [Security for Microsoft 365 Copilot](https://learn.microsoft.com/en-us/microsoft-365/copilot/security-microsoft-365-copilot)
- [M365 Copilot admin guide](https://learn.microsoft.com/en-us/microsoft-365/copilot/microsoft-365-copilot-setup)
- [Integrated apps management](https://learn.microsoft.com/en-us/microsoft-365/admin/manage/test-and-deploy-microsoft-365-apps)
- [Graph connectors administration](https://learn.microsoft.com/en-us/microsoftsearch/configure-connector)
- [Agent Registry in the Microsoft 365 admin center](https://learn.microsoft.com/en-us/microsoft-365/admin/manage/agent-registry?view=o365-worldwide#admin-actions-to-manage-agents) (Updated: 2026-01-23)
- [Microsoft 365 Copilot release notes - November 25, 2025](https://learn.microsoft.com/en-us/microsoft-365/copilot/release-notes#november-25,-2025)

---

## Official Microsoft Documentation

### Microsoft's Own Frameworks
{: .no_toc }

Read these before you read any product page. They are the maps; everything below is terrain.

- **Microsoft Agents hub**: [`learn.microsoft.com/en-us/agents/`](https://learn.microsoft.com/en-us/agents/)
  - Microsoft-authored docset structured **Plan → Design → Adopt → Improve**
  - [Agent archetype framework](https://learn.microsoft.com/en-us/agents/agent-archetypes/): categories, capabilities, components (the "3Cs")
  - [Agentic AI maturity model](https://learn.microsoft.com/en-us/agents/adoption-maturity-model/): five dimensions
  - [Six agentic transformation patterns](https://learn.microsoft.com/en-us/agents/adoption-patterns/)
  - [Agentic Center of Excellence](https://learn.microsoft.com/en-us/agents/center-of-excellence/) includes agent risk tiering and evaluation guidance

- **Cloud Adoption Framework**
  - [CAF for AI](https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/ai/): Strategy → Plan → Ready → Govern → Secure → Manage
  - [CAF for AI agents](https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/ai-agents/): Plan for agents → Govern & secure agents → Build agents → **Manage agents**

- **Well-Architected Framework**
  - [WAF AI workloads](https://learn.microsoft.com/en-us/azure/well-architected/ai/): application design, application platform, grounding data design, data platform, operations, MLOps/GenAIOps, testing and evaluation, responsible AI, personas
  - **Scope note:** there is **no separate WAF service guide for AI agents.** CAF explicitly routes agent teams to this AI workload guidance.

- **Azure Architecture Center**
  - [Baseline Microsoft Foundry Chat Reference Architecture](https://learn.microsoft.com/en-us/azure/architecture/ai-ml/architecture/baseline-microsoft-foundry-chat) (formerly published as `baseline-microsoft-foundry-chat`)

- **Envisioning methodologies** ⚠️ *Currency flag: the methodologies hold; the product references inside them do not.*
  - [Business Envisioning / BXT](https://learn.microsoft.com/en-us/microsoft-cloud/dev/copilot/isv/business-envisioning): ISV-scoped, last updated **2024-09-26 (~22 months old)**
  - [Capability Envisioning](https://learn.microsoft.com/en-us/microsoft-cloud/dev/copilot/isv/capability-envisioning): last updated **2025-01-16 (~18 months old)**
  - [Copilot UX guidance](https://learn.microsoft.com/en-us/microsoft-cloud/dev/copilot/isv/ux-guidance): last updated **2024-09-26 (~22 months old)**; Microsoft's own labels are Immersive · Assistive · Embedded

### Core Platforms
{: .no_toc }

- **Microsoft 365 Copilot**
  - [Extensibility overview](https://learn.microsoft.com/en-us/microsoft-365/copilot/extensibility/)
  - [Adoption resources](https://adoption.microsoft.com/en-us/copilot/)
  - [Security posture](https://learn.microsoft.com/en-us/microsoft-365/copilot/security-microsoft-365-copilot)
  - [Privacy and data safeguards](https://learn.microsoft.com/en-us/microsoft-365/copilot/microsoft-365-copilot-privacy)
  - [Wave 3: Powering Frontier Transformation](https://www.microsoft.com/en-us/microsoft-365/blog/2026/03/09/powering-frontier-transformation-with-copilot-and-agents/)
  - [Copilot Cowork announcement (March 2026)](https://www.microsoft.com/en-us/microsoft-365/blog/2026/03/09/copilot-cowork-a-new-way-of-getting-work-done/): superseded by the GA announcement below
  - [Copilot Cowork is now generally available](https://www.microsoft.com/en-us/microsoft-365/blog/2026/06/16/copilot-cowork-is-now-generally-available/): **GA worldwide 2026-06-16**; requires a Microsoft 365 Copilot USL plus Copilot Credits. ("Cowork 1" is announced only; do not plan against it.)
  - [Frontier Program enrollment](https://adoption.microsoft.com/en-us/copilot/frontier-program/)

- **Microsoft Foundry (Platform)**
  - [Portal (ai.azure.com)](https://ai.azure.com/?cid=learnDocs)
  - [Azure OpenAI Service overview](https://learn.microsoft.com/en-us/azure/ai-services/openai/)
  - [Azure AI Search service](https://learn.microsoft.com/en-us/azure/search/)
  - **Platform note:** Classic Foundry and the new Foundry portal use different APIs and do **not** have feature parity. Validate capability availability in the portal, SDK samples, and Microsoft Learn before committing to a design.

- **Microsoft Foundry Agent Service (Optional Managed Runtime)**
  - [What's new in Microsoft Foundry](https://learn.microsoft.com/en-us/azure/foundry/whats-new-foundry)
  - [Microsoft Foundry quickstart](https://learn.microsoft.com/en-us/azure/foundry/quickstarts/get-started-code)
  - [Foundry Agent Service Overview](https://learn.microsoft.com/en-us/azure/foundry/agents/overview)
  - [Deploy your first hosted agent](https://learn.microsoft.com/en-us/azure/foundry/agents/quickstarts/quickstart-hosted-agent)
  - [Manage hosted agent lifecycle](https://learn.microsoft.com/en-us/azure/foundry/agents/how-to/manage-hosted-agent)
  - [Hosted agent isolation, sessions, compute, storage, networking, and regions](https://learn.microsoft.com/en-us/azure/foundry/agents/concepts/hosted-agents)
  - [Quotas and limits for Agent Service](https://learn.microsoft.com/en-us/azure/foundry/agents/concepts/limits-quotas-regions)
  - [Fireworks models on Microsoft Foundry (Preview)](https://learn.microsoft.com/en-us/azure/foundry/how-to/fireworks/enable-fireworks-models)
  - [Configure Claude Code for Microsoft Foundry](https://learn.microsoft.com/en-us/azure/foundry/foundry-models/how-to/configure-claude-code)
  - **Service note:** Optional PaaS runtime. Choose Hosted Agents only when per-session VM isolation is worth the complete [Hosted Agent Constraint Card]({{ '/docs/technologies#the-hosted-agent-constraint-card' | relative_url }}); otherwise use Azure Container Apps or AKS for more scalable customer-operated hosting.

- **Copilot Studio**
  - [What's new in Copilot Studio](https://learn.microsoft.com/en-us/microsoft-copilot-studio/whats-new#notable-changes)
  - [Declarative agents](https://learn.microsoft.com/microsoft-365/copilot/extensibility/overview-declarative-agent)
  - [Custom engine agents overview](https://learn.microsoft.com/en-us/microsoft-365/copilot/extensibility/overview-custom-engine-agent)
  - [Copilot Studio documentation](https://learn.microsoft.com/en-us/microsoft-copilot-studio/)
  - [Computer Use (GA)](https://learn.microsoft.com/en-us/microsoft-copilot-studio/computer-use)
  - **Verified feature status:** generative orchestration **GA** (default for new agents) · computer use **GA (May 2026)** · agent-to-agent (A2A) **GA (April 2026)** · Copilot Tuning **early access preview** · scheduled prompts **GA (2026-07-01)**. Microsoft does **not** state a status for autonomous/triggered agents, child (inline) agents, connected Copilot Studio agents, Foundry agents, Fabric data agents, or M365 Agents SDK agents inside Copilot Studio. Treat those as *status not stated* and confirm in the what's-new feed.
  - [Work IQ MCP in Copilot Studio (Preview)](https://learn.microsoft.com/en-us/microsoft-copilot-studio/use-work-iq)
  - [Custom MCP server creation](https://learn.microsoft.com/en-us/microsoft-copilot-studio/mcp-create-new-server)
  - [Connect to existing MCP server](https://learn.microsoft.com/en-us/microsoft-copilot-studio/mcp-add-existing-server-to-agent)
  - [Copilot Studio Kit](https://learn.microsoft.com/en-us/microsoft-copilot-studio/guidance/kit-overview)
  - [VS Code extension](https://learn.microsoft.com/en-us/microsoft-copilot-studio/visual-studio-code-extension-overview)

- **Microsoft Agent 365 (GA, 2026-05-01)**
  - [Overview](https://learn.microsoft.com/en-us/microsoft-agent-365/overview)
  - [Agent 365 SDK (Preview)](https://learn.microsoft.com/en-us/microsoft-agent-365/developer/agent-365-sdk)
  - [Agent 365 CLI (Preview)](https://learn.microsoft.com/en-us/microsoft-agent-365/developer/agent-365-cli)
  - **Licensing note:** per-user; Microsoft 365 E5 is the recommended prerequisite; included in **Microsoft 365 E7**. Components include Agent Registry, Agent Map, Registry Sync, and Shadow AI (Preview).

- **Microsoft Entra Agent ID (generally available)**
  - [Microsoft Entra Agent ID docset](https://learn.microsoft.com/en-us/entra/agent-id/)
  - [What is Microsoft Entra Agent ID?](https://learn.microsoft.com/en-us/entra/agent-id/what-is-microsoft-entra-agent-id): *"a product within Microsoft Entra…available for all Microsoft Entra customers"*
  - [What's new in Microsoft Entra Agent ID](https://learn.microsoft.com/en-us/entra/agent-id/whats-new-agent-id): *"Microsoft Entra Agent ID is now generally available."*
  - [Agent identities](https://learn.microsoft.com/en-us/entra/agent-id/agent-identities)

### SDKs & Frameworks
{: .no_toc }

- **Microsoft Agent 365 SDK**
  - [Microsoft Agent 365 SDK Overview](https://learn.microsoft.com/microsoft-agent-365/developer/agent-365-sdk)
  - [VS Code Toolkit](https://marketplace.visualstudio.com/items?itemName=TeamsDevApp.ms-teams-vscode-extension)
  - [Sample Gallery](https://github.com/microsoft/Agents)

- **Microsoft Agent Framework**
  - [Overview](https://learn.microsoft.com/en-us/agent-framework/overview/agent-framework-overview)
  - [Orchestration Patterns](https://learn.microsoft.com/en-us/agent-framework/user-guide/workflows/orchestrations/overview)

- **Semantic Kernel** ⚠️ *Maintenance Mode*
  - [Documentation](https://learn.microsoft.com/en-us/semantic-kernel/overview/)
  - [GitHub Repository](https://github.com/microsoft/semantic-kernel)
  - [Migrate to Agent Framework](https://learn.microsoft.com/en-us/agent-framework/migration-guide/from-semantic-kernel/index)

  {: .note }
  > Semantic Kernel is in maintenance mode (security patches only). For new projects, use Microsoft Agent Framework which provides enhanced multi-agent orchestration, stateful workflows, and production-grade capabilities.

- **LangChain Integration**
  - [Azure Integration Guide](https://learn.microsoft.com/en-us/azure/developer/python/get-started-app-chat-template)
  - [LangChain Documentation](https://docs.langchain.com/oss/python/integrations/providers/microsoft)

### Data & Grounding
{: .no_toc }

- **Microsoft Graph**
  - [Graph Connectors](https://learn.microsoft.com/en-us/graph/connecting-external-content-connectors-overview)
  - [Graph API Reference](https://learn.microsoft.com/en-us/graph/overview)

- **Azure AI Search** (name unchanged; it is the retrieval engine underneath Foundry IQ)
  - [Agentic retrieval](https://learn.microsoft.com/en-us/azure/search/search-agentic-retrieval-concept): **GA via the `2026-04-01` REST API; portal experiences remain preview-only**
  - [RAG patterns](https://learn.microsoft.com/en-us/azure/search/retrieval-augmented-generation-overview)
  - [Vector search](https://learn.microsoft.com/en-us/azure/search/vector-search-overview)

- **AI-Capable Databases**
  - [Cosmos DB Vector Search](https://learn.microsoft.com/en-us/azure/cosmos-db/nosql/vector-search): flat/kNN, quantized flat, and DiskANN index types; must be enabled as a feature. Microsoft does not state a GA date in the docs
  - [Azure Database for PostgreSQL: pgvector (GA)](https://learn.microsoft.com/en-us/azure/postgresql/flexible-server/how-to-use-pgvector) plus the `azure_ai` extension for in-database embeddings and LLM calls
  - [`VECTOR_SEARCH` (T-SQL)](https://learn.microsoft.com/en-us/sql/t-sql/functions/vector-search-transact-sql): **Preview** on Azure SQL Database, SQL database in Fabric, and SQL Server 2025 (SQL Server 2025 also requires the `PREVIEW_FEATURES` database-scoped configuration)
  - [Azure Managed Redis](https://learn.microsoft.com/en-us/azure/redis/overview): GA, Entra-native

- **Microsoft Fabric**
  - [Fabric data agent](https://learn.microsoft.com/en-us/fabric/data-science/concept-data-agent): **GA** (formerly "AI skill"); requires F2+ or P1+ capacity
  - [Fabric IQ](https://learn.microsoft.com/en-us/fabric/iq/): **Preview** workload: ontologies, graph models, semantic models, and operations agents

- **Microsoft Fabric App Backends**
  - [Rayfin product page](https://www.microsoft.com/en-us/microsoft-fabric/features/rayfin)
  - [Microsoft Build 2026: Building agentic apps with Microsoft Fabric and Microsoft Databases](https://azure.microsoft.com/en-us/blog/microsoft-build-2026-building-agentic-apps-with-microsoft-fabric-and-microsoft-databases)

- **Foundry IQ**
  - [Foundry IQ overview](https://learn.microsoft.com/en-us/azure/foundry/agents/concepts/what-is-foundry-iq)
  - [Connect Foundry IQ to Foundry Agent Service](https://learn.microsoft.com/en-us/azure/foundry/agents/how-to/foundry-iq-connect)
  - [Foundry IQ FAQ](https://learn.microsoft.com/en-us/azure/foundry/agents/concepts/foundry-iq-faq)

- **Work IQ** (APIs **GA 2026-06-16**; **Work IQ MCP is Preview**; don't conflate the two)
  - [Work IQ API overview](https://learn.microsoft.com/en-us/microsoft-365/copilot/extensibility/work-iq/api-overview): four API domains (Chat, Context, Tools, Workspaces), billed in Copilot Credits, **Entra delegated auth only (app-only is not supported)**
  - [Announcing the new Work IQ APIs](https://www.microsoft.com/en-us/microsoft-365/blog/2026/06/02/announcing-the-new-work-iq-apis/)
  - [Work IQ MCP overview (Preview)](https://learn.microsoft.com/en-us/microsoft-agent-365/tooling-servers-overview)
  - [Work IQ in Copilot Studio](https://learn.microsoft.com/en-us/microsoft-copilot-studio/use-work-iq)
  - [Work IQ CLI](https://learn.microsoft.com/en-us/microsoft-365/copilot/extensibility/workiq-overview)

- **Web IQ (Limited Access)**
  - [Web IQ product page](https://www.microsoft.com/en-us/WebIQ)
  - [Announcing Microsoft Web IQ](https://blogs.bing.com/search/June-2026/Announcing-Microsoft-Web-IQ)

- **Microsoft IQ**
  - [Microsoft IQ overview](https://learn.microsoft.com/en-us/microsoft-iq/)

### Local and Edge AI
{: .no_toc }

- **Foundry Local**
  - [Foundry Local overview](https://learn.microsoft.com/en-us/azure/foundry-local/what-is-foundry-local)
  - [Foundry Local on Azure Local](https://learn.microsoft.com/en-us/azure/azure-sovereign-clouds/private/foundry-local/overview)

- **Windows AI**
  - [Windows AI overview](https://learn.microsoft.com/en-us/windows/ai/)
  - [Windows ML / ONNX Runtime](https://learn.microsoft.com/en-us/windows/ai/windows-ml/)
  - [Windows platform security for AI agents](https://blogs.windows.com/windowsdeveloper/2026/06/02/windows-platform-security-for-ai-agents/)

### Developer Plane (GitHub)
{: .no_toc }

- **Agents on GitHub**: "Agent HQ" is the GitHub Universe 2025 *vision brand*; the shipped surfaces are the Agents page and enterprise AI Controls.
  - [Copilot cloud agent](https://docs.github.com/en/copilot/concepts/agents/cloud-agent/about-cloud-agent): renamed from "coding agent." **GA on paid plans including Student; not available on Copilot Free**
  - [Agents page](https://github.com/copilot/agents)
  - [Enterprise AI governance and AI Controls](https://docs.github.com/en/copilot/get-started/enterprise-ai-governance)
  - [Custom agents](https://docs.github.com/en/copilot/concepts/agents/cloud-agent/about-custom-agents) and [`AGENTS.md` agent instructions](https://docs.github.com/en/copilot/concepts/response-customization)
  - [Prepare an enterprise for custom agents](https://docs.github.com/en/copilot/how-tos/administer-copilot/manage-for-enterprise/manage-agents/prepare-for-custom-agents)

- **GitHub Copilot SDK (GA)**
  - [Getting started](https://docs.github.com/en/copilot/how-tos/copilot-sdk/getting-started): Python, TypeScript, Go, .NET, Java, Rust
  - [Microsoft Agent Framework integration](https://docs.github.com/en/copilot/how-tos/copilot-sdk/integrations/microsoft-agent-framework)
  - [Azure managed identity setup](https://docs.github.com/en/copilot/how-tos/copilot-sdk/setup/azure-managed-identity)
  - **Hand-off limit:** Microsoft Foundry lists the Copilot SDK as a hosted-agent framework, but [Foundry hosted agents support **Python and C# only**](https://learn.microsoft.com/en-us/azure/foundry/agents/concepts/hosted-agents). Go, Rust, and Java SDK agents need their own hosting.

- **Billing**
  - [GitHub Copilot billing and AI credits](https://docs.github.com/en/copilot/concepts/billing)
  - [Azure SRE Agent pricing and billing](https://learn.microsoft.com/en-us/azure/sre-agent/pricing-billing): billed in **AAU** (4 AAU per agent-hour, plus variable). The docs carry no preview banner and document production billing; Microsoft does not publish an explicit GA statement.

### Trust and Safety
{: .no_toc }

- **Responsible AI**
  - [Microsoft Responsible AI hub (`aka.ms/RAI`)](https://aka.ms/RAI)
  - [Microsoft AI principles and approach](https://www.microsoft.com/en-us/ai/principles-and-approach): six principles: **Fairness · Reliability & Safety · Privacy & Security · Inclusiveness · Transparency · Accountability**
  - [CAF: responsible AI policies](https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/ai/responsible-ai-policies)
  - **Link hygiene note:** the widely circulated *Responsible AI Standard v2* PDF is **dead (404)** and its content is roughly four years old. There is no public v3. Use the three links above instead.

- **ASSERT**
  - [ASSERT repository](https://github.com/responsibleai/ASSERT)

- **Agent Governance Toolkit (Public Preview, MIT-licensed OSS)**
  - [Microsoft Open Source announcement](https://opensource.microsoft.com/blog/2026/04/02/introducing-the-agent-governance-toolkit-open-source-runtime-security-for-ai-agents/)
  - [Repository](https://github.com/microsoft/agent-governance-toolkit)
  - [Changelog](https://github.com/microsoft/agent-governance-toolkit/blob/main/CHANGELOG.md)
  - **Release note:** v4.1.0 is the latest formal release; main v5 is unreleased. There are zero GA features. ACS is a beta policy layer. This is self-operated application middleware with evolving APIs, not a managed Microsoft service or SLA-backed control plane.

### Specialized Agents
{: .no_toc }

- **Microsoft Discovery**
  - [What is Microsoft Discovery?](https://learn.microsoft.com/en-us/azure/microsoft-discovery/overview-what-is-microsoft-discovery)
  - [Microsoft Discovery and the Microsoft Discovery app](https://learn.microsoft.com/en-us/azure/microsoft-discovery/concept-discovery-and-discovery-app)

- **Azure AI Content Understanding**
  - [Content Understanding documentation](https://learn.microsoft.com/en-us/azure/ai-services/content-understanding/)
  - [What's new in Content Understanding](https://learn.microsoft.com/en-us/azure/ai-services/content-understanding/whats-new)

- **Lifecycle & Migration**
  - [Foundry Workflow retirement and role-based migration](https://learn.microsoft.com/en-us/azure/foundry/agents/concepts/workflow): **Retiring from Preview without a GA path on December 1, 2026**
  - [Migrate from the Foundry (classic) portal](https://learn.microsoft.com/en-us/azure/foundry/how-to/navigate-from-classic)
  - [Migrate to the new agents developer experience](https://learn.microsoft.com/en-us/azure/foundry/agents/how-to/migrate)
  - [Migrate classic agents to new agents](https://learn.microsoft.com/en-us/azure/foundry/agents/how-to/migrate#migrate-classic-agents-to-new-agents)
  - [Migration tool (automated)](https://aka.ms/agent/migrate/tool)
  - [Responses API how-to](https://learn.microsoft.com/en-us/azure/foundry/openai/how-to/responses)
  - [New Microsoft Foundry portal GA overview](https://learn.microsoft.com/en-us/azure/foundry/concepts/general-availability)
  - [Voice Live overview](https://learn.microsoft.com/en-us/azure/ai-services/speech-service/voice-live)

- **Observability**
  - [Monitor AI agents with Application Insights](https://learn.microsoft.com/en-us/azure/azure-monitor/app/agents-view)
  - [Agent evaluation checklist](https://learn.microsoft.com/en-us/microsoft-copilot-studio/guidance/evaluation-checklist)

---

## Communities & Learning

### Microsoft Tech Community
{: .no_toc }

- [Microsoft 365 Copilot Community](https://techcommunity.microsoft.com/t5/microsoft-365-copilot/ct-p/Microsoft365Copilot)
- [Azure AI Services Community](https://techcommunity.microsoft.com/t5/azure-ai-services/ct-p/AzureAIServices)
- [Power Platform Community](https://community.powerplatform.com/)

### Learning Paths
{: .no_toc }

- [Microsoft 365 Copilot Extensibility Learning Path](https://learn.microsoft.com/training/paths/prepare-microsoft-365-copilot-extensibility/)
- [Build Copilot Extensions](https://learn.microsoft.com/training/paths/build-foundation-extend-microsoft-365-copilot/)
- [Azure AI Engineer Certification](https://learn.microsoft.com/en-us/certifications/azure-ai-engineer/)
- [Semantic Kernel Learning Path](https://learn.microsoft.com/training/paths/develop-ai-agents-azure-open-ai-semantic-kernel-sdk/)

### GitHub Repositories
{: .no_toc }

- [M365 Agents SDK Samples](https://github.com/microsoft/Agents)
- [Microsoft Foundry samples](https://github.com/Azure-Samples/get-started-with-ai-agents)
- [Semantic Kernel Samples](https://github.com/microsoft/semantic-kernel/tree/main/python/samples)
- [Microsoft Agent Framework](https://github.com/microsoft/agent-framework)

---

## Stay Current

Microsoft's AI landscape evolves rapidly. To stay informed:

1. **Follow Official Blogs:**
   - [Microsoft 365 Blog](https://www.microsoft.com/en-us/microsoft-365/blog/)
   - [Azure AI Blog](https://azure.microsoft.com/en-us/blog/tag/ai/)
   - [Copilot Studio Blog](https://www.microsoft.com/en-us/power-platform/blog/)

2. **Monitor Product Updates:**
   - [Microsoft 365 Roadmap](https://www.microsoft.com/en-us/microsoft-365/roadmap)
   - [Azure Updates](https://azure.microsoft.com/en-us/updates/?category=ai-machine-learning)

3. **Join Events:**
   - [Microsoft Build](https://build.microsoft.com/)
   - [Microsoft Ignite](https://ignite.microsoft.com/)
   - Local user groups and meetups

4. **Re-Verify This Decision Framework:**
   - Product names and capabilities change frequently
   - Preview features may reach GA or be deprecated
   - New technologies are announced regularly
   - Re-research every 3-6 months for active projects

---

## Validating Information Currency
{: .no_toc }

Microsoft's AI platform evolves rapidly. Here's how to verify information before making production decisions:

### Check Documentation Dates

- **Microsoft Learn pages** display "Last Updated" dates at the top
- Prioritize articles updated within the last 90 days for fast-moving features
- Cross-reference multiple sources when dates are older than 6 months

### Understand Preview vs GA Status

- **Preview** features may have breaking API changes, limited SLAs, and regional availability
- **GA (General Availability)** features have production SLAs and broader support
- Preview features can GA without immediate documentation updates - verify in portal

### Verify Portal vs Documentation Alignment

- Feature availability in [Microsoft Foundry portal (ai.azure.com)](https://ai.azure.com) or [Copilot Studio portal](https://copilotstudio.microsoft.com) may lead documentation
- Documentation may reference features in staged rollout (not yet in your tenant/region)
- Check "What's New" pages for the latest capabilities and rollout timelines

### Monitor Official Sources

- [Microsoft 365 Roadmap](https://www.microsoft.com/en-us/microsoft-365/roadmap) - Feature announcements and timelines
- [Azure Updates](https://azure.microsoft.com/en-us/updates/?category=ai-machine-learning) - AI service updates
- Product-specific "What's New" pages (linked in sections above)
- Microsoft Build and Ignite announcements for major releases

### When Information Conflicts

If you find conflicting information:
1. Prioritize portal/product behavior over documentation
2. Check the documentation "Last Updated" date
3. Verify the feature's Preview/GA status
4. Consult product-specific release notes
5. Test in a non-production environment

{: .important }
> **This framework was last validated: February 5, 2026.** Technology selections should always be verified against current Microsoft Learn documentation, portal capabilities, and your organization's specific requirements before implementation.

---

{: .note-title }
> Framework Maintenance
>
> This decision framework represents a point-in-time snapshot of Microsoft's AI portfolio. For the methodology used to research and maintain this content, see the [Decision Framework](https://github.com/microsoft/Microsoft-AI-Decision-Framework/blob/main/docs/decision-framework.md) documentation.

---

**Next:** [Glossary]({{ '/docs/glossary' | relative_url }}) - Definitions that keep discussions precise across teams

---
