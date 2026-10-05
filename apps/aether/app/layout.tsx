import type { Metadata, Viewport } from "next";
import { SiteNav } from "@/components/layout/SiteNav";
import { SiteFooter } from "@/components/layout/SiteFooter";
import "@/styles/globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://aether.interface-labs.co"),
  title: {
    default: "AETHER — Infrastructure for an Autonomous Internet",
    template: "%s — AETHER",
  },
  description:
    "A fictional distributed infrastructure concept exploring autonomous agents, compute networks and machine-native software.",
  keywords: [
    "autonomous agents",
    "distributed infrastructure",
    "compute network",
    "machine-native software",
    "fictional concept",
    "interface lab",
  ],
  openGraph: {
    title: "AETHER — Infrastructure for an Autonomous Internet",
    description:
      "A fictional distributed infrastructure concept exploring autonomous agents, compute networks and machine-native software.",
    type: "website",
    locale: "en_GB",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0c0e",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-GB">
      <body>
        <SiteNav />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
