import { CTASection } from "@/components/CTASection";
import { ServicesGrid } from "@/components/ServicesGrid";

export default function ServicesPage() {
  return (
    <>
      <section className="bg-navy py-20 text-white sm:py-24">
        <div className="section-shell max-w-4xl">
          <p className="text-sm font-black uppercase tracking-[0.22em] text-orange">
            Services
          </p>
          <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-6xl">
            Full-service restoration for homes and businesses
          </h1>
          <p className="mt-5 text-lg leading-8 text-white/70">
            Browse the core service lines that power this restoration website
            demo and connect each visitor to booking.
          </p>
        </div>
      </section>
      <ServicesGrid />
      <CTASection />
    </>
  );
}
