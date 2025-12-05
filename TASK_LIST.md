# Microsoft Build 2025 - Impact Analysis & Task List

This document tracks the research and updates required to align the Microsoft AI Decision Framework with the announcements from Microsoft Build 2025 (May 2025).

**Goal:** Systematically research each announcement, validate its current status (as of Nov 2025), and update the framework to reflect new capabilities, architectural patterns, and terminology.

---

## 1. AI at Work & Agents

### 1.1.1 Copilot Tuning (M365 Copilot)
- **Announcement:** Fine-tune models with company knowledge for domain-specific tasks.
- **Status at Build:** Rolling out June 2025.
- **Research Tasks:**
  - [ ] Validate if "Copilot Tuning" is GA.
  - [ ] Confirm licensing requirements (mentioned "5,000+ licenses").
- **Impact Analysis:**
  - Does this change the "Consumption" vs "Extensibility" layer boundary?
  - Update `docs/technologies.md` under M365 Copilot.
- **Terminology Check:** Ensure "Copilot Tuning" is the official name.

### 1.1.2 Teams Agents & A2A Protocol
- **Announcement:** Agent2Agent (A2A) protocol, Agentic memory, Agents in meetings.
- **Status at Build:** Preview in May 2025.
- **Research Tasks:**
  - [ ] Research "Agent2Agent protocol" specifications and current support.
  - [ ] Validate "Agentic memory" capabilities in Teams.
- **Impact Analysis:**
  - **CRITICAL:** Update "Multi-Agent Orchestration" diagram in `docs/visual-framework.md`.
  - Update `docs/implementation-patterns.md` to include A2A patterns.

### 1.2.1 Copilot Studio Pro-Code Features
- **Announcement:** M365 Agents Toolkit, Agents SDK, Agent Store, BYO Models from Foundry.
- **Status at Build:** Mixed (Toolkit/SDK GA, BYO Models Preview).
- **Research Tasks:**
  - [ ] Validate "M365 Agents SDK" current capabilities vs "Agent Framework".
  - [ ] Check status of "BYO Models from Azure AI Foundry" (Preview -> GA?).
- **Impact Analysis:**
  - Update `docs/capability-model.md` Layer 3 (Development Platforms).
  - Update `docs/technologies.md` for Copilot Studio.

### 1.2.2 Copilot Studio Natural Language & MCP
- **Announcement:** Multiple agent systems, Model Context Protocol (MCP) support, Computer Use Tool, Code Interpreter, Dataverse as operational database, Dataverse search.
- **Status at Build:** MCP GA, Dataverse search GA, others Preview.
- **Research Tasks:**
  - [ ] **High Priority:** Research "Model Context Protocol" (MCP) support across Microsoft ecosystem.
  - [ ] Validate "Computer Use Tool" availability (Frontier program?).
  - [ ] Check "Code Interpreter" in Copilot Studio status.
  - [ ] Research "Operational database for agents powered by Dataverse" (Preview).
  - [ ] Validate "Dataverse search" capabilities for agent knowledge (GA).
- **Impact Analysis:**
  - **New Concept:** MCP needs to be integrated into `docs/implementation-patterns.md`.
  - Update "Multi-Agent" sections to reflect "Multiple agent systems" in Copilot Studio.
  - Update data storage patterns to include Dataverse as operational DB for agents.

### 1.2.3 Enhanced Power Platform Connector SDK
- **Announcement:** SDK for building enhanced Power Platform connectors that consume structured data for agents.
- **Status at Build:** Preview.
- **Research Tasks:**
  - [ ] Research "Enhanced Power Platform connector SDK" capabilities.
  - [ ] Validate how this differs from standard connectors.
- **Impact Analysis:**
  - Update `docs/implementation-patterns.md` (Data connectivity).

### 1.2.4 Dynamics 365 Data in M365 Copilot
- **Announcement:** M365 Copilot can access Dynamics 365 CRM insights (Contact, Opportunity, Lead, Account).
- **Status at Build:** Private Preview.
- **Research Tasks:**
  - [ ] Check current status (Private -> Public/GA?).
  - [ ] Validate scope of entities available.
- **Impact Analysis:**
  - Update `docs/technologies.md` (M365 Copilot cross-product integration).
  - Update data grounding decision tree in `docs/visual-framework.md`.

### 1.3.1 M365 Copilot Wave 2 Spring Release
- **Announcement:** Updated M365 Copilot app, GPT-4o image generation, Copilot Notebooks (GA), Copilot Search, Copilot Memory (June), Researcher & Analyst agents (Frontier program).
- **Status at Build:** Rolling out.
- **Research Tasks:**
  - [ ] Validate if "Copilot Notebooks" is GA (Nov 2025).
  - [ ] Check status of "Copilot Memory" and "Copilot Search".
  - [ ] Research "Researcher" and "Analyst" reasoning agents availability.
- **Impact Analysis:**
  - Update `docs/technologies.md` (M365 Copilot features).
  - Add "Reasoning Agents" to scenarios if GA.

### 1.3.2 Copilot in Outlook
- **Announcement:** Email summaries, search result summaries, meeting preparation features.
- **Status at Build:** Generally Available.
- **Research Tasks:**
  - [ ] Confirm GA status and availability.
- **Impact Analysis:**
  - Update `docs/scenarios.md` (Email/productivity scenarios).

### 1.3.3 Copilot Pages Enhancements
- **Announcement:** Mobile creation, export to Word, search/filter, interactive charts and code blocks.
- **Status at Build:** Generally Available in May.
- **Research Tasks:**
  - [ ] Validate current status (Nov 2025).
- **Impact Analysis:**
  - Update `docs/technologies.md` (M365 Copilot collaboration features).

