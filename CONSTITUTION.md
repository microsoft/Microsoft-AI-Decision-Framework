# Project Constitution & Philosophy

## Research & Point of View

### What We Are Building

This repository is a **comprehensive decision engine** for Microsoft's AI portfolio. It is not just a documentation site; it is a **mental framework** designed to prevent "shiny object syndrome" by teaching a disciplined way of thinking.

It is four things fused into one, and it fails if any of them is missing:

* **A methodology:** a repeatable way to reason from a business problem to a technology choice.
* **An educational text:** written for someone new to a topic, not just for someone auditing a decision.
* **A thought-leadership piece:** it takes positions, names ideas, and argues for a way of thinking.
* **A technical reference:** accurate enough that an architect can act on it.

Think of it as a **book**, not a wiki. Chapters build on each other. The voice is consistent. Somebody is *arguing* something. A reader should be able to start at the beginning and be carried through. That continuity is a feature we protect deliberately, not an accident of file ordering.

### The Goal

**To teach a way of thinking.**

We aim to instill a mental framework for evaluating AI problems, rather than just providing a catalog of tools. The goal is to stop customers and architects from picking a technology (e.g., "I want an Agent") before they understand their problem. It forces a structured flow (**Outcomes $\rightarrow$ Behaviors $\rightarrow$ Platforms**) so the selected tool actually fits the requirement.

### The Point of View

* **Methodology over Memorization:** Microsoft ships new AI features weekly. Memorizing the product list is futile. This repo teaches the *logic* of how to choose, which survives product renames.
* **Problem-First Architecture:** We prioritize understanding the *problem* (use cases, edge cases, constraints) over picking a *solution*. Technology is a means to an end, not the starting point.
* **Holistic Trade-offs:** Decisions are never just technical. They must weigh budget, timeline, team skills, and governance.
* **Anti-Hype:** It is intentionally "Level 300-400" (technical/architectural). It rejects marketing fluff in favor of engineering reality.
* **Microsoft-First, Not Microsoft-Only:** We are opinionated about Microsoft because that is our subject, not because every problem ends there. We meet readers in the industry's language, and we land in Microsoft where Microsoft genuinely fits. Forcing every thread to terminate in a product destroys the credibility that makes the real recommendations land.
* **Accuracy over Citation:** Technical claims must be accurate and verifiable against official Microsoft documentation. Verification is the standard, not exhaustive inline citation. When a fact matters, confirm it against Microsoft Learn or official product docs. When a link genuinely helps the reader go deeper, include it. But do not let citation maintenance slow down the mission of teaching. Links rot; good thinking endures.
* **Frontier by Default:** This is a two-year-old field being invented in public. There is no settled canon to defer to. We verify *facts* ruthlessly and invent *ideas* fearlessly, and we never confuse which is which. A framework that only restates what is already documented has no reason to exist.

### Writing Style & Voice

**This is the soul of the project.** We write to **change how people think**, not just what they pick. We act as a **Storyteller** and **Guide**. Every contributor, human or AI, must write in this voice.

* **The Teaching Triad:** We bridge the gap between abstract concepts and specific products. Every major concept needs the **Concept** and, where the page's purpose calls for it, the **Product**:
    1. **The Concept:** the abstract principle. *Required.*
    2. **The Analogy:** a universal, memorable metaphor (thermostats, kitchens, coins, orchestras). ***Optional. Use it where it earns its place.***
    3. **The Product:** the Microsoft technology that fulfills the concept. *Required where the document's purpose is to map to technology.*
    * *Bad:* "Use Copilot Studio for triggers." (Assumes product knowledge).
    * *Good:* "Think of an Invisible Agent like a thermostat (The Analogy). It waits for a temperature change to trigger an action (The Concept). In Microsoft's stack, Copilot Studio handles these triggers (The Product)."
    * **On the middle leg:** an analogy is a tool for making an unfamiliar idea graspable, not a tax every section pays. A sharp reframe, a concrete example, or a well-drawn trade-off often teaches better than a metaphor. A forced analogy actively costs the reader. See **Article X** before adding one.
