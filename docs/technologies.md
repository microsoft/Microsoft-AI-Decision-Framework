---
layout: default
title: Microsoft AI Technologies
nav_order: 8
description: "Complete reference for Microsoft's AI technology portfolio"
---

<!-- markdownlint-disable-next-line MD025 -->
# Microsoft AI Technologies Reference

{: .no_toc }

This section provides a comprehensive overview of Microsoft's AI technology stack, from end-user productivity tools to infrastructure services.

Use this page as a reference after you’ve narrowed the decision: it’s optimized for confirming capabilities, boundaries, and status (GA/Preview) rather than teaching the selection process.

> **Problem-first reminder:** Start with the business outcome and scenario, then pick the simplest technology that satisfies it. Use [Scenarios]({{ '/docs/scenarios' | relative_url }}) to anchor real problems and the [Decision Framework]({{ '/docs/decision-framework' | relative_url }}) to gate technology choices.


## Table of contents

{: .no_toc .text-delta }

1. TOC
{:toc}

---

### Core AI Platforms

{: .no_toc }

## Microsoft 365 Copilot

{: .tech-heading }
**Description:** Integrated AI assistant across M365 apps (Word, Excel, Teams, Outlook, PowerPoint, OneNote) with tenant context and Graph security. Supports extensibility via Declarative Agents (low-code) and custom engine agents (pro-code) for tailored productivity experiences.
**Official Docs:** [Microsoft 365 Copilot Overview](https://learn.microsoft.com/en-us/microsoft-365/copilot/)
**Status:** GA

**Key Features:**

- **Tenant-aware AI:** Works across Word, Excel, Teams, Outlook, PowerPoint, and OneNote while inheriting Microsoft Graph security and compliance controls. (Updated Declarative Agents guidance - Retrieved: 2025-12-01)
- **Extensibility options:** Build Declarative Agents with instructions, knowledge, and actions or bring custom engine agents for full orchestration control. (Agents for Microsoft 365 Copilot - Retrieved: 2026-01-07)
- **Unified discovery:** Users can discover and install agents from the in-app store inside Word and PowerPoint, with Excel support in rollout. (Microsoft 365 Copilot release notes - Retrieved: 2026-03-25)
- **Admin governance:** Admins can pre-approve trusted agents and audit usage to streamline tenant-wide deployments. (Microsoft 365 Copilot release notes - Retrieved: 2026-03-25)
- **Grounded knowledge:** Agents can draw from Teams meetings, SharePoint, OneDrive, email, Dataverse, and approved connectors with tenant-scoped security. (Extend Microsoft 365 Copilot with agents - Retrieved: 2025-12-15)
- **Fine-tuning (Copilot Tuning, early access preview):** Lets makers tune agent models on tenant data under admin control. Microsoft documents this as **early access preview**. Treat it as an evaluation capability, not a production dependency. (Microsoft 365 Copilot release notes - Retrieved: 2026-03-25)
- **Copilot Cowork (GA worldwide, 2026-06-16):** The answer to work measured in hours rather than keystrokes. You delegate a multi-step job (rebuild the deck, reconcile the workbook, assemble the report pack) and Cowork decomposes it into a visible plan with checkpoints you can steer, producing coordinated output across Word, Excel, PowerPoint, and Outlook inside a sandboxed, permission-scoped, auditable cloud environment. **The fine print is the architecture:** it requires a Microsoft 365 Copilot user subscription license **plus Copilot Credits**; work is metered in **Light / Medium / Heavy** task tiers; **Anthropic models must be enabled**, which limits Cowork to Anthropic-supported regions; and **DLP support is documented as "coming soon."** Admins manage it at **Agents > All Agents > Cowork**. Data Lifecycle Management for Cowork reached GA on 2026-06-22. ([Copilot Cowork is now generally available](https://www.microsoft.com/en-us/microsoft-365/blog/2026/06/16/copilot-cowork-is-now-generally-available/) - Published: 2026-06-16)
- **Cowork model line-up:** Current Learn documentation lists **Claude Sonnet 5**, **Claude Opus 4.8**, **GPT 5.5 (Frontier)**, **Claude Fable 5 (Preview, off by default)**, and a paired **Sonnet + Opus Advisor** mode. Model availability follows the Anthropic-region constraint above. (Microsoft Learn, *Models in Copilot Cowork* (`cowork-models`) - Retrieved: 2026-07-29)

{: .warning }
> **"Cowork 1" is an announcement, not a shipping capability.** It has been named publicly but is not documented as available. Do not put it on a delivery plan.

- **Wave 3 multi-model intelligence:** Automatic model routing across OpenAI (GPT-5.2) and Anthropic (Claude) providers. Copilot selects the right model for each task - users choose Quick Response or Think Deeper modes without managing model selection. Claude available in mainline Copilot Chat via Frontier. ([Wave 3 announcement](https://www.microsoft.com/en-us/microsoft-365/blog/2026/03/09/powering-frontier-transformation-with-copilot-and-agents/) - Published: 2026-03-09)
- **Agentic Copilot in apps (GA):** Edit with Copilot in Excel and Word (formerly "Agent Mode") creates, edits, and refines content using app-native tools - formulas, PivotTables, charts, tables. No longer a separate mode; this is core Copilot. PowerPoint and Outlook rolling out through spring 2026. ([Wave 3 announcement](https://www.microsoft.com/en-us/microsoft-365/blog/2026/03/09/powering-frontier-transformation-with-copilot-and-agents/) - Published: 2026-03-09)
- **Researcher agent (GA):** Pre-installed multi-step research agent with connected agent delegation. Admins connect specialized Declarative Agents to Researcher for domain-specific task handoff. ([Microsoft 365 Copilot release notes](https://learn.microsoft.com/en-us/microsoft-365/copilot/release-notes) - Retrieved: 2026-03-25)
- **Multi-agent workflows:** Declarative Agents can connect to other agents for coordinated task completion. Researcher delegates to connected agents; users see inter-agent interaction. ([Microsoft 365 Copilot release notes - Jan 27, 2026](https://learn.microsoft.com/en-us/microsoft-365/copilot/release-notes#january-27,-2026) - Retrieved: 2026-03-25)
- **Copilot Memory (Preview):** Persistent personalization across sessions using Graph signals and conversation history. Users control, view, manage, disable, or clear memory at any time. ([Microsoft 365 Copilot release notes - Sep 3, 2025](https://learn.microsoft.com/en-us/microsoft-365/copilot/release-notes#september-3,-2025) - Retrieved: 2026-03-25)
- **Voice input (GA):** Speak to Copilot across mobile, desktop, and web in M365 apps including Outlook, Word, and PowerPoint. ([Microsoft 365 Copilot release notes - Nov 25, 2025](https://learn.microsoft.com/en-us/microsoft-365/copilot/release-notes#november-25,-2025) - Retrieved: 2026-03-25)
- **Connector ecosystem expansion:** 20+ new Copilot connectors since Oct 2025 including Coda, GitLab, Bitbucket, Asana, Smartsheet, Monday.com, Jira Data Center, Zendesk, Miro, Dropbox, Google Drive, Amazon S3, Veeva, and more. Explainable AI with inline citations for connector results. ([Microsoft 365 Copilot release notes](https://learn.microsoft.com/en-us/microsoft-365/copilot/release-notes) - Retrieved: 2026-03-25)

**Recent Updates (2025 to 2026):**

- **Oct 28, 2025:** Static tabs for custom engine agents in Teams meetings and @mention routing for Copilot Chat to target specific agents. (Microsoft 365 Copilot release notes - Retrieved: 2026-03-25)
- **Nov 25, 2025:** Voice input GA across platforms, shared mailbox access in Copilot Chat, audio overview customization for notebooks, file type/people filters in Chat. (Microsoft 365 Copilot release notes - Retrieved: 2026-03-25)
- **Dec 23, 2025:** GPT-5 default model in Copilot Chat with automatic fast/reasoning routing, redesigned navigation pane with expanded chat history, custom agent engine support across Word and Excel, AI Video Creator with transcript editing, .NET/Python/TypeScript client libraries for M365 Copilot APIs. (Microsoft 365 Copilot release notes - Retrieved: 2026-03-25)
- **Jan 13, 2026:** Copilot Library for centralized AI-generated assets, GPT-5 in Agent Builder for Declarative Agents, admin AI disclaimer customization. (Microsoft 365 Copilot release notes - Retrieved: 2026-03-25)
- **Jan 27, 2026:** GPT-5.2 model selector (Quick Response vs Think Deeper), Researcher delegation, Loop-to-PowerPoint generation, and copying Agent Builder agents to Copilot Studio. Foundry-to-Microsoft 365 distribution is now **Early Access Preview** and must be evaluated from its current documentation rather than inherited from this release snapshot.
- **Feb 24, 2026:** Declarative Agents upgraded to GPT-5.1 with auto-architecture, scoped grounding to specific data sources, embedded knowledge (up to 10 local files), URL-based dialogs to keep users in Copilot, and connector authentication simplification. (Microsoft 365 Copilot release notes - Retrieved: 2026-03-25)
- **Mar 9, 2026 (Wave 3):** Copilot Cowork announced (then a Frontier preview; **subsequently GA worldwide on 2026-06-16**; see the Cowork bullets above for current status). Multi-model intelligence (Claude in mainline Chat via Frontier). Agentic Copilot GA in Excel/Word (formerly Agent Mode). Agents in chat for end-to-end workflows (schedule meetings, draft emails, create docs from conversation). Microsoft 365 E7 announced (blog-stated $99/user/month, GA May 1: M365 Copilot + Agent 365 + Entra Suite + E5 security). Agent 365 GA May 1 (blog-stated $15/user/month). ([Wave 3 blog](https://www.microsoft.com/en-us/microsoft-365/blog/2026/03/09/powering-frontier-transformation-with-copilot-and-agents/) - Published: 2026-03-09)
- **Mar 10-24, 2026:** Context IQ for Teams channels, delegate calendar search, AI skill inferencing for E3/E5 users, Copilot Chat agent recommendations, explainable AI with inline citations for connectors. (Microsoft 365 Copilot release notes - Retrieved: 2026-03-25)

**Network Isolation:**

- **VNet Support:** No custom VNet support
- Fully managed SaaS (no VNet integration available)
- Requires gateway architecture for private on-premises data access
- Inherits M365 tenant network security
- **Ideal for:** Organizations accepting Microsoft-managed SaaS networking model
- Guidance: Microsoft recommends leveraging M365 admin controls and security policies to govern agent data access. (Data, privacy, and security considerations - Retrieved: 2025-09-05)

**Licensing ladder, know which rung you are standing on:**

Three rungs, not one SKU. **Microsoft 365 Copilot Chat** needs no add-on and meters agent usage pay-as-you-go. **Microsoft 365 Copilot** is the add-on license. **Microsoft 365 E7** is the top rung, and Microsoft describes it verbatim as: *"Microsoft 365 (E7) includes Microsoft 365 E5, Microsoft 365 Copilot, Microsoft Agent 365, and Microsoft Entra Suite."*

Smaller organizations have their own rungs, which this reference previously omitted: **Microsoft 365 Copilot Business** (an SMB add-on), and **Microsoft 365 Business Standard with Copilot** and **Business Premium with Copilot**, announced 2026-05-28 and **GA 2026-07-01**.

**When to use:** Broad productivity gains, existing M365 licenses, tenant-aware context, no deep AI expertise required, extend via low-code (Copilot Studio) or pro-code (M365 Agents SDK)

**Sources:**

- [Microsoft 365 Copilot release notes - Oct 28, 2025](https://learn.microsoft.com/en-us/microsoft-365/copilot/release-notes#october-28,-2025) (Retrieved: 2026-03-25)
- [Microsoft 365 Copilot release notes - Aug 19, 2025](https://learn.microsoft.com/en-us/microsoft-365/copilot/release-notes#august-19,-2025) (Retrieved: 2026-03-25)
- [Microsoft 365 Copilot release notes - Aug 5, 2025](https://learn.microsoft.com/en-us/microsoft-365/copilot/release-notes#august-5,-2025) (Retrieved: 2026-03-25)
- [Microsoft 365 Copilot release notes - Jul 8, 2025](https://learn.microsoft.com/en-us/microsoft-365/copilot/release-notes#july-8,-2025) (Retrieved: 2026-03-25)
- [Agents for Microsoft 365 Copilot](https://learn.microsoft.com/en-us/microsoft-365/copilot/extensibility/agents-overview) (Retrieved: 2026-01-07)
- [Extend Microsoft 365 Copilot with agents](https://learn.microsoft.com/en-us/microsoft-copilot-studio/microsoft-365-copilot-extend-with-agents) (Retrieved: 2025-12-15)
- [Data, privacy, and security considerations for extending Microsoft 365 Copilot](https://learn.microsoft.com/en-us/microsoft-365/copilot/extensibility/data-privacy-security) (Retrieved: 2025-09-05)
- [Wave 3: Powering Frontier Transformation](https://www.microsoft.com/en-us/microsoft-365/blog/2026/03/09/powering-frontier-transformation-with-copilot-and-agents/) (Published: 2026-03-09)
- [Copilot Cowork announcement](https://www.microsoft.com/en-us/microsoft-365/blog/2026/03/09/copilot-cowork-a-new-way-of-getting-work-done/) (Published: 2026-03-09)
- [Microsoft 365 Copilot release notes - Mar 24, 2026](https://learn.microsoft.com/en-us/microsoft-365/copilot/release-notes#march-24,-2026) (Retrieved: 2026-03-25)

---

## Word, Excel, and PowerPoint Agents (Frontier) {: .tech-heading }

**Description:** Frontier creation agents inside Microsoft 365 Copilot Chat that draft Word, Excel, and PowerPoint files powered exclusively by Anthropic models after explicit admin opt-in. Available to both Copilot-licensed and unlicensed (Copilot Chat) M365 users.
**Official Docs:** [Word, Excel, and PowerPoint Agents (Frontier)](https://learn.microsoft.com/en-us/microsoft-365/copilot/wordexcelppt-agents)
**Status:** Frontier Preview (experimental; requires Frontier enrollment; available to Copilot-licensed AND unlicensed M365 users)

**Key Features:**

- **Frontier-gated access:** Frontier is Microsoft’s early access program for experimental/preview features in Copilot apps and agents. Admins enable it in Microsoft 365 admin center (`Copilot` > `Settings` > `User access` > `Copilot Frontier`) and must connect the Anthropic provider before agents appear. Licensed users can ground creation agents with Work IQ organizational context. (Manage Microsoft 365 Copilot scenarios - Retrieved: 2026-03-16; Get started with Word, Excel, and PowerPoint Agents - Retrieved: 2026-03-30)
- **Document creation agents:** Generate drafts for Word, Excel, or PowerPoint from prompts in the Copilot app, grounded by Microsoft Graph data the user is authorized to access. (Get started with Word, Excel, and PowerPoint Agents - Retrieved: 2026-03-30)
- **Data boundary and consent:** Anthropic became a Microsoft subprocessor effective January 7, 2026 under Microsoft Product Terms/DPA. However, Anthropic models are **excluded from EU Data Boundary** and in-country processing commitments. Admins can disable the provider at any time. (Data Privacy and Security - Retrieved: 2026-03-30)
- **Storage and security:** Generated files save to OneDrive; only user-permitted Graph context is shared, with sensitivity labels and compliance policies respected. (Data Privacy and Security - Retrieved: 2026-03-30)
- **Limitations:** English-only preview, side-by-side pane is read-only, and users open the full app to edit. (Responsible AI FAQ - Retrieved: 2026-03-30)

**When to use:** Early testing of AI-generated Office documents when admins accept third-party processing under Frontier terms; avoid for regulated production workloads until Microsoft-hosted GA availability.

**Sources:**

- [Get started with Word, Excel, and PowerPoint Agents (Frontier)](https://learn.microsoft.com/en-us/microsoft-365/copilot/wordexcelppt-agents) (Retrieved: 2026-03-30)
- [Frequently asked questions about Word, Excel, and PowerPoint Agents: Responsible AI FAQ](https://learn.microsoft.com/en-us/microsoft-365/copilot/faq-wordexcelppt-agents) (Retrieved: 2026-03-30)
- [Manage Microsoft 365 Copilot scenarios in the Microsoft 365 admin center](https://learn.microsoft.com/en-us/microsoft-365/copilot/microsoft-365-copilot-page#user-access) (Retrieved: 2026-03-16)
- [Overview of Microsoft Agent 365](https://learn.microsoft.com/en-us/microsoft-agent-365/overview#enable-agent-365) (Retrieved: 2025-12-15)

---

## Microsoft Scout (Frontier / Private Preview) {: .tech-heading }

**Description:** An always-on personal agent that works in the background to coordinate work across Teams, Outlook, OneDrive, and SharePoint, holding your priorities and acting on your behalf without a fresh prompt each time. Microsoft Learn defines Scout as *"a desktop AI application for Windows and macOS"* (Windows 11 / macOS 12+, explicitly not mobile).
**Official Docs:** [Microsoft Scout setup instructions](https://learn.microsoft.com/microsoft-scout)
**Status:** **Frontier / private preview, not GA.** Announced 2026-06-02. Two-gate access: a Frontier tenant toggle, then Intune policy plus an attestation/opt-in form. Requires a **GitHub Copilot Business or Enterprise** license **and** an active **Microsoft 365 Copilot** license.

**Key Features:**

- **Proactive work coordination:** Schedules and coordinates meetings across time zones, flags important meetings, generates prep materials, blocks calendar time for upcoming deliverables, and identifies risks such as stalled decisions before they become blockers.
- **Work IQ grounding:** Work IQ connectivity is documented on Learn and is **on by default**. Scout draws on the same contextual intelligence layer that underlies Microsoft 365 Copilot: Teams, Outlook, OneDrive, SharePoint, chats, email, calendar, and contacts.
- **Surface conflict, documented not resolved:** Learn describes a **desktop application** and documents **no Teams UI**. The June 2026 announcement blog says *"You interact with it in Teams."* Design against the Learn-documented desktop surface; treat the Teams experience as blog-only until Learn says otherwise.
- **Purview integration:** Microsoft Purview sensitivity labels and data loss prevention policies are enforced in the moment, before data is sent or written. Scout does not bypass existing data protection controls.
- **Identity:** *"Each Scout instance has its own Entra identity"* is **blog-sourced only**. It is not corroborated on Microsoft Learn. Do not build an identity-governance design on it yet.
- **Install behavior worth knowing:** Installation always succeeds; sign-in is where access is actually enforced, and it fails without a clear reason. Expect help-desk tickets that look like bugs and are really entitlement gaps.

#### The Scout Paradox: two Microsoft statements, one unreconciled seam

**Two official Microsoft sources describe Scout's engine differently, and Microsoft has not reconciled them.** We report both rather than picking a winner.

| Statement | Source | What it is |
| :--- | :--- | :--- |
| *"It is powered by OpenClaw open-source technology"* and *"We are contributing policy conformance directly upstream to OpenClaw"* | Microsoft 365 blog, 2026-06-02 | **Blog-only.** Zero Microsoft Learn corroboration. |
| *"Microsoft Scout uses the **GitHub Copilot SDK**, which might connect to external AI models as a subprocessor"* | Microsoft Learn, Scout FAQ | **Learn-sourced.** |

Scout's local skill paths (`~/.copilot/skills/`, `~/.copilot/bundled-skills/`, `~/.copilot/m-skills/`) corroborate the GitHub Copilot lineage. A "harness versus upstream contribution" explanation is plausible, and **unverified**. No Microsoft source states the relationship, so we do not publish one.

{: .warning }
> **The governance fact that must travel with this story.** On Microsoft Learn, **OpenClaw appears across roughly sixteen pages, and every governance page treats it as unsanctioned Shadow AI to be detected and blocked.** The Microsoft 365 admin center Shadow AI experience (Frontier/public preview; **E5 required**, Intune enrollment, Frontier opt-in, Global Secure Access for traffic metadata) lists OpenClaw as the **only** agent with **both detection and blocking** available, and blocking creates an Intune policy literally named **`A365 - Block OpenClaw`**. Intune ships a *"Local AI Agent Baseline - OpenClaw security baseline"*; Defender for Endpoint's local AI agent discovery **(Preview)** lists the category *"Claw-based agents: OpenClaw, Clawpilot, QClaw, Claw/Nanobot."* Policy propagation runs **15 minutes to 8 hours**, and blocking applies only to managed Windows devices enrolled in Intune. A reader who takes the blog at face value could conclude Microsoft endorses OpenClaw. Microsoft ships a baseline named after blocking it.

**A note on the word "Autopilot."** Microsoft's June 2026 blog calls Scout an *"Autopilot,"* and that word appears **only in that blog**. There is **no Microsoft Learn page defining "Autopilots" as an agent category**. Treat it as marketing language describing emerging behavior, not as a taxonomy you can architect against.

**When to use:** Frontier-program organizations exploring always-on personal agents for proactive coordination, calendar management, and risk identification. Not suitable for production workloads until Microsoft publishes broader availability. Use Microsoft 365 Copilot (prompt-driven) or **Copilot Cowork (GA)** for delegated task work that does not need continuous background activity.

**Sources:**

- [Introducing Microsoft Scout: your always-on personal agent](https://www.microsoft.com/en-us/microsoft-365/blog/2026/06/02/introducing-microsoft-scout-your-always-on-personal-agent/) (Published: 2026-06-02)
- [Microsoft Scout setup instructions](https://learn.microsoft.com/microsoft-scout) (Retrieved: 2026-07-29)
- Microsoft Learn, *Microsoft Scout FAQ* (`/microsoft-scout/faq`) (Retrieved: 2026-07-29)
- Microsoft Learn, Microsoft 365 admin center *Shadow AI* (Frontier / public preview), Intune *Local AI Agent Baseline*, and Defender for Endpoint local AI agent discovery (Preview) (Retrieved: 2026-07-29)

---

## Copilot Studio

{: .tech-heading }
**Description:** Low-code and pro-code authoring environment for building Declarative Agents and custom engine agents with governance, analytics, and multi-channel delivery. Available as a standalone web app and inside Microsoft Teams.
**Official Docs:** [Copilot Studio Documentation](https://learn.microsoft.com/en-us/microsoft-copilot-studio/)
**Implementation Guide:** [aka.ms/CopilotStudioImplementationGuide](https://aka.ms/CopilotStudioImplementationGuide)

**Key Features:**

- **Harnesses: the choice that shapes everything else.** Copilot Studio now documents three, on a page titled *Choose a harness*. The **GitHub Copilot harness** is *"the most capable option, built for reasoning-heavy agents and workflows,"* running on an enhanced orchestration runtime that *"replaces the standard model used in Copilot Studio's standard harness agents."* The **standard harness** carries the older rule-based path. The **Copilot chat harness** is the Microsoft 365 Copilot extension path. Note how fast this settled: "classic experience" and "new experience" were the terms weeks ago, and the page that compared them now redirects to this one. ([Choose a harness](https://learn.microsoft.com/en-us/microsoft-copilot-studio/harnesses-overview) - Updated: 2026-08-03)
- **Status: generally available.** Ryan Cunningham, Corporate Vice President for Copilot Studio and Power Platform, announced on **2026-08-03** that *"The GitHub Copilot harness is now Generally Available in Studio."* Learn's harness, billing, and product overview pages were redeployed the same day and carry no preview label. Note that GA of the harness is not GA of everything inside it: **memory** is still explicitly labeled preview on its own page, which is the normal pattern and not a contradiction. ([Choose a harness](https://learn.microsoft.com/en-us/microsoft-copilot-studio/harnesses-overview) - Updated: 2026-08-03)
- **One runtime across several products.** Cunningham describes the harness as *"the same powerful engine behind Copilot Cowork and our most advanced coding agents."* This is the clearest statement yet that Microsoft is reusing one agent runtime across its products rather than building a separate loop for each surface, and it is the reason the harness concept is worth learning once rather than per product.
- **Models are your choice, and one is harness-exclusive.** Cunningham describes the harness as *"optimized for the most efficient use of advanced reasoning models, from Opus 5 to GPT 5.6 - always your choice."* Learn's model selection page lags the announcement and currently lists **GPT-5.5 Chat** and **Claude Opus 4.7** as GA, plus **Claude Sonnet 5** as GA and *"available only in agents powered by the GitHub Copilot harness."* Check the model page for the current roster; the harness-exclusive footnote is the durable point, because model availability is now a reason the harness choice matters. ([Select a model](https://learn.microsoft.com/en-us/microsoft-copilot-studio/authoring-select-agent-model) - Updated: 2026-05-28)
- **Agents do not move between harnesses, and reuse works best inside one.** Verbatim: *"Agents created with the GitHub Copilot harness can't be transferred to the standard harness, and vice versa."* You choose at creation, and neither path is deprecated. **Skills are the reuse unit within the GitHub Copilot harness**, exportable and importable between agents on that harness, but the harnesses-overview comparison lists skills and memory as a GitHub Copilot harness capability and *"not a focus"* for the standard and Copilot chat harnesses. What carries across all three is more basic: instructions, knowledge sources, and connectors. ([Agents overview](https://learn.microsoft.com/en-us/microsoft-copilot-studio/agents-experience/overview) and [Choose a harness](https://learn.microsoft.com/en-us/microsoft-copilot-studio/harnesses-overview) - Updated: 2026-08-03)
- **Billing differs by harness, and covers more stages than you expect.** Verbatim: *"Usage-based billing applies to using, building, testing, and evaluating agents,"* and *"Unlike the standard harness, which starts billing after publish, the GitHub Copilot harness charges credits from the moment you start building."* Microsoft names the specific experiences that consume credits, including *"previewing and testing the agent, and generating and creating agent evaluations."* Agents on the GitHub Copilot harness use **Copilot Credits** for usage-based billing; standard and Copilot chat harness agents use license-based billing. **Two planning consequences:** budget the build phase rather than only production, and treat evaluation as a funded activity, since the work this framework most encourages is also metered. Because consumption starts at authoring, cost control leans on capacity allocation, spending limits, and environment strategy rather than on approval gates at publish. ([Billing overview](https://learn.microsoft.com/en-us/microsoft-copilot-studio/agents-experience/billing-credit-overview) - Updated: 2026-08-03)
- **Native file production.** The GitHub Copilot harness *"natively creates and edits Word, Excel, PowerPoint, and PDF files,"* and *"runs each task in a secure sandbox governed by Copilot Studio."* This is the capability that turns an agent from something that answers into something that delivers an artifact. ([Choose a harness](https://learn.microsoft.com/en-us/microsoft-copilot-studio/harnesses-overview) - Updated: 2026-08-03)
- **Model selection, including one harness-exclusive model.** GA models include **GPT-5.5 Chat** and **Claude Opus 4.7**. **Claude Sonnet 5** is GA but *"available only in agents powered by the GitHub Copilot harness"*, so model availability is now a reason the harness choice matters. ([Select a model](https://learn.microsoft.com/en-us/microsoft-copilot-studio/authoring-select-agent-model) - Updated: 2026-05-28)
- **Skills (GitHub Copilot harness):** Modular, on-demand instruction sets. Learn documents a skill package as a ZIP containing *"A SKILL.md file containing YAML front matter (name, description) and Markdown instructions"* plus optional supporting files such as scripts. Because it is Markdown and files rather than a proprietary artifact, a skill exports and imports cleanly **between agents on this harness**. Learn scopes the whole skills section to the GitHub Copilot harness, and the harness comparison lists skills as *"not a focus"* for the standard and Copilot chat harnesses, so treat skills as intra-harness reuse rather than a universal portability story. **Disambiguation:** these are not the older Bot Framework "skills," which were callable services. Same word, unrelated construct. ([Skills overview](https://learn.microsoft.com/en-us/microsoft-copilot-studio/agents-experience/skills-overview) - Updated: 2026-06-30)
- **Microsoft IQ and Foundry IQ connectivity:** Ground agents with Microsoft 365 organizational context (emails, calendar, files, chats, people) and optionally connect to a Microsoft Foundry knowledge base. The permission model carries over: *"All access respects the user's existing permissions. Your agent can only access data the user is authorized to see."* ([Use Microsoft IQ](https://learn.microsoft.com/en-us/microsoft-copilot-studio/agents-experience/use-microsoft-iq) - Updated: 2026-06-30, labeled a preview feature). The what's-new page separately labels **"Foundry IQ connect (Preview)"**. Do not inherit Copilot Studio's GA surfaces for this connection. (What's new in Copilot Studio - Updated: 2026-07-15)
- **Connected agents on this harness are Copilot Studio only.** Learn states you *"can currently only connect other agents built in Copilot Studio"* there. A2A reached GA in April 2026 for the classic experience, so this is a capability that exists in the product but not yet on this path. Check before designing a multi-agent topology that assumes external delegation. ([Connected agents](https://learn.microsoft.com/en-us/microsoft-copilot-studio/agents-experience/authoring-add-other-agents) - Updated: 2026-06-30)
- **Agent sandbox:** An execution environment where the agent writes and runs code to do the work models are bad at, such as exact arithmetic and building files byte for byte. Two properties matter for governance. **There is no outbound network path:** per the CAT team, *"Code running there cannot call an API, send an email, or write a file to SharePoint, no matter what it imports."* External access happens only through configured tools and knowledge, so *"everything the agent does externally stays within your governance controls and data policies."* And **it is temporary**: a file the agent produces must be delivered somewhere durable in the same turn, because it will not be there later, and agent memory persists facts rather than files. (CAT team blog, *The New Copilot Studio Agent Sandbox*, 2026-07-20)
- **Workflows (public preview):** A visual canvas for automated processes with explicit control over which steps are handled by AI and which run deterministically. This matters more than a feature line suggests: the new agent experience gave up the classic experience's step-by-step conversation control, and workflows are where that determinism returns. If you need a process to run the same way every time, this is the surface to evaluate rather than agent instructions. (What's new in Copilot Studio - Updated: 2026-07-15)
- **Generative orchestration (GA):** The reasoning engine that decides which topics, tools, and knowledge to invoke **within the standard harness**. It is **GA and the default for new classic-experience agents**, with the older classic orchestration remaining for deterministic topic routing. Note the three-way distinction: classic orchestration and generative orchestration are modes *inside* the classic experience; the enhanced orchestration runtime belongs to the new experience and is not one of them. (What's new in Copilot Studio - Updated: 2026-07-15)
- **Memory (preview), with three constraints that change designs.** Persists per-user context across conversations. Learn documents that the system **deletes a user's memories after 28 days of inactivity**, that memories are **private to that user and not visible to the maker**, and that memory is **disabled in group chats and Microsoft Teams channels**. That last one is the trap: an agent designed around remembered preferences will silently lose them in exactly the collaborative surface most enterprises deploy to. ([Memory overview](https://learn.microsoft.com/en-us/microsoft-copilot-studio/agents-experience/memory-overview) - Updated: 2026-07-27)
- **Composable skills and memory:** Reusable skills can be authored once and shared across agents; memory can persist per-user preferences and patterns for more personalized responses. (What's new in Copilot Studio - Updated: 2026-07-15)
- **Model portfolio and selection:** GA support now includes Claude Sonnet 5 and GPT-5.5 Chat as primary models, with additional managed/external model options depending on region and policy. (What's new in Copilot Studio - Updated: 2026-07-15)
- **Computer use automation (GA, May 2026):** Agents can automate web and desktop apps with governance controls, and standalone computer-use tools can be reused across agents and flows (Preview). (What's new in Copilot Studio - Updated: 2026-07-15)
- **Agent-to-agent orchestration (A2A GA, April 2026):** A2A itself is GA. The what's-new page separately shows **"Connect other agents (Preview)"**, so connecting specialist agents for delegated execution is a *different* status question. (What's new in Copilot Studio - Updated: 2026-07-15)
- **Scheduled prompts (GA, 2026-07-01):** Agents can run prompts on a schedule rather than waiting for a user turn. (What's new in Copilot Studio - Updated: 2026-07-15)
- **Copilot Tuning (early access preview):** Tune agent behavior against tenant data. Microsoft labels this **early access preview**. Evaluation only. (What's new in Copilot Studio - Updated: 2026-07-15)
- **Workflow resilience:** Asynchronous responses allow long-running agent flows to complete beyond the prior two-minute synchronous window. (What's new in Copilot Studio - Updated: 2026-07-15)
- **Voice agent expansion:** Real-time voice agents (Preview), Teams Phone Agent integration (Preview), consent-based recording, and hold/resume controls support more production-ready calling scenarios. (What's new in Copilot Studio - Updated: 2026-07-15)
- **Governance and operations:** Agent inventory schema, readiness status views (Preview), and per-agent Entra Agent IDs (Preview in Copilot Studio; note the underlying **Microsoft Entra Agent ID** product is itself generally available) strengthen enterprise governance and troubleshooting. (What's new in Copilot Studio - Updated: 2026-07-15)
- **Evaluation maturity:** Agent evaluations are GA, with multi-turn tests and REST API automation (Preview) for CI/CD-aligned quality gates. (What's new in Copilot Studio - Updated: 2026-07-15)
- **Channel reach and extensibility:** Publish to Microsoft 365 Copilot, Teams, web, and channels such as WhatsApp, while integrating external tools through MCP. (What's new in Copilot Studio - Updated: 2026-07-15)

**Terminology:** Microsoft's guidance calls these *"inline agents, also known as child agents."* Use both names when you search the docs; the same construct is indexed under each.

**Recent Updates (2025 to 2026):**

- **Aug 2026:** The **GitHub Copilot harness** was announced generally available in Copilot Studio by Ryan Cunningham, Corporate Vice President for Copilot Studio and Power Platform (2026-08-03), alongside the *Choose a harness* documentation naming three harnesses. Learn's harness, billing, and overview pages were redeployed the same day without preview labels.
- **Jun 2026:** The rebuilt agent experience, Microsoft IQ integration, reusable skills, and memory capabilities were introduced; Windows 365 for Agents MCP server reached GA; Foundry IQ and specialist-agent connections entered preview. (What's new in Copilot Studio - Updated: 2026-07-15)
- **May 2026:** Computer use reached GA; asynchronous responses for long-running flows, M365 Copilot workflow nodes, and consent-based recording expanded enterprise automation and voice patterns. (What's new in Copilot Studio - Updated: 2026-07-15)
- **Apr 2026:** A2A became GA, while real-time voice agents, automated evaluations via REST API, and custom analytics metrics advanced testing and operations. (What's new in Copilot Studio - Updated: 2026-07-15)
- **Mar 2026:** Agent evaluations became GA with multi-turn test support; Work IQ integration (Preview) and expanded model availability accelerated grounded enterprise agents. (What's new in Copilot Studio - Updated: 2026-07-15)
- **Oct-Nov 2025:** MCP tooling, GPT-5 rollout milestones, SharePoint retrieval improvements, connected agents, and request-for-information workflow actions established the foundation for 2026 orchestration features. (What's new in Copilot Studio - Updated: 2026-07-15)
- **Roadmap signal:** Planned features continue through the Power Platform Release Planner, with delivery timing subject to Microsoft release-plan policy. (Power Platform release plan overview - Updated: 2026-07-02)

{: .warning }
> **Do not read "Copilot Studio is GA" as "everything in Copilot Studio is GA."** The status that matters is always per feature. The **GitHub Copilot harness is generally available** as of 2026-08-03, announced by the Corporate Vice President who owns the product, and several capabilities inside it remain at preview, which is normal rather than contradictory. **Verified GA:** the GitHub Copilot harness, generative orchestration (default on the standard harness), computer use (May 2026), A2A (April 2026), agent evaluations, scheduled prompts (2026-07-01). **Still preview:** memory (explicitly labeled preview on its own page), Copilot Tuning (early access preview), plus **"Connect other agents (Preview)"** and **"Foundry IQ connect (Preview)"**. For **autonomous/triggered agents, child (inline) agents, connected Copilot Studio agents, Foundry agents, Fabric data agents, and M365 Agents SDK agents inside Copilot Studio, Microsoft does not state a status**, and where Microsoft is silent, so are we.
>
> **On where status actually lives.** Documentation lags launches, sometimes by days. When the executive who owns a product announces GA and the changelog has not caught up, the announcement is the fact and the changelog is the backlog. Reserve skepticism for **inference** (never read GA into the absence of a preview banner) rather than for **attribution** (a named product owner stating something publicly is a primary source). Check the current page before you commit a status to a document someone will hold you to.

#### Copilot Studio for Teams: a dated door that is closing

**A retirement with a scope limit that changes who should care.** Microsoft states verbatim: *"After the end of June 2026, it will no longer be possible to use the Copilot Studio for Teams app to create classic chatbots. The app will redirect you to the Copilot Studio web app instead."*

Read the scope before you panic. This applies to **makers on a Teams plan**, who Microsoft says *"are limited to creating agents that use classic orchestration… and they can only publish these agents to Microsoft Teams."* **Standalone Copilot Studio subscriptions are unaffected.** If your makers came in through Teams and never left, plan the move to the web app; if they were licensed for Copilot Studio proper, this is a footnote, not a migration. ([Get started with Copilot Studio for Teams](https://learn.microsoft.com/en-us/microsoft-copilot-studio/fundamentals-get-started-teams) - Retrieved: 2026-07-29)

**Network Isolation:**

- **VNet Support:** Supported via Microsoft-managed VNet data gateway; runtime remains in Power Platform. (VNet data gateway overview - Retrieved: 2026-01-06)
- Makers can deploy managed environments with private endpoints to Azure resources through the Power Platform VNet data gateway. (VNet data gateway overview - Retrieved: 2026-01-06)
- On-premises data gateway enables secure connectivity to local systems. (VNet data gateway overview - Retrieved: 2026-01-06)
- **Ideal for:** Managed PaaS scenarios requiring low-code authoring with governed access to Azure or on-premises data.

**When Copilot Studio is the Right Tool:**

- Rapidly extend Microsoft 365 Copilot with Declarative Agents tailored to teams or departments.
- Build custom engine agents that orchestrate complex workflows while remaining inside Microsoft-controlled infrastructure.
- Use Power Platform connectors, triggers, and ALM tooling without deep ML engineering.

**Sources:**

- [What's new in Copilot Studio](https://learn.microsoft.com/en-us/microsoft-copilot-studio/whats-new#notable-changes) (Updated: 2026-07-15)
- [Released versions of Microsoft Copilot Studio](https://learn.microsoft.com/en-us/power-platform/released-versions/copilotstudio) (Updated: 2026-06-30; weekly Tuesday updates)
- [Power Platform 2025 release wave 2 overview](https://learn.microsoft.com/en-us/power-platform/release-plan/2025wave2/) (Updated: 2026-07-02)
- [Copilot Studio documentation](https://learn.microsoft.com/en-us/microsoft-copilot-studio/)
- [VNet data gateway overview](https://learn.microsoft.com/en-us/power-platform/admin/vnet-support-overview) (Retrieved: 2026-01-06)
- [Computer Use (GA)](https://learn.microsoft.com/en-us/microsoft-copilot-studio/computer-use) (Updated: 2026-04-03)
- [Work IQ MCP in Copilot Studio (Preview)](https://learn.microsoft.com/en-us/microsoft-copilot-studio/add-work-iq) (Updated: 2026-03-11)
- [VS Code extension for Copilot Studio](https://learn.microsoft.com/en-us/microsoft-copilot-studio/visual-studio-code-extension-overview) (GA: 2026-01-01)
- [Copilot Studio Kit](https://learn.microsoft.com/en-us/microsoft-copilot-studio/guidance/kit-overview) (Retrieved: 2026-03-25)
- [Get started with Copilot Studio for Teams](https://learn.microsoft.com/en-us/microsoft-copilot-studio/fundamentals-get-started-teams) (Retrieved: 2026-07-29)

---

## Power Apps Plan Designer

{: .tech-heading }
**Description:** AI-assisted solution architect that generates Dataverse tables, security roles, and app structures from natural language descriptions. Accelerates the "Feasibility" phase of development.
**Official Docs:** [Power Apps AI Overview](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/ai-overview)
**Status:** GA

**Key Features:**

- **Schema Generation:** Automatically creates 3NF normalized Dataverse tables and relationships based on business descriptions.
- **Role Generation:** Suggests and configures security roles appropriate for the solution.
- **App Scaffolding:** Generates the initial canvas or model-driven app layout.
- **Agent Feed:** Integrated feed for monitoring agent activities and human-in-the-loop requests (Early Access).

**When to use:** Rapid prototyping, overcoming "blank canvas" paralysis, or enabling makers to build complex data models without deep architectural skills.

---

## Microsoft Foundry (Azure)

{: .tech-heading }

**Description:** The cloud-based implementation of the Microsoft Foundry ecosystem. A code-first environment for building, evaluating, and deploying AI solutions with Azure OpenAI, open-source, and custom models. Integrates with workforce tools such as Foundry Agent Service, prompt flow, and safety guardrails.
**Official Docs:** [What is Microsoft Foundry (Azure)?](https://learn.microsoft.com/en-us/azure/foundry/what-is-foundry)
**Status:** GA

**Key Features:**

- **Broad model catalog:** Microsoft documents **"over 10,000 models"** in the Foundry catalog: GPT-5, GPT-5-mini, GPT-5-nano, GPT-4.1, GPT-image-1, Sora video generation, and GPT RealTime audio models alongside open-source and partner offerings. (What's new in Azure OpenAI - Updated: 2026-02-27; [Foundry Models overview](https://learn.microsoft.com/en-us/azure/foundry/concepts/foundry-models-overview) - Re-verified: 2026-07-29)
- **Provisioned throughput management:** Reserve PTUs and enable spillover to automatically route excess traffic to standard deployments. (What's new in Azure OpenAI - Updated: 2026-02-27)
- **Safety and routing:** Use model router, prompt shields with spotlighting, and structured outputs to protect prompts while dynamically selecting eligible models. Because router membership changes frequently, validate model families, regions, pricing, and availability against the [model router supported models table](https://learn.microsoft.com/en-us/azure/foundry/openai/concepts/model-router#supported-models) instead of hard-coding model names here. (Model router GA - Updated: 2026-03-24)
- **Workflow and evaluation tooling:** Build end-to-end pipelines with prompt flow, evaluations, and integrated monitoring. (Microsoft Foundry documentation - Retrieved: 2026-03-13)
- **Agent readiness:** Pair with Foundry Agent Service for managed agent orchestration using the same model deployments. (Microsoft Foundry documentation - Retrieved: 2026-03-13)

**Recent Updates (2025 to 2026):**

- **Mar 2026 (New Foundry Portal GA):** The new Microsoft Foundry portal reached general availability for core scenarios such as model discovery, agent development on the Responses API, evaluations, fine-tuning, red teaming, and quota management. Do not inherit that GA label for every surface: Foundry IQ and A2A include Preview capabilities, Hosted Agent tooling has mixed maturity, and Microsoft 365 distribution is Early Access Preview. **Foundry Workflows: Retiring from Preview without a GA path on December 1, 2026.** Classic portal remains necessary for capabilities that have not moved. (New Microsoft Foundry portal GA overview - Retrieved: 2026-03-19)

  **New Foundry Portal: GA vs Preview Breakdown (March 2026)**

  | Category | GA | Preview |
  |----------|----|---------|
  | **Discover** | Overview, Model catalog, Tools, Solution Templates, Search | Agent Manifests, Ask AI |
  | **Build** | Agents, Models, Fine-tuning, Tools, Data, Evaluations, Red teaming, Speech playgrounds | Tracing, Optimization, Knowledge, Memory, Guardrails (agents), Monitoring |
  | **Operate** | Quota, Admin | Overview, Assets, Compliance, AI Gateway |
  | **Other** | Home, Docs | - |

  **Not supported in the new portal at GA (use Foundry classic):** Standalone Azure OpenAI resources, Assistant creation, Audio playground, AI service fine-tuning, Content Understanding, prebuilt video prompts.

  **Guardrails: read the label, not the legacy name.** Inside Foundry, Content Safety is now surfaced as **"Guardrails and controls."** The agent-specific primitives are **Tool call** and **Tool response intervention points**, both **Preview**. **Task Adherence** (the control that asks *"is this agent still doing the job it was given?"*) is a **Preview guardrail control in Foundry** (`/azure/foundry/guardrails/task-adherence`), **not a GA Content Safety API**. And **groundedness detection is Preview and is documented as not applicable to agents**. If your safety case depends on it, that is a gap you need to know about now, not at go-live. ([Guardrails and controls in Microsoft Foundry](https://learn.microsoft.com/en-us/azure/foundry/guardrails/guardrails-overview) - Retrieved: 2026-07-30)

  > **Lifecycle gate, Foundry Workflows:** **Retiring from Preview without a GA path on December 1, 2026.** For existing workflows, map the job rather than chasing a one-size-fits-all replacement: Agent Framework for code-first orchestration, Logic Apps for visual business processes, A2A for lightweight direct delegation, or exported YAML on [Hosted Agents](#the-hosted-agent-constraint-card) only when the complete constraint card fits.

- **Voice Live (Preview):** Real-time voice agent capability powered by Azure Speech in Foundry Tools. Supports expanded model selection (GPT-Realtime, GPT-5, GPT-4.1, PHI), natural voice options, multilingual speech, semantic voice activity detection, avatar integration, and telephony via Azure Communication Services. Agents connect by agent ID, with no audio model deployment required (fully managed). SDKs available for Python, C#, JavaScript, and Java. **On network isolation, Microsoft is currently silent for Voice Live specifically.** The reasonable expectation is that a Foundry-hosted capability follows the network posture of the Foundry resource it runs on ([configure private link](https://learn.microsoft.com/en-us/azure/foundry/how-to/configure-private-link)), but inheritance is not automatic across Foundry services: Work IQ explicitly states that *"Virtual network (VNet) integration is not supported"* and requires a non-VNet-restricted endpoint. Verify the posture for your scenario before designing around either answer. (Voice Live overview - Retrieved: 2026-03-19)
- **Sep 2025:** GPT-5-codex reasoning model released for Codex CLI and VS Code integration. (What's new in Azure OpenAI - Updated: 2026-02-27)
- **Aug 2025:** GPT-5 series, Sora image-to-video generation, GPT RealTime GA, and provisioned spillover reached GA. (What's new in Azure OpenAI - Updated: 2026-02-27)
- **May 2025:** Sora video generation preview, prompt shield spotlighting, and model router preview introduced. (What's new in Azure OpenAI - Updated: 2026-02-27)

**Lifecycle & Migration:**

- **Platform naming evolution:** Azure AI Studio → Azure AI Foundry → Microsoft Foundry (current). Azure AI Services → Foundry Tools (current). The Azure resource type remains `Microsoft.CognitiveServices/accounts`. (Migrate from classic portal - Retrieved: 2026-03-19)

  **The Rosetta Stone - Foundry Terminology Evolution:**

  If you've been reading blogs, watching sessions, or referencing pre-2026 documentation, the vocabulary has shifted under your feet. This decoder ring maps old terms to current ones:

  | Before | After (Current) |
  |--------|-----------------|
  | Azure AI Studio / Azure AI Foundry | Microsoft Foundry |
  | Azure AI Services | Foundry Tools |
  | Hub-based projects | **Foundry (classic)** (`/azure/foundry-classic/`) |
  | Assistants API (Agents v0.5/v1) | Responses API (Agents v2) |
  | Monthly `api-version` parameters | v1 stable routes (`/openai/v1/`) |
  | Hub + Azure OpenAI + Azure AI Services resources | Foundry resource (single, with projects) |
  | Multiple SDK packages (`azure-ai-inference`, `azure-ai-generative`, `azure-ai-ml`, `AzureOpenAI()`) | Unified `azure-ai-projects` 2.x + `OpenAI()` against one project endpoint |
  | Threads, Messages, Runs, Assistants | Conversations, Items, Responses, Agent Versions |

  **One rename that did *not* happen:** **Azure AI Search kept its name.** It is not "Foundry Search," and it is not deprecated. It is the retrieval engine sitting underneath Foundry IQ. If a blog tells you otherwise, the blog is wrong.

- **Classic vs new portal:** Two portal experiences exist (classic and new) that do NOT have feature parity. Validate capabilities in the portal, SDK samples, and Microsoft Learn before committing. (Migrate from classic portal - Retrieved: 2026-03-19)
- **SDK migration (`azure-ai-inference` retires May 30, 2026):** Replace `AzureOpenAI()` with standard `OpenAI()` client pointing to `services.ai.azure.com/openai/v1`. Follow the [migration guide](https://learn.microsoft.com/en-us/azure/foundry/how-to/model-inference-to-openai-migration). (Migrate from classic portal - Retrieved: 2026-03-19)
- **Assistants API sunset (date reported by Microsoft as August 26, 2026; re-verify before planning):** Migrate to the Foundry Agent Service (Responses API). A [migration tool](https://aka.ms/agent/migrate/tool) is available. Threads → Conversations, Runs → Responses, Assistants → current agent definitions. Use Agent Framework for code-first orchestration, Logic Apps for visual processes, and A2A where direct delegation fits. Do not migrate onto Foundry Workflows: **Retiring from Preview without a GA path on December 1, 2026.**
- **Classic agents (v1) migration, retirement date UNCONFIRMED:** Agents created with `client.agents.create_agent()` in earlier SDK versions must migrate to `client.agents.create_version()` with structured agent definitions (`kind`, `model`, `instructions` fields). This framework previously published **March 31, 2027** as the retirement date; **we could not confirm that date against current Microsoft documentation, so treat it as unverified and check Learn before you build a plan around it.** The migration itself is real and documented. The [migration guide](https://learn.microsoft.com/en-us/azure/foundry/agents/how-to/migrate#migrate-classic-agents-to-new-agents) covers code-level changes. GitHub Copilot can accelerate the rewrite. Assign the migration as an Issue and let the Copilot cloud agent refactor the API calls. (Migrate to the new agents developer experience - Retrieved: 2026-03-19)
- **`azure-ai-projects` 2.x replaces 1.x:** Version 2.x targets the new portal; version 1.x targets classic. Using mismatched versions causes errors. (Migrate from classic portal - Retrieved: 2026-03-19)

**Context Windows:**

- **GPT-5 series:** Up to 400k tokens (272k input, 128k output) for reasoning workloads. (Foundry models sold directly by Azure - Retrieved: 2025-11-13)
- **GPT-5-chat:** 128k token context for conversational scenarios. (Foundry models sold directly by Azure - Retrieved: 2025-11-13)
- **GPT-4.1:** 1M token context for large document processing. (Foundry models sold directly by Azure - Retrieved: 2025-11-13)

**Network Isolation:**

- **Inbound isolation (GA):** Disable public network access and configure private endpoints to your Foundry resource. Supports "Disabled" (private endpoint only) and "Selected networks" (IP/VNet allowlist) modes. (How to configure network isolation for Microsoft Foundry - Retrieved: 2026-03-19)
- **Outbound isolation, BYO VNet (GA):** Inject the Agent client into a customer-managed virtual network subnet (delegated to `Microsoft.App/environments`, /27 or larger). Outbound traffic routes through your VNet to Azure PaaS resources over private endpoints. Bring your own Storage, AI Search, and Cosmos DB for end-to-end isolation. (How to configure network isolation for Microsoft Foundry - Retrieved: 2026-03-19)
- **Outbound isolation, Managed VNet (Preview):** Microsoft provisions and manages the virtual network. Two modes: "Allow internet outbound" and "Allow only approved outbound" (restricts via service tags, private endpoints, and optional FQDN rules enforced through Azure Firewall). Simpler setup but currently in Preview. (Configure managed virtual network - Retrieved: 2026-03-19)
- **Network isolation is not air-gapping:** Managed Foundry supports documented private-network and no-public-egress configurations, subject to feature, tool, project-age, and regional prerequisites. It is still a connected managed service. Check the current [networking deep dive](https://learn.microsoft.com/en-us/azure/foundry/agents/concepts/agents-networking-deep-dive) and tool matrix before promising isolation. Keep disconnected Foundry Local/Azure Local architectures separate.
- **Ideal for:** Zero-trust deployments, regulated workloads, and sovereign data strategies. Use BYO VNet for GA-supported production isolation; evaluate Managed VNet for simplified preview scenarios.

**When Microsoft Foundry (Azure) is the Right Tool:**

- Latency-sensitive or high-throughput applications needing direct control over model deployments and caching.
- Custom AI pipelines, evaluations, or RAG systems that exceed low-code platform capabilities.
- Teams with Azure engineering expertise that must combine private networking, governance, and model flexibility.

**Sources:**

- [What's new in Azure OpenAI in Microsoft Foundry Models](https://learn.microsoft.com/en-us/azure/foundry-classic/openai/whats-new#august-2025) (Updated: 2026-02-27)
- [What's new in Azure OpenAI in Microsoft Foundry Models](https://learn.microsoft.com/en-us/azure/foundry-classic/openai/whats-new#may-2025) (Updated: 2026-02-27)
- [What's new in Azure OpenAI in Microsoft Foundry Models](https://learn.microsoft.com/en-us/azure/foundry-classic/openai/whats-new#september-2025) (Updated: 2026-02-27)
- [What's new in model router in Microsoft Foundry Models?](https://learn.microsoft.com/en-us/azure/foundry/foundry-models/whats-new-model-router) (Updated: 2026-03-24)
- [Foundry models sold directly by Azure](https://learn.microsoft.com/en-us/azure/foundry/foundry-models/concepts/models-sold-directly-by-azure#gpt-5) (Retrieved: 2025-11-13)
- [What is Microsoft Foundry (Azure)?](https://learn.microsoft.com/en-us/azure/foundry/what-is-foundry) (Retrieved: 2026-03-13)
- [How to configure a private link for Microsoft Foundry (Azure)](https://learn.microsoft.com/en-us/azure/foundry/how-to/configure-private-link) (Retrieved: 2026-01-06)
- [Create a secure Microsoft Foundry (Azure) hub and project with a managed virtual network](https://learn.microsoft.com/en-us/azure/foundry-classic/how-to/create-secure-ai-hub#create-a-hub) (Retrieved: 2025-12-23)
- [New Microsoft Foundry portal GA overview](https://learn.microsoft.com/en-us/azure/foundry/concepts/general-availability) (Retrieved: 2026-03-19)
- [How to configure network isolation for Microsoft Foundry](https://learn.microsoft.com/en-us/azure/foundry/how-to/configure-private-link) (Retrieved: 2026-03-19)
- [Configure managed virtual network for Microsoft Foundry projects](https://learn.microsoft.com/en-us/azure/foundry/how-to/managed-virtual-network) (Retrieved: 2026-03-19)
- [Voice Live overview](https://learn.microsoft.com/en-us/azure/ai-services/speech-service/voice-live) (Retrieved: 2026-03-19)
- [Voice Agent with Foundry Agent Service quickstart](https://learn.microsoft.com/en-us/azure/ai-services/speech-service/voice-live-agents-quickstart) (Retrieved: 2026-03-19)
- [Guardrails and controls in Microsoft Foundry](https://learn.microsoft.com/en-us/azure/foundry/guardrails/guardrails-overview) (Retrieved: 2026-07-30)
- [Foundry Models overview](https://learn.microsoft.com/en-us/azure/foundry/concepts/foundry-models-overview) (Re-verified: 2026-07-29)

---

## Foundry Agent Service {: .tech-heading }

**Description:** Managed PaaS for agent definitions, tools, state, identity, and runtime infrastructure within **Microsoft Foundry (Azure)**. The parent service is GA, but agent types, protocols, tools, publishing paths, and SDK packages carry independent lifecycle labels. Never use the platform label as a status shortcut.
**Official Docs:** [Foundry Agent Service](https://learn.microsoft.com/en-us/azure/foundry/agents/overview)
**Status:** GA (May 2025; next-gen on Responses API: March 2026)

**Key Features:**

- **Managed runtime:** Microsoft hosts compute, memory, and thread state with built-in tracing and Azure Monitor metrics. (Foundry Agent Service GA - Updated: 2026-01-21)
- **Agent-to-agent delegation:** Incoming A2A endpoints are Preview. Direction matters: an outgoing compatibility table does not make the entire A2A surface GA. Use A2A for lightweight direct delegation, not as a synonym for deterministic workflow orchestration.
- **BYO storage:** Bring Azure Cosmos DB for thread storage plus Azure AI Search and Azure Blob Storage for knowledge with private endpoints. (Foundry Agent Service GA - Updated: 2026-01-21)
- **Thread storage in Cosmos DB (GA):** Standard setup provisions enterprise_memory containers (thread-message-store, system-thread-message-store, agent-entity-store) in your Cosmos DB for NoSQL account with BYO throughput. ([Azure Cosmos DB integration with Azure AI Agents Service](https://learn.microsoft.com/en-us/azure/cosmos-db/gen-ai/azure-agent-service#overview), retrieved 2025-04-30)
- **Trace agents SDK:** Debug runs with thread-level insights, including inputs, tool calls, and outputs. Tracing maturity varies by agent type. **Foundry Workflows: Retiring from Preview without a GA path on December 1, 2026.** Do not read tracing support as a lifecycle endorsement.
- **Event triggers:** Invoke agents from Azure Logic Apps or other workflows to respond to business events. (Foundry Agent Service GA - Updated: 2026-01-21)
- **VS Code integration:** Microsoft Foundry VS Code extension deploys and configures agent tools, including MCP integrations. (Foundry Agent Service GA - Updated: 2026-01-21)
- **MCP tool & Deep Research:** Connect to remote Model Context Protocol servers and run multi-step o3-deep-research investigations grounded by Bing Search. (What's new in Foundry Agent Service - Updated: 2025-10-08)
- **Next-gen GA (Responses API):** Built on OpenAI Responses API, wire-compatible with OpenAI agents. Open model support across DeepSeek, xAI, Meta, LangChain, and LangGraph. ([Foundry Agent Service GA blog](https://devblogs.microsoft.com/foundry/foundry-agent-service-ga/) - Published: 2026-03-16)
- **MCP authentication expansion:** Key-based, Entra Agent Identity, Managed Identity, and OAuth Identity Passthrough for user-delegated access patterns. ([Foundry Agent Service GA blog](https://devblogs.microsoft.com/foundry/foundry-agent-service-ga/) - Published: 2026-03-16)
- **Evaluations (GA):** Out-of-the-box evaluators (coherence, relevance, groundedness, safety), custom evaluators, and continuous production monitoring via Azure Monitor. ([Foundry Agent Service GA blog](https://devblogs.microsoft.com/foundry/foundry-agent-service-ga/) - Published: 2026-03-16)
- **SDK consolidation:** `azure-ai-agents` package deprecated; agents are now first-class operations on `AIProjectClient` in `azure-ai-projects` (Python 2.0.1 GA, Java 2.0.0 GA, .NET 2.0.0-beta.1). Use `get_openai_client()` to drive responses. ([Foundry Agent Service GA blog](https://devblogs.microsoft.com/foundry/foundry-agent-service-ga/) - Published: 2026-03-16)

**Built-in Tools (Knowledge):**

- **Azure AI Search:** Ground agents with indexed data, chat with your data
- **File Search:** RAG with proprietary documents (Azure Blob Storage, local files). Uses vector stores (up to 10,000 files), automatic chunking/embedding (text-embedding-3-large), hybrid search (keyword + semantic), reranking
- **Grounding with Bing Search:** Access real-time web information
- **Grounding with Bing Custom Search (GA June 2025):** Enhanced responses with selected web domains
- **Microsoft Fabric (GA March 2025):** Integrate with Fabric Data Agents for data analysis capabilities
- **SharePoint (Preview):** Chat with private SharePoint documents, OBO authentication for security-trimmed access, uses M365 Copilot API built-in indexing
- **Licensed Data:** Proprietary data via licensed API keys (TripAdvisor, Morningstar, LexisNexis, LEGALFLY, etc.)

**Built-in Tools (Action):**

- **Function Calling:** Custom stateless functions
- **Azure Functions:** Intelligent, event-driven serverless code execution (classic agents only; not available in new Responses API agents - use MCP or Logic Apps instead)
- **Azure Logic Apps:** 1,400+ connector-based workflows. Microsoft's term for the AI-driven variant is **"agentic workflows"** built around an **"agent loop."** See the status split noted in the [Technology Selection Quick Guide](#technology-selection-quick-guide).
- **Code Interpreter:** Write and run Python code in sandboxed environment (data handling, visuals)
- **OpenAPI 3.0 Specified Tool:** Connect to external APIs via OpenAPI spec
- **Model Context Protocol (GA June 2025):** Access tools hosted on remote MCP endpoints for interoperable tool sharing. (What's new in Foundry Agent Service - Updated: 2025-10-08)
- **Deep Research (GA June 2025):** Multi-step web-based research with o3-deep-research model + Bing Search
- **Browser Automation (Preview):** Real-world browser tasks via natural language with Playwright Workspaces
- **Computer Use (Preview):** UI interaction via specialized computer-use-preview model, interprets raw pixel screenshots, virtual keyboard/mouse control
- **Image Generation (Preview):** Generate and edit images as part of conversations and multi-step workflows

**Agent Setup Options:**

- **Basic Setup:** Microsoft-managed search and storage (files stored in MS-managed storage, vector stores in MS-managed search). Fastest path to production; no customer infrastructure to manage.
- **Standard Setup:** BYO Azure AI Search + Blob Storage + Cosmos DB (files in your Blob, vector stores in your AI Search, thread storage in your Cosmos DB), private networking, no public egress by default. Required for VNet-isolated deployments.

**New in the Foundry (new) portal:**

- **Responses API (GA):** Modern API primitive replacing the Assistants API. Uses Conversations (not Threads) and Response Items (not Runs) with stateful context, background mode, and durable streams.
- **Current endpoints and identity:** Current agents receive an endpoint and agent identity through the current model; the legacy Agent Applications publishing model is deprecated. Distribution to Microsoft 365 Copilot and Teams is **Early Access Preview** and must be validated per tool and identity path.
- **Voice Live (Preview):** Real-time voice agents powered by Azure Speech. Connect Foundry agents to telephony, automotive, accessibility, and contact center scenarios via agent ID. Integrates natively with Foundry agents. SDKs for Python, C#, JavaScript, Java. Requires public endpoints (no VNet support yet).
- **Foundry IQ (mixed GA/Preview):** Managed knowledge bases connecting agents to permission-aware enterprise data via MCP. See [Foundry IQ](#foundry-iq).
- **Foundry Workflows:** **Retiring from Preview without a GA path on December 1, 2026.** No new-solution recommendation.
- **Agent Memory (Preview):** Persistent context across sessions for agents.

**Construction Paths - Pick the Amount of Runtime You Own:**

Not all agents are built the same way. Think of this as choosing between a furnished kitchen and bringing your own kitchen crew. The choice is ownership, not prestige.

- **Prompt agents (GA):** Microsoft documents them for configuration-defined agents, including production agents that do not need custom orchestration logic. The managed model accelerates delivery while limiting runtime ownership: teams cannot add arbitrary orchestration code or define the hosting topology, and capacity remains bounded by service quotas plus model, tool, and regional availability. Feature maturity varies across tools, SDKs, protocols, and publishing paths. **Framework guidance:** favor prototypes, sandboxes, internal tools, and low-impact production. For most pro-code production agents that require customer-owned scaling, failover, rollback, deterministic middleware, observability, or evidenced RTO/RPO, use **Agent Framework on Azure Container Apps or AKS**. This is the framework's risk posture, not a Microsoft support restriction. See [Agent types](https://learn.microsoft.com/en-us/azure/foundry/agents/overview#agent-types) and [Agent Service limits, quotas, and regions](https://learn.microsoft.com/en-us/azure/foundry/agents/concepts/limits-quotas-regions).
- **Hosted agents (mixed maturity under a GA parent service):** Bring containerized Python or C# code and custom orchestration. Choose this path when stronger **per-session VM isolation** is valuable and the documented envelope fits. Session allocation is not an identity-based container model, and Hosted Agents are not self-hosted applications on Azure Container Apps or AKS.

#### The Hosted Agent Constraint Card

**Isolation is the reason to choose it; the envelope is the price of admission.** Each session receives a VM-isolated sandbox. Session IDs, not user identities, drive allocation, so applications must map users or conversations to sessions.

| Constraint | Current documented envelope |
| :--- | :--- |
| **Compute per session** | 0.5 vCPU/1 GiB, 1 vCPU/2 GiB, or 2 vCPU/4 GiB |
| **Lifecycle** | Compute idles after 15 minutes; session state is deleted after 30 days of inactivity |
| **Scale** | Scales per session with no replica or warm-pool control. In the BYO-VNet context, the documented ceiling is **50 concurrent sessions per subscription and region**. Plan around roughly **200 agents per Foundry instance (resource)**. The **250-project** resource limit is theoretical and workload-dependent; official guidance indicates effective capacity can fall to roughly **25 projects under heavy traffic**. Plan below **80% subnet utilization**. |
| **Revisions** | Per agent, allow up to **100 active revisions** and **1,000 total valid revisions**; delete obsolete revisions before the cap blocks deployment. |
| **Identity** | Each Hosted Agent gets a dedicated agent identity. External resources require explicit RBAC; user-invoked and background paths use different identity flows. Applications must map users or conversations to sessions. |
| **Storage** | Up to 20 GiB per session at 1 vCPU or larger, scaled down for smaller tiers; about 20% is reserved. `$HOME`, uploaded files, the image, and other writable content share the remainder. |
| **Networking prerequisites** | BYO-VNet requires customer Storage, AI Search, and Cosmos DB; a dedicated delegated agent subnet per Foundry resource; and a **/24 recommended subnet**. The Foundry resource and VNet must be in the same region. Projects created before June 25, 2026 require the container registry's public endpoint. |
| **Region and feature fit** | Hosted Agents must run in a supported region, and model, tool, protocol, and private-network support vary by region. Validate the current matrices together, not independently. |
| **Cost** | Total cost includes model inference, tool usage, and container compute (CPU and memory) for active sessions. Per-session sizing multiplies compute cost with concurrency, and scale-to-zero does not remove cold-start or resumed-session planning. |
| **Maturity** | The parent Agent Service is GA, but Hosted packages, adapters, protocols, tools, networking combinations, and Microsoft 365 publishing have mixed maturity. Pin versions and validate each surface. |

Use Hosted Agents when that per-session isolation is worth the constraints. Otherwise, use **Azure Container Apps or AKS** for more scalable, customer-operated hosting today. See [Hosted agents](https://learn.microsoft.com/en-us/azure/foundry/agents/concepts/hosted-agents), [Agent Service limits, quotas, and regions](https://learn.microsoft.com/en-us/azure/foundry/agents/concepts/limits-quotas-regions), [Foundry resource and project limits](https://learn.microsoft.com/en-us/azure/foundry/foundry-models/quotas-limits), and [BYO-VNet prerequisites](https://learn.microsoft.com/en-us/azure/foundry/agents/how-to/virtual-networks).

**Recent Updates (2025 to 2026):**

- **Mar 2026:** Next-gen Foundry Agent Service reached GA on the Responses API. Feature maturity still varies by agent type, protocol, tool, package, region, and channel; use current Learn tables rather than this announcement as the deployment snapshot.
- **General Availability:** Service went GA in May 2025
- **A2A:** Treat incoming endpoints as Preview and validate direction, authentication, and protocol support independently.
- **MCP tool:** Connect to remote Model Context Protocol servers (June 2025)
- **Deep Research:** o3-deep-research + Bing Search for multi-step analysis (June 2025)
- **Bing Custom Search:** Specify websites for grounding (June 2025)
- **Azure Monitor integration:** Metrics for file indexing, run tracking (April 2025)
- **BYO Cosmos DB:** Thread storage in customer-managed Cosmos DB for NoSQL (April 2025)
- **VS Code extension:** Develop, test, and publish agents with tool configuration inside Visual Studio Code. (Foundry Agent Service GA - Updated: 2026-01-21)

**Network Isolation:**

- **VNet Support (GA, Standard Setup):** Full private networking with BYO VNet injection. Agent client injected into a customer-managed subnet; outbound traffic routes through your VNet to Azure PaaS over private endpoints. BYO VNet now extends to MCP servers, Azure AI Search, and Fabric data agents. Requires delegated subnet (`Microsoft.App/environments`, /27+) and BYO Storage, AI Search, Cosmos DB.
- **Managed VNet (Preview):** Microsoft-provisioned network with managed private endpoints. Two modes: "Allow internet outbound" and "Allow only approved outbound." Simpler setup; no customer VNet required.
- **Tool support behind VNet:** MCP (private), AI Search, Code Interpreter, Function Calling, Bing/SharePoint Grounding, and Foundry IQ work behind VNet. File Search, OpenAPI, Azure Functions, Browser Automation, Computer Use, Image Generation, and A2A are not yet supported. Voice Live requires public endpoints.
- **Ideal for:** Managed PaaS with private networking requirements. Use Standard Setup + BYO VNet for GA-supported production isolation.

> **Terminology clarification:** This guide uses four distinct terms: **(1) Microsoft Foundry** is the platform and portal. **(2) Foundry Agent Service** is an optional managed PaaS within it. **(3) Hosted Agents** are containerized agents on that service with per-session VM isolation; they are not self-hosted applications on Container Apps or AKS. **(4) Microsoft Agent Framework** is the GA open-source orchestration SDK. Portal, service, agent type, framework, and feature labels do not inherit one another's status.

**When to use:** Managed agent state, identity, tools, and runtime infrastructure when the exact agent type and feature statuses meet the workload's production bar. Use Agent Framework for code-first orchestration and A2A only for direct delegation.

**Sources:**

- [What's new in Microsoft Foundry](https://learn.microsoft.com/en-us/azure/foundry/whats-new-foundry) (Updated: 2026-03-23)
- [Foundry Agent Service overview](https://learn.microsoft.com/en-us/azure/foundry/agents/overview)
- [Agent Tool Catalog](https://learn.microsoft.com/en-us/azure/foundry/agents/concepts/tool-catalog)
- [Transparency Note for Azure Agent Service](https://learn.microsoft.com/en-us/azure/foundry/responsible-ai/agents/transparency-note)
- [Virtual Networks for Foundry](https://learn.microsoft.com/en-us/azure/foundry/agents/how-to/virtual-networks)
- [Azure Cosmos DB integration with Azure AI Agents Service](https://learn.microsoft.com/en-us/azure/cosmos-db/gen-ai/azure-agent-service#overview)
- [Foundry Agent Service GA announcement](https://devblogs.microsoft.com/foundry/foundry-agent-service-ga/) (Published: 2026-03-16)

---

## Agent 365 {: .tech-heading }

**Description:** The fleet control plane for agents: identity, registry, lifecycle, and centralized observability in the Microsoft 365 admin center. It answers the question every CISO asks second: *"how many agents do we actually have, and who owns each one?"*
**Official Docs:** [Agent 365](https://learn.microsoft.com/en-us/microsoft-agent-365/overview)
**Status:** **GA 2026-05-01.** Per-user licensing (blog-stated **$15/user/month** standalone; bundled in Microsoft 365 E7). Microsoft states that **E5 "works best… as a pre-requisite."**

**How it fits together:**

- **Microsoft Entra Agent ID (generally available):** Not a concept and not a preview feature. This is a **formally named product**. Microsoft's own words: *"Microsoft Entra Agent ID is a product within Microsoft Entra that provides the platform for creating and managing agent identities and agent identity blueprints. Agent ID is available for all Microsoft Entra customers."* And from the what's-new page: *"Microsoft Entra Agent ID is now generally available."* ⚠️ We deliberately do **not** publish a GA month. Microsoft states the status, not the date. It provides agent identities, blueprints, optional agent users, and policy enforcement across Conditional Access (adaptive policies, Microsoft Managed Policies for high-risk agents), ID Governance (entitlement management, time-bound access), ID Protection (anomaly detection, risk-based remediation), Network Controls (prompt injection blocking, threat intelligence filtering), and the Agent Identity Platform (auto-discovery, A2A/MCP authorization). Licensing runs through E5/E7 or standalone options including Microsoft Entra Internet Access. ([What is Microsoft Entra Agent ID?](https://learn.microsoft.com/en-us/entra/agent-id/what-is-microsoft-entra-agent-id) - Re-verified: 2026-07-29)
- **Agent registry + admin center observability:** Agent 365 surfaces agents in the Microsoft 365 admin center for inventory and management. Components include the **Agent Registry**, **Agent Map**, **Registry Sync**, and **Shadow AI (preview)**. (Overview of Microsoft Agent 365 - Retrieved: 2026-07-29)
- **Agent 365 SDK (Preview):** Extends agents built on any SDK/platform with Entra-backed identity, notifications, OpenTelemetry observability, and governed MCP servers under blueprint policies. (Agent 365 SDK - Retrieved: 2026-01-09)
- **Agent 365 CLI (Preview):** Cross-platform CLI to deploy and manage Agent 365 applications on Azure. Requires custom client app registration in Entra ID and uses `--prerelease` installs while the CLI evolves. (Agent 365 CLI - Retrieved: 2026-01-13)

{: .warning }
> **What we will not tell you about Registry Sync.** You may have read that Registry Sync ingests agents from AWS Bedrock and Google Cloud. **We could not verify that claim against Microsoft documentation, so we do not publish it.** If cross-cloud agent inventory is a requirement, confirm it directly with the product team before it becomes a design assumption.

**Licensing and rollout:** Agent 365 is GA with per-user licensing. Agents acting on behalf of a licensed user are covered. Microsoft describes Microsoft 365 E5 as working best as a prerequisite, and Agent 365 is included in the **Microsoft 365 E7** bundle. Microsoft's verbatim description: *"Microsoft 365 (E7) includes Microsoft 365 E5, Microsoft 365 Copilot, Microsoft Agent 365, and Microsoft Entra Suite."* The Agent 365 SDK and CLI remain in Preview; plan for API surface changes in tooling workflows. (Overview of Microsoft Agent 365 - Retrieved: 2026-07-29)

**When to use:** Establish identity, registry, and governance for cross-platform agents; pair with Copilot Studio or Microsoft Foundry runtimes for execution. Fleet governance and in-process runtime policy are different layers. See the [Agent Governance Toolkit](#agent-governance-toolkit-public-preview) for the middleware layer that sits inside the execution path.

**Sources:**

- [Overview of Microsoft Agent 365](https://learn.microsoft.com/en-us/microsoft-agent-365/overview) (Retrieved: 2026-07-29)
- [Microsoft Agent 365 SDK](https://learn.microsoft.com/en-us/microsoft-agent-365/developer/agent-365-sdk) (Retrieved: 2026-01-09)
- [Agent 365 CLI](https://learn.microsoft.com/en-us/microsoft-agent-365/developer/agent-365-cli) (Retrieved: 2026-01-13)
- [What is Microsoft Entra Agent ID?](https://learn.microsoft.com/en-us/entra/agent-id/what-is-microsoft-entra-agent-id) (Re-verified: 2026-07-29)
- [What's new in Microsoft Entra Agent ID](https://learn.microsoft.com/en-us/entra/agent-id/whats-new-agent-id) (Re-verified: 2026-07-29)
- [Agent identities in Microsoft Entra Agent ID](https://learn.microsoft.com/en-us/entra/agent-id/agent-identities) (Retrieved: 2025-11-04)
- [Manage Microsoft 365 Copilot scenarios in the Microsoft 365 admin center](https://learn.microsoft.com/en-us/microsoft-365/copilot/microsoft-365-copilot-page#user-access) (Retrieved: 2026-03-16)

---

## Foundry Control Plane {: .tech-heading }

**Description:** Centralized registry and security posture hub for agents built in Microsoft Foundry. Integrates Azure Policy, Microsoft Defender, and Purview for unified governance.
**Official Docs:** [Foundry Control Plane](https://learn.microsoft.com/en-us/azure/foundry/control-plane/overview)
**Status:** GA (Nov 2025)

**Key Features:**

- **Agent registry:** Inventory agents with RBAC, tenant isolation, and managed identities for each agent app. (Overview - Updated: 2025-11-05)
- **Policy & guardrails:** Apply Azure Policy, Defender for Cloud, and Purview data security policies to agent projects from one pane. (AI security what's new - Updated: 2025-05-19)
- **Observability & remediation:** Security and policy tabs with bulk remediation for misconfigurations, plus hooks for Azure Monitor. (Overview - Updated: 2025-11-05)

**When to use:** Govern Foundry-built agents at scale-register, secure, and monitor agents alongside Azure resource policies.

**Sources:**

- [Foundry Control Plane overview](https://learn.microsoft.com/en-us/azure/foundry/control-plane/overview) (Updated: 2026-02-27)
- [AI security: what's new (Nov 2025)](https://learn.microsoft.com/en-us/security/security-for-ai/whats-new#november-2025) (Updated: 2025-05-19)

---

## Azure AI Search {: .tech-heading }

**Description:** Azure-native search and retrieval platform with vector, hybrid, and agentic retrieval (knowledge bases) for RAG and grounding.
**Official Docs:** [Azure AI Search Documentation](https://learn.microsoft.com/en-us/azure/search/)
**Status:** GA (agentic retrieval has mixed status: selected REST API features GA in `2026-04-01`; portal and newer capabilities remain Preview). A consumption-based **Serverless** tier is in Public Preview alongside the dedicated tiers.

**Key Features:**

- **Serverless (consumption) tier (Public Preview):** Pay only for compute (Compute Units per hour) and indexed storage (per GB per month), with scale-to-zero when idle, alongside the existing dedicated (provisioned) tiers. Ideal for variable, bursty, or unpredictable workloads. Billing is not enabled during preview (Microsoft gives at least 30 days' notice before GA), available in select regions, and tier migration is not supported during preview. Advanced add-ons (semantic ranker, agentic retrieval, image extraction, skill execution) are billed separately. (Azure AI Search Serverless cost optimization - Updated: 2026-06)
- **Agentic retrieval / knowledge bases (mixed status):** Selected programmatic REST API features reached GA in `2026-04-01`, while Foundry portal, Azure portal, answer synthesis, multi-turn retrieval, and newer source types remain Preview. Foundry IQ lets Agent Service agents call knowledge bases through MCP. (Agentic retrieval overview - Updated: 2026-06-02; Foundry IQ overview - Updated: 2026-06-05)
- **Security & governance:** SharePoint indexer ACL flow-through (Preview), sensitivity label enforcement, and confidential computing (GA, +~10% surcharge). (What's new - Updated: 2026-03-13; Sep 2025)
- **Knowledge sources:** Indexed/remote SharePoint, indexed OneLake, and web sources with content extraction powered by Azure AI Content Understanding. (What's new - Updated: 2026-03-13)
- **Ranking & analytics:** Semantic ranker and agentic retrieval available on free tier (limited quotas); scoring function aggregation and facet aggregations for analytics. (What's new - Updated: 2026-03-13)
- **Endpoint flexibility:** Skills/vectorizers accept `services.ai.azure.com` and azure-api.net endpoints for Foundry-hosted models. (What's new - Updated: 2026-03-13)

**When to use:** Enterprise RAG/agentic retrieval with ACL-aware indexing, label-aware enforcement, and integration into Foundry/Agent Service.

**Sources:**

- [What's new in Azure AI Search](https://learn.microsoft.com/en-us/azure/search/whats-new#2025-announcements) (Updated: 2026-03-13)
- [What's new in Azure AI Search (Sep 2025)](https://learn.microsoft.com/en-us/azure/search/whats-new#september-2025) (Updated: 2026-03-13)
- [Optimize costs for Azure AI Search Serverless (Public Preview)](https://learn.microsoft.com/en-us/azure/search/serverless-cost-optimization) (Updated: 2026-06)

---

## Foundry IQ {: .tech-heading }

**Description:** Managed knowledge layer within Microsoft Foundry that provides agents with permission-aware, citation-backed responses grounded in enterprise data. Foundry IQ creates configurable, multi-source knowledge bases that connect to Azure AI Search's agentic retrieval engine via MCP endpoints.
**Official Docs:** [Foundry IQ overview](https://learn.microsoft.com/en-us/azure/foundry/agents/concepts/what-is-foundry-iq)
**Status:** Mixed. Core knowledge source types and the `2026-04-01` REST API are GA; answer synthesis, multi-turn retrieval, non-minimal reasoning effort, portal experience, and additional source types remain Preview. Treat as Preview for production planning unless your workload uses only GA-surface features.

**Key Features:**

- **Knowledge bases as first-class assets:** Group one or more knowledge sources under a single MCP endpoint with configurable retrieval instructions, reasoning effort, and output mode. Multiple agents can share the same knowledge base. (Foundry IQ overview - Retrieved: 2026-03-19)
- **Permission-aware retrieval:** Synchronize ACLs for indexed sources and enforce Microsoft Purview sensitivity labels at query time. Run queries under the caller's Microsoft Entra identity for end-to-end permission enforcement. (Foundry IQ overview - Retrieved: 2026-03-19)
- **Automated document processing:** Auto-chunk documents, generate vector embeddings, extract metadata, and schedule incremental indexer runs for indexed knowledge sources (Azure Blob Storage, SharePoint, OneLake, existing search indexes). (Foundry IQ FAQ - Retrieved: 2026-03-19)
- **Remote knowledge sources:** Query SharePoint via the Copilot Retrieval API and the web via Grounding with Bing without ingesting or storing data. (Foundry IQ FAQ - Retrieved: 2026-03-19)
- **Agentic retrieval engine:** LLM-powered query planning decomposes user queries into subqueries, runs parallel searches across knowledge sources, applies semantic reranking, and returns extractive data with citations. (Foundry IQ overview - Retrieved: 2026-03-19)
- **MCP integration with Foundry Agent Service:** Connect knowledge bases to agents via MCP tool calls. The `knowledge_base_retrieve` tool enables grounded responses in agent conversations. (Connect Foundry IQ to Foundry Agent Service - Retrieved: 2026-03-19)

**Relationship to Microsoft IQ:**

Microsoft provides four IQ capabilities for agent-native systems:
- **Foundry IQ:** Enterprise knowledge (files, blobs, indexes, web). You are here.
- **Work IQ:** Microsoft 365 collaboration context (emails, meetings, chats, documents). **APIs GA 2026-06-16; Work IQ MCP is Preview.** See [Work IQ](#work-iq).
- **Fabric IQ (Preview):** Business analytics: ontologies, graph models, semantic models, and operations agents. Documented as a **Preview Fabric workload** at [`/fabric/iq/`](https://learn.microsoft.com/en-us/fabric/iq/).
- **Web IQ:** Public web context and fresh external information. See [Web IQ](#web-iq-limited-access).

Each IQ capability is standalone, but they can work together to provide comprehensive organizational and external context for agents. **Underneath Foundry IQ sits Azure AI Search.** It is the retrieval engine, still named Azure AI Search, not rebranded.

**When to use:** Custom agents needing governed, permission-aware access to enterprise documents, web content, or SharePoint, with citation-backed responses and ACL enforcement. Pair with Foundry Agent Service for managed agent orchestration.

**When NOT to use:** M365-only knowledge grounding (use Copilot connectors instead); analytics/semantic model queries (use Fabric IQ); simple document retrieval without permission enforcement (use Azure AI Search directly).

**Sources:**

- [Foundry IQ overview](https://learn.microsoft.com/en-us/azure/foundry/agents/concepts/what-is-foundry-iq) (Retrieved: 2026-03-19)
- [Foundry IQ FAQ](https://learn.microsoft.com/en-us/azure/foundry/agents/concepts/foundry-iq-faq) (Retrieved: 2026-03-19)
- [Connect Foundry IQ to Foundry Agent Service](https://learn.microsoft.com/en-us/azure/foundry/agents/how-to/foundry-iq-connect) (Retrieved: 2026-03-19)

---

## Work IQ {: .tech-heading }

**Description:** Document search tells you what a file says. Work IQ tells you *how the work actually happened*: who decided what, in which meeting, and which thread the decision moved to afterwards. It is the intelligence layer that powers Microsoft 365 Copilot, and it can now be called directly by custom agents and apps.
**Official Docs:** [Work IQ overview](https://learn.microsoft.com/en-us/microsoft-365/copilot/extensibility/work-iq/)
**Status:** **Work IQ APIs are GA (2026-06-16)** across four domains: **Chat, Context, Tools, and Workspaces.** Billed in **Copilot Credits**. ⚠️ **Work IQ MCP is a separate, PREVIEW surface.** The Learn page `tooling-servers-overview` is titled *"Work IQ MCP overview (preview)"* and carries a preview banner. Do not conflate the two.

**Key Features:**

- **Four API domains (GA):** **Chat** (conversational reasoning), **Context** (the work graph: people, meetings, files, threads), **Tools** (act across mail, calendar, files, chat, sites), and **Workspaces** (agent-scoped storage backed by **SharePoint Embedded**).
- **Unified endpoint model:** Work IQ can be reached over REST, over A2A, and, via the **Preview** MCP surface, as a remote MCP server consumable from Copilot Studio and other MCP clients.
- **Compact tool surface:** Work IQ MCP **(Preview)** collapses large operation catalogs into a small set of generic tools that retrieve and act across mail, calendar, files, people, chat, and sites.
- **Runtime data discovery:** Agents can discover data structure at runtime through self-describing resource paths instead of relying on brittle, pre-modeled integrations.
- **Dataverse intelligence:** Extends Work IQ to business data understanding. Define reusable business context (semantic models, organizational processes, data schemas) that agents use to understand what your data means, follow your organization's procedures, and read/update Dataverse records reliably. Define it once, use it across all agents. (Dataverse intelligence - Retrieved: 2026-03-19)
- **Enterprise security and governance:** Centralized authorization boundaries, Rego-based policy enforcement, user-scoped execution, auditability, usage analytics, and rate limiting are built into the platform.
- **Work IQ CLI:** Command-line interface and MCP server that bridges AI coding assistants (GitHub Copilot, VS Code, Claude Code) and M365 data. Query emails, meetings, documents, and Teams messages from the terminal. In MCP server mode, your coding assistant automatically pulls relevant workplace context when you're implementing features discussed in recent meetings. (Work IQ CLI - Retrieved: 2026-04-03)

{: .warning }
> **Two constraints that will shape your architecture before you write a line of code.**
>
> 1. **Entra delegated authentication only. App-only authentication is NOT supported.** Work IQ always runs as a person. There is no service-principal path, which means an unattended nightly job with no human principal has no clean way in. Discover this at design time, not at integration time.
> 2. **Access to Work IQ is independent of Microsoft 365 Copilot licensing.** You do not need a Copilot license to call the APIs; you need Copilot Credits. (An earlier version of this reference said a Copilot license was required. It isn't.)

{: .note }
> **A number we are deliberately labeling.** Microsoft's announcement blog cites Work IQ as roughly **2× faster with ~80% fewer tokens**. Those figures come from **Microsoft internal testing reported in a marketing blog**, not from a benchmark you can reproduce or a documented SLO. Treat them as directional marketing, and run your own measurement before you put them in a business case.

**When to use:** Any agent that needs organizational context, not just document retrieval. Work IQ closes the gap between "what the content says" and "how work actually happened" across people, meetings, files, chats, and business systems. Use REST for app integration, A2A for agent collaboration, and the Preview MCP surface for tool-based agent integration, with the preview status priced into the plan.

**When NOT to use:** Unattended, app-only automation with no signed-in user (delegated auth only); enterprise document knowledge outside Microsoft 365 (use Foundry IQ); analytics and semantic-model questions (use Fabric IQ, Preview).

**Sources:**

- [Work IQ overview](https://learn.microsoft.com/en-us/microsoft-365/copilot/extensibility/work-iq/) (Updated: 2026-06-17)
- [Announcing the new Work IQ APIs](https://www.microsoft.com/en-us/microsoft-365/blog/2026/06/02/announcing-the-new-work-iq-apis/) (Published: 2026-06-02)
- [Work IQ MCP overview (preview)](https://learn.microsoft.com/en-us/microsoft-agent-365/tooling-servers-overview) (Updated: 2026-07-14)
- [Work IQ in Copilot Studio](https://learn.microsoft.com/en-us/microsoft-copilot-studio/add-work-iq) (Retrieved: 2026-03-19)
- [Work IQ CLI](https://learn.microsoft.com/en-us/microsoft-365/copilot/extensibility/work-iq/cli) (Retrieved: 2026-03-19)
- [Dataverse intelligence](https://learn.microsoft.com/en-us/power-apps/maker/data-platform/data-platform-intelligence) (Retrieved: 2026-03-19)
- [Built-in MCP servers catalog](https://learn.microsoft.com/en-us/connectors/connector-reference/connector-reference-mcpserver-connectors) (Retrieved: 2026-03-19)

---

## Web IQ (Limited Access) {: .tech-heading }

**Description:** The public web intelligence layer within the Microsoft IQ family. Where Work IQ gives agents organizational context and Foundry IQ gives them enterprise documents, Web IQ gives them fresh public web information. Think of it as the difference between a researcher who only reads internal memos and one who also scans the outside world.
**Official Docs:** [Microsoft IQ](https://learn.microsoft.com/en-us/microsoft-iq/) | [Web IQ product page](https://www.microsoft.com/en-us/WebIQ)
**Status:** Limited Access (enrollment required; no self-service provisioning)

**Key Features:**

- **Web-scale grounding:** Agents use an agent-native web grounding surface for real-time public information.
- **Part of Microsoft IQ:** Web IQ complements Work IQ (organizational context; **APIs GA**, MCP **Preview**), Foundry IQ (enterprise knowledge; mixed GA/Preview), and Fabric IQ (analytics; **Preview**). Together they form the four IQ capabilities under the Microsoft IQ umbrella.

**When to use:** Agents that need current public information -- news, regulations, product specs, research papers -- alongside enterprise data. Pair with Foundry IQ or Work IQ so the agent can cross-reference public facts against internal context.

**When NOT to use:** Scenarios where all required data is internal (use Work IQ or Foundry IQ); analytics workloads (use Fabric IQ); workloads that cannot tolerate Limited Access enrollment gates.

**Sources:**

- [Microsoft IQ documentation](https://learn.microsoft.com/en-us/microsoft-iq/) (Retrieved: 2026-06-08)
- [Web IQ product page](https://www.microsoft.com/en-us/WebIQ) (Retrieved: 2026-06-08)
- [Announcing Microsoft Web IQ](https://blogs.bing.com/search/June-2026/Announcing-Microsoft-Web-IQ) (Published: 2026-06)

---

## Azure AI Content Understanding {: .tech-heading }

**Description:** Multimodal AI service in Foundry Tools that extracts semantic content from documents, images, audio, and video files. Optimized for retrieval-augmented generation (RAG) and automated workflows with prebuilt and custom analyzers.
**Official Docs:** [Azure AI Content Understanding](https://learn.microsoft.com/en-us/azure/ai-services/content-understanding/)
**Status:** GA (API version 2025-11-01; GA SDKs for Python, .NET, Java, JavaScript/TypeScript)

**Key Features:**

- **RAG analyzers:** `prebuilt-documentSearch` (PDF, Office, images with layout preservation), `prebuilt-videoSearch` (visual frames + audio transcription), `prebuilt-audioSearch` (speaker diarization, multilingual), `prebuilt-imageSearch` (visual content descriptions). All return markdown + summaries optimized for search indexing. (Content Understanding what's-new - Retrieved: 2026-03-19)
- **Domain-specific prebuilts:** Finance and tax (invoices, receipts, W-2s, 1099s), identity documents (passports, driver's licenses), procurement and contracts, mortgage and lending, utilities. (Content Understanding prebuilt analyzers - Retrieved: 2026-03-19)
- **Custom analyzers:** Extend base analyzers with custom field schemas, training examples, and configurations for specialized extraction scenarios across all four modalities. (Content Understanding overview - Retrieved: 2026-03-19)
- **Cross-region BYOC:** Bring Your Own Capacity now supports cross-regional model deployments, letting you use any Azure OpenAI deployments regardless of resource or region. (Content Understanding what's-new March 2026 - Retrieved: 2026-03-19)
- **GA SDKs:** Python (`azure-ai-contentunderstanding`), .NET (`Azure.AI.ContentUnderstanding`), Java, and JavaScript/TypeScript, all targeting the 2025-11-01 GA API version with strongly-typed models and Azure SDK design guidelines. (Content Understanding what's-new March 2026 - Retrieved: 2026-03-19)

**Recent Updates (2026):**

- **Mar 2026:** GA SDKs across four languages, cross-region BYOC, larger analyzers for complex documents, nested schema depth raised to 7, RAG analyzers in Discover tab, GPT-4.1-mini model selection in Studio, .txt input support. (Content Understanding what's-new - Retrieved: 2026-03-19)
- **Jan 2026:** Read and Layout models available in Foundry (new) portal without requiring LLM configuration. (Content Understanding what's-new - Retrieved: 2026-03-19)

**When to use:** Multimodal document processing for RAG pipelines, form extraction for finance/tax/procurement, video/audio content indexing for knowledge bases. Pair with Azure AI Search for indexing extracted content into searchable indexes.

**Sources:**

- [What's new in Content Understanding](https://learn.microsoft.com/en-us/azure/ai-services/content-understanding/whats-new) (Retrieved: 2026-03-19)
- [Content Understanding overview](https://learn.microsoft.com/en-us/azure/ai-services/content-understanding/) (Retrieved: 2026-03-19)
- [Prebuilt analyzers](https://learn.microsoft.com/en-us/azure/ai-services/content-understanding/concepts/prebuilt-analyzers) (Retrieved: 2026-03-19)

---

## AI Builder {: .tech-heading }

**Description:** Power Platform AI services for document processing, vision, text analysis, and predictions. Backed by Azure AI Document Intelligence and GPT models. Callable from Copilot Studio agents, Power Automate, and Power Apps.
**Official Docs:** [AI Builder Documentation](https://learn.microsoft.com/en-us/ai-builder/)
**Status:** GA

**Key Features:**

- **Prebuilt + custom AI:** Ship document, vision, prediction, and text models with Power Platform integration across Power Apps, Power Automate, and Copilot Studio. ([AI Builder Documentation](https://learn.microsoft.com/en-us/ai-builder/))
- **GPT document extraction:** General availability delivers prompt-based extraction across any document type without model training (GA: 2025-03-31). ([Extract information from documents with GPT](https://learn.microsoft.com/en-us/power-platform/release-plan/2024wave2/ai-builder/extract-information-documents-gpt) - Updated: 2025-08-07)
- **Azure Document Intelligence fusion:** GA integration surfaces the 4.0 layout/OCR models directly inside AI Builder flows (GA: 2025-04-30). ([Leverage advanced features with Azure Document Intelligence integration](https://learn.microsoft.com/en-us/power-platform/release-plan/2024wave2/ai-builder/leverage-advanced-features-azure-document-intelligence-integration) - Updated: 2025-08-07)
- **Document processing agent:** Managed agent template (preview) orchestrates ingestion, validation station, and Copilot Studio hand-off for documents (Preview: 2025-05-15). ([Enhance document processing efficiency with an agent](https://learn.microsoft.com/en-us/power-platform/release-plan/2025wave1/ai-builder/enhance-operational-efficiency-agent) - Updated: 2025-10-14)
- **Bring-your-own models:** Prompt builder connects securely to custom Microsoft Foundry (Azure) deployments to reuse organization-tuned models (Preview: 2025-05-15, GA target September 2025). ([Use your own generative AI model from Microsoft Foundry in prompt builder](https://learn.microsoft.com/en-us/power-platform/release-plan/2025wave1/ai-builder/use-own-generative-ai-model-azure-ai-foundry-prompt-builder) - Updated: 2025-11-07)

---

### Data & Analytics Platforms {: .no_toc }

## Microsoft Fabric {: .tech-heading }

**Description:** Unified data and analytics platform that provides the "OneLake" foundation for AI. Includes Real-Time Intelligence, Data Engineering, and the new "Fabric Data Agents" for conversational analytics.
**Official Docs:** [Microsoft Fabric Documentation](https://learn.microsoft.com/en-us/fabric/)
**Status:** GA

**Key Features:**

- **Fabric data agent (GA):** Q&A-style conversational agents that retrieve insights from OneLake sources while respecting data access permissions; consumable by Copilot Studio and M365 Copilot. **Generally available.** Note the rename: this capability was previously shipped as the **"AI skill."** Requires **F2+ or P1+ capacity**. It is not an orchestrator. Use Foundry Agent Service or Agent Framework for multi-step coordination.
- **Fabric IQ (Preview):** The semantics layer for the data estate. Fabric IQ is a documented **Preview Fabric workload** that carries **ontologies**, **graph models**, **semantic models**, and **operations agents**: the vocabulary that turns "a table called `CUST_MSTR`" into "a customer." Documented at [`/fabric/iq/`](https://learn.microsoft.com/en-us/fabric/iq/), with its own training path and terminology entry under the parent **Microsoft IQ** docs. (Retrieved: 2026-07-29)
- **Rayfin (Preview):** Open-source SDK and CLI for defining and deploying a managed application backend on Microsoft Fabric. Developers or coding agents can describe databases, business logic, APIs, identity, and access policies in code while app data lands in OneLake under Fabric governance.
- **Cosmos DB in Fabric (Preview):** Deploy Cosmos DB (NoSQL) directly within Fabric for unified operational and analytical data without ETL.
- **OneLake Shortcut Transformations (Preview):** Apply AI transformations (summarize, translate, classify) via Microsoft Foundry (Azure) during data ingestion.
- **Translytical Task Flows (Preview):** Trigger write-back actions and workflows directly from Power BI reports.
- **Digital Twin Builder (Preview):** No-code tool in Real-Time Intelligence to map physical assets to digital twins.

**When to use Rayfin:** Building AI-enabled or analytics-driven applications where the app backend should live close to governed Fabric data. Rayfin belongs in the "AI as a Product or Feature" bucket, and it also matters to "AI for Your Codebase" because coding agents can generate backend definitions that Fabric deploys and governs.

**Sources:**

- [Rayfin product page](https://www.microsoft.com/en-us/microsoft-fabric/features/rayfin) (Retrieved: 2026-06-08)
- [Microsoft Build 2026: Building agentic apps with Microsoft Fabric and Microsoft Databases](https://azure.microsoft.com/en-us/blog/microsoft-build-2026-building-agentic-apps-with-microsoft-fabric-and-microsoft-databases) (Published: 2026-06-02)
- [Fabric IQ documentation (Preview)](https://learn.microsoft.com/en-us/fabric/iq/) (Retrieved: 2026-07-29)
- [Fabric data science documentation (Fabric data agent, GA)](https://learn.microsoft.com/en-us/fabric/data-science/) (Retrieved: 2026-07-29)

---

### Local and Edge AI {: .no_toc }

Not every inference call should travel to the cloud. Latency-sensitive, offline-capable, or data-sovereignty-constrained workloads need models that run where the data lives. Think of cloud AI as the power grid and local AI as a generator: you want the grid for scale, but the generator keeps the lights on when the connection drops.

## Foundry Local {: .tech-heading }

**Description:** A component of Windows AI Foundry that brings Microsoft Foundry (Azure) models and capabilities to local devices (Windows 11, macOS), enabling offline inferencing, low-latency scenarios, and hybrid cloud/edge architectures. Models downloaded once, run locally with the same API surface as cloud Foundry.
**Official Docs:** [Foundry Local overview](https://learn.microsoft.com/en-us/azure/foundry-local/what-is-foundry-local)
**Status:** Availability varies by model and platform. Validate current Learn documentation before production use.

**Key Features:**

- **Cloud-parity API:** Same REST and SDK surface as Microsoft Foundry (Azure), so code migrates between local and cloud with a config change.
- **Hybrid deployment:** Run models locally for latency or compliance, then use cloud Foundry for workloads that need larger models or elastic scale.
- **Model catalog subset:** Supports a curated set of SLMs (Phi family, Mistral, others) optimized for device-class hardware.

## Foundry Local on Azure Local (Preview) {: .tech-heading }

**Description:** Edge deployment option for running selected Foundry Local capabilities in customer-controlled Azure Local environments. It is relevant when the boundary is not just a device, but a branch, lab, factory, or disconnected site.
**Official Docs:** [Foundry Local on Azure Local](https://learn.microsoft.com/en-us/azure/azure-sovereign-clouds/private/foundry-local/overview)
**Status:** Preview

**When to use:** Sovereign, disconnected, or edge workloads where inference must stay in a customer-controlled environment but still needs centralized platform operations. Also relevant for latency-critical inferencing, air-gapped environments, or data residency constraints that prohibit cloud egress.

## Windows AI APIs and Windows ML {: .tech-heading }

**Description:** Platform-level AI primitives built into Windows 11 for on-device inference. Windows AI APIs provide high-level access to system models (text, image, speech) without managing runtimes. Windows ML provides the lower-level ONNX Runtime integration for custom models.
**Official Docs:** [Windows AI overview](https://learn.microsoft.com/en-us/windows/ai/)
**Status:** GA (Windows AI APIs); GA (Windows ML / ONNX Runtime)

**Key Features:**

- **Windows AI APIs:** Pre-built capabilities for text intelligence, image generation, and OCR that run entirely on-device using the system's NPU, GPU, or CPU.
- **Windows ML:** Load and run custom ONNX models on DirectML-accelerated hardware. Useful for specialized vision, NLP, or sensor-fusion models.
- **NPU acceleration:** Both API layers take advantage of Neural Processing Units on Copilot+ PCs for power-efficient inference.

**When to use:** Client-side intelligence in Windows apps (real-time captions, local document summarization, image classification) where round-tripping to a cloud endpoint adds unacceptable latency or cost.

## Microsoft Execution Containers (MXC) (Early Preview) {: .tech-heading }

**Description:** Policy-driven local containment for agent tools and code execution. MXC lets a host describe what an agent can access, then relies on operating-system primitives to enforce those boundaries.
**Official Docs:** [Windows platform security for AI agents](https://blogs.windows.com/windowsdeveloper/2026/06/02/windows-platform-security-for-ai-agents/)
**Status:** Early Preview

**When to use:** Emerging local-agent scenarios where tool execution must be contained on the user's machine. Treat it as a design signal, not a production security boundary, until Microsoft Learn publishes stable guidance.

---

### Developer Tools {: .no_toc }

## GitHub Copilot {: .tech-heading }

**Description:** AI-powered developer platform that has evolved from an in-editor assistant to a suite of autonomous agents and tools for the entire software lifecycle.
**Official Docs:** [GitHub Copilot Documentation](https://docs.github.com/en/copilot)
**Status:** GA (Various features in Preview)

**Key Features:**

- **GitHub Copilot cloud agent (GA):** **Note the name: this was documented as the "coding agent" and has been renamed the "Copilot cloud agent."** It works asynchronously in a GitHub Actions-powered environment to research a repository, create a plan, change one branch, and optionally open one pull request per task. **GA on all paid Copilot plans, including Copilot for Students. It is not available on Copilot Free.** Related capabilities retain their own feature-level statuses. [About GitHub Copilot cloud agent](https://docs.github.com/en/copilot/concepts/agents/cloud-agent/about-cloud-agent)
- **GitHub Copilot app (GA):** Desktop application available for all Copilot plans (macOS, Linux, Windows). Manages parallel isolated sessions in local repositories, worktrees, or cloud sandboxes (**Public Preview**), with Interactive/Plan/Autopilot session modes, model and reasoning selection, issue/PR workflows, diff review, Agent Merge, steering, archiving, and canvases. Governed under **AI Controls → Copilot Clients**. [GitHub Copilot app](https://docs.github.com/en/copilot/concepts/agents/github-copilot-app)
- **GitHub Copilot Modernization:** Solution collection delivered through IDE extensions and the Modernize CLI. IDE language/framework/tool upgrades are **GA** for .NET, Java, and C++; IDE Azure migration is **GA** for .NET and Java; the Modernization agent CLI is **Public Preview**. [Modernization overview](https://learn.microsoft.com/en-us/azure/developer/github-copilot-app-modernization/overview)
- **Copilot Agent Mode (Preview):** "Peer programmer" mode in VS Code that can edit multiple files, run terminal commands, and self-heal errors during development.
- **Custom agents:** Markdown files with YAML frontmatter. Repo-scoped at `.github/agents/NAME.md`; org-scoped at `/agents/NAME.md` in `.github` or `.github-private`; enterprise-scoped in `.github-private`. **GA** for the cloud agent, VS Code, and Visual Studio; **Public Preview** for JetBrains, Eclipse, and Xcode.
- **`AGENTS.md`, "agent instructions" (official):** This is a real, documented GitHub mechanism, not a community convention. It sits alongside `CLAUDE.md` and `GEMINI.md` in a defined precedence order: **below repo-wide instructions, above org instructions.** Carry GitHub's own caveat with it: agent instructions are *"currently not supported by all Copilot features."* Write them, but do not assume universal enforcement.
- **Third-party agents (Public Preview since 2026-02-04):** Only **Anthropic Claude** and **OpenAI Codex** are supported as third-party agents on GitHub. Google Gemini appears as an *engine* in GitHub Agentic Workflows, not as an agent. xAI is a model provider, not an agent.
- **Copilot Workspace:** Natural language environment to plan, build, test, and run code in a cloud-based dev environment. ⚠️ **Status caution:** Copilot Workspace is **not present in current GitHub Copilot documentation**, and we found **no retirement notice either**. That is silence, not a sunset. Silence is not a foundation. Verify directly before designing around it.

#### Where "Agent HQ" actually lives

**A vision is not a SKU.** GitHub announced **Agent HQ** at Universe 2025 as *"GitHub's vision for the next evolution of our platform,"* and it is official, in that framing. It also **appears nowhere in current `docs.github.com/en/copilot`**. If you are writing an architecture document, name the surfaces that actually shipped:

- The **Agents page** at `github.com/copilot/agents`, plus the agents tab/panel in the product. **GA.**
- Enterprise **AI Controls**, with sub-pages for **Agents, Copilot, MCP, and Copilot Clients**. **GA.** This is where policy lives.

Use "Agent HQ" in a keynote recap. Use "Agents page" and "AI Controls" in a design.

#### Copilot Extensions: an explicit sunset with a scope limit

**Deprecated 2025-11-10, and the migration target is MCP servers, not Agent apps.** GitHub published an explicit sunset notice for **GitHub App-based** Copilot Extensions (the DataStax/Sentry/Azure-style ecosystem invoked from chat). The forward path is a **remote MCP server**.

**Read the scope before you rip anything out:** only *GitHub App-based* Extensions were deprecated. **Client-side VS Code Copilot Extensions remain fully supported.** The docs URL 301-redirects rather than 404s, which is exactly the kind of soft signal that lets a stale design survive a review.

**Budget note, GitHub AI credits:** 1 credit = **$0.01**. Copilot **Business** includes **1,900 credits per user per month**; **Enterprise** includes **3,900**. A promotional uplift to **3,000 / 7,000** runs until **2026-09-01**. **Code completions and next-edit suggestions are not billed against credits.** The thing developers use all day is not what moves the invoice; agent runs are.

## GitHub Copilot SDK {: .tech-heading }

**Description:** The moment the coding agent stops being a tool you use and becomes a component you build on. The GitHub Copilot SDK wraps the **Copilot CLI engine over JSON-RPC** and exposes it as a programmable agent runtime: the same harness that drives Copilot, available to your own application.
**Official Docs:** [GitHub Copilot Documentation](https://docs.github.com/en/copilot)
**Status:** **GA.** Bindings for **Python, TypeScript, Go, .NET, Java, and Rust.**

**Key Features:**

- **Six language bindings, two install experiences:** The Copilot CLI is **bundled** for Node, Python, and .NET; for **Go, Java, and Rust it must be installed manually.** Plan your container image accordingly.
- **BYOK model providers:** OpenAI, **Microsoft Foundry** endpoints (the GitHub SDK docs still use the prior name, "Azure AI Foundry"), and Anthropic.
- **Enterprise identity, with a caveat worth reading twice:** **Entra ID and managed identity are supported**, but there is **no built-in Entra provider type**. You compose it yourself via `bearerTokenProvider` with the Azure Identity SDK. It works; it is not a checkbox.

{: .warning }
> **The seam, and the limit you must state before you architect around it.** Microsoft Foundry Agent Service explicitly lists the **GitHub Copilot SDK as a supported framework for Hosted agents**. That is a genuinely powerful join: a developer-loop harness becomes an enterprise-governed agent. **But Foundry Hosted agents support Python and C# only.** The SDK ships six language bindings; Foundry will host two of them. **A Copilot SDK agent written in Go, Rust, Java, or TypeScript is not directly hostable on Foundry Hosted agents.** You would need to reimplement, wrap it behind a service you host yourself on Azure Container Apps or AKS, or pick your language on day one with this constraint in view. Choose the language for the destination, not the demo.

**When to use:** You want the Copilot agent loop (planning, tool use, file edits, shell) inside your own application or service, rather than inside an editor. Pair it with the [Hosted Agent Constraint Card](#the-hosted-agent-constraint-card) before you commit to Foundry hosting.

**Sources:**

- [GitHub Copilot documentation](https://docs.github.com/en/copilot) (Retrieved: 2026-07-29)
- [About GitHub Copilot cloud agent](https://docs.github.com/en/copilot/concepts/agents/cloud-agent/about-cloud-agent) (Retrieved: 2026-07-29)
- [Hosted agents in Microsoft Foundry](https://learn.microsoft.com/en-us/azure/foundry/agents/concepts/hosted-agents) (Retrieved: 2026-07-29)

## GitHub Models {: .tech-heading }

**Description:** Models as a Service (MaaS) platform integrated directly into GitHub, allowing developers to discover, test, and compare models (OpenAI, Meta, Mistral, Microsoft) without leaving their workflow.
**Official Docs:** [GitHub Models Documentation](https://docs.github.com/en/github-models)
**Status:** Preview

**Key Features:**

- **Model Playground:** Interactive hub to test prompts and compare model outputs.
- **Workflow Integration:** Use models directly in PRs, issues, and CI/CD pipelines.
- **Prompt Management:** Create, save, and share prompts across the organization.
- **Evaluation:** Automated tools to evaluate model performance and cost for specific use cases.

## Visual Studio Code {: .tech-heading }

**Description:** The world's most popular code editor, now serving as the primary interface for "Agentic IDE" experiences.
**Official Docs:** [VS Code Documentation](https://code.visualstudio.com/)
**Status:** GA

**Key Features:**

- **Agent Mode:** The UI for autonomous coding agents (see GitHub Copilot).
- **PostgreSQL Extension (Preview):** AI-powered database management with natural language to SQL capabilities.
- **Microsoft Foundry extension:** Build, test, and deploy agents directly from VS Code.

---

## Microsoft 365 Agents SDK & Toolkit {: .tech-heading }

**Description:** Pro-code framework and tooling for multi-channel Microsoft 365 agents. Combines the Agents SDK (C#, JavaScript/TypeScript, Python) with Agents Toolkit extensions for VS Code, Visual Studio, GitHub Copilot, and CLI-based automation. Successor to Bot Framework for custom engine agents.
**Status:** GA (C#, JavaScript/TypeScript, Python)
**Official Docs:** [Create and deploy with M365 Agents SDK](https://learn.microsoft.com/en-us/microsoft-365/copilot/extensibility/create-deploy-agents-sdk) | [M365 Agents Toolkit](https://learn.microsoft.com/en-us/microsoftteams/platform/toolkit/overview-agents-toolkit) | [Bot Framework Migration](https://aka.ms/bfmigrationguidance)

**Key Features:**

- **Channel reach:** Deploy custom engine agents to Microsoft 365 Copilot, Teams (chat, channels, meetings), web, email, SMS, and third-party messaging channels. ([Microsoft 365 Agents Toolkit](https://learn.microsoft.com/en-us/microsoftteams/platform/toolkit/overview-agents-toolkit) - Updated: 2026-01-29)
- **Model + orchestrator choice:** Bring Azure OpenAI, Microsoft Foundry (Azure), Anthropic, or other APIs and pair with Microsoft Agent Framework or alternate orchestrators. ([Create and deploy with Microsoft 365 Agents SDK](https://learn.microsoft.com/en-us/microsoft-365/copilot/extensibility/create-deploy-agents-sdk) - Updated: 2025-12-02)
- **Toolkit formats:** Use VS Code, Visual Studio, GitHub Copilot, or CLI tooling for scaffolding, debugging, publishing, and CI/CD automation. ([Microsoft 365 Agents Toolkit](https://learn.microsoft.com/en-us/microsoftteams/platform/toolkit/overview-agents-toolkit#formats) - Updated: 2026-01-29)
- **Agents Playground:** Local sandbox simulates Teams to iterate without a tenant or tunneling, supporting rapid agent debugging. ([Microsoft 365 Agents Toolkit](https://learn.microsoft.com/en-us/microsoftteams/platform/toolkit/overview-agents-toolkit#build-and-iterate-quickly-with-microsoft-365-agents-playground) - Updated: 2026-01-29)
- **Migration path:** Bot Framework retirement on Dec 31, 2025, routes existing solutions to the Agents SDK + Toolkit stack. ([Bot Framework Migration Guide](https://aka.ms/bfmigrationguidance))

**Recent Updates (2025):**

- **May 19, 2025:** Agents Toolkit added Kiota-powered API plugin generation, enabling visual endpoint selection and easier maintenance. ([Microsoft 365 Copilot release notes - June 24, 2025](https://learn.microsoft.com/en-us/microsoft-365/copilot/release-notes#june-24,-2025) - Retrieved: 2026-03-25)
- **May 2025:** GitHub Copilot extension option introduced for chat-driven scaffolding of Agents Toolkit projects. ([Microsoft 365 Agents Toolkit](https://learn.microsoft.com/en-us/microsoftteams/platform/toolkit/overview-agents-toolkit#formats) - Updated: 2026-01-29)

**Deployment & Hosting:**

- **Bring-your-own hosting:** Deploy Agents SDK workloads to Azure App Service, Azure Container Apps, AKS, or on-premises infrastructure with full control over VNets, private endpoints, and certificates. ([Microsoft 365 Agents Toolkit](https://learn.microsoft.com/en-us/microsoftteams/platform/toolkit/overview-agents-toolkit) - Updated: 2026-01-29)
- **CI/CD automation:** Agents Toolkit CLI supports provisioning, packaging, and publishing inside GitHub or Azure DevOps pipelines. ([Microsoft 365 Agents Toolkit command line interface](https://learn.microsoft.com/en-us/microsoftteams/platform/toolkit/microsoft-365-agents-toolkit-cli) - Retrieved: 2025-05-19)

**When to use:** Migrating Bot Framework bots, building enterprise-grade agents that must span Teams, Copilot, and external channels, or needing full governance over hosting, authentication, and orchestration stack selection.

**Sources:**

- [Microsoft 365 Agents Toolkit](https://learn.microsoft.com/en-us/microsoftteams/platform/toolkit/overview-agents-toolkit) (Updated: 2026-01-29)
- [Create and deploy with Microsoft 365 Agents SDK](https://learn.microsoft.com/en-us/microsoft-365/copilot/extensibility/create-deploy-agents-sdk) (Updated: 2025-12-02)
- [Microsoft 365 Copilot release notes - June 24, 2025](https://learn.microsoft.com/en-us/microsoft-365/copilot/release-notes#june-24,-2025) (Retrieved: 2026-03-25)
- [Microsoft 365 Agents Toolkit command line interface](https://learn.microsoft.com/en-us/microsoftteams/platform/toolkit/microsoft-365-agents-toolkit-cli) (Retrieved: 2025-05-19)
- [Bot Framework Migration Guide](https://aka.ms/bfmigrationguidance)

---

## Agent Governance Toolkit (Public Preview) {: .tech-heading }

Runtime policy and fleet governance are complementary layers. A fleet control plane inventories agents; application middleware can stop unsafe tool calls during execution. Deploy each layer when its responsibility is required.

**Description:** Microsoft-origin, MIT-licensed open-source middleware for runtime agent governance. It is not Microsoft Agent 365, Agent Registry, Foundry Control Plane, or a managed Azure service.
**Status:** **Public Preview** across all formal releases; **zero GA features**
**Release snapshot:** v4.1.0 is the latest formal release (June 9, 2026). Main-branch v5 work is unreleased and must not be treated as a supported version.
**Official Sources:** [Microsoft Open Source announcement](https://opensource.microsoft.com/blog/2026/04/02/introducing-the-agent-governance-toolkit-open-source-runtime-security-for-ai-agents/) | [GitHub repository](https://github.com/microsoft/agent-governance-toolkit) | [Changelog](https://github.com/microsoft/agent-governance-toolkit/blob/main/CHANGELOG.md)

**What it does:** Adds application-layer policy checks, audit hooks, and runtime controls around agent execution. The Agent Control Specification (ACS) policy layer is beta within this Public Preview project.

**What it does not do:** It does not provide a managed service, SLA, Microsoft product support contract, fleet inventory, identity governance, or a guarantee of API stability. Preview APIs and configuration schemas can change; pin a formal release, test upgrades, and own operations like any other OSS middleware.

**When to use:** Add it when a code-owned agent needs in-process enforcement that platform and fleet controls do not provide. Compose it with managed identity, registry, policy, monitoring, and evaluation layers rather than comparing those layers as rivals. See the [layering guide]({{ '/docs/feature-comparison#agent-governance-layering-guide' | relative_url }}).

---

## Microsoft Agent Framework {: .tech-heading }

**Description:** Open-source orchestration SDK for composing agents and workflows with executors, edges, middleware, and reusable patterns across .NET and Python.
**Status:** GA since April 2, 2026 for **Python and C#/.NET**. **Go is Public Preview.** Snapshot as of July 13, 2026: stable .NET 1.13.0 and Python 1.11.0; extensions and integrations can carry independent Preview labels. Microsoft describes Agent Framework as the *"direct successor… next generation of both"* Semantic Kernel and AutoGen, and **no sunset date has been announced for either**, so a migration is a choice, not a deadline.
**Official Docs:** [Microsoft Agent Framework overview](https://learn.microsoft.com/en-us/agent-framework/overview/) | [Workflows overview](https://learn.microsoft.com/en-us/agent-framework/workflows/) | [Workflows - Checkpoints](https://learn.microsoft.com/en-us/agent-framework/workflows/checkpoints)
**Packages:** NuGet: `Microsoft.Agents.AI` (stable 1.13.0 snapshot) | PyPI: `agent-framework` (stable 1.11.0 snapshot)
**GitHub:** [microsoft/agent-framework](https://github.com/microsoft/agent-framework)

**Key Features:**

- **Unified agents + workflows:** Ship LLM-powered agents, MCP integrations, and workflow graphs from a single SDK that merges Semantic Kernel and AutoGen strengths. ([Microsoft Agent Framework overview](https://learn.microsoft.com/en-us/agent-framework/overview/) - Retrieved: 2026-02-20)
- **Orchestration patterns:** Sequential, Concurrent, Handoff, and Magentic orchestrations accelerate multi-agent collaboration without bespoke control logic. ([Workflows orchestrations overview](https://learn.microsoft.com/en-us/agent-framework/workflows/orchestrations/) - Retrieved: 2026-02-13)
- **Type-safe execution + checkpointing:** Executors, edges, and checkpoint services provide deterministic routing, resumability, and human-approval loops. ([Workflow capabilities](https://learn.microsoft.com/en-us/agent-framework/workflows/) - Retrieved: 2026-02-13; [Workflows - Checkpoints](https://learn.microsoft.com/en-us/agent-framework/workflows/checkpoints) - Updated: 2026-03-11)
- **Observability instrumentation:** OpenTelemetry hooks capture workflow spans (`workflow.run`, `message.send`, etc.) via `ENABLE_OTEL` or `setup_observability()`. ([Workflows - Observability](https://learn.microsoft.com/en-us/agent-framework/workflows/observability) - Retrieved: 2026-02-13)
- **Workflows as agents:** Any workflow can be wrapped and exposed through the agent interface, enabling reuse across APIs or UI hosts. ([Workflows - Using workflows as agents](https://learn.microsoft.com/en-us/agent-framework/workflows/as-agents) - Retrieved: 2026-02-13)
- **Agent Skills:** Portable packages of instructions, scripts, and resources that give agents specialized capabilities. Skills use progressive disclosure (advertise ~100 tokens → load &lt;5000 tokens → read resources on demand) to minimize context window usage. ([Agent Skills](https://learn.microsoft.com/en-us/agent-framework/agents/skills) - Retrieved: 2026-03-19)
- **Background responses:** Continuation token mechanism for long-running operations. Agents start processing in the background and return a token for polling or stream resumption. Currently supported by OpenAI Responses API-backed agents. ([Background Responses](https://learn.microsoft.com/en-us/agent-framework/agents/background-responses) - Retrieved: 2026-03-19)
- **Evaluation guidance:** Foundry-hosted evaluation support for Agent Framework agents covering IntentResolution, ToolCallAccuracy, TaskAdherence, Relevance, and Groundedness metrics. **Do not confuse the evaluation metric `TaskAdherence` with the Foundry guardrail control of the same name.** The guardrail is a **Preview** runtime control under [Guardrails and controls](https://learn.microsoft.com/en-us/azure/foundry/guardrails/guardrails-overview), not a GA Content Safety API. ([Agent evaluation checklist](https://learn.microsoft.com/en-us/agents/agent-evaluation/evaluation-checklist) - Retrieved: 2026-03-19)
- **Service Connectors:** First-party connectors for Microsoft Foundry, Azure OpenAI, OpenAI, Anthropic Claude, Amazon Bedrock, Google Gemini, and Ollama. ([Agent Framework v1.0 blog](https://devblogs.microsoft.com/agent-framework/microsoft-agent-framework-version-1-0/) - Published: 2026-04-03)
- **Middleware Hooks:** Intercept, transform, and extend agent behavior (content safety, logging, compliance) without modifying prompts. ([Agent Framework v1.0 blog](https://devblogs.microsoft.com/agent-framework/microsoft-agent-framework-version-1-0/) - Published: 2026-04-03)
- **Agent Memory & Context Providers:** Pluggable memory via Foundry Agent Service Memory, Mem0, Redis, Neo4j, or custom stores. ([Agent Framework v1.0 blog](https://devblogs.microsoft.com/agent-framework/microsoft-agent-framework-version-1-0/) - Published: 2026-04-03)
- **YAML-defined agents and workflows:** Define agents and orchestration topology in version-controlled YAML. ([Agent Framework v1.0 blog](https://devblogs.microsoft.com/agent-framework/microsoft-agent-framework-version-1-0/) - Published: 2026-04-03)
- **MCP support (GA):** Dynamic discovery and invocation of tools via MCP-compliant servers; A2A protocol support coming soon. ([Agent Framework v1.0 blog](https://devblogs.microsoft.com/agent-framework/microsoft-agent-framework-version-1-0/) - Published: 2026-04-03)
- **Migration Assistants:** Automated migration from Semantic Kernel and AutoGen with step-by-step guides. ([Agent Framework v1.0 blog](https://devblogs.microsoft.com/agent-framework/microsoft-agent-framework-version-1-0/) - Published: 2026-04-03)

**Preview Features:**

- **DevUI (Preview):** Browser-based local debugger for agent execution visualization.
- **Foundry Hosted Agent Integration (Preview):** Run Agent Framework agents as managed services on Foundry or Azure Durable Functions.
- **AG-UI / CopilotKit / ChatKit (Preview):** Stream agent output to frontend surfaces.
- **Skills (Preview):** Reusable domain capability packages.
- **GitHub Copilot SDK + Claude Code SDK (Preview):** Use as agent harnesses in orchestrations. **The Preview label belongs to the Agent Framework *integration*, not to the GitHub Copilot SDK itself. That SDK is GA.** See [GitHub Copilot SDK](#github-copilot-sdk).
- **Agent Harness (Preview):** Shell, filesystem, and messaging loop access for coding agents.

**When to use:** Full code-first control over multi-agent orchestration with multi-provider model support, custom middleware, and workflow persistence. Use when Copilot Studio's low-code approach or Foundry Agent Service's managed runtime don't provide enough flexibility.

**Recent Updates (2026):**

- **Apr 2, 2026:** Framework core reached GA for .NET and Python. Treat the framework as a house with rooms: the core can be GA while integrations such as Hosted Agent adapters, AG-UI, Skills, and harnesses remain Preview.

**Sources:**

- [Microsoft Agent Framework v1.0 announcement](https://devblogs.microsoft.com/agent-framework/microsoft-agent-framework-version-1-0/) (Published: 2026-04-03)
- [Agent Framework documentation](https://learn.microsoft.com/en-us/agent-framework/)
- [Agent Framework GitHub](https://github.com/microsoft/agent-framework)

---

### Agent Runtime Alternatives (Preview) {: .no_toc }

Beyond Foundry Agent Service and self-hosted containers, Microsoft has introduced several specialized runtimes for agent workloads. Each trades off isolation, scale model, and operational overhead differently.

| Runtime | Status | What It Does | Best For |
|---------|--------|-------------|----------|
| **Azure Container Apps Sandboxes** | Public Preview | Stateful sandbox groups for isolating agent-generated or user-provided code. | Agents that need persistent but contained execution workspaces |
| **Azure Functions Serverless Agents Runtime** | Preview | Event-driven, consumption-billed hosting for lightweight agents using Functions triggers and stateful orchestration. | Cost-sensitive agents with bursty or event-driven traffic |
| **Azure Connector Namespace** | Public Preview | Managed connector surface that exposes Logic Apps connectors as MCP servers for agent runtimes. | Agents needing enterprise system integration without custom adapters |
| **API Management Unified Model API** | Preview | OpenAI-compatible gateway that routes to multiple model providers behind central policies. | Teams standardizing auth, quotas, model aliases, and governance across providers |

> **Verify before committing:** These runtimes are in Preview with evolving APIs and no production SLA. Check Microsoft Learn for current status before designing production architectures around them.

---

## Technology Selection Quick Guide

| Your Need | Recommended Technology | Why? |
|-----------|------------------------|------|
| End-user productivity (no dev) | Microsoft 365 Copilot | Built-in, tenant-aware, immediate value |
| Custom agents (low-code) | Copilot Studio | Managed platform, fast deployment, governance |
| Custom agents (pro-code) | M365 Agents SDK or Microsoft Foundry (Azure) | Full control, any model, any orchestrator |
| Managed custom-code runtime | [Hosted Agents (mixed maturity)](#the-hosted-agent-constraint-card) | Use only when per-session VM isolation is valuable and the complete constraint card fits; otherwise use Azure Container Apps or AKS |
| Direct agent delegation | Incoming Foundry A2A endpoint (**Preview**) | Lightweight delegation, not deterministic workflow orchestration |
| Enterprise workflow + AI | Azure Logic Apps **agentic workflows** | 1,400+ connectors, MCP server, and an **agent loop** inside a visual workflow. **Status splits by hosting:** Consumption agentic workflows are **explicitly in preview**; Standard carries no preview banner on the agent loop itself, **but Microsoft never states Standard is GA** and specific Standard capabilities (for example, "with an LLM API") *are* marked preview. Check the exact capability you plan to ship. |
| Document processing | AI Builder | Prebuilt models, Power Platform integration |
| Deterministic code-first orchestration | Microsoft Agent Framework (**GA core**) | Checkpointing, type-safe workflows, and explicit multi-agent routing |

**Source for the Logic Apps row:** [Agentic workflows in Azure Logic Apps](https://learn.microsoft.com/en-us/azure/logic-apps/agent-workflows-concepts) (Verified: 2026-07-29). Microsoft states verbatim that *"Consumption agentic workflows capability is in preview and is subject to the Supplemental Terms of Use for Microsoft Azure Previews."* We do not label Standard "GA" because Microsoft does not.

---

## Network Isolation Decision Matrix

| Technology | VNet Support | Private Endpoints | Managed VNet | Disconnected Managed Service? | Best For |
|------------|-------------|-------------------|--------------|-------------------------------|----------|
| **Microsoft Foundry (Azure)** | Documented BYO VNet patterns | Yes, feature-dependent | Preview surfaces exist | **No** | Connected managed workloads needing private network isolation |
| **Foundry Agent Service** | Setup, tool, and agent-type dependent | Supported with prerequisites | Preview surfaces exist | **No** | Managed agent capabilities with validated private-network support |
| **Copilot Studio** | Gateway-based | Via VNet data gateway | No | No | Managed SaaS with governed resource access |
| **M365 Agents SDK** | Inherits customer host | Customer-managed | Inherits customer host | Host-dependent | Custom network control |
| **M365 Copilot** | Service-managed | No customer VNet | No | No | Managed SaaS only |

Private endpoints and no-public-egress controls are not evidence of an air-gapped managed service. Use Foundry Local or Azure Local for separately documented disconnected patterns.

---

## Identity & Permissions Architecture {: .tech-heading }

**Why it matters:** Successful agent deployments hinge on getting identity, authorization, and auditing right. Use this section to align authentication models with the platforms in this guide.

### Implementation Approach {: .no_toc }

1. **Map identity boundaries** for every surface (M365 Copilot, Copilot Studio, Microsoft Foundry (Azure), Agents SDK) so you know which services are inherently user-scoped and which require custom design.[^copilot-privacy][^studio-authentication][^foundry-rbac][^agentsdk-auth]
2. **Choose delegated vs application scopes** early, preferring delegated consent for user-driven actions and reserving service principals for automation that cannot run under a user identity.[^agentsdk-permissions][^graph-permissions]
3. **Configure authentication flows** using the native controls for each platform-Copilot Studio manual auth, Microsoft Foundry (Azure) managed identities, and MSAL providers in the Agents SDK.[^studio-authentication][^foundry-managed-identity][^msal-config]
4. **Enforce least privilege and RBAC** by assigning the minimum Entra ID roles, Graph scopes, and project-level permissions required for the workload; document any elevated service accounts.[^foundry-rbac][^graph-permissions]
5. **Enable centralized auditing** in Microsoft Purview and Dataverse so prompts, responses, and service-account executions are captured for compliance reviews.[^copilot-audit][^studio-audit]

### Identity & Permissions Matrix {: .no_toc }

| Technology | Default Identity Mode | Service Accounts Supported? | Primary Configuration Controls | Audit Surface |
|------------|----------------------|-----------------------------|--------------------------------|---------------|
| **M365 Copilot** | Always runs as the signed-in user | No | Tenant privacy & data access posture | Microsoft Purview audit logs[^copilot-audit] |
| **Copilot Studio** | User or service account depending on authentication setting | Yes (manual auth) | Agent authentication mode + connection references | Microsoft Purview + Dataverse transcripts[^studio-authentication][^studio-audit] |
| **Microsoft Foundry (Azure) / Agent Service** | Configurable (API key, Entra ID, managed identity) | Yes | Azure RBAC assignments + managed identity role bindings | Azure Monitor / Diagnostic logs |
| **M365 Agents SDK** | Developer-defined (delegated, app-only, managed identity) | Yes | MSAL profile configuration + Graph scopes | Custom logging + Purview via channel integration[^msal-config][^agentsdk-permissions] |

### Microsoft 365 Copilot: User-Scoped by Design {: .no_toc }

- Runs entirely under the requesting user's identity and respects existing SharePoint, Exchange, and Teams permissions-"it only sees what you can see" is an architectural guarantee.[^copilot-privacy]
- **Governance note:** Anthropic models (used by Frontier features, WXP Agents, and Copilot Cowork) are excluded from EU Data Boundary and in-country processing commitments. Factor this into compliance assessments for regulated EU workloads.[^copilot-privacy]
- All prompts and responses flow into Microsoft Purview audit logs and activity explorer, enabling retention and eDiscovery without extra configuration.[^copilot-audit]
- Best choice when compliance teams require individual attribution with zero additional setup.

### Copilot Studio: Configurable Delegated or Service Accounts {: .no_toc }

- Makers select **Authenticate with Microsoft** for delegated access (Teams channel only) or **Authenticate manually** to wire up Entra ID, federated credentials, or other OAuth providers.[^studio-authentication]
- Connection references decide whether each action uses the caller's identity or a pre-authorized service account-document every elevated credential and pair destructive flows with approvals.[^studio-authentication]
- Purview auditing of maker and end-user interactions is GA (Jan 2025), and Dataverse conversation tables retain transcripts for 30+ days with configurable retention, giving you a complete audit trail.[^studio-audit]
- Ideal when you need to mix user-scoped reads with selective elevation for enterprise systems (for example, HR ticket creation under a bot account).

### Microsoft Foundry (Azure) & Foundry Agent Service: RBAC + Managed Identity First {: .no_toc }

- Replace static API keys with Microsoft Entra authentication and assign built-in roles (Azure AI User, Azure AI Project Manager, Cognitive Services OpenAI User) to enforce least privilege.[^foundry-rbac]
- Grant the Hosted Agent's dedicated agent identity scoped access to downstream resources; the project managed identity serves platform infrastructure operations and is not the agent's runtime identity.[^foundry-managed-identity]
- Use role assignments and diagnostic logging to trace every inference or tool call back to a user principal or managed identity-required for production-grade workloads.
- Suits pro-code teams that already operate Azure landing zones and need fine-grained control.

### Microsoft 365 Agents SDK: Bring Your Own Authentication {: .no_toc }

- The SDK ships MSAL-based providers that can issue access tokens via delegated consent, client credentials, or managed identities; profiles are defined in configuration, not hard-coded.[^msal-config]
- Pair the SDK with Entra ID app registrations that request only the Graph scopes you need, and use the Admin Center's Permissions tab to review delegated vs application grants.[^agentsdk-permissions][^graph-permissions]
- Implement custom logging (Application Insights, Purview activity events) to record the initiating user, token type, and downstream actions-security teams will expect this evidence.
- Choose this path when you require full control over token exchange, multi-channel adapters, and integration with existing identity middleware.

---

**Next:** [Feature Comparison]({{ '/docs/feature-comparison' | relative_url }}) - Side-by-side capability matrices

---

[^copilot-privacy]: Data, privacy, and security for Microsoft 365 Copilot, Microsoft Learn. Retrieved: 2026-03-09. [https://learn.microsoft.com/en-us/microsoft-365/copilot/microsoft-365-copilot-privacy](https://learn.microsoft.com/en-us/microsoft-365/copilot/microsoft-365-copilot-privacy)
[^copilot-audit]: Microsoft 365 Copilot reporting options for admins, Microsoft Learn. Retrieved: 2025-09-16. [https://learn.microsoft.com/en-us/microsoft-365/copilot/microsoft-365-copilot-reports-for-admins](https://learn.microsoft.com/en-us/microsoft-365/copilot/microsoft-365-copilot-reports-for-admins)
[^studio-authentication]: Configure user authentication in Copilot Studio, Microsoft Learn. Retrieved: 2025-11-25. [https://learn.microsoft.com/en-us/microsoft-copilot-studio/configuration-end-user-authentication](https://learn.microsoft.com/en-us/microsoft-copilot-studio/configuration-end-user-authentication)
[^studio-audit]: Audit Copilot Studio activities in Microsoft Purview, Microsoft Learn. Retrieved: 2026-01-27. [https://learn.microsoft.com/en-us/microsoft-copilot-studio/admin-logging-copilot-studio](https://learn.microsoft.com/en-us/microsoft-copilot-studio/admin-logging-copilot-studio)
[^foundry-rbac]: Role-based access control for Microsoft Foundry (Azure) (hub-focused), Microsoft Learn. Retrieved: 2025-12-31. [https://learn.microsoft.com/en-us/azure/foundry-classic/concepts/hub-rbac-foundry](https://learn.microsoft.com/en-us/azure/foundry-classic/concepts/hub-rbac-foundry)
[^foundry-managed-identity]: Use Foundry Agent Service with OpenAPI Tools (classic) - Authenticate with managed identity (Microsoft Entra ID), Microsoft Learn. Retrieved: 2025-12-22. [https://learn.microsoft.com/en-us/azure/foundry-classic/agents/how-to/tools-classic/openapi-spec#authenticate-with-managed-identity-microsoft-entra-id](https://learn.microsoft.com/en-us/azure/foundry-classic/agents/how-to/tools-classic/openapi-spec#authenticate-with-managed-identity-microsoft-entra-id)
[^agentsdk-auth]: Configure authentication in a .NET agent (Microsoft 365 Agents SDK), Microsoft Learn. Retrieved: 2025-07-17. [https://learn.microsoft.com/en-us/microsoft-365/agents-sdk/configure-authentication-msal](https://learn.microsoft.com/en-us/microsoft-365/agents-sdk/configure-authentication-msal)
[^msal-config]: Configure authentication in a .NET agent (Microsoft 365 Agents SDK), Microsoft Learn. Retrieved: 2025-07-17. [https://learn.microsoft.com/en-us/microsoft-365/agents-sdk/configure-authentication-msal](https://learn.microsoft.com/en-us/microsoft-365/agents-sdk/configure-authentication-msal)
[^agentsdk-permissions]: Manage permissions for Microsoft 365 Copilot agents, Microsoft Learn. Retrieved: 2026-01-23. [https://learn.microsoft.com/en-us/microsoft-365/admin/manage/manage-agents-permissions](https://learn.microsoft.com/en-us/microsoft-365/admin/manage/manage-agents-permissions)
[^graph-permissions]: Overview of Microsoft Graph permissions, Microsoft Learn. Retrieved: 2025-12-26. [https://learn.microsoft.com/en-us/graph/permissions-overview](https://learn.microsoft.com/en-us/graph/permissions-overview)
