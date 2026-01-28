---
layout: default
title: Capability Model
nav_order: 2
description: "Instructor-led capability framing for Microsoft AI choices"
---

# Capability Model
{: .no_toc }

This page is **not a decision tree**. It is a teaching aid for *how to think* about AI choices before you pick a technology. Treat it like a workshop guide: start with people and outcomes, then move to capability groupings, and only later talk about platforms. Capabilities shift quickly, so validate your choices against current Microsoft Foundry and Copilot Studio documentation before committing.

**How to use this page:**

- Start with where users live and how they work.
- Choose an experience focus (UI or no-UI, assistive vs autonomous).
- Decide whether you even need an agent.
- Map the work to the three buckets and five capability groupings.
- Use [Capability Envisioning](https://learn.microsoft.com/en-us/microsoft-cloud/dev/copilot/isv/capability-envisioning) as the compass, not the destination.

For a detailed intake workflow, see [Decision Framework]({{ '/docs/decision-framework' | relative_url }}).

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## The Capability Lens

Capabilities are the **building blocks** of AI solutions: what the system can do, how it behaves, and how people experience it. This page introduces the vocabulary and capability levers so you can reason about AI without jumping to product selection.

## Clarify the Language (copilot vs Copilot)

- **copilot** (lowercase) = a *concept*: a natural‑language assistant that helps users create, reason, and act. See [Copilot glossary](https://learn.microsoft.com/en-us/copilot/glossary).
- **Copilot** (uppercase) = a *product family*: Microsoft 365 Copilot, Dynamics 365 Copilot, Security Copilot, and more. See [ISV extensibility story](https://learn.microsoft.com/en-us/microsoft-cloud/dev/copilot/isv/isv-extensibility-story).

This distinction matters. You can build a copilot experience without using a Microsoft Copilot product, and you can extend Microsoft Copilot products without building your own UI.

### What is an agent?

In Microsoft guidance, agents can handle tasks, take actions, and operate in conversation or via triggers. They can be assistive or autonomous depending on how you design them. See [Copilot Studio overview](https://learn.microsoft.com/en-us/microsoft-copilot-studio/fundamentals-what-is-copilot-studio).

---

## Capability Dimensions (the levers)

These dimensions help you describe *what kind* of AI capability you’re building—before you name a product.

- **UI vs no‑UI:** Experiences can be conversational or they can run via triggers, schedules, or workflows. Copilot Studio supports both conversational and triggered agent flows. [Copilot Studio overview](https://learn.microsoft.com/en-us/microsoft-copilot-studio/fundamentals-what-is-copilot-studio)
- **Assistive vs autonomous:** Assistive agents co‑pilot with the user; autonomous agents act on instructions and context. Both models are supported; you decide the guardrails. [Copilot Studio overview](https://learn.microsoft.com/en-us/microsoft-copilot-studio/fundamentals-what-is-copilot-studio)
- **Deterministic vs nondeterministic:** If the task is predictable, use deterministic code or classic RAG. Agents add nondeterminism and cost only when reasoning is required. [When not to use AI agents](https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/ai-agents/business-strategy-plan#when-not-to-use-ai-agents)
- **Single‑agent vs multi‑agent workflows:** Some problems are solved by one agent; others need coordinated agents and workflows. Microsoft Foundry’s new portal emphasizes multi‑agent orchestration as a core capability. [Microsoft Foundry overview](https://learn.microsoft.com/en-us/azure/ai-foundry/what-is-foundry?view=foundry&preserve-view=true)
- **Off‑the‑shelf vs custom:** Specialized agents already exist for certain domains; adopt them when they fit and customize only when the gap is clear. [Azure SRE Agent overview](https://learn.microsoft.com/en-us/azure/sre-agent/overview)

---

## Orientation: Three Capability Buckets

Start by naming **who benefits and how**. This keeps early conversations grounded in outcomes before you debate platforms.

| Bucket | What It Is | Key Distinction |
|--------|------------|-----------------|
| **Copilot for Everyone** | AI as personal assistant | Helps people do *their* work and life tasks |
| **AI as Product/Capability** | AI is the value delivered to end users | Standalone agents, embedded features, LLM‑powered integrations—users consume AI outcomes |
| **Agentic Coding** | Autonomous technical builder | AI builds software or systems; output may or may not contain AI features |

Think of this like podcasts: some focus on *using* AI tools (personal productivity), some on *shipping* AI value (product features), and others on *building* with AI (coding agents and context engineering). Three buckets, three different conversations.

---

## Checkpoint: Do You Even Need an Agent?

Not every AI problem needs an agent. Microsoft’s AI agent guidance explicitly calls out cases where **agents add unnecessary cost, latency, and risk**.

- **Structured and predictable tasks:** Use deterministic code or non‑generative AI when the workflow is rule‑based and predictable.
- **Static knowledge retrieval:** Use classic RAG for single‑turn question answering or summarization from a fixed index. If there’s no tool execution or multi‑step reasoning, an agent is overkill.

See [When not to use AI agents](https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/ai-agents/business-strategy-plan#when-not-to-use-ai-agents).

---

## Capability Groupings (Not Layers)

These five groupings are **building blocks**, not a maturity ladder. You can combine them.

### 1) End‑user copilots (ready‑made UI)

End‑user copilots provide a ready‑made AI UI. The capability is the **experience surface** itself (chat, in‑app assistants, agent menus).

- **Web‑grounded vs work‑grounded chat** (for example, Microsoft 365 Copilot Chat vs Microsoft 365 Copilot) [Copilot Chat overview](https://learn.microsoft.com/en-us/copilot/overview), [Which Copilot is right](https://learn.microsoft.com/en-us/copilot/microsoft-365/which-copilot-for-your-organization)
- **In‑app copilots** (assistive UI inside Microsoft 365 apps) [Which Copilot is right](https://learn.microsoft.com/en-us/copilot/microsoft-365/which-copilot-for-your-organization)
- **Frontier agents** (early access) for Word, Excel, and PowerPoint in Microsoft 365 Copilot [Word/Excel/PowerPoint Agents (Frontier)](https://learn.microsoft.com/en-us/copilot/microsoft-365/wordexcelppt-agents)

### 2) Extensibility into existing copilots

If your users already live in Microsoft apps, extend what they already use.

- **Plugins** let you surface your data and actions inside Microsoft Copilots.
- **Graph connectors** bring external content into the Microsoft 365 ecosystem so Copilot can reason over it.

These patterns are explicitly described as extensions to Microsoft Copilots, and they are designed to meet users where they already work. See [ISV extensibility story](https://learn.microsoft.com/en-us/microsoft-cloud/dev/copilot/isv/isv-extensibility-story).

### 3) Build AI apps and agents (hybrid by default)

This grouping is for **custom experiences**. Your app may be 95% deterministic and still include a meaningful AI feature (semantic search, summarization, or a task agent). This is normal.

- **Agent flows and workflows** support mixing deterministic steps with AI reasoning (for example, Copilot Studio agent flows and Foundry multi‑agent workflows). [Copilot Studio overview](https://learn.microsoft.com/en-us/microsoft-copilot-studio/fundamentals-what-is-copilot-studio), [Microsoft Foundry overview](https://learn.microsoft.com/en-us/azure/ai-foundry/what-is-foundry?view=foundry&preserve-view=true)

### 4) AI services and building blocks

This grouping sits beneath apps: models, tools, retrieval, evaluations, and governance. Microsoft Foundry unifies agents, models, and tools with enterprise‑grade management so teams can mix building blocks without reinventing foundations. See [Microsoft Foundry overview](https://learn.microsoft.com/en-us/azure/ai-foundry/what-is-foundry?view=foundry&preserve-view=true).

### 5) Specialized agents (don’t rebuild what already exists)

Microsoft and partners ship specialized agents for specific domains. These are often the fastest way to get to production.

- **Microsoft 365 Copilot agents** (including built‑in Microsoft agents) are integrated into the Microsoft 365 Copilot experience. [Copilot Chat overview](https://learn.microsoft.com/en-us/copilot/overview)
- **Azure SRE Agent (Preview)** provides operational automation for Azure environments. [Azure SRE Agent overview](https://learn.microsoft.com/en-us/azure/sre-agent/overview)
- **Frontier agents** in Microsoft 365 Copilot are early‑access capabilities for Word, Excel, and PowerPoint. [Word/Excel/PowerPoint Agents (Frontier)](https://learn.microsoft.com/en-us/copilot/microsoft-365/wordexcelppt-agents)
- **GitHub Copilot agent mode** supports autonomous coding tasks inside the IDE (Agentic Coding bucket). [GitHub Copilot in VS Code](https://code.visualstudio.com/docs/copilot/overview#_autonomous-coding)
- **GitHub Copilot coding agent** runs tasks in the background via GitHub issues/PRs (Agentic Coding bucket). [About GitHub Copilot coding agent](https://docs.github.com/en/copilot/concepts/agents/coding-agent/about-coding-agent)

---

## Capability Envisioning (Approaches Can Be Combined)

Microsoft’s ISV guidance defines three approaches—extend existing Copilots, create copilots anywhere with minimal code, or build full‑control experiences—and explicitly states these approaches are **not mutually exclusive**. This is why hybrid solutions are normal. See [ISV extensibility story](https://learn.microsoft.com/en-us/microsoft-cloud/dev/copilot/isv/isv-extensibility-story) and [Capability Envisioning](https://learn.microsoft.com/en-us/microsoft-cloud/dev/copilot/isv/capability-envisioning).

---

## Copilot Studio vs Microsoft Foundry (When to Use What)

Use these as **teaching anchors**, not hard rules:

- **Copilot Studio** is a strong fit when you need rapid, low‑code delivery with connectors, agent flows, and multi‑channel publishing. [Copilot Studio overview](https://learn.microsoft.com/en-us/microsoft-copilot-studio/fundamentals-what-is-copilot-studio)
- **Microsoft Foundry** is a strong fit when you need deeper control over models, tools, multi‑agent workflows, memory, and observability within a unified PaaS. [Microsoft Foundry overview](https://learn.microsoft.com/en-us/azure/ai-foundry/what-is-foundry?view=foundry&preserve-view=true)

**Instructor note:** These are not competing religions. Teams often start low‑code to validate value, then deepen control as the use case proves itself.

---

**Next:** [Decision Framework]({{ '/docs/decision-framework' | relative_url }}) - Apply BXT and critical questions to shortlist technologies

---

## Sources

- [ISV extensibility story](https://learn.microsoft.com/en-us/microsoft-cloud/dev/copilot/isv/isv-extensibility-story) (Updated: 2024-09-20)
- [Capability Envisioning](https://learn.microsoft.com/en-us/microsoft-cloud/dev/copilot/isv/capability-envisioning) (Updated: 2024-09-20)
- [Copilot glossary](https://learn.microsoft.com/en-us/copilot/glossary) (Updated: 2024-05-13)
- [Copilot Chat overview](https://learn.microsoft.com/en-us/copilot/overview) (Updated: 2026-01-13)
- [Which Copilot is right for your organization](https://learn.microsoft.com/en-us/copilot/microsoft-365/which-copilot-for-your-organization) (Updated: 2025-10-29)
- [Copilot Studio overview](https://learn.microsoft.com/en-us/microsoft-copilot-studio/fundamentals-what-is-copilot-studio) (Updated: 2025-12-15)
- [Microsoft Foundry overview](https://learn.microsoft.com/en-us/azure/ai-foundry/what-is-foundry?view=foundry&preserve-view=true) (Updated: 2026-01-05)
- [When not to use AI agents](https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/ai-agents/business-strategy-plan#when-not-to-use-ai-agents) (Updated: 2025-12-05)
- [Word, Excel, and PowerPoint Agents (Frontier)](https://learn.microsoft.com/en-us/copilot/microsoft-365/wordexcelppt-agents) (Updated: 2026-01-14)
- [Azure SRE Agent overview](https://learn.microsoft.com/en-us/azure/sre-agent/overview) (Updated: 2025-12-08)
- [GitHub Copilot in VS Code](https://code.visualstudio.com/docs/copilot/overview#_autonomous-coding) (Updated: 2026-01-08)
- [About GitHub Copilot coding agent](https://docs.github.com/en/copilot/concepts/agents/coding-agent/about-coding-agent) (Accessed: 2026-01-28)