### 1.4.1 GitHub App for Teams
- **Announcement:** Enhanced GitHub app for Teams with notification cards, slash commands, threading.
- **Status at Build:** Generally Available.
- **Research Tasks:**
  - [ ] Confirm GA status.
- **Impact Analysis:**
  - Update `docs/scenarios.md` (Developer collaboration scenarios).

---

## 2. Azure AI & Foundry

### 2.1.1 Azure AI Foundry Models
- **Announcement:** Grok 3, Flux Pro 1.1, Sora coming to Azure OpenAI.
- **Status at Build:** Various.
- **Research Tasks:**
  - [ ] Check availability of Grok 3 and Sora on Azure OpenAI (Nov 2025).
  - [ ] Validate "Developer tier for fine-tuning" (no hosting fees).
- **Impact Analysis:**
  - Update `docs/technologies.md` Azure OpenAI section.
  - Update `docs/feature-comparison.md` model lists.

### 2.1.2 Azure AI Foundry Agent Service
- **Announcement:** GA of Agent Service. Multi-agent workflows, A2A, MCP support.
- **Status at Build:** Generally Available.
- **Research Tasks:**
  - [ ] Confirm "Azure AI Foundry Agent Service" is the definitive name (vs "Azure AI Agent Service").
  - [ ] Research integration with Semantic Kernel and AutoGen (unified runtime).
- **Impact Analysis:**
  - **Major Update:** Ensure `docs/technologies.md` and `docs/capability-model.md` reflect this as a core Layer 3/4 component.
  - Update "Multi-Agent Orchestration" diagram.

### 2.1.3 Azure AI Foundry Observability
- **Announcement:** Performance, quality, cost, safety metrics.
- **Status at Build:** Preview.
- **Research Tasks:**
  - [ ] Check if "Azure AI Foundry Observability" is GA.
  - [ ] Validate integration with Azure Monitor.
- **Impact Analysis:**
  - Update `docs/evaluation-criteria.md` (Governance & Ops).

### 2.1.4 Automated Model Selection (Model Router)
- **Announcement:** Model Router to select best OpenAI model for prompts.
- **Status at Build:** Preview.
- **Research Tasks:**
  - [ ] Validate "Model Router" capabilities and current status.
- **Impact Analysis:**
  - Update `docs/implementation-patterns.md` (Cost optimization patterns).

### 2.1.5 Agentic Retrieval (Azure AI Search)
- **Announcement:** Declarative query engine for agents.
- **Status at Build:** Preview.
- **Research Tasks:**
  - [ ] Research "Agentic retrieval" in Azure AI Search.
- **Impact Analysis:**
  - Update `docs/technologies.md` (Azure AI Search).
  - Update RAG patterns in `docs/implementation-patterns.md`.

### 2.1.6 Azure AI Foundry + Copilot Studio Integration
- **Announcement:** Copilot Studio can use 1,900+ Foundry Models, Azure AI Search vectorized indices, hand off to Agent Service.
- **Status at Build:** Mixed (Azure AI Search GA, others Preview).
- **Research Tasks:**
  - [ ] Validate "Bring Your Own Model" (BYOM) from Foundry to Copilot Studio status.
  - [ ] Check Azure AI Search integration with Copilot Studio (GA).
- **Impact Analysis:**
  - Update `docs/technologies.md` (Copilot Studio + Foundry integration).
  - Update `docs/implementation-patterns.md` (Hybrid patterns).

### 2.1.7 Azure AI Foundry Local
- **Announcement:** Local AI on Windows/MacOS, Foundry Local SDK.
- **Status at Build:** Preview.
- **Research Tasks:**
  - [ ] Validate "Azure AI Foundry Local" vs "Windows AI Foundry".
- **Impact Analysis:**
  - Update `docs/technologies.md` (Local AI/Edge).

### 2.1.8 Azure AI Foundry Security
- **Announcement:** Prompt Shields (GA), Spotlighting (Preview), Task adherence (Preview), Defender for Cloud integration (Preview), PII detection content filter.
- **Status at Build:** Mixed.
- **Research Tasks:**
  - [ ] Validate "Prompt Shields" GA status.
  - [ ] Research "Spotlighting" for cross-domain injection prevention.
  - [ ] Check "Task adherence" control availability.
  - [ ] Validate Defender for Cloud integration status.
- **Impact Analysis:**
  - Update `docs/evaluation-criteria.md` (Security & Governance).
  - Update `docs/technologies.md` (Azure AI Content Safety).

---

## 3. Data & Analytics (Fabric)

### 2.2.1 Cosmos DB (NoSQL) in Fabric
- **Announcement:** Deploy Cosmos DB (NoSQL) in Fabric for semi-structured operational data.
- **Status at Build:** Preview.
- **Research Tasks:**
  - [ ] Validate "Cosmos DB (NoSQL) in Fabric" status.
  - [ ] Research unified data estate implications.
- **Impact Analysis:**
  - Update `docs/technologies.md` (Fabric + Cosmos DB).
  - Update data strategy decision tree.

### 2.2.2 Azure Databricks Connector for Azure AI Foundry
- **Announcement:** AI agents can connect to Databricks for real-time data processing, Spark jobs, and Genie rooms (NLQ).
- **Status at Build:** Preview.
- **Research Tasks:**
  - [ ] Research Databricks connector in Azure AI Foundry.
  - [ ] Validate Unity Catalog integration for security.
- **Impact Analysis:**
  - Update `docs/technologies.md` (Azure Databricks + AI Foundry).
  - Update `docs/implementation-patterns.md` (Data processing patterns).

