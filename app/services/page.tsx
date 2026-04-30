import type { Metadata } from "next";
import Link from "next/link";
import { BookingPathPanel } from "@/components/BookingPathPanel";
import { CTASection } from "@/components/CTASection";
import { PageHero } from "@/components/PageHero";
import { ProcessSteps } from "@/components/ProcessSteps";
import { QuoteEstimator } from "@/components/QuoteEstimator";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";
import { ServiceVideoSection } from "@/components/ServiceVideoSection";
import { Reveal, Stagger, StaggerItem } from "@/components/Motion";
import { images, serviceNavGroups, services } from "@/lib/site";

export const metadata: Metadata = {
  title: "Central Florida Restoration Services | Water, Fire, Mold and Storm",
  description:
    "Explore Central Florida restoration services for water damage, fire cleanup, mold remediation, storm damage, emergency cleanup, and commercial restoration."
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        image={images.emergencyCrew}
        text="Focused restoration service pages designed to educate visitors, create urgency, and make it easy to request help."
        title="Complete restoration services for urgent property damage"
      />

      <section className="bg-white py-20 sm:py-24">
        <div className="section-shell">
          <SectionHeading
            eyebrow="Restoration Solutions"
            text="Each service has its own conversion-focused page with problem framing, urgency, process, imagery, CTA, and FAQs."
            title="Choose the restoration service you need"
          />
          <Stagger className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </Stagger>
        </div>
      </section>

      <ServiceVideoSection />

      <section className="bg-navy-50 py-20 sm:py-24">
        <div className="section-shell">
          <SectionHeading
            eyebrow="Complete Service Menu"
            text="Every dropdown item has its own detailed page with relevant copy, FAQs, CTAs, and royalty-free imagery matched to that service."
            title="Browse every restoration section"
          />
          <Stagger className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {serviceNavGroups.map((group, index) => (
              <StaggerItem
                direction={index % 3 === 0 ? "left" : index % 3 === 1 ? "up" : "right"}
                key={group.label}
              >
                <div className="glass-card rounded-[2rem] p-5">
                <p className="text-sm font-black uppercase tracking-[0.2em] text-rescue-600">
                  {group.label}
                </p>
                <div className="mt-4 grid gap-2">
                  {group.items.map((item) => (
                    <Link
                      className="rounded-2xl border border-navy-100 bg-white px-4 py-3 text-sm font-black text-navy-950 transition hover:border-rescue-500 hover:bg-rescue-500 hover:text-white"
                      href={item.href}
                      key={item.href}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="bg-navy-50 py-20 sm:py-24">
        <div className="section-shell">
          <SectionHeading
            eyebrow="Service Flow"
            text="A consistent restoration process helps visitors understand what happens after they call."
            title="From emergency call to completed cleanup"
          />
          <div className="mt-12">
            <ProcessSteps />
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="section-shell">
          <SectionHeading
            eyebrow="Estimate Funnel"
            text="Help visitors qualify urgency and service type before they submit the form."
            title="Guide the right customers to the right next step"
          />
          <Reveal direction="right">
            <div className="glass-card mt-12 rounded-[2.5rem] p-6">
              <QuoteEstimator />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-navy-50 py-20 sm:py-24">
        <div className="section-shell">
          <SectionHeading
            eyebrow="Book Online"
            text="Customers can request service through the website without waiting for a callback first."
            title="How online booking works"
          />
          <Reveal direction="left">
            <div className="mt-12">
              <BookingPathPanel />
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}
