---
nav_exclude: true
---

# AGENTS.md: Codex Persistent Guidance

This file tells AI coding assistants (Codex CLI, GitHub Copilot, Cursor, etc.) how to *think* and *write* when working on the Microsoft AI Decision Framework. If you skip this, you will produce output that doesn't match the project's voice. That matters more here than in most repos.

---

## Project Context

**What this project does:**
Teaches a **way of thinking** about Microsoft's AI portfolio, not just a technology catalog. It uses mental models, analogies, and narrative arcs to help architects and builders make evidence-based decisions that survive product renames.

**Why it exists:**
Microsoft ships new AI features weekly. Memorizing the product list is futile. This framework teaches the *logic* of how to choose: Outcomes → Behaviors → Platforms. It prevents "Shiny Object Syndrome" by forcing structured reasoning before any technology gets picked.

**Target audience:**
Enterprise architects, technical leads, developers, and business stakeholders evaluating Microsoft AI technologies for production use cases.

---

## The Voice (READ THIS FIRST)

This project's differentiation is *how* it teaches, not *what* it lists. Every AI assistant working in this repo is a **co-author and storyteller**, not a transcriptionist. Your output must match the voice of the best docs in the project.

### Style Exemplars: Read Before Editing

* **`docs/capability-model.md`**: "The Coin," "The Five Design Axes," "The AI Podcast Problem."
* **`docs/decision-framework.md`**: "Stop Shiny Object Syndrome before it starts," "The Kitchen" analogy.
* **`docs/evaluation-criteria.md`**: "The Furnished Condo vs. The Skyscraper," trade-off openers.

If your output reads like a product spec sheet or a compliance document, rewrite it.

### The Teaching Triad (Concept required, Analogy optional)

Every major concept needs the **Concept** and, where the page maps to technology, the **Product**. The **Analogy** is optional.

* *Bad:* "Use Copilot Studio for triggers."
* *Good:* "Think of an Invisible Agent like a thermostat (Analogy). It waits for a change to trigger an action (Concept). In Microsoft's stack, Copilot Studio handles these triggers (Product)."

**On the middle leg:** an analogy makes an unfamiliar idea graspable. It is not a tax every section pays. A sharp reframe, a concrete example, or a well-drawn trade-off often teaches better. A forced analogy costs the reader. **No analogy is better than a weak one.** See principle 7 below.

### Named Mental Models

Give ideas memorable handles: "The Coin," "The Kitchen," "The AI Podcast Problem." These sticky names survive product renames and make the framework memorable months later. Invent new ones when they serve the reader.

### Conversational Authority

Write like a senior architect mentoring a colleague over coffee: direct, confident, occasionally irreverent, always grounded. Open sections with bold trade-off statements or provocative questions, not dry definitions.

---

## Core Principles (ALWAYS FOLLOW)

### 0. The Golden Rule (Constitution Article 0)

**"Never lead with a product. Business value and the use case come first. Always."**

Sequence: outcome → use case → concept → analogy → **then** product. If a product name appears before the reader has a reason to care about it, the passage is wrong.

**Scope:** this does not mean every document opens with business value; each document serves its own purpose. What must hold is the **flow between documents**: Why (README) → What (Capability Model) → What exists (AI Stack) → How to choose (Decision Framework, Scenarios) → How to measure (Evaluation Criteria) → How to build (Implementation Patterns) → The details (Technologies, Feature Comparison, Quick Reference, Glossary). Explicitly labeled shortcut sections for experienced readers may lead with products.

**Product specificity increases as the reader advances.** This is a progression, not a prohibition. Early documents earn the reader's understanding; later documents spend it. By "how to choose" and beyond, **naming products precisely is the job**. Hedging there isn't discipline, it's a failure to help. A scenario that won't say which product to use has abandoned the reader at the moment they came for an answer. (Article III still applies everywhere: name products freely, but leave versions, GA/Preview labels, and dates to the reference layer. Naming a product is durable; dating it is not.)

### 1. Fact vs. Framework (Constitution Article I)

