"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import type { Exhibition } from "@/data/exhibitions";

export function CurrentExhibitionArt({ exhibition }: { exhibition: Exhibition }) {
  const artRef = useRef<HTMLDivElement>(null);
  const [hasEntered, setHasEntered] = useState(false);

  useEffect(() => {
    const artworkWrap = artRef.current;
    if (!artworkWrap || !("IntersectionObserver" in window)) {
      setHasEntered(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setHasEntered(true);
        observer.disconnect();
      },
      { threshold: 0.2 },
    );

    observer.observe(artworkWrap);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="current-art-wrap" ref={artRef}>
      <Link href={`/exhibitions/${exhibition.slug}`} className="current-art-link" aria-label={`View ${exhibition.title}`}>
        <div
          className={hasEntered ? "current-art image-frame is-revealed" : "current-art image-frame"}
        >
          <Image
            src={exhibition.hero.src}
            alt={exhibition.hero.alt}
            fill
            sizes="(max-width: 760px) 100vw, 62vw"
            className="image-cover"
          />
          <span className="mono artwork-stamp">MORPHÉ</span>
        </div>
      </Link>
      <p className="mono image-caption">{exhibition.hero.caption} · {exhibition.hero.year}</p>
    </div>
  );
}
