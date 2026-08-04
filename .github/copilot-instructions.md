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
- **Navigation:** Jekyll front matter with `nav_order` property (1-15)
- **Theme:** Just the Docs (remote_theme via GitHub Pages)
- **Custom Styling:** SCSS in `_sass/custom/custom.scss` (no Mermaid overrides; palette is owned inline in diagrams)
- **Ruby Gems:** jekyll-seo-tag, jekyll-github-metadata, jekyll-include-cache, webrick
- **Deployment:** GitHub Pages at https://chrismckee1.github.io/microsoft-ai-decision-tree/

---

## Project Structure & Architecture

### Documentation Organization (Core Files)

The documentation follows a **progressive learning flow** designed to build knowledge systematically:

1. **README.md** (nav_order: 1) - Landing page with learning paths
2. **docs/capability-model.md** (nav_order: 2) - **Foundation** - Buckets, the agent checkpoint, and how to describe behavior before naming a product
3. **docs/ai-stack.md** (nav_order: 3) - **Landscape** - The buy-before-build ladder, five capability groupings, shared vocabulary, and the five planes
4. **docs/decision-framework.md** (nav_order: 4) - **Methodology** - Storybook flow & 9 questions
5. **docs/scenarios.md** (nav_order: 5) - **Context** - Real-world use cases
6. **docs/evaluation-criteria.md** (nav_order: 6) - **Assessment** - Complexity, skills, budget, governance
7. **docs/implementation-patterns.md** (nav_order: 7) - **Execution** - Architecture patterns
8. **docs/technologies.md** (nav_order: 8) - **Deep Dive** - Technical specifications
9. **docs/feature-comparison.md** (nav_order: 9) - **Mastery** - Side-by-side matrices
10. **docs/visual-framework.md** (nav_order: 10) - **Application** - Mermaid decision tree diagrams
11. **docs/quick-reference.md** (nav_order: 11) - **Reference** - Fast lookup tables
12. **docs/ai-instinct.md** (nav_order: 12) - **Companion** - The human framework
13. **docs/resources.md** (nav_order: 13) - **Reference** - External links
14. **docs/glossary.md** (nav_order: 14) - **Reference** - Terminology
15. **docs/visual-explorer.md** (nav_order: 15) - **Reference** - Interactive decision explorer

**The capability-model / ai-stack split is deliberate.** The Capability Model teaches you to describe a problem without naming a technology; the AI Stack maps that description onto what Microsoft ships. Keeping them separate is what stops the Foundation page from degrading into a product catalog, the exact failure Article VI exists to prevent. Status details (versions, GA/Preview, licensing, capacity) belong in Technologies and Feature Comparison, never in either of those two pages.

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

### The Golden Rule (Constitution Article 0)

> **Never lead with a product. Business value and the use case come first. Always.**

Sequence on every passage: **outcome → use case → concept → analogy → then product.** If a product name appears before the reader has a reason to care about it, the passage is wrong and gets rewritten.

**Scope:** this does not require every document to open with business value; each serves its own purpose, and a reference page may be a reference page. What must hold is the **flow between documents**:

| Stage | Documents | The reader's question |
| :--- | :--- | :--- |
| **Why** | README | "Is this worth funding at all?" |
| **What** | Capability Model | "What am I actually trying to build?" |
| **What exists** | Microsoft AI Stack | "What has Microsoft already built for this?" |
| **How to choose** | Decision Framework, Scenarios | "How do I decide, and who has done this before?" |
| **How to measure** | Evaluation Criteria | "How do I score the options honestly?" |
| **How to build** | Implementation Patterns | "What does a real architecture look like?" |
| **The details** | Technologies, Feature Comparison, Quick Reference, Glossary | "What are the actual specifications?" |

When a page drifts across a boundary (a conceptual page filling with version numbers, a methodology page turning into a product tour), **move the content to the document that owns it** rather than accommodating it where it landed.

