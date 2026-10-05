import type { Metadata, Viewport } from "next";
import { Anton, IBM_Plex_Mono, Inter } from "next/font/google";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import "@/styles/globals.css";

const display = Anton({ subsets: ["latin"], weight: "400", variable: "--kinetic-font-display", display: "swap" });
const body = Inter({ subsets: ["latin"], variable: "--kinetic-font-body", display: "swap" });
const mono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--kinetic-font-mono", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://kinetic.interface-labs.co"),
  title: { default: "KINETIC — Human Performance Lab", template: "%s — KINETIC" },
  description: "A fictional human-performance laboratory concept exploring sports science, biomechanics and elite athletic training.",
  openGraph: {
    title: "KINETIC — Human Performance Lab",
    description: "Performance is measured in margins.",
    type: "website",
    locale: "en_GB",
  },
};

export const viewport: Viewport = {
  themeColor: "#111211",
  colorScheme: "dark",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-GB" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
