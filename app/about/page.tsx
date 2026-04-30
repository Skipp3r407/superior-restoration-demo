import type { Metadata } from "next";
import Image from "next/image";
import { CTASection } from "@/components/CTASection";
import { Icon } from "@/components/Icons";
import { PageHero } from "@/components/PageHero";
import { Reveal, Stagger, StaggerItem } from "@/components/Motion";
import { ServiceArea } from "@/components/ServiceArea";
import { SectionHeading } from "@/components/SectionHeading";
import { TestimonialSection } from "@/components/TestimonialSection";
import { TrustBadges } from "@/components/TrustBadges";
import { images, whyChooseUs } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Superior Restoration Services | Central Florida",
  description:
    "Learn about Superior Restoration Services, a Central Florida restoration company focused on emergency response, mold remediation, water removal, fire cleanup, and storm damage repair."
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        image={images.inspection}
        text="Superior Restoration Services helps Central Florida homeowners and businesses recover from water, fire, mold, smoke, and storm damage with responsive support."
        title="Restoring what matters, anytime, anywhere"
      />

      <section className="bg-white py-20 sm:py-24">
        <div className="section-shell grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <div className="relative h-[22rem] overflow-hidden rounded-[2rem] shadow-premium sm:h-[30rem] sm:rounded-[2.5rem]">
              <Image
                alt="Contractor reviewing property restoration work"
                className="object-cover"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                src={images.repairs}
              />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-sm font-extrabold uppercase tracking-[0.22em] text-rescue-600">
              Built for Trust
            </p>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-navy-950 sm:text-5xl">
              A modern restoration site should lower panic and make action easy.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Superior Restoration Services handles urgent property damage with
              care, precision, modern restoration practices, and clear
              communication from the first call through final walkthrough.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="group rounded-3xl bg-navy-50 p-5 transition duration-300 hover:-translate-y-2 hover:scale-[1.04] hover:bg-rescue-500 hover:shadow-[0_24px_70px_rgba(232,31,55,0.22)]">
                <p className="text-4xl font-black text-rescue-500 transition group-hover:text-white">24/7</p>
                <p className="font-bold text-navy-950 transition group-hover:text-white/86">Emergency positioning</p>
              </div>
              <div className="group rounded-3xl bg-navy-50 p-5 transition duration-300 hover:-translate-y-2 hover:scale-[1.04] hover:bg-rescue-500 hover:shadow-[0_24px_70px_rgba(232,31,55,0.22)]">
                <p className="text-4xl font-black text-rescue-500 transition group-hover:text-white">4</p>
                <p className="font-bold text-navy-950 transition group-hover:text-white/86">Primary restoration services</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-navy-50 py-20 sm:py-24">
        <div className="section-shell">
          <SectionHeading
            eyebrow="Operating Principles"
            text="The site is structured around the qualities restoration customers look for during urgent property damage situations."
            title="Professional signals throughout the experience"
          />
          <Stagger className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {whyChooseUs.map((item, index) => (
              <StaggerItem key={item}>
                <div className="group glass-card h-full rounded-[2rem] p-6 transition duration-300 hover:-translate-y-2 hover:scale-[1.04] hover:bg-rescue-500">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-navy-950 text-rescue-400 transition group-hover:bg-white group-hover:text-rescue-600">
                    <Icon
                      name={index % 2 === 0 ? "shield" : "clock"}
                      className="h-5 w-5"
                    />
                  </span>
                  <h3 className="mt-5 text-xl font-black text-navy-950 transition group-hover:text-white">
                    {item}
                  </h3>
                  <p className="mt-3 leading-7 text-slate-600 transition group-hover:text-white/86">
                    Messaging and layout reinforce speed, readiness, and
                    confidence without copying any competitor design.
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="section-shell">
          <SectionHeading eyebrow="Trust Badges" title="Lead-ready credibility cues" />
          <div className="mt-10">
            <TrustBadges />
          </div>
        </div>
      </section>

      <ServiceArea />
      <TestimonialSection />

      <CTASection />
    </>
  );
}
