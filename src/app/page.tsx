import { CTASection } from "@/components/CTASection";
import { Gallery } from "@/components/Gallery";
import { Hero } from "@/components/Hero";
import { ProcessTimeline } from "@/components/ProcessTimeline";
import { ServicesGrid } from "@/components/ServicesGrid";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesGrid />
      <ProcessTimeline />
      <Gallery />
      <CTASection />
    </>
  );
}
