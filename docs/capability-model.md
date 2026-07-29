---
layout: default
title: Capability Model
nav_order: 2
description: "Capability framing for Microsoft AI choices"
---

# Capability Model
{: .no_toc }

Every AI conversation starts in the wrong place.

Someone walks into the room and says, "We need an agent." Or worse: "We need to use Foundry." They've jumped to a platform before they've named the outcome, described the user, or asked whether AI is even the right tool. This is how projects fail - not from bad technology, but from skipping the thinking that should come before the technology.

This page teaches that thinking. Not a decision tree - those come later. This is the mental framework that makes decision trees *useful*. Learn it once, and it survives every product rename, every Build keynote, every "everything is an agent now" news cycle.

The flow is always the same: **Outcomes → Behaviors → Platforms.** Who benefits and how? What does the AI actually *do*? Only then: which building blocks support that behavior?

**How to use this page:**

1. Start with **outcomes** - name which AI conversation you are in (The 3 AI Buckets).
2. Pass the **checkpoint** - verify AI is even the right tool.
3. Define **behavior** - describe what the agent does before you name a product (The Coin & the Five Design Axes).
4. Climb the **Ladder** - stay inside the one bucket you named in step 1, and stop on the lowest rung that solves the problem.
5. Map to **building blocks**: match behaviors to Capability Groupings and the Microsoft IQ layers.
6. Choose your **build path** - pick the right plane of the New Full Stack.

For a detailed intake workflow, see [Decision Framework]({{ '/docs/decision-framework' | relative_url }}).

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## The 3 AI Buckets

Start by naming **who benefits and how**. This keeps early conversations grounded in outcomes before you debate platforms.

| Bucket | What It Is | Key Distinction |
| :--- | :--- | :--- |
| **AI for You** | Tools for all users in the enterprise | Helps people do *their* work with Microsoft 365 Copilot, app copilots, and governed personal productivity agents. |
| **AI as a Product or Feature** | AI built into your apps or agents | AI becomes part of what your organization ships: custom agents, embedded features, RAG, semantic search, image generation, knowledge graphs, or business workflows. |
| **AI for Your Codebase** | AI inside the developer workflow | AI helps build, refactor, review, test, document, and modernize software. The output may or may not contain AI features. |

**These are not stages, and nobody graduates.** The buckets are three different conversations, not three rungs. A team can live in *AI for You* forever and never ship a line of AI code. An engineering org can go hard at *AI for Your Codebase* for a year while shipping a product that contains no AI at all. Most large organizations are having all three conversations simultaneously: in different rooms, on different budgets, under different governance, often without realizing the other two are happening.

So naming your bucket isn't a step along a path. It's choosing which room you're standing in. The Ladder later on this page is walked *inside* one bucket; it never carries you across to another.

### The "AI Podcast" Problem

You search "AI" on Spotify. You pick something with a good title, press play, and listen. Four minutes in, it lands: this is a great episode about a problem that isn't yours.

Nothing warned you. There was no error, no mismatch, no moment where the app said *you meant something else*. The episode was well made and accurately titled. You just quietly lost the time. You only found out by spending it.

That's the failure mode, and here's why it fits. Search "AI" and at least three legitimate episodes come back, jumbled, all of them correctly labeled:

* **Productivity: how to actually use Copilot in your daily work.** *(AI for You)*
* **The newest and best in agentic coding.** *(AI for Your Codebase)*
* **Building agents and multi-agent orchestration at scale.** *(AI as a Product or Feature)*

Nobody mislabeled anything. All three are genuinely about AI. **The search isn't broken. The query is.** "AI" is a question too vague to be answered, so it gets answered three ways and you're the one who has to sort it out, after the fact, at your own expense.

Now move it to work. A bucket error doesn't announce itself at kickoff either. It announces itself a quarter later, when the platform you chose turns out to be excellent at a problem you don't have. Same silence, bigger invoice.

The bucket is the filter you set before you hit play. Set it wrong and you inherit the wrong assumptions, the wrong governance model, and the wrong advice. You'll believe all three, because every one of them is correct for somebody else.

### The Ladder: Where Each Bucket Goes Next

Naming your bucket tells you *which conversation* you are in. It does not tell you *how far to walk*. That's the second half of the model, and it's the half most frameworks skip.

