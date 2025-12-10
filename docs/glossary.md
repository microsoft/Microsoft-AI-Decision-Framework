---
layout: default
title: Glossary
nav_order: 12
description: "Key terms and definitions for Microsoft AI technologies"
---

# Glossary
{: .no_toc }

Quick reference for key terms used throughout the Microsoft AI Decision Tree.

---

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## A

**Agent**  
An AI system that uses an LLM to interpret user inputs, plan, call tools or MCP servers, and return responses, with optional threads, memory, and middleware to enrich interactions ([Microsoft Agent Framework](https://learn.microsoft.com/en-us/agent-framework/overview/agent-framework-overview), updated 2025-10-09).

**Agent2Agent (A2A)**  
A protocol enabling secure, peer-to-peer communication between AI agents, allowing them to discover peers, negotiate tasks, and collaborate without centralized intermediaries ([Advanced development tools for Teams](https://news.microsoft.com/build-2025-book-of-news/), updated 2025-05-19).

**Agent Registry (Preview)**  
Central inventory in the M365 admin center to publish, activate, deploy, pin, block, remove, delete, transfer ownership, or export agents; enforces governance and visibility across Copilot and custom agents ([Agent Registry](https://learn.microsoft.com/en-us/microsoft-365/admin/manage/agent-registry?view=o365-worldwide#admin-actions-to-manage-agents), retrieved 2025-12-08).

**Agent Settings templates (Preview)**  
Reusable configuration templates in the M365 admin center that let admins apply consistent policies to multiple agents (e.g., enabled channels, publishing scope, owners), managed alongside Agent Registry entries ([Microsoft 365 Copilot release notes — November 24, 2025](https://learn.microsoft.com/en-us/copilot/microsoft-365/release-notes#november-24,-2025)).

**Agent Framework**  
An open-source development kit for .NET and Python that unifies Semantic Kernel and AutoGen concepts, adding stateful workflows and multi-agent orchestration for production-grade AI solutions ([Microsoft Agent Framework](https://learn.microsoft.com/en-us/agent-framework/overview/agent-framework-overview), updated 2025-10-09).

**Assistant (generic)**  
A conversational experience that relies primarily on an LLM prompt without owning orchestration, tool calls, or state. Assistants can become agents when they add tools (including MCP), memory, or workflows.

**Azure AI Foundry**  
*See [Microsoft Foundry](#m).* The cloud-based implementation of the Microsoft Foundry ecosystem (formerly known as Azure AI Foundry).

## B

**BYOK (Bring Your Own Knowledge)**  
Configuring Copilot Studio generative answers with knowledge sources such as SharePoint, Dataverse, connectors, files, and vetted web content so agents ground responses in governed enterprise data ([Knowledge sources summary](https://learn.microsoft.com/en-us/microsoft-copilot-studio/knowledge-copilot-studio), updated 2025-10-10).

**BYOM (Bring Your Own Model)**  
Connecting Azure AI Foundry model deployments to Copilot Studio prompts so makers can run custom or fine-tuned models inside agent experiences and prompt tools ([Bring your own model for your prompts](https://learn.microsoft.com/en-us/ai-builder/byom-for-your-prompts), updated 2025-07-24).

**BXT Framework**  
A Business, Experience, and Technology evaluation that scores strategic fit, user desirability, and technical feasibility to prioritize AI scenarios with the greatest impact and execution readiness ([Evaluate and Prioritize an AI Use Case with Business Envisioning](https://learn.microsoft.com/en-us/microsoft-cloud/dev/copilot/isv/business-envisioning), updated 2024-09-20).

## C

**Copilot (Microsoft 365)**  
Tenant-aware AI experience embedded across Microsoft 365 apps, inheriting Graph security and compliance while allowing extensions via declarative or custom engine agents ([Microsoft 365 Copilot overview](https://learn.microsoft.com/en-us/microsoft-365-copilot/), retrieved 2025-12-08).

**Copilot vs. Agent**  
"Copilot" describes the user-facing experience; "agent" describes the implementation pattern (planning, tools, memory). Many copilots are backed by agents, but a copilot can remain a simple assistant if no tools or state are attached.

**Copilot Search API (Preview, Graph `/beta`)**  
Microsoft Graph `/beta` API that delivers hybrid semantic + lexical search over OneDrive content for custom engine agents, returning grounding for Copilot experiences while respecting M365 security trimming ([Microsoft 365 Copilot Search API overview](https://learn.microsoft.com/en-us/microsoft-365-copilot/extensibility/api/ai-services/search/overview), retrieved 2025-12-09).

**Copy to Copilot Studio**  
Rolling capability to clone Copilot agents into Copilot Studio; copies data sources and actions, but GPTs and custom actions must be reattached after import ([Copy a Copilot agent to Microsoft Copilot Studio](https://learn.microsoft.com/en-us/microsoft-365-copilot/extensibility/copilot-agent-to-studio), retrieved 2025-12-09).

## D

**Declarative Agent**  
Microsoft 365 Copilot extension that packages instructions, knowledge, and optional plugins in a manifest-driven app so organizations deliver scoped Copilot experiences while inheriting Copilot security and governance controls ([Declarative agents for Microsoft 365 Copilot overview](https://learn.microsoft.com/en-us/microsoft-365-copilot/extensibility/overview-declarative-agent), updated 2025-09-11).

## E

**Entra Agent ID (Preview)**  
Identity construct that extends Microsoft Entra controls (Conditional Access, ID Protection, governance) to AI agents and agent users, providing unique identifiers and policy enforcement ([What is Microsoft Entra Agent ID?](https://learn.microsoft.com/en-us/entra/agent-id/identity-professional/microsoft-entra-agent-identities-for-ai-agents), updated 2025-11-18).

## F

**Fabric Data Agent (Preview)**  
Conversational analytics agent for Q&A over Fabric OneLake sources (lakehouse, warehouse, semantic models, KQL) that respects user permissions; designed for insights, not for orchestrating other agents ([Create a Fabric data agent](https://learn.microsoft.com/en-us/fabric/data-science/how-to-create-data-agent), updated 2025-11-15).

**Foundry Local**  
A component of Windows AI Foundry that brings Azure AI Foundry models and capabilities to local devices (Windows 11, MacOS), enabling offline inferencing and hybrid AI scenarios ([Azure AI Foundry Local](https://news.microsoft.com/build-2025-book-of-news/), updated 2025-05-19).

## G

**Graph Connector**  
Copilot connector that ingests external content into Microsoft Graph’s semantic index so Copilot and Microsoft Search can ground answers in authenticated enterprise data, with semantic indexing and inline results requirements managed by admins ([Microsoft 365 Copilot connectors overview](https://learn.microsoft.com/en-us/microsoft-365-copilot/extensibility/overview-copilot-connector), updated 2025-07-21).

## M

**MCP (Model Context Protocol)**  
Open protocol for tools and resources that lets agents connect to external systems in a structured, stateful, and secure manner; supported by Microsoft via MCP servers (for example, Azure MCP Server) and client integrations ([What is the Azure MCP Server (Preview)?](https://learn.microsoft.com/en-us/azure/developer/azure-mcp-server/), retrieved 2025-12-08).

**Model Router (GA)**  
Foundry model that selects among multiple underlying chat models based on routing profiles (quality vs. cost) and model subsets; GA version `2025-11-18` adds Anthropic models and supports reasoning_effort ([What's new in model router in Microsoft Foundry Models?](https://learn.microsoft.com/en-us/azure/ai-foundry/foundry-models/whats-new-model-router), updated 2025-11-18).

**Microsoft Discovery**  
An enterprise agentic platform designed to accelerate scientific research and discovery through hypothesis formulation, candidate generation, and simulation orchestration ([Microsoft Discovery](https://news.microsoft.com/build-2025-book-of-news/), updated 2025-05-19).

**Microsoft Foundry**  
The unified brand for Microsoft's AI development and management platforms, spanning Cloud (formerly Azure AI Foundry), Client (Windows AI Foundry), and Edge (Foundry Local). It provides a consistent toolchain for model selection, agent orchestration, and observability across all environments ([Azure AI Foundry: Your AI App and agent factory](https://news.microsoft.com/build-2025-book-of-news/), updated 2025-05-19).

## N

**NLWeb**  
An open project where web endpoints act as MCP servers, allowing websites to provide conversational interfaces and be easily discoverable by AI agents ([NLWeb](https://news.microsoft.com/build-2025-book-of-news/), updated 2025-05-19).

## O

**Orchestration**  
Coordinating agents, workflows, and function calls to execute multi-step solutions, often implemented with Agent Framework workflows that provide routing, state management, and human-in-the-loop checkpoints ([Microsoft Agent Framework](https://learn.microsoft.com/en-us/agent-framework/overview/agent-framework-overview), updated 2025-10-09).

## P

**Planetary Computer Pro**  
A managed platform for geospatial insights that allows customers to ingest, manage, and analyze private geospatial data within Azure, integrating with Fabric and third-party tools ([Microsoft Planetary Computer Pro](https://news.microsoft.com/build-2025-book-of-news/), updated 2025-05-19).

**Plugin**  
A term largely superseded by **Tool** or **MCP Server**. Originally referred to extensions for ChatGPT/Copilot; the ecosystem has shifted toward the Model Context Protocol (MCP) for standardized interoperability.

**Prompt Flow**  
Azure AI Foundry’s visual DAG environment for orchestrating LLMs, prompts, and Python tools, comparing prompt variants, collaborating across teams, and deploying flows as managed endpoints ([Prompt flow in Azure AI Foundry portal](https://learn.microsoft.com/en-us/azure/ai-foundry/concepts/prompt-flow), updated 2025-06-30).

## R

**RAG (Retrieval Augmented Generation)**  
A design pattern that pairs Azure AI Search retrieval with LLMs—now optimized by agentic retrieval that plans subqueries, runs hybrid search with semantic ranking, and returns structured grounding for high-fidelity answers ([Retrieval Augmented Generation (RAG) in Azure AI Search](https://learn.microsoft.com/en-us/azure/search/retrieval-augmented-generation-overview), updated 2025-10-15).

## S

**Skills/Tools**  
Function tools, hosted services, or built-in capabilities that agents attach at construction or per run—enabling actions like web search, file retrieval, or code execution within Agent Framework ChatClientAgent and ChatAgent implementations ([Agent Tools](https://learn.microsoft.com/en-us/agent-framework/user-guide/agents/agent-tools), updated 2025-10-01).

---

**Back to:** [Home]({{ '/' | relative_url }})
