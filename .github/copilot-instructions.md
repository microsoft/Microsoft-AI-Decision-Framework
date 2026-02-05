---
description: Overall guidelines about the project.
applyTo: '**'
---
# Microsoft AI Decision Tree - Copilot Instructions

## Project Overview

This is a **comprehensive decision framework and reference guide** for navigating Microsoft's AI technology portfolio. The project helps users systematically evaluate and select the right Microsoft AI technology (M365 Copilot, Copilot Studio, Microsoft Foundry, Agent Service, SDKs, etc.) for their specific business requirements.

**Primary Goal:** Enable evidence-based technology selection through a structured learning journey that progresses from foundational concepts to technical mastery.

**Target Audience:** Technical decision-makers, architects, developers, and business stakeholders evaluating Microsoft AI technologies for enterprise use cases.

---

## Technology Stack

- **Static Site Generator:** Jekyll 4.4+ (GitHub Pages)
- **Documentation Format:** Markdown (.md files)
- **Diagrams:** Mermaid 11.12.1 flowcharts (embedded in Markdown, dark theme configured)
- **Navigation:** Jekyll front matter with `nav_order` property (1-12)
- **Theme:** Just the Docs (remote_theme via GitHub Pages)
- **Custom Styling:** SCSS in `_sass/custom/custom.scss` (no Mermaid overrides; palette is owned inline in diagrams)
- **Ruby Gems:** jekyll-seo-tag, jekyll-github-metadata, jekyll-include-cache, webrick
- **Deployment:** GitHub Pages at https://chrismckee1.github.io/microsoft-ai-decision-tree/

---

## Project Structure & Architecture

### Documentation Organization (12 Core Files)

The documentation follows a **progressive learning flow** designed to build knowledge systematically:

1. **README.md** (nav_order: 1) - Landing page with learning paths
2. **docs/capability-model.md** (nav_order: 2) - **Foundation** - Five capability groupings
3. **docs/decision-framework.md** (nav_order: 3) - **Methodology** - Storybook flow & 9 questions
4. **docs/scenarios.md** (nav_order: 4) - **Context** - Real-world use cases
5. **docs/evaluation-criteria.md** (nav_order: 5) - **Assessment** - Complexity, skills, budget, governance
6. **docs/implementation-patterns.md** (nav_order: 6) - **Execution** - Architecture patterns
7. **docs/technologies.md** (nav_order: 7) - **Deep Dive** - Technical specifications
8. **docs/feature-comparison.md** (nav_order: 8) - **Mastery** - Side-by-side matrices
9. **docs/visual-framework.md** (nav_order: 9) - **Application** - 8 Mermaid decision tree diagrams
10. **docs/quick-reference.md** (nav_order: 10) - **Reference** - Fast lookup tables
11. **docs/resources.md** (nav_order: 11) - **Reference** - External links
12. **docs/glossary.md** (nav_order: 12) - **Reference** - Terminology

### Learning Flow Rationale

**Why this order matters:**
- **Quick Reference at position 10**: Prevents "cheating" - users must learn framework before accessing cheat sheet
- **Scenarios at position 4** (not 9): Provides early context to ground abstract concepts
- **Visual Framework at position 9**: Reinforces methodology after content mastery, preventing it from becoming a shortcut
- **Technologies at position 7** (not 2): Delays deep technical details until after framework understanding

**Navigation links** at the bottom of each document guide users through this optimal progression.

### File Naming & Location Conventions

- Main documentation: `docs/*.md`
- Configuration: `_config.yml`, `Gemfile`
- Custom includes: `_includes/*.html`, `_includes/*.js`
- Custom styles: `_sass/custom/custom.scss`
- Images: `images/*.png`, `images/*.svg`
- GitHub metadata: `.github/copilot-instructions.md` (this file)
- Codex guidance: `AGENTS.md` (root level)

---

## Core Methodology & Validation Rules

### The Constitution (Governing Philosophy)

This repository is governed by a set of immutable principles defined in **[`CONSTITUTION.md`](../CONSTITUTION.md)**. This document serves as the "Supreme Law" for the project.

**Agent Instruction:** You MUST review and adhere to `CONSTITUTION.md` when making decisions.

