"use client";

import { useState } from "react";
import { museum } from "@/data/museum";

type VisitMapProps = {
  variant?: "home" | "visit";
  credit: string;
};

export function VisitMap({ variant = "home", credit }: VisitMapProps) {
  const [isOpen, setIsOpen] = useState(false);
  const address = museum.address.join(", ");

  return (
    <div
      className={`visit-map ${variant === "visit" ? "visit-location-graphic" : "visit-map-home"}`}
      aria-label={`Abstract location diagram for MORPHÉ Contemporary, ${address}`}
    >
      <span className="map-river" aria-hidden="true" />
      <span className="map-road road-one" aria-hidden="true" />
      <span className="map-road road-two" aria-hidden="true" />
      <span className="map-road road-three" aria-hidden="true" />
      <span className="map-station mono">SOUTHWARK</span>
      <span className={isOpen ? "map-location is-open" : "map-location"}>
        <button
          type="button"
          className="map-marker mono"
          aria-expanded={isOpen}
          aria-describedby={`map-address-${variant}`}
          aria-controls={`map-address-${variant}`}
          onClick={() => setIsOpen((open) => !open)}
        >
          <span aria-hidden="true">●</span> MORPHÉ
        </button>
        <span className="map-annotation mono" id={`map-address-${variant}`}>
          {museum.name}<br />{address}
        </span>
      </span>
      <span className="map-north mono" aria-hidden="true">N ↑</span>
      <span className="map-credit mono">{credit}</span>
    </div>
  );
}
