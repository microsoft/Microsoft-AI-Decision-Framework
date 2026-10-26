import type { Node, Edge } from '@xyflow/react';
import type { FlowDefinition, NodeData, EdgeData } from '../types';

const BASE = '/Microsoft-AI-Decision-Framework/docs';

const nodes: Node<NodeData>[] = [
  { id: 'Start', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'What knowledge\ndoes the agent need?', category: 'start', branch: 'overview' } },
  { id: 'Domain', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'What kind of\nanswer does it need?', category: 'question', branch: 'iq-layer' } },

  // Column 1: Foundry IQ
  { id: 'FIQ', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Foundry IQ\nCurated documents', description: 'Permissions are implemented: ACL sync, Purview labels, and Entra identity at query time. Knowledge bases sit on Azure AI Search.', category: 'recommendation', branch: 'iq-layer', color: '#1e3a5f' } },
  { id: 'FIQ_GA', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'GA\nKnowledge bases, minimal\nextractive retrieval', description: 'Agentic retrieval through the Search 2026-04-01 REST API, with knowledge source types not marked preview: search index, Azure Blob, OneLake, and Web.', category: 'reference', branch: 'iq-layer' } },
  { id: 'FIQ_Preview', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'LLM query planning,\nremote sources, portals', description: 'Search 2026-08-01-preview adds LLM query planning, answer synthesis, non-minimal reasoning effort, multi-turn, and remote sources (SharePoint, Work IQ, Fabric data agent, Fabric ontology, MCP server). The Foundry and Azure portals are preview-only for agentic retrieval.', category: 'reference', branch: 'iq-layer', status: 'preview' } },
  { id: 'License1', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Azure meters\nSearch units or CUs,\nplus model tokens', description: 'Dedicated tiers bill per search unit; Serverless (Preview) bills Compute Units and GB-month. Semantic ranker, agentic retrieval, and AI enrichment bill separately.', category: 'outcome', branch: 'iq-layer' } },

  // Column 2: Work IQ
  { id: 'WIQ', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Work IQ\nMail, meetings, chats', description: 'Permissions are inherited: Entra delegated authentication only, and app-only is not supported.', category: 'recommendation', branch: 'iq-layer', color: '#4c1d95' } },
  { id: 'WIQ_GA', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'GA\nWork IQ APIs and MCP', description: 'Chat, Context, Tools, and Workspaces APIs (GA per the Microsoft announcement for 2026-06-16). Work IQ MCP is GA per the Agent 365 tooling page. Do not start new work on the per-workload MCP servers (Mail, Calendar, Teams, and others); they are legacy.', category: 'reference', branch: 'iq-layer' } },
  { id: 'WIQ_Preview', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'retrieve tool, Copilot\nStudio, Foundry tool,\nBusiness Applications', description: 'The MCP retrieve tool, Work IQ in Copilot Studio, and Work IQ in Foundry are Preview. Business Applications in Work IQ is on by default for new environments from 2026-09-30 and for existing environments from November 2026 (EEA, EU, and government exceptions).', category: 'reference', branch: 'iq-layer', status: 'preview' } },
  { id: 'License2', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Copilot Credits\nAPI access independent\nof Copilot licensing', description: 'Usage-based: a fixed component for Tools and a variable one for Chat and Context. Custom and third-party agents are usage-billed even for licensed users. The Foundry quickstart still lists a Copilot license per calling user, so verify your surface.', category: 'outcome', branch: 'iq-layer' } },

  // Column 3: Fabric IQ
  { id: 'FBIQ', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Fabric IQ\nNumbers and entities', description: 'Permissions are inherited from Fabric: workspace roles, OneLake security, and row-level security.', category: 'recommendation', branch: 'iq-layer', color: '#7f1d1d' } },
  { id: 'FBIQ_GA', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'GA\nData agents, semantic\nmodels, Chat, Cowork,\nFabric IQ MCP', description: 'Fabric data agent (needs F2+ or P1+), Power BI semantic models, Power BI answers in Copilot Chat, the Fabric IQ plugin in Copilot Cowork, and Fabric IQ MCP are documented GA.', category: 'reference', branch: 'iq-layer' } },
  { id: 'FBIQ_Preview', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Ontology, graph, Ontology\nMCP, data agents consumed\nfrom other platforms', description: 'The IQ workload and ontology are Preview. Every documented route that consumes a data agent from another platform is Preview: Copilot Studio, Microsoft Copilot, and Foundry through the Fabric IQ (OneLake Catalog) tool. Responses can leave the Fabric compliance boundary or region.', category: 'reference', branch: 'iq-layer', status: 'preview' } },
  { id: 'FBIQ_Retiring', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Foundry Fabric tool\nRetires 2026-11-06', description: 'The Foundry Microsoft Fabric tool for data agents stops being supported on 2026-11-06. The replacement, the Fabric IQ (OneLake Catalog) tool, is Preview. Remove this node after the date.', category: 'warning', branch: 'iq-layer', status: 'deprecated' } },
  { id: 'License3', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Fabric capacity F2+\nChat, Cowork: Copilot\nlicensing', description: 'Data agents and ontology need F2+ or P1+ capacity. Power BI answers in Copilot Chat and the Cowork plugin need Microsoft 365 Copilot licensing instead; Cowork adds usage-based billing.', category: 'outcome', branch: 'iq-layer' } },

  // Column 4: Web IQ
  { id: 'WEBIQ', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Web IQ\nFresh public web', description: 'Limited Access (waitlist; access is subject to intended use, Azure account history, and other terms).', category: 'recommendation', branch: 'iq-layer', status: 'limited', color: '#0e5a6f' } },
  { id: 'WEBIQ_Alt', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'No access yet?\nFoundry web search tool\nor Foundry IQ Web source', description: 'The Foundry web search tool uses Grounding with Bing Search; the Data Protection Addendum does not apply to that path and data leaves compliance and geographic boundaries. The page states no GA or preview status.', category: 'reference', branch: 'iq-layer' } },
  { id: 'License4', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Limited Access terms\nBing paths are metered', category: 'outcome', branch: 'iq-layer' } },

  // Exits
  { id: 'Rows', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Look up one record\nNot an IQ layer', description: 'Operational records are reached through an API, an MCP tool, or database vector search. See Data Grounding Decision.', category: 'linkout', branch: 'iq-layer', docsUrl: `${BASE}/visual-framework#data-grounding-decision` } },
  { id: 'Combine', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Combine layers\nEach layer is its own tool\nThe meters add up', category: 'outcome', branch: 'iq-layer', color: '#064e3b' } },
];

const edges: Edge<EdgeData>[] = [
  { id: 'e-start', source: 'Start', target: 'Domain', data: { variant: 'default' } },

  // Fan out: Domain -> layers and exits
  { id: 'e-d-fiq', source: 'Domain', target: 'FIQ', label: 'What does our\npolicy say?', data: { variant: 'default' } },
  { id: 'e-d-wiq', source: 'Domain', target: 'WIQ', label: 'Who decided what,\nand when?', data: { variant: 'default' } },
  { id: 'e-d-fbiq', source: 'Domain', target: 'FBIQ', label: 'What do the numbers\nand entities say?', data: { variant: 'default' } },
  { id: 'e-d-webiq', source: 'Domain', target: 'WEBIQ', label: 'What is true in the\nworld right now?', data: { variant: 'default' } },
  { id: 'e-d-rows', source: 'Domain', target: 'Rows', label: 'Look up one record', data: { variant: 'default' } },
  { id: 'e-d-combine', source: 'Domain', target: 'Combine', label: 'More than one kind', data: { variant: 'default' } },

  // Column 1: Foundry IQ
  { id: 'e-fiq-ga', source: 'FIQ', target: 'FIQ_GA', data: { variant: 'default' } },
  { id: 'e-fiqga-prev', source: 'FIQ_GA', target: 'FIQ_Preview', data: { variant: 'default' } },
  { id: 'e-fiqprev-lic', source: 'FIQ_Preview', target: 'License1', data: { variant: 'default' } },

  // Column 2: Work IQ
  { id: 'e-wiq-ga', source: 'WIQ', target: 'WIQ_GA', data: { variant: 'default' } },
  { id: 'e-wiqga-prev', source: 'WIQ_GA', target: 'WIQ_Preview', data: { variant: 'default' } },
  { id: 'e-wiqprev-lic', source: 'WIQ_Preview', target: 'License2', data: { variant: 'default' } },

  // Column 3: Fabric IQ
  { id: 'e-fbiq-ga', source: 'FBIQ', target: 'FBIQ_GA', data: { variant: 'default' } },
  { id: 'e-fbiqga-prev', source: 'FBIQ_GA', target: 'FBIQ_Preview', data: { variant: 'default' } },
  { id: 'e-fbiqprev-ret', source: 'FBIQ_Preview', target: 'FBIQ_Retiring', data: { variant: 'default' } },
  { id: 'e-fbiqprev-lic', source: 'FBIQ_Preview', target: 'License3', data: { variant: 'default' } },

  // Column 4: Web IQ
  { id: 'e-webiq-alt', source: 'WEBIQ', target: 'WEBIQ_Alt', data: { variant: 'default' } },
  { id: 'e-webiqalt-lic', source: 'WEBIQ_Alt', target: 'License4', data: { variant: 'default' } },
];

export const iqLayerFlow: FlowDefinition = {
  title: 'IQ Layer Selection',
  description: 'Choose the Microsoft IQ layer by the shape of the question: Foundry IQ, Work IQ, Fabric IQ, or Web IQ. Record lookups hand off to Data Grounding Decision.',
  frameworkRef: 'Microsoft AI Stack: Microsoft IQ',
  docsSection: '/docs/visual-framework#iq-layer-selection',
  nodes,
  edges,
};

