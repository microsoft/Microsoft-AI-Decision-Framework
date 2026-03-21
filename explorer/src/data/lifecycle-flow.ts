import type { Node, Edge } from '@xyflow/react';
import type { FlowDefinition, NodeData, EdgeData } from '../types';

const nodes: Node<NodeData>[] = [
  { id: 'Start', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Pre-Flight Check', category: 'start', branch: 'overview' } },
  { id: 'Q0', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Technology status?', category: 'question', branch: 'lifecycle' } },

  // Column 1: GA
  { id: 'GA_Path', position: { x: 0, y: 0 }, type: 'decision', data: { label: '✅ Production-safe', category: 'decision', branch: 'lifecycle', color: '#064e3b' } },
  { id: 'GA_Deadline', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Retirement date\nwithin horizon?', category: 'question', branch: 'lifecycle' } },
  { id: 'GA_Proceed', position: { x: 0, y: 0 }, type: 'decision', data: { label: '✅ Proceed to\nDecision Framework', category: 'outcome', branch: 'lifecycle' } },

  // Column 2: Preview / RC
  { id: 'Preview_Path', position: { x: 0, y: 0 }, type: 'decision', data: { label: '⚠️ Plan for change', category: 'decision', branch: 'lifecycle', color: '#78350f' } },
  { id: 'Preview_Deadline', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Go-live BEFORE\ndeadline?', category: 'question', branch: 'lifecycle' } },
  { id: 'Preview_Proceed', position: { x: 0, y: 0 }, type: 'decision', data: { label: '✅ Proceed with\ncaution', category: 'outcome', branch: 'lifecycle' } },
  { id: 'Preview_Migrate', position: { x: 0, y: 0 }, type: 'decision', data: { label: '⚠️ Build on successor\nor migrate first', category: 'warning', branch: 'lifecycle' } },

  // Column 3: Deprecated
  { id: 'Dep_Path', position: { x: 0, y: 0 }, type: 'decision', data: { label: '🚫 Identify successor', category: 'decision', branch: 'lifecycle', color: '#7f1d1d' } },
  { id: 'Dep_Successor', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Successor\nidentified?', category: 'question', branch: 'lifecycle' } },
  { id: 'Dep_Migrate', position: { x: 0, y: 0 }, type: 'decision', data: { label: '⚠️ Migrate to\nsuccessor', category: 'warning', branch: 'lifecycle' } },
  { id: 'Dep_Block', position: { x: 0, y: 0 }, type: 'decision', data: { label: '🚫 Block — research\nsuccessor path', category: 'warning', branch: 'lifecycle', color: '#7f1d1d' } },
];

const edges: Edge<EdgeData>[] = [
  { id: 'e-start', source: 'Start', target: 'Q0', data: { variant: 'default' } },
  // Fan out: three status paths
  { id: 'e-q0-ga', source: 'Q0', target: 'GA_Path', label: 'GA', data: { variant: 'default' } },
  { id: 'e-q0-preview', source: 'Q0', target: 'Preview_Path', label: 'Preview / RC', data: { variant: 'default' } },
  { id: 'e-q0-dep', source: 'Q0', target: 'Dep_Path', label: 'Deprecated', data: { variant: 'default' } },

  // Column 1: GA → Deadline check → Proceed
  { id: 'e-ga-deadline', source: 'GA_Path', target: 'GA_Deadline', data: { variant: 'default' } },
  { id: 'e-gad-no', source: 'GA_Deadline', target: 'GA_Proceed', label: 'No deadline', data: { variant: 'default' } },

  // Column 2: Preview → Go-live check → Proceed or Migrate
  { id: 'e-preview-deadline', source: 'Preview_Path', target: 'Preview_Deadline', data: { variant: 'default' } },
  { id: 'e-pd-yes', source: 'Preview_Deadline', target: 'Preview_Proceed', label: 'Yes', data: { variant: 'yes' } },
  { id: 'e-pd-no', source: 'Preview_Deadline', target: 'Preview_Migrate', label: 'No', data: { variant: 'no' } },

  // Column 3: Deprecated → Successor check → Migrate or Block
  { id: 'e-dep-succ', source: 'Dep_Path', target: 'Dep_Successor', data: { variant: 'default' } },
  { id: 'e-ds-yes', source: 'Dep_Successor', target: 'Dep_Migrate', label: 'Yes', data: { variant: 'yes' } },
  { id: 'e-ds-no', source: 'Dep_Successor', target: 'Dep_Block', label: 'No', data: { variant: 'no' } },
];

export const lifecycleFlow: FlowDefinition = {
  title: 'Lifecycle Check',
  description: 'Pre-flight readiness gate for technology status and migration deadlines.',
  frameworkRef: 'Evaluation Criteria — Lifecycle & Operational Readiness',
  docsSection: '/docs/visual-framework#lifecycle-check',
  nodes,
  edges,
};
