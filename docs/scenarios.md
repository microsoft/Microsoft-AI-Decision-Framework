---
layout: default
title: Scenarios
nav_order: 5
description: "Real-world scenarios with technology recommendations"
---

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

Employees need instant answers to HR questions (policies, benefits, PTO) without waiting for HR staff responses. HR team maintains documentation in SharePoint.

### Key Requirements
{: #scenario1-key-requirements .no_toc }

- Access company HR policies and procedures
- Available in Microsoft Teams (where employees work)
- Stay within M365 trust boundary (sensitive HR data)
- No coding resources available (HR team manages)
- Quick time to production (weeks not months)

### Recommended Technologies
{: #scenario1-recommended .no_toc }

**Primary Solution:** Copilot Studio + Copilot connectors (SharePoint)

| Component | Technology | Purpose |
|-----------|------------|---------|
| **Agent Platform** | Copilot Studio | Low-code agent builder, M365 integration |
| **Knowledge Source** | Copilot connectors for SharePoint | Index SharePoint HR site into Microsoft Graph |
| **Deployment** | M365 Copilot | Appears in Teams, Outlook, M365 apps |

**Why This Stack:**

- Copilot Studio: HR team can build/maintain without developers while selecting GPT-4.1+ models ([What's new in Copilot Studio, Oct 2025](https://learn.microsoft.com/en-us/microsoft-copilot-studio/whats-new#notable-changes))
- Copilot connectors: Directly index SharePoint content with SharePoint knowledge source support ([Add enterprise data with new graph connections, Mar 5, 2025](https://learn.microsoft.com/en-us/power-platform/release-plan/2024wave2/microsoft-copilot-studio/add-enterprise-data-new-graph-connections))
- M365 Copilot deployment: Employees access in familiar apps
- M365 trust boundary: Data never leaves M365 tenant

### Implementation Steps
{: #scenario1-implementation .no_toc }

1. **Prepare Knowledge Base** (1-2 days)
   - Audit SharePoint HR site for accuracy and completeness
   - Ensure consistent document structure
   - Add metadata for better searchability

2. **Configure Copilot connector** (1 day)
   - Use SharePoint connector (built-in)
   - Configure indexing scope (specific site/library)
   - Test search results in M365 search

3. **Build Copilot Studio Agent** (2-3 days)
   - Create new agent with "Employee Support" template
   - Add SharePoint as a knowledge source for generative answers ([Configure SharePoint knowledge source, GA Mar 24, 2025](https://learn.microsoft.com/en-us/power-platform/release-plan/2024wave2/microsoft-copilot-studio/enable-makers-configure-sharepoint-as-knowledge-source-agents))
   - Add specific topics for common questions
   - Set up fallback to escalate to HR

4. **Test & Refine** (3-5 days)
   - Test with HR team
   - Pilot with small employee group
   - Review analytics and refine prompts
   - Add missing topics based on usage

5. **Deploy** (1 day)
   - Publish to M365 Copilot
   - Announce to employees via Teams/email
   - Monitor usage and satisfaction

**Time to Production:** 2-3 weeks  
**Ongoing Maintenance:** HR team updates SharePoint, agent stays current

### Alternative Approaches
{: #scenario1-alternatives .no_toc }

**If you have developers:**

- Use M365 Agents SDK with custom orchestration
- More control over conversation flow
- Can add custom integrations (HRIS systems)

**If data is outside SharePoint:**

- Use Azure AI Search with knowledge agents and custom indexers ([Agentic retrieval preview, May 2025](https://learn.microsoft.com/en-us/azure/search/agentic-retrieval-overview))
- Connect via BYOK in Copilot Studio or Microsoft 365 agent APIs
- Supports broader enterprise data sources and retrieval plans

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

- Use Azure Document Intelligence custom models ([Document Intelligence invoice model GA, Nov 30, 2024](https://learn.microsoft.com/en-us/azure/ai-services/document-intelligence/prebuilt/invoice?view=doc-intel-4.0.0))
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

- Azure AI Search: Indexes multiple disparate sources (SharePoint, Confluence, databases, etc.) with agentic retrieval preview ([What's new in Azure AI Search, May 2025](https://learn.microsoft.com/en-us/azure/search/whats-new#may-2025))
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

- Build with M365 Agents SDK or Azure AI Foundry ([Azure AI Foundry Agent Service GA, May 2025](https://learn.microsoft.com/en-us/azure/ai-foundry/agents/whats-new#may-2025))
- Custom evaluation metrics
- More complex deployment

**If budget is limited:**

- Start with Copilot Studio + SharePoint only (no Azure AI Search)
- Expand data sources gradually

---

## Scenario Comparison Matrix

| Scenario | Complexity | Time to Prod | Skill Level | Key Technology |
|----------|-----------|--------------|-------------|----------------|
| HR Knowledge Base | Low | 2-3 weeks | Maker | Copilot Studio + Copilot connectors |
| Invoice Processing | Low-Medium | 3-4 weeks | Maker | AI Builder + Power Automate |
| Customer Support | Medium | 6-8 weeks | Professional dev | Copilot Studio + Azure AI Search (agentic retrieval) |

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

**Last Updated:** November 2025  
**Next:** [Implementation Patterns]({{ '/docs/implementation-patterns' | relative_url }}) - Translate decisions into architecture approaches
