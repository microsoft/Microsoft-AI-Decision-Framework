# Research Findings - Task 7: Security & Governance (Build 2025)

**Date:** November 24, 2025
**Source:** [Microsoft Build 2025 Book of News](https://news.microsoft.com/build-2025-book-of-news/)

## 1. Azure AI Foundry Security Updates

### 1.1 Azure AI Content Safety

* **Prompt Shields:** **Generally Available (GA)**.
  * *Capability:* Protects against jailbreaks and prompt injection attacks by intercepting malicious prompts before they influence model behavior.
* **Spotlighting:** **Preview**.
  * *Capability:* Identifies adversarial prompts embedded in external data sources (e.g., RAG documents) by separating trusted from untrusted inputs. Reduces cross-domain injection risks.
* **Task Adherence:** **Preview**.
  * *Capability:* Detects when agents deviate from approved task boundaries or user intent.
* **PII Detection:**
  * *Capability:* New content filter powered by Azure AI Language to automatically detect and redact PII and PHI.

### 1.2 Microsoft Defender for Cloud Integration

* **Status:** **Preview**.
* **Capability:** Brings security insights directly into the Azure AI Foundry portal.
* **Features:**
  * **AI Security Posture Management:** Recommendations for misconfigurations and vulnerabilities.
  * **Threat Protection:** Runtime alert monitoring (15+ detections) for jailbreaks, data leakage, and wallet abuse.

## 2. Identity & Governance (Microsoft Entra & Purview)

### 2.1 Microsoft Entra Agent ID

* **Status:** **Preview**.
* **Capability:** Assigns a unique identity to every AI agent (Copilot Studio & Azure AI Foundry).
* **Value:** Solves "agent sprawl" by allowing admins to see all agents and manage their access permissions centrally.

### 2.2 Microsoft Purview for AI

* **Purview SDK:** **Preview**. REST APIs to embed data security controls into custom AI apps.
* **Data Security Posture Management (DSPM) for AI:** **Preview**. Discovers risks in AI interactions (sensitive data in prompts, unethical usage).
* **Copilot Studio Support:** **Preview**. DSPM and Audit support for Copilot Studio agents (visibility into unauthenticated user activity).
* **DLP for M365 Copilot Agents:** **Preview**. Extends Data Loss Prevention controls to agents (e.g., preventing agents from summarizing "Internal Only" documents).

## 3. Compliance & Evaluation

* **Azure AI Foundry Evaluation + Purview:** **Preview**.
  * *Capability:* Integration with Purview Compliance Manager.
  * *Use Case:* Supports EU AI Act compliance (Article 9 & 17) by documenting risk assessments (bias, cybersecurity) and sharing them with compliance teams.

## 4. Impact on Framework

### Updates Required

* **`docs/technologies.md`:**
  * Update **Azure AI Content Safety** entry.
  * Add **Microsoft Entra Agent ID**.
  * Add **Microsoft Defender for AI**.
* **`docs/evaluation-criteria.md`:**
  * Update **Governance** section to include "Agent Identity" (Entra) and "Runtime Protection" (Defender/Prompt Shields).