### 2.2.3 Chat with Data (Power BI & Fabric)
- **Announcement:** "Chat with your data" in Power BI, Fabric Data Agents.
- **Status at Build:** Preview.
- **Research Tasks:**
  - [ ] **Critical:** Validate "Fabric Data Agents" capabilities. Are they orchestrators or just Q&A? (Constitution Article II).
  - [ ] Check integration with Copilot Studio.
- **Impact Analysis:**
  - Update `docs/technologies.md` (Fabric).
  - Clarify "Data Agent" vs "AI Agent" in `docs/glossary.md`.

### 2.2.4 Digital Twin Builder in Fabric
- **Announcement:** No-code/low-code digital twin creation in Real-Time Intelligence.
- **Status at Build:** Preview.
- **Research Tasks:**
  - [ ] Research "Digital Twin Builder" capabilities.
- **Impact Analysis:**
  - Update `docs/scenarios.md` (IoT/operational scenarios).

### 2.2.5 PostgreSQL in GitHub Copilot & VS Code
- **Announcement:** PostgreSQL extension for VS Code with Copilot AI assistance.
- **Status at Build:** Preview.
- **Research Tasks:**
  - [ ] Validate PostgreSQL extension status.
- **Impact Analysis:**
  - Update `docs/technologies.md` (Database tools).

### 2.2.6 Cosmos DB Global Secondary Index
- **Announcement:** Automatically updated indexes for complex queries.
- **Status at Build:** Preview.
- **Research Tasks:**
  - [ ] Check "Global Secondary Index" status.
- **Impact Analysis:**
  - Update `docs/technologies.md` (Cosmos DB features).

### 2.2.7 Cosmos DB + Azure AI Foundry Integration
- **Announcement:** Thread storage (GA), data access from AI Foundry (coming soon).
- **Status at Build:** Thread storage GA.
- **Research Tasks:**
  - [ ] Validate Cosmos DB as thread storage for Agent Service (GA).
  - [ ] Check data connector status.
- **Impact Analysis:**
  - Update `docs/implementation-patterns.md` (Agent state management).

### 2.2.8 SQL Server 2025
- **Announcement:** Vector search, JSON support, REST API, Change Event Streaming, Entra ID, Fabric mirroring.
- **Status at Build:** Preview.
- **Research Tasks:**
  - [ ] **High Priority:** Research "SQL Server 2025" status (Nov 2025 - GA?).
  - [ ] Validate vector search capabilities.
- **Impact Analysis:**
  - Update `docs/technologies.md` (SQL Server).
  - Update RAG patterns to include SQL Server vector search.

### 2.2.9 SQL Server Management Studio 21 + Copilot
- **Announcement:** Modern SSMS based on VS 2022, Copilot in SSMS (Preview).
- **Status at Build:** SSMS 21 GA, Copilot Preview.
- **Research Tasks:**
  - [ ] Check "Copilot in SSMS" status.
- **Impact Analysis:**
  - Update `docs/technologies.md` (Developer tools).

### 2.2.10 OneLake Shortcut Transformations
- **Announcement:** AI-powered transformations (summarization, translation) on ingestion.
- **Status at Build:** Preview.
- **Research Tasks:**
  - [ ] Validate "Shortcut transformations" status.
- **Impact Analysis:**
  - Update Data Strategy sections in `docs/decision-framework.md`.

### 2.2.11 Translytical Task Flows in Fabric
- **Announcement:** Write-back capabilities in Power BI reports, trigger workflows from analytics.
- **Status at Build:** Preview.
- **Research Tasks:**
  - [ ] Research "Translytical task flows" capabilities.
- **Impact Analysis:**
  - Update `docs/scenarios.md` (Analytics + action scenarios).

---

## 4. Developer Tools (GitHub)

### 2.3.1 Agentic DevOps & GitHub Copilot Coding Agent
- **Announcement:** GitHub Copilot Coding Agent (autonomous), App modernization (Java/.NET), SRE Agent, Agent mode in VS Code/Visual Studio.
- **Status at Build:** Preview.
- **Research Tasks:**
  - [ ] Validate "GitHub Copilot Coding Agent" vs "Copilot Workspace".
  - [ ] Check "SRE Agent" status (Preview coming soon).
  - [ ] Research "App modernization" capabilities for Java/.NET.
  - [ ] Validate "Agent mode" in VS Code/Visual Studio/JetBrains/Eclipse/Xcode.
- **Impact Analysis:**
  - Update `docs/scenarios.md` (Developer scenarios, SRE scenarios).
  - Update `docs/technologies.md` (GitHub Copilot).
  - Add "Modernization" use case.

### 2.3.2 GitHub Models
- **Announcement:** MaaS directly in GitHub with native integration, model evaluation, CI/CD integration.
- **Status at Build:** Preview.
- **Research Tasks:**
  - [ ] Check if "GitHub Models" is GA.
  - [ ] Research prompt management and model evaluation features.
- **Impact Analysis:**
  - Update `docs/technologies.md`.
  - Update `docs/implementation-patterns.md` (Model selection patterns).

### 2.3.3 Open-Sourcing GitHub Copilot Chat in VS Code
- **Announcement:** AI-powered capabilities from GitHub Copilot extensions moving to VS Code open-source repo.
- **Status at Build:** Rolling out over next few months.
- **Research Tasks:**
  - [ ] Track open-source release progress.
- **Impact Analysis:**
  - Update `docs/technologies.md` (VS Code).
  - Note in scenarios that Copilot is becoming part of the open-source editor.

---

## 5. Business Applications

### 3.1.1 Power Apps Human-Agent Collaboration
- **Announcement:** Build plans with agentic AI, agent feed for apps, bring code-first apps to Power Platform, React code generation.
- **Status at Build:** Mixed (Plans GA May 30, Agent feed Early Access, React generation Early Access).
- **Research Tasks:**
  - [ ] Check if "Build plans" feature is GA.
  - [ ] Research "Agent feed" in Power Apps.
  - [ ] Validate "Bring code-first apps to Power Platform" capabilities.
