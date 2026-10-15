---
layout: default
title: Decision Explorer
nav_order: 16
description: "Interactive decision tree explorer with pan, zoom, and branch isolation"
---

# Decision Explorer
{: .no_toc }

Interactive, zoomable decision trees for the AI Decision Framework.
{: .page-subtitle }

{: .note }
The Decision Explorer replaces the largest Mermaid diagrams from the [Visual Framework]({{ '/docs/visual-framework' | relative_url }}) with an interactive experience. Use it when you need to **navigate** a decision tree rather than just **read** one. The written docs remain the source of truth. The explorer is the map, not the territory.

---

## Why an Explorer?

The static Mermaid diagrams in the Visual Framework are great for quick scanning in a document. When a decision tree spans multiple branches, constraints, and status badges, an interactive canvas lets you isolate one branch at a time and inspect the evidence behind each node.

**The explorer gives you:**

- **Pan and zoom**: Navigate large trees without losing your place
- **Branch isolation**: Focus on one decision path at a time (intake, bucket lanes, governance gates, data grounding, deployment)
- **Click-through**: Click any linked node to open its detail panel and jump to the reference documentation
- **Minimap**: Always know where you are in the full tree
- **Detail panel**: See status badges (GA / Preview / Limited Access / Experimental / Deprecated / GA not stated), descriptions, and links without leaving the graph

---

## Available Decision Trees

All ten decision trees from the [Visual Framework]({{ '/docs/visual-framework' | relative_url }}) are available in the interactive explorer:

| # | Tree | What It Covers | Explorer View | Static Version |
|---|------|----------------|---------------|----------------|
| 1 | **Complete Decision Flow** | End-to-end selection: agent checkpoint → Q0 buy-before-build gate → 3 AI Bucket lanes → platform & publish targets | [Open flow]({{ site.baseurl }}/explorer/?flow=complete-decision){:target="_blank"} | [Mermaid version]({{ '/docs/visual-framework#complete-decision-flow' | relative_url }}) |
| 2 | **Persona-Based Flow** | Role on-ramps decided by runtime ownership: End user, Maker (Studio harnesses), Business Builder (Code, Cowork, Studio apps, Managed Runtime, vibe), Developer, Data Scientist, Integration Specialist | [Open flow]({{ site.baseurl }}/explorer/?flow=persona){:target="_blank"} | [Mermaid version]({{ '/docs/visual-framework#persona-based-flow' | relative_url }}) |
| 3 | **Data Grounding Decision** | Question shape and trust boundary (inherited vs. implemented permissions) across documents, operational records, and vector engines | [Open flow]({{ site.baseurl }}/explorer/?flow=data-grounding){:target="_blank"} | [Mermaid version]({{ '/docs/visual-framework#data-grounding-decision' | relative_url }}) |
| 4 | **Complexity Assessment** | The four behavior-and-authority tiers (Informational, Transactional, Reasoning, Autonomous) from Evaluation Criteria | [Open flow]({{ site.baseurl }}/explorer/?flow=complexity){:target="_blank"} | [Mermaid version]({{ '/docs/visual-framework#complexity-assessment-flow' | relative_url }}) |
| 5 | **Budget & Timeline** | The four funding lanes: Seats (USL), Copilot Credits (UBB), Azure meters, and Prepaid commitments (Reservations, CCCU, ACU) | [Open flow]({{ site.baseurl }}/explorer/?flow=budget){:target="_blank"} | [Mermaid version]({{ '/docs/visual-framework#budget--timeline-tradeoffs' | relative_url }}) |
| 6 | **Governance & Compliance** | Five ANDed gates: risk tier, trust boundary & model path, identity & authorization, control layer, and network isolation | [Open flow]({{ site.baseurl }}/explorer/?flow=governance){:target="_blank"} | [Mermaid version]({{ '/docs/visual-framework#governance--compliance-path' | relative_url }}) |
| 7 | **Multi-Agent Orchestration** | Boundary gate (Soloist vs. Orchestra) → connected agents (Copilot Studio, Foundry A2A v1.0) vs. workflow frameworks (Agent Framework, SK, LangGraph) | [Open flow]({{ site.baseurl }}/explorer/?flow=multi-agent){:target="_blank"} | [Mermaid version]({{ '/docs/visual-framework#multi-agent-orchestration' | relative_url }}) |
| 8 | **Upgrade Paths** | Progressive enhancement for low-code agents (Studio harness upgrade, connected agents, pro-code migration) and promotion for business-built apps (Managed Runtime vs. Power Apps vibe) | [Open flow]({{ site.baseurl }}/explorer/?flow=upgrade){:target="_blank"} | [Mermaid version]({{ '/docs/visual-framework#upgrade-paths' | relative_url }}) |
| 9 | **Lifecycle Check** | Pre-flight readiness gate: retirement horizon vs. operating life, maturity status (GA, Preview, Frontier, Unstated, Deprecated), and financial commitment alignment | [Open flow]({{ site.baseurl }}/explorer/?flow=lifecycle){:target="_blank"} | [Mermaid version]({{ '/docs/visual-framework#lifecycle-check' | relative_url }}) |
| 10 | **IQ Layer Selection** | Domain selection across the four Microsoft IQ layers (Foundry IQ, Work IQ, Fabric IQ, Web IQ) split by GA base vs. Preview extensions | [Open flow]({{ site.baseurl }}/explorer/?flow=iq-layer){:target="_blank"} | [Mermaid version]({{ '/docs/visual-framework#iq-layer-selection' | relative_url }}) |

---

## Launch the Explorer

<a href="{{ site.baseurl }}/explorer/" class="btn btn-primary fs-5 mb-4 mb-md-0 mr-2" target="_blank" rel="noopener noreferrer">
  Open Decision Explorer →
</a>

The explorer opens in a new tab. Use it alongside these docs for the best experience.

---

## How to Use It

1. **Select a flow** from the dropdown in the top bar
2. **Browse the overview**: all branches are shown by default, auto-laid-out
3. **Isolate a branch**: click a branch tag (e.g., "data grounding") to focus on just that path
4. **Click "All"** to return to the full view
5. **Click any node** to see its details, status, and documentation link
6. **Use the minimap** (bottom-right) to orient yourself in larger trees
7. **Zoom with scroll** or use the controls (bottom-left)

---

## Keyboard Navigation

| Key | Action |
|-----|--------|
| **Scroll wheel** | Zoom in / out |
| **Click + drag** (canvas) | Pan the view |
| **Click** (node) | Open detail panel |
| **Tab** | Move focus between nodes |

---

## Staying Connected

The explorer is a **navigation layer**, not a replacement for the written framework. Every outcome node links back to the relevant docs page. The learning path remains:

1. [Capability Model]({{ '/docs/capability-model' | relative_url }}): Understand the "what"
2. [Microsoft AI Stack]({{ '/docs/ai-stack' | relative_url }}): See what Microsoft actually ships
3. [Decision Framework]({{ '/docs/decision-framework' | relative_url }}): Learn the "how"
4. **Decision Explorer** (you are here): Navigate the "which"
5. [Technologies]({{ '/docs/technologies' | relative_url }}): Read the "details"

---

**You are at the end of the framework.** If you arrived here by walking the learning path, the next useful move is not another page. It's applying the framework to a real decision, then coming back when it pushes back.

If you want fast lookup for a decision you have already reasoned through, use [Quick Reference]({{ '/docs/quick-reference' | relative_url }}). If you need current specifications, [Technologies]({{ '/docs/technologies' | relative_url }}) and [Resources]({{ '/docs/resources' | relative_url }}) carry the volatile detail.

---
