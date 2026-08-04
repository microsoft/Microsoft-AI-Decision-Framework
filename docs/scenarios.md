---
layout: default
title: Scenarios
nav_order: 5
description: "Real-world scenarios with technology recommendations"
---

<!-- markdownlint-disable MD022 MD024 MD025 MD032 MD055 -->

# Scenarios
{: .no_toc }

**The fastest way to get an architecture wrong is to recognize the wrong problem.**
{: .fs-6 .fw-300 }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## How to Use This Page

Every scenario here is a *pattern of demand*, a shape of problem that shows up across many organizations, not a case study about one. Read them to recognize your own situation faster, and to see how the same portfolio components recombine when the constraints change.

**Do not start here.** Scenarios are the third question, not the first. Name your bucket in the [Capability Model]({{ '/docs/capability-model' | relative_url }}), understand what exists in the [Microsoft AI Stack]({{ '/docs/ai-stack' | relative_url }}), and run the intake gates in the [Decision Framework]({{ '/docs/decision-framework' | relative_url }}). A scenario that matches your problem is useful; a scenario you reverse-engineer your problem into is how projects fail.

Each scenario declares:

- **The bucket**: which of the three conversations it belongs to
- **Business Context**: whose problem, and what it costs them
- **Is this actually agentic?**: an honest answer, because for several of these the answer is *no*
- **Key Requirements**: the must-haves that constrain the choice
- **Recommended Technologies**: the best-fit stack, with the decision point named
- **Alternative Approaches**: the other legitimate answers
- **What usually goes wrong**: the failure mode you should design against

---

## Before You Read Any Further: Check Whether It Already Ships

**The single most expensive mistake in this document is building something Microsoft now includes.**

The portfolio absorbed an enormous amount of custom work in the last eighteen months. Several things that were genuinely difficult builds in 2024 and reasonable builds in 2025 are now features you enable. If your scenario appears in the right-hand column below, your project is a *configuration and adoption* project, and framing it as an engineering project will cost you a quarter and some credibility.

| This used to be a build project | It now ships as |
| :--- | :--- |
| Research and synthesis assistant | **Researcher**, installed and pinned for licensed Microsoft 365 Copilot users |
| Data-analysis and charting assistant | **Analyst**, same treatment |
| Document-grounded chatbot | SharePoint agents, Copilot Studio knowledge, Agent Builder, Foundry IQ knowledge bases |
| Alert triage, threat hunting, threat-intel briefing, false-negative detection | **Security Copilot agents in Microsoft Defender** |
| A custom alert-scoring or anomaly model over your SIEM | **Security Analyst Agent**: clustering, scoring, and forecasting over your own data, without code |
| Homegrown agent inventory, audit, and DLP | **Agent 365**, agent registry, **Microsoft Entra Agent ID** |
| Hand-rolled agent-to-agent protocols | **A2A**, now a supported protocol rather than a bespoke integration |
| Custom evaluation harnesses | Built-in agent evaluations, callable from CI/CD |
| Bespoke RPA scripting | **Computer use** |
| Per-agent tool and credential wiring | Centralized tool catalogs exposed as a single MCP endpoint |

This table is the buy-before-build ladder made concrete. It will keep changing, which is the point. **Check it before you fund anything**, and treat "we'll build it" as a claim requiring evidence rather than a default.

---

