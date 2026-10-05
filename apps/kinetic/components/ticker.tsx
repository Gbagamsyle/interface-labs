import { performanceTicker } from "@/data/metrics";

export function PerformanceTicker() {
  const items = [...performanceTicker, ...performanceTicker];

  return (
    <section className="performance-ticker" aria-label="Fictional performance indicators">
      <div className="ticker-track">
        {items.map((metric, index) => (
          <div className="ticker-item" key={`${metric.id}-${index}`} aria-hidden={index >= performanceTicker.length}>
            <span className="ticker-label">{metric.label}</span>
            <span className="ticker-direction" aria-hidden="true">{metric.id === "reaction" ? "↓" : "↑"}</span>
            <strong>{metric.value}</strong>
            <span className="ticker-divider" aria-hidden="true">/</span>
          </div>
        ))}
      </div>
      <span className="sr-only">Demo values: {performanceTicker.map((metric) => `${metric.label} ${metric.value}`).join(", ")}. All statistics are fictional.</span>
    </section>
  );
}