- **Impact Analysis:**
  - Update `docs/technologies.md` (Power Apps).
  - Update `docs/scenarios.md` (Citizen developer scenarios).

### 3.1.2 Power Pages AI-Agentic Portals
- **Announcement:** Bring your own code, VS Code integration, multilingual support, agents in Power Pages, intelligent list search.
- **Status at Build:** Mixed (some GA, some Preview).
- **Research Tasks:**
  - [ ] Research "Bring your own code" for Power Pages.
  - [ ] Check "Agents in Power Pages" status.
- **Impact Analysis:**
  - Update `docs/technologies.md` (Power Pages).

### 3.1.3 Dynamics 365 MCP Servers
- **Announcement:** MCP servers for Dynamics 365 apps, enabling AI agents to access CRM data and actions.
- **Status at Build:** Preview.
- **Research Tasks:**
  - [ ] **High Priority:** Research "MCP servers for Dynamics 365".
  - [ ] Validate cross-app intelligence capabilities.
- **Impact Analysis:**
  - Update `docs/technologies.md` (Dynamics 365).
  - Update MCP ecosystem documentation.

---

## 6. Edge

### 4.1.1 Edge AI APIs
- **Announcement:** Prompt API, Writing Assistance APIs, Translator API (coming), Phi-4-mini model built into browser.
- **Status at Build:** Developer trials.
- **Research Tasks:**
  - [ ] Check current status of Edge AI APIs.
  - [ ] Research Phi-4-mini availability in Edge.
- **Impact Analysis:**
  - Update `docs/technologies.md` (Edge, client-side AI).
  - Update `docs/implementation-patterns.md` (Privacy-first patterns).

### 4.1.2 Edge PDF Translation
- **Announcement:** Full-page PDF translation in 70+ languages.
- **Status at Build:** GA next month (from May).
- **Research Tasks:**
  - [ ] Confirm GA status.
- **Impact Analysis:**
  - Update `docs/scenarios.md` (Productivity scenarios).

### 4.1.3 Edge Agents in Sidebar
- **Announcement:** M365 Copilot agents accessible in Edge for Business sidebar, document summarization.
- **Status at Build:** Preview (early June).
- **Research Tasks:**
  - [ ] Check status of agents in Edge sidebar.
  - [ ] Validate document summarization for M365 docs.
- **Impact Analysis:**
  - Update `docs/technologies.md` (Edge for Business).

### 4.1.4 Edge Web Content Filtering
- **Announcement:** Free web content filtering for schools and small businesses using Edge for Business.
- **Status at Build:** Preview.
- **Research Tasks:**
  - [ ] Check status.
- **Impact Analysis:**
  - Update `docs/scenarios.md` (Education scenarios).

---

## 7. Windows & Edge

### 7.1.1 Windows AI Foundry
- **Announcement:** Unified platform for local AI, Windows Copilot Runtime.
- **Status at Build:** Preview.
- **Research Tasks:**
  - [ ] Clarify relationship between "Windows AI Foundry" and "Azure AI Foundry".
  - [ ] Validate "Phi Silica" availability.
- **Impact Analysis:**
  - Update `docs/technologies.md` (Client-side AI).

### 7.1.2 MCP on Windows
- **Announcement:** Native support for Model Context Protocol on Windows, MCP Registry, MCP Servers for Windows features.
- **Status at Build:** Private Preview.
- **Research Tasks:**
  - [ ] Check current status of MCP on Windows.
  - [ ] Research "MCP Registry for Windows".
  - [ ] Validate "App Actions on Windows" (APIs GA, Testing Playground available).
- **Impact Analysis:**
  - Update `docs/implementation-patterns.md` (Client-side agents).
  - Update MCP ecosystem documentation.

### 7.1.3 Windows Developer Tools
- **Announcement:** WinGet Configuration, WSL open source, Advanced Windows Settings, Command Palette in PowerToys, Edit text editor.
- **Status at Build:** Mixed.
- **Research Tasks:**
  - [ ] Check "WinGet Configuration" status (summer 2025 GA?).
  - [ ] Validate WSL open source status.
  - [ ] Research "Command Palette in PowerToys" (GA).
- **Impact Analysis:**
  - Update `docs/technologies.md` (Windows developer tools).

### 7.1.4 VBS Enclave SDK
- **Announcement:** Simplified VBS enclave development.
- **Status at Build:** Preview.
- **Research Tasks:**
  - [ ] Research VBS Enclave SDK.
- **Impact Analysis:**
  - Update `docs/evaluation-criteria.md` (Security patterns).

### 7.1.5 Windows Security Posture Updates
- **Announcement:** Administrator protection, Camera/Microphone/Location consent requirements.
- **Status at Build:** Preview.
- **Research Tasks:**
  - [ ] Check current status.
- **Impact Analysis:**
  - Update `docs/evaluation-criteria.md` (Compliance requirements).

### 7.1.6 Windows App SDK Updates
- **Announcement:** Windows AI capabilities in Copilot+ PCs, NuGet metapackage, React Native for Windows New Architecture (GA).
- **Status at Build:** Mixed.
- **Research Tasks:**
  - [ ] Check Windows App SDK 1.8 status.
  - [ ] Validate React Native for Windows New Architecture GA.
- **Impact Analysis:**
  - Update `docs/technologies.md` (Windows development).

### 7.1.7 Microsoft Store Updates
- **Announcement:** Zero onboarding fees for individual developers (June), App campaigns, Health Report insights, Win32 update support.
- **Status at Build:** Preview.
- **Research Tasks:**
  - [ ] Confirm zero onboarding fee status.
  - [ ] Research "App campaigns" on Microsoft Advertising Platform.