### Article I: Fact vs. Framework Distinction
**"Cite the Specs, Own the Story."**
- **Technical Truths:** Claims about features, limits, pricing, or availability MUST be validated against official Microsoft documentation. Verify accuracy — include links where they genuinely help the reader, but exhaustive inline citation is not required.
- **Conceptual Truths:** Thought leadership, analogies, and mental models (e.g., "The Coin," "The Podcast") DO NOT require citations. They are the lens we use to teach.

### Source Validation Principle (For Technical Specs)

All technology capabilities, features, and status annotations (GA/Preview/Experimental) MUST be verified against official Microsoft documentation sources.

**Always:**
- Verify against Microsoft Learn documentation first
- If Microsoft Learn does not host the relevant product documentation, use the official product documentation site (VS Code, GitHub Docs, Aspire.dev)
- Include source links where they genuinely help the reader navigate further — not for every statement
- Mark Preview/Experimental/GA status explicitly

### Guardrails for Core Files (Constitutional Mandate)

**CRITICAL:** The following files have **Immutable Intent** defined in `CONSTITUTION.md`.

1.  **`docs/capability-model.md` (The "What")**
    * **Purpose:** Defines abstract capabilities and mental models.
    * **Rule:** Use the **Teaching Triad** (Concept -> Analogy -> Product). Products are permitted here only as **Teaching Anchors** to illustrate a concept. Do not turn this into a feature matrix.

2.  **`docs/decision-framework.md` (The "How")**
    * **Purpose:** Defines the *methodology* (Intake Filter, BXT, 9 Questions) for choosing.
    * **Rule:** Do not clutter this with technology specs. It is about the *process* of choosing.

3.  **`docs/evaluation-criteria.md` (The "Measure")**
    * **Purpose:** Defines *metrics* (Complexity, Governance, Skills).
    * **Rule:** Do not add product comparison tables here. This file defines the *ruler*, not the objects being measured.

### Writing Style & Voice (The Storyteller)

**This is the most important section in this file.** We write to **change how people think**, not just what they pick. The creative voice is the delivery mechanism — without it, this is just another product catalog.

* **The Teaching Triad (non-negotiable):** Every major concept needs three legs: **Concept → Analogy → Product**.
    * *Bad:* "Use Copilot Studio for triggers."
    * *Good:* "Think of an Invisible Agent like a thermostat (Analogy). It waits for a change to trigger an action (Concept). In Microsoft's stack, Copilot Studio handles these triggers (Product)."
* **Named Mental Models:** Give ideas memorable handles — "The Coin," "The Kitchen," "The AI Podcast Problem," "The Furnished Condo." These sticky names survive product renames.
* **Narrative Arcs:** Structure documents like a story (Protagonist → Inciting Incident → Resolution). Open with bold trade-off statements, not dry definitions.
* **Conversational Authority:** Write like a senior architect mentoring a colleague over coffee — direct, confident, occasionally irreverent, always grounded.
* **No Product Supremacy:** Frame technologies as "Roles in a Cast" (e.g., Orchestrator vs. Engine), not rivals.

### Style Exemplars

Before writing or editing, read these files to absorb the voice:

* **`docs/capability-model.md`** — "The Coin," "The 5 Dimensions," "The AI Podcast Problem."
* **`docs/decision-framework.md`** — "Stop Shiny Object Syndrome before it starts," The Kitchen analogy.
* **`docs/evaluation-criteria.md`** — "The Furnished Condo vs. The Skyscraper," trade-off openers.

Match their rhythm. Match their boldness. If it reads like a product spec sheet, rewrite it.

---

## Key Concepts & Terminology

### Capability Model: Five Groupings
**Grouping 1: End‑user copilots** - M365 Copilot, built-in agents, Agent Store
**Grouping 2: Extensibility into existing copilots** - Graph Connectors, AI Plugins, Declarative Agents
**Grouping 3: Build AI apps and agents** - Copilot Studio, M365 Agents SDK, Agent Framework, Microsoft Foundry (Azure)
**Grouping 4: AI services and building blocks** - Azure OpenAI, AI Search, Document Intelligence, Logic Apps, Cosmos DB, Fabric
**Grouping 5: Specialized agents** - GitHub Copilot, Security Copilot, Dynamics 365 Copilots, Fabric Data Agents, Azure SRE Agent

