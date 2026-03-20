import type { Node, Edge } from '@xyflow/react';
import type { FlowDefinition, NodeData, EdgeData } from '../types';

const nodes: Node<NodeData>[] = [
  { id: 'Start', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Start: Low-Code Agent', category: 'start', branch: 'overview' } },
  { id: 'Q1', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Need more\ncapability?', category: 'question', branch: 'upgrade' } },
  { id: 'Stay', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Copilot Studio\nStandard', category: 'recommendation', branch: 'upgrade', color: '#1e3a5f' } },
  { id: 'Q2', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'What kind of\ncapability?', category: 'question', branch: 'upgrade' } },
  { id: 'Path1', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Enhance\nBYO Model — Foundry', category: 'recommendation', branch: 'upgrade', status: 'preview', color: '#78350f' } },
  { id: 'Path2', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Extend\nHandoff to Agent Service', category: 'recommendation', branch: 'upgrade', status: 'preview', color: '#7f1d1d' } },
  { id: 'Path3', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Migrate\nM365 Agents SDK or Foundry', category: 'recommendation', branch: 'upgrade', color: '#4c1d95' } },
  { id: 'Result1', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Copilot Studio\n+ Specialized Model', category: 'outcome', branch: 'upgrade' } },
  { id: 'Result2', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Copilot Studio UI\n+ Azure Agent Brain', category: 'outcome', branch: 'upgrade' } },
  { id: 'Result3', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Full Pro-Code\nSolution', category: 'outcome', branch: 'upgrade' } },
];

const edges: Edge<EdgeData>[] = [
  { id: 'e-start', source: 'Start', target: 'Q1', data: { variant: 'default' } },
  { id: 'e-q1-no', source: 'Q1', target: 'Stay', label: 'No', data: { variant: 'no' } },
  { id: 'e-q1-yes', source: 'Q1', target: 'Q2', label: 'Yes', data: { variant: 'yes' } },
  { id: 'e-q2-p1', source: 'Q2', target: 'Path1', label: 'Better Reasoning/LLM', data: { variant: 'default' } },
  { id: 'e-q2-p2', source: 'Q2', target: 'Path2', label: 'Complex Orchestration', data: { variant: 'default' } },
  { id: 'e-q2-p3', source: 'Q2', target: 'Path3', label: 'Custom UI/Protocol', data: { variant: 'default' } },
  { id: 'e-p1-r1', source: 'Path1', target: 'Result1', data: { variant: 'default' } },
  { id: 'e-p2-r2', source: 'Path2', target: 'Result2', data: { variant: 'default' } },
  { id: 'e-p3-r3', source: 'Path3', target: 'Result3', data: { variant: 'default' } },
];

export const upgradeFlow: FlowDefinition = {
  title: 'Upgrade Paths',
  description: 'Progressive enhancement from low-code to pro-code.',
  frameworkRef: 'Implementation Patterns — Progressive Enhancement',
  docsSection: '/docs/visual-framework#upgrade-paths',
  nodes,
  edges,
};
