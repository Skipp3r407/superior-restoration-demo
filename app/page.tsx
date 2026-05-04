import type { Metadata } from "next";
import Image from "next/image";
import { AnimatedStats } from "@/components/AnimatedStats";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";
import { BookingPathPanel } from "@/components/BookingPathPanel";
import { ButtonLink } from "@/components/Button";
import { CTASection, EmergencyBar } from "@/components/CTASection";
import { FAQ } from "@/components/FAQ";
import { GalleryGrid } from "@/components/GalleryGrid";
import { Icon } from "@/components/Icons";
import { Reveal, Stagger, StaggerItem } from "@/components/Motion";
import { ProcessSteps } from "@/components/ProcessSteps";
import { QuoteEstimator } from "@/components/QuoteEstimator";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceArea } from "@/components/ServiceArea";
import { ServiceCard } from "@/components/ServiceCard";
import { ServiceVideoSection } from "@/components/ServiceVideoSection";
import { TestimonialSection } from "@/components/TestimonialSection";
import { TrustBadges } from "@/components/TrustBadges";
import {
  company,
  credentialBadges,
  globalFaqs,
  images,
  services,
  whyChooseUs
} from "@/lib/site";

export const metadata: Metadata = {
  title: "Central Florida Restoration Services | Water, Fire, Mold and Storm",
  description:
    "Superior Restoration Services provides Central Florida water damage restoration, fire damage cleanup, mold remediation, storm damage repair, emergency cleanup, and commercial restoration."
};

