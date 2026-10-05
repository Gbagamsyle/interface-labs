"use client";

import { useState, useEffect, useRef } from "react";
import { TELEMETRY_METRICS, ACTIVITY_TEMPLATES } from "@/data/telemetry";
import type { ActivityEvent } from "@/data/telemetry";

function formatValue(value: number, metric: (typeof TELEMETRY_METRICS)[number]): string {
  if (metric.format === "integer") {
    return Math.round(value).toLocaleString("en-US");
  }
  return value.toFixed(metric.precision);
}

function lerp(a: number, b: number, t: number): number {
  return a + (b - a) * t;
}

function useSimulatedMetrics() {
  const [values, setValues] = useState(() =>
    TELEMETRY_METRICS.map((m) => m.value)
  );

  useEffect(() => {
    const id = setInterval(() => {
      setValues((prev) =>
        prev.map((v, i) => {
          const m = TELEMETRY_METRICS[i];
          const target = lerp(m.min, m.max, Math.random());
          return lerp(v, target, 0.15); // smooth interpolation
        })
      );
    }, 4000);
    return () => clearInterval(id);
  }, []);

  return values;
}

function useActivityStream() {
  const [events, setEvents] = useState<ActivityEvent[]>([]);
  const templateIdx = useRef(0);

  useEffect(() => {
    // Initial batch
    const initial: ActivityEvent[] = [0, 1, 2, 3].map((i) => {
      const t = ACTIVITY_TEMPLATES[i % ACTIVITY_TEMPLATES.length];
      const now = new Date();
      now.setSeconds(now.getSeconds() - (8 - i * 2));
      return {
        ...t,
        timestamp: now.toTimeString().slice(0, 8),
      };
    });
    const initialTimeout = window.setTimeout(() => setEvents(initial), 0);

    // Stream new events
    const id = setInterval(() => {
      const template = ACTIVITY_TEMPLATES[templateIdx.current % ACTIVITY_TEMPLATES.length];
      templateIdx.current++;
      const event: ActivityEvent = {
        ...template,
        timestamp: new Date().toTimeString().slice(0, 8),
      };
      setEvents((prev) => [event, ...prev].slice(0, 12));
    }, 2800);

    return () => {
      window.clearTimeout(initialTimeout);
      clearInterval(id);
    };
  }, []);

  return events;
}

const EVENT_COLORS: Record<string, string> = {
  REQUEST: "var(--accent)",
  CONFIRM: "var(--accent-cyan)",
  ACCEPT: "#38bdf8",
  SETTLE: "#4ade80",
  ERROR: "#f87171",
};

