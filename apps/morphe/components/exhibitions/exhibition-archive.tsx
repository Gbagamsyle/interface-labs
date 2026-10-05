"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { exhibitions, type Exhibition, type ExhibitionStatus } from "@/data/exhibitions";

const archiveGroups: { status: ExhibitionStatus; label: string; id: string }[] = [
  { status: "current", label: "Now", id: "now" },
  { status: "upcoming", label: "Upcoming", id: "upcoming" },
  { status: "past", label: "Archive", id: "archive" },
];

export function ExhibitionArchive() {
  const [active, setActive] = useState<Exhibition>(exhibitions.find((item) => item.status === "current") ?? exhibitions[0]);

  return (
    <div className="exhibition-archive">
      <div className="exhibition-archive-groups">
        {archiveGroups.map((group) => {
          const entries = exhibitions.filter((item) => item.status === group.status);
          return (
            <section className="archive-group" id={group.id} key={group.status} aria-labelledby={`${group.id}-title`}>
              <h2 className="mono archive-label" id={`${group.id}-title`}>{group.label}</h2>
              <ul className="archive-rows">
                {entries.map((exhibition) => (
                  <li className="archive-row-item" key={exhibition.slug}>
                    <Link
                      href={`/exhibitions/${exhibition.slug}`}
                      className={active.slug === exhibition.slug ? "archive-row is-active" : "archive-row"}
                      onMouseEnter={() => setActive(exhibition)}
                      onFocus={() => setActive(exhibition)}
                      aria-current={active.slug === exhibition.slug ? "true" : undefined}
                    >
                      <span className="mono archive-row-number">{exhibition.number}</span>
                      <span className="archive-row-main">
                        <span className="archive-row-title">{exhibition.title}</span>
                        <span className="archive-row-artist">{exhibition.artist}</span>
                      </span>
                      <span className="mono archive-row-meta">
                        <span>{exhibition.dates}</span>
                        <span>{exhibition.discipline}</span>
                      </span>
                      <span className="archive-row-arrow" aria-hidden="true">↗</span>
                    </Link>
                    <button
                      type="button"
                      className="mono archive-preview-button"
                      aria-label={`Preview ${exhibition.title}`}
                      aria-pressed={active.slug === exhibition.slug}
                      onClick={() => setActive(exhibition)}
                    >
                      {active.slug === exhibition.slug ? "SELECTED" : "PREVIEW"}
                    </button>
                  </li>
                ))}
              </ul>
            </section>
          );
        })}
      </div>

      <figure className="archive-preview" aria-live="polite">
        <div className="image-frame">
             <Image key={active.slug} src={active.hero.src} alt={active.hero.alt} fill preload={active.slug === "the-shape-of-absence"} sizes="(max-width: 760px) 90vw, 34vw" className="image-cover" />
          <span className="mono archive-preview-status">{active.status} exhibition</span>
        </div>
        <figcaption>
          <span>{active.hero.caption}</span>
          <span className="mono">{active.hero.year} · {active.artist}</span>
        </figcaption>
        <p className="archive-preview-summary">{active.summary}</p>
      </figure>
    </div>
  );
}
