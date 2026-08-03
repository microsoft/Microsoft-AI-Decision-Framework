---
layout: default
title: Glossary
nav_order: 14
description: "Key terms and definitions for Microsoft AI technologies"
---

# Glossary
{: .no_toc }

Quick reference for key terms used throughout the Microsoft AI Decision Framework. For detailed documentation links and resources, see [Resources]({{ '/docs/resources' | relative_url }}). For methodology and decision guidance, see [Decision Framework]({{ '/docs/decision-framework' | relative_url }}).

{: .note }
> **Last validated:** July 29, 2026. Microsoft's AI capabilities evolve rapidly, so always verify with [official sources]({{ '/docs/resources' | relative_url }}) for production decisions.

---

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## A

**Agent**
An AI system that uses an LLM to interpret user inputs, plan, call tools or MCP servers, and return responses, with optional threads, memory, and middleware to enrich interactions ([Microsoft Agent Framework](https://learn.microsoft.com/en-us/agent-framework/overview/agent-framework-overview), updated 2026-02-20).

**Agentic engineering**
The term the industry has settled on for the disciplined practice of building software with AI agents: professionals directing agents with *more* rigor rather than less (specs, tests, planning, review, and guardrails) to claim the leverage agents offer **without compromising software quality**. It supersedes **vibe engineering**, whose own coiner conceded the point and moved to this term. It is the direct opposite of **vibe coding**, and the two are indistinguishable from the outside: same tools, same editor, similar-looking pull requests. What separates them is the verification machinery built around the work. The practical discriminator is no longer *"do you read every line?"* (serious engineers have largely stopped doing that) but ***"can you prove it works?"***

⚠️ **Vocabulary note.** Microsoft and GitHub do not use this term institutionally. They coined their own for the same territory: **agentic DevOps**, **spec-driven development**, and **context engineering**. Learn both dialects; your engineers speak one, your vendor documentation speaks the other.

**Agent-Computer Interface (ACI)**
The academic name for what practitioners call a **harness**: the designed interface through which an agent perceives and acts on its environment, covering how files are presented, how commands are structured, and what feedback returns after each action. Introduced in the [SWE-agent paper](https://arxiv.org/abs/2405.15793) (Yang et al., NeurIPS 2024). Worth knowing because it is the term you will meet in research papers and evaluation work, while *harness* is the term you will hear in engineering channels. Same concept, two dialects. See [Harness](#h).

**Agent CUs (ACU)**The billing unit for the **Microsoft Agent Prepurchase Plan** (Microsoft's docs render it as "Agent CUs"). **1 ACU pays down US$1 of qualifying retail cost, purchased at a tiered discount**. It is not "$1 each," which is the mistake that wrecks a budget model. ACUs sit in a single pool that covers *"select services across Microsoft Foundry, Microsoft Copilot Studio\*, Microsoft Fabric, and GitHub costs"* (where the asterisk covers Copilot Studio, Dynamics 365 first-party agents, and Copilot). See [Microsoft Agent Prepurchase Plan](https://learn.microsoft.com/en-us/azure/cost-management-billing/reservations/agent-pre-purchase) (updated 2026-07-17).

**Agent Factory**
A Microsoft program (not a product) that accelerates enterprise agent adoption through three pillars: prepurchase-based unified billing (see [Microsoft Agent Prepurchase Plan](#a)), Forward Deployed Engineers (FDEs) for hands-on architecture support, and customized training. See [Introducing Microsoft Agent Factory](https://techcommunity.microsoft.com/blog/azure-ai-foundry-blog/introducing-microsoft-agent-factory/4470732) (published 2025-11-18).

**Agent instructions (`AGENTS.md`)**
GitHub's official mechanism for telling coding agents how your repository works, not a community convention. `AGENTS.md` sits alongside `CLAUDE.md` and `GEMINI.md` with a documented precedence: **below repo-wide instructions, above org instructions.** Carry GitHub's own caveat: agent instructions are *"currently not supported by all Copilot features."* Write them; do not assume universal enforcement.

**Agent archetype framework (the 3Cs)**
Microsoft's functional decomposition of agent behavior, verbatim *"categories, capabilities, and components (the '3Cs')"*. **Categories** are *"broad domains of agent behavior… independent of specific tools or implementations"* (the *why*). **Capabilities** are each *"specific user-observable function an agent can perform within a category"* (the *what*), and Microsoft states explicitly that capabilities and *skills* are the same concept. **Components** are *"implementation primitives that enable capabilities"* (the *how*). The seven categories are **Connect, Analyze, Create, Act, Automate, Govern, Monitor**. Treat Categories and Capabilities as portable; every worked example of Components is Copilot Studio + Power Platform flavored. Microsoft's own framing: *"The framework is a foundation, not a destination."* ([Agent archetypes](https://learn.microsoft.com/en-us/agents/agent-archetypes/), updated 2026-05-20).

**Agent Prepurchase Plan (Microsoft Agent Prepurchase Plan)**
{: #agent-prepurchase-plan }
A one-year Azure reservation denominated in **Agent CUs (ACUs)** that pays down *"select services across Microsoft Foundry, Microsoft Copilot Studio\*, Microsoft Fabric, and GitHub costs."* It is **one of two distinct prepurchase products** (the other is the [Copilot Credit Pre-Purchase Plan](#c)), and they are not interchangeable.

**The precedence chain, verbatim:** *"Reservations always apply before prepurchase plans."* Order of application: **1.** Microsoft Foundry PTU Reservations → **2.** Microsoft Fabric Capacity Reservations → **3.** Copilot Credit Prepurchase Plan → **4.** Microsoft Agent Prepurchase Plan, *"applied last to remaining AI usage across all platforms."* The governing principle is simple: **narrow benefits burn before broad benefits.** One-year term, auto-renew **on by default**, and **all purchases are final**: no cancel, exchange, split, or merge.

⚠️ **What we will not tell you:** whether Copilot Cowork or Work IQ usage is covered. It is a reasonable inference from the credit model; Microsoft does not state it. See [Microsoft Agent Prepurchase Plan](https://learn.microsoft.com/en-us/azure/cost-management-billing/reservations/agent-pre-purchase) (updated 2026-07-17).

**Agent risk tiers**
Microsoft's three-tier sorting rule for agent governance, built on the [assist-to-execute line](#a). **Tier 1: Low risk** (individual productivity agents that *"assist one person or a small team with everyday work, such as summarizing, drafting, and searching"*): named owner, basic usage/error monitoring, standard release checklist, self-service deployment inside published guardrails. **Tier 2: Medium risk** (expert-knowledge and internal service agents that *"answer domain questions or run internal services where a wrong answer can mislead people or disrupt operations"*): named owner plus a domain-expert validator, knowledge-quality monitoring, a formal release gate, accuracy tracking and feedback loops. **Tier 3: High risk** (business-critical): verify the current control set on Microsoft Learn before quoting it. Microsoft's warning is the point: *"A single governance checklist applied to every agent fails in both directions."* ([Govern agents by risk](https://learn.microsoft.com/en-us/agents/center-of-excellence/govern-agents-risk)).

**Agents page / AI Controls**
The two GitHub surfaces that actually shipped for managing agents. The **Agents page** (`github.com/copilot/agents`) plus the in-product agents tab/panel is where agent sessions live; enterprise **AI Controls** (with sub-pages for Agents, Copilot, MCP, and Copilot Clients) is where policy lives. Both **GA**. Use these names in a design document. **"Agent HQ"** is official but only as GitHub's **Universe 2025 vision/umbrella brand** (*"GitHub's vision for the next evolution of our platform"*); it appears nowhere in current GitHub Copilot documentation.

**Agentic workflows (agent loop)**
Microsoft's official term for AI-driven workflows in **Azure Logic Apps**, built around an **"agent loop"** that reasons over connectors instead of following a fixed path. **Status splits by hosting model:** Consumption agentic workflows are **explicitly in preview** (verbatim: *"Consumption agentic workflows capability is in preview and is subject to the Supplemental Terms of Use for Microsoft Azure Previews"*). **Standard** carries no preview banner on the agent loop itself, **but Microsoft never states that Standard is GA**, and specific Standard capabilities (for example, "with an LLM API") *are* marked preview. Verify the exact capability you intend to ship; do not read the absence of a banner as a GA promise ([Agentic workflows in Azure Logic Apps](https://learn.microsoft.com/en-us/azure/logic-apps/agent-workflows-concepts), verified 2026-07-29).

**Agent2Agent (A2A)**
A protocol enabling secure, peer-to-peer communication between AI agents, allowing them to discover peers, negotiate tasks, and collaborate without centralized intermediaries ([Advanced development tools for Teams](https://news.microsoft.com/build-2025-book-of-news/), updated 2025-05-19).

**Agent Registry (Preview)**
Central inventory in the M365 admin center to publish, activate, deploy, pin, block, remove, delete, transfer ownership, or export agents; enforces governance and visibility across Copilot and custom agents ([Agent Registry](https://learn.microsoft.com/en-us/microsoft-365/admin/manage/agent-registry?view=o365-worldwide#admin-actions-to-manage-agents), retrieved 2026-01-23).

**Agent Settings templates (Preview)**
Reusable configuration templates in the M365 admin center that let admins apply consistent policies to multiple agents (e.g., enabled channels, publishing scope, owners), managed alongside Agent Registry entries ([Microsoft 365 Copilot release notes, November 25, 2025](https://learn.microsoft.com/en-us/microsoft-365/copilot/release-notes#november-25,-2025)).

**Agentic Retrieval (REST API GA; portal experiences Preview)**
An evolution of traditional RAG where AI agents dynamically reason about search queries, plan multi-step retrieval strategies, and adaptively refine results before generation. Unlike static RAG patterns, agentic retrieval enables agents to decompose complex questions, filter sources intelligently, and combine multiple search modes (vector, hybrid, semantic) based on context ([Agentic retrieval in Azure AI Search](https://learn.microsoft.com/en-us/azure/search/agentic-retrieval-overview), updated 2026-01-16). *When to use:* Choose agentic retrieval for complex research scenarios requiring multi-hop reasoning; use traditional RAG for straightforward document lookup. See Decision Framework Q3.

**Agent Framework**
An open-source development kit for .NET and Python (v1.0 GA, April 2026) that unifies Semantic Kernel and AutoGen concepts, adding stateful workflows, multi-agent orchestration, multi-provider service connectors, and MCP support for production-grade AI solutions ([Microsoft Agent Framework](https://learn.microsoft.com/en-us/agent-framework/overview/agent-framework-overview); [v1.0 announcement](https://devblogs.microsoft.com/agent-framework/microsoft-agent-framework-version-1-0/), published 2026-04-03).

**Assist-to-execute line**
Microsoft's sharpest governance question, quoted in full because the wording does real work: *"The clearest risk signal is the assist-to-execute line. An agent that drafts a paragraph, suggests an answer, or summarizes a document **assists** a person who stays in the loop and owns the outcome. An agent that updates a customer record, submits a ticket, or moves money **executes** a change in a system of record."* The instruction that follows is the discipline: *"Sort every agent by what it does, not by how impressive it looks."* Feeds directly into the [agent risk tiers](#a) ([Govern agents by risk](https://learn.microsoft.com/en-us/agents/center-of-excellence/govern-agents-risk)).

**Assistant (generic)**
A conversational experience that relies primarily on an LLM prompt without owning orchestration, tool calls, or state. Assistants can become agents when they add tools (including MCP), memory, or workflows.

**Agent Application**
A legacy Foundry publishing artifact, now deprecated. Current Foundry agents expose an endpoint and identity without promotion into this artifact. Migrate and retest each tool, RBAC, and channel path instead of assuming identity parity ([Agent Application migration](https://learn.microsoft.com/en-us/azure/foundry/agents/how-to/migrate-agent-applications), updated 2026-05-27).

For a custom application built with Microsoft Agent Framework, build and host the agent, then register it with Agent 365 using its existing Entra application registration or an agent identity blueprint, the recommended path for new agents. A blueprint defines permissions and authentication; each agent instance receives its own Entra Agent ID and service principal. Use agent-identity authentication for autonomous operations or on-behalf-of authentication for user-delegated access. Creating an AI teammate with a user-like Microsoft 365 identity, mailbox, OneDrive, and Teams presence currently requires participation in the Frontier program ([Get started with Agent 365 development](https://learn.microsoft.com/en-us/microsoft-agent-365/developer/get-started); [Agent 365 Identity](https://learn.microsoft.com/en-us/microsoft-agent-365/developer/identity)).

**Agent Skills**
Portable packages of instructions, scripts, and resources that give Agent Framework agents specialized capabilities and domain expertise. Skills follow an open specification and use progressive disclosure (advertise → load → read resources) to minimize context window usage while providing deep domain knowledge on demand ([Agent Skills](https://learn.microsoft.com/en-us/agent-framework/agents/skills), retrieved 2026-03-19).

**Microsoft Foundry (Azure)**
*See [Microsoft Foundry](#m).* The cloud-based implementation of the Microsoft Foundry ecosystem.

**Agent Control Specification (ACS) (Preview)**
The beta policy layer in the Agent Governance Toolkit for expressing runtime guardrails. It is not a GA platform feature or a managed control plane.

**Agent Governance Toolkit (Public Preview)**
Microsoft-origin, MIT-licensed open-source application middleware for runtime policy decisions and audit hooks inside the agent execution path. v4.1.0 is the latest formal release as of July 13, 2026; main v5 is unreleased, ACS is beta, and GA feature coverage is zero. APIs and configuration can change, and there is no managed-service SLA or Microsoft product support contract. Compose it with identity, registry, platform policy, monitoring, and evaluation controls ([Microsoft announcement](https://opensource.microsoft.com/blog/2026/04/02/introducing-the-agent-governance-toolkit-open-source-runtime-security-for-ai-agents/); [repository](https://github.com/microsoft/agent-governance-toolkit)).

**ASSERT**
Open-source evaluation framework for turning behavior specifications into executable tests for agents, including prompt-injection, tool-use, and policy-adherence scenarios. Use it as a pre-production evaluation pattern alongside conventional tests and red teaming, not as a managed service with SLA guarantees ([ASSERT](https://github.com/responsibleai/ASSERT)).

**"Autopilot" (marketing language, not a taxonomy)**
A word Microsoft used in a **June 2026 Microsoft 365 blog** to describe always-on agents that act continuously on a user's behalf, illustrated by **Microsoft Scout**. ⚠️ **There is no Microsoft Learn page defining "Autopilots" as an agent category.** It exists in exactly one marketing post. Use it, if at all, as evocative shorthand for emerging behavior. Never treat it as a tier or classification you architect against. Microsoft ships **seven** concurrent agent taxonomies on Learn; this is not one of them.

**Do not confuse it with Windows Autopilot**, an unrelated and long-established Microsoft service for zero-touch **device provisioning**. Same word, entirely different product, and the collision will bite you in a search result ([Introducing Microsoft Scout](https://www.microsoft.com/en-us/microsoft-365/blog/2026/06/02/introducing-microsoft-scout-your-always-on-personal-agent/), published 2026-06-02).

## B

**BYOK (Bring Your Own Knowledge)**
Configuring Copilot Studio generative answers with knowledge sources such as SharePoint, Dataverse, connectors, files, and vetted web content so agents ground responses in governed enterprise data. Now includes an ungrounded responses toggle, Tenant Graph semantic search, and 3-level content moderation for finer grounding control ([Knowledge sources summary](https://learn.microsoft.com/en-us/microsoft-copilot-studio/knowledge-copilot-studio), updated 2026-04-03).

**BYOM (Bring Your Own Model)**
Connecting custom or fine-tuned language models to Microsoft AI platforms. The term has different meanings depending on context: **(1) AI Builder BYOM** - bring custom prompts/templates into Power Platform, **(2) Copilot Studio BYOM** - connect custom language models (e.g., Foundry deployments) to agent experiences, **(3) Microsoft Foundry BYOM** - deploy and manage fine-tuned models in the Foundry catalog ([Bring your own model for your prompts](https://learn.microsoft.com/en-us/ai-builder/byom-for-your-prompts), updated 2026-03-08). *When to use:* BYOM is appropriate when base models lack domain expertise, require specific tone/format, or must comply with specialized regulatory requirements. See [Feature Comparison]({{ '/docs/feature-comparison' | relative_url }}) for platform-specific capabilities.

**BXT Framework**
A Business, Experience, and Technology evaluation that scores strategic fit, user desirability, and technical feasibility to prioritize AI scenarios with the greatest impact and execution readiness ([Evaluate and Prioritize an AI Use Case with Business Envisioning](https://learn.microsoft.com/en-us/microsoft-cloud/dev/copilot/isv/business-envisioning), updated 2024-09-16). The three lenses map one-to-one onto the older design-thinking trio of viability, desirability, and feasibility, and onto the business impact / technical feasibility / user desirability scoring in Microsoft's current [CAF AI agent adoption](https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/ai-agents/) guidance. *Note:* the source page is ISV-scoped and has not been updated since 2024; current CAF AI guidance does not reference BXT by name. Its lasting value is the worked scorecard (nine subcomponents, prioritization quadrants, and monetization models), which newer guidance does not replicate.

## C

**Copilot (Microsoft 365)**
Tenant-aware AI experience embedded across Microsoft 365 apps, inheriting Graph security and compliance while allowing extensions via Declarative Agents or custom engine agents ([Microsoft 365 Copilot overview](https://learn.microsoft.com/en-us/microsoft-365-copilot/), retrieved 2026-03-25).

**Copilot vs. Agent**
"Copilot" describes the user-facing experience; "agent" describes the implementation pattern (planning, tools, memory). Many copilots are backed by agents, but a copilot can remain a simple assistant if no tools or state are attached.

**Copilot Search API (Preview, Graph `/beta`)**
Microsoft Graph `/beta` API that delivers hybrid semantic + lexical search over OneDrive content for custom engine agents, returning grounding for Copilot experiences while respecting M365 security trimming ([Microsoft 365 Copilot Search API overview](https://learn.microsoft.com/en-us/microsoft-365/copilot/extensibility/api/ai-services/search/overview), retrieved 2025-10-20).

**Copilot cloud agent (GA)**
GitHub's asynchronous coding agent, **renamed from "coding agent."** Give it an issue and it researches the repository, forms a plan, works one branch in a GitHub Actions-powered environment, and optionally opens one pull request per task. **GA on all paid Copilot plans, including Copilot for Students. Not available on Copilot Free.** If you see "coding agent" in a document, you are reading a stale document ([About GitHub Copilot cloud agent](https://docs.github.com/en/copilot/concepts/agents/cloud-agent/about-cloud-agent), retrieved 2026-07-29).

**Copilot Cowork (GA)**
Long-running, multi-step delegated execution inside Microsoft 365 Copilot: you hand over a job measured in hours, and Cowork decomposes it into a visible plan with checkpoints you can steer, producing coordinated output across Word, Excel, PowerPoint, and Outlook in a sandboxed, permission-scoped, auditable cloud environment. **GA worldwide 2026-06-16.** Requires a Microsoft 365 Copilot user subscription license **plus Copilot Credits**; metered in **Light / Medium / Heavy** task tiers; requires **Anthropic models to be enabled** and is therefore limited to Anthropic-supported regions; **DLP support is documented as "coming soon."** Current models per Learn: **Claude Sonnet 5, Claude Opus 4.8, GPT 5.5 (Frontier), Claude Fable 5 (Preview, off by default)**, and a paired **Sonnet + Opus Advisor** mode. ⚠️ **"Cowork 1" has been announced only; it is not documented as available.** ([Copilot Cowork is now generally available](https://www.microsoft.com/en-us/microsoft-365/blog/2026/06/16/copilot-cowork-is-now-generally-available/), published 2026-06-16).

**Copilot Credit Pre-Purchase Plan**
{: #copilot-credit-pre-purchase-plan }
The **second** of Microsoft's two distinct Azure prepurchase products, denominated in **Copilot Credit Commit Units (CCCUs)** and covering *"eligible Copilot Credit usage."* One CCCU pays down US$1 of qualifying retail cost. One-year term, auto-renew on by default, **all purchases final**. It applies **before** the broader [Microsoft Agent Prepurchase Plan](#agent-prepurchase-plan) in the benefit precedence chain; narrow benefits burn first ([Copilot Credit Pre-Purchase Plan](https://learn.microsoft.com/en-us/azure/cost-management-billing/reservations/copilot-credit-p3), updated 2026-07-17).

**Copilot Studio for Teams (retiring, with a scope limit)**
Microsoft states verbatim: *"After the end of June 2026, it will no longer be possible to use the Copilot Studio for Teams app to create classic chatbots. The app will redirect you to the Copilot Studio web app instead."* **Read the scope before you plan a migration:** this applies to **makers on a Teams plan**, who *"are limited to creating agents that use classic orchestration… and they can only publish these agents to Microsoft Teams."* **Standalone Copilot Studio subscriptions are unaffected** ([Get started with Copilot Studio for Teams](https://learn.microsoft.com/en-us/microsoft-copilot-studio/fundamentals-get-started-teams), verified 2026-07-29).

**Computer Use Agent (CUA) (GA)**
Copilot Studio tool that lets agents automate web and desktop applications using vision-based AI models (OpenAI CUA, Anthropic Claude Sonnet 4.5) with virtual mouse and keyboard control. Includes stored credentials (internal or Azure Key Vault), URL/application access control allowlists, human supervision gates via email, Cloud PC pooling for scalable execution, and session replay audit logging. Billed at 5 Copilot Credits per step. Generally available across commercial Power Platform geographies (GA: May 13, 2026). Best for automating legacy systems or applications that lack APIs ([Computer Use](https://learn.microsoft.com/en-us/microsoft-copilot-studio/computer-use), updated 2026-04-03).

**Copy to Copilot Studio**
Rolling capability to clone Copilot agents into Copilot Studio; copies data sources and actions, but GPTs and custom actions must be reattached after import ([Copy an agent to Copilot Studio](https://learn.microsoft.com/en-us/microsoft-365/copilot/extensibility/copy-agent-to-copilot-studio), retrieved 2026-01-26).

**Custom Engine Agent**
Microsoft 365 Copilot extension built with pro-code SDKs (M365 Agents SDK, Bot Framework) that provides custom orchestration logic, external API integration, and advanced workflows beyond Declarative Agent constraints. Runs on your infrastructure or Azure services while appearing in M365 Copilot as a scoped experience ([Custom engine agents overview](https://learn.microsoft.com/en-us/microsoft-365/copilot/extensibility/overview-custom-engine-agent), updated 2026-01-13). *When to use:* Choose custom engine agents when you need complex orchestration, multi-step reasoning, external service integration, or full code control. Use [Declarative Agents](#declarative-agent) for simpler Microsoft 365 and Copilot Studio scenarios with platform-managed orchestration. Can also build custom engine agents in Copilot Studio using Topics and custom connectors. See Decision Framework Q2 for build approach guidance.

## D

**Declarative Agent**
{: #declarative-agent }
Microsoft 365 Copilot or Copilot Studio agent that packages instructions, knowledge, and optional actions inside a platform-managed experience that inherits the applicable Copilot and tenant controls. Exact authoring surfaces, data sources, actions, publishing targets, and licensing vary. It does not provide the custom orchestration ownership of a [Custom Engine Agent](#c) ([Declarative Agents for Microsoft 365 Copilot](https://learn.microsoft.com/en-us/microsoft-365/copilot/extensibility/overview-declarative-agent), updated 2025-12-01).

## E

**Microsoft Entra Agent ID (generally available)**
{: #entra-agent-id }
Not a concept, and not a preview feature. It is a **formally named product**. Microsoft's own words: *"Microsoft Entra Agent ID is a product within Microsoft Entra that provides the platform for creating and managing agent identities and agent identity blueprints. Agent ID is available for all Microsoft Entra customers."* The what's-new page adds: *"Microsoft Entra Agent ID is now generally available."* ⚠️ **We state the status, not a month.** Microsoft does not publish one on the page, and neither will we.

It extends Entra controls to agents across five pillars: **Conditional Access** (adaptive policies, Microsoft Managed Policies blocking high-risk agents), **ID Governance** (entitlement management, required sponsors, time-bound access packages), **ID Protection** (anomaly detection, risk-based automatic remediation), **Network Controls** (web categorization, file restrictions, prompt injection blocking, threat intelligence filtering), and an **Agent Identity Platform** for developers (auto-discovery, A2A/MCP authorization, standard protocol authentication). Licensing runs through E5/E7 or standalone options including Microsoft Entra Internet Access ([What is Microsoft Entra Agent ID?](https://learn.microsoft.com/en-us/entra/agent-id/what-is-microsoft-entra-agent-id), re-verified 2026-07-29).

## F

**Fabric data agent (GA)**
Conversational analytics agent for Q&A over Fabric OneLake sources (lakehouse, warehouse, semantic models, KQL) that respects user permissions. **Generally available**, and note the rename: this shipped previously as the **"AI skill."** Requires **F2+ or P1+ capacity**. Designed for insights, not for orchestrating other agents ([Fabric data science documentation](https://learn.microsoft.com/en-us/fabric/data-science/), retrieved 2026-07-29).

**Fabric IQ (Preview)**
The semantics layer for the data estate: a documented **Preview workload in Microsoft Fabric** that carries **ontologies**, **graph models**, **semantic models**, and **operations agents**, the vocabulary that turns a table named `CUST_MSTR` into "a customer." One of the four capabilities under the Microsoft IQ umbrella. Documented at [`/fabric/iq/`](https://learn.microsoft.com/en-us/fabric/iq/) with its own training path and terminology entry (retrieved 2026-07-29).

**Foundry (classic)**
Microsoft's current name for the **hub-based** Foundry project experience, documented at `/azure/foundry-classic/`. It is not a legacy footnote: several capabilities (standalone Azure OpenAI resources, Assistant creation, Audio playground, AI service fine-tuning, Content Understanding, prebuilt video prompts) are **not supported in the new Foundry portal at GA** and still require it. The two portals do not have feature parity; validate before you commit.

**Foundry Tools**
The current name for what was **Azure AI Services**. Same capability family (speech, vision, language, content understanding), new brand, now surfaced inside Microsoft Foundry. ⚠️ **Azure AI Search was *not* part of this rename.** It keeps its name and remains the retrieval engine underneath Foundry IQ.

**Frontier (Copilot Frontier)**
Early access program for experimental and preview Copilot features across web apps, desktop apps, and agents. Organizations enable access in the Microsoft 365 admin center under **Copilot** > **Settings** > **User access** > **Copilot Frontier**; by default, no users have access ([Manage Microsoft 365 Copilot scenarios in the Microsoft 365 admin center](https://learn.microsoft.com/en-us/microsoft-365/copilot/microsoft-365-copilot-page#user-access), retrieved 2026-03-16).

**Foundry Local**
A component of Microsoft Foundry for running selected models locally on supported devices, enabling offline inference, lower latency, and reduced data egress. Availability varies by platform and model, so validate current Microsoft Learn guidance before production use ([Foundry Local overview](https://learn.microsoft.com/en-us/azure/foundry-local/what-is-foundry-local), retrieved 2026-06-08).

**Foundry Local on Azure Local (Preview)**
Edge deployment path for running selected Foundry Local capabilities in customer-controlled Azure Local environments. Use it for sovereign, disconnected, or site-local workloads that need inference near the data boundary ([Foundry Local on Azure Local](https://learn.microsoft.com/en-us/azure/azure-sovereign-clouds/private/foundry-local/overview), retrieved 2026-06-08).

**Fireworks Models (Preview)**
Third-party model provider available on Microsoft Foundry, offering additional model options through the Foundry model catalog. See [Fireworks models on Microsoft Foundry](https://learn.microsoft.com/en-us/azure/foundry/how-to/fireworks/enable-fireworks-models).

**Foundry Agent Service**
An **optional** managed PaaS within Microsoft Foundry for building, deploying, and scaling agents. Its Responses API gives hosted or external code one endpoint for Foundry models and platform tools. The managed runtime provides conversations, tool calls, session state, versioning, stable endpoints, and autoscaling. Its capabilities include built-in and custom tools such as file search, web search, code interpreter, memory, MCP, and custom functions; Entra identity, OBO authentication, RBAC, content filters, private networking, and BYO Azure resources; and tracing, metrics, Application Insights, evaluation, and publishing to Teams, M365 Copilot, and Entra Agent Registry.

The parent service is GA, while agent types, A2A directions, tools, SDKs, and publishing paths have independent statuses. Prompt Agents are GA; Hosted Agent surfaces have mixed maturity and require the [Hosted Agent Constraint Card]({{ '/docs/technologies#the-hosted-agent-constraint-card' | relative_url }}) review. **Foundry Workflows: Retiring from Preview without a GA path on December 1, 2026.** Use Agent Service when its managed runtime, endpoint, scaling, identity, and observability fit the workload. Existing Agent Framework or custom code can call the Responses API from another host without creating an Agent Service resource ([Foundry Agent Service overview](https://learn.microsoft.com/en-us/azure/foundry/agents/overview), updated 2026-07-09).

**Foundry IQ (Partial GA)**
Managed knowledge layer within Microsoft Foundry that provides agents with permission-aware, citation-backed responses grounded in enterprise data. A knowledge base groups one or more knowledge sources (Azure Blob Storage, SharePoint, OneLake, web via Bing) under a single MCP endpoint, with automatic chunking, vector embedding, ACL synchronization, and Purview sensitivity label enforcement. Agents connect via MCP tool calls. **Status note:** Core knowledge source types and the `2026-04-01` REST API are GA; answer synthesis, multi-turn retrieval, non-minimal reasoning effort, portal experience, and additional source types remain Preview. Treat as Preview for production planning unless your workload uses only GA-surface features. Foundry IQ is standalone but complements Work IQ (M365 collaboration context) and Fabric IQ (analytics context) ([Foundry IQ overview](https://learn.microsoft.com/en-us/azure/foundry/agents/concepts/what-is-foundry-iq), retrieved 2026-03-19).

**Content Understanding (GA)**
Multimodal AI service in Foundry Tools that extracts semantic content from documents, images, audio, and video files. Provides prebuilt analyzers (RAG, domain-specific, content extraction), custom analyzers, and GA SDKs for Python, .NET, Java, and JavaScript/TypeScript targeting API version 2025-11-01. RAG analyzers (`prebuilt-documentSearch`, `prebuilt-videoSearch`, `prebuilt-audioSearch`, `prebuilt-imageSearch`) are optimized for retrieval-augmented generation scenarios ([Azure AI Content Understanding](https://learn.microsoft.com/en-us/azure/ai-services/content-understanding/whats-new), retrieved 2026-03-19). **Note:** Content Understanding is not available in the new Foundry portal at GA; use the Foundry (classic) portal for Content Understanding workloads.

## G

**GitHub AI credits**
The developer-side meter. **1 credit = $0.01.** Copilot **Business** includes **1,900 credits per user per month**; **Enterprise** includes **3,900**. A promotional uplift to **3,000 / 7,000** runs until **2026-09-01**. The fact that changes the budget conversation: **code completions and next-edit suggestions are not billed against credits.** The thing developers use all day is not what moves the invoice; agent runs are. Distinct from **Copilot Credits**, which is the Microsoft 365 side meter (also $0.01 each).

**GitHub Copilot SDK (GA)**
The point where the coding agent stops being a tool you use and becomes a component you build on. The SDK wraps the **Copilot CLI engine over JSON-RPC** and exposes it as a programmable agent runtime. **GA**, with bindings for **Python, TypeScript, Go, .NET, Java, and Rust**. The CLI is bundled for Node, Python, and .NET; **manual install for Go, Java, and Rust.** BYOK providers: OpenAI, Microsoft Foundry, and Anthropic. **Entra ID and managed identity are supported**, though there is **no built-in Entra provider type**. You compose it via `bearerTokenProvider` with the Azure Identity SDK.

⚠️ **State this limit before you architect around the seam.** Microsoft Foundry Agent Service explicitly lists the GitHub Copilot SDK as a supported framework for **Hosted agents**, but **Foundry Hosted agents support Python and C# only.** A Copilot SDK agent written in Go, Rust, Java, or TypeScript is **not directly hostable** there; you would host it yourself on Azure Container Apps or AKS. Choose the language for the destination, not the demo. See [Hosted Agent](#h).

**Graph Connector**
Copilot connector that ingests external content into Microsoft Graph’s semantic index so Copilot and Microsoft Search can ground answers in authenticated enterprise data, with semantic indexing and inline results requirements managed by admins ([Microsoft 365 Copilot connectors overview](https://learn.microsoft.com/en-us/microsoft-365/copilot/extensibility/overview-copilot-connector), updated 2025-07-21).

## H

**Harness**
The software layer that turns a model into a working agent: the loop that decides what the model can see, which tools it may call, what happens when a call fails, and when to stop. A model answers and stops; a harness gives it legs. The term is borrowed from *test harness* in software engineering and is the practitioner shorthand for what the SWE-agent research group named the **Agent-Computer Interface** (see below). Adjacent terms are not synonyms: an **agent framework** is the library you build a harness with, an **orchestrator** is the part that decides what runs next, and an **agentic loop** is the observe-plan-act cycle the harness wraps and governs.

Microsoft does not use one canonical word for this. GitHub calls the Copilot SDK a *"production-tested agent runtime,"* Copilot Studio's newer agent experience refers to an *"enhanced orchestration runtime,"* and Microsoft Agent Framework publishes the clearest first-party definition: *"An agent harness is the scaffolding that turns a language model into an agent that can actually do things"* ([Agent Harnesses](https://learn.microsoft.com/en-us/agent-framework/agents/harness), updated 2026-07-10). Different words, same architectural slot. Knowing that saves you an argument in a design review.

**Harness quality**
The observation that how an agent is wrapped can matter as much as which model is inside it. The [SWE-agent paper](https://arxiv.org/abs/2405.15793) (Yang et al., NeurIPS 2024) found that deliberately designing the agent-computer interface produced several-fold improvement on the same underlying model. The counterweight arrived from the same research group: **mini-SWE-agent**, a deliberately minimal harness with no custom tooling beyond bash, matches its far more elaborate predecessor. **Complexity is not the variable; design is.** Treat both findings as coding-benchmark evidence rather than a measured claim about enterprise workloads.

**Hosted Agent**
A code-based, containerized Python or C# agent on Foundry Agent Service. You can use Microsoft Agent Framework, LangGraph, Semantic Kernel, another framework, or custom code. You own orchestration and runtime behavior; Foundry manages deployment, a dedicated endpoint and Entra agent identity, per-session compute and persistent files, scale-to-zero and state restoration, immutable versions and weighted rollouts, lifecycle, and Application Insights/OpenTelemetry observability. Hosted Agents can expose Responses, arbitrary-JSON Invocations, WebSocket, Activity, and Preview A2A protocols. Foundry-managed tools are consumed through a Toolbox MCP endpoint rather than attached directly to the agent definition.

Each session runs in a **VM-isolated sandbox**, and session IDs drive allocation, so applications map identities or conversations to sessions. Choose this path when you need that isolation, custom protocols, persistent session state, and Foundry-managed operations. Review the complete [Hosted Agent Constraint Card]({{ '/docs/technologies#the-hosted-agent-constraint-card' | relative_url }}) for compute sizes, lifecycle, scale, revisions, BYO-VNet prerequisites, regions, identity, storage, cost, and mixed feature maturity. Use Azure Container Apps or AKS when you need broader scale or direct infrastructure control ([Hosted agents](https://learn.microsoft.com/en-us/azure/foundry/agents/concepts/hosted-agents), updated 2026-07-13).

## M

**MCP (Model Context Protocol)**
Open protocol for tools and resources that lets agents connect to external systems in a structured, stateful, and secure manner; supported by Microsoft via MCP servers (for example, Azure MCP Server) and client integrations ([What is the Azure MCP Server (Preview)?](https://learn.microsoft.com/en-us/azure/developer/azure-mcp-server/), retrieved 2026-02-18). Copilot Studio consumes tools and resources published by remote MCP servers; its MCP integration is GA ([Extend your agent with Model Context Protocol](https://learn.microsoft.com/en-us/microsoft-copilot-studio/agent-extend-action-mcp), updated 2026-04-17).

**Model Router (GA)**
Foundry capability that routes requests across eligible chat models based on routing profiles and optional model subsets, with automatic failover when a routed model experiences instability. The supported model list changes frequently, so treat the [model router supported models table](https://learn.microsoft.com/en-us/azure/foundry/openai/concepts/model-router#supported-models) as the source of truth instead of hard-coding model names in this framework ([What's new in model router in Microsoft Foundry Models?](https://learn.microsoft.com/en-us/azure/ai-foundry/foundry-models/whats-new-model-router), updated 2026-03-24).

**Microsoft Discovery**
Enterprise Azure service for scientific research and development workflows, including hypothesis generation, simulation orchestration, experimentation, and long-term knowledge capture. Microsoft Discovery is a specialized R&D platform, not a general enterprise agent selection pattern. The Microsoft Discovery app is a separate desktop experience in Preview ([What is Microsoft Discovery?](https://learn.microsoft.com/en-us/azure/microsoft-discovery/overview-what-is-microsoft-discovery), retrieved 2026-06-08; [Discovery and Discovery app](https://learn.microsoft.com/en-us/azure/microsoft-discovery/concept-discovery-and-discovery-app), retrieved 2026-06-08).

**Microsoft Agent 365 (GA)**
The fleet control plane for agents: identity, registry, lifecycle, and centralized observability in the Microsoft 365 admin center. **GA 2026-05-01**, per-user licensing (blog-stated $15/user/month). Microsoft describes **Microsoft 365 E5 as working best "as a pre-requisite,"** and Agent 365 is included in **Microsoft 365 E7**. Components: **Agent Registry, Agent Map, Registry Sync, and Shadow AI (preview)**. The Agent 365 SDK and CLI remain in **Preview**. ⚠️ **We do not publish the claim that Registry Sync supports AWS Bedrock or Google Cloud.** That specific claim is unverified against Microsoft documentation ([Overview of Microsoft Agent 365](https://learn.microsoft.com/en-us/microsoft-agent-365/overview), retrieved 2026-07-29; [Agent 365 SDK (Preview)](https://learn.microsoft.com/en-us/microsoft-agent-365/developer/agent-365-sdk), retrieved 2026-01-09; [Agent 365 CLI (Preview)](https://learn.microsoft.com/en-us/microsoft-agent-365/developer/agent-365-cli), retrieved 2026-01-13).

**Microsoft 365 Copilot licensing ladder**
Three rungs, not one SKU. **Microsoft 365 Copilot Chat** requires no add-on and meters agent usage pay-as-you-go. **Microsoft 365 Copilot** is the add-on license. **Microsoft 365 E7** is the top rung. Smaller organizations have their own rungs, which this framework previously omitted: **Microsoft 365 Copilot Business** (SMB add-on), plus **Microsoft 365 Business Standard with Copilot** and **Business Premium with Copilot**, announced 2026-05-28, **GA 2026-07-01**.

**Microsoft 365 E7**
The top enterprise bundle. Microsoft's verbatim description: *"Microsoft 365 (E7) includes Microsoft 365 E5, Microsoft 365 Copilot, Microsoft Agent 365, and Microsoft Entra Suite."* The March 2026 announcement blog stated $99/user/month with GA on May 1, 2026, and availability with and without Teams. Treat pricing as blog-sourced and confirm commercially. Designed for organizations scaling agents across the workforce, where identity, productivity, and security need to arrive as one purchase rather than four ([Wave 3 announcement](https://www.microsoft.com/en-us/microsoft-365/blog/2026/03/09/powering-frontier-transformation-with-copilot-and-agents/), published 2026-03-09).

**Microsoft Foundry**
The unified brand for Microsoft's AI development and management platforms, spanning Cloud (Microsoft Foundry (Azure)), Client (Windows AI Foundry), and Edge (Foundry Local). It provides a consistent toolchain for model selection, agent orchestration, and observability across all environments ([Microsoft Foundry overview](https://news.microsoft.com/build-2025-book-of-news/), updated 2025-05-19). The new Foundry portal reached general availability in March 2026 for core scenarios (model discovery, agent development, evaluations, fine-tuning, red teaming, quota management). **Platform note:** Microsoft Foundry (Azure) is available in two portal experiences: **[Foundry (classic)](#f)** (hub-based, documented at `/azure/foundry-classic/`) and the new Foundry portal. They do **not** have feature parity. Documentation uses `?view=foundry-classic` or `?view=foundry-nextgen` parameters. **Service distinction:** Microsoft Foundry is the PLATFORM (portal, model catalog, prompt flow, evaluations). Microsoft documents **"over 10,000 models"** in its catalog. [Foundry Agent Service](#f) is an OPTIONAL managed runtime within the platform for hosting agents. You can use Foundry without Agent Service by deploying custom code. See Decision Framework Q4 for platform vs service guidance.

**Microsoft IQ**
Microsoft's enterprise intelligence layer for agents and copilots, made up of four capabilities: **Foundry IQ** for enterprise knowledge (mixed GA/Preview), **Work IQ** for work context (**APIs GA**; MCP surface **Preview**), **Fabric IQ** for business semantics and analytics (**Preview**), and **Web IQ** for public web grounding (**Limited Access**). Four capabilities, four different maturity levels; check each one separately ([Microsoft IQ overview](https://learn.microsoft.com/en-us/microsoft-iq/), retrieved 2026-06-08).

**Microsoft Scout (Frontier / private preview)**
An always-on personal agent that coordinates work across Teams, Outlook, OneDrive, and SharePoint without a fresh prompt each time. **Not GA.** Announced 2026-06-02; two-gate access (Frontier tenant toggle, then Intune policy plus attestation). Requires a **GitHub Copilot Business or Enterprise** license **and** an active **Microsoft 365 Copilot** license. Work IQ connectivity is documented on Learn and is on by default.

**Two documented conflicts you should carry, not resolve.** *(1) The surface:* Learn calls Scout *"a desktop AI application for Windows and macOS"* and documents no Teams UI; the announcement blog says *"You interact with it in Teams."* *(2) The engine:* Learn states *"Microsoft Scout uses the **GitHub Copilot SDK**, which might connect to external AI models as a subprocessor"*; the blog states *"It is powered by OpenClaw open-source technology."* **Microsoft has not reconciled either pair.** A "harness versus upstream contribution" explanation is plausible and **unverified**, and we do not publish it as fact.

⚠️ **The governance fact that must travel with the OpenClaw claim:** on Microsoft Learn, OpenClaw appears across roughly sixteen pages, and every governance page treats it as unsanctioned **[Shadow AI](#s)** to be detected and blocked, including an Intune policy literally named **`A365 - Block OpenClaw`**. See [Technologies: Microsoft Scout]({{ '/docs/technologies' | relative_url }}) for the full treatment.

**MXC (Microsoft Execution Containers) (Early Preview)**
Policy-driven local containment for agent tools and code execution on Windows. MXC lets a host application describe what an agent can access, then relies on operating-system primitives to enforce those boundaries at runtime. Relevant to local-agent scenarios where tool execution must be sandboxed on the user's machine. Early Preview; treat as a design signal, not a production security boundary, until Microsoft Learn publishes stable guidance ([Windows platform security for AI agents](https://blogs.windows.com/windowsdeveloper/2026/06/02/windows-platform-security-for-ai-agents/)).

**Multi-Agent Orchestration**
Coordination among multiple agents. Keep **direct delegation** (A2A), **hierarchical handoff**, and **deterministic orchestration** separate: they solve different control problems and carry different lifecycle labels. Agent Framework provides GA code-first orchestration patterns; incoming Foundry A2A endpoints are Preview. A single agent triggered by an event is not multi-agent orchestration ([Agent Framework orchestration patterns](https://learn.microsoft.com/en-us/agent-framework/user-guide/workflows/orchestrations/overview)).

## N

**NLWeb**
An open project where web endpoints act as MCP servers, allowing websites to provide conversational interfaces and be easily discoverable by AI agents ([NLWeb](https://news.microsoft.com/build-2025-book-of-news/), updated 2025-05-19).

## O

**Orchestration**
Coordinating agents, workflows, and function calls to execute multi-step solutions, often implemented with Agent Framework workflows that provide routing, state management, and human-in-the-loop checkpoints ([Microsoft Agent Framework](https://learn.microsoft.com/en-us/agent-framework/overview/agent-framework-overview), updated 2026-02-20).

## P

**Planetary Computer Pro**
A managed platform for geospatial insights that allows customers to ingest, manage, and analyze private geospatial data within Azure, integrating with Fabric and third-party tools ([Microsoft Planetary Computer Pro](https://news.microsoft.com/build-2025-book-of-news/), updated 2025-05-19).

**Plugin**
A term largely superseded by **Tool** or **MCP Server**. Originally referred to extensions for ChatGPT/Copilot; the ecosystem has shifted toward the Model Context Protocol (MCP) for standardized interoperability.

**Prompt Flow**
Microsoft Foundry (Azure)'s visual DAG environment for orchestrating LLMs, prompts, and Python tools, comparing prompt variants, collaborating across teams, and deploying flows as managed endpoints ([Prompt flow in Microsoft Foundry portal (classic)](https://learn.microsoft.com/en-us/azure/foundry-classic/concepts/prompt-flow), updated 2026-02-27). **Note:** Prompt Flow is available only in the Foundry (classic) portal. For new projects, use [Agent Framework Workflows](https://learn.microsoft.com/en-us/agent-framework/user-guide/workflows/overview).

**Prompt Agent**
{: #prompt-agent }
The configuration-defined agent type in **Microsoft Foundry Agent Service (GA)**. It defines instructions, model, and supported tools while Agent Service owns the runtime. Microsoft supports production agents that fit this managed model, especially when custom orchestration code is unnecessary.

**Framework recommendation:** favor Prompt Agents for prototypes, sandboxes, internal tools, and low-impact production. The configuration model accelerates delivery by limiting runtime ownership: teams cannot add arbitrary orchestration code or define the hosting topology, and capacity remains bounded by service quotas plus model, tool, and regional availability. Component maturity also varies across tools, SDKs, protocols, and publishing paths. These boundaries reduce the controls available for custom scaling, failover, rollback, deterministic middleware, and workloads whose RTO/RPO must be implemented and evidenced by the application team. For most pro-code production agents with those requirements, use **Microsoft Agent Framework** on Azure Container Apps or AKS so the team owns orchestration, deployment topology, resilience, and observability. Use a [Hosted Agent](#h) only when its isolation model and full constraint card fit. This recommendation is the framework's risk posture, not a Microsoft support restriction ([Foundry agent types](https://learn.microsoft.com/en-us/azure/foundry/agents/overview#agent-types); [Agent Service limits, quotas, and regions](https://learn.microsoft.com/en-us/azure/foundry/agents/concepts/limits-quotas-regions); [Microsoft Agent Framework](https://learn.microsoft.com/en-us/agent-framework/overview/agent-framework-overview)).

## R

**RAG (Retrieval Augmented Generation)**
A design pattern that pairs Azure AI Search retrieval with LLMs, now optimized by agentic retrieval that plans subqueries, runs hybrid search with semantic ranking, and returns structured grounding for high-fidelity answers ([Retrieval Augmented Generation (RAG) in Azure AI Search](https://learn.microsoft.com/en-us/azure/search/retrieval-augmented-generation-overview), updated 2026-01-15). *When to use:* Choose RAG when agents need current or proprietary data not present in the model's training set. RAG is preferred over fine-tuning when data changes frequently or when you need explicit source citations for compliance. For complex multi-hop reasoning, consider [Agentic Retrieval](#a) instead. See Decision Framework Q3 for data strategy guidance.

**Rayfin (Preview)**
Open-source SDK and CLI for defining and deploying a managed application backend on Microsoft Fabric. Rayfin lets developers or coding agents describe backend components such as databases, business logic, APIs, identity, and access policies in code, then deploy them onto Fabric so app data lands in OneLake under Fabric governance. Use it when building AI-enabled applications that need a production backend close to governed Fabric data ([Rayfin product page](https://www.microsoft.com/en-us/microsoft-fabric/features/rayfin), retrieved 2026-06-08).

**Researcher Agent (GA)**
Pre-installed agent in Microsoft 365 Copilot Chat that performs multi-step research across web and work data sources. Admins can connect specialized Declarative Agents to Researcher for domain-specific task delegation, creating multi-agent workflows within the M365 trust boundary. GA since July 2025 ([Researcher and Analyst GA](https://www.microsoft.com/microsoft-365/blog/2025/06/02/researcher-and-analyst-are-now-generally-available-in-microsoft-365-copilot/), published 2025-06-02).

**Responses API**
The modern API primitive that replaces the Assistants API in Microsoft Foundry. Uses Conversations (instead of Threads) and Response Items (instead of Runs) with stateful context retained automatically across calls. Supports background mode for long-running tools, durable streams for disconnect/reconnect, and invocation through current agent endpoints. The Assistants API is deprecated; Microsoft has reported a sunset of **August 26, 2026**, and a related **classic agents (v1)** retirement date that this framework previously published as March 31, 2027 **could not be confirmed; treat that one as unverified** and check Learn before planning against it ([Use the Azure OpenAI Responses API](https://learn.microsoft.com/en-us/azure/foundry/openai/how-to/responses), retrieved 2026-03-19; [Migration guide](https://learn.microsoft.com/en-us/azure/foundry/agents/how-to/migrate), retrieved 2026-03-19).

## S

**Shadow AI**
The agents your organization is running that nobody approved. Microsoft has made this a named, tooled governance problem rather than a worry: the **Microsoft 365 admin center Shadow AI** experience (**Frontier / public preview**; requires **E5**, Intune enrollment, Frontier opt-in, and Global Secure Access for traffic metadata) detects unsanctioned local AI agents on managed devices, and **Agent 365 lists Shadow AI (preview)** as a component.

The enforcement is real and specific. **OpenClaw is currently the only agent with both detection *and* blocking available:** blocking creates an Intune policy named **`A365 - Block OpenClaw`**. Intune ships a *"Local AI Agent Baseline - OpenClaw security baseline"*; **Defender for Endpoint** local AI agent discovery **(Preview)** lists the category *"Claw-based agents: OpenClaw, Clawpilot, QClaw, Claw/Nanobot"* plus AI agent runtime protection. **Detection only, no blocking:** ChatGPT Desktop, Ollama Desktop, Poe Desktop, Claw/ZeroClaw, OpenCode, Claude Desktop.

Two operational facts that decide whether this is a control or a report: policy propagation runs **15 minutes to 8 hours**, and **blocking applies only to managed Windows devices enrolled in Intune.** Everything else is visibility.

**Skills/Tools**
Function tools, hosted services, or built-in capabilities that agents attach at construction or per run, enabling actions like web search, file retrieval, or code execution within Agent Framework ChatClientAgent and ChatAgent implementations ([Agent Tools](https://learn.microsoft.com/en-us/agent-framework/user-guide/agents/agent-tools), updated 2026-02-13).

⚠️ **"Skill" now means three different things, and mixing them up will cost you a design review.** *(1)* In Copilot Studio's newer agent experience, a **skill** is a modular set of instructions loaded on demand for a specific situation. Learn documents the package as a ZIP containing *"A SKILL.md file containing YAML front matter (name, description) and Markdown instructions"* plus optional supporting files such as scripts ([Skills overview](https://learn.microsoft.com/en-us/microsoft-copilot-studio/agents-experience/skills-overview), updated 2026-06-30). *(2)* In the older Bot Framework lineage, a **skill** was a callable service another bot could invoke. Same word, unrelated construct, still findable in older documentation. *(3)* In Agent Framework, "skills" is used loosely as a synonym for tools, as above. When someone says "put it in a skill," ask which of the three they mean.

**Why the first meaning matters more than it looks.** Because a skill is Markdown and files rather than a proprietary artifact, it is the most portable thing in an agent. Not perfectly interchangeable across harnesses and products, but **light enough to lift**, which makes it the natural unit for the path where someone builds a capability for their own productivity and it later gets promoted into a governed team agent. **Agents are containers. Skills are the asset.** Build accordingly.

## V

**Vibe coding**
Coined to describe working with an AI where you *"give in to the vibes"* and stop reading the generated code: accepting diffs without review, pasting errors back without comment, letting the codebase grow beyond your own comprehension. **Its author scoped it explicitly to throwaway weekend projects.** It was never proposed as a methodology for production software; it became an accusation only after people applied it well outside that scope. Used precisely, it names a legitimate mode: exploratory, disposable, and honest about being both. Used loosely, it's just a way to call someone careless. Contrast with **agentic engineering**. Microsoft and GitHub use the term as a foil, describing it as suitable for quick prototypes but less reliable for mission-critical applications.

**Vibe engineering**
Coined as the deliberate antonym of vibe coding: the same agents, directed by experienced engineers applying *more* rigor rather than less: tests, planning, specs, review, and guardrails. The term did real work by naming the opposite of vibe coding, and you will still hear it in the wild. Note for anyone standardizing vocabulary: **the engineer who coined it has since conceded that "agentic engineering" won**, and moved to that term.

## W

**Web IQ (Limited Access)**
Microsoft IQ capability for grounding agents in fresh public web information. Web IQ has no dedicated Microsoft Learn concept page as of June 2026 and is available through a Limited Access program, so do not treat it as a GA dependency until Microsoft publishes broader availability guidance ([Microsoft IQ overview](https://learn.microsoft.com/en-us/microsoft-iq/), retrieved 2026-06-08; [Web IQ product page](https://www.microsoft.com/en-us/WebIQ), retrieved 2026-06-08).

**Work IQ**
The intelligence layer that powers Microsoft 365 Copilot, now callable directly by custom agents and apps. Document search tells you what a file says; Work IQ tells you *how the work actually happened*: who decided what, in which meeting, and where the thread went next.

**Status:** the **Work IQ APIs are GA (2026-06-16)** across four domains: **Chat, Context, Tools, and Workspaces** (Workspaces is backed by **SharePoint Embedded** storage). Billed in **Copilot Credits**. ⚠️ **Work IQ MCP is a separate, PREVIEW surface** (`tooling-servers-overview`, titled *"Work IQ MCP overview (preview)"*). Do not conflate the two.

**Two constraints that shape architecture before you write code:** **(1) Entra delegated authentication only; app-only authentication is NOT supported**, so unattended jobs with no human principal have no clean path in. **(2) Access is independent of Microsoft 365 Copilot licensing.** You do not need a Copilot license to call the APIs. *(An earlier version of this glossary stated a Copilot license was required. It is not.)*

{: .note }
> The widely-quoted "2× faster / 80% fewer tokens" figures come from **Microsoft internal testing reported in a marketing blog**, not from a reproducible benchmark or a documented SLO. Measure your own workload before putting them in a business case.

([Work IQ overview](https://learn.microsoft.com/en-us/microsoft-365/copilot/extensibility/work-iq/), updated 2026-06-17; [Announcing the new Work IQ APIs](https://www.microsoft.com/en-us/microsoft-365/blog/2026/06/02/announcing-the-new-work-iq-apis/), published 2026-06-02; [Work IQ MCP overview (preview)](https://learn.microsoft.com/en-us/microsoft-agent-365/tooling-servers-overview), updated 2026-07-14).

**Foundry Workflows (Retiring)**
A legacy Foundry Workflow definition. **Retiring from Preview without a GA path on December 1, 2026.** Do not use for new solutions. Map existing code-first orchestration to Agent Framework, visual business processes to Logic Apps, direct delegation to A2A, or exported YAML to Hosted Agents only when the [complete constraint card]({{ '/docs/technologies#the-hosted-agent-constraint-card' | relative_url }}) fits ([retirement and migration guidance](https://learn.microsoft.com/en-us/azure/foundry/agents/concepts/workflow)).

---

**Back to:** [Home]({{ '/' | relative_url }})
