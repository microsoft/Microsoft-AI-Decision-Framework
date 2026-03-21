import { useCallback, useEffect, useMemo, useState } from 'react';
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

/** Read URL search params once on mount. */
function getUrlParams() {
  const params = new URLSearchParams(window.location.search);
  return {
    flow: params.get('flow'),
    embed: params.get('embed') === 'true',
  };
}

export default function Explorer() {
  const flowKeys = Object.keys(flows);
  const urlParams = useMemo(() => getUrlParams(), []);

  // Resolve initial flow from ?flow= param or default to first
  const initialFlow = urlParams.flow && flows[urlParams.flow] ? urlParams.flow : flowKeys[0] ?? '';
  const isEmbed = urlParams.embed;

  const [activeFlowKey, setActiveFlowKey] = useState(initialFlow);
  const [activeBranch, setActiveBranch] = useState<BranchId | 'all'>('all');
  const [selectedNode, setSelectedNode] = useState<NodeData | null>(null);

  const flow = flows[activeFlowKey];

  // Compute visible nodes/edges based on branch filter
  const { layoutNodes, layoutEdges, branches } = useMemo(() => {
    if (!flow) return { layoutNodes: [], layoutEdges: [], branches: [] as BranchId[] };

    // Collect unique branches (exclude 'overview' — it only has the start node)
    const branchSet = new Set<BranchId>();
    flow.nodes.forEach((n) => { if (n.data.branch !== 'overview') branchSet.add(n.data.branch); });
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
  useEffect(() => {
    setNodes(layoutNodes);
    setEdges(layoutEdges);
  }, [layoutNodes, layoutEdges, setNodes, setEdges]);

  const onNodeClick: NodeMouseHandler<Node<NodeData>> = useCallback((_event, node) => {
    const data = node.data as NodeData;
    if (data.docsUrl) {
      window.open(data.docsUrl, isEmbed ? '_parent' : '_blank', 'noopener');
    }
    setSelectedNode(data);
  }, [isEmbed]);

  const handleFlowChange = useCallback(
    (key: string) => {
      setActiveFlowKey(key);
      setActiveBranch('all');
      setSelectedNode(null);
      // Update URL without reload
      const url = new URL(window.location.href);
      url.searchParams.set('flow', key);
      window.history.replaceState(null, '', url.toString());
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
      {/* Header — hidden in embed mode */}
      {!isEmbed && (
        <header className="explorer-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <h1>AIDF Decision Explorer</h1>
            <a className="docs-link" href={DOCS_BASE} target="_blank" rel="noopener noreferrer">
              ← Back to Docs
            </a>
          </div>

          <div className="controls">
            {/* Flow selector tabs */}
            <div className="flow-tabs">
              {flowKeys.map((key) => {
                const f = flows[key];
                return (
                  <button
                    key={key}
                    className={`flow-tab ${activeFlowKey === key ? 'active' : ''}`}
                    onClick={() => handleFlowChange(key)}
                    title={f?.description}
                  >
                    {f?.title}
                  </button>
                );
              })}
            </div>

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
      )}

      {/* Sub-header: flow context bar */}
      {!isEmbed && (
        <div className="flow-context-bar">
          <span className="flow-context-title">{flow.title}</span>
          <span className="flow-context-sep">·</span>
          <span className="flow-context-ref">{flow.frameworkRef}</span>
          <a
            className="flow-context-link"
            href={`${DOCS_BASE}${flow.docsSection}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            View in Docs →
          </a>
        </div>
      )}

      {/* Embed-mode minimal toolbar */}
      {isEmbed && (
        <div className="embed-toolbar">
          <span className="embed-title">{flow.title}</span>
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
          <a
            className="embed-open"
            href={`${DOCS_BASE}/explorer/?flow=${activeFlowKey}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Open full explorer ↗
          </a>
        </div>
      )}

      {/* Graph */}
      <div className={`flow-container ${isEmbed ? 'flow-container--embed' : ''}`}>
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
