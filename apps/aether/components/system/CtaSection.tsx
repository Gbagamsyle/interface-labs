import Link from "next/link";

export function CtaSection() {
  return (
    <section
      id="cta"
      aria-labelledby="cta-heading"
      style={{
        position: "relative",
        paddingBlock: "var(--section-pad)",
        borderTop: "1px solid var(--bg-border)",
        background: "var(--bg-surface)",
        overflow: "hidden",
      }}
    >
      {/* Technical accent lines */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "1px",
          background: "linear-gradient(90deg, transparent, var(--accent) 30%, var(--accent) 70%, transparent)",
          opacity: 0.3,
        }}
      />

      {/* Grid */}
      <div className="grid-bg" aria-hidden="true" />

      <div
        className="container-full"
        style={{
          position: "relative",
          zIndex: 1,
          display: "grid",
          gridTemplateColumns: "1fr auto",
          gap: "4rem",
          alignItems: "center",
        }}
      >
        <div>
          <div className="section-label">BUILD</div>

          <h2
            id="cta-heading"
            className="type-display-lg"
            style={{ color: "var(--text-primary)", marginBottom: "2.5rem" }}
          >
            BUILD FOR
            <br />
            WHAT COMES
            <br />
            <span style={{ color: "var(--accent)" }}>NEXT.</span>
          </h2>

          <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
            <Link href="#developers" className="btn-ghost">
              READ THE DOCS ↗
            </Link>
            <Link
              href="#hero"
              className="btn-primary"
            >
              ENTER NETWORK ↗
            </Link>
          </div>
        </div>

        {/* Right — network status panel */}
        <div
          style={{
            border: "1px solid var(--bg-border)",
            background: "var(--bg-base)",
            padding: "2rem",
            minWidth: "16rem",
          }}
        >
          <div
            className="type-system-sm"
            style={{ color: "var(--text-dim)", marginBottom: "1.5rem" }}
          >
            NETWORK STATUS
          </div>

          {[
            ["NETWORK", "OPERATIONAL", true],
            ["VERSION", "0.8.4", false],
            ["PROTOCOL", "AETHER", false],
            ["UPTIME", "99.97%", false],
          ].map(([k, v, accent]) => (
            <div
              key={k as string}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                paddingBlock: "0.625rem",
                borderBottom: "1px solid rgba(255,255,255,0.03)",
              }}
            >
              <span
                className="type-system-sm"
                style={{ color: "var(--text-dim)" }}
              >
                {k as string}
              </span>
              <span
                className="type-system"
                style={{
                  color: accent ? "var(--accent)" : "var(--text-muted)",
                  fontSize: "0.6875rem",
                }}
              >
                {v as string}
              </span>
            </div>
          ))}

          <div
            style={{ marginTop: "1.5rem", display: "flex", alignItems: "center", gap: "0.5rem" }}
          >
            <span className="status-dot active" aria-hidden="true" />
            <span
              className="type-system-sm"
              style={{ color: "var(--text-muted)" }}
            >
              ALL SYSTEMS NOMINAL
            </span>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #cta .container-full {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