- **Impact Analysis:**
  - Update `docs/scenarios.md` (ISV scenarios).

### 7.1.8 Post-Quantum Cryptography
- **Announcement:** ML-KEM and ML-DSA algorithms in Windows Insiders and SymCrypt-OpenSSL.
- **Status at Build:** Preview.
- **Research Tasks:**
  - [ ] Check PQC implementation status.
- **Impact Analysis:**
  - Update `docs/evaluation-criteria.md` (Future-proofing security).

---

## 8. Security & Governance

### 5.1.1 Microsoft Purview SDK
- **Announcement:** REST APIs for embedding Purview data security and compliance into AI apps.
- **Status at Build:** Preview.
- **Research Tasks:**
  - [ ] Research "Microsoft Purview SDK" capabilities.
  - [ ] Validate real-time classification over prompts.
- **Impact Analysis:**
  - Update `docs/evaluation-criteria.md` (Compliance & Governance).
  - Update `docs/implementation-patterns.md` (Security patterns).

### 5.1.2 Purview DSPM for AI
- **Announcement:** Data Security Posture Management for Azure AI workloads, Insider Risk Management, Audit integration.
- **Status at Build:** Preview.
- **Research Tasks:**
  - [ ] Research "DSPM for AI" capabilities.
  - [ ] Validate Insider Risk Management for AI interactions.
- **Impact Analysis:**
  - Update `docs/evaluation-criteria.md` (Security posture).

### 5.1.3 Defender for Cloud + Azure AI Foundry
- **Announcement:** Security insights, posture recommendations, threat protection alerts in AI Foundry portal.
- **Status at Build:** Preview (available June 2025).
- **Research Tasks:**
  - [ ] Check Defender for Cloud integration status.
- **Impact Analysis:**
  - Update `docs/technologies.md` (Azure AI Foundry security).

### 5.1.4 Purview for Copilot Studio Agents
- **Announcement:** DSPM for AI and Audit support for unauthenticated customer-facing agents.
- **Status at Build:** Preview.
- **Research Tasks:**
  - [ ] Research Purview capabilities for Copilot Studio.
- **Impact Analysis:**
  - Update `docs/evaluation-criteria.md` (Customer-facing agent governance).

### 5.1.5 DLP for M365 Copilot Agents
- **Announcement:** Extend DLP to agents in M365 Copilot, exclude labeled documents.
- **Status at Build:** DLP for M365 Copilot GA late June, Agents Preview.
- **Research Tasks:**
  - [ ] Validate DLP for M365 Copilot GA status.
  - [ ] Check agent-specific DLP controls.
- **Impact Analysis:**
  - Update `docs/evaluation-criteria.md` (Data loss prevention).

### 5.1.6 Microsoft Entra Agent ID
- **Announcement:** Unique identifier for every agent in Copilot Studio and Azure AI Foundry.
- **Status at Build:** Preview.
- **Research Tasks:**
  - [ ] **High Priority:** Research "Entra Agent ID" capabilities.
  - [ ] Validate centralized agent visibility.
- **Impact Analysis:**
  - Update `docs/evaluation-criteria.md` (Identity & access management).
  - Update `docs/technologies.md` (Entra).

### 5.1.7 Azure AI Foundry Evaluation + Purview Compliance Manager
- **Announcement:** Integration for EU AI Act compliance (DPIA, AIA), documentation for audits.
- **Status at Build:** Preview.
- **Research Tasks:**
  - [ ] Research evaluation + compliance integration.
  - [ ] Validate EU AI Act support.
- **Impact Analysis:**
  - Update `docs/evaluation-criteria.md` (Regulatory compliance).

---

## 9. Agentic Web Standards

### 6.1.1 MCP Steering Committee Contributions
- **Announcement:** Microsoft and GitHub join MCP Steering Committee, contribute identity/authorization spec and public registry.
- **Status at Build:** GA.
- **Research Tasks:**
  - [ ] **Critical:** Research MCP ecosystem support across Microsoft products.
  - [ ] Validate identity and authorization spec.
  - [ ] Research public MCP server registry.
- **Impact Analysis:**
  - **Major:** Create dedicated MCP section in `docs/implementation-patterns.md`.
  - Update `docs/technologies.md` for all MCP-supporting products.

### 6.2.1 NLWeb
- **Announcement:** Open project for conversational interfaces on the web, every endpoint is an MCP server.
- **Status at Build:** Publicly available.
- **Research Tasks:**
  - [ ] Research "NLWeb" project.
- **Impact Analysis:**
  - Update `docs/technologies.md` (Web standards).

---

## 10. Industry & Science

### 2.4.1 Microsoft Planetary Computer Pro
- **Announcement:** Deploy within Azure for geospatial insights, integrates with Fabric and Esri ArcGIS.
- **Status at Build:** Preview.
- **Research Tasks:**
  - [ ] Research Planetary Computer Pro.
- **Impact Analysis:**
  - Update `docs/scenarios.md` (Geospatial/environmental scenarios).

### 2.5.1 Microsoft Discovery
- **Announcement:** Enterprise agentic platform for R&D, scientific knowledge reasoning, hypothesis formulation, simulation.
- **Status at Build:** Announced.
- **Research Tasks:**
  - [ ] **High Priority:** Research "Microsoft Discovery" platform.
- **Impact Analysis:**
  - Update `docs/scenarios.md` (Scientific/R&D scenarios).
  - Update `docs/technologies.md` (Specialized platforms).

---

## 11. Cross-Correlated Insights & Terminology

