---
layout: default
title: Home
nav_order: 1
description: "Comprehensive guide to navigating Microsoft's AI technology portfolio and making informed technology decisions"
permalink: /
---

# Microsoft AI Decision Framework
{: .fs-9 }

Master the art of selecting the right Microsoft AI technology for your business needs.
{: .fs-6 .fw-300 }

[Start Learning]({{ '/docs/capability-model' | relative_url }}){: .btn .btn-primary .fs-5 .mb-4 .mb-md-0 .mr-2 }
[Explore Visual Framework Reference]({{ '/docs/visual-framework' | relative_url }}){: .btn .fs-5 .mb-4 .mb-md-0 }

---

## The Challenge

Microsoft's AI portfolio includes **M365 Copilot, Copilot Studio, Azure AI Foundry, Agent Service, SDKs, and more**. Each technology serves different needs, and choosing the wrong one wastes time and money.

Enterprise AI decisions also have countless edge cases-data boundaries, orchestration models, compliance controls, channel requirements-so a single static decision tree oversimplifies reality. This guide is intentionally **Level 300-400** material: it teaches you how to think, model tradeoffs, and construct your own decision trees for any use case instead of memorizing ours.

**This guide solves that problem** by teaching you a systematic framework (BXT + capability model + evaluation criteria) for evaluating and selecting the right tool for your specific requirements, then adapting the framework as Microsoft ships new capabilities.

---

## What You'll Learn

By following this framework, you'll gain:

- **Methodology** - The BXT decision framework for systematic technology selection  
- **Foundation** - Understanding of Microsoft's five-layer AI capability model  
- **Context** - Real-world scenarios showing how others solved similar problems  
- **Application** - Interactive decision trees for visual technology selection  
- **Assessment** - Evaluation criteria for complexity, skills, budget, and governance  
- **Execution** - Implementation patterns and architecture guidance  
- **Mastery** - Deep technical knowledge of each technology's capabilities  

---

## Who This Framework Serves

This content assumes readers can reason across business, experience, and technology concerns and want a reusable evaluation pattern rather than a shortcut. Expect to synthesize enterprise constraints, justify architecture choices, and extend the framework to new Microsoft releases.

- **Technical decision makers & strategists** - AI program sponsors, product owners, security/compliance leads, and other executives accountable for cross-functional alignment and governance.
- **Architects (AI, application, integration)** - AI solution architects, application/platform architects, and integration leads who design landing zones, data boundaries, and orchestration models.
- **Pro-code engineering teams** - Software engineers, data engineers, ML engineers, and agent developers responsible for building, instrumenting, and operating custom copilots or services.
- **Makers & fusion teams** - Product managers, subject-matter experts, Power Platform makers, IT admins, and frontline innovators who partner with engineering to deliver governed AI outcomes.

If you match these personas, this framework will help you design your own decision flows, facilitate architecture reviews, and explain rationale to stakeholders.

## Your Learning Journey

Follow this progressive path for the best learning experience:

### Core path

```mermaid
%%{init: {'theme':'dark','flowchart': {'nodeSpacing': 100, 'rankSpacing': 60, 'diagramPadding': 20, 'htmlLabels': true}}}%%
flowchart LR
        F["Foundation<br><small>Capability Model</small>"] --> M["Methodology<br><small>Decision Framework</small>"] --> C["Context<br><small>Scenarios</small>"] --> A["Assessment<br><small>Evaluation Criteria</small>"] --> E["Execution<br><small>Implementation Patterns</small>"] --> D["Deep Dive<br><small>Technologies</small>"] --> MS["Mastery<br><small>Feature Comparison</small>"]

        click F "{{ site.baseurl }}/docs/capability-model" "Open Capability Model" _self
        click M "{{ site.baseurl }}/docs/decision-framework" "Open Decision Framework" _self
        click C "{{ site.baseurl }}/docs/scenarios" "Open Scenarios" _self
        click A "{{ site.baseurl }}/docs/evaluation-criteria" "Open Evaluation Criteria" _self
        click E "{{ site.baseurl }}/docs/implementation-patterns" "Open Implementation Patterns" _self
        click D "{{ site.baseurl }}/docs/technologies" "Open Technologies" _self
        click MS "{{ site.baseurl }}/docs/feature-comparison" "Open Feature Comparison" _self

        style F fill:#0078D4,stroke:#004578,color:#fff
        style M fill:#5C2D91,stroke:#3B1D61,color:#fff
        style C fill:#5C2D91,stroke:#3B1D61,color:#fff
        style A fill:#FFB900,stroke:#C47F00,color:#000
        style E fill:#107C10,stroke:#0B5E0B,color:#fff
        style D fill:#5C2D91,stroke:#3B1D61,color:#fff
        style MS fill:#0078D4,stroke:#004578,color:#fff
```

