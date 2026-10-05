"use client";

import Link from "next/link";
import { useState } from "react";

const navigation = [
  { href: "#training", label: "TRAINING" },
  { href: "#athletes", label: "ATHLETES" },
  { href: "#science", label: "SCIENCE" },
  { href: "#lab", label: "LAB" },
  { href: "#contact", label: "CONTACT" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="kinetic-header">
      <Link href="#top" className="kinetic-brand" aria-label="KINETIC Human Performance Lab home" onClick={() => setOpen(false)}>
        <span className="kinetic-brand-name">KINETIC</span>
        <span className="kinetic-brand-slash">/</span>
        <span className="kinetic-brand-description">HUMAN PERFORMANCE LAB</span>
      </Link>
      <nav className="kinetic-nav" aria-label="Main navigation">
        {navigation.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
      <p className="kinetic-global mono">GLOBAL / 2026</p>
      <button className="kinetic-menu-toggle" type="button" aria-expanded={open} aria-controls="kinetic-mobile-menu" aria-label={open ? "Close navigation" : "Open navigation"} onClick={() => setOpen((value) => !value)}>
        <span aria-hidden="true">{open ? "×" : "☰"}</span>
      </button>
      <nav id="kinetic-mobile-menu" className={open ? "kinetic-mobile-menu is-open" : "kinetic-mobile-menu"} aria-label="Mobile navigation" aria-hidden={!open}>
        {navigation.map((item) => (
          <a key={item.href} href={item.href} onClick={() => setOpen(false)}><span>{item.label}</span><span aria-hidden="true">↗</span></a>
        ))}
        <p className="mono">KINETIC / GLOBAL / 2026</p>
      </nav>
    </header>
  );
}
