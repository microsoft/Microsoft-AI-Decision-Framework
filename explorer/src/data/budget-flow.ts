import type { Node, Edge } from '@xyflow/react';
import type { FlowDefinition, NodeData, EdgeData } from '../types';

const BASE = '/Microsoft-AI-Decision-Framework/docs';

const nodes: Node<NodeData>[] = [
  { id: 'Start', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Project Constraints', category: 'start', branch: 'overview' } },
  { id: 'Q1', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'How is it\npaid for?', category: 'question', branch: 'budget', docsUrl: `${BASE}/evaluation-criteria#3-budget-assessment`, description: 'A seat and a meter can fund the same work. Budget headcount and consumption separately, with an owner for each. Learn notes usage-based billing may be better funded by business units.' } },
  { id: 'SeatQ', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Who needs it?', category: 'question', branch: 'budget' } },
  { id: 'S_Full', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'M365 Copilot USL\nUSD 30/user/month\nRunway: days', category: 'recommendation', branch: 'budget', color: '#1e3a5f', description: 'Everyday AI, paid yearly, qualifying Microsoft 365 plan required. Licensed users incur no extra charge for extensibility (connectors, agents, plugins). Advanced work (Cowork, Code, Autopilot, frontier models) adds Copilot Credits.' } },
  { id: 'S_Chat', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Copilot Chat included\nShared data metered\nRunway: days', category: 'recommendation', branch: 'budget', color: '#1e3a5f', description: 'Instruction-only and public-site agents add no charge. Agents grounded in shared tenant data (SharePoint, Copilot connectors) are metered in Copilot Credits via Copilot Studio.' } },
  { id: 'MeterQ', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Which surface\nmeters it?', category: 'question', branch: 'budget' } },
  { id: 'M_Harness', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Studio: GitHub Copilot\nharness, credits from\nfirst build', category: 'recommendation', branch: 'budget', color: '#1e3a5f', description: 'Credits cover LLM tokens, tools (including knowledge and MCP), and the harness. Creating, previewing, testing, and evaluating all consume credits. Managed in the Power Platform admin center.' } },
  { id: 'M_Std', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Studio: standard harness\nbilled after publish\nPAYG or packs', category: 'recommendation', branch: 'budget', color: '#1e3a5f', description: 'Unused pack credits do not carry over month to month. Pack vs PAYG break-even is about 20,000 credits per month (derived from carried list prices).' } },
  { id: 'M_UBB', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Cowork, Code, Autopilot,\nWork IQ API: UBB', category: 'recommendation', branch: 'budget', color: '#1e3a5f', description: 'Copilot Credits via usage-based billing; set a spending policy first (Microsoft 365 admin center, Copilot, Cost management). Cowork, Code, and advanced SharePoint or OneDrive list Copilot license required; Work IQ API, Managed Runtime, and Teams Phone Agent do not. Autopilot here is the Copilot app Autopilot.' } },
  { id: 'M_App', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Managed Runtime apps\nbuild bill + run bill', category: 'recommendation', branch: 'budget', status: 'preview', color: '#78350f', description: 'Build: Cowork usage or the Studio harness. Run: a charge per launch plus 0.1 credit per API call, or a Power Apps Premium plan. Entitlement applies to developers running locally too.' } },
  { id: 'M_Macc', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'MACC holder? Pick the\nbilling subscription', category: 'warning', branch: 'budget', description: 'Eligible Copilot usage applies to a MACC only when the Azure subscription chosen for usage-based billing sits under the billing account that holds the commitment. Otherwise you still pay, but it might not count.' } },
  { id: 'AzureQ', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Workload shape?', category: 'question', branch: 'budget' } },
  { id: 'A_Token', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Foundry pay-per-token\n+ AI Search Dedicated', category: 'recommendation', branch: 'budget', color: '#1e3a5f' } },
  { id: 'A_Agent', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Foundry Agent Service\nmodel + tool meters', category: 'recommendation', branch: 'budget', color: '#1e3a5f', description: 'Hosted agents add container vCPU-hour and GiB-hour compute for active sessions.' } },
  { id: 'A_PTU', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Foundry PTU\nhourly or reserved', category: 'recommendation', branch: 'budget', color: '#7f1d1d', description: 'Reservations apply before prepurchase plans. Confirm PTU capacity before buying a reservation.' } },
  { id: 'A_Srch', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'AI Search Serverless\nDeveloper tier', category: 'recommendation', branch: 'budget', status: 'preview', color: '#78350f', description: 'Billing began 2026-09-13. Preview: no SLA, not recommended for production, no migration to or from other tiers, limited regions. Semantic ranking, query rewriting, and skill execution bill on their own meters.' } },
  { id: 'CommitQ', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'What must it\ncover?', category: 'question', branch: 'budget' } },
  { id: 'P_Res', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Reservations\nPTU and Fabric\napplied first', category: 'recommendation', branch: 'budget', color: '#78350f' } },
  { id: 'P_CCCU', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Copilot Credit\nPre-Purchase Plan\nCCCU, applied next', category: 'recommendation', branch: 'budget', color: '#78350f' } },
  { id: 'P_ACU', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Microsoft Agent\nPrepurchase Plan\nACU, applied last', category: 'recommendation', branch: 'budget', color: '#78350f', description: 'Covers select services across Foundry, Copilot Studio, Fabric, and GitHub. The Microsoft 365 admin center shows only the Copilot Credit P3 balance, though Agent P3 credits are used before overage.' } },
  { id: 'P_Final', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'One-year term,\nauto-renew on,\nall purchases final', category: 'warning', branch: 'budget' } },
];

const edges: Edge<EdgeData>[] = [
  { id: 'e-start', source: 'Start', target: 'Q1', data: { variant: 'default' } },
  { id: 'e-q1-seat', source: 'Q1', target: 'SeatQ', label: 'Seats', data: { variant: 'default' } },
  { id: 'e-q1-meter', source: 'Q1', target: 'MeterQ', label: 'Copilot Credits', data: { variant: 'default' } },
  { id: 'e-q1-azure', source: 'Q1', target: 'AzureQ', label: 'Azure meters', data: { variant: 'default' } },
  { id: 'e-q1-commit', source: 'Q1', target: 'CommitQ', label: 'Prepaid commitment', data: { variant: 'default' } },
  { id: 'e-seat-full', source: 'SeatQ', target: 'S_Full', label: 'Frequent users', data: { variant: 'default' } },
  { id: 'e-seat-chat', source: 'SeatQ', target: 'S_Chat', label: 'Occasional users', data: { variant: 'default' } },
  { id: 'e-full-meter', source: 'S_Full', target: 'MeterQ', label: 'Advanced work adds a meter', data: { variant: 'default' } },
  { id: 'e-meter-harness', source: 'MeterQ', target: 'M_Harness', label: 'Studio, GitHub Copilot harness', data: { variant: 'default' } },
  { id: 'e-meter-std', source: 'MeterQ', target: 'M_Std', label: 'Studio, standard harness', data: { variant: 'default' } },
  { id: 'e-meter-ubb', source: 'MeterQ', target: 'M_UBB', label: 'Cowork, Code, Autopilot, Work IQ API', data: { variant: 'default' } },
  { id: 'e-meter-app', source: 'MeterQ', target: 'M_App', label: 'Apps on Managed Runtime', data: { variant: 'default' } },
  { id: 'e-ubb-macc', source: 'M_UBB', target: 'M_Macc', data: { variant: 'default' } },
  { id: 'e-azure-token', source: 'AzureQ', target: 'A_Token', label: 'Variable or modest volume', data: { variant: 'default' } },
  { id: 'e-azure-agent', source: 'AzureQ', target: 'A_Agent', label: 'Managed agent runtime', data: { variant: 'default' } },
  { id: 'e-azure-ptu', source: 'AzureQ', target: 'A_PTU', label: 'Steady high throughput', data: { variant: 'default' } },
  { id: 'e-azure-srch', source: 'AzureQ', target: 'A_Srch', label: 'Prototype retrieval only', data: { variant: 'default' } },
  { id: 'e-commit-res', source: 'CommitQ', target: 'P_Res', label: 'PTU or Fabric capacity', data: { variant: 'default' } },
  { id: 'e-commit-cccu', source: 'CommitQ', target: 'P_CCCU', label: 'Copilot Credits only', data: { variant: 'default' } },
  { id: 'e-commit-acu', source: 'CommitQ', target: 'P_ACU', label: 'Credits plus Foundry, Fabric, GitHub', data: { variant: 'default' } },
  { id: 'e-res-final', source: 'P_Res', target: 'P_Final', data: { variant: 'default' } },
  { id: 'e-cccu-final', source: 'P_CCCU', target: 'P_Final', data: { variant: 'default' } },
  { id: 'e-acu-final', source: 'P_ACU', target: 'P_Final', data: { variant: 'default' } },
];

export const budgetFlow: FlowDefinition = {
  title: 'Budget & Timeline',
  description: 'Who pays and how: seats, Copilot Credits, Azure meters, and prepaid commitments.',
  frameworkRef: 'Evaluation Criteria: Budget (Three Wallets, Order of the Burn)',
  docsSection: '/docs/visual-framework#budget--timeline-tradeoffs',
  nodes,
  edges,
};