## Scenario 1: Grounded Q&A Over Enterprise Content
{: #scenario-1-grounded-qa-over-enterprise-content }

**Bucket:** *AI for You*

### Business Context
{: #scenario1-business-context .no_toc }

**This is the most requested thing in the entire portfolio, and it is almost never the most interesting one.**

Somewhere in the building there is a person (an HR lead, a compliance manager, a field-operations director) who owns a library of documents that already answer the questions filling their inbox. The policies are written. The procedures are current. Nobody can find them. So the owner becomes a human search index, answering the same eleven questions on a rotation, and the documents quietly rot because the only person who reads them is the one who wrote them.

What that person wants is not an agent. What they want is for the content to answer for itself.

### Is This Actually Agentic?
{: #scenario1-agentic .no_toc }

**Usually no. Pretending otherwise is how these projects get overbuilt.**

The industry calls this **RAG**: retrieve relevant passages, hand them to a model, get a grounded answer with citations. Notice what is missing. There is no goal the system pursues across turns, no plan it revises, no action it takes in a system of record. It answers, it cites, it stops.

**Retrieval is the product. The model is garnish.** Ninety percent of the quality in this scenario is decided before a token is generated: by chunking, by ranking, by freshness, by whether the source content was any good in the first place. Teams that spend their budget on orchestration and their spare afternoons on retrieval get exactly the quality that allocation deserves.

Where it *does* start to earn the word: **agentic retrieval**, where the system decomposes a messy question into several targeted queries, runs them in parallel, and reconciles the results. That is a genuine capability step, and it is still retrieval, a smarter librarian, not a new job title.

### Key Requirements
{: #scenario1-key-requirements .no_toc }

- **Permission trimming.** A user must never see a passage they could not open directly.
- **Citations that survive a click.** An answer without a resolvable source is a rumor with good grammar.
- **Freshness.** A confidently cited superseded policy is worse than no answer at all.
- **Refusal behavior.** The system must be able to say it does not know, and be measured on how often it should have.
- **An evaluation set.** A few dozen real questions with known-good answers, run on every change.

### Recommended Technologies
{: #scenario1-recommended .no_toc }

**The decision point is the trust boundary, not the capability.** Every platform on the list can retrieve a document and summarize it. What separates them is where the content lives and who is allowed to read it. That question has exactly two answers.

**Inherited vs. Implemented.** If your content lives in Microsoft 365 and your audience is employees, the permission model is *inherited*: the platform already knows who may open which file, and the answer is trimmed to the asker without you writing a line of authorization logic. The moment content spans on-premises shares, third-party repositories, or a surface that customers can reach, that model does not follow the data. You now *implement* it: indexing security identifiers, filtering at query time, and re-testing every time somebody changes a group membership. Same feature on a slide. Completely different project.

| If the content and audience look like this | Reach for | Because |
| :--- | :--- | :--- |
| Documents in a SharePoint library, employees asking | A **SharePoint agent** pointed at the library | Zero build. Permissions inherited. Often finishes the project. |
| M365 content plus a few external sources, employees asking | **Copilot Studio** knowledge, or **Copilot/Graph connectors** into Microsoft 365 Copilot | Extends the reasoning surface without moving the data |
| Content spanning on-prem, third-party stores, or line-of-business systems | **Azure AI Search** with **agentic retrieval**, fronted by a **Microsoft Foundry** agent | You control the index, the ranking, and, necessarily, the ACLs |
| Many sources that several agents will all need | A **Foundry IQ** knowledge base | Retrieval becomes a shared asset instead of per-agent plumbing |
| Customer-facing | **Foundry**, with **Foundry IQ** when several agents share the same knowledge, or **Azure AI Search** directly when you need private networking or a GA service level | There is no inherited permission model outside your tenant, so retrieval and authorization are yours to design either way |

Check current availability and licensing for any of these in [Technologies]({{ '/docs/technologies' | relative_url }}) before you commit to a date.

### Alternative Approaches
{: #scenario1-alternatives .no_toc }

- **Fix the content instead.** If three of the five source documents contradict each other, no retrieval architecture will save you. Deduplication and an owner-per-document policy sometimes outperform the entire project.
- **Search plus a summarizer.** A well-tuned search experience with generated summaries is cheaper to run, easier to explain, and gives users the thing they usually wanted: the document.
- **Buy the surface.** If the questions are research-shaped rather than lookup-shaped, check whether **Researcher** already does it. See the ships-already table above.

### What Usually Goes Wrong
{: #scenario1-failure .no_toc }

**Oversharing, discovered in public.** The failure is rarely that the agent could not find the document. It is that it found a document the asker was never meant to see: a compensation spreadsheet in a library with inherited permissions nobody audited. The agent did not break your security model; it *published* it. Run a permissions audit on the source content before the pilot, not after the incident.

**The evaluation set that never got written.** Without one, "is it good?" is settled by whoever tested it last and felt strongly. With one, it is a number that moves.

---

## Scenario 2: Customer Service Voice and Transactions
{: #scenario-2-customer-service-voice-and-transactions }

**Bucket:** *AI as a Product or Feature*

### Business Context
{: #scenario2-business-context .no_toc }

**The knowledge half of customer service is a commodity now. The phone line is where the argument moved.**

A contact center director already deflected the easy questions. The website chat handles returns policy, shipping windows, and business hours, and it does it well enough that nobody talks about it anymore. What remains is the expensive part: people calling because something went wrong with a specific order, on a specific account, and they need someone with the authority to *change* it. Those calls are long, they queue, and they are staffed by the people you least want reading a knowledge base out loud.

Eighteen months ago, "agent" implied text. It does not anymore. Voice arrived as a first-class channel (real-time speech, interruption handling, telephony integration), and that changed which half of the contact center is worth automating.

### Is This Actually Agentic?
{: #scenario2-agentic .no_toc }

**Yes, genuinely. The reason is the transactions, not the talking.**

An agent that answers questions is a retrieval system with a microphone. An agent that looks up an order, applies a credit, reschedules a delivery, and knows when to stop and fetch a human is doing something categorically different: it holds a goal across turns, chooses among tools, and takes actions with consequences in a system of record. That is the real threshold. **Not whether it converses, but whether it commits.**

The escalation path is part of the agent's design, not a fallback bolted on afterward. An agent that cannot hand off cleanly is not autonomous; it is stranded.

### Key Requirements
{: #scenario2-key-requirements .no_toc }

- **Latency budgets measured in a real call**, not a demo. Conversational turn-taking dies at delays people barely notice on a chat screen.
- **Barge-in and interruption handling.** Customers talk over agents. Humans handle it instinctively; systems have to be built for it.
- **Actions under a real identity**, with the customer authenticated before anything is written.
- **Escalation that carries context.** The worst outcome in this scenario is a customer repeating themselves to a human who got a transcript nobody read.
- **Consent and recording controls** that match the jurisdictions you operate in.
- **Containment measured honestly**, resolved without a human, not merely *ended* without one.

### Recommended Technologies
{: #scenario2-recommended .no_toc }

**The decision point: is voice a channel on your agent, or is your agent a component in a contact center?** Those are two different products and two different owners.

If the contact center is the system of record (queues, routing, workforce management, agent desktops), then the AI belongs *inside* it. **Dynamics 365 Contact Center** is the anchor, with **Copilot Studio** authoring the conversational behavior and the actions, published to voice and Teams Phone channels. The business owns it, the routing already exists, and the escalation path is a product feature rather than an integration project.

If you own the telephony and the latency budget yourself (an embedded product, a device, a bespoke IVR you are replacing), the code-first path is a **Microsoft Foundry** agent fronted by **Voice Live**, which supplies the real-time speech loop and connects the agent to telephony. You get control of the model, the interruption behavior, and the evaluation harness. You also get the pager.

Transactions land the same way in both paths: connectors or MCP tools into the order system, CRM, and billing, invoked under the authenticated customer's context.

**Write forward:** real-time voice agents are young, moving quickly, and unevenly available across surfaces. The architecture below is stable; the feature matrix is not. Check [Technologies]({{ '/docs/technologies' | relative_url }}) and [Feature Comparison]({{ '/docs/feature-comparison' | relative_url }}) for current status before you commit a launch date to a marketing team.

### Alternative Approaches
{: #scenario2-alternatives .no_toc }

- **Assist the human instead of replacing them.** Real-time suggestion and post-call summarization for live agents is a smaller build, a smaller risk, and often a larger measured return than containment.
- **Text first, voice second.** If the transactional flows have never run unattended anywhere, prove them in chat where a mistake is visible and reversible before you put them on a phone line.
- **Deflect to a callback.** For the genuinely complex tail, the best AI outcome is a well-triaged, well-summarized handoff, not a heroic attempt.

### What Usually Goes Wrong
{: #scenario2-failure .no_toc }

**The write action ships before the read path is trustworthy.** Teams pilot voice with answers, declare success, and then enable order modifications in the same release. The failure mode of a bad answer is an annoyed customer. The failure mode of a bad action is a refund to the wrong account, at scale, overnight.

**Transcription meets proper nouns.** Order numbers, surnames, and street names are where speech systems lose, and they lose quietly. Design confirmation steps for anything the customer spells out.

---

## Scenario 3: IT Helpdesk and the Employee Service Desk
{: #scenario-3-it-helpdesk-and-the-employee-service-desk }

**Bucket:** *AI for You*

### Business Context
{: #scenario3-business-context .no_toc }

**The service desk queue is the most boring problem in the building and the best-shaped one you will find.**

An IT manager looks at last quarter's tickets and finds the same distribution everyone finds: password resets, VPN failures, software requests, "how do I get access to," and a long tail of genuinely hard problems. The top of that list is high-volume, low-variance, and well-documented. Those three properties almost never appear together. It is the closest thing to a designed-for-automation workload that naturally occurs in an enterprise.

And here is the part that decides the project: **most of it already ships.** Microsoft, and every major ITSM vendor, sells templated agents for exactly this shape. A team that starts by building is a team that skipped the catalog.

### Is This Actually Agentic?
{: #scenario3-agentic .no_toc }

**Half of it is, and the two halves need different amounts of care.**

The answering half (*how do I connect to the VPN*) is Scenario 1 wearing an IT badge. Retrieval, citations, done.

The acting half is where it becomes an agent: resetting a credential, provisioning a license, opening and enriching a ticket, restarting a service. Those are actions against identity and infrastructure, and they are exactly the actions an attacker would like performed on their behalf. **The moment your helpdesk agent can reset a password, it is a privilege escalation path with a friendly conversational interface.** Design it as such.

### Key Requirements
{: #scenario3-key-requirements .no_toc }

- **Verified caller identity** before any action, with step-up authentication for anything sensitive.
- **A hard split between answering and acting**, with separate approval, logging, and rollback for the second.
- **Deep ITSM integration.** The ticket system stays the system of record; the agent participates in it rather than replacing it.
- **Deflection *and* resolution measured separately.** A closed conversation is not a solved problem.
- **A clean path to a human** for the long tail, with the transcript and the attempted actions attached.

### Recommended Technologies
{: #scenario3-recommended .no_toc }

**The decision point: start in the catalog, and only build what the catalog does not cover.**

The surface should be **Microsoft Teams**, because that is where the person having the problem already is, and because it brings authenticated identity with it for free. The authoring surface is **Copilot Studio**, which ships templated employee self-service agents and connects to the major ITSM platforms (ServiceNow, Jira Service Management, and the rest) through the Power Platform connector library. Confirm the current template catalog and entitlement in [Technologies]({{ '/docs/technologies' | relative_url }}) rather than assuming what is included; this part of the portfolio moves.

Actions that touch identity and infrastructure (license assignment, group membership, credential reset) should run through governed connectors with an explicit approval step, not through a service account with standing administrative rights. If you find yourself creating a broadly privileged account so the agent "just works," stop; that account is the entire security review, and it will fail it.

### Alternative Approaches
{: #scenario3-alternatives .no_toc }

- **Your ITSM vendor's own agent.** If the ticket platform ships one, evaluate it first. It already has the data, the workflow, and the audit trail.
- **Answer-only, on purpose.** A helpdesk agent that never takes an action captures a large share of the value with a fraction of the governance load. That is a legitimate finishing point, not a phase one.
- **Fix the top three causes instead.** If a third of tickets are one VPN client misbehaving, the agent is treating a symptom you could cure.

### What Usually Goes Wrong
{: #scenario3-failure .no_toc }

**Success is declared on the wrong metric.** Deflection rate is easy to measure and easy to game. A conversation that ends because the user gave up counts identically to one that ended because the problem was solved. Instrument reopened tickets and follow-up contacts, or you will celebrate a number that means nothing.

**The agent becomes a ticket-generating machine.** An agent that can open tickets but not close them converts a conversation problem into a backlog problem and calls it automation.

---

## Scenario 4: Conversational Analytics Over Governed Data
{: #scenario-4-conversational-analytics-over-governed-data }

**Bucket:** *AI as a Product or Feature*

### Business Context
{: #scenario4-business-context .no_toc }

**Agents finally reached the warehouse, and the warehouse was not ready for visitors.**

For two years, every practical grounding story ended at the document library. Ask an agent a question and it read something someone wrote. But the questions executives actually ask are not in documents. *Which regions missed plan last quarter? Which accounts churned after a price change? What is our exposure on this supplier?* Those answers live in tables, behind a BI team with a six-week queue, and by the time the report arrives the question has moved on.

So the ask is obvious and the demand is real: let people ask the data a question in plain language, and get an answer that is right, permitted, and read-only.

### Is This Actually Agentic?
{: #scenario4-agentic .no_toc }

**Technically yes. Practically, the agent is the easy part.**

The industry has called this **NL2SQL** or text-to-SQL for years, and the pattern is a genuine tool-using loop: interpret the question, pick the right tables, compose a query, run it, check whether the result answers what was asked, and try again if it does not. That is agent-shaped work.

But here is the thing that decides whether the project survives contact with a finance director: **this is a semantics problem before it is an agent problem.** If your organization has two definitions of "customer" (one in the CRM that counts contracts, one in the warehouse that counts billing entities), the agent will not surface the conflict. It will pick one, or worse, average them, and it will present the result in the same confident tone it uses when it is right. The model does not know your business means something specific by that word. It only knows the word.

This is why the honest sequence is: define the semantics, *then* point an agent at them. Teams that reverse it spend the project relitigating definitions in a bug tracker.

### Key Requirements
{: #scenario4-key-requirements .no_toc }

- **A governed semantic layer.** Business terms defined once, in one place, that the agent is required to use.
- **Read-only by construction.** Not read-only by instruction, but by the permissions on the connection.
- **Row-level and object-level security enforced at the source**, so two users asking the same question correctly get different answers.
- **Show the work.** The query, the tables, and the filters must be inspectable. An unauditable number will not be trusted twice.
- **A refusal path.** "I cannot answer that from this data" is a feature, and the hardest one to get.

### Recommended Technologies
{: #scenario4-recommended .no_toc }

**The decision point: do you have a semantic layer, or do you have tables?** Everything downstream follows from that answer.

If your data estate is on **Microsoft Fabric**, the direct path is a **Fabric data agent**: conversational question-answering over OneLake sources that respects the underlying data permissions, and that can be consumed from Copilot Studio and Microsoft 365 Copilot so the answer appears where people already work. The agent is a thin layer over a governed estate, which is exactly the right proportion.

The semantics live one layer down. **Fabric IQ** is where the business is defined rather than merely stored: ontologies that state what a *customer* or an *order* actually is, semantic models, and graph relationships an agent can reason across. If you are serious about this scenario, that layer is the project. The agent is the last two weeks of it.

Outside Fabric, the code-first assembly is a **Microsoft Foundry** agent with tools that query your warehouse through a governed connection, plus whatever semantic definitions you already maintain. You get flexibility; you also inherit responsibility for every guardrail Fabric would have enforced for you.

**Say when the ground is moving:** structured-data agents are the youngest pattern in this catalog. Capabilities, availability, and even the vocabulary are still settling. See [Technologies]({{ '/docs/technologies' | relative_url }}) for current status. The architectural conclusion is stable and worth acting on now: **fund the semantic layer regardless of which agent you eventually point at it.** That investment survives every product decision downstream.

### Alternative Approaches
{: #scenario4-alternatives .no_toc }

- **A dashboard.** Genuinely. If eight of the ten questions repeat monthly, a well-built report answers them faster, cheaper, and identically every time. Conversational analytics earns its cost on the *unpredictable* tail.
- **Curated question sets.** Constrain the agent to a validated set of query templates. Less magical, dramatically more trustworthy, and a defensible way to start.
- **Analyst, for spreadsheet-scale work.** If the data arrives as a file rather than a warehouse, check the ships-already table before designing anything.

### What Usually Goes Wrong
{: #scenario4-failure .no_toc }

**The numbers do not tie out, and trust dies in a single meeting.** A CFO who catches one wrong figure will not use the system again, and neither will anyone who watched. This scenario has an unusually low tolerance for the ordinary AI failure rate, because its output goes straight into decisions and slide decks.

**Ambiguity gets resolved silently.** The dangerous questions are not the ones the agent refuses. They are the ones with two reasonable interpretations, where it picks one and never mentions the other existed.

---

## Scenario 5: Security Operations Triage
{: #scenario-5-security-operations-triage }

**Bucket:** *AI as a Product or Feature*

### Business Context
{: #scenario5-business-context .no_toc }

**A SOC analyst spends the morning on reported phishing emails, and most of them are newsletters.**

Every enterprise with a "report suspicious message" button has this queue. It is high volume, overwhelmingly benign, and it must still be worked, because the one that matters is indistinguishable from the noise until somebody looks. The same shape repeats across the security function: threat intelligence that needs reading and summarizing against your actual exposure, DLP alerts that need sorting, identity risks that need judging.

There is a second, quieter version of the same problem facing the other direction. Rather than working the alerts that arrived, somebody has to find the weaknesses **before** anyone reports them: the vulnerability that spans three files and two functions, the kind static analysis cannot see and a human only finds with time nobody has.

Both are repetitive expert judgment at a volume that exceeds the supply of experts. Both are textbook cases for automation. And both are textbook cases for *not building it yourself*, though for slightly different reasons, and at very different levels of maturity.

### Is This Actually Agentic?
{: #scenario5-agentic .no_toc }

**Yes, genuinely, in both directions. And the cleanest observation in this catalog is that the agentic part is already written.**

Triage is a real multi-step reasoning loop: gather signals, correlate against known indicators, form a verdict, explain the reasoning, act or escalate. Vulnerability discovery is a harder one: reason across a codebase, form a hypothesis, *prove* it rather than merely flag it, then propose a fix. Both are exactly the work agents are good at.

Both are also work that Microsoft and every serious security vendor has already productized, because they observe the volume and the ground truth across an enormous customer base and you do not. Detection quality here is a function of data you will never have.

So the framing inverts from most scenarios in this catalog. The question is not *how do I build this agent*. It is **what does the prebuilt one not cover, and is that gap worth owning**, a question with a sharper edge than usual, because in this domain building your own carries an identity risk that most teams never see coming.

### Key Requirements
{: #scenario5-key-requirements .no_toc }

- **Explainable verdicts.** An analyst must be able to see why, and disagree.
- **Ground-truth measurement.** Track agreement with analyst decisions and, specifically, false negatives. This is the rare scenario where the rare miss is the whole risk.
- **Human authority preserved on consequential actions**: account disablement, isolation, mass deletion.
- **Full audit trail**, because this queue eventually appears in an incident review.
- **Feedback that changes behavior**, not a thumbs-down button routed to a mailbox.
- **Clarity about whose permissions the agent carries.** Anything that can close an alert needs a documented answer to *"whose access does this run with?"* On Microsoft platforms the agent gets its own identity automatically, which settles the audit trail. It does not settle the data question. See *What Usually Goes Wrong*.

### Recommended Technologies
{: #scenario5-recommended .no_toc }

**The decision point: buy the prebuilt, extend only at the edges. And know that "buy" now has three meanings, not two.**

This scenario has split into two lanes that bill differently, live in different consoles, and carry very different maturity. Most readers belong in the first.

**Lane A: Alert and incident triage (reactive).** This is where the volume is and where the prebuilt story is strongest. **Security Copilot agents in Microsoft Defender** cover the patterns above directly:

| Agent | What it does |
| :--- | :--- |
| **Security Alert Triage Agent** | Autonomous verdicts on alerts, with reasoning you can inspect and disagree with. Supersedes the earlier Phishing Triage Agent and extends beyond email into cloud and identity alerts |
| **Threat Intelligence Briefing Agent** | Gathers and synthesizes intelligence *against your actual exposure* rather than producing a generic feed |
| **Threat Hunting Agent** | Natural language to KQL, interprets results, and guides a full hunt session |
| **Security Analyst Agent** | Anomaly detection, clustering, risk scoring, and forecasting over Defender XDR and Sentinel data, **without code or queries** |
| **Dynamic Threat Detection Agent** | Runs continuously hunting **false negatives** (the things your detections missed) and maps findings to MITRE ATT&CK |
| **Data Security Triage Agent** | Triages DLP alerts across Exchange, Teams, OneDrive, SharePoint, and endpoints (Purview-managed) |

Two of these deserve more attention than they get. **The Security Analyst Agent is exactly the "our data science team is building a custom alert-scoring model" project.** It already does clustering, scoring, and forecasting over your own SIEM data. And the **Dynamic Threat Detection Agent is anti-triage**: it addresses the failure mode this scenario names as the whole risk, the rare miss. Neither should be rebuilt by anyone.

**Lane B: Code and exposure discovery (proactive).** Newer, and a different shape of problem: finding vulnerabilities in your own code before anyone reports them. **Codename MDASH** (Microsoft's multi-model agentic scanning harness, surfaced through **Microsoft Security Exposure Management**) runs a fleet of specialized agents to discover, prove, and propose fixes for cross-file and cross-function vulnerabilities that neither static analysis nor a single prompt reliably finds. Microsoft's own framing is *"over 100 specialized agents coordinated across multiple models, not a single LLM prompt."* An optional **MAI-Augmented** profile adds **MAI-Cyber-1-Flash**, a cyber-specialized Microsoft model, *alongside* the three required general models rather than in place of them.

**Lane B is early.** It is in private preview, and it carries a constraint you must understand before piloting it. See *What Usually Goes Wrong*. **Pilot it; do not architect around it yet.** (Microsoft's setup page still describes the MAI-Augmented profile as CLI-only; the MSEM release notes have since extended it to on-demand scans triggered from the Defender portal. The two pages disagree, so check both before you plan around either.) Note also that discovery is not remediation: the scanner produces proven findings and exported reports, and somebody still has to turn a finding into work that ships. That handoff is [Scenario 6](#scenario-6-delegated-developer-work-and-review-throughput): a bounded issue, delegated, reviewed, merged by a human.

Above both lanes sits **Project Perception**, which Microsoft has announced as a coordinating system for red-team, blue-team, and remediation agents. Treat it as direction rather than a decision input. It tells you where this is heading, which is useful, but you cannot build on an announcement.

**The third meaning of "buy": a managed service.** For an organization without a real SOC, the correct answer is often neither a product nor a build. **Microsoft Defender Experts MDR** puts human analysts on your triage and investigation, with an expanded tier extending to third-party and multicloud sources through Sentinel, and **Defender Experts Threat Intelligence** delivers curated intelligence tailored to your environment. This framework's buy-before-build axis usually reads as *product versus code*. Here there is a legitimate third position, and for many organizations it is the right one.

### Alternative Approaches
{: #scenario5-alternatives .no_toc }

- **Your incumbent SIEM/SOAR vendor's agents.** The same buy-first logic applies whoever you already run. Extending the console your analysts live in usually beats introducing a second one.
- **Deterministic automation for the obvious cases.** A large share of that phishing queue closes on rules. Rules are cheaper, faster, and perfectly auditable. Spend the model on the ambiguous remainder.
- **Managed detection and response**, per above: a real option, not a concession.

### What Usually Goes Wrong
{: #scenario5-failure .no_toc }

**Somebody builds it.** A capable security engineering team, given this problem and a budget, will produce a working triage agent in a quarter, and then own its detection quality, its tuning, and its on-call rotation forever, against a vendor product that improves continuously at no marginal cost. This is the most expensive avoidable build in the catalog.

**You inherit a human's permissions without meaning to.** Two agents in this scenario can carry a single named person's access to every caller, and neither announces it.

**Security Copilot's** custom and partner-built agents connect using an existing user account and inherit that person's access while running. The credentials are fixed at setup, so every invocation carries the setup person's reach regardless of who triggered it. **Copilot Studio's** event-triggered agents have the same shape, captured at authoring time instead: they can only use the maker's credentials, and Microsoft's warning is unusually direct, saying this *"might allow users of an agent without their own authorization the ability to access data and systems they shouldn't."*

Contrast that with the interactive default, where the agent acts as whoever is talking to it and therefore cannot exceed them. **The failure is not that an agent lacks an identity; it is that one person's access ends up serving everybody.** That question is worth asking tool by tool rather than agent by agent, and [Agent governance and agent sprawl](#scenario-10-agent-governance-and-agent-sprawl) works through the full model.

**Agentic code scanning asks you to lower your own defenses.** Microsoft's guidance for MDASH is explicit: configure a dedicated model endpoint with content filters set permissively and **prompt-injection protections turned off**, because security content trips filters designed for other purposes. Microsoft's own words: set every severity threshold to *"the lowest possible level"* and turn off *"Prompt Shields for Jailbreak"* and *"Prompt Shields for Indirect Attack."* The reasoning is sound, and the documented mitigation is a dedicated endpoint: *"Create and use a dedicated Microsoft Foundry endpoint for MDASH only. Do not use this endpoint for any other workload."* But understand what you are accepting: a pipeline that ingests attacker-influenceable content, including third-party dependencies and contributed code, into a model endpoint with indirect prompt-injection defenses deliberately disabled. **That is a considered trade, not a free one.** Isolate the endpoint exactly as documented, and never reuse it for another workload. Note that endpoint isolation is the *only* mitigation Microsoft documents here; the scanner host itself requires outbound access to a published allowlist of Microsoft domains, so do not assume an air-gapped runner is part of the design.

**Verdicts become final.** The agent's job is to make the queue tractable, not to close it unattended. The moment nobody samples the auto-closed items, the system's accuracy becomes unmeasurable, right up until an incident review measures it for you. **No product does this sampling for you.** It is one of the few things in this scenario that genuinely remains yours to build.

**Tuning drifts apart.** Analysts tune detections; the agent learns from outcomes; nobody reconciles the two. Six months later the queue looks healthy and nobody can explain why.

---

## Scenario 6: Delegated Developer Work and Review Throughput
{: #scenario-6-delegated-developer-work-and-review-throughput }

**Bucket:** *AI for Your Codebase*

### Business Context
{: #scenario6-business-context .no_toc }

**Reviews are the bottleneck. Not because reviewers are slow, but because half of every review is spent on the same things: missing tests, inconsistent error handling, a dependency nobody was supposed to add.**

A platform team of forty engineers merges three hundred pull requests a month. Senior engineers are doing junior work at senior salaries, and the interesting architectural questions get three minutes at the end. Meanwhile the backlog holds a permanent sediment of work nobody wants and everybody agrees matters: flaky tests, missing documentation, a deprecation that has been "next sprint" for three quarters, and a queue of security alerts with known fixes.

Two problems, one shape. The sediment is work that could be *delegated*. The review queue is what happens when you delegate it.

### Is This Actually Agentic?
{: #scenario6-agentic .no_toc }

**Yes, and the vocabulary shift tells you how much has changed.**

GitHub's coding agent is now the **cloud agent**, and that rename is not cosmetic. "Coding agent" described something that helped *you* code. "Cloud agent" describes a worker you hand an issue to, which goes away, works on its own branch, and comes back with a pull request. The unit of delegation moved from a keystroke to a task.

Note carefully what the platform will and will not do. The agent works under your branch protections; it cannot mark its own work ready, approve it, or merge it. **Those guardrails defend the repository. They do not defend your judgment, and they do not create review capacity.** Generation got cheap. Verification did not. That asymmetry is the entire scenario.

Beware the aspirational framing of an "end-to-end lifecycle" where agents carry work from incident to production unattended. The real, shipping, valuable pattern is narrower and better: **bounded task delegation with a human at the merge.**

### Key Requirements
{: #scenario6-key-requirements .no_toc }

- **Bounded tasks with acceptance criteria a machine can check.** "Fix the flaky test" is a delegation. "Improve the auth module" is a wish.
- **Conventions written down once**, in version control, rather than re-taught in every review.
- **Review capacity planned for**, because you are about to increase supply into a queue that was already full.
- **The merge gate untouched.** Required checks, code-owner approval, and branch protection all stay exactly where they were.
- **A source of well-formed work**: security alerts, incident findings, deprecation tracking.

### Recommended Technologies
{: #scenario6-recommended .no_toc }

**The Analogy: The House Style Guide.** A good newsroom does not re-teach its house style in every edit. It writes the style guide down once, and the copy desk enforces it. `AGENTS.md` and custom agents are your house style guide; the cloud agent is the copy desk; the human editor still owns the byline.

**The decision point: write the rules down before you turn on the supply.** An agent without a house style does not produce bad code so much as *unfamiliar* code, and unfamiliar code costs more to review than bad code. You have to read all of it to find out.

| Component | Technology | Purpose |
| :--- | :--- | :--- |
| **House style** | `AGENTS.md`, GitHub's "agent instructions" | Build commands, test commands, conventions, the things reviewers keep repeating |
| **Specialists** | **Custom agents** in `.github/agents/` | Narrow, task-scoped workers: test coverage, dependency hygiene, migrations |
| **Delegation** | **GitHub Copilot cloud agent** | Take a bounded issue, return a pull request |
| **Review evidence** | **Copilot code review** | Mechanical findings surfaced before a human opens the diff |
| **Work intake** | Security alerts, **Azure SRE Agent** findings, deprecation tracking | Turn signals into bounded, well-specified issues |
| **Escalation** | **GitHub Copilot SDK** | Only when the loop itself becomes something you ship |

**On the operations handoff: two keys, not one.** When a production investigation produces a root cause, the useful pattern is a human-triaged issue carrying the evidence and the acceptance criteria, which is then delegated like any other bounded task. The investigating agent writes the work order; the coding agent prepares the repair; a human and your branch policy hold the keys to merge and deploy. Resist the temptation to wire them directly together. The triage step is where a bad diagnosis stops being expensive.

Language support, plan requirements, and hosting constraints differ across these surfaces and change often; check [Technologies]({{ '/docs/technologies' | relative_url }}) before you promise an escalation path.

### Alternative Approaches
{: #scenario6-alternatives .no_toc }

- **Review evidence only, no delegation.** Turning on automated review without increasing generation is the low-risk half of this scenario, and it delivers the reviewer-time saving immediately.
- **If the work is portfolio-scale upgrades**, this is the wrong scenario. See Scenario 7. Different bottleneck, different tools.
- **Fix the review culture first.** If pull requests already sit for four days, adding supply makes the measured outcome worse. That is not an AI problem, and AI will not solve it.

### What Usually Goes Wrong
{: #scenario6-failure .no_toc }

**The queue gets longer and everyone blames the tool.** The organization enables delegation, output rises, review capacity does not, and the cycle-time metric (the one the leadership team watches) gets worse. Nothing was broken. The constraint simply moved, and nobody re-planned around it.

**The normalization of deviance.** Every time an agent gets it right without close supervision, the case for supervising it next time gets a little weaker. Nothing announces the moment the trust became unearned. You discover it in an incident review, reconstructing a decision nobody consciously made.

---

## Scenario 7: Legacy Application Modernization
{: #scenario-7-legacy-application-modernization }

**Bucket:** *AI for Your Codebase*

### Business Context
{: #scenario7-business-context .no_toc }

**Nobody gets promoted for upgrading a framework, and nobody survives the breach that happens because they didn't.**

An enterprise architect owns several hundred applications across Java, .NET, and C++, sitting on runtimes that left support somewhere between "a while ago" and "before the current team joined." Each upgrade is individually unremarkable and collectively impossible: the dependency chains are tangled, the tests are thin, the original authors have moved on, and the business case for any single application is weak enough to lose every budget cycle. So the portfolio ages, the vulnerability count climbs, and the eventual forcing function is a security finding rather than a plan.

The economics here are unusual, and worth stating plainly: this is one of the few places where AI does not make an existing activity faster. It makes a previously uneconomic activity possible at all.

### Is This Actually Agentic?
{: #scenario7-agentic .no_toc }

**Yes, and it is one of the better-fitting uses of agency in the catalog.**

Upgrading a real application is not a transformation you can express as a script. It is a loop: attempt a change, build, read the errors, understand what broke, adjust, repeat, with judgment required at every turn about whether a breaking change should be worked around or accepted. That is precisely the shape of work that iterative agents handle well, and deterministic tooling has never handled at all.

What keeps it safe is that this bucket has an unusually strong oracle. The compiler and the test suite are not opinions. **The build either passes or it does not**, which means the agent's work can be verified by something other than a human's patience. That is what makes portfolio-scale delegation defensible here when it would not be elsewhere.

### Key Requirements
{: #scenario7-key-requirements .no_toc }

- **A baseline captured before anything moves**: builds, tests, dependencies, vulnerabilities, runtime behavior, performance.
- **Test coverage adequate to detect regression.** Where it is thin, generating tests is the first modernization task, not an afterthought.
- **Bounded slices.** One heroic repository-wide change is not a modernization; it is an unreviewable diff.
- **A rollback path per slice**, because some upgrades reveal that the application was depending on the bug.
- **Human acceptance at the merge**, on evidence rather than optimism.

### Recommended Technologies
{: #scenario7-recommended .no_toc }

**The decision point: assessment is a portfolio activity, execution is a repository activity, and confusing them is why these programs stall.**

**GitHub Copilot Modernization** is the first-party answer, and it is deliberately delivered in two shapes because those are two different jobs. A **modernization CLI** assesses and plans across many applications at once (which apps, which targets, which order, which dependencies will fight back) and produces the thing a program manager can actually fund. **IDE extensions** then execute the upgrades where a developer can watch: language, framework and tooling upgrades, dependency and CVE remediation, and generation of container, infrastructure, and deployment assets for supported migration paths. Where the ecosystem has good deterministic transformation tooling, the product uses it rather than asking a model to reinvent it.

Anything generated here (a code change, a Dockerfile, a pipeline definition) is a **proposal**, and your existing gates decide its fate. Automation accelerates the renovation. It does not certify the building.

Supported languages, migration targets, and surface availability differ and are actively expanding; confirm scope in [Technologies]({{ '/docs/technologies' | relative_url }}) before committing a portfolio plan.

### Alternative Approaches
{: #scenario7-alternatives .no_toc }

- **General-purpose delegation.** For a handful of applications rather than hundreds, Scenario 6's bounded-issue pattern works fine and costs less to set up.
- **Rehost, then modernize.** Sometimes the urgent problem is the datacenter contract, not the framework version. Lift first, refactor on a schedule you choose.
- **Retire it.** The cheapest modernization is discovering that eleven of the applications have four users between them.

### What Usually Goes Wrong
{: #scenario7-failure .no_toc }

**The tests were the real project.** An upgrade validated by a suite that covers a third of the behavior produces a green build and a silent regression. Teams that discover this discover it in production, and they conclude the tooling was untrustworthy when the truth is that their safety net had holes in it before the agent arrived.

**Scope inflation dressed as opportunity.** While we are in here, we could also restructure the modules. No. A modernization that changes architecture is a rewrite, and rewrites have a different failure rate and a different approval process.

---

## Scenario 8: Document-In, System-Out Back Office
{: #scenario-8-document-in-system-out-back-office }

**Bucket:** *AI as a Product or Feature*

### Business Context
{: #scenario8-business-context .no_toc }

**An accounts payable manager receives several hundred supplier invoices a month, in every format the world can produce, and none of them arrive as data.**

They land as PDFs, as scans, as photographs taken on a phone and pasted into an email body. Someone reads each one, types six fields into the ERP, checks the total against a purchase order, and routes anything large enough to need a signature. It is repetitive, it is error-prone in a way that shows up in an audit, and it scales by hiring. The same shape runs through the back office everywhere: claims, purchase orders, remittance advice, onboarding paperwork, proof of delivery.

Every vendor in the market wants to sell this manager an agent. This section exists to explain why they probably should not buy one.

### Is This Actually Agentic?
{: #scenario8-agentic .no_toc }

**No. And this scenario is in the catalog specifically to teach that answer.**

Look at the actual work. Extract fields from a document. A model does that, but it is a *classification and extraction* task with a confidence score, not a reasoning loop. Validate against a purchase order. That is a lookup and a comparison. Route above a threshold. That is an `if` statement. Write to the ERP. That is an API call.

**There is no goal being pursued, no plan being revised, and no judgment worth delegating.** What there is, is a document that needs to become structured data and a workflow that needs to run the same way ten thousand times. Introducing an agent here does not add capability; it adds nondeterminism to a process whose entire value proposition is that it is deterministic and auditable.

The discipline this teaches generalizes: **when the process is known, automate it. Reserve agency for when the path is not known in advance.** A finance director does not want a system that decides how to handle an invoice. They want one that handles it the same way every time and flags what it could not.

There is exactly one variant that flips the answer, and it is not about the document at all. It is about the destination. See Scenario 9.

### Key Requirements
{: #scenario8-key-requirements .no_toc }

- **Extraction accuracy measured per field**, not per document. A 95% document score can hide a systematic failure on one line item.
- **Confidence thresholds with a human review queue** for anything below the line.
- **Deterministic validation and routing** (thresholds, approvals, segregation of duties) outside the model entirely.
- **A complete audit trail** from original document to posted transaction.
- **Ownership by the business team**, because the routing rules change when the policy changes and IT should not be on that path.

### Recommended Technologies
{: #scenario8-recommended .no_toc }

**The decision point: how variable are the documents?** That single question chooses the extraction layer, and everything else is workflow.

| Document reality | Extraction layer |
| :--- | :--- |
| Standard business documents: invoices, receipts, IDs, contracts | **AI Builder** prebuilt models, or **Azure Document Intelligence** prebuilts |
| Your own recurring formats | **Document Intelligence** custom models, trained on your samples |
| Mixed media: scans, images, audio, handwriting, unpredictable layouts | **Azure AI Content Understanding** |

The rest of the architecture is deliberately unglamorous, and that is the point: **Power Automate** for the workflow and approvals, **Dataverse** to hold extracted data before it posts, and the Power Platform connector library to reach the ERP. A finance systems analyst can own the whole thing.

The extraction model's job ends at the field level. Everything after it (comparison, threshold, approval, posting) is ordinary, testable, boring automation, and boring is the correct texture for a process that touches money.

### Alternative Approaches
{: #scenario8-alternatives .no_toc }

- **Push the format upstream.** The genuinely optimal fix for supplier invoices is a supplier portal or an e-invoicing standard, where the data arrives as data and no extraction happens at all. Less exciting, dramatically cheaper, and increasingly mandated by regulation in many markets.
- **Buy the vertical product.** AP automation is a mature software category. Check whether your ERP vendor already ships it before assembling anything.
- **Add an agent only at the exception queue.** The one place judgment genuinely appears is the pile the extraction could not resolve. That is a narrow, honest, and much smaller agentic scope.

### What Usually Goes Wrong
{: #scenario8-failure .no_toc }

**The exception path was an afterthought and became the whole job.** Straight-through processing handles the clean majority; the remainder is what consumed the team's time before automation and will consume it after. If the exception queue has no owner, no interface, and no service level, the project has automated the easy part and left the expensive part exactly where it was.

**Confidence scores get ignored.** They exist to route work to a human. A pipeline that posts everything regardless of confidence has converted a data entry problem into a reconciliation problem, and reconciliation is more expensive.

---

## Scenario 9: UI Automation Where No API Exists
{: #scenario-9-ui-automation-where-no-api-exists }

**Bucket:** *AI as a Product or Feature*

### Business Context
{: #scenario9-business-context .no_toc }

**"There is no API" used to be the end of the conversation. It ended a lot of good ideas.**

An operations lead has a process that works beautifully right up until it reaches a system nobody can integrate with: a supplier's web portal with no partner interface, a vendor application whose extensibility roadmap has been "under review" for three years, a mainframe terminal emulator that predates the concept of an API. So a person logs in, clicks through eleven screens, copies a reference number, and pastes it somewhere else. Forty times a day.

Classical robotic process automation attacked this for years and mostly lost to a different problem: the scripts broke. A vendor moved a button, a field got renamed, and the automation failed silently until someone noticed the numbers were stale.

**Computer use** changed the terms. An agent that perceives a screen and decides where to click does not shatter when a button moves. That capability dissolved a real constraint, and attached a new class of risk that most organizations have not thought about yet.

### Is This Actually Agentic?
{: #scenario9-agentic .no_toc }

**Yes, unavoidably. And that is precisely why it deserves more scrutiny than anything else in this catalog.**

A recorded macro replays a fixed path. A computer-use agent looks at a screen, forms an intent, acts, observes the result, and decides what to do next. It is a perception-action loop operating against a system that was designed on the assumption a human was driving. Every safety property that interface has (confirmation dialogs, rate limits, the natural pause of a person reading) was calibrated for a human, and none of them were calibrated for this.

### Key Requirements
{: #scenario9-key-requirements .no_toc }

- **A distinct identity for the agent.** This is the requirement everything else depends on.
- **Least privilege inside the target application**, not merely inside your tenant.
- **Bounded blast radius**: transaction limits, rate limits, a hard stop on anything irreversible.
- **Session recording**, so a disputed action can be reconstructed rather than argued about.
- **Human confirmation for consequential steps**: payments, submissions, deletions, anything a supplier will act on.
- **Failure behavior that stops.** An agent that improvises when a screen looks wrong is worse than one that halts and pages someone.

### Recommended Technologies
{: #scenario9-recommended .no_toc }

**The decision point: is the interface stable or is it drifting?** That determines whether you need perception at all, and perception is the expensive, risky part.

If the screens are stable and yours, deterministic UI automation (recorded desktop flows in **Power Automate**) is faster, cheaper, fully auditable, and does exactly the same thing every run. Computer use earns its price when the interface belongs to someone else and changes without telling you.

When you do need it: **Copilot Studio** exposes computer use as a governed capability for maker-built automations, and **Microsoft Foundry** offers a computer-use tool for code-first agents where you own the loop, the limits, and the evaluation. Confirm current availability and governance controls in [Technologies]({{ '/docs/technologies' | relative_url }}).

**Whose Hands Were on the Keyboard?** Here is the question that should stop the design review. An agent driving a user interface with credentials a human handed it is, in every log your organization owns, *that human*. The application's audit trail says Sarah approved the purchase order. Sarah's session, Sarah's account, Sarah's accountability. There is no field in that vendor's log for "an agent did this on Sarah's behalf, and Sarah was in a meeting."

That is not a hypothetical governance concern. It is the difference between an investigation that resolves and one that does not. The fix is architectural and non-negotiable: **give the agent its own identity.** A dedicated account in the target system with its own credentials and least privilege. A first-class agent identity in your directory (**Microsoft Entra Agent ID**) so the thing is a governed principal in your tenant rather than a borrowed one. Session recording so the action has a witness. Then the log answers the question, and you can act on the answer.

### Alternative Approaches
{: #scenario9-alternatives .no_toc }

- **Ask for the API.** Genuinely, first. A procurement conversation with a supplier is cheaper than a computer-use program, and vendors respond to customers who ask in contract renewals.
- **Screen-scrape a read path only.** Many of these processes need data *out*, not actions *in*. A read-only automation carries a fraction of the risk and often captures most of the value.
- **Deterministic RPA where the UI is yours.** If you control the application, you control its stability, and perception is a solution to a problem you do not have.

### What Usually Goes Wrong
{: #scenario9-failure .no_toc }

**The service account with a person's name on it.** Someone hands over their credentials to get the pilot working, the pilot succeeds, and it ships. Now an unattributed automation runs under a named employee. And when that employee changes roles or leaves, either the automation breaks or, far worse, it does not.

**Failure is silent and confident.** When a screen changes unexpectedly, a brittle script errors out loudly. An agent may improvise its way to something that looks like completion. Instrument outcomes at the destination system, not at the end of the agent's run.

---

## Scenario 10: Agent Governance and Agent Sprawl
{: #scenario-10-agent-governance-and-agent-sprawl }

**Bucket:** *Cross-cutting: it touches all three*

### Business Context
{: #scenario10-business-context .no_toc }

**Every other scenario in this document asks what you should build. This one asks what you already have, and the honest answer is that you probably do not know.**

The trigger is usually a question from an auditor, a board member, or a CISO who read something over the weekend: *how many agents are running in our environment, who owns them, and what can they reach?* The security team goes looking. What comes back is a list nobody expected: agents built by makers in departments IT has never worked with, agents created for a pilot that ended, agents whose owner left in March, agents with connections to systems that were carefully governed for humans and never re-examined for anything else.

Nobody decided this. It is the arithmetic of a platform working as designed: when building an agent takes an afternoon, people build agents in the afternoon.

**The Org Chart Nobody Drew.** You spent decades building the discipline to answer "who works here, what do they have access to, and who approved it." Then a second workforce arrived, one that authenticates, holds permissions, takes actions, and appears in no org chart, no joiner-mover-leaver process, and no access review. The problem is not that these workers are dangerous. It is that they are *unmanaged*, and unmanaged is how every access-control failure begins.

If this sounds familiar, it should. Your identity team has been fighting a version of it for years under the name **non-human identity**: the service accounts, API keys, certificates, and machine credentials that always outnumbered your humans and never fit the tooling built for them. Agents are the newest and most capable members of that population, and the reason the problem has become urgent is not that agents are a different species. It is that they are being created by people who have never had to think about identity at all. The industry also has a name for the half of this that arrives from the outside: **shadow AI**, where the agent nobody approved is the one an employee installed on their laptop this morning.

Two things are genuinely new. Agents *reason*, so their access can be exercised in ways nobody scripted: the risk OWASP files under **excessive agency**. And they are created conversationally, by people whose job is not engineering. That combination is why the old playbook needs a new chapter rather than a wider spreadsheet.

### Is This Actually Agentic?
{: #scenario10-agentic .no_toc }

**Wrong question. And asking it is the point of including this section.**

This is the catalog's only **don't-build** scenario. The deliverable is not an agent. It is an inventory, an ownership model, and a lifecycle. If you find yourself scoping an agent to govern your agents, you have recursed into the problem instead of solving it.

That said, the framework's whole thesis lands here. Every other scenario in this document produces a thing that will end up on somebody's list. **Whether that list exists before or after the audit is the only variable you control.**

### Key Requirements
{: #scenario10-key-requirements .no_toc }

- **Discovery.** You cannot govern what you cannot enumerate, and the enumeration will surprise you.
- **A named human owner for every agent**, with the same seriousness applied to an application owner.
- **Distinct identity per agent**, so actions are attributable to the agent rather than to the person who created it. Then, separately, **a documented answer to whose permissions it runs with**, because the identity does not decide that.
- **Lifecycle, including the end of it.** Provisioning is easy and universally implemented. Decommissioning is neither, and orphaned agents are the actual risk.
- **Data protection that applies to agents**, because an agent reading a sensitive document is a data flow your DLP policy was probably not written to consider.
- **Cost attribution**, since consumption without an owner is how a platform bill becomes a governance crisis.

### Recommended Technologies
{: #scenario10-recommended .no_toc }

**The decision point: treat agents as principals, not as features.** Every governance question becomes tractable once you make that move, and every one of them stays impossible while agents are treated as configuration inside somebody's app.

**Microsoft Entra Agent ID** is the load-bearing piece. Agents become first-class identities in the directory, subject to the machinery you already run for humans: conditional access, risk detection, access packages, and, the part most teams underuse, a named **sponsor** who is accountable for the agent's lifecycle, with sponsorship transferring automatically to their manager if that person leaves. That last mechanism is the direct answer to the orphaned-agent problem, and it is the reason to do this now rather than after the audit.

**Microsoft Agent 365** is the control plane above it: a registry of what exists, a map of where it came from, risk signals aggregated from Entra, Defender, and Purview onto each agent, and the admin surfaces to act. **Microsoft Purview** extends information protection to what agents read and produce. **Defender** carries threat detection. For maker-built agents, the **Power Platform admin center** still owns environment strategy and DLP policy.

**But you must understand the coverage gradient, because it is the difference between governance and the feeling of governance.** Discovery is not uniform, and it degrades in a predictable direction:

| What you built it in | What discovery looks like |
| :--- | :--- |
| Copilot Studio, Agent Builder, SharePoint, Foundry | **Automatic.** It shows up without anyone doing anything |
| Other clouds and major SaaS platforms | **Synced, on a connection an admin configures**: read-only inventory rather than full control |
| Local AI tools on employee laptops | **Detected** through endpoint management, with blocking far narrower than detection |
| Your own code, on any framework | **Nothing, until a developer makes it visible** by adopting the SDK or registering it |

Read that bottom row twice. **The agents least likely to be governed are the ones a control plane cannot see on its own**, and they are also the ones most likely to hold real credentials. Discovery tooling grades your Microsoft-platform estate generously and your custom estate not at all.

Identity coverage is more subtle than it looks, and this is where most governance programs declare victory too early. Copilot Studio now creates an Entra agent identity automatically for each new agent, and Foundry provisions a dedicated one when an agent is published (agents still in development share a project identity). **But read that word "new" carefully.** Agents built before the identity rollout continue to run on app registrations and are migrated later, which means the population you are trying to inventory right now is the one least likely to match the current model. Governance tooling works across both during the transition, so this is a reconciliation problem rather than a blocking one. It is still the kind of detail that turns a clean dashboard into an incomplete one.

**The larger question is not whether an agent has an identity. It is whose permissions it carries.** An identity settles attribution: the log entry names an agent rather than a person. It does not settle authorization, which is decided by the authentication flow the agent uses. Microsoft's logging documentation notes in passing that an agent *"can sign in with either user-delegated or app-only permissions"*, and the separation implied by that sentence is worth making explicit, because it is the distinction most governance programs collapse. **An agent with a perfectly good identity of its own can still be reaching your data using a human's delegated permissions.**

Three patterns to look for, because they carry very different blast radii:

| Pattern | Whose permissions apply | Where you meet it |
| :--- | :--- | :--- |
| **On behalf of the invoking user** | Each caller's own | The interactive default. Usually the safe one, since the agent cannot exceed the person using it |
| **A fixed human's credentials** | One named person, captured at setup or authoring time | Copilot Studio event triggers use the maker's credentials; Security Copilot custom and partner agents use a connected user account |
| **The agent's own** | Roles assigned to the agent itself | Foundry tool calls by default, and any deliberate move to app-only access |

**Ask this per tool, not per agent.** Copilot Studio configures authentication on each tool and connection, so a single agent can run on behalf of the user for a SharePoint source while carrying the maker's credentials on one connector in the same conversation. An audit that records one answer per agent will miss exactly the mixed case that matters.

**The middle row is the one to hunt**, and the reason is fan-out rather than timing: one credential ends up serving every caller regardless of what that caller could reach on their own. Microsoft's warning on event triggers is blunt about the consequence, saying it *"might allow users of an agent without their own authorization the ability to access data and systems they shouldn't."* Nothing about that is a defect. It is a documented, sometimes necessary design. But it needs to be a decision somebody made on purpose and wrote down, rather than a default nobody examined.

Do this early. Retrofitting identity onto a population of agents that already exists is the same project as retrofitting it onto a population of applications, and everyone who has done that remembers it.

Availability, licensing, and prerequisites across these controls vary considerably (several of these capabilities assume you already run the broader security suite) and they are moving quickly; see [Technologies]({{ '/docs/technologies' | relative_url }}).

### Alternative Approaches
{: #scenario10-alternatives .no_toc }

- **Start with policy, not tooling.** A published standard (every agent has an owner, an identity, a review date, and a documented purpose) costs nothing and stops the inflow while you procure.
- **Constrain the environment.** Managed environments and DLP policies in Power Platform prevent a class of sprawl rather than reporting on it afterward.
- **Amnesty, then enforcement.** Ask teams to register what they have built, without consequence, before you go looking. You will get a better inventory than any scan produces.
- **Borrow the framework your auditors already accept.** You likely do not need to invent a governance model. NIST's AI Risk Management Framework, ISO/IEC 42001, and (if you touch the EU) the AI Act's human-oversight obligations all give you a vocabulary your risk function already recognizes. Mapping agent ownership, review, and audit onto a standard someone else wrote is faster than defending one you invented, and it makes the funding conversation considerably shorter.

### What Usually Goes Wrong
{: #scenario10-failure .no_toc }

**The dashboard says you are covered, and the API keys say otherwise.** This is the failure mode that matters most, and it is documented rather than theoretical: conditional access governs what is authenticated through your directory. An agent that reaches a resource with an **API key never touches that pipeline**, so no policy applies to it. Picture the review meeting (a clean registry on the screen, every agent owned, every risk signal green) while three Python services in a product team call model endpoints with keys in an environment variable. Nothing on the dashboard is wrong. It is simply answering a narrower question than the one being asked. **Inventory completeness is an assumption you must test, not a number you can read.**

**Governance arrives as a ban.** Security discovers the sprawl, panics, and switches off the platform. Building does not stop; it relocates to personal accounts and unmanaged tools, and the organization trades a visible problem for an invisible one. Governance that makes the sanctioned path the easy path works. Governance that makes it the hard path funds the shadow one.

**Decommissioning never gets built.** Ninety percent of governance programs implement provisioning and approval, and stop. Two years later the risk is not the agents people are creating. It is the several hundred nobody has thought about since the pilot ended.

**Protection is assumed to travel with the data.** Your labels and DLP policies were written for documents humans open. An agent that reads governed material and produces something new is a data flow with a genuine gap in it. Inheritance of classification into agent-generated output is not something to take on faith. Test what happens to a label when an agent, rather than a person, is the thing doing the reading.

---

## A Warning About Multi-Agent Orchestration
{: #multi-agent-orchestration-warning }

**This is not a scenario. It is the thing you are most likely to do instead of one of them.**

Multi-agent orchestration is the most photogenic idea in this field. It demos beautifully, it diagrams beautifully, and it maps onto how we already think about organizations: a planner, a researcher, a critic, a writer, all conferring. It is also, for most enterprise problems, an answer to a question nobody asked.

The [Capability Model]({{ '/docs/capability-model' | relative_url }}) frames this as **The Soloist vs. The Orchestra**, and the [Decision Framework]({{ '/docs/decision-framework' | relative_url }}) carries the selection logic. The short version is a sequence, and you should be able to say out loud why you left each step:

1. **A direct model call.** No agent, no loop, no tools. A large share of "agent" projects are a prompt and an API call wearing a costume.
2. **A single agent with tools.** One reasoning loop that can search, call functions, and act. Microsoft's own guidance is blunt about this being *"often the right default for enterprise use cases."*
3. **Multiple agents, coordinating.** Justified by a boundary you genuinely cannot cross with one agent: a different team owning it, a different security context, a different release cadence, a different data perimeter.

Notice that the justifications at step three are **organizational, not technical**. "The problem is complicated" is not a reason to split an agent; complicated problems are what tools and instructions are for. Separate agents when *ownership* separates.

The cost of getting this wrong is not theoretical. Every added agent multiplies the failure surface, the latency, the token spend, and (most painfully) the debugging cost, because a wrong answer now has to be traced back through several handoffs before you learn which link invented it. Systems that are hard to debug become systems nobody changes.

**Most readers should not be building an orchestra.** Build the soloist. Give it good tools. Come back when a boundary, not an ambition, forces your hand.

---

## An Anti-Pattern: The Forecasting Problem Wearing an Agent Hat
{: #anti-pattern-forecasting-problem-agent-hat }

**Some problems are being marketed as agent problems by people who have agents to sell.**

Supply chain and demand forecasting is the clearest example, and it is currently promoted heavily: an agent that watches your inventory, anticipates disruption, and recommends action. It presents well to an executive audience. What is conspicuously thin is evidence of organizations running it in production and attributing results to it.

Look at what the work actually is. Demand forecasting is a time-series problem with decades of statistical method behind it. Inventory positioning is a constrained optimization problem. Supplier risk is largely a data integration problem. These are well-studied disciplines with tooling that is measurable, explainable, and (critically) *correct in a way you can prove*. A language model is not a better forecaster than a forecasting model. It is a worse one with better conversation skills.

**The honest architecture is usually the reverse of the pitch.** Solve the problem with the right technique (statistical forecasting, optimization solvers, proper data engineering) and *then*, if it helps, put a conversational surface in front of it so a planner can ask questions and understand the recommendation. The model explains the answer. It does not compute it. That is Scenario 4's pattern, and it is the version that survives a validation exercise.

**The generalized test, worth carrying into any vendor conversation:** if the problem has a numerically correct answer, an LLM is the wrong tool for producing it, and possibly a very good tool for explaining it. Agency is for problems where the *path* is unknown, not for problems where the *math* is known.

---

## A Niche Entry: Offline and On-Device Work
{: #niche-offline-and-on-device-work }

**Explicitly not one of the ten.** The demand signal for this is narrow and constraint-driven rather than broad. It is here because when it applies, it applies absolutely, and because the test it teaches is useful well beyond it.

**Bucket:** *AI as a Product or Feature*

**Business Context.** A field technician works inside a facility with no connectivity, on schematics classified as intellectual property that regulation forbids leaving a validated device. Every architecture in this document assumes a network. This one cannot.

**Is this actually agentic?** Rarely. It is local inference over local files: summarization and extraction. The constraint is the interesting part, not the reasoning.

**Key Requirements.** Function with networking disabled. No data egress, proven rather than asserted. Latency measured on the actual device profile. Predictable cost at high query volume.

**Recommended Technologies.** **Foundry Local** runs supported models on the device; Windows on-device text recognition handles printed labels and annotations. The decision point is the **device profile**: pin the Windows version, the silicon, the memory, and the accelerator path before selecting a model, because availability and performance vary by both and a model that runs on the demo laptop may not run on the fleet.

**The Airplane-Mode Test.** *"Local" is a deployment claim. "Offline and private" is a test result.* Disable networking and prove the application starts, extracts, reasons, and writes output. Then inspect telemetry, crash reporting, update checks, model downloads, and temporary files. Local inference alone does not prove zero egress, and a model that downloads on first run is not an offline deployment.

**Alternative Approaches.** Queue and sync: work offline against cached content, reason in the cloud when connectivity returns. This solves most "offline" requirements, which are usually about *intermittent* connectivity rather than a prohibition.

**What usually goes wrong.** A text model is asked to do a vision model's job because the input came from a schematic. Optical character recognition reads labels; interpreting a diagram is a separately verified capability with separate acceptance tests. Do not let the source document imply the model's competence.

---

## Scenario Comparison Matrix
{: #scenario-comparison-matrix }

{: .note }
> **This is a shortcut section.** It leads with products because you have already read the scenarios and know which problem is yours. If you have not, the products above will mean the wrong thing.

| # | Scenario | Bucket | Actually agentic? | The decision point | Anchor technologies |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | [Grounded Q&A over enterprise content](#scenario-1-grounded-qa-over-enterprise-content) | AI for You | **Mostly no**, retrieval is the product | Trust boundary: permissions **inherited** or **implemented** | SharePoint agents, Copilot Studio, Copilot connectors / Azure AI Search + Foundry |
| 2 | [Customer service: voice and transactions](#scenario-2-customer-service-voice-and-transactions) | Product or Feature | **Yes**, it commits, not just converses | Is voice a channel on your agent, or your agent a component in a contact center? | Dynamics 365 Contact Center + Copilot Studio / Foundry + Voice Live |
| 3 | [IT helpdesk and employee service desk](#scenario-3-it-helpdesk-and-the-employee-service-desk) | AI for You | **Half**, answering no, acting yes | Start in the catalog; build only the gap | Copilot Studio templates + ITSM connectors, Teams |
| 4 | [Conversational analytics over governed data](#scenario-4-conversational-analytics-over-governed-data) | Product or Feature | **Yes, but** the agent is the easy part | Semantics before agency: define the terms first | Fabric data agent, Fabric IQ / Foundry + governed warehouse tools |
| 5 | [Security operations triage](#scenario-5-security-operations-triage) | Product or Feature | **Yes, and already built** | Buy the prebuilt, extend only at the edges | Security Copilot agents in Defender; Defender Experts as a service |
| 6 | [Delegated developer work and review throughput](#scenario-6-delegated-developer-work-and-review-throughput) | Your Codebase | **Yes**, bounded task delegation | Write the house style down before you turn on supply | `AGENTS.md`, custom agents, Copilot cloud agent, Copilot code review |
| 7 | [Legacy application modernization](#scenario-7-legacy-application-modernization) | Your Codebase | **Yes**, the build is the oracle | Assessment is portfolio work; execution is repository work | GitHub Copilot Modernization (CLI + IDE) |
| 8 | [Document-in, system-out back office](#scenario-8-document-in-system-out-back-office) | Product or Feature | **No**, extraction plus workflow | How variable are the documents? | AI Builder / Document Intelligence / Content Understanding + Power Automate + Dataverse |
| 9 | [UI automation where no API exists](#scenario-9-ui-automation-where-no-api-exists) | Product or Feature | **Yes**, perception-action loop | Stable interface → deterministic RPA; drifting → computer use | Power Automate desktop flows, Copilot Studio computer use, Foundry computer use, Entra Agent ID |
| 10 | [Agent governance and agent sprawl](#scenario-10-agent-governance-and-agent-sprawl) | Cross-cutting | **Wrong question**, this is a don't-build | Treat agents as principals, not features | Entra Agent ID, Agent 365, Power Platform admin center, Purview |
| - | [Offline and on-device work](#niche-offline-and-on-device-work) *(niche)* | Product or Feature | **Rarely** | Pin the device profile before choosing a model | Foundry Local, Windows on-device text recognition |

Two sections above are not scenarios and belong in this table only as warnings: [multi-agent orchestration](#multi-agent-orchestration-warning) is what people build instead of the right answer, and [the forecasting problem wearing an agent hat](#anti-pattern-forecasting-problem-agent-hat) is what vendors sell instead of it.

---

## Next Steps

**Need to score the options honestly?**
→ [Evaluation Criteria]({{ '/docs/evaluation-criteria' | relative_url }})

**Need a side-by-side technology comparison?**
→ [Feature Comparison]({{ '/docs/feature-comparison' | relative_url }})

**Need current status, licensing, and limits?**
→ [Technologies]({{ '/docs/technologies' | relative_url }})

**Need a reference architecture?**
→ [Implementation Patterns]({{ '/docs/implementation-patterns' | relative_url }})

---

**Next:** [Evaluation Criteria]({{ '/docs/evaluation-criteria' | relative_url }}). Score the options before you pick one

---
