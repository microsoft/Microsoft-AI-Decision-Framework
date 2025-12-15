---
layout: default
title: Implementation Patterns
nav_order: 7
description: "Common patterns and best practices for implementing Microsoft AI solutions"
---

{: .note }
These patterns represent proven approaches for implementing Microsoft AI solutions. Each pattern includes clear guidance on when to use it and when to avoid it.

Use this page when you’ve identified a likely platform choice and want an execution-ready shape for delivery. Patterns are designed to be composable: it’s common to start with one pattern for speed (e.g., Copilot Studio) and adopt another as requirements mature (e.g., Azure-hosted orchestration).

---

## Table of contents
{: .no_toc .text-delta }

- [Pattern 1 – Start in Studio, Scale with Azure](#pattern-1-start-in-studio-scale-with-azure)
- [Pattern 2 – Pro-Code First, Surface in Copilot](#pattern-2-pro-code-first-surface-in-copilot)
- [Pattern 3 – Microsoft 365 Knowledge Grounding](#pattern-3-microsoft-365-knowledge-grounding)
- [Pattern 4 – Multi-Channel Custom Engine Agent with M365 Agents SDK](#pattern-4-multi-channel-custom-engine-agent-with-m365-agents-sdk)
- [Pattern 5 – Multi-Agent Workflows with Microsoft Agent Framework](#pattern-5-multi-agent-workflows-with-microsoft-agent-framework)
- [Pattern 6 – Progressive Enhancement (Low-Code to Pro-Code Bridge)](#pattern-6-progressive-enhancement-low-code-to-pro-code-bridge)
- [Pattern 7 – Translytical Agent (Fabric + Power BI)](#pattern-7-translytical-agent-fabric--power-bi)
- [Pattern 8: Agentic DevOps Lifecycle](#pattern-8-agentic-devops-lifecycle)
- [Pattern Selection Guide](#pattern-selection-guide)
- [Pattern Decision Tree](#pattern-decision-tree)

---

## Pattern 1: Start in Studio, Scale with Azure

**Approach:**

1. Launch in **Copilot Studio** to capture instructions, knowledge sources, and connectors with low-code orchestration.[^studio-overview]
2. Publish to the **Microsoft 365 channel** (Teams, Outlook, Copilot Chat) to validate adoption and governance early.[^studio-publish]
3. Add approvals, analytics, and DLP controls through Power Platform admin policies while you refine prompts and topic structure.[^studio-overview]
4. Break down responsibilities into **child** and **connected agents** so specialized copilots can collaborate while you stay in the maker canvas.[^connected-agents]
5. When orchestration or private hosting requirements emerge, keep Copilot Studio as the front door while introducing **Foundry Agent Service** plus **Agent Framework** workflows, and expose the orchestrator back through Copilot Studio or the Microsoft 365 Agents SDK.[^agentservice-overview][^agent-framework][^integrate-mcs]

**Strengths:**

- Fastest time-to-value for **low/medium complexity** use cases; aligns with makers in the Evaluation Criteria skills matrix.
- Reuses Power Platform connectors and managed capacity instead of standing up Azure infrastructure.
- Built-in analytics, transcript review, and admin approvals support early compliance conversations.
- Connected and child agents let you validate multi-agent responsibilities before handing orchestration to pro-code teams.[^connected-agents]

**Trade-offs:**

- Advanced orchestration, custom routing, or strict VNet isolation still require an Azure landing zone.[^agentservice-overview]
- Connected agents are Preview and require agents to live in the same environment; plan ALM accordingly.[^connected-agents]
- Service-account execution must be reviewed to avoid over-privileged actions (align with the [Action Safety Guardrail Playbook]({{ '/docs/evaluation-criteria#action-safety-guardrail-playbook' | relative_url }})).
- Consumption is metered per message, so sustained high-volume scenarios should model capacity vs. Azure consumption costs before scaling.

**Signals this fits (Evaluation Criteria crosswalk):**

- Time-to-production measured in **days → weeks**.
- Teams have **makers or mixed maker/dev** skill sets.
- Budget tolerance focused on managed SaaS (Copilot Studio capacity) rather than Azure infrastructure.

**When to pivot:** Move to Pattern 2 or 4 when pro-code teams need sustained control across channels, or Pattern 5 if Agent Framework orchestration becomes the primary investment.

**Sources:**

- [Copilot Studio overview](https://learn.microsoft.com/en-us/microsoft-copilot-studio/overview-what-is-copilot-studio)[^studio-overview]
- [Add custom Copilot Studio agents to Microsoft 365](https://learn.microsoft.com/en-us/microsoft-365-copilot/extensibility/publish)[^studio-publish]
- [Foundry Agent Service overview](https://learn.microsoft.com/en-us/azure/ai-foundry/agents/overview)[^agentservice-overview]

**Status:** Recommended pattern for proofs of concept and iterative delivery
**Confidence Level:** High (official Microsoft guidance)

---

## Pattern 2: Pro-Code First, Surface in Copilot

**Approach:**

1. Design and build in **Azure AI Foundry** or Foundry Agent Service to control model selection, prompt flow evaluations, and custom toolchains.[^agentservice-overview]
2. Implement RAG with Azure AI Search, Cosmos DB, or **SQL Server 2025** (native vector support) depending on data gravity.[^feature-comparison]
3. Host the agent in Azure services you already operate (Container Apps, App Service, AKS) so networking, logging, and secrets align with your landing zone standards.[^evaluation-governance]
4. Expose the experience inside Microsoft 365 through API plugins or custom engine agents created with the Microsoft 365 Agents SDK.[^api-plugins][^agentsdk-overview]

**Strengths:**

- Full control over orchestration, latency budgets, and data residency; ideal for **high/very high complexity** use cases in the Evaluation Criteria.
- Reuses existing Azure engineering investments (policy, monitoring, private endpoints).
- Flexible channel reach—web, mobile, Microsoft 365, or bespoke user interfaces—using the Agents SDK as a distribution layer.[^agentsdk-overview]

**Trade-offs:**

- Requires dedicated engineering capacity (pro developers, DevOps) and longer lead time (weeks → months).
- Azure consumption costs accumulate across hosting, vector stores, and observability; financial modeling is required up front.
- Teams must implement Responsible AI controls (content safety, approvals) themselves or integrate Azure services such as AI Content Safety.

**Signals this fits:**

- You already operate an Azure landing zone with security/compliance guardrails.
- Teams have the **pro developer** profile in Evaluation Criteria, including infrastructure ownership.
- Use case demands deterministic orchestration, custom metrics, or hybrid channel support.

**When to pivot:** If the pilot stalls due to skill or budget constraints, return to Pattern 1 to validate scope, or move to Pattern 4 when multi-channel distribution is required but you can partner with product teams for shared orchestration.

**Sources:**

- [Foundry Agent Service overview](https://learn.microsoft.com/en-us/azure/ai-foundry/agents/overview)[^agentservice-overview]
- [Microsoft AI Feature Comparison]({{ '/docs/feature-comparison' | relative_url }})[^feature-comparison]
- [Evaluation Criteria – Governance & Compliance]({{ '/docs/evaluation-criteria#governance--compliance' | relative_url }})[^evaluation-governance]
- [API plugins for Microsoft 365 Copilot](https://learn.microsoft.com/en-us/microsoft-365-copilot/extensibility/overview-api-plugins)[^api-plugins]
- [Microsoft 365 Agents SDK overview](https://learn.microsoft.com/en-us/microsoft-365/agents-sdk/agents-sdk-overview)[^agentsdk-overview]

**Status:** Recommended when enterprise teams lead with Azure-first architecture
**Confidence Level:** High (official Microsoft guidance + internal comparison tables)

---

## Pattern 3: Microsoft 365 Knowledge Grounding

**Approach:**

1. Add SharePoint, OneDrive, and Teams knowledge sources directly in Copilot Studio so the agent grounds answers in tenant-secured content with security trimming.[^knowledge-sharepoint]
2. Configure a **declarative agent** (Copilot Studio or Microsoft 365 Agents Toolkit) that references those knowledge sources and provides conversation starters aligned to business vernacular.[^declarative-agents]
3. Extend coverage with Microsoft Graph connectors when you need external line-of-business or third-party content indexed into Microsoft 365 Search and Copilot experiences.[^graph-connectors]
4. Optionally attach **API plugins** for light actions (create tickets, file requests) while keeping the agent primarily read-oriented.[^api-plugins]
5. Publish to Microsoft 365 Copilot or Teams to meet users where they already work; analytics and governance stay inside Microsoft 365.[^studio-publish]

**Strengths:**

- Safest path for **read-only** experiences; inherits Microsoft 365 identity, compliance, and data loss prevention controls without extra infrastructure.[^knowledge-sharepoint]
- Minimal build effort—aligns with **low complexity / low budget** profiles in Evaluation Criteria while improving search and retrieval outcomes.
- Scales rapidly because indexing, security trimming, and citations are handled by Microsoft 365 knowledge services.

**Trade-offs:**

- Limited to knowledge sources supported by Copilot Studio and Microsoft Graph connectors; large unstructured repositories may require Azure AI Search (Pattern 2).
- Declarative agents rely on prompt engineering rather than custom orchestration; cannot enforce complex workflows without escalating to Patterns 1 or 4.
- Actions via API plugins introduce consent prompts and require ongoing API management.

**Signals this fits:**

- Goal is improved knowledge discovery, policy lookup, or FAQ automation.
- Users will consume the agent inside Microsoft 365 applications.
- Governance stakeholders need confidence that the agent cannot mutate records without explicit approvals.
- Business owners want to keep delivery within the Microsoft 365 licensing boundary before investing in Azure infrastructure.

**When to pivot:** Add Pattern 1 when you need richer Power Platform actions, or Pattern 2 when integrating large non-Microsoft 365 datasets or when RAG precision/latency must be tuned outside Microsoft Search.

**Sources:**

- [Add SharePoint as a knowledge source](https://learn.microsoft.com/en-us/microsoft-copilot-studio/knowledge-add-sharepoint)[^knowledge-sharepoint]
- [Add knowledge sources to declarative agents](https://learn.microsoft.com/en-us/microsoft-365-copilot/extensibility/copilot-studio-lite-knowledge)[^knowledge-sources]
- [Microsoft Graph connectors overview](https://learn.microsoft.com/en-us/graph/connecting-external-content-connectors-overview)[^graph-connectors]
- [Declarative agents for Microsoft 365 Copilot overview](https://learn.microsoft.com/en-us/microsoft-365-copilot/extensibility/overview-declarative-agent)[^declarative-agents]
- [API plugins for Microsoft 365 Copilot](https://learn.microsoft.com/en-us/microsoft-365-copilot/extensibility/overview-api-plugins)[^api-plugins]
- [Add custom Copilot Studio agents to Microsoft 365](https://learn.microsoft.com/en-us/microsoft-365-copilot/extensibility/publish)[^studio-publish]

**Status:** Recommended for M365-centric knowledge scenarios
**Confidence Level:** High (official Microsoft guidance)

---

## Pattern 4: Multi-Channel Custom Engine Agent with M365 Agents SDK

**Approach:**

1. Scaffold a custom engine agent with the **Microsoft 365 Agents Toolkit** in Visual Studio/VS Code so you get channel adapters, debugging playground, and deployment templates out of the box.[^agents-toolkit]
2. Implement orchestration inside the agent container—prefer **Microsoft Agent Framework** (Preview) for multi-agent workflows, or plug in your existing orchestrator through the SDK’s activity pipeline.[^agent-framework][^agentsdk-overview]
3. Connect enterprise knowledge and actions by wiring Azure AI Search, Azure OpenAI, Microsoft Graph connectors, or first-party APIs behind secured tool handlers.[^agentsdk-build]
4. Configure channel reach and authentication using the Agents SDK adapters (Copilot, Teams, custom web, Direct Line) and align identity with Entra ID scopes.[^agentsdk-overview]
5. Deploy the agent to your Azure landing zone (Container Apps, App Service, AKS) and publish through the Agents Toolkit so Microsoft 365 users can discover it in Copilot while other apps call the same endpoint.[^agents-toolkit][^bring-agents]

**Strengths:**

- Full control over orchestration, tooling, telemetry, and hosting—fits **high/very high complexity** profiles in Evaluation Criteria.[^agentsdk-build]
- Single codebase can service Microsoft 365 Copilot, Teams, custom web or mobile clients using built-in channel adapters.[^agents-toolkit]
- Integrates cleanly with existing Azure DevSecOps practices (CI/CD, logging, private networking) and reusable agent components.[^agents-toolkit]

**Trade-offs:**

- Requires pro-code engineering, multi-environment CI/CD, and sustained ownership—time-to-production typically **weeks → months**.[^agentsdk-build]
- Agent Framework capabilities remain Preview; plan for API surface changes and feature flags.[^agent-framework]
- Because you bring your own orchestrator and tooling, you own Responsible AI guardrails (content safety, approvals, auditing) inside the agent container.[^agentsdk-overview]

**Signals this fits:**

- You already run orchestrators or LLM infrastructure in Azure and need to surface them inside Microsoft 365.[^agentsdk-build]
- Product teams need channel-specific behaviors (Teams meetings, custom apps) beyond what Copilot Studio supports.[^agentsdk-overview]
- Security/compliance teams require fine-grained control over networking, secrets, and approvals.[^agents-toolkit]

**When to pivot:** Use Pattern 2 if the experience will remain outside Microsoft 365, or Pattern 1/3 when low-code teams can deliver the scenario faster without custom hosting.

**Sources:**

- [Microsoft 365 Agents SDK overview](https://learn.microsoft.com/en-us/microsoft-365/agents-sdk/agents-sdk-overview)[^agentsdk-overview]
- [Build custom engine agents with Microsoft 365 Agents SDK](https://learn.microsoft.com/en-us/microsoft-365-copilot/extensibility/m365-agents-sdk)[^agentsdk-build]
- [Microsoft 365 Agents Toolkit](https://learn.microsoft.com/en-us/microsoft-365/developer/overview-m365-agents-toolkit)[^agents-toolkit]
- [Microsoft Agent Framework concepts](https://learn.microsoft.com/en-us/azure/ai-services/agents/concepts/agent-framework)[^agent-framework]
- [Bring your agents into Microsoft 365 Copilot](https://learn.microsoft.com/en-us/microsoft-365-copilot/extensibility/bring-agents-to-copilot)[^bring-agents]

**Status:** Recommended for enterprise-grade, pro-code agents spanning multiple channels
**Confidence Level:** High (Agents SDK GA, Agent Framework Preview)

---

## Pattern 5: Multi-Agent Workflows with Microsoft Agent Framework

**Approach:**

1. Model the orchestration in **Agent Framework Workflows** to get type-safe executors, edges, and validation before anything runs.[^agent-workflows]
2. Stand up specialized agents (Foundry Agent Service, Azure AI Foundry, or custom ChatClient agents) and register them as workflow executors.[^agent-azure-workflow][^agent-azure-agent]
3. Choose the right orchestration pattern—Sequential, Concurrent, Handoff, Group Chat, or Magentic—and configure routing rules that match each agent’s responsibilities.[^agent-orchestrations]
4. Add reliability primitives like checkpointing, event streaming, and human-in-the-loop gates before hosting the workflow runtime.[^agent-checkpoint]
5. Expose the orchestrator through your preferred surface (M365 Agents SDK, web API, Logic Apps trigger) so downstream channels can invoke the multi-agent workflow. Use the AG-UI protocol (Preview) when you need streaming, shared state, or human-approval experiences in custom web or mobile clients.[^agentsdk-overview][^agui-integration]

**Strengths:**

- Purpose-built for complex, multi-step collaboration with first-class orchestration patterns.[^agent-orchestrations]
- Strong typing, validation, and checkpointing reduce runtime surprises in long-running or regulated processes.[^agent-workflows][^agent-checkpoint]
- Works with Foundry Agent Service or persistent Foundry agents, letting you reuse enterprise-grade agents inside coordinated workflows.[^agent-azure-workflow][^agent-azure-agent]
- Surfaces advanced UI experiences through the AG-UI protocol with Server-Sent Events streaming, backend tool rendering, and human-in-the-loop approvals.[^agui-integration]

**Trade-offs:**

- Microsoft Agent Framework is still in **Public Preview**; expect API churn and package updates.[^agentframework-overview]
- Advanced orchestration features (for example, Magentic) remain experimental and require tolerance for pre-release quality.[^agent-orchestrations]
- Engineering teams must own hosting, monitoring, and Responsible AI guardrails across all agents in the workflow.[^agent-transparency]

**Signals this fits:**

- A single agent can’t reliably complete the workflow—each task needs a specialized agent or tool chain.[^agent-transparency]
- You need deterministic control over multi-agent routing, sequencing, or human approvals.[^agent-workflows]
- Teams already build in .NET or Python and can maintain preview SDKs.[^agentframework-overview]

**When to pivot:** Stay with Patterns 1–4 when a single agent or low-code orchestration meets the requirement; Agent Framework adds value only once coordination overhead is justified.[^agent-transparency]

**Sources:**

- [Microsoft Agent Framework overview](https://learn.microsoft.com/en-us/agent-framework/overview/agent-framework-overview)[^agentframework-overview]
- [Microsoft Agent Framework Workflows](https://learn.microsoft.com/en-us/agent-framework/user-guide/workflows/overview)[^agent-workflows]
- [Agent Framework orchestration patterns](https://learn.microsoft.com/en-us/agent-framework/user-guide/workflows/orchestrations/overview)[^agent-orchestrations]
- [Checkpointing and resuming workflows](https://learn.microsoft.com/en-us/agent-framework/tutorials/workflows/checkpointing-and-resuming)[^agent-checkpoint]
- [Agents in Workflows tutorial](https://learn.microsoft.com/en-us/agent-framework/tutorials/workflows/agents-in-workflows)[^agent-azure-workflow]
- [Azure AI Foundry Agents integration](https://learn.microsoft.com/en-us/agent-framework/user-guide/agents/agent-types/azure-ai-foundry-agent)[^agent-azure-agent]
- [Foundry Agent Service transparency note](https://learn.microsoft.com/en-us/azure/ai-foundry/responsible-ai/agents/transparency-note#capabilities)[^agent-transparency]

**Status:** Microsoft Agent Framework (Public Preview); Foundry Agent Service (GA)
**Confidence Level:** Medium (preview framework + GA runtime)

---

## Pattern 6: Progressive Enhancement (Low-Code to Pro-Code Bridge)

**Approach:**

1.  **Start:** Build the core agent in **Copilot Studio** to handle standard intents, FAQs, and simple flows.
2.  **Enhance (Reasoning):** Swap the default model for a **BYO Model** from Azure AI Foundry (e.g., a fine-tuned GPT-4o or specialized SLM) to improve domain-specific reasoning without changing the UI.[^byo-model]
3.  **Extend (Orchestration):** Identify complex, multi-step tasks that require advanced planning. Build these as **Foundry Agent Service** agents.
4.  **Connect:** Use the **Agent Handoff** pattern to let the Copilot Studio agent delegate these specific tasks to the Azure agent, then receive the result back to present to the user.[^agent-handoff]
5.  **Share:** Point both the Copilot Studio agent and the Azure agent to the same **Azure AI Search** index so they share a "brain" (knowledge base).[^shared-knowledge]

**Strengths:**

*   **Best of Both Worlds:** Makers keep the low-code management canvas; developers get full control over the "hard parts" (reasoning/orchestration).
*   **No Migration Cliff:** You don't have to throw away the Copilot Studio agent and rewrite it in Python just to add one complex feature.
*   **Unified Governance:** The "Front Door" (Copilot Studio) handles auth, channel publishing, and basic logging, while Azure handles the heavy compute.

**Trade-offs:**

*   **Latency:** Handoffs introduce a network hop between Copilot Studio and Azure.
*   **Complexity:** Requires managing two environments (Power Platform + Azure).
*   **Preview Features:** BYO Model and Agent Handoff are currently in Preview.

**Signals this fits:**

*   You have a working Copilot Studio agent but it struggles with *one specific complex task*.
*   You need a specialized model (e.g., medical/legal fine-tune) but want to keep the easy Teams integration of Copilot Studio.
*   You have a mixed team (Makers + Pro Devs) collaborating on the same bot.

**When to pivot:** If *most* of the agent's logic is moving to Azure, switch to **Pattern 2** (Pro-Code First) to reduce the overhead of the dual-stack approach.

**Sources:**

*   [Bring Your Own Model to Copilot Studio](https://learn.microsoft.com/microsoft-copilot-studio/advanced-generative-actions)[^byo-model]
*   [Agent Handoff to Foundry Agent Service](https://learn.microsoft.com/azure/ai-foundry/agents/how-to/handoff-copilot)[^agent-handoff]
*   [Azure AI Search Overview](https://learn.microsoft.com/azure/search/)[^shared-knowledge]

**Status:** Recommended for hybrid teams and scaling existing low-code agents
**Confidence Level:** Medium (Relies on Preview features)

---

## Pattern 7: Translytical Agent (Fabric + Power BI)

**Approach:**

1. Ingest data into **OneLake** via Fabric shortcuts or pipelines to create a unified data estate.[^fabric-onelake]
2. Enable **Fabric Data Agents** (Preview) on your semantic models to allow conversational Q&A over structured data.[^fabric-copilot]
3. Use **Translytical Task Flows** to embed "Action" buttons directly in Power BI reports, allowing users to trigger business processes (via Power Automate or Logic Apps) based on insights.[^translytical]
4. For custom scenarios, build a **Cosmos DB** database with analytical store enabled, mirroring data to OneLake for near real-time analytics without ETL.[^cosmos-mirroring]

**Strengths:**

- **Zero-ETL:** Analyzes data where it lives (OneLake/Cosmos DB) without moving it.
- **Actionable Insights:** Closes the loop between "seeing a problem" (Analytics) and "fixing it" (Transaction) via Task Flows.
- **Business User Friendly:** Users interact via chat (Fabric Copilot) or familiar Power BI interfaces.

**Trade-offs:**

- **Fabric Data Agents** are for *analytics retrieval*, not general-purpose orchestration. They don't "do" things outside of data analysis unless paired with Task Flows.
- Requires Fabric capacity and appropriate licensing.

**Signals this fits:**

- The primary goal is "Chat with Data" or "Insight-to-Action".
- Data gravity is in OneLake or SQL/Cosmos DB.
- Users are analysts or business decision-makers using Power BI.

**When to pivot:** If you need complex multi-step orchestration beyond simple actions, use **Pattern 5** (Agent Framework) and have it call Fabric APIs for data.

**Sources:**

- [Microsoft Fabric Copilot overview](https://learn.microsoft.com/fabric/get-started/copilot-fabric-overview)[^fabric-copilot]
- [OneLake shortcuts](https://learn.microsoft.com/fabric/onelake/onelake-shortcuts)[^fabric-onelake]
- [Cosmos DB Mirroring](https://learn.microsoft.com/azure/cosmos-db/mirroring-introduction)[^cosmos-mirroring]
- [Power BI Task Flows](https://learn.microsoft.com/power-bi/create-reports/power-bi-task-flows)[^translytical]

**Status:** Recommended for Data-First / Analytics-First scenarios
**Confidence Level:** Medium (Fabric Data Agents are Preview)

---

## Pattern 8: Agentic DevOps Lifecycle

**Approach:**

1.  **Plan:** Developer assigns a task (refactor, test, feature) to **GitHub Copilot Coding Agent** via a GitHub Issue.
2.  **Code:** Coding Agent autonomously creates a branch, writes code, runs tests, and opens a Pull Request.
3.  **Review:** Developer reviews the PR in **VS Code (Agent Mode)** or GitHub.com.
4.  **Deploy:** CI/CD pipeline deploys the change.
5.  **Monitor:** **Azure SRE Agent** monitors the application in production.
6.  **Fix:** If an alert fires, SRE Agent performs RCA and creates a new GitHub Issue for the Coding Agent to fix.

**Strengths:**

- **Asynchronous Productivity:** Developers offload routine tasks and focus on architecture/review.
- **Self-Healing:** The loop between SRE Agent (Monitor) and Coding Agent (Fix) reduces MTTR.
- **Integrated Context:** Agents share context via the GitHub platform (Issues, PRs, Code).

**Trade-offs:**

- **Trust & Verification:** Requires rigorous testing and review gates; "autonomy" does not mean "unsupervised".
- **Cost:** Agent usage (Coding Agent, SRE Agent) is metered; monitor token consumption.
- **Complexity:** Requires setting up multiple agents and ensuring they have correct permissions (Repo write, Azure Monitor read).

**Signals this fits:**

- Team spends significant time on maintenance, boilerplate, or firefighting.
- Mature DevOps practices (CI/CD, automated testing) are already in place.
- "Inner loop" velocity is a bottleneck.

**When to pivot:** If the codebase is too legacy or lacks tests, start with **Scenario 8 (App Modernization)** to clean it up first.

**Sources:**

- [GitHub Copilot Workspace](https://githubnext.com/projects/copilot-workspace)
- [Azure SRE Agent (Preview)](https://learn.microsoft.com/azure/ai-foundry/agents/overview)

**Status:** Emerging Pattern (Preview)
**Confidence Level:** Medium (Rapidly evolving)

---

### Pattern Selection Guide
{: .no_toc }

| **Pattern** | **Time to Market** | **Complexity** | **Control Level** | **Best User Experience** |
|-------------|-------------------|----------------|-------------------|--------------------------|
| **Pattern 1 (Studio → Azure)** | Fast (days to weeks) | Start Simple → Scale Complex | Low → High | M365 Copilot, Teams |
| **Pattern 2 (Pro-Code First)** | Moderate (weeks to months) | High | Full | M365 Copilot, Custom Apps |
| **Pattern 3 (M365 Knowledge)** | Fast (days) | Low | Medium | M365 Copilot (native) |
| **Pattern 4 (Multi-Channel SDK)** | Moderate (weeks) | High | Full | 10+ channels |
| **Pattern 5 (Agent Framework)** | Moderate (weeks to months) | Very High | Full | Multi-agent workflows |
| **Pattern 6 (Progressive)** | Moderate (weeks) | Medium | High | M365 Copilot, Teams |
| **Pattern 7 (Translytical)** | Fast (days) | Medium | Medium | Power BI, Fabric |
| **Pattern 8 (Agentic DevOps)** | Moderate (weeks) | Medium | High | GitHub, Azure DevOps |

---

### Pattern Decision Tree
{: .no_toc }


#### Ground yourself first

1. **Run the BXT gate.** Confirm viability, desirability, and feasibility in [Decision Framework Phase 1]({{ '/docs/decision-framework#phase-1-business-impact-assessment-bxt-framework' | relative_url }}). Any red score means pause here—capture the scenario in the [Scenarios backlog]({{ '/docs/scenarios#how-to-use-this-guide' | relative_url }})) instead of forcing a pattern.

2. **Anchor the user experience.**  
   - **M365-first surface** (Teams, Outlook, Word) → stay inside the Microsoft 365 trust boundary with **Pattern 3** for knowledge-only needs[^pattern3-knowledge] or **Pattern 1** when you need orchestrated actions and governance controls inside Copilot Studio[^pattern1-actions].  
   - **Multi-channel or custom apps** (web, mobile, SMS, API) → continue to step 3 with **Patterns 2 or 4** in play.

3. **Clarify delivery ownership (avoid the low-code vs pro-code trap).** Use the skills, time, and funding matrices in [Evaluation Criteria]({{ '/docs/evaluation-criteria#skills--resources' | relative_url }}). Decide who will build and run the backlog, not which UI they click.  
   - **Maker-led or mixed squads** who will operate inside Copilot Studio, yet can still call custom APIs or child agents, start with **Pattern 1** and expand to Azure as needed.  
   - **Engineer-led product teams** with CI/CD, observability, and landing-zone governance treat **Pattern 2** (Azure-first) or **Pattern 4** (Agents SDK distribution) as the default.  
   - **Hybrid hand-offs** (makers capturing intent, engineers owning orchestration) combine **Pattern 1** for the front door with **Pattern 2**/**Pattern 4** services behind it.[^skills-matrix]

4. **Decide the governance boundary.** Align with the governance table in [Evaluation Criteria]({{ '/docs/evaluation-criteria#governance--compliance' | relative_url }}).  
   - **Stay inside Microsoft 365 tenant controls** → **Pattern 1** or **Pattern 3**.  
   - **Require VNet isolation, private endpoints, or custom compliance** → **Pattern 2** or **Pattern 4**.  
   - **Hybrid front door** (Copilot Studio + Azure runtime) → combine **Pattern 1** and **Pattern 2** as described in Pattern 1’s “Scale with Azure” step.

5. **Assess orchestration complexity.** Mirror the “Multi-Agent Orchestration” diagram in [Visual Framework]({{ '/docs/visual-framework#multi-agent-orchestration' | relative_url }}).  
   - **Managed connected/child agents or Logic Apps AI Agent workflows suffice** → stay with **Patterns 1 or 2** and lean on those tooling features.  
   - **Need programmable routing, checkpointing, or specialized agent collaboration** → invest in **Pattern 5** (Agent Framework workflows) and surface them through **Pattern 2** or **Pattern 4** channels.[^agent-workflows][^agentsdk-overview]

**Before you decide:** Validate your choice against the scenario playbooks in [Scenarios]({{ '/docs/scenarios' | relative_url }}) and the capability layers in [Five-Layer Capability Model]({{ '/docs/capability-model' | relative_url }}) to ensure the pattern supports the right layer of Microsoft’s AI portfolio. Use the comparison matrices in [Quick Reference]({{ '/docs/quick-reference' | relative_url }}) to double-check complexity, skills, budget, and governance trade-offs.

[^pattern3-knowledge]: Add SharePoint as a knowledge source in Copilot Studio, Microsoft Learn. Updated: 2025-09-15. [https://learn.microsoft.com/en-us/microsoft-copilot-studio/knowledge-add-sharepoint](https://learn.microsoft.com/en-us/microsoft-copilot-studio/knowledge-add-sharepoint)
[^pattern1-actions]: Microsoft 365 Copilot release notes — August 19, 2025, Microsoft Learn. [https://learn.microsoft.com/en-us/copilot/microsoft-365/release-notes#august-19,-2025](https://learn.microsoft.com/en-us/copilot/microsoft-365/release-notes#august-19,-2025)
[^skills-matrix]: Evaluation Criteria — Skills & Resources, Microsoft AI Decision Framework. See `docs/evaluation-criteria.md`.
[^agent-workflows]: Microsoft Agent Framework Workflows overview, Microsoft Learn. [https://learn.microsoft.com/en-us/agent-framework/user-guide/workflows/overview](https://learn.microsoft.com/en-us/agent-framework/user-guide/workflows/overview)
[^agentsdk-overview]: Microsoft 365 Agents SDK overview, Microsoft Learn. [https://learn.microsoft.com/en-us/microsoft-365/agents-sdk/agents-sdk-overview](https://learn.microsoft.com/en-us/microsoft-365/agents-sdk/agents-sdk-overview)

---

{: .note-title }
> Related Resources
>
> - For technology comparison tables, see [Quick Reference]({{ '/docs/quick-reference' | relative_url }})
> - For real-world applications of these patterns, see [Scenarios]({{ '/docs/scenarios' | relative_url }})
> - For evaluation criteria, see [Evaluation Criteria]({{ '/docs/evaluation-criteria' | relative_url }})
> - For guardrail guidance, see [Action Safety Guardrail Playbook]({{ '/docs/evaluation-criteria#action-safety-guardrail-playbook' | relative_url }})

---

**Next:** [Technologies]({{ '/docs/technologies' | relative_url }}) - Deep dive into technical specifications

[^studio-overview]: Microsoft Copilot Studio overview, Microsoft Learn. Retrieved: 2025-11-11. [https://learn.microsoft.com/en-us/microsoft-copilot-studio/overview-what-is-copilot-studio](https://learn.microsoft.com/en-us/microsoft-copilot-studio/overview-what-is-copilot-studio)
[^studio-publish]: Add custom Copilot Studio agents to Microsoft 365, Microsoft Learn. Retrieved: 2025-11-11. [https://learn.microsoft.com/en-us/microsoft-365-copilot/extensibility/publish](https://learn.microsoft.com/en-us/microsoft-365-copilot/extensibility/publish)
[^agentservice-overview]: Foundry Agent Service overview, Microsoft Learn. Retrieved: 2025-11-11. [https://learn.microsoft.com/en-us/azure/ai-foundry/agents/overview](https://learn.microsoft.com/en-us/azure/ai-foundry/agents/overview)
[^connected-agents]: Add other agents (Preview), Microsoft Copilot Studio documentation. Retrieved: 2025-11-11. [https://learn.microsoft.com/en-us/microsoft-copilot-studio/authoring-add-other-agents](https://learn.microsoft.com/en-us/microsoft-copilot-studio/authoring-add-other-agents)
[^agent-framework]: Microsoft Agent Framework concepts, Microsoft Learn. Retrieved: 2025-11-11. [https://learn.microsoft.com/en-us/azure/ai-services/agents/concepts/agent-framework](https://learn.microsoft.com/en-us/azure/ai-services/agents/concepts/agent-framework)
[^integrate-mcs]: Integrate with Copilot Studio using the Microsoft 365 Agents SDK, Microsoft Learn. Retrieved: 2025-11-11. [https://learn.microsoft.com/en-us/microsoft-365/agents-sdk/integrate-with-mcs](https://learn.microsoft.com/en-us/microsoft-365/agents-sdk/integrate-with-mcs)
[^feature-comparison]: See `docs/feature-comparison.md` for the detailed comparison matrices referenced in this pattern.
[^evaluation-governance]: See Governance & Compliance in `docs/evaluation-criteria.md#governance--compliance` for scoring guidance.
[^api-plugins]: API plugins for Microsoft 365 Copilot, Microsoft Learn. Retrieved: 2025-11-11. [https://learn.microsoft.com/en-us/microsoft-365-copilot/extensibility/overview-api-plugins](https://learn.microsoft.com/en-us/microsoft-365-copilot/extensibility/overview-api-plugins)
[^agents-toolkit]: Microsoft 365 Agents Toolkit overview, Microsoft Learn. Retrieved: 2025-11-11. [https://learn.microsoft.com/en-us/microsoft-365/developer/overview-m365-agents-toolkit](https://learn.microsoft.com/en-us/microsoft-365/developer/overview-m365-agents-toolkit)
[^agentsdk-build]: Build custom engine agents with Microsoft 365 Agents SDK, Microsoft Learn. Retrieved: 2025-11-11. [https://learn.microsoft.com/en-us/microsoft-365-copilot/extensibility/m365-agents-sdk](https://learn.microsoft.com/en-us/microsoft-365-copilot/extensibility/m365-agents-sdk)
[^agentframework-overview]: Microsoft Agent Framework overview, Microsoft Learn. Retrieved: 2025-11-11. [https://learn.microsoft.com/en-us/agent-framework/overview/agent-framework-overview](https://learn.microsoft.com/en-us/agent-framework/overview/agent-framework-overview)
[^agent-orchestrations]: Agent Framework orchestration overview, Microsoft Learn. Retrieved: 2025-11-11. [https://learn.microsoft.com/en-us/agent-framework/user-guide/workflows/orchestrations/overview](https://learn.microsoft.com/en-us/agent-framework/user-guide/workflows/orchestrations/overview)
[^agent-checkpoint]: Checkpointing and resuming workflows, Microsoft Learn. Retrieved: 2025-11-11. [https://learn.microsoft.com/en-us/agent-framework/tutorials/workflows/checkpointing-and-resuming](https://learn.microsoft.com/en-us/agent-framework/tutorials/workflows/checkpointing-and-resuming)
[^agent-azure-workflow]: Agents in Workflows tutorial, Microsoft Learn. Retrieved: 2025-11-11. [https://learn.microsoft.com/en-us/agent-framework/tutorials/workflows/agents-in-workflows](https://learn.microsoft.com/en-us/agent-framework/tutorials/workflows/agents-in-workflows)
[^agent-azure-agent]: Azure AI Foundry Agents integration, Microsoft Learn. Retrieved: 2025-11-11. [https://learn.microsoft.com/en-us/agent-framework/user-guide/agents/agent-types/azure-ai-foundry-agent](https://learn.microsoft.com/en-us/agent-framework/user-guide/agents/agent-types/azure-ai-foundry-agent)
[^agent-transparency]: Foundry Agent Service transparency note, Microsoft Learn. Retrieved: 2025-11-11. [https://learn.microsoft.com/en-us/azure/ai-foundry/responsible-ai/agents/transparency-note#capabilities](https://learn.microsoft.com/en-us/azure/ai-foundry/responsible-ai/agents/transparency-note#capabilities)
[^agui-integration]: AG-UI integration with Agent Framework, Microsoft Learn. Preview, Updated: 2025-11-11. [https://learn.microsoft.com/en-us/agent-framework/integrations/ag-ui/](https://learn.microsoft.com/en-us/agent-framework/integrations/ag-ui/)
[^graph-connectors]: Microsoft Graph connectors overview (external data indexing into Microsoft 365), Microsoft Learn. Retrieved: 2025-11-11. [https://learn.microsoft.com/en-us/graph/connecting-external-content-connectors-overview](https://learn.microsoft.com/en-us/graph/connecting-external-content-connectors-overview)
[^declarative-agents]: Declarative agents for Microsoft 365 Copilot overview, Microsoft Learn. Retrieved: 2025-11-11. [https://learn.microsoft.com/en-us/microsoft-365-copilot/extensibility/overview-declarative-agent](https://learn.microsoft.com/en-us/microsoft-365-copilot/extensibility/overview-declarative-agent)
[^knowledge-sharepoint]: Add SharePoint as a knowledge source in Copilot Studio, Microsoft Learn. Retrieved: 2025-11-11. [https://learn.microsoft.com/en-us/microsoft-copilot-studio/knowledge-add-sharepoint](https://learn.microsoft.com/en-us/microsoft-copilot-studio/knowledge-add-sharepoint)
[^knowledge-sources]: Add knowledge sources to declarative agents in Microsoft 365 Copilot, Microsoft Learn. Retrieved: 2025-11-11. [https://learn.microsoft.com/en-us/microsoft-365-copilot/extensibility/copilot-studio-lite-knowledge](https://learn.microsoft.com/en-us/microsoft-365-copilot/extensibility/copilot-studio-lite-knowledge)
[^bring-agents]: Bring your agents into Microsoft 365 Copilot, Microsoft Learn. Retrieved: 2025-11-11. [https://learn.microsoft.com/en-us/microsoft-365-copilot/extensibility/bring-agents-to-copilot](https://learn.microsoft.com/en-us/microsoft-365-copilot/extensibility/bring-agents-to-copilot)