* **Named Mental Models:** Give ideas handles people can grab. "The Coin," "The Kitchen," "The AI Podcast Problem," "The Furnished Condo vs. The Skyscraper." These sticky names are what make the framework memorable and durable. Invent new ones when they serve the reader.
* **Narrative Arcs:** Structure documents like a story. There is a protagonist (the builder), an inciting incident (the business problem), and a resolution (the architecture). Open sections with bold trade-off statements or provocative questions, not dry definitions.
* **Conversational Authority:** Write like a senior architect mentoring a colleague over coffee: direct, confident, occasionally irreverent, always grounded. Avoid corporate jargon and committee-speak.
* **Thought Leadership:** Lead with principles and decision levers, not product pitches. The reader should walk away understanding *why* they should choose something, not just *what* to choose.
* **Speak the Industry's Language First:** Our readers arrive holding the field's vocabulary, not Microsoft's. Establish a concept in terms they already recognize, then land it in Microsoft. Opening in vendor language reads as marketing. Marketing does not change how anyone thinks. See **Article XIV**.

### Style Exemplars

The gold standard for this project's voice lives in these files:

* **`docs/capability-model.md`** puts the Teaching Triad to work: "The Coin," "The Five Design Axes," "The AI Podcast Problem."
* **`docs/decision-framework.md`** runs a narrative arc from intake filter to selection: "Stop Shiny Object Syndrome before it starts."
* **`docs/evaluation-criteria.md`** frames trade-offs through analogy: "The Furnished Condo vs. The Skyscraper," "The Kitchen."

When writing or editing, read these first. Match their rhythm, their boldness, and their refusal to be boring.

### The Narrative Arc of the Framework

Individual documents have their own jobs. The **sequence** has one job, and it is the same job as a book's table of contents: carry a reader from a business problem to a defensible decision without ever putting the answer before the question.

| Stage | Documents | The reader's question |
| :--- | :--- | :--- |
| **Why** | README | "Is this worth funding at all?" |
| **What** | Capability Model | "What am I actually trying to build?" |
| **What exists** | Microsoft AI Stack | "What has Microsoft already built for this?" |
| **How to choose** | Decision Framework, Scenarios | "How do I decide, and who has done this before?" |
| **How to measure** | Evaluation Criteria | "How do I score the options honestly?" |
| **How to build** | Implementation Patterns | "What does a real architecture look like?" |
| **The details** | Technologies, Feature Comparison, Quick Reference, Glossary | "What are the actual specifications?" |

Two rules follow from this table:

1. **Each document may serve its own purpose.** A glossary is allowed to be alphabetical; a comparison matrix is allowed to be a matrix. Local structure is a local decision.
2. **The flow between documents must hold.** Business value precedes methodology; methodology precedes landscape; landscape precedes specification. When a page drifts across a boundary (a conceptual page filling with version numbers, a methodology page turning into a product tour), the fix is to move the content to the document that owns it, not to accommodate it where it landed.

---

## The Constitution (Guidelines)

To keep this repository aligned with its mission, we adhere to the following "Constitution":

### Article 0: The Golden Rule
#### "Never lead with a product. Business value and the use case come first. Always."

This governs everything below it. The product is the *answer*, and an answer only means something once the reader owns the question.

* **The sequence:** outcome → use case → concept → analogy → **then** product.
* **The test:** if a product name appears before the reader has a reason to care about it, the passage is wrong.
* **Scope:** read this carefully. The Golden Rule does **not** mean every document must open with business value. Each document serves its own purpose, and a reference page is allowed to be a reference page. What must hold is the **flow *between* documents**: the framework as a whole moves from outcomes to methodology to landscape to specifications. A reader who follows the learning path must never meet a product before they meet the problem it solves.
* **The corollary for shortcut sections:** places explicitly built for experienced readers (quick-reference tables, "common paths," lookup matrices) may lead with products, because the reader has already declared what they want. Label those sections as shortcuts so the exception is visible.
* **Product specificity increases as the reader advances.** This is a *progression*, not a prohibition. Early documents earn the reader's understanding; later documents spend it. By the time someone reaches "how to choose," "how to build," and "the details," **naming products precisely is the entire job**. Hedging there is not discipline, it is a failure to help. A scenario that refuses to say which product to use has abandoned the reader at the exact moment they came for an answer.

