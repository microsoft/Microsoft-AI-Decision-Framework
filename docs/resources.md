---
layout: default
title: Resources & Next Steps
nav_order: 11
description: Key takeaways and resources by role
---

{: .note }
This page provides comprehensive links to official Microsoft documentation, training resources, and community support organized by technology area. For term definitions, see [Glossary]({{ '/docs/glossary' | relative_url }}). For methodology and decision guidance, see [Decision Framework]({{ '/docs/decision-framework' | relative_url }}).

{: .note }
> **Last validated:** January 28, 2026. Microsoft Learn documentation shows "Last Updated" dates on each page - always check before making production decisions. Preview features may reach GA without immediate documentation updates.

---

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## Key Takeaways

# Resources & Next Steps
{: .no_toc }

1. **Start with user experience**: Where users interact drives technology choice
2. **Choose simplest tool that meets requirements**: Developers can use low-code or pro-code; makers limited to low-code; let complexity and time-to-market decide
3. **Match governance approach to your needs**: M365 tenant-integrated (ready to use, fast) vs Azure workload-tailored (precise control for specific requirements)
4. **Plan for scale**: Start simple, architect for growth
5. **Leverage integration**: Technologies work together, not in isolation
6. **Prioritize governance**: Especially for Microsoft 365 Copilot extensions and custom agents; keep agent inventory current via Agent Registry/Agent 365
7. **Adopt staged security blueprints**: Use Microsoft Purview deployment models to secure agent data and interactions
8. **Think beyond agents**: Connectors, plugins, and extensibility matter
9. **Budget appropriately**: Understand per-user vs. consumption models
10. **Iterate and learn**: Start small, measure, expand
11. **Stay current**: Capabilities evolving rapidly, especially in preview
---


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

