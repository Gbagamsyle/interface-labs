import type { Metadata } from "next";
import { museum } from "@/data/museum";
import { VisitMap } from "@/components/home/visit-map";

export const metadata: Metadata = {
  title: "Visit",
  description: "Plan a visit to MORPHÉ Contemporary in London. Opening hours, admission, access and directions.",
};

export default function VisitPage() {
  return (
    <main className="visit-page">
      <header className="page-intro visit-intro">
        <div className="section-kicker mono"><span>MORPHÉ / VISIT</span><span>EXCHANGE PLACE / LONDON</span></div>
        <h1 className="visit-main-heading">COME SEE IT<br /><em>DIFFERENTLY.</em></h1>
        <div className="page-intro-bottom">
          <span className="mono">A ROOM OF YOUR OWN</span>
          <p>Arrive curious. Leave with a different question.</p>
        </div>
      </header>

      <section className="visit-address-block" aria-labelledby="visit-address-title">
        <div>
          <p className="mono">MORPHÉ CONTEMPORARY</p>
          <h2 id="visit-address-title">{museum.address.map((line) => <span key={line}>{line}</span>)}</h2>
        </div>
        <p className="visit-address-note">A short walk from the river, between Southwark and London Bridge.</p>
      </section>
      <VisitMap variant="visit" credit="THAMES PATH / SOUTH BANK" />

      <div className="visit-details">
        <section className="visit-row" aria-labelledby="hours-title">
          <p className="mono">OPENING HOURS</p>
          <div className="hours-list">
            <h2 id="hours-title">Come when you can.</h2>
            {museum.hours.map((item) => <p className="hours-line" key={item.days}><span>{item.days}</span><span>{item.time}</span></p>)}
          </div>
          <p className="visit-secondary">Last entry is 30 minutes before closing. Late opening on Fridays.</p>
        </section>
        <section className="visit-row" aria-labelledby="admission-title">
          <p className="mono">ADMISSION</p>
          <div><h2 id="admission-title">A little time, freely spent.</h2><div className="visit-rate-list">{museum.admission.map((item) => <p className="visit-rate" key={item.label}><span>{item.label}</span><span>{item.price}</span></p>)}</div></div>
          <p className="visit-secondary">No booking is needed for general admission. Pay what you can on the first Sunday of each month.</p>
        </section>
        <section className="visit-row" aria-labelledby="travel-title">
          <p className="mono">GETTING HERE</p>
          <div><h2 id="travel-title">Arrive slowly.</h2><div className="visit-travel-list">{museum.travel.map((item) => <p className="visit-travel" key={item.mode}><span className="mono">{item.mode}</span><span>{item.details}</span></p>)}</div></div>
          <p className="visit-secondary">The museum has no visitor car park. Step-free access is available from the street.</p>
        </section>
        <section className="visit-row" id="accessibility" aria-labelledby="access-title">
          <p className="mono">ACCESSIBILITY</p>
          <div><h2 id="access-title">Room for everyone.</h2><p className="visit-primary">{museum.accessibility}</p></div>
          <p className="visit-secondary">For access questions or to arrange a relaxed visit, contact our welcome team before you arrive.</p>
        </section>
        <section className="visit-row visit-contact-row" aria-labelledby="contact-title">
          <p className="mono">CONTACT</p>
          <div><h2 id="contact-title">We’re here.</h2><div className="visit-contact-list">{museum.contacts.map((item) => <a href={item.href} key={item.label}><span>{item.label}</span><span>{item.value} <span aria-hidden="true">↗</span></span></a>)}</div></div>
          <p className="visit-secondary">For group visits, please write at least two weeks before your preferred date.</p>
        </section>
      </div>
    </main>
  );
}