| Stage | How specific about products |
| :--- | :--- |
| **Why** (README) | Illustration only, after the stakes are set |
| **What** (Capability Model) | Teaching anchors: products illustrate concepts, never define them |
| **What exists** (Microsoft AI Stack) | Products are the subject, taught by *shape* and role rather than inventory |
| **How to choose** (Decision Framework, Scenarios) | **Name products plainly. Recommend. Compare.** The reader came here for an answer |
| **How to measure / build** (Evaluation Criteria, Implementation Patterns) | Product paths, concrete architectures, named trade-offs |
| **The details** (Technologies, Feature Comparison, Quick Reference, Glossary) | Full specification, including status, licensing, and limits |

  Note that **Article III still applies at every stage**. Volatile *status* detail (versions, GA/Preview labels, dates, licensing tiers) belongs in the reference layer regardless of how product-specific the prose is. Naming a product is durable. Dating it is not.

### Article I: The Fact vs. Framework Distinction
#### "Cite the Specs, Own the Story."
* **Technical Truths:** Claims about what a product *is*, what it *does*, specific limits, pricing, or availability must be validated against official **Microsoft documentation** sources. Verify accuracy before publishing. Include links where they genuinely serve the reader, but exhaustive inline citations are not required for every technical statement. The goal is correctness, not a bibliography.
* **Conceptual Truths:** Thought leadership, analogies, and mental models (e.g., "The Coin," "The Podcast") are the creative engine of this repository. These do not require citations because they are the *lens* we created to teach the material.
* **Rule:** Never invent a feature to fit a narrative, but fearlessly invent narratives to explain the features.
* **Rule: This distinction is the most important one in the document.** The verification discipline exists to protect factual claims; it must never be used as a reason to avoid original thinking. In a field this new, **most of the useful ideas do not have a source to cite yet.** See **Article XV**.

### Article II: The Anti-Shoeboxing Mandate
#### "Don't force a square peg into a round hole."
* Do not twist a technology's definition to fit a user's request. If a user asks for a "multi-agent system" in Logic Apps, we must say "Logic Apps is an orchestrator, not an agent framework," rather than pretending it fits.
* **Rule:** Explicitly state what a technology *cannot* do.

### Article III: Status Transparency
#### "Preview is not Production."
* We must rigorously distinguish between **General Availability (GA)**, **Public Preview**, and **Experimental**.
* **Rule:** Every diagram and table must visually flag non-GA features.
* **Rule: Write the silence.** Where the evidence is an *inference from silence*, write it as silence. If Microsoft does not say GA, we do not say GA. "Carries no preview banner" is not "generally available," and "the docs don't state a date" is not "it shipped." An absent label is an absent label; report it as one and let the reader decide what to do about the ambiguity. This has caught more contributors than any other rule in this document.
* **Rule: Status belongs in the reference layer.** Version numbers, availability labels, release dates, licensing tiers, and capacity requirements belong in `technologies.md`, `feature-comparison.md`, and `quick-reference.md`, where they can be maintained. On conceptual pages they are noise that rots. **Test: if a sentence would be wrong in six months, it is on the wrong page.**

### Article IV: The Order of Operations
#### "Outcomes $\rightarrow$ Behaviors $\rightarrow$ Platforms."
* Content must guide users through the decision flow:
    1.  **Outcomes (Buckets):** Who benefits and how?
    2.  **Behaviors (Framework):** How does the agent act? (Assistive vs. Autonomous, UI vs. No-UI).
    3.  **Platforms (Groupings):** Which tool supports that behavior?
* **Rule:** Do not recommend a "Solution" (Capability Groupings 3 through 5) without first checking if an **End‑user copilot** (Capability Grouping 1) solves the problem for free.
* **Rule: The 3 AI Buckets are a load-bearing pillar.** *AI for You*, *AI as a Product or Feature*, and *AI for Your Codebase* are the framework's primary filter. Improve them; never demote or replace them.
* **Rule: The buckets are parallel, never sequential.** They are three different conversations, not three stages of maturity. Nobody graduates from one to the next. An organization is usually having all three at once, in different rooms, on different budgets. Any structure that implies progression (numbered lists, maturity language, "next level" framing) must be corrected, because the misreading is easy and expensive.
* **Rule: Buy before build.** Escalate deliberately: use what is already on, browse what is already shipped, configure it, extend it, and only then build. Every rung upward transfers ownership from a vendor to you, permanently. **The characteristic failure in this domain is over-climbing, not under-climbing.** Nobody gets into trouble by solving a problem simply.

