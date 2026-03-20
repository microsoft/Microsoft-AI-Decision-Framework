import type { Node, Edge } from '@xyflow/react';
import type { FlowDefinition, NodeData, EdgeData } from '../types';

const nodes: Node<NodeData>[] = [
  { id: 'Start', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Who are you?', category: 'start', branch: 'overview' } },
  { id: 'P1', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Your role?', category: 'question', branch: 'persona' } },

  // End user
  { id: 'User', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Use M365 Copilot', category: 'recommendation', branch: 'persona', color: '#064e3b' } },

  // Business maker
  { id: 'Maker', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Dev support?', category: 'question', branch: 'persona' } },
  { id: 'MakerStudio', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Copilot Studio', category: 'recommendation', branch: 'persona', color: '#1e3a5f' } },
  { id: 'MakerPlus', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Studio + Custom Actions', category: 'recommendation', branch: 'persona', color: '#1e3a5f' } },

  // Developer
  { id: 'Dev', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Focus area?', category: 'question', branch: 'persona' } },
  { id: 'DevM365', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'M365 Agents SDK', category: 'recommendation', branch: 'persona', color: '#4c1d95' } },
  { id: 'DevAzure', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Microsoft Foundry - Azure', category: 'recommendation', branch: 'persona', color: '#4c1d95' } },
  { id: 'DevOrch', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Agent Framework', category: 'recommendation', branch: 'persona', color: '#4c1d95' } },
  { id: 'DevChoice', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Skill level?', category: 'question', branch: 'persona' } },
  { id: 'DevAuto', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Event-driven?', category: 'question', branch: 'persona' } },
  { id: 'DevAGUI', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Agent Framework + AG-UI', category: 'recommendation', branch: 'persona', status: 'preview', color: '#4c1d95' } },
  { id: 'DevStudio', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Copilot Studio\n+ Custom Actions', category: 'recommendation', branch: 'persona', color: '#1e3a5f' } },
  { id: 'DevSDK', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'M365 SDK or Foundry', category: 'recommendation', branch: 'persona', color: '#4c1d95' } },
  { id: 'DevLogic', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Logic Apps\nAI Agent Workflows', category: 'recommendation', branch: 'persona', status: 'preview', color: '#1e3a5f' } },
  { id: 'DevFoundry', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Microsoft Foundry - Azure\n+ Agent Service', category: 'recommendation', branch: 'persona', color: '#7f1d1d' } },

  // Data Scientist
  { id: 'DS', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Primary workload?', category: 'question', branch: 'persona' } },
  { id: 'DSFabric', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Fabric Data Agents', category: 'recommendation', branch: 'persona', status: 'preview', color: '#78350f' } },
  { id: 'DSFoundry', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Microsoft Foundry - Azure', category: 'recommendation', branch: 'persona', color: '#7f1d1d' } },

  // Integration Specialist
  { id: 'IntSpec', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Azure Logic Apps\nAI Agent Workflows', category: 'recommendation', branch: 'persona', status: 'preview', color: '#1e3a5f' } },

  // Outcomes
  { id: 'UserEnd', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Start using Copilot', category: 'outcome', branch: 'persona' } },
  { id: 'MakerEnd', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Build in Studio', category: 'outcome', branch: 'persona' } },
  { id: 'MakerPlusEnd', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Studio + code', category: 'outcome', branch: 'persona' } },
  { id: 'DevM365End', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Build with SDK', category: 'outcome', branch: 'persona' } },
  { id: 'DevAzureEnd', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Build in Foundry', category: 'outcome', branch: 'persona' } },
  { id: 'DevOrchEnd', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Multi-agent workflows', category: 'outcome', branch: 'persona' } },
  { id: 'DevStudioEnd', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Studio with code', category: 'outcome', branch: 'persona' } },
  { id: 'DevSDKEnd', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Full code solution', category: 'outcome', branch: 'persona' } },
  { id: 'DevLogicEnd', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Event-driven agent', category: 'outcome', branch: 'persona' } },
  { id: 'DevFoundryEnd', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Custom agent', category: 'outcome', branch: 'persona' } },
  { id: 'DevAGUIEnd', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Custom streaming UI', category: 'outcome', branch: 'persona' } },
  { id: 'DSFabricEnd', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Data agent', category: 'outcome', branch: 'persona' } },
  { id: 'DSFoundryEnd', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'ML pipeline', category: 'outcome', branch: 'persona' } },
  { id: 'IntSpecEnd', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Enterprise workflows', category: 'outcome', branch: 'persona' } },
];

const edges: Edge<EdgeData>[] = [
  { id: 'e-start', source: 'Start', target: 'P1', data: { variant: 'default' } },
  { id: 'e-p1-user', source: 'P1', target: 'User', label: 'End user', data: { variant: 'default' } },
  { id: 'e-p1-maker', source: 'P1', target: 'Maker', label: 'Business maker', data: { variant: 'default' } },
  { id: 'e-p1-dev', source: 'P1', target: 'Dev', label: 'Developer', data: { variant: 'default' } },
  { id: 'e-p1-ds', source: 'P1', target: 'DS', label: 'Data scientist', data: { variant: 'default' } },
  { id: 'e-p1-int', source: 'P1', target: 'IntSpec', label: 'Integration specialist', data: { variant: 'default' } },
  { id: 'e-maker-no', source: 'Maker', target: 'MakerStudio', label: 'No devs', data: { variant: 'default' } },
  { id: 'e-maker-yes', source: 'Maker', target: 'MakerPlus', label: 'Occasional help', data: { variant: 'default' } },
  { id: 'e-dev-m365', source: 'Dev', target: 'DevM365', label: 'M365 integration', data: { variant: 'default' } },
  { id: 'e-dev-azure', source: 'Dev', target: 'DevAzure', label: 'Azure services', data: { variant: 'default' } },
  { id: 'e-dev-orch', source: 'Dev', target: 'DevOrch', label: 'Multi-agent', data: { variant: 'default' } },
  { id: 'e-dev-multi', source: 'Dev', target: 'DevChoice', label: 'Multi-platform', data: { variant: 'default' } },
  { id: 'e-dev-auto', source: 'Dev', target: 'DevAuto', label: 'Autonomous agents', data: { variant: 'default' } },
  { id: 'e-dev-agui', source: 'Dev', target: 'DevAGUI', label: 'Custom UI streaming', data: { variant: 'default' } },
  { id: 'e-choice-mid', source: 'DevChoice', target: 'DevStudio', label: 'Mid-level', data: { variant: 'default' } },
  { id: 'e-choice-sr', source: 'DevChoice', target: 'DevSDK', label: 'Senior', data: { variant: 'default' } },
  { id: 'e-auto-yes', source: 'DevAuto', target: 'DevLogic', label: 'Yes', data: { variant: 'yes' } },
  { id: 'e-auto-custom', source: 'DevAuto', target: 'DevFoundry', label: 'Custom orchestration', data: { variant: 'default' } },
  { id: 'e-ds-bi', source: 'DS', target: 'DSFabric', label: 'Analytics/BI', data: { variant: 'default' } },
  { id: 'e-ds-ml', source: 'DS', target: 'DSFoundry', label: 'ML/Custom models', data: { variant: 'default' } },
  // Outcomes
  { id: 'e-user-end', source: 'User', target: 'UserEnd', data: { variant: 'default' } },
  { id: 'e-ms-end', source: 'MakerStudio', target: 'MakerEnd', data: { variant: 'default' } },
  { id: 'e-mp-end', source: 'MakerPlus', target: 'MakerPlusEnd', data: { variant: 'default' } },
  { id: 'e-dm365-end', source: 'DevM365', target: 'DevM365End', data: { variant: 'default' } },
  { id: 'e-daz-end', source: 'DevAzure', target: 'DevAzureEnd', data: { variant: 'default' } },
  { id: 'e-dorch-end', source: 'DevOrch', target: 'DevOrchEnd', data: { variant: 'default' } },
  { id: 'e-dstudio-end', source: 'DevStudio', target: 'DevStudioEnd', data: { variant: 'default' } },
  { id: 'e-dsdk-end', source: 'DevSDK', target: 'DevSDKEnd', data: { variant: 'default' } },
  { id: 'e-dlogic-end', source: 'DevLogic', target: 'DevLogicEnd', data: { variant: 'default' } },
  { id: 'e-dfoundry-end', source: 'DevFoundry', target: 'DevFoundryEnd', data: { variant: 'default' } },
  { id: 'e-dagui-end', source: 'DevAGUI', target: 'DevAGUIEnd', data: { variant: 'default' } },
  { id: 'e-dsfab-end', source: 'DSFabric', target: 'DSFabricEnd', data: { variant: 'default' } },
  { id: 'e-dsfound-end', source: 'DSFoundry', target: 'DSFoundryEnd', data: { variant: 'default' } },
  { id: 'e-int-end', source: 'IntSpec', target: 'IntSpecEnd', data: { variant: 'default' } },
];

export const personaFlow: FlowDefinition = {
  title: 'Persona-Based Flow',
  description: 'Technology selection by role and skill level.',
  frameworkRef: 'Phase 2: Q2 — Build style & control level',
  docsSection: '/docs/visual-framework#persona-based-flow',
  nodes,
  edges,
};
