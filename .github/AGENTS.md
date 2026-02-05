---
nav_exclude: true
---

# AGENTS.md — Codex Persistent Guidance

This file tells AI coding assistants (Codex CLI, GitHub Copilot, Cursor, etc.) how to *think* and *write* when working on the Microsoft AI Decision Framework. If you skip this, you will produce output that doesn't match the project's voice — and that matters more here than in most repos.

---

## Project Context

**What this project does:**
Teaches a **way of thinking** about Microsoft's AI portfolio — not just a technology catalog. It uses mental models, analogies, and narrative arcs to help architects and builders make evidence-based decisions that survive product renames.

**Why it exists:**
Microsoft ships new AI features weekly. Memorizing the product list is futile. This framework teaches the *logic* of how to choose: Outcomes → Behaviors → Platforms. It prevents "Shiny Object Syndrome" by forcing structured reasoning before any technology gets picked.

**Target audience:**
Enterprise architects, technical leads, developers, and business stakeholders evaluating Microsoft AI technologies for production use cases.

---

## The Voice (READ THIS FIRST)

This project's differentiation is *how* it teaches, not *what* it lists. Every AI assistant working in this repo is a **co-author and storyteller**, not a transcriptionist. Your output must match the voice of the best docs in the project.

### Style Exemplars — Read Before Editing

* **`docs/capability-model.md`** — "The Coin," "The 5 Dimensions," "The AI Podcast Problem."
* **`docs/decision-framework.md`** — "Stop Shiny Object Syndrome before it starts," "The Kitchen" analogy.
* **`docs/evaluation-criteria.md`** — "The Furnished Condo vs. The Skyscraper," trade-off openers.

If your output reads like a product spec sheet or a compliance document, rewrite it.

### The Teaching Triad (Non-Negotiable)

Every major concept needs three legs: **Concept → Analogy → Product.**

* *Bad:* "Use Copilot Studio for triggers."
* *Good:* "Think of an Invisible Agent like a thermostat (Analogy). It waits for a change to trigger an action (Concept). In Microsoft's stack, Copilot Studio handles these triggers (Product)."

### Named Mental Models

Give ideas memorable handles — "The Coin," "The Kitchen," "The AI Podcast Problem." These sticky names survive product renames and make the framework memorable months later. Invent new ones when they serve the reader.

### Conversational Authority

Write like a senior architect mentoring a colleague over coffee — direct, confident, occasionally irreverent, always grounded. Open sections with bold trade-off statements or provocative questions, not dry definitions.

---

## Core Principles (ALWAYS FOLLOW)

### 1. Fact vs. Framework (Constitution Article I)

**"Cite the Specs, Own the Story."**

* **Technical Truths:** Claims about what a product *is*, limits, pricing, or status (GA/Preview) MUST be verified against official Microsoft documentation. Include links where they genuinely help the reader — not for every statement.
* **Conceptual Truths:** Mental models and analogies DO NOT require citations. They are the teaching lens. Fearlessly invent narratives to explain the features — but never invent features to fit a narrative.

### 2. Prevent "Shoeboxing" (Constitution Article II)

**Shoeboxing** = Claiming a technology can do something it cannot.

**Real shoeboxing examples we caught:**
- ❌ Fabric Data Agents in "Autonomous" path → ✅ Actually conversational Q&A, not autonomous
- ❌ M365 SDK "has built-in Agent Framework" → ✅ Actually "bring your own orchestrator" model
- ❌ Logic Apps for "multi-agent orchestration" → ✅ Actually triggers SINGLE agents via events

**How to avoid:**
- Verify capabilities against official Microsoft docs before making claims
- Don't infer features from product naming
- Explicitly state what a technology *cannot* do

### 3. Status Transparency (Constitution Article III)

Rigorously distinguish **GA**, **Public Preview**, and **Experimental**. Flag non-GA features in every diagram, table, and recommendation.

### 4. No Product Supremacy (Constitution Article VIII)

Frame technologies as **roles in a cast** — teammates, not rivals. "Copilot Studio plays the Orchestrator; Foundry plays the Engine." Never say one is "better" than another.

### 5. Mermaid Diagram Conventions

Every diagram in `docs/visual-framework.md` must have:
1. Dark theme (default Mermaid config)
2. Color-coded nodes set **inline** per diagram (keep white text): Blue #004578, Purple #4b2070, Green #0b6a0b, Orange #8c5e00, Red #a52617
3. Status annotations: `<i>Preview</i>` for preview features
4. Validation summary with sources

---

## File Structure & Conventions

### Documentation Files (docs/*.md)

**Required front matter:**
```yaml
---
layout: default
title: [Title]
nav_order: [1-12]
description: "[SEO description]"
---
```

### Learning Flow (nav_order)
The 12-document progression is intentional — don't rearrange it. See `copilot-instructions.md` for the rationale.

### Governance Files
* **`CONSTITUTION.md`** — The supreme law. Read it before making structural decisions.
* **`.github/copilot-instructions.md`** — Operational rules for agents and contributors.
* **`.github/agents/*.agent.md`** — Custom agent definitions for the Researcher and Implementer.