**Product specificity increases as the reader advances.** This is a progression, not a prohibition. Early documents earn the reader's understanding; later documents spend it. By the "how to choose," "how to build," and "the details" stages, **naming products precisely is the entire job**. Hedging there is not discipline, it is a failure to help. A scenario that refuses to say which product to use has abandoned the reader at the exact moment they came for an answer.

| Stage | How specific about products |
| :--- | :--- |
| **Why** (README) | Illustration only, after the stakes are set |
| **What** (Capability Model) | Teaching anchors: products illustrate concepts, never define them |
| **What exists** (Microsoft AI Stack) | Products are the subject, taught by *shape* and role rather than inventory |
| **How to choose** (Decision Framework, Scenarios) | **Name products plainly. Recommend. Compare.** |
| **How to measure / build** (Evaluation Criteria, Implementation Patterns) | Product paths, concrete architectures, named trade-offs |
| **The details** (Technologies, Feature Comparison, Quick Reference, Glossary) | Full specification, including status, licensing, and limits |

**Article III still applies at every stage.** Volatile *status* detail (versions, GA/Preview labels, dates, licensing tiers) belongs in the reference layer no matter how product-specific the prose is. **Naming a product is durable. Dating it is not.**

Explicitly labeled shortcut sections for experienced readers (quick-reference tables, "common paths") may lead with products, because the reader has already declared what they want.

### The Constitution (Governing Philosophy)

This repository is governed by a set of immutable principles defined in **[`CONSTITUTION.md`](../CONSTITUTION.md)**. This document serves as the "Supreme Law" for the project.

**Agent Instruction:** You MUST review and adhere to `CONSTITUTION.md` when making decisions.

### Article I: Fact vs. Framework Distinction
**"Cite the Specs, Own the Story."**
- **Technical Truths:** Claims about features, limits, pricing, or availability MUST be validated against official Microsoft documentation. Verify accuracy. Include links where they genuinely help the reader, but exhaustive inline citation is not required.
- **Conceptual Truths:** Thought leadership, analogies, and mental models (e.g., "The Coin," "The Podcast") DO NOT require citations. They are the lens we use to teach.

### Microsoft-First, Not Microsoft-Only (Constitution Article XIV)

> **Meet the industry where it is. Land in Microsoft where it fits.**

Readers arrive holding the industry's vocabulary: the terms practitioners argue about, the posts that circulate, the talks their engineers quote in planning meetings. Establish a concept in terms they already recognize, *then* land it in Microsoft. Opening in vendor language reads as marketing, and marketing does not change how anyone thinks.

- **Not everything lands on Microsoft, and saying so is the point.** Some ideas are industry-wide practices with no product attached; some Microsoft answers aren't ready yet. Forcing every thread to terminate in a product is the fastest way to lose the reader's trust. That trust is the only reason the genuine recommendations carry weight. Where Microsoft has the better answer, say so with confidence. Where it doesn't, say that too.
- **Translate both dialects.** Where Microsoft ships its own term for something the industry already named, teach both and map them. Your reader's engineers speak one; their vendor documentation speaks the other. Being the only place that translates is a large part of this framework's value.
- **Research the conversation, not just the release notes.** Industry practice moves faster than vendor documentation. Cover practitioner writing, named practices and their origins, community discourse, and credible measurement work, not only official docs. A framework that lags the industry's vocabulary by a year reads as dated no matter how accurate it is.
- **Attribute honestly.** Say which ideas are the industry's, which are Microsoft's, and which are ours.

### Frontier by Default (Constitution Article XV)

> **We are drawing the map, not reading it.**

This field is roughly two years old and changes weekly. The theories, methodologies, and vocabulary are being invented right now, often by practitioners writing in public, sometimes by us. The verification rules in this document govern **facts about products**. They do not govern **ideas**, and must never harden into timidity.

