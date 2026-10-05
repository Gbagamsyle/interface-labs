// Network node and edge data for AETHER visualizations

export type NodeClass = "AGENT" | "COMPUTE" | "COORDINATOR" | "SETTLEMENT";

export interface NetworkNode {
  id: string;
  class: NodeClass;
  label: string;
  x: number; // 0-100 percentage
  y: number; // 0-100 percentage
  status: "ACTIVE" | "IDLE" | "BUSY";
}

export interface NetworkEdge {
  from: string;
  to: string;
  weight: number; // 0-1 pulse frequency
}

export const NETWORK_NODES: NetworkNode[] = [
  // Agents
  { id: "AGT-041", class: "AGENT", label: "AGENT", x: 15, y: 20, status: "ACTIVE" },
  { id: "AGT-089", class: "AGENT", label: "AGENT", x: 80, y: 15, status: "BUSY" },
  { id: "AGT-127", class: "AGENT", label: "AGENT", x: 10, y: 70, status: "ACTIVE" },
  { id: "AGT-203", class: "AGENT", label: "AGENT", x: 85, y: 75, status: "IDLE" },
  // Coordinators
  { id: "CRD-017", class: "COORDINATOR", label: "COORDINATOR", x: 35, y: 45, status: "ACTIVE" },
  { id: "CRD-058", class: "COORDINATOR", label: "COORDINATOR", x: 65, y: 45, status: "ACTIVE" },
  // Compute
  { id: "CMP-882", class: "COMPUTE", label: "COMPUTE", x: 30, y: 78, status: "BUSY" },
  { id: "CMP-441", class: "COMPUTE", label: "COMPUTE", x: 70, y: 78, status: "ACTIVE" },
  { id: "CMP-319", class: "COMPUTE", label: "COMPUTE", x: 50, y: 88, status: "IDLE" },
  // Settlement
  { id: "STL-204", class: "SETTLEMENT", label: "SETTLEMENT", x: 50, y: 55, status: "ACTIVE" },
];

export const NETWORK_EDGES: NetworkEdge[] = [
  { from: "AGT-041", to: "CRD-017", weight: 0.9 },
  { from: "AGT-089", to: "CRD-058", weight: 0.7 },
  { from: "AGT-127", to: "CRD-017", weight: 0.6 },
  { from: "AGT-203", to: "CRD-058", weight: 0.4 },
  { from: "CRD-017", to: "STL-204", weight: 0.8 },
  { from: "CRD-058", to: "STL-204", weight: 0.8 },
  { from: "CRD-017", to: "CMP-882", weight: 0.7 },
  { from: "CRD-058", to: "CMP-441", weight: 0.6 },
  { from: "STL-204", to: "CMP-319", weight: 0.5 },
  { from: "CMP-882", to: "CMP-319", weight: 0.3 },
  { from: "CMP-441", to: "CMP-319", weight: 0.3 },
];

export const NODE_CLASS_COLORS: Record<NodeClass, string> = {
  AGENT: "#a3e635",        // lime
  COMPUTE: "#22d3ee",      // cyan
  COORDINATOR: "#38bdf8",  // sky
  SETTLEMENT: "#4ade80",   // green
};

export const NODE_CLASS_DESCRIPTIONS: Record<NodeClass, string> = {
  AGENT: "Autonomous software processes that originate tasks and consume compute capacity across the network.",
  COMPUTE: "Raw execution nodes that accept and process workloads submitted by agents through coordinators.",
  COORDINATOR: "Routing and synchronization layer that matches agent requests to available compute providers.",
  SETTLEMENT: "Verification and value-exchange layer that confirms completed work and resolves machine-to-machine transactions.",
};
