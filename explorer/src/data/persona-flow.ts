import type { Node, Edge } from '@xyflow/react';
import type { FlowDefinition, NodeData, EdgeData } from '../types';

const BASE = '/Microsoft-AI-Decision-Framework/docs';

const nodes: Node<NodeData>[] = [
  { id: 'Start', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Start: where are you\nstarting from?', category: 'start', branch: 'overview' } },
  { id: 'P1', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Your role?\n(an on-ramp, not a gate)', category: 'question', branch: 'persona', description: 'Roles are on-ramps. Any role can take any branch; the problem and what you will own decide (AI Stack, The New Rule).' } },

  // End user
  { id: 'User', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Microsoft 365 Copilot\n+ Cowork for hand-offs', category: 'recommendation', branch: 'persona', color: '#064e3b', docsUrl: `${BASE}/technologies#microsoft-365-copilot` } },

  // Business maker
  { id: 'Maker', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'What are you making?', category: 'question', branch: 'persona' } },
  { id: 'MkHarness', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Which Studio harness?\n(fixed at creation)', category: 'question', branch: 'persona', description: 'Agents cannot move between harnesses. Default to Standard; take the GitHub Copilot harness when you can name the wall: long-running, coordination-heavy, reasoning-intensive.' } },
  { id: 'MkChat', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Copilot chat harness:\nextend Microsoft Copilot', category: 'recommendation', branch: 'persona', status: 'unstated', color: '#1e3a5f', docsUrl: `${BASE}/technologies#copilot-studio`, description: 'Internal publishing only. Learn states no explicit status label (updated 2026-10-01).' } },
  { id: 'MkStd', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Standard harness:\nrule-based, predictable', category: 'recommendation', branch: 'persona', color: '#1e3a5f', docsUrl: `${BASE}/technologies#copilot-studio`, description: 'Billing starts after publish.' } },
  { id: 'MkGH', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'GitHub Copilot harness:\nreasoning-heavy', category: 'recommendation', branch: 'persona', color: '#1e3a5f', docsUrl: `${BASE}/technologies#copilot-studio`, description: 'GA per Copilot Studio blog (2026-08-03 / 2026-09-02). Consumes Copilot Credits from first build, test, and evaluation.' } },
  { id: 'MkWF', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Copilot Studio workflows\nor agent flows', category: 'recommendation', branch: 'persona', status: 'unstated', color: '#1e3a5f', docsUrl: `${BASE}/technologies#copilot-studio`, description: 'Agent flows on the standard harness are GA; Workflows on the GitHub Copilot harness carry no page-level preview banner (updated 2026-10-12), while specific nodes such as the Copilot node are Preview.' } },

  // Business builder (describe an app)
  { id: 'BBuy', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Does a list, workbook,\nor SaaS already solve it?', category: 'question', branch: 'persona' } },
  { id: 'BBuyOut', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Use it.\nSkip the app.', category: 'outcome', branch: 'persona' } },
  { id: 'BOwner', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Name an owner first:\nbefore any share link', category: 'warning', branch: 'persona' } },
  { id: 'BWho', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Who will use it?', category: 'question', branch: 'persona' } },
  { id: 'BCode', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Copilot Code', category: 'recommendation', branch: 'persona', status: 'preview', color: '#1e3a5f', docsUrl: 'https://learn.microsoft.com/en-us/copilot/code/overview', description: 'Frontier preview on Learn (10-page docset, updated 2026-10-14). Separate tab in the Microsoft Copilot app; billed in Copilot Credits.' } },
  { id: 'BCowork', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Cowork App skill', category: 'recommendation', branch: 'persona', status: 'preview', color: '#1e3a5f', docsUrl: `${BASE}/technologies#microsoft-365-copilot`, description: 'Frontier preview. Test app data and connected data with an account that lacks source access before sharing.' } },
  { id: 'BStudio', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Copilot Studio apps', category: 'recommendation', branch: 'persona', status: 'preview', color: '#1e3a5f', docsUrl: `${BASE}/technologies#copilot-studio`, description: 'Preview, rolling out gradually. Code view is read-only; bills from creation on the GitHub Copilot harness.' } },
  { id: 'BHand', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Same repo: GitHub Copilot\n+ Managed Runtime CLI', category: 'recommendation', branch: 'persona', status: 'preview', color: '#4c1d95', docsUrl: `${BASE}/technologies#copilot-managed-runtime`, description: 'Promotion without the rewrite on Copilot Managed Runtime (Preview). Bind your own GitHub repository at creation to keep branch policies and PR reviews.' } },
  { id: 'BVibe', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Power Apps vibe\n(forks on handoff)', category: 'recommendation', branch: 'persona', status: 'preview', color: '#1e3a5f', docsUrl: 'https://learn.microsoft.com/en-us/power-apps/vibe/overview', description: 'Preview. Its overview recommends Cowork and Copilot Studio app building moving forward; converting to a code app creates a separate, disconnected app.' } },
  { id: 'BCust', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Customers? Settle hosting\nand sign-in first', category: 'warning', branch: 'persona' } },

  // Developer
  { id: 'Dev', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'What are you building?', category: 'question', branch: 'persona' } },
  { id: 'DevLoop', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Which rung of the\ndeveloper loop?', category: 'question', branch: 'persona' } },
  { id: 'DevIDE', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'GitHub Copilot agent\nmode in the IDE', category: 'recommendation', branch: 'persona', color: '#4c1d95', docsUrl: `${BASE}/technologies#github-copilot--tech-heading-` } },
  { id: 'DevCloud', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Copilot cloud agent:\nissue in, PR out', category: 'recommendation', branch: 'persona', color: '#4c1d95', docsUrl: `${BASE}/technologies#github-copilot--tech-heading-`, description: 'GA on all paid Copilot plans including Student; not available on Copilot Free.' } },
  { id: 'DevCustom', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Custom agents\n+ AGENTS.md', category: 'recommendation', branch: 'persona', color: '#4c1d95', docsUrl: `${BASE}/technologies#github-copilot--tech-heading-`, description: 'Custom agents are GA for cloud agent, VS Code, and Visual Studio (Public Preview for JetBrains, Eclipse, Xcode). AGENTS.md is not supported by all Copilot features.' } },
  { id: 'DevGHSDK', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'GitHub Copilot SDK:\nFoundry hosts Python, C#', category: 'recommendation', branch: 'persona', color: '#78350f', docsUrl: `${BASE}/technologies#github-copilot-sdk--tech-heading-`, description: 'The SDK ships six language bindings (Python, TypeScript, Go, .NET, Java, Rust); Foundry Hosted agents accept Python and C# only.' } },
  { id: 'DevOwn', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Own the runtime\nand the on-call?', category: 'question', branch: 'persona', description: 'Replaces Skill level?. The question is what you will own (runtime, CI/CD, on-call), not your job title.' } },
  { id: 'DevStudio', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Copilot Studio\n+ custom code', category: 'recommendation', branch: 'persona', color: '#1e3a5f', docsUrl: `${BASE}/technologies#copilot-studio` } },
  { id: 'DevM365', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'M365 Agents SDK', category: 'recommendation', branch: 'persona', color: '#4c1d95', docsUrl: `${BASE}/technologies#microsoft-365-agents-sdk--toolkit--tech-heading-` } },
  { id: 'DevAzure', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Microsoft Foundry - Azure', category: 'recommendation', branch: 'persona', color: '#7f1d1d', docsUrl: `${BASE}/technologies#microsoft-foundry-azure` } },
  { id: 'DevAuto', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'What fires it?', category: 'question', branch: 'persona' } },
  { id: 'DevRoutines', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Foundry routines', category: 'recommendation', branch: 'persona', color: '#7f1d1d', docsUrl: `${BASE}/technologies#foundry-agent-service--tech-heading-`, description: 'GA on Learn (2026-09-09) for timer, recurring, and GitHub/Teams event triggers on prompt and hosted agents.' } },
  { id: 'DevLogic', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Logic Apps agentic\nworkflows', category: 'recommendation', branch: 'persona', status: 'preview', color: '#1e3a5f', docsUrl: `${BASE}/feature-comparison#logic-apps-agentic-workflows` } },
  { id: 'DevOrch', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Microsoft Agent Framework\n(boundary-driven only)', category: 'recommendation', branch: 'persona', color: '#4c1d95', docsUrl: `${BASE}/technologies#microsoft-agent-framework--tech-heading-`, description: 'Add a second agent only when a boundary forces it: separate owner, security context, or release cadence.' } },
  { id: 'DevAGUI', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Agent Framework\n+ AG-UI', category: 'recommendation', branch: 'persona', status: 'unstated', color: '#4c1d95', docsUrl: `${BASE}/technologies#microsoft-agent-framework--tech-heading-`, description: 'Python stable (1.5.1); .NET preview; Learn states no overall status label.' } },

  // Data Scientist
  { id: 'DS', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Primary workload?', category: 'question', branch: 'persona' } },
  { id: 'DSFabric', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Fabric data agents', category: 'recommendation', branch: 'persona', color: '#78350f', docsUrl: `${BASE}/technologies#microsoft-fabric--tech-heading-`, description: 'Core data agent is GA (requires F2+ or P1+ capacity). Cross-platform consumption routes are Preview, and the Foundry Microsoft Fabric tool retires 2026-11-06.' } },
  { id: 'DSFoundry', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Microsoft Foundry - Azure:\nML and custom models', category: 'recommendation', branch: 'persona', color: '#7f1d1d', docsUrl: `${BASE}/technologies#microsoft-foundry-azure` } },

  // Integration Specialist
  { id: 'IntSpec', position: { x: 0, y: 0 }, type: 'decision', data: { label: 'Logic Apps agentic\nworkflows', category: 'recommendation', branch: 'persona', status: 'preview', color: '#1e3a5f', docsUrl: `${BASE}/feature-comparison#logic-apps-agentic-workflows` } },
];

const edges: Edge<EdgeData>[] = [
  { id: 'e-start', source: 'Start', target: 'P1', data: { variant: 'default' } },
  { id: 'e-p1-user', source: 'P1', target: 'User', label: 'End user', data: { variant: 'default' } },
  { id: 'e-p1-maker', source: 'P1', target: 'Maker', label: 'Business maker', data: { variant: 'default' } },
  { id: 'e-p1-builder', source: 'P1', target: 'BBuy', label: 'Business builder', data: { variant: 'default' } },
  { id: 'e-p1-dev', source: 'P1', target: 'Dev', label: 'Developer', data: { variant: 'default' } },
  { id: 'e-p1-ds', source: 'P1', target: 'DS', label: 'Data or analytics', data: { variant: 'default' } },
  { id: 'e-p1-int', source: 'P1', target: 'IntSpec', label: 'Integration', data: { variant: 'default' } },

  // Maker
  { id: 'e-mk-agent', source: 'Maker', target: 'MkHarness', label: 'An agent', data: { variant: 'default' } },
  { id: 'e-mk-wf', source: 'Maker', target: 'MkWF', label: 'A workflow', data: { variant: 'default' } },
  { id: 'e-mk-app', source: 'Maker', target: 'BBuy', label: 'An app', data: { variant: 'default' } },
  { id: 'e-mkh-chat', source: 'MkHarness', target: 'MkChat', label: 'Employee answers in Copilot', data: { variant: 'default' } },
  { id: 'e-mkh-std', source: 'MkHarness', target: 'MkStd', label: 'Short, bounded, explicit', data: { variant: 'default' } },
  { id: 'e-mkh-gh', source: 'MkHarness', target: 'MkGH', label: 'Long-running, reasoning', data: { variant: 'default' } },

  // Business builder
  { id: 'e-bbuy-yes', source: 'BBuy', target: 'BBuyOut', label: 'Yes', data: { variant: 'yes' } },
  { id: 'e-bbuy-no', source: 'BBuy', target: 'BOwner', label: 'No', data: { variant: 'no' } },
  { id: 'e-bown-who', source: 'BOwner', target: 'BWho', data: { variant: 'default' } },
  { id: 'e-bwho-code', source: 'BWho', target: 'BCode', label: 'Just me', data: { variant: 'default' } },
  { id: 'e-bwho-cowork', source: 'BWho', target: 'BCowork', label: 'My team, over M365 content', data: { variant: 'default' } },
  { id: 'e-bwho-studio', source: 'BWho', target: 'BStudio', label: 'One step in a process', data: { variant: 'default' } },
  { id: 'e-bwho-hand', source: 'BWho', target: 'BHand', label: 'The department depends on it', data: { variant: 'default' } },
  { id: 'e-bwho-vibe', source: 'BWho', target: 'BVibe', label: 'On the Power Platform', data: { variant: 'default' } },
  { id: 'e-bwho-cust', source: 'BWho', target: 'BCust', label: 'Customers', data: { variant: 'default' } },

  // Developer
  { id: 'e-dev-loop', source: 'Dev', target: 'DevLoop', label: 'Software, with AI helping', data: { variant: 'default' } },
  { id: 'e-dev-own', source: 'Dev', target: 'DevOwn', label: 'An agent people talk to', data: { variant: 'default' } },
  { id: 'e-dev-auto', source: 'Dev', target: 'DevAuto', label: 'An agent that acts on events', data: { variant: 'default' } },
  { id: 'e-dev-orch', source: 'Dev', target: 'DevOrch', label: 'Several cooperating agents', data: { variant: 'default' } },
  { id: 'e-dev-agui', source: 'Dev', target: 'DevAGUI', label: 'A custom streaming UI', data: { variant: 'default' } },

  { id: 'e-dl-ide', source: 'DevLoop', target: 'DevIDE', label: 'Stay in the editor', data: { variant: 'default' } },
  { id: 'e-dl-cloud', source: 'DevLoop', target: 'DevCloud', label: 'Delegate a whole issue', data: { variant: 'default' } },
  { id: 'e-dl-cust', source: 'DevLoop', target: 'DevCustom', label: 'Specialize the agent', data: { variant: 'default' } },
  { id: 'e-dl-sdk', source: 'DevLoop', target: 'DevGHSDK', label: 'Build on the harness', data: { variant: 'default' } },

  { id: 'e-do-studio', source: 'DevOwn', target: 'DevStudio', label: 'No: configure, extend', data: { variant: 'default' } },
  { id: 'e-do-m365', source: 'DevOwn', target: 'DevM365', label: 'Yes, Microsoft 365-centric', data: { variant: 'default' } },
  { id: 'e-do-azure', source: 'DevOwn', target: 'DevAzure', label: 'Yes, Azure-centric', data: { variant: 'default' } },

  { id: 'e-da-rout', source: 'DevAuto', target: 'DevRoutines', label: 'Schedule, GitHub, Teams', data: { variant: 'default' } },
  { id: 'e-da-logic', source: 'DevAuto', target: 'DevLogic', label: 'Many business systems', data: { variant: 'default' } },
  { id: 'e-da-orch', source: 'DevAuto', target: 'DevOrch', label: 'Code-defined workflow', data: { variant: 'default' } },
  { id: 'e-da-studio', source: 'DevAuto', target: 'DevStudio', label: 'Low-code triggers', data: { variant: 'default' } },

  // Data Scientist
  { id: 'e-ds-bi', source: 'DS', target: 'DSFabric', label: 'Analytics and BI', data: { variant: 'default' } },
  { id: 'e-ds-ml', source: 'DS', target: 'DSFoundry', label: 'ML and custom models', data: { variant: 'default' } },
];

export const personaFlow: FlowDefinition = {
  title: 'Persona-Based Flow',
  description: 'Start from your role, decide by what you will own.',
  frameworkRef: 'Phase 2: Q2 (build style) and Q8 (team skills and ownership)',
  docsSection: '/docs/visual-framework#persona-based-flow',
  nodes,
  edges,
};