**The Concept.** Microsoft's own documentation encodes a buy-before-build escalation. The extensibility overview puts it plainly: *"A wide range of agents built by Microsoft and Microsoft partners are available… You can deploy these agents as-is or further customize them by incorporating your organization's knowledge and business logic,"* and only *"if a prebuilt agent doesn't meet your needs, you can build your own agent from a template or design something from scratch."* The planning guide is blunter still: *"When Copilot itself doesn't fully address your organization's requirements out-of-the-box, consider building an agent."*

Read those in order and a ladder falls out:

> **Use → Browse → Configure → Extend → Build declarative → Build custom engine.**

**The Analogy: The Ladder in the Garage.** Nobody buys a taller ladder to change a lightbulb. You grab the one that reaches, and not one rung more. Every extra rung you climb is real weight you now carry: more cost, more latency, more surface to secure, more to keep alive at 3 a.m. Height is not achievement. Height is liability you accepted in exchange for reach you needed.

**What the rungs actually measure: shared responsibility.** This is the SaaS → PaaS → IaaS line wearing different clothes. The bottom rungs are SaaS: Microsoft owns the model, the runtime, the patching, the uptime, and you own configuration. The middle rungs slide toward PaaS: you own the logic, the prompts, and the data contract; Microsoft still owns the plumbing underneath. The top rung is where you take the runtime itself: hosting, scaling, model ops, evals, and the pager. That is why height is liability. Each rung transfers a little more of the stack from Microsoft's name onto yours, and you should only sign for what the outcome actually requires.

Notice what does *not* change as you climb: the bucket. Climbing is not how you move from *AI for You* to *AI for Your Codebase*. Those are separate conversations that never merge. Climbing is how far you descend into the stack **within** the conversation you're already in. A developer bucket has its own SaaS rung (Copilot in the editor) and its own IaaS rung (your own harness on your own compute), and an employee-productivity bucket has both too. Same ladder, different building.