- [What's new in Foundry Agent Service](https://learn.microsoft.com/en-us/azure/ai-foundry/agents/whats-new)
- [M365 Copilot Extensibility Overview](https://learn.microsoft.com/en-us/microsoft-365-copilot/extensibility/)
- [Microsoft 365 Copilot release notes — November 24, 2025](https://learn.microsoft.com/en-us/copilot/microsoft-365/release-notes#november-24,-2025)
- [Agent Registry in the Microsoft 365 admin center](https://learn.microsoft.com/en-us/microsoft-365/admin/manage/agent-registry?view=o365-worldwide#admin-actions-to-manage-agents) (Updated: 2026-01-23)
- [Secure and govern Microsoft 365 Copilot agents (Purview blueprint)](https://learn.microsoft.com/en-us/purview/deploymentmodels/depmod-sc-agents-deployment)
- [Cloud Adoption Framework for AI](https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/scenarios/ai/)

---

### For Developers
{: .no_toc }

1. Explore the [Microsoft Foundry portal](https://ai.azure.com/?cid=learnDocs) and samples
2. Install M365 Agents SDK Toolkit in VS Code
3. Review Agent Framework documentation
4. Experiment with prompt engineering
5. Understand evaluation frameworks

**Key Resources:**

- [Foundry Agent Service quickstart](https://learn.microsoft.com/en-us/azure/ai-foundry/agents/quickstart)
- [Microsoft Foundry Visual Studio Code extension](https://learn.microsoft.com/en-us/azure/ai-foundry/how-to/develop/vs-code-agents?context=/azure/ai-services/agents/context/context)
- [M365 Agents SDK Toolkit](https://marketplace.visualstudio.com/items?itemName=msft-vscode-m365-agents.vscode-m365-agents)
- [Microsoft Agent Framework documentation](https://learn.microsoft.com/en-us/agent-framework/overview/agent-framework-overview)
- [Semantic Kernel documentation](https://learn.microsoft.com/en-us/semantic-kernel/overview/)
- [Agentic retrieval quickstart for Azure AI Search](https://learn.microsoft.com/en-us/azure/search/search-get-started-agentic-retrieval)
- [Microsoft 365 Copilot Search API overview (Preview)](https://learn.microsoft.com/en-us/microsoft-365-copilot/extensibility/api/ai-services/search/overview) (Updated: 2025-10-20)
- [Copy an agent to Copilot Studio](https://learn.microsoft.com/en-us/microsoft-365-copilot/extensibility/copy-agent-to-copilot-studio) (Updated: 2026-01-26)

---

### For Makers & Business Users
{: .no_toc }

1. Request Copilot Studio access from IT
2. Complete Copilot Studio learning paths
3. Identify high-value automation candidates
4. Start with templates and pre-built components
5. Collaborate with IT on governance

**Key Resources:**

- [What's new in Copilot Studio](https://learn.microsoft.com/en-us/microsoft-copilot-studio/whats-new#october-2025)
- [Copilot Studio documentation](https://learn.microsoft.com/en-us/microsoft-copilot-studio/)
- [Copilot Studio learning paths](https://learn.microsoft.com/en-us/training/browse/?products=microsoft-copilot-studio)
- [Power Platform community](https://powerusers.microsoft.com/)
- [Copy an agent to Copilot Studio](https://learn.microsoft.com/en-us/microsoft-365-copilot/extensibility/copy-agent-to-copilot-studio) (Updated: 2026-01-26)

---

### For IT Admins
{: .no_toc }

1. Review M365 Copilot admin capabilities
2. Understand agent approval workflows
3. Configure Integrated Apps settings
4. Plan connector governance
5. Implement monitoring and usage tracking

**Key Resources:**

- [Security for Microsoft 365 Copilot](https://learn.microsoft.com/en-us/copilot/microsoft-365/microsoft-365-copilot-ai-security)
- [M365 Copilot admin guide](https://learn.microsoft.com/en-us/microsoft-365-copilot/microsoft-365-copilot-setup)
- [Integrated apps management](https://learn.microsoft.com/en-us/microsoft-365/admin/manage/test-and-deploy-microsoft-365-apps)
- [Graph connectors administration](https://learn.microsoft.com/en-us/microsoftsearch/configure-connector)
- [Agent Registry in the Microsoft 365 admin center](https://learn.microsoft.com/en-us/microsoft-365/admin/manage/agent-registry?view=o365-worldwide#admin-actions-to-manage-agents) (Updated: 2026-01-23)
- [Microsoft 365 Copilot release notes — November 24, 2025](https://learn.microsoft.com/en-us/copilot/microsoft-365/release-notes#november-24,-2025)

---

## Official Microsoft Documentation

### Core Platforms
{: .no_toc }

- **Microsoft 365 Copilot**
  - [Extensibility overview](https://learn.microsoft.com/en-us/microsoft-365-copilot/extensibility/)
  - [Adoption resources](https://adoption.microsoft.com/en-us/copilot/)
  - [Security posture](https://learn.microsoft.com/en-us/copilot/microsoft-365/microsoft-365-copilot-ai-security)
  - [Privacy and data safeguards](https://learn.microsoft.com/en-us/microsoft-365-copilot/microsoft-365-copilot-privacy)

- **Microsoft Foundry (Platform)**
  - [Portal (ai.azure.com)](https://ai.azure.com/?cid=learnDocs)
  - [Azure OpenAI Service overview](https://learn.microsoft.com/en-us/azure/ai-services/openai/)
  - [Azure AI Search service](https://learn.microsoft.com/en-us/azure/search/)
  - **Platform note:** Classic Foundry and the new Foundry portal use different APIs and do **not** have feature parity. Validate capability availability in the portal, SDK samples, and Microsoft Learn before committing to a design.
  
- **Microsoft Foundry Agent Service (Optional Managed Runtime)**
  - [What's new in Foundry Agent Service](https://learn.microsoft.com/en-us/azure/ai-foundry/agents/whats-new#october-2025)
  - [Agent Service quickstart](https://learn.microsoft.com/en-us/azure/ai-foundry/agents/quickstart)
  - [Foundry Agent Service Overview](https://learn.microsoft.com/en-us/azure/ai-services/agents/overview)
  - **Service note:** Optional PaaS runtime for hosting agents. Alternatively, deploy self-hosted agents using Agent Framework or custom code in your infrastructure.

- **Copilot Studio**
  - [What's new in Copilot Studio](https://learn.microsoft.com/en-us/microsoft-copilot-studio/whats-new#october-2025)
  - [Declarative agents](https://learn.microsoft.com/en-us/microsoft-365-copilot/extensibility/copilot-studio-declarative-agents)
  - [Custom engine agents overview](https://learn.microsoft.com/en-us/microsoft-365-copilot/extensibility/overview-custom-engine-agent)
  - [Copilot Studio documentation](https://learn.microsoft.com/en-us/microsoft-copilot-studio/)

- **Microsoft Agent 365 (Frontier Preview)**
  - [Overview](https://learn.microsoft.com/en-us/microsoft-agent-365/overview)
  - [Agent 365 SDK](https://learn.microsoft.com/en-us/microsoft-agent-365/developer/agent-365-sdk)
  - [Agent 365 CLI](https://learn.microsoft.com/en-us/microsoft-agent-365/developer/agent-365-cli)

- **Microsoft Entra Agent ID (Preview)**
  - [What is Microsoft Entra Agent ID?](https://learn.microsoft.com/en-us/entra/agent-id/identity-professional/microsoft-entra-agent-identities-for-ai-agents)
  - [Agent identities](https://learn.microsoft.com/en-us/entra/agent-id/identity-platform/agent-identities)

### SDKs & Frameworks
{: .no_toc }

- **M365 Agents SDK**
  - [Overview](https://learn.microsoft.com/en-us/microsoft-365/dev/m365-agents-sdk/overview)
  - [VS Code Toolkit](https://marketplace.visualstudio.com/items?itemName=msft-vscode-m365-agents.vscode-m365-agents)
  - [Sample Gallery](https://github.com/microsoft/m365-agents-sdk)

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
  - [LangChain Documentation](https://python.langchain.com/docs/integrations/platforms/microsoft/)

### Data & Grounding
{: .no_toc }

- **Microsoft Graph**
  - [Graph Connectors](https://learn.microsoft.com/en-us/graph/connecting-external-content-connectors-overview)
  - [Graph API Reference](https://learn.microsoft.com/en-us/graph/overview)

- **Azure AI Search**
  - [Agentic retrieval (preview)](https://learn.microsoft.com/en-us/azure/search/agentic-retrieval-overview)
  - [RAG patterns](https://learn.microsoft.com/en-us/azure/search/retrieval-augmented-generation-overview)
  - [Vector search](https://learn.microsoft.com/en-us/azure/search/vector-search-overview)

- **AI-Capable Databases**
  - [Cosmos DB Vector Search](https://learn.microsoft.com/en-us/azure/cosmos-db/vector-search)
  - [Azure Database for PostgreSQL - Flexible Server](https://learn.microsoft.com/en-us/azure/postgresql/flexible-server/generative-ai-overview)
  - [SQL Server 2025 vector search](https://learn.microsoft.com/en-us/sql/sql-server/ai/vectors?view=sql-server-ver17)

---

## Communities & Learning

### Microsoft Tech Community
{: .no_toc }

- [Microsoft 365 Copilot Community](https://techcommunity.microsoft.com/t5/microsoft-365-copilot/ct-p/Microsoft365Copilot)
- [Azure AI Services Community](https://techcommunity.microsoft.com/t5/azure-ai-services/ct-p/AzureAIServices)
- [Power Platform Community](https://powerusers.microsoft.com/)

### Learning Paths
{: .no_toc }

- [Microsoft 365 Copilot Extensibility Learning Path](https://learn.microsoft.com/en-us/training/paths/m365-copilot-extensibility/)
- [Build Copilot Extensions](https://learn.microsoft.com/en-us/training/modules/build-copilot-extensions/)
- [Azure AI Engineer Certification](https://learn.microsoft.com/en-us/certifications/azure-ai-engineer/)
- [Semantic Kernel Learning Path](https://learn.microsoft.com/en-us/training/paths/develop-ai-agents-azure-openai-semantic-kernel-sdk/)

### GitHub Repositories
{: .no_toc }

- [M365 Agents SDK Samples](https://github.com/microsoft/m365-agents-sdk)
- [Microsoft Foundry samples](https://github.com/Azure-Samples/azure-ai-foundry)
- [Semantic Kernel Samples](https://github.com/microsoft/semantic-kernel/tree/main/python/samples)
- [Microsoft Agent Framework](https://github.com/microsoft/agent-framework)

---

## Stay Current

Microsoft's AI landscape evolves rapidly. To stay informed:

1. **Follow Official Blogs:**
   - [Microsoft 365 Blog](https://www.microsoft.com/en-us/microsoft-365/blog/)
   - [Azure AI Blog](https://azure.microsoft.com/en-us/blog/topics/ai-machine-learning/)
   - [Copilot Studio Blog](https://powerapps.microsoft.com/en-us/blog/category/copilot-studio/)

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
> **This framework was last validated: January 28, 2026.** Technology selections should always be verified against current Microsoft Learn documentation, portal capabilities, and your organization's specific requirements before implementation.

---

{: .note-title }
> Framework Maintenance
>
> This decision framework represents a point-in-time snapshot of Microsoft's AI portfolio. For the methodology used to research and maintain this content, see the [Decision Framework](https://github.com/microsoft/Microsoft-AI-Decision-Framework/blob/main/docs/decision-framework.md) documentation.

---

**Next:** [Glossary]({{ '/docs/glossary' | relative_url }}) - Definitions that keep discussions precise across teams

---