### Terminology Updates
- **Azure AI Studio** -> **Azure AI Foundry** (Validate universal application).
- **Copilot Stack** -> Check if this term is still used or replaced by "Foundry" + "Agent Service".
- **Plugin** -> **Tool** / **MCP Server** (Check the shift in terminology).

### Cross-Correlations

#### Foundry Ecosystem Unification
- **Azure AI Foundry** (cloud), **Windows AI Foundry** (client), **Foundry Local** (on-device).
  - *Insight:* "Foundry" is the unified brand for the "Factory" layer (Layer 3). It spans cloud-to-edge.
  - *Correlation:* Task 2.1.7 + 7.1.1 + 2.1.6

#### MCP as Universal Extensibility Standard
- MCP support in: Copilot Studio (GA), Azure AI Agent Service, Windows (Preview), Dynamics 365 (Preview), NLWeb, GitHub.
  - *Insight:* MCP is becoming THE standard for "Extensibility" (Layer 2), replacing proprietary plugin models.
  - *Correlation:* Task 1.2.2 + 2.1.2 + 6.1.1 + 7.1.2 + 3.1.3
  - **Framework Impact:** Layer 2 needs to be redefined around MCP as the primary extensibility mechanism.

#### Agent2Agent (A2A) Protocol Emergence
- A2A mentioned in: Teams (1.1.2), Azure AI Agent Service (2.1.2), Copilot Studio (1.2.2).
  - *Insight:* Standardized peer-to-peer agent communication is becoming a reality.
  - *Correlation:* Task 1.1.2 + 2.1.2 + 1.2.2
  - **Framework Impact:** Multi-Agent Orchestration diagram needs A2A as a distinct pattern.

#### "Agent" as the New Atomic Unit
- Agents in: M365 Copilot, Teams, Copilot Studio, Azure AI Foundry, Fabric (Data Agents), GitHub (Coding Agent, SRE Agent), Windows, Power Apps, Edge, Dynamics 365.
  - *Insight:* "Agent" is replacing "Chatbot" and "Copilot" as the technical term for autonomous AI components.
  - *Correlation:* Tasks 1.1.2, 1.2.2, 1.3.1, 2.1.2, 2.2.3, 2.3.1, 3.1.1, 4.1.3
  - **Terminology Impact:** Glossary needs to define "Agent" vs "Copilot" vs "Assistant".

#### Security & Governance Integration
- Purview SDK (5.1.1) + DSPM for AI (5.1.2) + Defender for Cloud (5.1.3) + Entra Agent ID (5.1.6) + Compliance Manager (5.1.7).
  - *Insight:* Microsoft is building end-to-end security for the entire AI lifecycle.
  - *Correlation:* All Security tasks (5.1.x)
  - **Framework Impact:** Governance section needs to show integrated security stack.

#### Data Platform Convergence
- Cosmos DB in Fabric (2.2.1), Databricks in AI Foundry (2.2.2), SQL Server 2025 vector search (2.2.8), Fabric mirroring, OneLake transformations (2.2.10).
  - *Insight:* Microsoft is unifying operational, analytical, and AI workloads across Fabric, Cosmos DB, SQL Server, and Databricks.
  - *Correlation:* Tasks 2.2.1, 2.2.2, 2.2.7, 2.2.8, 2.2.10
  - **Framework Impact:** Data Grounding decision tree needs to reflect unified data estate.

#### Developer Experience Unification
- GitHub Models (2.3.2) + VS Code Copilot open source (2.3.3) + Windows developer tools (7.1.3) + AI Toolkit for VS Code (7.1.1).
  - *Insight:* Microsoft is consolidating the developer experience around VS Code, GitHub, and integrated AI assistance.
  - *Correlation:* Tasks 2.3.2, 2.3.3, 7.1.1, 7.1.3

#### Reasoning Agents Emergence
- "Researcher" and "Analyst" agents (1.3.1), Deep reasoning prompts in Copilot Studio (1.2.2).
  - *Insight:* "Reasoning agents" are a new category focused on multi-step analysis and research.
  - *Correlation:* Tasks 1.3.1, 1.2.2
  - **Framework Impact:** Scenarios need "Research & Analysis" use case.

---

## 12. Execution Plan

### Phase 1: Research & Validation (High Priority)
1. **MCP Ecosystem Deep Dive:** Research MCP support across all products (Tasks 1.2.2, 2.1.2, 6.1.1, 7.1.2, 3.1.3).
2. **Agent Service Validation:** Confirm "Azure AI Foundry Agent Service" capabilities and unified runtime (Task 2.1.2).
3. **Fabric Data Agents Anti-Shoeboxing:** Validate what Fabric Data Agents CAN and CANNOT do (Task 2.2.3).
4. **SQL Server 2025 Status:** Check if SQL Server 2025 is GA and validate vector search (Task 2.2.8).
5. **Microsoft Discovery Platform:** Research this new R&D platform (Task 2.5.1).
6. **Entra Agent ID:** Understand centralized agent identity management (Task 5.1.6).

### Phase 2: Terminology & Naming Updates
1. **Global Terminology Sweep:** Validate and replace "Azure AI Studio" -> "Azure AI Foundry".
2. **"Agent" Definition:** Add clear definition to `docs/glossary.md` distinguishing Agent/Copilot/Assistant.
3. **MCP vs Plugin:** Update all references to "Plugin" to clarify MCP as the new standard.
4. **Layer 2 Rename?** Consider renaming "Extensibility" to "MCP & Extensibility".

### Phase 3: Framework Updates (Surgical Insertions)
1. **Capability Model Updates:**
   - Elevate "Azure AI Foundry Agent Service" to core Layer 3 component.
   - Add "MCP" as Layer 2 primary mechanism.
   - Add "Foundry Local" as Layer 4 edge capability.

