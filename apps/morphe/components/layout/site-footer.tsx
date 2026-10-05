import Link from "next/link";

const footerLinks = [
  { label: "Newsletter", href: "mailto:hello@morphe.contemporary?subject=Newsletter" },
  { label: "Instagram", href: "https://www.instagram.com/", external: true },
  { label: "Archive", href: "/exhibitions#past" },
  { label: "Accessibility", href: "/visit#accessibility" },
  { label: "Credits", href: "/visit#credits" },
];

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <span className="mono eyebrow">MORPHÉ CONTEMPORARY · LONDON</span>
        <span className="mono eyebrow">51.5072° N / 00.1004° W</span>
      </div>
      <Link href="/" className="footer-wordmark" aria-label="MORPHÉ home">
        MORPHÉ<span>®</span>
      </Link>
      <div className="footer-bottom">
        <p className="mono copyright">© 2026 MORPHÉ CONTEMPORARY</p>
        <nav aria-label="Footer navigation" className="footer-links">
          {footerLinks.map((link) =>
            link.external ? (
              <a key={link.label} href={link.href} target="_blank" rel="noreferrer">{link.label}<span aria-hidden="true">↗</span></a>
            ) : (
              <Link key={link.label} href={link.href}>{link.label}</Link>
            ),
          )}
        </nav>
        <p className="mono footer-credit">A FICTIONAL INSTITUTION / A FRONTEND EXPERIMENT</p>
      </div>
    </footer>
  );
}
