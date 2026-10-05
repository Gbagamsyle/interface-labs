export type PerformanceMetric = {
  id: string;
  label: string;
  value: string;
  context: string;
};

export const heroMetrics = ["SPRINT", "POWER", "ENDURANCE", "RECOVERY"] as const;

export const performanceTicker: PerformanceMetric[] = [
  { id: "speed", label: "SPEED", value: "+4.8%", context: "TOP SPEED" },
  { id: "power", label: "POWER", value: "+7.2%", context: "PEAK OUTPUT" },
  { id: "reaction", label: "REACTION", value: "−0.06 S", context: "START RESPONSE" },
  { id: "force", label: "FORCE", value: "+11.4%", context: "GROUND FORCE" },
  { id: "recovery", label: "RECOVERY", value: "92%", context: "READINESS" },
];

export const athleteMetrics: PerformanceMetric[] = [
  { id: "top-speed", label: "TOP SPEED", value: "36.4 KM/H", context: "FLIGHT PHASE" },
  { id: "contact", label: "GROUND CONTACT", value: "0.112 S", context: "LEFT / RIGHT BALANCED" },
  { id: "stride", label: "STRIDE", value: "2.41 M", context: "AT MAX VELOCITY" },
  { id: "force", label: "PEAK FORCE", value: "2,840 N", context: "FIRST 50 MS" },
];
