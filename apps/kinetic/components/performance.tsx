import Image from "next/image";
import { athleteMetrics } from "@/data/metrics";

const athleteImage = "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?auto=format&fit=crop&w=1600&q=88";

export function PerformanceSection() {
  return (
    <section className="performance-section" id="performance" aria-labelledby="performance-title">
      <div className="performance-aside">
        <p className="section-code mono">ATHLETE PERFORMANCE</p>
        <h2 id="performance-title">DATA<br />MEETS<br />HUMAN<br />POTENTIAL<span className="signal-period">.</span></h2>
        <p className="performance-aside-note mono">BIOMECHANICS / FIELD TEST</p>
      </div>
      <div className="performance-figure">
        <Image src={athleteImage} alt="Athlete running outdoors during a hard training effort" fill sizes="(max-width: 760px) 100vw, 58vw" className="performance-athlete-image" />
        <div className="performance-image-wash" aria-hidden="true" />
        <svg className="measurement-overlay" viewBox="0 0 1000 600" preserveAspectRatio="none" aria-hidden="true">
          <path d="M105 178 H340 L415 238 H890" />
          <path d="M140 412 H360 L445 354 H730" />
          <path d="M620 150 H855 V226" />
          <path d="M590 410 H845 V470" />
          <path className="measure-ticks" d="M105 171 V185 M340 171 V185 M140 405 V419 M360 405 V419 M855 143 V157 M845 463 V477" />
          <circle cx="415" cy="238" r="4" /><circle cx="445" cy="354" r="4" /><circle cx="855" cy="226" r="4" /><circle cx="845" cy="470" r="4" />
        </svg>
        <div className="performance-measure measure-speed"><span className="mono">{athleteMetrics[0].label}</span><strong>{athleteMetrics[0].value}</strong><small className="mono">{athleteMetrics[0].context}</small></div>
        <div className="performance-measure measure-contact"><span className="mono">{athleteMetrics[1].label}</span><strong>{athleteMetrics[1].value}</strong><small className="mono">{athleteMetrics[1].context}</small></div>
        <div className="performance-measure measure-stride"><span className="mono">{athleteMetrics[2].label}</span><strong>{athleteMetrics[2].value}</strong><small className="mono">{athleteMetrics[2].context}</small></div>
        <div className="performance-measure measure-force"><span className="mono">{athleteMetrics[3].label}</span><strong>{athleteMetrics[3].value}</strong><small className="mono">{athleteMetrics[3].context}</small></div>
        <span className="performance-image-tag mono">ATHLETE TEST / K-026</span>
      </div>
      <aside className="performance-side-photo" aria-label="Athlete motion detail">
        <Image src="https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?auto=format&fit=crop&w=700&q=85" alt="Athlete performing a controlled pull-up during strength training" fill sizes="(max-width: 760px) 100vw, 16vw" />
        <span className="mono">MOTION ANALYSIS<br />3D / REAL TIME</span>
        <span className="performance-side-mark mono">↗ / 01</span>
      </aside>
    </section>
  );
}
