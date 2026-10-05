"use client";

import { useState } from "react";

interface ArchNode {
  id: string;
  label: string;
  sublabel?: string;
  x: number; // percentage of SVG width
  y: number; // percentage of SVG height
  width: number;
  height: number;
  description: string;
  connectedTo: string[];
}

const ARCH_NODES: ArchNode[] = [
  {
    id: "agent",
    label: "AUTONOMOUS AGENT",
    sublabel: "AGT-xxx",
    x: 37,
    y: 4,
    width: 26,
    height: 10,
    description:
      "An autonomous software process that originates compute requests, manages identity, and receives verified results. Agents are the primary consumers of the AETHER network.",
    connectedTo: ["gateway"],
  },
  {
    id: "gateway",
    label: "AETHER GATEWAY",
    sublabel: "GWY-MAINNET",
    x: 30,
    y: 20,
    width: 40,
    height: 10,
    description:
      "The network entry point. Validates agent identity, enforces protocol rules, and routes requests to the appropriate coordinator tier.",
    connectedTo: ["agent", "coordinator"],
  },
  {
    id: "coordinator",
    label: "COORDINATOR",
    sublabel: "CRD-xxx",
    x: 25,
    y: 37,
    width: 50,
    height: 10,
    description:
      "Distributed routing and synchronization nodes that match agent requests to available compute providers. Coordinators maintain task state and handle partial failures.",
    connectedTo: ["gateway", "compute1", "compute2"],
  },
  {
    id: "compute1",
    label: "COMPUTE NODE",
    sublabel: "CMP-882",
    x: 8,
    y: 56,
    width: 30,
    height: 10,
    description:
      "Raw execution infrastructure. Accepts workloads, processes them, and submits cryptographic proofs of completion to the settlement layer.",
    connectedTo: ["coordinator", "verification"],
  },
  {
    id: "compute2",
    label: "COMPUTE NODE",
    sublabel: "CMP-441",
    x: 62,
    y: 56,
    width: 30,
    height: 10,
    description:
      "Raw execution infrastructure. Accepts workloads, processes them, and submits cryptographic proofs of completion to the settlement layer.",
    connectedTo: ["coordinator", "verification"],
  },
  {
    id: "verification",
    label: "VERIFICATION",
    sublabel: "VER-QUORUM",
    x: 27,
    y: 74,
    width: 46,
    height: 10,
    description:
      "An independent quorum of nodes that verify execution proofs without re-running the workload. Produces a verified receipt that unlocks settlement.",
    connectedTo: ["compute1", "compute2", "settlement"],
  },
  {
    id: "settlement",
    label: "SETTLEMENT",
    sublabel: "STL-204",
    x: 35,
    y: 90,
    width: 30,
    height: 10,
    description:
      "The final layer. Machine-to-machine value exchange is resolved here based on verified execution receipts. No human intermediaries required.",
    connectedTo: ["verification"],
  },
];

// Connection pairs for SVG lines
const CONNECTIONS = [
  { from: "agent", to: "gateway" },
  { from: "gateway", to: "coordinator" },
  { from: "coordinator", to: "compute1" },
  { from: "coordinator", to: "compute2" },
  { from: "compute1", to: "verification" },
  { from: "compute2", to: "verification" },
  { from: "verification", to: "settlement" },
];

function getNodeCenter(node: ArchNode): { x: number; y: number } {
  return {
    x: node.x + node.width / 2,
    y: node.y + node.height / 2,
  };
}

