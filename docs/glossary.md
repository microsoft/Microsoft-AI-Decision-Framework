---
layout: default
title: Glossary
nav_order: 12
description: "Key terms and definitions for Microsoft AI technologies"
---

# Glossary
{: .no_toc }

Quick reference for key terms used throughout the Microsoft AI Decision Framework. For detailed documentation links and resources, see [Resources]({{ '/docs/resources' | relative_url }}). For methodology and decision guidance, see [Decision Framework]({{ '/docs/decision-framework' | relative_url }}).

{: .note }
> **Last validated:** January 28, 2026. Microsoft's AI capabilities evolve rapidly - always verify with [official sources]({{ '/docs/resources' | relative_url }}) for production decisions.

---

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## A

**Agent**  
An AI system that uses an LLM to interpret user inputs, plan, call tools or MCP servers, and return responses, with optional threads, memory, and middleware to enrich interactions ([Microsoft Agent Framework](https://learn.microsoft.com/en-us/agent-framework/overview/agent-framework-overview), updated 2025-10-01).

**Agent2Agent (A2A)**  
A protocol enabling secure, peer-to-peer communication between AI agents, allowing them to discover peers, negotiate tasks, and collaborate without centralized intermediaries ([Advanced development tools for Teams](https://news.microsoft.com/build-2025-book-of-news/), updated 2025-05-19).

**Agent Registry (Preview)**  
Central inventory in the M365 admin center to publish, activate, deploy, pin, block, remove, delete, transfer ownership, or export agents; enforces governance and visibility across Copilot and custom agents ([Agent Registry](https://learn.microsoft.com/en-us/microsoft-365/admin/manage/agent-registry?view=o365-worldwide#admin-actions-to-manage-agents), retrieved 2026-01-23).

**Agent Settings templates (Preview)**  
Reusable configuration templates in the M365 admin center that let admins apply consistent policies to multiple agents (e.g., enabled channels, publishing scope, owners), managed alongside Agent Registry entries ([Microsoft 365 Copilot release notes — November 24, 2025](https://learn.microsoft.com/en-us/copilot/microsoft-365/release-notes#november-24,-2025)).

**Agentic Retrieval (Preview)**  
An evolution of traditional RAG where AI agents dynamically reason about search queries, plan multi-step retrieval strategies, and adaptively refine results before generation. Unlike static RAG patterns, agentic retrieval enables agents to decompose complex questions, filter sources intelligently, and combine multiple search modes (vector, hybrid, semantic) based on context ([Agentic retrieval in Azure AI Search](https://learn.microsoft.com/en-us/azure/search/agentic-retrieval-overview), updated 2026-01-16). *When to use:* Choose agentic retrieval for complex research scenarios requiring multi-hop reasoning; use traditional RAG for straightforward document lookup. See Decision Framework Q3.

**Agent Framework**  
An open-source development kit for .NET and Python that unifies Semantic Kernel and AutoGen concepts, adding stateful workflows and multi-agent orchestration for production-grade AI solutions ([Microsoft Agent Framework](https://learn.microsoft.com/en-us/agent-framework/overview/agent-framework-overview), updated 2025-10-01).

**Assistant (generic)**  
A conversational experience that relies primarily on an LLM prompt without owning orchestration, tool calls, or state. Assistants can become agents when they add tools (including MCP), memory, or workflows.

**Microsoft Foundry (Azure)**  
*See [Microsoft Foundry](#m).* The cloud-based implementation of the Microsoft Foundry ecosystem.

## B

**BYOK (Bring Your Own Knowledge)**  
Configuring Copilot Studio generative answers with knowledge sources such as SharePoint, Dataverse, connectors, files, and vetted web content so agents ground responses in governed enterprise data ([Knowledge sources summary](https://learn.microsoft.com/en-us/microsoft-copilot-studio/knowledge-copilot-studio), updated 2026-01-13).

**BYOM (Bring Your Own Model)**  
Connecting custom or fine-tuned language models to Microsoft AI platforms. The term has different meanings depending on context: **(1) AI Builder BYOM** - bring custom prompts/templates into Power Platform, **(2) Copilot Studio BYOM** - connect custom language models (e.g., Foundry deployments) to agent experiences, **(3) Microsoft Foundry BYOM** - deploy and manage fine-tuned models in the Foundry catalog ([Bring your own model for your prompts](https://learn.microsoft.com/en-us/ai-builder/byom-for-your-prompts), updated 2025-11-07). *When to use:* BYOM is appropriate when base models lack domain expertise, require specific tone/format, or must comply with specialized regulatory requirements. See [Feature Comparison]({{ '/docs/feature-comparison' | relative_url }}) for platform-specific capabilities.

**BXT Framework**  
A Business, Experience, and Technology evaluation that scores strategic fit, user desirability, and technical feasibility to prioritize AI scenarios with the greatest impact and execution readiness ([Evaluate and Prioritize an AI Use Case with Business Envisioning](https://learn.microsoft.com/en-us/microsoft-cloud/dev/copilot/isv/business-envisioning), updated 2024-09-16).

## C

**Copilot (Microsoft 365)**  
Tenant-aware AI experience embedded across Microsoft 365 apps, inheriting Graph security and compliance while allowing extensions via declarative or custom engine agents ([Microsoft 365 Copilot overview](https://learn.microsoft.com/en-us/microsoft-365-copilot/), retrieved 2025-05-20).

**Copilot vs. Agent**  
"Copilot" describes the user-facing experience; "agent" describes the implementation pattern (planning, tools, memory). Many copilots are backed by agents, but a copilot can remain a simple assistant if no tools or state are attached.

**Copilot Search API (Preview, Graph `/beta`)**  
Microsoft Graph `/beta` API that delivers hybrid semantic + lexical search over OneDrive content for custom engine agents, returning grounding for Copilot experiences while respecting M365 security trimming ([Microsoft 365 Copilot Search API overview](https://learn.microsoft.com/en-us/microsoft-365-copilot/extensibility/api/ai-services/search/overview), retrieved 2025-10-20).

**Copy to Copilot Studio**  
Rolling capability to clone Copilot agents into Copilot Studio; copies data sources and actions, but GPTs and custom actions must be reattached after import ([Copy an agent to Copilot Studio](https://learn.microsoft.com/en-us/microsoft-365-copilot/extensibility/copy-agent-to-copilot-studio), retrieved 2026-01-26).

**Custom Engine Agent**  
Microsoft 365 Copilot extension built with pro-code SDKs (M365 Agents SDK, Bot Framework) that provides custom orchestration logic, external API integration, and advanced workflows beyond declarative agent capabilities. Runs on your infrastructure or Azure services while appearing in M365 Copilot as a scoped experience ([Custom engine agents overview](https://learn.microsoft.com/en-us/microsoft-365-copilot/extensibility/overview-custom-engine-agent), updated 2026-01-13). *When to use:* Choose custom engine agents when you need complex orchestration, multi-step reasoning, external service integration, or full code control. Use [Declarative Agents](#d) for simpler scenarios with M365 data sources. Can also build custom engine agents in Copilot Studio using Topics and custom connectors. See Decision Framework Q2 for build approach guidance.

## D

**Declarative Agent**  
Microsoft 365 Copilot extension that packages instructions, knowledge, and optional plugins in a manifest-driven app so organizations deliver scoped Copilot experiences while inheriting Copilot security and governance controls ([Declarative agents for Microsoft 365 Copilot overview](https://learn.microsoft.com/en-us/microsoft-365-copilot/extensibility/overview-declarative-agent), updated 2025-12-01). *When to use:* Choose declarative agents when extending M365 Copilot with low-code customization, leveraging existing M365 data sources (SharePoint, Graph), and requiring automatic security inheritance. For custom orchestration logic or external APIs, consider [Custom Engine Agents](#c) instead. See Decision Framework Q2 for build style guidance.

## E

**Entra Agent ID (Preview)**  
Identity construct that extends Microsoft Entra controls (Conditional Access, identity protection, governance, network controls) to AI agents and agent users, providing unique identifiers and policy enforcement. Microsoft Entra Agent ID is part of Microsoft Agent 365 and is in Frontier preview ([What is Microsoft Entra Agent ID?](https://learn.microsoft.com/en-us/entra/agent-id/identity-professional/microsoft-entra-agent-identities-for-ai-agents), updated 2025-11-10).

## F

**Fabric Data Agent (Preview)**  
Conversational analytics agent for Q&A over Fabric OneLake sources (lakehouse, warehouse, semantic models, KQL) that respects user permissions; designed for insights, not for orchestrating other agents ([Create a Fabric data agent](https://learn.microsoft.com/en-us/fabric/data-science/how-to-create-data-agent), updated 2025-09-17).

**Frontier (Copilot Frontier)**  
Early access program for experimental and preview Copilot features across web apps, desktop apps, and agents. Organizations enable access in the Microsoft 365 admin center under **Copilot** > **Settings** > **User access** > **Copilot Frontier**; by default, no users have access ([Manage Microsoft 365 Copilot scenarios in the Microsoft 365 admin center](https://learn.microsoft.com/en-us/copilot/microsoft-365/microsoft-365-copilot-page#user-access), retrieved 2025-11-18).

**Foundry Local**  
A component of Windows AI Foundry that brings Microsoft Foundry (Azure) models and capabilities to local devices (Windows 11, MacOS), enabling offline inferencing and hybrid AI scenarios ([Foundry Local overview](https://news.microsoft.com/build-2025-book-of-news/), updated 2025-05-19).

**Foundry Agent Service**  
An **optional** managed PaaS runtime WITHIN Microsoft Foundry (Azure) that hosts and orchestrates agents with built-in infrastructure for compute, memory, and thread state. Provides 15+ built-in tools, connected agents (multi-agent systems), BYO storage (Cosmos DB, AI Search, Blob), RBAC, VNet isolation, and Azure Monitor tracing. GA since May 2025. **Key distinction:** You can use Microsoft Foundry WITHOUT Agent Service by deploying custom code with Agent Framework, LangChain, or other SDKs ([Foundry Agent Service Overview](https://learn.microsoft.com/en-us/azure/ai-services/agents/overview), updated 2026-01-21). *When to use:* Choose Agent Service for managed hosting with built-in tools and orchestration. Choose self-hosted deployment when you need full infrastructure control or have existing Azure landing zones. See [Hosted Agent](#h) for runtime details and Decision Framework Q4 for platform guidance.

## G

**Graph Connector**  
Copilot connector that ingests external content into Microsoft Graph’s semantic index so Copilot and Microsoft Search can ground answers in authenticated enterprise data, with semantic indexing and inline results requirements managed by admins ([Microsoft 365 Copilot connectors overview](https://learn.microsoft.com/en-us/microsoft-365-copilot/extensibility/overview-copilot-connector), updated 2025-07-21).

## H

**Hosted Agent**  
An AI agent deployed to and running within the [Foundry Agent Service](#f) managed runtime, where Microsoft handles infrastructure (compute, memory, thread state) rather than self-hosted deployment in your own infrastructure. Hosted agents benefit from automatic managed identity integration (no secrets for downstream Azure service calls), Azure Monitor tracing, event triggers via Logic Apps, and VS Code debugging with the Foundry extension ([Foundry Agent Service RBAC + Managed Identity](https://learn.microsoft.com/en-us/azure/ai-foundry/how-to/develop/vs-code-agents), updated 2025-10-22). *Deployment alternative:* Self-hosted agents using Agent Framework, LangChain, or custom code in Azure Container Apps, AKS, or Azure Functions. See Decision Framework Q4 and Implementation Patterns for deployment strategy guidance.

## M

**MCP (Model Context Protocol)**  
Open protocol for tools and resources that lets agents connect to external systems in a structured, stateful, and secure manner; supported by Microsoft via MCP servers (for example, Azure MCP Server) and client integrations ([What is the Azure MCP Server (Preview)?](https://learn.microsoft.com/en-us/azure/developer/azure-mcp-server/), retrieved 2025-11-17).

**Model Router (GA)**  
Foundry model that selects among multiple underlying chat models based on routing profiles (quality vs. cost) and model subsets; GA version `2025-11-18` adds Anthropic models and supports reasoning_effort ([What's new in model router in Microsoft Foundry Models?](https://learn.microsoft.com/en-us/azure/ai-foundry/foundry-models/whats-new-model-router), updated 2025-11-06).

**Microsoft Discovery**  
An enterprise agentic platform designed to accelerate scientific research and discovery through hypothesis formulation, candidate generation, and simulation orchestration ([Microsoft Discovery](https://news.microsoft.com/build-2025-book-of-news/), updated 2025-05-19).

**Microsoft Agent 365 (Frontier Preview)**  
Frontier-preview governance layer that assigns each agent a Microsoft Entra Agent ID for identity, lifecycle, and access management, with centralized observability in the Microsoft 365 admin center. Developers extend agents using the Agent 365 SDK, and the Agent 365 CLI supports deployment and management workflows in preview ([Overview of Microsoft Agent 365](https://learn.microsoft.com/en-us/microsoft-agent-365/overview), retrieved 2025-12-15; [Agent 365 SDK](https://learn.microsoft.com/en-us/microsoft-agent-365/developer/agent-365-sdk), retrieved 2026-01-09; [Agent 365 CLI](https://learn.microsoft.com/en-us/microsoft-agent-365/developer/agent-365-cli), retrieved 2026-01-13).

**Microsoft Foundry**  
The unified brand for Microsoft's AI development and management platforms, spanning Cloud (Microsoft Foundry (Azure)), Client (Windows AI Foundry), and Edge (Foundry Local). It provides a consistent toolchain for model selection, agent orchestration, and observability across all environments ([Microsoft Foundry overview](https://news.microsoft.com/build-2025-book-of-news/), updated 2025-05-19). **Platform note:** Microsoft Foundry (Azure) is available in two versions: **Classic Foundry** and **Next Gen Foundry** (same platform capabilities, different API name under the hood). Documentation uses `?view=foundry-classic` or `?view=foundry-nextgen` parameters. **Service distinction:** Microsoft Foundry is the PLATFORM (portal, model catalog, prompt flow, evaluations). [Foundry Agent Service](#f) is an OPTIONAL managed runtime within the platform for hosting agents. You can use Foundry without Agent Service by deploying custom code. See Decision Framework Q4 for platform vs service guidance.

**Multi-Agent Orchestration**  
Coordination patterns for multiple AI agents working together to solve complex problems. Microsoft supports three primary patterns: (1) **Connected Agents** - independent agents collaborating peer-to-peer through handoffs and shared context, (2) **Sub-Agents** - parent agents delegating specialized tasks to child agents in a hierarchy, and (3) **Agent Workflows** - sequential or concurrent agent execution managed by orchestration engines. Implemented through Agent Framework workflows, Foundry Agent Service, or custom orchestration logic ([Agent Framework Orchestration Patterns](https://learn.microsoft.com/en-us/agent-framework/user-guide/workflows/orchestrations/overview), updated 2025-09-12). *Cross-reference:* See [Visual Framework Diagram 7]({{ '/docs/visual-framework' | relative_url }}) for multi-agent architecture patterns.

## N

**NLWeb**  
An open project where web endpoints act as MCP servers, allowing websites to provide conversational interfaces and be easily discoverable by AI agents ([NLWeb](https://news.microsoft.com/build-2025-book-of-news/), updated 2025-05-19).

## O

**Orchestration**  
Coordinating agents, workflows, and function calls to execute multi-step solutions, often implemented with Agent Framework workflows that provide routing, state management, and human-in-the-loop checkpoints ([Microsoft Agent Framework](https://learn.microsoft.com/en-us/agent-framework/overview/agent-framework-overview), updated 2025-10-01).

## P

**Planetary Computer Pro**  
A managed platform for geospatial insights that allows customers to ingest, manage, and analyze private geospatial data within Azure, integrating with Fabric and third-party tools ([Microsoft Planetary Computer Pro](https://news.microsoft.com/build-2025-book-of-news/), updated 2025-05-19).

**Plugin**  
A term largely superseded by **Tool** or **MCP Server**. Originally referred to extensions for ChatGPT/Copilot; the ecosystem has shifted toward the Model Context Protocol (MCP) for standardized interoperability.

**Prompt Flow**  
Microsoft Foundry (Azure)’s visual DAG environment for orchestrating LLMs, prompts, and Python tools, comparing prompt variants, collaborating across teams, and deploying flows as managed endpoints ([Prompt flow in Microsoft Foundry portal](https://learn.microsoft.com/en-us/azure/ai-foundry/concepts/prompt-flow), updated 2025-06-30).

## R

**RAG (Retrieval Augmented Generation)**  
A design pattern that pairs Azure AI Search retrieval with LLMs—now optimized by agentic retrieval that plans subqueries, runs hybrid search with semantic ranking, and returns structured grounding for high-fidelity answers ([Retrieval Augmented Generation (RAG) in Azure AI Search](https://learn.microsoft.com/en-us/azure/search/retrieval-augmented-generation-overview), updated 2026-01-15). *When to use:* Choose RAG when agents need current or proprietary data not present in the model's training set. RAG is preferred over fine-tuning when data changes frequently or when you need explicit source citations for compliance. For complex multi-hop reasoning, consider [Agentic Retrieval](#a) instead. See Decision Framework Q3 for data strategy guidance.

## S

**Skills/Tools**  
Function tools, hosted services, or built-in capabilities that agents attach at construction or per run—enabling actions like web search, file retrieval, or code execution within Agent Framework ChatClientAgent and ChatAgent implementations ([Agent Tools](https://learn.microsoft.com/en-us/agent-framework/user-guide/agents/agent-tools), updated 2025-09-24).

---

**Back to:** [Home]({{ '/' | relative_url }})