### Article V: The Navigation Mandate
#### "Teach the map, not just the destination."
* Our goal is to teach users *how* to navigate Microsoft's changing landscape, not just give them a static answer.
* **Rule:** Always reference official decision trees and frameworks to ground our guidance in Microsoft's recommended paths.
* **Rule: Be the connective tissue.** Microsoft publishes excellent guidance in parallel, from different teams, in different vocabularies, with taxonomies that do not cross-reference one another. Our value is not competing with any of it; it is stitching it together and teaching the judgment none of it teaches. When Microsoft has published something good, point at it and say so.
* **Rule: Speak the industry's language, not only Microsoft's.** Our readers work in a world that has its own vocabulary, and it does not wait for Microsoft to adopt it. Where the industry has settled on a term, use it, define it, and map it to Microsoft's equivalent. Teaching both dialects is a service only this framework performs. Ignoring the industry's words to stay on-message makes us less useful, not more loyal.
* **Rule: Attribute honestly in both directions.** Say plainly which models are ours and which are Microsoft's. Do not imply Microsoft endorses a framing we invented, and do not present Microsoft's published thinking as our own insight. Where a term is a vendor's marketing language with no documentation behind it, say that too.

### Article VI: The Immutable Intent of Core Files
#### "Balance the Concept, the Analogy, and the Product."
Certain files have a specific educational purpose.

* **`docs/capability-model.md` (The "What"):**
    * **Intent:** Defines *capabilities* and *mental models* (e.g., "The Coin," the delegation levels, the Five Design Axes). It teaches a reader to describe the behavior they need **before naming any technology**.
    * **Guardrail:** Use the **Teaching Triad**. Products are permitted here only as concrete examples of a concept, after an analogy has established understanding. Products illustrate; they do not define. **The page must end before the product mapping begins.** That is what `ai-stack.md` is for.
* **`docs/ai-stack.md` (The "What Exists"):**
    * **Intent:** Maps described behavior onto Microsoft's building blocks: the buy-before-build ladder, the five capability groupings, the shared design vocabulary, and the planes of the stack. This is the page where products are legitimately the subject.
    * **Guardrail:** Teach the **shape** of the portfolio, not its inventory. Every grouping leads with the concept and the trade-off, then names anchors. **No version numbers, availability labels, release dates, licensing tiers, or capacity requirements.** Those belong to `technologies.md` and `feature-comparison.md`, where they can be kept accurate. If a sentence would be wrong in six months, it is on the wrong page.
* **`docs/decision-framework.md` (The "How"):**
    * **Intent:** Defines the *methodology* and *intake process* (viability/desirability/feasibility gate, 9 Questions).
    * **Guardrail:** Do not clutter this with technology specs. It is about the *process* of choosing.
* **`docs/evaluation-criteria.md` (The "Measure and Apply"):**
    * **Intent:** Defines the product-independent criteria used to measure complexity, delivery capability, economics, governance, and scale, then shows how those measurements translate into practical Microsoft paths.
    * **Guardrail:** Article VI governs **sequence, not product exclusion**. Establish the concept, analogy, rubric, and required evidence first; then provide concise Microsoft product anchors that operationalize the result. Products must not define the criterion or turn the page into a league table, but the page must answer, “How do I apply this measure with Microsoft technology?”

### Article VII: The Teaching Mandate
#### "Explain the 'Why' before the 'What'."
* Content must teach a **way of thinking** through story, principles, and frameworks.
* **Rule:** If a section reads like a product chooser, rewrite it to explain *how to decide* based on underlying principles (e.g., "Velocity vs. Control") rather than just product names.

### Article VIII: The Collaborative Mandate
#### "No Product Supremacy."
* We reject the narrative that one product is "better" than another (e.g., "Foundry vs. Copilot Studio"). This is a false conflict.
* **Rule:** Always frame technologies as **roles in a cast**.
    * *Bad:* "Foundry is better than Copilot Studio because it has code."
    * *Good:* "Copilot Studio plays the role of the Orchestrator, managing the flow, while Foundry plays the role of the Engine, powering the deep reasoning. They are teammates, not rivals."

