import type { NodeData } from '../types';

/*
 * The flow data authors node fills as dark colors (`color` in src/data).
 * Each one maps to a named tone whose light and dark appearance lives in
 * explorer.css, so the graph follows the reader's theme through CSS alone:
 * in dark, a tone reproduces the authored fill exactly; in light, it becomes
 * a tint of the same hue with a saturated border and ink text.
 */
const FILL_TONES: Record<string, string> = {
  '#1e3a5f': 'navy',
  '#4c1d95': 'violet',
  '#78350f': 'amber',
  '#7f1d1d': 'maroon',
  '#064e3b': 'green',
  '#0e5a6f': 'teal',
  '#1e4d6e': 'steel',
};

/** Nodes without an authored fill take their category's tone. */
const CATEGORY_TONES: Record<NodeData['category'], string> = {
  start: 'start',
  question: 'question',
  decision: 'decision',
  recommendation: 'decision',
  warning: 'warning',
  outcome: 'outcome',
  reference: 'reference',
  linkout: 'linkout',
};

/**
 * The tone class for a node, or null when its authored color has no tone
 * (a new color added to the data); that node keeps its literal fill.
 */
export function nodeTone(data: NodeData): string | null {
  if (data.color) {
    const tone = FILL_TONES[data.color.toLowerCase()];
    return tone ? `tone-${tone}` : null;
  }
  return `tone-${CATEGORY_TONES[data.category] ?? 'decision'}`;
}
