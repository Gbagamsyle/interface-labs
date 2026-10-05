export function ManifestoSection() {
  return (
    <section
      id="manifesto"
      aria-labelledby="manifesto-heading"
      style={{
        position: "relative",
        paddingBlock: "var(--section-pad)",
        borderTop: "1px solid var(--bg-border)",
        background: "var(--bg-base)",
        overflow: "hidden",
      }}
    >
      {/* Structural grid — more visible here */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Accent grid overlay */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(163,230,53,0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(163,230,53,0.02) 1px, transparent 1px)
          `,
          backgroundSize: "400px 400px",
        }}
      />

      {/* Network activity lines — SVG decorative layer */}
      <svg
        aria-hidden="true"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          opacity: 0.06,
          pointerEvents: "none",
        }}
      >
        <line x1="0" y1="20" x2="100" y2="80" stroke="#a3e635" strokeWidth="0.1" />
        <line x1="0" y1="60" x2="100" y2="30" stroke="#a3e635" strokeWidth="0.1" />
        <line x1="20" y1="0" x2="80" y2="100" stroke="#a3e635" strokeWidth="0.1" />
        <line x1="50" y1="0" x2="50" y2="100" stroke="#a3e635" strokeWidth="0.08" />
        <circle cx="20" cy="20" r="0.4" fill="#a3e635" />
        <circle cx="80" cy="80" r="0.4" fill="#a3e635" />
        <circle cx="50" cy="50" r="0.3" fill="#a3e635" />
      </svg>

      <div
        className="container-full"
        style={{
          position: "relative",
          zIndex: 1,
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "6rem",
          alignItems: "center",
        }}
      >
        {/* Primary manifesto text */}
        <div>
          <div className="section-label">MANIFESTO</div>

          <h2
            id="manifesto-heading"
            className="type-display-xl"
            style={{
              color: "var(--text-primary)",
              marginBottom: "0",
            }}
          >
            THE
            <br />
            INTERNET
            <br />
            WAS BUILT
            <br />
            <span
              style={{
                WebkitTextStroke: "1px rgba(163,230,53,0.4)",
                color: "transparent",
              }}
            >
              FOR PEOPLE.
            </span>
          </h2>

          <div
            style={{
              margin: "3rem 0",
              width: "4rem",
              height: "1px",
              background: "var(--accent)",
            }}
            aria-hidden="true"
          />

          <h2
            className="type-display-xl"
            style={{ color: "var(--text-primary)" }}
          >
            THE NEXT
            <br />
            ONE WON&apos;T
            <br />
            <span style={{ color: "var(--accent)" }}>BE.</span>
          </h2>
        </div>

        {/* Supporting text */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
          }}
        >
          <div>
            <div
              className="type-system-sm"
              style={{ color: "var(--accent)", marginBottom: "0.75rem" }}
            >
              SOFTWARE IS BECOMING AUTONOMOUS.
            </div>
            <p className="type-body" style={{ maxWidth: "36ch" }}>
              We are at the beginning of a transition. Software is no longer
              purely a tool operated by people. Agents act, decide, and
              transact independently.
            </p>
          </div>

          <div>
            <div
              className="type-system-sm"
              style={{ color: "var(--text-muted)", marginBottom: "0.75rem" }}
            >
              INFRASTRUCTURE MUST FOLLOW.
            </div>
            <p className="type-body" style={{ maxWidth: "36ch" }}>
              The existing infrastructure was not designed for machines as
              first-class participants. AETHER is infrastructure built from
              first principles for autonomous software.
            </p>
          </div>

          <div>
            <div
              className="type-system-sm"
              style={{ color: "var(--text-muted)", marginBottom: "0.75rem" }}
            >
              MACHINE-NATIVE BY DESIGN.
            </div>
            <p className="type-body" style={{ maxWidth: "36ch" }}>
              No intermediaries. No human-approval loops. Coordination,
              execution and settlement happen at machine speed across an open
              network.
            </p>
          </div>

          {/* Coordinate annotation */}
          <div
            style={{
              marginTop: "2rem",
              paddingTop: "2rem",
              borderTop: "1px solid var(--bg-border)",
              display: "flex",
              gap: "2rem",
            }}
          >
            {[
              ["AUTHORED", "2026"],
              ["REVISION", "0.4"],
              ["STATUS", "DRAFT"],
            ].map(([k, v]) => (
              <div
                key={k}
                style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}
              >
                <span
                  className="type-system-sm"
                  style={{ color: "var(--text-dim)" }}
                >
                  {k}
                </span>
                <span className="type-system" style={{ color: "var(--text-muted)" }}>
                  {v}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #manifesto .container-full {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
        }
      `}</style>
    </section>
  );
}
