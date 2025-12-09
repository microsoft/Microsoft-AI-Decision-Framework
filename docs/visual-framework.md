---
layout: default
title: Visual Framework
nav_order: 5
description: "Decision tree diagrams with Mermaid visualizations"
---

# Visual Framework
{: .no_toc }

Interactive decision trees to guide Microsoft AI technology selection.
{: .fs-6 .fw-300 }

{: .note }
Use these diagrams after working through the [Decision Framework]({{ '/docs/decision-framework' | relative_url }}) and [Evaluation Criteria]({{ '/docs/evaluation-criteria' | relative_url }}). They reinforce the nine critical questions and help facilitate workshops or executive readouts.

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## Diagram Index

| Diagram | Purpose | Maps To Framework |
|---------|---------|-------------------|
| **1. Complete Decision Flow** | End-to-end technology selection | [Phase 2: Q1-Q9]({{ '/docs/decision-framework#phase-2-technology-groupings-nine-critical-questions' | relative_url }}) - All nine critical questions |
| **2. Data Grounding Decision** | Data strategy and knowledge sources | [Phase 2: Q4]({{ '/docs/decision-framework#question-4-data-strategy--knowledge' | relative_url }}) - Data grounding patterns |
| **3. Persona-Based Flow** | Selection by role and skill level | [Phase 2: Q2]({{ '/docs/decision-framework#question-2-build-style--control-level' | relative_url }}) - Build approach + [Scenarios]({{ '/docs/scenarios' | relative_url }}) |
| **4. Complexity Assessment** | Technical complexity evaluation | [Evaluation Criteria: Complexity]({{ '/docs/evaluation-criteria#technical-complexity-assessment' | relative_url }}) |
| **5. Budget & Timeline** | Cost and time-to-production paths | [Evaluation Criteria: Budget & Time]({{ '/docs/evaluation-criteria#budget-assessment' | relative_url }}) |
| **6. Governance & Compliance** | Security and compliance requirements | [Evaluation Criteria: Governance]({{ '/docs/evaluation-criteria#governance--compliance' | relative_url }}) |
| **7. Multi-Agent Orchestration** | Multi-agent patterns and frameworks | [Quick Reference: Orchestration Complexity]({{ '/docs/quick-reference#orchestration-complexity-decision-matrix' | relative_url }}) |
| **8. Upgrade Paths** | Migration and progressive enhancement | [Implementation Patterns: Progressive Enhancement]({{ '/docs/implementation-patterns#progressive-enhancement-pattern' | relative_url }}) |

---

## Complete Decision Flow

```mermaid
flowchart TD
    Start([Start: Need AI Solution]) --> Q1{User interaction<br/>pattern?}
    
    Q1 -->|Conversational/Chat UI| UI_Path[UI-Based Agent]
    Q1 -->|Autonomous/Event-driven| Auto_Path[Autonomous Agent]
    Q1 -->|API/Headless Service| API_Path[Headless Service]
    
    UI_Path --> Q2{Where will users<br/>interact?}
    Q2 -->|M365 apps only| M365[M365 Copilot]
    Q2 -->|Teams + custom| Q3{Build approach?}
    Q2 -->|Multi-channel| Q3
    
    Q3 -->|Low-code| Studio[Copilot Studio]
    Q3 -->|Pro-code| Q4{Primary platform?}
    
    Q4 -->|M365-centric| SDK[M365 Agents SDK]
    Q4 -->|Azure-centric| Q4Azure{Need custom UI<br/>protocol?}

    Q4Azure -->|Yes| AGUI[Agent Framework + AG-UI<br/><i>Preview</i>]
    Q4Azure -->|No| Foundry[Microsoft Foundry - Azure]
    
    Auto_Path --> Q5{Build approach?}
    Q5 -->|Low-code| StudioAuto[Copilot Studio<br/>with Event Triggers]
    Q5 -->|Pro-code| Q6{Primary workflow type?}
    
    Q6 -->|Enterprise integration| LogicApps[Azure Logic Apps<br/>AI Agent Workflows<br/><i>Preview</i>]
    Q6 -->|Custom orchestration| Foundry
    
    API_Path --> Q7{Hosting preference?}
    Q7 -->|Managed PaaS| AgentService[Foundry Agent Service]
    Q7 -->|Self-hosted| Foundry
    Q7 -->|Local/Edge| WinAI[Microsoft Foundry - Windows<br/><i>Local</i>]
    
    M365 --> DataQ{Need custom data?}
    Studio --> DataQ
    StudioAuto --> DataQ
    SDK --> DataQ
    AGUI --> DataQ
    Foundry --> DataQ
    LogicApps --> DataQ
    AgentService --> DataQ
    
    DataQ -->|M365 data| GraphConn[Graph Connectors]
    DataQ -->|Documents| AISearch[Azure AI Search<br/>Agentic retrieval - ACL/labels]
    DataQ -->|Structured data| VectorDB{Vector DB choice?}
    DataQ -->|Analytics data| Fabric[Microsoft Fabric]
    DataQ -->|No grounding| DirectDeploy
    
    VectorDB -->|Global scale NoSQL| CosmosDB[Cosmos DB<br/>IVF/HNSW/DiskANN]
    VectorDB -->|Relational| PostgreSQL[PostgreSQL<br/>pgvector]
    VectorDB -->|Enterprise SQL| SQLServer[SQL Server 2025<br/>VECTOR <i>Preview</i>]
    
    GraphConn --> DeployConfig
    AISearch --> DeployConfig
    CosmosDB --> DeployConfig
    PostgreSQL --> DeployConfig
    SQLServer --> DeployConfig
    Fabric --> DeployConfig
    DirectDeploy --> DeployConfig
    
    DeployConfig[Configure Deployment] --> Q8{Deployment needs?}
    Q8 -->|M365 Copilot| Deploy_M365[Publish to M365 Copilot]
    Q8 -->|Teams| Deploy_Teams[Publish to Teams]
    Q8 -->|Web/Mobile| Deploy_Web[Web/Mobile Channels]
    Q8 -->|Multiple channels| Deploy_Multi[Multi-channel:<br/>10+ channels via SDK]
    Q8 -->|Azure service| Deploy_Azure[Azure Container Apps/<br/>App Service/AKS]
    
    Deploy_M365 --> Monitor[Monitor & Govern]
    Deploy_Teams --> Monitor
    Deploy_Web --> Monitor
    Deploy_Multi --> Monitor
    Deploy_Azure --> Monitor
    
    Monitor --> End([Production])
    
    style M365 fill:#0078D4,color:#fff
    style Studio fill:#0078D4,color:#fff
    style StudioAuto fill:#0078D4,color:#fff
    style SDK fill:#5C2D91,color:#fff
    style Foundry fill:#D83B01,color:#fff
    style AGUI fill:#5C2D91,color:#fff
    style LogicApps fill:#0078D4,color:#fff
    style AgentService fill:#D83B01,color:#fff
    style WinAI fill:#0078D4,color:#fff
```

