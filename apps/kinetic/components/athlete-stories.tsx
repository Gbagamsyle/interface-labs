import Image from "next/image";
import { athleteStories } from "@/data/athletes";

export function AthleteStories() {
  return (
    <section className="stories-section" id="athletes" aria-labelledby="stories-title">
      <div className="section-topline mono"><span>ATHLETE STORIES</span><span>CASE FILES / FICTIONAL DEMO DATA</span></div>
      <div className="stories-heading"><h2 id="stories-title">PROGRESS<br />HAS A FACE<span className="signal-period">.</span></h2><p className="mono">INDIVIDUAL OUTPUT<br />/ MEASURED OVER TIME</p></div>
      <div className="stories-grid">
        {athleteStories.map((athlete, index) => (
          <article className="story" key={athlete.name}>
            <div className="story-photo">
              <Image src={athlete.image} alt={athlete.alt} fill sizes="(max-width: 760px) 90vw, 32vw" className="story-image" />
              <span className="story-event mono">{athlete.event}</span>
              <span className="story-file mono">CASE / {String(index + 1).padStart(2, "0")}</span>
            </div>
            <div className="story-copy">
              <div className="story-name-line"><h3>{athlete.name}</h3><span className="mono">{athlete.discipline}</span></div>
              <div className="story-result">
                <span className="story-before">{athlete.before}</span>
                <span className="story-arrow" aria-hidden="true">→</span>
                <strong>{athlete.after}</strong>
                <span className="story-change mono">{athlete.change}</span>
              </div>
              <p className="mono story-demo">FICTIONAL ATHLETE / DEMO RESULTS</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