export default function Home() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-navy-950 text-white">
        <Image
          alt="Emergency restoration crew preparing equipment"
          className="object-cover opacity-55"
          fill
          priority
          sizes="100vw"
          src={images.hero}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(232,31,55,0.34),transparent_30%),radial-gradient(circle_at_80%_30%,rgba(14,76,149,0.28),transparent_28%),linear-gradient(115deg,rgba(3,26,54,0.98),rgba(6,44,90,0.86)_48%,rgba(10,59,120,0.62))]" />
        <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:56px_56px]" />
        {[...Array(8)].map((_, index) => (
          <span
            className="absolute hidden h-1.5 w-1.5 animate-pulse rounded-full bg-rescue-400/80 lg:block"
            key={index}
            style={{ left: `${12 + index * 10}%`, top: `${22 + (index % 4) * 14}%` }}
          />
        ))}
        <div className="section-shell relative z-10 grid min-h-[calc(100vh-5rem)] items-center gap-12 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:py-28">
          <Reveal direction="left">
            <p className="mb-5 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-extrabold uppercase tracking-[0.22em] text-rescue-400 backdrop-blur">
              24/7 emergency restoration response
            </p>
            <h1 className="max-w-4xl text-3xl font-black leading-[1.06] tracking-tight sm:text-5xl sm:leading-[1.02] lg:text-7xl">
              Fast, Reliable Restoration Services When Every Minute Matters
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/76 sm:text-xl">
              Water damage, fire cleanup, mold remediation, and storm
              restoration services designed to help homeowners and businesses
              recover quickly.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/book-service">Book Service</ButtonLink>
              <ButtonLink href={company.phoneHref} variant="secondary">
                Call Now
              </ButtonLink>
            </div>
            <div className="mt-8 grid max-w-2xl gap-3 sm:grid-cols-3">
              {["Fast Response", "Free Estimates", "Residential + Commercial"].map((item) => (
                <div className="rounded-2xl border border-white/15 bg-white/10 p-4 text-sm font-bold text-white/82 backdrop-blur" key={item}>
                  {item}
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.15} direction="right" className="relative hidden lg:block">
            <div className="absolute -right-4 -top-6 z-10 rounded-3xl bg-rescue-500 px-5 py-4 text-white shadow-glow">
              <p className="text-sm font-black uppercase tracking-[0.18em]">Online</p>
              <p className="text-2xl font-black">Booking Ready</p>
            </div>
            <BookingPathPanel />
          </Reveal>
        </div>
      </section>

      <EmergencyBar />

      <section className="bg-white py-14 sm:py-16">
        <div className="section-shell">
          <AnimatedStats />
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24" id="services">
        <div className="section-shell">
          <SectionHeading
            eyebrow="Services Mega Section"
            text="Six conversion-focused restoration service cards with royalty-free imagery, Lucide icons, hover lift, and clear next steps."
            title="Restoration services built for urgent recovery"
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
        <div className="section-shell grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <Reveal direction="left">
            <p className="text-sm font-extrabold uppercase tracking-[0.22em] text-rescue-600">
              Smart Intake
            </p>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-navy-950 sm:text-5xl">
              Interactive quote estimator for higher-quality estimate requests
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              The estimator guides visitors through property type, damage
              severity, timeline, and contact preference without promising exact
              pricing.
            </p>
          </Reveal>
          <div className="glass-card rounded-[2.5rem] p-6">
            <QuoteEstimator />
          </div>
        </div>
      </section>

      <section className="h-8 overflow-hidden bg-rescue-500 text-white">
        <div className="marquee-track flex h-8 w-max items-center">
          {[...Array(2)].map((_, groupIndex) => (
            <div
              aria-hidden={groupIndex === 1}
              className="flex h-8 shrink-0 items-center"
              key={groupIndex}
            >
              {[...Array(8)].map((_, index) => (
                <span
                  className="mx-6 block whitespace-nowrap text-xs font-black uppercase leading-8 tracking-[0.16em] sm:text-sm"
                  key={`${groupIndex}-${index}`}
                >
                  License - {company.licenses}
                  <span className="mx-6">Call Us Today</span>
                  {company.phone}
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="section-shell">
          <SectionHeading
            eyebrow="Certified & Trusted"
            text="Professional memberships, certifications, and local credibility markers from Superior Restoration Services."
            title="Restoration credentials you can verify"
          />
          <Reveal>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {credentialBadges.map((badge) => (
                <div
                  className="flex min-h-28 items-center justify-center rounded-2xl border border-navy-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-rescue-500 hover:shadow-premium"
                  key={badge.title}
                >
                  <Image
                    alt={badge.title}
                    className="max-h-20 w-auto object-contain"
                    height={badge.height}
                    sizes="(min-width: 1024px) 22vw, (min-width: 640px) 44vw, 88vw"
                    src={badge.src}
                    width={badge.width}
                  />
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="overflow-hidden bg-white py-20 sm:py-24">
        <div className="section-shell grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <Reveal direction="left">
            <p className="text-sm font-extrabold uppercase tracking-[0.22em] text-rescue-600">
              Why Choose Us
            </p>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-navy-950 sm:text-5xl">
              Calm, professional guidance from first call to final walkthrough.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              The experience emphasizes trust, speed, documentation, and strong
              service clarity for stressful restoration decisions.
            </p>
          </Reveal>
          <Stagger className="grid gap-4 sm:grid-cols-2">
            {whyChooseUs.map((item, index) => (
              <StaggerItem direction={index % 2 === 0 ? "left" : "right"} key={item}>
                <div className="group glass-card flex h-full items-start gap-4 rounded-3xl p-5 transition duration-300 hover:-translate-y-2 hover:scale-[1.03] hover:bg-rescue-500">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-rescue-500 text-white transition group-hover:bg-white group-hover:text-rescue-600">
                    <Icon name={index % 2 === 0 ? "clock" : "shield"} />
                  </span>
                  <div>
                    <h3 className="font-black text-navy-950 transition group-hover:text-white">{item}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600 transition group-hover:text-white/86">
                      Strong credibility cues designed to help emergency
                      visitors take action quickly.
                    </p>
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
            eyebrow="Process Timeline"
            text="A simple restoration roadmap reduces uncertainty and keeps the visitor moving toward contact."
            title="From emergency call to completed cleanup"
          />
          <div className="mt-12">
            <ProcessSteps />
          </div>
        </div>
      </section>

      <section className="bg-navy-50 py-20 sm:py-24">
        <div className="section-shell">
          <BeforeAfterSlider />
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="section-shell">
          <SectionHeading
            eyebrow="Restoration Service Examples"
            text="Royalty-free visuals only. These examples communicate service types without claiming real completed projects."
            title="Before-and-after style showcase"
          />
          <div className="mt-12">
            <GalleryGrid limit={6} filterable />
          </div>
        </div>
      </section>

      <section className="bg-navy-50 py-20 sm:py-24">
        <div className="section-shell">
          <SectionHeading eyebrow="Trust & Credibility" title="Conversion signals for emergency visitors" />
          <div className="mt-10">
            <TrustBadges />
          </div>
        </div>
      </section>

      <ServiceArea />
      <TestimonialSection />

      <section className="bg-white py-20 sm:py-24">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeading
            align="left"
            eyebrow="FAQ"
            text="Common restoration questions answered with practical guidance for Central Florida homeowners and businesses."
            title="Restoration questions customers ask before calling"
          />
          <FAQ items={globalFaqs} />
        </div>
      </section>

      <CTASection />
    </>
  );
}
