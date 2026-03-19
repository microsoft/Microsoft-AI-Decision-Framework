import { useCallback, useMemo, useState } from 'react';
import {
  ReactFlow,
  Background,
  Controls,
  MiniMap,
  useNodesState,
  useEdgesState,
  type Node,
  type NodeMouseHandler,
  BackgroundVariant,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';

import DecisionNode from '../nodes/DecisionNode';
import { applyDagreLayout } from '../layout';
import { flows } from '../data';
import type { NodeData, BranchId } from '../types';
import '../styles/explorer.css';

const nodeTypes = { decision: DecisionNode };

const DOCS_BASE = '/Microsoft-AI-Decision-Framework';

const STATUS_COLORS: Record<string, string> = {
  ga: '#10b981',
  preview: '#f59e0b',
  experimental: '#ef4444',
  deprecated: '#ef4444',
};

export default function Explorer() {
  const flowKeys = Object.keys(flows);
  const [activeFlowKey, setActiveFlowKey] = useState(flowKeys[0] ?? '');
  const [activeBranch, setActiveBranch] = useState<BranchId | 'all'>('all');
  const [selectedNode, setSelectedNode] = useState<NodeData | null>(null);

  const flow = flows[activeFlowKey];

  // Compute visible nodes/edges based on branch filter
  const { layoutNodes, layoutEdges, branches } = useMemo(() => {
    if (!flow) return { layoutNodes: [], layoutEdges: [], branches: [] as BranchId[] };

    // Collect unique branches
    const branchSet = new Set<BranchId>();
    flow.nodes.forEach((n) => branchSet.add(n.data.branch));
    const branches = Array.from(branchSet);

    // Filter by branch
    let filteredNodes = flow.nodes;
    let filteredEdges = flow.edges;
    if (activeBranch !== 'all') {
      const visibleIds = new Set(
        flow.nodes.filter((n) => n.data.branch === activeBranch || n.data.branch === 'overview').map((n) => n.id),
      );
      filteredNodes = flow.nodes.filter((n) => visibleIds.has(n.id));
      filteredEdges = flow.edges.filter((e) => visibleIds.has(e.source) && visibleIds.has(e.target));
    }

    const { nodes: ln, edges: le } = applyDagreLayout(filteredNodes, filteredEdges);
    return { layoutNodes: ln, layoutEdges: le, branches };
  }, [flow, activeBranch]);

  const [nodes, setNodes, onNodesChange] = useNodesState(layoutNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(layoutEdges);

  // Sync when layout changes
  useMemo(() => {
    setNodes(layoutNodes);
    setEdges(layoutEdges);
  }, [layoutNodes, layoutEdges, setNodes, setEdges]);

  const onNodeClick: NodeMouseHandler<Node<NodeData>> = useCallback((_event, node) => {
    const data = node.data as NodeData;
    if (data.docsUrl) {
      window.open(data.docsUrl, '_blank', 'noopener');
    }
    setSelectedNode(data);
  }, []);

  const handleFlowChange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      setActiveFlowKey(e.target.value);
      setActiveBranch('all');
      setSelectedNode(null);
    },
    [],
  );

  const handleBranchClick = useCallback((branch: BranchId | 'all') => {
    setActiveBranch(branch);
    setSelectedNode(null);
  }, []);

  if (!flow) return <div>No flows available</div>;

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      {/* Header */}
      <header className="explorer-header">
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <h1>AIDF Decision Explorer</h1>
          <a className="docs-link" href={DOCS_BASE} target="_blank" rel="noopener noreferrer">
            ← Back to Docs
          </a>
        </div>

        <div className="controls">
          {/* Flow selector */}
          <select value={activeFlowKey} onChange={handleFlowChange}>
            {flowKeys.map((key) => (
              <option key={key} value={key}>
                {flows[key]?.title}
              </option>
            ))}
          </select>

          {/* Branch isolation */}
          <div className="branch-legend">
            <button
              className={`branch-tag ${activeBranch === 'all' ? 'active' : ''}`}
              onClick={() => handleBranchClick('all')}
            >
              All
            </button>
            {branches.map((b) => (
              <button
                key={b}
                className={`branch-tag ${activeBranch === b ? 'active' : ''}`}
                onClick={() => handleBranchClick(b)}
              >
                {b.replace(/-/g, ' ')}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* Graph */}
      <div className="flow-container">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onNodeClick={onNodeClick}
          nodeTypes={nodeTypes}
          fitView
          fitViewOptions={{ padding: 0.15 }}
          minZoom={0.1}
          maxZoom={2}
          attributionPosition="bottom-left"
          proOptions={{ hideAttribution: false }}
        >
          <Background variant={BackgroundVariant.Dots} gap={24} size={1} color="#1f2937" />
          <Controls showInteractive={false} />
          <MiniMap
            nodeColor={(node: Node) => {
              const data = node.data as NodeData;
              return data.color ?? '#3b82f6';
            }}
            maskColor="rgba(0, 0, 0, 0.65)"
          />
        </ReactFlow>

        {/* Detail panel */}
        {selectedNode && (
          <div className="detail-panel">
            <button className="close-btn" onClick={() => setSelectedNode(null)} aria-label="Close panel">
              ✕
            </button>
            <h3>{selectedNode.label}</h3>
            {selectedNode.status && (
              <span
                className="status-badge"
                style={{ background: STATUS_COLORS[selectedNode.status] ?? '#555' }}
              >
                {selectedNode.status.toUpperCase()}
              </span>
            )}
            {selectedNode.description && <p>{selectedNode.description}</p>}
            <p style={{ fontSize: 12, color: '#64748b' }}>
              Category: {selectedNode.category} · Branch: {selectedNode.branch}
            </p>
            {selectedNode.docsUrl && (
              <a href={selectedNode.docsUrl} target="_blank" rel="noopener noreferrer">
                Open documentation →
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
