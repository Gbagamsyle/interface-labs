import Image from "next/image";

const method = [
  { phase: "01", title: "MEASURE", copy: "Capture real-world performance data.", mark: "01 / BASELINE" },
  { phase: "02", title: "TRAIN", copy: "Apply targeted performance programs.", mark: "02 / INTERVENTION" },
  { phase: "03", title: "REPEAT", copy: "Measure again. Adapt. Improve.", mark: "03 / PROGRESS" },
];

export function ManifestoSection() {
  return (
    <section className="manifesto-section" id="science" aria-labelledby="manifesto-title">
      <div className="manifesto-photo">
        <Image
          src="https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?auto=format&fit=crop&w=1000&q=86"
          alt="Athlete holding the top of a pull-up in a dark training room"
          fill
          sizes="(max-width: 760px) 100vw, 32vw"
          className="manifesto-athlete-image"
        />
        <div className="manifesto-photo-overlay" aria-hidden="true" />
        <p className="mono manifesto-photo-caption">HUMAN OUTPUT / NEVER A STRAIGHT LINE</p>
      </div>
      <div className="manifesto-left">
        <p className="section-code mono">MANIFESTO</p>
        <h2 id="manifesto-title">YOU DON’T<br />NEED TO BE<br />TWICE AS GOOD<span className="signal-period">.</span></h2>
      </div>
      <div className="manifesto-right">
        <p className="manifesto-just">JUST</p>
        <p className="manifesto-point">0.01</p>
        <p className="manifesto-faster">FASTER<span className="signal-period">.</span></p>
        <p className="manifesto-note mono">SMALL MARGINS.<br />REAL CONSEQUENCES.</p>
      </div>
    </section>
  );
}

export function MethodSection() {
  return (
    <section className="method-section" id="lab" aria-labelledby="method-title">
      <div className="section-topline mono"><span>04 / OUR METHOD</span><span>TEST · ADAPT · REPEAT</span></div>
      <div className="method-heading">
        <h2 id="method-title">A CONTINUOUS<br />CYCLE OF<br /><span>IMPROVEMENT.</span></h2>
        <p className="method-intro">Progress is not a single result. It is a process that keeps learning from the body.</p>
      </div>
      <div className="method-track" aria-label="KINETIC training method: measure, train, repeat">
        {method.map((step, index) => (
          <article className="method-phase" key={step.title}>
            <div className="method-dial" aria-hidden="true"><span>{step.phase}</span><i /><b /></div>
            <p className="method-phase-index mono">{step.mark}</p>
            <h3>{step.title}</h3>
            <p className="method-phase-copy">{step.copy}</p>
            {index < method.length - 1 && <span className="method-connector" aria-hidden="true">→</span>}
          </article>
        ))}
        <svg className="method-cycle-line" viewBox="0 0 1000 120" aria-hidden="true" preserveAspectRatio="none">
          <path d="M60 58 H940 Q985 58 985 95 Q985 112 960 112 H40 Q15 112 15 88 V58" />
        </svg>
      </div>
      <p className="method-footnote mono">EVERY TEST INFORMS THE NEXT SESSION. EVERY SESSION CHANGES THE NEXT TEST.</p>
    </section>
  );
}
