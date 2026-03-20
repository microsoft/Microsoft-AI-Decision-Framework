import type { Node, Edge } from '@xyflow/react';
import type { FlowDefinition, NodeData, EdgeData } from '../types';

const nodes: Node<NodeData>[] = [
  { id: 'Start', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Governance Requirements', category: 'start', branch: 'overview' } },
  { id: 'Q1', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Data residency\nrequirement?', category: 'question', branch: 'governance' } },
  { id: 'R1', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'M365 Tenant Boundary', category: 'decision', branch: 'governance' } },
  { id: 'R2', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Azure Region Control', category: 'decision', branch: 'governance' } },
  { id: 'R3', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Flexible Residency', category: 'decision', branch: 'governance' } },
  { id: 'Q2', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Built-in DLP\nsufficient?', category: 'question', branch: 'governance' } },
  { id: 'G1', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'M365 Copilot\nM365 Boundary + DLP', category: 'outcome', branch: 'governance' } },
  { id: 'G2', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Copilot Studio\nPower Platform Governance', category: 'recommendation', branch: 'governance', color: '#1e3a5f' } },
  { id: 'Q3', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Network isolation?', category: 'question', branch: 'governance' } },
  { id: 'G3', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Microsoft Foundry Azure\nVNet + Private Endpoints', category: 'recommendation', branch: 'governance', color: '#1e3a5f' } },
  { id: 'G4', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'AI Agent Service\nFull Azure Governance', category: 'recommendation', branch: 'governance', color: '#1e3a5f' } },
  { id: 'G5', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'AI Builder\nPower Platform DLP', category: 'recommendation', branch: 'governance', color: '#78350f' } },
  { id: 'Q4', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Development model?', category: 'question', branch: 'governance' } },
  { id: 'G6', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Logic Apps Standard\nAzure RBAC + VNet', category: 'recommendation', branch: 'governance', color: '#1e3a5f' } },
  { id: 'G7', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'M365 Agents SDK\nCustom Auth + Hosting', category: 'recommendation', branch: 'governance', color: '#4c1d95' } },
  { id: 'G8', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Agent Framework\nHost inherited governance', category: 'recommendation', branch: 'governance', color: '#7f1d1d' } },
];

const edges: Edge<EdgeData>[] = [
  { id: 'e-start', source: 'Start', target: 'Q1', data: { variant: 'default' } },
  { id: 'e-q1-r1', source: 'Q1', target: 'R1', label: 'M365 tenant only', data: { variant: 'default' } },
  { id: 'e-q1-r2', source: 'Q1', target: 'R2', label: 'Azure region', data: { variant: 'default' } },
  { id: 'e-q1-r3', source: 'Q1', target: 'R3', label: 'Flexible', data: { variant: 'default' } },
  { id: 'e-r1-q2', source: 'R1', target: 'Q2', data: { variant: 'default' } },
  { id: 'e-q2-g1', source: 'Q2', target: 'G1', label: 'Yes, inherit M365', data: { variant: 'yes' } },
  { id: 'e-q2-g2', source: 'Q2', target: 'G2', label: 'Need custom agents', data: { variant: 'default' } },
  { id: 'e-r2-q3', source: 'R2', target: 'Q3', data: { variant: 'default' } },
  { id: 'e-q3-g3', source: 'Q3', target: 'G3', label: 'VNet + private endpoints', data: { variant: 'default' } },
  { id: 'e-q3-g4', source: 'Q3', target: 'G4', label: 'Managed runtime + VNet', data: { variant: 'default' } },
  { id: 'e-q3-g5', source: 'Q3', target: 'G5', label: 'Power Platform sufficient', data: { variant: 'default' } },
  { id: 'e-r3-q4', source: 'R3', target: 'Q4', data: { variant: 'default' } },
  { id: 'e-q4-g6', source: 'Q4', target: 'G6', label: 'Enterprise workflows', data: { variant: 'default' } },
  { id: 'e-q4-g7', source: 'Q4', target: 'G7', label: 'Multi-channel agents', data: { variant: 'default' } },
  { id: 'e-q4-g8', source: 'Q4', target: 'G8', label: 'Orchestration library', data: { variant: 'default' } },
];

export const governanceFlow: FlowDefinition = {
  title: 'Governance & Compliance',
  description: 'Security, compliance, and data residency decision paths.',
  frameworkRef: 'Evaluation Criteria — Governance',
  docsSection: '/docs/visual-framework#governance--compliance-path',
  nodes,
  edges,
};
