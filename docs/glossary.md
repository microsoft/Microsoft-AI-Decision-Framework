---
layout: default
title: Glossary
nav_order: 12
description: "Key terms and definitions for Microsoft AI technologies"
---

# Glossary

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

**Agent Framework**  
An open-source development kit for .NET and Python that unifies Semantic Kernel and AutoGen concepts, adding stateful workflows and multi-agent orchestration for production-grade AI solutions ([Microsoft Agent Framework](https://learn.microsoft.com/en-us/agent-framework/overview/agent-framework-overview), updated 2025-10-09).

## B

**BYOK (Bring Your Own Knowledge)**  
Configuring Copilot Studio generative answers with knowledge sources such as SharePoint, Dataverse, connectors, files, and vetted web content so agents ground responses in governed enterprise data ([Knowledge sources summary](https://learn.microsoft.com/en-us/microsoft-copilot-studio/knowledge-copilot-studio), updated 2025-10-10).

**BYOM (Bring Your Own Model)**  
Connecting Azure AI Foundry model deployments to Copilot Studio prompts so makers can run custom or fine-tuned models inside agent experiences and prompt tools ([Bring your own model for your prompts](https://learn.microsoft.com/en-us/ai-builder/byom-for-your-prompts), updated 2025-07-24).

**BXT Framework**  
A Business, Experience, and Technology evaluation that scores strategic fit, user desirability, and technical feasibility to prioritize AI scenarios with the greatest impact and execution readiness ([Evaluate and Prioritize an AI Use Case with Business Envisioning](https://learn.microsoft.com/en-us/microsoft-cloud/dev/copilot/isv/business-envisioning), updated 2024-09-20).

## D

**Declarative Agent**  
Microsoft 365 Copilot extension that packages instructions, knowledge, and optional plugins in a manifest-driven app so organizations deliver scoped Copilot experiences while inheriting Copilot security and governance controls ([Declarative agents for Microsoft 365 Copilot overview](https://learn.microsoft.com/en-us/microsoft-365-copilot/extensibility/overview-declarative-agent), updated 2025-09-11).

## G

**Graph Connector**  
Copilot connector that ingests external content into Microsoft Graph’s semantic index so Copilot and Microsoft Search can ground answers in authenticated enterprise data, with semantic indexing and inline results requirements managed by admins ([Microsoft 365 Copilot connectors overview](https://learn.microsoft.com/en-us/microsoft-365-copilot/extensibility/overview-copilot-connector), updated 2025-07-21).

## M

**MCP (Model Context Protocol)**  
An open protocol that lets Agent Framework apps invoke remote tools hosted on MCP servers, securely passing headers and integrating third-party capabilities into agent runs ([Model Context Protocol](https://learn.microsoft.com/en-us/agent-framework/user-guide/model-context-protocol/), updated 2025-10-01).

## O

**Orchestration**  
Coordinating agents, workflows, and function calls to execute multi-step solutions, often implemented with Agent Framework workflows that provide routing, state management, and human-in-the-loop checkpoints ([Microsoft Agent Framework](https://learn.microsoft.com/en-us/agent-framework/overview/agent-framework-overview), updated 2025-10-09).

## P

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
