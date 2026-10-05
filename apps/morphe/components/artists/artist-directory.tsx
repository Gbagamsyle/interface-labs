"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useState } from "react";
import { artistRanges, artists, type Artist } from "@/data/artists";
import { exhibitions } from "@/data/exhibitions";

export function ArtistDirectory() {
  const [activeArtist, setActiveArtist] = useState<Artist>(artists[0]);
  const reduceMotion = useReducedMotion();
  const relatedExhibition = exhibitions.find((exhibition) => exhibition.artist.includes(activeArtist.name));

  return (
    <div className="artist-directory-shell">
      <div className="artist-directory">
        {artistRanges.map((range) => (
          <section className="artist-range" key={range.label} aria-labelledby={`artist-range-${range.label}`}>
            <h2 className="mono artist-range-label" id={`artist-range-${range.label}`}>{range.label}</h2>
            <div className="artist-range-list">
              {range.artists.map((artist) => (
                <button
                  className={activeArtist.slug === artist.slug ? "artist-directory-item is-active" : "artist-directory-item"}
                  type="button"
                  key={artist.slug}
                  onMouseEnter={() => setActiveArtist(artist)}
                  onFocus={() => setActiveArtist(artist)}
                  onClick={() => setActiveArtist(artist)}
                  aria-pressed={activeArtist.slug === artist.slug}
                >
                  <span className="artist-directory-name">{artist.name}</span>
                  <span className="mono" aria-hidden="true">↗</span>
                  <span className="mono artist-directory-meta">{artist.discipline} · {artist.location}</span>
                </button>
              ))}
            </div>
          </section>
        ))}
        <p className="artist-endnote mono"><span>ARTISTS / AND COUNTING</span><span>AN INDEX IN MOTION</span></p>
      </div>
      <figure className="artist-page-preview" aria-live="polite">
        <div className="image-frame">
          <AnimatePresence initial={false} mode="wait">
            <motion.div
              key={activeArtist.slug}
              className="artist-preview-image"
              initial={{ clipPath: "inset(0 0 0 100%)" }}
              animate={{ clipPath: "inset(0 0 0 0%)" }}
              exit={reduceMotion ? undefined : { clipPath: "inset(0 100% 0 0)" }}
              transition={{ duration: reduceMotion ? 0 : 0.22, ease: "easeOut" }}
            >
              <Image src={activeArtist.image} alt={activeArtist.alt} fill sizes="(max-width: 760px) 90vw, 24vw" className="image-cover" />
            </motion.div>
          </AnimatePresence>
        </div>
        <figcaption>
          <span className="mono">{activeArtist.name} / {activeArtist.location}</span>
          {relatedExhibition && <span className="artist-preview-exhibition">{relatedExhibition.title}</span>}
        </figcaption>
      </figure>
    </div>
  );
}
