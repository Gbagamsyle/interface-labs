"use client";

import { useState } from "react";
import { NODE_CLASS_COLORS, NODE_CLASS_DESCRIPTIONS } from "@/data/network";
import type { NodeClass } from "@/data/network";

const NODE_CLASSES: { class: NodeClass; count: string; examples: string[] }[] = [
  {
    class: "AGENT",
    count: "8,200+",
    examples: ["AGT-041", "AGT-089", "AGT-127", "AGT-203"],
  },
  {
    class: "COORDINATOR",
    count: "420",
    examples: ["CRD-017", "CRD-058"],
  },
  {
    class: "COMPUTE",
    count: "3,800+",
    examples: ["CMP-882", "CMP-441", "CMP-319"],
  },
  {
    class: "SETTLEMENT",
    count: "64",
    examples: ["STL-204"],
  },
];

// SVG diagram positions (0-100 normalized)
const DIAGRAM_NODES = [
  // AGENTS (left cluster)
  { id: "AGT-041", class: "AGENT" as NodeClass, cx: 10, cy: 30 },
  { id: "AGT-089", class: "AGENT" as NodeClass, cx: 10, cy: 55 },
  { id: "AGT-127", class: "AGENT" as NodeClass, cx: 10, cy: 75 },
  // COORDINATORS (center)
  { id: "CRD-017", class: "COORDINATOR" as NodeClass, cx: 40, cy: 38 },
  { id: "CRD-058", class: "COORDINATOR" as NodeClass, cx: 40, cy: 65 },
  // COMPUTE (right upper)
  { id: "CMP-882", class: "COMPUTE" as NodeClass, cx: 72, cy: 25 },
  { id: "CMP-441", class: "COMPUTE" as NodeClass, cx: 72, cy: 55 },
  { id: "CMP-319", class: "COMPUTE" as NodeClass, cx: 72, cy: 78 },
  // SETTLEMENT (far right)
  { id: "STL-204", class: "SETTLEMENT" as NodeClass, cx: 92, cy: 50 },
];

const DIAGRAM_EDGES = [
  { from: "AGT-041", to: "CRD-017" },
  { from: "AGT-089", to: "CRD-017" },
  { from: "AGT-089", to: "CRD-058" },
  { from: "AGT-127", to: "CRD-058" },
  { from: "CRD-017", to: "CMP-882" },
  { from: "CRD-017", to: "CMP-441" },
  { from: "CRD-058", to: "CMP-441" },
  { from: "CRD-058", to: "CMP-319" },
  { from: "CMP-882", to: "STL-204" },
  { from: "CMP-441", to: "STL-204" },
  { from: "CMP-319", to: "STL-204" },
];

function isConnected(nodeId: string, hoveredClass: NodeClass | null): boolean {
  if (!hoveredClass) return false;
  const hoveredIds = DIAGRAM_NODES.filter((n) => n.class === hoveredClass).map((n) => n.id);
  return DIAGRAM_EDGES.some(
    (e) => hoveredIds.includes(e.from) && e.to === nodeId ||
           hoveredIds.includes(e.to) && e.from === nodeId
  );
}

function isEdgeActive(edge: { from: string; to: string }, hoveredClass: NodeClass | null): boolean {
  if (!hoveredClass) return false;
  const hoveredIds = DIAGRAM_NODES.filter((n) => n.class === hoveredClass).map((n) => n.id);
  const fromNode = DIAGRAM_NODES.find((n) => n.id === edge.from);
  const toNode = DIAGRAM_NODES.find((n) => n.id === edge.to);
  return (
    hoveredIds.includes(edge.from) ||
    hoveredIds.includes(edge.to) ||
    (fromNode?.class === hoveredClass) ||
    (toNode?.class === hoveredClass)
  );
}

