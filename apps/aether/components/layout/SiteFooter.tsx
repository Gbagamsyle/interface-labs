import Link from "next/link";

const FOOTER_LINKS = [
  { label: "PROTOCOL", href: "#protocol" },
  { label: "DEVELOPERS", href: "#developers" },
  { label: "NETWORK", href: "#network" },
  { label: "RESEARCH", href: "#architecture" },
  { label: "STATUS", href: "#telemetry" },
];

export function SiteFooter() {
  return (
    <footer
      role="contentinfo"
      style={{
        borderTop: "1px solid var(--bg-border)",
        background: "var(--bg-surface)",
        paddingBlock: "3rem",
        paddingInline: "clamp(1.5rem, 5vw, 5rem)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Faint grid */}
      <div className="grid-bg" style={{ opacity: 0.6 }} aria-hidden="true" />

      <div
        style={{
          maxWidth: "var(--container)",
          marginInline: "auto",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Top row */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr auto",
            gap: "2rem",
            alignItems: "start",
            marginBottom: "3rem",
          }}
        >
          {/* Brand + nav */}
          <div>
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 700,
                fontSize: "1.25rem",
                letterSpacing: "-0.02em",
                color: "var(--text-primary)",
                marginBottom: "1.5rem",
                textTransform: "uppercase",
              }}
            >
              AETHER
              <span
                style={{
                  fontFamily: "var(--font-system)",
                  fontSize: "0.5rem",
                  letterSpacing: "0.1em",
                  color: "var(--accent)",
                  marginLeft: "0.75rem",
                  verticalAlign: "middle",
                }}
              >
                NETWORK
              </span>
            </div>
            <nav aria-label="Footer navigation">
              <ul
                style={{
                  listStyle: "none",
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "0.75rem 2rem",
                }}
              >
                {FOOTER_LINKS.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="type-system-sm"
                      style={{
                        textDecoration: "none",
                        color: "var(--text-muted)",
                        transition: "color 0.15s",
                      }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* System info */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.75rem",
              textAlign: "right",
            }}
          >
            {[
              ["SYSTEM", "OPERATIONAL"],
              ["VERSION", "0.8.4"],
              ["REGION", "GLOBAL"],
              ["PROTOCOL", "AETHER"],
            ].map(([k, v]) => (
              <div
                key={k}
                style={{ display: "flex", alignItems: "center", gap: "1rem", justifyContent: "flex-end" }}
              >
                <span className="type-system-sm" style={{ color: "var(--text-dim)" }}>
                  {k}:
                </span>
                <span
                  className="type-system-sm"
                  style={{ color: k === "SYSTEM" ? "var(--accent)" : "var(--text-muted)" }}
                >
                  {v}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom row */}
        <div
          style={{
            borderTop: "1px solid var(--bg-border)",
            paddingTop: "1.5rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <span className="type-system-sm" style={{ color: "var(--text-dim)" }}>
            © 2026 AETHER
          </span>
          <span
            className="type-system-sm"
            style={{ color: "var(--text-dim)", maxWidth: "40rem", textAlign: "right" }}
          >
            AETHER IS A FICTIONAL INTERFACE-LAB CONCEPT AND DOES NOT REPRESENT A REAL
            NETWORK, CRYPTOCURRENCY, OR INFRASTRUCTURE PROVIDER.
          </span>
        </div>
      </div>
    </footer>
  );
}