- **Your training is stale by default. Assume it.** What an AI contributor "knows" about a product, term, or status is probably out of date, quietly. **Never write a product fact from memory. Research it, every time.** Fluent confidence without a fresh check is a warning sign, not evidence.
- **Absence of precedent is not a prohibition.** If a pattern clearly exists and nobody has named it, name it. If a decision keeps recurring and no framework covers it, build one. In a field this new, **most of the useful ideas do not have a source to cite yet.**
- **Invention is licensed for ideas, never for facts.** Fearlessly invent narratives, analogies, methodologies, and named models. Never invent a capability, status, date, or product behavior. **You may create the lens; you may not fabricate what is seen through it.**
- **Write forward.** Aspirational and directional content is welcome: label it as direction rather than documentation, and give the reasoning so readers can judge it. A framework that only describes today's shipped features is a catalog, and catalogs age badly.
- **Be willing to be early.** Six months ahead is more useful than six months behind. Where evidence is directional rather than conclusive, say so plainly and publish anyway.
- **Say when the ground is moving.** Where a term is contested or a capability's shape is still changing, tell the reader. *"This is contested and here are the positions"* is more useful than false confidence.

**The test:** would a reader in eighteen months find this framework *prescient* or *dated*?

### Source Validation Principle (For Technical Specs)
All technology capabilities, features, and status annotations (GA/Preview/Experimental) MUST be verified against official Microsoft documentation sources.

**Always:**
- Verify against Microsoft Learn documentation first
- If Microsoft Learn does not host the relevant product documentation, use the official product documentation site (VS Code, GitHub Docs, Aspire.dev)
- Include source links where they genuinely help the reader navigate further, not for every statement
- Mark Preview/Experimental/GA status explicitly

### Guardrails for Core Files (Constitutional Mandate)

**CRITICAL:** The following files have **Immutable Intent** defined in `CONSTITUTION.md`.

1.  **`docs/capability-model.md` (The "What")**
    * **Purpose:** Defines abstract capabilities and mental models. Teaches a reader to describe the behavior they need *before naming any technology*.
    * **Rule:** Use the **Teaching Triad** (Concept -> Analogy -> Product). Products are permitted here only as **Teaching Anchors** to illustrate a concept. Do not turn this into a feature matrix. The page ends where product mapping begins.

2.  **`docs/ai-stack.md` (The "What Exists")**
    * **Purpose:** Maps described behavior onto Microsoft's building blocks: the buy-before-build ladder, the five capability groupings, the shared design vocabulary, and the five planes.
    * **Rule:** Teach the **shape** of the portfolio, not its inventory. Lead every grouping with the concept and the trade-off, then name anchors. **No version numbers, GA/Preview labels, release dates, licensing tiers, or capacity requirements.** Those live in `technologies.md` and `feature-comparison.md`. Test: if a sentence would be wrong in six months, it is on the wrong page.

3.  **`docs/decision-framework.md` (The "How")**
    * **Purpose:** Defines the *methodology* (Intake Filter, viability/desirability/feasibility gate, 9 Questions) for choosing.
    * **Rule:** Do not clutter this with technology specs. It is about the *process* of choosing.

4.  **`docs/evaluation-criteria.md` (The "Measure")**
    * **Purpose:** Defines product-independent measures (Complexity, Governance, Skills, Economics, Scale) and then maps measured outcomes to practical Microsoft paths.
    * **Rule:** Follow **Concept → Analogy → Rubric/Evidence → Microsoft Product Path**. Products must not define the criterion or create a winner/loser league table, but concise product-alignment tables or columns are expected after the measure so readers can operationalize it.
    * **Operational guardrail:** Do not strip Microsoft anchors in the name of neutrality. Preserve the evidence/readiness column, status-label non-GA paths, source volatile mappings, and explain each product's role and boundary.

### Writing Style & Voice (The Storyteller)

**This is the most important section in this file.** We write to **change how people think**, not just what they pick. The creative voice is the delivery mechanism. Without it, this is just another product catalog.

* **The Teaching Triad:** Every major concept needs the **Concept**, and, where the page maps to technology, the **Product**. The **Analogy is optional**.
    * *Bad:* "Use Copilot Studio for triggers."
    * *Good:* "Think of an Invisible Agent like a thermostat (Analogy). It waits for a change to trigger an action (Concept). In Microsoft's stack, Copilot Studio handles these triggers (Product)."
