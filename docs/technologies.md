---
layout: default
title: Microsoft AI Technologies
nav_order: 7
description: "Complete reference for Microsoft's AI technology portfolio"
---

# Microsoft AI Technologies Reference
{: .no_toc }

This section provides a comprehensive overview of Microsoft's AI technology stack, from end-user productivity tools to infrastructure services.


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

- **Tenant-aware AI:** Works across Word, Excel, Teams, Outlook, PowerPoint, and OneNote while inheriting Microsoft Graph security and compliance controls. (Updated declarative agents guidance — Retrieved: 2025-10-30)
- **Extensibility options:** Build declarative agents with instructions, knowledge, and actions or bring custom engine agents for full orchestration control. (Agents for Microsoft 365 Copilot — Retrieved: 2025-10-30)
- **Unified discovery:** Users can discover and install agents from the in-app store inside Word and PowerPoint, with Excel support in rollout. (Microsoft 365 Copilot release notes — Updated: 2025-07-08)
- **Admin governance:** Admins can pre-approve trusted agents and audit usage to streamline tenant-wide deployments. (Microsoft 365 Copilot release notes — Updated: 2025-08-05; 2025-07-08)
- **Grounded knowledge:** Agents can draw from Teams meetings, SharePoint, OneDrive, email, Dataverse, and approved connectors with tenant-scoped security. (Extend Microsoft 365 Copilot with agents — Retrieved: 2025-10-30)
- **Fine-tuning (Preview):** Copilot Tuning lets makers fine-tune declarative agent models using tenant data under admin control. (Microsoft 365 Copilot release notes — Updated: 2025-08-05)

**Recent Updates (2025):**

- **Oct 28, 2025:** Static tabs for custom engine agents in Teams meetings and @mention routing for Copilot Chat to target specific agents. (Microsoft 365 Copilot release notes — Updated: 2025-10-28)
- **Aug 19, 2025:** Declarative agents can be invoked directly in Excel and include enhanced governance to review file-based knowledge. (Microsoft 365 Copilot release notes — Updated: 2025-08-19)
- **Aug 5, 2025:** Tenant data fine-tuning, admin pre-approval for trusted declarative agents, and improved SharePoint file Q&A accuracy. (Microsoft 365 Copilot release notes — Updated: 2025-08-05)
- **Jul 8, 2025:** Unified store surfaces Copilot agents inside Word and PowerPoint and adds Dataverse as an in-product knowledge source. (Microsoft 365 Copilot release notes — Updated: 2025-07-08)

**Network Isolation:**

- **VNet Support:** ❌ No custom VNet support
- Fully managed SaaS (no VNet integration available)
- Requires gateway architecture for private on-premises data access
- Inherits M365 tenant network security
- **Ideal for:** Organizations accepting Microsoft-managed SaaS networking model
- Guidance: Microsoft recommends leveraging M365 admin controls and security policies to govern agent data access. (Data, privacy, and security considerations — Retrieved: 2025-10-30)

**When to use:** Broad productivity gains, existing M365 licenses, tenant-aware context, no deep AI expertise required, extend via low-code (Copilot Studio) or pro-code (M365 Agents SDK)

**Sources:**

