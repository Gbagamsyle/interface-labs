import { HeroSection } from "@/components/network/HeroSection";
import { NetworkSection } from "@/components/network/NetworkSection";
import { ProtocolSection } from "@/components/protocol/ProtocolSection";
import { TelemetrySection } from "@/components/telemetry/TelemetrySection";
import { ArchitectureSection } from "@/components/architecture/ArchitectureSection";
import { DevelopersSection } from "@/components/terminal/DevelopersSection";
import { ManifestoSection } from "@/components/system/ManifestoSection";
import { CtaSection } from "@/components/system/CtaSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <NetworkSection />
      <ProtocolSection />
      <TelemetrySection />
      <ArchitectureSection />
      <DevelopersSection />
      <ManifestoSection />
      <CtaSection />
    </>
  );
}
