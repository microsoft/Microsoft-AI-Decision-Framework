# Task 1 Research Findings: AI at Work & Agents (Build 2025)

**Research Date:** November 24, 2025  
**Scope:** Validation of Microsoft Build 2025 announcements against current Microsoft Learn documentation

---

## Executive Summary

This research validates the **current status as of November 2025** for all Build 2025 announcements in Task 1 (AI at Work & Agents). Key findings:

✅ **MAJOR VALIDATIONS:**
- **Copilot Tuning** is in **Early Access Preview (EAP)**, NOT GA
- **Model Context Protocol (MCP)** is **GA across multiple platforms** - MASSIVE ecosystem update
- **Agent2Agent (A2A) Protocol** is **GA in multiple SDKs**
- **Copilot Notebooks** is **GA** (September 2025)
- **Copilot Memory** is **GA** (September 2025)
- **Copilot Search** is **GA** (September 2025)
- **M365 Agents SDK** with **BYO Models from Foundry** is **GA**
- **Dataverse Search** is **GA** (June 30, 2025)

❌ **NOT YET RELEASED:**
- Dynamics 365 Data in M365 Copilot (still in development/preview)
- Researcher & Analyst agents (mentioned as GA June 2025, but need further validation)

---

## 1. Copilot Tuning (M365 Copilot)

### STATUS: **Early Access Preview (EAP)** - NOT GA