### Decision Framework (The Workflow)

The framework follows a **Storybook Flow**:

1.  **Orientation:** The narrative arc (Vision -> Production).
2.  **The Intake Filter:**
    * The 3 Questions (Outcome, UX, Simplest Tech)
    * UX Framing (Immersive vs. Assistive vs. Embedded)
    * Checkpoint: Do you need an agent?
3.  **Step 1: Business Impact Assessment (BXT)**
    * Viability, Desirability, Feasibility
4.  **Step 2: Technology Groupings (9 Critical Questions)**
    * Q1: User interaction pattern? (Conversational/Autonomous/API)
    * Q2: Build style & control level? (Low-code/Pro-code)
    * Q3: Data strategy (Grounding vs Memory vs Analytics)
    * Q4: Orchestration complexity?
    * Q5: Compliance & governance? (Trust boundary)
    * Q6: Scale and cost?
    * Q7: Action safety?
    * Q8: Team skills?
    * Q9: Proactive vs. Reactive?
5.  **Step 3: Technology Selection**
    * Select based on Urgency, Skills, and Cost.

---

## Common Editing Scenarios

### Adding a New Technology

1. **Research first:** Find official documentation (Microsoft Learn primary; VS Code, GitHub Docs, Aspire.dev when applicable)
2. **Validate capabilities:** Confirm what it CAN and CANNOT do
3. **Check status:** GA, Preview, or Experimental?
4. **Update files:**
    - Add to `docs/capability-model.md` (as a Teaching Anchor/Example)
    - Add to `docs/technologies.md` (technical specs)
    - Update relevant diagrams in `docs/visual-framework.md`
    - Add to `docs/feature-comparison.md` (comparison matrix)
    - Update `docs/quick-reference.md` (lookup table)
5. **Add validation summary:** Include source URLs and last updated date
6. **Update scenarios:** Add relevant use cases to `docs/scenarios.md`

### Updating Diagram Validation

**When Microsoft releases updates:**
1. Search Microsoft Learn first; if not available, use official product docs (VS Code, GitHub Docs, Aspire.dev)
2. Check for new capabilities, renamed features, or status changes
3. Update Mermaid diagram nodes if needed
4. Update validation summary with changes and new source URLs
5. Update last validated date
6. Check cross-references in other documents

---

## Quality Checklist

Before committing changes, verify:

**Content Quality:**
- [ ] Technical claims verified against official Microsoft documentation sources
- [ ] Teaching Triad used for major concepts (Concept → Analogy → Product)
- [ ] Named mental models used where they aid understanding
- [ ] No shoeboxing (capabilities match official documentation)
- [ ] Third-party tools explicitly labeled (LangGraph, LangChain)
- [ ] Voice matches the style exemplars (conversational, bold, story-driven)

**Diagram Quality:**
- [ ] Mermaid syntax valid (test with local Jekyll)
- [ ] Dark theme applied: `%%{init: {'theme':'dark'}}`
- [ ] Color coding follows conventions
- [ ] Status annotations included: `<i>Preview</i>`
- [ ] Validation summary present with sources

**Navigation & Structure:**
- [ ] Front matter includes nav_order (1-12)
- [ ] "Next:" link points to correct document in learning flow
- [ ] Cross-references use descriptive link text
- [ ] File under 1000 lines (split if needed)

**Documentation Standards:**
- [ ] Consistent terminology (M365 Copilot, NOT "Microsoft 365 Copilot")
- [ ] Clear heading hierarchy (H1 → H2 → H3)
- [ ] Storytelling tone that teaches decision-making, not product selection
- [ ] Passes the "coffee test" — would a senior architect stay engaged reading this?

---

## Success Metrics

**This framework is successful when users can:**
1. Understand Microsoft's five capability groupings via clear mental models.
2. Apply the Intake Filter to stop bad projects early.
3. Use 9 critical questions to shortlist technologies.
4. Navigate decision trees to select appropriate technology.
5. Assess complexity, skills, budget, and governance requirements.
6. Make evidence-based technology decisions grounded in verified information.
7. **Remember the framework months later** because the analogies and mental models stuck.