- [Microsoft 365 Copilot release notes — Oct 28, 2025](https://learn.microsoft.com/en-us/copilot/microsoft-365/release-notes#october-28,-2025) (Updated: 2025-10-28)
- [Microsoft 365 Copilot release notes — Aug 19, 2025](https://learn.microsoft.com/en-us/copilot/microsoft-365/release-notes#august-19,-2025) (Updated: 2025-08-19)
- [Microsoft 365 Copilot release notes — Aug 5, 2025](https://learn.microsoft.com/en-us/copilot/microsoft-365/release-notes#august-5,-2025) (Updated: 2025-08-05)
- [Microsoft 365 Copilot release notes — Jul 8, 2025](https://learn.microsoft.com/en-us/copilot/microsoft-365/release-notes#july-8,-2025) (Updated: 2025-07-08)
- [Agents for Microsoft 365 Copilot](https://learn.microsoft.com/en-us/microsoft-365-copilot/extensibility/agents-overview) (Retrieved: 2025-10-30)
- [Extend Microsoft 365 Copilot with agents](https://learn.microsoft.com/en-us/microsoft-copilot-studio/microsoft-copilot-extend-copilot-extensions) (Retrieved: 2025-10-30)
- [Data, privacy, and security considerations for extending Microsoft 365 Copilot](https://learn.microsoft.com/en-us/microsoft-365-copilot/extensibility/data-privacy-security) (Retrieved: 2025-10-30)

---

## Copilot Studio
{: .tech-heading }
**Description:** Low-code and pro-code authoring environment for building declarative and custom engine agents with governance, analytics, and multi-channel delivery. Available as a standalone web app and inside Microsoft Teams.  
**Official Docs:** [Copilot Studio Documentation](https://learn.microsoft.com/en-us/microsoft-copilot-studio/)  
**Implementation Guide:** [aka.ms/CopilotStudioImplementationGuide](https://aka.ms/CopilotStudioImplementationGuide)

**Key Features:**

- **Unified authoring:** Makers use the refreshed authoring canvas, trigger management, and analytics across lite and full experiences. (Upgrade to Copilot Studio unified authoring — Retrieved: 2025-10-30)
- **Model choice:** GPT-4.1 is now the default model for generative orchestration with GPT-5 available in preview, while GPT-4o retires in managed tenants. (What's new in Copilot Studio — Updated: 2025-10-31)
- **Real-time data connectors:** Makers can ground agents with structured data from Microsoft and selected third-party systems for live responses. (Microsoft 365 Copilot release notes — Updated: 2025-08-05)
- **Expanded knowledge capacity:** Agents can use up to 1000 SharePoint or OneDrive files with grouped instructions for precise responses. (Use up to 1000 files per agent — GA: 2025-10-06)
- **MCP tool integration:** Agents can call remote Model Context Protocol servers to reach external tools securely. (What's new in Copilot Studio — Updated: 2025-10-31)
- **Channel reach:** Publish agents to Microsoft 365 Copilot, Teams, web, and messaging channels including WhatsApp via Azure Communications Service. (Publish agents to WhatsApp — GA: 2025-09-08)
- **Orchestration modes:** Generative orchestration (default) handles multi-intent planning; makers can switch to Classic NLU/Classic NLU+ for deterministic topic routing or connect Azure AI Language (CLU) for advanced entity extraction when licensing allows. (Natural language understanding overview — Updated: 2025-09-12; Create and edit topics — Updated: 2025-09-12)

**Recent Updates (2025):**

- **Oct 2025:** Default model upgrade to GPT-4.1, GPT-5 preview access, MCP server tool, analytics enhancements, and flow express mode to reduce timeouts. (What's new in Copilot Studio — Updated: 2025-10-31)
- **Oct 2025:** Knowledge management improvements, including grouped instructions and 1000-file limits for SharePoint/OneDrive uploads. (Group files with instructions — GA: 2025-10-01; Use up to 1000 files per agent — GA: 2025-10-06)
- **Sep 2025:** General availability of WhatsApp channel publishing for customer-facing agents. (Publish agents to WhatsApp — GA: 2025-09-08)
- **Jun 2025:** Weekly active user insights for Copilot Studio agent reports in Viva Insights dashboards. (Microsoft 365 Copilot release notes — Updated: 2025-10-28)

**Network Isolation:**

- **VNet Support:** ⚠️ Supported via Microsoft-managed VNet data gateway; runtime remains in Power Platform. (VNet data gateway overview — Retrieved: 2025-10-30)
- Makers can deploy managed environments with private endpoints to Azure resources through the Power Platform VNet data gateway. (VNet data gateway overview — Retrieved: 2025-10-30)
- On-premises data gateway enables secure connectivity to local systems. (VNet data gateway overview — Retrieved: 2025-10-30)
- **Ideal for:** Managed PaaS scenarios requiring low-code authoring with governed access to Azure or on-premises data.

**When Copilot Studio is the Right Tool:**

- Rapidly extend Microsoft 365 Copilot with declarative agents tailored to teams or departments.
- Build custom engine agents that orchestrate complex workflows while remaining inside Microsoft-controlled infrastructure.
- Leverage Power Platform connectors, triggers, and ALM tooling without deep ML engineering.

**Sources:**

- [What's new in Copilot Studio](https://learn.microsoft.com/en-us/microsoft-copilot-studio/whats-new#notable-changes) (Updated: 2025-10-31)
- [Microsoft 365 Copilot release notes — Aug 5, 2025](https://learn.microsoft.com/en-us/copilot/microsoft-365/release-notes#august-5,-2025) (Updated: 2025-08-05)
- [Use up to 1000 files per agent for SharePoint and OneDrive uploads](https://learn.microsoft.com/en-us/power-platform/release-plan/2025wave1/microsoft-copilot-studio/use-up-1000-files-per-agent-sharepoint-onedrive-uploads) (GA: 2025-10-06)
- [Group files with instructions to guide agent answers](https://learn.microsoft.com/en-us/power-platform/release-plan/2025wave2/microsoft-copilot-studio/group-files-instructions-guide-agent-answers) (GA: 2025-10-01)
- [Publish agents to WhatsApp](https://learn.microsoft.com/en-us/power-platform/release-plan/2025wave1/microsoft-copilot-studio/deploy-copilots-whatsapp-azure-communications-service-chat-sms-channels) (GA: 2025-09-08)
- [Upgrade to Copilot Studio unified authoring](https://learn.microsoft.com/en-us/microsoft-copilot-studio/unified-authoring-conversion) (Retrieved: 2025-10-30)
- [VNet data gateway overview](https://learn.microsoft.com/en-us/power-platform/admin/vnet-support-overview) (Retrieved: 2025-10-30)
- [Natural language understanding (NLU) overview](https://learn.microsoft.com/en-us/microsoft-copilot-studio/nlu-overview) (Updated: 2025-09-12)
- [Create and edit topics in Copilot Studio](https://learn.microsoft.com/en-us/microsoft-copilot-studio/authoring-create-edit-topics) (Updated: 2025-09-12)

---

## Azure AI Foundry
{: .tech-heading }
**Description:** Code-first environment for building, evaluating, and deploying AI solutions with Azure OpenAI, open-source, and custom models. Integrates with workforce tools such as Azure AI Agent Service, prompt flow, and safety guardrails.  
**Official Docs:** [Azure AI Foundry Documentation](https://learn.microsoft.com/en-us/azure/ai-foundry/)  
**Status:** GA

**Key Features:**

- **Broad model catalog:** Access GPT-5, GPT-5-mini, GPT-5-nano, GPT-4.1, GPT-image-1, Sora video generation, and GPT RealTime audio models alongside open-source offerings. (What's new in Azure OpenAI — Updated: 2025-08-15)
- **Provisioned throughput management:** Reserve PTUs and enable spillover to automatically route excess traffic to standard deployments. (What's new in Azure OpenAI — Updated: 2025-08-15)
- **Safety and routing:** Use model router, prompt shields with spotlighting, and structured outputs to protect prompts and dynamically select optimal models. (What's new in Azure OpenAI — Updated: 2025-05-30)
- **Workflow and evaluation tooling:** Build end-to-end pipelines with prompt flow, evaluations, and integrated monitoring. (Azure AI Foundry Documentation — Retrieved: 2025-10-30)
- **Agent readiness:** Pair with Azure AI Agent Service for managed agent orchestration using the same model deployments. (Azure AI Foundry Documentation — Retrieved: 2025-10-30)

**Recent Updates (2025):**

- **Sep 2025:** GPT-5-codex reasoning model released for Codex CLI and VS Code integration. (What's new in Azure OpenAI — Updated: 2025-09-15)
- **Aug 2025:** GPT-5 series, Sora image-to-video generation, GPT RealTime GA, and provisioned spillover reached GA. (What's new in Azure OpenAI — Updated: 2025-08-15)
- **May 2025:** Sora video generation preview, prompt shield spotlighting, and model router preview introduced. (What's new in Azure OpenAI — Updated: 2025-05-30)

**Context Windows:**

- **GPT-5 series:** Up to 400k tokens (272k input, 128k output) for reasoning workloads. (Foundry models sold directly by Azure — Retrieved: 2025-10-30)
- **GPT-5-chat:** 128k token context for conversational scenarios. (Foundry models sold directly by Azure — Retrieved: 2025-10-30)
- **GPT-4.1:** 1M token context for large document processing. (Foundry models sold directly by Azure — Retrieved: 2025-10-30)

**Network Isolation:**

- **VNet integration:** Configure private endpoints for hubs and projects to keep traffic within customer VNets. (Configure a private link for Azure AI Foundry — Retrieved: 2025-10-30)
- **Managed virtual networks:** Secure hubs with inbound and outbound network isolation, NSGs, and customer-managed keys. (Create a secure Azure AI Foundry hub — Retrieved: 2025-10-30)
- **Ideal for:** Zero-trust deployments, regulated workloads, and sovereign data strategies.

**When Azure AI Foundry is the Right Tool:**

- Latency-sensitive or high-throughput applications needing direct control over model deployments and caching.
- Custom AI pipelines, evaluations, or RAG systems that exceed low-code platform capabilities.
- Teams with Azure engineering expertise that must combine private networking, governance, and model flexibility.

**Sources:**

- [What's new in Azure OpenAI in Azure AI Foundry Models](https://learn.microsoft.com/en-us/azure/ai-foundry/openai/whats-new#august-2025) (Updated: 2025-08-15)
- [What's new in Azure OpenAI in Azure AI Foundry Models](https://learn.microsoft.com/en-us/azure/ai-foundry/openai/whats-new#may-2025) (Updated: 2025-05-30)
- [What's new in Azure OpenAI in Azure AI Foundry Models](https://learn.microsoft.com/en-us/azure/ai-foundry/openai/whats-new#september-2025) (Updated: 2025-09-15)
- [Foundry models sold directly by Azure](https://learn.microsoft.com/en-us/azure/ai-foundry/foundry-models/concepts/models-sold-directly-by-azure#gpt-5) (Retrieved: 2025-10-30)
- [Azure AI Foundry Documentation](https://learn.microsoft.com/en-us/azure/ai-foundry/) (Retrieved: 2025-10-30)
- [How to configure a private link for Azure AI Foundry](https://learn.microsoft.com/en-us/azure/ai-foundry/how-to/configure-private-link) (Retrieved: 2025-10-30)
- [Create a secure Azure AI Foundry hub and project with a managed virtual network](https://learn.microsoft.com/en-us/azure/ai-foundry/how-to/create-secure-ai-hub#create-a-hub) (Retrieved: 2025-10-30)

---

## Azure AI Agent Service
{: .tech-heading }
**Description:** Managed PaaS for agent orchestration, skills management, and runtime infrastructure within Azure AI Foundry. Supports connected agents (multi-agent systems), 15+ built-in tools, full RBAC + VNet + BYO storage. GA with continuous feature additions.  
**Official Docs:** [Azure AI Agent Service](https://learn.microsoft.com/en-us/azure/ai-services/agents/)  
**Status:** GA (May 2025)

**Key Features:**

- **Managed runtime:** Microsoft hosts compute, memory, and thread state with built-in tracing and Azure Monitor metrics. (Azure AI Agent Service GA — Updated: 2025-05-20)
- **Connected agents (GA):** Orchestrate multi-agent systems that share context without external orchestrators; supports Fabric data agents. (Azure AI Agent Service GA — Updated: 2025-05-20)
- **BYO storage:** Bring Azure Cosmos DB for thread storage plus Azure AI Search and Azure Blob Storage for knowledge with private endpoints. (Azure AI Agent Service GA — Updated: 2025-05-20)
- **Trace agents SDK:** Debug runs with thread-level insights, including inputs, tool calls, and outputs. (Azure AI Agent Service GA — Updated: 2025-05-20)
- **Event triggers:** Invoke agents from Azure Logic Apps or other workflows to respond to business events. (Azure AI Agent Service GA — Updated: 2025-05-20)
- **VS Code integration:** AI Foundry VS Code extension deploys and configures agent tools, including MCP integrations. (Azure AI Agent Service GA — Updated: 2025-05-20)
- **MCP tool & Deep Research:** Connect to remote MCP servers and run multi-step o3-deep-research investigations grounded by Bing Search. (What's new in Azure AI Agent Service — Updated: 2025-06-15)

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
- **Model Context Protocol (GA June 2025):** Access tools hosted on remote MCP endpoints for interoperable tool sharing. (What's new in Azure AI Agent Service — Updated: 2025-06-15)
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
- **VS Code extension:** Develop, test, and publish agents with tool configuration inside Visual Studio Code. (Azure AI Agent Service GA — Updated: 2025-05-20)

**Network Isolation:**

- **VNet Support:** ✅ Full private networking support (same as Azure AI Foundry)
- VNet integration with container injection
- Private endpoints for all resources
- Network Security Groups (NSGs) for traffic isolation
- Standard Setup: No public egress by default
- **Ideal for:** Managed PaaS with private networking requirements

**When to use:** Managed agent orchestration at PaaS layer, scalable agent infrastructure, multi-agent systems, comprehensive built-in tool ecosystem, prefer Azure-managed RAG infrastructure, need enterprise security + observability

**Sources:**

- [What's new in Azure AI Foundry Agent Service](https://learn.microsoft.com/en-us/azure/ai-foundry/agents/whats-new#june-2025) (Updated: 2025-06-15)
- [What's new in Azure AI Foundry Agent Service](https://learn.microsoft.com/en-us/azure/ai-foundry/agents/whats-new#may-2025) (Updated: 2025-05-20)
- [Azure AI Agent Service Overview](https://learn.microsoft.com/en-us/azure/ai-services/agents/overview)
- [Agent Tools Overview](https://learn.microsoft.com/en-us/azure/ai-foundry/agents/how-to/tools/overview)
- [Transparency Note for Azure Agent Service](https://learn.microsoft.com/en-us/azure/ai-foundry/responsible-ai/agents/transparency-note)
- [Virtual Networks for Foundry](https://learn.microsoft.com/en-us/azure/ai-foundry/agents/how-to/virtual-networks)

---

## AI Builder
{: .tech-heading }
**Description:** Power Platform AI services for document processing, vision, text analysis, and predictions. Backed by Azure AI Document Intelligence and GPT models. Callable from Copilot Studio agents, Power Automate, and Power Apps.  
**Official Docs:** [AI Builder Documentation](https://learn.microsoft.com/en-us/ai-builder/)  
**Status:** GA

**Key Features:**

- **Prebuilt + custom AI:** Ship document, vision, prediction, and text models with Power Platform integration across Power Apps, Power Automate, and Copilot Studio. ([AI Builder Documentation](https://learn.microsoft.com/en-us/ai-builder/))
- **GPT document extraction:** General availability delivers prompt-based extraction across any document type without model training (GA: 2025-03-31). ([Extract information from documents with GPT](https://learn.microsoft.com/en-us/power-platform/release-plan/2024wave2/ai-builder/extract-information-documents-gpt) — Updated: 2025-08-07)
- **Azure Document Intelligence fusion:** GA integration surfaces the 4.0 layout/OCR models directly inside AI Builder flows (GA: 2025-04-30). ([Leverage advanced features with Azure Document Intelligence integration](https://learn.microsoft.com/en-us/power-platform/release-plan/2024wave2/ai-builder/leverage-advanced-features-azure-document-intelligence-integration) — Updated: 2025-08-07)
- **Document processing agent:** Managed agent template (preview) orchestrates ingestion, validation station, and Copilot Studio hand-off for documents (Preview: 2025-05-15). ([Enhance document processing efficiency with an agent](https://learn.microsoft.com/en-us/power-platform/release-plan/2025wave1/ai-builder/enhance-operational-efficiency-agent) — Updated: 2025-10-16)
- **Bring-your-own models:** Prompt builder connects securely to custom Azure AI Foundry deployments to reuse organization-tuned models (Preview: 2025-05-15, GA target September 2025). ([Use your own generative AI model from Azure AI Foundry in prompt builder](https://learn.microsoft.com/en-us/power-platform/release-plan/2025wave1/ai-builder/use-own-generative-ai-model-azure-ai-foundry-prompt-builder) — Updated: 2025-08-07)

**Recent Updates (2025):**

- **Mar 31, 2025:** GPT document extraction reached GA for prompt-based doc understanding without training. ([Extract information from documents with GPT](https://learn.microsoft.com/en-us/power-platform/release-plan/2024wave2/ai-builder/extract-information-documents-gpt) — Updated: 2025-08-07)
- **Apr 30, 2025:** Azure Document Intelligence 4.0 integration delivered GA table/field confidence scoring inside AI Builder. ([Leverage advanced features with Azure Document Intelligence integration](https://learn.microsoft.com/en-us/power-platform/release-plan/2024wave2/ai-builder/leverage-advanced-features-azure-document-intelligence-integration) — Updated: 2025-08-07)
- **May 15, 2025:** Document processing agent entered preview plus prompt builder support for Azure AI Foundry hosted models. ([Enhance document processing efficiency with an agent](https://learn.microsoft.com/en-us/power-platform/release-plan/2025wave1/ai-builder/enhance-operational-efficiency-agent) — Updated: 2025-10-16)

**When to use:** Automating document understanding inside Power Platform, pairing Copilot Studio agents with managed validation flows, unifying GPT extraction with Azure Document Intelligence, or grounding prompts on enterprise-tuned models without building bespoke ML pipelines.

**Sources:**

- [AI Builder Documentation](https://learn.microsoft.com/en-us/ai-builder/) (Retrieved: 2025-10-30)
- [Extract information from documents with GPT](https://learn.microsoft.com/en-us/power-platform/release-plan/2024wave2/ai-builder/extract-information-documents-gpt) (Updated: 2025-08-07)
- [Leverage advanced features with Azure Document Intelligence integration](https://learn.microsoft.com/en-us/power-platform/release-plan/2024wave2/ai-builder/leverage-advanced-features-azure-document-intelligence-integration) (Updated: 2025-08-07)
- [Enhance document processing efficiency with an agent](https://learn.microsoft.com/en-us/power-platform/release-plan/2025wave1/ai-builder/enhance-operational-efficiency-agent) (Updated: 2025-10-16)
- [Use your own generative AI model from Azure AI Foundry in prompt builder](https://learn.microsoft.com/en-us/power-platform/release-plan/2025wave1/ai-builder/use-own-generative-ai-model-azure-ai-foundry-prompt-builder) (Updated: 2025-08-07)

---

### Pro-Code Development Frameworks
{: .no_toc }

## Azure Logic Apps
{: .tech-heading }

**Description:** Pro-developer workflow automation platform for enterprise integration and AI agent orchestration. Adds autonomous and conversational agent workflows (Preview) plus remote MCP server support to expose Logic Apps as AI tools.  
**Status:** Agent Workflows (Preview), MCP Server (Preview), Core Platform (GA)  
**Official Docs:** [Azure Logic Apps Documentation](https://learn.microsoft.com/en-us/azure/logic-apps/) | [Agent Workflows](https://learn.microsoft.com/en-us/azure/logic-apps/agent-workflows-concepts) | [Secure agent workflows (Easy Auth)](https://learn.microsoft.com/en-us/azure/logic-apps/set-up-authentication-agent-workflows) | [MCP Server](https://learn.microsoft.com/en-us/azure/logic-apps/set-up-model-context-protocol-server-standard)

**Key Features:**

- **1,400+ connectors:** Combine SaaS, on-premises, and Azure services inside agent workflows or classic orchestrations. ([Workflows with AI agents and models in Azure Logic Apps](https://learn.microsoft.com/en-us/azure/logic-apps/agent-workflows-concepts) — Updated: 2025-10-09)
- **Agent workflow types:** Build autonomous or conversational agent workflows that loop through think/act cycles using Azure OpenAI or Azure AI Foundry models. ([Workflows with AI agents and models in Azure Logic Apps](https://learn.microsoft.com/en-us/azure/logic-apps/agent-workflows-concepts) — Updated: 2025-10-09)
- **Security posture:** The Azure portal’s developer key is for design-time only; production deployments must enforce Easy Auth or managed identity access. ([Workflows with AI agents and models in Azure Logic Apps](https://learn.microsoft.com/en-us/azure/logic-apps/agent-workflows-concepts#authentication-and-authorization) — Updated: 2025-10-09)
- **Managed authentication:** Step-by-step Easy Auth guidance configures Microsoft Entra app registrations, external chat clients, and conditional access enforcement for conversational agents. ([Secure conversational agent workflows with Easy Auth in Azure Logic Apps](https://learn.microsoft.com/en-us/azure/logic-apps/set-up-authentication-agent-workflows) — Updated: 2025-10-09)
- **Remote MCP server mode:** Standard Logic Apps can publish workflows as MCP tools by enabling `extensions.workflow.McpServerEndpoints` in `host.json` and, for SSE transport, setting `Runtime.Backend.EdgeWorkflowRuntimeTriggerListener.AllowCrossWorkerCommunication` to `true`. ([Set up Standard logic apps as remote MCP servers](https://learn.microsoft.com/en-us/azure/logic-apps/set-up-model-context-protocol-server-standard) — Updated: 2025-09-08)

**Recent Updates (2025):**

- **Oct 9, 2025:** Agent workflow security guidance clarified developer key limitations and mandated Easy Auth for external callers. ([Workflows with AI agents and models in Azure Logic Apps](https://learn.microsoft.com/en-us/azure/logic-apps/agent-workflows-concepts#authentication-and-authorization) — Updated: 2025-10-09)
- **Sep 8, 2025:** MCP server preview documented host.json settings, Easy Auth requirements, and VS Code MCP testing flows. ([Set up Standard logic apps as remote MCP servers](https://learn.microsoft.com/en-us/azure/logic-apps/set-up-model-context-protocol-server-standard) — Updated: 2025-09-08)

**Security Requirements:**

- **Non-production:** Use the developer key only for portal-based testing; it lacks per-caller authorization and Conditional Access enforcement. ([Workflows with AI agents and models in Azure Logic Apps](https://learn.microsoft.com/en-us/azure/logic-apps/agent-workflows-concepts#developer-key-authentication-and-authorization) — Updated: 2025-10-09)
- **Production:** Enable Easy Auth to issue Microsoft Entra tokens, require scoped access, and light up the external chat client for conversational agents. ([Secure conversational agent workflows with Easy Auth in Azure Logic Apps](https://learn.microsoft.com/en-us/azure/logic-apps/set-up-authentication-agent-workflows) — Updated: 2025-10-09)
- **MCP exposure:** Configure OAuth-based MCP endpoints plus optional SSE transport by editing `host.json` and securing the app registration’s allowed audiences. ([Set up Standard logic apps as remote MCP servers](https://learn.microsoft.com/en-us/azure/logic-apps/set-up-model-context-protocol-server-standard#set-up-logic-app-as-mcp-server) — Updated: 2025-09-08)

**When to use:** Enterprise integration that combines AI planning with 1,400+ connectors, exposing workflows as tools for Azure AI Agent Service or VS Code MCP clients, or orchestrating long-running conversational automations with managed security controls.

**Sources:**

- [Workflows with AI agents and models in Azure Logic Apps](https://learn.microsoft.com/en-us/azure/logic-apps/agent-workflows-concepts) (Updated: 2025-10-09)
- [Secure conversational agent workflows with Easy Auth in Azure Logic Apps](https://learn.microsoft.com/en-us/azure/logic-apps/set-up-authentication-agent-workflows) (Updated: 2025-10-09)
- [Set up Standard logic apps as remote MCP servers](https://learn.microsoft.com/en-us/azure/logic-apps/set-up-model-context-protocol-server-standard) (Updated: 2025-09-08)

---

## Microsoft 365 Agents SDK & Toolkit
{: .tech-heading }

**Description:** Pro-code framework and tooling for multi-channel Microsoft 365 agents. Combines the Agents SDK (C#, JavaScript/TypeScript, Python) with Agents Toolkit extensions for VS Code, Visual Studio, GitHub Copilot, and CLI-based automation. Successor to Bot Framework for custom engine agents.  
**Status:** GA (C#, JavaScript/TypeScript, Python)  
**Official Docs:** [M365 Agents SDK](https://learn.microsoft.com/en-us/microsoft-365/agents-sdk/agents-sdk-overview) | [M365 Agents Toolkit](https://learn.microsoft.com/en-us/microsoft-365/developer/overview-m365-agents-toolkit) | [Bot Framework Migration](https://aka.ms/bfmigrationguidance)

**Key Features:**

- **Channel reach:** Deploy custom engine agents to Microsoft 365 Copilot, Teams (chat, channels, meetings), web, email, SMS, and third-party messaging channels. ([Microsoft 365 Agents Toolkit](https://learn.microsoft.com/en-us/microsoft-365/developer/overview-m365-agents-toolkit) — Updated: 2025-05-30)
- **Model + orchestrator choice:** Bring Azure OpenAI, Azure AI Foundry, Anthropic, or other APIs and pair with Microsoft Agent Framework or alternate orchestrators. ([Microsoft 365 Agents SDK overview](https://learn.microsoft.com/en-us/microsoft-365/agents-sdk/agents-sdk-overview) — Updated: 2025-10-20)
- **Toolkit formats:** Use VS Code, Visual Studio, GitHub Copilot, or CLI tooling for scaffolding, debugging, publishing, and CI/CD automation. ([Microsoft 365 Agents Toolkit](https://learn.microsoft.com/en-us/microsoft-365/developer/overview-m365-agents-toolkit#formats) — Updated: 2025-05-30)
- **Agents Playground:** Local sandbox simulates Teams to iterate without a tenant or tunneling, supporting rapid agent debugging. ([Microsoft 365 Agents Toolkit](https://learn.microsoft.com/en-us/microsoft-365/developer/overview-m365-agents-toolkit#build-and-iterate-quickly-with-microsoft-365-agents-playground) — Updated: 2025-05-30)
- **Migration path:** Bot Framework retirement on Dec 31, 2025, routes existing solutions to the Agents SDK + Toolkit stack. ([Bot Framework Migration Guide](https://aka.ms/bfmigrationguidance))

**Recent Updates (2025):**

- **May 19, 2025:** Agents Toolkit added Kiota-powered API plugin generation, enabling visual endpoint selection and easier maintenance. ([Microsoft 365 Copilot release notes — June 24, 2025](https://learn.microsoft.com/en-us/copilot/microsoft-365/release-notes#june-24,-2025) — Updated: 2025-10-28)
- **May 2025:** GitHub Copilot extension option introduced for chat-driven scaffolding of Agents Toolkit projects. ([Microsoft 365 Agents Toolkit](https://learn.microsoft.com/en-us/microsoft-365/developer/overview-m365-agents-toolkit#formats) — Updated: 2025-05-30)

**Deployment & Hosting:**

- **Bring-your-own hosting:** Deploy Agents SDK workloads to Azure App Service, Azure Container Apps, AKS, or on-premises infrastructure with full control over VNets, private endpoints, and certificates. ([Microsoft 365 Agents Toolkit](https://learn.microsoft.com/en-us/microsoft-365/developer/overview-m365-agents-toolkit) — Updated: 2025-05-30)
- **CI/CD automation:** Agents Toolkit CLI supports provisioning, packaging, and publishing inside GitHub or Azure DevOps pipelines. ([Microsoft 365 Agents Toolkit command line interface](https://learn.microsoft.com/en-us/microsoftteams/platform/toolkit/microsoft-365-agents-toolkit-cli) — Retrieved: 2025-10-30)

**When to use:** Migrating Bot Framework bots, building enterprise-grade agents that must span Teams, Copilot, and external channels, or needing full governance over hosting, authentication, and orchestration stack selection.

**Sources:**

- [Microsoft 365 Agents Toolkit](https://learn.microsoft.com/en-us/microsoft-365/developer/overview-m365-agents-toolkit) (Updated: 2025-05-30)
- [Microsoft 365 Agents SDK overview](https://learn.microsoft.com/en-us/microsoft-365/agents-sdk/agents-sdk-overview) (Updated: 2025-10-20)
- [Microsoft 365 Copilot release notes — June 24, 2025](https://learn.microsoft.com/en-us/copilot/microsoft-365/release-notes#june-24,-2025) (Updated: 2025-10-28)
- [Microsoft 365 Agents Toolkit command line interface](https://learn.microsoft.com/en-us/microsoftteams/platform/toolkit/microsoft-365-agents-toolkit-cli) (Retrieved: 2025-10-30)
- [Bot Framework Migration Guide](https://aka.ms/bfmigrationguidance)

---

## Microsoft Agent Framework
{: .tech-heading }

**Description:** Microsoft’s next-generation, type-safe orchestration SDK for composing multi-agent workflows with executors, edges, and reusable patterns. Designed to succeed Semantic Kernel agents and align with M365 Agents SDK.  
**Status:** Public Preview (C#, Python, Java)  
**Official Docs:** [Microsoft Agent Framework](https://learn.microsoft.com/en-us/agent-framework/) | [Workflows Overview](https://learn.microsoft.com/en-us/agent-framework/user-guide/workflows/overview) | [Workflows – Checkpoints](https://learn.microsoft.com/en-us/agent-framework/user-guide/workflows/checkpoints)

**Key Features:**

- **Pattern library:** Sequential, Concurrent, Handoff, Group Chat, and Magentic orchestration patterns orchestrate multi-agent collaboration. ([Microsoft Agent Framework Workflows](https://learn.microsoft.com/en-us/agent-framework/user-guide/workflows/overview#key-features) — Updated: 2025-10-01)
- **Type-safe workflows:** Graph-based executors and edges enforce compile-time safety while integrating APIs or human-in-the-loop steps. ([Microsoft Agent Framework Workflows](https://learn.microsoft.com/en-us/agent-framework/user-guide/workflows/overview#core-concepts) — Updated: 2025-10-01)
- **Checkpointing + resumption:** Automatic checkpoints at superstep boundaries with `CheckpointManager` / `CheckpointStorage` options for resume, rehydration, and human approval loops. ([Microsoft Agent Framework Workflows – Checkpoints](https://learn.microsoft.com/en-us/agent-framework/user-guide/workflows/checkpoints#capturing-checkpoints) — Updated: 2025-10-01)
- **Multi-language SDKs:** Preview libraries ship for .NET, Node.js/TypeScript, and Python to align with Microsoft 365 Agents SDK hosting choices. ([Microsoft Agent Framework overview](https://learn.microsoft.com/en-us/agent-framework/overview/agent-framework-overview) — Retrieved: 2025-10-30)

**Workflow vs Agent Distinction:**

- **Agent:** LLM-driven actor deciding which tool to invoke based on context. ([Microsoft Agent Framework Workflows](https://learn.microsoft.com/en-us/agent-framework/user-guide/workflows/overview#how-is-a-workflows-different-from-an-ai-agent) — Updated: 2025-10-01)
- **Workflow:** Predefined control flow that can embed agents, external APIs, and human steps for predictable orchestration. ([Microsoft Agent Framework Workflows](https://learn.microsoft.com/en-us/agent-framework/user-guide/workflows/overview#how-is-a-workflows-different-from-an-ai-agent) — Updated: 2025-10-01)

**Recent Updates (2025):**

- **Oct 1, 2025:** Documentation refresh added superstep checkpoint lifecycle, restoration APIs, and checkpoint state patterns. ([Microsoft Agent Framework Workflows – Checkpoints](https://learn.microsoft.com/en-us/agent-framework/user-guide/workflows/checkpoints) — Updated: 2025-10-01)

**When to use:** Coordinating specialized agents, enforcing deterministic orchestration, replaying or resuming long-running processes, or pairing the M365 Agents SDK with a first-party orchestrator.

**Sources:**

- [Microsoft Agent Framework overview](https://learn.microsoft.com/en-us/agent-framework/overview/agent-framework-overview) (Retrieved: 2025-10-30)
- [Microsoft Agent Framework Workflows](https://learn.microsoft.com/en-us/agent-framework/user-guide/workflows/overview) (Updated: 2025-10-01)
- [Microsoft Agent Framework Workflows – Checkpoints](https://learn.microsoft.com/en-us/agent-framework/user-guide/workflows/checkpoints) (Updated: 2025-10-01)

---

## "Agent Framework" Terminology Clarification

The term "agent framework" refers to two distinct technologies:

**1. Microsoft Agent Framework (Orchestration SDK)**  
Open-source library for workflow-based orchestration. Public Preview. Use for: Executor/Edge workflows, checkpointing, M365 Agents SDK integration.

**2. Azure AI Agent Service (Managed PaaS)**  
Managed service for agent orchestration within Azure AI Foundry. GA. Use for: Managed infrastructure, Azure-hosted agents, scalable runtime.

**Quick Decision:**

- M365 productivity agents → M365 Agents SDK + Agent Framework
- Azure-hosted agents → Azure AI Foundry + AI Agent Service  
- Bot Framework migration → M365 Agents SDK
- Workflow orchestration + checkpointing → Agent Framework

---

## Technology Selection Quick Guide

| Your Need | Recommended Technology | Why? |
|-----------|------------------------|------|
| End-user productivity (no dev) | Microsoft 365 Copilot | Built-in, tenant-aware, immediate value |
| Custom agents (low-code) | Copilot Studio | Managed platform, fast deployment, governance |
| Custom agents (pro-code) | M365 Agents SDK or Azure AI Foundry | Full control, any model, any orchestrator |
| Managed agent runtime | Azure AI Agent Service | PaaS for agent infrastructure, multi-agent support |
| Enterprise workflow + AI | Azure Logic Apps | 1,400+ connectors, MCP server, AI agent workflows |
| Document processing | AI Builder | Prebuilt models, Power Platform integration |
| Workflow orchestration | Microsoft Agent Framework | Checkpointing, type-safe workflows, multi-agent patterns |

---

## Network Isolation Decision Matrix

| Technology | VNet Support | Private Endpoints | Air-Gapped | Gateway Required | Best For |
|------------|-------------|-------------------|------------|------------------|----------|
| **Azure AI Foundry** | ✅ Full | ✅ Yes | ✅ Yes | ❌ No | Zero-trust, air-gapped, sovereign data |
| **Azure AI Agent Service** | ✅ Full | ✅ Yes | ✅ Yes | ❌ No | Managed PaaS with private networking |
| **Copilot Studio** | ⚠️ Gateway-based | ⚠️ Via gateway | ❌ No | ✅ Yes | Managed PaaS with Azure resource access |
| **M365 Agents SDK** | ✅ Self-hosted | ✅ Yes | ✅ Yes | ❌ No | Custom network control |
| **M365 Copilot** | ❌ No | ❌ No | ❌ No | ✅ For on-prem | Managed SaaS only |

---

## Identity & Permissions Architecture
{: .tech-heading }

**Why it matters:** Successful agent deployments hinge on getting identity, authorization, and auditing right. Use this section to align authentication models with the platforms in this guide.

### Implementation Approach
{: .no_toc }

1. **Map identity boundaries** for every surface (M365 Copilot, Copilot Studio, Azure AI Foundry, Agents SDK) so you know which services are inherently user-scoped and which require custom design.[^copilot-privacy][^studio-authentication][^foundry-rbac][^agentsdk-auth]
2. **Choose delegated vs application scopes** early, preferring delegated consent for user-driven actions and reserving service principals for automation that cannot run under a user identity.[^agentsdk-permissions][^graph-permissions]
3. **Configure authentication flows** using the native controls for each platform—Copilot Studio manual auth, Azure AI Foundry managed identities, and MSAL providers in the Agents SDK.[^studio-authentication][^foundry-managed-identity][^msal-config]
4. **Enforce least privilege and RBAC** by assigning the minimum Entra ID roles, Graph scopes, and project-level permissions required for the workload; document any elevated service accounts.[^foundry-rbac][^graph-permissions]
5. **Enable centralized auditing** in Microsoft Purview and Dataverse so prompts, responses, and service-account executions are captured for compliance reviews.[^copilot-audit][^studio-audit]

### Identity & Permissions Matrix
{: .no_toc }

| Technology | Default Identity Mode | Service Accounts Supported? | Primary Configuration Controls | Audit Surface |
|------------|----------------------|-----------------------------|--------------------------------|---------------|
| **M365 Copilot** | Always runs as the signed-in user | ❌ No | Tenant privacy & data access posture | Microsoft Purview audit logs[^copilot-audit] |
| **Copilot Studio** | User or service account depending on authentication setting | ✅ Yes (manual auth) | Agent authentication mode + connection references | Microsoft Purview + Dataverse transcripts[^studio-authentication][^studio-audit] |
| **Azure AI Foundry / Agent Service** | Configurable (API key, Entra ID, managed identity) | ✅ Yes | Azure RBAC assignments + managed identity role bindings | Azure Monitor / Diagnostic logs |
| **M365 Agents SDK** | Developer-defined (delegated, app-only, managed identity) | ✅ Yes | MSAL profile configuration + Graph scopes | Custom logging + Purview via channel integration[^msal-config][^agentsdk-permissions] |

### Microsoft 365 Copilot: User-Scoped by Design
{: .no_toc }

- Runs entirely under the requesting user’s identity and respects existing SharePoint, Exchange, and Teams permissions—“it only sees what you can see” is an architectural guarantee.[^copilot-privacy]
- All prompts and responses flow into Microsoft Purview audit logs and activity explorer, enabling retention and eDiscovery without extra configuration.[^copilot-audit]
- Best choice when compliance teams require individual attribution with zero additional setup.

### Copilot Studio: Configurable Delegated or Service Accounts
{: .no_toc }

- Makers select **Authenticate with Microsoft** for delegated access (Teams channel only) or **Authenticate manually** to wire up Entra ID, federated credentials, or other OAuth providers.[^studio-authentication]
- Connection references decide whether each action uses the caller’s identity or a pre-authorized service account—document every elevated credential and pair destructive flows with approvals.[^studio-authentication]
- Purview auditing of maker and end-user interactions is GA (Jan 2025), and Dataverse conversation tables retain transcripts for 30+ days with configurable retention, giving you a complete audit trail.[^studio-audit]
- Ideal when you need to mix user-scoped reads with selective elevation for enterprise systems (for example, HR ticket creation under a bot account).

### Azure AI Foundry & Agent Service: RBAC + Managed Identity First
{: .no_toc }

- Replace static API keys with Microsoft Entra authentication and assign built-in roles (Azure AI User, Azure AI Project Manager, Cognitive Services OpenAI User) to enforce least privilege.[^foundry-rbac]
- Enable the project’s system-assigned managed identity and grant it scoped access (for example, Storage Blob Data Reader) so hosted agents can call downstream services without secrets.[^foundry-managed-identity]
- Use role assignments and diagnostic logging to trace every inference or tool call back to a user principal or managed identity—required for production-grade workloads.
- Suits pro-code teams that already operate Azure landing zones and need fine-grained control.

### Microsoft 365 Agents SDK: Bring Your Own Authentication
{: .no_toc }

- The SDK ships MSAL-based providers that can issue access tokens via delegated consent, client credentials, or managed identities; profiles are defined in configuration, not hard-coded.[^msal-config]
- Pair the SDK with Entra ID app registrations that request only the Graph scopes you need, and use the Admin Center’s Permissions tab to review delegated vs application grants.[^agentsdk-permissions][^graph-permissions]
- Implement custom logging (Application Insights, Purview activity events) to record the initiating user, token type, and downstream actions—security teams will expect this evidence.
- Choose this path when you require full control over token exchange, multi-channel adapters, and integration with existing identity middleware.

---

**Next:** [Feature Comparison]({{ '/docs/feature-comparison' | relative_url }}) - Side-by-side capability matrices

[^copilot-privacy]: Data, privacy, and security for Microsoft 365 Copilot, Microsoft Learn. Retrieved: 2025-01-14. [https://learn.microsoft.com/en-us/copilot/microsoft-365/microsoft-365-copilot-privacy](https://learn.microsoft.com/en-us/copilot/microsoft-365/microsoft-365-copilot-privacy)
[^copilot-audit]: Microsoft 365 Copilot reporting options for admins, Microsoft Learn. Retrieved: 2025-01-14. [https://learn.microsoft.com/en-us/copilot/microsoft-365/microsoft-365-copilot-reports-for-admins](https://learn.microsoft.com/en-us/copilot/microsoft-365/microsoft-365-copilot-reports-for-admins)
[^studio-authentication]: Configure user authentication in Copilot Studio, Microsoft Learn. Retrieved: 2025-01-14. [https://learn.microsoft.com/en-us/microsoft-copilot-studio/configuration-end-user-authentication](https://learn.microsoft.com/en-us/microsoft-copilot-studio/configuration-end-user-authentication)
[^studio-audit]: Audit Copilot Studio activities in Microsoft Purview, Microsoft Learn. Retrieved: 2025-01-14. [https://learn.microsoft.com/en-us/microsoft-copilot-studio/admin-logging-copilot-studio](https://learn.microsoft.com/en-us/microsoft-copilot-studio/admin-logging-copilot-studio)
[^foundry-rbac]: Role-based access control for Azure AI Foundry (hub-focused), Microsoft Learn. Retrieved: 2025-01-14. [https://learn.microsoft.com/en-us/azure/ai-foundry/concepts/hub-rbac-azure-ai-foundry](https://learn.microsoft.com/en-us/azure/ai-foundry/concepts/hub-rbac-azure-ai-foundry)
[^foundry-managed-identity]: How to use Azure AI Foundry Agent Service with OpenAPI specified tools — Authenticating with managed identity, Microsoft Learn. Retrieved: 2025-01-14. [https://learn.microsoft.com/en-us/azure/ai-foundry/agents/how-to/tools/openapi-spec#authenticating-with-managed-identity-microsoft-entra-id](https://learn.microsoft.com/en-us/azure/ai-foundry/agents/how-to/tools/openapi-spec#authenticating-with-managed-identity-microsoft-entra-id)
[^agentsdk-auth]: Configure authentication in a .NET agent (Microsoft 365 Agents SDK), Microsoft Learn. Retrieved: 2025-01-14. [https://learn.microsoft.com/en-us/microsoft-365/agents-sdk/microsoft-authentication-library-configuration-options](https://learn.microsoft.com/en-us/microsoft-365/agents-sdk/microsoft-authentication-library-configuration-options)
[^msal-config]: Configure authentication in a .NET agent (Microsoft 365 Agents SDK), Microsoft Learn. Retrieved: 2025-01-14. [https://learn.microsoft.com/en-us/microsoft-365/agents-sdk/microsoft-authentication-library-configuration-options](https://learn.microsoft.com/en-us/microsoft-365/agents-sdk/microsoft-authentication-library-configuration-options)
[^agentsdk-permissions]: Manage permissions for Microsoft 365 Copilot agents, Microsoft Learn. Retrieved: 2025-01-14. [https://learn.microsoft.com/en-us/microsoft-365/admin/manage/manage-agents-permissions](https://learn.microsoft.com/en-us/microsoft-365/admin/manage/manage-agents-permissions)
[^graph-permissions]: Overview of Microsoft Graph permissions, Microsoft Learn. Retrieved: 2025-01-14. [https://learn.microsoft.com/en-us/graph/permissions-overview](https://learn.microsoft.com/en-us/graph/permissions-overview)
