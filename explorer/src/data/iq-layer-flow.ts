import type { Node, Edge } from '@xyflow/react';
import type { FlowDefinition, NodeData, EdgeData } from '../types';

const nodes: Node<NodeData>[] = [
  { id: 'Start', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'What knowledge\ndoes the agent need?', category: 'start', branch: 'overview' } },
  { id: 'Domain', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Primary data domain?', category: 'question', branch: 'iq-layer' } },
  // Column 1: Foundry IQ
  { id: 'FIQ', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Foundry IQ', description: 'Partial GA: Azure AI Search engine is GA, but knowledge base and portal features remain Preview', category: 'recommendation', branch: 'iq-layer', status: 'preview', color: '#1e3a5f' } },
  { id: 'FIQ_Detail', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Azure AI Search\nknowledge bases via MCP', category: 'reference', branch: 'iq-layer' } },
  { id: 'License1', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Azure consumption', category: 'outcome', branch: 'iq-layer' } },
  // Column 2: Work IQ
  { id: 'WIQ', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Work IQ', category: 'recommendation', branch: 'iq-layer', status: 'preview', color: '#4c1d95' } },
  { id: 'WIQ_Detail', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'MCP server catalog\nMail, Calendar, Teams', category: 'reference', branch: 'iq-layer' } },
  { id: 'License2', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'M365 Copilot license', category: 'outcome', branch: 'iq-layer' } },
  // Column 3: Fabric IQ
  { id: 'FBIQ', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Fabric IQ', category: 'recommendation', branch: 'iq-layer', status: 'preview', color: '#7f1d1d' } },
  { id: 'FBIQ_Detail', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Fabric Data Agents\nOneLake, Power BI', category: 'reference', branch: 'iq-layer' } },
  { id: 'License3', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Fabric capacity F2+', category: 'outcome', branch: 'iq-layer' } },
  // Column 4: Web IQ
  { id: 'WEBIQ', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Web IQ', description: 'Limited Access program; application required', category: 'recommendation', branch: 'iq-layer', status: 'experimental', color: '#0e5a6f' } },
  { id: 'WEBIQ_Detail', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Grounding with Bing\nreal-time web search', category: 'reference', branch: 'iq-layer' } },
  { id: 'License4', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Grounding API usage;\nLimited Access', category: 'outcome', branch: 'iq-layer' } },
  // Bottom convergence
  { id: 'Combine', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Need multiple domains?\nCombine any subset of layers', category: 'outcome', branch: 'iq-layer', color: '#064e3b' } },
];

const edges: Edge<EdgeData>[] = [
  { id: 'e-start', source: 'Start', target: 'Domain', data: { variant: 'default' } },
  // Fan out: Domain -> four IQ choices
  { id: 'e-d-fiq', source: 'Domain', target: 'FIQ', label: 'Enterprise docs, files', data: { variant: 'default' } },
  { id: 'e-d-wiq', source: 'Domain', target: 'WIQ', label: 'M365 collaboration', data: { variant: 'default' } },
  { id: 'e-d-fbiq', source: 'Domain', target: 'FBIQ', label: 'Analytics, dashboards', data: { variant: 'default' } },
  { id: 'e-d-webiq', source: 'Domain', target: 'WEBIQ', label: 'Public web, real-time info', data: { variant: 'default' } },
  // Column 1: Foundry IQ -> Detail -> License
  { id: 'e-fiq-detail', source: 'FIQ', target: 'FIQ_Detail', data: { variant: 'default' } },
  { id: 'e-fiqd-lic', source: 'FIQ_Detail', target: 'License1', data: { variant: 'default' } },
  // Column 2: Work IQ -> Detail -> License
  { id: 'e-wiq-detail', source: 'WIQ', target: 'WIQ_Detail', data: { variant: 'default' } },
  { id: 'e-wiqd-lic', source: 'WIQ_Detail', target: 'License2', data: { variant: 'default' } },
  // Column 3: Fabric IQ -> Detail -> License
  { id: 'e-fbiq-detail', source: 'FBIQ', target: 'FBIQ_Detail', data: { variant: 'default' } },
  { id: 'e-fbiqd-lic', source: 'FBIQ_Detail', target: 'License3', data: { variant: 'default' } },
  // Column 4: Web IQ -> Detail -> License
  { id: 'e-webiq-detail', source: 'WEBIQ', target: 'WEBIQ_Detail', data: { variant: 'default' } },
  { id: 'e-webiqd-lic', source: 'WEBIQ_Detail', target: 'License4', data: { variant: 'default' } },
  // Fan in: all four licenses -> Combine at bottom
  { id: 'e-lic1-comb', source: 'License1', target: 'Combine', data: { variant: 'default' } },
  { id: 'e-lic2-comb', source: 'License2', target: 'Combine', data: { variant: 'default' } },
  { id: 'e-lic3-comb', source: 'License3', target: 'Combine', data: { variant: 'default' } },
  { id: 'e-lic4-comb', source: 'License4', target: 'Combine', data: { variant: 'default' } },
];

export const iqLayerFlow: FlowDefinition = {
  title: 'IQ Layer Selection',
  description: 'Knowledge grounding domain selection across the four Microsoft IQ capabilities: Foundry IQ, Work IQ, Fabric IQ, and Web IQ.',
  frameworkRef: 'Capability Model: Microsoft IQ',
  docsSection: '/docs/visual-framework#iq-layer-selection',
  nodes,
  edges,
};
