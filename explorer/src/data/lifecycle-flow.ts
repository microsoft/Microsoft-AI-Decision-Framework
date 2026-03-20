import type { Node, Edge } from '@xyflow/react';
import type { FlowDefinition, NodeData, EdgeData } from '../types';

const nodes: Node<NodeData>[] = [
  { id: 'Start', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Start: Pre-Flight Check', category: 'start', branch: 'overview' } },
  { id: 'Q0', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Technology status?', category: 'question', branch: 'lifecycle' } },
  { id: 'GA_Path', position: { x: 0, y: 0 }, type: 'decision', data: { label: '✅ Production-safe', category: 'decision', branch: 'lifecycle', color: '#064e3b' } },
  { id: 'Preview_Path', position: { x: 0, y: 0 }, type: 'decision', data: { label: '⚠️ Plan for change', category: 'decision', branch: 'lifecycle', color: '#78350f' } },
  { id: 'Dep_Path', position: { x: 0, y: 0 }, type: 'decision', data: { label: '🚫 Identify successor', category: 'decision', branch: 'lifecycle', color: '#7f1d1d' } },
  { id: 'Timeline', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Retirement date\nwithin horizon?', category: 'question', branch: 'lifecycle' } },
  { id: 'Successor', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Successor\nidentified?', category: 'question', branch: 'lifecycle' } },
  { id: 'Proceed', position: { x: 0, y: 0 }, type: 'decision', data: { label: '✅ Proceed to\nDecision Framework', category: 'outcome', branch: 'lifecycle' } },
  { id: 'Urgency', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Go-live BEFORE\ndeadline?', category: 'question', branch: 'lifecycle' } },
  { id: 'Migrate', position: { x: 0, y: 0 }, type: 'decision', data: { label: '⚠️ Build on successor\nor migrate first', category: 'warning', branch: 'lifecycle' } },
  { id: 'Block', position: { x: 0, y: 0 }, type: 'decision', data: { label: '🚫 Block. Research\nsuccessor path', category: 'warning', branch: 'lifecycle', color: '#7f1d1d' } },
];

const edges: Edge<EdgeData>[] = [
  { id: 'e-start', source: 'Start', target: 'Q0', data: { variant: 'default' } },
  { id: 'e-q0-ga', source: 'Q0', target: 'GA_Path', label: 'GA', data: { variant: 'default' } },
  { id: 'e-q0-preview', source: 'Q0', target: 'Preview_Path', label: 'Preview / RC', data: { variant: 'default' } },
  { id: 'e-q0-dep', source: 'Q0', target: 'Dep_Path', label: 'Deprecated', data: { variant: 'default' } },
  { id: 'e-ga-time', source: 'GA_Path', target: 'Timeline', data: { variant: 'default' } },
  { id: 'e-preview-time', source: 'Preview_Path', target: 'Timeline', data: { variant: 'default' } },
  { id: 'e-dep-succ', source: 'Dep_Path', target: 'Successor', data: { variant: 'default' } },
  { id: 'e-time-none', source: 'Timeline', target: 'Proceed', label: 'No deadline', data: { variant: 'default' } },
  { id: 'e-time-exists', source: 'Timeline', target: 'Urgency', label: 'Deadline exists', data: { variant: 'default' } },
  { id: 'e-urg-yes', source: 'Urgency', target: 'Proceed', label: 'Yes', data: { variant: 'yes' } },
  { id: 'e-urg-no', source: 'Urgency', target: 'Migrate', label: 'No', data: { variant: 'no' } },
  { id: 'e-succ-yes', source: 'Successor', target: 'Migrate', label: 'Yes', data: { variant: 'yes' } },
  { id: 'e-succ-no', source: 'Successor', target: 'Block', label: 'No', data: { variant: 'no' } },
  { id: 'e-mig-proceed', source: 'Migrate', target: 'Proceed', data: { variant: 'default' } },
];

export const lifecycleFlow: FlowDefinition = {
  title: 'Lifecycle Check',
  description: 'Pre-flight readiness gate for technology status and migration deadlines.',
  frameworkRef: 'Evaluation Criteria — Lifecycle & Operational Readiness',
  docsSection: '/docs/visual-framework#lifecycle-check',
  nodes,
  edges,
};
