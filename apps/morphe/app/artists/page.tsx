import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArtistDirectory } from "@/components/artists/artist-directory";
import { artists } from "@/data/artists";
import { getExhibitionBySlug } from "@/data/exhibitions";

export const metadata: Metadata = {
  title: "Artists",
  description: "Meet the artists shaping the MORPHÉ Contemporary programme.",
};

export default function ArtistsPage() {
  const featuredArtist = artists.find((artist) => artist.slug === "amara-k-mensah");
  const featuredExhibition = featuredArtist?.exhibitionSlug
    ? getExhibitionBySlug(featuredArtist.exhibitionSlug)
    : undefined;

  return (
    <main>
      <header className="page-intro artist-page-intro">
        <div className="section-kicker mono"><span>MORPHÉ / ARTISTS</span><span>PEOPLE, NOT PERIODS</span></div>
        <h1 className="page-intro-title">ARTISTS<br /><em>A — Z</em></h1>
        <div className="page-intro-bottom">
          <span className="mono">IN COMPANY</span>
          <p>Artists working across forms, places and ways of seeing. An unfinished directory, by design.</p>
        </div>
      </header>

      {featuredArtist && (
        <section className="featured-artist" aria-labelledby="featured-artist-title">
          <figure className="featured-artist-image image-frame">
            <Image src={featuredArtist.image} alt={featuredArtist.alt} fill sizes="(max-width: 760px) 100vw, 58vw" className="image-cover" />
            <figcaption className="mono">A PRACTICE IN PRESENCE / ACCRA — LONDON</figcaption>
          </figure>
          <div className="featured-artist-copy">
            <p className="mono">IN FOCUS</p>
            <h2 id="featured-artist-title">AMARA K.<br />MENSAH</h2>
            <p className="mono featured-artist-discipline">{featuredArtist.discipline}</p>
            <p className="featured-artist-location">{featuredArtist.location}</p>
            <p className="featured-artist-bio">{featuredArtist.bio}</p>
            {featuredExhibition && (
              <Link className="text-link mono" href={`/exhibitions/${featuredExhibition.slug}`}>
                ON VIEW · {featuredExhibition.title} <span aria-hidden="true">↗</span>
              </Link>
            )}
          </div>
        </section>
      )}

      <div className="artist-index-heading">
        <h2 className="mono">THE DIRECTORY</h2>
        <p className="mono">{artists.length} ARTISTS · SELECT A NAME TO SEE THEIR WORK</p>
      </div>
      <ArtistDirectory />
    </main>
  );
}