export function ArchitectureSection() {
  const [hovered, setHovered] = useState<string | null>(null);

  const activeNode = ARCH_NODES.find((n) => n.id === hovered);
  const connectedIds = activeNode?.connectedTo ?? [];

  function isEdgeHighlighted(from: string, to: string): boolean {
    if (!hovered) return false;
    return (
      (from === hovered && connectedIds.includes(to)) ||
      (to === hovered && connectedIds.includes(from)) ||
      from === hovered ||
      to === hovered
    );
  }

  return (
    <section
      id="architecture"
      aria-labelledby="arch-heading"
      style={{
        position: "relative",
        paddingBlock: "var(--section-pad)",
        borderTop: "1px solid var(--bg-border)",
        background: "var(--bg-surface)",
        overflow: "hidden",
      }}
    >
      <div className="grid-bg" aria-hidden="true" />

      <div className="container-full" style={{ position: "relative", zIndex: 1 }}>
        {/* Header */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "4rem",
            alignItems: "end",
            marginBottom: "4rem",
          }}
        >
          <div>
            <div className="section-label">ARCHITECTURE</div>
            <h2
              id="arch-heading"
              className="type-display-lg"
              style={{ color: "var(--text-primary)" }}
            >
              SYSTEM
              <br />
              <span style={{ color: "var(--accent)" }}>ARCHITECTURE</span>
            </h2>
          </div>
          <p className="type-body" style={{ maxWidth: "38ch" }}>
            Hover or focus any layer to understand its role in the execution
            pipeline.
          </p>
        </div>

        {/* Diagram + description panel */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 22rem",
            gap: "3rem",
            alignItems: "start",
          }}
        >
          {/* SVG architecture diagram */}
          <div
            style={{
              background: "var(--bg-base)",
              border: "1px solid var(--bg-border)",
              padding: "1.5rem",
            }}
          >
            <svg
              viewBox="0 0 100 104"
              style={{ width: "100%" }}
              aria-label="AETHER system architecture diagram"
              role="img"
            >
              {/* Connection lines */}
              {CONNECTIONS.map(({ from, to }) => {
                const fromNode = ARCH_NODES.find((n) => n.id === from)!;
                const toNode = ARCH_NODES.find((n) => n.id === to)!;
                const fromCenter = getNodeCenter(fromNode);
                const toCenter = getNodeCenter(toNode);
                const highlighted = isEdgeHighlighted(from, to);

                // Calculate line endpoints at node borders
                const fromBottom = fromNode.y + fromNode.height;
                const toTop = toNode.y;

                return (
                  <line
                    key={`${from}-${to}`}
                    x1={fromCenter.x}
                    y1={fromBottom}
                    x2={toCenter.x}
                    y2={toTop}
                    stroke={highlighted ? "rgba(163,230,53,0.5)" : "rgba(255,255,255,0.07)"}
                    strokeWidth={highlighted ? "0.5" : "0.3"}
                    strokeDasharray={highlighted ? "none" : "1 1"}
                    style={{ transition: "stroke 0.2s, stroke-width 0.2s" }}
                  />
                );
              })}

              {/* Nodes */}
              {ARCH_NODES.map((node) => {
                const isHovered = hovered === node.id;
                const isConnected = connectedIds.includes(node.id);
                const dim = hovered && !isHovered && !isConnected;

                return (
                  <g key={node.id}>
                    <rect
                      x={node.x}
                      y={node.y}
                      width={node.width}
                      height={node.height}
                      fill={isHovered ? "rgba(163,230,53,0.08)" : "rgba(19,23,28,0.9)"}
                      stroke={
                        isHovered
                          ? "rgba(163,230,53,0.5)"
                          : isConnected
                          ? "rgba(255,255,255,0.12)"
                          : "rgba(28,33,40,1)"
                      }
                      strokeWidth="0.3"
                      opacity={dim ? 0.2 : 1}
                      style={{ transition: "all 0.2s", cursor: "pointer" }}
                      role="button"
                      aria-label={`${node.label} — ${node.description}`}
                      aria-pressed={isHovered}
                      tabIndex={0}
                      onMouseEnter={() => setHovered(node.id)}
                      onMouseLeave={() => setHovered(null)}
                      onFocus={() => setHovered(node.id)}
                      onBlur={() => setHovered(null)}
                    />

                    {/* Label */}
                    <text
                      x={node.x + node.width / 2}
                      y={node.y + node.height / 2 - 1.2}
                      textAnchor="middle"
                      fontSize="2.2"
                      fill={isHovered ? "rgba(163,230,53,1)" : "rgba(232,234,237,0.8)"}
                      fontFamily="'Space Grotesk', sans-serif"
                      fontWeight="600"
                      letterSpacing="0.1"
                      style={{ transition: "fill 0.2s", pointerEvents: "none" }}
                      opacity={dim ? 0.2 : 1}
                    >
                      {node.label}
                    </text>

                    {/* Sublabel */}
                    {node.sublabel && (
                      <text
                        x={node.x + node.width / 2}
                        y={node.y + node.height / 2 + 2.5}
                        textAnchor="middle"
                        fontSize="1.6"
                        fill="rgba(74,82,96,1)"
                        fontFamily="'JetBrains Mono', monospace"
                        style={{ pointerEvents: "none" }}
                        opacity={dim ? 0.2 : 1}
                      >
                        {node.sublabel}
                      </text>
                    )}

                    {/* Arrow indicator */}
                    {!isHovered && !dim && (
                      <text
                        x={node.x + node.width - 1.5}
                        y={node.y + node.height / 2 + 0.7}
                        textAnchor="middle"
                        fontSize="2"
                        fill="rgba(74,82,96,0.5)"
                        style={{ pointerEvents: "none" }}
                      >
                        ↓
                      </text>
                    )}
                  </g>
                );
              })}
            </svg>
          </div>

          {/* Description panel */}
          <div
            style={{
              borderLeft: "1px solid var(--bg-border)",
              paddingLeft: "2rem",
              minHeight: "20rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            {activeNode ? (
              <div>
                <div
                  className="type-system-sm"
                  style={{ color: "var(--accent)", marginBottom: "0.75rem" }}
                >
                  {activeNode.sublabel}
                </div>
                <h3
                  className="type-display"
                  style={{
                    fontSize: "1.125rem",
                    marginBottom: "1.25rem",
                    color: "var(--text-primary)",
                  }}
                >
                  {activeNode.label}
                </h3>
                <p className="type-body" style={{ fontSize: "0.9375rem" }}>
                  {activeNode.description}
                </p>

                <div
                  style={{
                    marginTop: "2rem",
                    paddingTop: "1.5rem",
                    borderTop: "1px solid var(--bg-border)",
                  }}
                >
                  <div
                    className="type-system-sm"
                    style={{ color: "var(--text-dim)", marginBottom: "0.75rem" }}
                  >
                    CONNECTED LAYERS
                  </div>
                  <div
                    style={{ display: "flex", flexDirection: "column", gap: "0.375rem" }}
                  >
                    {activeNode.connectedTo.map((id) => {
                      const n = ARCH_NODES.find((a) => a.id === id)!;
                      return (
                        <span
                          key={id}
                          className="type-system"
                          style={{ color: "var(--text-muted)" }}
                        >
                          → {n.label}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>
            ) : (
              <div>
                <div
                  className="type-system-sm"
                  style={{ color: "var(--text-dim)", marginBottom: "1rem" }}
                >
                  SELECT A LAYER
                </div>
                <p className="type-body" style={{ fontSize: "0.9rem" }}>
                  Hover or focus any component in the diagram to inspect its
                  role, connections, and position in the execution pipeline.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #architecture .container-full > div:first-child {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
          #architecture .container-full > div:last-child {
            grid-template-columns: 1fr !important;
          }
          #architecture .container-full > div:last-child > div:last-child {
            border-left: none !important;
            padding-left: 0 !important;
            border-top: 1px solid var(--bg-border) !important;
            padding-top: 1.5rem !important;
          }
        }
      `}</style>
    </section>
  );
}