**Source:** [Microsoft Learn - Copilot Tuning Overview](https://learn.microsoft.com/en-us/copilot/microsoft-365/copilot-tuning-overview)

### Key Findings:

**What It Is:**
- Fine-tune large language models (LLMs) using **tenant-specific data**
- Creates task-specific models that power **declarative agents**
- **No-code interface** in Microsoft Copilot Studio
- All training happens **within your Microsoft 365 tenant** (data never leaves)

**Eligibility:**
- **Early Access Program (EAP)** - NOT generally available
- No confirmation of "5,000+ licenses" requirement in official docs
- Controlled by Microsoft 365 admin at tenant or organization level
- Requires "Model Maker" role in Copilot Studio

**Supported Tasks:**
1. **Expert Q&A** - Answer questions in complex knowledge domains where RAG alone is insufficient
2. **Document Generation** - Create complex, structured documents (contracts, agreements, technical docs)
3. **Document Summarization** - Distill complex regulatory/legislative analyses

**Technical Requirements:**
- Minimum 20 samples required (ideally hundreds or thousands)
- Supports: Word (.doc, .docx), HTML, Markdown, PDF (OCR), Excel (.xls, .xlsx for Q&A)
- 2 MB limit per item (same as Cosmos DB)
- Uses supervised and reinforcement learning fine-tuning

**Security & Governance:**
- Enhanced security via Microsoft Entra Security Groups
- Admins can quickly remove models from production
- Nobody sees your data during training (tenant-isolated environments)

### Impact on Framework:

**THIS REPRESENTS A DECISION LOGIC EVOLUTION, NOT A LAYER BOUNDARY CHANGE:**

The framework should NOT add Copilot Tuning as a "Layer 2/3 boundary clarification" - this defeats the purpose of teaching **problem-first thinking** vs **product taxonomy memorization**.

**CRITICAL INSIGHT:**
Fine-tuning is not a "where does this product live" question. It's a **"when does RAG fail?"** question.

**Decision Pattern (Problem-First):**

When the AI doesn't understand your domain language, you have **escalating options**:

1. **Extend with knowledge** → Add documents/data sources (RAG/Grounding)
   - Use when: Standard terms, your data is well-documented
   - Technologies: Graph Connectors, AI Search, Dataverse Search, SharePoint, OneDrive

2. **Customize with instructions** → Write custom prompts/instructions
   - Use when: Behavior needs tweaking, tone/style adjustments
   - Technologies: Custom instructions, System prompts, Declarative agents

3. **Fine-tune the model** → Retrain on your specialized data
   - Use when: RAG alone fails because:
     - Complex, specialized terminology requires hundreds of examples to learn
     - Structured document formats (contracts, regulatory filings) need precise templates
     - Question-answer patterns where retrieval quality is insufficient
   - Technologies: Copilot Tuning (EAP), Azure OpenAI Fine-Tuning (GA)

**VALIDATION SUMMARY:**
- ✅ Copilot Tuning EXISTS and is in EAP
- ❌ NOT GA (as of November 2025)
- ❌ No official licensing requirement of "5,000+ licenses" confirmed
- ✅ Operates via Copilot Studio
- ✅ Creates declarative agents for M365 Copilot
- ✅ Represents a **low-code alternative** to Azure OpenAI Fine-Tuning, NOT a new layer

**Last Updated:** Microsoft Learn docs show "preview" status as of November 2025

**Recommended Framework Updates:**
1. Add "Copilot Tuning (EAP)" to `docs/technologies.md` under Copilot Studio (as implementation option)
2. Update `docs/decision-framework.md` - Q3 (Data strategy)
   - Add decision logic: "When does grounding fail? → Consider fine-tuning"
   - Include Copilot Tuning as low-code alternative to Azure OpenAI fine-tuning
3. Add pattern to `docs/implementation-patterns.md`: "When RAG Fails: Fine-Tuning vs Prompt Engineering"
4. Add to `docs/quick-reference.md` with clear **(EAP)** annotation
5. **DO NOT** add layer boundary clarifications to `docs/capability-model.md` - keep it technology-agnostic

---

## 2. Teams Agents & Agent2Agent (A2A) Protocol

### STATUS: **GA in Teams SDK v2** - MAJOR UPDATE

**Source:** [Microsoft Learn - A2A Protocol Overview](https://learn.microsoft.com/en-us/microsoftteams/platform/teams-ai-library/in-depth-guides/ai/a2a/overview)

### Key Findings:

**What It Is:**
- **Standardized protocol** for agent-to-agent communication
- Open protocol: [https://a2a-protocol.org/latest/](https://a2a-protocol.org/latest/)
- Enables agents built with different frameworks to communicate seamlessly

**Platform Support:**
- ✅ **Teams SDK v2** (TypeScript, Python) - GA
- ✅ **Microsoft Agent Framework** (.NET) - GA
- ✅ **Azure AI Foundry Agent Service** - GA (as of Build 2025)
- ✅ **GitHub Copilot Agent Mode** - GA (supports A2A clients)

**Technical Architecture:**

**A2A Components:**
1. **Agent Card** - Exposed at `/.well-known/agent-card.json` (discovery)
2. **A2A Server** - Exposes capabilities via `/a2a` endpoint
3. **A2A Client** - Proactively reaches out to other agents

**Capabilities:**
- **Agent discovery** through agent cards
- **Message-based communication** between agents
- **Long-running agentic processes** via tasks
- **Cross-platform interoperability** (different frameworks)

**Integration Points:**
- Teams SDK integrates A2A via `@microsoft/teams.a2a` package
- Agent Framework: `Microsoft.Agents.AI.Hosting.A2A.AspNetCore` NuGet
- Azure AI Foundry: A2A Tool for connecting agents

**Agentic Memory:**
- NOT separately documented as standalone feature
- Memory is managed through **conversation state** in Teams SDK
- Dataverse can serve as operational database for agent state

**A2A vs Multi-Agent Workflow:**
- **A2A Tool usage:** Agent A calls Agent B, B's answer is summarized by A, A retains control
- **Multi-Agent Workflow:** Agent A transfers responsibility to Agent B completely

### Impact on Framework:

**CRITICAL UPDATE TO MULTI-AGENT ORCHESTRATION:**

This validates **three distinct patterns** (per Constitution Article II):

1. **Connected Agents** - Independent agents that communicate/collaborate
   - ✅ Copilot Studio Connected Agents (Preview)
   - ✅ Azure AI Foundry Connected Agents (GA May 2025)
   - ✅ **NEW:** A2A Protocol enables cross-platform connected agents

2. **Sub-agents** - Parent-child hierarchy
   - ✅ Copilot Studio child agents
   - ✅ Agent Framework sub-agent delegation

3. **Agent Workflows** - Sequential/Concurrent/Handoff
   - ✅ Microsoft Agent Framework
   - ✅ LangGraph (Third-party)

**VALIDATION SUMMARY:**
- ✅ A2A Protocol is GA across Teams SDK, Agent Framework, Azure AI Foundry
- ✅ Official spec at a2a-protocol.org
- ✅ Enables multi-agent collaboration with standardized protocol
- ❌ "Agentic memory" is NOT a separate feature - it's conversation state management

**Recommended Framework Updates:**
1. **URGENT:** Update `docs/visual-framework.md` Multi-Agent Orchestration diagram
   - Add A2A Protocol as cross-platform pattern
   - Clarify "Connected Agents via A2A" vs "Sub-agents" vs "Workflows"
2. Add A2A Protocol to `docs/technologies.md` as **Layer 4 Infrastructure**
3. Update `docs/implementation-patterns.md` with A2A integration patterns
4. Add A2A to `docs/glossary.md`

---

## 3. Copilot Studio Pro-Code Features

### STATUS: **GA for M365 Agents SDK & Toolkit** - BYOM is **GA**

**Source:** [Microsoft Learn - M365 Agents SDK](https://learn.microsoft.com/en-us/microsoft-365-copilot/extensibility/create-deploy-agents-sdk)

### Key Findings:

**M365 Agents SDK:**
- **GA** as of November 2025
- **Model- and orchestrator-agnostic** - BYO (Bring Your Own)
- Supports:
  - ✅ Azure AI Foundry models
  - ✅ Semantic Kernel (Maintenance mode - use Agent Framework instead)
  - ✅ **Microsoft Agent Framework (Preview/Experimental)** - Microsoft's investment direction
  - ✅ OpenAI Agents SDK
  - ✅ LangChain (Third-party)
  - ✅ Custom-built orchestrators

**M365 Agents Toolkit:**
- ✅ **GA** for VS Code and Visual Studio
- Provides project scaffolding, testing, deployment
- Integrates with:
  - TypeSpec for Copilot
  - Azure AI Foundry
  - GitHub Copilot (Extension for rapid chat-based development)

**CRITICAL CLARIFICATION:**
- M365 SDK does **NOT have a "built-in Agent Framework"**
- M365 SDK **INTEGRATES WITH** orchestration frameworks
- **Microsoft Agent Framework (Preview)** is the **recommended** Microsoft orchestrator
- LangChain is a **third-party alternative**

**Bring Your Own Model (BYOM) from Azure AI Foundry:**
- ✅ **GA** in Copilot Studio
- Connect to 1,900+ models from Azure AI Foundry Model Catalog
- Integration via Azure AI Foundry connector
- Supports custom prompts with model selection dropdown
- Models must support **chat completion** type

**Model Support:**
- OpenAI GPT-4.5
- Llama (Meta)
- DeepSeek
- 1,800+ more in Azure AI Foundry Model Catalog
- Image-capable models: Phi-3.5-vision, Phi-4-multimodal, GPT-4o, GPT-4.5-preview

**Governance:**
- DLP (Data Loss Prevention) policies via Power Platform admin center
- Connection management in Power Apps
- Responsible AI policies managed in Azure AI Foundry

### Impact on Framework:

**Layer 3 Clarification:**

**Copilot Studio:**
- Low-code to pro-code SaaS platform
- BYOM via Azure AI Foundry connector (GA)
- 13+ channels
- Connected Agents (Preview), Child agents, Handoffs

**M365 Agents SDK:**
- Pro-code framework for M365-centric agents
- **BYO Orchestrator model** (Agent Framework recommended, LangChain third-party)
- 10+ channels (Teams, Outlook, M365 Chat)
- Deploy to M365 Copilot

**Azure AI Foundry:**
- Code-first platform for custom models, RAG, evaluations
- Works WITH or WITHOUT Azure AI Agent Service
- Connected Agents GA May 2025

**VALIDATION SUMMARY:**
- ✅ M365 Agents SDK is GA
- ✅ M365 Agents Toolkit is GA
- ✅ BYOM from Azure AI Foundry to Copilot Studio is GA
- ✅ SDK integrates with Agent Framework (Preview), NOT "built-in"
- ✅ LangChain is third-party alternative
- ❌ Previous "shoeboxing" corrected: SDK does NOT have built-in Agent Framework

**Recommended Framework Updates:**
1. Update `docs/technologies.md` - M365 Agents SDK section
   - Clarify "BYO Orchestrator" model
   - Mark Agent Framework as "Preview/Experimental - Microsoft's investment direction"
   - Mark Semantic Kernel as "Maintenance mode - use Agent Framework"
2. Update `docs/feature-comparison.md`
   - Add BYOM column for Copilot Studio (GA)
   - Add model count: 1,900+ from Foundry
3. **NOTE:** Do NOT add M365 Agents Toolkit to capability-model.md Layer 3
   - Capability model teaches **decision patterns**, not product inventory
   - SDK vs Copilot Studio is a **"how much control?"** question (decision-framework.md Q2)
   - Keep capability-model.md technology-agnostic

---

## 4. Model Context Protocol (MCP) - ECOSYSTEM OVERVIEW

### STATUS: **GA across Microsoft ecosystem** - MASSIVE STRATEGIC SHIFT

**Sources:**
- [Microsoft Learn - MCP in Copilot Studio](https://learn.microsoft.com/en-us/microsoft-copilot-studio/agent-extend-action-mcp)
- [Microsoft Learn - Azure MCP Server](https://learn.microsoft.com/en-us/azure/developer/azure-mcp-server/)
- [Microsoft Learn - Dataverse MCP Server](https://learn.microsoft.com/en-us/microsoft-agent-365/mcp-server-reference/dataverse)
- [Microsoft Learn - Dynamics 365 MCP Servers](https://learn.microsoft.com/en-us/dynamics365/release-plan/2025wave2/service/dynamics365-customer-service/connect-ai-agents-using-model-context-protocol-server)

### Key Findings:

**What MCP Is:**
- **Open protocol** (not Microsoft-proprietary): [https://modelcontextprotocol.io/](https://modelcontextprotocol.io/)
- Standardizes integrations between AI apps and external tools/data sources
- Designed to manage how LLMs interact with external tools, memory, and context

**MCP Architecture:**
- **Hosts:** Apps that use MCP clients (VS Code, GitHub Copilot, custom apps)
- **Clients:** Components that manage connections to MCP servers
- **Servers:** Programs that provide resources, tools, and prompts

**Microsoft MCP Ecosystem (GA):**

1. **Copilot Studio** (GA)
   - ✅ Supports MCP tools and resources (NOT prompts yet)
   - Connect to existing MCP servers via YAML schema template
   - Create custom MCP servers
   - Dynamic discovery: tools/resources update automatically from server
   - Requires Generative Orchestration enabled

2. **Azure MCP Server** (GA)
   - ✅ Interact with Azure resources via natural language
   - Uses Entra ID for authentication (Azure Identity library)
   - Supports Azure CLI, Azure Developer CLI (azd)
   - Works with: GitHub Copilot agent mode, OpenAI Agents SDK, Semantic Kernel, Visual Studio

3. **Dataverse MCP Server** (Preview in 2025 Wave 2)
   - ❌ NOT YET GA (in development for Wave 2)
   - Will expose Dataverse tools for LLMs
   - Tools: create_record, create_table, list_tables, describe_table, read_query, search, fetch, update_record, update_table, delete_record, delete_table
   - Enables copilots to reason over enterprise data securely

4. **Dynamics 365 MCP Servers** (Preview)
   - **Sales MCP Server** (Preview - 2025 Wave 1)
     - Tools: List leads, Retrieve lead summary, Qualify lead, Get outreach email, Send outreach email
   - **Customer Service MCP Server** (Preview - 2025 Wave 2)
     - Tools: Create/update account, List accounts, Create/update case, Create case note, List cases, Resolve case, Draft/send email

5. **Fabric Real-Time Intelligence (RTI) MCP Server** (Preview)
   - For Azure Data Explorer (ADX) clusters
   - Natural language queries, schema discovery
   - Works with GitHub Copilot, Cline, Claude Desktop

6. **Visual Studio Code / GitHub Copilot** (GA)
   - GitHub Copilot agent mode supports MCP clients
   - Can connect to MCP servers for context and tools

7. **Agent Framework** (Preview)
   - Supports MCP tools via .NET SDK
   - Integration with Azure AI Agent Service

8. **Windows MCP Support** (Private Preview)
   - Native MCP support on Windows
   - MCP Registry, MCP Servers for Windows features
   - App Actions on Windows (APIs GA, Testing Playground available)

**MCP vs Other Integration Patterns:**

| Pattern | Description | Example |
|---------|-------------|---------|
| **MCP Server** | Standardized protocol, tools/resources exposed to LLMs | Dynamics 365 MCP Server for Sales |
| **Power Platform Connector** | REST API wrapper for data sources | ServiceNow Connector |
| **Graph Connector** | Index external content into Microsoft Graph | Jira Graph Connector |
| **AI Plugin** | Manifest-based action for M365 Copilot | Teams Message Extension as plugin |

**Computer Use Tool:**
- ❌ NOT confirmed in official docs for Copilot Studio
- May be part of MCP ecosystem but needs validation

**Code Interpreter:**
- ❌ NOT confirmed in official docs for Copilot Studio
- Likely refers to Python execution in prompts (need validation)

### Impact on Framework:

**THIS IS A PARADIGM SHIFT:**

MCP is **NOT just another integration method** - it's a **strategic platform play**:

1. **Standardization:** Microsoft is adopting an open protocol (not proprietary)
2. **Ecosystem:** MCP servers for Azure, Dataverse, Dynamics 365, Windows
3. **Interoperability:** Works across Copilot Studio, GitHub Copilot, Agent Framework, VS Code
4. **Developer Experience:** Single integration pattern instead of multiple SDKs

**CRITICAL PATTERN:**

MCP sits at **Layer 4 (Infrastructure)** as a **data connectivity protocol**, enabling:
- Layer 3 platforms (Copilot Studio, Agent Framework) to consume tools/resources
- Layer 5 specialized copilots (Dynamics 365) to expose capabilities
- Cross-layer orchestration (Copilot Studio agent → Dataverse MCP → Azure MCP)

**VALIDATION SUMMARY:**
- ✅ MCP is GA in Copilot Studio (tools/resources, NOT prompts)
- ✅ Azure MCP Server is GA
- ✅ MCP is open protocol (modelcontextprotocol.io)
- ❌ Dataverse MCP Server is Preview (2025 Wave 2)
- ❌ Dynamics 365 MCP Servers are Preview
- ❌ "Computer Use Tool" NOT confirmed in official docs
- ❌ "Code Interpreter" NOT confirmed as MCP feature

**Recommended Framework Updates:**
1. **URGENT:** Add MCP to `docs/technologies.md` as **Layer 4 Infrastructure**
2. **URGENT:** Update `docs/implementation-patterns.md` with MCP integration patterns
3. Update `docs/visual-framework.md` Data Grounding Decision to include MCP
4. Add MCP to `docs/glossary.md`
5. Update `docs/feature-comparison.md` - Add MCP support column
6. Validate "Computer Use Tool" and "Code Interpreter" claims (need more research)

---

## 5. Dataverse as Operational Database & Dataverse Search

### STATUS: **Dataverse Search is GA** (June 30, 2025)

**Source:** [Microsoft Learn - Dataverse Search](https://learn.microsoft.com/en-us/power-apps/user/relevance-search-benefits)

### Key Findings:

**Dataverse Search:**
- ✅ **GA** as of June 30, 2025
- Opt-out feature (default ON for new production environments)
- Three modes:
  - **On:** Search bar visible, generative AI available
  - **Default:** Search bar hidden, generative AI available
  - **Off:** Search bar hidden, generative AI limited

**Capabilities:**
- Fast and accurate search for model-driven apps
- Suggested results as you type
- Smart matching (inflectional words: stream, streaming, streamed)
- Search activities (notes, attachments)
- Boolean operators for advanced search
- AI-powered: misspellings, abbreviations, synonyms
- Search across documents: PDF, Office, HTML, XML, ZIP, EML, JSON

**Enables Generative AI Experiences:**
- ✅ Microsoft Copilot Studio Agents (knowledge sources)
- ✅ Dynamics 365 Copilots (Sales, Customer Service, Field Service)
- ✅ Power Apps - Copilot for app users
- ✅ AI Builder - Custom prompts

**Dataverse as Operational Database:**
- ✅ Confirmed in Copilot Studio docs
- Agents can use Dataverse for operational data storage
- Supports structured and unstructured data
- Tables can be created/updated via Copilot Studio agents

**Technical Details:**
- Indexes: Support search and generative AI across structured/tabular and unstructured data
- Storage: Uses Dataverse storage capacity (enhanced semantic indexing increases usage)
- Lifecycle: Requires re-enabling after lifecycle operations (create, delete, backup, recover, copy, reset)

**Dataverse for Agents:**
- Microsoft Dataverse is "the foundational data platform to build, manage, and scale teams of autonomous agents"
- Supports human-in-the-loop capabilities
- Integrates with Copilot Studio and Power Platform

### Impact on Framework:

**Data Strategy Update:**

Dataverse is now positioned as:
1. **Operational Database** for agent actions (write-back)
2. **Knowledge Source** via Dataverse Search (read)
3. **Multi-agent Coordination** via shared data layer

**CRITICAL DISTINCTION:**
- **RAG (Retrieval-Augmented Generation):** Read-only knowledge retrieval
- **Operational Database:** Read-write for agent actions (create/update records)
- **Dataverse:** Does BOTH

**VALIDATION SUMMARY:**
- ✅ Dataverse Search is GA (June 30, 2025)
- ✅ Dataverse as operational database is confirmed
- ✅ Supports generative AI experiences across Copilot Studio, Dynamics 365, Power Apps
- ✅ Three configuration modes (On, Default, Off)

**Recommended Framework Updates:**
1. Update `docs/technologies.md` - Add Dataverse Search (GA)
2. Update `docs/implementation-patterns.md` - Add Dataverse as operational DB pattern
3. Update `docs/visual-framework.md` - Data Grounding Decision
   - Add Dataverse as both "Knowledge Source" and "Operational Database"
4. Update `docs/decision-framework.md` - Q3 (Data strategy)
   - Clarify "Grounding vs Memory vs Operational Database"

---

## 6. Dynamics 365 Data in M365 Copilot

### STATUS: **NOT CONFIRMED IN OFFICIAL DOCS**

**Source:** General Dynamics 365 integration docs (no specific confirmation of Build 2025 announcement)

### Key Findings:

**What Was Announced:**
- M365 Copilot can access Dynamics 365 CRM insights
- Entities: Contact, Opportunity, Lead, Account
- Status at Build: Private Preview (May 2025)

**What I Found:**
- ❌ NO specific documentation for "M365 Copilot accessing Dynamics 365 data" feature
- ✅ Dynamics 365 Copilots exist (Sales Copilot, Customer Service Copilot)
- ✅ Microsoft Sales Copilot (now "Copilot for Sales") integrates with Outlook and Teams
- ✅ Dynamics 365 MCP Servers (Preview) enable agent access to CRM data

**Related Capabilities:**
- **Microsoft Sales Copilot:** Surfaces Dynamics 365 Sales data in Outlook/Teams
- **Relationship Analytics:** Uses Exchange data (emails, meetings) to enrich Dynamics 365
- **Who Knows Whom:** Identifies colleagues with connections to leads
- **Dynamics 365 MCP Server:** Exposes Sales/Service tools to AI agents

**HYPOTHESIS:**
The Build 2025 announcement may be referring to:
1. **Dynamics 365 MCP Servers** (Preview) - allows M365 Copilot agents to call Dynamics 365 tools
2. **Copilot for Sales** integration - already GA for Outlook/Teams
3. **Future capability** not yet documented

### Impact on Framework:

**CANNOT CONFIRM THIS FEATURE:**
- Build 2025 announcement said "Private Preview in May 2025"
- As of November 2025, no official Microsoft Learn docs confirm this feature
- May have been delayed, renamed, or absorbed into MCP strategy

**VALIDATION SUMMARY:**
- ❌ NO official docs for "M365 Copilot accessing Dynamics 365 data" feature
- ✅ Dynamics 365 MCP Servers exist (Preview) - different pattern
- ✅ Copilot for Sales (formerly Microsoft Sales Copilot) integrates Dynamics 365 with Outlook/Teams
- ⚠️ **RECOMMENDATION:** Mark as "Unconfirmed - needs further research"

**Recommended Framework Updates:**
1. **DO NOT ADD** to framework until officially confirmed
2. Monitor Dynamics 365 release plans for updates
3. Add note in TASK_LIST.md: "Dynamics 365 data in M365 Copilot - UNCONFIRMED as of Nov 2025"

---

## 7. M365 Copilot Wave 2 Spring Release Features

### STATUS: **MIXED - Some GA, Some In Development**

**Source:** [Microsoft Learn - M365 Copilot Release Notes](https://learn.microsoft.com/en-us/copilot/microsoft-365/release-notes)

### Key Findings:

**✅ GA Features (as of November 2025):**

1. **Copilot Notebooks** (GA - September 16, 2025)
   - Create and use Copilot Notebooks in OneNote
   - Bring together notes, Word, Excel, PowerPoint, Copilot chats
   - Audio overview with podcast-style or single voice narration
   - Customize style and duration
   - Real-time collaboration via Copilot Pages

2. **Copilot Search** (GA - September 16, 2025)
   - Intelligent search across M365 data
   - Natural language queries
   - Search emails, files, chats, meetings
   - Third-party platforms: Salesforce, Jira, Confluence
   - Admin management via Copilot Control Systems

3. **Copilot Memory** (GA - September 3, 2025)
   - Leverages insights from conversations with Copilot
   - Data from Microsoft Graph and custom instructions
   - Users have full control: view, manage, disable, clear
   - **NOT** discoverable in eDiscovery (custom instructions)
   - No audit logging for memory actions
   - Admins can delete memory via Microsoft Graph Explorer + Purview

4. **Copilot Pages** (GA - May 2025)
   - Interactive canvas for editable, shareable pages
   - Turn Copilot responses into content
   - Real-time collaboration
   - Mobile creation, export to Word, search/filter
   - Interactive charts and code blocks

5. **GPT-4o Image Generation** (GA)
   - Confirmed in M365 Copilot

**❌ NOT CONFIRMED:**

1. **Researcher and Analyst Agents**
   - Blog post claims "GA June 2, 2025"
   - Release notes mention "Mobile support for Analyst agent (September 16, 2025)"
   - Status unclear - may be GA, need further validation

**VALIDATION SUMMARY:**
- ✅ Copilot Notebooks is GA (September 2025)
- ✅ Copilot Search is GA (September 2025)
- ✅ Copilot Memory is GA (September 2025)
- ✅ Copilot Pages is GA (May 2025)
- ✅ GPT-4o image generation is GA
- ⚠️ Researcher & Analyst agents - UNCLEAR (blog says GA June 2025, needs validation)

### Impact on Framework:

**M365 Copilot Feature Set Update:**

Add to `docs/technologies.md` under **M365 Copilot (Layer 1: Consumption)**:

**Wave 2 Features (GA):**
- Copilot Notebooks (GA September 2025) - Organize and reason over content
- Copilot Search (GA September 2025) - Natural language search across M365 and third-party
- Copilot Memory (GA September 2025) - Personalized interactions based on conversation history
- Copilot Pages (GA May 2025) - Collaborative editing canvas
- GPT-4o capabilities (image generation)

**Recommended Framework Updates:**
1. Update `docs/technologies.md` - M365 Copilot section
   - Add Wave 2 features with GA dates
2. Update `docs/scenarios.md`
   - Add "Collaborative problem-solving" (Copilot Notebooks)
   - Add "Enterprise search with AI" (Copilot Search)
   - Add "Personalized AI assistance" (Copilot Memory)
3. Update `docs/evaluation-criteria.md` - Governance
   - Add Copilot Memory governance considerations (no eDiscovery, no audit logging)
4. Validate Researcher & Analyst agents separately

---

## Overall Impact Assessment

### Files Requiring Updates:

1. **docs/technologies.md** - HIGH PRIORITY
   - Add Copilot Tuning (EAP)
   - Add M365 Agents SDK clarifications (BYO Orchestrator)
   - Add MCP ecosystem (Azure MCP, Dataverse MCP, Dynamics 365 MCP)
   - Add Dataverse Search (GA)
   - Add M365 Copilot Wave 2 features

2. **docs/visual-framework.md** - URGENT
   - Update Multi-Agent Orchestration diagram (add A2A Protocol)
   - Update Data Grounding Decision (add MCP, Dataverse dual role)

3. **docs/capability-model.md** - REVISED PRIORITY
   - **DO NOT** add technology-specific details (defeats framework philosophy)
   - **ONLY** update if adding technology-agnostic patterns
   - MCP is a data connectivity pattern, NOT a product to catalog
   - Keep capability model focused on **"what problems each layer solves"** not **"what products live where"**

4. **docs/implementation-patterns.md** - HIGH PRIORITY
   - Add MCP integration patterns
   - Add A2A Protocol patterns
   - Add Low-Code Model Fine-Tuning pattern
   - Add Dataverse operational database pattern

5. **docs/feature-comparison.md** - MEDIUM PRIORITY
   - Add BYOM column
   - Add MCP support column
   - Add model count (1,900+ from Foundry)

6. **docs/decision-framework.md** - HIGH PRIORITY (ELEVATED)
   - Update Q3 (Data strategy) - Grounding vs Memory vs Operational Database distinction
   - **NEW:** Add decision logic for "When does RAG fail?" → Fine-tuning escalation path
   - **NEW:** Add MCP as data connectivity pattern in Q3 (data access methods)
   - This is where **decision logic** belongs, NOT in capability-model.md

7. **docs/quick-reference.md** - MEDIUM PRIORITY
   - Add Copilot Tuning (EAP)
   - Add MCP servers
   - Add Wave 2 features

8. **docs/glossary.md** - MEDIUM PRIORITY
   - Add A2A Protocol
   - Add MCP (Model Context Protocol)
   - Add Copilot Tuning
   - Add Copilot Memory
   - Add Copilot Search

9. **docs/scenarios.md** - LOW PRIORITY
   - Add collaborative problem-solving scenarios
   - Add enterprise search scenarios

### Shoeboxing Corrections:

✅ **CORRECTED:**
- M365 SDK does NOT have "built-in Agent Framework" - it INTEGRATES with frameworks
- Dataverse is BOTH knowledge source AND operational database (not just one)

✅ **VALIDATED:**
- A2A Protocol is for agent communication, NOT multi-agent orchestration alone
- MCP is a standardized protocol, NOT a Microsoft-proprietary tool

✅ **PHILOSOPHICAL CORRECTION:**
- **WRONG:** "Update capability-model.md to clarify Layer 2/3 boundary for Copilot Tuning"
- **RIGHT:** "Update decision-framework.md Q3 to add fine-tuning escalation logic when RAG fails"
- **LESSON:** The framework teaches **decision methodology**, NOT product taxonomy
- Capability model = **"What problems does each layer solve?"** (technology-agnostic)
- Decision framework = **"How do I choose the right approach?"** (problem-first)
- Technologies doc = **"What products implement these patterns?"** (implementation catalog)

### Status Annotations:

**Preview → GA:**
- Copilot Notebooks (Preview → GA September 2025)
- Copilot Search (Preview → GA September 2025)
- Copilot Memory (Preview → GA September 2025)
- Dataverse Search (Preview → GA June 2025)
- M365 Agents SDK (Preview → GA)
- BYOM from Foundry (Preview → GA)

**Still Preview:**
- Copilot Tuning (EAP)
- A2A Protocol in Copilot Studio Connected Agents (Preview)
- Dataverse MCP Server (Preview - 2025 Wave 2)
- Dynamics 365 MCP Servers (Preview)
- Microsoft Agent Framework (Preview/Experimental)

**Unconfirmed:**
- Dynamics 365 Data in M365 Copilot (announced as Private Preview May 2025, no docs)
- Researcher & Analyst agents GA status (blog says June 2025, need validation)

---

## Next Steps:

1. ✅ Complete research for Task 1 (AI at Work & Agents)
2. ⏭️ Move to Task 2.1 (Azure AI & Foundry) - Azure AI Foundry Agent Service, Model Router, Agentic Retrieval
3. ⏭️ Continue systematic research through all Build 2025 announcements
4. 📝 After all research complete: Begin updating framework documentation files
5. 🔍 Schedule follow-up validation for:
   - Dynamics 365 Data in M365 Copilot (unconfirmed)
   - Researcher & Analyst agents GA status
   - Computer Use Tool (mentioned but not confirmed)
   - Code Interpreter (mentioned but not confirmed)

---

**Research Completed:** November 24, 2025  
**Researcher:** GitHub Copilot (Claude Sonnet 4.5)  
**Validation Methodology:** Source-backed research per Constitution Article I (no shoeboxing, official Microsoft Learn only)
