import Link from "next/link";
import { exhibitions, homeExhibitions } from "@/data/exhibitions";
import { artistRanges } from "@/data/artists";
import { museum } from "@/data/museum";
import { ExhibitionIndex } from "@/components/home/exhibition-index";
import { CurrentExhibitionArt } from "@/components/home/current-exhibition-art";
import { VisitMap } from "@/components/home/visit-map";
import { HeroArtwork } from "@/components/home/hero-artwork";
import { ManifestoTitle } from "@/components/home/manifesto-title";

export function HomePage() {
  const current = exhibitions.find((exhibition) => exhibition.status === "current");
  const artistsToFeature = artistRanges.flatMap((range) => range.artists).slice(0, 8);

  return (
    <main>
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-meta mono">
          <span>MORPHÉ CONTEMPORARY</span>
          <span>AUTUMN / WINTER 2026</span>
          <span>51.5072° N</span>
        </div>
        <h1 id="hero-title" className="hero-title">
          <span>ART SHOULD</span>
          <span className="hero-interrupt">INTERRUPT</span>
          <span>YOU<span className="hero-period">.</span></span>
        </h1>
        <div className="hero-intro">
          <p>An institution for art, technology and the present.</p>
          <Link className="mono hero-explore-link" href="/exhibitions">EXPLORE WHAT&apos;S ON <span aria-hidden="true">↗</span></Link>
        </div>
        <HeroArtwork />
        <aside className="hero-side-note" aria-label="Current exhibition">
          <span className="mono hero-note-label">AN INVITATION</span>
          <p className="hero-note-copy">A place to look<br />again.</p>
          {current && (
            <Link className="hero-current-link" href={`/exhibitions/${current.slug}`}>
              <span className="mono">NOW SHOWING</span>
              <span>{current.title}<span aria-hidden="true"> ↗</span></span>
            </Link>
          )}
        </aside>
        <a className="mono hero-scroll" href="#current-exhibition"><span aria-hidden="true">↓</span> SCROLL TO ENTER</a>
        <span className="mono hero-edition">INDEPENDENT / DIGITAL FIRST / LONDON</span>
      </section>

      {current && (
        <section className="current-section section-pad" id="current-exhibition" aria-labelledby="current-title">
          <div className="section-kicker mono"><span>CURRENT EXHIBITION</span><span>ON VIEW NOW</span></div>
          <div className="current-grid">
            <CurrentExhibitionArt exhibition={current} />
            <div className="current-copy">
              <p className="mono current-dates">{current.dates}</p>
              <h2 id="current-title">THE SHAPE<br />OF ABSENCE</h2>
              <p className="current-artist">{current.artist}</p>
              <p className="current-categories">{current.discipline}</p>
              <p className="current-description">{current.summary}</p>
              <Link className="text-link mono" href={`/exhibitions/${current.slug}`}>VIEW EXHIBITION <span aria-hidden="true">↗</span></Link>
            </div>
          </div>
        </section>
      )}

      <section className="index-section section-pad" aria-labelledby="index-title">
        <div className="section-kicker mono"><span>WHAT’S ON</span><span>2026 — 2027</span></div>
        <div className="index-heading-row">
          <h2 id="index-title" className="section-display">NOW</h2>
          <div className="index-heading-note">
            <p>Three exhibitions on what remains when bodies, images and machines move on.</p>
            <Link className="text-link mono" href="/exhibitions">ALL EXHIBITIONS <span aria-hidden="true">↗</span></Link>
          </div>
        </div>
        <ExhibitionIndex exhibitions={homeExhibitions} />
      </section>

      <section className="manifesto section-pad" aria-labelledby="manifesto-title">
        <div className="section-kicker mono"><span>A WAY OF LOOKING</span><span>OUR POSITION</span></div>
        <ManifestoTitle />
        <p className="manifesto-note mono">ART IS NOT A THING TO KEEP.<br />IT IS A WAY TO BEGIN AGAIN.</p>
      </section>

      <section className="artist-section section-pad" aria-labelledby="artist-title">
        <div className="section-kicker mono"><span>ARTISTS</span><span>PEOPLE, NOT PERIODS</span></div>
        <div className="artist-section-grid">
          <h2 id="artist-title" className="section-display">IN<br />COMPANY</h2>
          <div className="artist-feature-list">
            {artistsToFeature.map((artist) => (
              <Link href="/artists" key={artist.slug} className="artist-feature-row">
                <span>{artist.name}</span>
                <span className="mono artist-discipline">{artist.discipline}</span>
                <span aria-hidden="true">↗</span>
              </Link>
            ))}
            <Link href="/artists" className="text-link mono artist-all-link">MEET ALL ARTISTS <span aria-hidden="true">↗</span></Link>
          </div>
        </div>
      </section>

      <section className="visit-teaser section-pad" aria-labelledby="visit-title">
        <div className="section-kicker mono"><span>FIND US</span><span>OPEN IN LONDON</span></div>
        <div className="visit-teaser-grid">
          <h2 id="visit-title">COME SEE IT<br /><em>DIFFERENTLY.</em></h2>
          <div className="visit-teaser-info">
            <p className="visit-address">{museum.address.map((line) => <span key={line}>{line}</span>)}</p>
            <p className="mono visit-hours-short">TUE — THU 10:00 — 18:00<br />FRI 10:00 — 21:00<br />SAT — SUN 10:00 — 18:00</p>
            <Link className="text-link mono" href="/visit">PLAN YOUR VISIT <span aria-hidden="true">↗</span></Link>
          </div>
        </div>
        <VisitMap credit="A SHORT WALK FROM THE RIVER" />
      </section>
    </main>
  );
}