### Article IX: The Storyteller Mandate
#### "If it's boring, rewrite it."
* The creative voice is not decoration. It is the delivery mechanism. A dry feature comparison teaches nothing; a well-told analogy changes how someone thinks permanently.
* **Rule:** Every document, section, and edit must pass the "coffee test." Would a senior architect stay engaged reading this over coffee, or would they skim past it? If the answer is skim, the writing needs work.
* **Rule:** AI agents working on this project must write in the same storytelling voice as the humans. They are co-authors, not transcriptionists. Refer to the Style Exemplars and the Teaching Triad before every edit.
* **Rule: Plain words.** Conversational authority is not literary vocabulary. If a reader needs a dictionary, the sentence failed. No *coda*, no *séance*, no showing off. The register is a smart colleague explaining something clearly, not an essayist admiring their own prose.
* **Rule: US English**, consistently. Mixed spelling conventions make a document read as *assembled* rather than *authored*. The one exception: never "correct" spelling inside a verbatim quote or an official product name.

### Article X: The Analogy Mandate
#### "An analogy must earn its place, and carry the decision when it does."

Named mental models are this project's signature, which is exactly why they need discipline. **Analogies are optional.** They are a tool for making an unfamiliar idea graspable, not a quota, and not proof that a section was written with care.

* **Optional, not mandatory.** Reach for an analogy when a reader would otherwise have nothing familiar to attach a new idea to. Skip it when the concept is already concrete, when a sharp reframe does the work better, or when the section's job is to be precise rather than vivid. **No analogy is better than a weak one.** A section that opens with a trade-off, states a principle plainly, and gives a real example is not deficient for lacking a metaphor.
* **Don't over-analogize.** When every section carries one, they stop being memorable and start being wallpaper, and the genuinely great ones lose their power by association. Density is the enemy of stickiness. A framework with four unforgettable models beats one with twenty forgettable ones.
* **An analogy must teach the choice.** If it only supplies memorable labels for things that already had names, it is decoration and it has failed. Test: does the analogy help a reader *decide something*, or does it just rename a taxonomy? Job titles attached to tiers are the classic failure: they feel vivid and teach nothing.
* **Audit for collision before minting.** Before introducing a named model, search the repository for the metaphor family. Two food analogies, two ladders, or two building metaphors doing different jobs will quietly destroy each other, and the newer one usually damages the older, better-established one. Related metaphors that reinforce each other are good; competing ones are a defect.
* **One frame per idea.** If a section already has a governing metaphor, extend it rather than layering a second one on top.
* **Retire cleanly.** When a named model is replaced, sweep the whole repository for orphaned references. A retired metaphor surviving in a cross-reference is worse than never having changed it.
* **Never force an analogy to survive consolidation.** Reducing analogy density is good; forcing one metaphor to stretch across contexts it does not fit is **Article II shoeboxing applied to language**, and it is worse than the density problem it was meant to solve. When an analogy does not do an adequate job for a specific context, you have three honest options, in this order: (1) **replace it** with one that actually fits that context, (2) **cut it** and let a reframe, example, or trade-off carry the idea, or (3) **keep it** if it genuinely earns its place even though it breaks the pattern. Consistency of *structure* is worth pursuing. Consistency of *metaphor* is not, and chasing it produces prose that sounds tidy and teaches nothing.
* **Subtract by quality, never by quota.** "This section has too many analogies, cut two" is the wrong instruction. The right one is: *which of these earn their place?* A concept that is already concrete usually needs no analogy at all. That is a legitimate reason to cut, and the better reason. A concept that is abstract or counterintuitive may need one badly, even if its neighbors don't.
* **The alternatives, for when an analogy isn't right:** a **reframe** ("teams argue about capability; the question that decides the outcome is authority"), a **concrete example**, a **named trade-off**, or a **stated failure mode**. All of these teach. None of them require a metaphor.

### Article XI: The Reader's Cost
#### "Every caveat you add is paid for by the reader."

* **Do not write defensively.** Anticipating a misunderstanding that only an unlikely reader would have costs every other reader the sentence. Watch the **concept-to-caveat ratio**: if the qualification is longer than the idea, the qualification has eaten the idea. Disambiguation belongs in the glossary, where lookup is the whole purpose, not in the middle of a teaching passage.
* **Respect the stated time budget.** The learning path publishes a reading time for each document. That is a promise. When a page outgrows its promise, either split it at a genuine conceptual seam or change the estimate, but do not quietly miss it, because every other estimate on the page loses credibility with it.
* **Split at seams, not at line counts.** The right place to divide a document is where its *purpose* changes, not where it hits an arbitrary length. If you find yourself writing a transition sentence that reads like a chapter break, that is the seam.
* **Structural parity.** Parallel sections must share a structure. If one journey, criterion, or pattern has an opener, a trade-off, and an exit, they all do. Readers navigate by pattern, and a missing element reads as an omission even when the prose is good.

