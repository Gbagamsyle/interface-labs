import Image from "next/image";
import Link from "next/link";

export function FinalCta() {
  return (
    <section className="final-cta" id="contact" aria-labelledby="final-cta-title">
      <Image
        src="https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=1800&q=88"
        alt="Sprinters accelerating down a track in low evening light"
        fill
        sizes="100vw"
        className="final-cta-image"
      />
      <div className="final-cta-shade" aria-hidden="true" />
      <div className="final-cta-content">
        <p className="section-code mono">GET STARTED</p>
        <h2 id="final-cta-title">FIND YOUR<br />NEXT <span>0.01.</span></h2>
        <div className="final-cta-links">
          <Link className="kinetic-button kinetic-button-orange" href="mailto:lab@kinetic.performance">ENTER THE LAB <span aria-hidden="true">↗</span></Link>
          <Link className="kinetic-button kinetic-button-outline" href="#training">EXPLORE TRAINING <span aria-hidden="true">↗</span></Link>
        </div>
      </div>
      <div className="final-cta-side mono"><span>HIGHER</span><span>FASTER</span><span>STRONGER</span><span>LONGER</span><b>→</b></div>
      <p className="final-cta-disclaimer mono">FICTIONAL LAB / DEMO CONCEPT</p>
    </section>
  );
}
