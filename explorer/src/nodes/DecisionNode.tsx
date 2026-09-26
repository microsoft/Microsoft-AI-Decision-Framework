import { memo } from 'react';
import { Handle, Position, type NodeProps, type Node } from '@xyflow/react';
import type { NodeData } from '../types';

/*
 * Node fills are authored for the dark canvas (the "figure"), which stays dark
 * in both site themes; see explorer.css.
 */
const CATEGORY_COLORS: Record<string, { bg: string; border: string }> = {
  start:          { bg: '#111827', border: '#3b82f6' },
  question:       { bg: '#111827', border: '#7c3aed' },
  decision:       { bg: '#1e3a5f', border: '#3b82f6' },
  recommendation: { bg: '#1e3a5f', border: '#3b82f6' },
  warning:        { bg: '#78350f', border: '#f59e0b' },
  outcome:        { bg: '#064e3b', border: '#10b981' },
  reference:      { bg: '#4c1d95', border: '#7c3aed' },
  linkout:        { bg: '#7f1d1d', border: '#ef4444' },
};

// The site's inline diagram palette (AGENTS.md): white labels at 5.6:1 or
// better. The old green, amber and red fills put 10px labels at 2.5 to 3.8:1.
const STATUS_BADGE: Record<string, { label: string; color: string }> = {
  ga:           { label: 'GA',           color: '#0b6a0b' },
  preview:      { label: 'Preview',      color: '#8c5e00' },
  experimental: { label: 'Experimental', color: '#a52617' },
  deprecated:   { label: 'Deprecated',   color: '#a52617' },
};

type DecisionNodeType = Node<NodeData>;

function DecisionNode({ data }: NodeProps<DecisionNodeType>) {
  const raw = data.color
    ? { bg: data.color, border: data.color }
    : CATEGORY_COLORS[data.category];
  const palette = raw ?? CATEGORY_COLORS.decision!;

  const badge = data.status ? STATUS_BADGE[data.status] : null;
  const isQuestion = data.category === 'question';
  const isStart = data.category === 'start';
  const isOutcome = data.category === 'outcome';

  return (
    <div
      style={{
        background: palette.bg,
        border: `2px solid ${palette.border}`,
        borderRadius: isStart || isOutcome ? 20 : isQuestion ? 2 : 8,
        padding: '10px 14px',
        color: '#eef3fb',
        fontFamily: "'Source Sans 3', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        fontSize: 13,
        minWidth: 140,
        maxWidth: 220,
        textAlign: 'center',
        cursor: data.docsUrl ? 'pointer' : 'default',
        position: 'relative',
        boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
      }}
      title={data.description ?? data.label}
    >
      <Handle type="target" position={Position.Top} style={{ background: palette.border, width: 8, height: 8 }} />
      <div style={{
        fontWeight: 600,
        lineHeight: 1.35,
        fontFamily: isQuestion
          ? "'Sora', 'Source Sans 3', sans-serif"
          : "'Source Sans 3', sans-serif",
      }}>
        {data.label}
      </div>
      {badge && (
        <span
          style={{
            display: 'inline-block',
            marginTop: 5,
            padding: '2px 8px',
            borderRadius: 4,
            fontSize: 10,
            fontWeight: 700,
            background: badge.color,
            color: '#fff',
            letterSpacing: '0.03em',
          }}
        >
          {badge.label}
        </span>
      )}
      <Handle type="source" position={Position.Bottom} style={{ background: palette.border, width: 8, height: 8 }} />
    </div>
  );
}

export default memo(DecisionNode);
