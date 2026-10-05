import { AthleteStories } from "@/components/athlete-stories";
import { DisciplinesSection } from "@/components/disciplines";
import { FinalCta } from "@/components/final-cta";
import { Hero } from "@/components/hero";
import { ManifestoSection, MethodSection } from "@/components/manifesto-method";
import { PerformanceSection } from "@/components/performance";
import { PerformanceTicker } from "@/components/ticker";

export default function HomePage() {
  return (
    <>
      <Hero />
      <PerformanceTicker />
      <PerformanceSection />
      <DisciplinesSection />
      <ManifestoSection />
      <MethodSection />
      <AthleteStories />
      <FinalCta />
    </>
  );
}