The rungs are the same for everyone. What changes is what they *mean*. "Configure" means pointing an agent at a document library if you're an employee, and means writing a system prompt with tool schemas if you're a product team. So we walk the ladder three times, once per bucket, [later on this page](#the-ladder-walked-three-times), after we've settled what your agent actually needs to *do*.

Outcomes first, then behavior, then the climb. In that order, every time.

---

## Checkpoint: Do You Even Need an Agent?

Not every AI problem needs an agent. Microsoft’s AI agent guidance explicitly calls out cases where **agents add unnecessary cost, latency, and risk**.

* **Structured and predictable tasks:** Use deterministic code or non‑generative AI when the workflow is rule‑based and predictable.
* **Static knowledge retrieval:** Use classic RAG for single‑turn question answering or summarization from a fixed index. If there’s no tool execution or multi‑step reasoning, an agent is overkill.

See [When not to use AI agents](https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/ai-agents/business-strategy-plan#when-not-to-use-ai-agents).
### The Right Tool for the Step: Deterministic Code Is Not the Expensive Option Anymore

Even *inside* an agent architecture, not every step deserves an LLM call. State machines, rule engines, and well‑written `if/else` code give you what language models fundamentally lack: **predictability, observability, and recoverability**.

There is a common misconception that deterministic code is the "expensive" path: that writing and maintaining code costs more than letting an agent figure it out at runtime. That argument had more weight before agentic coding tools (GitHub Copilot, coding agents) collapsed the cost of writing deterministic logic. Today, an AI can *write* the state machine for you in minutes. The code it produces runs faster, costs less per execution, and fails in ways you can actually debug. The agent call it replaces runs slower, costs more per invocation, and fails in ways that require prompt archaeology.

**The anti-pattern:** Reaching for agentic orchestration to avoid writing code. Don't use nondeterminism as a shortcut when the logic is known. Every LLM call introduces latency, token cost, and unpredictable behavior. Reserve that budget for steps where reasoning, ambiguity, or natural‑language understanding genuinely adds value.

The best architectures mix and match. Let agents handle the *thinking*: intent recognition, multi-step planning, ambiguity resolution. Let deterministic code handle the *doing*: validation, routing, transformation, and anything with a known correct answer. The two aren't rivals; they're teammates with different job descriptions.

---

## The Agent Framework

If you have determined you need an agent, use this framework to describe *what kind* of AI capability you're building, before you name a product.

### What is an agent?
In Microsoft guidance, agents can handle tasks, take actions, and operate in conversation or via triggers. They can be assistive or autonomous depending on how you design them. See [Copilot Studio overview](https://learn.microsoft.com/en-us/microsoft-copilot-studio/fundamentals-what-is-copilot-studio).

### The Anatomy of an Agent: Five Parts

Before you argue about *which* agent, know what every agent is made of. Microsoft's Cloud Adoption Framework states that **agents are built on five core components**. Picture a new hire on their first day.

| Part | Plain-English role | Failure mode if ignored |
| :--- | :--- | :--- |
| **Model** | The reasoning engine | The agent cannot interpret ambiguity |
| **Instructions** | The job description and boundaries | The agent wanders outside its lane |
| **Retrieval** | The trusted knowledge it can consult | The agent guesses when it should cite |
| **Actions** | The tools and APIs it can use | The agent talks but cannot do |
| **Memory** | The state it carries forward | The agent forgets the work in progress |

Take away retrieval and you get confident fiction. Take away actions and you get a clever talker who never ships. Most "the agent is broken" complaints trace back to one missing part, not a bad model. See [CAF: AI agents](https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/ai-agents/).

### Three Levels of Delegation

You've just defined what the agent *is*. Now answer the question your risk committee will actually ask: **what are you willing to let it do without being asked?**

That is not a technology question, and you already know how to answer it. You answer it every time you delegate to a person. You'll let a new analyst pull the numbers. You'll let them file the expense report. You will not let them wire the money. None of that hierarchy is about how *smart* they are. It's about what happens if they're wrong, and who has to explain it.

Microsoft's Cloud Adoption Framework sorts agents along exactly that line, and it is usefully mechanical about it. Each level is the one before it, plus a new kind of tool:

1. **Recommend**: CAF's **productivity agent**. Knowledge tools only. It finds, synthesizes, and drafts; a human reads it and decides. A wrong answer gets caught before anything moves.
2. **Act within bounds**: CAF's **action agent**. Knowledge tools **plus action tools**. It updates the record, files the ticket, starts the process. A wrong answer has already happened; now you're reversing it.
3. **Own the outcome**: CAF's **automation agent**. Knowledge and action tools **plus triggers** that decide when to run, stop, or escalate. A wrong answer can compound quietly before anyone notices.

CAF's own summary of the axis: *"Each category offers a different level of autonomy and business impact."*

**Here is the reframe, and it is the whole point of this section.** Teams argue about capability: *can it handle this?* That is the wrong question, and it's why so many pilots pass and so many rollouts stall. The question that decides the outcome is authority: *what am I signing for?*

**Capability is a demo. Authority is a liability.** They are not the same conversation, and only one of them shows up in the incident review.

So grant the least authority the outcome requires. Not because ambition is bad, but because every level you hand over quietly moves accountability off a named human and onto a system that cannot be coached, corrected in a one-on-one, or fired.

#### Where our version differs from Microsoft's

Full credit where it's owed: the three tiers are **Microsoft's**, published in the Cloud Adoption Framework as **Productivity → Action → Automation** (the CAF diagram's alt text reads "retrieval agents → task agents → autonomous agents"). If you know CAF, you already know the taxonomy.

What we add is not a new set of names. It's the **question the taxonomy exists to answer.** CAF tells you what the three categories *are*. It doesn't tell you how to choose between them in a room where everyone wants the most impressive one. Framing the choice as delegated authority does, because every executive, lawyer, and auditor in that room already has hard-won instincts about authority, and none of them have instincts about agent architecture yet.

| Level | The question it really asks | CAF agent type | CAF diagram term |
| :--- | :--- | :--- | :--- |
| **Recommend** | "May it tell me?" | Productivity agent | Retrieval agent |
| **Act within bounds** | "May it do this one defined thing?" | Action agent | Task agent |
| **Own the outcome** | "May it decide *when* to act at all?" | Automation agent | Autonomous agent |

#### The line that decides the governance: assist vs. execute

Microsoft's agentic Center of Excellence guidance names the tripwire better than we could, so we'll quote it:

> *"The clearest risk signal is the assist-to-execute line. An agent that drafts a paragraph, suggests an answer, or summarizes a document **assists** a person who stays in the loop and owns the outcome. An agent that updates a customer record, submits a ticket, or moves money **executes** a change in a system of record."*

That line falls exactly between **Recommend** and **Act within bounds**. That is why those two levels feel closer on a capability chart and miles apart on a risk register. Cross it and the governance conversation changes character: from "is it any good?" to "who is accountable when it's wrong?"

Microsoft pairs the line with **three risk tiers**, and the pairing is what makes it operational. Their warning is the reason: *"A single governance checklist applied to every agent fails in both directions. It over-governs simple agents… It under-governs complex agents…"* And the sorting rule: *"Sort every agent by what it does, not by how impressive it looks."*

| Microsoft risk tier | Scope (Microsoft's words) | Controls Microsoft requires |
| :--- | :--- | :--- |
| **Tier 1: Low risk** (individual productivity agents) | "assist one person or a small team with everyday work, such as summarizing, drafting, and searching" | Named owner; basic monitoring of usage and errors; standard release checklist; self-service deployment within published guardrails |
| **Tier 2: Medium risk** (expert-knowledge and internal service agents) | "answer domain questions or run internal services where a wrong answer can mislead people or disrupt operations" | Named owner **plus** a domain-expert validator; knowledge-quality monitoring; formal release gate; accuracy tracking and feedback loops |
| **Tier 3: High risk** (business-critical and external-facing agents) | "Tier 3 covers agents embedded in core processes or facing customers, where a failure hits revenue, compliance, or trust. These agents execute consequential actions and often act with autonomy." | A named owner **plus** a formal process owner accountable for the business process; production-grade SLA monitoring; a security review and a responsible AI assessment before release; a decision-rights framework setting what the agent may decide alone and what needs a human; an incident-response plan for when the agent behaves incorrectly; a quarterly maturity review |

Read the tiers next to the delegation levels and the map is obvious: **Recommend** usually lands in Tier 1, **Act within bounds** in Tier 2, **Own the outcome** in Tier 3. It is not a law - a Recommend-level agent pointed at regulated clinical content is a Tier 2 problem all day. But it is a very good first guess, and it gives you something to argue *against* instead of a blank page. See [Govern agents by risk](https://learn.microsoft.com/en-us/agents/center-of-excellence/govern-agents-risk).

### Two Sides of the Spectrum (The Coin)
When thinking about agents, consider two ends of a spectrum.

{: .note }
> **The Coin is ours, not Microsoft's.** Microsoft's published guidance on agent entry points covers the interactive half thoroughly and names nothing for the other half. We minted this one to fill that gap. Use it to think; don't expect to find it on Microsoft Learn.

**Side A: Interactive Agents (The Face)**
These are the agents we look at. We poke them, and they poke back. They are conversational, visual, and present.
*(Examples: Copilot, ChatGPT, GitHub Copilot).*

**Side B: Invisible Agents (The Force)**
Flip the coin. These are the agents that look at the world *for* us. They live in the background, watching data, waiting on triggers, and acting when the condition is met, whether or not anyone is at a keyboard.

This is the half most organizations under-invest in, and the reason is simple: Side A demos beautifully. Put it on a screen, let someone type a question, watch the room nod. Side B has nothing to show. Its entire value proposition is that nobody was watching. **Side A wins the pilot. Side B changes the operating cost.**

The far edge of Side B is the agent that never stops: always-on, carrying its own identity, working across apps and systems without a fresh prompt each time. You don't open it in the morning. It has been running since yesterday, and it comes to *you* when something needs a human. Microsoft has begun calling this class **autopilots**, a marketing word rather than a documented category, so borrow the idea and not the taxonomy. **Microsoft Scout** is its illustration, and it is early-access rather than something you can plan a rollout around today.

That shift quietly breaks the supervision model you're used to. You cannot review an agent's judgment in the moment when there is no moment: no prompt, no session, nobody in the chair. Everything you would normally decide by watching has to be decided in advance: what it may touch, whose authority it borrows, and when it must stop and ask. Which is why this side of the coin shows up with an identity story attached instead of a chat window.

### How to Choose Your Agent: The Five Design Axes
Once you know which side of the coin you're on, you have to decide how that agent behaves.

{: .note }
> **Don't confuse these with the five parts.** CAF's *five core components* (model, instructions, retrieval, actions, memory) are the agent's **anatomy**, what it is built out of. The five axes below are **design decisions**, how you choose to shape it. Anatomy is assembly; axes are intent. Both have five members, which is unfortunate, so we say "parts" for CAF's and "axes" for ours.

**1. Interface: The Conversation vs. The Trigger (UI vs. No-UI)**
This defines how the engagement begins. Interactive Agents rely on **Conversational UI**: you talk, and it answers. Invisible Agents rely on **Triggers**: a new email arrives, a database updates, or a timer goes off. One is designed for human engagement; the other is designed for seamless system integration.

**2. Relationship: The Copilot vs. The Captain (Assistive vs. Autonomous)**
This defines who holds the steering wheel. **Assistive** agents work *with* you: they wait for your input to move forward, keeping a human in the loop. **Autonomous** agents work *for* you: once you give them the goal, they drive themselves, making decisions and executing tasks until the job is done or they hit a guardrail. The line is blurring. Delegated work like **Copilot Cowork** lets a copilot take the wheel for minutes or hours while you steer at checkpoints. It occupies a middle ground between Copilot and Captain that the old binary has no word for.

**3. Logic: The Recipe vs. The Chef (Deterministic vs. Non-Deterministic)**
This defines how the agent thinks. **Deterministic** flows are like a recipe: "If X happens, do Y." They are rigid, predictable, and 100% accurate, which is perfect for strict compliance tasks. **Non-Deterministic** agents use reasoning. You give them a goal ("Plan a travel itinerary"), and they figure out the necessary steps themselves, adding intelligence and adaptability to the process.

**4. Structure: The Soloist vs. The Orchestra (Single-Agent vs. Multi-Agent)**
This defines how many workers the job really needs. A **Single Agent** keeps the work in one place. It is faster to test, easier to govern, and cheaper to operate. A **Multi-Agent** system separates specialists when the business process crosses security boundaries, involves multiple accountable teams, or is expected to grow into several domains.

The default move is not "build an orchestra." The default move is "audition the soloist." Start with a single-agent test unless a boundary forces separation.

**5. Collaboration: The Handoff (Agent-to-Agent Workflow)**
This defines how the team plays together. The true power of AI isn't just in isolated agents, but in **Orchestration**. In an advanced workflow, an Invisible Agent (Side B) might detect a server crash and immediately wake up an Interactive Agent (Side A) to alert the engineer, handing off all the context instantly. It connects the two sides of the coin into a single, fluid operation.

---

## Where This Goes Next

You now have the three things this page set out to give you: the **bucket** your problem lives in, the **checkpoint** that says whether an agent is warranted at all, and the vocabulary to **describe the behavior** you need: its delegated authority, which side of the coin it sits on, and its five design axes.

Notice what you have not done. You have not named a product.

That was deliberate, and it is the whole discipline of this framework. Outcomes, then behaviors, then platforms. In that order, every time. Teams that invert it end up with a technology in search of a problem, and they usually don't find out for a quarter.

Now, and only now, do products get to enter the room.

**Next:** [Microsoft AI Stack]({{ '/docs/ai-stack' | relative_url }}) - Map the behavior you just described onto Microsoft's building blocks

---

{: .note }
> **The Human Side:** Technology choices are only half the equation. How your team *partners* with AI matters just as much as which platform they use. See [AI Instinct: The Human Framework]({{ '/docs/ai-instinct' | relative_url }}) for the four instincts that make AI partnership as natural as breathing.

---

## Sources

* [Cloud Adoption Framework: AI agents](https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/ai-agents/) (Accessed: 2026-07-29)
* [When not to use AI agents](https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/ai-agents/business-strategy-plan#when-not-to-use-ai-agents) (Accessed: 2026-07-29)
* [Govern agents by risk (assist-to-execute, three risk tiers)](https://learn.microsoft.com/en-us/agents/center-of-excellence/govern-agents-risk) (Accessed: 2026-07-29)
* [Copilot Studio overview](https://learn.microsoft.com/en-us/microsoft-copilot-studio/fundamentals-what-is-copilot-studio) (Accessed: 2026-07-29)