2. **Visual Framework Diagram Updates:**
   - Redraw "Multi-Agent Orchestration" to include A2A protocol.
   - Update "Data Grounding" to reflect unified data estate (Fabric, Cosmos DB, SQL Server 2025).
   - Add "MCP Connectivity" diagram.

3. **Technologies Deep Dive:**
   - Update M365 Copilot (Wave 2, Tuning, Reasoning agents).
   - Update Copilot Studio (MCP, Computer Use, Multi-agent systems).
   - Update Azure AI Foundry (Agent Service GA, Security integration, Model Router).
   - Add SQL Server 2025 section.
   - Add Microsoft Discovery section.
   - Update GitHub Copilot (Coding Agent, App modernization).

4. **Implementation Patterns:**
   - Add "MCP Server Development" pattern.
   - Add "A2A Communication" pattern.
   - Add "Agent State Management with Cosmos DB" pattern.
   - Update RAG patterns to include SQL Server 2025 vector search.

5. **Evaluation Criteria:**
   - Add "Integrated Security Stack" (Purview + Defender + Entra).
   - Add "EU AI Act Compliance" (Purview + Compliance Manager).

6. **Scenarios:**
   - Add "Research & Analysis" (Researcher/Analyst agents).
   - Add "Scientific R&D" (Microsoft Discovery).
   - Add "Geospatial" (Planetary Computer Pro).
   - Update "Developer" scenarios (SRE Agent, App modernization).

### Phase 4: Validation Summary Updates
For each updated diagram in `docs/visual-framework.md`, add validation summaries with:
- Last validated date (Nov 2025).
- Source URLs to Microsoft Learn docs.
- Status annotations (GA/Preview) for all technologies mentioned.

### Phase 5: Methodology & Framework Refinement (The "Why" and "How")

**Critical:** After all technology updates, we must refocus on the **teaching framework** and **mental model**.

#### 5.1 Constitution Compliance Audit
- [ ] **Article I (Source-Backed):** Review all new content to ensure every claim links to Microsoft Learn.
- [ ] **Article II (Anti-Shoeboxing):** Validate we haven't forced any technology into capabilities it doesn't support.
  - **High Risk Areas:** Fabric Data Agents, MCP scope, Computer Use Tool availability.
- [ ] **Article III (Status Transparency):** Ensure all GA/Preview annotations are accurate.
- [ ] **Article IV (Order of Operations):** Confirm we assessed "Can it do this?" before adding it to framework.
- [ ] **Article V (Navigation Mandate):** Verify the learning flow still guides users from Foundation → Context → Application → Reference.

#### 5.2 BXT Framework Integrity Check
- [ ] Does the three-phase approach (Business → Experience → Technology) still hold with all new capabilities?
- [ ] **Critical:** Review the 9 Critical Questions in Phase 2. Can they be **refined** (not expanded) to remain timeless?
  - Example: Does Q3 (Data strategy) still cover new patterns like unified data estates and agent memory?
  - Example: Does Q5 (Compliance) cover emerging concerns without being technology-specific?
  - **Rule:** Keep it at 9 questions. Improve wording, not quantity.
- [ ] Review `docs/decision-framework.md` to ensure BXT methodology is still the core narrative.

#### 5.3 Five-Layer Capability Model Review
- [ ] Review the **conceptual integrity** of the five layers as a mental model:
  - Does each layer represent a distinct **level of control** and **investment**?
  - Can users still understand the progression: Consume → Extend → Build → Operate → Specialize?
- [ ] **Avoid over-specification:** Don't rename layers to mention specific technologies (e.g., not "MCP & Extensibility").
  - Layer names should be **timeless concepts**, not current product names.
- [ ] Test: Can a user explain the five layers without mentioning any Microsoft product names?
- [ ] Update `docs/capability-model.md` to strengthen the **conceptual narrative**, not just list technologies.
  - Example: Layer 2 is about "connecting your data and extending capabilities" (whether via MCP, connectors, or future mechanisms).

#### 5.4 Simplicity vs Completeness Tension
The framework now has **60+ new data points**. We risk becoming a "technology encyclopedia" instead of a "decision framework."

**Tasks:**
- [ ] **Identify the "Essential 20":** Which 20 technologies/patterns must users understand to make 80% of decisions?
- [ ] **Create a "Quick Path":** Can we create a 5-minute version of the framework for time-constrained decision-makers?
- [ ] **Preserve Progressive Learning:** Ensure Quick Reference stays at position 10 (not earlier).
- [ ] Review `README.md` to ensure it still emphasizes **"teaching a way of thinking"** over listing features.

#### 5.5 Scenario-Driven Narrative Strengthening
After technology updates, we must ensure scenarios still **anchor** the framework in real-world problems.

**Tasks:**
- [ ] Review `docs/scenarios.md` for each new capability:
  - Which **business problems** do they solve?
  - Which **personas** care about them?
  - What's the **before/after** transformation?
- [ ] Add "Anti-Scenarios" (when NOT to use a technology):
  - Example: "Don't use Fabric Data Agents for autonomous multi-step workflows."
  - Example: "Don't use Azure AI Foundry if you need zero-code and 13+ channels (use Copilot Studio)."
