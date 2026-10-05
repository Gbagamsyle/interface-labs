"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring } from "motion/react";

export function HeroArtwork() {
  const reduceMotion = useReducedMotion();
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const x = useSpring(rawX, { stiffness: 90, damping: 22, mass: 0.7 });
  const y = useSpring(rawY, { stiffness: 90, damping: 22, mass: 0.7 });
  const stageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const stage = stageRef.current;
    const hero = stage?.closest<HTMLElement>(".hero");
    if (!hero || reduceMotion) return;
    const heroElement = hero;

    function moveArtwork(event: PointerEvent) {
      if (event.pointerType !== "mouse") return;
      const bounds = heroElement.getBoundingClientRect();
      rawX.set(((event.clientX - bounds.left) / bounds.width - 0.5) * 12);
      rawY.set(((event.clientY - bounds.top) / bounds.height - 0.5) * 10);
    }

    function resetArtwork() {
      rawX.set(0);
      rawY.set(0);
    }

    heroElement.addEventListener("pointermove", moveArtwork);
    heroElement.addEventListener("pointerleave", resetArtwork);
    return () => {
      heroElement.removeEventListener("pointermove", moveArtwork);
      heroElement.removeEventListener("pointerleave", resetArtwork);
    };
  }, [rawX, rawY, reduceMotion]);

  return (
    <div className="hero-artwork-stage" ref={stageRef}>
      <motion.figure className="hero-artwork" style={{ x, y }}>
        <Image
          src="https://images.unsplash.com/photo-1541961017774-22349e4a1262?auto=format&fit=crop&w=1500&q=90"
          alt="Vibrant abstract painting with fields of yellow, orange and teal"
          fill
          preload
          sizes="(max-width: 700px) 72vw, (max-width: 1200px) 38vw, 34vw"
          className="image-cover"
        />
        <figcaption className="mono artwork-caption">A ROOM HELD OPEN / 2026</figcaption>
      </motion.figure>
    </div>
  );
}