* **Analogies are optional and must earn their place (Article X):** use one when a reader would otherwise have nothing familiar to attach a new idea to; skip it when the concept is already concrete or a sharp reframe does the work better. **No analogy is better than a weak one**, and over-analogizing turns memorable models into wallpaper. When you do use one, it must help the reader *decide* something rather than just rename a taxonomy. Check the repo for metaphor collisions before minting a new one. Valid alternatives: a reframe, a concrete example, a named trade-off, a stated failure mode.
* **Named Mental Models:** Give ideas memorable handles: "The Coin," "The Kitchen," "The AI Podcast Problem," "The Furnished Condo." These sticky names survive product renames. Use them sparingly enough that they stay sticky.
* **Narrative Arcs:** Structure documents like a story (Protagonist → Inciting Incident → Resolution). Open with bold trade-off statements, not dry definitions.
* **Conversational Authority:** Write like a senior architect mentoring a colleague over coffee: direct, confident, occasionally irreverent, always grounded.
* **No Product Supremacy:** Frame technologies as "Roles in a Cast" (e.g., Orchestrator vs. Engine), not rivals.

### Style Exemplars

Before writing or editing, read these files to absorb the voice:

* **`docs/capability-model.md`**: "The Coin," "The Five Design Axes," "The AI Podcast Problem."
* **`docs/decision-framework.md`**: "Stop Shiny Object Syndrome before it starts," The Kitchen analogy.
* **`docs/evaluation-criteria.md`**: "The Furnished Condo vs. The Skyscraper," trade-off openers.

Match their rhythm. Match their boldness. If it reads like a product spec sheet, rewrite it.

---

## Key Concepts & Terminology

### Agent Naming Boundary

- **Declarative Agent** means a Microsoft 365 Copilot or Copilot Studio agent built from instructions, knowledge, and actions with platform-managed orchestration.
- **Prompt Agent** means the configuration-defined agent type in Microsoft Foundry Agent Service.
- Never use these names interchangeably. Product context must be explicit when a sentence could refer to either platform.

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
3.  **Step 1: Business Impact Assessment (viability, desirability, feasibility)**
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
- [ ] **Golden Rule held**: no product named before the reader has a reason to care (Article 0)
- [ ] Concept established before product; **analogy used only where it earns its place** (Article X)
- [ ] No forced or colliding analogies; checked repo for metaphor-family conflicts
- [ ] Named mental models used sparingly enough to stay memorable
- [ ] **"Write the silence"**: no GA/status asserted that the source doesn't state (Article III)
- [ ] No status details (versions, dates, licensing, capacity) on conceptual pages
- [ ] No shoeboxing (capabilities match official documentation)
- [ ] Third-party tools explicitly labeled (LangGraph, LangChain)
- [ ] Industry vocabulary used and mapped to Microsoft's equivalent where relevant (Article V)
- [ ] Voice matches the style exemplars (conversational, bold, story-driven)
- [ ] Plain words: no dictionary required; US English throughout

**Diagram Quality:**
- [ ] Mermaid syntax valid (test with local Jekyll)
- [ ] Dark theme applied: `%%{init: {'theme':'dark'}}`
- [ ] Color coding follows conventions
- [ ] Status annotations included: `<i>Preview</i>`
- [ ] Validation summary present with sources

**Navigation & Structure:**
- [ ] Front matter includes nav_order (1-15)
- [ ] "Next:" link points to correct document in learning flow
- [ ] Cross-references use descriptive link text
- [ ] Document sits in the right place in the narrative arc (Why → What → What exists → How to choose → How to measure → How to build → Details)
- [ ] Parallel sections share a structure (Article XI)
- [ ] Page still fits its published reading-time estimate; split at a conceptual seam if not

**Documentation Standards:**
- [ ] Consistent terminology (M365 Copilot, NOT "Microsoft 365 Copilot")
- [ ] Clear heading hierarchy (H1 → H2 → H3)
- [ ] Storytelling tone that teaches decision-making, not product selection
- [ ] Passes the "coffee test": would a senior architect stay engaged reading this?

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