{: .fs-4 .fw-300 }

### Reference aids

```mermaid
%%{init: {'theme':'dark','flowchart': {'nodeSpacing': 100, 'rankSpacing': 60, 'diagramPadding': 20}}}%%
flowchart LR
        VF["Visual Framework"] --- QR["Quick Reference"] --- RES["Resources"] --- GLOS["Glossary"]

        style VF fill:#5C2D91,stroke:#3B1D61,color:#fff
        style QR fill:#5C2D91,stroke:#3B1D61,color:#fff
        style RES fill:#5C2D91,stroke:#3B1D61,color:#fff
        style GLOS fill:#5C2D91,stroke:#3B1D61,color:#fff

        click VF "{{ site.baseurl }}/docs/visual-framework" "Open Visual Framework" _self
        click QR "{{ site.baseurl }}/docs/quick-reference" "Open Quick Reference" _self
        click RES "{{ site.baseurl }}/docs/resources" "Open Resources" _self
        click GLOS "{{ site.baseurl }}/docs/glossary" "Open Glossary" _self
```

### The Progressive Path

| Step | Module | What You'll Learn | Time Investment |
|------|--------|-------------------|-----------------|
| 1) | [Capability Model]({{ site.baseurl }}/docs/capability-model) | **Foundation** - Map adopt/extend/build into five layers and decide where your use case should start | 15 min |
| 2) | [Decision Framework]({{ site.baseurl }}/docs/decision-framework) | **Methodology** - BXT gates and nine critical questions to stay simple before scaling | 20 min |
| 3) | [Scenarios]({{ site.baseurl }}/docs/scenarios) | **Context** - Real-world playbooks with recommended stacks, alternatives, and implementation steps | 15 min |
| 4) | [Evaluation Criteria]({{ site.baseurl }}/docs/evaluation-criteria) | **Assessment** - Score complexity, skills, budget, governance, and action safety/time-to-production | 15 min |
| 5) | [Implementation Patterns]({{ site.baseurl }}/docs/implementation-patterns) | **Execution** - Repeatable patterns (Studio-to-Azure, multi-agent, grounding) with pivot signals | 15 min |
| 6) | [Technologies]({{ site.baseurl }}/docs/technologies) | **Deep Dive** - Detailed specs, data boundaries, and status for Microsoft AI platforms/services | 30 min |
| 7) | [Feature Comparison]({{ site.baseurl }}/docs/feature-comparison) | **Mastery** - Side-by-side matrices to justify trade-offs across orchestration, data, and workflows | 10 min |

**Supplemental references (use as needed):** [Visual Framework]({{ site.baseurl }}/docs/visual-framework) | [Quick Reference]({{ site.baseurl }}/docs/quick-reference) | [Resources]({{ site.baseurl }}/docs/resources) | [Glossary]({{ site.baseurl }}/docs/glossary)

**Total learning time:** ~2.7 hours for complete framework mastery

### Visual Framework Reference

Use the [Visual Framework]({{ '/docs/visual-framework' | relative_url }}) diagrams when you need to facilitate workshops, recap the nine questions, or socialize the architecture. The visuals reinforce the methodology-they're not a shortcut around the foundational content.

---

## Choose Your Learning Path

### First-Time Learner

**Recommended:** Follow the sequential path above for comprehensive understanding.

**Start here:** [Capability Model]({{ site.baseurl }}/docs/capability-model) - Ground yourself in the five-layer model before choosing technologies

### Visual Learner

**Prefer diagrams?** Skim the decision trees to orient yourself, then follow the full path for depth.

**Reference:** [Visual Framework]({{ '/docs/visual-framework' | relative_url }}) - Use alongside the Decision Framework and Evaluation Criteria

### Need Quick Answers

**Experienced user?** Use the fast-lookup tables and scenario shortcuts.

**Start here:** [Scenarios]({{ '/docs/scenarios' | relative_url }}) - "I need X" -> recommended path

---

---

## Common Paths (Quick Shortcuts)

For experienced users who need fast recommendations:

