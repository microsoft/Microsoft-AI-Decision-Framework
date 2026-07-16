---
layout: default
title: Glossary
nav_order: 13
description: "Key terms and definitions for Microsoft AI technologies"
---

# Glossary
{: .no_toc }

Quick reference for key terms used throughout the Microsoft AI Decision Framework. For detailed documentation links and resources, see [Resources]({{ '/docs/resources' | relative_url }}). For methodology and decision guidance, see [Decision Framework]({{ '/docs/decision-framework' | relative_url }}).

{: .note }
> **Last validated:** June 11, 2026. Microsoft's AI capabilities evolve rapidly - always verify with [official sources]({{ '/docs/resources' | relative_url }}) for production decisions.

---

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## A

**Agent**
An AI system that uses an LLM to interpret user inputs, plan, call tools or MCP servers, and return responses, with optional threads, memory, and middleware to enrich interactions ([Microsoft Agent Framework](https://learn.microsoft.com/en-us/agent-framework/overview/agent-framework-overview), updated 2026-02-20).

**Agent Commit Unit (ACU)**
The billing unit for the Microsoft Agent Pre-Purchase Plan (P3). 1 ACU ≈ $1 of retail usage. ACUs are purchased in a single pool and pay down both Copilot Studio Credit consumption and Microsoft Foundry usage, enabling unified budgeting across platforms. See [Agent Pre-Purchase Plan](https://learn.microsoft.com/en-us/azure/cost-management-billing/reservations/agent-pre-purchase) (updated 2026-01-15).

**Agent Factory**
A Microsoft program (not a product) that accelerates enterprise agent adoption through three pillars: the Agent Pre-Purchase Plan (P3) for unified billing, Forward Deployed Engineers (FDEs) for hands-on architecture support, and customized training. See [Introducing Microsoft Agent Factory](https://techcommunity.microsoft.com/blog/azure-ai-foundry-blog/introducing-microsoft-agent-factory/4470732) (published 2025-11-18).

**Agent Pre-Purchase Plan (P3)**
A 1-year Azure reservation that provides Agent Commit Units (ACUs) covering both Microsoft Foundry and Copilot Studio Credit consumption in a single pool. Benefit precedence: Foundry PTU reservations apply first, then Copilot Credit pre-purchase, then P3 covers overflow from both. Purchased via Azure Portal Reservations with tiered volume discounts. See [Agent Pre-Purchase Plan](https://learn.microsoft.com/en-us/azure/cost-management-billing/reservations/agent-pre-purchase) (updated 2026-01-15).

**Agent2Agent (A2A)**
A protocol enabling secure, peer-to-peer communication between AI agents, allowing them to discover peers, negotiate tasks, and collaborate without centralized intermediaries ([Advanced development tools for Teams](https://news.microsoft.com/build-2025-book-of-news/), updated 2025-05-19).

**Agent Registry (Preview)**
Central inventory in the M365 admin center to publish, activate, deploy, pin, block, remove, delete, transfer ownership, or export agents; enforces governance and visibility across Copilot and custom agents ([Agent Registry](https://learn.microsoft.com/en-us/microsoft-365/admin/manage/agent-registry?view=o365-worldwide#admin-actions-to-manage-agents), retrieved 2026-01-23).

**Agent Settings templates (Preview)**
Reusable configuration templates in the M365 admin center that let admins apply consistent policies to multiple agents (e.g., enabled channels, publishing scope, owners), managed alongside Agent Registry entries ([Microsoft 365 Copilot release notes, November 25, 2025](https://learn.microsoft.com/en-us/copilot/microsoft-365/release-notes#november-25,-2025)).

**Agentic Retrieval (Preview)**
An evolution of traditional RAG where AI agents dynamically reason about search queries, plan multi-step retrieval strategies, and adaptively refine results before generation. Unlike static RAG patterns, agentic retrieval enables agents to decompose complex questions, filter sources intelligently, and combine multiple search modes (vector, hybrid, semantic) based on context ([Agentic retrieval in Azure AI Search](https://learn.microsoft.com/en-us/azure/search/agentic-retrieval-overview), updated 2026-01-16). *When to use:* Choose agentic retrieval for complex research scenarios requiring multi-hop reasoning; use traditional RAG for straightforward document lookup. See Decision Framework Q3.

**Agent Framework**
An open-source development kit for .NET and Python (v1.0 GA, April 2026) that unifies Semantic Kernel and AutoGen concepts, adding stateful workflows, multi-agent orchestration, multi-provider service connectors, and MCP support for production-grade AI solutions ([Microsoft Agent Framework](https://learn.microsoft.com/en-us/agent-framework/overview/agent-framework-overview); [v1.0 announcement](https://devblogs.microsoft.com/agent-framework/microsoft-agent-framework-version-1-0/), published 2026-04-03).

**Assistant (generic)**
A conversational experience that relies primarily on an LLM prompt without owning orchestration, tool calls, or state. Assistants can become agents when they add tools (including MCP), memory, or workflows.

**Agent Application**
A legacy Foundry publishing artifact, now deprecated. Current Foundry agents expose an endpoint and identity without promotion into this artifact. Migrate and retest each tool, RBAC, and channel path instead of assuming identity parity ([Agent Application migration](https://learn.microsoft.com/en-us/azure/foundry/agents/how-to/migrate-agent-applications), updated 2026-05-27).

For a custom application built with Microsoft Agent Framework, build and host the agent, then register it with Agent 365 using its existing Entra application registration or an agent identity blueprint, the recommended path for new agents. A blueprint defines permissions and authentication; each agent instance receives its own Entra Agent ID and service principal. Use agent-identity authentication for autonomous operations or on-behalf-of authentication for user-delegated access. Creating an AI teammate with a user-like Microsoft 365 identity, mailbox, OneDrive, and Teams presence currently requires participation in the Frontier program ([Get started with Agent 365 development](https://learn.microsoft.com/en-us/microsoft-agent-365/developer/get-started); [Agent 365 Identity](https://learn.microsoft.com/en-us/microsoft-agent-365/developer/identity)).

**Agent Skills**
Portable packages of instructions, scripts, and resources that give Agent Framework agents specialized capabilities and domain expertise. Skills follow an open specification and use progressive disclosure (advertise → load → read resources) to minimize context window usage while providing deep domain knowledge on demand ([Agent Skills](https://learn.microsoft.com/en-us/agent-framework/agents/skills), retrieved 2026-03-19).

**Microsoft Foundry (Azure)**
*See [Microsoft Foundry](#m).* The cloud-based implementation of the Microsoft Foundry ecosystem.

**Agent Control Specification (ACS) (Preview)**
The beta policy layer in the Agent Governance Toolkit for expressing runtime guardrails. It is not a GA platform feature or a managed control plane.

**Agent Governance Toolkit (Public Preview)**
Microsoft-origin, MIT-licensed open-source application middleware for runtime policy decisions and audit hooks inside the agent execution path. v4.1.0 is the latest formal release as of July 13, 2026; main v5 is unreleased, ACS is beta, and GA feature coverage is zero. APIs and configuration can change, and there is no managed-service SLA or Microsoft product support contract. Compose it with identity, registry, platform policy, monitoring, and evaluation controls ([Microsoft announcement](https://opensource.microsoft.com/blog/2026/04/02/introducing-the-agent-governance-toolkit-open-source-runtime-security-for-ai-agents/); [repository](https://github.com/microsoft/agent-governance-toolkit)).

**ASSERT**
Open-source evaluation framework for turning behavior specifications into executable tests for agents, including prompt-injection, tool-use, and policy-adherence scenarios. Use it as a pre-production evaluation pattern alongside conventional tests and red teaming, not as a managed service with SLA guarantees ([ASSERT](https://github.com/responsibleai/ASSERT)).

**Autopilot**
A new category of always-on agents introduced at Microsoft Build 2026. Autopilots work autonomously with their own Entra identity, acting on a user's behalf continuously without needing to be prompted each time. They stay active in the background, understand how work gets done across apps and systems, and take action within the permissions and policies the user and organization have set. Microsoft Scout is the first Autopilot agent. See [Introducing Microsoft Scout](https://www.microsoft.com/en-us/microsoft-365/blog/2026/06/02/introducing-microsoft-scout-your-always-on-personal-agent/) (published 2026-06-02).

## B

**BYOK (Bring Your Own Knowledge)**
Configuring Copilot Studio generative answers with knowledge sources such as SharePoint, Dataverse, connectors, files, and vetted web content so agents ground responses in governed enterprise data. Now includes an ungrounded responses toggle, Tenant Graph semantic search, and 3-level content moderation for finer grounding control ([Knowledge sources summary](https://learn.microsoft.com/en-us/microsoft-copilot-studio/knowledge-copilot-studio), updated 2026-04-03).

**BYOM (Bring Your Own Model)**
Connecting custom or fine-tuned language models to Microsoft AI platforms. The term has different meanings depending on context: **(1) AI Builder BYOM** - bring custom prompts/templates into Power Platform, **(2) Copilot Studio BYOM** - connect custom language models (e.g., Foundry deployments) to agent experiences, **(3) Microsoft Foundry BYOM** - deploy and manage fine-tuned models in the Foundry catalog ([Bring your own model for your prompts](https://learn.microsoft.com/en-us/ai-builder/byom-for-your-prompts), updated 2026-03-08). *When to use:* BYOM is appropriate when base models lack domain expertise, require specific tone/format, or must comply with specialized regulatory requirements. See [Feature Comparison]({{ '/docs/feature-comparison' | relative_url }}) for platform-specific capabilities.

**BXT Framework**
A Business, Experience, and Technology evaluation that scores strategic fit, user desirability, and technical feasibility to prioritize AI scenarios with the greatest impact and execution readiness ([Evaluate and Prioritize an AI Use Case with Business Envisioning](https://learn.microsoft.com/en-us/microsoft-cloud/dev/copilot/isv/business-envisioning), updated 2024-09-16).

## C

**Copilot (Microsoft 365)**
Tenant-aware AI experience embedded across Microsoft 365 apps, inheriting Graph security and compliance while allowing extensions via Declarative Agents or custom engine agents ([Microsoft 365 Copilot overview](https://learn.microsoft.com/en-us/microsoft-365-copilot/), retrieved 2026-03-25).

**Copilot vs. Agent**
"Copilot" describes the user-facing experience; "agent" describes the implementation pattern (planning, tools, memory). Many copilots are backed by agents, but a copilot can remain a simple assistant if no tools or state are attached.

**Copilot Search API (Preview, Graph `/beta`)**
Microsoft Graph `/beta` API that delivers hybrid semantic + lexical search over OneDrive content for custom engine agents, returning grounding for Copilot experiences while respecting M365 security trimming ([Microsoft 365 Copilot Search API overview](https://learn.microsoft.com/en-us/microsoft-365-copilot/extensibility/api/ai-services/search/overview), retrieved 2025-10-20).

**Copilot Cowork (Frontier Preview)**
Long-running, multi-step execution engine in Microsoft 365 Copilot that delegates complex tasks using Anthropic's agentic model grounded by Work IQ. Breaks requests into plans with visible checkpoints, human steering, and pause/resume capability. Produces coordinated outputs across Word, Excel, PowerPoint, and Outlook. Runs in a sandboxed cloud environment within M365 security and governance boundaries. Currently in Research Preview, available through the Frontier program in late March 2026 ([Copilot Cowork](https://www.microsoft.com/en-us/microsoft-365/blog/2026/03/09/copilot-cowork-a-new-way-of-getting-work-done/), published 2026-03-09).

**Computer Use Agent (CUA) (GA)**
Copilot Studio tool that lets agents automate web and desktop applications using vision-based AI models (OpenAI CUA, Anthropic Claude Sonnet 4.5) with virtual mouse and keyboard control. Includes stored credentials (internal or Azure Key Vault), URL/application access control allowlists, human supervision gates via email, Cloud PC pooling for scalable execution, and session replay audit logging. Billed at 5 Copilot Credits per step. Generally available across commercial Power Platform geographies (GA: May 13, 2026). Best for automating legacy systems or applications that lack APIs ([Computer Use](https://learn.microsoft.com/en-us/microsoft-copilot-studio/computer-use), updated 2026-04-03).

**Copy to Copilot Studio**
Rolling capability to clone Copilot agents into Copilot Studio; copies data sources and actions, but GPTs and custom actions must be reattached after import ([Copy an agent to Copilot Studio](https://learn.microsoft.com/en-us/microsoft-365-copilot/extensibility/copy-agent-to-copilot-studio), retrieved 2026-01-26).

**Custom Engine Agent**
Microsoft 365 Copilot extension built with pro-code SDKs (M365 Agents SDK, Bot Framework) that provides custom orchestration logic, external API integration, and advanced workflows beyond Declarative Agent constraints. Runs on your infrastructure or Azure services while appearing in M365 Copilot as a scoped experience ([Custom engine agents overview](https://learn.microsoft.com/en-us/microsoft-365-copilot/extensibility/overview-custom-engine-agent), updated 2026-01-13). *When to use:* Choose custom engine agents when you need complex orchestration, multi-step reasoning, external service integration, or full code control. Use [Declarative Agents](#declarative-agent) for simpler Microsoft 365 and Copilot Studio scenarios with platform-managed orchestration. Can also build custom engine agents in Copilot Studio using Topics and custom connectors. See Decision Framework Q2 for build approach guidance.

## D

**Declarative Agent**
{: #declarative-agent }
Microsoft 365 Copilot or Copilot Studio agent that packages instructions, knowledge, and optional actions inside a platform-managed experience that inherits the applicable Copilot and tenant controls. Exact authoring surfaces, data sources, actions, publishing targets, and licensing vary. It does not provide the custom orchestration ownership of a [Custom Engine Agent](#c) ([Declarative Agents for Microsoft 365 Copilot](https://learn.microsoft.com/en-us/microsoft-365-copilot/extensibility/overview-declarative-agent), updated 2025-12-01).

## E

**Entra Agent ID (Preview)**
Identity construct that extends Microsoft Entra controls to AI agents across five pillars: Conditional Access (adaptive policies with Microsoft Managed Policies blocking high-risk agents), ID Governance (entitlement management with required sponsors, time-bound access packages), ID Protection (anomaly detection with risk-based automatic remediation), Network Controls (web categorization, file restrictions, prompt injection blocking, threat intelligence filtering), and an Agent Identity Platform for developers (auto-discovery, A2A/MCP authorization, standard protocol authentication). Part of Microsoft Agent 365; Frontier preview ([What is Microsoft Entra Agent ID?](https://learn.microsoft.com/en-us/entra/agent-id/identity-professional/microsoft-entra-agent-identities-for-ai-agents), updated 2026-03-25).

## F

**Fabric Data Agent (Preview)**
Conversational analytics agent for Q&A over Fabric OneLake sources (lakehouse, warehouse, semantic models, KQL) that respects user permissions; designed for insights, not for orchestrating other agents ([Create a Fabric data agent](https://learn.microsoft.com/en-us/fabric/data-science/how-to-create-data-agent), updated 2025-09-17).

**Frontier (Copilot Frontier)**
Early access program for experimental and preview Copilot features across web apps, desktop apps, and agents. Organizations enable access in the Microsoft 365 admin center under **Copilot** > **Settings** > **User access** > **Copilot Frontier**; by default, no users have access ([Manage Microsoft 365 Copilot scenarios in the Microsoft 365 admin center](https://learn.microsoft.com/en-us/copilot/microsoft-365/microsoft-365-copilot-page#user-access), retrieved 2026-03-16).

**Foundry Local**
A component of Microsoft Foundry for running selected models locally on supported devices, enabling offline inference, lower latency, and reduced data egress. Availability varies by platform and model, so validate current Microsoft Learn guidance before production use ([Foundry Local overview](https://learn.microsoft.com/en-us/azure/foundry-local/what-is-foundry-local), retrieved 2026-06-08).

**Foundry Local on Azure Local (Preview)**
Edge deployment path for running selected Foundry Local capabilities in customer-controlled Azure Local environments. Use it for sovereign, disconnected, or site-local workloads that need inference near the data boundary ([Foundry Local on Azure Local](https://learn.microsoft.com/en-us/azure/azure-sovereign-clouds/private/foundry-local/overview), retrieved 2026-06-08).

**Fireworks Models (Preview)**
Third-party model provider available on Microsoft Foundry, offering additional model options through the Foundry model catalog. See [Fireworks models on Microsoft Foundry](https://learn.microsoft.com/en-us/azure/foundry/how-to/fireworks/enable-fireworks-models).

**Foundry Agent Service**
An **optional** managed PaaS within Microsoft Foundry for building, deploying, and scaling agents. Its Responses API gives hosted or external code one endpoint for Foundry models and platform tools. The managed runtime provides conversations, tool calls, session state, versioning, stable endpoints, and autoscaling. Its capabilities include built-in and custom tools such as file search, web search, code interpreter, memory, MCP, and custom functions; Entra identity, OBO authentication, RBAC, content filters, private networking, and BYO Azure resources; and tracing, metrics, Application Insights, evaluation, and publishing to Teams, M365 Copilot, and Entra Agent Registry.

The parent service is GA, while agent types, A2A directions, tools, SDKs, and publishing paths have independent statuses. Prompt Agents are GA; Hosted Agent surfaces have mixed maturity and require the [Hosted Agent Constraint Card]({{ '/docs/technologies#the-hosted-agent-constraint-card' | relative_url }}) review. **Foundry Workflows: Retiring from Preview without a GA path on December 1, 2026.** Use Agent Service when its managed runtime, endpoint, scaling, identity, and observability fit the workload. Existing Agent Framework or custom code can call the Responses API from another host without creating an Agent Service resource ([Foundry Agent Service overview](https://learn.microsoft.com/en-us/azure/foundry/agents/overview), updated 2026-07-09).

**Foundry IQ (Partial GA)**
Managed knowledge layer within Microsoft Foundry that provides agents with permission-aware, citation-backed responses grounded in enterprise data. A knowledge base groups one or more knowledge sources (Azure Blob Storage, SharePoint, OneLake, web via Bing) under a single MCP endpoint, with automatic chunking, vector embedding, ACL synchronization, and Purview sensitivity label enforcement. Agents connect via MCP tool calls. **Status note:** Core knowledge source types and the `2026-04-01` REST API are GA; answer synthesis, multi-turn retrieval, non-minimal reasoning effort, portal experience, and additional source types remain Preview. Treat as Preview for production planning unless your workload uses only GA-surface features. Foundry IQ is standalone but complements Work IQ (M365 collaboration context) and Fabric IQ (analytics context) ([Foundry IQ overview](https://learn.microsoft.com/en-us/azure/foundry/agents/concepts/what-is-foundry-iq), retrieved 2026-03-19).

**Content Understanding (GA)**
Multimodal AI service in Foundry Tools that extracts semantic content from documents, images, audio, and video files. Provides prebuilt analyzers (RAG, domain-specific, content extraction), custom analyzers, and GA SDKs for Python, .NET, Java, and JavaScript/TypeScript targeting API version 2025-11-01. RAG analyzers (`prebuilt-documentSearch`, `prebuilt-videoSearch`, `prebuilt-audioSearch`, `prebuilt-imageSearch`) are optimized for retrieval-augmented generation scenarios ([Azure AI Content Understanding](https://learn.microsoft.com/en-us/azure/ai-services/content-understanding/whats-new), retrieved 2026-03-19). **Note:** Content Understanding is not available in the new Foundry portal at GA; use the Foundry (classic) portal for Content Understanding workloads.

## G

**Graph Connector**
Copilot connector that ingests external content into Microsoft Graph’s semantic index so Copilot and Microsoft Search can ground answers in authenticated enterprise data, with semantic indexing and inline results requirements managed by admins ([Microsoft 365 Copilot connectors overview](https://learn.microsoft.com/en-us/microsoft-365-copilot/extensibility/overview-copilot-connector), updated 2025-07-21).

## H

**Hosted Agent**
A code-based, containerized Python or C# agent on Foundry Agent Service. You can use Microsoft Agent Framework, LangGraph, Semantic Kernel, another framework, or custom code. You own orchestration and runtime behavior; Foundry manages deployment, a dedicated endpoint and Entra agent identity, per-session compute and persistent files, scale-to-zero and state restoration, immutable versions and weighted rollouts, lifecycle, and Application Insights/OpenTelemetry observability. Hosted Agents can expose Responses, arbitrary-JSON Invocations, WebSocket, Activity, and Preview A2A protocols. Foundry-managed tools are consumed through a Toolbox MCP endpoint rather than attached directly to the agent definition.

Each session runs in a **VM-isolated sandbox**, and session IDs drive allocation, so applications map identities or conversations to sessions. Choose this path when you need that isolation, custom protocols, persistent session state, and Foundry-managed operations. Review the complete [Hosted Agent Constraint Card]({{ '/docs/technologies#the-hosted-agent-constraint-card' | relative_url }}) for compute sizes, lifecycle, scale, revisions, BYO-VNet prerequisites, regions, identity, storage, cost, and mixed feature maturity. Use Azure Container Apps or AKS when you need broader scale or direct infrastructure control ([Hosted agents](https://learn.microsoft.com/en-us/azure/foundry/agents/concepts/hosted-agents), updated 2026-07-13).

## M

**MCP (Model Context Protocol)**
Open protocol for tools and resources that lets agents connect to external systems in a structured, stateful, and secure manner; supported by Microsoft via MCP servers (for example, Azure MCP Server) and client integrations ([What is the Azure MCP Server (Preview)?](https://learn.microsoft.com/en-us/azure/developer/azure-mcp-server/), retrieved 2026-02-18). Copilot Studio can both consume and produce MCP servers (custom MCP server authoring, Preview → Apr GA).

**Model Router (GA)**
Foundry capability that routes requests across eligible chat models based on routing profiles and optional model subsets, with automatic failover when a routed model experiences instability. The supported model list changes frequently, so treat the [model router supported models table](https://learn.microsoft.com/en-us/azure/foundry/openai/concepts/model-router#supported-models) as the source of truth instead of hard-coding model names in this framework ([What's new in model router in Microsoft Foundry Models?](https://learn.microsoft.com/en-us/azure/ai-foundry/foundry-models/whats-new-model-router), updated 2026-03-24).

**Microsoft Discovery**
Enterprise Azure service for scientific research and development workflows, including hypothesis generation, simulation orchestration, experimentation, and long-term knowledge capture. Microsoft Discovery is a specialized R&D platform, not a general enterprise agent selection pattern. The Microsoft Discovery app is a separate desktop experience in Preview ([What is Microsoft Discovery?](https://learn.microsoft.com/en-us/azure/microsoft-discovery/overview-what-is-microsoft-discovery), retrieved 2026-06-08; [Discovery and Discovery app](https://learn.microsoft.com/en-us/azure/microsoft-discovery/concept-discovery-and-discovery-app), retrieved 2026-06-08).

**Microsoft Agent 365 (GA)**
Governance layer that assigns each agent a Microsoft Entra Agent ID for identity, lifecycle, and access management, with centralized observability in the M365 admin center. GA at $15/user/month (bundled in M365 E7 at $99/user/month with Copilot + E5 security). The Agent 365 SDK and CLI remain in Preview. Developers extend agents using the SDK and CLI for Entra-backed identity, notifications, and governed MCP servers ([Overview of Microsoft Agent 365](https://learn.microsoft.com/en-us/microsoft-agent-365/overview), updated 2026-03-13; [Agent 365 SDK (Preview)](https://learn.microsoft.com/en-us/microsoft-agent-365/developer/agent-365-sdk), retrieved 2026-01-09; [Agent 365 CLI (Preview)](https://learn.microsoft.com/en-us/microsoft-agent-365/developer/agent-365-cli), retrieved 2026-01-13).

**Microsoft 365 E7 (The Frontier Suite)**
Enterprise bundle announced March 2026 at $99/user/month (GA May 1, 2026) that unifies M365 Copilot, Agent 365 ($15/user/month standalone), Microsoft Entra Suite, and M365 E5 with advanced Defender, Entra, Intune, and Purview security. Designed for organizations scaling AI across the workforce with unified productivity, identity, and security. Available with and without Teams ([Wave 3 announcement](https://www.microsoft.com/en-us/microsoft-365/blog/2026/03/09/powering-frontier-transformation-with-copilot-and-agents/), published 2026-03-09).

**Microsoft Foundry**
The unified brand for Microsoft's AI development and management platforms, spanning Cloud (Microsoft Foundry (Azure)), Client (Windows AI Foundry), and Edge (Foundry Local). It provides a consistent toolchain for model selection, agent orchestration, and observability across all environments ([Microsoft Foundry overview](https://news.microsoft.com/build-2025-book-of-news/), updated 2025-05-19). The new Foundry portal reached general availability in March 2026 for core scenarios (model discovery, agent development, evaluations, fine-tuning, red teaming, quota management). **Platform note:** Microsoft Foundry (Azure) is available in two versions: **Classic Foundry** and **Next Gen Foundry** (same platform capabilities, different API name under the hood). Documentation uses `?view=foundry-classic` or `?view=foundry-nextgen` parameters. **Service distinction:** Microsoft Foundry is the PLATFORM (portal, model catalog, prompt flow, evaluations). [Foundry Agent Service](#f) is an OPTIONAL managed runtime within the platform for hosting agents. You can use Foundry without Agent Service by deploying custom code. See Decision Framework Q4 for platform vs service guidance.

**Microsoft IQ**
Microsoft's enterprise intelligence layer for agents and copilots, made up of four capabilities: Foundry IQ for enterprise knowledge, Work IQ for work context, Fabric IQ for business semantics and analytics, and Web IQ for public web grounding ([Microsoft IQ overview](https://learn.microsoft.com/en-us/microsoft-iq/), retrieved 2026-06-08).

**Microsoft Scout (Experimental)**
Microsoft's first Autopilot agent: an always-on personal agent that works autonomously in the background to coordinate work across Teams, Outlook, OneDrive, and SharePoint, powered by Work IQ and OpenClaw open-source technology. Available as an experimental release through the Frontier program, requiring Frontier enrollment, Intune policy configuration, and a GitHub Copilot license. See [Technologies: Microsoft Scout]({{ '/docs/technologies' | relative_url }}) for full capability details and access requirements.

**MXC (Microsoft Execution Containers) (Early Preview)**
Policy-driven local containment for agent tools and code execution on Windows. MXC lets a host application describe what an agent can access, then relies on operating-system primitives to enforce those boundaries at runtime. Relevant to local-agent scenarios where tool execution must be sandboxed on the user's machine. Early Preview; treat as a design signal, not a production security boundary, until Microsoft Learn publishes stable guidance ([Windows platform security for AI agents](https://blogs.windows.com/windowsdeveloper/2026/06/02/windows-platform-security-for-ai-agents/)).

**Multi-Agent Orchestration**
Coordination among multiple agents. Keep **direct delegation** (A2A), **hierarchical handoff**, and **deterministic orchestration** separate: they solve different control problems and carry different lifecycle labels. Agent Framework provides GA code-first orchestration patterns; incoming Foundry A2A endpoints are Preview. A single agent triggered by an event is not multi-agent orchestration ([Agent Framework orchestration patterns](https://learn.microsoft.com/en-us/agent-framework/user-guide/workflows/orchestrations/overview)).

## N

**NLWeb**
An open project where web endpoints act as MCP servers, allowing websites to provide conversational interfaces and be easily discoverable by AI agents ([NLWeb](https://news.microsoft.com/build-2025-book-of-news/), updated 2025-05-19).

## O

**Orchestration**
Coordinating agents, workflows, and function calls to execute multi-step solutions, often implemented with Agent Framework workflows that provide routing, state management, and human-in-the-loop checkpoints ([Microsoft Agent Framework](https://learn.microsoft.com/en-us/agent-framework/overview/agent-framework-overview), updated 2026-02-20).

## P

**Planetary Computer Pro**
A managed platform for geospatial insights that allows customers to ingest, manage, and analyze private geospatial data within Azure, integrating with Fabric and third-party tools ([Microsoft Planetary Computer Pro](https://news.microsoft.com/build-2025-book-of-news/), updated 2025-05-19).

**Plugin**
A term largely superseded by **Tool** or **MCP Server**. Originally referred to extensions for ChatGPT/Copilot; the ecosystem has shifted toward the Model Context Protocol (MCP) for standardized interoperability.

**Prompt Flow**
Microsoft Foundry (Azure)'s visual DAG environment for orchestrating LLMs, prompts, and Python tools, comparing prompt variants, collaborating across teams, and deploying flows as managed endpoints ([Prompt flow in Microsoft Foundry portal (classic)](https://learn.microsoft.com/en-us/azure/foundry-classic/concepts/prompt-flow), updated 2026-02-27). **Note:** Prompt Flow is available only in the Foundry (classic) portal. For new projects, use [Agent Framework Workflows](https://learn.microsoft.com/en-us/agent-framework/user-guide/workflows/overview).

**Prompt Agent**
{: #prompt-agent }
The configuration-defined agent type in **Microsoft Foundry Agent Service (GA)**. It defines instructions, model, and supported tools while Agent Service owns the runtime. Microsoft supports production agents that fit this managed model, especially when custom orchestration code is unnecessary.

**Framework recommendation:** favor Prompt Agents for prototypes, sandboxes, internal tools, and low-impact production. The configuration model accelerates delivery by limiting runtime ownership: teams cannot add arbitrary orchestration code or define the hosting topology, and capacity remains bounded by service quotas plus model, tool, and regional availability. Component maturity also varies across tools, SDKs, protocols, and publishing paths. These boundaries reduce the controls available for custom scaling, failover, rollback, deterministic middleware, and workloads whose RTO/RPO must be implemented and evidenced by the application team. For most pro-code production agents with those requirements, use **Microsoft Agent Framework** on Azure Container Apps or AKS so the team owns orchestration, deployment topology, resilience, and observability. Use a [Hosted Agent](#h) only when its isolation model and full constraint card fit. This recommendation is the framework's risk posture, not a Microsoft support restriction ([Foundry agent types](https://learn.microsoft.com/en-us/azure/foundry/agents/overview#agent-types); [Agent Service limits, quotas, and regions](https://learn.microsoft.com/en-us/azure/foundry/agents/concepts/limits-quotas-regions); [Microsoft Agent Framework](https://learn.microsoft.com/en-us/agent-framework/overview/agent-framework-overview)).

## R

**RAG (Retrieval Augmented Generation)**
A design pattern that pairs Azure AI Search retrieval with LLMs, now optimized by agentic retrieval that plans subqueries, runs hybrid search with semantic ranking, and returns structured grounding for high-fidelity answers ([Retrieval Augmented Generation (RAG) in Azure AI Search](https://learn.microsoft.com/en-us/azure/search/retrieval-augmented-generation-overview), updated 2026-01-15). *When to use:* Choose RAG when agents need current or proprietary data not present in the model's training set. RAG is preferred over fine-tuning when data changes frequently or when you need explicit source citations for compliance. For complex multi-hop reasoning, consider [Agentic Retrieval](#a) instead. See Decision Framework Q3 for data strategy guidance.

**Rayfin (Preview)**
Open-source SDK and CLI for defining and deploying a managed application backend on Microsoft Fabric. Rayfin lets developers or coding agents describe backend components such as databases, business logic, APIs, identity, and access policies in code, then deploy them onto Fabric so app data lands in OneLake under Fabric governance. Use it when building AI-enabled applications that need a production backend close to governed Fabric data ([Rayfin product page](https://www.microsoft.com/en-us/microsoft-fabric/features/rayfin), retrieved 2026-06-08).

**Researcher Agent (GA)**
Pre-installed agent in Microsoft 365 Copilot Chat that performs multi-step research across web and work data sources. Admins can connect specialized Declarative Agents to Researcher for domain-specific task delegation, creating multi-agent workflows within the M365 trust boundary. GA since July 2025 ([Researcher and Analyst GA](https://www.microsoft.com/microsoft-365/blog/2025/06/02/researcher-and-analyst-are-now-generally-available-in-microsoft-365-copilot/), published 2025-06-02).

**Responses API**
The modern API primitive that replaces the Assistants API in Microsoft Foundry. Uses Conversations (instead of Threads) and Response Items (instead of Runs) with stateful context retained automatically across calls. Supports background mode for long-running tools, durable streams for disconnect/reconnect, and invocation through current agent endpoints. The Assistants API is deprecated and sunsets August 26, 2026 ([Use the Azure OpenAI Responses API](https://learn.microsoft.com/en-us/azure/foundry/openai/how-to/responses), retrieved 2026-03-19; [Migration guide](https://learn.microsoft.com/en-us/azure/foundry/agents/how-to/migrate), retrieved 2026-03-19).

## S

**Skills/Tools**
Function tools, hosted services, or built-in capabilities that agents attach at construction or per run, enabling actions like web search, file retrieval, or code execution within Agent Framework ChatClientAgent and ChatAgent implementations ([Agent Tools](https://learn.microsoft.com/en-us/agent-framework/user-guide/agents/agent-tools), updated 2026-02-13).

## W

**Web IQ (Limited Access)**
Microsoft IQ capability for grounding agents in fresh public web information. Web IQ has no dedicated Microsoft Learn concept page as of June 2026 and is available through a Limited Access program, so do not treat it as a GA dependency until Microsoft publishes broader availability guidance ([Microsoft IQ overview](https://learn.microsoft.com/en-us/microsoft-iq/), retrieved 2026-06-08; [Web IQ product page](https://www.microsoft.com/en-us/WebIQ), retrieved 2026-06-08).

**Work IQ (Preview)**
The intelligence layer that powers Microsoft 365 Copilot, now available to agents through Preview MCP tools and Preview APIs. Work IQ provides Microsoft 365 work context, including files, emails, meetings, chats, people, and business signals, while respecting tenant permissions and policies. Requires a Microsoft 365 Copilot license as of the June 2026 Learn documentation ([Work IQ overview](https://learn.microsoft.com/en-us/microsoft-365/copilot/extensibility/work-iq/), retrieved 2026-06-08; [Work IQ API overview](https://learn.microsoft.com/en-us/microsoft-365/copilot/extensibility/work-iq/api-overview), retrieved 2026-06-08).

**Foundry Workflows (Retiring)**
A legacy Foundry Workflow definition. **Retiring from Preview without a GA path on December 1, 2026.** Do not use for new solutions. Map existing code-first orchestration to Agent Framework, visual business processes to Logic Apps, direct delegation to A2A, or exported YAML to Hosted Agents only when the [complete constraint card]({{ '/docs/technologies#the-hosted-agent-constraint-card' | relative_url }}) fits ([retirement and migration guidance](https://learn.microsoft.com/en-us/azure/foundry/agents/concepts/workflow)).

---

**Back to:** [Home]({{ '/' | relative_url }})