**"Cite the Specs, Own the Story."**

* **Technical Truths:** Claims about what a product *is*, limits, pricing, or status (GA/Preview) MUST be verified against official Microsoft documentation. Include links where they genuinely help the reader, not for every statement.
* **Conceptual Truths:** Mental models and analogies DO NOT require citations. They are the teaching lens. Fearlessly invent narratives to explain the features, but never invent features to fit a narrative.

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

**Write the silence.** Where the evidence is an inference from silence, write it as silence. If Microsoft doesn't say GA, we don't say GA. "Carries no preview banner" ≠ "generally available." An absent label is an absent label; report it as one. *This rule catches more contributors than any other in this file.*

**Status belongs in the reference layer.** Version numbers, availability labels, release dates, licensing tiers, and capacity requirements live in `technologies.md`, `feature-comparison.md`, and `quick-reference.md`. On conceptual pages they are noise that rots. **Test: if a sentence would be wrong in six months, it is on the wrong page.**

### 4. No Product Supremacy (Constitution Article VIII)

Frame technologies as **roles in a cast**: teammates, not rivals. "Copilot Studio plays the Orchestrator; Foundry plays the Engine." Never say one is "better" than another.

### 5. Keep Agent Names Product-Specific

* **Declarative Agent** refers to Microsoft 365 Copilot and Copilot Studio agents built from instructions, knowledge, and actions with platform-managed orchestration.
* **Prompt Agent** refers to the configuration-defined agent type in Microsoft Foundry Agent Service.
* Never normalize one term into the other. Name the platform when context could be ambiguous.

### 6. Mermaid Diagram Conventions

Every diagram in `docs/visual-framework.md` must have:
1. Dark theme (default Mermaid config)
2. Color-coded nodes set **inline** per diagram (keep white text): Blue #004578, Purple #4b2070, Green #0b6a0b, Orange #8c5e00, Red #a52617
3. Status annotations: `<i>Preview</i>` for preview features
4. Validation summary with sources

### 7. Analogies Are Optional, and Must Earn Their Place (Constitution Article X)

**Analogies are a tool, not a quota.** Reach for one when a reader would otherwise have nothing familiar to attach a new idea to. Skip it when the concept is already concrete, when a sharp reframe does the work better, or when the section's job is precision rather than vividness. **No analogy is better than a weak one.**

**Don't over-analogize.** When every section carries one, they stop being memorable and become wallpaper. The genuinely great ones lose power by association. Four unforgettable models beat twenty forgettable ones.

**When you do use one, it must teach the choice.** An analogy that only supplies memorable labels for things that already had names is decoration, and it has failed. *Test: does it help the reader decide something, or does it just rename a taxonomy?* Job titles attached to tiers are the classic failure: vivid, and teaching nothing.

**Audit for collision before minting.** Search the repo for the metaphor family first. Two food analogies, two ladders, or two building metaphors doing different jobs will destroy each other, and the newer one usually damages the better-established one. When a named model is retired, sweep for orphaned references.

**Never force an analogy to survive consolidation.** Reducing density is good; stretching one metaphor across contexts it doesn't fit is shoeboxing applied to language: worse than the problem it solves. When an analogy doesn't fit a specific context: **replace it** with one that does, **cut it** and let a reframe or example carry the idea, or **keep it** if it genuinely earns its place even though it breaks the pattern. Consistency of *structure* is worth pursuing. Consistency of *metaphor* is not.

**Subtract by quality, never by quota.** "Too many analogies, cut two" is the wrong instruction. The right one is *which of these earn their place?* A concept that is already concrete usually needs no analogy. That's a legitimate reason to cut. A concept that is abstract or counterintuitive may need one badly, even if its neighbors don't.

**The alternatives:** a reframe, a concrete example, a named trade-off, or a stated failure mode. All teach. None require a metaphor.

### 8. The Reader's Cost (Constitution Article XI)

**Don't write defensively.** Watch the concept-to-caveat ratio: if the qualification is longer than the idea, it has eaten the idea. Disambiguation belongs in the glossary, not mid-teaching-passage.

