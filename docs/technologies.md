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

**Naming update:** Learn states: *"Microsoft 365 Copilot is now named Microsoft Copilot, and Microsoft 365 Copilot Chat is now named Microsoft Copilot Chat."* The work product now shares its name with the consumer Microsoft Copilot app; confirm which experience a source means. ([Requirements](https://learn.microsoft.com/en-us/microsoft-365/copilot/microsoft-copilot-requirements) - Updated: 2026-09-24)

**Key Features:**

- **Tenant-aware AI:** Works across Word, Excel, Teams, Outlook, PowerPoint, and OneNote while inheriting Microsoft Graph security and compliance controls. (Updated Declarative Agents guidance - Retrieved: 2025-12-01)
- **Extensibility options:** Build Declarative Agents with instructions, knowledge, and actions or bring custom engine agents for full orchestration control. (Agents for Microsoft 365 Copilot - Retrieved: 2026-01-07)
- **Unified discovery:** Users can discover and install agents from the in-app store inside Word and PowerPoint, with Excel support in rollout. (Microsoft 365 Copilot release notes - Retrieved: 2026-03-25)
- **Admin governance:** Admins can pre-approve trusted agents and audit usage to streamline tenant-wide deployments. (Microsoft 365 Copilot release notes - Retrieved: 2026-03-25)
- **Grounded knowledge:** Agents can draw from Teams meetings, SharePoint, OneDrive, email, Dataverse, and approved connectors with tenant-scoped security. (Extend Microsoft 365 Copilot with agents - Retrieved: 2025-12-15)
- **Fine-tuning (Copilot Tuning, early access preview):** Lets makers tune agent models on tenant data under admin control. Microsoft documents this as **early access preview**. Treat it as an evaluation capability, not a production dependency. (Microsoft 365 Copilot release notes - Retrieved: 2026-03-25)
- **Copilot Cowork (GA for work/school accounts, 2026-06-16; Preview for personal accounts):** Work measured in hours rather than keystrokes. Delegate a multi-step job and steer its plan at checkpoints. A Microsoft 365 Copilot user subscription license provides access; Copilot Credits pay for usage. The [FAQ](https://learn.microsoft.com/en-us/microsoft-365/copilot/cowork/cowork-faq) meters model responses, tool and skill calls, image generation, and browser tasks. It limits use and access to Anthropic-supported regions, although turning off the Anthropic model family *"doesn't change whether the user can use Cowork"* ([access guidance](https://learn.microsoft.com/en-us/microsoft-365/copilot/cowork/cowork-access)). [Purview's Cowork page](https://learn.microsoft.com/en-us/purview/ai-copilot-cowork) (updated 2026-10-05) now marks data loss prevention as supported (✓): sensitivity-label exclusion and web-search blocking apply to Cowork, while blocking sensitive information types in prompts is in preview ([DLP location reference](https://learn.microsoft.com/en-us/purview/dlp-microsoft365-copilot-location-learn-about)). ([GA announcement](https://www.microsoft.com/en-us/copilot/blog/2026/06/16/copilot-cowork-is-now-generally-available/) - Published: 2026-06-16; Learn checked: 2026-10-14)
- **Cowork model line-up:** Learn lists Auto (default), GPT 5.5 (Frontier), GPT 5.6 Sol, GPT 5.6 Terra, GPT 6 Astra, Opus 5, Claude Sonnet 5, and Claude Fable 5.1. Higher reasoning effort uses more credits. ([Choose a model for Copilot Cowork](https://learn.microsoft.com/en-us/microsoft-365/copilot/cowork/cowork-models) - Updated: 2026-09-14)
- **Cowork App skill (Frontier, preview):** Describe an app in a Cowork session, optionally with connected data sources. It runs on [Copilot Managed Runtime](#copilot-managed-runtime), as documented in the [runtime overview](https://learn.microsoft.com/en-us/microsoft-365/managed-apps/). Learn labels the skill *"a preview feature"* requiring Frontier. Its sharing guidance says *"Anyone with the link can open and use the app, including all its data"*. That conflicts with the runtime FAQ's source-permission rule; review the [sharing limits below](#copilot-managed-runtime) before sharing real data. ([Use Copilot Cowork](https://learn.microsoft.com/en-us/microsoft-365/copilot/cowork/use-cowork) - Updated: 2026-09-14)

{: .warning }
> **"Cowork 1" is an announcement, not a shipping capability.** It has been named publicly but is not documented as available. Do not put it on a delivery plan.

- **Wave 3 multi-model intelligence:** Automatic model routing across OpenAI (GPT-5.2) and Anthropic (Claude) providers. Copilot selects the right model for each task - users choose Quick Response or Think Deeper modes without managing model selection. Claude available in mainline Copilot Chat via Frontier. ([Wave 3 announcement](https://www.microsoft.com/en-us/copilot/blog/2026/03/09/powering-frontier-transformation-with-copilot-and-agents/) - Published: 2026-03-09)
- **Agentic Copilot in apps (GA):** Edit with Copilot in Excel and Word (formerly "Agent Mode") creates, edits, and refines content using app-native tools - formulas, PivotTables, charts, tables. No longer a separate mode; this is core Copilot. PowerPoint and Outlook rolling out through spring 2026. ([Wave 3 announcement](https://www.microsoft.com/en-us/copilot/blog/2026/03/09/powering-frontier-transformation-with-copilot-and-agents/) - Published: 2026-03-09)
- **Researcher agent (GA):** Pre-installed multi-step research agent with connected agent delegation. Admins connect specialized Declarative Agents to Researcher for domain-specific task handoff. ([Microsoft 365 Copilot release notes](https://learn.microsoft.com/en-us/microsoft-365/copilot/release-notes) - Retrieved: 2026-03-25)
- **Multi-agent workflows:** Declarative Agents can connect to other agents for coordinated task completion. Researcher delegates to connected agents; users see inter-agent interaction. ([Microsoft 365 Copilot release notes - Jan 27, 2026](https://learn.microsoft.com/en-us/microsoft-365/copilot/release-notes#january-27-2026) - Retrieved: 2026-03-25)
- **Copilot Memory (Preview):** Persistent personalization across sessions using Graph signals and conversation history. Users control, view, manage, disable, or clear memory at any time. ([Microsoft 365 Copilot release notes - Sep 3, 2025](https://learn.microsoft.com/en-us/microsoft-365/copilot/previous-year-release-notes#september-3-2025) - Retrieved: 2026-03-25)
- **Voice input (GA):** Speak to Copilot across mobile, desktop, and web in M365 apps including Outlook, Word, and PowerPoint. ([Microsoft 365 Copilot release notes - Nov 25, 2025](https://learn.microsoft.com/en-us/microsoft-365/copilot/previous-year-release-notes#november-25-2025) - Retrieved: 2026-03-25)
- **Connector ecosystem expansion:** 20+ new Copilot connectors since Oct 2025 including Coda, GitLab, Bitbucket, Asana, Smartsheet, Monday.com, Jira Data Center, Zendesk, Miro, Dropbox, Google Drive, Amazon S3, Veeva, and more. Explainable AI with inline citations for connector results. ([Microsoft 365 Copilot release notes](https://learn.microsoft.com/en-us/microsoft-365/copilot/release-notes) - Retrieved: 2026-03-25)

#### The new Copilot app (September 2026): read the status column first

Each kind of AI help used to live in its own tool, so anyone who wanted more than a chat answer had to know the product catalog first, and most people stopped at the chat window. The app is built for them. It starts from the task instead (ask, hand off, or describe an app), and Microsoft says apps shared from Code use the same IT-governed foundation as apps built in Cowork and Copilot Studio.

**Read rollout promises as promises.** Jared Spataro's 2026-09-25 Official Microsoft Blog post describes a Copilot app organized around Home, Code, and Autopilot. Several entries below still rest on announcements; Learn also confirms GA for federated Copilot connectors and Fabric IQ in Chat and Cowork.

| Capability | What Microsoft says it is | Status, verbatim | Evidence |
| :--- | :--- | :--- | :--- |
| **Home** | Where *"Chat and Cowork come together in one place"*, with Office in Copilot bringing Word, Excel, and PowerPoint into the same experience | *"will start rolling out in our Frontier program in the coming weeks"* | Official Microsoft Blog post (Spataro) |
| **Code** | Describe an app, tracker, dashboard, automation, or workflow. Copilot builds desktop widgets through cloud-hosted internal apps. It *"runs in a sandboxed environment"* on *"the same underlying technology as GitHub Copilot"* | **Frontier preview on Learn.** Every page in the [Copilot Code docset](https://learn.microsoft.com/en-us/copilot/code/overview) says *"This is a preview feature"* and *"You need to be part of the Frontier preview program to get early access."* An Oct 8 Microsoft blog adds: *"Autopilot in private preview and Code available through the Frontier Program."* | [Copilot Code overview](https://learn.microsoft.com/en-us/copilot/code/overview) (updated 2026-10-14), [requirements](https://learn.microsoft.com/en-us/copilot/code/code-requirements), and [admin controls](https://learn.microsoft.com/en-us/copilot/code/code-admin) (updated 2026-10-06). Requires unified Copilot app opt-in and Beta channel on Windows. The Managed Runtime overview still lists only three entry points (Cowork, Studio, SDK/CLI) as of 2026-10-14 |
| **Autopilot** | Scout, renamed and described as cloud-hosted. See [Autopilot](#autopilot) for the separate Scout and Foundry documentation | *"expanding to private preview at the end of the month"* (Spataro); *"Autopilot in private preview"* ([Oct 8 blog](https://www.microsoft.com/en-us/copilot/blog/2026/10/08/bringing-crm-into-the-flow-of-work-and-agents-into-business-process-for-sales-and-service-teams/)) | Official Microsoft Blog posts. The 13-page Scout Learn docset remains unchanged since 2026-09-01 and does not mention Autopilot |
| **Today** | *"a proactive, personalized command center across mail, calendar, Teams threads, meetings and tasks"* | *"enters private preview in October"* | Official Microsoft Blog post (Spataro); no Learn page as of 2026-10-14 |
| **@Copilot in Teams** | The team gets *"the shared context and permissions of the channel, group chat or meeting"* | *"private preview in Teams by the end of the month"* | Official Microsoft Blog post (Spataro); no Learn page as of 2026-10-14 |
| **Automatic routing** | Copilot sends work to Chat, Cowork, or Code without a manual mode choice | *"coming soon"*. Learn currently documents manual tabs: *"Copilot Code is a separate tab in the Microsoft Copilot app, alongside Chat and Cowork"* | Official Microsoft Blog post (Spataro); [Copilot Code overview](https://learn.microsoft.com/en-us/copilot/code/overview) (updated 2026-10-14) |
| **Plugin registry** | *"one unified catalog"* of Microsoft, partner, and custom plugins combining *"skills, connectors and other capabilities"* | *"Rolling out now and generally available across surfaces in the coming weeks"* (Spataro); Studio support *"rolling out over the coming weeks"* ([Oct 7 Studio blog](https://www.microsoft.com/en-us/copilot/blog/copilot-studio/new-and-improved-build-apps-extend-agents-and-transform-business-processes-in-microsoft-copilot-studio/)) | Learn now documents the plugin catalog and registry in [Manage plugins, skills, and MCP servers](https://learn.microsoft.com/en-us/microsoft-365/admin/manage/manage-plugins-skills-mcp-servers) (updated 2026-09-29); Roadmap 570669 puts Studio shared plugins in Preview Oct, GA Nov 2026 |
| **Skills** | *"Skills help bring specialized expertise directly into the apps, like financial skills in Excel and legal skills in Word"* | PowerPoint custom skills are in the [release notes](https://learn.microsoft.com/en-us/microsoft-365/copilot/release-notes) (Web Sep 23, Windows Oct 6) with no preview banner; Word legal plugins are on Roadmap 571884 | Official Microsoft Blog post (Spataro) and Learn release notes (checked 2026-10-14) |
| **Fabric IQ in Chat and Cowork** | Power BI data answering in Copilot Chat; the Fabric IQ plugin in Cowork | Each is *"a generally available (GA) feature of Microsoft Fabric"* on Learn; the Official Microsoft Blog post adds Code integration *"coming through the Frontier program soon"* | [Chat](https://learn.microsoft.com/en-us/fabric/iq/connectors/microsoft-365-copilot-overview) (updated 2026-09-23) and [Cowork](https://learn.microsoft.com/en-us/fabric/iq/connectors/cowork-overview) (updated 2026-10-08). The workload and ontology remain preview; see [Microsoft Fabric](#microsoft-fabric--tech-heading-) |
| **Dynamics 365 and Power Platform data in Work IQ** | Documented on Learn as **Business Applications in Work IQ**: Copilot grounded in business-application data and workflows | **Public preview.** On by default for new environments from September 30, 2026, and for existing environments starting **November 2026** (EEA/EU at GA; not in GCC/GCC High) | [Business Applications in Work IQ](https://learn.microsoft.com/en-us/power-apps/maker/data-platform/business-applications-work-iq) (updated 2026-10-14) and [default settings](https://learn.microsoft.com/en-us/power-platform/admin/business-applications-work-iq/default-settings) (updated 2026-10-08) |
| **Federated Copilot connectors** | Copilot connectors built on the Model Context Protocol | *"General Availability (GA)"* | [Learn release notes](https://learn.microsoft.com/en-us/microsoft-365/copilot/release-notes), batch dated 2026-09-23 |

The **user subscription license (USL)** covers everyday AI work at a fixed price. **Usage-based billing (UBB)** adds metered advanced AI and frontier models; it does not replace the seat. Learn says UBB experiences *"consume Copilot Credits and require a USL for access"*. Its examples include Cowork, Code, Autopilot, *"new agentic experiences in SharePoint"*, and Astra and Fable, identified on the Cowork model page as OpenAI's GPT 6 Astra and Anthropic's Claude Fable 5.1. The USL usage-limit path is marked *"coming soon"*. ([USL and UBB](https://learn.microsoft.com/en-us/microsoft-365/copilot/user-subscription-license-usage-based-billing) - Updated: 2026-09-25; [pricing announcement](https://techcommunity.microsoft.com/blog/microsoft-copilot-blog/evolution-of-the-copilot-pricing-model/4559416) - Published: 2026-09-25)

For rollout planning, [MC1479277](https://m365admin.handsontek.net/microsoft-copilot-new-ways-work-across-microsoft-copilot-microsoft-365/) says Home will *"roll out to Frontier in October"* and Code is *"rolling out to Frontier later this month"*. [MC1479276](https://m365admin.handsontek.net/microsoft-copilot-evolving-copilot-pricing-model-new-finops-capabilities-ai/) says *"UBB will begin to roll out in Copilot in Q4 CY2026."* These are **Message Center notices via a third-party republisher**, dated 2026-09-25, not tenant-verified notices. Separately, Nicole Dezen's [partner blog](https://partner.microsoft.com/en-us/blog/article/ai-at-work-marketing-moment-sept-2026) says UBB will be enabled by default starting November 2, 2026, for new Microsoft 365 Copilot Business licenses, including bundles, purchased through CSP.

**Recent Updates (2025 to 2026):**

- **Oct 28, 2025:** Static tabs for custom engine agents in Teams meetings and @mention routing for Copilot Chat to target specific agents. (Microsoft 365 Copilot release notes - Retrieved: 2026-03-25)
- **Nov 25, 2025:** Voice input GA across platforms, shared mailbox access in Copilot Chat, audio overview customization for notebooks, file type/people filters in Chat. (Microsoft 365 Copilot release notes - Retrieved: 2026-03-25)
- **Dec 23, 2025:** GPT-5 default model in Copilot Chat with automatic fast/reasoning routing, redesigned navigation pane with expanded chat history, custom agent engine support across Word and Excel, AI Video Creator with transcript editing, .NET/Python/TypeScript client libraries for M365 Copilot APIs. (Microsoft 365 Copilot release notes - Retrieved: 2026-03-25)
- **Jan 13, 2026:** Copilot Library for centralized AI-generated assets, GPT-5 in Agent Builder for Declarative Agents, admin AI disclaimer customization. (Microsoft 365 Copilot release notes - Retrieved: 2026-03-25)
- **Jan 27, 2026:** GPT-5.2 model selector (Quick Response vs Think Deeper), Researcher delegation, Loop-to-PowerPoint generation, and copying Agent Builder agents to Copilot Studio. Foundry-to-Microsoft 365 distribution reached **GA** on Learn in July 2026 and must still be validated per tool and identity path.
- **Feb 24, 2026:** Declarative Agents upgraded to GPT-5.1 with auto-architecture, scoped grounding to specific data sources, embedded knowledge (up to 10 local files), URL-based dialogs to keep users in Copilot, and connector authentication simplification. (Microsoft 365 Copilot release notes - Retrieved: 2026-03-25)
- **Mar 9, 2026 (Wave 3):** Copilot Cowork announced (then a Frontier preview; **subsequently GA worldwide on 2026-06-16**; see the Cowork bullets above for current status). Multi-model intelligence (Claude in mainline Chat via Frontier). Agentic Copilot GA in Excel/Word (formerly Agent Mode). Agents in chat for end-to-end workflows (schedule meetings, draft emails, create docs from conversation). Microsoft 365 E7 announced (blog-stated $99/user/month, GA May 1: M365 Copilot + Agent 365 + Entra Suite + E5 security). Agent 365 GA May 1 (blog-stated $15/user/month). ([Wave 3 blog](https://www.microsoft.com/en-us/copilot/blog/2026/03/09/powering-frontier-transformation-with-copilot-and-agents/) - Published: 2026-03-09)
- **Mar 10-24, 2026:** Context IQ for Teams channels, delegate calendar search, AI skill inferencing for E3/E5 users, Copilot Chat agent recommendations, explainable AI with inline citations for connectors. (Microsoft 365 Copilot release notes - Retrieved: 2026-03-25)

**Network Isolation:**

- **VNet Support:** No custom VNet support
- Fully managed SaaS (no VNet integration available)
- Requires gateway architecture for private on-premises data access
- Inherits M365 tenant network security
- **Ideal for:** Organizations accepting Microsoft-managed SaaS networking model
- **Guidance:** Microsoft recommends using M365 admin controls and security policies to govern agent data access. (Data, privacy, and security considerations - Retrieved: 2025-09-05)

**Licensing ladder, know which rung you are standing on:**

Three rungs, not one SKU. **Microsoft 365 Copilot Chat** needs no add-on and meters agent usage pay-as-you-go. **Microsoft 365 Copilot** is the add-on license. **Microsoft 365 E7** is the top rung, and Microsoft describes it verbatim as: *"Microsoft 365 (E7) includes Microsoft 365 E5, Microsoft 365 Copilot, Microsoft Agent 365, and Microsoft Entra Suite."*

Smaller organizations have their own rungs: **Microsoft 365 Copilot Business** (an SMB add-on), and **Microsoft 365 Business Standard with Copilot** and **Business Premium with Copilot**, announced 2026-05-28 and **GA 2026-07-01**.

Government gets its own top rung. **Microsoft 365 G7** is the government counterpart to E7. The announcement (updated 2026-10-01) says *"Both Microsoft 365 G7 and Agent 365 will be available for GCC customers to purchase beginning October 1, with additional purchasing options available November 1, and capabilities expanding in phases."* Learn's [Agent 365 service description](https://learn.microsoft.com/en-us/office365/servicedescriptions/microsoft-agent-365/microsoft-agent-365) (updated 2026-10-01) adds a per-feature GCC column and notes that as of October 1, 2026, Agent 365 meets all FedRAMP High controls while final authorization by Microsoft's accrediting agency is pending. ([Introducing Microsoft 365 G7](https://www.microsoft.com/en-us/microsoft-cloud/blog/industry-government/government-operations-and-infrastructure/2026/09/15/introducing-microsoft-365-g7-intelligence-trust-for-the-mission-ahead/) - Updated: 2026-10-01)

**When to use:** Broad productivity gains, existing M365 licenses, tenant-aware context, no deep AI expertise required, extend via low-code (Copilot Studio) or pro-code (M365 Agents SDK)

**Sources:**

- [Microsoft 365 Copilot release notes - Oct 28, 2025](https://learn.microsoft.com/en-us/microsoft-365/copilot/previous-year-release-notes#october-28-2025) (Retrieved: 2026-03-25)
- [Microsoft 365 Copilot release notes - Aug 19, 2025](https://learn.microsoft.com/en-us/microsoft-365/copilot/previous-year-release-notes#august-19-2025) (Retrieved: 2026-03-25)
- [Microsoft 365 Copilot release notes - Aug 5, 2025](https://learn.microsoft.com/en-us/microsoft-365/copilot/previous-year-release-notes#august-5-2025) (Retrieved: 2026-03-25)
- [Microsoft 365 Copilot release notes - Jul 8, 2025](https://learn.microsoft.com/en-us/microsoft-365/copilot/previous-year-release-notes#july-8-2025) (Retrieved: 2026-03-25)
- [Agents for Microsoft 365 Copilot](https://learn.microsoft.com/en-us/microsoft-365/copilot/extensibility/agents-overview) (Retrieved: 2026-01-07)
- [Extend Microsoft 365 Copilot with agents](https://learn.microsoft.com/en-us/microsoft-copilot-studio/microsoft-365-copilot-extend-with-agents) (Retrieved: 2025-12-15)
- [Data, privacy, and security considerations for extending Microsoft 365 Copilot](https://learn.microsoft.com/en-us/microsoft-365/copilot/extensibility/data-privacy-security) (Retrieved: 2025-09-05)
- [Wave 3: Powering Frontier Transformation](https://www.microsoft.com/en-us/copilot/blog/2026/03/09/powering-frontier-transformation-with-copilot-and-agents/) (Published: 2026-03-09)
- [Copilot Cowork announcement](https://www.microsoft.com/en-us/copilot/blog/2026/03/09/copilot-cowork-a-new-way-of-getting-work-done/) (Published: 2026-03-09)
- [Microsoft 365 Copilot release notes - Mar 24, 2026](https://learn.microsoft.com/en-us/microsoft-365/copilot/release-notes#march-24-2026) (Retrieved: 2026-03-25)
- [Introducing the new Copilot with Home, Code and Autopilot](https://blogs.microsoft.com/blog/2026/09/25/introducing-the-new-copilot-with-home-code-and-autopilot/) (Published: 2026-09-25)
- [Understanding the user subscription license (USL) and usage-based billing (UBB)](https://learn.microsoft.com/en-us/microsoft-365/copilot/user-subscription-license-usage-based-billing) (Updated: 2026-09-25)
- [Use Copilot Cowork](https://learn.microsoft.com/en-us/microsoft-365/copilot/cowork/use-cowork) (Updated: 2026-09-14)

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
- [Overview of Microsoft Agent 365](https://learn.microsoft.com/en-us/microsoft-agent-365/overview) (Retrieved: 2025-12-15)

---

## Autopilot, formerly Microsoft Scout (Private Preview)
{: .tech-heading #autopilot }

**Description:** A personal agent for work that continues between prompts. Jared Spataro's 2026-09-25 Official Microsoft Blog post calls it *"Autopilot, previously called Scout"* and describes a cloud-hosted agent that *"lives in your tenant with its own identity, memory, computer and workspace"*, reachable by @mention in Teams and Outlook.
**Official Docs:** [Microsoft Scout (Frontier)](https://learn.microsoft.com/en-us/microsoft-scout/) documents the desktop app. [What is an autopilot in Microsoft Foundry?](https://learn.microsoft.com/en-us/azure/foundry/agents/concepts/autopilot-overview) defines a separate use of the term, below.
**Status:** The Official Microsoft Blog post says Autopilot is *"expanding to private preview at the end of the month"* (September 2026). This is not a GA announcement.

#### Scout's prerequisites belong to Scout

**A rename does not transfer deployment requirements.** Learn documents Scout as a desktop AI application for Windows and macOS. Its setup requires Frontier enrollment, Intune configuration and opt-in, a GitHub Copilot Business or Enterprise license, and an active Microsoft 365 Copilot license. These requirements apply to Scout's desktop app. Their applicability to cloud-hosted Autopilot is not established as of 2026-09-25. Confirm Autopilot's deployment requirements before planning a rollout.

**Identity evidence for the product:** The June Scout announcement says *"Every agent operates under its own governed Entra identity, not a shared, anonymous service account"*. That is blog-sourced, as is the September post's *"its own identity"* description of Autopilot. These product-specific claims are not corroborated on the Learn pages checked as of 2026-09-25.

#### Foundry defines an autopilot by identity

Learn defines an autopilot as *"a type of agent that works under its own identity as a persistent, named member of your organization"*. The test is binary: *"An agent either has its own agent user account or it doesn't"*. An Entra agent identity alone is not that account, and autonomy does not define the category. The [Foundry overview](https://learn.microsoft.com/en-us/azure/foundry/agents/concepts/autopilot-overview), updated 2026-08-26, carries no status banner as of 2026-09-25; the [quickstart](https://learn.microsoft.com/en-us/azure/foundry/agents/how-to/agent-365) requires Frontier preview enrollment and a Microsoft Agent 365 Frontier license for each instance.

The Copilot product description and Foundry definition align on having an identity. Microsoft has not stated whether the Copilot app's Autopilot is an instance of the Foundry definition as of 2026-09-25. Do not infer that relationship from the shared name.

**Do not confuse with Windows Autopilot**, the device-provisioning service, or the Autopilot session mode in the GitHub Copilot app.

GeekWire reports that Autopilot *"grew out of Microsoft's experiments with OpenClaw"* and quotes Microsoft Copilot EVP Jacob Andreou: *"The hallmark of an amazing, long-running agent is autonomy and flexibility. That is the same thing that makes them absolutely terrifying to an IT admin."* (press: GeekWire, 2026-09-25).

**When to use:** Controlled exploration of persistent personal agents, with deployment and identity requirements confirmed for the actual product. For delegated tasks that do not need continuous background activity, evaluate Copilot Cowork (GA).

**Sources:**

- [Introducing Microsoft Scout: your always-on personal agent](https://www.microsoft.com/en-us/copilot/blog/2026/06/02/introducing-microsoft-scout-your-always-on-personal-agent/) (Published: 2026-06-02)
- [Introducing the new Copilot with Home, Code and Autopilot](https://blogs.microsoft.com/blog/2026/09/25/introducing-the-new-copilot-with-home-code-and-autopilot/) (Published: 2026-09-25)
- [Microsoft Scout (Frontier) documentation](https://learn.microsoft.com/en-us/microsoft-scout/) (Retrieved: 2026-09-25)
- [Get started with Microsoft Scout](https://learn.microsoft.com/en-us/microsoft-scout/get-started) and [admin access overview](https://learn.microsoft.com/en-us/microsoft-scout/admin-access-overview) (Retrieved: 2026-09-25)
- [Understanding the user subscription license (USL) and usage-based billing (UBB)](https://learn.microsoft.com/en-us/microsoft-365/copilot/user-subscription-license-usage-based-billing) (Updated: 2026-09-25)
- [GeekWire coverage of the new Copilot app](https://www.geekwire.com/2026/microsoft-unveils-all-in-one-copilot-app-taking-on-anthropic-and-openai-in-new-push-to-boost-adoption/) (Published: 2026-09-25; press)

---

## Copilot Studio

{: .tech-heading }
**Description:** Low-code and pro-code authoring environment for building Declarative Agents and custom engine agents with governance, analytics, and multi-channel delivery. Available as a standalone web app and inside Microsoft Teams.
**Official Docs:** [Copilot Studio Documentation](https://learn.microsoft.com/en-us/microsoft-copilot-studio/)
**Implementation Guide:** [aka.ms/CopilotStudioImplementationGuide](https://aka.ms/CopilotStudioImplementationGuide)

**Key Features:**

- **Harnesses: the choice that shapes everything else.** Copilot Studio documents three on its *Harnesses in Copilot Studio* page. The **GitHub Copilot harness** is *"the most capable option, built for reasoning-heavy agents and workflows,"* running on an enhanced orchestration runtime that *"replaces the standard model used in Copilot Studio's standard harness agents."* Learn adds a privacy clarifier: *"This harness is an orchestration runtime built into Copilot Studio, not the GitHub Copilot service. Customer data isn't sent to or processed by the GitHub Copilot service."* The **standard harness** carries the rule-based and generative-orchestration path for well-defined scenarios. The **Copilot chat harness** is the Microsoft Copilot extension path (internal publishing only). ([Harnesses in Copilot Studio](https://learn.microsoft.com/en-us/microsoft-copilot-studio/harnesses-overview) - Updated: 2026-10-01; [Compare Copilot Studio agent harnesses](https://learn.microsoft.com/en-us/microsoft-copilot-studio/guidance/choose-harness))
- **Status: generally available.** Ryan Cunningham, Corporate Vice President for Copilot Studio and Power Platform, announced on **2026-08-03** that *"The GitHub Copilot harness is now Generally Available in Studio,"* corroborated by the [September 2, 2026 Studio blog](https://www.microsoft.com/en-us/copilot/blog/copilot-studio/new-and-improved-github-copilot-harness-agent-skills-and-richer-context/). Learn's harness, billing, and product overview pages carry no preview label. Note that GA of the harness is not GA of everything inside it: **memory**, **apps**, and **hooks** are explicitly labeled preview on their own pages. ([Harnesses in Copilot Studio](https://learn.microsoft.com/en-us/microsoft-copilot-studio/harnesses-overview) - Updated: 2026-10-01)
- **One runtime across several products.** Cunningham describes the harness as *"the same powerful engine behind Copilot Cowork and our most advanced coding agents."* This is the clearest statement yet that Microsoft is reusing one agent runtime across its products rather than building a separate loop for each surface, and it is the reason the harness concept is worth learning once rather than per product.
- **Models are your choice, and availability splits by harness.** The harness-specific [model availability page](https://learn.microsoft.com/en-us/microsoft-copilot-studio/agents-experience/authoring-agent-model-availability) (updated 2026-10-12) lists **GPT-5 Chat**, **GPT-5.5 Chat**, **GPT-6 Astra**, **Claude Sonnet 4.6**, **Claude Opus 4.8**, and **Claude Opus 5** as GA, plus **Claude Sonnet 5** and **Claude Fable 5 / 5.1** as GA (early access environment in US) and **GPT-5.6 Reasoning** and **Mistral Medium 3.5** as Experimental. Several entries carry cross-geo processing notes. The [standard-harness model page](https://learn.microsoft.com/en-us/microsoft-copilot-studio/authoring-select-agent-model) (updated 2026-10-14) does not include Sonnet 5 or Opus 5, so model availability is a direct reason the harness choice matters.
- **Agents do not transfer between harnesses, and the new upgrade tool (preview) creates a copy.** Verbatim: *"Agents created with the GitHub Copilot harness can't be transferred to the standard harness, and vice versa."* On 2026-10-05, Microsoft published [Upgrade agents to the GitHub Copilot harness (preview)](https://learn.microsoft.com/en-us/microsoft-copilot-studio/upgrade-to-github-copilot-from-standard-harness): you ask Copilot Studio in chat to upgrade a standard-harness agent, and it **creates a copy** on the GitHub Copilot harness while leaving the original untouched. It carries instructions, tools, and suggested prompts, and custom topics *"can be rebuilt as skills or workflows."* **Not migrated:** knowledge sources, Power Fx expressions, and child agents. **The upgrade run itself consumes Copilot Credits.** **Skills are the reuse unit within the GitHub Copilot harness**, exportable and importable between agents on that harness, while what carries across all three harnesses is instructions, knowledge sources, and connectors. ([Agents overview](https://learn.microsoft.com/en-us/microsoft-copilot-studio/agents-experience/overview) and [Upgrade agents (preview)](https://learn.microsoft.com/en-us/microsoft-copilot-studio/upgrade-to-github-copilot-from-standard-harness) - Updated: 2026-10-05)
- **Billing differs by harness, and covers more stages than you expect.** Verbatim: *"Usage-based billing applies to using, building, testing, and evaluating agents,"* and *"Unlike the standard harness, which starts billing after publish, the GitHub Copilot harness charges credits from the moment you start building."* Microsoft names the specific experiences that consume credits, including *"previewing and testing the agent, and generating and creating agent evaluations."* Agents on the GitHub Copilot harness use **Copilot Credits** for usage-based billing; standard and Copilot chat harness agents use license-based billing. **Two planning consequences:** budget the build phase rather than only production, and treat evaluation as a funded activity, since the work this framework most encourages is also metered. Because consumption starts at authoring, cost control leans on capacity allocation, spending limits, and environment strategy rather than on approval gates at publish. ([Billing overview](https://learn.microsoft.com/en-us/microsoft-copilot-studio/agents-experience/billing-credit-overview) - Updated: 2026-08-03)
- **Native file production.** The GitHub Copilot harness *"natively creates and edits Word, Excel, PowerPoint, and PDF files,"* and *"runs each task in a secure sandbox governed by Copilot Studio."* This is the capability that turns an agent from something that answers into something that delivers an artifact. ([Choose a harness](https://learn.microsoft.com/en-us/microsoft-copilot-studio/harnesses-overview) - Updated: 2026-08-03)
- **Apps (preview): the harness that writes files now writes software.** Describe the need, refine an interactive preview, then publish and share. Learn says: *"Microsoft is gradually rolling out apps in Copilot Studio (Preview). This feature might not be available in your environment yet."* Apps run on [Copilot Managed Runtime](#copilot-managed-runtime), and data access uses the signed-in user's permissions. App creation is on by default; admins can turn it off. The [FAQ](https://learn.microsoft.com/en-us/microsoft-copilot-studio/faq-apps) makes the editing boundary explicit: *"The code view is read-only. Makers make changes by describing what they want Copilot to update."* The GitHub Copilot harness bills *"from the moment you start building"*, including testing, rather than only after publication. How an app calls an agent or agent flow is not described on these pages as of 2026-09-25. ([Apps overview (preview)](https://learn.microsoft.com/en-us/microsoft-copilot-studio/apps-experience/apps-overview) - Updated: 2026-09-26; [billing overview](https://learn.microsoft.com/en-us/microsoft-copilot-studio/agents-experience/billing-credit-overview))
- **Skills and Hooks (GitHub Copilot harness):** Skills are modular, on-demand instruction sets. Learn documents a skill package as a ZIP containing *"A SKILL.md file containing YAML front matter (name, description) and Markdown instructions"* plus optional supporting files such as scripts. The skills page dropped its preview label on 2026-08-03. Because a skill is Markdown and files rather than a proprietary artifact, it exports and imports cleanly **between agents on this harness**. Learn also introduced **Hooks (preview)** ([hooks overview](https://learn.microsoft.com/en-us/microsoft-copilot-studio/agents-experience/hooks-overview) - Updated: 2026-09-29) for deterministic lifecycle interception on the harness. **Disambiguation:** these are not the older Bot Framework "skills," which were callable services. ([Skills overview](https://learn.microsoft.com/en-us/microsoft-copilot-studio/agents-experience/skills-overview) - Updated: 2026-10-12)
- **Work IQ and Foundry IQ connectivity:** Ground agents with Microsoft 365 organizational context (emails, calendar, files, chats, people) and optionally connect to a Microsoft Foundry knowledge base. Learn states that **Work IQ** in Copilot Studio is a preview feature and is *"read only unless an administrator explicitly turns on write operations in the Microsoft 365 admin center."* ([Work IQ in Copilot Studio](https://learn.microsoft.com/en-us/microsoft-copilot-studio/agents-experience/add-work-iq) - Updated: 2026-10-12). For **Foundry IQ**, the [October 7, 2026 Studio blog](https://www.microsoft.com/en-us/copilot/blog/copilot-studio/new-and-improved-build-apps-extend-agents-and-transform-business-processes-in-microsoft-copilot-studio/) announces that *"The Foundry IQ integration with Copilot Studio is now generally available,"* and the [connect article](https://learn.microsoft.com/en-us/microsoft-copilot-studio/agents-experience/foundry-iq-connect) carries no preview banner, though the What's New table (updated 2026-10-06) still carries a `(Preview)` tag on its August/June rows.
- **Connected agents on the GitHub Copilot harness now span four target types (Preview):** On **2026-10-14**, Learn updated [Connected agents overview](https://learn.microsoft.com/en-us/microsoft-copilot-studio/agents-experience/authoring-add-other-agents) to state: *"you can connect other agents built in Copilot Studio, agents hosted in Microsoft Foundry, remote agents available over the Agent2Agent (A2A) protocol, and agents built with the Microsoft 365 Agents SDK."* Dedicated how-to pages cover [Foundry](https://learn.microsoft.com/en-us/microsoft-copilot-studio/agents-experience/add-agent-foundry) (requires the Activity protocol enabled with `Foundry-Features: AgentEndpoints=V1Preview`), [A2A](https://learn.microsoft.com/en-us/microsoft-copilot-studio/agents-experience/add-agent-to-agent), and [M365 Agents SDK](https://learn.microsoft.com/en-us/microsoft-copilot-studio/agents-experience/add-agent-m-365-sdk). The What's New feed and the September 2 blog still label connected agents as **Preview**, and a separate [MCP and A2A publication channel (preview)](https://learn.microsoft.com/en-us/microsoft-copilot-studio/agents-experience/publication-channels-mcp-agent-to-agent) (updated 2026-10-14, early-release environments only) exposes a Studio agent inbound as an MCP server or A2A agent.
- **Agent sandbox:** An execution environment where the agent writes and runs code to do the work models are bad at, such as exact arithmetic and building files byte for byte. Two properties matter for governance. **There is no outbound network path:** per the CAT team, *"Code running there cannot call an API, send an email, or write a file to SharePoint, no matter what it imports."* External access happens only through configured tools and knowledge, so *"everything the agent does externally stays within your governance controls and data policies."* And **it is temporary**: a file the agent produces must be delivered somewhere durable in the same turn, because it will not be there later, and agent memory persists facts rather than files. (CAT team blog, *The New Copilot Studio Agent Sandbox*, 2026-07-20)
- **Workflows:** A visual canvas for automated processes on the GitHub Copilot harness with explicit control over which steps are handled by AI and which run deterministically. The [Workflows overview](https://learn.microsoft.com/en-us/microsoft-copilot-studio/workflows-experience/flows-overview) (updated 2026-10-12) carries no preview banner (removed 2026-08-03), while specific nodes such as adding a Copilot node to run Copilot Chat or a Cowork task remain labeled Preview. If you need a process to run the same way every time, this is the surface to evaluate rather than agent instructions.
- **Generative orchestration (GA):** The reasoning engine that decides which topics, tools, and knowledge to invoke **within the standard harness**. It is **GA and the default for new standard-harness agents**, with classic orchestration remaining for deterministic topic routing. Note the three-way distinction: classic orchestration and generative orchestration are modes *inside* the standard harness; the enhanced orchestration runtime belongs to the GitHub Copilot harness.
- **Memory (preview), with three constraints that change designs.** Persists per-user context across conversations. Learn documents that the system **deletes a user's memories after 28 days of inactivity**, that memories are **private to that user and not visible to the maker**, and that memory is **disabled in group chats and Microsoft Teams channels**. That last one is the trap: an agent designed around remembered preferences will silently lose them in exactly the collaborative surface most enterprises deploy to. ([Memory overview](https://learn.microsoft.com/en-us/microsoft-copilot-studio/agents-experience/memory-overview) - Updated: 2026-10-12)
- **Computer use automation (GA, May 2026):** Agents can automate web and desktop apps with governance controls, and standalone computer-use tools can be reused across agents and flows (Preview).
- **Agent-to-agent orchestration (A2A GA on standard harness, April 2026):** Outbound A2A on the standard harness is GA. The What's New page separately lists **"Connect other agents (Preview)"**, and the classic connected-agent page marks Foundry, Fabric data agent, and M365 Agents SDK connections as public preview.
- **Misattributed Microsoft Copilot features (do not look for these in Studio docs):** **Scheduled prompts** ([scheduled prompts](https://learn.microsoft.com/en-us/microsoft-365/copilot/scheduled-prompts) - Updated: 2026-09-01, no preview banner) and **Copilot Tuning** ([Copilot Tuning overview (early access preview)](https://learn.microsoft.com/en-us/microsoft-365/copilot/copilot-tuning-overview) - Updated: 2026-08-18) are documented under Microsoft Copilot (M365), not Copilot Studio.
- **Workflow resilience:** Asynchronous responses allow long-running agent flows to complete beyond the prior two-minute synchronous window.
- **Voice agent expansion:** Real-time voice agents ([voice overview](https://learn.microsoft.com/en-us/microsoft-copilot-studio/voice-realtime-voice-agents) - Updated: 2026-08-03; digital messaging channels are in preview) and [Teams Phone Agent integration (preview)](https://learn.microsoft.com/en-us/microsoft-copilot-studio/voice-teams-phone-agent) (updated 2026-08-18; gated, basic voice agents only) support calling scenarios.
- **Governance and operations:** Agent inventory schema, Agent 365 onboarding, readiness status views (Preview), and per-agent Entra Agent IDs strengthen enterprise governance and troubleshooting.
- **Evaluation maturity:** Agent evaluations are GA, with multi-turn tests, content-safety test methods (September 2026), and REST API automation (Preview) for CI/CD-aligned quality gates.
- **Channel reach and extensibility:** Publish to Microsoft 365 Copilot, Teams, web, and channels such as WhatsApp, while integrating external tools through MCP. (What's new in Copilot Studio - Updated: 2026-10-06)

**Terminology:** Microsoft's guidance calls these *"inline agents, also known as child agents."* Use both names when you search the docs; the same construct is indexed under each.

**Recent Updates (2025 to 2026):**

- **Oct 2026:** Connected agents on the GitHub Copilot harness expanded to support Studio, Foundry, A2A, and M365 Agents SDK agents (2026-10-14); the harness upgrade tool (`upgrade-to-github-copilot-from-standard-harness`, preview) and inbound MCP/A2A publication channel (preview) published; the October 7 blog announced GA for the Foundry IQ integration in Copilot Studio and public preview for Apps and Copilot Managed Runtime.
- **Sep 2026:** *What's new* added September and August 2026 sections (updated 2026-10-06): Extract node and Copilot node (preview) in workflows, model dropdown for GitHub Copilot harness agents, content-safety evaluation method, file attachments (GA), Dataverse tables as knowledge, and Hooks (preview). Apps (preview) began rolling out on the GitHub Copilot harness, hosted by [Copilot Managed Runtime](#copilot-managed-runtime) (preview).
- **Aug 2026:** The **GitHub Copilot harness** was announced generally available in Copilot Studio by Ryan Cunningham, Corporate Vice President for Copilot Studio and Power Platform (2026-08-03), alongside the *Choose a harness* documentation naming three harnesses. Learn's harness, billing, and overview pages were redeployed the same day without preview labels.
- **Jun 2026:** The rebuilt agent experience, Microsoft IQ integration, reusable skills, and memory capabilities were introduced; Windows 365 for Agents MCP server reached GA; Foundry IQ and specialist-agent connections entered preview. (What's new in Copilot Studio - Updated: 2026-07-15)
- **May 2026:** Computer use reached GA; asynchronous responses for long-running flows, M365 Copilot workflow nodes, and consent-based recording expanded enterprise automation and voice patterns. (What's new in Copilot Studio - Updated: 2026-07-15)
- **Apr 2026:** A2A became GA, while real-time voice agents, automated evaluations via REST API, and custom analytics metrics advanced testing and operations. (What's new in Copilot Studio - Updated: 2026-07-15)
- **Mar 2026:** Agent evaluations became GA with multi-turn test support; Work IQ integration (Preview) and expanded model availability accelerated grounded enterprise agents. (What's new in Copilot Studio - Updated: 2026-07-15)
- **Oct-Nov 2025:** MCP tooling, GPT-5 rollout milestones, SharePoint retrieval improvements, connected agents, and request-for-information workflow actions established the foundation for 2026 orchestration features. (What's new in Copilot Studio - Updated: 2026-07-15)
- **Roadmap signal:** Planned features continue through the Power Platform Release Planner, with delivery timing subject to Microsoft release-plan policy. (Power Platform release plan overview - Updated: 2026-07-02)

{: .warning }
> **A GA harness is not a blanket GA label.** App creation remains preview and is rolling out gradually. Check the feature's own documentation before making it a production dependency.

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
- [Work IQ MCP in Copilot Studio (Preview)](https://learn.microsoft.com/en-us/microsoft-copilot-studio/agents-experience/add-work-iq) (Updated: 2026-03-11)
- [VS Code extension for Copilot Studio](https://learn.microsoft.com/en-us/microsoft-copilot-studio/visual-studio-code-extension-overview) (GA: 2026-01-01)
- [Copilot Studio Kit](https://learn.microsoft.com/en-us/microsoft-copilot-studio/guidance/kit-overview) (Retrieved: 2026-03-25)
- [Get started with Copilot Studio for Teams](https://learn.microsoft.com/en-us/microsoft-copilot-studio/fundamentals-get-started-teams) (Retrieved: 2026-07-29)
- [Apps overview (preview)](https://learn.microsoft.com/en-us/microsoft-copilot-studio/apps-experience/apps-overview) (Updated: 2026-09-26)

---

## Copilot Managed Runtime (Preview)
{: .tech-heading #copilot-managed-runtime }

**Description:** A shared, Microsoft-operated host for internal apps. Business users can describe an app in Copilot Cowork (Frontier) or Copilot Studio (rolling out); developers can build one with the SDK and CLI. Copilot Code is another announced build path, with differing rollout statements in the [new Copilot app table](#the-new-copilot-app-september-2026-read-the-status-column-first). These apps run inside the Microsoft 365 tenant under IT governance.
**Official Docs:** [What is Copilot Managed Runtime (preview)](https://learn.microsoft.com/en-us/microsoft-365/managed-apps/) | [SDK overview (preview)](https://learn.microsoft.com/en-us/microsoft-365/managed-apps/developer/)
**Status:** Learn says *"This is a preview feature"*; the announcement says *"public preview"*. The September 2026 [Copilot Credits Guide](https://go.microsoft.com/fwlink/?linkid=2368800) labels it *"Microsoft Copilot Managed Runtime (Paid Public Preview)"* and Studio apps *"Apps in Microsoft Copilot Studio (Paid Public Preview)"*. Cowork apps are labeled *"Apps in Copilot Cowork (Microsoft Frontier Program)"*.

**Key Features:**

- **Build paths and defaults.** Learn names Cowork for business users who want to describe an app in a chat and keep working, Copilot Studio for makers who want more control over the build, preview, and publish steps, and the SDK and CLI for professional developers who want a code-first workflow. Cowork app creation is on through Frontier onboarding, not the tenant switch; Copilot Studio app creation is on by default; the CLI path is off by default. All three *"produce the same kind of artifact"*. Users find their apps at `managedapps.cloud.microsoft`.
- **Developer tooling.** The SDK is `@microsoft/managed-apps`; the CLI is `@microsoft/managed-apps-cli`, invoked as `ms`. A GitHub Copilot plugin (`/plugin marketplace add microsoft/Managed-Apps`, then `/plugin install microsoft-managed-apps@Managed-Apps`) *"also works with Claude Code and other coding agents through Open Plugins."* Third-party builders can target the host as well, with Lovable as the named example. The shape is fixed: *"A TypeScript or JavaScript single-page application (SPA) is a prerequisite for using apps."*
- **Git is the source of truth.** The SDK overview says *"The CLI doesn't replace Git."* Each app gets a platform-managed repository by default, or you bind a GitHub.com or GitHub Enterprise Cloud repository at creation. That choice cannot be changed later; public repositories are disallowed by default. The announcement's Cowork example shows a developer continuing *"without forking or standing up a separate runtime, platform resources, and governance stack"*. That is a blog example, not a documented handoff for every builder. Power Apps vibe conversion creates a fork instead (see [Power Apps Plan Designer](#power-apps-plan-designer)).
- **Power Platform underneath.** Environment routing is automatically enabled and cannot be turned off. Makers land in personal developer environments, which are managed environments. Learn says *"Environments created for Copilot Managed Runtime don't have Dataverse"*. The SDK overview specifies availability for all eligible tenants in commercial cloud.
- **Governance is conditional.** Entra sign-in, per-app Content Security Policy, and environment-group sharing limits are built in. In an existing environment group, an Advanced Connector Policy (ACP) and applicable data policies are both enforced when *Advanced connector policies only* is off; the most restrictive result applies. When that setting is on, data policies are ignored. Without an ACP, that leaves connectors unrestricted by either policy type. Check the effective policies in the Power Platform admin center.
- **The connector catalog is not the default allow list.** The default environment group includes 18 Microsoft first-party connectors using Entra ID and 12 Microsoft MCP servers, including Work IQ MCP servers (Preview). Admins can widen access toward the 1,500+ connectors the SDK can call. Third-party and custom connectors are excluded by default.
- **Build billing.** Cowork requires a Microsoft Copilot license, but the subscription does not include Cowork usage; creation consumes Copilot Credits through the creator's spending policy. Studio app creation is billed per environment in the Power Platform admin center. Its GitHub Copilot harness bills *"from the moment you start building"*, including testing, not only after publication.
- **Runtime entitlement.** Users need Copilot Credits or Power Apps Premium, not a Microsoft 365 Copilot license. Runtime credit policies are per user in the Microsoft 365 admin center, including for Studio-built apps. Credits are charged per launch and per API call; each API call consumes 0.1 credits. Power Apps Premium avoids those runtime credits except for separately billed services such as Work IQ APIs or usage beyond its API request limits. Runtime licensing also applies to developers running locally. During preview, unmet credit requirements lead to a warning, then blocking after 20 app operations or five minutes, whichever comes first.
- **Cost management has two names in the sources.** Learn's runtime FAQ sends admins to Microsoft 365 admin center > Copilot > Cost management to *"configure spending policies for managed applications"*. The FinOps blog calls it *"cost management in Agent 365"* and says it *"now supports Code and Copilot Managed Runtime"*. Use the Learn location; the blog's naming is not the documented navigation.
- **Billing coverage is documented across the updated UBB pages.** The [UBB overview](https://learn.microsoft.com/en-us/microsoft-365/copilot/usage-based-billing-overview-copilot-credits) (updated 2026-10-14) now lists Cowork, Advanced work in SharePoint, Advanced work in OneDrive, Work IQ API for custom apps and agents, **Copilot Managed Runtime**, Teams Phone Agent, and **Code (Copilot license required)**. The [setup page](https://learn.microsoft.com/en-us/microsoft-365/copilot/usage-based-billing-copilot-credits-setup) (updated 2026-10-13) confirms that P3 is layered on top of pay-as-you-go, that Agent P3 credits are consumed before overage, and that the admin center currently displays only the Copilot Credit P3 balance.

**Limits to check before sharing:**

- **Code changes are not audited.** Purview audits lifecycle events such as launch, creation, build, deploy, and deletion, but the security page lists *"Git push / code change"* as *"Not audited"*.
- **An inventory is not an access audit.** Apps > All apps provides a centralized, real-time inventory with usage, health, and compliance state. Its Data & tools view *"doesn't provide a complete view of exact destinations, dynamically resolved endpoints, actions that the app executed, or each user's permissions to the underlying data"*. Revoking app access does not remove all underlying data permissions in one operation.
- **Sharing has three descriptions on Learn.** Cowork says *"Anyone with the link can open and use the app, including all its data"*. The runtime FAQ says sharing *"doesn't grant access to the app's underlying data"*. The Studio FAQ says *"Sharing an app might not automatically share its underlying data."* Cowork also describes recipients as people *"who can use Microsoft 365 Copilot"*, unlike the runtime FAQ's license rule above. These pages do not explain the differences as of 2026-09-25. Before sharing real data, test app data and connected data separately with an account that lacks source access.
- **Not stated as of 2026-09-25:** specific regions, sovereign-cloud or GCC availability beyond the SDK's commercial-cloud statement; the underlying Azure service; a chooser between this host and Power Apps code apps; what becomes of the Microsoft 365 Copilot App Builder agent. Learn does provide persona guidance among Cowork, Studio, and the SDK. Power Apps vibe's overview separately recommends Cowork and Studio app building *"moving forward"*.

**When to use:** Controlled pilots for internal line-of-business apps. This is a governed host, not a completed governance review. Copilot Studio's apps overview warns: *"Preview features aren't meant for production use and might have restricted functionality."*

Name an owner before sharing. The business owner validates rules and results; a developer or platform reviewer covers risks the owner cannot assess. The Studio FAQ calls for testing calculations, sample data, links, permissions, connections, accessibility, and error handling. For business-critical scenarios, retain normal *"design, security, accessibility, compliance, testing, and release processes"*. A few known-answer tests do not replace that review.

**Sources:**

- [What is Copilot Managed Runtime (preview)](https://learn.microsoft.com/en-us/microsoft-365/managed-apps/) (Updated: 2026-09-25)
- [Copilot Managed Runtime SDK overview (preview)](https://learn.microsoft.com/en-us/microsoft-365/managed-apps/developer/) (Updated: 2026-09-25)
- [Copilot Managed Runtime admin overview (preview)](https://learn.microsoft.com/en-us/microsoft-365/admin/manage/apps/) (Updated: 2026-09-25)
- [Copilot Managed Runtime architecture (preview)](https://learn.microsoft.com/en-us/microsoft-365/managed-apps/developer/architecture) (Updated: 2026-09-25)
- [Quickstart: Build a Microsoft Copilot Managed Runtime app with GitHub Copilot (preview)](https://learn.microsoft.com/en-us/microsoft-365/managed-apps/developer/quickstart-github-copilot) (Updated: 2026-09-25)
- [Copilot Managed Runtime default governance settings (preview)](https://learn.microsoft.com/en-us/microsoft-365/admin/manage/apps/governance) (Updated: 2026-09-25)
- [Manage security and compliance for Copilot Managed Runtime (preview)](https://learn.microsoft.com/en-us/microsoft-365/admin/manage/apps/security-compliance) (Updated: 2026-09-25)
- [FAQ about Copilot Managed Runtime (preview)](https://learn.microsoft.com/en-us/microsoft-365/admin/manage/apps/faq-about-apps) (Updated: 2026-09-25)
- [Copilot Studio apps FAQ](https://learn.microsoft.com/en-us/microsoft-copilot-studio/faq-apps) (Checked: 2026-09-25)
- [Environment routing for Copilot Managed Runtime](https://learn.microsoft.com/en-us/power-platform/admin/default-environment-routing-copilot-managed-runtime) (Updated: 2026-09-25)
- [Build where you want, run with confidence](https://www.microsoft.com/en-us/copilot/blog/copilot-studio/build-where-you-want-run-with-confidence-now-microsoft-hosts-and-manages-the-code-created-by-copilot/) (Published: 2026-09-25)
- [New FinOps for AI capabilities](https://techcommunity.microsoft.com/blog/ai-finops-blog/new-finops-for-ai-capabilities-control-spend-measure-value-and-optimize-for-impa/4559660) (Published: 2026-09-25)

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

**Neighbors on the Power Platform (September 2026):**

- **Power Apps vibe (preview):** Power Platform's natural-language app builder is limited to non-default environments in the US, Australia, Asia, and India, and to English. Its overview recommends app building in Cowork and Copilot Studio: *"We recommend using these experiences moving forward."* Conversion has a separate ownership consequence: *"Converting a vibe app creates a new code app. The code app is disconnected from the original plan."* Compare that fork with the blog's same-repository Cowork example on [Copilot Managed Runtime](#copilot-managed-runtime) before planning a handoff. ([Overview (preview)](https://learn.microsoft.com/en-us/power-apps/vibe/overview) - Updated: 2026-09-08; [conversion](https://learn.microsoft.com/en-us/power-apps/vibe/convert-vibe-to-code) - Updated: 2026-09-04)
- **Power Apps code apps:** Code-first business web apps using React, Vue, or other frameworks, with Entra sign-in, 1,500+ connectors callable from JavaScript, Power Platform hosting, and managed platform policies. End users need Power Apps Premium or another listed option: pay-as-you-go, an App Pass, or auto-claim. The [official GitHub README (`microsoft/PowerAppsCodeApps`)](https://github.com/microsoft/PowerAppsCodeApps) states *"Code apps are generally available"*, while the [Learn overview](https://learn.microsoft.com/en-us/power-apps/developer/code-apps/overview) (updated 2026-09-24) states no release status on the page. The checked pages do not provide a chooser between this host and Copilot Managed Runtime as of 2026-10-14. Evaluate the data model, effective controls, and support owner for your app.
- **AI-assisted canvas and model-driven building:** The September 2026 Power Platform update lists as GA a *"canvas authoring agent plugin for AI-assisted app building"* and the ability to *"vibe code entire model-driven apps with the app-builder skill"* (Microsoft's own phrase), a skill used with a coding tool such as GitHub Copilot CLI or Claude Code, plus a public preview in which generative pages can use Power Platform connector data. Blog-sourced. ([What's new in Power Platform: September 2026](https://www.microsoft.com/en-us/power-platform/blog/power-apps/whats-new-in-power-platform-september-2026-feature-update/) - Published: 2026-09-17)

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

- **Mar 2026 (New Foundry Portal GA, updated through Oct 2026):** The new Microsoft Foundry portal reached general availability for core scenarios such as model discovery, agent development on the Responses API, evaluations, fine-tuning, red teaming, and quota management. In July and September 2026, **Hosted agents**, **Toolboxes**, **Publish agents to Microsoft Copilot and Teams**, and **Routines** were added to the [GA readiness table](https://learn.microsoft.com/en-us/azure/foundry/concepts/general-availability) (updated 2026-09-23). Do not inherit that GA label for every surface: Foundry IQ is partial GA (API-level GA; portal access remains Preview), Hosted Agent SDK packages have mixed maturity, and Agent Guardrails remain Preview. **Foundry Workflows: Retiring from Preview without a GA path on December 1, 2026.** Classic portal remains necessary for capabilities that have not moved.

  **New Foundry Portal: GA vs Preview Breakdown (Updated September 2026)**

  | Category | GA | Preview |
  |----------|----|---------|
  | **Discover** | Overview, Model catalog, Tools, Solution Templates, Search | Instant Access, Leaderboards, Video playground |
  | **Build** | Agents (core, Prompt, Hosted), Toolboxes, Publish to Microsoft Copilot and Teams, Routines, Models, Fine-tuning, Tools, Data, Evaluations, Red teaming, Speech playgrounds, Tracing (prompt and hosted agents), Guardrails (models) | Agents (Voice Live), Agent optimizer (Limited preview), Tracing (workflow and external agents, VNet), Optimization, Knowledge (Foundry IQ portal; API is GA), Memory, Guardrails (agents; controls and intervention), Monitoring |
  | **Operate** | Quota, Admin | Overview, Assets, Compliance, AI Gateway |
  | **Other** | Home, Docs | - |

  **Not supported in the new portal at GA (use Foundry classic):** Standalone Azure OpenAI resources, Assistant creation, Audio playground, AI service fine-tuning, Content Understanding, prebuilt video prompts.

  **Guardrails: read the label, not the legacy name.** Inside Foundry, Content Safety is now surfaced as **"Guardrails and controls."** The agent-specific primitives are **Tool call** and **Tool response intervention points**, both **Preview**. **Task Adherence** (the control that asks *"is this agent still doing the job it was given?"*) is a **Preview guardrail control in Foundry** (`/azure/foundry/guardrails/task-adherence`), **not a GA Content Safety API**. And **groundedness detection is Preview and is documented as not applicable to agents**. If your safety case depends on it, that is a gap you need to know about now, not at go-live. ([Guardrails and controls in Microsoft Foundry](https://learn.microsoft.com/en-us/azure/foundry/guardrails/guardrails-overview) - Retrieved: 2026-07-30)

  > **Lifecycle gate, Foundry Workflows:** **Retiring from Preview without a GA path on December 1, 2026.** For existing workflows, map the job rather than chasing a one-size-fits-all replacement: Agent Framework for code-first orchestration, Logic Apps for visual business processes, A2A for lightweight direct delegation, or exported YAML on [Hosted Agents](#the-hosted-agent-constraint-card) only when the complete constraint card fits.

- **Voice Live (API GA `2026-07-15`; Foundry portal experience and sub-features Preview):** Real-time voice agent capability powered by Azure Speech in Foundry Tools. Voice Live API version `2026-07-15` is **generally available** and is the default service version in the SDKs (`azure-ai-voicelive` 1.3.0), while the Foundry portal "Agents: Voice Live" surface, WebRTC, smart turn detection, MAI Transcribe, BYO model, and evaluation harness remain **Preview**. Supports expanded model selection (GPT-Realtime, GPT-5, GPT-4.1, PHI), natural voice options, multilingual speech, semantic voice activity detection, avatar integration, and telephony via Azure Communication Services. Agents connect by agent ID, with no audio model deployment required. SDKs available for Python, C#, JavaScript, and Java. **On network isolation, Microsoft is currently silent for Voice Live specifically.** Verify the posture for your scenario before designing around either answer. ([Voice Live overview](https://learn.microsoft.com/en-us/azure/ai-services/speech-service/voice-live) - Updated: 2026-10-08)
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
- **SDK migration (`azure-ai-inference` retired August 26, 2026):** The Azure AI Inference beta SDK retired on August 26, 2026 (moved from the earlier May 30 date). Replace `AzureOpenAI()` and `azure-ai-inference` with the standard `OpenAI()` client pointing to `services.ai.azure.com/openai/v1`. Follow the [migration guide](https://learn.microsoft.com/en-us/azure/foundry/how-to/model-inference-to-openai-migration).
- **Assistants API sunset (August 26, 2026, passed):** Learn's [classic navigation guide](https://learn.microsoft.com/en-us/azure/foundry/how-to/navigate-from-classic) (updated 2026-09-14) states *"August 26, 2026: Assistants API sunsets."* Migrate to the Foundry Agent Service (Responses API). A [migration tool](https://aka.ms/agent/migrate/tool) is available. Threads → Conversations, Runs → Responses, Assistants → current agent definitions. Use Agent Framework for code-first orchestration, Logic Apps for visual processes, and A2A where direct delegation fits. Do not migrate onto Foundry Workflows: **Retiring from Preview without a GA path on December 1, 2026.**
- **Classic agents (v1) migration, retirement date UNCONFIRMED:** Agents created with `client.agents.create_agent()` in earlier SDK versions must migrate to `client.agents.create_version()` with structured agent definitions (`kind`, `model`, `instructions` fields). This framework previously published **March 31, 2027** as the retirement date; **we could not confirm that date against current Microsoft documentation, so treat it as unverified and check Learn before you build a plan around it.** The migration itself is real and documented. The [migration guide](https://learn.microsoft.com/en-us/azure/foundry/agents/how-to/migrate#migrate-classic-agents-to-new-agents) covers code-level changes. GitHub Copilot can accelerate the rewrite. Assign the migration as an Issue and let the Copilot cloud agent refactor the API calls.
- **`azure-ai-projects` 2.x replaces 1.x:** Version 2.x targets the new portal (GA across Python `2.8.0`, Java `2.3.0`, JS `2.8.0`, and .NET `2.0.1`); version 1.x targets classic. Using mismatched versions causes errors.
- **Outbound isolation, Managed VNet:** Microsoft provisions and manages the virtual network across 18 supported regions. Two modes: "Allow internet outbound" and "Allow only approved outbound" (restricts via service tags, private endpoints, and optional FQDN rules enforced through a managed Azure Firewall at extra cost). The [Managed VNet page](https://learn.microsoft.com/en-us/azure/foundry/how-to/managed-virtual-network) (updated 2026-08-18) carries no page-level Preview banner and supports Prompt and Hosted Agents on the Responses API, though the `az cognitiveservices account managed-network` CLI group is marked preview and Learn states no explicit GA label.

**Context Windows:**

- **GPT-5 series:** Up to 400k tokens (272k input, 128k output) for reasoning workloads. (Foundry models sold directly by Azure - Retrieved: 2025-11-13)
- **GPT-5-chat:** 128k token context for conversational scenarios. (Foundry models sold directly by Azure - Retrieved: 2025-11-13)
- **GPT-4.1:** 1M token context for large document processing. (Foundry models sold directly by Azure - Retrieved: 2025-11-13)

**Network Isolation:**

- **Inbound isolation (GA):** Disable public network access and configure private endpoints to your Foundry resource. Supports "Disabled" (private endpoint only) and "Selected networks" (IP/VNet allowlist) modes. (How to configure network isolation for Microsoft Foundry - Retrieved: 2026-03-19)
- **Outbound isolation, BYO VNet (GA):** Inject the Agent client into a customer-managed virtual network subnet (delegated to `Microsoft.App/environments`, /27 or larger). Outbound traffic routes through your VNet to Azure PaaS resources over private endpoints. Bring your own Storage, AI Search, and Cosmos DB for end-to-end isolation. (How to configure network isolation for Microsoft Foundry - Updated: 2026-09-30)
- **Network isolation is not air-gapping:** Managed Foundry supports documented private-network and no-public-egress configurations, subject to feature, tool, project-age, and regional prerequisites. It is still a connected managed service. Check the current [networking deep dive](https://learn.microsoft.com/en-us/azure/foundry/agents/concepts/agents-networking-deep-dive) and tool matrix before promising isolation. Keep disconnected Foundry Local/Azure Local architectures separate.
- **Ideal for:** Zero-trust deployments, regulated workloads, and sovereign data strategies. Use BYO VNet for customer-controlled production isolation; evaluate Managed VNet when you want Microsoft to operate the network without managing IP ranges.

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
- **Agent-to-agent delegation (A2A v1.0 GA; v0.3 Preview):** Both [incoming A2A endpoints](https://learn.microsoft.com/en-us/azure/foundry/agents/how-to/enable-agent-to-agent-endpoint) and the [outgoing `a2a` tool](https://learn.microsoft.com/en-us/azure/foundry/agents/how-to/tools/agent-to-agent) (updated 2026-09-14) support **generally available A2A protocol v1.0** alongside preview `v0.3`. **Architectural trap:** if a request does not specify a version, Foundry serves preview `v0.3` by default. v1.0 is JSON-RPC and text-only (no streaming). Use A2A for lightweight direct delegation, not as a synonym for deterministic workflow orchestration.
- **BYO storage:** Bring Azure Cosmos DB for thread storage plus Azure AI Search and Azure Blob Storage for knowledge with private endpoints. (Foundry Agent Service GA - Updated: 2026-01-21)
- **Thread storage in Cosmos DB (GA):** Standard setup provisions enterprise_memory containers (thread-message-store, system-thread-message-store, agent-entity-store) in your Cosmos DB for NoSQL account with BYO throughput. ([Azure Cosmos DB integration with Azure AI Agents Service](https://learn.microsoft.com/en-us/azure/cosmos-db/gen-ai/azure-agent-service#overview), retrieved 2025-04-30)
- **Trace agents SDK:** Debug runs with thread-level insights, including inputs, tool calls, and outputs. Tracing maturity varies by agent type. **Foundry Workflows: Retiring from Preview without a GA path on December 1, 2026.** Do not read tracing support as a lifecycle endorsement.
- **Event triggers:** Invoke agents from Azure Logic Apps or other workflows to respond to business events. (Foundry Agent Service GA - Updated: 2026-01-21)
- **VS Code integration:** Microsoft Foundry VS Code extension deploys and configures agent tools, including MCP integrations. (Foundry Agent Service GA - Updated: 2026-01-21)
- **MCP tool & Deep Research:** Connect to remote Model Context Protocol servers and run multi-step o3-deep-research investigations grounded by Bing Search. (What's new in Foundry Agent Service - Updated: 2025-10-08)
- **Next-gen GA (Responses API):** Built on OpenAI Responses API, wire-compatible with OpenAI agents. Open model support across DeepSeek, xAI, Meta, LangChain, and LangGraph. ([Foundry Agent Service GA blog](https://devblogs.microsoft.com/foundry/foundry-agent-service-ga/) - Published: 2026-03-16)
- **MCP authentication expansion:** Key-based, Entra Agent Identity, Managed Identity, and OAuth Identity Passthrough for user-delegated access patterns. ([Foundry Agent Service GA blog](https://devblogs.microsoft.com/foundry/foundry-agent-service-ga/) - Published: 2026-03-16)
- **Evaluations (GA):** Out-of-the-box evaluators (coherence, relevance, groundedness, safety), custom evaluators, and continuous production monitoring via Azure Monitor. ([Foundry Agent Service GA blog](https://devblogs.microsoft.com/foundry/foundry-agent-service-ga/) - Published: 2026-03-16)
- **SDK consolidation:** Standalone Python/.NET `azure-ai-agents` pins are replaced by first-class operations on `AIProjectClient` in `azure-ai-projects` (Python `2.8.0` GA, Java `com.azure:azure-ai-agents` `2.3.0` GA, JS `@azure/ai-projects` `2.8.0` GA, .NET `Azure.AI.Projects` `2.0.1` GA). Use `get_openai_client()` to drive responses. ([SDK overview](https://learn.microsoft.com/en-us/azure/foundry/how-to/develop/sdk-overview) - Updated: 2026-10-06)
- **Routines (GA):** Timer, recurring, and event-based triggers, initially for GitHub issues and Teams channel messages, with creator or agent identity. Listed as **GA** in Learn's [GA readiness table](https://learn.microsoft.com/en-us/azure/foundry/concepts/general-availability) (updated 2026-09-23) and the [GA announcement](https://devblogs.microsoft.com/foundry/from-chatbots-to-automated-assistants-routines-in-microsoft-foundry-are-now-generally-available/) (2026-09-24). The reminder tool remains preview, workflow agents are not supported, and .NET requires the `2.1.0-beta.4` or `3.0.0-beta.3` preview packages. ([Automate agents with routines](https://learn.microsoft.com/en-us/azure/foundry/agents/how-to/use-routines) - Updated: 2026-10-07)
- **Network egress controls (preview):** A hosted agent's RAI policy contains an `egressPolicy` with Audit or Enforce mode (API value `Enforced`; `Blocking` is the separate content-safety setting). It evaluates ordered FQDN rules and falls back to a default action you set; Learn recommends `Deny` for an allow list. The announcement warns: *"Network egress controls are not GA, have no preview SLA, and are not intended for production use."* ([Learn: Network egress controls (preview)](https://learn.microsoft.com/en-us/azure/foundry/agents/how-to/add-hosted-agent-guardrails#network-egress-controls-preview); [announcement](https://devblogs.microsoft.com/foundry/egress-controls-hosted-agent/) - Published: 2026-09-24)

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
- **Current endpoints and identity:** Current agents receive an endpoint and agent identity through the current model; the legacy Agent Applications publishing model is deprecated. [Publishing agents to Microsoft Copilot and Teams](https://learn.microsoft.com/en-us/azure/foundry/agents/how-to/publish-copilot) (updated 2026-09-28) is **GA** on Learn's [GA readiness table](https://learn.microsoft.com/en-us/azure/foundry/concepts/general-availability) and must still be validated per tool and identity path.
- **Voice Live (API GA; Foundry portal Preview):** Real-time voice agents powered by Azure Speech. Connect Foundry agents to telephony, automotive, accessibility, and contact center scenarios via agent ID. Integrates natively with Foundry agents. SDKs for Python, C#, JavaScript, Java.
- **Foundry IQ (mixed GA/Preview):** Managed knowledge bases connecting agents to permission-aware enterprise data via MCP. See [Foundry IQ](#foundry-iq--tech-heading-).
- **Foundry Workflows:** **Retiring from Preview without a GA path on December 1, 2026.** No new-solution recommendation.
- **Agent Memory (Preview):** Persistent context across sessions for agents.

**Construction Paths - Pick the Amount of Runtime You Own:**

Not all agents are built the same way. Think of this as choosing between a furnished kitchen and bringing your own kitchen crew. The choice is ownership, not prestige.

- **Prompt agents (GA):** Microsoft documents them for configuration-defined agents, including production agents that do not need custom orchestration logic. The managed model accelerates delivery while limiting runtime ownership: teams cannot add arbitrary orchestration code or define the hosting topology, and capacity remains bounded by service quotas plus model, tool, and regional availability. Feature maturity varies across tools, SDKs, protocols, and publishing paths. **Framework guidance:** favor prototypes, sandboxes, internal tools, and low-impact production. For most pro-code production agents that require customer-owned scaling, failover, rollback, deterministic middleware, observability, or evidenced RTO/RPO, use **Agent Framework on Azure Container Apps or AKS**. This is the framework's risk posture, not a Microsoft support restriction. See [Agent types](https://learn.microsoft.com/en-us/azure/foundry/agents/overview#agent-types) and [Agent Service limits, quotas, and regions](https://learn.microsoft.com/en-us/azure/foundry/agents/concepts/limits-quotas-regions).
- **Hosted agents (GA service, announced 2026-07-09; mixed SDK package maturity):** Bring containerized Python or C# code and custom orchestration. Choose this path when stronger **per-session VM isolation** is valuable and the documented envelope fits. Session allocation is not an identity-based container model, and Hosted Agents are not self-hosted applications on Azure Container Apps or AKS.

#### The Hosted Agent Constraint Card

**Isolation is the reason to choose it; the envelope is the price of admission.** Each session receives a VM-isolated sandbox. Session IDs, not user identities, drive allocation, so applications must map users or conversations to sessions.

| Constraint | Current documented envelope |
| :--- | :--- |
| **Compute per session** | 0.5 vCPU/1 GiB, 1 vCPU/2 GiB, or 2 vCPU/4 GiB |
| **Lifecycle** | Compute idles after 2 to 60 minutes (default 15 minutes); session state is deleted after 30 days of inactivity |
| **Scale** | Scales per session with no replica or warm-pool control. Documented quota is **1,000 concurrent sessions per subscription and region** (**2,000** in Canada Central, East US 2, Japan East, North Central US, South Africa North, Southeast Asia, and Sweden Central). In BYO-VNet, sessions map 1:1 to usable subnet IPs by default (support can raise to 1:10; a `/26` subnet yields ~50 sessions). Plan around roughly **200 agents per Foundry instance (resource)**. The **250-project** resource limit is theoretical and workload-dependent; official guidance indicates effective capacity can fall to roughly **25 projects under heavy traffic**. Plan below **80% subnet utilization**. |
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
- **A2A:** Both incoming and outgoing **A2A v1.0 are GA**; `v0.3` remains Preview and is served by default if a request omits a version header.
- **MCP tool:** Connect to remote Model Context Protocol servers (June 2025)
- **Deep Research:** o3-deep-research + Bing Search for multi-step analysis (June 2025)
- **Bing Custom Search:** Specify websites for grounding (June 2025)
- **Azure Monitor integration:** Metrics for file indexing, run tracking (April 2025)
- **BYO Cosmos DB:** Thread storage in customer-managed Cosmos DB for NoSQL (April 2025)
- **VS Code extension:** Develop, test, and publish agents with tool configuration inside Visual Studio Code. (Foundry Agent Service GA - Updated: 2026-01-21)

**Network Isolation:**

- **VNet Support (GA, Standard Setup):** Full private networking with BYO VNet injection. Agent client injected into a customer-managed subnet; outbound traffic routes through your VNet to Azure PaaS over private endpoints. BYO VNet extends to MCP servers, Azure AI Search, and OpenAPI/Functions/A2A. Requires delegated subnet (`Microsoft.App/environments`, /27+, /24 recommended for hosted agents) and BYO Storage, AI Search, Cosmos DB.
- **Managed VNet:** Microsoft-provisioned network with managed private endpoints across 18 regions. Two modes: "Allow internet outbound" and "Allow only approved outbound." The page carries no preview banner, though the `az cognitiveservices account managed-network` CLI group is marked preview and Learn states no explicit GA label.
- **Tool support behind VNet (`configure-private-link`, updated 2026-09-30):** MCP (private), AI Search, Code Interpreter, Function Calling, **File Search** (via private endpoint), **OpenAPI**, **Azure Functions**, and **A2A** (via VNet subnet) are supported behind VNet; Fabric IQ has partial support. **Not supported behind VNet:** Fabric data agents, Logic Apps, Browser Automation, Computer Use, and Image Generation. Bing/Web Search and SharePoint Grounding use public endpoints.
- **Ideal for:** Managed PaaS with private networking requirements. Use Standard Setup + BYO VNet for customer-controlled production isolation.

> **Terminology clarification:** This guide uses four distinct terms: **(1) Microsoft Foundry** is the platform and portal. **(2) Foundry Agent Service** is an optional managed PaaS within it. **(3) Hosted Agents** are containerized agents on that service with per-session VM isolation; they are not self-hosted applications on Container Apps or AKS. **(4) Microsoft Agent Framework** is the GA open-source orchestration SDK. Portal, service, agent type, framework, and feature labels do not inherit one another's status.

**When to use:** Managed agent state, identity, tools, and runtime infrastructure when the exact agent type and feature statuses meet the workload's production bar. Use Agent Framework for code-first orchestration and A2A only for direct delegation.

**Sources:**

- [What's new in Microsoft Foundry](https://learn.microsoft.com/en-us/azure/foundry/whats-new-foundry) (Updated: 2026-03-23)
- [Foundry Agent Service overview](https://learn.microsoft.com/en-us/azure/foundry/agents/overview)
- [What is Toolbox in Foundry?](https://learn.microsoft.com/en-us/azure/foundry/agents/concepts/toolbox-overview)
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
- **Agent registry + admin center observability:** Agent 365 surfaces agents in the Microsoft 365 admin center for inventory and management. Components include the **Agent Registry**, **Agent Map** (with Single Agent Map in preview), **Registry Sync (Connected platforms)**, **Shadow AI (preview)**, and **Local Agents (preview)**. ([Overview of Microsoft Agent 365](https://learn.microsoft.com/en-us/microsoft-agent-365/overview) - Updated: 2026-08-20)
- **Registry Sync (Connected platforms):** Learn's [Connected platforms page](https://learn.microsoft.com/en-us/microsoft-agent-365/admin/connected-platforms) (updated 2026-10-14) documents manual, read-only inventory synchronization for **Amazon Bedrock, Google Vertex AI, Salesforce Agentforce, Databricks Genie, Anthropic Claude, Oracle Generative AI Agents, and Snowflake Cortex**. Limitations: manual synchronization only, key-based credentials, deletion reconciliation is not guaranteed, and agent observability data collection is Frontier preview.
- **Shadow AI and Local Agents (Frontier preview):** [Shadow AI](https://learn.microsoft.com/en-us/microsoft-agent-365/admin/agent-shadow-ai) (updated 2026-08-27) detects unsanctioned desktop agents and blocks **OpenClaw** via Intune (`A365 - Block OpenClaw`). A separate [Local Agents (preview)](https://learn.microsoft.com/en-us/microsoft-agent-365/admin/agent-local) page (updated 2026-09-08) adds blocking on managed Windows devices for **seven developer tools**: Gemini CLI and six VS Code extensions (Claude Code, Cline, Codex, Gemini Code Assist, GitHub Copilot, and Roo Code), while ~16 other local coding tools (Cursor, Windsurf, Claude Code CLI, Codex CLI, Kiro) are detection-only.
- **Agent 365 SDK and CLI:** The [Agent 365 SDK](https://learn.microsoft.com/en-us/microsoft-agent-365/developer/agent-365-sdk) (updated 2026-10-10) is at `v1.0.0` across Python, .NET, and JavaScript with no preview banner on Learn. The [Agent 365 CLI](https://learn.microsoft.com/en-us/microsoft-agent-365/developer/agent-365-cli) (updated 2026-10-05) carries no preview banner on Learn (`1.1.226` on NuGet), though its repository README still shows `--prerelease` in install snippets.

**Licensing and rollout:** Agent 365 is GA for commercial customers (2026-05-01). The [Agent 365 service description](https://learn.microsoft.com/en-us/office365/servicedescriptions/microsoft-agent-365/microsoft-agent-365) (updated 2026-10-01) clarifies that **inventory, basic governance actions, lifecycle automation, and external-platform Registry Sync are included with base Microsoft 365 plans**, while policy templates, observability, tool control, and the Entra, Purview, Defender, and Intune enforcement layers require **Microsoft 365 E7 / G7 or a standalone Agent 365 license**. (Overview of Microsoft Agent 365 - Updated: 2026-08-20)

**When to use:** Establish identity, registry, and governance for cross-platform agents; pair with Copilot Studio or Microsoft Foundry runtimes for execution. Fleet governance and in-process runtime policy are different layers. See the [Agent Governance Toolkit](#agent-governance-toolkit-public-preview--tech-heading-) for the middleware layer that sits inside the execution path.

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

- **Serverless (consumption) Developer tier (Public Preview):** Pay only for compute (Compute Units per hour) and indexed storage (per GB per month), with scale-to-zero when idle, alongside the existing dedicated (provisioned) tiers. **Billing for the Serverless Developer tier began on September 13, 2026.** It is currently scoped to the Developer tier only (no SLA, not recommended for production), available in select regions, and **tier migration to or from other tiers is not supported**. Advanced add-ons (semantic ranker, agentic retrieval, image extraction, skill execution) are billed separately. ([Azure AI Search Serverless cost optimization](https://learn.microsoft.com/en-us/azure/search/serverless-cost-optimization) - Updated: 2026-09-17)
- **Agentic retrieval / knowledge bases (mixed status):** Programmatic REST API `2026-04-01` is **GA** for knowledge bases using GA knowledge source types (`searchIndex`, `azureBlob`, `indexedOneLake`, `web`) with minimal extractive retrieval. **Preview (`2026-08-01-preview`):** LLM query planning, answer synthesis, non-minimal reasoning effort, multi-turn messages, Azure/Foundry portal experiences, and remote knowledge sources (MCP Server, Work IQ, Fabric data agent, Fabric ontology, remote SharePoint). Foundry IQ lets Agent Service agents call knowledge bases through MCP. ([Agentic retrieval overview](https://learn.microsoft.com/en-us/azure/search/agentic-retrieval-overview) - Updated: 2026-09-17)
- **Security & governance:** SharePoint indexer ACL flow-through (Preview), sensitivity label enforcement, and confidential computing (GA, +~10% surcharge). (What's new - Updated: 2026-03-13; Sep 2025)
- **Knowledge sources:** Indexed/remote SharePoint, indexed OneLake, and web sources with content extraction powered by Azure AI Content Understanding. (What's new - Updated: 2026-03-13)
- **Ranking & analytics:** Semantic ranker and agentic retrieval available on free tier (limited quotas); scoring function aggregation and facet aggregations for analytics. (What's new - Updated: 2026-03-13)
- **Endpoint flexibility:** Skills/vectorizers accept `services.ai.azure.com` and azure-api.net endpoints for Foundry-hosted models. (What's new - Updated: 2026-03-13)

**When to use:** Enterprise RAG/agentic retrieval with ACL-aware indexing, label-aware enforcement, and integration into Foundry/Agent Service.

**Sources:**

- [What's new in Azure AI Search](https://learn.microsoft.com/en-us/azure/search/whats-new#2025-announcements) (Updated: 2026-03-13)
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
- **Work IQ:** Microsoft 365 collaboration context (emails, meetings, chats, documents). **APIs (2026-06-16) and Work IQ MCP are GA**; the MCP `retrieve` tool and Studio/Foundry integrations are **Preview**. See [Work IQ](#work-iq--tech-heading-).
- **Fabric IQ:** Business semantics and analytics. The workload and ontology are Preview; the Chat, Cowork, and MCP integrations are GA on Learn. See [Microsoft Fabric](#microsoft-fabric--tech-heading-).
- **Web IQ:** Public web context and fresh external information. See [Web IQ](#web-iq-limited-access--tech-heading-).

Each IQ capability is standalone, but they can work together to provide comprehensive organizational and external context for agents. **Underneath Foundry IQ sits Azure AI Search.** It is the retrieval engine, still named Azure AI Search, not rebranded.

The [Microsoft IQ hub](https://learn.microsoft.com/en-us/microsoft-iq/) lists *"four interconnected capabilities"*, including Web IQ. [What is Foundry IQ?](https://learn.microsoft.com/en-us/azure/foundry/agents/concepts/what-is-foundry-iq), updated 2026-08-01, lists *"three IQ workloads"*, omitting Web IQ. The four-part list above follows the hub.

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
**Status:** **Work IQ APIs are GA (2026-06-16)** across four domains (**Chat, Context, Tools, and Workspaces**), and **Work IQ MCP is GA** per Learn's [Agent 365 tooling servers overview](https://learn.microsoft.com/en-us/microsoft-agent-365/tooling-servers-overview) (updated 2026-10-13: *"Work IQ MCP is generally available as part of the Work IQ API"*). Billed in **Copilot Credits**. ⚠️ **Preview sub-surfaces:** the MCP `retrieve` tool ([Work IQ MCP overview](https://learn.microsoft.com/en-us/microsoft-365/copilot/extensibility/work-iq/mcp/overview) - Updated: 2026-10-13), the Copilot Studio integration, the Foundry tool integration, and **Business Applications in Work IQ** are **Preview**.

**Key Features:**

- **Four API domains (GA):** **Chat** (conversational reasoning), **Context** (the work graph: people, meetings, files, threads), **Tools** (act across mail, calendar, files, chat, sites), and **Workspaces** (agent-scoped storage backed by **SharePoint Embedded**).
- **Unified endpoint model (GA):** Work IQ can be reached over REST, over A2A, and as a remote **Work IQ MCP** server. Note that the older per-workload MCP servers (Mail, Calendar, Teams, SharePoint, OneDrive, User, Word, Copilot) are marked **legacy / backward-compatibility only** (*"shouldn't be used in production environments or new projects"*).
- **Compact tool surface:** Work IQ MCP collapses large operation catalogs into a small set of generic tools that retrieve and act across mail, calendar, files, people, chat, and sites (with the `retrieve` tool in public preview).
- **Runtime data discovery:** Agents can discover data structure at runtime through self-describing resource paths instead of relying on brittle, pre-modeled integrations.
- **Business Applications in Work IQ (Public Preview, superseding Dataverse intelligence):** Extends Work IQ to Dynamics 365 and Power Platform business data and workflows. Turned on by default for new environments from September 30, 2026, and for existing environments starting **November 2026** (EEA/EU at GA; not in GCC/GCC High). Learn's [Dataverse intelligence page](https://learn.microsoft.com/en-us/power-apps/maker/data-platform/data-platform-intelligence) (updated 2026-10-10) notes: *"Dataverse intelligence is now part of Business Applications in Work IQ… as a separate service will no longer be available soon."* ([Business Applications in Work IQ](https://learn.microsoft.com/en-us/power-apps/maker/data-platform/business-applications-work-iq) - Updated: 2026-10-14)
- **Enterprise security and governance:** Centralized authorization boundaries, Rego-based policy enforcement, user-scoped execution, auditability, usage analytics, and rate limiting are built into the platform.
- **Work IQ CLI (GA):** Command-line interface and MCP server that bridges AI coding assistants (GitHub Copilot, VS Code, Claude Code) and M365 data. Query emails, meetings, documents, and Teams messages from the terminal. ([Work IQ CLI](https://learn.microsoft.com/en-us/microsoft-365/copilot/extensibility/work-iq/cli) - Updated: 2026-09-25)

{: .warning }
> **Two constraints that will shape your architecture before you write a line of code.**
>
> 1. **Entra delegated authentication only. App-only authentication is NOT supported.** Work IQ always runs as a person. There is no service-principal path, which means an unattended nightly job with no human principal has no clean way in. Discover this at design time, not at integration time.
> 2. **Access to Work IQ is documented as independent of Microsoft 365 Copilot licensing, with one conflicting quickstart.** The [Work IQ overview](https://learn.microsoft.com/en-us/microsoft-365/copilot/extensibility/work-iq/) (updated 2026-09-25) states you do not need a Copilot license to call the APIs (custom and third-party agents are usage-billed in Copilot Credits), while the [Foundry MCP quickstart](https://learn.microsoft.com/en-us/microsoft-365/copilot/extensibility/work-iq/mcp/quickstart/foundry) (updated 2026-07-01) still lists a Microsoft 365 Copilot license per calling user. Verify the requirement for your exact surface.

{: .note }
> **A number we are deliberately labeling.** Microsoft's announcement blog cites Work IQ as roughly **2× faster with ~80% fewer tokens**. Those figures come from **Microsoft internal testing reported in a marketing blog**, not from a benchmark you can reproduce or a documented SLO. Treat them as directional marketing, and run your own measurement before you put them in a business case.

**When to use:** Any agent that needs organizational context, not just document retrieval. Work IQ closes the gap between "what the content says" and "how work actually happened" across people, meetings, files, chats, and business systems. Use REST for app integration, A2A for agent collaboration, and the Preview MCP surface for tool-based agent integration, with the preview status priced into the plan.

**When NOT to use:** Unattended, app-only automation with no signed-in user (delegated auth only); enterprise document knowledge outside Microsoft 365 (use Foundry IQ); analytics and semantic-model questions (use Fabric IQ: workload Preview; Chat, Cowork, and MCP integrations GA).

**Sources:**

- [Work IQ overview](https://learn.microsoft.com/en-us/microsoft-365/copilot/extensibility/work-iq/) (Updated: 2026-06-17)
- [Announcing the new Work IQ APIs](https://www.microsoft.com/en-us/copilot/blog/2026/06/02/announcing-the-new-work-iq-apis/) (Published: 2026-06-02)
- [Work IQ MCP overview (preview)](https://learn.microsoft.com/en-us/microsoft-agent-365/tooling-servers-overview) (Updated: 2026-07-14)
- [Work IQ in Copilot Studio](https://learn.microsoft.com/en-us/microsoft-copilot-studio/agents-experience/add-work-iq) (Retrieved: 2026-03-19)
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
- **Part of Microsoft IQ:** Web IQ complements Work IQ (organizational context; **APIs GA**, MCP **Preview**), Foundry IQ (enterprise knowledge; mixed GA/Preview), and Fabric IQ (analytics; workload Preview; Chat, Cowork, and MCP integrations GA). Together they form the four IQ capabilities under the Microsoft IQ umbrella.

**When to use:** Agents that need current public information -- news, regulations, product specs, research papers -- alongside enterprise data. Pair with Foundry IQ or Work IQ so the agent can cross-reference public facts against internal context.

**When NOT to use:** Scenarios where all required data is internal (use Work IQ or Foundry IQ); analytics workloads (use Fabric IQ); workloads that cannot tolerate Limited Access enrollment gates.

**Sources:**

- [Microsoft IQ documentation](https://learn.microsoft.com/en-us/microsoft-iq/) (Retrieved: 2026-06-08)
- [Web IQ product page](https://www.microsoft.com/en-us/WebIQ) (Retrieved: 2026-06-08)
- [Announcing Microsoft Web IQ](https://blogs.bing.com/search/2026/6/Announcing-Microsoft-Web-IQ/) (Published: 2026-06)

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

- **Fabric data agent (GA core; cross-platform consumption routes Preview):** Q&A-style conversational agents that retrieve insights from OneLake sources while respecting data access permissions. **Core data agents are generally available** (formerly "AI skill") and require **F2+ or P1+ capacity**. Every documented route that consumes a Fabric data agent from another platform ([Copilot Studio](https://learn.microsoft.com/en-us/fabric/data-science/data-agent-microsoft-copilot-studio), Microsoft Copilot, and [Foundry via Fabric IQ](https://learn.microsoft.com/en-us/fabric/data-science/data-agent-foundry-fabric-iq)) is **Preview**, and the older Foundry "Microsoft Fabric" tool stops being supported on **November 6, 2026** ([retirement notice](https://learn.microsoft.com/en-us/fabric/data-science/data-agent-foundry) - Updated: 2026-10-14). It is not an orchestrator; use Foundry Agent Service or Agent Framework for multi-step coordination.
- **Fabric IQ (Preview workload; GA integrations):** The semantics layer that turns a table called `CUST_MSTR` into "a customer." Learn labels it *"the IQ (preview) workload"* and its ontology item and Ontology MCP server preview in the [overview](https://learn.microsoft.com/en-us/fabric/iq/overview). It separately documents [Power BI data answering in Copilot Chat](https://learn.microsoft.com/en-us/fabric/iq/connectors/microsoft-365-copilot-overview), the [Fabric IQ plugin in Cowork](https://learn.microsoft.com/en-us/fabric/iq/connectors/cowork-overview), and [Fabric IQ MCP](https://learn.microsoft.com/en-us/fabric/iq/connectors/fabric-iq-mcp) as generally available.
- **Rayfin (Preview):** Open-source SDK and CLI behind **Fabric Apps (Preview)** for defining and deploying a managed application backend on Microsoft Fabric. Developers or coding agents can describe databases, business logic, APIs, identity, and access policies in code while app data lands in OneLake under Fabric governance. ([Fabric Apps overview](https://learn.microsoft.com/en-us/fabric/apps/overview) - Updated: 2026-09-29)
- **Cosmos DB in Fabric (GA; Database Hub Preview):** Deploy Cosmos DB (NoSQL) and Cosmos DB Mirroring within Fabric for unified operational and analytical data without ETL (GA since November 2025; Database Hub entered public preview 2026-09-29).
- **OneLake Shortcut Transformations (File GA for CSV/Parquet/JSON; AI transformations Preview):** Apply file transformations (GA for CSV, Parquet, JSON; Preview for Excel) and AI transformations (summarize, translate, classify via Microsoft Foundry, Public Preview) during data ingestion.
- **Translytical Task Flows:** Trigger write-back actions and workflows directly from Power BI reports. The [overview](https://learn.microsoft.com/en-us/power-bi/create-reports/translytical-task-flow-overview) (updated 2026-08-13) removed its preview banner and preview-feature prerequisites in March 2026.
- **Digital Twin Builder (Preview):** No-code tool in Real-Time Intelligence to map physical assets to digital twins.

**When to use Rayfin:** Building AI-enabled or analytics-driven applications where the app backend should live close to governed Fabric data. Rayfin belongs in the "AI as a Product or Feature" bucket, and it also matters to "AI for Your Codebase" because coding agents can generate backend definitions that Fabric deploys and governs.

**Sources:**

- [Rayfin product page](https://www.microsoft.com/en-us/microsoft-fabric/features/rayfin) (Retrieved: 2026-06-08)
- [Microsoft Build 2026: Building agentic apps with Microsoft Fabric and Microsoft Databases](https://azure.microsoft.com/en-us/blog/microsoft-build-2026-building-agentic-apps-with-microsoft-fabric-and-microsoft-databases) (Published: 2026-06-02)
- [Fabric IQ workload overview (Preview)](https://learn.microsoft.com/en-us/fabric/iq/overview) (Checked: 2026-09-25)
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

**Direction, not current availability:** The Windows 365 announcement describes *"Windows 365 support for Microsoft Execution Containers (MXC) becoming generally available in the coming months"*. That dates Windows 365 support, not MXC as a whole; it is not a present GA label. ([Windows 365 developer announcement](https://blogs.windows.com/windowsdeveloper/2026/09/14/build-anywhere-stay-in-flow-with-windows-365/) - Published: 2026-09-14)

---

### Developer Tools {: .no_toc }

## GitHub Copilot {: .tech-heading }

**Description:** AI-powered developer platform that has evolved from an in-editor assistant to a suite of autonomous agents and tools for the entire software lifecycle.
**Official Docs:** [GitHub Copilot Documentation](https://docs.github.com/en/copilot)
**Status:** GA (Various features in Preview)

**Key Features:**

- **GitHub Copilot cloud agent (GA):** **Note the name: this was documented as the "coding agent" and has been renamed the "Copilot cloud agent."** It works asynchronously in a GitHub Actions-powered environment to research a repository, create a plan, change one branch, and optionally open one pull request per task. **GA on all paid Copilot plans, including Copilot for Students. It is not available on Copilot Free.** Related capabilities retain their own feature-level statuses. [About GitHub Copilot cloud agent](https://docs.github.com/en/copilot/concepts/copilot-surfaces/copilot-on-github)
- **GitHub Copilot app (GA):** A desktop application for agent-driven development, parallel workstreams, and GitHub pull-request management. Available for all Copilot plans on macOS, Linux, and Windows. Sessions use local repositories, worktrees, or cloud sandboxes (Public Preview), with Interactive, Plan, and Autopilot modes. Developers can select models, review diffs and CI, steer work, and use Agent Merge when repository rules allow. **Local sandboxing reached GA on 2026-10-07** in GitHub Copilot CLI, the GitHub Copilot app, and VS Code sessions using Agent Host (powered by Microsoft Execution Containers and included at no additional cost; [GA changelog](https://github.blog/changelog/2026-10-07-local-sandboxing-for-github-copilot-is-now-generally-available/)). Governed under AI Controls > Copilot Clients. [GitHub Copilot app](https://docs.github.com/en/copilot/concepts/copilot-surfaces/github-copilot-app)
- **One agent runtime under many products:** GitHub names the Copilot CLI, app, SDK, VS Code, Visual Studio, Copilot Cowork, Copilot Studio, and Office apps among the products backed by its agent runtime. It says most listed products replaced an earlier agent loop with the GitHub Copilot SDK, but does not identify which ones as of 2026-09-25. Studio's apps page also says *"App creation is powered by the GitHub Copilot harness."* ([Migrating the GitHub Copilot runtime to Rust, using Copilot](https://github.blog/ai-and-ml/generative-ai/migrating-the-github-copilot-runtime-to-rust-using-copilot/) - Published: 2026-09-16; Updated: 2026-09-23)
- **Business-app plugin (Preview):** The [Copilot Managed Runtime](#copilot-managed-runtime) plugin drives the `ms` CLI, Git, preview, and deployment from GitHub Copilot CLI. It gives developers a code-first workflow on that host; the Cowork handoff example comes from the runtime announcement. ([Quickstart](https://learn.microsoft.com/en-us/microsoft-365/managed-apps/developer/quickstart-github-copilot) - Updated: 2026-09-25)
- **Default policy for new features (takes effect October 22, 2026):** AI Controls > Copilot > Default policy for new features offers Enabled, Disabled, or Let organizations decide. The policy governs current and future eligible generally available features left Unconfigured, not every new feature. Explicit choices are preserved; preview features remain opt-in. ([Changelog](https://github.blog/changelog/2026-09-24-default-enablement-of-copilot-features-for-copilot-business-and-enterprise/) - Published: 2026-09-24)
- **GitHub Copilot Modernization (GA):** Solution collection delivered through IDE extensions and the Modernize CLI. Learn's [Modernization overview](https://learn.microsoft.com/en-us/azure/developer/github-copilot-app-modernization/overview) (updated 2026-10-05) lists **General availability** across all three core surfaces: IDE language, framework, and toolset upgrades for .NET, Java, and C++; IDE migration scenarios for .NET and Java; and the **Modernization agent CLI experience** for application assessment and planning (while "Rearchitect Java applications" remains preview).
- **Copilot Agent Mode (Preview):** "Peer programmer" mode in VS Code that can edit multiple files, run terminal commands, and self-heal errors during development.
- **Custom agents:** Markdown files with YAML frontmatter. Repo-scoped at `.github/agents/NAME.md`; org-scoped at `/agents/NAME.md` in `.github` or `.github-private`; enterprise-scoped in `.github-private`. **GA** for the cloud agent, VS Code, and Visual Studio; **Public Preview** for JetBrains, Eclipse, and Xcode.
- **`AGENTS.md`, "agent instructions" (official):** This is a real, documented GitHub mechanism, not a community convention. It sits alongside `CLAUDE.md` and `GEMINI.md` in a defined precedence order: **below repo-wide instructions, above org instructions.** Carry GitHub's own caveat with it: agent instructions are *"currently not supported by all Copilot features."* Write them, but do not assume universal enforcement.
- **Third-party agents (Public Preview since 2026-02-04):** Only **Anthropic Claude** and **OpenAI Codex** are supported as third-party agents on GitHub. Google Gemini appears as an *engine* in GitHub Agentic Workflows, not as an agent. xAI is a model provider, not an agent.
- **Copilot Workspace:** Natural language environment to plan, build, test, and run code in a cloud-based dev environment. ⚠️ **Status caution:** Copilot Workspace is **not present in current GitHub Copilot documentation**, and we found **no retirement notice either**. That is silence, not a sunset. Silence is not a foundation. Verify directly before designing around it.

#### Where "Agent HQ" actually lives

**A vision is not a SKU.** GitHub announced **Agent HQ** at Universe 2025 as *"GitHub's vision for the next evolution of our platform,"* and it is official, in that framing. It also **appears nowhere in current `docs.github.com/en/copilot`**. If you are writing an architecture document, name the surfaces that actually shipped:

- The **Agents page** at `github.com/copilot/agents`, plus the agents tab/panel in the product. **GA.**
- Enterprise **AI Controls**, with sub-pages for **Agents, Copilot, MCP, and Copilot Clients**. **GA.** This is where policy lives.

Use "Agent HQ" in an announcement recap. Use "Agents page" and "AI Controls" in a design.

#### Copilot Extensions: an explicit sunset with a scope limit

**Deprecated 2025-11-10, and the migration target is MCP servers, not Agent apps.** GitHub published an explicit sunset notice for **GitHub App-based** Copilot Extensions (the DataStax/Sentry/Azure-style ecosystem invoked from chat). The forward path is a **remote MCP server**.

**Read the scope before you rip anything out:** only *GitHub App-based* Extensions were deprecated. **Client-side VS Code Copilot Extensions remain fully supported.** The docs URL 301-redirects rather than 404s, which is exactly the kind of soft signal that lets a stale design survive a review.

**Budget note, GitHub AI credits:** 1 credit = $0.01. Each assigned Copilot Business license adds 1,900 credits per month; Enterprise adds 3,900. Included credits are pooled at the billing entity and do not carry over. **Code completions and next-edit suggestions are not billed against credits.** See [Usage-based billing for organizations and enterprises](https://docs.github.com/en/copilot/concepts/billing-and-usage/organizations-and-enterprises/billing). The thing developers use all day is not what moves the invoice; agent runs are.

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
- [About GitHub Copilot cloud agent](https://docs.github.com/en/copilot/concepts/copilot-surfaces/copilot-on-github) (Retrieved: 2026-07-29)
- [Hosted agents in Microsoft Foundry](https://learn.microsoft.com/en-us/azure/foundry/agents/concepts/hosted-agents) (Retrieved: 2026-07-29)

## GitHub Models (Retired) {: .tech-heading }

**Description:** Former Models as a Service (MaaS) playground and inference API on GitHub.
**Official Docs:** [GitHub Models Retirement Notice](https://docs.github.com/en/github-models)
**Status:** **Retired (July 30, 2026).** Verbatim: *"As of July 30, 2026, GitHub Models has been fully retired. The playground, model catalog, inference API, and bring your own key (BYOK) are no longer available to any customer."* Migrate model discovery, evaluation, and inference to **Microsoft Foundry**.

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

- **May 19, 2025:** Agents Toolkit added Kiota-powered API plugin generation, enabling visual endpoint selection and easier maintenance. ([Microsoft 365 Copilot release notes - June 24, 2025](https://learn.microsoft.com/en-us/microsoft-365/copilot/previous-year-release-notes#june-24-2025) - Retrieved: 2026-03-25)
- **May 2025:** GitHub Copilot extension option introduced for chat-driven scaffolding of Agents Toolkit projects. ([Microsoft 365 Agents Toolkit](https://learn.microsoft.com/en-us/microsoftteams/platform/toolkit/overview-agents-toolkit#formats) - Updated: 2026-01-29)

**Deployment & Hosting:**

- **Bring-your-own hosting:** Deploy Agents SDK workloads to Azure App Service, Azure Container Apps, AKS, or on-premises infrastructure with full control over VNets, private endpoints, and certificates. ([Microsoft 365 Agents Toolkit](https://learn.microsoft.com/en-us/microsoftteams/platform/toolkit/overview-agents-toolkit) - Updated: 2026-01-29)
- **CI/CD automation:** Agents Toolkit CLI supports provisioning, packaging, and publishing inside GitHub or Azure DevOps pipelines. ([Microsoft 365 Agents Toolkit command line interface](https://learn.microsoft.com/en-us/microsoftteams/platform/toolkit/microsoft-365-agents-toolkit-cli) - Retrieved: 2025-05-19)

**When to use:** Migrating Bot Framework bots, building enterprise-grade agents that must span Teams, Copilot, and external channels, or needing full governance over hosting, authentication, and orchestration stack selection.

**Sources:**

- [Microsoft 365 Agents Toolkit](https://learn.microsoft.com/en-us/microsoftteams/platform/toolkit/overview-agents-toolkit) (Updated: 2026-01-29)
- [Create and deploy with Microsoft 365 Agents SDK](https://learn.microsoft.com/en-us/microsoft-365/copilot/extensibility/create-deploy-agents-sdk) (Updated: 2025-12-02)
- [Microsoft 365 Copilot release notes - June 24, 2025](https://learn.microsoft.com/en-us/microsoft-365/copilot/previous-year-release-notes#june-24-2025) (Retrieved: 2026-03-25)
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
**Status:** GA since April 2, 2026 for **Python and C#/.NET**. **Go is Public Preview** (`v0.1.1`). Snapshot as of October 14, 2026: stable .NET `1.25.0` and Python `1.21.0`; extensions and integrations can carry independent Preview labels. Microsoft describes Agent Framework as the *"direct successor… next generation of both"* Semantic Kernel and AutoGen, and **no sunset date has been announced for either**, so a migration is a choice, not a deadline.
**Official Docs:** [Microsoft Agent Framework overview](https://learn.microsoft.com/en-us/agent-framework/overview/) | [Workflows overview](https://learn.microsoft.com/en-us/agent-framework/workflows/) | [Workflows - Checkpoints](https://learn.microsoft.com/en-us/agent-framework/workflows/checkpoints)
**Packages:** NuGet: `Microsoft.Agents.AI` (stable 1.25.0 snapshot) | PyPI: `agent-framework` (stable 1.21.0 snapshot)
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
- **MCP support (GA) and A2A support (Preview/Beta):** Dynamic discovery and invocation of tools via MCP-compliant servers is GA; A2A v1.0 packages (`agent-framework-a2a` in Python, `Microsoft.Agents.AI.A2A` in .NET) are in preview/beta. ([Agent Framework v1.0 blog](https://devblogs.microsoft.com/agent-framework/microsoft-agent-framework-version-1-0/) - Published: 2026-04-03; [A2A update](https://devblogs.microsoft.com/agent-framework/) - Published: 2026-04-28)
- **Migration Assistants:** Automated migration from Semantic Kernel and AutoGen with step-by-step guides. ([Agent Framework v1.0 blog](https://devblogs.microsoft.com/agent-framework/microsoft-agent-framework-version-1-0/) - Published: 2026-04-03)

- **AG-UI hosting:** Python is a *"stable release"*; .NET is *"public preview"* (`Microsoft.Agents.AI.Hosting.AGUI.AspNetCore`), per the [2026-09-24 update](https://devblogs.microsoft.com/agent-framework/interactive-experiences-memory-and-resilient-execution/). [CopilotKit](https://learn.microsoft.com/en-us/agent-framework/integrations/by-component/ui/ag-ui/) is a compatible third-party frontend, not the hosting adapter.

**Preview and Pre-release Features:**

- **DevUI (Preview):** Browser-based local debugger for agent execution visualization.
- **Foundry Hosted Agent Integration (pre-release packages):** The hosted-agent service is GA, but the AgentServer SDKs and Agent Framework Foundry hosting packages for .NET and Python *"are still in pre-release versions"* ([Foundry hosted agent isolation](https://devblogs.microsoft.com/agent-framework/foundry-hosted-agent-isolation-with-microsoft-agent-framework/) - Published: 2026-09-22).
- **ChatKit integration (Beta):** The Python adapter converts Agent Framework output into OpenAI ChatKit events. The published [`agent-framework-chatkit`](https://pypi.org/project/agent-framework-chatkit/) package is `1.0.0b260910`, labeled Beta (checked 2026-09-25).
- **Skills (Preview):** Reusable domain capability packages.
- **GitHub Copilot SDK + Claude Code SDK (Preview):** Use as agent harnesses in orchestrations. **The Preview label belongs to the Agent Framework *integration*, not to the GitHub Copilot SDK itself. That SDK is GA.** See [GitHub Copilot SDK](#github-copilot-sdk--tech-heading-).
- **Agent Harness (Preview):** Shell, filesystem, and messaging loop access for coding agents.

**When to use:** Full code-first control over multi-agent orchestration with multi-provider model support, custom middleware, and workflow persistence. Use when Copilot Studio's low-code approach or Foundry Agent Service's managed runtime don't provide enough flexibility.

**Recent Updates (2026):**

- **Apr 2, 2026:** Framework core reached GA for .NET and Python. Core status does not determine integration maturity; use the component-specific labels above.

**Sources:**

- [Microsoft Agent Framework v1.0 announcement](https://devblogs.microsoft.com/agent-framework/microsoft-agent-framework-version-1-0/) (Published: 2026-04-03)
- [Agent Framework documentation](https://learn.microsoft.com/en-us/agent-framework/)
- [Agent Framework GitHub](https://github.com/microsoft/agent-framework)

---

### Agent Runtime Alternatives (Preview) {: .no_toc }

Beyond Foundry Agent Service and self-hosted containers, Microsoft has introduced several specialized runtimes for agent workloads. Each trades off isolation, scale model, and operational overhead differently.

| Runtime | Status | What It Does | Best For |
|---------|--------|-------------|----------|
| **Azure Container Apps Sandboxes** | Preview banner removed 2026-09-18 (API/CLI still carry `-preview` versions; no explicit GA sentence) | Stateful sandbox groups for isolating agent-generated or user-provided code. | Agents that need persistent but contained execution workspaces |
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
| Direct agent delegation | Foundry A2A (**v1.0 GA; v0.3 Preview** and served by default if no version header is sent) | Lightweight delegation, not deterministic workflow orchestration |
| Enterprise workflow + AI | Azure Logic Apps **agentic workflows** | 1,400+ connectors, MCP server, and an **agent loop** inside a visual workflow. **Status splits by hosting:** Consumption agentic workflows are **explicitly in preview**; Standard carries no preview banner on the agent loop itself, **but Microsoft never states Standard is GA** and specific Standard capabilities (for example, "with an LLM API") *are* marked preview. Check the exact capability you plan to ship. |
| Document processing | AI Builder | Prebuilt models, Power Platform integration |
| Deterministic code-first orchestration | Microsoft Agent Framework (**GA core**) | Checkpointing, type-safe workflows, and explicit multi-agent routing |

**Source for the Logic Apps row:** [Agentic workflows in Azure Logic Apps](https://learn.microsoft.com/en-us/azure/logic-apps/agent-workflows-concepts) (Verified: 2026-07-29). Microsoft states verbatim that *"Consumption agentic workflows capability is in preview and is subject to the Supplemental Terms of Use for Microsoft Azure Previews."* We do not label Standard "GA" because Microsoft does not.

---

## Network Isolation Decision Matrix

| Technology | VNet Support | Private Endpoints | Managed VNet | Disconnected Managed Service? | Best For |
|------------|-------------|-------------------|--------------|-------------------------------|----------|
| **Microsoft Foundry (Azure)** | Documented BYO VNet patterns | Yes, feature-dependent | Available (no page-level preview banner; CLI group preview) | **No** | Connected managed workloads needing private network isolation |
| **Foundry Agent Service** | Setup, tool, and agent-type dependent | Supported with prerequisites | Available (no page-level preview banner; CLI group preview) | **No** | Managed agent capabilities with validated private-network support |
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
- **Governance note:** Anthropic models (used by Frontier features, WXP Agents, Copilot Cowork, and optional Copilot Studio / Foundry models) are excluded from the EU Data Boundary and in-country processing commitments, and are **enabled by default** for commercial tenants outside the EU, EFTA, and UK ([Anthropic subprocessor guidance](https://learn.microsoft.com/en-us/microsoft-365/copilot/microsoft-365-copilot-Masking-and-Subprocessors) - Updated: 2026-09-18). Factor this into compliance assessments for regulated workloads.[^copilot-privacy]
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
[^agentsdk-permissions]: Understand agent details in Microsoft 365 admin center - Agent permissions, Microsoft Learn. Retrieved: 2026-08-17. [https://learn.microsoft.com/en-us/microsoft-365/admin/manage/agent-details#agent-permissions](https://learn.microsoft.com/en-us/microsoft-365/admin/manage/agent-details#agent-permissions)
[^graph-permissions]: Overview of Microsoft Graph permissions, Microsoft Learn. Retrieved: 2025-12-26. [https://learn.microsoft.com/en-us/graph/permissions-overview](https://learn.microsoft.com/en-us/graph/permissions-overview)