export function NetworkSection() {
  const [hovered, setHovered] = useState<NodeClass | null>(null);

  return (
    <section
      id="network"
      aria-labelledby="network-heading"
      style={{
        position: "relative",
        paddingBlock: "var(--section-pad)",
        borderTop: "1px solid var(--bg-border)",
        overflow: "hidden",
      }}
    >
      <div className="grid-bg-coarse" aria-hidden="true" />

      <div className="container-full" style={{ position: "relative", zIndex: 1 }}>
        {/* Heading */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "4rem",
            alignItems: "end",
            marginBottom: "5rem",
          }}
        >
          <div>
            <div className="section-label">THE NETWORK</div>
            <h2
              id="network-heading"
              className="type-display-lg"
              style={{ color: "var(--text-primary)" }}
            >
              ONE NETWORK.
              <br />
              MILLIONS OF
              <br />
              <span style={{ color: "var(--accent)" }}>INDEPENDENT</span>
              <br />
              MACHINES.
            </h2>
          </div>
          <div>
            <p className="type-body" style={{ maxWidth: "38ch" }}>
              AETHER is not a platform or a service. It is a coordination
              substrate — an open protocol that independent machines join,
              communicate through, and transact across.
            </p>
            <p
              className="type-body"
              style={{ maxWidth: "38ch", marginTop: "1rem" }}
            >
              Hover any node class below to explore its relationships across
              the network.
            </p>
          </div>
        </div>

        {/* Network diagram + legend */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 16rem",
            gap: "3rem",
            alignItems: "center",
          }}
        >
          {/* SVG diagram */}
          <div
            style={{
              position: "relative",
              background: "var(--bg-surface)",
              border: "1px solid var(--bg-border)",
            }}
          >
            <svg
              viewBox="0 0 100 100"
              style={{ width: "100%", aspectRatio: "16/9" }}
              aria-label="AETHER network topology diagram"
              role="img"
              preserveAspectRatio="xMidYMid meet"
            >
              {/* Edges */}
              {DIAGRAM_EDGES.map((edge) => {
                const from = DIAGRAM_NODES.find((n) => n.id === edge.from)!;
                const to = DIAGRAM_NODES.find((n) => n.id === edge.to)!;
                const active = isEdgeActive(edge, hovered);
                return (
                  <line
                    key={`${edge.from}-${edge.to}`}
                    x1={from.cx}
                    y1={from.cy}
                    x2={to.cx}
                    y2={to.cy}
                    stroke={active ? "rgba(163,230,53,0.4)" : "rgba(255,255,255,0.06)"}
                    strokeWidth={active ? "0.4" : "0.2"}
                    style={{ transition: "stroke 0.2s, stroke-width 0.2s" }}
                  />
                );
              })}

              {/* Nodes */}
              {DIAGRAM_NODES.map((node) => {
                const color = NODE_CLASS_COLORS[node.class];
                const isHoveredClass = hovered === node.class;
                const connected = isConnected(node.id, hovered);
                const dim = hovered && !isHoveredClass && !connected;

                return (
                  <g key={node.id}>
                    {/* Outer ring */}
                    <circle
                      cx={node.cx}
                      cy={node.cy}
                      r={isHoveredClass ? 4 : 2.5}
                      fill="none"
                      stroke={color}
                      strokeWidth="0.3"
                      opacity={dim ? 0.1 : isHoveredClass ? 0.6 : 0.3}
                      style={{ transition: "all 0.2s" }}
                    />
                    {/* Core */}
                    <circle
                      cx={node.cx}
                      cy={node.cy}
                      r={1.5}
                      fill={color}
                      opacity={dim ? 0.1 : isHoveredClass ? 1 : 0.6}
                      style={{ transition: "all 0.2s" }}
                    />
                    {/* Label */}
                    <text
                      x={node.cx}
                      y={node.cy - 3.5}
                      textAnchor="middle"
                      fontSize="1.8"
                      fill="rgba(139,145,153,1)"
                      fontFamily="'JetBrains Mono', monospace"
                      opacity={dim ? 0.1 : 1}
                      style={{ transition: "opacity 0.2s" }}
                    >
                      {node.id}
                    </text>
                  </g>
                );
              })}

              {/* Class region labels */}
              {[
                { label: "AGENTS", x: 10, y: 14 },
                { label: "COORDINATORS", x: 40, y: 14 },
                { label: "COMPUTE", x: 72, y: 14 },
                { label: "SETTLEMENT", x: 92, y: 14 },
              ].map((lbl) => (
                <text
                  key={lbl.label}
                  x={lbl.x}
                  y={lbl.y}
                  textAnchor="middle"
                  fontSize="1.8"
                  fill="rgba(74,82,96,1)"
                  fontFamily="'JetBrains Mono', monospace"
                  letterSpacing="0.05"
                >
                  {lbl.label}
                </text>
              ))}
            </svg>
          </div>

          {/* Legend / class list */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0",
            }}
          >
            {NODE_CLASSES.map((nc) => {
              const color = NODE_CLASS_COLORS[nc.class];
              const active = hovered === nc.class;
              return (
                <button
                  key={nc.class}
                  onMouseEnter={() => setHovered(nc.class)}
                  onMouseLeave={() => setHovered(null)}
                  onFocus={() => setHovered(nc.class)}
                  onBlur={() => setHovered(null)}
                  aria-label={`${nc.class} — ${NODE_CLASS_DESCRIPTIONS[nc.class]}`}
                  aria-pressed={active}
                  style={{
                    background: "none",
                    border: "none",
                    borderBottom: "1px solid var(--bg-border)",
                    padding: "1.25rem 0",
                    textAlign: "left",
                    cursor: "pointer",
                    opacity: hovered && !active ? 0.35 : 1,
                    transition: "opacity 0.2s",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.625rem",
                      marginBottom: "0.375rem",
                    }}
                  >
                    <span
                      style={{
                        width: "6px",
                        height: "6px",
                        borderRadius: "50%",
                        background: active ? color : "transparent",
                        border: `1px solid ${color}`,
                        flexShrink: 0,
                        transition: "background 0.15s",
                      }}
                    />
                    <span
                      className="type-system"
                      style={{ color: active ? color : "var(--text-secondary)" }}
                    >
                      {nc.class}
                    </span>
                    <span
                      className="type-system-sm"
                      style={{ color: "var(--text-dim)", marginLeft: "auto" }}
                    >
                      {nc.count}
                    </span>
                  </div>
                  {active && (
                    <p
                      className="type-body"
                      style={{
                        fontSize: "0.8125rem",
                        lineHeight: 1.5,
                        color: "var(--text-secondary)",
                        marginTop: "0.5rem",
                      }}
                    >
                      {NODE_CLASS_DESCRIPTIONS[nc.class]}
                    </p>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #network .container-full > div:first-child {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
          #network .container-full > div:last-child {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
