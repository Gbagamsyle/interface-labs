"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { href: "#protocol", label: "PROTOCOL" },
  { href: "#developers", label: "DEVELOPERS" },
  { href: "#network", label: "NETWORK" },
  { href: "#architecture", label: "RESEARCH" },
];

export function SiteNav() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") setMenuOpen(false);
    }
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  return (
    <header className="aether-topbar">
      <Link className="aether-brand" href="/" aria-label="AETHER network home" onClick={() => setMenuOpen(false)}>
        <span className="aether-brand-name">AETHER</span><span className="aether-brand-divider">/</span><span className="aether-brand-network">NETWORK</span>
      </Link>
      <nav className="aether-nav-links" aria-label="Main navigation">
        {NAV_LINKS.map((link) => (
          <Link key={link.href} href={link.href} className="aether-nav-link">
            {link.label}
          </Link>
        ))}
      </nav>
      <p className="aether-nav-status"><span>STATUS: OPERATIONAL</span><span className="status-dot active" aria-hidden="true" /></p>
      <button
        type="button"
        className="aether-menu-toggle"
        aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={menuOpen}
        aria-controls="aether-mobile-menu"
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span aria-hidden="true">{menuOpen ? "×" : "☰"}</span>
      </button>
      <nav id="aether-mobile-menu" className={menuOpen ? "aether-mobile-menu is-open" : "aether-mobile-menu"} aria-label="Mobile navigation" aria-hidden={!menuOpen}>
        {NAV_LINKS.map((link) => (
          <Link key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>
            <span>{link.label}</span><span aria-hidden="true">↗</span>
          </Link>
        ))}
        <p className="type-system-sm">AETHER / MAINNET / OPERATIONAL</p>
      </nav>
    </header>
  );
}
