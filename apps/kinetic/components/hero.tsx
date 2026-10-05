import Link from "next/link";

export function Hero() {
  return (
    <section className="kinetic-hero" id="top" aria-labelledby="hero-title">
      <div className="hero-photo" aria-hidden="true" />
      <div className="hero-grid-overlay" aria-hidden="true" />

      <h1 id="hero-title" className="hero-title">
        <span className="hero-number">0.0<span>1</span></span>
        <span className="hero-words">CHANGES<br />EVERYTHING<span className="signal-period">.</span></span>
      </h1>

      <p className="hero-principle">PERFORMANCE IS<br />MEASURED IN MARGINS.</p>
      <Link className="hero-cta mono" href="#lab">ENTER THE LAB <span aria-hidden="true">↗</span></Link>

      <div className="hero-timer" aria-label="Fictional sprint time 9.84 seconds">
        <span className="hero-timer-value">00:09.84</span>
        <span className="hero-timer-caption mono">100M_SPRINT / LIVE <i aria-hidden="true" /></span>
      </div>
    </section>
  );
}
