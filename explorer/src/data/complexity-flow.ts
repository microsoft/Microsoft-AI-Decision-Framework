import type { Node, Edge } from '@xyflow/react';
import type { FlowDefinition, NodeData, EdgeData } from '../types';

const BASE = '/Microsoft-AI-Decision-Framework/docs';

const nodes: Node<NodeData>[] = [
  { id: 'Start', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Assess Use Case', category: 'start', branch: 'overview' } },
  { id: 'Q1', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Does it change a\nsystem of record?', category: 'question', branch: 'complexity', description: 'The assist-to-execute line. Drafting, answering, and summarizing assist a person who owns the outcome. Updating a record, submitting a ticket, or moving money executes.' } },
  { id: 'Q2', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'One knowledge domain,\nlittle durable state?', category: 'question', branch: 'complexity', description: 'Source count is not a tier input. Many read-only sources change retrieval design, not the tier.' } },
  { id: 'Q3', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Steps, API calls and\napprovals fixed up front?', category: 'question', branch: 'complexity' } },
  { id: 'Q4', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Long-running, multi-agent\nor self-correcting?', category: 'question', branch: 'complexity' } },
  { id: 'T1', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Tier 1 Informational\nRead-only', category: 'decision', branch: 'complexity', color: '#064e3b', description: 'Evidence to demand: citation quality, access trimming, freshness, data boundary, failure behavior.' } },
  { id: 'T2', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Tier 2 Transactional\nDeterministic', category: 'decision', branch: 'complexity', color: '#78350f', description: 'Evidence to demand: idempotency, connector identity, rollback, approval ownership, audit trail.' } },
  { id: 'T3', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Tier 3 Reasoning\nPlan and execute', category: 'decision', branch: 'complexity', color: '#78350f', description: 'Evidence to demand: tool accuracy, state recovery, latency budget, evaluation thresholds, runtime ownership.' } },
  { id: 'T4', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Tier 4 Autonomous\nBounded, multi-agent', category: 'decision', branch: 'complexity', color: '#7f1d1d', description: 'Evidence to demand: bounded autonomy, isolation, stop conditions, escalation, protocol direction, end-to-end observability.' } },
  { id: 'P1', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'M365 Copilot or\nDeclarative Agent\nRunway: days', category: 'recommendation', branch: 'complexity', color: '#1e3a5f' } },
  { id: 'P2', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Logic Apps, Power Automate\nor Studio agent flows\nRunway: weeks', category: 'recommendation', branch: 'complexity', color: '#1e3a5f' } },
  { id: 'P3a', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Copilot Studio harness\nor Foundry Prompt Agent\nRunway: weeks', category: 'recommendation', branch: 'complexity', color: '#1e3a5f', description: 'Managed orchestration. In Copilot Studio the harness is the lever: the GitHub Copilot harness is for reasoning-heavy work and bills credits from first build.' } },
  { id: 'P3b', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Agent Framework or\nM365 Agents SDK\nRunway: months', category: 'recommendation', branch: 'complexity', color: '#4c1d95' } },
  { id: 'P4a', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Agent Framework\nmulti-agent patterns\nRunway: months', category: 'recommendation', branch: 'complexity', color: '#4c1d95', description: 'Host on Azure Container Apps or AKS. Foundry Hosted Agents only when the constraint card fits (Python and C# only, mixed SDK maturity).' } },
  { id: 'P4b', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Connected agents or\nFoundry A2A endpoint', category: 'recommendation', branch: 'complexity', status: 'preview', color: '#1e3a5f', description: 'Connected agents: the Copilot Studio release feed lists Preview and the how-to pages carry no banner. Foundry A2A: v1.0 is GA while v0.3 is Preview and served by default if no version header is sent.' } },
  { id: 'RefData', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'More sources change\nretrieval design,\nnot the tier', category: 'reference', branch: 'complexity', docsUrl: `${BASE}/visual-framework#data-grounding-decision` } },
  { id: 'RefGate', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Trust boundary and\naction safety', category: 'reference', branch: 'complexity', docsUrl: `${BASE}/visual-framework#governance--compliance-path` } },
];

const edges: Edge<EdgeData>[] = [
  { id: 'e-start', source: 'Start', target: 'Q1', data: { variant: 'default' } },
  { id: 'e-q1-no', source: 'Q1', target: 'Q2', label: 'No: answers, drafts, summarizes', data: { variant: 'no' } },
  { id: 'e-q1-yes', source: 'Q1', target: 'Q3', label: 'Yes: writes, submits, moves money', data: { variant: 'yes' } },
  { id: 'e-q2-yes', source: 'Q2', target: 'T1', label: 'Yes', data: { variant: 'yes' } },
  { id: 'e-q2-no', source: 'Q2', target: 'Q4', label: 'No: planning, tool choice, state', data: { variant: 'no' } },
  { id: 'e-q3-yes', source: 'Q3', target: 'T2', label: 'Yes', data: { variant: 'yes' } },
  { id: 'e-q3-no', source: 'Q3', target: 'Q4', label: 'No: the model chooses', data: { variant: 'no' } },
  { id: 'e-q4-no', source: 'Q4', target: 'T3', label: 'No', data: { variant: 'no' } },
  { id: 'e-q4-yes', source: 'Q4', target: 'T4', label: 'Yes', data: { variant: 'yes' } },
  { id: 'e-t1-p1', source: 'T1', target: 'P1', data: { variant: 'default' } },
  { id: 'e-t2-p2', source: 'T2', target: 'P2', data: { variant: 'default' } },
  { id: 'e-t3-p3a', source: 'T3', target: 'P3a', label: 'Platform owns the runtime', data: { variant: 'default' } },
  { id: 'e-t3-p3b', source: 'T3', target: 'P3b', label: 'Your team owns the runtime', data: { variant: 'default' } },
  { id: 'e-t4-p4a', source: 'T4', target: 'P4a', label: 'Code-owned orchestration', data: { variant: 'default' } },
  { id: 'e-t4-p4b', source: 'T4', target: 'P4b', label: 'Connect specialist agents', data: { variant: 'default' } },
  { id: 'e-p1-data', source: 'P1', target: 'RefData', data: { variant: 'default' } },
  { id: 'e-p1-gate', source: 'P1', target: 'RefGate', data: { variant: 'default' } },
  { id: 'e-p2-gate', source: 'P2', target: 'RefGate', data: { variant: 'default' } },
  { id: 'e-p3a-gate', source: 'P3a', target: 'RefGate', data: { variant: 'default' } },
  { id: 'e-p3b-gate', source: 'P3b', target: 'RefGate', data: { variant: 'default' } },
  { id: 'e-p4a-gate', source: 'P4a', target: 'RefGate', data: { variant: 'default' } },
  { id: 'e-p4b-gate', source: 'P4b', target: 'RefGate', data: { variant: 'default' } },
];

export const complexityFlow: FlowDefinition = {
  title: 'Complexity Assessment',
  description: 'Four behavior-and-authority tiers from the Evaluation Criteria, from read-only retrieval to bounded autonomy.',
  frameworkRef: 'Evaluation Criteria: Complexity (Tiers 1 to 4)',
  docsSection: '/docs/visual-framework#complexity-assessment-flow',
  nodes,
  edges,
};