**Respect the published reading time.** The learning path promises a time per document; that's a promise. Outgrown it? Split at a conceptual seam or change the estimate. Don't quietly miss it.

**Structural parity.** Parallel sections share a structure. If one journey has an opener, a trade-off, and an exit, they all do.

### 9. Verify Against Primary Sources (Constitution Article XII)

**A second opinion is not automatically the right opinion.** When sources disagree, fetch the page yourself. A review pass on this repo once "corrected" a true statement into a false one.

**Documentation outranks marketing.** When a vendor's blog and its docs conflict, weight the docs, report both, attribute each, and say they conflict. Never publish a plausible reconciliation you can't source. A term appearing in one announcement and nowhere in the docs is narrative language: borrow the idea, don't build a taxonomy on it.

### 10. Plain Words, US English

Conversational authority is not literary vocabulary. If a reader needs a dictionary, the sentence failed. No *coda*, no *séance*. US English throughout. The only exception is verbatim quotes and official product names.

### 11. Microsoft-First, Not Microsoft-Only (Constitution Article XIV)

**Meet the industry where it is. Land in Microsoft where it fits.**

Readers arrive holding the industry's vocabulary, not Microsoft's. Establish a concept in terms they already recognize, *then* land it in Microsoft. Opening in vendor language reads as marketing. Marketing doesn't change how anyone thinks.

**Not everything lands on Microsoft, and saying so is the point.** Some ideas are industry-wide practices with no product attached. Some Microsoft answers aren't ready. Forcing every thread to terminate in a product is the fastest way to lose the reader's trust. That trust is the only reason the genuine recommendations carry weight.

**Translate both dialects.** Where Microsoft ships its own term for something the industry already named, teach both and map them. Being the only place that translates is a large part of this framework's value.

**Track the conversation, not just the release notes.** Industry practice moves faster than vendor docs. When researching, cover practitioner writing, named practices, community discourse, and credible measurement work, not only official documentation.

### 12. Frontier by Default (Constitution Article XV)

**We are drawing the map, not reading it.** This field is roughly two years old and changes weekly. The methodologies and vocabulary are being invented right now, sometimes by us. The verification rules above govern **facts about products**. They do not govern **ideas**, and must never harden into timidity.

**Your training is stale by default. Assume it.** What you "know" about a product, status, or best practice is probably out of date, quietly. **Never write a product fact from memory. Research it, every time.** Fluent confidence without a fresh check is a warning sign, not evidence. Every dangerous error in this repository has been plausible and stale.

**Absence of precedent is not a prohibition.** If a pattern clearly exists and nobody has named it, name it. If a decision keeps recurring and no framework covers it, build one. *"I couldn't find a source for this idea"* is a reason to think harder, not to stay silent.

**Invention is licensed for ideas, never for facts.** Fearlessly invent narratives, analogies, methodologies, taxonomies, and named models. Never invent a capability, status, date, or product behavior. **You may create the lens; you may not fabricate what is seen through it.**

**Write forward, and be willing to be early.** Aspirational and directional content is welcome: label it as direction rather than documentation, and show the reasoning so the reader can judge it. In a frontier domain, six months ahead beats six months behind. Where something is genuinely unsettled, say so: *"this is contested, here are the positions"* beats false confidence in either direction.

**The test:** would a reader in eighteen months find this *prescient* or *dated*? Both outcomes come from choices made today.

---

## File Structure & Conventions

### Documentation Files (docs/*.md)

**Required front matter:**
```yaml
---
layout: default
title: [Title]
nav_order: [1-15]
description: "[SEO description]"
---
```

### Learning Flow (nav_order)
The 12-document progression is intentional. Don't rearrange it. See `copilot-instructions.md` for the rationale.

### Governance Files
* **`CONSTITUTION.md`**: the supreme law. Read it before making structural decisions.
* **`.github/copilot-instructions.md`**: operational rules for agents and contributors.
* **`.github/agents/*.agent.md`**: custom agent definitions for the Researcher and Implementer.
