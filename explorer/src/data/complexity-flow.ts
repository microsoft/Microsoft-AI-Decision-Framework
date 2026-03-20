import type { Node, Edge } from '@xyflow/react';
import type { FlowDefinition, NodeData, EdgeData } from '../types';

const nodes: Node<NodeData>[] = [
  { id: 'Start', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Assess Use Case', category: 'start', branch: 'overview' } },
  { id: 'Q1', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'How many\ndata sources?', category: 'question', branch: 'complexity' } },
  { id: 'Simple', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Low Complexity', category: 'decision', branch: 'complexity', color: '#064e3b' } },
  { id: 'Q2', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Workflow\ncomplexity?', category: 'question', branch: 'complexity' } },
  { id: 'Complex', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'High Complexity', category: 'decision', branch: 'complexity', color: '#7f1d1d' } },
  { id: 'Medium', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Medium Complexity', category: 'decision', branch: 'complexity', color: '#78350f' } },
  { id: 'S_Tech', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Skills?', category: 'question', branch: 'complexity' } },
  { id: 'S_M365', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'M365 Copilot with Graph', category: 'recommendation', branch: 'complexity', color: '#1e3a5f' } },
  { id: 'S_Studio', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Copilot Studio', category: 'recommendation', branch: 'complexity', color: '#1e3a5f' } },
  { id: 'M_Tech', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Skills?', category: 'question', branch: 'complexity' } },
  { id: 'M_Studio', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Copilot Studio', category: 'recommendation', branch: 'complexity', color: '#1e3a5f' } },
  { id: 'M_SDK', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Studio + Custom Actions', category: 'recommendation', branch: 'complexity', color: '#4c1d95' } },
  { id: 'C_Tech', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Need custom\nmodels?', category: 'question', branch: 'complexity' } },
  { id: 'C_SDK', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'M365 Agents SDK', category: 'recommendation', branch: 'complexity', color: '#4c1d95' } },
  { id: 'C_Foundry', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Microsoft Foundry Azure', category: 'recommendation', branch: 'complexity', color: '#7f1d1d' } },
  { id: 'Timeline1', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Days to deploy', category: 'outcome', branch: 'complexity' } },
  { id: 'Timeline2', position: { x: 0, y: 0 }, type: 'decision', data: { label: '1 to 2 weeks', category: 'outcome', branch: 'complexity' } },
  { id: 'Timeline3', position: { x: 0, y: 0 }, type: 'decision', data: { label: '2 to 4 weeks', category: 'outcome', branch: 'complexity' } },
  { id: 'Timeline4', position: { x: 0, y: 0 }, type: 'decision', data: { label: '1 to 2 months', category: 'outcome', branch: 'complexity' } },
  { id: 'Timeline5', position: { x: 0, y: 0 }, type: 'decision', data: { label: '2 to 3 months', category: 'outcome', branch: 'complexity' } },
  { id: 'Timeline6', position: { x: 0, y: 0 }, type: 'decision', data: { label: '3 to 6 months', category: 'outcome', branch: 'complexity' } },
];

const edges: Edge<EdgeData>[] = [
  { id: 'e-start', source: 'Start', target: 'Q1', data: { variant: 'default' } },
  { id: 'e-q1-1', source: 'Q1', target: 'Simple', label: '1', data: { variant: 'default' } },
  { id: 'e-q1-23', source: 'Q1', target: 'Q2', label: '2 to 3', data: { variant: 'default' } },
  { id: 'e-q1-4', source: 'Q1', target: 'Complex', label: '4 or more', data: { variant: 'default' } },
  { id: 'e-q2-lin', source: 'Q2', target: 'Medium', label: 'Linear', data: { variant: 'default' } },
  { id: 'e-q2-branch', source: 'Q2', target: 'Complex', label: 'Branching', data: { variant: 'default' } },
  { id: 'e-simple-tech', source: 'Simple', target: 'S_Tech', data: { variant: 'default' } },
  { id: 'e-st-makers', source: 'S_Tech', target: 'S_M365', label: 'Makers', data: { variant: 'default' } },
  { id: 'e-st-devs', source: 'S_Tech', target: 'S_Studio', label: 'Devs', data: { variant: 'default' } },
  { id: 'e-med-tech', source: 'Medium', target: 'M_Tech', data: { variant: 'default' } },
  { id: 'e-mt-makers', source: 'M_Tech', target: 'M_Studio', label: 'Makers', data: { variant: 'default' } },
  { id: 'e-mt-devs', source: 'M_Tech', target: 'M_SDK', label: 'Devs', data: { variant: 'default' } },
  { id: 'e-complex-tech', source: 'Complex', target: 'C_Tech', data: { variant: 'default' } },
  { id: 'e-ct-no', source: 'C_Tech', target: 'C_SDK', label: 'No', data: { variant: 'no' } },
  { id: 'e-ct-yes', source: 'C_Tech', target: 'C_Foundry', label: 'Yes', data: { variant: 'yes' } },
  { id: 'e-sm-t1', source: 'S_M365', target: 'Timeline1', data: { variant: 'default' } },
  { id: 'e-ss-t2', source: 'S_Studio', target: 'Timeline2', data: { variant: 'default' } },
  { id: 'e-ms-t3', source: 'M_Studio', target: 'Timeline3', data: { variant: 'default' } },
  { id: 'e-msdk-t4', source: 'M_SDK', target: 'Timeline4', data: { variant: 'default' } },
  { id: 'e-csdk-t5', source: 'C_SDK', target: 'Timeline5', data: { variant: 'default' } },
  { id: 'e-cf-t6', source: 'C_Foundry', target: 'Timeline6', data: { variant: 'default' } },
];

export const complexityFlow: FlowDefinition = {
  title: 'Complexity Assessment',
  description: 'Technical complexity evaluation for effort estimation.',
  frameworkRef: 'Evaluation Criteria — Complexity',
  docsSection: '/docs/visual-framework#complexity-assessment-flow',
  nodes,
  edges,
};
