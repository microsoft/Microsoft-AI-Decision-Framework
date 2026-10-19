import type { Node, Edge } from '@xyflow/react';
import type { FlowDefinition, NodeData, EdgeData } from '../types';

const BASE = '/Microsoft-AI-Decision-Framework/docs';
const EXPLORER = '/Microsoft-AI-Decision-Framework/explorer/?flow=';

const nodes: Node<NodeData>[] = [
  // ── Trunk: Intake & Q0 ──
  { id: 'Start', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Start: a business problem', category: 'start', branch: 'overview' } },
  { id: 'G0', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Do you need an agent\nat all?', category: 'question', branch: 'overview', description: 'Agents introduce nondeterminism, latency, and cost. Use them only when reasoning or tool orchestration is required.' } },
  { id: 'StopCode', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Stop: deterministic code\nor non-generative AI', category: 'outcome', branch: 'intake', description: 'Structured, predictable work belongs in deterministic code, rule engines, or non-generative AI.' } },
  { id: 'StopRAG', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Stop: classic RAG,\nno agent', category: 'outcome', branch: 'intake', description: 'Static single-turn retrieval and summarization belong in classic RAG without agentic tool loops.' } },
  { id: 'Q0', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Q0: Has someone\nalready built this?', category: 'question', branch: 'overview', description: 'Walk the buy-before-build ladder: Use, Browse, Configure, Extend, Build declarative, Build custom engine. Articulate why each lower rung failed before climbing.' } },
  { id: 'DoneAdopt', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Adopt it: use, browse,\nor configure', category: 'outcome', branch: 'intake', description: 'Enable and govern the prebuilt Microsoft or partner agent (Researcher, Analyst, Cowork, SharePoint agent, Security Copilot agents, Dynamics 365 agents).' } },
  { id: 'Q1', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Q1: Who benefits?', category: 'question', branch: 'overview', description: 'Name the 3 AI Buckets conversation first: AI for You (workforce), AI as a Product or Feature (customers or systems), or AI for Your Codebase (software delivery).' } },

  // ── Lane 1: AI for You ──
  { id: 'B1', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'AI for You:\nwhat do people need?', category: 'question', branch: 'ai-for-you' } },
  { id: 'B1Use', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Microsoft 365 Copilot\n(Chat first)', category: 'recommendation', branch: 'ai-for-you', color: '#1e3a5f', docsUrl: `${BASE}/technologies#microsoft-365-copilot`, description: 'Learn now names this Microsoft Copilot and Microsoft Copilot Chat. Start with included Copilot Chat, then add the USL for Graph-grounded work and in-app copilots.' } },
  { id: 'B1Delegate', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Copilot Cowork:\nhand-off with checkpoints', category: 'recommendation', branch: 'ai-for-you', color: '#1e3a5f', docsUrl: `${BASE}/technologies#microsoft-365-copilot`, description: 'GA for work/school accounts (Preview for personal accounts). Requires a Microsoft Copilot USL plus usage-based Copilot Credits.' } },
  { id: 'B1Extend', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Copilot Studio:\nCopilot chat harness', category: 'recommendation', branch: 'ai-for-you', status: 'unstated', color: '#1e3a5f', docsUrl: `${BASE}/technologies#copilot-studio`, description: 'Extends Microsoft Copilot with your knowledge and connectors. Internal publishing only; Learn states no explicit status label (updated 2026-10-01).' } },

  // ── Lane 3: AI for Your Codebase ──
  { id: 'B3', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'AI for Your Codebase:\nwho owns the result?', category: 'question', branch: 'your-codebase' } },
  { id: 'B3Dev', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'GitHub Copilot:\neditor to cloud agent to SDK', category: 'recommendation', branch: 'your-codebase', color: '#4c1d95', docsUrl: `${BASE}/technologies#github-copilot--tech-heading-`, description: 'Five rungs: IDE assist, Copilot cloud agent (issue to PR), custom agents + AGENTS.md, GitHub Copilot SDK (6 languages), and Foundry Hosted Agents (Python and C# only).' } },
  { id: 'B3Buy', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Does a list, workbook,\nor SaaS already solve it?', category: 'question', branch: 'your-codebase' } },
  { id: 'B3BuyOut', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Use it.\nSkip the app.', category: 'outcome', branch: 'your-codebase' } },
  { id: 'B3Biz', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Describe-it builders\n(Frontier or Preview)', category: 'recommendation', branch: 'your-codebase', status: 'preview', color: '#1e3a5f', docsUrl: `${BASE}/technologies#copilot-managed-runtime`, description: 'Copilot Code (Frontier preview), Cowork App skill (Frontier preview), and Copilot Studio apps (Preview) run on Copilot Managed Runtime (Preview). If the app calls a model at runtime, also walk the Product or Feature lane.' } },
  { id: 'XPersona', position: { x: 0, y: 0 }, type: 'decision', data: { label: '↗ Persona flow:\nbuilder and developer paths', category: 'linkout', branch: 'your-codebase', docsUrl: `${EXPLORER}persona` } },

  // ── Lane 2: AI as a Product or Feature ──
  { id: 'B2Gates', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'AI as a Product:\nset constraints first', category: 'warning', branch: 'product-or-feature', description: 'Settle data grounding (Q3), single-vs-multi-agent boundaries (Q4), trust boundary and action safety (Q5, Q7), budget meters (Q6), and lifecycle horizon before picking a runtime.' } },
  { id: 'XData', position: { x: 0, y: 0 }, type: 'decision', data: { label: '↗ Q3: Data Grounding flow', category: 'linkout', branch: 'product-or-feature', docsUrl: `${EXPLORER}data-grounding` } },
  { id: 'XMulti', position: { x: 0, y: 0 }, type: 'decision', data: { label: '↗ Q4: Multi-Agent flow', category: 'linkout', branch: 'product-or-feature', docsUrl: `${EXPLORER}multi-agent` } },
  { id: 'XGov', position: { x: 0, y: 0 }, type: 'decision', data: { label: '↗ Q5, Q7: Governance flow', category: 'linkout', branch: 'product-or-feature', docsUrl: `${EXPLORER}governance` } },
  { id: 'XBudget', position: { x: 0, y: 0 }, type: 'decision', data: { label: '↗ Q6: Budget flow', category: 'linkout', branch: 'product-or-feature', docsUrl: `${EXPLORER}budget` } },
  { id: 'XLife', position: { x: 0, y: 0 }, type: 'decision', data: { label: '↗ Lifecycle Check flow', category: 'linkout', branch: 'product-or-feature', docsUrl: `${EXPLORER}lifecycle` } },
  { id: 'B2Start', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'How does work start?\n(Q9)', category: 'question', branch: 'product-or-feature' } },
  { id: 'B2Control', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Q2, Q8: Configure,\nor code and own it?', category: 'question', branch: 'product-or-feature' } },
  { id: 'Studio', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Copilot Studio\n(pick a harness)', category: 'recommendation', branch: 'product-or-feature', color: '#1e3a5f', docsUrl: `${BASE}/technologies#copilot-studio`, description: 'Three harnesses fixed at creation: Copilot chat, Standard (bills after publish), and GitHub Copilot (GA, bills from first build/test).' } },
  { id: 'PlatQ', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Primary platform?', category: 'question', branch: 'product-or-feature' } },
  { id: 'SDK', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'M365 Agents SDK', category: 'recommendation', branch: 'product-or-feature', color: '#4c1d95', docsUrl: `${BASE}/technologies#microsoft-365-agents-sdk--toolkit--tech-heading-` } },
  { id: 'UIProto', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Need a custom\nUI protocol?', category: 'question', branch: 'product-or-feature' } },
  { id: 'AGUI', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Agent Framework\n+ AG-UI', category: 'recommendation', branch: 'product-or-feature', status: 'unstated', color: '#4c1d95', docsUrl: `${BASE}/technologies#microsoft-agent-framework--tech-heading-`, description: 'Python agent-framework-ag-ui 1.5.1 is stable on PyPI (2026-10-08); .NET Hosting.AGUI.AspNetCore is in preview; the Learn page states no overall status label.' } },
  { id: 'Foundry', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Microsoft Foundry - Azure', category: 'recommendation', branch: 'product-or-feature', color: '#7f1d1d', docsUrl: `${BASE}/technologies#microsoft-foundry-azure`, description: 'Code-first models, evaluations, safety guardrails, and publishing to Microsoft Copilot and Teams (GA on Learn).' } },
  { id: 'AutoQ', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'What fires it?', category: 'question', branch: 'product-or-feature' } },
  { id: 'StudioAuto', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Copilot Studio\ntriggers', category: 'recommendation', branch: 'product-or-feature', status: 'unstated', color: '#1e3a5f', docsUrl: `${BASE}/technologies#copilot-studio`, description: 'Event triggers on the standard harness and workflows on the GitHub Copilot harness. Triggered agents carry no explicit GA statement on Learn (2026-09-09).' } },
  { id: 'Routines', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Foundry routines', category: 'recommendation', branch: 'product-or-feature', color: '#7f1d1d', docsUrl: `${BASE}/technologies#foundry-agent-service--tech-heading-`, description: 'GA on Learn (2026-09-09) and Foundry blog (2026-09-24) for timer, recurring, and GitHub/Teams event triggers on prompt and hosted agents. Reminder tool and .NET SDK packages remain preview.' } },
  { id: 'LogicApps', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Logic Apps agentic\nworkflows', category: 'recommendation', branch: 'product-or-feature', status: 'preview', color: '#1e3a5f', docsUrl: `${BASE}/feature-comparison#logic-apps-agentic-workflows`, description: 'Consumption agentic workflows are explicitly Preview. Standard carries no preview banner on the agent loop, but some Standard model sources are Preview. Triggers single agents, not multi-agent orchestration.' } },
  { id: 'AgentFW', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Microsoft Agent\nFramework', category: 'recommendation', branch: 'product-or-feature', color: '#4c1d95', docsUrl: `${BASE}/technologies#microsoft-agent-framework--tech-heading-`, description: 'GA for Python (1.21.0) and C#/.NET (1.25.0); Go is Public Preview (0.1.1). Checkpointing, type-safe workflows, and multi-agent patterns.' } },
  { id: 'HostQ', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Who hosts it?', category: 'question', branch: 'product-or-feature' } },
  { id: 'AgentService', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Foundry Agent Service', category: 'recommendation', branch: 'product-or-feature', color: '#7f1d1d', docsUrl: `${BASE}/technologies#foundry-agent-service--tech-heading-`, description: 'Managed PaaS runtime for Prompt Agents (GA) and Hosted Agents (GA service, Python and C# only, check the constraint card).' } },
  { id: 'FoundryLocal', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Foundry Local:\non-device, edge', category: 'recommendation', branch: 'product-or-feature', color: '#1e3a5f', docsUrl: `${BASE}/technologies#foundry-local--tech-heading-` } },

  // ── Deployment & Operations ──
  { id: 'XPublish', position: { x: 0, y: 0 }, type: 'decision', data: { label: '↗ Q8: Publish targets\nby platform', category: 'linkout', branch: 'deployment', docsUrl: `${BASE}/quick-reference#publish-target-quick-reference` } },
  { id: 'Monitor', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Monitor and govern\n(Phase 4)', category: 'decision', branch: 'deployment', description: 'One registry (Agent 365 / Foundry Control Plane), one Entra Agent ID per agent, continuous evaluation, and scheduled retirement of dormant agents.' } },
  { id: 'End', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Production', category: 'outcome', branch: 'deployment' } },
];

const edges: Edge<EdgeData>[] = [
  { id: 'e-start-g0', source: 'Start', target: 'G0', data: { variant: 'default' } },
  { id: 'e-g0-code', source: 'G0', target: 'StopCode', label: 'Structured, predictable', data: { variant: 'no' } },
  { id: 'e-g0-rag', source: 'G0', target: 'StopRAG', label: 'Static retrieval only', data: { variant: 'no' } },
  { id: 'e-g0-q0', source: 'G0', target: 'Q0', label: 'Reasoning or tool use', data: { variant: 'yes' } },
  { id: 'e-q0-adopt', source: 'Q0', target: 'DoneAdopt', label: 'Yes: use, browse, configure', data: { variant: 'yes' } },
  { id: 'e-q0-q1', source: 'Q0', target: 'Q1', label: 'No, and I can say why', data: { variant: 'no' } },

  // Q1 -> 3 Buckets
  { id: 'e-q1-b1', source: 'Q1', target: 'B1', label: 'My workforce', data: { variant: 'default' } },
  { id: 'e-q1-b2', source: 'Q1', target: 'B2Gates', label: 'Customers or systems', data: { variant: 'default' } },
  { id: 'e-q1-b3', source: 'Q1', target: 'B3', label: 'Building software', data: { variant: 'default' } },

  // Bucket 1: AI for You
  { id: 'e-b1-use', source: 'B1', target: 'B1Use', label: 'Answers in apps they use', data: { variant: 'default' } },
  { id: 'e-b1-del', source: 'B1', target: 'B1Delegate', label: 'Hand off a multi-step job', data: { variant: 'default' } },
  { id: 'e-b1-ext', source: 'B1', target: 'B1Extend', label: 'Our knowledge inside Copilot', data: { variant: 'default' } },

  // Bucket 3: AI for Your Codebase
  { id: 'e-b3-dev', source: 'B3', target: 'B3Dev', label: 'Engineers, in a repo', data: { variant: 'default' } },
  { id: 'e-b3-buy', source: 'B3', target: 'B3Buy', label: 'A team, by description', data: { variant: 'default' } },
  { id: 'e-b3-per', source: 'B3', target: 'XPersona', label: 'Details', data: { variant: 'default' } },
  { id: 'e-b3buy-yes', source: 'B3Buy', target: 'B3BuyOut', label: 'Yes', data: { variant: 'yes' } },
  { id: 'e-b3buy-no', source: 'B3Buy', target: 'B3Biz', label: 'No', data: { variant: 'no' } },

  // Bucket 2: AI as a Product or Feature
  { id: 'e-b2-data', source: 'B2Gates', target: 'XData', label: 'Open data flow', data: { variant: 'default' } },
  { id: 'e-b2-multi', source: 'B2Gates', target: 'XMulti', label: 'Open multi-agent flow', data: { variant: 'default' } },
  { id: 'e-b2-gov', source: 'B2Gates', target: 'XGov', label: 'Open governance flow', data: { variant: 'default' } },
  { id: 'e-b2-bud', source: 'B2Gates', target: 'XBudget', label: 'Open budget flow', data: { variant: 'default' } },
  { id: 'e-b2-life', source: 'B2Gates', target: 'XLife', label: 'Open lifecycle flow', data: { variant: 'default' } },
  { id: 'e-b2-start', source: 'B2Gates', target: 'B2Start', label: 'Constraints written down', data: { variant: 'default' } },

  { id: 'e-b2s-ui', source: 'B2Start', target: 'B2Control', label: 'A person asks (chat UI)', data: { variant: 'default' } },
  { id: 'e-b2s-auto', source: 'B2Start', target: 'AutoQ', label: 'An event or schedule', data: { variant: 'default' } },
  { id: 'e-b2s-api', source: 'B2Start', target: 'HostQ', label: 'A system calls it (API)', data: { variant: 'default' } },

  { id: 'e-b2c-studio', source: 'B2Control', target: 'Studio', label: 'Configure (low-code)', data: { variant: 'default' } },
  { id: 'e-b2c-plat', source: 'B2Control', target: 'PlatQ', label: 'Code it (pro-code)', data: { variant: 'default' } },
  { id: 'e-plat-sdk', source: 'PlatQ', target: 'SDK', label: 'Microsoft 365-centric', data: { variant: 'default' } },
  { id: 'e-plat-ui', source: 'PlatQ', target: 'UIProto', label: 'Azure-centric', data: { variant: 'default' } },
  { id: 'e-uip-yes', source: 'UIProto', target: 'AGUI', label: 'Yes', data: { variant: 'yes' } },
  { id: 'e-uip-no', source: 'UIProto', target: 'Foundry', label: 'No', data: { variant: 'no' } },

  { id: 'e-auto-studio', source: 'AutoQ', target: 'StudioAuto', label: 'Low-code triggers', data: { variant: 'default' } },
  { id: 'e-auto-rout', source: 'AutoQ', target: 'Routines', label: 'Schedule, GitHub, Teams', data: { variant: 'default' } },
  { id: 'e-auto-logic', source: 'AutoQ', target: 'LogicApps', label: 'Many business systems', data: { variant: 'default' } },
  { id: 'e-auto-afw', source: 'AutoQ', target: 'AgentFW', label: 'Code-defined workflow', data: { variant: 'default' } },

  { id: 'e-host-asvc', source: 'HostQ', target: 'AgentService', label: 'Managed (PaaS)', data: { variant: 'default' } },
  { id: 'e-host-afw', source: 'HostQ', target: 'AgentFW', label: 'Self-hosted', data: { variant: 'default' } },
  { id: 'e-host-loc', source: 'HostQ', target: 'FoundryLocal', label: 'On-device or edge', data: { variant: 'default' } },

  // Publish & Monitor
  { id: 'e-st-pub', source: 'Studio', target: 'XPublish', data: { variant: 'default' } },
  { id: 'e-sdk-pub', source: 'SDK', target: 'XPublish', data: { variant: 'default' } },
  { id: 'e-agui-pub', source: 'AGUI', target: 'XPublish', data: { variant: 'default' } },
  { id: 'e-fnd-pub', source: 'Foundry', target: 'XPublish', data: { variant: 'default' } },
  { id: 'e-pub-mon', source: 'XPublish', target: 'Monitor', data: { variant: 'default' } },
  { id: 'e-sa-mon', source: 'StudioAuto', target: 'Monitor', data: { variant: 'default' } },
  { id: 'e-rt-mon', source: 'Routines', target: 'Monitor', data: { variant: 'default' } },
  { id: 'e-la-mon', source: 'LogicApps', target: 'Monitor', data: { variant: 'default' } },
  { id: 'e-afw-mon', source: 'AgentFW', target: 'Monitor', data: { variant: 'default' } },
  { id: 'e-as-mon', source: 'AgentService', target: 'Monitor', data: { variant: 'default' } },
  { id: 'e-fl-mon', source: 'FoundryLocal', target: 'Monitor', data: { variant: 'default' } },
  { id: 'e-mon-end', source: 'Monitor', target: 'End', data: { variant: 'default' } },
];

export const completeDecisionFlow: FlowDefinition = {
  title: 'Complete Decision Flow',
  description: 'End-to-end technology selection: agent checkpoint, Q0 buy-before-build gate, the 3 AI Buckets, and platform routing.',
  frameworkRef: 'Phase 2: Q0 to Q9, all critical questions',
  docsSection: '/docs/visual-framework#complete-decision-flow',
  nodes,
  edges,
};

