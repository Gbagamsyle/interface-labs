// Protocol stages and flow data

export interface ProtocolStage {
  id: string;
  index: number;
  title: string;
  tagline: string;
  description: string;
  steps: string[];
  systemLabel: string;
}

export const PROTOCOL_STAGES: ProtocolStage[] = [
  {
    id: "compute",
    index: 1,
    title: "COMPUTE",
    tagline: "DISCOVER",
    description:
      "Agents broadcast capability requirements across the network. Available execution nodes respond with resource declarations — processing capacity, memory footprint, geographic region. The coordinator layer scores and ranks candidates.",
    steps: ["REQUEST_BROADCAST", "CAPABILITY_MATCH", "CAPACITY_RESERVE"],
    systemLabel: "COMPUTE LAYER",
  },
  {
    id: "coordinate",
    index: 2,
    title: "COORDINATE",
    tagline: "ROUTE",
    description:
      "Tasks are partitioned, prioritized and distributed across selected compute nodes. Coordinators maintain synchronization state and handle partial failures. Workload progress is tracked against registered agent identity.",
    steps: ["TASK_PARTITION", "ROUTE_ASSIGN", "STATE_SYNC", "FAILURE_RECOVER"],
    systemLabel: "COORDINATION LAYER",
  },
  {
    id: "settle",
    index: 3,
    title: "SETTLE",
    tagline: "VERIFY",
    description:
      "Completed workload proofs are submitted to the settlement layer. Independent verification nodes confirm execution integrity. Machine-to-machine value exchange is resolved without human intermediaries.",
    steps: ["PROOF_SUBMIT", "VERIFY_QUORUM", "EXCHANGE_RESOLVE"],
    systemLabel: "SETTLEMENT LAYER",
  },
];

export const PROTOCOL_FLOW = [
  "REQUEST",
  "COMPUTE",
  "COORDINATE",
  "VERIFICATION",
  "SETTLEMENT",
];
