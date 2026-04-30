import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ButtonLink } from "@/components/Button";
import { CTASection } from "@/components/CTASection";
import { FAQ } from "@/components/FAQ";
import { PageHero } from "@/components/PageHero";
import { ProcessSteps } from "@/components/ProcessSteps";
import { SectionHeading } from "@/components/SectionHeading";
import { Stagger, StaggerItem } from "@/components/Motion";
import { allServicePages, company, serviceNavGroups } from "@/lib/site";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const waterGroup = serviceNavGroups.find((group) => group.label === "Water")!;
const waterSlugs = waterGroup.items
  .map((item) => item.href.split("/").filter(Boolean).at(-1))
  .filter((slug): slug is string => Boolean(slug));

function getWaterService(slug: string) {
  if (!waterSlugs.includes(slug)) {
    return null;
  }

  return allServicePages.find((service) => service.slug === slug) ?? null;
}

export function generateStaticParams() {
  return waterSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getWaterService(slug);

  if (!service) {
    return {};
  }

  return {
    title: service.metaTitle,
    description: service.metaDescription
  };
}

export default async function WaterServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = getWaterService(slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <PageHero
        eyebrow="Water Services"
        image={service.heroImage}
        text={service.description}
        title={service.title}
      />

      <section className="bg-white py-20 sm:py-24">
        <div className="section-shell grid gap-12 lg:grid-cols-[1fr_0.95fr] lg:items-center">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.22em] text-rescue-600">
              Dedicated Water Page
            </p>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-navy-950 sm:text-5xl">
              {service.shortTitle} support with photos, inspection, and booking
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              {service.problem}
            </p>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              {service.urgency}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/book-service">Book This Water Service</ButtonLink>
              <ButtonLink href={company.phoneHref} variant="ghost">
                Call {company.phone}
              </ButtonLink>
            </div>
          </div>

          <div className="relative h-[22rem] overflow-hidden rounded-[2rem] shadow-premium sm:h-[32rem] sm:rounded-[2.5rem]">
            <Image
              alt={`${service.title} water restoration example`}
              className="object-cover"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              src={service.image}
            />
          </div>
        </div>
      </section>

      <section className="bg-navy-50 py-20 sm:py-24">
        <div className="section-shell">
          <SectionHeading
            eyebrow="Water Service Details"
            text="This page gives visitors a dedicated destination for the exact water service they selected from the dropdown."
            title={`What ${service.shortTitle.toLowerCase()} includes`}
          />
          <Stagger className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              "Damage intake and urgency review",
              "Affected room and material notes",
              "Moisture, cleanup, and drying planning",
              "Photo upload through the booking flow",
              "Clear service recommendation",
              "Restoration and repair coordination"
            ].map((item, index) => (
              <StaggerItem direction={index % 3 === 0 ? "left" : index % 3 === 1 ? "up" : "right"} key={item}>
                <div className="group h-full rounded-[2rem] border border-navy-100 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-3 hover:scale-[1.04] hover:border-rescue-500 hover:bg-rescue-500 hover:shadow-[0_28px_80px_rgba(232,31,55,0.25)]">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-navy-950 text-rescue-400 transition group-hover:bg-white group-hover:text-rescue-600">
                    {index + 1}
                  </span>
                  <h3 className="mt-5 text-xl font-black text-navy-950 transition group-hover:text-white">
                    {item}
                  </h3>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="section-shell">
          <SectionHeading
            eyebrow="Process"
            text="A clear water-damage process helps homeowners, property managers, and businesses know what happens next."
            title={`${service.shortTitle} process`}
          />
          <div className="mt-12">
            <ProcessSteps steps={service.process} />
          </div>
        </div>
      </section>

      <section className="bg-navy-950 py-20 text-white sm:py-24">
        <div className="section-shell">
          <SectionHeading
            eyebrow="More Water Pages"
            text="Each Water dropdown item now has its own Water-specific URL."
            title="Browse every Water service page"
          />
          <div className="mt-12 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {waterGroup.items.map((item) => (
              <Link
                className={`rounded-2xl border px-5 py-4 text-sm font-black transition hover:-translate-y-1 hover:border-rescue-500 hover:bg-rescue-500 hover:text-white ${
                  item.href.endsWith(`/${service.slug}`)
                    ? "border-rescue-500 bg-rescue-500 text-white"
                    : "border-white/10 bg-white/8 text-white"
                }`}
                href={item.href}
                key={item.href}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FAQ items={service.faqs} />
      <CTASection
        title={`Need ${service.shortTitle.toLowerCase()}?`}
        text="Use the booking page to choose urgency, property type, schedule details, and upload damage photos."
      />
    </>
  );
}
