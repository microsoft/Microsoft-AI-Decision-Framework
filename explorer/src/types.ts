/** Shared types for the AIDF Decision Explorer graph data model. */

/** Node categories control visual style and icon. */
export type NodeCategory =
  | 'start'
  | 'question'
  | 'decision'
  | 'recommendation'
  | 'warning'
  | 'outcome'
  | 'reference'
  | 'linkout';

/** Technology status per Constitution Article III. */
export type TechStatus = 'ga' | 'preview' | 'experimental' | 'deprecated';

/** Branches group nodes into isolatable sub-trees. */
export type BranchId =
  | 'overview'
  | 'interaction-pattern'
  | 'build-approach'
  | 'data-grounding'
  | 'vector-db'
  | 'deployment'
  | 'persona'
  | 'governance'
  | 'complexity'
  | 'budget'
  | 'multi-agent'
  | 'upgrade'
  | 'lifecycle'
  | 'iq-layer';

/** Metadata attached to every graph node. */
export interface NodeData {
  [key: string]: unknown;
  /** Display label (keep short — details belong in the panel). */
  label: string;
  /** Optional secondary description shown in tooltip / panel. */
  description?: string;
  /** Visual category drives the custom node component style. */
  category: NodeCategory;
  /** Which branch this node belongs to (for isolation filtering). */
  branch: BranchId;
  /** GA / Preview / Experimental — shown as a badge. */
  status?: TechStatus;
  /** URL to the docs page this node links to. */
  docsUrl?: string;
  /** Color override — maps to the existing Mermaid palette. */
  color?: string;
}

/** Edge label types drive visual styling of connections. */
export type EdgeVariant =
  | 'yes'
  | 'no'
  | 'depends'
  | 'recommended'
  | 'optional'
  | 'blocked'
  | 'learn-more'
  | 'default';

/** Metadata attached to every edge. */
export interface EdgeData {
  [key: string]: unknown;
  variant: EdgeVariant;
}

/** A flow definition is a named collection of nodes + edges. */
export interface FlowDefinition {
  /** Human-readable title shown in the explorer header. */
  title: string;
  /** Short description for the flow selector. */
  description: string;
  /** Maps to the decision-framework question(s). */
  frameworkRef: string;
  /** URL path to the relevant docs section for "View in Docs" link. */
  docsSection: string;
  /** The raw node list (positions computed by dagre). */
  nodes: import('@xyflow/react').Node<NodeData>[];
  /** The raw edge list. */
  edges: import('@xyflow/react').Edge<EdgeData>[];
}