### Article XII: The Verification Mandate
#### "A second opinion is not automatically the right opinion."

* **Go to the primary source.** When two sources disagree, fetch the page yourself. During this framework's development a review pass "corrected" a true statement into a false one, and it was published only because someone re-read the original documentation. Reviews improve accuracy on average and introduce errors occasionally; both are true at once.
* **Documentation outranks marketing.** When a vendor's blog and its documentation disagree, weight the documentation; it is written by the people who get paged. Report both, attribute each, and say plainly that they conflict. Never average them into a comfortable middle, and never publish a plausible reconciliation you cannot source.
* **One blog post is a claim, not a specification.** A term or capability that appears in exactly one announcement and nowhere in the documentation is narrative language. Borrow the idea if it is useful; do not build a taxonomy on it.
* **Prefer the documented taxonomy to the hallway slang.** Where an official categorization exists, teach it and map the informal terms to it. Slang usually collapses distinctions that matter.

### Article XIII: Methodologies Outlive Their Citations
#### "The spec ages. The story doesn't."

* A methodology does not become wrong because its source page stopped being updated. Frameworks earn their place by being *useful*, and usefulness has a longer half-life than a URL.
* **Rule:** When a foundational source ages, **keep the frame and refresh the evidence.** Add a currency note so the reader knows what they are trusting, then point at wherever the thinking now lives.
* **Rule:** Where a newer framework independently arrives at the same conclusions as an older one, that is **corroboration, not replacement**, and it is worth saying so. A framework that a later, independent effort re-derived from scratch has been validated, not superseded.
* **Rule:** Do not delete a working mental model for tidiness. Retire it only when something genuinely better replaces it, and say why.

### Article XIV: The Bridge
#### "Meet the industry where it is. Land in Microsoft where it fits."
This framework is **Microsoft-first, not Microsoft-only**. The distinction is what makes it credible enough to be useful.

Our readers do not live inside Microsoft's documentation. They live in the industry conversation: the terms practitioners argue about, the posts that circulate, the talks their engineers quote back at them in planning meetings. They arrive already holding a vocabulary and a set of opinions. **A document that ignores all of that and opens in vendor language reads as marketing, and marketing does not change how anyone thinks.**

So the arc runs in one direction:

> **Start in the industry's language. Establish the problem in terms the reader already recognizes. Then land it in Microsoft, where it genuinely lands.**

* **The industry conversation is the on-ramp, not an appendix.** Use the field's own terms, framings, and debates to establish a concept. A reader who recognizes the problem in familiar language will follow you into the Microsoft answer. A reader handed the Microsoft answer first has no reason to believe it.
* **Not everything lands on Microsoft, and saying so is the point.** Some ideas are industry-wide practices with no Microsoft product attached. Some problems are best solved with something Microsoft does not sell. Some Microsoft answers are genuinely not ready. **Forcing every thread to terminate in a product is the fastest way to lose the reader's trust.** Trust is the only reason the genuine recommendations carry weight. Where Microsoft has the better answer, say so with confidence. Where it does not, say that too.
* **Translate in both directions.** Microsoft frequently ships its own vocabulary for concepts the industry already named. Teach both, and map them. Your reader's engineers speak one dialect; their vendor documentation speaks the other. **Being the only place that translates is a large part of this framework's value.**
* **Track the conversation, not just the release notes.** Industry practice moves faster than vendor documentation. Research must cover practitioner writing, named practices, conference and community discourse, and credible measurement work, not only official docs. A framework that lags the industry's vocabulary by a year reads as dated no matter how accurate it is.
* **Attribute honestly.** Say which ideas are the industry's, which are Microsoft's, and which are ours. Borrowing the field's credibility without crediting it is the kind of thing readers notice once and never forget.

### Article XV: The Frontier Mandate
#### "We are drawing the map, not reading it."

Everything in this framework describes a field that is roughly two years old and changing weekly. The theories, methodologies, vocabulary, and architectural patterns are **being invented right now**, often by practitioners writing in public, sometimes by us. There is no settled canon to defer to, and pretending otherwise produces a document that is safe, correct, and useless.

