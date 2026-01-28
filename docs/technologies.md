---
layout: default
title: Microsoft AI Technologies
nav_order: 8
description: "Complete reference for Microsoft's AI technology portfolio"
---

<!-- markdownlint-disable-next-line MD025 -->
# Microsoft AI Technologies Reference

{: .no_toc }

This section provides a comprehensive overview of Microsoft's AI technology stack, from end-user productivity tools to infrastructure services.

Use this page as a reference after you’ve narrowed the decision: it’s optimized for confirming capabilities, boundaries, and status (GA/Preview) rather than teaching the selection process.

> **Problem-first reminder:** Start with the business outcome and scenario, then pick the simplest technology that satisfies it. Use [Scenarios]({{ '/docs/scenarios' | relative_url }}) to anchor real problems and the [Decision Framework]({{ '/docs/decision-framework' | relative_url }}) to gate technology choices.


## Table of contents

{: .no_toc .text-delta }

1. TOC
{:toc}

---

### Core AI Platforms

{: .no_toc }

## Microsoft 365 Copilot

{: .tech-heading }
**Description:** Integrated AI assistant across M365 apps (Word, Excel, Teams, Outlook, PowerPoint, OneNote) with tenant context and Graph security. Supports extensibility via declarative agents (low-code) and custom engine agents (pro-code) for tailored productivity experiences.  
**Official Docs:** [Microsoft 365 Copilot Overview](https://learn.microsoft.com/en-us/microsoft-365-copilot/)  
**Status:** GA

**Key Features:**

- **Tenant-aware AI:** Works across Word, Excel, Teams, Outlook, PowerPoint, and OneNote while inheriting Microsoft Graph security and compliance controls. (Updated declarative agents guidance - Retrieved: 2025-12-01)
- **Extensibility options:** Build declarative agents with instructions, knowledge, and actions or bring custom engine agents for full orchestration control. (Agents for Microsoft 365 Copilot - Retrieved: 2026-01-07)
- **Unified discovery:** Users can discover and install agents from the in-app store inside Word and PowerPoint, with Excel support in rollout. (Microsoft 365 Copilot release notes - Retrieved: 2025-01-27)
- **Admin governance:** Admins can pre-approve trusted agents and audit usage to streamline tenant-wide deployments. (Microsoft 365 Copilot release notes - Retrieved: 2025-01-27)
- **Grounded knowledge:** Agents can draw from Teams meetings, SharePoint, OneDrive, email, Dataverse, and approved connectors with tenant-scoped security. (Extend Microsoft 365 Copilot with agents - Retrieved: 2025-12-15)
- **Fine-tuning (Preview):** Copilot Tuning lets makers fine-tune declarative agent models using tenant data under admin control. (Microsoft 365 Copilot release notes - Retrieved: 2025-01-27)

**Recent Updates (2025):**

- **Oct 28, 2025:** Static tabs for custom engine agents in Teams meetings and @mention routing for Copilot Chat to target specific agents. (Microsoft 365 Copilot release notes - Retrieved: 2025-01-27)
- **Aug 19, 2025:** Declarative agents can be invoked directly in Excel and include enhanced governance to review file-based knowledge. (Microsoft 365 Copilot release notes - Retrieved: 2025-01-27)
- **Aug 5, 2025:** Tenant data fine-tuning, admin pre-approval for trusted declarative agents, and improved SharePoint file Q&A accuracy. (Microsoft 365 Copilot release notes - Retrieved: 2025-01-27)
- **Jul 8, 2025:** Unified store surfaces Copilot agents inside Word and PowerPoint and adds Dataverse as an in-product knowledge source. (Microsoft 365 Copilot release notes - Retrieved: 2025-01-27)

**Network Isolation:**

- **VNet Support:** No custom VNet support
- Fully managed SaaS (no VNet integration available)
- Requires gateway architecture for private on-premises data access
- Inherits M365 tenant network security
- **Ideal for:** Organizations accepting Microsoft-managed SaaS networking model
- Guidance: Microsoft recommends leveraging M365 admin controls and security policies to govern agent data access. (Data, privacy, and security considerations - Retrieved: 2025-09-05)

**When to use:** Broad productivity gains, existing M365 licenses, tenant-aware context, no deep AI expertise required, extend via low-code (Copilot Studio) or pro-code (M365 Agents SDK)

**Sources:**

- [Microsoft 365 Copilot release notes - Oct 28, 2025](https://learn.microsoft.com/en-us/copilot/microsoft-365/release-notes#october-28,-2025) (Retrieved: 2025-01-27)
- [Microsoft 365 Copilot release notes - Aug 19, 2025](https://learn.microsoft.com/en-us/copilot/microsoft-365/release-notes#august-19,-2025) (Retrieved: 2025-01-27)
- [Microsoft 365 Copilot release notes - Aug 5, 2025](https://learn.microsoft.com/en-us/copilot/microsoft-365/release-notes#august-5,-2025) (Retrieved: 2025-01-27)
- [Microsoft 365 Copilot release notes - Jul 8, 2025](https://learn.microsoft.com/en-us/copilot/microsoft-365/release-notes#july-8,-2025) (Retrieved: 2025-01-27)
- [Agents for Microsoft 365 Copilot](https://learn.microsoft.com/en-us/microsoft-365-copilot/extensibility/agents-overview) (Retrieved: 2026-01-07)
- [Extend Microsoft 365 Copilot with agents](https://learn.microsoft.com/en-us/microsoft-copilot-studio/microsoft-copilot-extend-copilot-extensions) (Retrieved: 2025-12-15)
- [Data, privacy, and security considerations for extending Microsoft 365 Copilot](https://learn.microsoft.com/en-us/microsoft-365-copilot/extensibility/data-privacy-security) (Retrieved: 2025-09-05)

---

## Word, Excel, and PowerPoint Agents (Frontier) {: .tech-heading }

**Description:** Frontier-only preview creation agents inside Microsoft 365 Copilot Chat that draft Word, Excel, and PowerPoint files using Anthropic reasoning models after explicit admin opt-in.  
**Official Docs:** [Word, Excel, and PowerPoint Agents (Frontier)](https://learn.microsoft.com/en-us/copilot/microsoft-365/wordexcelppt-agents)  
**Status:** Frontier Preview (experimental; requires M365 Copilot license + Frontier enrollment)

**Key Features:**

- **Frontier-gated access:** Frontier is Microsoft’s early access program for experimental/preview features in Copilot apps and agents. Admins enable it in Microsoft 365 admin center (`Copilot` > `Settings` > `User access` > `Copilot Frontier`) and must connect the Anthropic provider before agents appear. (Manage Microsoft 365 Copilot scenarios - Retrieved: 2025-11-18; Get started with Word, Excel, and PowerPoint Agents - Retrieved: 2025-12-15)
- **Document creation agents:** Generate drafts for Word, Excel, or PowerPoint from prompts in the Copilot app, grounded by Microsoft Graph data the user is authorized to access. (Get started with Word, Excel, and PowerPoint Agents - Retrieved: 2025-12-15)
- **Data boundary and consent:** Anthropic model calls run outside Microsoft-managed environments; Microsoft Product Terms/DPA do not apply. Use is governed by Anthropic commercial terms, and admins can disable the provider at any time. (Data Privacy and Security - Retrieved: 2025-12-15)
- **Storage and security:** Generated files save to OneDrive; only user-permitted Graph context is shared, with sensitivity labels and compliance policies respected. (Data Privacy and Security - Retrieved: 2025-12-15)
- **Limitations:** English-only preview, side-by-side pane is read-only, and users open the full app to edit. (Responsible AI FAQ - Retrieved: 2025-11-18)

**When to use:** Early testing of AI-generated Office documents when admins accept third-party processing under Frontier terms; avoid for regulated production workloads until Microsoft-hosted GA availability.

**Sources:**

- [Get started with Word, Excel, and PowerPoint Agents (Frontier)](https://learn.microsoft.com/en-us/copilot/microsoft-365/wordexcelppt-agents) (Retrieved: 2025-12-15)
- [Frequently asked questions about Word, Excel, and PowerPoint Agents: Responsible AI FAQ](https://learn.microsoft.com/en-us/copilot/microsoft-365/faq-wordexcelppt-agents) (Retrieved: 2025-11-18)
- [Manage Microsoft 365 Copilot scenarios in the Microsoft 365 admin center](https://learn.microsoft.com/en-us/copilot/microsoft-365/microsoft-365-copilot-page#user-access) (Retrieved: 2025-11-18)
- [Overview of Microsoft Agent 365](https://learn.microsoft.com/en-us/microsoft-agent-365/overview#enable-agent-365) (Retrieved: 2025-12-15)

---

## Copilot Studio

{: .tech-heading }
**Description:** Low-code and pro-code authoring environment for building declarative and custom engine agents with governance, analytics, and multi-channel delivery. Available as a standalone web app and inside Microsoft Teams.  
**Official Docs:** [Copilot Studio Documentation](https://learn.microsoft.com/en-us/microsoft-copilot-studio/)  
**Implementation Guide:** [aka.ms/CopilotStudioImplementationGuide](https://aka.ms/CopilotStudioImplementationGuide)

**Key Features:**

- **Unified authoring:** Makers use the refreshed authoring canvas, trigger management, and analytics across lite and full experiences. (Upgrade to Copilot Studio unified authoring - Retrieved: 2025-05-21)
- **Model choice:** GPT-4.1 is now the default model for generative orchestration with GPT-5 available in preview, while GPT-4o retires in managed tenants. (What's new in Copilot Studio - Updated: 2025-01-12)
- **Real-time data connectors:** Makers can ground agents with structured data from Microsoft and selected third-party systems for live responses. (Microsoft 365 Copilot release notes - Retrieved: 2025-01-27)
- **Expanded knowledge capacity:** Agents can use up to 1000 SharePoint or OneDrive files with grouped instructions for precise responses. (Use up to 1000 files per agent - GA: 2025-10-06)
- **MCP tool integration:** Agents can call remote Model Context Protocol servers to reach external tools securely. (What's new in Copilot Studio - Updated: 2025-01-12)
- **Agent2Agent (A2A) Protocol:** Publish agents as skills that can be discovered and invoked by other agents in a decentralized mesh. (Preview: 2025-05-21)
- **Channel reach:** Publish agents to Microsoft 365 Copilot, Teams, web, and messaging channels including WhatsApp via Azure Communications Service. (Publish agents to WhatsApp - GA: 2025-09-08)
- **Orchestration modes:** Generative orchestration (default) handles multi-intent planning; makers can switch to Classic NLU/Classic NLU+ for deterministic topic routing or connect Azure AI Language (CLU) for advanced entity extraction when licensing allows. (Natural language understanding overview - Updated: 2025-07-07; Create and edit topics - Updated: 2025-11-11)

**Recent Updates (2025):**

- **Oct 2025:** Default model upgrade to GPT-4.1, GPT-5 preview access, MCP server tool, analytics enhancements, and flow express mode to reduce timeouts. (What's new in Copilot Studio - Updated: 2025-01-12)
- **Oct 2025:** Knowledge management improvements, including grouped instructions and 1000-file limits for SharePoint/OneDrive uploads. (Group files with instructions - GA: 2025-10-01; Use up to 1000 files per agent - GA: 2025-10-06)
- **Sep 2025:** General availability of WhatsApp channel publishing for customer-facing agents. (Publish agents to WhatsApp - GA: 2025-09-08)
- **Jun 2025:** Weekly active user insights for Copilot Studio agent reports in Viva Insights dashboards. (Microsoft 365 Copilot release notes - Retrieved: 2025-01-27)

**Network Isolation:**

- **VNet Support:** Supported via Microsoft-managed VNet data gateway; runtime remains in Power Platform. (VNet data gateway overview - Retrieved: 2026-01-06)
- Makers can deploy managed environments with private endpoints to Azure resources through the Power Platform VNet data gateway. (VNet data gateway overview - Retrieved: 2026-01-06)
- On-premises data gateway enables secure connectivity to local systems. (VNet data gateway overview - Retrieved: 2026-01-06)
- **Ideal for:** Managed PaaS scenarios requiring low-code authoring with governed access to Azure or on-premises data.

**When Copilot Studio is the Right Tool:**

- Rapidly extend Microsoft 365 Copilot with declarative agents tailored to teams or departments.
- Build custom engine agents that orchestrate complex workflows while remaining inside Microsoft-controlled infrastructure.
- Leverage Power Platform connectors, triggers, and ALM tooling without deep ML engineering.

**Sources:**

- [What's new in Copilot Studio](https://learn.microsoft.com/en-us/microsoft-copilot-studio/whats-new#notable-changes) (Updated: 2025-01-12)
- [Microsoft 365 Copilot release notes - Aug 5, 2025](https://learn.microsoft.com/en-us/copilot/microsoft-365/release-notes#august-5,-2025) (Retrieved: 2025-01-27)
- [Use up to 1000 files per agent for SharePoint and OneDrive uploads](https://learn.microsoft.com/en-us/power-platform/release-plan/2025wave1/microsoft-copilot-studio/use-up-1000-files-per-agent-sharepoint-onedrive-uploads) (GA: 2025-10-06)
- [Group files with instructions to guide agent answers](https://learn.microsoft.com/en-us/power-platform/release-plan/2025wave2/microsoft-copilot-studio/group-files-instructions-guide-agent-answers) (GA: 2025-10-01)
- [Publish agents to WhatsApp](https://learn.microsoft.com/en-us/power-platform/release-plan/2025wave1/microsoft-copilot-studio/deploy-copilots-whatsapp-azure-communications-service-chat-sms-channels) (GA: 2025-09-08)
- [Upgrade to Copilot Studio unified authoring](https://learn.microsoft.com/en-us/microsoft-copilot-studio/unified-authoring-conversion) (Retrieved: 2025-05-21)
- [VNet data gateway overview](https://learn.microsoft.com/en-us/power-platform/admin/vnet-support-overview) (Retrieved: 2026-01-06)
- [Natural language understanding (NLU) overview](https://learn.microsoft.com/en-us/microsoft-copilot-studio/nlu-overview) (Updated: 2025-07-07)
- [Create and edit topics in Copilot Studio](https://learn.microsoft.com/en-us/microsoft-copilot-studio/authoring-create-edit-topics) (Updated: 2025-11-11)

---

## Power Apps Plan Designer

{: .tech-heading }
**Description:** AI-assisted solution architect that generates Dataverse tables, security roles, and app structures from natural language descriptions. Accelerates the "Feasibility" phase of development.  
**Official Docs:** [Power Apps AI Overview](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/ai-overview)  
**Status:** GA

**Key Features:**

- **Schema Generation:** Automatically creates 3NF normalized Dataverse tables and relationships based on business descriptions.
- **Role Generation:** Suggests and configures security roles appropriate for the solution.
- **App Scaffolding:** Generates the initial canvas or model-driven app layout.
- **Agent Feed:** Integrated feed for monitoring agent activities and human-in-the-loop requests (Early Access).

**When to use:** Rapid prototyping, overcoming "blank canvas" paralysis, or enabling makers to build complex data models without deep architectural skills.

---

## Microsoft Foundry (Azure)

{: .tech-heading }

**Description:** The cloud-based implementation of the Microsoft Foundry ecosystem. A code-first environment for building, evaluating, and deploying AI solutions with Azure OpenAI, open-source, and custom models. Integrates with workforce tools such as Foundry Agent Service, prompt flow, and safety guardrails.  
**Official Docs:** [Microsoft Foundry (Azure) Documentation](https://learn.microsoft.com/en-us/azure/ai-foundry/)  
**Status:** GA

**Key Features:**

- **Broad model catalog:** Access GPT-5, GPT-5-mini, GPT-5-nano, GPT-4.1, GPT-image-1, Sora video generation, and GPT RealTime audio models alongside open-source offerings. (What's new in Azure OpenAI - Updated: 2025-09-10)
- **Provisioned throughput management:** Reserve PTUs and enable spillover to automatically route excess traffic to standard deployments. (What's new in Azure OpenAI - Updated: 2025-09-10)
- **Safety and routing:** Use model router, prompt shields with spotlighting, and structured outputs to protect prompts and dynamically select optimal models; GA router version `2025-11-18` adds routing profiles, custom subsets, Anthropic models, and `reasoning_effort` passthrough (billing effective Nov 2025). (Model router GA - Updated: 2025-11-06)
- **Workflow and evaluation tooling:** Build end-to-end pipelines with prompt flow, evaluations, and integrated monitoring. (Microsoft Foundry documentation - Retrieved: 2026-01-14)
- **Agent readiness:** Pair with Foundry Agent Service for managed agent orchestration using the same model deployments. (Microsoft Foundry documentation - Retrieved: 2026-01-14)

**Recent Updates (2025):**

- **Sep 2025:** GPT-5-codex reasoning model released for Codex CLI and VS Code integration. (What's new in Azure OpenAI - Updated: 2025-09-10)
- **Aug 2025:** GPT-5 series, Sora image-to-video generation, GPT RealTime GA, and provisioned spillover reached GA. (What's new in Azure OpenAI - Updated: 2025-09-10)
- **May 2025:** Sora video generation preview, prompt shield spotlighting, and model router preview introduced. (What's new in Azure OpenAI - Updated: 2025-09-10)

**Context Windows:**

- **GPT-5 series:** Up to 400k tokens (272k input, 128k output) for reasoning workloads. (Foundry models sold directly by Azure - Retrieved: 2025-11-13)
- **GPT-5-chat:** 128k token context for conversational scenarios. (Foundry models sold directly by Azure - Retrieved: 2025-11-13)
- **GPT-4.1:** 1M token context for large document processing. (Foundry models sold directly by Azure - Retrieved: 2025-11-13)

**Network Isolation:**

- **VNet integration:** Configure private endpoints for hubs and projects to keep traffic within customer VNets. (Configure a private link for Microsoft Foundry (Azure) - Retrieved: 2026-01-06)
- **Managed virtual networks:** Secure hubs with inbound and outbound network isolation, NSGs, and customer-managed keys. (Create a secure Microsoft Foundry (Azure) hub - Retrieved: 2025-12-23)
- **Ideal for:** Zero-trust deployments, regulated workloads, and sovereign data strategies.

**When Microsoft Foundry (Azure) is the Right Tool:**

- Latency-sensitive or high-throughput applications needing direct control over model deployments and caching.
- Custom AI pipelines, evaluations, or RAG systems that exceed low-code platform capabilities.
- Teams with Azure engineering expertise that must combine private networking, governance, and model flexibility.

**Sources:**

- [What's new in Azure OpenAI in Microsoft Foundry Models](https://learn.microsoft.com/en-us/azure/ai-foundry/openai/whats-new#august-2025) (Updated: 2025-09-10)
- [What's new in Azure OpenAI in Microsoft Foundry Models](https://learn.microsoft.com/en-us/azure/ai-foundry/openai/whats-new#may-2025) (Updated: 2025-09-10)
- [What's new in Azure OpenAI in Microsoft Foundry Models](https://learn.microsoft.com/en-us/azure/ai-foundry/openai/whats-new#september-2025) (Updated: 2025-09-10)
- [What's new in model router in Microsoft Foundry Models?](https://learn.microsoft.com/en-us/azure/ai-foundry/foundry-models/whats-new-model-router) (Updated: 2025-11-06)
- [Foundry models sold directly by Azure](https://learn.microsoft.com/en-us/azure/ai-foundry/foundry-models/concepts/models-sold-directly-by-azure#gpt-5) (Retrieved: 2025-11-13)
- [Microsoft Foundry documentation](https://learn.microsoft.com/en-us/azure/ai-foundry/) (Retrieved: 2026-01-14)
- [How to configure a private link for Microsoft Foundry (Azure)](https://learn.microsoft.com/en-us/azure/ai-foundry/how-to/configure-private-link) (Retrieved: 2026-01-06)
- [Create a secure Microsoft Foundry (Azure) hub and project with a managed virtual network](https://learn.microsoft.com/en-us/azure/ai-foundry/how-to/create-secure-ai-hub#create-a-hub) (Retrieved: 2025-12-23)

---

## Foundry Agent Service {: .tech-heading }

**Description:** Managed PaaS for agent orchestration, skills management, and runtime infrastructure within **Microsoft Foundry (Azure)**. Supports connected agents (multi-agent systems), 15+ built-in tools, full RBAC + VNet + BYO storage. GA with continuous feature additions. (Formerly **Azure AI Agent Service**).  
**Official Docs:** [Foundry Agent Service](https://learn.microsoft.com/en-us/azure/ai-services/agents/)  
**Status:** GA (May 2025)

**Key Features:**

- **Managed runtime:** Microsoft hosts compute, memory, and thread state with built-in tracing and Azure Monitor metrics. (Foundry Agent Service GA - Updated: 2026-01-21)
- **Connected agents (GA):** Orchestrate multi-agent systems that share context without external orchestrators; supports Fabric data agents. (Foundry Agent Service GA - Updated: 2026-01-21)
- **BYO storage:** Bring Azure Cosmos DB for thread storage plus Azure AI Search and Azure Blob Storage for knowledge with private endpoints. (Foundry Agent Service GA - Updated: 2026-01-21)
- **Thread storage in Cosmos DB (GA):** Standard setup provisions enterprise_memory containers (thread-message-store, system-thread-message-store, agent-entity-store) in your Cosmos DB for NoSQL account with BYO throughput. ([Azure Cosmos DB integration with Azure AI Agents Service](https://learn.microsoft.com/en-us/azure/cosmos-db/gen-ai/azure-agent-service#overview), retrieved 2025-04-30)
- **Trace agents SDK:** Debug runs with thread-level insights, including inputs, tool calls, and outputs. (Foundry Agent Service GA - Updated: 2026-01-21)
- **Event triggers:** Invoke agents from Azure Logic Apps or other workflows to respond to business events. (Foundry Agent Service GA - Updated: 2026-01-21)
- **VS Code integration:** Microsoft Foundry VS Code extension deploys and configures agent tools, including MCP integrations. (Foundry Agent Service GA - Updated: 2026-01-21)
- **MCP tool & Deep Research:** Connect to remote Model Context Protocol servers and run multi-step o3-deep-research investigations grounded by Bing Search. (What's new in Foundry Agent Service - Updated: 2025-10-08)

**Built-in Tools (Knowledge):**

- **Azure AI Search:** Ground agents with indexed data, chat with your data
- **File Search:** RAG with proprietary documents (Azure Blob Storage, local files). Uses vector stores (up to 10,000 files), automatic chunking/embedding (text-embedding-3-large), hybrid search (keyword + semantic), reranking
- **Grounding with Bing Search:** Access real-time web information
- **Grounding with Bing Custom Search (GA June 2025):** Enhanced responses with selected web domains
- **Microsoft Fabric (GA March 2025):** Integrate with Fabric Data Agents for data analysis capabilities
- **SharePoint (Preview):** Chat with private SharePoint documents, OBO authentication for security-trimmed access, leverages M365 Copilot API built-in indexing
- **Licensed Data:** Proprietary data via licensed API keys (TripAdvisor, Morningstar, LexisNexis, LEGALFLY, etc.)

**Built-in Tools (Action):**

- **Function Calling:** Custom stateless functions
- **Azure Functions:** Intelligent, event-driven serverless code execution
- **Azure Logic Apps:** 1,400+ connector-based workflows
- **Code Interpreter:** Write and run Python code in sandboxed environment (data handling, visuals)
- **OpenAPI 3.0 Specified Tool:** Connect to external APIs via OpenAPI spec
- **Model Context Protocol (GA June 2025):** Access tools hosted on remote MCP endpoints for interoperable tool sharing. (What's new in Foundry Agent Service - Updated: 2025-10-08)
- **Deep Research (GA June 2025):** Multi-step web-based research with o3-deep-research model + Bing Search
- **Browser Automation (Preview):** Real-world browser tasks via natural language with Playwright Workspaces
- **Computer Use (Preview):** UI interaction via specialized computer-use-preview model, interprets raw pixel screenshots, virtual keyboard/mouse control
- **Image Generation (Preview):** Generate and edit images as part of conversations and multi-step workflows

**Agent Setup Options:**

- **Basic Setup:** Microsoft-managed search and storage (files stored in MS-managed storage, vector stores in MS-managed search)
- **Standard Setup:** BYO Azure AI Search + Blob Storage + Cosmos DB (files in your Blob, vector stores in your AI Search, thread storage in your Cosmos DB), private networking, no public egress by default

**Recent Updates (2025):**

- **General Availability:** Service went GA in May 2025
- **Connected agents:** Multi-agent orchestration without external orchestrators (May 2025)
- **MCP tool:** Connect to remote Model Context Protocol servers (June 2025)
- **Deep Research:** o3-deep-research + Bing Search for multi-step analysis (June 2025)
- **Bing Custom Search:** Specify websites for grounding (June 2025)
- **Azure Monitor integration:** Metrics for file indexing, run tracking (April 2025)
- **BYO Cosmos DB:** Thread storage in customer-managed Cosmos DB for NoSQL (April 2025)
- **VS Code extension:** Develop, test, and publish agents with tool configuration inside Visual Studio Code. (Foundry Agent Service GA - Updated: 2026-01-21)

**Network Isolation:**

- **VNet Support:** Full private networking support (same as Microsoft Foundry (Azure))
- VNet integration with container injection
- Private endpoints for all resources
- Network Security Groups (NSGs) for traffic isolation
- Standard Setup: No public egress by default
- **Ideal for:** Managed PaaS with private networking requirements

> **Terminology clarification:** This guide uses three distinct terms: **(1) Microsoft Foundry** - the platform/portal (ai.azure.com) providing model catalog, prompt flow, and evaluations. Microsoft Foundry offers two portal experiences (classic and new) that do **not** have feature parity; the underlying APIs and feature rollouts differ. Validate capabilities in the portal, SDK samples, and Microsoft Learn before committing. **(2) Microsoft Foundry Agent Service** - an optional managed PaaS runtime WITHIN Foundry for hosting agents with built-in tools and orchestration. **(3) Hosted agents** - agents deployed to the Foundry Agent Service runtime (vs self-hosted agents running in your own infrastructure using Agent Framework, LangChain, or custom code). Additionally, **(4) Microsoft Agent Framework** - the open-source orchestration SDK for .NET/Python. You can use Microsoft Foundry WITHOUT Agent Service by deploying custom code.

**When to use:** Managed agent orchestration at the PaaS runtime, scalable agent infrastructure, multi-agent systems, comprehensive built-in tool ecosystem, prefer Azure-managed RAG infrastructure, need enterprise security + observability

**Sources:**

- [What's new in Foundry Agent Service](https://learn.microsoft.com/en-us/azure/ai-foundry/agents/whats-new#june-2025) (Updated: 2025-10-08)
- [What's new in Foundry Agent Service](https://learn.microsoft.com/en-us/azure/ai-foundry/agents/whats-new#may-2025) (Updated: 2025-10-08)
- [Foundry Agent Service Overview](https://learn.microsoft.com/en-us/azure/ai-services/agents/overview)
- [Agent Tools Overview](https://learn.microsoft.com/en-us/azure/ai-foundry/agents/how-to/tools/overview)
- [Transparency Note for Azure Agent Service](https://learn.microsoft.com/en-us/azure/ai-foundry/responsible-ai/agents/transparency-note)
- [Virtual Networks for Foundry](https://learn.microsoft.com/en-us/azure/ai-foundry/agents/how-to/virtual-networks)
- [Azure Cosmos DB integration with Azure AI Agents Service](https://learn.microsoft.com/en-us/azure/cosmos-db/gen-ai/azure-agent-service#overview)

---

## Agent 365 {: .tech-heading }

**Description:** Frontier preview governance layer that assigns each agent a Microsoft Entra Agent ID for identity, lifecycle, and access management, with centralized observability in the Microsoft 365 admin center.
**Official Docs:** [Agent 365](https://learn.microsoft.com/en-us/microsoft-agent-365/overview)  
**Status:** Frontier Preview

**How it fits together:**

- **Microsoft Entra Agent ID (Preview):** Provides agent identities, blueprints, optional agent users, and policy enforcement (conditional access, identity governance, identity protection, network controls). (Microsoft Entra Agent ID - Updated: 2025-11-10; Agent identities - Retrieved: 2025-11-04)
- **Agent registry + admin center observability:** Agent 365 surfaces agents in the Microsoft 365 admin center for inventory and management. (Overview of Microsoft Agent 365 - Retrieved: 2025-12-15)
- **Agent 365 SDK (Preview):** Extends agents built on any SDK/platform with Entra-backed identity, notifications, OpenTelemetry observability, and governed MCP servers under blueprint policies. (Agent 365 SDK - Retrieved: 2026-01-09)
- **Agent 365 CLI (Preview):** Cross-platform CLI to deploy and manage Agent 365 applications on Azure. Requires custom client app registration in Entra ID and uses `--prerelease` installs while the CLI evolves. (Agent 365 CLI - Retrieved: 2026-01-13)

**Frontier requirements & caution:** Frontier is the early access program for experimental/preview Copilot features. Tenants must enroll and enable **Copilot Frontier** in the Microsoft 365 admin center. Capabilities (especially CLI workflows) are still evolving, so plan for change and avoid production commitments until GA. (Overview of Microsoft Agent 365 - Retrieved: 2025-12-15; Manage Microsoft 365 Copilot scenarios - Retrieved: 2025-11-18)

**When to use:** Establish identity, registry, and governance for cross-platform agents while piloting early Agent 365 capabilities; pair with Copilot Studio or Microsoft Foundry runtimes for execution.

**Sources:**

- [Overview of Microsoft Agent 365](https://learn.microsoft.com/en-us/microsoft-agent-365/overview) (Retrieved: 2025-12-15)
- [Microsoft Agent 365 SDK](https://learn.microsoft.com/en-us/microsoft-agent-365/developer/agent-365-sdk) (Retrieved: 2026-01-09)
- [Agent 365 CLI](https://learn.microsoft.com/en-us/microsoft-agent-365/developer/agent-365-cli) (Retrieved: 2026-01-13)
- [What is Microsoft Entra Agent ID?](https://learn.microsoft.com/en-us/entra/agent-id/identity-professional/microsoft-entra-agent-identities-for-ai-agents) (Updated: 2025-11-10)
- [Agent identities in Microsoft Entra Agent ID](https://learn.microsoft.com/en-us/entra/agent-id/identity-platform/agent-identities) (Retrieved: 2025-11-04)
- [Manage Microsoft 365 Copilot scenarios in the Microsoft 365 admin center](https://learn.microsoft.com/en-us/copilot/microsoft-365/microsoft-365-copilot-page#user-access) (Retrieved: 2025-11-18)

---

## Foundry Control Plane {: .tech-heading }

**Description:** Centralized registry and security posture hub for agents built in Microsoft Foundry. Integrates Azure Policy, Microsoft Defender, and Purview for unified governance.
**Official Docs:** [Foundry Control Plane](https://learn.microsoft.com/en-us/azure/ai-foundry/control-plane/overview)  
**Status:** GA (Nov 2025)

**Key Features:**

- **Agent registry:** Inventory agents with RBAC, tenant isolation, and managed identities for each agent app. (Overview - Updated: 2025-11-05)
- **Policy & guardrails:** Apply Azure Policy, Defender for Cloud, and Purview data security policies to agent projects from one pane. (AI security what's new - Updated: 2025-05-19)
- **Observability & remediation:** Security and policy tabs with bulk remediation for misconfigurations, plus hooks for Azure Monitor. (Overview - Updated: 2025-11-05)

**When to use:** Govern Foundry-built agents at scale-register, secure, and monitor agents alongside Azure resource policies.

**Sources:**

- [Foundry Control Plane overview](https://learn.microsoft.com/en-us/azure/ai-foundry/control-plane/overview) (Updated: 2025-11-05)
- [AI security: what's new (Nov 2025)](https://learn.microsoft.com/en-us/security/security-for-ai/whats-new#november-2025) (Updated: 2025-05-19)

---

## Azure AI Search {: .tech-heading }

**Description:** Azure-native search and retrieval platform with vector, hybrid, and agentic retrieval (knowledge bases) for RAG and grounding.
**Official Docs:** [Azure AI Search Documentation](https://learn.microsoft.com/en-us/azure/search/)  
**Status:** GA (agentic retrieval features in preview API version `2025-11-01-preview`)

**Key Features:**

- **Agentic retrieval / knowledge bases (Preview):** Knowledge sources with `retrievalInstructions`, partial responses, and `reasoning_effort` to reduce latency; Foundry IQ lets Agent Service agents call knowledge bases. (What's new - Updated: 2025-12-18)
- **Security & governance:** SharePoint indexer ACL flow-through (Preview), sensitivity label enforcement, and confidential computing (GA, +~10% surcharge). (What's new - Updated: 2025-12-18; Sep 2025)
- **Knowledge sources:** Indexed/remote SharePoint, indexed OneLake, and web sources with content extraction powered by Azure AI Content Understanding. (What's new - Updated: 2025-12-18)
- **Ranking & analytics:** Semantic ranker and agentic retrieval available on free tier (limited quotas); scoring function aggregation and facet aggregations for analytics. (What's new - Updated: 2025-12-18)
- **Endpoint flexibility:** Skills/vectorizers accept `services.ai.azure.com` and azure-api.net endpoints for Foundry-hosted models. (What's new - Updated: 2025-12-18)

**When to use:** Enterprise RAG/agentic retrieval with ACL-aware indexing, label-aware enforcement, and integration into Foundry/Agent Service.

**Sources:**

- [What's new in Azure AI Search (Nov 2025)](https://learn.microsoft.com/en-us/azure/search/whats-new#november-2025) (Updated: 2025-12-18)
- [What's new in Azure AI Search (Sep 2025)](https://learn.microsoft.com/en-us/azure/search/whats-new#september-2025) (Updated: 2025-12-18)

---

## AI Builder {: .tech-heading }

**Description:** Power Platform AI services for document processing, vision, text analysis, and predictions. Backed by Azure AI Document Intelligence and GPT models. Callable from Copilot Studio agents, Power Automate, and Power Apps.  
**Official Docs:** [AI Builder Documentation](https://learn.microsoft.com/en-us/ai-builder/)  
**Status:** GA

**Key Features:**

- **Prebuilt + custom AI:** Ship document, vision, prediction, and text models with Power Platform integration across Power Apps, Power Automate, and Copilot Studio. ([AI Builder Documentation](https://learn.microsoft.com/en-us/ai-builder/))
- **GPT document extraction:** General availability delivers prompt-based extraction across any document type without model training (GA: 2025-03-31). ([Extract information from documents with GPT](https://learn.microsoft.com/en-us/power-platform/release-plan/2024wave2/ai-builder/extract-information-documents-gpt) - Updated: 2025-08-07)
- **Azure Document Intelligence fusion:** GA integration surfaces the 4.0 layout/OCR models directly inside AI Builder flows (GA: 2025-04-30). ([Leverage advanced features with Azure Document Intelligence integration](https://learn.microsoft.com/en-us/power-platform/release-plan/2024wave2/ai-builder/leverage-advanced-features-azure-document-intelligence-integration) - Updated: 2025-08-07)
- **Document processing agent:** Managed agent template (preview) orchestrates ingestion, validation station, and Copilot Studio hand-off for documents (Preview: 2025-05-15). ([Enhance document processing efficiency with an agent](https://learn.microsoft.com/en-us/power-platform/release-plan/2025wave1/ai-builder/enhance-operational-efficiency-agent) - Updated: 2025-10-14)
- **Bring-your-own models:** Prompt builder connects securely to custom Microsoft Foundry (Azure) deployments to reuse organization-tuned models (Preview: 2025-05-15, GA target September 2025). ([Use your own generative AI model from Microsoft Foundry in prompt builder](https://learn.microsoft.com/en-us/power-platform/release-plan/2025wave1/ai-builder/use-own-generative-ai-model-azure-ai-foundry-prompt-builder) - Updated: 2025-11-07)

---

### Data & Analytics Platforms {: .no_toc }

## Microsoft Fabric {: .tech-heading }

**Description:** Unified data and analytics platform that provides the "OneLake" foundation for AI. Includes Real-Time Intelligence, Data Engineering, and the new "Fabric Data Agents" for conversational analytics.  
**Official Docs:** [Microsoft Fabric Documentation](https://learn.microsoft.com/en-us/fabric/)  
**Status:** GA

**Key Features:**

- **Fabric Data Agents (Preview):** Q&A-style conversational agents that retrieve insights from OneLake sources while respecting data access permissions; consumable by Copilot Studio and M365 Copilot. Not an orchestrator-use Foundry Agent Service or Agent Framework for multi-step coordination.
- **Cosmos DB in Fabric (Preview):** Deploy Cosmos DB (NoSQL) directly within Fabric for unified operational and analytical data without ETL.
- **OneLake Shortcut Transformations (Preview):** Apply AI transformations (summarize, translate, classify) via Microsoft Foundry (Azure) during data ingestion.
- **Translytical Task Flows (Preview):** Trigger write-back actions and workflows directly from Power BI reports.
- **Digital Twin Builder (Preview):** No-code tool in Real-Time Intelligence to map physical assets to digital twins.

---

### Developer Tools {: .no_toc }

## GitHub Copilot {: .tech-heading }

**Description:** AI-powered developer platform that has evolved from an in-editor assistant to a suite of autonomous agents and tools for the entire software lifecycle.  
**Official Docs:** [GitHub Copilot Documentation](https://docs.github.com/en/copilot)  
**Status:** GA (Various features in Preview)

**Key Features:**

- **Copilot Coding Agent (Preview):** Autonomous agent integrated into GitHub.com that can be assigned issues to refactor code, fix bugs, and implement features asynchronously. It creates PRs, runs tests, and iterates on feedback.
- **Copilot Agent Mode (Preview):** "Peer programmer" mode in VS Code that can edit multiple files, run terminal commands, and self-heal errors during development.
- **Copilot Extensions:** Ecosystem of third-party tools (DataStax, Sentry, Azure) that Copilot can invoke to perform specialized tasks.
- **Copilot Workspace:** Natural language environment to plan, build, test, and run code in a cloud-based dev environment.

## GitHub Models {: .tech-heading }

**Description:** Models as a Service (MaaS) platform integrated directly into GitHub, allowing developers to discover, test, and compare models (OpenAI, Meta, Mistral, Microsoft) without leaving their workflow.  
**Official Docs:** [GitHub Models Documentation](https://docs.github.com/en/github-models)  
**Status:** Preview

**Key Features:**

- **Model Playground:** Interactive hub to test prompts and compare model outputs.
- **Workflow Integration:** Use models directly in PRs, issues, and CI/CD pipelines.
- **Prompt Management:** Create, save, and share prompts across the organization.
- **Evaluation:** Automated tools to evaluate model performance and cost for specific use cases.

## Visual Studio Code {: .tech-heading }

**Description:** The world's most popular code editor, now serving as the primary interface for "Agentic IDE" experiences.  
**Official Docs:** [VS Code Documentation](https://code.visualstudio.com/)  
**Status:** GA

**Key Features:**

- **Agent Mode:** The UI for autonomous coding agents (see GitHub Copilot).
- **PostgreSQL Extension (Preview):** AI-powered database management with natural language to SQL capabilities.
- **Microsoft Foundry extension:** Build, test, and deploy agents directly from VS Code.

---

## Microsoft 365 Agents SDK & Toolkit {: .tech-heading }

**Description:** Pro-code framework and tooling for multi-channel Microsoft 365 agents. Combines the Agents SDK (C#, JavaScript/TypeScript, Python) with Agents Toolkit extensions for VS Code, Visual Studio, GitHub Copilot, and CLI-based automation. Successor to Bot Framework for custom engine agents.  
**Status:** GA (C#, JavaScript/TypeScript, Python)  
**Official Docs:** [M365 Agents SDK](https://learn.microsoft.com/en-us/microsoft-365/agents-sdk/agents-sdk-overview) | [M365 Agents Toolkit](https://learn.microsoft.com/en-us/microsoft-365/developer/overview-m365-agents-toolkit) | [Bot Framework Migration](https://aka.ms/bfmigrationguidance)

**Key Features:**

- **Channel reach:** Deploy custom engine agents to Microsoft 365 Copilot, Teams (chat, channels, meetings), web, email, SMS, and third-party messaging channels. ([Microsoft 365 Agents Toolkit](https://learn.microsoft.com/en-us/microsoft-365/developer/overview-m365-agents-toolkit) - Updated: 2025-05-30)
- **Model + orchestrator choice:** Bring Azure OpenAI, Microsoft Foundry (Azure), Anthropic, or other APIs and pair with Microsoft Agent Framework or alternate orchestrators. ([Microsoft 365 Agents SDK overview](https://learn.microsoft.com/en-us/microsoft-365/agents-sdk/agents-sdk-overview) - Updated: 2025-11-21)
- **Toolkit formats:** Use VS Code, Visual Studio, GitHub Copilot, or CLI tooling for scaffolding, debugging, publishing, and CI/CD automation. ([Microsoft 365 Agents Toolkit](https://learn.microsoft.com/en-us/microsoft-365/developer/overview-m365-agents-toolkit#formats) - Updated: 2025-05-30)
- **Agents Playground:** Local sandbox simulates Teams to iterate without a tenant or tunneling, supporting rapid agent debugging. ([Microsoft 365 Agents Toolkit](https://learn.microsoft.com/en-us/microsoft-365/developer/overview-m365-agents-toolkit#build-and-iterate-quickly-with-microsoft-365-agents-playground) - Updated: 2025-05-30)
- **Migration path:** Bot Framework retirement on Dec 31, 2025, routes existing solutions to the Agents SDK + Toolkit stack. ([Bot Framework Migration Guide](https://aka.ms/bfmigrationguidance))

**Recent Updates (2025):**

- **May 19, 2025:** Agents Toolkit added Kiota-powered API plugin generation, enabling visual endpoint selection and easier maintenance. ([Microsoft 365 Copilot release notes - June 24, 2025](https://learn.microsoft.com/en-us/copilot/microsoft-365/release-notes#june-24,-2025) - Retrieved: 2025-01-27)
- **May 2025:** GitHub Copilot extension option introduced for chat-driven scaffolding of Agents Toolkit projects. ([Microsoft 365 Agents Toolkit](https://learn.microsoft.com/en-us/microsoft-365/developer/overview-m365-agents-toolkit#formats) - Updated: 2025-05-30)

**Deployment & Hosting:**

- **Bring-your-own hosting:** Deploy Agents SDK workloads to Azure App Service, Azure Container Apps, AKS, or on-premises infrastructure with full control over VNets, private endpoints, and certificates. ([Microsoft 365 Agents Toolkit](https://learn.microsoft.com/en-us/microsoft-365/developer/overview-m365-agents-toolkit) - Updated: 2025-05-30)
- **CI/CD automation:** Agents Toolkit CLI supports provisioning, packaging, and publishing inside GitHub or Azure DevOps pipelines. ([Microsoft 365 Agents Toolkit command line interface](https://learn.microsoft.com/en-us/microsoftteams/platform/toolkit/microsoft-365-agents-toolkit-cli) - Retrieved: 2025-05-16)

**When to use:** Migrating Bot Framework bots, building enterprise-grade agents that must span Teams, Copilot, and external channels, or needing full governance over hosting, authentication, and orchestration stack selection.

**Sources:**

- [Microsoft 365 Agents Toolkit](https://learn.microsoft.com/en-us/microsoft-365/developer/overview-m365-agents-toolkit) (Updated: 2025-05-30)
- [Microsoft 365 Agents SDK overview](https://learn.microsoft.com/en-us/microsoft-365/agents-sdk/agents-sdk-overview) (Updated: 2025-11-21)
- [Microsoft 365 Copilot release notes - June 24, 2025](https://learn.microsoft.com/en-us/copilot/microsoft-365/release-notes#june-24,-2025) (Retrieved: 2025-01-27)
- [Microsoft 365 Agents Toolkit command line interface](https://learn.microsoft.com/en-us/microsoftteams/platform/toolkit/microsoft-365-agents-toolkit-cli) (Retrieved: 2025-05-16)
- [Bot Framework Migration Guide](https://aka.ms/bfmigrationguidance)

---

## Microsoft Agent Framework {: .tech-heading }

**Description:** Microsoft's next-generation, type-safe orchestration SDK for composing multi-agent workflows with executors, edges, and reusable patterns. Successor to Semantic Kernel and AutoGen for building agents in .NET and Python.  
**Status:** Public Preview (.NET, Python)  
**Official Docs:** [Microsoft Agent Framework overview](https://learn.microsoft.com/en-us/agent-framework/overview/agent-framework-overview) | [Workflows overview](https://learn.microsoft.com/en-us/agent-framework/user-guide/workflows/overview) | [Workflows - Checkpoints](https://learn.microsoft.com/en-us/agent-framework/user-guide/workflows/checkpoints)

**Key Features:**

- **Unified agents + workflows:** Ship LLM-powered agents, MCP integrations, and workflow graphs from a single SDK that merges Semantic Kernel and AutoGen strengths. ([Microsoft Agent Framework overview](https://learn.microsoft.com/en-us/agent-framework/overview/agent-framework-overview) - Retrieved: 2025-10-01)
- **Orchestration patterns:** Sequential, Concurrent, Handoff, and Magentic orchestrations accelerate multi-agent collaboration without bespoke control logic. ([Workflows orchestrations overview](https://learn.microsoft.com/en-us/agent-framework/user-guide/workflows/orchestrations/overview) - Retrieved: 2025-09-12)
- **Type-safe execution + checkpointing:** Executors, edges, and checkpoint services provide deterministic routing, resumability, and human-approval loops. ([Workflows overview](https://learn.microsoft.com/en-us/agent-framework/user-guide/workflows/overview#overview) - Retrieved: 2025-09-12; [Workflows - Checkpoints](https://learn.microsoft.com/en-us/agent-framework/user-guide/workflows/checkpoints) - Updated: 2025-09-12)
- **Observability instrumentation:** OpenTelemetry hooks capture workflow spans (`workflow.run`, `message.send`, etc.) via `ENABLE_OTEL` or `setup_observability()`. ([Workflows - Observability](https://learn.microsoft.com/en-us/agent-framework/user-guide/workflows/observability) - Retrieved: 2025-09-12)
- **Workflows as agents:** Any workflow can be wrapped and exposed through the agent interface, enabling reuse across APIs or UI hosts. ([Workflows - Using workflows as agents](https://learn.microsoft.com/en-us/agent-framework/user-guide/workflows/as-agents) - Retrieved: 2025-09-12)

---

## Technology Selection Quick Guide

| Your Need | Recommended Technology | Why? |
|-----------|------------------------|------|
| End-user productivity (no dev) | Microsoft 365 Copilot | Built-in, tenant-aware, immediate value |
| Custom agents (low-code) | Copilot Studio | Managed platform, fast deployment, governance |
| Custom agents (pro-code) | M365 Agents SDK or Microsoft Foundry (Azure) | Full control, any model, any orchestrator |
| Managed agent runtime | Foundry Agent Service | PaaS for agent infrastructure, multi-agent support |
| Enterprise workflow + AI | Azure Logic Apps | 1,400+ connectors, MCP server, AI agent workflows |
| Document processing | AI Builder | Prebuilt models, Power Platform integration |
| Workflow orchestration | Microsoft Agent Framework | Checkpointing, type-safe workflows, multi-agent patterns |

---

## Network Isolation Decision Matrix

| Technology | VNet Support | Private Endpoints | Air-Gapped | Gateway Required | Best For |
|------------|-------------|-------------------|------------|------------------|----------|
| **Microsoft Foundry (Azure)** | Full | Yes | Yes | No | Zero-trust, air-gapped, sovereign data |
| **Foundry Agent Service** | Full | Yes | Yes | No | Managed PaaS with private networking |
| **Copilot Studio** | Gateway-based | Via gateway | No | Yes | Managed PaaS with Azure resource access |
| **M365 Agents SDK** | Self-hosted | Yes | Yes | No | Custom network control |
| **M365 Copilot** | No No | No No | No No | Yes For on-prem | Managed SaaS only |

---

## Identity & Permissions Architecture {: .tech-heading }

**Why it matters:** Successful agent deployments hinge on getting identity, authorization, and auditing right. Use this section to align authentication models with the platforms in this guide.

### Implementation Approach {: .no_toc }

1. **Map identity boundaries** for every surface (M365 Copilot, Copilot Studio, Microsoft Foundry (Azure), Agents SDK) so you know which services are inherently user-scoped and which require custom design.[^copilot-privacy][^studio-authentication][^foundry-rbac][^agentsdk-auth]
2. **Choose delegated vs application scopes** early, preferring delegated consent for user-driven actions and reserving service principals for automation that cannot run under a user identity.[^agentsdk-permissions][^graph-permissions]
3. **Configure authentication flows** using the native controls for each platform-Copilot Studio manual auth, Microsoft Foundry (Azure) managed identities, and MSAL providers in the Agents SDK.[^studio-authentication][^foundry-managed-identity][^msal-config]
4. **Enforce least privilege and RBAC** by assigning the minimum Entra ID roles, Graph scopes, and project-level permissions required for the workload; document any elevated service accounts.[^foundry-rbac][^graph-permissions]
5. **Enable centralized auditing** in Microsoft Purview and Dataverse so prompts, responses, and service-account executions are captured for compliance reviews.[^copilot-audit][^studio-audit]

### Identity & Permissions Matrix {: .no_toc }

| Technology | Default Identity Mode | Service Accounts Supported? | Primary Configuration Controls | Audit Surface |
|------------|----------------------|-----------------------------|--------------------------------|---------------|
| **M365 Copilot** | Always runs as the signed-in user | No | Tenant privacy & data access posture | Microsoft Purview audit logs[^copilot-audit] |
| **Copilot Studio** | User or service account depending on authentication setting | Yes (manual auth) | Agent authentication mode + connection references | Microsoft Purview + Dataverse transcripts[^studio-authentication][^studio-audit] |
| **Microsoft Foundry (Azure) / Agent Service** | Configurable (API key, Entra ID, managed identity) | Yes | Azure RBAC assignments + managed identity role bindings | Azure Monitor / Diagnostic logs |
| **M365 Agents SDK** | Developer-defined (delegated, app-only, managed identity) | Yes | MSAL profile configuration + Graph scopes | Custom logging + Purview via channel integration[^msal-config][^agentsdk-permissions] |

### Microsoft 365 Copilot: User-Scoped by Design {: .no_toc }

- Runs entirely under the requesting user's identity and respects existing SharePoint, Exchange, and Teams permissions-"it only sees what you can see" is an architectural guarantee.[^copilot-privacy]
- All prompts and responses flow into Microsoft Purview audit logs and activity explorer, enabling retention and eDiscovery without extra configuration.[^copilot-audit]
- Best choice when compliance teams require individual attribution with zero additional setup.

### Copilot Studio: Configurable Delegated or Service Accounts {: .no_toc }

- Makers select **Authenticate with Microsoft** for delegated access (Teams channel only) or **Authenticate manually** to wire up Entra ID, federated credentials, or other OAuth providers.[^studio-authentication]
- Connection references decide whether each action uses the caller's identity or a pre-authorized service account-document every elevated credential and pair destructive flows with approvals.[^studio-authentication]
- Purview auditing of maker and end-user interactions is GA (Jan 2025), and Dataverse conversation tables retain transcripts for 30+ days with configurable retention, giving you a complete audit trail.[^studio-audit]
- Ideal when you need to mix user-scoped reads with selective elevation for enterprise systems (for example, HR ticket creation under a bot account).

### Microsoft Foundry (Azure) & Foundry Agent Service: RBAC + Managed Identity First {: .no_toc }

- Replace static API keys with Microsoft Entra authentication and assign built-in roles (Azure AI User, Azure AI Project Manager, Cognitive Services OpenAI User) to enforce least privilege.[^foundry-rbac]
- Enable the project's system-assigned managed identity and grant it scoped access (for example, Storage Blob Data Reader) so hosted agents can call downstream services without secrets.[^foundry-managed-identity]
- Use role assignments and diagnostic logging to trace every inference or tool call back to a user principal or managed identity-required for production-grade workloads.
- Suits pro-code teams that already operate Azure landing zones and need fine-grained control.

### Microsoft 365 Agents SDK: Bring Your Own Authentication {: .no_toc }

- The SDK ships MSAL-based providers that can issue access tokens via delegated consent, client credentials, or managed identities; profiles are defined in configuration, not hard-coded.[^msal-config]
- Pair the SDK with Entra ID app registrations that request only the Graph scopes you need, and use the Admin Center's Permissions tab to review delegated vs application grants.[^agentsdk-permissions][^graph-permissions]
- Implement custom logging (Application Insights, Purview activity events) to record the initiating user, token type, and downstream actions-security teams will expect this evidence.
- Choose this path when you require full control over token exchange, multi-channel adapters, and integration with existing identity middleware.

---

**Next:** [Feature Comparison]({{ '/docs/feature-comparison' | relative_url }}) - Side-by-side capability matrices

---

[^copilot-privacy]: Data, privacy, and security for Microsoft 365 Copilot, Microsoft Learn. Retrieved: 2026-01-07. [https://learn.microsoft.com/en-us/copilot/microsoft-365/microsoft-365-copilot-privacy](https://learn.microsoft.com/en-us/copilot/microsoft-365/microsoft-365-copilot-privacy)
[^copilot-audit]: Microsoft 365 Copilot reporting options for admins, Microsoft Learn. Retrieved: 2025-09-16. [https://learn.microsoft.com/en-us/copilot/microsoft-365/microsoft-365-copilot-reports-for-admins](https://learn.microsoft.com/en-us/copilot/microsoft-365/microsoft-365-copilot-reports-for-admins)
[^studio-authentication]: Configure user authentication in Copilot Studio, Microsoft Learn. Retrieved: 2025-11-25. [https://learn.microsoft.com/en-us/microsoft-copilot-studio/configuration-end-user-authentication](https://learn.microsoft.com/en-us/microsoft-copilot-studio/configuration-end-user-authentication)
[^studio-audit]: Audit Copilot Studio activities in Microsoft Purview, Microsoft Learn. Retrieved: 2025-01-31. [https://learn.microsoft.com/en-us/microsoft-copilot-studio/admin-logging-copilot-studio](https://learn.microsoft.com/en-us/microsoft-copilot-studio/admin-logging-copilot-studio)
[^foundry-rbac]: Role-based access control for Microsoft Foundry (Azure) (hub-focused), Microsoft Learn. Retrieved: 2025-12-31. [https://learn.microsoft.com/en-us/azure/ai-foundry/concepts/hub-rbac-azure-ai-foundry](https://learn.microsoft.com/en-us/azure/ai-foundry/concepts/hub-rbac-azure-ai-foundry)
[^foundry-managed-identity]: How to use Foundry Agent Service with OpenAPI specified tools - Authenticating with managed identity, Microsoft Learn. Retrieved: 2025-12-22. [https://learn.microsoft.com/en-us/azure/ai-foundry/agents/how-to/tools/openapi-spec#authenticating-with-managed-identity-microsoft-entra-id](https://learn.microsoft.com/en-us/azure/ai-foundry/agents/how-to/tools/openapi-spec#authenticating-with-managed-identity-microsoft-entra-id)
[^agentsdk-auth]: Configure authentication in a .NET agent (Microsoft 365 Agents SDK), Microsoft Learn. Retrieved: 2025-07-17. [https://learn.microsoft.com/en-us/microsoft-365/agents-sdk/microsoft-authentication-library-configuration-options](https://learn.microsoft.com/en-us/microsoft-365/agents-sdk/microsoft-authentication-library-configuration-options)
[^msal-config]: Configure authentication in a .NET agent (Microsoft 365 Agents SDK), Microsoft Learn. Retrieved: 2025-07-17. [https://learn.microsoft.com/en-us/microsoft-365/agents-sdk/microsoft-authentication-library-configuration-options](https://learn.microsoft.com/en-us/microsoft-365/agents-sdk/microsoft-authentication-library-configuration-options)
[^agentsdk-permissions]: Manage permissions for Microsoft 365 Copilot agents, Microsoft Learn. Retrieved: 2026-01-23. [https://learn.microsoft.com/en-us/microsoft-365/admin/manage/manage-agents-permissions](https://learn.microsoft.com/en-us/microsoft-365/admin/manage/manage-agents-permissions)
[^graph-permissions]: Overview of Microsoft Graph permissions, Microsoft Learn. Retrieved: 2025-12-26. [https://learn.microsoft.com/en-us/graph/permissions-overview](https://learn.microsoft.com/en-us/graph/permissions-overview)