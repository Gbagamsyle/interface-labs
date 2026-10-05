"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const lines = [
  { text: "WE DON'T", className: "manifesto-line-one" },
  { text: "COLLECT", className: "manifesto-line-two" },
  { text: "OBJECTS.", className: "manifesto-line-three" },
  { text: "WE COLLECT", className: "manifesto-line-four" },
  { text: "MOMENTS THAT", className: "manifesto-line-five" },
  { text: "CHANGE HOW YOU", className: "manifesto-line-six" },
  { text: "SEE.", className: "manifesto-line-seven" },
];

export function ManifestoTitle() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: titleRef,
    offset: ["start end", "end start"],
  });
  const lineTwoX = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : 5]);
  const lineFiveX = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : -6]);

  return (
    <motion.h2 ref={titleRef} id="manifesto-title" className="manifesto-title">
      {lines.map((line, index) => (
        <motion.span
          key={line.text}
          className={line.className}
          style={index === 1 ? { x: lineTwoX } : index === 4 ? { x: lineFiveX } : undefined}
        >
          {line.text}
        </motion.span>
      ))}
    </motion.h2>
  );
}
