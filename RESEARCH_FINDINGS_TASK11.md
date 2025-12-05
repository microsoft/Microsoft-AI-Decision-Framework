# Research Findings - Task 11: Cross-Correlated Insights & Industry/Science

**Source:** Microsoft Build 2025 Book of News (May 2025)
**Status:** Validated against official announcements.

## 1. Industry & Science Platforms

### Microsoft Discovery (Scientific R&D)
*   **Definition:** An enterprise agentic platform designed to accelerate scientific research and discovery.
*   **Capabilities:**
    *   **Scientific Knowledge Reasoning:** Ingests and reasons over vast scientific literature.
    *   **Hypothesis Formulation:** AI agents assist in generating and refining scientific hypotheses.
    *   **Candidate Generation:** Generates potential candidates (e.g., molecules, materials) for testing.
    *   **Simulation & Analysis:** Orchestrates simulations and analyzes results using HPC and AI.
*   **Target Audience:** R&D teams in pharma, materials science, chemistry, etc.
*   **Status:** Preview (announced Build 2025).
*   **Key Integration:** Integrates with Azure HPC and Quantum Computing resources.

### Microsoft Planetary Computer Pro (Geospatial)
*   **Definition:** A managed platform for geospatial insights generation and integration.
*   **Capabilities:**
    *   **Deployment:** Deploys within customer's Azure subscription.
    *   **Data Management:** Ingestion and management of private geospatial datasets.
    *   **Integration:** Integrates with Microsoft Fabric and third-party tools like Esri ArcGIS.
    *   **AI-Ready:** Reduces barriers to applying Copilot and AI models to geospatial data.
*   **Status:** Preview (announced Build 2025).

## 2. Cross-Correlated Insights: The "Foundry" Unification

Microsoft has unified its AI development and management platforms under the **"Microsoft Foundry"** brand (formerly Azure AI Foundry), creating a continuum from Cloud to Edge to Client.

| Brand | Scope | Description |
| :--- | :--- | :--- |
| **Microsoft Foundry (Azure)** | **Cloud** | The unified cloud platform for designing, customizing, and managing AI apps and agents. Includes Model Catalog, Agent Service, and Observability. (Formerly Azure AI Foundry). |
| **Microsoft Foundry (Windows)** | **Client** | Evolution of Windows Copilot Runtime. A unified platform for local AI development on Windows. Includes Windows ML and Foundry Local. |
| **Foundry Local** | **Edge/Local** | Brings Foundry models and capabilities to local devices (Windows 11, MacOS). Enables offline/local inferencing and hybrid scenarios. |

**Key Takeaway:** "Foundry" is the overarching brand for the *entire* AI development lifecycle across all environments. "Azure AI Foundry" is now referred to as the Azure implementation of Microsoft Foundry.

## 3. Terminology Shifts & Standards

### Plugin $\rightarrow$ Tool / MCP Server
*   **Observation:** The term "Plugin" (e.g., ChatGPT Plugin) is being superseded by **"Tool"** and **"Model Context Protocol (MCP) Server"**.
*   **Model Context Protocol (MCP):**
    *   Microsoft and GitHub have joined the MCP Steering Committee.
    *   **Universal Standard:** MCP is now the standard for connecting AI agents to data and systems.
    *   **Adoption:** Native support in Copilot Studio, Azure AI Foundry Agent Service, Dynamics 365, and Windows.
    *   **NLWeb:** A new open project where every endpoint is an MCP server, bringing conversational interfaces to the web.

### Agent Interoperability
*   **Agent2Agent (A2A):** A new protocol for secure, peer-to-peer communication between agents. Allows agents to discover peers, negotiate tasks, and collaborate without a centralized intermediary.
*   **Multi-Agent Orchestration:** Now a core capability of Azure AI Foundry Agent Service and Copilot Studio, leveraging A2A and MCP.

### "Copilot Stack" Evolution
*   The "Copilot Stack" concept is evolving into a more concrete architecture:
    *   **Orchestration:** Azure AI Foundry Agent Service / Copilot Studio.
    *   **Connection:** Model Context Protocol (MCP).
    *   **Models:** Azure AI Foundry Models (Cloud) / Foundry Local (Device).

## 4. Other Notable Updates
*   **Agentic DevOps:** GitHub Copilot Coding Agent (autonomous), SRE Agent (operations), GitHub Models (MaaS).
*   **SQL Server 2025:** "AI-ready" with vector search and GitHub Copilot integration.
*   **Fabric Data Agents:** Now deployable to Teams and M365 Copilot; can be used as "skills" by other agents.
