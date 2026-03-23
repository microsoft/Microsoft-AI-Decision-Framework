---
layout: default
title: Scenarios
nav_order: 4
description: "Real-world scenarios with technology recommendations"
---

<!-- markdownlint-disable MD022 MD024 MD025 MD032 MD055 -->

# Scenarios
{: .no_toc }

Real-world use cases with step-by-step technology recommendations.
{: .fs-6 .fw-300 }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## How to Use This Guide

Use scenarios as a guided learning path: they show how the same Microsoft portfolio components combine in different ways depending on constraints (data boundary, governance, skills, time-to-production). If you’re not sure where to start, use the [Decision Framework]({{ '/docs/decision-framework' | relative_url }}) to pick a build style and trust boundary, then use [Evaluation Criteria]({{ '/docs/evaluation-criteria' | relative_url }}) to sanity-check complexity and readiness.

Each scenario follows this structure:
- **Business Context:** The problem to solve
- **Key Requirements:** Must-have capabilities
- **Recommended Technologies:** Best-fit Microsoft AI technologies
- **Implementation Steps:** High-level approach
- **Alternative Approaches:** Other valid options

---

## Scenario 1: HR Knowledge Base Bot

### Business Context
{: #scenario1-business-context .no_toc }

Employees need instant answers to HR questions (policies, benefits, PTO) without waiting for HR staff responses. HR team maintains documentation in SharePoint but also depends on Workday and ServiceNow to view status or create tickets.

### Key Requirements
{: #scenario1-key-requirements .no_toc }

- Access company HR policies and procedures
- Available in Microsoft Teams (where employees work)
- Stay within M365 trust boundary (sensitive HR data)
- Connect HR knowledge with Workday/ServiceNow/SAP workflows
- No coding resources available (HR team manages)
- Quick time to production (weeks not months)

### Recommended Technologies
{: #scenario1-recommended .no_toc }

**Primary Solution:** Employee Self-Service agent for Microsoft 365 Copilot

| Component | Technology | Purpose |
|-----------|------------|---------|
| **Agent Platform** | Employee Self-Service managed solution in Copilot Studio | Prebuilt HR + IT agent with guardrails, instructions, telemetry |
| **Knowledge Sources** | SharePoint knowledge connectors with filtering | Serve curated HR policies and official answers |
| **HR/IT Transactions** | Workday, ServiceNow, SAP SuccessFactors extension packs | Read/write employee data and tickets with packaged Power Platform flows |
| **Deployment** | Microsoft 365 Copilot (Teams, Outlook) | Keeps experiences inside M365 tenant and Entra ID |
| **Governance** | Power Platform ALM (dev/test/prod) | Enforces DLP, approvals, and monitoring

**Why This Stack:**

- Employee Self-Service (ESS) combines Copilot Studio hosting, knowledge sources, and out-of-box HR/IT instructions so makers can configure without code while staying in Microsoft 365 Copilot ([An introduction to Employee Self-Service, Nov 5 2025](https://learn.microsoft.com/en-us/copilot/microsoft-365/employee-self-service/overview)).
- Extension packs expose managed flows and connectors for Workday, ServiceNow, and SAP SuccessFactors so agents can retrieve employee context or open tickets instead of staying knowledge-only ([Integrate Workday with your Employee Self-Service deployment, Nov 12 2025](https://learn.microsoft.com/en-us/copilot/microsoft-365/employee-self-service/workday); [Integrate ServiceNow HRSD and ITSM with Employee Self-Service, Nov 5 2025](https://learn.microsoft.com/en-us/copilot/microsoft-365/employee-self-service/servicenow-hrsd-itsm)).
- Governance guidance (official-source badging, SharePoint filtering, telemetry, ALM) helps HR own the solution within the M365 trust boundary while still allowing third-party APIs through allowlisted connectors ([Customize the Employee Self-Service agent, Nov 5 2025](https://learn.microsoft.com/en-us/copilot/microsoft-365/employee-self-service/customize); [SharePoint advanced filtering for Employee Self-Service, Nov 5 2025](https://learn.microsoft.com/en-us/copilot/microsoft-365/employee-self-service/sharepoint-filtering)).
- Licensing is straightforward: employees with Microsoft 365 Copilot can use ESS at no extra cost, while other audiences draw from Copilot Studio prepaid or Pay-as-you-go meters (plan this during prerequisites) ([Prerequisites to deploy the Employee Self-Service agent, Nov 5 2025](https://learn.microsoft.com/en-us/copilot/microsoft-365/employee-self-service/prerequisites)).

### Implementation Steps
{: #scenario1-implementation .no_toc }

1. **Prepare Environment & Prerequisites** (1-2 days)
   - Confirm Microsoft 365 Copilot licensing or Copilot Studio prepaid/Pay-as-you-go coverage
   - Provision dev/test/prod Power Platform environments and allow required connectors per DLP policies
   - Assign Global Admin, Power Platform Admin, security, and HR owners for the rollout ([Prerequisites to deploy the Employee Self-Service agent, Nov 5 2025](https://learn.microsoft.com/en-us/copilot/microsoft-365/employee-self-service/prerequisites))

2. **Install Employee Self-Service Solution** (1 day)
   - Import ESS managed solution from Copilot Studio into dev
   - Add Workday/ServiceNow/SAP extension packs as needed to unlock packaged flows ([An introduction to Employee Self-Service, Nov 5 2025](https://learn.microsoft.com/en-us/copilot/microsoft-365/employee-self-service/overview))
   - Connect to Microsoft 365 Copilot channel in Teams for testing

3. **Configure Knowledge & Systems** (3-4 days)
   - Audit SharePoint HR site, tag authoritative pages, and configure knowledge sources with KQL filtering ([SharePoint advanced filtering for Employee Self-Service, Nov 5 2025](https://learn.microsoft.com/en-us/copilot/microsoft-365/employee-self-service/sharepoint-filtering))
   - Configure Workday reports (RaaS), ServiceNow OAuth apps, and SAP credentials for the extension packs ([Integrate Workday with your Employee Self-Service deployment, Jan 20 2026](https://learn.microsoft.com/en-us/copilot/microsoft-365/employee-self-service/workday); [Integrate ServiceNow HRSD and ITSM with Employee Self-Service, Nov 12 2025](https://learn.microsoft.com/en-us/copilot/microsoft-365/employee-self-service/servicenow-hrsd-itsm))
   - Customize instructions, welcome experience, and official-source badges for HR tone ([Customize the Employee Self-Service agent, Dec 15 2025](https://learn.microsoft.com/en-us/copilot/microsoft-365/employee-self-service/customize))

4. **Test & Govern** (3-5 days)
   - Build golden prompts, regression suites, and telemetry dashboards
   - Pilot with HR stewards, validate ticket creation, and review safety rails
   - Document handoff procedures for sensitive topics or low confidence responses ([Customize the Employee Self-Service agent, Dec 15 2025](https://learn.microsoft.com/en-us/copilot/microsoft-365/employee-self-service/customize))

5. **Deploy & Monitor** (1 day)
   - Promote managed solution to production via ALM pipeline ([Employee Self-Service agent deployment overview, Nov 5 2025](https://learn.microsoft.com/en-us/copilot/microsoft-365/employee-self-service/deploy-overview-alm))
   - Publish to Microsoft 365 Copilot, announce in Teams, and watch telemetry for the first 30 days

**Time to Production:** 2-3 weeks (depends on connector entitlement)  
**Ongoing Maintenance:** HR team updates SharePoint content, monitors connectors, and evolves prompts via ESS telemetry

### Alternative Approaches
{: #scenario1-alternatives .no_toc }

**If you cannot adopt ESS yet:**

- Stay with Copilot Studio + SharePoint knowledge connectors for a knowledge-only bot, then graduate to ESS once Power Platform environments and connector allowlists are ready.

**If you need bespoke orchestration:**

- Use M365 Agents SDK or Foundry Agent Service for custom routing, non-supported HRIS integrations, or multi-channel experiences beyond Microsoft 365 Copilot. Incorporate Azure AI Search BYOK when data spans on-premises or third-party stores ([Agentic retrieval overview, Updated: Jan 16 2026](https://learn.microsoft.com/en-us/azure/search/agentic-retrieval-overview)).

---

## Scenario 2: Invoice Processing Automation

### Business Context
{: #scenario2-business-context .no_toc }

Accounts Payable team manually processes 500+ supplier invoices per month. Need to extract data (vendor, amount, line items) and update ERP system automatically.

### Key Requirements
{: #scenario2-key-requirements .no_toc }

- Extract structured data from PDF/image invoices
- Validate against purchase orders
- Route for approval if amount > $10K
- Update ERP system (SAP, Dynamics, etc.)
- Low-code solution for finance team to manage

### Recommended Technologies
{: #scenario2-recommended .no_toc }

**Primary Solution:** AI Builder + Power Automate + Dataverse

| Component | Technology | Purpose |
|-----------|------------|---------|
| **Document Processing** | AI Builder (Invoice Model) | Prebuilt OCR + extraction |
| **Workflow** | Power Automate | Orchestration and approvals |
| **Data Storage** | Dataverse | Temporary invoice data |
| **Integration** | Power Platform Connectors | Connect to ERP |

**Why This Stack:**

- AI Builder invoice model: Prebuilt, high accuracy for invoices ([Streamline document processing with AI Builder](https://learn.microsoft.com/en-us/power-platform/architecture/reference-architectures/ai-document-processing))
- Power Automate: Visual workflow designer for finance team
- Dataverse: Stores extracted data before ERP update
- 1,400+ connectors: Likely has ERP connector

### Implementation Steps
{: #scenario2-implementation .no_toc }

1. **Set Up AI Builder Model** (1 day)
   - Activate AI Builder in Power Platform environment
   - Test prebuilt invoice model with sample invoices
   - Verify extraction accuracy (vendor, date, amount, line items)

2. **Create Dataverse Tables** (1 day)
   - Create "Invoice" table (vendor, amount, status, etc.)
   - Create "Invoice Line Item" table (description, quantity, price)
   - Set up relationships

3. **Build Power Automate Flow** (3-5 days)
   - **Trigger:** Email arrives with invoice attachment or SharePoint folder
   - **Action 1:** AI Builder processes invoice
   - **Action 2:** Store extracted data in Dataverse
   - **Action 3:** Validate against PO (if applicable)
   - **Action 4:** If amount > $10K → approval workflow
   - **Action 5:** Update ERP via connector
   - **Action 6:** Notify AP team via Teams

4. **Handle Exceptions** (2-3 days)
   - Build fallback for low-confidence extractions
   - Manual review queue in Power Apps
   - Error handling and retries

5. **Test & Deploy** (1 week)
   - Test with historical invoices
   - Pilot with one supplier
   - Gradually expand to all invoices

**Time to Production:** 3-4 weeks  
**Cost Savings:** 80-90% reduction in manual data entry

### Alternative Approaches
{: #scenario2-alternatives .no_toc }

**If invoices are non-standard:**

- Use Azure Document Intelligence custom models ([Document Intelligence invoice model GA, Nov 18, 2025](https://learn.microsoft.com/en-us/azure/ai-services/document-intelligence/prebuilt/invoice?view=doc-intel-4.0.0))
- Train on company-specific invoice formats
- More complex setup, higher accuracy

**If you need multimodal processing:**

- Use Azure AI Content Understanding (Preview) ([What's new in Azure AI Content Understanding, May 2025](https://learn.microsoft.com/en-us/azure/ai-services/content-understanding/whats-new#may-2025))
- Process images, scanned docs, handwritten invoices
- More advanced understanding

---

## Scenario 3: Customer Support Agent with Enterprise Knowledge

### Business Context
{: #scenario3-business-context .no_toc }

Support team handles 1,000+ tickets per month with repetitive questions. Company knowledge spread across SharePoint, Confluence, Salesforce, and internal databases. Need AI agent to deflect simple questions and assist support agents.

### Key Requirements
{: #scenario3-key-requirements .no_toc }

- Answer questions from multiple knowledge sources
- Available on company website and Teams
- Escalate complex issues to human agents
- Track customer satisfaction
- Developers available for custom integrations

### Recommended Technologies
{: #scenario3-recommended .no_toc }

**Primary Solution:** Copilot Studio + Azure AI Search (BYOK)

| Component | Technology | Purpose |
|-----------|------------|---------|
| **Agent Platform** | Copilot Studio | Multi-channel agent deployment |
| **Knowledge Retrieval** | Azure AI Search | Unified index across data sources |
| **Deployment** | Web widget + Teams | Customer-facing and internal |
| **Integrations** | Custom actions (Azure Functions) | Ticket creation, CRM lookups |

**Why This Stack:**

- Azure AI Search: Indexes multiple disparate sources (SharePoint, Confluence, databases, etc.) with agentic retrieval preview ([What's new in Azure AI Search](https://learn.microsoft.com/en-us/azure/search/whats-new#2025-announcements))
- Copilot Studio BYOK: Connects to Azure AI Search for advanced RAG
- Multi-channel: Same agent on website and Teams
- Custom actions: Extend with ticket creation, order lookups

### Implementation Steps
{: #scenario3-implementation .no_toc }

1. **Build Azure AI Search Index** (1-2 weeks)
   - Deploy Azure AI Search service
   - Create indexers for each data source (SharePoint, Confluence, SQL)
   - Configure knowledge agent objects and semantic ranking ([Agentic retrieval overview](https://learn.microsoft.com/en-us/azure/search/agentic-retrieval-overview))
   - Test retrieval quality

2. **Build Copilot Studio Agent** (1-2 weeks)
   - Create agent with generative answers
   - Configure BYOK to connect Azure AI Search
   - Test answer quality and citations
   - Add topics for specific workflows (create ticket, track order)

3. **Build Custom Actions** (1-2 weeks)
   - Azure Function: Create ticket in Zendesk/ServiceNow
   - Azure Function: Look up customer in CRM
   - Register as custom actions in Copilot Studio

4. **Deploy Multi-Channel** (1 week)
   - Publish to website (JavaScript widget)
   - Publish to Teams for internal support agents
   - Configure authentication (SSO for Teams, anonymous for web)

5. **Monitor & Improve** (Ongoing)
   - Track resolution rate and customer satisfaction
   - Review unresolved questions
   - Add new topics and refine prompts

**Time to Production:** 6-8 weeks  
**Expected Impact:** 50-70% ticket deflection on common questions

### Alternative Approaches
{: #scenario3-alternatives .no_toc }

**If you need full control:**

- Build with M365 Agents SDK or Microsoft Foundry (Azure) ([Foundry Agent Service overview](https://learn.microsoft.com/en-us/azure/foundry/agents/overview))
- Custom evaluation metrics
- More complex deployment

**If budget is limited:**

- Start with Copilot Studio + SharePoint only (no Azure AI Search)
- Expand data sources gradually

---

## Scenario 6: Privacy-First / Offline Field Agent

### Business Context
{: #scenario6-business-context .no_toc }

Field technicians need to analyze schematics and summarize repair logs while working in remote locations with intermittent connectivity. The data is highly sensitive (IP) and cannot leave the device for cloud inference due to strict regulatory compliance.

### Key Requirements
{: #scenario6-key-requirements .no_toc }

- **Offline Capability:** Must function without internet access.
- **Zero Data Exfiltration:** Inference must happen locally on the device.
- **Low Latency:** Instant analysis of text/images.
- **Cost Efficiency:** High volume of queries shouldn't incur cloud token costs.

### Recommended Technologies
{: #scenario6-recommended .no_toc }

**Primary Solution:** Windows AI Foundry (Phi-4-mini + Windows ML)

| Component | Technology | Purpose |
|-----------|------------|---------|
| **Local Model** | Phi-4-mini (via Foundry Local) | High-quality reasoning on-device (3.8B params) |
| **Runtime** | Windows ML (ONNX) | Hardware-accelerated inference (NPU/GPU) |
| **App Framework** | Windows App SDK | Native Windows application |
| **Data Access** | Local File System | Secure access to schematics/logs |

**Why This Stack:**

- **Privacy:** Data never leaves the device; meets strict compliance.
- **Offline:** Full functionality without connectivity.
- **Cost:** Zero cloud inference costs; leverages client hardware.
- **Performance:** NPU acceleration ensures low latency.

### Implementation Steps
{: #scenario6-implementation .no_toc }

1. **Model Selection:** Use `foundry model list` to select Phi-4-mini.
2. **App Integration:** Use Windows App SDK to integrate the model via Windows ML.
3. **Optimization:** Use AI Toolkit for VS Code to quantize/optimize the model for the target device.
4. **Deployment:** Package the app with the model (or download on first run).

---

## Scenario 7: Agentic DevOps (End-to-End Lifecycle)

### Business Context
{: #scenario7-business-context .no_toc }

A software development team is bogged down by routine maintenance, technical debt, and production firefighting. They spend more time fixing bugs and writing boilerplate tests than innovating.

### Key Requirements
{: #scenario7-key-requirements .no_toc }

- **Autonomous Coding:** Delegate complex tasks (refactoring, testing) to an AI agent.
- **Asynchronous Work:** Agent works in the background without blocking the developer.
- **Production Monitoring:** AI proactively detects and diagnoses production issues.
- **Self-Healing:** Automated root cause analysis and fix suggestions.

### Recommended Technologies
{: #scenario7-recommended .no_toc }

**Primary Solution:** GitHub Copilot Coding Agent + Azure SRE Agent

| Component | Technology | Purpose |
|-----------|------------|---------|
| **Developer Agent** | GitHub Copilot Coding Agent | Autonomous coding, testing, and refactoring |
| **Operations Agent** | Azure SRE Agent | Production monitoring, alert response, RCA |
| **Platform** | GitHub | Unified workflow (Issues, PRs, CI/CD) |
| **IDE** | VS Code (Agent Mode) | "Peer programmer" for complex local tasks |

**Why This Stack:**

- **Coding Agent:** Moves beyond "autocomplete" to "autonomy". It can take a GitHub Issue ("Fix the login bug") and independently write code, run tests, and open a PR.
- **SRE Agent:** Connects production reality back to development. It detects an outage, analyzes logs, identifies the root cause, and can even assign a fix task to the Coding Agent.
- **Unified Flow:** The entire lifecycle (Code -> Deploy -> Monitor -> Fix) is orchestrated by agents working together.

### Implementation Steps
{: #scenario7-implementation .no_toc }

1. **Enable Agents:** Activate GitHub Copilot Coding Agent and Azure SRE Agent (Preview).
2. **Configure SRE Agent:** Connect to Azure Monitor and Kubernetes clusters.
3. **Delegate Tasks:** Developers assign routine refactoring and test coverage tasks to the Coding Agent via GitHub Issues.
4. **Monitor & Respond:** SRE Agent watches production. Upon alert, it performs RCA and logs findings.
5. **Review & Merge:** Developers review the PRs created by the Coding Agent (either for features or SRE fixes) and merge.

---

## Scenario 8: Legacy App Modernization

### Business Context
{: #scenario8-business-context .no_toc }

An enterprise has hundreds of legacy Java and .NET applications running on outdated frameworks. Manual upgrades are cost-prohibitive and risky. Security vulnerabilities in old dependencies are a major risk.

### Key Requirements
{: #scenario8-key-requirements .no_toc }

- **Scale:** Upgrade hundreds of apps/repos.
- **Accuracy:** Handle complex dependency chains and breaking changes.
- **Safety:** Ensure the upgraded app still compiles and passes tests.
- **Speed:** Reduce timeline from years to months.

### Recommended Technologies
{: #scenario8-recommended .no_toc }

**Primary Solution:** GitHub Copilot App Modernization

| Component | Technology | Purpose |
|-----------|------------|---------|
| **Modernization Agent** | GitHub Copilot App Modernization | Specialized agent for Java/.NET upgrades |
| **Platform** | GitHub | Repository hosting and CI/CD |
| **Validation** | GitHub Actions | Automated testing of upgraded code |

**Why This Stack:**

- **Specialized Knowledge:** The agent is specifically trained on migration patterns (e.g., .NET Framework to .NET 8, Java 8 to 17).
- **Plan & Execute:** It doesn't just write code; it generates a comprehensive upgrade plan, executes it across thousands of files, and summarizes the changes.
- **Risk Reduction:** Automated remediation of security vulnerabilities during the upgrade process.

### Implementation Steps
{: #scenario8-implementation .no_toc }

1. **Assessment:** Point the App Modernization agent at the legacy repository.
2. **Plan Generation:** Review the AI-generated upgrade plan (identified dependencies, breaking changes).
3. **Execution:** Authorize the agent to execute the plan. It modifies project files, code, and configurations.
4. **Validation:** Agent runs local builds/tests.
5. **Review:** Developer reviews the massive PR (often touching hundreds of files) and merges.

---

## Scenario: Foundry Agent Published to Microsoft 365 Copilot

### Business Context
{: .no_toc }

A development team has built a specialized compliance advisor in Microsoft Foundry that can search regulatory databases, analyze document risk, and generate audit summaries. The agent works well in the Foundry Chat Playground and via the Responses API. Now stakeholders want it accessible to every knowledge worker inside Word, Teams, and Outlook, with no separate app, separate login, or separate training.

### Key Requirements
{: .no_toc }

- Agent must appear in the M365 Copilot Agent Store for organization-wide discovery
- All Foundry tools (MCP, function calling, code interpreter) must continue working after publish
- Agent identity must be governed: separate Entra identity, Azure Policy-managed, RBAC-scoped
- Dual-channel support: custom app (Responses API) AND M365 Copilot simultaneously
- Admin approval workflow for organization-wide deployment

### Recommended Technologies
{: .no_toc }

| Component | Technology | Purpose |
|-----------|------------|---------|
| **Agent Runtime** | Foundry Agent Service | Managed hosting with tools, models, and thread state |
| **Agent Packaging** | Agent Application (Azure resource) | Stable endpoint, dedicated Entra agent identity, RBAC scope |
| **Distribution** | Publish to M365 Copilot (one-click) | Agent appears in Word, Teams, Outlook via Copilot Agent Store |
| **Alternative Distribution** | M365 Agents Toolkit proxy app | Advanced scenarios: custom SSO, multi-environment CI/CD |
| **Custom App Channel** | Responses API | Headless invocation for web/mobile integrations |
| **Governance** | Foundry Control Plane + M365 Admin Center | Azure Policy at the agent resource level; admin approval for M365 |

**Why This Stack:**

- **Copilot is the UI for AI.** Publishing into M365 Copilot means the compliance advisor inherits a production-grade AI interface without building one: cross-app presence in Teams, Outlook, Word, Excel, and PowerPoint, unified discovery through the Agent Store, tenant-wide governance via the Copilot Control System and Agent Registry, adaptive card rendering for rich responses, built-in compliance and audit controls, usage analytics, mobile parity, and Entra ID-scoped security trimming. No front-end engineering, no design system, no cross-platform testing.
- The one-click publish flow from Foundry eliminates custom glue code. The agent registers a Bot Service resource, provisions an Entra app registration, and packages itself for M365 automatically.
- Publishing creates an Agent Application with a dedicated identity, so the compliance team can audit which agent accessed which resource, independent of the developer's project identity.
- The Responses API endpoint stays live after publishing, so the same agent serves both the custom web app and M365 Copilot. One brain, two faces.

### Implementation Steps
{: .no_toc }

1. **Build and test in Foundry:** Configure model, instructions, MCP tools, and knowledge sources. Validate thoroughly in the Chat Playground. (Pattern 2: Pro-Code First)
2. **Publish as Agent Application:** Select "Publish Agent" to create the Azure resource. Note the new agent identity.
3. **Reassign RBAC:** Grant the new agent identity the same Azure roles the project identity had (Storage Blob Reader, Search Index Data Reader, etc.). This step is mandatory. Skipping it causes authorization failures.
4. **Distribute to M365 Copilot:** Select "Publish to Microsoft 365 Copilot and Teams", choose Individual or Organization scope, and trigger admin approval if organization-wide.
5. **Validate dual-channel:** Test the agent in the Copilot Agent Store (Teams/Word) AND via the Responses API endpoint to confirm both paths work.

### Alternative Approaches
{: .no_toc }

- **Copilot Studio-first** (Pattern 1): Faster for simple agents, but lacks Foundry's custom model selections and MCP tooling depth.
- **Agents Toolkit proxy:** Use when you need SSO, environment-specific configuration, or CI/CD pipeline control over the M365 integration layer.

**Cross-references:** [Pattern 9: Foundry Agent → M365 Copilot Publish Path]({{ '/docs/implementation-patterns#pattern-9-foundry-agent--m365-copilot-publish-path' | relative_url }}), [Evaluation Criteria: Lifecycle & Operational Readiness]({{ '/docs/evaluation-criteria' | relative_url }})

---

## Scenario: Work IQ-Enhanced Copilot Studio Agent

### Business Context
{: .no_toc }

A project management office (PMO) wants an agent that helps managers prepare for weekly status meetings. The agent needs to summarize recent email threads about project risks, check what's on the team's calendars for the coming week, pull the latest status documents from SharePoint, and draft a meeting agenda, all without the manager switching between six apps.

### Key Requirements
{: .no_toc }

- Agent must access emails, calendar, Teams messages, SharePoint files, and user profiles
- All data access must respect M365 permissions, with no over-privileged service accounts
- Low-code authoring (PMO team, not developers, will maintain the agent)
- Published to M365 Copilot so managers interact with the agent inside Teams and Outlook without leaving their workflow, learning a new app, or managing a new login
- Admin governance: ability to allow/block specific Work IQ MCP servers

### Recommended Technologies
{: .no_toc }

| Component | Technology | Purpose |
|-----------|------------|---------|
| **Agent Platform** | Copilot Studio | Low-code authoring with connectors and MCP tool integration |
| **Collaboration Context** | Work IQ MCP servers (Mail, Calendar, Teams, SharePoint, OneDrive, User) | Real-time access to M365 collaboration signals |
| **Deployment** | Microsoft 365 Copilot (Teams, Outlook) | Users interact where they already work |
| **Governance** | M365 Admin Center (MCP server allow/block), Power Platform admin | Centralized control over which MCP servers agents can use |
| **Identity** | Delegated (user-scoped via M365 Copilot license) | Agent acts on behalf of the signed-in user |

**Why This Stack:**

- Work IQ MCP servers are first-class tools in Copilot Studio. Add them via the Tools tab with a few clicks. No API integration code needed.
- Each MCP server (Mail, Calendar, Teams, etc.) exposes deterministic, auditable tools that the agent invokes through Copilot Studio's generative orchestration.
- Admin governance is built in. MCP servers are managed in the M365 Admin Center, and admins can allow or block servers organization-wide.
- The agent runs under the user's identity (M365 Copilot license required), so it only sees what the user is authorized to see, with no blast radius from over-privileged service accounts.

### Implementation Steps
{: .no_toc }

1. **Create the agent** in Copilot Studio and define instructions for meeting preparation (summarize risks, check calendars, draft agenda).
2. **Add Work IQ MCP tools:** Navigate to Tools > Add Tool > Model Context Protocol, add Work IQ Mail, Calendar, Teams, SharePoint, and User servers.
3. **Create connections** for each MCP server. Authenticate with user credentials.
4. **Test with sample prompts:** "Summarize the top 3 risk-related email threads from last week" or "What meetings does the engineering team have next Monday?"
5. **Publish to M365 Copilot:** Deploy via the Microsoft 365 channel.
6. **Configure admin policies:** In the M365 Admin Center, ensure Work IQ MCP servers are allowed for the target user group.

### Alternative Approaches
{: .no_toc }

- **Microsoft Foundry + Work IQ:** Pro-code path for developers who need deeper orchestration control. Add Work IQ MCP tools in the Foundry portal's tool catalog.
- **Work IQ CLI:** Direct terminal-based access for developers who want M365 context in their coding workflow (e.g., GitHub Copilot in VS Code via MCP server mode).

**Cross-references:** [Work IQ]({{ '/docs/technologies#work-iq-preview' | relative_url }}), [Pattern 1: Start in Studio, Scale with Azure]({{ '/docs/implementation-patterns#pattern-1-start-in-studio-scale-with-azure' | relative_url }})

---

## Scenario Comparison Matrix

| Scenario | Complexity | Time to Prod | Skill Level | Key Technology |
|----------|-----------|--------------|-------------|----------------|
| HR Knowledge Base | Low | 2-3 weeks | Maker | Employee Self-Service + Workday/ServiceNow packs |
| Invoice Processing | Low-Medium | 3-4 weeks | Maker | AI Builder + Power Automate |
| Customer Support | Medium | 6-8 weeks | Professional dev | Copilot Studio + Azure AI Search (agentic retrieval) |
| Privacy-First Field Agent | Medium | 4-8 weeks | Professional dev | Windows AI Foundry (Local Phi-4-mini) |
| Agentic DevOps | High | 4-6 weeks | Professional dev | GitHub Copilot Coding Agent + Azure SRE Agent |
| Legacy App Modernization | High | 3-6 months | Professional dev | GitHub Copilot App Modernization |
| Copilot-to-Copilot Mesh | Medium | 3-4 weeks | Maker + light dev | Copilot Studio A2A + MCP tools |
| Financial Reconciliation (Multi-Agent) | High | 4-6 weeks | Pro dev | Foundry Agent Service + Cosmos DB threads |
| Multi-Channel Corporate Assistant | Medium | 3-5 weeks | Pro dev | M365 Agents SDK (Teams/Outlook/M365 Chat) |
| Foundry Agent → M365 Copilot | Medium | 2-4 weeks | Pro dev | Foundry Agent Service + M365 Copilot publish |
| Work IQ-Enhanced Studio Agent | Low-Medium | 2-3 weeks | Maker | Copilot Studio + Work IQ MCP servers |

---

## Next Steps

**Need to evaluate your situation?**  
→ [Evaluation Criteria]({{ '/docs/evaluation-criteria' | relative_url }}) to assess requirements

**Need detailed technology comparison?**  
→ [Feature Comparison]({{ '/docs/feature-comparison' | relative_url }}) for side-by-side analysis

**Need visual decision guidance?**  
→ [Visual Framework]({{ '/docs/visual-framework' | relative_url }}) for decision tree diagrams

**Need implementation patterns?**  
→ [Implementation Patterns]({{ '/docs/implementation-patterns' | relative_url }}) for architecture guidance

---

**Last Updated:** March 19, 2026  
**Next:** [Visual Framework]({{ '/docs/visual-framework' | relative_url }}) - Walk the decision trees to choose the right path

---
