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

{: .warning }
> **Evidence gate—Employee Self-Service unverified:** No stable, accessible current official source was available at the July 13, 2026 review cutoff to reconfirm the product, entitlement, extension packs, connectors, or deployment claims. This scenario therefore makes **no Employee Self-Service recommendation** until each dependency is reverified.

**The Analogy: The Locked HR Filing Room.** A sign saying “employee self-service” does not prove who has the key, which cabinets it opens, or whether it can file a ticket. Verify each door separately.

| Decision Gate | Evidence Required Before Selection |
|-----------|------------|
| **Knowledge** | Current official support for the exact SharePoint sources, filtering, citations, and permission trimming |
| **Transactions** | Current connector action, read/write scope, identity mode, licensing, and approval behavior for each HR system |
| **Distribution** | Current supported Microsoft 365 and Teams channels plus admin approval requirements |
| **Governance** | DLP, environment strategy, audit, retention, telemetry, and sensitive-topic escalation |
| **Entitlement** | Current per-user, capacity, and connector rights—no “included” assumption |

### Implementation Steps
{: #scenario1-implementation .no_toc }

1. Verify every item in the evidence gate against current official documentation.
2. Build a read-only policy pilot before enabling HR transactions.
3. Test each transaction under the real caller identity and require explicit confirmation for writes.
4. Run sensitive-topic, permission-trimming, and low-confidence escalation tests.
5. Estimate timeline only after entitlement, connector, and channel evidence is complete.

### Alternative Approaches
{: #scenario1-alternatives .no_toc }

**If you need a fallback candidate:**

- Evaluate a read-only Copilot Studio and SharePoint pattern only after reconfirming its exact licensing, knowledge-source, identity, and channel requirements. Do not treat it as an evidence-free default.

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
- Copilot Studio BYOK: Connects to Azure AI Search for advanced RAG, while the newer agent experience improves orchestration quality for complex multi-intent support scenarios ([What's new in Copilot Studio](https://learn.microsoft.com/en-us/microsoft-copilot-studio/whats-new#notable-changes))
- Multi-channel: Same agent on website and Teams
- Custom actions: Extend with ticket creation and order lookups, and use asynchronous responses when backend work exceeds synchronous limits ([What's new in Copilot Studio](https://learn.microsoft.com/en-us/microsoft-copilot-studio/whats-new#notable-changes))

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
   - If available in your tenant, validate in the new agent experience and compare with classic behavior for retrieval-heavy prompts
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
   - Add agent evaluation test sets and multi-turn tests for escalations and handoff quality
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

**Recent platform updates to watch (Copilot Studio):**

- **Jun 2026:** New agent experience (production-ready preview), reusable skills, and memory can improve support personalization and response consistency over time.
- **May 2026:** Asynchronous responses support long-running action flows often used in CRM/ticket integrations.
- **Apr-Mar 2026:** Agent evaluations reached GA, with multi-turn testing and API automation options for CI/CD-aligned quality checks.

Sources: [What's new in Copilot Studio](https://learn.microsoft.com/en-us/microsoft-copilot-studio/whats-new#notable-changes), [Released versions of Microsoft Copilot Studio](https://learn.microsoft.com/en-us/power-platform/released-versions/copilotstudio)

---

## Scenario 6: Privacy-First / Offline Field Agent

### Business Context
{: #scenario6-business-context .no_toc }

Field technicians need to analyze schematics and summarize repair logs while working in remote locations with intermittent connectivity. The data is highly sensitive (IP) and cannot leave the device for cloud inference due to strict regulatory compliance.

### Key Requirements
{: #scenario6-key-requirements .no_toc }

- **Offline Capability:** Must function without internet access.
- **Controlled Data Egress:** Inference and document processing must stay on the validated device during offline operation.
- **Measured Latency:** Text and schematic-label extraction must meet a tested device target.
- **Cost Efficiency:** High volume of queries shouldn't incur cloud token costs.

### Recommended Technologies
{: #scenario6-recommended .no_toc }

**Primary Architecture:** Microsoft Foundry Local + a verified Windows OCR capability on a tested device profile

| Component | Technology | Purpose |
|-----------|------------|---------|
| **Local Model** | A currently supported Foundry Local text model | Summarize repair logs after local download |
| **Vision/OCR** | Windows AI text-recognition capability | Extract printed labels and annotations from schematics; do not claim full diagram reasoning |
| **Runtime** | Foundry Local / supported Windows runtime | Execute on the validated CPU, GPU, or NPU path documented for the selected model and device |
| **App Framework** | Windows App SDK | Native Windows application |
| **Data Access** | Local File System | Secure access to schematics/logs |

**Why This Stack:**

- **The Airplane-Mode Test:** “Local” is a deployment claim; “offline and private” is a test result. Prove the app starts, extracts text, reasons over logs, and writes outputs with networking disabled.
- Foundry Local runs selected models locally, but model availability, first-download behavior, acceleration, and performance vary by model and device.
- A text model does not become a vision model because the input came from a schematic. OCR handles labels; broader visual interpretation requires a separately documented vision-capable model and acceptance tests.

### Implementation Steps
{: #scenario6-implementation .no_toc }

1. **Define the device profile:** Pin Windows version, CPU/GPU/NPU, RAM, storage, and driver baseline.
2. **Verify capabilities:** Select a currently supported Foundry Local text model and a documented Windows OCR API. If full schematic interpretation is required, stop until a vision-capable local model is verified.
3. **Package deliberately:** Decide whether the model ships with the app or requires a first-run download; a first-run download is not offline deployment.
4. **Test airplane mode:** Measure startup, OCR accuracy, response latency, memory, battery, and failure behavior with networking disabled.
5. **Validate privacy:** Inspect telemetry, crash reporting, update checks, model acquisition, temporary files, and logs. “Local inference” alone does not prove zero egress.

**Status:** Foundry Local and Windows capabilities vary by model, API, Windows release, and device. Verify the current [Foundry Local documentation](https://learn.microsoft.com/en-us/azure/foundry-local/what-is-foundry-local) and [Windows AI comparison](https://learn.microsoft.com/en-us/windows/ai/windows-ai-comparison) before procurement.

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
- **Assisted Remediation:** Root-cause evidence becomes a governed issue and reviewed pull request.

### Recommended Technologies
{: #scenario7-recommended .no_toc }

**Primary Pattern:** GitHub Copilot cloud agent + Azure SRE Agent (GA), joined through governed GitHub artifacts

| Component | Technology | Purpose |
|-----------|------------|---------|
| **Developer Agent** | GitHub Copilot cloud agent | Asynchronous code changes on a branch and pull request |
| **Operations Agent** | Azure SRE Agent (GA) | Investigation, operational evidence, and approved actions |
| **Handoff** | GitHub Issue / incident record | Human-triaged boundary; no unverified direct agent handoff |
| **Platform** | GitHub | Issues, PRs, CI/CD, code owners, and branch protection |
| **IDE** | VS Code (Agent Mode) | "Peer programmer" for complex local tasks |

**Why This Stack:**

- **The Two-Key Repair Shop:** SRE Agent writes the work order; the cloud agent prepares the repair. A human and branch policy hold the keys to merge and deployment.
- No current official source establishes a direct SRE-to-cloud-agent handoff. Use a reviewed issue or incident record to transfer evidence and acceptance criteria.
- Copilot review augments evidence. It does not count as approval.

### Implementation Steps
{: #scenario7-implementation .no_toc }

1. **Configure SRE Agent (GA):** Grant least privilege to the required Azure resources and telemetry.
2. **Record evidence:** Put findings in an incident record or GitHub Issue; require human triage before coding begins.
3. **Delegate safely:** Assign a bounded issue to the GitHub Copilot cloud agent with build, test, scan, and rollback criteria.
4. **Review the PR:** Require CI, security checks, code-owner approval, and branch protection. The agent does not self-approve or self-merge.
5. **Deploy and verify:** Use the existing pipeline, then have SRE Agent confirm recovery from production evidence.

---

## Scenario 8: Legacy App Modernization

### Business Context
{: #scenario8-business-context .no_toc }

An enterprise has hundreds of legacy Java, .NET, and C++ applications running on outdated frameworks and toolchains. Manual upgrades are cost-prohibitive and risky. Security vulnerabilities in old dependencies are a major risk.

### Key Requirements
{: #scenario8-key-requirements .no_toc }

- **Scale:** Upgrade hundreds of apps/repos.
- **Accuracy:** Handle complex dependency chains and breaking changes.
- **Safety:** Ensure the upgraded app still compiles and passes tests.
- **Speed:** Reduce timeline from years to months.

### Recommended Technologies
{: #scenario8-recommended .no_toc }

**Primary Solution:** GitHub Copilot Modernization

| Component | Technology | Purpose |
|-----------|------------|---------|
| **Assessment and Planning** | Modernization agent CLI (**Public Preview**) | Assess and plan modernization across multiple applications, then hand plans to developers |
| **Developer Execution** | GitHub Copilot Modernization IDE extensions | **GA** language/framework/tool upgrades for .NET, Java, and C++; **GA** Azure migration for supported .NET and Java applications |
| **Transformation** | Modernization tasks and OpenRewrite where supported | Upgrade dependencies and runtimes, transform code, remediate CVEs, and prepare containerization |
| **Validation** | Product build/test checks + repository CI/security tooling | Require successful builds, tests, dependency policy, vulnerability scans, and human acceptance |
| **Deployment Assets** | Container, IaC, and Azure deployment generation for supported scenarios | Proposed migration assets—not automatic production approval |

**Why This Stack:**

- **The Renovation Crew:** GitHub Copilot Modernization is a solution collection delivered through complementary IDE extensions and the Modernize CLI. It is not one standalone agent, and Microsoft does not document a special underlying model.
- The solution can assess applications, create plans, upgrade dependencies/runtimes, apply supported OpenRewrite transformations, validate builds/tests, address CVEs, and generate container, IaC, and deployment assets.
- Feature status follows the surface: IDE upgrade paths are **GA** for .NET, Java, and C++; IDE Azure migration is **GA** for .NET and Java; the Modernization agent CLI is **Public Preview**.
- Automation accelerates the renovation; it does not certify the building. Human review, repository policy, build/test evidence, security scans, and deployment gates remain authoritative.

### Implementation Steps
{: #scenario8-implementation .no_toc }

1. **Baseline:** Capture current build, test, dependency, vulnerability, runtime, deployment, and performance results.
2. **Choose the surface:** Use the Modernization agent CLI (**Public Preview**) for portfolio assessment and planning; use the applicable IDE extension for supported developer transformations.
3. **Review the plan:** Confirm target runtime/framework versions, Azure migration scope, unsupported dependencies, rollback, and acceptance criteria before changing code.
4. **Execute in slices:** Apply bounded dependency/runtime upgrades and supported transformations. Use OpenRewrite-backed tasks where the selected Java path documents them; avoid one heroic repository-wide change.
5. **Validate:** Require clean builds, regression and migrated unit tests, dependency-policy checks, CVE scans, and measurable performance targets. Treat product-generated fixes as proposals until the gates pass.
6. **Prepare deployment:** For supported Azure migration scenarios, review generated containers, IaC, CI/CD, and deployment assets under the organization’s normal cloud controls.
7. **Approve:** A human reviews the diff, evidence, deployment plan, and rollback path before merge or release.

**Status:** IDE language/framework/tool upgrades **GA** for .NET, Java, and C++; IDE Azure migration **GA** for .NET and Java; Modernization agent CLI **Public Preview**. See [GitHub Copilot Modernization overview](https://learn.microsoft.com/en-us/azure/developer/github-copilot-app-modernization/overview) (updated June 12, 2026).

---

## Scenario: Foundry Agent Published to Microsoft 365 Copilot

### Business Context
{: .no_toc }

A development team has built a specialized compliance advisor in Microsoft Foundry that works through its current endpoint. Stakeholders want to evaluate Microsoft 365 Copilot and Teams as additional channels without assuming the Preview distribution path preserves every tool, identity, or rendering behavior.

### Key Requirements
{: .no_toc }

- Microsoft 365 distribution must be treated as **Early Access Preview**
- Every tool and identity path must be tested rather than promised
- The current agent endpoint remains the custom-app baseline
- Admin approval and rollback must be documented for each enabled channel

### Recommended Technologies
{: .no_toc }

| Component | Technology | Purpose |
|-----------|------------|---------|
| **Agent Runtime** | Prompt Agent (GA) or [Hosted Agent (mixed maturity)]({{ '/docs/technologies#the-hosted-agent-constraint-card' | relative_url }}) | Choose configuration or code ownership; Hosted Agents qualify only when the complete linked constraint card fits |
| **Endpoint / Identity** | Current Foundry agent model | Programmatic baseline with explicit RBAC testing |
| **Distribution** | M365 Copilot and Teams (**Early Access Preview**) | Additional channel, not a GA parity promise |
| **Custom App Channel** | Current agent endpoint | Stable acceptance baseline for headless invocation |
| **Governance** | Foundry and M365 admin controls | Approval, least privilege, audit, and rollback by channel |

**Why This Stack:**

- **One brain, inspected doors.** Reusing agent logic can reduce duplicate orchestration, but each Microsoft 365 door still needs tool, identity, rendering, audit, and lifecycle acceptance tests.
- Legacy Agent Applications are deprecated. Use the current endpoint and identity model; do not design a new solution around the legacy promotion step.
- Hosted Agents are appropriate only when per-session VM isolation matters and the complete [Hosted Agent Constraint Card]({{ '/docs/technologies#the-hosted-agent-constraint-card' | relative_url }}) fits. Otherwise use Azure Container Apps or AKS for more scalable hosting.

### Implementation Steps
{: .no_toc }

1. **Choose the current agent type:** Use Prompt Agent for configuration-defined behavior or Hosted Agent only after passing its [constraint card]({{ '/docs/technologies#the-hosted-agent-constraint-card' | relative_url }}).
2. **Validate the current endpoint:** Test model, instructions, tools, identity, RBAC, safety, and audit behavior before adding channels.
3. **Enable Preview distribution:** Follow the current Microsoft 365 Copilot/Teams Early Access documentation and admin approval path.
4. **Run a channel matrix:** Test every tool and identity mode in each documented target surface; remove unsupported combinations.
5. **Pilot and roll back:** Start with a controlled audience and preserve the endpoint-only path if Preview channel behavior fails acceptance criteria.

### Alternative Approaches
{: .no_toc }

- **Copilot Studio-first** (Pattern 1): Evaluate when the experience is primarily Microsoft 365-facing and its documented capabilities fit.
- **Customer-hosted channel adapter:** Use Azure Container Apps or AKS when scalable hosting and infrastructure control matter more than Hosted Agent session isolation.

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
- Admin governance: ability to govern Work IQ endpoint access, policies, and usage controls

### Recommended Technologies
{: .no_toc }

| Component | Technology | Purpose |
|-----------|------------|---------|
| **Agent Platform** | Copilot Studio | Low-code authoring with connectors and MCP tool integration |
| **Collaboration Context** | Work IQ single endpoint (MCP, REST API, A2A) | Real-time, permission-aware M365 collaboration context and actions |
| **Deployment** | Microsoft 365 Copilot (Teams, Outlook) | Users interact where they already work |
| **Governance** | M365 Admin Center (Work IQ policy and cost controls), Power Platform admin | Centralized control, observability, and compliance enforcement |
| **Identity** | Delegated (user-scoped via M365 Copilot license) | Agent acts on behalf of the signed-in user |

**Why This Stack:**

- Work IQ provides a single endpoint surface that can be consumed through MCP, REST API, or A2A, so teams can use one integration model across low-code and pro-code paths.
- The endpoint exposes a compact, generic tool surface for retrieval and actions across M365 data while keeping execution deterministic and auditable.
- Admin governance is built in through centralized Work IQ policy, observability, and cost controls in the M365 Admin Center.
- The agent runs under the user's identity (M365 Copilot license required), so it only sees what the user is authorized to see, with no blast radius from over-privileged service accounts.
- Copilot Studio's recent platform updates (new agent experience, memory, and skills) align well with PMO assistant scenarios that require repeatable weekly workflows plus lightweight personalization ([What's new in Copilot Studio](https://learn.microsoft.com/en-us/microsoft-copilot-studio/whats-new#notable-changes)).

### Implementation Steps
{: .no_toc }

1. **Create the agent** in Copilot Studio and define instructions for meeting preparation (summarize risks, check calendars, draft agenda).
2. **Add Work IQ endpoint:** In Copilot Studio, add the Work IQ MCP endpoint from the Tools experience.
3. **Create connection** for the Work IQ endpoint and authenticate with user credentials.
4. **Test with sample prompts:** "Summarize the top 3 risk-related email threads from last week" or "What meetings does the engineering team have next Monday?"
5. **Publish to M365 Copilot:** Deploy via the Microsoft 365 channel.
6. **Configure admin policies:** In the M365 Admin Center, configure Work IQ access, policy, and budget controls for the target user group.

### Alternative Approaches
{: .no_toc }

- **Microsoft Foundry + Work IQ:** Pro-code path for deeper orchestration control using the same Work IQ endpoint through REST API, A2A, or MCP.
- **Work IQ CLI:** Direct terminal-based access for developers who want M365 context in their coding workflow (e.g., GitHub Copilot in VS Code via MCP server mode).

**Recent platform updates to watch (Studio + Work IQ path):**

- **Jun 2026:** Microsoft IQ integration and memory features in the new agent experience strengthen collaboration-context scenarios.
- **May 2026:** M365 Copilot workflow node and asynchronous responses improve reliability when meeting-prep tasks fan out to multiple tool calls.
- **Mar 2026:** Work IQ integration (Preview) established the endpoint model now used across MCP, REST API, and A2A.

Sources: [What's new in Copilot Studio](https://learn.microsoft.com/en-us/microsoft-copilot-studio/whats-new#notable-changes), [Work IQ overview](https://learn.microsoft.com/en-us/microsoft-365/copilot/extensibility/work-iq/)

**Cross-references:** [Work IQ]({{ '/docs/technologies#work-iq-preview' | relative_url }}), [Pattern 1: Start in Studio, Scale with Azure]({{ '/docs/implementation-patterns#pattern-1-start-in-studio-scale-with-azure' | relative_url }})

---

## Scenario Comparison Matrix

| Scenario | Complexity | Time to Prod | Skill Level | Key Technology |
|----------|-----------|--------------|-------------|----------------|
| HR Knowledge Base | Unscored pending evidence | TBD | Maker + governance owner | Employee Self-Service unverified; pass evidence gate first |
| Invoice Processing | Low-Medium | 3-4 weeks | Maker | AI Builder + Power Automate |
| Customer Support | Medium | 6-8 weeks | Professional dev | Copilot Studio + Azure AI Search (agentic retrieval) |
| Privacy-First Field Agent | Medium | Test-dependent | Professional dev | Foundry Local text model + verified Windows OCR on a pinned device |
| Agentic DevOps | High | 4-6 weeks | Professional dev | GitHub Copilot cloud agent + Azure SRE Agent (GA), artifact handoff |
| Legacy App Modernization | High | 3-6 months | Professional dev | GitHub Copilot Modernization: GA IDE paths + Modernization agent CLI (Public Preview), with CI/security gates |
| Copilot-to-Copilot Mesh | Medium | 3-4 weeks | Maker + light dev | Copilot Studio A2A + MCP tools |
| Financial Reconciliation (Multi-Agent) | High | 4-6 weeks | Pro dev | Agent Framework (**GA core**) for deterministic code-first orchestration; incoming Foundry A2A endpoint (**Preview**) only for direct delegation; [Hosted Agents (mixed maturity)]({{ '/docs/technologies#the-hosted-agent-constraint-card' | relative_url }}) only when the constraint card fits |
| Multi-Channel Corporate Assistant | Medium | 3-5 weeks | Pro dev | M365 Agents SDK (Teams/Outlook/M365 Chat) |
| Foundry Agent → M365 Copilot | Medium | 2-4 weeks | Pro dev | Foundry Agent Service + M365 Copilot publish |
| Work IQ-Enhanced Studio Agent | Low-Medium | 2-3 weeks | Maker | Copilot Studio + Work IQ endpoint (MCP/API/A2A) |

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

**Last Updated:** July 18, 2026  
**Next:** [Visual Framework]({{ '/docs/visual-framework' | relative_url }}) - Walk the decision trees to choose the right path

---
