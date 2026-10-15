import type { Node, Edge } from '@xyflow/react';
import type { FlowDefinition, NodeData, EdgeData } from '../types';

const nodes: Node<NodeData>[] = [
  { id: 'Start', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Pre-flight: can we\nbuild on this?', category: 'start', branch: 'overview', description: 'Run it for every technology in the design, including transitive dependencies such as SDK pins, caches and APIs. Status words are Microsoft words: if Microsoft does not say GA, it is not GA.' } },
  { id: 'Q_Date', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Retirement vs go-live\nand operating life?', category: 'question', branch: 'lifecycle', description: 'Operating life is go-live plus how long you plan to run it. Check the Migration Calendar. A retirement that lands inside the operating life is a cost, not a footnote.' } },
  { id: 'Q_Succ', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Successor named?', category: 'question', branch: 'lifecycle', description: 'Name the successor and read its status. A Preview successor swaps a dated risk for an undated one, so re-run this check on it.' } },
  { id: 'Plan', position: { x: 0, y: 0 }, type: 'decision', data: { label: '⚠️ Budget the migration now,\nor start on the successor', category: 'warning', branch: 'lifecycle', description: 'If the date falls within months of go-live, the migration is part of the build: start on the successor. Otherwise proceed only with a dated migration milestone, a decommission plan and budget for the rewrite.' } },
  { id: 'Q_Mat', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'What status does\nMicrosoft state?', category: 'question', branch: 'lifecycle', description: 'Use the Learn banner or an announcement from the product owner. A missing label is silence, not GA. Azure Public Preview already carries no SLA. Frontier adds opt-in access, removal at any time and no use for product evaluations (Agent 365 Frontier FAQ).' } },
  { id: 'Rerun', position: { x: 0, y: 0 }, type: 'decision', data: { label: '↺ Re-run this check\non the successor', category: 'outcome', branch: 'lifecycle', color: '#1e3a5f', description: 'The successor has its own status and dates. Apply the same gates to it before you commit.' } },
  { id: 'Block', position: { x: 0, y: 0 }, type: 'decision', data: { label: '🚫 Block: ask Microsoft,\nno new build', category: 'outcome', branch: 'lifecycle', color: '#7f1d1d', description: 'No named successor, no new build. Raise it with your Microsoft account team or support, and record the answer.' } },
  { id: 'Q_Prod', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Production or\ncustomer-facing?', category: 'question', branch: 'lifecycle', description: 'Preview and unstated features carry no SLA and can change or disappear. A pilot can tolerate that; production needs an owner who accepts it in writing.' } },
  { id: 'P_Pilot', position: { x: 0, y: 0 }, type: 'decision', data: { label: '⚠️ Pilot only\nNo commitments, set an expiry', category: 'outcome', branch: 'lifecycle', color: '#78350f', description: 'No production data, no prepaid commitments, and a calendar date to either graduate or switch off.' } },
  { id: 'Q_Exit', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Owner signs exit plan\nand rewrite budget?', category: 'question', branch: 'lifecycle', description: 'Name the business owner who accepts the risk, pin versions, add a feature flag and fund the rewrite. If nobody will sign, the answer is no.' } },
  { id: 'P_Go', position: { x: 0, y: 0 }, type: 'decision', data: { label: '⚠️ Proceed with caution\nPin versions, track GA', category: 'outcome', branch: 'lifecycle', color: '#78350f', description: 'Pin versions, feature-flag the dependency, watch What is new for GA or retirement, and revisit when the status changes.' } },
  { id: 'P_Wait', position: { x: 0, y: 0 }, type: 'decision', data: { label: '🚫 Wait for GA or pick\na GA alternative', category: 'outcome', branch: 'lifecycle', color: '#7f1d1d', description: 'Without an exit plan, Preview in production is an unfunded liability.' } },
  { id: 'F_Lab', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Lab only\nNo production data', category: 'outcome', branch: 'lifecycle', status: 'experimental', color: '#78350f', description: 'Frontier is opt-in early access: off by default, preview terms, removable at any time, and not for product evaluations per the Agent 365 Frontier FAQ. Some Frontier features process data with Anthropic outside the EU Data Boundary. Re-run when it reaches Preview or GA.' } },
  { id: 'Q_Fin', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Commitment outlives\nstatus or date?', category: 'question', branch: 'lifecycle', description: 'Prepaid credits, reservations, seat counts and multi-year terms. Never prepay a Preview or Frontier feature. Redis reservations end with the retiring tiers and can be cancelled or exchanged earlier.' } },
  { id: 'Fin_Fix', position: { x: 0, y: 0 }, type: 'decision', data: { label: '⚠️ Shorten the term,\nexchange or cancel first', category: 'warning', branch: 'lifecycle', description: 'Align every commitment to the shorter of the operating life and the retirement date before you proceed.' } },
  { id: 'Go', position: { x: 0, y: 0 }, type: 'decision', data: { label: '✅ Proceed to the\nDecision Framework', category: 'outcome', branch: 'lifecycle', color: '#064e3b', description: 'Status and dates are acceptable. Continue with the nine questions.' } },
];

const edges: Edge<EdgeData>[] = [
  { id: 'e1-Start-Q_Date', source: 'Start', target: 'Q_Date', data: { variant: 'default' } },
  { id: 'e2-Q_Date-Q_Succ', source: 'Q_Date', target: 'Q_Succ', label: 'Retired already,\nor before go-live', data: { variant: 'default' } },
  { id: 'e3-Q_Date-Plan', source: 'Q_Date', target: 'Plan', label: 'Inside the\noperating life', data: { variant: 'default' } },
  { id: 'e4-Q_Date-Q_Mat', source: 'Q_Date', target: 'Q_Mat', label: 'None, or after the\noperating life', data: { variant: 'default' } },
  { id: 'e5-Plan-Q_Mat', source: 'Plan', target: 'Q_Mat', data: { variant: 'default' } },
  { id: 'e6-Q_Succ-Rerun', source: 'Q_Succ', target: 'Rerun', label: 'Yes', data: { variant: 'yes' } },
  { id: 'e7-Q_Succ-Block', source: 'Q_Succ', target: 'Block', label: 'No', data: { variant: 'no' } },
  { id: 'e8-Q_Mat-Q_Fin', source: 'Q_Mat', target: 'Q_Fin', label: 'GA', data: { variant: 'default' } },
  { id: 'e9-Q_Mat-Q_Prod', source: 'Q_Mat', target: 'Q_Prod', label: 'Public Preview,\nor not stated', data: { variant: 'default' } },
  { id: 'e10-Q_Mat-F_Lab', source: 'Q_Mat', target: 'F_Lab', label: 'Frontier or\nexperimental', data: { variant: 'default' } },
  { id: 'e11-Q_Mat-Q_Succ', source: 'Q_Mat', target: 'Q_Succ', label: 'Deprecated or\nsuperseded', data: { variant: 'default' } },
  { id: 'e12-Q_Prod-P_Pilot', source: 'Q_Prod', target: 'P_Pilot', label: 'No, pilot or\ninternal demo', data: { variant: 'default' } },
  { id: 'e13-Q_Prod-Q_Exit', source: 'Q_Prod', target: 'Q_Exit', label: 'Yes', data: { variant: 'yes' } },
  { id: 'e14-Q_Exit-P_Go', source: 'Q_Exit', target: 'P_Go', label: 'Yes', data: { variant: 'yes' } },
  { id: 'e15-Q_Exit-P_Wait', source: 'Q_Exit', target: 'P_Wait', label: 'No', data: { variant: 'no' } },
  { id: 'e16-P_Go-Q_Fin', source: 'P_Go', target: 'Q_Fin', data: { variant: 'default' } },
  { id: 'e17-Q_Fin-Fin_Fix', source: 'Q_Fin', target: 'Fin_Fix', label: 'Yes', data: { variant: 'yes' } },
  { id: 'e18-Q_Fin-Go', source: 'Q_Fin', target: 'Go', label: 'No', data: { variant: 'no' } },
  { id: 'e19-Fin_Fix-Go', source: 'Fin_Fix', target: 'Go', data: { variant: 'default' } },
];

export const lifecycleFlow: FlowDefinition = {
  title: 'Lifecycle Check',
  description: 'Pre-flight gate: dates, status, successor and commitments.',
  frameworkRef: 'Quick Reference: Lifecycle Status & Migration Calendar',
  docsSection: '/docs/visual-framework#lifecycle-check',
  nodes,
  edges,
};

