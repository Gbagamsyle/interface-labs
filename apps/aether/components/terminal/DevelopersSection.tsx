"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

const TERMINAL_LINES = [
  { delay: 0, text: "$ aether init agent", type: "command" },
  { delay: 600, text: "", type: "blank" },
  { delay: 700, text: "initializing identity...", type: "info" },
  { delay: 1100, text: "discovering network...", type: "info" },
  { delay: 1600, text: "connecting coordinator...", type: "info" },
  { delay: 2200, text: "", type: "blank" },
  { delay: 2400, text: "✓ identity created", type: "success" },
  { delay: 2800, text: "✓ network connected", type: "success" },
  { delay: 3200, text: "✓ compute available", type: "success" },
  { delay: 3700, text: "", type: "blank" },
  { delay: 3900, text: "agent_7f3a is online.", type: "result" },
];

const CODE_SAMPLE = `const agent = await aether.connect({
  network: "mainnet",
});

const result = await agent.compute({
  model: "vision-v4",
  task: payload,
});

// result.verified === true
// result.settled === true`;

type LineType = "command" | "blank" | "info" | "success" | "result";

function lineColor(type: LineType): string {
  switch (type) {
    case "command": return "var(--text-primary)";
    case "info": return "var(--text-muted)";
    case "success": return "var(--accent)";
    case "result": return "var(--accent-cyan)";
    default: return "transparent";
  }
}

export function DevelopersSection() {
  const [visibleLines, setVisibleLines] = useState<number>(-1);
  const [started, setStarted] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Trigger animation when section enters viewport
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    TERMINAL_LINES.forEach((line, i) => {
      const id = setTimeout(() => {
        setVisibleLines(i);
      }, line.delay);
      return () => clearTimeout(id);
    });
  }, [started]);

  return (
    <section
      id="developers"
      ref={sectionRef}
      aria-labelledby="dev-heading"
      style={{
        position: "relative",
        paddingBlock: "var(--section-pad)",
        borderTop: "1px solid var(--bg-border)",
        overflow: "hidden",
      }}
    >
      <div className="grid-bg-coarse" aria-hidden="true" />

      <div className="container-full" style={{ position: "relative", zIndex: 1 }}>
        {/* Header */}
        <div style={{ marginBottom: "4rem" }}>
          <div className="section-label">DEVELOPERS</div>
          <h2
            id="dev-heading"
            className="type-display-lg"
            style={{ color: "var(--text-primary)" }}
          >
            BUILT FOR
            <br />
            MACHINE-
            <br />
            <span style={{ color: "var(--accent)" }}>NATIVE</span>
            <br />
            SOFTWARE.
          </h2>
        </div>

        {/* Terminal + code */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "2rem",
            alignItems: "start",
          }}
        >
          {/* Terminal */}
          <div>
            <div
              style={{
                background: "var(--bg-surface)",
                border: "1px solid var(--bg-border)",
                overflow: "hidden",
              }}
            >
              {/* Terminal header */}
              <div
                style={{
                  borderBottom: "1px solid var(--bg-border)",
                  padding: "0.625rem 1rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                }}
              >
                <span
                  className="type-system-sm"
                  style={{ color: "var(--text-dim)" }}
                >
                  AETHER CLI — v0.8.4
                </span>
                <span
                  style={{
                    marginLeft: "auto",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.375rem",
                  }}
                >
                  <span className="status-dot active" aria-hidden="true" />
                  <span className="type-system-sm" style={{ color: "var(--accent)" }}>
                    READY
                  </span>
                </span>
              </div>

              {/* Terminal body */}
              <div
                aria-label="Terminal output"
                style={{
                  padding: "1.5rem",
                  minHeight: "16rem",
                  fontFamily: "var(--font-system)",
                  fontSize: "0.8125rem",
                  lineHeight: 1.7,
                }}
              >
                {TERMINAL_LINES.map((line, i) => {
                  const visible = i <= visibleLines;
                  const isCurrent = i === visibleLines;
                  return (
                    <div
                      key={i}
                      style={{
                        opacity: visible ? 1 : 0,
                        color: lineColor(line.type as LineType),
                      }}
                    >
                      {line.text || "\u00A0"}
                      {isCurrent && i === TERMINAL_LINES.length - 1 && (
                        <span
                          aria-hidden="true"
                          style={{
                            display: "inline-block",
                            width: "0.5em",
                            height: "1em",
                            background: "var(--accent)",
                            marginLeft: "0.25em",
                            verticalAlign: "middle",
                            animation: "blink-cursor 1s step-end infinite",
                          }}
                        />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Replay button */}
            <button
              onClick={() => {
                setVisibleLines(-1);
                setStarted(false);
                setTimeout(() => setStarted(true), 50);
              }}
              className="btn-ghost"
              style={{ marginTop: "1rem", fontSize: "0.625rem" }}
            >
              REPLAY ↺
            </button>
          </div>

          {/* Code sample */}
          <div>
            <div
              style={{
                background: "var(--bg-surface)",
                border: "1px solid var(--bg-border)",
                overflow: "hidden",
              }}
            >
              {/* Code header */}
              <div
                style={{
                  borderBottom: "1px solid var(--bg-border)",
                  padding: "0.625rem 1rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                }}
              >
                <span
                  className="type-system-sm"
                  style={{ color: "var(--text-dim)" }}
                >
                  agent.ts
                </span>
                <span
                  className="type-system-sm"
                  style={{ color: "var(--text-dim)", marginLeft: "auto" }}
                >
                  TYPESCRIPT
                </span>
              </div>

              {/* Code body */}
              <pre
                aria-label="AETHER API code example"
                style={{
                  padding: "1.5rem",
                  fontFamily: "var(--font-system)",
                  fontSize: "0.8125rem",
                  lineHeight: 1.7,
                  color: "var(--text-secondary)",
                  overflowX: "auto",
                  margin: 0,
                  whiteSpace: "pre",
                }}
              >
                <code>{CODE_SAMPLE}</code>
              </pre>
            </div>

            {/* CTA */}
            <div style={{ marginTop: "2rem" }}>
              <p className="type-body" style={{ marginBottom: "1.5rem", maxWidth: "36ch" }}>
                The AETHER SDK provides a minimal, typed interface for
                connecting agents, requesting compute, and verifying results.
              </p>
              <Link
                href="/developers"
                className="btn-ghost"
                style={{ fontSize: "0.6875rem" }}
              >
                VIEW DOCUMENTATION ↗
              </Link>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #developers .container-full > div:last-child {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
