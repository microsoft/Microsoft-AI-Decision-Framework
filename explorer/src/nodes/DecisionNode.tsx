import { memo } from 'react';
import { Handle, Position, type NodeProps, type Node } from '@xyflow/react';
import type { NodeData } from '../types';
import { nodeTone } from './tone';

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
  // Fill, border and text color come from the node's tone in explorer.css, so
  // a theme change restyles the graph without re-rendering it.
  const tone = nodeTone(data);
  const untoned = !tone && data.color
    ? { background: data.color, borderColor: data.color, color: '#ffffff' }
    : undefined;

  const badge = data.status ? STATUS_BADGE[data.status] : null;
  const isQuestion = data.category === 'question';
  const isStart = data.category === 'start';
  const isOutcome = data.category === 'outcome';

  return (
    <div
      className={`decision-node ${tone ?? ''}`}
      style={{
        borderRadius: isStart || isOutcome ? 20 : isQuestion ? 2 : 8,
        cursor: data.docsUrl ? 'pointer' : 'default',
        ...untoned,
      }}
      title={data.description ?? data.label}
    >
      <Handle type="target" position={Position.Top} className="decision-node__handle" />
      <div
        className="decision-node__label"
        style={{
          fontFamily: isQuestion
            ? "'Sora', 'Source Sans 3', sans-serif"
            : "'Source Sans 3', sans-serif",
        }}
      >
        {data.label}
      </div>
      {badge && (
        <span className="decision-node__badge" style={{ background: badge.color }}>
          {badge.label}
        </span>
      )}
      <Handle type="source" position={Position.Bottom} className="decision-node__handle" />
    </div>
  );
}

export default memo(DecisionNode);
