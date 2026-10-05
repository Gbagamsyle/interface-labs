"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { label: "Exhibitions", href: "/exhibitions" },
  { label: "Artists", href: "/artists" },
  { label: "Visit", href: "/visit" },
  { label: "Archive", href: "/exhibitions#past" },
];

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link className="wordmark" href="/" aria-label="MORPHÉ Contemporary — home" onClick={() => setMenuOpen(false)}>
          <span className="wordmark-name">MORPHÉ</span>
          <span className="registered">®</span>
          <span className="wordmark-caption mono">CONTEMPORARY ART</span>
        </Link>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {links.map((link) => {
            const isActive = link.href === "/exhibitions"
              ? pathname === link.href || pathname.startsWith(`${link.href}/`)
              : link.href !== "/exhibitions#past" && pathname === link.href;

            return (
              <Link
                key={link.label}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={isActive ? "nav-link is-active" : "nav-link"}
              >
                <span>{link.label}</span>
              </Link>
            );
          })}
        </nav>
        <p className="header-location">LONDON <span>/</span> 2026</p>
        <button
          type="button"
          className="menu-toggle"
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span>{menuOpen ? "Close" : "Menu"}</span>
          <span className={menuOpen ? "menu-mark is-open" : "menu-mark"} aria-hidden="true" />
        </button>
      </div>
      <nav
        id="mobile-navigation"
        className={menuOpen ? "mobile-nav is-open" : "mobile-nav"}
        aria-label="Mobile navigation"
        aria-hidden={!menuOpen}
      >
        {links.map((link) => (
          <Link key={link.label} href={link.href} onClick={() => setMenuOpen(false)}>
            <span>{link.label}</span><span aria-hidden="true">↗</span>
          </Link>
        ))}
        <p className="mono mobile-location">LONDON / 2026 · 51.5072° N</p>
      </nav>
    </header>
  );
}
