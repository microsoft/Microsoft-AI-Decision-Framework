export { completeDecisionFlow } from './complete-decision-flow';
export { dataGroundingFlow } from './data-grounding-flow';
import type { FlowDefinition } from '../types';
import { completeDecisionFlow } from './complete-decision-flow';
import { dataGroundingFlow } from './data-grounding-flow';

/** Registry of all available flows. Keyed by URL-friendly slug. */
export const flows: Record<string, FlowDefinition> = {
  'complete-decision': completeDecisionFlow,
  'data-grounding': dataGroundingFlow,
};
