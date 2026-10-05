import Image from "next/image";
import { disciplines } from "@/data/disciplines";

export function DisciplinesSection() {
  return (
    <section className="disciplines-section" id="training" aria-labelledby="disciplines-title">
      <div className="section-topline mono"><span>TRAINING DISCIPLINES</span><span>FOUR WAYS FORWARD</span></div>
      <div className="disciplines-heading"><h2 id="disciplines-title">TRAIN THE<br /><span>DIFFERENCE.</span></h2><p className="mono">SELECT A DISCIPLINE<br />TO SEE THE WORK →</p></div>
      <div className="discipline-bands">
        {disciplines.map((discipline) => (
          <article className={`discipline-band discipline-${discipline.treatment}`} key={discipline.name}>
            <Image src={discipline.image} alt={discipline.alt} fill sizes="(max-width: 760px) 100vw, 25vw" className="discipline-image" />
            <div className="discipline-shade" aria-hidden="true" />
            <span className="discipline-number mono">{discipline.number}</span>
            <div className="discipline-band-copy">
              <h3>{discipline.name}</h3>
              <p className="mono">{discipline.promise}</p>
            </div>
            <span className="discipline-arrow" aria-hidden="true">↗</span>
          </article>
        ))}
      </div>
      <p className="discipline-disclaimer mono">TRAINING PROGRAMMES SHAPED AROUND THE ATHLETE, NEVER THE OTHER WAY ROUND.</p>
    </section>
  );
}