### Validation Summary
{: .no_toc }

**Last Validated:** November 2025

#### UI-Based Agents (GA unless noted)
{: .no_toc }

| Technology | Action Safety | Proactive | Description |
|------------|---------------|-----------|-------------|
| **M365 Copilot** | 🔒 User-in-the-loop always | 🔄 Reactive only | Conversational chat in M365 apps [(docs)](https://learn.microsoft.com/en-us/microsoft-365-copilot/extensibility/) |
| **Copilot Studio** | ⚠️ Actions can execute (add approval workflows) | 🔄 Reactive (conversational) or **✅ Autonomous (event triggers)** | Low-code, 13+ channels [(docs)](https://learn.microsoft.com/en-us/microsoft-copilot-studio/fundamentals-what-is-copilot-studio) |
| **M365 Agents SDK** | ⚠️ Custom action safety design | ✅ Proactive capable | Pro-code, 10+ channels, C#/JS/Python, BYO orchestrator [(docs)](https://learn.microsoft.com/en-us/microsoft-365/agents-sdk/agents-sdk-overview) |
| **Microsoft Foundry (Azure)** | ⚠️ Autonomous planning loops | ✅ Proactive capable | Custom UI deployment [(docs)](https://learn.microsoft.com/en-us/azure/ai-foundry/openai/how-to/use-web-app) |
| **Agent Framework + AG-UI** (Preview) | ⚠️ Approvals via AG-UI middleware | ✅ Proactive capable (inherits host orchestration) | Protocol bridges agents to web/mobile UI with SSE streaming, backend tool rendering, shared state, and CopilotKit components [(docs)](https://learn.microsoft.com/en-us/agent-framework/integrations/ag-ui/) |

#### Autonomous Agents
{: .no_toc }

| Technology | Action Safety | Proactive | Description |
|------------|---------------|-----------|-------------|
| **Copilot Studio** (with event triggers) | ⚠️ Actions can execute | ✅ Autonomous (event-driven) | Event triggers: SharePoint, OneDrive, Planner, Recurrence [(docs)](https://learn.microsoft.com/en-us/microsoft-copilot-studio/authoring-triggers-about) |
| **Logic Apps AI Agent Workflows** (Preview) | ⚠️ Autonomous execution | ✅ Proactive (event-driven) | 1,400+ connectors [(docs)](https://learn.microsoft.com/en-us/azure/logic-apps/agent-workflows-concepts) |
| **Microsoft Foundry (Azure) Agent Service** | ⚠️ Autonomous planning loops | ✅ Proactive capable | Custom orchestration [(docs)](https://learn.microsoft.com/en-us/azure/ai-foundry/agents/overview) |

#### API/Headless Services (GA)
{: .no_toc }

| Technology | Action Safety | Proactive | Description |
|------------|---------------|-----------|-------------|
| **Foundry Agent Service** | ⚠️ Autonomous planning loops | ✅ Proactive capable | REST API, managed PaaS [(docs)](https://learn.microsoft.com/en-us/azure/ai-foundry/agents/quickstart) |
| **Microsoft Foundry (Azure)** | ⚠️ Autonomous planning loops | ✅ Proactive capable | REST API deployment [(docs)](https://learn.microsoft.com/en-us/rest/api/aifoundry/) |

#### Vector Databases
{: .no_toc }

| Technology | Status | Capabilities |
|------------|--------|--------------|
| **Cosmos DB** | GA | IVF, HNSW, DiskANN algorithms [(docs)](https://learn.microsoft.com/en-us/azure/cosmos-db/nosql/vector-search) |
| **PostgreSQL pgvector** | GA | Extension 0.7.0 [(docs)](https://learn.microsoft.com/en-us/azure/postgresql/flexible-server/how-to-use-pgvector) |
| **SQL Server 2025 VECTOR** | Preview | Native type, float32/float16 [(docs)](https://learn.microsoft.com/en-us/sql/t-sql/data-types/vector-data-type) |

---

## Persona-Based Flow

```mermaid
flowchart TD
    Start([Who are you?]) --> P1{Your role?}
    
    P1 -->|End user| User[Use M365 Copilot]
    P1 -->|Business maker| Maker{Dev support?}
    P1 -->|Developer| Dev{Focus area?}
    P1 -->|Data scientist/analyst| DS{Primary workload?}
    P1 -->|Integration specialist| IntSpec[Azure Logic Apps<br/>AI Agent Workflows<br/><i>Preview</i>]
    
    Maker -->|No devs| MakerStudio[Copilot Studio]
    Maker -->|Occasional help| MakerPlus[Studio + Custom Actions]
    
    Dev -->|M365 integration| DevM365[M365 Agents SDK]
    Dev -->|Azure services| DevAzure[Microsoft Foundry - Azure]
    Dev -->|Multi-agent orchestration| DevOrch[Agent Framework<br/><i>Public Preview</i>]
    Dev -->|Multi-platform| DevChoice{Skill level?}
    Dev -->|Autonomous agents| DevAuto{Event-driven?}
    Dev -->|Custom UI streaming| DevAGUI[Agent Framework + AG-UI<br/><i>Preview</i>]
    
    DevChoice -->|Mid-level| DevStudio[Copilot Studio<br/>+ Custom Actions]
    DevChoice -->|Senior| DevSDK[M365 SDK or Foundry]
    
    DevAuto -->|Yes| DevLogic[Logic Apps<br/>AI Agent Workflows<br/><i>Preview</i>]
    DevAuto -->|Custom orchestration| DevFoundry[Microsoft Foundry - Azure<br/>+ Agent Service]
    
    DS -->|Analytics/BI| DSFabric[Fabric Data Agents<br/><i>Preview</i>]
    DS -->|ML/Custom models| DSFoundry[Azure AI Foundry]
    
    User --> UserEnd([Start using Copilot])
    MakerStudio --> MakerEnd([Build in Studio])
    MakerPlus --> MakerPlusEnd([Studio + code])
    DevM365 --> DevM365End([Build with SDK])
    DevAzure --> DevAzureEnd([Build in Foundry])
    DevOrch --> DevOrchEnd([Multi-agent workflows])
    DevStudio --> DevStudioEnd([Studio with code])
    DevSDK --> DevSDKEnd([Full code solution])
    DevLogic --> DevLogicEnd([Event-driven agent])
    DevFoundry --> DevFoundryEnd([Custom agent])
    DevAGUI --> DevAGUIEnd([Custom streaming UI])
    DSFabric --> DSFabricEnd([Data agent])
    DSFoundry --> DSFoundryEnd([ML pipeline])
    IntSpec --> IntSpecEnd([Enterprise workflows])
    
    style User fill:#107C10,color:#fff
    style MakerStudio fill:#0078D4,color:#fff
    style MakerPlus fill:#0078D4,color:#fff
    style DevM365 fill:#5C2D91,color:#fff
    style DevAzure fill:#5C2D91,color:#fff
    style DevOrch fill:#5C2D91,color:#fff
    style DevLogic fill:#0078D4,color:#fff
    style DevFoundry fill:#D83B01,color:#fff
    style DevAGUI fill:#5C2D91,color:#fff
    style DSFabric fill:#FFB900,color:#000
    style DSFoundry fill:#D83B01,color:#fff
    style IntSpec fill:#0078D4,color:#fff
```

### Validation Summary - Persona-Based Flow
{: .no_toc }

**Last Validated:** November 3, 2025

#### End User (GA)
{: .no_toc }

| Technology | Description | Documentation |
|------------|-------------|---------------|
| **M365 Copilot** | Built-in AI in M365 apps, no setup required | [M365 Copilot](https://learn.microsoft.com/en-us/microsoft-365-copilot/extensibility/) |

#### Business Maker (GA)
{: .no_toc }

| Technology | Description | Documentation |
|------------|-------------|---------------|
| **Copilot Studio** | Low-code platform, no dev support needed | [Copilot Studio](https://learn.microsoft.com/en-us/microsoft-copilot-studio/fundamentals-what-is-copilot-studio) |
| **Copilot Studio + Custom Actions** | Low-code with occasional developer support for custom connectors/flows | [Custom Actions](https://learn.microsoft.com/en-us/microsoft-copilot-studio/copilot-plugins-overview) |

#### Developer (GA unless noted)
{: .no_toc }

| Technology | Description | Documentation |
|------------|-------------|---------------|
| **M365 Agents SDK** | Pro-code for M365-centric solutions, C#/JavaScript/Python, 10+ channels, BYO orchestrator | [M365 Agents SDK](https://learn.microsoft.com/en-us/microsoft-365-copilot/extensibility/overview-custom-engine-agent) |
| **Azure AI Foundry** | Pro-code for Azure-centric solutions, custom models, full control | [Azure AI Foundry](https://learn.microsoft.com/en-us/azure/ai-foundry/what-is-azure-ai-foundry) |
| **Microsoft Agent Framework** (Public Preview) | **Microsoft's investment direction** - Next-gen multi-agent orchestration framework (5 patterns: Sequential, Concurrent, Handoff, Group Chat, Magentic). **Use instead of Semantic Kernel** (maintenance mode). Works with M365 SDK or standalone. | [Agent Framework](https://learn.microsoft.com/en-us/agent-framework/) |
| **Agent Framework + AG-UI** (Preview) | Protocol layer for web/mobile clients, supports SSE streaming, backend tool rendering, human approvals, shared/predictive state, and CopilotKit components. | [AG-UI Integration](https://learn.microsoft.com/en-us/agent-framework/integrations/ag-ui/) |
| **Copilot Studio + Custom Actions** | Mid-level developers, low-code with custom code extensibility | [Copilot Studio Extensibility](https://learn.microsoft.com/en-us/microsoft-copilot-studio/copilot-plugins-overview) |
| **Logic Apps AI Agent Workflows** (Preview) | Event-driven autonomous agents, 1,400+ connectors | [Logic Apps Agent Workflows](https://learn.microsoft.com/en-us/azure/logic-apps/agent-workflows-concepts) |

#### Data Scientist/Analyst
{: .no_toc }

| Technology | Description | Documentation |
|------------|-------------|---------------|
| **Fabric Data Agents** (Preview) | Analytics/BI focus, Python SDK, evaluation capabilities, Power BI/semantic models | [Fabric Data Agents](https://learn.microsoft.com/en-us/fabric/data-science/concept-data-agent) \| [Python SDK](https://learn.microsoft.com/en-us/fabric/data-science/evaluate-data-agent) |
| **Azure AI Foundry** | ML/custom models, full AI/ML pipeline control | [Azure AI Foundry](https://learn.microsoft.com/en-us/azure/ai-foundry/what-is-azure-ai-foundry) |

#### Integration Specialist
{: .no_toc }

| Technology | Description | Documentation |
|------------|-------------|---------------|
| **Logic Apps AI Agent Workflows** (Preview) | Enterprise integration focus, 1,400+ connectors, workflow automation | [Logic Apps Overview](https://learn.microsoft.com/en-us/azure/logic-apps/logic-apps-overview) \| [AI Agent Workflows](https://learn.microsoft.com/en-us/azure/logic-apps/agent-workflows-concepts) |

---

## Data Grounding Decision

```mermaid
flowchart TD
    Start([Need to ground AI]) --> Q1{Where is<br/>your data?}
    
    Q1 -->|M365 only| M365Data{Data type?}
    Q1 -->|Azure only| AzureData{Data type?}
    Q1 -->|Both| Hybrid{Primary<br/>location?}
    Q1 -->|Analytics platform| FabricData[Microsoft Fabric]
    
    M365Data -->|SharePoint, OneDrive| Graph[Microsoft Graph Connectors]
    M365Data -->|Teams messages| GraphTeams[Graph Connectors]
    M365Data -->|Custom M365 app| GraphCustom[Custom Graph Connector]
    
    AzureData -->|Documents, PDFs| Q2{File count?}
    AzureData -->|Structured DB| DB{Database?}
    AzureData -->|Unstructured| Blob[Blob Storage + AI Search]
    
    Q2 -->|&lt; 10,000 files<br/>Simple setup| FileSearch{Platform?}
    Q2 -->|Production scale<br/>Custom chunking| Search[Azure AI Search]
    Q2 -->|Multimodal content| ContentUnderstanding[Azure AI Content Understanding<br/>+ AI Search<br/><i>Preview</i>]
    
    FileSearch -->|Azure Agent Service| AgentFileSearch[Agent Service File Search<br/>Auto chunk/embed]
    FileSearch -->|Copilot Studio| StudioKnowledge[Studio Knowledge Base<br/>Up to 1,000 files<br/>SharePoint or OneDrive]
    
    DB -->|Global scale, NoSQL| Cosmos{Vector algorithm?}
    DB -->|Relational| Postgres[PostgreSQL + pgvector]
    DB -->|Enterprise SQL| SQL[SQL Server 2025<br/>VECTOR <i>Preview</i>]
    
    Cosmos -->|Flat index| CosmosIVF[Cosmos DB + IVF]
    Cosmos -->|Graph-based| CosmosHNSW[Cosmos DB + HNSW]
    Cosmos -->|Disk-optimized| CosmosDiskANN[Cosmos DB + DiskANN]
    
    Hybrid -->|M365 primary| HybridM365[Graph + BYOK]
    Hybrid -->|Azure primary| HybridAzure[AI Search + Graph API]
    
    FabricData --> Q3{Access method?}
    Q3 -->|Direct platform access| FabricPlatform[Fabric Lakehouse/Warehouse<br/>OneLake + SQL endpoint]
    Q3 -->|Conversational agent| FabricAgent[Fabric Data Agents<br/><i>Preview</i>]
    
    Graph --> Layer{Which<br/>platform?}
    GraphTeams --> Layer
    GraphCustom --> Layer
    AgentFileSearch --> Layer
    StudioKnowledge --> Layer
    Search --> Layer
    ContentUnderstanding --> Layer
    CosmosIVF --> Layer
    CosmosHNSW --> Layer
    CosmosDiskANN --> Layer
    Postgres --> Layer
    SQL --> Layer
    Blob --> Layer
    HybridM365 --> Layer
    HybridAzure --> Layer
    FabricPlatform --> Layer
    FabricAgent --> Layer
    
    Layer -->|M365 Copilot| LayerM365([Use built-in])
    Layer -->|Copilot Studio| LayerStudio([Configure Studio])
    Layer -->|M365 SDK| LayerSDK([Code integration])
    Layer -->|Azure Foundry| LayerFoundry([Configure Foundry])
    Layer -->|Logic Apps| LayerLogicApps([MCP Server/<br/>Connector])
    
    style Graph fill:#0078D4,color:#fff
    style AgentFileSearch fill:#0078D4,color:#fff
    style StudioKnowledge fill:#742774,color:#fff
    style Search fill:#0078D4,color:#fff
    style ContentUnderstanding fill:#50E6FF,color:#000
    style CosmosIVF fill:#0078D4,color:#fff
    style CosmosHNSW fill:#0078D4,color:#fff
    style CosmosDiskANN fill:#0078D4,color:#fff
    style Postgres fill:#0078D4,color:#fff
    style SQL fill:#0078D4,color:#fff
    style FabricPlatform fill:#FFB900,color:#000
    style FabricAgent fill:#FFB900,color:#000
```

### Validation Summary - Data Grounding Decision
{: .no_toc }

**Last Validated:** November 3, 2025

#### M365 Data Sources (GA)
{: .no_toc }

| Technology | Capabilities | Documentation |
|------------|--------------|---------------|
| **Microsoft Graph Connectors** | M365 data sources (SharePoint, OneDrive, Teams) | [Graph Connectors Overview](https://learn.microsoft.com/en-us/microsoftsearch/connectors-overview) |

#### Document Processing - File Search (GA)
{: .no_toc }

| Technology | Capabilities | Documentation |
|------------|--------------|---------------|
| **Foundry Agent Service File Search Tool** | Built-in file search with automatic parsing, chunking (800 tokens/400 overlap), embedding (text-embedding-3-large), keyword + semantic search, reranking. Supports up to 10,000 files per vector store (max 512 MB/file). Two modes: Basic (Microsoft-managed) vs Standard (BYO Azure AI Search + Blob Storage). Supported formats: .doc, .docx, .pdf, .pptx, .py, .md, .txt, .json, .html, .java, .cs, .cpp, and more. Service handles entire ingestion automatically. | [Agent Service File Search](https://learn.microsoft.com/en-us/azure/ai-foundry/agents/how-to/tools/file-search) |
| **Copilot Studio Knowledge Base** | File upload from local/OneDrive/SharePoint. Supports .doc, .docx, .ppt, .pptx, .pdf, .xls, .xlsx, .txt, .md, .html, .csv, .xml. Max 512 MB per file. Direct uploads allow up to 500 files per agent, while SharePoint/OneDrive document sources now support up to 1,000 files (GA Oct 6, 2025). Automatic chunking and vectorization into Dataverse with semantic indexing. OneDrive/SharePoint: Auto-sync (updates reflected automatically) vs Upload: Static files. SharePoint: User-scoped permissions (only files user has access to). | [Copilot Studio Knowledge](https://learn.microsoft.com/en-us/microsoft-copilot-studio/knowledge-unstructured-data) \| [File Upload](https://learn.microsoft.com/en-us/microsoft-copilot-studio/knowledge-add-file-upload) \| [SharePoint Files](https://learn.microsoft.com/en-us/microsoft-copilot-studio/knowledge-add-unstructured-data) \| [Use up to 1000 files](https://learn.microsoft.com/en-us/power-platform/release-plan/2025wave1/microsoft-copilot-studio/use-up-1000-files-per-agent-sharepoint-onedrive-uploads) |

#### Document Processing - Production Scale (GA)
{: .no_toc }

| Technology | Capabilities | Documentation |
|------------|--------------|---------------|
| **Azure AI Search** | Document indexing, full-text search, vector search, hybrid queries, custom chunking strategies (fixed-size, variable-size, Document Layout skill). Requires manual setup of indexers, skillsets, chunking strategy. Production-scale scenarios with millions of documents. | [AI Search Overview](https://learn.microsoft.com/en-us/azure/search/search-what-is-azure-search) \| [Chunking Strategies](https://learn.microsoft.com/en-us/azure/search/vector-search-how-to-chunk-documents) |

#### Document Processing - Multimodal (Preview)
{: .no_toc }

| Technology | Capabilities | Documentation |
|------------|--------------|---------------|
| **Azure AI Content Understanding** | Multimodal processing (documents/images/audio/video), RAG-ready Markdown output, AI Search custom skill integration, built-in chunking, standard/pro modes. API version: 2025-05-01-preview. | [Content Understanding Overview](https://learn.microsoft.com/en-us/azure/ai-services/content-understanding/overview) \| [Multimodal Search](https://learn.microsoft.com/en-us/azure/search/multimodal-search-overview) |

#### Structured Databases - Vector Search (GA)
{: .no_toc }

| Technology | Status | Capabilities | Documentation |
|------------|--------|--------------|---------------|
| **Cosmos DB Vector Search** | GA | IVF/HNSW/DiskANN algorithms, NoSQL & MongoDB vCore APIs | [Cosmos DB Vector Search](https://learn.microsoft.com/en-us/azure/cosmos-db/vector-database) |
| **PostgreSQL pgvector** | GA | Extension version 0.7.0, HNSW/IVF indexes | [PostgreSQL Vector Search](https://learn.microsoft.com/en-us/azure/postgresql/flexible-server/how-to-use-pgvector) |
| **SQL Server 2025 VECTOR** | Preview RC1 | Native VECTOR data type, float32 (1,998 dims)/float16 (3,996 dims) | [SQL Server Vector](https://learn.microsoft.com/en-us/sql/t-sql/data-types/vector-data-type) |

#### Analytics Platform (GA with Preview features)
{: .no_toc }

| Technology | Status | Capabilities | Documentation |
|------------|--------|--------------|---------------|
| **Microsoft Fabric Platform** | GA | Direct knowledge source access via Lakehouse (Delta tables, Spark), Warehouse (T-SQL), OneLake (ADLS Gen2 APIs), KQL databases. Azure AI Foundry integration for RAG | [Fabric Overview](https://learn.microsoft.com/en-us/fabric/fundamentals/microsoft-fabric-overview) \| [AI Foundry Fabric Integration](https://learn.microsoft.com/en-us/azure/ai-foundry/faq) |
| **Fabric Data Agents** | Preview | Analytics data grounding (warehouses, lakehouses, Power BI semantic models, KQL databases), Copilot Studio connected agents, Foundry Agent Service integration | [Fabric Data Agents](https://learn.microsoft.com/en-us/fabric/data-science/concept-data-agent) \| [Copilot Studio Integration](https://learn.microsoft.com/en-us/fabric/data-science/data-agent-microsoft-copilot-studio) |

#### MCP Integration (Preview)
{: .no_toc }

| Technology | Capabilities | Documentation |
|------------|--------------|---------------|
| **Logic Apps MCP Server** | Standard logic apps as remote MCP servers, 1,400+ connectors, OAuth 2.0 auth, Streamable HTTP/SSE transports | [Logic Apps MCP Server](https://learn.microsoft.com/en-us/azure/logic-apps/set-up-model-context-protocol-server-standard) \| [API Center Integration](https://learn.microsoft.com/en-us/azure/logic-apps/create-mcp-server-api-center) |

#### When to Use File Search vs Azure AI Search
{: .no_toc }

| Solution | Use When | Cost |
|----------|----------|------|
| **File Search (Agent Service/Copilot Studio)** | Up to 10,000 files, simple setup (no manual indexer/chunking config), automatic embedding, suitable for smaller document sets, internal knowledge bases, rapid prototyping | Included in Agent Service consumption or Copilot Studio credits |
| **Azure AI Search** | Production scale (millions of documents), custom chunking strategies required, advanced features (analyzers, scoring profiles, faceting), complex indexing pipelines, enterprise search | Dedicated AI Search tier (Basic ~$75/mo to S3 ~$3K/mo) |

---

## Complexity Assessment Flow

```mermaid
flowchart TD
    Start([Assess Use Case]) --> Q1{How many<br/>data sources?}
    
    Q1 -->|1| Simple
    Q1 -->|2-3| Q2{Workflow<br/>complexity?}
    Q1 -->|4+| Complex
    
    Q2 -->|Linear| Medium
    Q2 -->|Branching| Complex
    
    Simple[Low Complexity] --> S_Tech{Skills?}
    S_Tech -->|Makers| S_M365[M365 Copilot + Graph]
    S_Tech -->|Devs| S_Studio[Copilot Studio]
    
    Medium[Medium Complexity] --> M_Tech{Skills?}
    M_Tech -->|Makers| M_Studio[Copilot Studio]
    M_Tech -->|Devs| M_SDK[Studio + Custom Actions]
    
    Complex[High Complexity] --> C_Tech{Need custom<br/>models?}
    C_Tech -->|No| C_SDK[M365 Agents SDK]
    C_Tech -->|Yes| C_Foundry[Azure AI Foundry]
    
    S_M365 --> Timeline1[Days to deploy]
    S_Studio --> Timeline2[1-2 weeks]
    M_Studio --> Timeline3[2-4 weeks]
    M_SDK --> Timeline4[1-2 months]
    C_SDK --> Timeline5[2-3 months]
    C_Foundry --> Timeline6[3-6 months]
    
    style Simple fill:#107C10,color:#fff
    style Medium fill:#FFB900,color:#000
    style Complex fill:#D83B01,color:#fff
```

---

## Budget & Timeline Tradeoffs

```mermaid
flowchart TD
    Start([Project Constraints]) --> Q1{AI setup<br/>budget?}
    
    Q1 -->|Existing M365| M365Only[M365-Only Path]
    Q1 -->|$200-500/mo| Starter[Starter Budget]
    Q1 -->|$1K-5K/mo| Growth[Growth Budget]
    Q1 -->|$5K+/mo| Enterprise[Enterprise Budget]
    
    M365Only --> M365T{Timeline?}
    M365T -->|Days| M365_Fast[M365 Copilot Chat<br/>$0 addl - included with M365<br/>Instruction-based agents]
    M365T -->|1-2 Weeks| M365_Med[M365 Copilot + Graph<br/>$0 addl<br/>Knowledge grounding]
    M365T -->|1 Month+| M365_Slow[Declarative Agents<br/>$0 addl or PAYG<br/>Custom instructions + data]
    
    Starter --> StarterT{Timeline?}
    StarterT -->|1-2 Weeks| S_Fast[Copilot Studio PAYG<br/>$200-500/mo avg<br/>$0.01/credit, low-code]
    StarterT -->|1-2 Months| S_Med[Studio + AI Builder<br/>$200-500/mo<br/>Document processing]
    StarterT -->|3+ Months| S_Slow[Logic Apps AI Workflows<br/>~$200-400/mo<br/>Preview, event-driven]
    
    Growth --> GrowthT{Timeline?}
    GrowthT -->|2-4 Weeks| G_Fast[Copilot Studio Capacity<br/>$200+/mo prepaid<br/>25K credits/pack]
    GrowthT -->|1-3 Months| G_Med[M365 SDK + Azure Basic<br/>$1-3K/mo<br/>Custom agents, Azure hosting]
    GrowthT -->|3-6 Months| G_Slow[Azure AI Foundry Starter<br/>$1-5K/mo<br/>PAYG tokens + AI Search Basic]
    
    Enterprise --> EntT{Timeline?}
    EntT -->|4-8 Weeks| E_Fast[Foundry Serverless<br/>$5-15K/mo est<br/>PAYG + AI Search Standard]
    EntT -->|3-6 Months| E_Med[Foundry + Agent Service<br/>$10-30K/mo est<br/>Managed orchestration]
    EntT -->|6+ Months| E_Slow[Foundry PTU + Premium<br/>$30K+/mo<br/>PTU reservation + S2/S3 Search]
    
    style M365_Fast fill:#107C10,color:#fff
    style M365_Med fill:#107C10,color:#fff
    style S_Fast fill:#107C10,color:#fff
    style G_Fast fill:#107C10,color:#fff
    style G_Med fill:#107C10,color:#fff
    style E_Med fill:#107C10,color:#fff
    
    style M365_Slow fill:#FFB900,color:#000
    style S_Med fill:#FFB900,color:#000
    style G_Slow fill:#FFB900,color:#000
    style S_Slow fill:#FF8C00,color:#fff
```

### Validation Summary - Budget & Timeline Tradeoffs
{: .no_toc }

**Last Validated:** November 3, 2025

#### M365-Only ($0 AI infrastructure add'l)
{: .no_toc }

| Solution | Monthly Cost | Documentation |
|----------|--------------|---------------|
| **M365 Copilot Chat** | Free (included) with eligible M365 subscription | Web-grounded chat and instruction-based agents [(docs)](https://learn.microsoft.com/en-us/microsoft-365-copilot/extensibility/cost-considerations#licensing-options-for-microsoft-365-copilot) |
| **M365 Copilot + Graph Connectors** | $30/user/month M365 Copilot license | Graph Connectors included at no extra charge [(docs)](https://learn.microsoft.com/en-us/microsoft-copilot-studio/billing-licensing#copilot-studio-use-rights-included-with-microsoft-365-copilot-license) |
| **Declarative Agents** | $0 or PAYG | Instruction-based or public-web grounded = $0; shared tenant data = PAYG [(docs)](https://learn.microsoft.com/en-us/microsoft-365-copilot/extensibility/cost-considerations#agents-in-copilot) |

#### Starter ($200-500/mo)
{: .no_toc }

| Solution | Monthly Cost | Documentation |
|----------|--------------|---------------|
| **Copilot Studio PAYG** | $200-500/mo (typical) | $0.01 per Copilot Credit [(docs)](https://learn.microsoft.com/en-us/microsoft-copilot-studio/billing-licensing#copilot-studio-pay-as-you-go) |
| **AI Builder** | Included in Power Platform | Document processing (invoices, receipts, contracts) [(docs)](https://learn.microsoft.com/en-us/ai-builder/overview) |
| **Logic Apps AI Workflows** (Preview) | $200-400/mo (typical) | Consumption pricing, event-driven agents [(docs)](https://learn.microsoft.com/en-us/azure/logic-apps/agent-workflows-concepts) |

#### Growth ($1K-5K/mo)
{: .no_toc }

| Solution | Monthly Cost | Documentation |
|----------|--------------|---------------|
| **Copilot Studio Capacity Packs** | $200/month per 25,000 credits | Prepaid [(docs)](https://learn.microsoft.com/en-us/microsoft-copilot-studio/billing-licensing#copilot-studio-prepaid-copilot-credits-subscription) |
| **M365 SDK + Azure** | $600-2.3K/mo | SDK free; Azure hosting (App Service ~$100-300/mo) + Azure OpenAI PAYG (~$500-2K/mo tokens) [(docs)](https://learn.microsoft.com/en-us/microsoft-365-copilot/extensibility/cost-considerations#agents-in-copilot) |
| **Azure AI Foundry Starter** | $1-5K/mo estimate | PAYG tokens + AI Search Basic (~$75/mo) [(OpenAI pricing)](https://azure.microsoft.com/pricing/details/cognitive-services/openai-service/) \| [(AI Search pricing)](https://learn.microsoft.com/en-us/azure/search/search-sku-tier#tier-descriptions) |

#### Enterprise ($5K+/mo)
{: .no_toc }

| Solution | Monthly Cost | Documentation |
|----------|--------------|---------------|
| **Foundry Serverless** | $5-15K/mo | PAYG tokens at scale + AI Search Standard S1 (~$250/mo) [(docs)](https://learn.microsoft.com/en-us/azure/search/search-sku-tier#tier-descriptions) |
| **Foundry + Agent Service** | $10-30K/mo | Managed orchestration PaaS + AI Search S2 (~$1K/mo) [(docs)](https://learn.microsoft.com/en-us/azure/ai-foundry/agents/overview) |
| **Foundry PTU + Premium** | $30K+/mo | PTU reservations (50+ PTUs minimum) + AI Search S2/S3 [(docs)](https://learn.microsoft.com/en-us/azure/ai-foundry/openai/how-to/provisioned-throughput-onboarding#hourly-usage) |

#### Timeline Estimates
{: .no_toc }

| Timeline | Use Case | Example Scenario |
|----------|----------|------------------|
| **Days** | M365 built-in features, no development | [(scenarios)](https://learn.microsoft.com/en-us/microsoft-365-copilot/extensibility/overview) |
| **1-2 Weeks** | Low-code platforms (Copilot Studio Employee Self-Service, Logic Apps) | [(HR Knowledge Base scenario)]({{ '/docs/scenarios' | relative_url }}) |
| **1-3 Months** | Custom agents with SDKs, moderate complexity | [(Customer Support scenario)]({{ '/docs/scenarios' | relative_url }}) |
| **3-6 Months** | Azure AI Foundry custom solutions, complex orchestration | [(evaluation-criteria)]({{ '/docs/evaluation-criteria#time-to-production' | relative_url }}) |
| **6+ Months** | Enterprise-scale with PTU, fine-tuning, advanced patterns | |

#### Cost Calculation Notes
{: .no_toc }

- M365 per-user costs ($30/user/month) NOT included in bands - these are AI infrastructure costs only
- Estimates assume moderate usage (not high-scale production)
- Azure consumption highly variable based on tokens, requests, storage
- PTU (Provisioned Throughput Units) require Azure Reservations for cost optimization

#### Sources
{: .no_toc }

- [Copilot Studio Licensing](https://learn.microsoft.com/en-us/microsoft-copilot-studio/billing-licensing) (Updated: 2025)
- [M365 Copilot Cost Considerations](https://learn.microsoft.com/en-us/microsoft-365-copilot/extensibility/cost-considerations) (Updated: 2025)
- [Azure OpenAI Pricing](https://azure.microsoft.com/pricing/details/cognitive-services/openai-service/) (Updated: 2025)
- [Azure AI Search Tiers](https://learn.microsoft.com/en-us/azure/search/search-sku-tier) (Updated: 2025)
- [Logic Apps AI Agent Workflows](https://learn.microsoft.com/en-us/azure/logic-apps/agent-workflows-concepts) (Preview, Updated: 2025)
- [AI Builder Overview](https://learn.microsoft.com/en-us/ai-builder/overview) (Updated: 2025)

---

## Governance & Compliance Path

```mermaid
%%{init: {'theme':'dark'}}%%
flowchart TD
    Start([Governance Requirements]) --> Q1{Data residency<br/>requirement?}
    
    Q1 -->|M365 tenant only<br/>Strict boundary| R1[M365 Tenant Boundary]
    Q1 -->|Azure region<br/>Configurable| R2[Azure Region Control]
    Q1 -->|Flexible<br/>Multi-region OK| R3[Flexible Residency]
    
    R1 --> Q2{Built-in DLP<br/>sufficient?}
    Q2 -->|Yes, inherit M365| G1[M365 Copilot<br/>M365 Boundary + DLP]
    Q2 -->|Need custom agents| G2[Copilot Studio<br/>Power Platform Governance]
    
    R2 --> Q3{Network<br/>isolation?}
    Q3 -->|VNet + private<br/>endpoints required| G3[Azure AI Foundry<br/>VNet + Private Endpoints]
    Q3 -->|Managed runtime<br/>+ VNet needed| G4[AI Agent Service<br/>Full Azure Governance]
    Q3 -->|Power Platform<br/>governance sufficient| G5[AI Builder<br/>Power Platform DLP]
    
    R3 --> Q4{Development<br/>model?}
    Q4 -->|Enterprise workflows<br/>+ integration| G6[Logic Apps Standard<br/>Azure RBAC + VNet]
    Q4 -->|Multi-channel<br/>custom agents| G7[M365 Agents SDK<br/>Custom Auth + Hosting]
    Q4 -->|Orchestration<br/>library only| G8[Agent Framework<br/>Host-Inherited Governance]
    
    style G1 fill:#107C10,color:#fff
    style G2 fill:#0078D4,color:#fff
    style G3 fill:#0078D4,color:#fff
    style G4 fill:#0078D4,color:#fff
    style G5 fill:#FFB900,color:#000
    style G6 fill:#0078D4,color:#fff
    style G7 fill:#5C2D91,color:#fff
    style G8 fill:#E81123,color:#fff
```

### Validation Summary: Governance & Compliance Path
{: .no_toc }

**Last Validated:** November 2025

#### M365 Tenant Boundary Technologies
{: .no_toc }

| Technology | Action Safety | Proactive | Data Grounding/Memory/Analytics | Key Governance Features | Documentation |
|------------|---------------|-----------|----------------------------------|------------------------|---------------|
| **M365 Copilot** (GA) | ✅ User-in-the-loop (drafts only) | ❌ Reactive only | Grounding only (M365 Graph per-request), no extractable memory | M365 trust boundary, auto DLP/sensitivity labels, user-scoped permissions, Purview audit, no training on tenant data | [M365 Copilot Security](https://learn.microsoft.com/en-us/copilot/microsoft-365/microsoft-365-copilot-ai-security) |
| **Copilot Studio** (GA) | ⚠️ Actions execute (flows/connectors) | ✅ Autonomous (event triggers) | Grounding + Dataverse persistence (transcripts, variables), full analytics | Power Platform RBAC + DLP, environment-level governance, connector controls, ⚠️ web search leaves boundary, ⚠️ dual auth (user/service) | [Copilot Studio Security](https://learn.microsoft.com/en-us/microsoft-copilot-studio/security-and-governance) |

#### Azure Region Control Technologies
{: .no_toc }

| Technology | Action Safety | Proactive | Data Grounding/Memory/Analytics | Key Governance Features | Documentation |
|------------|---------------|-----------|----------------------------------|------------------------|---------------|
| **Azure AI Foundry** (GA) | ⚠️ Tool calling with autonomous planning | ✅ Proactive (Azure Functions, Logic Apps) | Grounding + BYO thread storage (Cosmos DB), Azure Monitor + OpenTelemetry | Azure RBAC (control + data plane), VNet + private endpoints, managed identity, CMK optional, ⚠️ API key OR Entra ID (Entra recommended) | [Azure AI Foundry Security](https://learn.microsoft.com/en-us/azure/ai-foundry/concepts/planning) |
| **AI Agent Service** | ⚠️ Autonomous with action tools (Logic Apps, Functions, MCP) | ✅ Proactive (event triggers) | BYO thread storage (Cosmos DB), Azure Monitor project-scoped | Full RBAC (project + resource), VNet + private endpoints, BYO storage, no public egress by default, container injection for VNet | [Agent Service Security](https://learn.microsoft.com/en-us/azure/ai-foundry/responsible-ai/agents/data-privacy-security) |
| **AI Builder** (GA) | Varies by model type | ❌ Reactive | Dataverse storage | Power Platform DLP, Dataverse RBAC, environment location | [AI Builder Governance](https://learn.microsoft.com/en-us/ai-builder/administer) |

#### Flexible Residency Technologies
{: .no_toc }

| Technology | Action Safety | Proactive | Data Grounding/Memory/Analytics | Key Governance Features | Documentation |
|------------|---------------|-----------|----------------------------------|------------------------|---------------|
| **Logic Apps Standard** (GA) | ⚠️ Autonomous execution (workflows) | ✅ Proactive (event-driven, 1,400+ connectors) | Workflow state + connector data | Granular Azure RBAC, VNet + private endpoints (Standard), managed identity, Customer Lockbox, FedRAMP/HIPAA/ISO 27001 | [Logic Apps Security](https://learn.microsoft.com/en-us/azure/logic-apps/security-controls-policy) |
| **M365 Agents SDK** (GA) | ⚠️ Custom design (full developer responsibility) | ✅ Proactive (custom event handling) | Custom (developer implements) | Custom auth (MSAL, Entra ID), hosting platform RBAC, ⚠️ delegated OR application permissions, self-hosted = full network control | [M365 SDK Auth](https://learn.microsoft.com/en-us/microsoft-365/agents-sdk/microsoft-authentication-library-configuration-options) |
| **Agent Framework** (Preview) | Inherits from host app | Inherits from host app | Inherits from host app | No built-in governance (library only), inherits from hosting platform | [Agent Framework](https://learn.microsoft.com/en-us/agent-framework/) |

**Key Decision Criteria:**
- **M365 tenant boundary required** → M365 Copilot (strict) or Copilot Studio (custom agents)
- **Azure region control + VNet isolation** → Azure AI Foundry or AI Agent Service
- **Enterprise workflow automation** → Logic Apps Standard
- **Custom multi-channel agents** → M365 Agents SDK (full control, full responsibility)
- **Orchestration library only** → Agent Framework (no built-in governance)

---

## Multi-Agent Orchestration

```mermaid
flowchart TD
    Start([Need Multi-Agent?]) --> Q1{Pattern Type?}
    
    Q1 -->|Connected agents<br/>Mesh - A2A| Connected[Connected/Mesh Pattern]
    Q1 -->|Sequential/Parallel<br/>workflows| Workflows[Agent Workflow Orchestration]
    Q1 -->|Event triggers| EventDriven[Event-Driven Agents]
    
    Connected --> C_Platform{Platform?}
    C_Platform -->|Low-code| C_Studio[Copilot Studio Preview<br/>Agent2Agent - A2A<br/>Decentralized Mesh]
    C_Platform -->|Azure| C_Foundry[Azure AI Foundry GA<br/>Connected agents<br/>Sub-agent delegation]
    
    Workflows --> W_Framework{Framework?}
    W_Framework -->|Microsoft| W_AgentFW[Microsoft Agent Framework Preview<br/>Sequential/Concurrent/Handoff/Magentic]
    W_Framework -->|Open source| W_SK[Semantic Kernel<br/>Sequential/Concurrent/Group Chat<br/>Handoff/Magentic]
    W_Framework -->|Bring your own| W_SDK[M365 Agents SDK<br/>Integrate Agent Framework or SK]
    W_Framework -->|Third-party state| W_LangGraph[LangGraph Third-Party<br/>State graphs]
    
    EventDriven --> E_Type{Event source?}
    E_Type -->|Enterprise systems| E_Logic[Logic Apps Preview<br/>AI Agent Workflows<br/>+ MCP Server<br/>Single agent event-triggered]
    E_Type -->|Azure events| E_Functions[Azure Functions<br/>+ Agent Service<br/>Single agent event-triggered]
    E_Type -->|Custom events| E_Custom[Event Grid + Foundry<br/>Event routing to agents]
    
    C_Studio --> Note1[Can connect Fabric Data Agents<br/>as data grounding participants]
    C_Foundry --> Note2[Fabric Data Agents can integrate<br/>as connected agents]
    
    C_Studio --> Deploy1([Deploy])
    C_Foundry --> Deploy2([Deploy])
    W_AgentFW --> Deploy3([Deploy])
    W_SK --> Deploy4([Deploy])
    W_SDK --> Deploy5([Deploy])
    W_LangGraph --> Deploy6([Deploy])
    E_Logic --> Deploy7([Deploy])
    E_Functions --> Deploy8([Deploy])
    E_Custom --> Deploy9([Deploy])
    
    style Connected fill:#107C10,color:#fff
    style Workflows fill:#FFB900,color:#000
    style EventDriven fill:#5C2D91,color:#fff
```

### Validation Summary: Multi-Agent Orchestration
{: .no_toc }

**Last Validated:** November 2025

#### Connected Agents / Sub-Agent Pattern
{: .no_toc }

| Technology | Status | Capabilities | Documentation |
|------------|--------|--------------|---------------|
| **Copilot Studio** | Preview | Agent2Agent (A2A) decentralized mesh, Connected agents, child agents, handoffs | [Connected Agents](https://learn.microsoft.com/microsoft-copilot-studio/advanced-connected-agents) |
| **Azure AI Foundry Agent Service** | GA | Connected agents with natural language sub-agent delegation | [Connected Agents](https://learn.microsoft.com/azure/ai-services/agents/concepts/connected-agents) |
| **Fabric Data Agents** | Preview | Consumed by other agents for data grounding (NOT orchestrator) | [Fabric Integration](https://learn.microsoft.com/fabric/data-activator/data-agent-copilot-studio-integration) |

#### Agent Workflow Orchestration
{: .no_toc }

| Technology | Status | Orchestration Patterns | Documentation |
|------------|--------|------------------------|---------------|
| **Microsoft Agent Framework** | Public Preview | **Microsoft's investment direction** - Sequential, Concurrent, Handoff, Magentic (C#, Python) | [Agent Framework](https://learn.microsoft.com/en-us/agent-framework/) |
| **Semantic Kernel** | Maintenance mode | Sequential, Concurrent, Group Chat, Handoff, Magentic (**use Agent Framework for new projects**) | [Semantic Kernel Agents](https://learn.microsoft.com/semantic-kernel/frameworks/agent/) |
| **M365 Agents SDK** | GA | BYO orchestrator (integrate Agent Framework or third-party) | [M365 SDK](https://learn.microsoft.com/microsoft-365-copilot/extensibility/create-deploy-agents-sdk) |
| **LangGraph** | Third-party | State graph management for complex workflows | Third-party framework |

#### Event-Driven Agents (Single Agent Triggering)
{: .no_toc }

| Technology | Status | Event Handling | Documentation |
|------------|--------|----------------|---------------|
| **Logic Apps AI Agent Workflows** | Preview | Event triggers + MCP Server (triggers SINGLE agent, NOT multi-agent orchestration) | [Logic Apps Workflows](https://learn.microsoft.com/azure/logic-apps/create-run-ai-agent-workflow) |
| **Azure Functions + Agent Service** | GA | Event-driven single agent invocation (event routing, NOT coordination) | [Agent Service](https://learn.microsoft.com/azure/ai-foundry/responsible-ai/agents/transparency-note) |
| **Event Grid + Foundry** | GA | Event routing to trigger agents independently (NOT orchestration) | [Azure Event Grid](https://learn.microsoft.com/azure/event-grid/) |

**Key Distinctions:**
- **Connected/Mesh:** Agents discover and invoke each other (A2A) or delegate to sub-agents
- **Workflow Orchestration:** Sequential/parallel/concurrent agent coordination patterns
- **Event-Driven:** Single agent triggered by events (NOT multi-agent orchestration)

---

## Upgrade Paths

```mermaid
flowchart TD
    Start([Start: Low-Code Agent]) --> Q1{Need more<br/>capability?}
    
    Q1 -->|No| Stay[Copilot Studio<br/>Standard]
    Q1 -->|Yes| Q2{What kind of<br/>capability?}
    
    Q2 -->|Better Reasoning/LLM| Path1[Enhance<br/>BYO Model - Foundry<br/><i>Preview</i>]
    Q2 -->|Complex Orchestration| Path2[Extend<br/>Handoff to Agent Service<br/><i>Preview</i>]
    Q2 -->|Custom UI/Protocol| Path3[Migrate<br/>M365 Agents SDK<br/>or Foundry]
    
    Path1 --> Result1([Copilot Studio<br/>+ Specialized Model])
    Path2 --> Result2([Copilot Studio UI<br/>+ Azure Agent Brain])
    Path3 --> Result3([Full Pro-Code<br/>Solution])
    
    style Stay fill:#0078D4,color:#fff
    style Path1 fill:#FFB900,color:#000
    style Path2 fill:#D83B01,color:#fff
    style Path3 fill:#5C2D91,color:#fff
```

### Validation Summary: Upgrade Paths
{: .no_toc }

**Last Validated:** May 2025

#### Progressive Enhancement Mechanisms
{: .no_toc }

| Mechanism | Status | Description | Documentation |
|-----------|--------|-------------|---------------|
| **BYO Model** | Preview | Swap default Copilot Studio model for a specialized Foundry model (1,900+ options) | [BYO Model](https://learn.microsoft.com/microsoft-copilot-studio/advanced-generative-actions) |
| **Agent Handoff** | Preview | Copilot Studio delegates to Foundry Agent Service for complex tasks | [Agent Handoff](https://learn.microsoft.com/azure/ai-foundry/agents/how-to/handoff-copilot) |
| **Shared Knowledge** | GA | Both Copilot Studio and Custom Apps can consume the same Azure AI Search index | [Azure AI Search](https://learn.microsoft.com/azure/search/) |

---

## Using This Guide
{: .no_toc }

**How to navigate:** Start with Complete Decision Flow for end-to-end guidance, or jump to specific sections: Persona-Based Flow (by role), Data Grounding (data architecture), Complexity Assessment (effort estimate), Budget & Timeline (cost/time), Governance Path (compliance), or Multi-Agent (orchestration).

**Diagram conventions:** Diamonds = decisions, Rectangles = technologies, Circles = start/end. **Colors:** Blue = Microsoft core, Purple = developer tools, Green = low complexity, Orange = medium complexity, Red = high complexity/enterprise.

---

## Next Steps
{: .no_toc }

**Detailed comparisons:**  
→ [Feature Comparison]({{ '/docs/feature-comparison' | relative_url }})

**Real-world examples:**  
→ [Scenarios]({{ '/docs/scenarios' | relative_url }})

**Evaluate readiness:**  
→ [Evaluation Criteria]({{ '/docs/evaluation-criteria' | relative_url }})

---

**Last Updated:** November 2025  
**Next:** [Evaluation Criteria]({{ '/docs/evaluation-criteria' | relative_url }}) - Score complexity, skills, budget, and governance after selecting a path

