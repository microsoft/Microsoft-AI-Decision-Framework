---
layout: default
title: Microsoft AI Technologies
nav_order: 7
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
**Description:** Integrated AI assistant across M365 apps (Word, Excel, Teams, Outlook, PowerPoint, OneNote) with tenant context and Graph security. Supports extensibility via declarative agents (low-code) and custom engine agents (pro-code) for tailored productivity experiences.
**Official Docs:** [Microsoft 365 Copilot Overview](https://learn.microsoft.com/en-us/microsoft-365-copilot/)
**Status:** GA

**Key Features:**

- **Tenant-aware AI:** Works across Word, Excel, Teams, Outlook, PowerPoint, and OneNote while inheriting Microsoft Graph security and compliance controls. (Updated declarative agents guidance - Retrieved: 2025-12-01)
- **Extensibility options:** Build declarative agents with instructions, knowledge, and actions or bring custom engine agents for full orchestration control. (Agents for Microsoft 365 Copilot - Retrieved: 2026-01-07)
- **Unified discovery:** Users can discover and install agents from the in-app store inside Word and PowerPoint, with Excel support in rollout. (Microsoft 365 Copilot release notes - Retrieved: 2026-03-25)
- **Admin governance:** Admins can pre-approve trusted agents and audit usage to streamline tenant-wide deployments. (Microsoft 365 Copilot release notes - Retrieved: 2026-03-25)
- **Grounded knowledge:** Agents can draw from Teams meetings, SharePoint, OneDrive, email, Dataverse, and approved connectors with tenant-scoped security. (Extend Microsoft 365 Copilot with agents - Retrieved: 2025-12-15)
- **Fine-tuning (Preview):** Copilot Tuning lets makers fine-tune declarative agent models using tenant data under admin control. (Microsoft 365 Copilot release notes - Retrieved: 2026-03-25)
- **Copilot Cowork (Frontier Preview):** Long-running, multi-step execution engine that delegates complex tasks using Anthropic's agentic model + Work IQ grounding. Breaks requests into plans with visible checkpoints, human steering, and coordinated outputs across Word, Excel, PowerPoint, and Outlook. Runs in sandboxed cloud environment; auditable, permission-scoped, governed. Currently in Research Preview, rolling to Frontier program in late March 2026. ([Copilot Cowork announcement](https://www.microsoft.com/en-us/microsoft-365/blog/2026/03/09/copilot-cowork-a-new-way-of-getting-work-done/) - Published: 2026-03-09)
- **Wave 3 multi-model intelligence:** Automatic model routing across OpenAI (GPT-5.2) and Anthropic (Claude) providers. Copilot selects the right model for each task - users choose Quick Response or Think Deeper modes without managing model selection. Claude available in mainline Copilot Chat via Frontier. ([Wave 3 announcement](https://www.microsoft.com/en-us/microsoft-365/blog/2026/03/09/powering-frontier-transformation-with-copilot-and-agents/) - Published: 2026-03-09)
- **Agentic Copilot in apps (GA):** Edit with Copilot in Excel and Word (formerly "Agent Mode") creates, edits, and refines content using app-native tools - formulas, PivotTables, charts, tables. No longer a separate mode; this is core Copilot. PowerPoint and Outlook rolling out through spring 2026. ([Wave 3 announcement](https://www.microsoft.com/en-us/microsoft-365/blog/2026/03/09/powering-frontier-transformation-with-copilot-and-agents/) - Published: 2026-03-09)
- **Researcher agent (GA):** Pre-installed multi-step research agent with connected agent delegation. Admins connect specialized declarative agents to Researcher for domain-specific task handoff. ([Microsoft 365 Copilot release notes](https://learn.microsoft.com/en-us/copilot/microsoft-365/release-notes) - Retrieved: 2026-03-25)
- **Multi-agent workflows:** Declarative agents can connect to other agents for coordinated task completion. Researcher delegates to connected agents; users see inter-agent interaction. ([Microsoft 365 Copilot release notes - Jan 27, 2026](https://learn.microsoft.com/en-us/copilot/microsoft-365/release-notes#january-27,-2026) - Retrieved: 2026-03-25)
- **Copilot Memory (Preview):** Persistent personalization across sessions using Graph signals and conversation history. Users control, view, manage, disable, or clear memory at any time. ([Microsoft 365 Copilot release notes - Sep 3, 2025](https://learn.microsoft.com/en-us/copilot/microsoft-365/release-notes#september-3,-2025) - Retrieved: 2026-03-25)
- **Voice input (GA):** Speak to Copilot across mobile, desktop, and web in M365 apps including Outlook, Word, and PowerPoint. ([Microsoft 365 Copilot release notes - Nov 25, 2025](https://learn.microsoft.com/en-us/copilot/microsoft-365/release-notes#november-25,-2025) - Retrieved: 2026-03-25)
- **Connector ecosystem expansion:** 20+ new Copilot connectors since Oct 2025 including Coda, GitLab, Bitbucket, Asana, Smartsheet, Monday.com, Jira Data Center, Zendesk, Miro, Dropbox, Google Drive, Amazon S3, Veeva, and more. Explainable AI with inline citations for connector results. ([Microsoft 365 Copilot release notes](https://learn.microsoft.com/en-us/copilot/microsoft-365/release-notes) - Retrieved: 2026-03-25)

**Recent Updates (2025–2026):**

- **Oct 28, 2025:** Static tabs for custom engine agents in Teams meetings and @mention routing for Copilot Chat to target specific agents. (Microsoft 365 Copilot release notes - Retrieved: 2026-03-25)
- **Nov 25, 2025:** Voice input GA across platforms, shared mailbox access in Copilot Chat, audio overview customization for notebooks, file type/people filters in Chat. (Microsoft 365 Copilot release notes - Retrieved: 2026-03-25)
- **Dec 23, 2025:** GPT-5 default model in Copilot Chat with automatic fast/reasoning routing, redesigned navigation pane with expanded chat history, custom agent engine support across Word and Excel, AI Video Creator with transcript editing, .NET/Python/TypeScript client libraries for M365 Copilot APIs. (Microsoft 365 Copilot release notes - Retrieved: 2026-03-25)
- **Jan 13, 2026:** Copilot Library for centralized AI-generated assets, GPT-5 in Agent Builder for declarative agents, admin AI disclaimer customization. (Microsoft 365 Copilot release notes - Retrieved: 2026-03-25)
- **Jan 27, 2026:** GPT-5.2 model selector (Quick Response vs Think Deeper), multi-agent workflows (Researcher delegates to connected agents), Foundry agent publish to M365 Copilot (one-click), Loop-to-PowerPoint generation, copy Agent Builder agents to Copilot Studio. (Microsoft 365 Copilot release notes - Retrieved: 2026-03-25)
- **Feb 24, 2026:** Declarative agents upgraded to GPT-5.1 with auto-architecture, scoped grounding for declarative agents to specific data sources, embedded knowledge (up to 10 local files), URL-based dialogs to keep users in Copilot, connector authentication simplification. (Microsoft 365 Copilot release notes - Retrieved: 2026-03-25)
- **Mar 9, 2026 (Wave 3):** Copilot Cowork (Frontier Preview) - long-running multi-step execution with Anthropic + Work IQ. Multi-model intelligence (Claude in mainline Chat via Frontier). Agentic Copilot GA in Excel/Word (formerly Agent Mode). Agents in chat for end-to-end workflows (schedule meetings, draft emails, create docs from conversation). Microsoft 365 E7 announced ($99/user/month, GA May 1: M365 Copilot + Agent 365 + Entra Suite + E5 security). Agent 365 GA May 1 ($15/user/month). ([Wave 3 blog](https://www.microsoft.com/en-us/microsoft-365/blog/2026/03/09/powering-frontier-transformation-with-copilot-and-agents/) - Published: 2026-03-09)
- **Mar 10-24, 2026:** Context IQ for Teams channels, delegate calendar search, AI skill inferencing for E3/E5 users, Copilot Chat agent recommendations, explainable AI with inline citations for connectors. (Microsoft 365 Copilot release notes - Retrieved: 2026-03-25)

**Network Isolation:**

- **VNet Support:** No custom VNet support
- Fully managed SaaS (no VNet integration available)
- Requires gateway architecture for private on-premises data access
- Inherits M365 tenant network security
- **Ideal for:** Organizations accepting Microsoft-managed SaaS networking model
- Guidance: Microsoft recommends leveraging M365 admin controls and security policies to govern agent data access. (Data, privacy, and security considerations - Retrieved: 2025-09-05)

**When to use:** Broad productivity gains, existing M365 licenses, tenant-aware context, no deep AI expertise required, extend via low-code (Copilot Studio) or pro-code (M365 Agents SDK)

**Sources:**

- [Microsoft 365 Copilot release notes - Oct 28, 2025](https://learn.microsoft.com/en-us/copilot/microsoft-365/release-notes#october-28,-2025) (Retrieved: 2026-03-25)
- [Microsoft 365 Copilot release notes - Aug 19, 2025](https://learn.microsoft.com/en-us/copilot/microsoft-365/release-notes#august-19,-2025) (Retrieved: 2026-03-25)
- [Microsoft 365 Copilot release notes - Aug 5, 2025](https://learn.microsoft.com/en-us/copilot/microsoft-365/release-notes#august-5,-2025) (Retrieved: 2026-03-25)
- [Microsoft 365 Copilot release notes - Jul 8, 2025](https://learn.microsoft.com/en-us/copilot/microsoft-365/release-notes#july-8,-2025) (Retrieved: 2026-03-25)
- [Agents for Microsoft 365 Copilot](https://learn.microsoft.com/en-us/microsoft-365-copilot/extensibility/agents-overview) (Retrieved: 2026-01-07)
- [Extend Microsoft 365 Copilot with agents](https://learn.microsoft.com/en-us/microsoft-copilot-studio/microsoft-copilot-extend-copilot-extensions) (Retrieved: 2025-12-15)
- [Data, privacy, and security considerations for extending Microsoft 365 Copilot](https://learn.microsoft.com/en-us/microsoft-365-copilot/extensibility/data-privacy-security) (Retrieved: 2025-09-05)
- [Wave 3: Powering Frontier Transformation](https://www.microsoft.com/en-us/microsoft-365/blog/2026/03/09/powering-frontier-transformation-with-copilot-and-agents/) (Published: 2026-03-09)
- [Copilot Cowork announcement](https://www.microsoft.com/en-us/microsoft-365/blog/2026/03/09/copilot-cowork-a-new-way-of-getting-work-done/) (Published: 2026-03-09)
- [Microsoft 365 Copilot release notes - Mar 24, 2026](https://learn.microsoft.com/en-us/copilot/microsoft-365/release-notes#march-24,-2026) (Retrieved: 2026-03-25)

---

## Word, Excel, and PowerPoint Agents (Frontier) {: .tech-heading }

**Description:** Frontier creation agents inside Microsoft 365 Copilot Chat that draft Word, Excel, and PowerPoint files powered exclusively by Anthropic models after explicit admin opt-in. Available to both Copilot-licensed and unlicensed (Copilot Chat) M365 users.
**Official Docs:** [Word, Excel, and PowerPoint Agents (Frontier)](https://learn.microsoft.com/en-us/copilot/microsoft-365/wordexcelppt-agents)
**Status:** Frontier Preview (experimental; requires Frontier enrollment; available to Copilot-licensed AND unlicensed M365 users)

**Key Features:**

- **Frontier-gated access:** Frontier is Microsoft’s early access program for experimental/preview features in Copilot apps and agents. Admins enable it in Microsoft 365 admin center (`Copilot` > `Settings` > `User access` > `Copilot Frontier`) and must connect the Anthropic provider before agents appear. Licensed users can ground creation agents with Work IQ organizational context. (Manage Microsoft 365 Copilot scenarios - Retrieved: 2026-03-16; Get started with Word, Excel, and PowerPoint Agents - Retrieved: 2026-03-30)
- **Document creation agents:** Generate drafts for Word, Excel, or PowerPoint from prompts in the Copilot app, grounded by Microsoft Graph data the user is authorized to access. (Get started with Word, Excel, and PowerPoint Agents - Retrieved: 2026-03-30)
- **Data boundary and consent:** Anthropic became a Microsoft subprocessor effective January 7, 2026 under Microsoft Product Terms/DPA. However, Anthropic models are **excluded from EU Data Boundary** and in-country processing commitments. Admins can disable the provider at any time. (Data Privacy and Security - Retrieved: 2026-03-30)
- **Storage and security:** Generated files save to OneDrive; only user-permitted Graph context is shared, with sensitivity labels and compliance policies respected. (Data Privacy and Security - Retrieved: 2026-03-30)
- **Limitations:** English-only preview, side-by-side pane is read-only, and users open the full app to edit. (Responsible AI FAQ - Retrieved: 2026-03-30)

**When to use:** Early testing of AI-generated Office documents when admins accept third-party processing under Frontier terms; avoid for regulated production workloads until Microsoft-hosted GA availability.

**Sources:**

- [Get started with Word, Excel, and PowerPoint Agents (Frontier)](https://learn.microsoft.com/en-us/copilot/microsoft-365/wordexcelppt-agents) (Retrieved: 2026-03-30)
- [Frequently asked questions about Word, Excel, and PowerPoint Agents: Responsible AI FAQ](https://learn.microsoft.com/en-us/copilot/microsoft-365/faq-wordexcelppt-agents) (Retrieved: 2026-03-30)
- [Manage Microsoft 365 Copilot scenarios in the Microsoft 365 admin center](https://learn.microsoft.com/en-us/copilot/microsoft-365/microsoft-365-copilot-page#user-access) (Retrieved: 2026-03-16)
- [Overview of Microsoft Agent 365](https://learn.microsoft.com/en-us/microsoft-agent-365/overview#enable-agent-365) (Retrieved: 2025-12-15)

---

## Microsoft Scout (Experimental) {: .tech-heading }

**Description:** Microsoft's first Autopilot agent - an always-on personal agent that works autonomously in the background to coordinate work across Teams, Outlook, OneDrive, and SharePoint. Scout represents a new category of agents that hold your priorities and act on your behalf under your control, without needing to be prompted each time.
**Official Docs:** [Microsoft Scout setup instructions](https://learn.microsoft.com/microsoft-scout)
**Status:** Experimental (Private Preview via Frontier; requires Frontier enrollment, Intune policy configuration, and a GitHub Copilot license)

**Key Features:**

- **Autopilot category:** Scout belongs to a new class of always-on agents that operate with their own Entra identity, carry out tasks within org-defined permissions and policies, and keep work moving without constant prompting. Distinct from interactive (prompt-driven) copilots and from reactive trigger-based agents.
- **Proactive work coordination:** Schedules and coordinates meetings across time zones, flags important meetings, generates prep materials, blocks calendar time for upcoming deliverables, and identifies risks such as stalled decisions before they become blockers.
- **Work IQ grounding:** Powered by Work IQ - the same contextual intelligence layer that underlies Microsoft 365 Copilot. Connects to Teams, Outlook, OneDrive, SharePoint, chats, email, calendar, and contacts. Users interact with Scout in Teams; the desktop app extends reach to the browser, local resources, and MCP servers.
- **OpenClaw open-source foundation:** Built on OpenClaw open-source technology. Microsoft contributes policy conformance directly upstream, enabling organizations running OpenClaw to validate security and compliance configuration with an auditable answer.
- **Enterprise identity and access controls:** Each Scout session operates under a governed Microsoft Entra identity (not a shared service account). Credentials are scoped to the task, redacted from logs, and managed with first-party security rigor. Sensitive actions can require human sign-off before proceeding.
- **Purview integration:** Microsoft Purview sensitivity labels and data loss prevention policies are enforced in the moment, before data is sent or written. Scout does not bypass existing data protection controls.
- **Frontier access model:** Available as an experimental release through the Microsoft Frontier program. Requires Frontier enrollment, Intune policy configuration, and an opt-in attestation. Users with a GitHub Copilot license then download and install the experience.

**When to use:** Organizations in the Frontier program exploring always-on personal agents for proactive coordination, calendar management, and risk identification. Not suitable for production workloads until Microsoft releases broader availability. Use Microsoft 365 Copilot (prompt-driven) or Copilot Cowork (Frontier, task delegation with checkpoints) for work that does not require continuous autonomous background activity.

**Sources:**

- [Introducing Microsoft Scout: your always-on personal agent](https://www.microsoft.com/en-us/microsoft-365/blog/2026/06/02/introducing-microsoft-scout-your-always-on-personal-agent/) (Published: 2026-06-02)
- [Microsoft Scout setup instructions](https://learn.microsoft.com/microsoft-scout) (Retrieved: 2026-06-11)

---

## Copilot Studio

{: .tech-heading }
**Description:** Low-code and pro-code authoring environment for building declarative and custom engine agents with governance, analytics, and multi-channel delivery. Available as a standalone web app and inside Microsoft Teams.
**Official Docs:** [Copilot Studio Documentation](https://learn.microsoft.com/en-us/microsoft-copilot-studio/)
**Implementation Guide:** [aka.ms/CopilotStudioImplementationGuide](https://aka.ms/CopilotStudioImplementationGuide)

**Key Features:**

- **Unified authoring:** Makers use the refreshed authoring canvas, trigger management, and analytics across lite and full experiences. (Upgrade to Copilot Studio unified authoring - Retrieved: 2025-05-21)
- **Model choice:** GPT-4.1 is now the default model for generative orchestration with GPT-5 available in preview, while GPT-4o retires in managed tenants. (What's new in Copilot Studio - Updated: 2026-03-06)
- **Real-time data connectors:** Makers can ground agents with structured data from Microsoft and selected third-party systems for live responses. (Microsoft 365 Copilot release notes - Retrieved: 2026-03-25)
- **Grounding controls:** "Allow ungrounded responses" toggle, Tenant Graph semantic search (requires M365 Copilot license), and content moderation at three levels (agent, topic, prompt). ([Knowledge sources](https://learn.microsoft.com/en-us/microsoft-copilot-studio/knowledge-copilot-studio) - Updated: 2026-04-03)
- **Expanded knowledge capacity:** Agents can use up to 1000 SharePoint or OneDrive files with grouped instructions for precise responses. (Use up to 1000 files per agent - GA: 2025-10-06)
- **MCP tool integration:** Agents can call remote Model Context Protocol servers to reach external tools securely. (What's new in Copilot Studio - Updated: 2026-03-06)
- **Agent2Agent (A2A) Protocol:** Publish agents as skills that can be discovered and invoked by other agents in a decentralized mesh. (Preview: 2025-05-21)
- **Channel reach:** Publish agents to Microsoft 365 Copilot, Teams, web, and messaging channels including WhatsApp via Azure Communications Service. (Publish agents to WhatsApp - GA: 2025-09-08)
- **Orchestration modes:** Generative orchestration (default) handles multi-intent planning; makers can switch to Classic NLU/Classic NLU+ for deterministic topic routing or connect Azure AI Language (CLU) for advanced entity extraction when licensing allows. (Natural language understanding overview - Updated: 2025-07-07; Create and edit topics - Updated: 2025-11-11)
- **Work IQ MCP integration (Preview):** Add Work IQ MCP tools (Mail, Calendar, Teams, SharePoint, OneDrive) directly from the Tools tab to give agents real-time organizational context - the same intelligence layer that powers M365 Copilot. Requires M365 Copilot license. ([Work IQ MCP in Copilot Studio](https://learn.microsoft.com/en-us/microsoft-copilot-studio/use-work-iq) - Updated: 2026-03-11)
- **Custom MCP server authoring (Preview → Apr GA):** Create or clone governed MCP servers that combine connector actions, tools from other MCPs, and custom APIs. Servers are reusable across Microsoft Copilot, VS Code, GitHub, Claude, and other agents. DLP policies and access controls apply at server and tool level. ([Custom MCP servers](https://learn.microsoft.com/en-us/power-platform/release-plan/2026wave1/microsoft-copilot-studio/connect-agent-external-data-custom-mcp-servers) - Updated: 2026-03-18)
- **Computer Use Agents (GA):** Automate web and desktop applications using Computer-Using Agents (CUA) with vision and reasoning. Supports OpenAI CUA and Anthropic Claude Sonnet 4.5 models. Includes stored credentials (internal or Azure Key Vault), URL/app access control allowlists, human supervision gates, Cloud PC pooling, and session replay audit logging. Billed at 5 Copilot Credits per step. Generally available across commercial Power Platform geographies (GA: May 13, 2026). ([Computer Use](https://learn.microsoft.com/en-us/microsoft-copilot-studio/computer-use) - Updated: 2026-04-03)
- **Multi-model prompt builder:** Select from GPT (GPT-5.2 chat, GPT-5.2 reasoning *experimental*) and Anthropic Claude (Opus 4.6, Opus 4.5 *experimental*, Sonnet 4.5) models per prompt. Mini/General/Deep model taxonomy for intent-based selection; GPT-4o retired (Oct 2025). Configurable content moderation at agent, topic, and prompt levels. ([Prompt model settings](https://learn.microsoft.com/en-us/microsoft-copilot-studio/prompt-model-settings) - Updated: 2026-03-06)
- **VS Code extension (GA):** Build, edit, and manage agents inside Visual Studio Code for advanced developer workflows. ([VS Code extension](https://learn.microsoft.com/en-us/microsoft-copilot-studio/visual-studio-code-extension-overview) - GA: 2026-01-01)

**Recent Updates (2025–2026):**

- **Oct 2025:** Default model upgrade to GPT-4.1, GPT-5 preview access, MCP server tool, analytics enhancements, and flow express mode to reduce timeouts. (What's new in Copilot Studio - Updated: 2026-03-06)
- **Oct 2025:** Knowledge management improvements, including grouped instructions and 1000-file limits for SharePoint/OneDrive uploads. (Group files with instructions - GA: 2025-10-01; Use up to 1000 files per agent - GA: 2025-10-06)
- **Nov 2025:** GPT-5 Chat GA for EU/US regions, Entra agent identities for individual agents (Preview), connected agents for multi-agent orchestration, SharePoint metadata filters for knowledge retrieval, MIP sensitivity labels across channels (Preview), request-for-information action in agent flows (Preview), copy agents from M365 Copilot to Studio, component collections with MCP support. (What's new in Copilot Studio - Updated: 2026-03-06)
- **Dec 2025:** Side-by-side agent version comparison for evaluation test sets. (What's new in Copilot Studio - Updated: 2026-03-06)
- **Jan 2026:** Agent evaluation enhancements with activity maps, thumbs feedback, and CSV test set import (Preview). Computer Use expanded with Cloud PC pooling, stored credentials, and session replay audit logging (Preview). VS Code extension GA. (What's new in Copilot Studio - Updated: 2026-03-06)
- **Feb 2026:** Claude Sonnet 4.5 for Computer Use agents. Prompt builder: Claude Opus 4.6 and Claude Sonnet 4.5 model selection, per-prompt content moderation sensitivity, inline editing. Improved ServiceNow and Azure DevOps connector responses. (What's new in Copilot Studio - Updated: 2026-03-06)
- **Mar 2026:** Work IQ MCP tools integration (Preview). Custom MCP server authoring - create or clone governed MCP servers from connector actions, other MCP tools, and custom APIs (Preview, GA target Apr 2026). BYOM for generative responses (Preview). Advanced approvals GA. Generative AI response quality analytics GA. Code interpreter on SharePoint sources (Preview). (What's new in Copilot Studio - Updated: 2026-03-06)
- **Sep 2025:** General availability of WhatsApp channel publishing for customer-facing agents. (Publish agents to WhatsApp - GA: 2025-09-08)
- **Jun 2025:** Weekly active user insights for Copilot Studio agent reports in Viva Insights dashboards. (Microsoft 365 Copilot release notes - Retrieved: 2026-03-25)

**Network Isolation:**

- **VNet Support:** Supported via Microsoft-managed VNet data gateway; runtime remains in Power Platform. (VNet data gateway overview - Retrieved: 2026-01-06)
- Makers can deploy managed environments with private endpoints to Azure resources through the Power Platform VNet data gateway. (VNet data gateway overview - Retrieved: 2026-01-06)
- On-premises data gateway enables secure connectivity to local systems. (VNet data gateway overview - Retrieved: 2026-01-06)
- **Ideal for:** Managed PaaS scenarios requiring low-code authoring with governed access to Azure or on-premises data.

**When Copilot Studio is the Right Tool:**

- Rapidly extend Microsoft 365 Copilot with declarative agents tailored to teams or departments.
- Build custom engine agents that orchestrate complex workflows while remaining inside Microsoft-controlled infrastructure.
- Leverage Power Platform connectors, triggers, and ALM tooling without deep ML engineering.

**Sources:**

- [What's new in Copilot Studio](https://learn.microsoft.com/en-us/microsoft-copilot-studio/whats-new#notable-changes) (Updated: 2026-03-06)
- [Microsoft 365 Copilot release notes - Aug 5, 2025](https://learn.microsoft.com/en-us/copilot/microsoft-365/release-notes#august-5,-2025) (Retrieved: 2026-03-25)
- [Use up to 1000 files per agent for SharePoint and OneDrive uploads](https://learn.microsoft.com/en-us/power-platform/release-plan/2025wave1/microsoft-copilot-studio/use-up-1000-files-per-agent-sharepoint-onedrive-uploads) (GA: 2025-10-06)
- [Group files with instructions to guide agent answers](https://learn.microsoft.com/en-us/power-platform/release-plan/2025wave2/microsoft-copilot-studio/group-files-instructions-guide-agent-answers) (GA: 2025-10-01)
- [Publish agents to WhatsApp](https://learn.microsoft.com/en-us/power-platform/release-plan/2025wave1/microsoft-copilot-studio/deploy-copilots-whatsapp-azure-communications-service-chat-sms-channels) (GA: 2025-09-08)
- [Upgrade to Copilot Studio unified authoring](https://learn.microsoft.com/en-us/microsoft-copilot-studio/unified-authoring-conversion) (Retrieved: 2025-05-21)
- [VNet data gateway overview](https://learn.microsoft.com/en-us/power-platform/admin/vnet-support-overview) (Retrieved: 2026-01-06)
- [Natural language understanding (NLU) overview](https://learn.microsoft.com/en-us/microsoft-copilot-studio/nlu-overview) (Updated: 2025-07-07)
- [Create and edit topics in Copilot Studio](https://learn.microsoft.com/en-us/microsoft-copilot-studio/authoring-create-edit-topics) (Updated: 2025-11-11)
- [Computer Use (GA)](https://learn.microsoft.com/en-us/microsoft-copilot-studio/computer-use) (Updated: 2026-04-03)
- [Work IQ MCP in Copilot Studio (Preview)](https://learn.microsoft.com/en-us/microsoft-copilot-studio/use-work-iq) (Updated: 2026-03-11)
- [Custom MCP servers](https://learn.microsoft.com/en-us/power-platform/release-plan/2026wave1/microsoft-copilot-studio/connect-agent-external-data-custom-mcp-servers) (Updated: 2026-03-18)
- [VS Code extension for Copilot Studio](https://learn.microsoft.com/en-us/microsoft-copilot-studio/visual-studio-code-extension-overview) (GA: 2026-01-01)
- [Copilot Studio Kit](https://learn.microsoft.com/en-us/microsoft-copilot-studio/guidance/kit-overview) (Retrieved: 2026-03-25)

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

- **Broad model catalog:** Access GPT-5, GPT-5-mini, GPT-5-nano, GPT-4.1, GPT-image-1, Sora video generation, and GPT RealTime audio models alongside open-source offerings. (What's new in Azure OpenAI - Updated: 2026-02-27)
- **Provisioned throughput management:** Reserve PTUs and enable spillover to automatically route excess traffic to standard deployments. (What's new in Azure OpenAI - Updated: 2026-02-27)
- **Safety and routing:** Use model router, prompt shields with spotlighting, and structured outputs to protect prompts while dynamically selecting eligible models. Because router membership changes frequently, validate model families, regions, pricing, and availability against the [model router supported models table](https://learn.microsoft.com/en-us/azure/foundry/openai/concepts/model-router#supported-models) instead of hard-coding model names here. (Model router GA - Updated: 2026-03-24)
- **Workflow and evaluation tooling:** Build end-to-end pipelines with prompt flow, evaluations, and integrated monitoring. (Microsoft Foundry documentation - Retrieved: 2026-03-13)
- **Agent readiness:** Pair with Foundry Agent Service for managed agent orchestration using the same model deployments. (Microsoft Foundry documentation - Retrieved: 2026-03-13)

**Recent Updates (2025–2026):**

- **Mar 2026 (New Foundry Portal GA):** The new Microsoft Foundry portal reached general availability for core scenarios: model discovery and deployment, agent development (Agents v2 on Responses API), evaluations, fine-tuning, red teaming, and quota management. Enterprise capabilities include RBAC, audit logs, compliance controls, monitoring, and virtual network integration. Features exclusive to the new portal: Responses API (GA), Agents v2 (GA), tool catalog with 1,400+ tools (GA), Agent publishing to M365/Teams (GA), Foundry IQ (Preview), hosted agents (Preview), A2A protocol (Preview), multi-agent workflows (Preview), agent memory (Preview), and Foundry Control Plane (Preview). Classic portal is required for standalone Azure OpenAI resources, hub-based projects, assistant creation, Content Understanding, and audio playground. (New Microsoft Foundry portal GA overview - Retrieved: 2026-03-19)

  **New Foundry Portal: GA vs Preview Breakdown (March 2026)**

  | Category | GA | Preview |
  |----------|----|---------|
  | **Discover** | Overview, Model catalog, Tools, Solution Templates, Search | Agent Manifests, Ask AI |
  | **Build** | Agents, Models, Fine-tuning, Tools, Data, Evaluations, Red teaming, Speech playgrounds | Workflows, Tracing, Optimization, Knowledge, Memory, Guardrails (agents), Monitoring |
  | **Operate** | Quota, Admin | Overview, Assets, Compliance, AI Gateway |
  | **Other** | Home, Docs | - |

  **Not supported in the new portal at GA (use Foundry classic):** Standalone Azure OpenAI resources, Assistant creation, Audio playground, AI service fine-tuning, Content Understanding, prebuilt video prompts.

- **Voice Live (Preview):** Real-time voice agent capability powered by Azure Speech in Foundry Tools. Supports expanded model selection (GPT-Realtime, GPT-5, GPT-4.1, PHI), natural voice options, multilingual speech, semantic voice activity detection, avatar integration, and telephony via Azure Communication Services. Agents connect by agent ID, with no audio model deployment required (fully managed). SDKs available for Python, C#, JavaScript, and Java. Currently requires public endpoints (no VNet support). (Voice Live overview - Retrieved: 2026-03-19)
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
  | Assistants API (Agents v0.5/v1) | Responses API (Agents v2) |
  | Monthly `api-version` parameters | v1 stable routes (`/openai/v1/`) |
  | Hub + Azure OpenAI + Azure AI Services resources | Foundry resource (single, with projects) |
  | Multiple SDK packages (`azure-ai-inference`, `azure-ai-generative`, `azure-ai-ml`, `AzureOpenAI()`) | Unified `azure-ai-projects` 2.x + `OpenAI()` against one project endpoint |
  | Threads, Messages, Runs, Assistants | Conversations, Items, Responses, Agent Versions |

- **Classic vs new portal:** Two portal experiences exist (classic and new) that do NOT have feature parity. Validate capabilities in the portal, SDK samples, and Microsoft Learn before committing. (Migrate from classic portal - Retrieved: 2026-03-19)
- **SDK migration (`azure-ai-inference` retires May 30, 2026):** Replace `AzureOpenAI()` with standard `OpenAI()` client pointing to `services.ai.azure.com/openai/v1`. Follow the [migration guide](https://learn.microsoft.com/en-us/azure/foundry/how-to/model-inference-to-openai-migration). (Migrate from classic portal - Retrieved: 2026-03-19)
- **Assistants API sunsets August 26, 2026:** Migrate to the Foundry Agents Service (Responses API). A [migration tool](https://aka.ms/agent/migrate/tool) is available. Threads → Conversations, Runs → Responses, Assistants → Agents (new). Key differences: MCP is GA in new agents (was Preview), Azure Functions not available (use MCP or Logic Apps), Connected Agents replaced by Workflow + A2A. (Migrate from classic portal - Retrieved: 2026-03-30)
- **Classic agents (v1) retire March 31, 2027:** Agents created with `client.agents.create_agent()` in earlier SDK versions must migrate to `client.agents.create_version()` with structured agent definitions (`kind`, `model`, `instructions` fields). The [migration guide](https://learn.microsoft.com/en-us/azure/foundry/agents/how-to/migrate#migrate-classic-agents-to-new-agents) covers code-level changes. GitHub Copilot can accelerate the rewrite. Assign the migration as an Issue and let the coding agent refactor the API calls. (Migrate to the new agents developer experience - Retrieved: 2026-03-19)
- **`azure-ai-projects` 2.x replaces 1.x:** Version 2.x targets the new portal; version 1.x targets classic. Using mismatched versions causes errors. (Migrate from classic portal - Retrieved: 2026-03-19)

**Context Windows:**

- **GPT-5 series:** Up to 400k tokens (272k input, 128k output) for reasoning workloads. (Foundry models sold directly by Azure - Retrieved: 2025-11-13)
- **GPT-5-chat:** 128k token context for conversational scenarios. (Foundry models sold directly by Azure - Retrieved: 2025-11-13)
- **GPT-4.1:** 1M token context for large document processing. (Foundry models sold directly by Azure - Retrieved: 2025-11-13)

**Network Isolation:**

- **Inbound isolation (GA):** Disable public network access and configure private endpoints to your Foundry resource. Supports "Disabled" (private endpoint only) and "Selected networks" (IP/VNet allowlist) modes. (How to configure network isolation for Microsoft Foundry - Retrieved: 2026-03-19)
- **Outbound isolation, BYO VNet (GA):** Inject the Agent client into a customer-managed virtual network subnet (delegated to `Microsoft.App/environments`, /27 or larger). Outbound traffic routes through your VNet to Azure PaaS resources over private endpoints. Bring your own Storage, AI Search, and Cosmos DB for end-to-end isolation. (How to configure network isolation for Microsoft Foundry - Retrieved: 2026-03-19)
- **Outbound isolation, Managed VNet (Preview):** Microsoft provisions and manages the virtual network. Two modes: "Allow internet outbound" and "Allow only approved outbound" (restricts via service tags, private endpoints, and optional FQDN rules enforced through Azure Firewall). Simpler setup but currently in Preview. (Configure managed virtual network - Retrieved: 2026-03-19)
- **Network isolation limitations:** Hosted Agents, Traces (with private Application Insights), Publish to Teams/M365, and Workflow Agents (outbound) do not yet support VNet. Voice Live requires public endpoints. Some agent tools (File Search, OpenAPI, Azure Functions, Browser Automation, Computer Use, Image Generation, A2A) are not supported behind VNet. MCP (private), AI Search, Code Interpreter, Function Calling, Bing Grounding, SharePoint Grounding, and Foundry IQ work behind VNet. (How to configure network isolation for Microsoft Foundry - Retrieved: 2026-03-19)
- **Ideal for:** Zero-trust deployments, regulated workloads, and sovereign data strategies. Use BYO VNet for GA-supported production isolation; evaluate Managed VNet for simplified preview scenarios.

**When Microsoft Foundry (Azure) is the Right Tool:**

- Latency-sensitive or high-throughput applications needing direct control over model deployments and caching.
- Custom AI pipelines, evaluations, or RAG systems that exceed low-code platform capabilities.
- Teams with Azure engineering expertise that must combine private networking, governance, and model flexibility.

**Sources:**

- [What's new in Azure OpenAI in Microsoft Foundry Models](https://learn.microsoft.com/en-us/azure/ai-foundry/openai/whats-new#august-2025) (Updated: 2026-02-27)
- [What's new in Azure OpenAI in Microsoft Foundry Models](https://learn.microsoft.com/en-us/azure/ai-foundry/openai/whats-new#may-2025) (Updated: 2026-02-27)
- [What's new in Azure OpenAI in Microsoft Foundry Models](https://learn.microsoft.com/en-us/azure/ai-foundry/openai/whats-new#september-2025) (Updated: 2026-02-27)
- [What's new in model router in Microsoft Foundry Models?](https://learn.microsoft.com/en-us/azure/ai-foundry/foundry-models/whats-new-model-router) (Updated: 2026-03-24)
- [Foundry models sold directly by Azure](https://learn.microsoft.com/en-us/azure/ai-foundry/foundry-models/concepts/models-sold-directly-by-azure#gpt-5) (Retrieved: 2025-11-13)
- [What is Microsoft Foundry (Azure)?](https://learn.microsoft.com/en-us/azure/foundry/what-is-foundry) (Retrieved: 2026-03-13)
- [How to configure a private link for Microsoft Foundry (Azure)](https://learn.microsoft.com/en-us/azure/ai-foundry/how-to/configure-private-link) (Retrieved: 2026-01-06)
- [Create a secure Microsoft Foundry (Azure) hub and project with a managed virtual network](https://learn.microsoft.com/en-us/azure/ai-foundry/how-to/create-secure-ai-hub#create-a-hub) (Retrieved: 2025-12-23)
- [New Microsoft Foundry portal GA overview](https://learn.microsoft.com/en-us/azure/foundry/concepts/general-availability) (Retrieved: 2026-03-19)
- [How to configure network isolation for Microsoft Foundry](https://learn.microsoft.com/en-us/azure/foundry/how-to/configure-private-link) (Retrieved: 2026-03-19)
- [Configure managed virtual network for Microsoft Foundry projects](https://learn.microsoft.com/en-us/azure/foundry/how-to/managed-virtual-network) (Retrieved: 2026-03-19)
- [Voice Live overview](https://learn.microsoft.com/en-us/azure/ai-services/speech-service/voice-live) (Retrieved: 2026-03-19)
- [Voice Agent with Foundry Agent Service quickstart](https://learn.microsoft.com/en-us/azure/ai-services/speech-service/voice-live-agents-quickstart) (Retrieved: 2026-03-19)

---

## Foundry Agent Service {: .tech-heading }

**Description:** Managed PaaS for agent orchestration, skills management, and runtime infrastructure within **Microsoft Foundry (Azure)**. Supports connected agents (multi-agent systems), 15+ built-in tools, full RBAC + VNet + BYO storage. GA with continuous feature additions. The next-gen service is built on the OpenAI Responses API, making it wire-compatible with OpenAI's agentic protocol. (Formerly **Azure AI Agent Service**).
**Official Docs:** [Foundry Agent Service](https://learn.microsoft.com/en-us/azure/ai-services/agents/)
**Status:** GA (May 2025; next-gen on Responses API: March 2026)

**Key Features:**

- **Managed runtime:** Microsoft hosts compute, memory, and thread state with built-in tracing and Azure Monitor metrics. (Foundry Agent Service GA - Updated: 2026-01-21)
- **Connected agents (GA):** Orchestrate multi-agent systems that share context without external orchestrators; supports Fabric data agents. (Foundry Agent Service GA - Updated: 2026-01-21)
- **BYO storage:** Bring Azure Cosmos DB for thread storage plus Azure AI Search and Azure Blob Storage for knowledge with private endpoints. (Foundry Agent Service GA - Updated: 2026-01-21)
- **Thread storage in Cosmos DB (GA):** Standard setup provisions enterprise_memory containers (thread-message-store, system-thread-message-store, agent-entity-store) in your Cosmos DB for NoSQL account with BYO throughput. ([Azure Cosmos DB integration with Azure AI Agents Service](https://learn.microsoft.com/en-us/azure/cosmos-db/gen-ai/azure-agent-service#overview), retrieved 2025-04-30)
- **Trace agents SDK:** Debug runs with thread-level insights, including inputs, tool calls, and outputs. Tracing is GA for prompt agents; preview for workflow, hosted, and custom agents. New Conversation view for persistent dialogue history. (Foundry Agent Service GA - Updated: 2026-03-27)
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
- **SharePoint (Preview):** Chat with private SharePoint documents, OBO authentication for security-trimmed access, leverages M365 Copilot API built-in indexing
- **Licensed Data:** Proprietary data via licensed API keys (TripAdvisor, Morningstar, LexisNexis, LEGALFLY, etc.)

**Built-in Tools (Action):**

- **Function Calling:** Custom stateless functions
- **Azure Functions:** Intelligent, event-driven serverless code execution (classic agents only; not available in new Responses API agents - use MCP or Logic Apps instead)
- **Azure Logic Apps:** 1,400+ connector-based workflows
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
- **Agent Applications (GA):** Publish agents as Azure resources with dedicated Entra identity, stable endpoint, RBAC scope, and Azure Policy integration. One-click publish to M365 Copilot and Teams.
- **Voice Live (Preview):** Real-time voice agents powered by Azure Speech. Connect Foundry agents to telephony, automotive, accessibility, and contact center scenarios via agent ID. Integrates natively with Foundry agents. SDKs for Python, C#, JavaScript, Java. Requires public endpoints (no VNet support yet).
- **Foundry IQ (Preview):** Managed knowledge bases connecting agents to permission-aware enterprise data via MCP. See [Foundry IQ](#foundry-iq-preview).
- **Multi-agent workflows (Preview):** Orchestrate multiple agents in coordinated workflows within the Foundry portal.
- **Agent Memory (Preview):** Persistent context across sessions for agents.

**Agent Types - The Three Flavors:**

Not all agents are built the same way. Think of these as three levels of a kitchen - from the microwave meal to the full professional kitchen:

- **Prompt agents (GA):** Defined entirely through configuration - instructions, model selection, and tools. Create in the Foundry portal or via SDK/API. Agent Service handles orchestration and hosting automatically. Best for rapid prototyping and agents that don't need custom orchestration logic. See [Agent types overview](https://learn.microsoft.com/en-us/azure/foundry/agents/overview#agent-types).
- **Workflow agents (Preview):** Orchestrate sequences of actions or coordinate multiple agents using declarative YAML definitions. Build visually in the Foundry portal or define in VS Code. Support branching logic, human-in-the-loop steps, and group-chat patterns. Best for multi-step orchestration without custom code.
- **Hosted agents (Preview):** Code-based agents built with any framework (Agent Framework, LangGraph, custom) and deployed as containers on Agent Service. You write the orchestration logic; Foundry manages runtime, scaling, and infrastructure. Billing enabled during preview; check the [Foundry pricing page](https://azure.microsoft.com/pricing/details/ai-foundry/) for current rates. Best for complex workflows requiring full control over agent behavior. See [Hosted agents overview](https://learn.microsoft.com/en-us/azure/foundry/agents/concepts/hosted-agents).

**Recent Updates (2025–2026):**

- **Mar 2026:** Next-gen Foundry Agent Service GA on Responses API. End-to-end private networking for MCP servers/AI Search/Fabric. MCP auth expansion (key, Entra Agent Identity, Managed Identity, OAuth Passthrough). Evaluations GA with continuous monitoring via Azure Monitor. Hosted agents expanded to 6 new regions. `azure-ai-agents` SDK deprecated in favor of `AIProjectClient` in `azure-ai-projects`. ([Foundry Agent Service GA blog](https://devblogs.microsoft.com/foundry/foundry-agent-service-ga/) - Published: 2026-03-16)
- **General Availability:** Service went GA in May 2025
- **Connected agents:** Multi-agent orchestration without external orchestrators (May 2025)
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

> **Terminology clarification:** This guide uses three distinct terms: **(1) Microsoft Foundry** - the platform/portal (ai.azure.com) providing model catalog, prompt flow, and evaluations. Microsoft Foundry offers two portal experiences (classic and new) that do **not** have feature parity; the underlying APIs and feature rollouts differ. Validate capabilities in the portal, SDK samples, and Microsoft Learn before committing. **(2) Microsoft Foundry Agent Service** - an optional managed PaaS runtime WITHIN Foundry for hosting agents with built-in tools and orchestration. **(3) Hosted agents** - agents deployed to the Foundry Agent Service runtime (vs self-hosted agents running in your own infrastructure using Agent Framework, LangChain, or custom code). Additionally, **(4) Microsoft Agent Framework** - the open-source orchestration SDK for .NET/Python (v1.0 GA, April 2026). You can use Microsoft Foundry WITHOUT Agent Service by deploying custom code.

**When to use:** Managed agent orchestration at the PaaS runtime, scalable agent infrastructure, multi-agent systems, comprehensive built-in tool ecosystem, prefer Azure-managed RAG infrastructure, need enterprise security + observability

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

**Description:** Governance layer that assigns each agent a Microsoft Entra Agent ID for identity, lifecycle, and access management, with centralized observability in the Microsoft 365 admin center.
**Official Docs:** [Agent 365](https://learn.microsoft.com/en-us/microsoft-agent-365/overview)
**Status:** GA (May 2026; **$15/user/month** standalone, bundled in M365 E7 at $99/user/month)

**How it fits together:**

- **Microsoft Entra Agent ID (Preview):** Provides agent identities, blueprints, optional agent users, and policy enforcement across five pillars: Conditional Access (adaptive policies, Microsoft Managed Policies for high-risk agents), ID Governance (entitlement management, time-bound access), ID Protection (anomaly detection, risk-based remediation), Network Controls (prompt injection blocking, threat intelligence filtering), and Agent Identity Platform (auto-discovery, A2A/MCP authorization). (Microsoft Entra Agent ID - Updated: 2026-03-25; Agent identities - Retrieved: 2025-11-04)
- **Agent registry + admin center observability:** Agent 365 surfaces agents in the Microsoft 365 admin center for inventory and management. (Overview of Microsoft Agent 365 - Retrieved: 2025-12-15)
- **Agent 365 SDK (Preview):** Extends agents built on any SDK/platform with Entra-backed identity, notifications, OpenTelemetry observability, and governed MCP servers under blueprint policies. (Agent 365 SDK - Retrieved: 2026-01-09)
- **Agent 365 CLI (Preview):** Cross-platform CLI to deploy and manage Agent 365 applications on Azure. Requires custom client app registration in Entra ID and uses `--prerelease` installs while the CLI evolves. (Agent 365 CLI - Retrieved: 2026-01-13)

**Licensing and rollout:** Agent 365 is GA with per-user licensing at $15/user/month. Agents acting on behalf of a licensed user are covered. Included in the M365 E7 bundle ($99/user/month). The Agent 365 SDK and CLI remain in Preview; plan for API surface changes in tooling workflows. (Overview of Microsoft Agent 365 - Retrieved: 2026-03-13)

**When to use:** Establish identity, registry, and governance for cross-platform agents while piloting early Agent 365 capabilities; pair with Copilot Studio or Microsoft Foundry runtimes for execution.

**Sources:**

- [Overview of Microsoft Agent 365](https://learn.microsoft.com/en-us/microsoft-agent-365/overview) (Retrieved: 2026-03-13)
- [Microsoft Agent 365 SDK](https://learn.microsoft.com/en-us/microsoft-agent-365/developer/agent-365-sdk) (Retrieved: 2026-01-09)
- [Agent 365 CLI](https://learn.microsoft.com/en-us/microsoft-agent-365/developer/agent-365-cli) (Retrieved: 2026-01-13)
- [What is Microsoft Entra Agent ID?](https://learn.microsoft.com/en-us/entra/agent-id/identity-professional/microsoft-entra-agent-identities-for-ai-agents) (Updated: 2026-03-25)
- [Agent identities in Microsoft Entra Agent ID](https://learn.microsoft.com/en-us/entra/agent-id/identity-platform/agent-identities) (Retrieved: 2025-11-04)
- [Manage Microsoft 365 Copilot scenarios in the Microsoft 365 admin center](https://learn.microsoft.com/en-us/copilot/microsoft-365/microsoft-365-copilot-page#user-access) (Retrieved: 2026-03-16)

---

## Foundry Control Plane {: .tech-heading }

**Description:** Centralized registry and security posture hub for agents built in Microsoft Foundry. Integrates Azure Policy, Microsoft Defender, and Purview for unified governance.
**Official Docs:** [Foundry Control Plane](https://learn.microsoft.com/en-us/azure/ai-foundry/control-plane/overview)
**Status:** GA (Nov 2025)

**Key Features:**

- **Agent registry:** Inventory agents with RBAC, tenant isolation, and managed identities for each agent app. (Overview - Updated: 2025-11-05)
- **Policy & guardrails:** Apply Azure Policy, Defender for Cloud, and Purview data security policies to agent projects from one pane. (AI security what's new - Updated: 2025-05-19)
- **Observability & remediation:** Security and policy tabs with bulk remediation for misconfigurations, plus hooks for Azure Monitor. (Overview - Updated: 2025-11-05)

**When to use:** Govern Foundry-built agents at scale-register, secure, and monitor agents alongside Azure resource policies.

**Sources:**

- [Foundry Control Plane overview](https://learn.microsoft.com/en-us/azure/ai-foundry/control-plane/overview) (Updated: 2026-02-27)
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
- **Work IQ:** Microsoft 365 collaboration context (emails, meetings, chats, documents). See [Work IQ](#work-iq-preview).
- **Fabric IQ:** Business analytics (semantic models, ontologies, OneLake/Power BI).
- **Web IQ:** Public web context and fresh external information. See [Web IQ](#web-iq-limited-access).

Each IQ capability is standalone, but they can work together to provide comprehensive organizational and external context for agents.

**When to use:** Custom agents needing governed, permission-aware access to enterprise documents, web content, or SharePoint, with citation-backed responses and ACL enforcement. Pair with Foundry Agent Service for managed agent orchestration.

**When NOT to use:** M365-only knowledge grounding (use Copilot connectors instead); analytics/semantic model queries (use Fabric IQ); simple document retrieval without permission enforcement (use Azure AI Search directly).

**Sources:**

- [Foundry IQ overview](https://learn.microsoft.com/en-us/azure/foundry/agents/concepts/what-is-foundry-iq) (Retrieved: 2026-03-19)
- [Foundry IQ FAQ](https://learn.microsoft.com/en-us/azure/foundry/agents/concepts/foundry-iq-faq) (Retrieved: 2026-03-19)
- [Connect Foundry IQ to Foundry Agent Service](https://learn.microsoft.com/en-us/azure/foundry/agents/how-to/foundry-iq-connect) (Retrieved: 2026-03-19)

---

## Work IQ (Preview) {: .tech-heading }

**Description:** Work IQ is the intelligence layer that powers Microsoft 365 Copilot, and now your agents can use the same engine. It applies an extensive, continuously updated understanding of how your organization works to deliver personalized search, advanced reasoning, and semantic understanding grounded in real-time M365 signals. When you connect an agent to Work IQ, you're not adding a data connector; you're giving it the same contextual brain that Copilot uses to understand your emails, meetings, documents, chats, and business systems.
**Official Docs:** [Work IQ MCP overview](https://learn.microsoft.com/en-us/microsoft-agent-365/tooling-servers-overview)
**Status:** Preview (Work IQ MCP tools and the Work IQ API are Preview as of June 2026; requires M365 Copilot license)

**Key Features:**

- **Three-layer architecture:** **Data** unifies signals from files, emails, meetings, chats, and business systems across M365. **Memory** builds persistent understanding of how people and teams work, so agents stay aligned to priorities and remain consistent across tasks, apps, and sessions. **Inference** brings together models, skills, and MCP tools so agents can reason and take action while the Agent 365 control plane ensures those actions remain observable, governed, and compliant. (Work IQ MCP overview - Retrieved: 2026-03-19)
- **Built-in MCP server catalog:** Work IQ Copilot (cross-M365 semantic search), Calendar (create/update/delete events, resolve conflicts), Mail (send/reply, semantic search), SharePoint (upload, search, manage lists), OneDrive (file/folder management), Teams (chat, channel, member management), User (profile, manager, org chart), Word (create/read documents, comments), and Dataverse/Dynamics 365 (CRUD + domain-specific actions including Sales, Finance, Supply Chain, Service, ERP, Contact Center). Each server exposes deterministic, auditable tools (not chat responses, but governed actions). (Agent 365 tools catalog - Retrieved: 2026-03-19)
- **Custom MCP servers via MCP Management Server:** Beyond the built-in catalog, build your own MCP servers using 1,500+ connectors (ServiceNow, JIRA, SAP), Microsoft Graph APIs, Dataverse custom APIs, or any REST endpoint. The MCP Management Server is fully API-driven: create, configure, and publish custom servers programmatically from VS Code or agent frameworks without building a UI. ISVs can certify and distribute their servers through the Copilot Studio catalog. (MCP Management Server - Retrieved: 2026-03-19)
- **Dataverse intelligence:** Extends Work IQ to business data understanding. Define reusable business context (semantic models, organizational processes, data schemas) that agents use to understand what your data means, follow your organization's procedures, and read/update Dataverse records reliably. Define it once, use it across all agents. (Dataverse intelligence - Retrieved: 2026-03-19)
- **Enterprise security and governance:** Admin control in the M365 Admin Center (allow/block servers org-wide), scoped permissions per agent, policy enforcement at runtime (rate limits, payload checks, security scans), full observability via Microsoft Defender Advanced Hunting (inspect tool call traces, monitor execution details, detect anomalies). All Work IQ MCP servers undergo continuous evaluation for accuracy, latency, and reliability. (Work IQ security and compliance - Retrieved: 2026-03-19)
- **Multi-platform integration:** Extend agents with Work IQ tools in Copilot Studio (low-code), Microsoft Foundry (pro-code), or VS Code (direct MCP Management Server integration). The same tools work across all three surfaces. Build once, consume everywhere. (Work IQ MCP overview - Retrieved: 2026-03-19)
- **Work IQ CLI:** Command-line interface and MCP server that bridges AI coding assistants (GitHub Copilot, VS Code, Claude Code) and M365 data. Query emails, meetings, documents, and Teams messages from the terminal. In MCP server mode, your coding assistant automatically pulls relevant workplace context when you're implementing features discussed in recent meetings. Coding agent setup guides available for Claude Code and GitHub Copilot CLI. (Work IQ CLI - Retrieved: 2026-04-03)

**When to use:** Any agent that needs to understand organizational context, not just "what's in a file" but "who decided what, when, in which meeting, and what happened after." Work IQ closes the gap between agents that answer questions about documents (Foundry IQ) and agents that understand how work actually happens. Pairs with Foundry IQ for governed enterprise knowledge and Fabric IQ for analytics. The custom MCP server ecosystem means you're not limited to M365. Any system with a connector or API can participate.

**Sources:**

- [Work IQ MCP overview (Agent 365)](https://learn.microsoft.com/en-us/microsoft-agent-365/tooling-servers-overview) (Retrieved: 2026-04-03)
- [Work IQ in Copilot Studio](https://learn.microsoft.com/en-us/microsoft-copilot-studio/use-work-iq) (Retrieved: 2026-03-19)
- [Work IQ CLI](https://learn.microsoft.com/en-us/microsoft-365-copilot/extensibility/workiq-overview) (Retrieved: 2026-03-19)
- [Dataverse intelligence](https://learn.microsoft.com/en-us/power-apps/maker/data-platform/data-platform-intelligence) (Retrieved: 2026-03-19)
- [Built-in MCP servers catalog](https://learn.microsoft.com/en-us/microsoft-copilot-studio/mcp-microsoft-mcp-servers) (Retrieved: 2026-03-19)

---

## Web IQ (Limited Access) {: .tech-heading }

**Description:** The public web intelligence layer within the Microsoft IQ family. Where Work IQ gives agents organizational context and Foundry IQ gives them enterprise documents, Web IQ gives them fresh public web information. Think of it as the difference between a researcher who only reads internal memos and one who also scans the outside world.
**Official Docs:** [Microsoft IQ](https://learn.microsoft.com/en-us/microsoft-iq/) | [Web IQ product page](https://www.microsoft.com/en-us/WebIQ)
**Status:** Limited Access (enrollment required; no self-service provisioning)

**Key Features:**

- **Web-scale grounding:** Agents use an agent-native web grounding surface for real-time public information.
- **Part of Microsoft IQ:** Web IQ complements Work IQ (organizational context), Foundry IQ (enterprise knowledge), and Fabric IQ (analytics). Together they form the four IQ capabilities under the Microsoft IQ umbrella.

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

- **Fabric Data Agents (Preview):** Q&A-style conversational agents that retrieve insights from OneLake sources while respecting data access permissions; consumable by Copilot Studio and M365 Copilot. Not an orchestrator-use Foundry Agent Service or Agent Framework for multi-step coordination.
- **Rayfin (Preview):** Open-source SDK and CLI for defining and deploying a managed application backend on Microsoft Fabric. Developers or coding agents can describe databases, business logic, APIs, identity, and access policies in code while app data lands in OneLake under Fabric governance.
- **Cosmos DB in Fabric (Preview):** Deploy Cosmos DB (NoSQL) directly within Fabric for unified operational and analytical data without ETL.
- **OneLake Shortcut Transformations (Preview):** Apply AI transformations (summarize, translate, classify) via Microsoft Foundry (Azure) during data ingestion.
- **Translytical Task Flows (Preview):** Trigger write-back actions and workflows directly from Power BI reports.
- **Digital Twin Builder (Preview):** No-code tool in Real-Time Intelligence to map physical assets to digital twins.

**When to use Rayfin:** Building AI-enabled or analytics-driven applications where the app backend should live close to governed Fabric data. Rayfin belongs in the "AI as a Product or Feature" bucket, and it also matters to "AI for Your Codebase" because coding agents can generate backend definitions that Fabric deploys and governs.

**Sources:**

- [Rayfin product page](https://www.microsoft.com/en-us/microsoft-fabric/features/rayfin) (Retrieved: 2026-06-08)
- [Microsoft Build 2026: Building agentic apps with Microsoft Fabric and Microsoft Databases](https://azure.microsoft.com/en-us/blog/microsoft-build-2026-building-agentic-apps-with-microsoft-fabric-and-microsoft-databases) (Published: 2026-06-02)

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

- **Copilot Coding Agent (Preview):** Autonomous agent integrated into GitHub.com that can be assigned issues to refactor code, fix bugs, and implement features asynchronously. It creates PRs, runs tests, and iterates on feedback.
- **GitHub Copilot app (Technical Preview):** Standalone agent-native surface for managing parallel coding-agent sessions, worktrees, reviews, and agent progress across repositories.
- **Expanded coding-agent triggers (Preview):** Coding agents can start from issues, PR feedback, direct prompts, schedules, or repository events depending on feature availability.
- **Copilot Agent Mode (Preview):** "Peer programmer" mode in VS Code that can edit multiple files, run terminal commands, and self-heal errors during development.
- **Copilot Extensions:** Ecosystem of third-party tools (DataStax, Sentry, Azure) that Copilot can invoke to perform specialized tasks.
- **Copilot Workspace:** Natural language environment to plan, build, test, and run code in a cloud-based dev environment.

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
**Official Docs:** [M365 Agents SDK](https://learn.microsoft.com/en-us/microsoft-365/agents-sdk/agents-sdk-overview) | [M365 Agents Toolkit](https://learn.microsoft.com/en-us/microsoft-365/developer/overview-m365-agents-toolkit) | [Bot Framework Migration](https://aka.ms/bfmigrationguidance)

**Key Features:**

- **Channel reach:** Deploy custom engine agents to Microsoft 365 Copilot, Teams (chat, channels, meetings), web, email, SMS, and third-party messaging channels. ([Microsoft 365 Agents Toolkit](https://learn.microsoft.com/en-us/microsoft-365/developer/overview-m365-agents-toolkit) - Updated: 2026-01-29)
- **Model + orchestrator choice:** Bring Azure OpenAI, Microsoft Foundry (Azure), Anthropic, or other APIs and pair with Microsoft Agent Framework or alternate orchestrators. ([Microsoft 365 Agents SDK overview](https://learn.microsoft.com/en-us/microsoft-365/agents-sdk/agents-sdk-overview) - Updated: 2025-11-24)
- **Toolkit formats:** Use VS Code, Visual Studio, GitHub Copilot, or CLI tooling for scaffolding, debugging, publishing, and CI/CD automation. ([Microsoft 365 Agents Toolkit](https://learn.microsoft.com/en-us/microsoft-365/developer/overview-m365-agents-toolkit#formats) - Updated: 2026-01-29)
- **Agents Playground:** Local sandbox simulates Teams to iterate without a tenant or tunneling, supporting rapid agent debugging. ([Microsoft 365 Agents Toolkit](https://learn.microsoft.com/en-us/microsoft-365/developer/overview-m365-agents-toolkit#build-and-iterate-quickly-with-microsoft-365-agents-playground) - Updated: 2026-01-29)
- **Migration path:** Bot Framework retirement on Dec 31, 2025, routes existing solutions to the Agents SDK + Toolkit stack. ([Bot Framework Migration Guide](https://aka.ms/bfmigrationguidance))

**Recent Updates (2025):**

- **May 19, 2025:** Agents Toolkit added Kiota-powered API plugin generation, enabling visual endpoint selection and easier maintenance. ([Microsoft 365 Copilot release notes - June 24, 2025](https://learn.microsoft.com/en-us/copilot/microsoft-365/release-notes#june-24,-2025) - Retrieved: 2026-03-25)
- **May 2025:** GitHub Copilot extension option introduced for chat-driven scaffolding of Agents Toolkit projects. ([Microsoft 365 Agents Toolkit](https://learn.microsoft.com/en-us/microsoft-365/developer/overview-m365-agents-toolkit#formats) - Updated: 2026-01-29)

**Deployment & Hosting:**

- **Bring-your-own hosting:** Deploy Agents SDK workloads to Azure App Service, Azure Container Apps, AKS, or on-premises infrastructure with full control over VNets, private endpoints, and certificates. ([Microsoft 365 Agents Toolkit](https://learn.microsoft.com/en-us/microsoft-365/developer/overview-m365-agents-toolkit) - Updated: 2026-01-29)
- **CI/CD automation:** Agents Toolkit CLI supports provisioning, packaging, and publishing inside GitHub or Azure DevOps pipelines. ([Microsoft 365 Agents Toolkit command line interface](https://learn.microsoft.com/en-us/microsoftteams/platform/toolkit/microsoft-365-agents-toolkit-cli) - Retrieved: 2025-05-19)

**When to use:** Migrating Bot Framework bots, building enterprise-grade agents that must span Teams, Copilot, and external channels, or needing full governance over hosting, authentication, and orchestration stack selection.

**Sources:**

- [Microsoft 365 Agents Toolkit](https://learn.microsoft.com/en-us/microsoft-365/developer/overview-m365-agents-toolkit) (Updated: 2026-01-29)
- [Microsoft 365 Agents SDK overview](https://learn.microsoft.com/en-us/microsoft-365/agents-sdk/agents-sdk-overview) (Updated: 2025-11-24)
- [Microsoft 365 Copilot release notes - June 24, 2025](https://learn.microsoft.com/en-us/copilot/microsoft-365/release-notes#june-24,-2025) (Retrieved: 2026-03-25)
- [Microsoft 365 Agents Toolkit command line interface](https://learn.microsoft.com/en-us/microsoftteams/platform/toolkit/microsoft-365-agents-toolkit-cli) (Retrieved: 2025-05-19)
- [Bot Framework Migration Guide](https://aka.ms/bfmigrationguidance)

---

## Microsoft Agent Framework {: .tech-heading }

**Description:** Type-safe orchestration SDK for composing multi-agent workflows with executors, edges, and reusable patterns. Successor to Semantic Kernel and AutoGen with stable APIs, multi-provider model support, and cross-runtime interoperability across .NET and Python.
**Status:** GA v1.0 (.NET, Python) - April 2026
**Official Docs:** [Microsoft Agent Framework overview](https://learn.microsoft.com/en-us/agent-framework/overview/agent-framework-overview) | [Workflows overview](https://learn.microsoft.com/en-us/agent-framework/user-guide/workflows/overview) | [Workflows - Checkpoints](https://learn.microsoft.com/en-us/agent-framework/user-guide/workflows/checkpoints)
**Packages:** NuGet: `Microsoft.Agents.AI` | PyPI: `agent-framework`
**GitHub:** [microsoft/agent-framework](https://github.com/microsoft/agent-framework)

**Key Features:**

- **Unified agents + workflows:** Ship LLM-powered agents, MCP integrations, and workflow graphs from a single SDK that merges Semantic Kernel and AutoGen strengths. ([Microsoft Agent Framework overview](https://learn.microsoft.com/en-us/agent-framework/overview/agent-framework-overview) - Retrieved: 2026-02-20)
- **Orchestration patterns:** Sequential, Concurrent, Handoff, and Magentic orchestrations accelerate multi-agent collaboration without bespoke control logic. ([Workflows orchestrations overview](https://learn.microsoft.com/en-us/agent-framework/user-guide/workflows/orchestrations/overview) - Retrieved: 2026-02-13)
- **Type-safe execution + checkpointing:** Executors, edges, and checkpoint services provide deterministic routing, resumability, and human-approval loops. ([Workflows overview](https://learn.microsoft.com/en-us/agent-framework/user-guide/workflows/overview#overview) - Retrieved: 2026-02-13; [Workflows - Checkpoints](https://learn.microsoft.com/en-us/agent-framework/user-guide/workflows/checkpoints) - Updated: 2026-03-11)
- **Observability instrumentation:** OpenTelemetry hooks capture workflow spans (`workflow.run`, `message.send`, etc.) via `ENABLE_OTEL` or `setup_observability()`. ([Workflows - Observability](https://learn.microsoft.com/en-us/agent-framework/user-guide/workflows/observability) - Retrieved: 2026-02-13)
- **Workflows as agents:** Any workflow can be wrapped and exposed through the agent interface, enabling reuse across APIs or UI hosts. ([Workflows - Using workflows as agents](https://learn.microsoft.com/en-us/agent-framework/user-guide/workflows/as-agents) - Retrieved: 2026-02-13)
- **Agent Skills:** Portable packages of instructions, scripts, and resources that give agents specialized capabilities. Skills use progressive disclosure (advertise ~100 tokens → load &lt;5000 tokens → read resources on demand) to minimize context window usage. ([Agent Skills](https://learn.microsoft.com/en-us/agent-framework/agents/skills) - Retrieved: 2026-03-19)
- **Background responses:** Continuation token mechanism for long-running operations. Agents start processing in the background and return a token for polling or stream resumption. Currently supported by OpenAI Responses API-backed agents. ([Background Responses](https://learn.microsoft.com/en-us/agent-framework/agents/background-responses) - Retrieved: 2026-03-19)
- **Evaluation guidance:** Foundry-hosted evaluation support for Agent Framework agents covering IntentResolution, ToolCallAccuracy, TaskAdherence, Relevance, and Groundedness metrics. ([Agent evaluation checklist](https://learn.microsoft.com/en-us/microsoft-copilot-studio/guidance/evaluation-checklist) - Retrieved: 2026-03-19)
- **Service Connectors:** First-party connectors for Microsoft Foundry, Azure OpenAI, OpenAI, Anthropic Claude, Amazon Bedrock, Google Gemini, and Ollama. ([Agent Framework v1.0 blog](https://devblogs.microsoft.com/agent-framework/microsoft-agent-framework-version-1-0/) - Published: 2026-04-03)
- **Middleware Hooks:** Intercept, transform, and extend agent behavior (content safety, logging, compliance) without modifying prompts. ([Agent Framework v1.0 blog](https://devblogs.microsoft.com/agent-framework/microsoft-agent-framework-version-1-0/) - Published: 2026-04-03)
- **Agent Memory & Context Providers:** Pluggable memory via Foundry Agent Service Memory, Mem0, Redis, Neo4j, or custom stores. ([Agent Framework v1.0 blog](https://devblogs.microsoft.com/agent-framework/microsoft-agent-framework-version-1-0/) - Published: 2026-04-03)
- **Declarative Agents & Workflows (YAML):** Define agents and orchestration topology in version-controlled YAML. ([Agent Framework v1.0 blog](https://devblogs.microsoft.com/agent-framework/microsoft-agent-framework-version-1-0/) - Published: 2026-04-03)
- **MCP support (GA):** Dynamic discovery and invocation of tools via MCP-compliant servers; A2A protocol support coming soon. ([Agent Framework v1.0 blog](https://devblogs.microsoft.com/agent-framework/microsoft-agent-framework-version-1-0/) - Published: 2026-04-03)
- **Migration Assistants:** Automated migration from Semantic Kernel and AutoGen with step-by-step guides. ([Agent Framework v1.0 blog](https://devblogs.microsoft.com/agent-framework/microsoft-agent-framework-version-1-0/) - Published: 2026-04-03)

**Preview Features:**

- **DevUI (Preview):** Browser-based local debugger for agent execution visualization.
- **Foundry Hosted Agent Integration (Preview):** Run Agent Framework agents as managed services on Foundry or Azure Durable Functions.
- **AG-UI / CopilotKit / ChatKit (Preview):** Stream agent output to frontend surfaces.
- **Skills (Preview):** Reusable domain capability packages.
- **GitHub Copilot SDK + Claude Code SDK (Preview):** Use as agent harnesses in orchestrations.
- **Agent Harness (Preview):** Shell, filesystem, and messaging loop access for coding agents.

**When to use:** Full code-first control over multi-agent orchestration with multi-provider model support, custom middleware, and workflow persistence. Use when Copilot Studio's low-code approach or Foundry Agent Service's managed runtime don't provide enough flexibility.

**Recent Updates (2026):**

- **Apr 2026:** Version 1.0 GA for .NET and Python. Stable APIs with backward-compatibility commitment. Service Connectors for 7 providers, Middleware Hooks, Agent Memory, Declarative YAML, MCP GA, and Migration Assistants from Semantic Kernel and AutoGen. ([Agent Framework v1.0 blog](https://devblogs.microsoft.com/agent-framework/microsoft-agent-framework-version-1-0/) - Published: 2026-04-03)

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
| Managed agent runtime | Foundry Agent Service | PaaS for agent infrastructure, multi-agent support |
| Enterprise workflow + AI | Azure Logic Apps | 1,400+ connectors, MCP server, AI agent workflows |
| Document processing | AI Builder | Prebuilt models, Power Platform integration |
| Workflow orchestration | Microsoft Agent Framework | Checkpointing, type-safe workflows, multi-agent patterns |

---

## Network Isolation Decision Matrix

| Technology | VNet Support | Private Endpoints | Managed VNet | Air-Gapped | Best For |
|------------|-------------|-------------------|--------------|------------|----------|
| **Microsoft Foundry (Azure)** | Full (GA, BYO VNet injection) | Yes | Preview (managed outbound) | Yes | Zero-trust, regulated, sovereign data |
| **Foundry Agent Service** | Full (GA, Standard Setup) | Yes (BYO Storage, Search, Cosmos DB) | Preview | Partial (some tools unsupported, see tool matrix) | Managed PaaS with private networking |
| **Copilot Studio** | Gateway-based | Via VNet data gateway | No | No | Managed PaaS with Azure resource access |
| **M365 Agents SDK** | Self-hosted | Yes (customer-managed) | No | Yes | Custom network control |
| **M365 Copilot** | No | No | No | No (gateway for on-prem data) | Managed SaaS only |

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
- Enable the project's system-assigned managed identity and grant it scoped access (for example, Storage Blob Data Reader) so hosted agents can call downstream services without secrets.[^foundry-managed-identity]
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

[^copilot-privacy]: Data, privacy, and security for Microsoft 365 Copilot, Microsoft Learn. Retrieved: 2026-03-09. [https://learn.microsoft.com/en-us/copilot/microsoft-365/microsoft-365-copilot-privacy](https://learn.microsoft.com/en-us/copilot/microsoft-365/microsoft-365-copilot-privacy)
[^copilot-audit]: Microsoft 365 Copilot reporting options for admins, Microsoft Learn. Retrieved: 2025-09-16. [https://learn.microsoft.com/en-us/copilot/microsoft-365/microsoft-365-copilot-reports-for-admins](https://learn.microsoft.com/en-us/copilot/microsoft-365/microsoft-365-copilot-reports-for-admins)
[^studio-authentication]: Configure user authentication in Copilot Studio, Microsoft Learn. Retrieved: 2025-11-25. [https://learn.microsoft.com/en-us/microsoft-copilot-studio/configuration-end-user-authentication](https://learn.microsoft.com/en-us/microsoft-copilot-studio/configuration-end-user-authentication)
[^studio-audit]: Audit Copilot Studio activities in Microsoft Purview, Microsoft Learn. Retrieved: 2026-01-27. [https://learn.microsoft.com/en-us/microsoft-copilot-studio/admin-logging-copilot-studio](https://learn.microsoft.com/en-us/microsoft-copilot-studio/admin-logging-copilot-studio)
[^foundry-rbac]: Role-based access control for Microsoft Foundry (Azure) (hub-focused), Microsoft Learn. Retrieved: 2025-12-31. [https://learn.microsoft.com/en-us/azure/ai-foundry/concepts/hub-rbac-azure-ai-foundry](https://learn.microsoft.com/en-us/azure/ai-foundry/concepts/hub-rbac-azure-ai-foundry)
[^foundry-managed-identity]: How to use Foundry Agent Service with OpenAPI specified tools - Authenticating with managed identity, Microsoft Learn. Retrieved: 2025-12-22. [https://learn.microsoft.com/en-us/azure/ai-foundry/agents/how-to/tools/openapi-spec#authenticating-with-managed-identity-microsoft-entra-id](https://learn.microsoft.com/en-us/azure/ai-foundry/agents/how-to/tools/openapi-spec#authenticating-with-managed-identity-microsoft-entra-id)
[^agentsdk-auth]: Configure authentication in a .NET agent (Microsoft 365 Agents SDK), Microsoft Learn. Retrieved: 2025-07-17. [https://learn.microsoft.com/en-us/microsoft-365/agents-sdk/microsoft-authentication-library-configuration-options](https://learn.microsoft.com/en-us/microsoft-365/agents-sdk/microsoft-authentication-library-configuration-options)
[^msal-config]: Configure authentication in a .NET agent (Microsoft 365 Agents SDK), Microsoft Learn. Retrieved: 2025-07-17. [https://learn.microsoft.com/en-us/microsoft-365/agents-sdk/microsoft-authentication-library-configuration-options](https://learn.microsoft.com/en-us/microsoft-365/agents-sdk/microsoft-authentication-library-configuration-options)
[^agentsdk-permissions]: Manage permissions for Microsoft 365 Copilot agents, Microsoft Learn. Retrieved: 2026-01-23. [https://learn.microsoft.com/en-us/microsoft-365/admin/manage/manage-agents-permissions](https://learn.microsoft.com/en-us/microsoft-365/admin/manage/manage-agents-permissions)
[^graph-permissions]: Overview of Microsoft Graph permissions, Microsoft Learn. Retrieved: 2025-12-26. [https://learn.microsoft.com/en-us/graph/permissions-overview](https://learn.microsoft.com/en-us/graph/permissions-overview)
