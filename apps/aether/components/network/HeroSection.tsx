import Link from "next/link";
import { HeroNetwork } from "@/components/network/HeroNetwork";

const HERO_STATS = [
  ["NODES", "12,842"],
  ["AGENTS", "3,184"],
  ["COMPUTE", "6,218"],
  ["COORDINATORS", "842"],
  ["SETTLEMENT", "278"],
];

export function HeroSection() {
  return (
    <section id="hero" className="aether-hero" aria-labelledby="hero-title">
      <div className="grid-bg" aria-hidden="true" />
      <div className="hero-network-layer" aria-hidden="true"><HeroNetwork /></div>
      <div className="hero-vignette" aria-hidden="true" />

      <div className="hero-main-copy">
        <p className="section-label">AETHER / DECENTRALIZED COMPUTE NETWORK</p>
        <h1 id="hero-title" className="hero-statement" aria-label="Infrastructure for an autonomous internet">
          <span>INFRASTRUCTURE</span>{" "}
          <span>FOR AN</span>{" "}
          <span>AUTONOMOUS</span>{" "}
          <span>INTERNET<span className="accent">.</span></span>
        </h1>
        <p className="hero-description">
          A distributed coordination layer where autonomous agents discover compute, execute workloads and transact across an open machine network.
        </p>
        <div className="hero-actions">
          <Link href="#cta" className="btn-primary">ENTER NETWORK ↗</Link>
          <Link href="#protocol" className="btn-ghost">READ PROTOCOL ↗</Link>
        </div>
      </div>

      <aside className="hero-telemetry" aria-label="Fictional network telemetry">
        <div className="hero-utc type-system-sm">UTC <span>2026-03-15 14:22:17</span></div>
        <dl>
          {HERO_STATS.map(([label, value]) => (
            <div key={label}><dt>{label}</dt><dd>{value}</dd></div>
          ))}
        </dl>
        <div className="hero-mini-chart" aria-hidden="true">
          <svg viewBox="0 0 160 44" preserveAspectRatio="none">
            <path d="M0 25 L8 25 L12 22 L17 28 L22 24 L28 25 L35 18 L40 24 L47 23 L53 27 L60 25 L66 31 L72 24 L79 26 L86 17 L92 20 L99 25 L105 22 L112 23 L118 19 L123 25 L130 24 L136 14 L141 22 L147 24 L154 21 L160 23" />
          </svg>
        </div>
        <p className="type-system-sm hero-region">NETWORK: MAINNET<br />LATENCY: 38 MS<br />REGION: GLOBAL</p>
        <p className="coord hero-coordinates">51.5072° N / 0.1276° W</p>
      </aside>

      <div className="hero-scroll-hint type-system-sm"><span />SCROLL TO EXPLORE</div>
    </section>
  );
}
