import type { FlowDefinition } from '../types';
import { completeDecisionFlow } from './complete-decision-flow';
import { dataGroundingFlow } from './data-grounding-flow';
import { personaFlow } from './persona-flow';
import { complexityFlow } from './complexity-flow';
import { budgetFlow } from './budget-flow';
import { governanceFlow } from './governance-flow';
import { multiAgentFlow } from './multi-agent-flow';
import { upgradeFlow } from './upgrade-flow';
import { lifecycleFlow } from './lifecycle-flow';
import { iqLayerFlow } from './iq-layer-flow';

/** Registry of all available flows. Keyed by URL-friendly slug. */
export const flows: Record<string, FlowDefinition> = {
  'complete-decision': completeDecisionFlow,
  'persona': personaFlow,
  'data-grounding': dataGroundingFlow,
  'complexity': complexityFlow,
  'budget': budgetFlow,
  'governance': governanceFlow,
  'multi-agent': multiAgentFlow,
  'upgrade': upgradeFlow,
  'lifecycle': lifecycleFlow,
  'iq-layer': iqLayerFlow,
};
