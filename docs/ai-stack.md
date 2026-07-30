---
layout: default
title: Microsoft AI Stack
nav_order: 3
description: "Map agent behavior onto Microsoft's building blocks - the ladder, the capability groupings, and the five planes of the stack"
---

# Microsoft AI Stack
{: .no_toc }

You named your bucket. You described the behavior. Now, and only now, do products get to enter the room.

This is the second half of the foundation. The [Capability Model]({{ '/docs/capability-model' | relative_url }}) taught you how to *think* about an AI problem without naming a technology. This page maps that thinking onto what Microsoft actually ships. More usefully, it teaches you how to reason about a portfolio that will have changed by the time you finish reading it.

Four moves, in order:

1. **Climb the Ladder** - walk your bucket's journey and stop on the lowest rung that solves the problem.
2. **Find your building block** - match the behavior to one of five capability groupings.
3. **Learn the shared vocabulary** - so your team can describe agent designs to each other without inventing dialects.
4. **See the whole stack** - the five planes that every solution ends up standing on.

{: .note }
> **A note on what you will not find here.** No version numbers, no release dates, no availability labels. Those belong in [Technologies]({{ '/docs/technologies' | relative_url }}) and [Feature Comparison]({{ '/docs/feature-comparison' | relative_url }}), where they can be kept accurate. This page teaches the shape of the portfolio, which changes far more slowly than its contents.

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## The Ladder, Walked Three Times

You named your bucket. You described the behavior. Now, and only now, do products get to enter the room.

Here is the ladder again: **Use → Browse → Configure → Extend → Build declarative → Build custom engine.** The rungs are always the same. What changes between buckets is **how high you normally need to climb, and what each rung costs you when you get there.**

That distinction is the part most frameworks skip. Three teams can climb the identical ladder and stop at three different heights, and all three can be right. An employee-productivity problem that reaches rung 5 is usually a scoping failure. A customer-facing product that stops at rung 2 is usually a missed opportunity. Knowing your bucket's normal ceiling is how you tell an ambitious plan from an over-engineered one. In a meeting, out loud, before the money moves.

### Journey 1: AI for You

**Who's climbing:** an IT lead or business owner trying to give time back to people who have none.

**The trade-off: Adoption vs. Ambition.** This bucket loses far more value to *unopened* capability than to *missing* capability. A finance manager burning Friday afternoons summarizing the same five reports does not need a project. They need someone to switch on the thing the organization already bought, and then tell them it exists.

**Normal ceiling: rung 4.** Nearly all the value here is won in the first two rungs.

**Rung 1: Use what's already switched on.** **Microsoft 365 Copilot Chat** is the entry point most organizations already have, metering any agents you use as you go. **Microsoft 365 Copilot** is the step up that grounds answers in your actual work. If the problem dies here, you are finished. Celebrate rather than escalate.

**Rung 2: Browse before you build.** Microsoft ships agents you would otherwise spend a quarter building. **Researcher** and **Analyst** handle deep multi-step research and data analysis, already governed, already in the tenant. **Copilot Cowork** belongs on this rung too, and the placement is the lesson: it changes the unit of delegation from keystrokes to hours of work with checkpoints, and you get there by *enabling* it, not by building it. Capability that arrives as a setting still counts as capability.

Two things this rung asks of you that the others don't. First, somebody has to actually tell people it exists; unopened capability is the largest single source of wasted spend in this bucket. Second, browsing is a governance act as much as a shopping act. Before you switch something on, know who published it, who owns it, and what it may reach. Cowork in particular carries real prerequisites around licensing, metered credits, model enablement, and regional availability; the [Technologies]({{ '/docs/technologies' | relative_url }}) page carries the current fine print, and you should read it before you promise a date.

**Rung 3: Configure with your knowledge.** The agents admin guide draws this rung explicitly: *"you can configure and deploy out-of-the-box agents without having to create and publish a new agent."* The lightest useful version is a **SharePoint agent**. Point it at a document library and you have a grounded, permission-respecting **Recommend**-level agent without writing anything.

**Rung 4: Extend with connectors.** When the answer lives outside Microsoft 365, **Graph connectors** bring that content into the reasoning surface rather than sending users to fetch it.

**Rungs 5 and 6: a warning sign, not a milestone.** If an employee-productivity problem is driving you toward a declarative build or a custom engine, the usual cause is a problem statement that quietly grew a second problem inside it. Split it before you build it.

**You have left this bucket when** the thing you are building serves customers, or serves a system rather than a person. That is Journey 2.

### Journey 2: AI as a Product or Feature

**Who's climbing:** a product owner or architect who will be accountable when this answers a customer badly at 2 a.m.

**The trade-off: Velocity vs. Control.** Every rung buys control and charges velocity. The failure here is rarely picking *wrong*; it's picking *high* by default, because "custom" sounds more serious in a steering committee than "configured."

**Normal ceiling: rung 6.** But only a minority of use cases genuinely need it, and the ones that do can usually say exactly why.

**Rungs 1 to 3 still apply.** Check whether Microsoft or a partner already ships this before you design anything. The fastest product decision is discovering somebody already solved it.

**Rung 4: Extend the copilot your users already open.** Don't ship a new app; borrow one. You supply instructions, knowledge, and actions; Microsoft 365 Copilot supplies the model, the chat surface, the identity, and the security perimeter. If your users already live in Teams, this is the highest-leverage rung on the whole ladder, and it is the one teams skip most often on their way to something that sounds harder.

**Rung 5: Configuration, not code.** Somewhere past instructions-in-a-file, behavior needs branching, state, human handoff, memory, and connectors, but still doesn't need you to own a runtime. This is the widest rung on the ladder and the one most people misunderstand, because they think it's a single product. It isn't. It's a *shape* of agent, defined by configuration rather than code, and Microsoft offers it on two authoring surfaces:

- **Copilot Studio**, where the agent is a **declarative agent**. Its **new agent experience** runs on an enhanced orchestration runtime for better response quality and reasoning, alongside the classic experience. In it you can connect **Work IQ** for organizational context, compose reusable **skills**, give the agent persistent **memory**, delegate to **connected agents**, and ground answers in a **Foundry** knowledge base.
- **Microsoft Foundry**, where the same shape is called a **prompt agent**. In Microsoft's words: *"defined entirely through configuration: instructions, model selection, and tools,"* authored in the portal or programmatically through the SDK and REST API for CI/CD. *"Foundry runs the agent for you; there's no application code to maintain, no compute to pay for."*

**The two names are not interchangeable, and the distinction is worth keeping:** *declarative agent* is Copilot Studio and Microsoft 365 Copilot; *prompt agent* is Foundry Agent Service. Same idea, two products, two vocabularies.

**Here is the part that should change how you choose.** Both surfaces publish to the same places. Foundry describes it plainly. You *"version agents, create stable endpoints, and share through **Microsoft Teams, Microsoft 365 Copilot, and the Entra Agent Registry**."* Copilot Studio publishes to those channels too.

So the destination is not the decision. Your users end up in Microsoft 365 Copilot and Teams either way. What you are actually choosing at rung 5 is **which authoring surface fits the team that will own this thing for the next three years**: a maker-friendly canvas with governance built into Power Platform, or a developer surface with SDK authoring, source control, and CI/CD. Pick for the owner, not for the destination.

**Rung 6: Build a custom engine.** You are here when the model choice, the eval harness, the hosting boundary, or the orchestration semantics must be *yours*. Not configured, but written. **Microsoft Foundry** is the engine room, putting a very large model catalog, agents, and tools under one management plane; a Foundry **Hosted agent** is the container-based sibling of the prompt agent, for when configuration genuinely runs out. **Microsoft Agent Framework** is the code-first orchestration path, described by Microsoft as the *"direct successor… next generation of both"* Semantic Kernel and AutoGen, with migration guides from each.

