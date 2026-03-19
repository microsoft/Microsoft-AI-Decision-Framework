import type { Node, Edge } from '@xyflow/react';
import type { FlowDefinition, NodeData, EdgeData } from '../types';

const BASE = '/Microsoft-AI-Decision-Framework/docs';

const nodes: Node<NodeData>[] = [
  // ── Start ──
  { id: 'Start', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Start: Need AI Solution', category: 'start', branch: 'overview' } },

  // ── Interaction Pattern (Branch 1) ──
  { id: 'Q1', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'User interaction pattern?', category: 'question', branch: 'interaction-pattern' } },
  { id: 'UI_Path', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'UI-Based Agent', category: 'decision', branch: 'interaction-pattern' } },
  { id: 'Auto_Path', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Autonomous Agent', category: 'decision', branch: 'interaction-pattern' } },
  { id: 'API_Path', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Headless Service', category: 'decision', branch: 'interaction-pattern' } },

  // ── Build Approach (Branch 2) ──
  { id: 'Q2', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Where will users interact?', category: 'question', branch: 'build-approach' } },
  { id: 'M365', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'M365 Copilot', category: 'recommendation', branch: 'build-approach', color: '#1e3a5f', docsUrl: `${BASE}/technologies#m365-copilot` } },
  { id: 'Q3', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Build approach?', category: 'question', branch: 'build-approach' } },
  { id: 'Studio', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Copilot Studio', category: 'recommendation', branch: 'build-approach', color: '#1e3a5f', docsUrl: `${BASE}/technologies#copilot-studio` } },
  { id: 'Q4', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Primary platform?', category: 'question', branch: 'build-approach' } },
  { id: 'SDK', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'M365 Agents SDK', category: 'recommendation', branch: 'build-approach', color: '#4c1d95', docsUrl: `${BASE}/technologies#m365-agents-sdk` } },
  { id: 'Q4Azure', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Need custom UI protocol?', category: 'question', branch: 'build-approach' } },
  { id: 'AGUI', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Agent Framework + AG-UI', category: 'recommendation', branch: 'build-approach', status: 'preview', color: '#4c1d95', docsUrl: `${BASE}/technologies#agent-framework` } },
  { id: 'Foundry', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Microsoft Foundry - Azure', category: 'recommendation', branch: 'build-approach', color: '#7f1d1d', docsUrl: `${BASE}/technologies#microsoft-foundry` } },

  // ── Autonomous path ──
  { id: 'Q5', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Build approach?', category: 'question', branch: 'build-approach' } },
  { id: 'StudioAuto', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Copilot Studio\nwith Event Triggers', category: 'recommendation', branch: 'build-approach', color: '#1e3a5f', docsUrl: `${BASE}/technologies#copilot-studio` } },
  { id: 'Q6', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Primary workflow type?', category: 'question', branch: 'build-approach' } },
  { id: 'LogicApps', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Azure Logic Apps\nAI Agent Workflows', category: 'recommendation', branch: 'build-approach', status: 'preview', color: '#1e3a5f', docsUrl: `${BASE}/technologies#logic-apps` } },

  // ── API / Headless path ──
  { id: 'Q7', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Hosting preference?', category: 'question', branch: 'build-approach' } },
  { id: 'AgentService', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Foundry Agent Service', category: 'recommendation', branch: 'build-approach', color: '#7f1d1d', docsUrl: `${BASE}/technologies#foundry-agent-service` } },
  { id: 'WinAI', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Microsoft Foundry - Windows', category: 'recommendation', branch: 'build-approach', color: '#1e3a5f' } },

  // ── Data Grounding (Branch 3) ──
  { id: 'DataQ', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Need custom data?', category: 'question', branch: 'data-grounding' } },
  { id: 'GraphConn', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Graph Connectors', category: 'recommendation', branch: 'data-grounding', color: '#1e3a5f' } },
  { id: 'AISearch', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Azure AI Search\nAgentic retrieval', category: 'recommendation', branch: 'data-grounding', color: '#1e3a5f' } },
  { id: 'VectorDB', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Vector DB choice?', category: 'question', branch: 'vector-db' } },
  { id: 'Fabric', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Microsoft Fabric', category: 'recommendation', branch: 'data-grounding', color: '#78350f' } },
  { id: 'DirectDeploy', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'No grounding needed', category: 'decision', branch: 'data-grounding' } },

  // ── Vector DB sub-branch ──
  { id: 'CosmosDB', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Cosmos DB\nIVF/HNSW/DiskANN', category: 'recommendation', branch: 'vector-db', color: '#1e3a5f' } },
  { id: 'PostgreSQL', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'PostgreSQL\npgvector', category: 'recommendation', branch: 'vector-db', color: '#1e3a5f' } },
  { id: 'SQLFamily', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Where does SQL run?', category: 'question', branch: 'vector-db' } },
  { id: 'AzureSQL', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Azure SQL Database\nVECTOR type', category: 'recommendation', branch: 'vector-db', status: 'preview', color: '#1e3a5f' } },
  { id: 'SQLMI', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Azure SQL MI\nVECTOR type', category: 'recommendation', branch: 'vector-db', status: 'preview', color: '#1e3a5f' } },
  { id: 'SQLServer', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'SQL Server 2025\nVECTOR type', category: 'recommendation', branch: 'vector-db', status: 'preview', color: '#1e3a5f' } },
  { id: 'SQLFabric', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'SQL database in Fabric\nVECTOR type', category: 'recommendation', branch: 'vector-db', status: 'preview', color: '#78350f' } },

  // ── Deployment (Branch 4) ──
  { id: 'DeployConfig', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Configure Deployment', category: 'decision', branch: 'deployment' } },
  { id: 'Q8', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Deployment needs?', category: 'question', branch: 'deployment' } },
  { id: 'Deploy_M365', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Publish to M365 Copilot', category: 'outcome', branch: 'deployment' } },
  { id: 'Deploy_Teams', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Publish to Teams', category: 'outcome', branch: 'deployment' } },
  { id: 'Deploy_Web', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Web/Mobile Channels', category: 'outcome', branch: 'deployment' } },
  { id: 'Deploy_Multi', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Multi-channel:\n10+ channels via SDK', category: 'outcome', branch: 'deployment' } },
  { id: 'Deploy_Azure', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Azure Container Apps /\nApp Service / AKS', category: 'outcome', branch: 'deployment' } },
  { id: 'Monitor', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Monitor & Govern', category: 'decision', branch: 'deployment' } },
  { id: 'End', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Production', category: 'outcome', branch: 'deployment' } },
];

const edges: Edge<EdgeData>[] = [
  // Start → Interaction Pattern
  { id: 'e-start-q1', source: 'Start', target: 'Q1', data: { variant: 'default' } },

  // Q1 branches
  { id: 'e-q1-ui', source: 'Q1', target: 'UI_Path', label: 'Conversational / Chat UI', data: { variant: 'default' } },
  { id: 'e-q1-auto', source: 'Q1', target: 'Auto_Path', label: 'Autonomous / Event-driven', data: { variant: 'default' } },
  { id: 'e-q1-api', source: 'Q1', target: 'API_Path', label: 'API / Headless', data: { variant: 'default' } },

  // UI Path
  { id: 'e-ui-q2', source: 'UI_Path', target: 'Q2', data: { variant: 'default' } },
  { id: 'e-q2-m365', source: 'Q2', target: 'M365', label: 'M365 apps only', data: { variant: 'default' } },
  { id: 'e-q2-q3a', source: 'Q2', target: 'Q3', label: 'Teams + custom', data: { variant: 'default' } },
  { id: 'e-q2-q3b', source: 'Q2', target: 'Q3', label: 'Multi-channel', data: { variant: 'default' } },
  { id: 'e-q3-studio', source: 'Q3', target: 'Studio', label: 'Low-code', data: { variant: 'default' } },
  { id: 'e-q3-q4', source: 'Q3', target: 'Q4', label: 'Pro-code', data: { variant: 'default' } },
  { id: 'e-q4-sdk', source: 'Q4', target: 'SDK', label: 'M365-centric', data: { variant: 'default' } },
  { id: 'e-q4-azure', source: 'Q4', target: 'Q4Azure', label: 'Azure-centric', data: { variant: 'default' } },
  { id: 'e-q4a-agui', source: 'Q4Azure', target: 'AGUI', label: 'Yes', data: { variant: 'yes' } },
  { id: 'e-q4a-foundry', source: 'Q4Azure', target: 'Foundry', label: 'No', data: { variant: 'no' } },

  // Autonomous Path
  { id: 'e-auto-q5', source: 'Auto_Path', target: 'Q5', data: { variant: 'default' } },
  { id: 'e-q5-studio', source: 'Q5', target: 'StudioAuto', label: 'Low-code', data: { variant: 'default' } },
  { id: 'e-q5-q6', source: 'Q5', target: 'Q6', label: 'Pro-code', data: { variant: 'default' } },
  { id: 'e-q6-logic', source: 'Q6', target: 'LogicApps', label: 'Enterprise integration', data: { variant: 'default' } },
  { id: 'e-q6-foundry', source: 'Q6', target: 'Foundry', label: 'Custom orchestration', data: { variant: 'default' } },

  // API Path
  { id: 'e-api-q7', source: 'API_Path', target: 'Q7', data: { variant: 'default' } },
  { id: 'e-q7-agent', source: 'Q7', target: 'AgentService', label: 'Managed PaaS', data: { variant: 'default' } },
  { id: 'e-q7-foundry', source: 'Q7', target: 'Foundry', label: 'Self-hosted', data: { variant: 'default' } },
  { id: 'e-q7-winai', source: 'Q7', target: 'WinAI', label: 'Local / Edge', data: { variant: 'default' } },

  // All tech nodes → Data Question
  { id: 'e-m365-data', source: 'M365', target: 'DataQ', data: { variant: 'default' } },
  { id: 'e-studio-data', source: 'Studio', target: 'DataQ', data: { variant: 'default' } },
  { id: 'e-studioauto-data', source: 'StudioAuto', target: 'DataQ', data: { variant: 'default' } },
  { id: 'e-sdk-data', source: 'SDK', target: 'DataQ', data: { variant: 'default' } },
  { id: 'e-agui-data', source: 'AGUI', target: 'DataQ', data: { variant: 'default' } },
  { id: 'e-foundry-data', source: 'Foundry', target: 'DataQ', data: { variant: 'default' } },
  { id: 'e-logic-data', source: 'LogicApps', target: 'DataQ', data: { variant: 'default' } },
  { id: 'e-agentsvc-data', source: 'AgentService', target: 'DataQ', data: { variant: 'default' } },

  // Data grounding branches
  { id: 'e-data-graph', source: 'DataQ', target: 'GraphConn', label: 'M365 data', data: { variant: 'default' } },
  { id: 'e-data-search', source: 'DataQ', target: 'AISearch', label: 'Documents', data: { variant: 'default' } },
  { id: 'e-data-vector', source: 'DataQ', target: 'VectorDB', label: 'Structured data', data: { variant: 'default' } },
  { id: 'e-data-fabric', source: 'DataQ', target: 'Fabric', label: 'Analytics data', data: { variant: 'default' } },
  { id: 'e-data-direct', source: 'DataQ', target: 'DirectDeploy', label: 'No grounding', data: { variant: 'default' } },

  // Vector DB branches
  { id: 'e-vec-cosmos', source: 'VectorDB', target: 'CosmosDB', label: 'Global scale NoSQL', data: { variant: 'default' } },
  { id: 'e-vec-pg', source: 'VectorDB', target: 'PostgreSQL', label: 'Relational, OSS', data: { variant: 'default' } },
  { id: 'e-vec-sql', source: 'VectorDB', target: 'SQLFamily', label: 'SQL Database Engine', data: { variant: 'default' } },

  // SQL Family branches
  { id: 'e-sql-azure', source: 'SQLFamily', target: 'AzureSQL', label: 'Cloud PaaS', data: { variant: 'default' } },
  { id: 'e-sql-mi', source: 'SQLFamily', target: 'SQLMI', label: 'Lift-and-shift PaaS', data: { variant: 'default' } },
  { id: 'e-sql-server', source: 'SQLFamily', target: 'SQLServer', label: 'On-prem / VM', data: { variant: 'default' } },
  { id: 'e-sql-fabric', source: 'SQLFamily', target: 'SQLFabric', label: 'Fabric-native', data: { variant: 'default' } },

  // All data nodes → DeployConfig
  { id: 'e-graph-deploy', source: 'GraphConn', target: 'DeployConfig', data: { variant: 'default' } },
  { id: 'e-search-deploy', source: 'AISearch', target: 'DeployConfig', data: { variant: 'default' } },
  { id: 'e-cosmos-deploy', source: 'CosmosDB', target: 'DeployConfig', data: { variant: 'default' } },
  { id: 'e-pg-deploy', source: 'PostgreSQL', target: 'DeployConfig', data: { variant: 'default' } },
  { id: 'e-azuresql-deploy', source: 'AzureSQL', target: 'DeployConfig', data: { variant: 'default' } },
  { id: 'e-sqlmi-deploy', source: 'SQLMI', target: 'DeployConfig', data: { variant: 'default' } },
  { id: 'e-sqlserver-deploy', source: 'SQLServer', target: 'DeployConfig', data: { variant: 'default' } },
  { id: 'e-sqlfabric-deploy', source: 'SQLFabric', target: 'DeployConfig', data: { variant: 'default' } },
  { id: 'e-fabric-deploy', source: 'Fabric', target: 'DeployConfig', data: { variant: 'default' } },
  { id: 'e-direct-deploy', source: 'DirectDeploy', target: 'DeployConfig', data: { variant: 'default' } },

  // Deployment branches
  { id: 'e-deploy-q8', source: 'DeployConfig', target: 'Q8', data: { variant: 'default' } },
  { id: 'e-q8-m365', source: 'Q8', target: 'Deploy_M365', label: 'M365 Copilot', data: { variant: 'default' } },
  { id: 'e-q8-teams', source: 'Q8', target: 'Deploy_Teams', label: 'Teams', data: { variant: 'default' } },
  { id: 'e-q8-web', source: 'Q8', target: 'Deploy_Web', label: 'Web / Mobile', data: { variant: 'default' } },
  { id: 'e-q8-multi', source: 'Q8', target: 'Deploy_Multi', label: 'Multiple channels', data: { variant: 'default' } },
  { id: 'e-q8-azure', source: 'Q8', target: 'Deploy_Azure', label: 'Azure service', data: { variant: 'default' } },

  // Deploy → Monitor → End
  { id: 'e-dm365-mon', source: 'Deploy_M365', target: 'Monitor', data: { variant: 'default' } },
  { id: 'e-dteams-mon', source: 'Deploy_Teams', target: 'Monitor', data: { variant: 'default' } },
  { id: 'e-dweb-mon', source: 'Deploy_Web', target: 'Monitor', data: { variant: 'default' } },
  { id: 'e-dmulti-mon', source: 'Deploy_Multi', target: 'Monitor', data: { variant: 'default' } },
  { id: 'e-dazure-mon', source: 'Deploy_Azure', target: 'Monitor', data: { variant: 'default' } },
  { id: 'e-mon-end', source: 'Monitor', target: 'End', data: { variant: 'default' } },
];

export const completeDecisionFlow: FlowDefinition = {
  title: 'Complete Decision Flow',
  description: 'End-to-end technology selection covering interaction patterns, build approach, data grounding, and deployment.',
  frameworkRef: 'Phase 2: Q1-Q9 — All nine critical questions',
  nodes,
  edges,
};
