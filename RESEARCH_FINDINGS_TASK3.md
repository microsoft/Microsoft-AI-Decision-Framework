# Research Findings: Task 3 (Data & AI Services)

**Date:** November 24, 2025
**Source:** Microsoft Ignite 2025 Book of News (November 18-21, 2025)
**Focus:** Azure AI Content Understanding, Azure DocumentDB, Fabric Data Agents
**Philosophy:** Problem-First (Why -> How -> What)

---

## 1. Azure AI Content Understanding (GA Nov 2025)

### The Problem
"The Unstructured Data Trap." 80% of enterprise data is locked in videos, audio calls, and complex documents.
*   Traditional OCR (Document Intelligence) is great for forms but struggles with video/audio.
*   Building custom pipelines with Whisper + GPT-4o + Vision is expensive and brittle.

### The Solution: Azure AI Content Understanding
A unified, multimodal AI service that extracts structured data from unstructured content (documents, images, audio, video).

*   **Key Capabilities:**
    *   **Generative Schema:** You define the JSON schema you *want*, and the AI extracts it from the media.
    *   **Multimodal:** Processes audio, video, images, and text in a single pass.
    *   **Foundry Integration:** Available as a tool in Azure AI Foundry.
    *   **Cost Effective:** Optimized for high-volume extraction compared to raw GPT-4o calls.

### Decision Framework (The "How")
*   **When to choose:**
    *   You need to analyze call center recordings, video feeds, or complex mixed-media documents.
    *   You need a specific structured output (JSON) from unstructured inputs.
*   **When to avoid:**
    *   You only have simple text documents (standard OCR might be cheaper).
    *   You need real-time streaming transcription (use Azure AI Speech).

### Impact on Documentation
*   **`docs/technologies.md`:** Add "Azure AI Content Understanding" to **Layer 4 (AI Services)**.
*   **`docs/decision-framework.md`:** Update Q3 (Data Strategy) to include "Multimodal Extraction".

---

## 2. Azure DocumentDB (GA - Formerly Cosmos DB for MongoDB vCore)

### The Problem
"The Vector Tax." Developers want to add AI (Vector Search) to their apps but don't want to manage a separate vector database (Pinecone/Weaviate) alongside their operational DB (MongoDB).

### The Solution: Azure DocumentDB
A fully managed, MongoDB-compatible database with built-in Vector Search.

*   **Key Capabilities:**
    *   **Native Vector Search:** Built-in DiskANN index for fast, scalable vector search.
    *   **MongoDB Compatibility:** Drop-in replacement for MongoDB apps.
    *   **Independent Scaling:** Scale compute and storage separately (unlike Request Unit model of standard Cosmos DB).
    *   **Free Tier:** Generous free tier for developers.

### Decision Framework (The "How")
*   **When to choose:**
    *   You are building a GenAI app and already know/love MongoDB.
    *   You want a single database for both operational data (users, chats) and vectors.
*   **When to avoid:**
    *   You need global multi-master replication (use Cosmos DB NoSQL API).
    *   You require strict SQL relational consistency (use Azure SQL / SQL Server 2025).

### Impact on Documentation
*   **`docs/technologies.md`:** Update "Azure Cosmos DB" section to clarify "Azure DocumentDB" branding.
*   **`docs/decision-framework.md`:** Update Q3 (Data Strategy) to include "DocumentDB" as a Vector Store option.

---

## 3. Fabric Data Agents (Preview)

### The Problem
"The SQL Bottleneck." Business users want insights from the Data Lake/Warehouse, but they can't write SQL/DAX/KQL.

### The Solution: Fabric Data Agent
A specialized, read-only conversational agent that "speaks" the language of your data.

*   **Key Capabilities:**
    *   **Schema Awareness:** Automatically understands your Lakehouse/Warehouse schema.
    *   **Read-Only Safety:** Can ONLY generate "Read" queries. Cannot create/update/delete data.
    *   **Fabric IQ (Preview):** Uses the unified semantic layer for accurate grounding.

### Decision Framework (The "How")
*   **When to choose:**
    *   You want to expose structured data (Analytics) to chat users.
    *   You are already using Microsoft Fabric.
*   **When to avoid:**
    *   You need to perform actions (e.g., "Update the record").
    *   Your data is in a non-Fabric SQL database.

### Impact on Documentation
*   **`docs/technologies.md`:** Add "Fabric Data Agent" to **Layer 5 (Specialized Copilots/Agents)**.

---

## Summary of Updates Needed

| Technology | Layer | Status | Key Decision Factor |
| :--- | :--- | :--- | :--- |
| **Content Understanding** | 4 (Service) | GA (Nov '25) | Multimodal Extraction (Video/Audio/Doc) |
| **Azure DocumentDB** | 4 (Data) | GA | MongoDB + Vectors (Unified Store) |
| **Fabric Data Agents** | 5 (Agent) | Preview | Chat-to-Data (Analytics) |
