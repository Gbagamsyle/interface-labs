import type { Metadata } from "next";
import { ExhibitionArchive } from "@/components/exhibitions/exhibition-archive";

export const metadata: Metadata = {
  title: "Exhibitions",
  description: "Current, upcoming and archived exhibitions at MORPHÉ Contemporary, London.",
};

export default function ExhibitionsPage() {
  return (
    <main className="exhibitions-page">
      <header className="page-intro exhibitions-intro">
        <div className="section-kicker mono"><span>MORPHÉ / PROGRAMME</span><span>2026 — 2027</span></div>
        <h1 className="exhibitions-title">EXHIBITIONS</h1>
        <div className="page-intro-bottom">
          <span className="mono">2026 / 2027</span>
          <p>Three rooms for looking again. A programme of art, images and ideas in motion.</p>
        </div>
      </header>
      <ExhibitionArchive />
    </main>
  );
}
