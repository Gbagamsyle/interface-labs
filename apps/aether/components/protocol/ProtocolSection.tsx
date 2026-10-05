"use client";

import { useState } from "react";
import { PROTOCOL_STAGES, PROTOCOL_FLOW } from "@/data/protocol";

export function ProtocolSection() {
  const [active, setActive] = useState(0);
  const stage = PROTOCOL_STAGES[active];

  return (
    <section
      id="protocol"
      aria-labelledby="protocol-heading"
      style={{
        position: "relative",
        paddingBlock: "var(--section-pad)",
        borderTop: "1px solid var(--bg-border)",
        background: "var(--bg-surface)",
        overflow: "hidden",
      }}
    >
      {/* Dense grid */}
      <div className="grid-bg-dense" aria-hidden="true" />

      <div className="container-full" style={{ position: "relative", zIndex: 1 }}>
        <div className="section-label">PROTOCOL</div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "5rem",
            alignItems: "start",
          }}
        >
          {/* Left — flow diagram */}
          <div>
            <h2
              id="protocol-heading"
              className="type-display-lg"
              style={{ color: "var(--text-primary)", marginBottom: "4rem" }}
            >
              THE
              <br />
              EXECUTION
              <br />
              <span style={{ color: "var(--accent)" }}>STACK</span>
            </h2>

            {/* Vertical flow */}
            <div
              style={{ display: "flex", flexDirection: "column", gap: "0" }}
              role="list"
              aria-label="Protocol execution flow"
            >
              {PROTOCOL_FLOW.map((step, i) => {
                // Map flow steps to stages
                const stageMap: Record<string, number> = {
                  COMPUTE: 0,
                  COORDINATE: 1,
                  VERIFICATION: 2,
                  SETTLEMENT: 2,
                };
                const stageIdx = stageMap[step] ?? -1;
                const isHighlighted = stageIdx === active;
                const isFirst = i === 0;
                const isLast = i === PROTOCOL_FLOW.length - 1;

                return (
                  <div
                    key={step}
                    role="listitem"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "1rem",
                        padding: "0.875rem 0",
                        width: "100%",
                      }}
                    >
                      {/* Connector line */}
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          flexShrink: 0,
                        }}
                      >
                        <div
                          style={{
                            width: "1px",
                            height: isFirst ? "0" : "0.875rem",
                            background: isHighlighted
                              ? "rgba(163,230,53,0.5)"
                              : "rgba(255,255,255,0.08)",
                            marginBottom: "0.375rem",
                          }}
                        />
                        <div
                          style={{
                            width: "8px",
                            height: "8px",
                            borderRadius: "50%",
                            border: `1px solid ${isHighlighted ? "var(--accent)" : "var(--bg-border)"}`,
                            background: isHighlighted
                              ? "var(--accent)"
                              : "var(--bg-base)",
                            transition: "all 0.2s",
                          }}
                        />
                        <div
                          style={{
                            width: "1px",
                            height: isLast ? "0" : "0.875rem",
                            background: isHighlighted
                              ? "rgba(163,230,53,0.5)"
                              : "rgba(255,255,255,0.08)",
                            marginTop: "0.375rem",
                          }}
                        />
                      </div>

                      <span
                        className="type-system"
                        style={{
                          fontSize: "0.875rem",
                          letterSpacing: "0.1em",
                          color: isHighlighted
                            ? "var(--accent)"
                            : "var(--text-muted)",
                          transition: "color 0.2s",
                        }}
                      >
                        {step}
                      </span>

                      {!isFirst && !isLast && (
                        <span
                          className="type-system-sm"
                          style={{
                            color: "var(--text-dim)",
                            marginLeft: "auto",
                          }}
                        >
                          ↓
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right — stage selector + detail */}
          <div>
            {/* Stage tabs */}
            <div
              role="tablist"
              aria-label="Protocol stages"
              style={{
                display: "flex",
                borderBottom: "1px solid var(--bg-border)",
                marginBottom: "2.5rem",
              }}
            >
              {PROTOCOL_STAGES.map((s, i) => {
                const isActive = i === active;
                return (
                  <button
                    key={s.id}
                    role="tab"
                    aria-selected={isActive}
                    aria-controls={`protocol-panel-${s.id}`}
                    id={`protocol-tab-${s.id}`}
                    onClick={() => setActive(i)}
                    style={{
                      flex: 1,
                      background: "none",
                      border: "none",
                      borderBottom: `2px solid ${isActive ? "var(--accent)" : "transparent"}`,
                      padding: "0.75rem 0.5rem",
                      cursor: "pointer",
                      textAlign: "left",
                      transition: "border-color 0.15s",
                    }}
                  >
                    <div
                      className="type-system-sm"
                      style={{ color: "var(--text-dim)", marginBottom: "0.25rem" }}
                    >
                      {s.tagline}
                    </div>
                    <div
                      className="type-system"
                      style={{
                        fontSize: "0.75rem",
                        color: isActive ? "var(--accent)" : "var(--text-muted)",
                        transition: "color 0.15s",
                      }}
                    >
                      {s.title}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Stage detail */}
            <div
              role="tabpanel"
              id={`protocol-panel-${stage.id}`}
              aria-labelledby={`protocol-tab-${stage.id}`}
            >
              <div
                className="type-system-sm"
                style={{ color: "var(--text-dim)", marginBottom: "1rem" }}
              >
                {stage.systemLabel}
              </div>

              <p
                className="type-body"
                style={{ marginBottom: "2rem" }}
              >
                {stage.description}
              </p>

              {/* Steps */}
              <div
                style={{
                  borderTop: "1px solid var(--bg-border)",
                  paddingTop: "1.5rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.5rem",
                }}
              >
                <div
                  className="type-system-sm"
                  style={{ color: "var(--text-dim)", marginBottom: "0.75rem" }}
                >
                  EXECUTION STEPS
                </div>
                {stage.steps.map((step) => (
                  <div
                    key={step}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.75rem",
                    }}
                  >
                    <span
                      className="type-system"
                      style={{ color: "var(--text-muted)", fontSize: "0.75rem" }}
                    >
                      {step}
                    </span>
                    <div
                      style={{
                        flex: 1,
                        height: "1px",
                        background: "var(--bg-border)",
                      }}
                    />
                    <span style={{ color: "var(--accent)", fontSize: "0.625rem" }}>
                      OK
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #protocol .container-full > div:last-child {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
        }
      `}</style>
    </section>
  );
}
