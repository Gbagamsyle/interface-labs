"use client";

import { useState, useEffect } from "react";

function useUTC() {
  const [time, setTime] = useState("");

  useEffect(() => {
    function update() {
      const now = new Date();
      setTime(
        now.toUTCString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, "$1") + " UTC"
      );
    }
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  return time;
}

export function SystemBar() {
  const time = useUTC();

  return (
    <div
      className="system-bar"
      role="banner"
      aria-label="AETHER system status"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        height: "2.25rem",
        borderBottom: "1px solid var(--bg-border)",
        background: "rgba(10, 12, 14, 0.92)",
        backdropFilter: "blur(8px)",
        display: "flex",
        alignItems: "center",
        paddingInline: "clamp(1.5rem, 5vw, 5rem)",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          gap: "1rem",
        }}
      >
        {/* Left: AETHER / NETWORK */}
        <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
          <span
            className="type-system"
            style={{
              color: "var(--accent)",
              letterSpacing: "0.14em",
              fontSize: "0.625rem",
            }}
          >
            AETHER
          </span>
          <span className="type-system-sm" style={{ color: "var(--text-dim)" }}>
            /
          </span>
          <span className="type-system-sm">NETWORK</span>
        </div>

        {/* Center: status indicators */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1.5rem",
            flex: 1,
            justifyContent: "center",
          }}
        >
          <span
            className="type-system-sm"
            style={{ display: "flex", alignItems: "center", gap: "0.375rem" }}
          >
            <span
              className="status-dot active"
              aria-hidden="true"
            />
            MAINNET
          </span>
          <span
            className="type-system-sm"
            style={{ display: "flex", alignItems: "center", gap: "0.375rem" }}
          >
            <span
              className="status-dot active"
              aria-hidden="true"
            />
            OPERATIONAL
          </span>
          <span
            className="type-system-sm"
            style={{ color: "var(--text-dim)" }}
          >
            NODES: 12,842
          </span>
        </div>

        {/* Right: timestamp */}
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <span
            className="type-system-sm"
            aria-live="polite"
            aria-label="Current UTC time"
            style={{ color: "var(--text-muted)", minWidth: "10ch" }}
          >
            {time}
          </span>
        </div>
      </div>
    </div>
  );
}