export function TelemetrySection() {
  const metricValues = useSimulatedMetrics();
  const events = useActivityStream();

  return (
    <section
      id="telemetry"
      aria-labelledby="telemetry-heading"
      style={{
        position: "relative",
        paddingBlock: "var(--section-pad)",
        borderTop: "1px solid var(--bg-border)",
        overflow: "hidden",
      }}
    >
      <div className="grid-bg" aria-hidden="true" />

      <div className="container-full" style={{ position: "relative", zIndex: 1 }}>
        {/* Header */}
        <div
          className="telemetry-heading"
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            marginBottom: "4rem",
            flexWrap: "wrap",
            gap: "1.5rem",
          }}
        >
          <div>
            <div className="section-label">LIVE TELEMETRY</div>
            <h2
              id="telemetry-heading"
              className="type-display-lg"
              style={{ color: "var(--text-primary)" }}
            >
              NETWORK
              <br />
              <span style={{ color: "var(--accent)" }}>OPERATIONS</span>
            </h2>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.625rem",
              padding: "0.5rem 1rem",
              border: "1px solid var(--bg-border)",
              background: "var(--bg-surface)",
            }}
          >
            <span className="status-dot busy" aria-hidden="true" />
            <span className="type-system-sm" style={{ color: "var(--text-muted)" }}>
              SIMULATED NETWORK TELEMETRY
            </span>
          </div>
        </div>

        {/* Metrics grid */}
        <div
          className="telemetry-metrics"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "0",
            borderTop: "1px solid var(--bg-border)",
            borderLeft: "1px solid var(--bg-border)",
            marginBottom: "3rem",
          }}
          role="list"
          aria-label="Network metrics"
        >
          {TELEMETRY_METRICS.map((metric, i) => {
            const value = metricValues[i] ?? metric.value;
            return (
              <div
                key={metric.id}
                role="listitem"
                aria-label={`${metric.label}: ${formatValue(value, metric)}${metric.unit}`}
                style={{
                  borderRight: "1px solid var(--bg-border)",
                  borderBottom: "1px solid var(--bg-border)",
                  padding: "2rem 2rem",
                }}
              >
                <div
                  className="type-system-sm"
                  style={{ color: "var(--text-muted)", marginBottom: "0.875rem" }}
                >
                  {metric.label}
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-system)",
                    fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
                    fontWeight: 500,
                    color: "var(--text-primary)",
                    letterSpacing: "-0.02em",
                    lineHeight: 1,
                    transition: "color 0.5s",
                  }}
                >
                  {formatValue(value, metric)}
                  {metric.unit && (
                    <span
                      style={{
                        fontFamily: "var(--font-system)",
                        fontSize: "0.875rem",
                        color: "var(--text-muted)",
                        marginLeft: "0.25rem",
                        fontWeight: 400,
                      }}
                    >
                      {metric.unit}
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <div className="telemetry-lower-grid">
          <div className="telemetry-chart-panel">
            <div className="telemetry-chart-heading type-system-sm">THROUGHPUT / LAST 60 MIN <span>LIVE</span></div>
            <svg className="telemetry-chart" viewBox="0 0 640 92" preserveAspectRatio="none" role="img" aria-label="Illustrative network throughput line chart">
              <path className="telemetry-chart-area" d="M0 70 L18 68 L34 74 L51 59 L70 64 L89 48 L108 55 L126 43 L147 49 L165 37 L183 44 L204 31 L222 39 L243 28 L261 42 L279 34 L297 38 L316 20 L334 32 L352 27 L371 39 L390 26 L408 35 L427 23 L444 31 L463 19 L480 27 L499 16 L516 28 L535 21 L553 36 L572 25 L590 32 L608 16 L625 23 L640 12 L640 92 L0 92 Z" />
              <path className="telemetry-chart-line" d="M0 70 L18 68 L34 74 L51 59 L70 64 L89 48 L108 55 L126 43 L147 49 L165 37 L183 44 L204 31 L222 39 L243 28 L261 42 L279 34 L297 38 L316 20 L334 32 L352 27 L371 39 L390 26 L408 35 L427 23 L444 31 L463 19 L480 27 L499 16 L516 28 L535 21 L553 36 L572 25 L590 32 L608 16 L625 23 L640 12" />
              <path className="telemetry-chart-baseline" d="M0 91 H640" />
            </svg>
            <div className="telemetry-chart-scale type-system-sm"><span>-60 MIN</span><span>NOW</span></div>
          </div>

          {/* Activity stream */}
          <div className="telemetry-activity">
          <div
            className="type-system-sm"
            style={{
              color: "var(--text-dim)",
              marginBottom: "1rem",
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
            }}
          >
            <span className="status-dot active" aria-hidden="true" />
            ACTIVITY STREAM
          </div>

          <div
            aria-label="Network activity stream"
            aria-live="polite"
            aria-atomic="false"
            style={{
              borderTop: "1px solid var(--bg-border)",
              maxHeight: "16rem",
              overflowY: "auto",
            }}
          >
            {events.map((event, i) => (
              <div
                key={`${event.timestamp}-${i}`}
                className="telemetry-event"
                style={{
                  display: "grid",
                  gridTemplateColumns: "7rem 8rem 1fr auto",
                  gap: "1rem",
                  padding: "0.5rem 0",
                  borderBottom: "1px solid rgba(255,255,255,0.03)",
                  alignItems: "center",
                  opacity: i > 6 ? 0.3 : 1 - i * 0.08,
                  transition: "opacity 0.5s",
                }}
              >
                <span
                  className="type-system-sm"
                  style={{ color: "var(--text-dim)" }}
                >
                  {event.timestamp}
                </span>
                <span
                  className="type-system-sm"
                  style={{ color: EVENT_COLORS[event.type] ?? "var(--text-muted)" }}
                >
                  {event.source}
                </span>
                {event.target ? (
                  <span className="type-system-sm" style={{ color: "var(--text-muted)" }}>
                    → {event.target}
                  </span>
                ) : (
                  <span />
                )}
                <span
                  className="type-system-sm"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {event.event}
                </span>
              </div>
            ))}
          </div>
        </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #telemetry .container-full > div:nth-child(2) {
            grid-template-columns: 1fr 1fr !important;
          }
          #telemetry .container-full > div:last-child > div:last-child > div {
            grid-template-columns: 5rem 1fr !important;
          }
          #telemetry .container-full > div:last-child > div:last-child > div > span:nth-child(3) {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}
