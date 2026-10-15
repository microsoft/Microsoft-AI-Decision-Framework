import type { Node, Edge } from '@xyflow/react';
import type { FlowDefinition, NodeData, EdgeData } from '../types';

const BASE = '/Microsoft-AI-Decision-Framework/docs';

const nodes: Node<NodeData>[] = [
  { id: 'Start', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Need more than one agent?', category: 'start', branch: 'overview', description: 'Every added agent multiplies handoffs, tokens, latency and failure surface, and Copilot Studio harness agents consume credits from the first test run. Earn the second agent with evidence, not a hunch.' } },
  { id: 'Why', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'What forces a\nsecond agent?', category: 'question', branch: 'multi-agent', description: 'Cloud Adoption Framework triggers: a security or compliance boundary, separate teams, planned growth. Copilot Studio adds a measured one: tool choice degrades past roughly 30 to 40 actions. Roles alone are not a reason. This framework treats growth as a forecast, not evidence.' } },
  { id: 'Solo', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Single agent with tools\nand skills. Not multi-agent', category: 'outcome', branch: 'multi-agent', color: '#064e3b', description: 'Microsoft calls a single agent with tools often the right default for enterprise use. Persona switching, conditional prompting and a workflow around one agent cover most role and step needs. Re-evaluate when a boundary or a measured failure appears.' } },
  { id: 'SoloLink', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Event triggers, schedules\nSee Question 9', category: 'linkout', branch: 'multi-agent', description: 'Single-agent event triggers (Logic Apps, Functions, Event Grid) are not multi-agent orchestration. Choose the trigger path in Decision Framework, Question 9.', docsUrl: `${BASE}/decision-framework#question-9-does-the-agent-need-to-initiate-actions` } },
  { id: 'C_Platform', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Where does each\nagent run?', category: 'question', branch: 'multi-agent', description: 'Each connected agent keeps its own owner, identity, deployment and release cadence. Protocols are a wire detail: A2A lets agents on different platforms delegate to each other.' } },
  { id: 'C_Studio', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Copilot Studio\nconnected agents', category: 'recommendation', branch: 'multi-agent', status: 'preview', color: '#1e3a5f', description: 'Connects Copilot Studio, Foundry, remote A2A and Microsoft 365 Agents SDK agents. A2A is GA (April 2026, classic experience); classic Foundry, Fabric data agent and Agents SDK connections are labeled Preview. The newer harness page lists Studio, Foundry, A2A and Agents SDK targets with no status. Exposing a Studio agent over MCP or A2A is Preview.' } },
  { id: 'C_Foundry', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Foundry Agent Service\nA2A v1.0', category: 'recommendation', branch: 'multi-agent', color: '#1e3a5f', description: 'Incoming and outgoing A2A v1.0 are GA. Preview v0.3 is served when a request names no version, so send the A2A-Version header. v1.0 is JSON-RPC only; Foundry agent targets are text only with no streaming. The .NET SDK for the GA tool is beta.' } },
  { id: 'W_Style', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'How will you\nbuild it?', category: 'question', branch: 'multi-agent', description: 'Inside one ownership boundary, choose by build style and by what you already own. The patterns (sequential, concurrent, handoff, group chat, Magentic) look the same in every framework. A model-decided next step adds tokens and variance.' } },
  { id: 'W_Studio', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Copilot Studio\nchild agents', category: 'recommendation', branch: 'multi-agent', status: 'unstated', color: '#1e3a5f', description: 'Lightweight agents inside one agent, for one team, one deployment and one publish. Microsoft guidance calls them inline agents, also known as child agents. Learn states no GA status for them.' } },
  { id: 'W_MAF', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Microsoft Agent Framework\nPython, .NET GA. Go Preview', category: 'recommendation', branch: 'multi-agent', color: '#4c1d95', description: 'Microsoft stated successor to Semantic Kernel and AutoGen: sequential, concurrent, handoff, group chat and Magentic patterns. Core is GA for Python and .NET; Go is Public Preview and the A2A packages are beta. Check versions before you pin.' } },
  { id: 'W_SDK', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Need Teams or Copilot reach?\nM365 Agents SDK hosts it', category: 'reference', branch: 'multi-agent', color: '#4c1d95', description: 'A channel and hosting SDK, not an orchestrator: you bring the orchestrator, such as Agent Framework.' } },
  { id: 'W_SK', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Semantic Kernel or AutoGen\nSuccessor: Agent Framework', category: 'recommendation', branch: 'multi-agent', color: '#4c1d95', description: 'Microsoft supports Semantic Kernel v1.x for the foreseeable future with critical and security fixes, and puts most new features in Agent Framework. No sunset date is announced and migration guides exist.' } },
  { id: 'W_Third', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'LangGraph and others\nThird-party, host anywhere', category: 'recommendation', branch: 'multi-agent', color: '#78350f', description: 'State-graph frameworks outside the Microsoft stack. Host them in Foundry Hosted Agents, Container Apps or AKS. Governance is inherited from the host.' } },
  { id: 'W_Retire', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Foundry Workflows today?\nSee the Migration Calendar', category: 'linkout', branch: 'multi-agent', description: 'Foundry Workflows are retiring: the visual designer and in-portal execution stop. Paths are Agent Framework, Logic Apps and A2A. The Migration Calendar has the date.', docsUrl: `${BASE}/quick-reference#lifecycle-status-quick-reference` } },
];

const edges: Edge<EdgeData>[] = [
  { id: 'e1-Start-Why', source: 'Start', target: 'Why', data: { variant: 'default' } },
  { id: 'e2-Why-Solo', source: 'Why', target: 'Solo', label: 'More steps or roles,\nor a growth forecast', data: { variant: 'default' } },
  { id: 'e3-Why-C_Platform', source: 'Why', target: 'C_Platform', label: 'Security boundary or\nseparate teams own it', data: { variant: 'default' } },
  { id: 'e4-Why-W_Style', source: 'Why', target: 'W_Style', label: 'Measured failure,\ntool overload', data: { variant: 'default' } },
  { id: 'e5-Solo-SoloLink', source: 'Solo', target: 'SoloLink', data: { variant: 'default' } },
  { id: 'e6-C_Platform-C_Studio', source: 'C_Platform', target: 'C_Studio', label: 'Low-code,\nMicrosoft 365 reach', data: { variant: 'default' } },
  { id: 'e7-C_Platform-C_Foundry', source: 'C_Platform', target: 'C_Foundry', label: 'Azure,\npro-code', data: { variant: 'default' } },
  { id: 'e8-W_Style-W_Studio', source: 'W_Style', target: 'W_Studio', label: 'Low-code makers', data: { variant: 'default' } },
  { id: 'e9-W_Style-W_MAF', source: 'W_Style', target: 'W_MAF', label: 'New code-first build', data: { variant: 'default' } },
  { id: 'e10-W_Style-W_SK', source: 'W_Style', target: 'W_SK', label: 'Existing SK or\nAutoGen code', data: { variant: 'default' } },
  { id: 'e11-W_Style-W_Third', source: 'W_Style', target: 'W_Third', label: 'Existing LangGraph\nor other framework', data: { variant: 'default' } },
  { id: 'e12-W_Style-W_Retire', source: 'W_Style', target: 'W_Retire', label: 'Foundry Workflows\ntoday', data: { variant: 'default' } },
  { id: 'e13-W_MAF-W_SDK', source: 'W_MAF', target: 'W_SDK', data: { variant: 'default' } },
];

export const multiAgentFlow: FlowDefinition = {
  title: 'Multi-Agent Orchestration',
  description: 'Do you need a second agent, and how to connect or orchestrate it.',
  frameworkRef: 'Decision Framework: Question 4 (Orchestration Complexity)',
  docsSection: '/docs/visual-framework#multi-agent-orchestration',
  nodes,
  edges,
};

