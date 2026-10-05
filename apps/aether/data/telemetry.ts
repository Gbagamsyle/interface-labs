// Telemetry simulation data and activity stream

export interface TelemetryMetric {
  id: string;
  label: string;
  value: number;
  unit: string;
  min: number;
  max: number;
  precision: number;
  format?: "integer" | "decimal" | "percent";
}

export const TELEMETRY_METRICS: TelemetryMetric[] = [
  {
    id: "active_nodes",
    label: "ACTIVE NODES",
    value: 12842,
    unit: "",
    min: 12100,
    max: 13400,
    precision: 0,
    format: "integer",
  },
  {
    id: "agent_requests",
    label: "AGENT REQUESTS / 24H",
    value: 8.4,
    unit: "M",
    min: 7.8,
    max: 9.2,
    precision: 1,
    format: "decimal",
  },
  {
    id: "compute",
    label: "COMPUTE / 24H",
    value: 41.8,
    unit: " PFLOPS",
    min: 38.0,
    max: 46.0,
    precision: 1,
    format: "decimal",
  },
  {
    id: "latency",
    label: "MEDIAN LATENCY",
    value: 38,
    unit: " MS",
    min: 32,
    max: 48,
    precision: 0,
    format: "integer",
  },
  {
    id: "success_rate",
    label: "SUCCESS RATE",
    value: 99.982,
    unit: "%",
    min: 99.91,
    max: 99.999,
    precision: 3,
    format: "decimal",
  },
  {
    id: "regions",
    label: "REGIONS",
    value: 42,
    unit: "",
    min: 42,
    max: 42,
    precision: 0,
    format: "integer",
  },
];

export interface ActivityEvent {
  timestamp: string;
  source: string;
  target?: string;
  event: string;
  type: "REQUEST" | "CONFIRM" | "ACCEPT" | "SETTLE" | "ERROR";
}

export const ACTIVITY_TEMPLATES: Omit<ActivityEvent, "timestamp">[] = [
  { source: "AGT-041", target: "CMP-882", event: "EXECUTION REQUEST", type: "REQUEST" },
  { source: "CRD-017", event: "ROUTE CONFIRMED", type: "CONFIRM" },
  { source: "CMP-882", event: "WORKLOAD ACCEPTED", type: "ACCEPT" },
  { source: "STL-204", event: "SETTLEMENT VERIFIED", type: "SETTLE" },
  { source: "AGT-127", target: "CMP-319", event: "EXECUTION REQUEST", type: "REQUEST" },
  { source: "CRD-058", event: "ROUTE CONFIRMED", type: "CONFIRM" },
  { source: "CMP-319", event: "WORKLOAD ACCEPTED", type: "ACCEPT" },
  { source: "AGT-089", target: "CMP-441", event: "EXECUTION REQUEST", type: "REQUEST" },
  { source: "CRD-017", event: "CAPACITY CHECK", type: "CONFIRM" },
  { source: "CMP-441", event: "WORKLOAD ACCEPTED", type: "ACCEPT" },
  { source: "STL-204", event: "SETTLEMENT VERIFIED", type: "SETTLE" },
  { source: "AGT-203", event: "COORDINATOR DISCOVERY", type: "REQUEST" },
  { source: "CRD-058", event: "IDENTITY VALIDATED", type: "CONFIRM" },
];
