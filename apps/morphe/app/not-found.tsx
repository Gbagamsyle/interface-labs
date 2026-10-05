import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Nothing on display",
  description: "The requested page is not part of the MORPHÉ programme.",
};

export default function NotFound() {
  return (
    <main className="not-found">
      <p className="mono">404 / MORPHÉ</p>
      <h1>NOTHING<br />ON DISPLAY.</h1>
      <p>There is nothing in this room. The next visit begins at the entrance.</p>
      <Link className="text-link mono" href="/">RETURN TO MORPHÉ <span aria-hidden="true">↗</span></Link>
    </main>
  );
}
