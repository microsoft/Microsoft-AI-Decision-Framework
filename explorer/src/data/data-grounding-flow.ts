import type { Node, Edge } from '@xyflow/react';
import type { FlowDefinition, NodeData, EdgeData } from '../types';

const nodes: Node<NodeData>[] = [
  // ── Start ──
  { id: 'Start', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Need to ground AI', category: 'start', branch: 'overview' } },

  // ── Where is your data? ──
  { id: 'Q1', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Where is your data?', category: 'question', branch: 'data-grounding' } },
  { id: 'M365Data', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Data type?', category: 'question', branch: 'data-grounding' } },
  { id: 'AzureData', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Data type?', category: 'question', branch: 'data-grounding' } },
  { id: 'Hybrid', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Primary location?', category: 'question', branch: 'data-grounding' } },
  { id: 'FabricData', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Microsoft Fabric', category: 'recommendation', branch: 'data-grounding', color: '#78350f' } },

  // ── M365 branch ──
  { id: 'Graph', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Microsoft Graph Connectors', category: 'recommendation', branch: 'data-grounding', color: '#1e3a5f' } },
  { id: 'GraphTeams', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Graph Connectors', category: 'recommendation', branch: 'data-grounding', color: '#1e3a5f' } },
  { id: 'GraphCustom', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Custom Graph Connector', category: 'recommendation', branch: 'data-grounding', color: '#1e3a5f' } },

  // ── Azure Documents branch ──
  { id: 'Q2', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'File count?', category: 'question', branch: 'data-grounding' } },
  { id: 'DB', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Database?', category: 'question', branch: 'data-grounding' } },
  { id: 'Blob', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Blob Storage\nwith AI Search', category: 'recommendation', branch: 'data-grounding', color: '#1e3a5f' } },

  // ── File search sub-branch ──
  { id: 'FileSearch', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Platform?', category: 'question', branch: 'data-grounding' } },
  { id: 'Search', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Azure AI Search', category: 'recommendation', branch: 'data-grounding', color: '#1e3a5f' } },
  { id: 'ContentUnderstanding', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Azure AI Content Understanding\nwith AI Search', category: 'recommendation', branch: 'data-grounding', status: 'preview', color: '#1e4d6e' } },
  { id: 'AgentFileSearch', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Agent Service File Search\nAuto chunk & embed', category: 'recommendation', branch: 'data-grounding', color: '#1e3a5f' } },
  { id: 'StudioKnowledge', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Studio Knowledge Base\nUp to 1,000 files', category: 'recommendation', branch: 'data-grounding', color: '#4c1d95' } },

  // ── Database / Vector branch ──
  { id: 'Cosmos', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Vector algorithm?', category: 'question', branch: 'vector-db' } },
  { id: 'CosmosIVF', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Cosmos DB IVF', category: 'recommendation', branch: 'vector-db', color: '#1e3a5f' } },
  { id: 'CosmosHNSW', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Cosmos DB HNSW', category: 'recommendation', branch: 'vector-db', color: '#1e3a5f' } },
  { id: 'CosmosDiskANN', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Cosmos DB DiskANN', category: 'recommendation', branch: 'vector-db', color: '#1e3a5f' } },
  { id: 'Postgres', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'PostgreSQL with pgvector', category: 'recommendation', branch: 'vector-db', color: '#1e3a5f' } },
  { id: 'SQLFamily', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Where does your SQL run?', category: 'question', branch: 'vector-db' } },
  { id: 'AzureSQL', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Azure SQL Database\nVECTOR type, DiskANN', category: 'recommendation', branch: 'vector-db', status: 'preview', color: '#1e3a5f' } },
  { id: 'SQLMI', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Azure SQL MI\nVECTOR type', category: 'recommendation', branch: 'vector-db', status: 'preview', color: '#1e3a5f' } },
  { id: 'SQL', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'SQL Server 2025\nVECTOR type', category: 'recommendation', branch: 'vector-db', status: 'preview', color: '#1e3a5f' } },
  { id: 'SQLFabric', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'SQL database in Fabric\nVECTOR type', category: 'recommendation', branch: 'vector-db', status: 'preview', color: '#78350f' } },

  // ── Hybrid branch ──
  { id: 'HybridM365', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Graph with BYOK', category: 'recommendation', branch: 'data-grounding' } },
  { id: 'HybridAzure', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'AI Search with Graph API', category: 'recommendation', branch: 'data-grounding' } },

  // ── Fabric analytics branch ──
  { id: 'Q3', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Access method?', category: 'question', branch: 'data-grounding' } },
  { id: 'FabricPlatform', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Fabric Lakehouse & Warehouse\nOneLake with SQL endpoint', category: 'recommendation', branch: 'data-grounding', color: '#78350f' } },
  { id: 'FabricAgent', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Fabric Data Agents', category: 'recommendation', branch: 'data-grounding', status: 'preview', color: '#78350f' } },

  // ── Platform selection (outcome) ──
  { id: 'Platform', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Which platform?', category: 'question', branch: 'data-grounding' } },
  { id: 'PlatformM365', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Use built-in', category: 'outcome', branch: 'data-grounding' } },
  { id: 'PlatformStudio', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Configure Studio', category: 'outcome', branch: 'data-grounding' } },
  { id: 'PlatformSDK', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Code integration', category: 'outcome', branch: 'data-grounding' } },
  { id: 'PlatformFoundry', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Configure Foundry', category: 'outcome', branch: 'data-grounding' } },
  { id: 'PlatformLogicApps', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'MCP Server Connector', category: 'outcome', branch: 'data-grounding' } },
];

const edges: Edge<EdgeData>[] = [
  // Start
  { id: 'e-start-q1', source: 'Start', target: 'Q1', data: { variant: 'default' } },

  // Q1 branches
  { id: 'e-q1-m365', source: 'Q1', target: 'M365Data', label: 'M365 only', data: { variant: 'default' } },
  { id: 'e-q1-azure', source: 'Q1', target: 'AzureData', label: 'Azure only', data: { variant: 'default' } },
  { id: 'e-q1-hybrid', source: 'Q1', target: 'Hybrid', label: 'Both', data: { variant: 'default' } },
  { id: 'e-q1-fabric', source: 'Q1', target: 'FabricData', label: 'Analytics platform', data: { variant: 'default' } },

  // M365 data
  { id: 'e-m365-graph', source: 'M365Data', target: 'Graph', label: 'SharePoint, OneDrive', data: { variant: 'default' } },
  { id: 'e-m365-teams', source: 'M365Data', target: 'GraphTeams', label: 'Teams messages', data: { variant: 'default' } },
  { id: 'e-m365-custom', source: 'M365Data', target: 'GraphCustom', label: 'Custom M365 app', data: { variant: 'default' } },

  // Azure data
  { id: 'e-azure-docs', source: 'AzureData', target: 'Q2', label: 'Documents, PDFs', data: { variant: 'default' } },
  { id: 'e-azure-db', source: 'AzureData', target: 'DB', label: 'Structured DB', data: { variant: 'default' } },
  { id: 'e-azure-blob', source: 'AzureData', target: 'Blob', label: 'Unstructured', data: { variant: 'default' } },

  // File count
  { id: 'e-q2-filesearch', source: 'Q2', target: 'FileSearch', label: 'Under 10K files\nSimple setup', data: { variant: 'default' } },
  { id: 'e-q2-search', source: 'Q2', target: 'Search', label: 'Production scale\nCustom chunking', data: { variant: 'default' } },
  { id: 'e-q2-content', source: 'Q2', target: 'ContentUnderstanding', label: 'Multimodal content', data: { variant: 'default' } },

  // File search platform
  { id: 'e-fs-agent', source: 'FileSearch', target: 'AgentFileSearch', label: 'Azure Agent Service', data: { variant: 'default' } },
  { id: 'e-fs-studio', source: 'FileSearch', target: 'StudioKnowledge', label: 'Copilot Studio', data: { variant: 'default' } },

  // Database
  { id: 'e-db-cosmos', source: 'DB', target: 'Cosmos', label: 'Global scale, NoSQL', data: { variant: 'default' } },
  { id: 'e-db-pg', source: 'DB', target: 'Postgres', label: 'Relational, OSS', data: { variant: 'default' } },
  { id: 'e-db-sql', source: 'DB', target: 'SQLFamily', label: 'SQL Database Engine', data: { variant: 'default' } },

  // SQL Family
  { id: 'e-sql-azure', source: 'SQLFamily', target: 'AzureSQL', label: 'Cloud PaaS', data: { variant: 'default' } },
  { id: 'e-sql-mi', source: 'SQLFamily', target: 'SQLMI', label: 'Lift-and-shift PaaS', data: { variant: 'default' } },
  { id: 'e-sql-server', source: 'SQLFamily', target: 'SQL', label: 'On-prem / VM', data: { variant: 'default' } },
  { id: 'e-sql-fabric', source: 'SQLFamily', target: 'SQLFabric', label: 'Fabric-native', data: { variant: 'default' } },

  // Cosmos algorithms
  { id: 'e-cosmos-ivf', source: 'Cosmos', target: 'CosmosIVF', label: 'Flat index', data: { variant: 'default' } },
  { id: 'e-cosmos-hnsw', source: 'Cosmos', target: 'CosmosHNSW', label: 'Graph-based', data: { variant: 'default' } },
  { id: 'e-cosmos-disk', source: 'Cosmos', target: 'CosmosDiskANN', label: 'Disk-optimized', data: { variant: 'default' } },

  // Hybrid
  { id: 'e-hybrid-m365', source: 'Hybrid', target: 'HybridM365', label: 'M365 primary', data: { variant: 'default' } },
  { id: 'e-hybrid-azure', source: 'Hybrid', target: 'HybridAzure', label: 'Azure primary', data: { variant: 'default' } },

  // Fabric analytics
  { id: 'e-fabric-q3', source: 'FabricData', target: 'Q3', data: { variant: 'default' } },
  { id: 'e-q3-platform', source: 'Q3', target: 'FabricPlatform', label: 'Direct platform access', data: { variant: 'default' } },
  { id: 'e-q3-agent', source: 'Q3', target: 'FabricAgent', label: 'Conversational agent', data: { variant: 'default' } },

  // All data sources → Platform selection
  { id: 'e-graph-plat', source: 'Graph', target: 'Platform', data: { variant: 'default' } },
  { id: 'e-graphteams-plat', source: 'GraphTeams', target: 'Platform', data: { variant: 'default' } },
  { id: 'e-graphcustom-plat', source: 'GraphCustom', target: 'Platform', data: { variant: 'default' } },
  { id: 'e-agentfs-plat', source: 'AgentFileSearch', target: 'Platform', data: { variant: 'default' } },
  { id: 'e-studioknow-plat', source: 'StudioKnowledge', target: 'Platform', data: { variant: 'default' } },
  { id: 'e-search-plat', source: 'Search', target: 'Platform', data: { variant: 'default' } },
  { id: 'e-content-plat', source: 'ContentUnderstanding', target: 'Platform', data: { variant: 'default' } },
  { id: 'e-cosmosivf-plat', source: 'CosmosIVF', target: 'Platform', data: { variant: 'default' } },
  { id: 'e-cosmoshnsw-plat', source: 'CosmosHNSW', target: 'Platform', data: { variant: 'default' } },
  { id: 'e-cosmosdisk-plat', source: 'CosmosDiskANN', target: 'Platform', data: { variant: 'default' } },
  { id: 'e-pg-plat', source: 'Postgres', target: 'Platform', data: { variant: 'default' } },
  { id: 'e-azuresql-plat', source: 'AzureSQL', target: 'Platform', data: { variant: 'default' } },
  { id: 'e-sqlmi-plat', source: 'SQLMI', target: 'Platform', data: { variant: 'default' } },
  { id: 'e-sql-plat', source: 'SQL', target: 'Platform', data: { variant: 'default' } },
  { id: 'e-sqlfabric-plat', source: 'SQLFabric', target: 'Platform', data: { variant: 'default' } },
  { id: 'e-blob-plat', source: 'Blob', target: 'Platform', data: { variant: 'default' } },
  { id: 'e-hybridm365-plat', source: 'HybridM365', target: 'Platform', data: { variant: 'default' } },
  { id: 'e-hybridazure-plat', source: 'HybridAzure', target: 'Platform', data: { variant: 'default' } },
  { id: 'e-fabricplat-plat', source: 'FabricPlatform', target: 'Platform', data: { variant: 'default' } },
  { id: 'e-fabricagent-plat', source: 'FabricAgent', target: 'Platform', data: { variant: 'default' } },

  // Platform → Outcomes
  { id: 'e-plat-m365', source: 'Platform', target: 'PlatformM365', label: 'M365 Copilot', data: { variant: 'default' } },
  { id: 'e-plat-studio', source: 'Platform', target: 'PlatformStudio', label: 'Copilot Studio', data: { variant: 'default' } },
  { id: 'e-plat-sdk', source: 'Platform', target: 'PlatformSDK', label: 'M365 SDK', data: { variant: 'default' } },
  { id: 'e-plat-foundry', source: 'Platform', target: 'PlatformFoundry', label: 'Microsoft Foundry Azure', data: { variant: 'default' } },
  { id: 'e-plat-logic', source: 'Platform', target: 'PlatformLogicApps', label: 'Logic Apps', data: { variant: 'default' } },
];

export const dataGroundingFlow: FlowDefinition = {
  title: 'Data Grounding Decision',
  description: 'Navigate data strategy, knowledge sources, vector databases, and platform integration.',
  frameworkRef: 'Phase 2: Q4 — Data grounding patterns',
  nodes,
  edges,
};