### "I need something in production next week"

-> **[M365 Copilot]({{ '/docs/technologies#microsoft-365-copilot' | relative_url }})** (fastest end-user experience once IT completes [tenant readiness and licensing](https://learn.microsoft.com/en-us/copilot/microsoft-365/microsoft-365-copilot-setup)) or **[Copilot Studio]({{ '/docs/technologies#copilot-studio' | relative_url }})** (templates available)

### "I have makers but no developers"

-> **[Copilot Studio]({{ '/docs/technologies#copilot-studio' | relative_url }})** + **[AI Builder]({{ '/docs/capability-model#layer-4-infrastructure--ai-services-building-blocks' | relative_url }})**

### "I have a dev team and complex requirements"

-> **[Azure AI Foundry]({{ '/docs/technologies#azure-ai-foundry' | relative_url }})** or **[M365 Agents SDK]({{ '/docs/technologies#microsoft-365-agents-sdk--toolkit' | relative_url }})**

### "I need enterprise integration + AI"

-> **[Azure Logic Apps]({{ '/docs/technologies#azure-logic-apps' | relative_url }})** (1,400+ connectors, AI agent workflows)

### "I need to extend M365 Copilot"

-> **[Graph Connectors]({{ '/docs/capability-model#layer-2-extensibility-enhance-existing-copilots' | relative_url }})** (data) or **[Declarative Agents]({{ '/docs/capability-model#layer-2-extensibility-enhance-existing-copilots' | relative_url }})** (custom skills)

{: .note }
> **Note:** These shortcuts skip the learning framework. For comprehensive understanding, follow the [progressive learning path](#your-learning-journey) above.

---

## Framework Principles

This guide is built on evidence-based research and systematic decision-making:

1. **Source-First Research** - All content backed by official Microsoft documentation
2. **Framework-Driven** - BXT methodology + 6 critical questions + scenario criteria
3. **Pattern-Oriented** - Proven implementation approaches from real deployments
4. **Progressive Learning** - Foundation -> Context -> Application -> Mastery
5. **Start Simple, Scale Smart** - Choose the simplest technology that meets requirements

---

## How to Use This Guide

**Sequential Learning (Recommended for first-time users)**  
Follow the numbered path from Capability Model through Glossary to build comprehensive knowledge.

**Modular Learning (For specific questions)**  
Jump directly to relevant sections using the navigation sidebar or Quick Reference.

**Visual Learning (For diagram-oriented thinkers)**  
Start with the Visual Framework to see decision trees, then drill into details as needed.

**Scenario-Based Learning (For practical problem-solvers)**  
Begin with Scenarios to find use cases similar to yours, then explore referenced sections.

---

## About This Framework

**Purpose:** Systematic methodology for navigating Microsoft's AI portfolio and selecting the right technology for your business requirements.

**Approach:**

- Source-backed (official Microsoft Learn documentation)
- Framework-driven (BXT + Technology Groupings + Selection Criteria)
- Pattern-oriented (proven architecture approaches)
- Validation-focused (all diagrams validated against official capabilities)

**Maintenance:** This guide reflects the state as of **November 2025**. Microsoft's AI capabilities evolve rapidly-always verify with official sources for production decisions.

---

## Still Want the Simplified Version?

After understanding the comprehensive framework above, if you prefer Microsoft's official high-level decision tree:

![Microsoft AI Decision Tree](images/ai-decision-tree.svg)

**Source:** [Azure Cloud Adoption Framework - AI Strategy](https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/scenarios/ai/strategy)

{: .warning }
> **Why we recommend the full framework:** This simplified tree doesn't address critical enterprise considerations like governance requirements, data boundaries, network isolation, permissions models, action safety, scale/cost tradeoffs, and proactive capabilities. Real-world decisions require the systematic approach taught in this guide.

---

## Credits & Foundations

This framework integrates:

- Microsoft's [Business-Experience-Technology (BXT) Framework](https://learn.microsoft.com/en-us/microsoft-cloud/dev/copilot/isv/business-envisioning)
- [Cloud Adoption Framework AI Strategy](https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/scenarios/ai/strategy)
- [M365 Copilot Extensibility Guidance](https://learn.microsoft.com/en-us/microsoft-365-copilot/extensibility/agents-overview)

---

**Ready to start your learning journey?** -> [Begin with the Decision Framework]({{ '/docs/decision-framework' | relative_url }})
