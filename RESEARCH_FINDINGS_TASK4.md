# Research Findings - Task 4: Developer Tools (GitHub)

**Source:** Ignite 2025 Book of News, Microsoft Learn
**Status:** Validated against November 2025 documentation.

## 1. GitHub Copilot Coding Agent

**Status:** Available in Copilot Pro, Business, Enterprise (Specific features like App Modernization are Preview)

The **GitHub Copilot Coding Agent** is an autonomous agent capable of performing complex, multi-step development tasks. Unlike the standard Copilot Chat (which is conversational), the Coding Agent can:

* **Plan and Execute:** Break down complex requests into steps.
* **Edit Multiple Files:** Perform cross-file edits to implement features or fixes.
* **Run Terminal Commands:** Execute tests or build commands to validate changes (in Agent Mode).
* **Integrate with Tools:** Use Model Context Protocol (MCP) to access external data or tools.

### Key Capabilities

* **App Modernization:** Specialized agents for upgrading Java (JDK 21, Spring Boot) and .NET applications.
* **Code Optimizations:** Integrates with Azure Monitor to automatically fix performance issues.
* **Azure Boards Integration:** (Private Preview) Allows assigning work items directly to the Coding Agent to implement.

## 2. Agent Mode (IDE Integration)

**Status:**
* **Visual Studio Code:** Available
* **Visual Studio 2022 (17.14+):** Public Preview
* **Visual Studio 2026:** General Availability (Planned)

**Agent Mode** is the user interface for interacting with the Coding Agent within the IDE.

* **Switching Modes:** Users can toggle between "Chat" (standard) and "Agent" mode in the Copilot panel.
* **MCP Support:** In Agent Mode, Copilot can utilize installed MCP servers (e.g., GitHub Copilot for Azure) to perform actions like querying Azure resources or managing deployments.
* **Looping:** The agent can loop through "Edit -> Run Error -> Fix" cycles autonomously.

## 3. GitHub Copilot for Azure

**Status:** General Availability (VS Code), Public Preview (VS 2022)

An extension that provides **MCP Server** capabilities to GitHub Copilot.

* **Capabilities:** Allows Copilot to understand Azure resources, deploy apps, and troubleshoot issues using live Azure data.
* **Agent Integration:** Works natively with Agent Mode to perform Azure-related tasks without leaving the editor.

## 4. GitHub Models

**Status:** Public Preview (Limited Beta launched Aug 2024, expanded at Ignite 2025)

**GitHub Models** brings Model-as-a-Service (MaaS) directly into the GitHub ecosystem.

* **Playground:** Interactive playground to test models (Llama, Phi, GPT-4o) directly in the browser.
* **Integration:** Developers can use these models in their applications via the Azure AI Inference SDK.
* **No Azure Subscription Required:** (For testing) Allows developers to experiment with models using their GitHub identity.

## 5. Agentic DevOps

**Status:** Partner Specialization

A new Microsoft Partner specialization focused on helping organizations adopt "Agentic" workflows in their DevOps processes.

* **Focus:** Moving from CI/CD automation to autonomous agents that manage deployments, testing, and infrastructure.

## 6. GitHub Copilot Free

**Status:** General Availability

A free tier of GitHub Copilot is now available for individual developers.

* **Limits:** Monthly limits on chat and completions.
* **Features:** Includes access to Copilot Completions, Chat, and Edits (Agent Mode availability may be restricted).

## 7. Copilot Workspace

**Status:** Preview

A natural language-centric development environment.

* **Concept:** "Issue to Pull Request" workflow where the environment plans and implements changes based on an issue description.
* **Relation to Coding Agent:** Copilot Workspace is the "headed" experience for the Coding Agent, while Agent Mode is the "IDE-embedded" experience.
