import type { Node, Edge } from '@xyflow/react';
import type { FlowDefinition, NodeData, EdgeData } from '../types';

const BASE = '/Microsoft-AI-Decision-Framework/docs';

const nodes: Node<NodeData>[] = [
  { id: 'Start', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Start: Low-Code\nAgent or App', category: 'start', branch: 'overview' } },
  { id: 'Q0', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'What are you\nupgrading?', category: 'question', branch: 'upgrade' } },
  { id: 'Q1', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Need more\ncapability?', category: 'question', branch: 'upgrade' } },
  { id: 'Stay', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Stay on the\nstandard harness', category: 'recommendation', branch: 'upgrade', color: '#1e3a5f', description: 'Learn points well-defined, rule-based scenarios at the standard harness, which stays documented and licensed on its own page.' } },
  { id: 'Q2', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'What kind of\ncapability?', category: 'question', branch: 'upgrade' } },
  { id: 'Path1', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Enhance\nGitHub Copilot harness', category: 'recommendation', branch: 'upgrade', status: 'preview', color: '#78350f', description: 'The upgrade tool is Preview; the target harness is GA (announced 2026-08-03). Ask Copilot Studio to upgrade the agent.' } },
  { id: 'Warn1', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Copy, not transfer\nUses credits\nSkips knowledge, Power Fx', category: 'warning', branch: 'upgrade', description: 'Carries instructions, tools, and suggested prompts. Topics can be rebuilt as skills or workflows. Not migrated: knowledge sources, Power Fx expressions, child agents. Reconnect knowledge with the Foundry IQ tool or other harness knowledge. No way back to the standard harness.' } },
  { id: 'Result1', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'GitHub Copilot\nharness agent', category: 'outcome', branch: 'upgrade' } },
  { id: 'Path2', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Extend\nConnect a specialist agent', category: 'recommendation', branch: 'upgrade', status: 'preview', color: '#7f1d1d' } },
  { id: 'Ext1', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Which harness runs\nthe primary agent?', category: 'question', branch: 'upgrade' } },
  { id: 'Result2a', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Standard harness:\nFoundry agent', category: 'outcome', branch: 'upgrade', status: 'preview', description: 'The Foundry connection is Preview; A2A is GA on this harness. Two wallets: Copilot Credits plus Azure.' } },
  { id: 'Result2b', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'GitHub Copilot harness:\nFoundry, A2A, SDK,\nor Studio agents', category: 'outcome', branch: 'upgrade', status: 'preview', description: 'Release feed lists Preview; how-to pages carry no banner. Foundry agents need the Activity protocol enabled (a preview feature flag) and must come from the current portal. SDK agents have no agent card: supply the name and description. Handoffs have a payload limit and the orchestrator rewrites the request.' } },
  { id: 'Path3', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Migrate\nM365 Agents SDK\nor Foundry', category: 'recommendation', branch: 'upgrade', color: '#4c1d95' } },
  { id: 'Result3', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Full pro-code\nsolution', category: 'outcome', branch: 'upgrade' } },
  { id: 'A1', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'How was the\napp built?', category: 'question', branch: 'upgrade' } },
  { id: 'B1', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Copilot Managed\nRuntime', category: 'recommendation', branch: 'upgrade', status: 'preview', color: '#1e3a5f', docsUrl: `${BASE}/feature-comparison#app-building-comparison`, description: 'Git-backed: platform-managed repository or your own GitHub repository, fixed at creation. Entry points: Cowork or Copilot Studio apps. Copilot Code apps use the same foundation per Microsoft, but Learn does not list Code as a creation path.' } },
  { id: 'B2', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Outgrown its\nbuilder?', category: 'question', branch: 'upgrade' } },
  { id: 'B3', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Stay: name an owner,\nbudget the run bill', category: 'outcome', branch: 'upgrade' } },
  { id: 'B4', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Same repository\nGitHub Copilot or ms CLI', category: 'recommendation', branch: 'upgrade', status: 'preview', color: '#4c1d95', description: 'The launch blog shows this for Cowork; a Studio-specific handoff is not described on the pages reviewed. Runtime entitlement applies to developers running locally.' } },
  { id: 'Warn2', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Decide at creation\nGit pushes not audited', category: 'warning', branch: 'upgrade', docsUrl: `${BASE}/scenarios#scenario-11-business-teams-building-their-own-apps`, description: 'Repository type is fixed when the app is created. Bind your own GitHub repository to keep branch policies and pull-request reviews; Purview lists Git pushes as not audited.' } },
  { id: 'V1', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Power Apps vibe', category: 'recommendation', branch: 'upgrade', status: 'preview', color: '#78350f' } },
  { id: 'V2', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Power Apps code app\nnew app, no sync back', category: 'recommendation', branch: 'upgrade', color: '#1e3a5f', description: 'Conversion creates a new code app disconnected from the original plan. Code apps are GA per the official GitHub README; the Learn overview states no status. No Learn page reviewed describes a migration between Managed Runtime and code apps.' } },
];

const edges: Edge<EdgeData>[] = [
  { id: 'e-start', source: 'Start', target: 'Q0', data: { variant: 'default' } },
  { id: 'e-q0-agent', source: 'Q0', target: 'Q1', label: 'An agent', data: { variant: 'default' } },
  { id: 'e-q0-app', source: 'Q0', target: 'A1', label: 'A business-built app', data: { variant: 'default' } },
  { id: 'e-q1-no', source: 'Q1', target: 'Stay', label: 'No', data: { variant: 'no' } },
  { id: 'e-q1-yes', source: 'Q1', target: 'Q2', label: 'Yes', data: { variant: 'yes' } },
  { id: 'e-q2-p1', source: 'Q2', target: 'Path1', label: 'Better reasoning, skills, memory', data: { variant: 'default' } },
  { id: 'e-q2-p2', source: 'Q2', target: 'Path2', label: 'Complex orchestration', data: { variant: 'default' } },
  { id: 'e-q2-p3', source: 'Q2', target: 'Path3', label: 'Custom UI or protocol', data: { variant: 'default' } },
  { id: 'e-p1-w1', source: 'Path1', target: 'Warn1', data: { variant: 'default' } },
  { id: 'e-w1-r1', source: 'Warn1', target: 'Result1', data: { variant: 'default' } },
  { id: 'e-p2-ext', source: 'Path2', target: 'Ext1', data: { variant: 'default' } },
  { id: 'e-ext-std', source: 'Ext1', target: 'Result2a', label: 'Standard', data: { variant: 'default' } },
  { id: 'e-ext-gh', source: 'Ext1', target: 'Result2b', label: 'GitHub Copilot', data: { variant: 'default' } },
  { id: 'e-p3-r3', source: 'Path3', target: 'Result3', data: { variant: 'default' } },
  { id: 'e-a1-b1', source: 'A1', target: 'B1', label: 'Cowork or Studio app', data: { variant: 'default' } },
  { id: 'e-a1-v1', source: 'A1', target: 'V1', label: 'Power Apps vibe', data: { variant: 'default' } },
  { id: 'e-b1-b2', source: 'B1', target: 'B2', data: { variant: 'default' } },
  { id: 'e-b1-w2', source: 'B1', target: 'Warn2', data: { variant: 'default' } },
  { id: 'e-b2-no', source: 'B2', target: 'B3', label: 'No', data: { variant: 'no' } },
  { id: 'e-b2-yes', source: 'B2', target: 'B4', label: 'Yes', data: { variant: 'yes' } },
  { id: 'e-v1-v2', source: 'V1', target: 'V2', label: 'Convert', data: { variant: 'default' } },
];

export const upgradeFlow: FlowDefinition = {
  title: 'Upgrade Paths',
  description: 'Progressive enhancement of low-code agents and promotion of business-built apps.',
  frameworkRef: 'Implementation Patterns: Progressive Enhancement; Scenario 11 (app promotion)',
  docsSection: '/docs/visual-framework#upgrade-paths',
  nodes,
  edges,
};

