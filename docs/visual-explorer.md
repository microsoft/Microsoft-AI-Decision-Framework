---
layout: default
title: Decision Explorer
nav_order: 13
description: "Interactive decision tree explorer with pan, zoom, and branch isolation"
---

# Decision Explorer
{: .no_toc }

Interactive, zoomable decision trees for the AI Decision Framework.
{: .fs-6 .fw-300 }

{: .note }
The Decision Explorer replaces the largest Mermaid diagrams from the [Visual Framework]({{ '/docs/visual-framework' | relative_url }}) with an interactive experience. Use it when you need to **navigate** a decision tree rather than just **read** one. The written docs remain the source of truth — the explorer is the map, not the territory.

---

## Why an Explorer?

The static Mermaid diagrams in the Visual Framework are great for small, focused visuals. But the biggest decision trees — the Complete Decision Flow (42 nodes, 65 edges) and the Data Grounding Decision (33 nodes, 56 edges) — have outgrown what a static image can do well.

**The explorer gives you:**

- **Pan and zoom** — Navigate large trees without losing your place
- **Branch isolation** — Focus on one decision path at a time (interaction pattern, build approach, data grounding, deployment)
- **Click-through** — Click any technology node to jump to its documentation
- **Minimap** — Always know where you are in the full tree
- **Detail panel** — See status badges (GA / Preview), descriptions, and links without leaving the graph

---

## Available Decision Trees

| Tree | Nodes | What It Covers | Static Version |
|------|-------|----------------|----------------|
| **Complete Decision Flow** | 42 | End-to-end technology selection: interaction patterns → build approach → data grounding → deployment | [Mermaid version]({{ '/docs/visual-framework#complete-decision-flow' | relative_url }}) |
| **Data Grounding Decision** | 33 | Data strategy: M365 / Azure / Hybrid / Analytics → vector databases → platform integration | [Mermaid version]({{ '/docs/visual-framework#data-grounding-decision' | relative_url }}) |

More trees will be added as they outgrow their Mermaid form.

---

## Launch the Explorer

<a href="{{ site.baseurl }}/explorer/" class="btn btn-primary fs-5 mb-4 mb-md-0 mr-2" target="_blank" rel="noopener noreferrer">
  Open Decision Explorer →
</a>

The explorer opens in a new tab. Use it alongside these docs for the best experience.

---

## How to Use It

1. **Select a flow** from the dropdown in the top bar
2. **Browse the overview** — all branches are shown by default, auto-laid-out
3. **Isolate a branch** — click a branch tag (e.g., "data grounding") to focus on just that path
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

1. [Capability Model]({{ '/docs/capability-model' | relative_url }}) — Understand the "what"
2. [Decision Framework]({{ '/docs/decision-framework' | relative_url }}) — Learn the "how"
3. **Decision Explorer** (you are here) — Navigate the "which"
4. [Technologies]({{ '/docs/technologies' | relative_url }}) — Read the "details"

---

**Next:** [Quick Reference]({{ '/docs/quick-reference' | relative_url }}) — Fast lookup tables for when you already know the path

---
