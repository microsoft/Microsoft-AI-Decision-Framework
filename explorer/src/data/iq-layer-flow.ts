import type { Node, Edge } from '@xyflow/react';
import type { FlowDefinition, NodeData, EdgeData } from '../types';

const nodes: Node<NodeData>[] = [
  { id: 'Start', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'What knowledge\ndoes the agent need?', category: 'start', branch: 'overview' } },
  { id: 'Domain', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Primary data domain?', category: 'question', branch: 'iq-layer' } },
  { id: 'FIQ', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Foundry IQ', category: 'recommendation', branch: 'iq-layer', status: 'preview', color: '#1e3a5f' } },
  { id: 'WIQ', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Work IQ', category: 'recommendation', branch: 'iq-layer', status: 'preview', color: '#4c1d95' } },
  { id: 'FBIQ', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Fabric IQ', category: 'recommendation', branch: 'iq-layer', status: 'preview', color: '#7f1d1d' } },
  { id: 'Multi', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Combine IQ layers', category: 'decision', branch: 'iq-layer', color: '#064e3b' } },
  { id: 'FIQ_Detail', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Azure AI Search\nknowledge bases via MCP', category: 'reference', branch: 'iq-layer' } },
  { id: 'WIQ_Detail', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'MCP server catalog\nMail, Calendar, Teams', category: 'reference', branch: 'iq-layer' } },
  { id: 'FBIQ_Detail', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Fabric Data Agents\nOneLake, Power BI', category: 'reference', branch: 'iq-layer' } },
  { id: 'Combine', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Each IQ layer is standalone.\nAgents can query 2 or 3', category: 'reference', branch: 'iq-layer', color: '#064e3b' } },
  { id: 'License1', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Azure consumption', category: 'outcome', branch: 'iq-layer' } },
  { id: 'License2', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'M365 Copilot license required', category: 'outcome', branch: 'iq-layer' } },
  { id: 'License3', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Fabric capacity F2+', category: 'outcome', branch: 'iq-layer' } },
];

const edges: Edge<EdgeData>[] = [
  { id: 'e-start', source: 'Start', target: 'Domain', data: { variant: 'default' } },
  // Domain → IQ choices
  { id: 'e-d-fiq', source: 'Domain', target: 'FIQ', label: 'Enterprise docs, files', data: { variant: 'default' } },
  { id: 'e-d-wiq', source: 'Domain', target: 'WIQ', label: 'M365 collaboration', data: { variant: 'default' } },
  { id: 'e-d-fbiq', source: 'Domain', target: 'FBIQ', label: 'Analytics, dashboards', data: { variant: 'default' } },
  { id: 'e-d-multi', source: 'Domain', target: 'Multi', label: 'Multiple domains', data: { variant: 'default' } },
  // IQ choices → Licensing (moved up)
  { id: 'e-fiq-lic', source: 'FIQ', target: 'License1', data: { variant: 'default' } },
  { id: 'e-wiq-lic', source: 'WIQ', target: 'License2', data: { variant: 'default' } },
  { id: 'e-fbiq-lic', source: 'FBIQ', target: 'License3', data: { variant: 'default' } },
  // Licensing → Detail descriptions
  { id: 'e-lic1-detail', source: 'License1', target: 'FIQ_Detail', data: { variant: 'default' } },
  { id: 'e-lic2-detail', source: 'License2', target: 'WIQ_Detail', data: { variant: 'default' } },
  { id: 'e-lic3-detail', source: 'License3', target: 'FBIQ_Detail', data: { variant: 'default' } },
  // Multiple domains → Combine (at bottom)
  { id: 'e-multi-combine', source: 'Multi', target: 'Combine', data: { variant: 'default' } },
  // Details also flow to Combine to show the connection
  { id: 'e-fiqd-combine', source: 'FIQ_Detail', target: 'Combine', data: { variant: 'default' } },
  { id: 'e-wiqd-combine', source: 'WIQ_Detail', target: 'Combine', data: { variant: 'default' } },
  { id: 'e-fbiqd-combine', source: 'FBIQ_Detail', target: 'Combine', data: { variant: 'default' } },
];

export const iqLayerFlow: FlowDefinition = {
  title: 'IQ Layer Selection',
  description: 'Knowledge grounding domain selection across Foundry IQ, Work IQ, and Fabric IQ.',
  frameworkRef: 'Capability Model — The Three Libraries',
  docsSection: '/docs/visual-framework#iq-layer-selection',
  nodes,
  edges,
};
