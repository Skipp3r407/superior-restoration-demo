import Image from "next/image";
import { ButtonLink } from "@/components/Button";
import { CTASection } from "@/components/CTASection";
import { PageHero } from "@/components/PageHero";
import { ProcessSteps } from "@/components/ProcessSteps";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";
import { ServiceVideoSection } from "@/components/ServiceVideoSection";
import { Stagger, StaggerItem } from "@/components/Motion";
import { allServicePages, company, serviceSectionPages } from "@/lib/site";

type ServiceSection = (typeof serviceSectionPages)[number];

export function ServiceSectionPage({ section }: { section: ServiceSection }) {
  const sectionServices = section.serviceHrefs
    .map((href) => {
      const slug = href.split("/").filter(Boolean).at(-1);
      const service = allServicePages.find((item) => item.slug === slug);

      return service ? { href, service } : null;
    })
    .filter(
      (item): item is { href: string; service: (typeof allServicePages)[number] } =>
        Boolean(item)
    );

  return (
    <>
      <PageHero
        eyebrow={section.eyebrow}
        image={section.image}
        text={section.description}
        title={section.title}
      />

      <section className="bg-white py-20 sm:py-24">
        <div className="section-shell grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.22em] text-rescue-600">
              Section Overview
            </p>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-navy-950 sm:text-5xl">
              Detailed guidance for {section.label.toLowerCase()} restoration needs
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              {section.overview}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/book-service">Request This Service</ButtonLink>
              <ButtonLink href={company.phoneHref} variant="ghost">
                Emergency? Call {company.phone}
              </ButtonLink>
            </div>
          </div>

          <div className="relative h-[22rem] overflow-hidden rounded-[2rem] shadow-premium sm:h-[32rem] sm:rounded-[2.5rem]">
            <Image
              alt={`${section.label} restoration service visual`}
              className="object-cover"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              src={section.image}
            />
          </div>
        </div>
      </section>

      <section className="bg-navy-50 py-20 sm:py-24">
        <div className="section-shell">
          <SectionHeading
            eyebrow={`${section.label} Highlights`}
            text="Clear service details help visitors understand the issue and choose the right next step."
            title="What this section covers"
          />
          <Stagger className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {section.highlights.map((highlight, index) => (
              <StaggerItem key={highlight}>
                <div className="group h-full rounded-[2rem] border border-navy-100 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-3 hover:scale-[1.04] hover:border-rescue-500 hover:bg-rescue-500 hover:shadow-[0_28px_80px_rgba(232,31,55,0.25)]">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-navy-950 text-rescue-400 transition group-hover:bg-white group-hover:text-rescue-600">
                    {index + 1}
                  </span>
                  <h3 className="mt-5 text-xl font-black text-navy-950 transition group-hover:text-white">
                    {highlight}
                  </h3>
                  <p className="mt-3 leading-7 text-slate-600 transition group-hover:text-white/86">
                    This page connects the customer to the right service, intake
                    path, photos, inspection request, and emergency call option.
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="section-shell">
          <SectionHeading
            eyebrow={`${section.label} Pages`}
            text="Every card links to a detailed page with matching imagery, FAQs, process steps, and booking calls to action."
            title={`Choose a ${section.label.toLowerCase()} service page`}
          />
          <Stagger className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {sectionServices.map(({ href, service }) => (
              <ServiceCard href={href} key={service.slug} service={service} />
            ))}
          </Stagger>
        </div>
      </section>

      <section className="bg-navy-50 py-20 sm:py-24">
        <div className="section-shell">
          <SectionHeading
            eyebrow="Visual Examples"
            text="Royalty-free visuals matched to the section. These are presentation examples, not claimed client projects."
            title={`${section.label} service imagery`}
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {section.gallery.map((image, index) => (
              <div
                className="relative h-72 overflow-hidden rounded-[2rem] shadow-premium"
                key={`${image}-${index}`}
              >
                <Image
                  alt={`${section.label} restoration example ${index + 1}`}
                  className="object-cover transition duration-700 hover:scale-105"
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  src={image}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5">
                  <p className="text-sm font-black uppercase tracking-[0.2em] text-rescue-400">
                    Royalty-Free Example
                  </p>
                  <p className="mt-2 text-xl font-black text-white">
                    {section.label} visual {index + 1}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="section-shell">
          <SectionHeading
            eyebrow="Process"
            text="A simple process gives visitors confidence before they call or request help."
            title={`How ${section.label.toLowerCase()} requests are handled`}
          />
          <div className="mt-12">
            <ProcessSteps
              steps={[
                "Request help or call directly",
                "Share property details and damage photos",
                "Review urgency, scope, and next steps",
                "Coordinate cleanup, restoration, and follow-up"
              ]}
            />
          </div>
        </div>
      </section>

      <ServiceVideoSection />
      <CTASection
        title={`Need ${section.label.toLowerCase()} service help?`}
        text="Request service online, upload damage photos, or call directly for urgent restoration support."
      />
    </>
  );
}
