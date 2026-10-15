import type { Node, Edge } from '@xyflow/react';
import type { FlowDefinition, NodeData, EdgeData } from '../types';

const BASE = '/Microsoft-AI-Decision-Framework/docs';

const nodes: Node<NodeData>[] = [
  // ── Start ──
  { id: 'Start', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Need to ground an agent', category: 'start', branch: 'overview' } },
  { id: 'Shape', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'What must the\nagent retrieve?', category: 'question', branch: 'data-grounding' } },

  // ── Documents and files: the trust boundary decides ──
  { id: 'Docs', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Who asks, and where\ndoes the content live?', category: 'question', branch: 'data-grounding' } },
  { id: 'Inherited', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Built-in grounding\nSharePoint agent or\nCopilot Studio knowledge', description: 'Permissions are inherited from Microsoft 365. Copilot Studio caps: 500 knowledge sources and 500 uploaded files per agent; each SharePoint or OneDrive source holds up to 1,000 files, 50 folders, and 10 levels. Custom agents that need Microsoft 365 data start from Work IQ; see IQ Layer Selection.', category: 'recommendation', branch: 'data-grounding', color: '#1e3a5f' } },
  { id: 'External', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Copilot connectors\nSynced or federated (MCP)', description: 'Connectors reach data beyond Microsoft 365. SharePoint, OneDrive, and Teams content is already in Microsoft 365, so do not wrap it in a connector. Source permissions are respected.', category: 'recommendation', branch: 'data-grounding', color: '#1e3a5f' } },
  { id: 'Implemented', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'How much content,\nhow messy?', category: 'question', branch: 'data-grounding' } },
  { id: 'FileSearch', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Agent Service File Search\nUp to 10,000 files', description: 'Up to 10,000 files per vector store, 512 MB per file, one vector store per agent. File search has charges beyond model tokens.', category: 'recommendation', branch: 'data-grounding', color: '#1e3a5f' } },
  { id: 'Search', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Azure AI Search\nHybrid and vector index', description: 'You own chunking, indexers, skillsets, and ACLs. Vector search uses HNSW or exhaustive KNN. Dedicated tiers bill per search unit.', category: 'recommendation', branch: 'data-grounding', color: '#1e3a5f' } },
  { id: 'ContentUnderstanding', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Content Understanding\nwith AI Search', description: 'The service is GA, and the AI Search skill is GA in the 2026-04-01 REST API.', category: 'recommendation', branch: 'data-grounding', color: '#1e4d6e' } },
  { id: 'CUPreview', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Semantic chunking, image\ndescriptions, agentic mode', description: 'Semantic chunking and image descriptions need Search 2026-05-01-preview. Agentic mode needs Content Understanding 2026-06-01-preview.', category: 'reference', branch: 'data-grounding', status: 'preview' } },
  { id: 'FoundryIQ', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Foundry IQ knowledge base\nSee IQ Layer Selection', description: 'Query planning, shared knowledge bases, and remote sources are validated once, in IQ Layer Selection.', category: 'linkout', branch: 'data-grounding', docsUrl: `${BASE}/visual-framework#iq-layer-selection` } },
  { id: 'Managed', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Managed context layers\nWork IQ, Fabric IQ, Web IQ', description: 'Work signals, business numbers, and the live web are answered by managed layers, not by a store you choose. Status, billing, and consumer routes are validated once, in IQ Layer Selection.', category: 'linkout', branch: 'data-grounding', docsUrl: `${BASE}/visual-framework#iq-layer-selection` } },

  // ── Records in a system of record ──
  { id: 'Rows', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Must the answer\nbe live?', category: 'question', branch: 'vector-db' } },
  { id: 'Live', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Call the API or MCP tool\nNo copy to keep fresh', description: 'Reach third-party systems of record in place, over MCP or a federated connector, before you copy them into a Microsoft store.', category: 'recommendation', branch: 'vector-db', color: '#1e3a5f' } },
  { id: 'VecDB', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Which engine\nalready holds it?', category: 'question', branch: 'vector-db' } },
  { id: 'Postgres', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'PostgreSQL with pgvector', category: 'recommendation', branch: 'vector-db', color: '#1e3a5f' } },
  { id: 'Cosmos', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Cosmos DB vector search\nflat, quantizedFlat, DiskANN', description: 'flat is exact kNN (up to 505 dimensions). quantizedFlat and diskANN allow up to 4,096 dimensions and need at least 1,000 vectors, otherwise a full scan runs. Enable the EnableNoSQLVectorSearch capability first. The docs state no GA date.', category: 'recommendation', branch: 'vector-db', status: 'unstated', color: '#1e3a5f' } },
  { id: 'SQLGA', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'VECTOR_SEARCH, vector index\nAzure SQL, SQL in Fabric,\nSQL MI Always-up-to-date', description: 'GA on Azure SQL Database, SQL database in Fabric, and SQL Managed Instance with the Always-up-to-date update policy. TOP_N is deprecated; use SELECT TOP (N) WITH APPROXIMATE.', category: 'recommendation', branch: 'vector-db', color: '#1e3a5f' } },
  { id: 'SQLPreview', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'SQL Server 2025 or MI on\nthe 2025 update policy', description: 'Vector indexes and VECTOR_SEARCH are Preview here and need the PREVIEW_FEATURES database scoped configuration.', category: 'recommendation', branch: 'vector-db', status: 'preview', color: '#1e3a5f' } },
];

const edges: Edge<EdgeData>[] = [
  { id: 'e-start-shape', source: 'Start', target: 'Shape', data: { variant: 'default' } },

  // What must the agent retrieve?
  { id: 'e-shape-docs', source: 'Shape', target: 'Docs', label: 'Documents\nand files', data: { variant: 'default' } },
  { id: 'e-shape-rows', source: 'Shape', target: 'Rows', label: 'Records in a\nsystem of record', data: { variant: 'default' } },
  { id: 'e-shape-managed', source: 'Shape', target: 'Managed', label: 'Work signals, numbers,\nor the live web', data: { variant: 'default' } },

  // Trust boundary
  { id: 'e-docs-inherited', source: 'Docs', target: 'Inherited', label: 'Employees, content\nin Microsoft 365', data: { variant: 'default' } },
  { id: 'e-docs-external', source: 'Docs', target: 'External', label: 'Employees, plus a few\noutside sources', data: { variant: 'default' } },
  { id: 'e-docs-implemented', source: 'Docs', target: 'Implemented', label: 'Content outside M365,\nor customers ask', data: { variant: 'default' } },

  // Implemented permissions: scale and messiness
  { id: 'e-impl-filesearch', source: 'Implemented', target: 'FileSearch', label: 'Under 10,000 files\nSimple setup', data: { variant: 'default' } },
  { id: 'e-impl-search', source: 'Implemented', target: 'Search', label: 'Production scale\nYour chunking and ACLs', data: { variant: 'default' } },
  { id: 'e-impl-content', source: 'Implemented', target: 'ContentUnderstanding', label: 'Scans, images,\naudio, video', data: { variant: 'default' } },
  { id: 'e-content-preview', source: 'ContentUnderstanding', target: 'CUPreview', data: { variant: 'default' } },
  { id: 'e-search-foundryiq', source: 'Search', target: 'FoundryIQ', label: 'Shared knowledge base\nor query planning', data: { variant: 'default' } },

  // Records
  { id: 'e-rows-live', source: 'Rows', target: 'Live', label: 'Yes, current state\nof one record', data: { variant: 'default' } },
  { id: 'e-rows-vecdb', source: 'Rows', target: 'VecDB', label: 'No, find similar\nrecords beside the data', data: { variant: 'default' } },
  { id: 'e-vec-pg', source: 'VecDB', target: 'Postgres', label: 'Relational, open source', data: { variant: 'default' } },
  { id: 'e-vec-cosmos', source: 'VecDB', target: 'Cosmos', label: 'JSON at global scale', data: { variant: 'default' } },
  { id: 'e-vec-sqlga', source: 'VecDB', target: 'SQLGA', label: 'SQL on Azure or Fabric', data: { variant: 'default' } },
  { id: 'e-vec-sqlpreview', source: 'VecDB', target: 'SQLPreview', label: 'SQL Server 2025', data: { variant: 'default' } },
];

export const dataGroundingFlow: FlowDefinition = {
  title: 'Data Grounding Decision',
  description: 'Decide who may see the answer, then which store or engine retrieves it. Work signals, business numbers, and the live web hand off to IQ Layer Selection.',
  frameworkRef: 'Phase 2: Q3, Data grounding pattern',
  docsSection: '/docs/visual-framework#data-grounding-decision',
  nodes,
  edges,
};

