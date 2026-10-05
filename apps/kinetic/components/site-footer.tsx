import Link from "next/link";

const footerLinks = [
  ["TRAINING", "#training"],
  ["ATHLETES", "#athletes"],
  ["SCIENCE", "#science"],
  ["LAB", "#lab"],
  ["CONTACT", "#contact"],
] as const;

export function SiteFooter() {
  return (
    <footer className="kinetic-footer">
      <Link className="kinetic-footer-brand" href="#top"><strong>KINETIC</strong><span className="mono">HUMAN PERFORMANCE LAB</span></Link>
      <nav aria-label="Footer navigation">
        {footerLinks.map(([label, href]) => <a href={href} key={label}>{label}</a>)}
      </nav>
      <span className="mono kinetic-footer-location">GLOBAL / 2026</span>
      <p className="mono kinetic-fiction-note">KINETIC IS A FICTIONAL INTERFACE-LAB CONCEPT.</p>
      <span className="signal-square" aria-hidden="true" />
    </footer>
  );
}