- [ ] Ensure every new technology appears in at least ONE scenario (or explicitly note it's niche).

#### 5.6 Decision Tree Pruning & Clarity
**Risk:** Adding too many branches makes decision trees unusable.

**Tasks:**
- [ ] Review **Diagram 1 (Complete Decision Flow)** in `visual-framework.md`:
  - Does it still fit on one screen/page?
  - Can a new user follow it without getting lost?
- [ ] Consider creating "Decision Tree Layers":
  - **Layer 1:** High-level (Consumption vs Extensibility vs Custom).
  - **Layer 2:** Mid-level (Within "Custom," choose Copilot Studio vs Foundry vs SDK).
  - **Layer 3:** Deep-dive (Within "Foundry," choose models, orchestration patterns, etc.).
- [ ] Validate that decision criteria remain **observable** (not "Do you need flexibility?" but "Do you need to control the orchestration logic?").

#### 5.7 "Problem-First Architecture" Reinforcement
The Constitution emphasizes **problem-first thinking**. Ensure technology updates don't reverse this.

**Tasks:**
- [ ] Add callout boxes in `docs/technologies.md` that redirect to business problems:
  - "If you're reading about Azure AI Foundry Agent Service, ask: What problem am I solving? See [Scenarios](scenarios.md)."
- [ ] Update `docs/decision-framework.md` to include "The 3 Questions Before Technology":
  1. What business outcome am I trying to achieve?
  2. What user experience will deliver that outcome?
  3. Which technology supports that experience with the least complexity?

#### 5.8 Terminology Glossary & Precision
With 40+ new terms (MCP, A2A, Foundry Local, Entra Agent ID, Agentic Retrieval, Translytical, etc.), we risk jargon overload.

**Tasks:**
- [ ] Update `docs/glossary.md` with all new terms.
- [ ] Create a "Jargon vs Plain English" mapping:
  - Example: "Agentic Retrieval" = "AI-powered search that plans the best way to find information."
  - Example: "Translytical" = "Reports that let you edit data, not just view it."
- [ ] Add a "Buzzword Alert" section to help users cut through marketing.

#### 5.9 Cross-Correlation Insights → Framework Principles
The cross-correlations reveal **emerging patterns**. Convert these into **timeless, technology-agnostic** principles.

**Tasks:**
- [ ] **Principle 1 (Standardization Matters):** "The AI landscape is consolidating around open standards for extensibility. Prefer standards over proprietary mechanisms."
  - *(Today: MCP. Tomorrow: Something else. Principle remains.)*
- [ ] **Principle 2 (Cloud-to-Edge Continuity):** "Modern AI platforms span cloud, client, and edge. Choose platforms that support your deployment model."
  - *(Today: Foundry. Tomorrow: Evolved. Principle remains.)*
- [ ] **Principle 3 (Composability Over Monoliths):** "Build small, specialized agents that communicate, rather than monolithic solutions."
  - *(Today: A2A protocol. Tomorrow: New pattern. Principle remains.)*
- [ ] **Principle 4 (Security Must Be Integrated):** "Bolt-on security fails. Use platforms with integrated identity, governance, and compliance from day one."
  - *(Today: Purview + Entra. Tomorrow: Evolved. Principle remains.)*
- [ ] **Principle 5 (Unified Data Reduces Complexity):** "Operational and analytical data silos increase cost and reduce AI effectiveness. Unify your data estate."
  - *(Today: Fabric + Cosmos DB + SQL Server. Tomorrow: New tools. Principle remains.)*
- [ ] Add a new section to `docs/decision-framework.md`: "**5 Timeless Principles for AI Architecture**."
- [ ] **Critical:** Frame these as **why**, not **what**. Explain the reasoning, not the current implementation.

#### 5.10 Learning Path Validation
**Question:** Does the 1-12 navigation order still make sense after all updates?

**Tasks:**
- [ ] Walk through the learning path as a **new user**:
  1. README → Capability Model → Decision Framework → Scenarios → Visual Framework → Evaluation → Patterns → Technologies → Comparison → Quick Ref → Resources → Glossary.
- [ ] Identify "Cognitive Overload" points where users might get lost.
- [ ] Consider adding "Checkpoints" after every 3 documents:
  - Example: After "Scenarios," add a checkpoint: "You should now understand the business problems. Ready to see how to solve them?"

#### 5.11 README.md as the "North Star"
The README is the first thing users see. It must **set the tone** for the entire framework.

**Tasks:**
- [ ] Update `README.md` to emphasize:
  - **NOT:** "Here's a list of Microsoft AI technologies."
  - **YES:** "Here's a framework for thinking about AI decisions."
- [ ] Add a "What This Framework Will NOT Do" section:
  - "This framework will NOT tell you which model to use for your specific prompt."
  - "This framework WILL teach you how to evaluate technologies based on your business needs."
- [ ] Ensure the README still reflects the Constitution's philosophy (Point of View, Problem-First, Mental Framework).

#### 5.12 Validate Against Constitution "Goal"
**The Goal:** "To teach a way of thinking."

**Final Check:**
- [ ] After all updates, ask: "Can a user who reads this framework make **better decisions** than someone who just reads Microsoft marketing?"
- [ ] Test: Give the framework to a colleague. Ask them to solve a scenario. Do they:
  - Jump to Quick Reference? (Framework failed - they're cheating.)
  - Work through BXT and decision trees? (Framework succeeded - they're thinking.)
- [ ] If users bypass the methodology, we need to make it **more compelling**, not just "more complete."

---

## 13. Missing Announcements Risk Assessment
**Confidence Level:** High - comprehensive coverage.

**Spot Checks:**
- ✅ All 7 "AI at Work" sections covered.
- ✅ All 8 "Azure AI" sections covered.
- ✅ All 11 "Database & Analytics" sections covered.
- ✅ All 3 "Developer Tools" sections covered.
- ✅ All "Business Applications" sections covered.
- ✅ All "Edge" sections covered.
- ✅ All "Windows" sections covered.
- ✅ All "Security" sections covered.
- ✅ "Agentic Web" (MCP, NLWeb) covered.
- ✅ Industry (Planetary Computer Pro) and Science (Discovery) covered.

**Total Announcements Cataloged:** 60+ individual research tasks across 13 major technology areas.
