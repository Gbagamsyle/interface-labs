"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useState } from "react";
import type { Exhibition } from "@/data/exhibitions";

export function ExhibitionIndex({ exhibitions }: { exhibitions: Exhibition[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const reduceMotion = useReducedMotion();
  const activeExhibition = exhibitions[activeIndex];

  return (
    <div className="index-layout">
      <div className="index-list" role="list" aria-label="Current and upcoming exhibitions">
        {exhibitions.map((exhibition, index) => (
          <div className="index-row-item" key={exhibition.slug} role="listitem">
            <Link
              className={index === activeIndex ? "index-row is-active" : "index-row"}
              href={`/exhibitions/${exhibition.slug}`}
              onMouseEnter={() => setActiveIndex(index)}
              onFocus={() => setActiveIndex(index)}
              aria-current={index === activeIndex ? "true" : undefined}
            >
              <span className="mono index-number">{exhibition.number}</span>
              <span className="index-title">{exhibition.title}</span>
              <span className="mono index-artist">{exhibition.artist}</span>
              <span className="index-arrow" aria-hidden="true">↗</span>
            </Link>
            <button
              type="button"
              className="mono index-preview-select"
              aria-label={`Preview ${exhibition.title} artwork`}
              aria-pressed={index === activeIndex}
              onClick={() => setActiveIndex(index)}
            >
              {index === activeIndex ? "SHOWING" : "PREVIEW"}
            </button>
          </div>
        ))}
      </div>
      <figure className="index-preview" aria-live="polite">
        <div className="image-frame">
          <AnimatePresence initial={false} mode="wait">
            <motion.div
              key={activeExhibition.slug}
              className="index-preview-image"
              initial={{ clipPath: "inset(0 0 0 100%)" }}
              animate={{ clipPath: "inset(0 0 0 0%)" }}
              exit={reduceMotion ? undefined : { clipPath: "inset(0 100% 0 0)" }}
              transition={{ duration: reduceMotion ? 0 : 0.22, ease: "easeOut" }}
            >
              <Image
                src={activeExhibition.hero.src}
                alt={activeExhibition.hero.alt}
                fill
                sizes="(max-width: 800px) 90vw, 34vw"
                className="image-cover"
              />
            </motion.div>
          </AnimatePresence>
        </div>
        <figcaption className="mono">{activeExhibition.hero.caption} · {activeExhibition.hero.year}</figcaption>
      </figure>
    </div>
  );
}
