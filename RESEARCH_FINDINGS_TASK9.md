# Research Findings - Task 9: Data & Analytics (Fabric, Databases, SQL)

**Source:** Microsoft Build 2025 Book of News (Section 2.2)
**Date:** November 2025

## 1. Microsoft Fabric Updates

### 1.1 Cosmos DB (NoSQL) in Fabric (Preview)

- **Capability:** Deploy Cosmos DB (NoSQL) directly within Fabric.
- **Impact:** Unifies operational (NoSQL) and analytical data in OneLake.
- **Use Case:** AI applications that need both low-latency operational data and deep analytics without ETL.
- **Key Feature:** Supports both SQL and NoSQL models in Fabric.

### 1.2 Fabric Data Agents (Preview)

- **Clarification:** These are **Conversational Analytics Agents**.
- **Function:** Retrieve insights from OneLake, respect data access permissions.
- **Integration:** Can be consumed by Copilot Studio custom agents.
- **Channels:** Teams, M365 Copilot.
- **Constitution Check:** They are *not* general-purpose orchestrators; they are specialized for data retrieval and Q&A.

### 1.3 Digital Twin Builder (Preview)

- **Component:** Part of Real-Time Intelligence in Fabric.
- **Audience:** No-code/low-code users.
- **Function:** Map physical assets to digital representations for analytics and AI simulation.

### 1.4 OneLake Shortcut Transformations (Preview)

- **Capability:** Apply AI transformations (summarize, translate, classify) *during* ingestion via shortcuts.
- **Engine:** Powered by Azure AI Foundry.
- **Benefit:** "AI-ready" data on arrival without complex pipelines.

### 1.5 Translytical Task Flows (Preview)

- **Concept:** "Translytical" = Transactional + Analytical.
- **Capability:** Trigger actions (write-back, update/delete records, API calls) directly from Power BI reports.
- **Impact:** Turns dashboards into active control planes.

## 2. Azure Databases

### 2.1 SQL Server 2025 (Preview)

- **AI Features:** Built-in **Vector Search** (semantic search + full text).
- **Modernization:** Native JSON support, built-in REST API, Change Event Streaming.
- **Integration:** Fabric Mirroring for Zero-ETL analytics.
- **Security:** Entra ID managed identities.

### 2.2 Azure Cosmos DB Updates

- **Global Secondary Index (Preview):** Auto-updated index on subset of data for complex queries (avoids full scan). Critical for AI agent performance.
- **Thread Storage (GA):** Native support for storing AI agent conversation threads (Azure AI Foundry SDK integration).
- **Foundry Integration:** Direct data access from Azure AI Foundry coming soon.

### 2.3 PostgreSQL

- **Extension for VS Code (Preview):** GitHub Copilot integration for SQL generation, schema design, and natural language queries.

## 3. Azure Databricks

- **Connector for Azure AI Foundry (Preview):**
  - Agents can connect to Databricks for real-time processing.
  - Access Spark jobs and Genie rooms (NLQ).
  - Secured via Unity Catalog.

## 4. Strategic Implications for Framework

### Data Strategy (Decision Framework)

- **Operational vs. Analytical:** The line is blurring with "Cosmos in Fabric" and "Translytical Task Flows".
- **Vector Store Choice:** SQL Server 2025 is now a strong on-prem/hybrid vector store option.
- **Agent State:** Cosmos DB is the standard for "Thread Storage" (Memory).

### Implementation Patterns

- **Pattern Update:** "Chat with Data" now explicitly includes "Fabric Data Agents" as a specialized sub-agent pattern.
- **RAG Pattern:** SQL Server 2025 Vector Search should be added as a retrieval option.

### Terminology

- **"Translytical":** New term to define workflows that mix read (analytics) and write (transactions) in the same interface.