**One structural fact to design around.** Foundry Workflows is on a retirement path, so do not start new work on it. Move by role: **Agent Framework** for code-first graphs (recommended, since exported definitions carry over with little change), **Azure Logic Apps** when you want to keep a visual designer for business-process automation, and **agent-to-agent handoffs** for lightweight cases. The retirement date and the exact support boundaries live in [Technologies]({{ '/docs/technologies' | relative_url }}) and the [Migration Calendar]({{ '/' | relative_url }}#the-migration-calendar), because those are the details most likely to move.

**And underneath all six rungs sits the foundation.** The thing that finally decides whether any of this is good isn't the rung you stopped on; it's the data the agent stands on. Hold that thought. It returns at the end of this page, because it is true for all three buckets.

**You have left this bucket when** the thing you're building is aimed at your own delivery pipeline rather than at a user or a customer. That is Journey 3.

### Journey 3: AI for Your Codebase

**Who's climbing:** an engineering leader whose delivery pipeline, not their product, is the bottleneck.

**The trade-off: Generation vs. Verification.** This is the bucket where the constraint moves. Writing code stopped being the expensive part; deciding whether code is *correct* did not get cheaper at the same rate. GitHub says this out loud: as agents produce more pull requests, the pressure on code review compounds. So every rung above the second is a bet that your organization can verify more than it verifies today. And if that bet is wrong, the extra output arrives anyway and lands in a queue that was already full.

**Normal ceiling: rung 4.** Most engineering organizations capture the entire return before they build anything. Rungs 5 and 6 are a product decision wearing developer-tooling clothes.

**One honest note about this ladder.** GitHub does not publish a staged maturity model for adopting agents. The rungs here are our framing, not theirs. What GitHub does publish, consistently, is an argument about where human judgment belongs. That argument is what every rung below is really about.

#### Before the rungs: vibe coding, vibe engineering, and agentic engineering

The industry has spent two years arguing about this bucket, and the argument produced three terms you will hear in interviews, conference talks, and your own engineering channels. If you already know them, this is where they fit in the model. If you don't, learn them here. They are the fastest way to have a precise conversation about a subject that otherwise dissolves into opinion and anecdote.

**Vibe coding** came first, and it was precise before it escaped. You give in to the vibes and forget the code exists; you stop reading the diffs; the code grows beyond your comprehension. It was explicitly scoped to throwaway weekend projects. It was never offered as a methodology. It became an accusation only after people started applying it to production systems, which is not what its author proposed. Used correctly, it names a legitimate mode: exploratory, disposable, and honest about being both.

**Vibe engineering** was coined as its deliberate antonym, the same agents directed by experienced engineers applying *more* rigor rather than less. The term did real work by naming the opposite, and you will still hear it. When someone on your team says it, they mean the disciplined practice.

**Agentic engineering** is where the industry has settled, and it's the term to standardize on. Even the engineer who coined *vibe engineering* has since conceded that this one won and moved to it. What it names is the goal itself: claim the leverage agents offer **without compromising the quality of the software**. That costs you more oversight and scrutiny, not less.

The uncomfortable part is that vibe coding and agentic engineering are **indistinguishable from the outside**. Same tools, same editor, pull requests that look alike. What separates them is entirely the machinery built around the work.

**And the discriminator is not the one you'd expect.** The obvious test (*do you read every line?*) is quietly failing, because serious engineers building serious software have already stopped reading every line, and their software is fine. The honest test is different: **can you prove it works?** Tests, conformance checks, preview environments, adversarial review, a definition of done enforced by something other than your own optimism. Reading was one way to earn confidence. It stopped being the only one, and it never scaled anyway.

That reframes discipline as *infrastructure* rather than virtue. That is good news, because infrastructure can be funded and built, and virtue can only be hoped for.

**The failure mode has a name worth carrying into a leadership conversation: the normalization of deviance.** Every time an agent gets it right without supervision, the case for supervising it next time gets a little weaker. Nothing announces the moment the trust became unearned. You discover it in an incident review, reconstructing a decision nobody consciously made.

**The counterintuitive part, and the reason seniority matters more rather than less:** agents reward the practices that were already good engineering. Better specs produce better output. Comprehensive tests make delegation safe. Clean architecture leaves less room for invented abstractions. When these projects fail, it is rarely the AI that caused it. It is the design thinking that got skipped because generation felt fast enough to skip it.

**A note on dialects.** Microsoft and GitHub largely don't use this vocabulary. They've built their own (spec-driven development, agentic DevOps, context engineering) and they treat vibe coding as a foil: fine for quick prototypes, less reliable for mission-critical applications. Learn both dialects. Your engineers will speak one, and your vendor documentation speaks the other, and they are describing the same argument.

**Rung 1 (Use): assist where the work already happens.** The agent joins the editor and you stay in the loop for every change. The shift is smaller than it looks and more important than it sounds: you move from typing every line to expressing intent and reviewing output. Your day changes. Your accountability does not.

**Rung 2 (Browse): delegate work that comes back as a proposal.** Hand over a whole issue and get a pull request in return. Two things about this rung are widely misunderstood, and they pull in opposite directions.

The first is that the platform protects more than people assume. The agent's work arrives as a *proposal*, not a change: it cannot mark its own work ready for review, and it cannot approve or merge it. Generated code is checked for security issues before it reaches you, new dependencies are screened, secrets scanning runs, the agent works on its own branch under your existing branch protections, and the person who asked for the work cannot be the one who approves it.

The second is that none of that protects the thing most likely to fail. **Those guardrails defend the repository; they do not defend your judgment, and they do not create review capacity.** The queue is still yours, and it just got longer. If your review culture is thin, this is the rung that finds out. Not because the tooling is unsafe, but because it is now producing work faster than your organization forms opinions about it.

**Rungs 3 and 4 (Configure and extend): teach the system how your team works.** The bottleneck stops being *can the model write code* and becomes *does it write code the way we write code.* Two mechanisms carry this rung, and the difference between them is the single most useful distinction in the bucket.

**Instructions describe how you want work done.** They shape behavior: conventions, style, the libraries you've standardized on. And the model may still decide otherwise. **Hooks run your own code at fixed points in the agent's loop and produce a guaranteed outcome regardless of what the model decided.** One is persuasion. The other is enforcement. Get the distinction wrong and you will write a beautifully argued instruction file for something that needed to be a gate.

Both live in version control, and that is why this rung compounds. Your engineering standards stop being a wiki page nobody opens and become an input to every change: reviewed like code, versioned like code, argued about in pull requests like code. The product of this rung isn't faster typing. It's a codified opinion that scales past the people who hold it.

There is a second reason to take this rung seriously, and it is about attention rather than quality. An agent that stops to ask permission for everything is not autonomous, and a human who approves everything eventually stops reading what they approve. **Approval fatigue is not a usability complaint; it is a security failure with a pleasant interface.** The real work here is deciding in advance (and in writing) what never needs asking and what must always stop.

**Rung 5: Make the workflow itself a reviewable artifact.** Above configuration sits automation: agent work that triggers on events and runs without a human starting it. The concept worth carrying is how it is made safe. The workflow is authored in the open, then *compiled* into a locked artifact that runs under explicit permissions, with the outputs it is allowed to produce declared up front rather than discovered at runtime. That inversion is the point. Your agent usage stops being a habit distributed across individuals and becomes infrastructure: versioned, diffable, bounded by design rather than by hope.

**Rung 6: Build on the harness.** The *harness* is the loop the agent actually runs in: the orchestration around the model that decides what it can see, what it can call, and when it stops. GitHub's own advice is worth taking literally: learn the harness before you decorate it. Most of the gain comes from understanding the loop, not from the accessories bolted onto it. You reach rung 6 when you stop *using* that loop and start *embedding* it. That is the moment a developer tool becomes a component inside something you ship, and the developer bucket quietly rejoins the product bucket.

**A caution that applies to the top of this ladder in particular.** This field is roughly two years old and moving weekly. GitHub's own engineers put it more bluntly than we would dare: a lot of what is today's magical incantation will be tomorrow's anti-pattern. Prefer the simplest arrangement that produces a repeatable, high-quality result, and be suspicious of elaborate agent choreography that nobody can explain to a new hire.

**A word on vocabulary, because this space markets faster than it documents.** Several terms you'll hear (*Agent HQ*, *mission control*, *agent-native*, *agent experience*) are narrative language describing where GitHub believes the platform is going. They are useful for understanding direction and useless for writing a procurement document, because they don't map to a thing you can switch on or govern. When you need to know what you actually have, look for the shipped surfaces and the administrative controls behind them, not the vision words.

**You have left this bucket when** the agent you're building serves someone outside your engineering organization. The moment its output reaches a customer or a business process, the accountability model changes and you are in Journey 2, whatever it says on the repository.

### What all three journeys have in common

Three buckets, three different climbs. Put them side by side and three things fall out that none of them shows on its own.

**The three trade-offs are one trade-off.** Adoption vs. Ambition, Velocity vs. Control, Generation vs. Verification. Each bucket names it in its own dialect, but underneath they are the same exchange: **every rung buys capability and charges ownership.** Not money, though it costs that too. Ownership: of the failure, of the upgrade, of the on-call page, of the explanation you give when it does something surprising. The rung is where that transfer happens, and it is one-way.

**The failure is always over-climbing, never under-climbing.** Look at where each journey warns you. The employee bucket says a build usually means the problem statement grew a second problem inside it. The product bucket says the mistake is picking high by default, because *custom* sounds more serious in a steering committee than *configured*. The developer bucket says climbing past your verification capacity just fills a queue that was already full. Nobody in this model gets into trouble by solving a problem at rung 2. They get into trouble by arriving at rung 6 without being able to say what rung 5 failed to do.

**And every journey lands on the same two obligations, no matter where it stopped.** The data the agent stands on, and the identity and oversight it operates under. These are not advanced concerns you graduate into. A rung-2 agent has them just as surely as a rung-6 one. That's why the last section of this page adds them as **planes** rather than as further rungs: rungs are a choice, planes are a bill.

---

## Capability Groupings (Building Blocks)

Now that you have defined the behavior, map it to the right building block. These five groupings are **not a maturity ladder** and not a sequence. They are components you combine. Most real solutions use three or four of them at once, and the useful skill is recognizing which grouping a given requirement belongs to, because each one has a different owner, a different cost model, and a different failure mode.

### 1. End-user copilots (ready-made UI)

**The capability is the experience surface itself**: the chat window, the in-app assistant, the agent menu. You are not building an interface here. You are deciding which surface your people already live in, and turning on what belongs there.

This grouping now spans a wider range of behavior than "chat with a document," and the range is the thing to understand:

* **Chat, grounded two ways.** The same conversational surface answers very differently depending on what it can see: the open web, or your organization's actual work. That distinction, web-grounded versus work-grounded, is the single biggest determinant of whether users find it useful, and it is a licensing and configuration decision rather than a technical one.
* **In-app assistance.** AI inside the application where the work already happens, rather than in a separate destination the user has to remember to visit. The value here is proximity: the assistance arrives without a context switch.
* **Delegated work.** The newer and more interesting end of this grouping. Rather than turning around a prompt in seconds, the surface accepts an outcome, works for an extended period, and comes back with something finished. **Copilot Cowork** is the anchor. The shift is not incremental. It changes the unit of delegation from a question to a task, which changes what a person does while they wait.
* **Always-on assistance.** The furthest edge: an agent that is running before you ask, watching for the moment you'd want it. **Microsoft Scout** is Microsoft's illustration. This is where the ready-made surface stops being something you open and becomes something that comes to you.
* **Built-in agents.** Microsoft ships agents directly into these surfaces: deep research, data analysis, document creation. They arrive as part of the experience rather than as something you install, which is precisely why teams so often rebuild capability they already own.

**The concept that matters most here: you are consuming, not constructing.** Everything in this grouping is turned on, scoped, and adopted. That makes the constraint organizational rather than technical. The limiting factor is rarely capability, and almost always whether anyone told people it exists and trained them to use it well.

**One thing to understand before you evaluate anything in this grouping: how capability reaches you.** Microsoft ships these surfaces through an audience-based release model, and the ring you are on changes what you see. An opt-in early ring gives you pre-release capability to evaluate and prepare for, on the explicit understanding that it is preview and subject to change. A standard ring delivers features once they are generally available. A deferred ring buys complex environments time to validate first. **Choosing a ring is a governance decision, not an enthusiasm decision.** Confusing "we saw it in a demo" with "we can deploy it" is one of the most common false starts in this entire model.

### 2. Extensibility into existing copilots

**The capability is reach.** Your users already open a copilot every day. This grouping is about making that copilot aware of your world without asking anyone to adopt a new tool.

Two distinct moves live here, and teams routinely conflate them:

* **Bring your content in.** The copilot can only reason over what it can see. Connecting your external repositories, wikis, ticketing systems, and line-of-business data expands what it *knows*, and it inherits your permissions rather than flattening them.
* **Bring your actions in.** Beyond knowing, the copilot can *do* (filing the ticket, updating the record, kicking off the process) by being given governed access to your systems.

**Why this grouping is chronically underrated:** it has the shortest distance between effort and outcome, because the adoption problem is already solved. Nobody has to be persuaded to open a new app. The interface, the identity, the compliance boundary, and the habit already exist. You are renting all of it.

### 3. Build AI apps and agents

**The capability is custom behavior.** You reach this grouping when the experience you need doesn't exist and can't be configured into existence: a different audience, a different channel, or logic nobody else would ship.

The important idea here is one most teams get backwards. **A useful AI application is mostly not AI.** It is ordinary software (validation, routing, state, retries, permissions) with reasoning applied at the few points where judgment is genuinely required. Treat the workflow as the railroad and the agent as the rover: fixed track for known routes, reasoning only where the terrain is actually uncertain. Every step you hand to a model instead of to code buys you flexibility and costs you predictability, latency, and a debugging story.

This is also where you choose how much of the runtime you want to own, a decision the Ladder already walked you through. The building blocks range from visual flows that mix deterministic steps with reasoning, through configuration-defined agents, to code-first orchestration you host yourself.

### 4. AI services and building blocks

**The capability is everything underneath.** Models, retrieval, tools, evaluation, safety, and observability: the layer that determines whether anything above it is any good.

**Microsoft Foundry** is the platform anchor: models, agents, and tools under a single management plane, with the surrounding catalog of tools and services branded alongside it.

The concept worth carrying out of this grouping is that these components are **shared infrastructure, not app-specific plumbing**. The first team to need retrieval builds it for themselves. The fifth team to need it should not. Organizations that treat this grouping as a platform, with owners, standards, and reuse, get compounding returns. Organizations that let every project assemble its own end up maintaining six subtly different answers to the same question, which is how an AI portfolio becomes an AI maintenance burden.

### 5. Specialized agents (don't rebuild what already exists)

**The capability is a domain someone else already learned.** Microsoft and its partners ship agents built for specific work: security triage, site reliability, coding, analytics, sales, service. These are not templates. They are opinionated products with domain knowledge baked in.

The rule is blunt and it is Article IV of this framework in practice: **check this grouping before you commission a build.** The cost of adopting a specialized agent is evaluation and governance. The cost of rebuilding one is evaluation, governance, *and* the rest of its life: every model upgrade, every integration change, every improvement you now have to make yourself.

Two habits make this grouping work. First, know *who published it*. The same catalog carries agents built by Microsoft, by partners, by your own organization, and by individual colleagues, and those four carry very different trust and support implications. Second, remember that a specialized agent is still an agent: it needs an owner, an identity, and a place in your inventory, exactly like one you built.

#### A note on reading vendor claims: the provenance problem

**The Concept: two true-sounding sentences that point in opposite directions.** Sooner or later you will find a vendor's marketing site and its documentation site describing the same product differently. The honest move is not to pick the nicer sentence, and not to quietly average them. It is to carry both into the room and say which is which.

There is a live example worth knowing about, because it is instructive rather than obscure. Microsoft's announcement blog for its always-on agent attributes the underlying technology to a particular open-source project. Microsoft Learn, documenting the same product, attributes it to a different component entirely. **Microsoft has not reconciled the two statements publicly.** A tidy explanation exists (that one is the harness and the other is upstream), and it is unverified, so we do not publish it as fact.

What makes this more than trivia is the second half. That same open-source project appears throughout Microsoft's own governance documentation as an example of **unsanctioned "Shadow AI"**: something the admin, endpoint-management, and threat-protection tooling is explicitly built to discover and block on managed devices. Read the marketing sentence alone and you would conclude Microsoft endorses it. Read the governance documentation and you find Microsoft shipping controls named after blocking it. Both are Microsoft.

**The transferable lesson:** documentation and marketing serve different masters, and the gap between them is usually where your risk lives. When they disagree, weight the documentation. It is the one written by people who will be paged. And treat a claim that appears in exactly one blog post as what it is: a claim, not a specification.

That's the provenance half. The *response* half, what you actually do about unsanctioned agents running in your tenant, is a trust-boundary decision and belongs to the [Decision Framework]({{ '/docs/decision-framework' | relative_url }}).

### Microsoft IQ: The Four Intelligence Layers

**The Concept:** An agent that can only search documents sees the organization through a keyhole. It finds what was written down, but it doesn't know what happened in last week's meeting, who owns the decision, what the sales data says about the outcome, or what's happening in the market outside the building. Real intelligence requires four layers: knowing what was *recorded*, understanding what's *happening*, interpreting what it all *means*, and seeing what's *out there*.

Microsoft IQ is the umbrella for four intelligence surfaces that give agents distinct kinds of awareness. You can adopt each layer independently, but agents that combine multiple layers answer questions no single layer can.

**The Analogy: Memory, Awareness, Understanding, and Horizon.**

Think about how a seasoned leader navigates a complex decision. They draw on four distinct kinds of intelligence:

* **Memory** is what the organization has written down. Policies, contracts, specifications, reports, research. It's the accumulated knowledge base. You can search it, cite it, and trust it because it's governed. But memory alone is static. It tells you what the answer *was*, not what the situation *is*.

* **Awareness** is the live pulse of work. Who said what in which meeting. What the team agreed to in a Teams thread. What's on the calendar for next week. What the ServiceNow ticket says about the outage, what the SAP system shows for the purchase order, what the JIRA board reveals about sprint velocity. Awareness isn't just M365 signals; it extends through 1,500+ connectors into ServiceNow, SAP, Salesforce, Azure DevOps, Dynamics 365, and any system with a REST API. This is the layer that turns fragments of data into the full context of work.

* **Understanding** is the business logic that gives data meaning. "Customer" isn't just a row in a table. It has relationships (places Orders, belongs to a Segment, has a Lifetime Value), rules (if inventory drops below threshold, trigger replenishment), and a semantic structure that's consistent across every dashboard, agent, and report. Understanding lets agents reason about the business itself, not just the files or conversations about it.

* **Horizon** is what's happening beyond the organization's walls. Market shifts, competitor moves, regulatory changes, breaking news, academic research, emerging trends. No company operates in a vacuum, and no agent should either. Horizon intelligence lets agents ground their reasoning in the live web, so the answer isn't just "what do *we* know?" but "what does the *world* know right now?"

Most teams start their agent journey with Memory (connect a knowledge base) and stop there. The agents that deliver breakthrough value are the ones that also have Awareness (they understand how work happens), Understanding (they reason in the language of the business), and Horizon (they see what's happening outside the building).

**The Product Anchors:**

* **Foundry IQ** is the **Memory** layer: your governed document estate, made retrievable. The agent plans and executes its own lookups rather than being handed a fixed slice of context, and it answers with citations. The property that matters most is that retrieval respects the permissions and sensitivity labels the content already carries, so "what can this agent see" stays the same question you already answered for people.

* **Work IQ** is the **Awareness** layer: the same contextual intelligence that powers Microsoft 365 Copilot, made available to your own agents. Connect to it and an agent inherits an understanding of how work actually happens: who talked to whom, what was decided where, what is on the calendar, what the line-of-business systems say. Two design constraints worth knowing early, because they shape architecture rather than configuration: it acts **on behalf of a signed-in user** rather than as a standalone service principal, and the surfaces that expose it are maturing at different rates.

* **Fabric IQ** is the **Understanding** layer: the semantics of your business, expressed once. Ontologies define what a *customer* or an *order* actually is; graph models let agents reason across domains; semantic models supply the trusted numbers. This is how every agent, dashboard, and application ends up speaking one business vocabulary instead of four dialects that quietly disagree in a board meeting.

* **Web IQ** is the **Horizon** layer: grounding in the live outside world. Where the other three ground an agent in what your organization knows, this grounds it in what the market knows: competitive movement, regulatory change, published research. It opens a class of behavior where an agent can check the organization's assumptions against reality rather than confidently restating them.

Each IQ layer is standalone, but agents that combine two, three, or all four answer questions that no single layer can: "What does the policy say (Memory), who agreed to change it last quarter (Awareness), what does the usage data show since the change (Understanding), and how does our approach compare to what the industry is doing (Horizon)?"

---

## The Shared Vocabulary: Microsoft's 3Cs and Seven Categories

**A question you'll eventually have to answer: what do you call this when you write it down?**

Everything above this line is a *thinking* model. It exists to get you to a good decision. But once the decision is made, you have to communicate the design: to a security reviewer, a platform team, a vendor, and the person who inherits this in eighteen months. Thinking models are personal. Design vocabulary has to be shared.

Microsoft publishes one, and it's good. The **agent archetype framework** organizes agent design into what Microsoft calls *"categories, capabilities, and components (the '3Cs')"*:

* **Categories**: *"Broad domains of agent behavior… independent of specific tools or implementations."* The **why**.
* **Capabilities**: *"Specific user-observable function an agent can perform within a category."* The **what**. (Microsoft states explicitly that "capabilities" and "skills" are the same concept, one less argument to have.)
* **Components**: *"Implementation primitives that enable capabilities."* The **how**.

**The Analogy: The Job Family, the Job, the Toolbox.** "Engineering" is a category. "Reviews pull requests" is a capability. "A GitHub App with these scopes and this token" is a component. You hire against categories, you promise capabilities, you budget components. Conflate them and you get the meeting where someone answers a strategy question with a connector name.

Underneath the first C sit **seven categories of agent behavior**. Microsoft's descriptions, verbatim:

| Category | Microsoft's description |
| :--- | :--- |
| **Connect** | "Gathering and integrating information from across the enterprise. The foundational layer enabling everything that follows." |
| **Analyze** | "Making sense of gathered data, going beyond retrieval to insight." |
| **Create** | "Producing and transforming content, transitioning from information to deliverables." |
| **Act** | "Taking action on behalf of users, transforming from conversational partners to proactive assistants." |
| **Automate** | "Managing multistep processes and orchestrating complex workflows, operating as process coordinators." |
| **Govern** | "Maintaining trust and regulatory compliance, embedding governance directly into agent behavior." |
| **Monitor** | "Continuously improving through telemetry and feedback loops for iteration at scale." |

**These do not compete with the Coin or the delegation levels. They're a different axis entirely.** The archetype framework is a *decomposition* model: it splits an agent into functional parts. The Coin is a *presence* model and the delegation levels are an *authority* model. An agent has a category *and* a side of the coin *and* a level of delegated authority, the same way a car has a body style, an engine, and a price. Use ours to decide; use Microsoft's to describe.

**Two honest caveats before you adopt it wholesale.**

1. **Scope.** The stated intent is product-neutral, and Categories and Capabilities genuinely travel. But every worked example in the docs is Copilot Studio plus Power Platform, which means the **Components** layer reads Copilot-Studio-flavored. Port the first two Cs freely; translate the third.
2. **It's one of seven.** Six concurrent agent taxonomies are documented on Microsoft Learn: this archetype framework, CAF's agent types, declarative-vs-custom-engine, the Agent Registry publisher types, the Integrated Apps grouping, and Agent 365's "types of agents." A seventh circulates in Microsoft 365 marketing language with no Learn definition behind it, which is its own warning (see [*"Autopilot"*]({{ '/docs/glossary#a' | relative_url }}) in the Glossary). **None supersedes another and none cross-references the others.** Pick the one that fits the conversation you're in, and say which one you picked.

**The idea worth stealing.** Look at that table again: **Govern and Monitor are listed as agent *behaviors*, not as operational afterthoughts.** That's a genuinely better instinct than the one most teams bring, and our delegation model doesn't carry it. An agent that can't be observed isn't a finished agent with a monitoring gap. It's an unfinished agent. Build the telemetry and the policy conformance into the thing, not around it.

See [The agent archetype framework](https://learn.microsoft.com/en-us/agents/agent-archetypes/).

---

## The New Full Stack

The low-code vs. pro-code war is over. Here's what killed it.

For years, the industry drew a bright line: "low-code is for citizen developers" on one side, "pro-code is for real engineers" on the other. The line made sense when code was expensive. Writing a state machine, wiring up auth flows, managing deployment pipelines: these tasks demanded specialized skills and weeks of calendar time. Low-code existed as a category because the alternative cost too much.

That economics has collapsed. Agentic coding tools (GitHub Copilot, coding agents, AI-assisted development) have made writing deterministic logic fast and cheap. A coding agent can scaffold a validated state machine in minutes. The cost argument that justified the binary no longer holds. And on the other side, tools like Copilot Studio now offer code views, variable management, and API integrations that demand an engineering mindset to wield effectively. The "low-code" canvas has become an IDE for conversational AI.

**The New Rule:** Choose the tool based on the **problem**, not your job title. A Principal Architect should use Copilot Studio if it solves the problem 10× faster. A Business Analyst working in Foundry isn't out of their depth - they're using the right tool for *their* use case. The tool does not define the role. The problem defines the tool.

### Five Planes, One Architecture

Do not think of this as "Copilot Studio vs. Microsoft Foundry." Think of it as a **spectrum of control**: three layers that most enterprise architectures use together, standing on two planes that every one of them needs. This is an "AND" conversation, not an "OR" decision.

**1. The Surface Plane (Microsoft 365 Copilot)**
* **Focus:** Consumption & Configuration.
* **The Role:** This is your "Frontend." It provides the chat interface, the security perimeter, and the integration into Word, Teams, and Excel.
* **The Build:** You don't build the engine; you tune it. You configure Graph Connectors to feed it data and manage plugins to give it skills.

**2. The Orchestration Plane (Copilot Studio)**
* **Focus:** Extension & Logic.
* **The Role:** This is your "Middleware." Whether you are a developer or a maker, this is where you define **behavior**.
* **The Build:** Developers use this to stitch together APIs, manage conversation state, and build complex agent workflows. It serves as the bridge, taking raw models and turning them into structured business processes that can be published to M365.

**3. The Foundation Plane (Microsoft Foundry)**
* **Focus:** Deep Customization & Model Ops.
* **The Role:** For when the out-of-the-box models aren't enough. Model choice, evaluation, and the hosting boundary become yours.
* **The Build:** Here, you fine-tune models, manage vector stores, and evaluate prompt performance. It is deeply technical, but its output (a custom model or agent) is often consumed by the Orchestration Plane.

**4. The Data Plane (grounding and memory)**
* **Focus:** What the agent is allowed to know, and what it remembers.
* **The Analogy: The Water Table.** Nobody admires it, nobody demos it, and every building on the site depends on it. When an agent hallucinates, the instinct is to blame the model. Nine times out of ten the model was answering honestly about the only data it could reach.
* **The Role:** This is where "the agent is wrong" stops being a guessing game about prompts and becomes a fixable engineering problem. The concepts worth understanding before you shop:
    * **Search and retrieval**: the agent plans and executes its own lookups against a governed index, rather than being handed one static chunk of context. Permission trimming lives here, which is why retrieval is a security decision as much as a quality one.
    * **Vectors next to your operational data**: you can add semantic search to the relational and document databases you already run, instead of standing up a separate store and keeping two copies of the truth in sync.
    * **The analytical estate**: when the grounding set is curated business data rather than documents, the lakehouse becomes the source, and the semantics of your business become something an agent can reason in.
    * **Memory and cache**: the fast tier that makes conversation state and repeated retrieval affordable at scale.

    The decision here is not which product logo to pick. It is **where the truth already lives, who is allowed to see it, and how fresh it has to be**. Then you choose the store that already satisfies those three answers rather than migrating your data to suit a diagram.

**5. The Governance Plane (identity and oversight)**
* **Focus:** Who is this agent, what may it touch, and who answers for it.
* **The Analogy: The Badge Office.** The moment your organization had more than a handful of employees, "everyone knows Dave" stopped being an access-control strategy. Agents crossed that threshold faster than anyone planned for. An agent without an identity isn't lightweight. It's untraceable.
* **The Role:** Agents are becoming principals in your directory, and the tooling has caught up. Three concepts carry this plane. **Identity** gives an agent something to *be*: its own directory principal, so its actions are attributable to it rather than to whichever human's token it borrowed. **Inventory** gives you a single place to see every agent in the estate, who owns it, and which ones nobody owns. **Oversight** adds the detection and data-protection layer that turns "we think that's all of them" into something you can actually assert.

    The order matters and it is the opposite of most rollouts. Identity first, then inventory, then controls. A control you cannot attribute to a named principal is a control you cannot enforce, and an agent nobody owns is not a governance gap you close later; it is the one that shows up in the incident.

**Why these two planes come last.** Not because they matter least, but because they matter to *everyone*. Walk the three bucket journeys and you'll notice the employee, the product team, and the engineering org disagree about almost everything except two facts: their agents are only as good as the data underneath them, and every one of those agents needs an identity and an owner. Layers 1 to 3 are choices. Planes 4 and 5 are the bill that arrives regardless.

### The "Better Together" Architecture
A production AI solution often spans all five:

1. **Foundry** hosts a custom-tuned model for analyzing proprietary engineering specs.
2. **Azure AI Search** grounds it in the actual spec library, with permissions intact.
3. **Copilot Studio** consumes that model, adds a "Human Handoff" logic flow, and enforces access controls.
4. **Microsoft 365 Copilot** acts as the user interface, allowing an engineer in Teams to query the specs without leaving their chat.
5. **Entra Agent ID and Agent 365** make the resulting agent a first-class, owned, observable thing rather than an orphan.

### Why the Economics Now Match the Architecture

**For years, the "AND" conversation died at procurement.** Architecture said "use Foundry *and* Copilot Studio." Budget said "pick one, they're different line items." Budget always won, and the resulting architecture was a financial artifact pretending to be a technical decision.

**The Analogy: The Coupons at the Till.** Hand a cashier several coupons and they don't apply in the order you produced them. The narrowest one goes first, then the next, and the general one covers whatever is left. Which means the broad coupon is worth *less* than its face value suggests if you assumed it would go first, and worth exactly what you hoped if you understood the order. Microsoft's commitment vehicles work the same way, and the order is the whole lesson.

**Two ideas are worth carrying out of this section.**

The first: **there is now a commitment vehicle that spans the whole stack.** A single prepaid unit can pay down usage across the foundation, the orchestration layer, the analytical estate, and the developer loop. Microsoft put one meter across planes that used to be four separate arguments with four separate owners. The "Foundry versus Copilot Studio" budget silo isn't resolved so much as retired. The finance structure now *assumes* you'll span several planes.

The second, and the one that actually changes behavior: **narrow benefits burn before broad benefits.** Where a specific commitment and a general one both cover the same usage, the specific one is consumed first, and the general plan is the backstop that mops up whatever's left, wherever it happened. That ordering is why a broad plan is a safety net rather than a first line of defense. You buy it to catch the spill, not to cover the core.

**Two habits this should form.** Model your commitments in the order they're consumed, not the order you bought them, or your forecast will be wrong in a direction that flatters you. And read the terms before you sign. Commitment vehicles in this space carry fixed terms and default renewals, which makes them a calendar obligation as much as a financial one.

Where coverage is genuinely unstated, treat it as unstated and get the answer in writing rather than inferring it from the shape of the credit model. The current mechanics, units, and coverage boundaries live in [Technologies]({{ '/docs/technologies' | relative_url }}) and [Evaluation Criteria]({{ '/docs/evaluation-criteria' | relative_url }}), where they can be kept accurate.

---

**Next:** [Decision Framework]({{ '/docs/decision-framework' | relative_url }}) - Apply the intake gate and critical questions to shortlist technologies

---

{: .note }
> **The Human Side:** Technology choices are only half the equation. How your team *partners* with AI matters just as much as which platform they use. See [AI Instinct: The Human Framework]({{ '/docs/ai-instinct' | relative_url }}) for the four instincts that make AI partnership as natural as breathing.

---

## Sources

* [Copilot Chat overview](https://learn.microsoft.com/en-us/copilot/overview) (Updated: 2026-01-13)
* [Which Copilot is right for your organization](https://learn.microsoft.com/en-us/microsoft-365/copilot/which-copilot-for-your-organization) (Updated: 2026-03-24)
* [Copilot Studio overview](https://learn.microsoft.com/en-us/microsoft-copilot-studio/fundamentals-what-is-copilot-studio) (Updated: 2026-02-09)
* [Microsoft Foundry overview](https://learn.microsoft.com/en-us/azure/foundry/what-is-foundry?view=foundry&preserve-view=true) (Updated: 2026-03-13)
* [When not to use AI agents](https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/ai-agents/business-strategy-plan#when-not-to-use-ai-agents) (Updated: 2025-12-05)
* [Cloud Adoption Framework: AI agents](https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/ai-agents/) (Accessed: 2026-07-28)
* [Microsoft Agents hub](https://learn.microsoft.com/en-us/agents/) (Accessed: 2026-07-29)
* [The agent archetype framework (3Cs)](https://learn.microsoft.com/en-us/agents/agent-archetypes/) (Updated: 2026-05-20)
* [Govern agents by risk (assist-to-execute, three risk tiers)](https://learn.microsoft.com/en-us/agents/center-of-excellence/govern-agents-risk) (Accessed: 2026-07-28)
* [Microsoft 365 Copilot extensibility overview](https://learn.microsoft.com/en-us/microsoft-365/copilot/extensibility/overview) (Accessed: 2026-07-28)
* [Microsoft 365 Copilot extensibility planning guide](https://learn.microsoft.com/en-us/microsoft-365/copilot/extensibility/planning-guide) (Accessed: 2026-07-28)
* [Microsoft 365 agents admin guide](https://learn.microsoft.com/en-us/microsoft-365/copilot/agent-essentials/m365-agents-admin-guide) (Accessed: 2026-07-28)
* [Agent Registry (publisher types)](https://learn.microsoft.com/en-us/microsoft-365/admin/manage/agent-registry) (Accessed: 2026-07-28)
* [Copilot Cowork is now generally available](https://www.microsoft.com/en-us/microsoft-365/blog/2026/06/16/copilot-cowork-is-now-generally-available/) (Published: 2026-06-16)
* [Announcing the new Work IQ APIs](https://www.microsoft.com/en-us/microsoft-365/blog/2026/06/02/announcing-the-new-work-iq-apis/) (Published: 2026-06-02)
* [Work IQ MCP overview (preview)](https://learn.microsoft.com/en-us/microsoft-agent-365/tooling-servers-overview) (Updated: 2026-07-14)
* [Fabric IQ documentation (Preview)](https://learn.microsoft.com/en-us/fabric/iq/) (Accessed: 2026-07-28)
* [Microsoft Agent 365 overview](https://learn.microsoft.com/en-us/microsoft-agent-365/overview) (Accessed: 2026-07-28)
* [What is Microsoft Entra Agent ID](https://learn.microsoft.com/en-us/entra/agent-id/what-is-microsoft-entra-agent-id) (Accessed: 2026-07-29)
* [What's new in Microsoft Entra Agent ID](https://learn.microsoft.com/en-us/entra/agent-id/whats-new-agent-id) (Accessed: 2026-07-29)
* [Foundry Models overview](https://learn.microsoft.com/en-us/azure/foundry/concepts/foundry-models-overview) (Accessed: 2026-07-29)
* [Get started with Copilot Studio for Teams](https://learn.microsoft.com/en-us/microsoft-copilot-studio/fundamentals-get-started-teams) (Accessed: 2026-07-29)
* [Logic Apps agentic workflows concepts](https://learn.microsoft.com/en-us/azure/logic-apps/agent-workflows-concepts) (Accessed: 2026-07-29)
* [Word, Excel, and PowerPoint Agents (Frontier)](https://learn.microsoft.com/en-us/microsoft-365/copilot/wordexcelppt-agents) (Updated: 2026-03-30)
* [Azure SRE Agent overview](https://learn.microsoft.com/en-us/azure/sre-agent/overview) (Updated: 2025-12-08)
* [GitHub Copilot agents in VS Code](https://code.visualstudio.com/docs/copilot/agents/overview) (Updated: 2026-03-18)
* [About GitHub Copilot cloud agent](https://docs.github.com/en/copilot/concepts/agents/cloud-agent/about-cloud-agent) (Accessed: 2026-07-28)
* [Microsoft Agent Prepurchase Plan](https://learn.microsoft.com/en-us/azure/cost-management-billing/reservations/agent-pre-purchase) (Updated: 2026-07-17)
* [Copilot Credit Pre-Purchase Plan](https://learn.microsoft.com/en-us/azure/cost-management-billing/reservations/copilot-credit-p3) (Updated: 2026-07-17)
* [Introducing Microsoft Agent Factory](https://techcommunity.microsoft.com/blog/azure-ai-foundry-blog/introducing-microsoft-agent-factory/4470732) (Published: 2025-11-18)
* [Introducing Microsoft Scout](https://www.microsoft.com/en-us/microsoft-365/blog/2026/06/02/introducing-microsoft-scout-your-always-on-personal-agent/) (Published: 2026-06-02)
* [Microsoft Scout setup and FAQ](https://learn.microsoft.com/microsoft-scout) (Accessed: 2026-07-28)