This article exists to make sure the verification rules above never harden into timidity. **Articles I, III, and XII govern *facts about products*. They do not govern *ideas*.** Confusing the two is the single most likely way this framework becomes boring.

* **Your training is stale by default. Assume it.** In a field moving this fast, what an AI contributor "knows" about a product, term, or best practice is probably out of date, quietly. **Never write a product fact from memory. Research it, every time.** If you find yourself confident about a status, a name, or a capability without having checked it today, that confidence is a warning sign, not evidence. The most dangerous errors in this repository have all been fluent, plausible, and stale.
* **Absence of precedent is not a prohibition.** If a pattern clearly exists and nobody has named it, **name it.** If a decision keeps recurring and no framework covers it, **build the framework.** "I could not find a source for this idea" is a reason to think harder, not a reason to stay silent. This repository has invented mental models that no vendor publishes, and those are the parts readers remember.
* **Invention is licensed for ideas, never for facts.** Fearlessly invent narratives, analogies, methodologies, taxonomies, and named models to explain the field. Never invent a capability, a status, a date, or a product behavior. The line is bright and it is the only line: **you may create the lens; you may not fabricate what is seen through it.**
* **Write forward.** Aspirational and directional content is welcome: where the practice is heading, what a pattern implies, what an architect should be preparing for. Label it as direction rather than documentation, and give the reader the reasoning so they can judge it for themselves. A framework that only describes today's shipped features is a catalog, and catalogs age badly.
* **Be willing to be early.** In a frontier domain, being six months ahead is more useful than being six months behind. If a practice is emerging and the evidence is directional rather than conclusive, say so plainly (*"this is where it appears to be going, and here is why"*) and publish it. Waiting for certainty in a field that has not produced any is just choosing to be late.
* **Design for graceful decay.** Write so that when the specifics change, the thinking still holds. That is the whole reason concepts live on conceptual pages and statuses live in the reference layer. A page built on principles ages into a classic; a page built on release notes ages into a liability.
* **Say when the ground is moving.** Where something is genuinely unsettled (a term the industry hasn't agreed on, a capability whose shape is still changing, a debate with no winner yet), **tell the reader that.** "This is contested and here are the positions" is more useful, and more honest, than false confidence in either direction.

**The test for this article:** would a reader in eighteen months find this framework *prescient* or *dated*? Both outcomes come from choices made today.

---

### Article XVI: The Human Hand
#### "If it reads like a machine wrote it, nobody believes the human behind it."

This framework argues that AI should be adopted with judgment. That argument collapses if the prose itself looks like it was generated and shipped without a human reading it. **Every recognizable AI writing tic costs us credibility we cannot buy back**, and readers now spot them instantly. This article is about earning the right to be believed.

* **No em dashes. None.** The em dash is banned outright, and so is the en dash in prose. This is not a stylistic preference; it is the single most recognizable signature of machine-written text. Use a colon to introduce, a semicolon to join, parentheses to aside, commas to embed, or a period to split. **Splitting the sentence is usually the best of these** and almost always sharpens the writing. Hyphens inside compound words (`buy-before-build`, `low-code`) are unaffected.
* **Vary the repair, or you have just traded one tic for another.** Prose where every former dash became a colon reads exactly as mechanical as prose full of dashes. Mix the fixes. Read the paragraph aloud.
* **Retire the tells.** Avoid: reflexive "not just X, but Y" constructions; the reflex to make every list three items long; participial closers (*", ensuring seamless integration"*); filler openers (*"It's worth noting that"*, *"Here's the thing"*, *"At the end of the day"*, *"Ultimately"*); and the vocabulary that now signals generated text: *delve, tapestry, realm, testament to, navigate the complexities, seamless, robust, leverage* as a verb, and *landscape* used metaphorically.
* **Emphasis must be scarce to work.** More than roughly two bolded spans in a paragraph means the bold has stopped meaning anything. Bold the claim, not the sentence around it.
* **Symmetry is a smell.** Paragraphs of near-identical length, sections with identical internal shapes, and sentences that mirror each other in rhythm all read as generated. Human writing is uneven. Let it be.
* **This applies to every file, including this one.** Governance documents, agent instructions, and contributor guides are read by people too.

**The test for this article:** could a skeptical reader point at a paragraph and say *"an AI wrote this"*? If yes, rewrite it, whoever or whatever wrote it first.
