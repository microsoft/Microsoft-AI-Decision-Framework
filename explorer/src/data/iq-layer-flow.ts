import type { Node, Edge } from '@xyflow/react';
import type { FlowDefinition, NodeData, EdgeData } from '../types';

const nodes: Node<NodeData>[] = [
  { id: 'Start', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'What knowledge\ndoes the agent need?', category: 'start', branch: 'overview' } },
  { id: 'Domain', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Primary data domain?', category: 'question', branch: 'iq-layer' } },
  { id: 'FIQ', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Foundry IQ', category: 'recommendation', branch: 'iq-layer', status: 'preview', color: '#1e3a5f' } },
  { id: 'WIQ', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Work IQ', category: 'recommendation', branch: 'iq-layer', status: 'preview', color: '#4c1d95' } },
  { id: 'FBIQ', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Fabric IQ', category: 'recommendation', branch: 'iq-layer', status: 'preview', color: '#7f1d1d' } },
  { id: 'Combine', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Layers are standalone — combine\n2 or 3 for multi-domain agents', category: 'reference', branch: 'iq-layer', color: '#064e3b' } },
  { id: 'FIQ_Detail', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Azure AI Search\nknowledge bases via MCP', category: 'reference', branch: 'iq-layer' } },
  { id: 'WIQ_Detail', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'MCP server catalog\nMail, Calendar, Teams', category: 'reference', branch: 'iq-layer' } },
  { id: 'FBIQ_Detail', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Fabric Data Agents\nOneLake, Power BI', category: 'reference', branch: 'iq-layer' } },
  { id: 'License1', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Azure consumption', category: 'outcome', branch: 'iq-layer' } },
  { id: 'License2', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'M365 Copilot license', category: 'outcome', branch: 'iq-layer' } },
  { id: 'License3', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Fabric capacity F2+', category: 'outcome', branch: 'iq-layer' } },
];

const edges: Edge<EdgeData>[] = [
  { id: 'e-start', source: 'Start', target: 'Domain', data: { variant: 'default' } },
  // Domain → IQ choices
  { id: 'e-d-fiq', source: 'Domain', target: 'FIQ', label: 'Enterprise docs, files', data: { variant: 'default' } },
  { id: 'e-d-wiq', source: 'Domain', target: 'WIQ', label: 'M365 collaboration', data: { variant: 'default' } },
  { id: 'e-d-fbiq', source: 'Domain', target: 'FBIQ', label: 'Analytics, dashboards', data: { variant: 'default' } },
  // All three IQ choices → combined node (sits between IQ and details)
  { id: 'e-fiq-comb', source: 'FIQ', target: 'Combine', data: { variant: 'default' } },
  { id: 'e-wiq-comb', source: 'WIQ', target: 'Combine', data: { variant: 'default' } },
  { id: 'e-fbiq-comb', source: 'FBIQ', target: 'Combine', data: { variant: 'default' } },
  // Combined → Detail descriptions
  { id: 'e-comb-fiq', source: 'Combine', target: 'FIQ_Detail', data: { variant: 'default' } },
  { id: 'e-comb-wiq', source: 'Combine', target: 'WIQ_Detail', data: { variant: 'default' } },
  { id: 'e-comb-fbiq', source: 'Combine', target: 'FBIQ_Detail', data: { variant: 'default' } },
  // Details → Licensing
  { id: 'e-fiqd-lic', source: 'FIQ_Detail', target: 'License1', data: { variant: 'default' } },
  { id: 'e-wiqd-lic', source: 'WIQ_Detail', target: 'License2', data: { variant: 'default' } },
  { id: 'e-fbiqd-lic', source: 'FBIQ_Detail', target: 'License3', data: { variant: 'default' } },
];

export const iqLayerFlow: FlowDefinition = {
  title: 'IQ Layer Selection',
  description: 'Knowledge grounding domain selection across Foundry IQ, Work IQ, and Fabric IQ.',
  frameworkRef: 'Capability Model — The Three Libraries',
  docsSection: '/docs/visual-framework#iq-layer-selection',
  nodes,
  edges,
};
