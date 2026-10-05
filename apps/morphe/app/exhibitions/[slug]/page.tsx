import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { exhibitions, getExhibitionBySlug, getRelatedExhibitions } from "@/data/exhibitions";
import { museum } from "@/data/museum";

type ExhibitionPageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return exhibitions.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: ExhibitionPageProps): Promise<Metadata> {
  const { slug } = await params;
  const exhibition = getExhibitionBySlug(slug);
  if (!exhibition) return { title: "Exhibition not found" };
  return {
    title: exhibition.title,
    description: `${exhibition.title} by ${exhibition.artist} at MORPHÉ Contemporary, ${exhibition.dates}.`,
    openGraph: { images: [exhibition.hero.src] },
  };
}

export default async function ExhibitionDetailPage({ params }: ExhibitionPageProps) {
  const { slug } = await params;
  const exhibition = getExhibitionBySlug(slug);
  if (!exhibition) notFound();
  const related = getRelatedExhibitions(slug)[0];

  return (
    <main className="exhibition-detail">
      <header className="detail-heading">
        <div>
          <p className="mono detail-number">{exhibition.number} / {exhibition.status.toUpperCase()} EXHIBITION</p>
          <h1 className="detail-title">{exhibition.titleLines.map((line) => (
            <span key={line}>{line}</span>
          ))}</h1>
        </div>
        <div className="mono detail-side-meta">
          <span>{exhibition.artist}</span>
          <span>{exhibition.dates}</span>
          <span>{exhibition.discipline}</span>
        </div>
      </header>

      <figure className="detail-hero image-frame">
        <Image src={exhibition.hero.src} alt={exhibition.hero.alt} fill preload sizes="100vw" className="image-cover" />
        <figcaption className="mono">{exhibition.hero.caption} · {exhibition.hero.year}</figcaption>
      </figure>

      <section className="detail-introduction" aria-labelledby="exhibition-statement-title">
        <div>
          <p className="mono detail-section-label">THE EXHIBITION</p>
          <h2 id="exhibition-statement-title">A room for<br />what remains.</h2>
        </div>
        <div className="detail-introduction-copy">
          {exhibition.statement.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
      </section>

      <section className="works-section" aria-labelledby="selected-works-title">
        <div className="works-heading mono"><h2 id="selected-works-title">SELECTED WORKS</h2><span>INSTALLATION VIEWS / DETAILS</span></div>
        <div className="works-grid">
          {exhibition.works.map((work) => (
            <figure className="work-item" key={work.caption}>
              <div className="work-image image-frame">
                <Image src={work.src} alt={work.alt} fill sizes="(max-width: 760px) 90vw, 44vw" className="image-cover" />
              </div>
              <figcaption className="mono"><span>{work.caption}</span><span>{work.year}</span></figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="artist-statement-section" aria-labelledby="artist-statement-title">
        <p className="mono artist-statement-label" id="artist-statement-title">IN THE ARTIST’S WORDS</p>
        <div className="artist-statement-copy">
          <blockquote>“{exhibition.artistStatement.quote}”</blockquote>
          <p>{exhibition.artistStatement.note}</p>
          <p className="mono artist-statement-credit">{exhibition.artist}</p>
        </div>
      </section>

      <section className="detail-information" aria-labelledby="detail-information-title">
        <h2 id="detail-information-title">Plan a visit.</h2>
        <div className="detail-info-row"><span className="mono">DATES</span><span>{exhibition.dates}</span></div>
        <div className="detail-info-row"><span className="mono">GALLERY</span><span>{exhibition.gallery}</span></div>
        <div className="detail-info-row"><span className="mono">ADMISSION</span><span>{museum.admission.map((item) => `${item.label} ${item.price}`).join(" · ")}</span></div>
        <div className="detail-info-row"><span className="mono">ACCESS</span><span>{museum.accessibility}</span></div>
      </section>

      {related && (
        <nav className="related-section" aria-label="Related exhibition">
          <p className="mono">NEXT /</p>
          <Link className="related-link" href={`/exhibitions/${related.slug}`}>
            <span className="mono related-index">→</span>
            <h2>{related.title}</h2><span className="mono">{related.artist} <span aria-hidden="true">↗</span></span>
          </Link>
        </nav>
      )}
    </main>
  );
}
