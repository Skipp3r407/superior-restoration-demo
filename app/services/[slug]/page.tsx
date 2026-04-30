import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ButtonLink } from "@/components/Button";
import { CTASection } from "@/components/CTASection";
import { FAQ } from "@/components/FAQ";
import { Icon } from "@/components/Icons";
import { PageHero } from "@/components/PageHero";
import { ProcessSteps } from "@/components/ProcessSteps";
import { Reveal, Stagger, StaggerItem } from "@/components/Motion";
import { SectionHeading } from "@/components/SectionHeading";
import { allServicePages, company, images, type Service } from "@/lib/site";

type PageProps = {
  params: {
    slug: string;
  };
};

const serviceDetails = {
  "water-damage": {
    overview:
      "Water damage can begin with a burst pipe, roof leak, appliance overflow, bathroom flood, storm intrusion, or hidden plumbing issue. The priority is to stop the source when safe, remove standing water, identify trapped moisture, and start drying before damage spreads into flooring, drywall, cabinets, insulation, and framing.",
    warningSigns: [
      "Standing water, damp flooring, or wet baseboards",
      "Musty odors after a leak or flood",
      "Bubbling paint, staining, swelling, or soft drywall",
      "Cupping wood floors or loose vinyl/laminate",
      "Humidity that does not improve after cleanup",
      "Visible moisture around appliances, bathrooms, or plumbing walls"
    ],
    included: [
      "Emergency water damage intake and priority scheduling",
      "Moisture inspection for visible and hidden affected areas",
      "Water extraction planning and drying recommendations",
      "Dehumidification and air movement strategy",
      "Documentation support for affected rooms and materials",
      "Cleanup and repair planning after drying goals are met"
    ],
    scenarios: [
      "Burst pipe cleanup",
      "Bathroom flooding cleanup",
      "Appliance leak cleanup",
      "Storm-related water intrusion",
      "Commercial water damage",
      "Pack-out and property restoration coordination"
    ],
    detailImage: images.equipment
  },
  "fire-damage": {
    overview:
      "Fire damage restoration requires more than removing burned materials. Smoke, soot, odor, water from firefighting efforts, and airborne residue can affect rooms far beyond the fire source. A careful cleanup plan helps stabilize the property, protect salvageable materials, and prepare for safe repairs.",
    warningSigns: [
      "Soot residue on ceilings, walls, vents, or contents",
      "Persistent smoke odor after ventilation",
      "Discolored surfaces or oily residue",
      "Water damage from fire suppression",
      "Charred materials, debris, or unsafe structural areas",
      "HVAC odors or smoke spread into adjoining rooms"
    ],
    included: [
      "Fire damage assessment and safety-focused intake",
      "Smoke and soot cleanup planning",
      "Odor control recommendations",
      "Debris removal and affected material review",
      "Repair scope planning and restoration coordination",
      "Documentation for visible damage and next steps"
    ],
    scenarios: [
      "Kitchen fire cleanup",
      "Smoke cleaning",
      "Soot cleanup",
      "Post-fire water damage",
      "Pack-out services",
      "Hotel and commercial fire restoration"
    ],
    detailImage: images.repairs
  },
  "mold-remediation": {
    overview:
      "Mold remediation starts by understanding moisture. Visible mold, musty odors, humidity issues, roof leaks, plumbing leaks, and previous water damage can all point to conditions that allow growth. The goal is to contain affected areas, remove or clean impacted materials, and help prevent the issue from returning.",
    warningSigns: [
      "Visible mold growth on walls, ceilings, cabinets, or vents",
      "Musty odors that return after cleaning",
      "Past leaks, floods, or humidity problems",
      "Condensation around windows or HVAC areas",
      "Staining around ceilings, baseboards, or closets",
      "Recurring respiratory irritation inside specific rooms"
    ],
    included: [
      "Mold remediation intake and affected-area review",
      "Moisture source discussion and prevention guidance",
      "Containment and air filtration planning",
      "Removal or cleaning recommendations for affected materials",
      "Post-cleanup prevention recommendations",
      "Coordination for property restoration after remediation"
    ],
    scenarios: [
      "Residential mold remediation",
      "Commercial mold remediation",
      "Mold cleaning after water damage",
      "Mold services for property managers",
      "Hotel mold response",
      "Boat and vehicle mold cleaning inquiries"
    ],
    detailImage: images.inspection
  },
  "storm-damage": {
    overview:
      "Storm damage can involve roof leaks, wind-driven rain, fallen debris, flooding, broken openings, and interior water damage. A fast response helps prevent additional intrusion, reduce safety risks, and create a clear plan for cleanup, drying, repairs, and documentation.",
    warningSigns: [
      "Roof leaks or ceiling stains after heavy rain",
      "Water intrusion around windows, doors, or exterior walls",
      "Fallen limbs, debris, or damaged exterior areas",
      "Wet insulation, drywall, or flooring",
      "Drafts or openings after wind damage",
      "Interior odors or humidity after a storm"
    ],
    included: [
      "Storm damage intake and priority review",
      "Temporary protection recommendations",
      "Water intrusion cleanup planning",
      "Debris and affected material review",
      "Drying and restoration coordination",
      "Documentation for affected areas and repair planning"
    ],
    scenarios: [
      "Wind-driven rain cleanup",
      "Storm water intrusion",
      "Roof leak response",
      "Emergency stabilization",
      "Property restoration after severe weather",
      "Commercial storm damage"
    ],
    detailImage: images.repairs
  },
  "emergency-cleanup": {
    overview:
      "Emergency cleanup is for situations that need fast attention, clear communication, and a practical path forward. The issue may involve water, debris, odors, contamination concerns, damaged materials, storm impact, fire residue, or an unsafe affected area that needs stabilization.",
    warningSigns: [
      "Unsafe debris or damaged materials",
      "Active leaks or water intrusion",
      "Odors, residue, or contamination concerns",
      "Areas that cannot be safely occupied",
      "Damage affecting access, operations, or tenants",
      "Unclear next steps after a sudden property event"
    ],
    included: [
      "Emergency intake through call or booking request",
      "Urgency review and affected-area details",
      "Photo upload option for faster context",
      "Cleanup priority recommendations",
      "Stabilization and restoration planning",
      "Clear next steps for inspection or follow-up"
    ],
    scenarios: [
      "Urgent property cleanup",
      "Water or odor concerns",
      "Storm debris cleanup",
      "Post-incident stabilization",
      "Commercial cleanup needs",
      "Residential emergency cleanup"
    ],
    detailImage: images.emergencyCrew
  },
  "commercial-restoration": {
    overview:
      "Commercial restoration requires coordination, documentation, and minimal disruption. Offices, retail spaces, hotels, multifamily properties, and managed facilities need a clear plan that helps protect occupants, operations, equipment, materials, and revenue while the property is restored.",
    warningSigns: [
      "Water, mold, fire, or storm damage affecting operations",
      "Tenant, guest, or employee safety concerns",
      "Recurring leaks or humidity issues",
      "Damage across multiple rooms, units, or departments",
      "Business interruption after property damage",
      "Need for documentation and stakeholder updates"
    ],
    included: [
      "Commercial intake and property details",
      "Priority review based on operations and safety",
      "Water, fire, mold, storm, or cleanup scope planning",
      "Photo upload and documentation support",
      "Communication for managers and decision-makers",
      "Restoration planning for reopening or continued operations"
    ],
    scenarios: [
      "Office restoration",
      "Retail property cleanup",
      "Hotel restoration support",
      "Property manager response",
      "Commercial water damage",
      "Commercial mold or fire cleanup"
    ],
    detailImage: images.commercial
  }
} as const;

function buildFallbackDetails(service: Service) {
  const lowerTitle = service.title.toLowerCase();
  const category = service.category.toLowerCase();
  const isMold = category.includes("mold");
  const isFire = category.includes("fire") || category.includes("smoke");
  const isWater = category.includes("water");
  const isCommercial =
    category.includes("commercial") ||
    lowerTitle.includes("hotel") ||
    lowerTitle.includes("property manager");

  if (isMold) {
    return {
      overview: `${service.title} focuses on identifying affected areas, understanding moisture conditions, planning containment, and guiding cleanup so the issue does not keep returning.`,
      warningSigns: [
        "Visible mold, staining, or dark spotting",
        "Musty odors in specific rooms or enclosed spaces",
        "Past leaks, humidity, or water intrusion",
        "Peeling paint, damaged drywall, or damp materials",
        "Recurring moisture around HVAC, closets, or cabinets",
        "Concern about indoor air quality or affected contents"
      ],
      included: [
        "Mold concern intake and photo review",
        "Moisture source discussion",
        "Containment and filtration planning",
        "Affected material cleanup recommendations",
        "Prevention guidance for recurring moisture",
        "Restoration planning after remediation"
      ],
      scenarios: [
        "Residential mold concerns",
        "Commercial mold concerns",
        "Moisture-related odors",
        "Cabinet, wall, or ceiling mold",
        "Boat or vehicle interior mold",
        "Property manager mold requests"
      ],
      detailImage: service.image
    };
  }

  if (isFire) {
    return {
      overview: `${service.title} supports cleanup planning after fire or smoke events, including soot residue, odor concerns, affected contents, debris, and repair coordination.`,
      warningSigns: [
        "Smoke odor that remains after airing out the space",
        "Soot residue on walls, ceilings, contents, or vents",
        "Charred or heat-damaged materials",
        "Water damage from fire suppression",
        "Discoloration around the affected area",
        "HVAC or adjoining-room smoke spread"
      ],
      included: [
        "Fire or smoke damage intake",
        "Safety and affected-area review",
        "Soot and residue cleanup planning",
        "Odor-control recommendations",
        "Contents and pack-out coordination",
        "Repair scope and restoration planning"
      ],
      scenarios: [
        "Fire damage cleanup",
        "Smoke cleaning",
        "Soot residue cleanup",
        "Pack-out after fire",
        "Hotel or commercial fire response",
        "Property restoration after cleanup"
      ],
      detailImage: service.image
    };
  }

  if (isWater) {
    return {
      overview: `${service.title} helps property owners organize water cleanup, moisture review, drying recommendations, documentation, and repair planning after leaks, floods, or water intrusion.`,
      warningSigns: [
        "Standing water, wet floors, or damp baseboards",
        "Bubbling paint, stains, or soft drywall",
        "Musty odors after a leak",
        "Moisture around appliances, bathrooms, or plumbing",
        "Cupping floors or swelling cabinets",
        "Humidity that does not improve after cleanup"
      ],
      included: [
        "Water damage intake and urgency review",
        "Moisture and affected-area inspection planning",
        "Extraction or cleanup recommendations",
        "Drying and dehumidification planning",
        "Damage photo and documentation support",
        "Repair planning after drying"
      ],
      scenarios: [
        "Burst pipe cleanup",
        "Bathroom flooding cleanup",
        "Appliance leak cleanup",
        "Commercial water damage",
        "Storm-related water intrusion",
        "Property restoration coordination"
      ],
      detailImage: service.image
    };
  }

  if (isCommercial) {
    return {
      overview: `${service.title} is built for properties where downtime, occupant safety, communication, and documentation matter just as much as the cleanup itself.`,
      warningSigns: [
        "Damage affecting guests, tenants, or employees",
        "Water, mold, fire, smoke, or storm issues",
        "Multiple rooms, units, or departments affected",
        "Business interruption or room downtime",
        "Need for stakeholder updates",
        "Photo documentation or insurance coordination needs"
      ],
      included: [
        "Commercial intake and priority review",
        "Affected-area and operations impact discussion",
        "Cleanup or remediation scope planning",
        "Photo-supported documentation",
        "Manager, owner, or tenant communication support",
        "Reopening or repair coordination"
      ],
      scenarios: [
        "Hotels and hospitality",
        "Property manager requests",
        "Offices and retail spaces",
        "Multifamily properties",
        "Commercial water or mold concerns",
        "Storm or fire restoration planning"
      ],
      detailImage: service.image
    };
  }

  return {
    overview: `${service.title} gives property owners a focused intake path for documenting damage, explaining urgency, uploading photos, and requesting the right next step.`,
    warningSigns: [
      "Damage that may continue to spread",
      "Odors, moisture, debris, or safety concerns",
      "Affected contents or blocked work areas",
      "Need for cleanup before repairs",
      "Unclear next steps after property damage",
      "Commercial, hotel, or managed-property coordination needs"
    ],
    included: [
      "Service request intake",
      "Damage photo review",
      "Priority and safety discussion",
      "Cleanup or pack-out planning",
      "Repair coordination guidance",
      "Clear next steps for follow-up"
    ],
    scenarios: [
      "Contents pack-out",
      "Property restoration",
      "Emergency cleanup",
      "Commercial support",
      "Hotels and managed properties",
      "Photo-supported service requests"
    ],
    detailImage: service.image
  };
}

export function generateStaticParams() {
  return allServicePages.map((service) => ({ slug: service.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const service = allServicePages.find((item) => item.slug === params.slug);

  if (!service) {
    return {};
  }

  return {
    title: service.metaTitle,
    description: service.metaDescription
  };
}

export default function ServiceDetailPage({ params }: PageProps) {
  const service = allServicePages.find((item) => item.slug === params.slug);

  if (!service) {
    notFound();
  }

  const details =
    serviceDetails[service.slug as keyof typeof serviceDetails] ??
    buildFallbackDetails(service);

  return (
    <>
      <PageHero
        eyebrow={service.shortTitle}
        image={service.heroImage}
        text={service.description}
        title={service.title}
      />

      <section className="bg-white py-20 sm:py-24">
        <div className="section-shell grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <Reveal>
            <p className="text-sm font-extrabold uppercase tracking-[0.22em] text-rescue-600">
              The Problem
            </p>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-navy-950 sm:text-5xl">
              Fast, professional service helps protect the property.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              {service.problem}
            </p>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              {details.overview}
            </p>
            <div className="mt-6 rounded-3xl bg-navy-50 p-6">
              <div className="flex items-start gap-4">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-rescue-500 text-white">
                  <Icon name="clock" />
                </span>
                <div>
                  <h3 className="font-black text-navy-950">
                    Why fast service matters
                  </h3>
                  <p className="mt-2 leading-7 text-slate-600">
                    {service.urgency}
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="relative h-[22rem] overflow-hidden rounded-[2rem] shadow-premium sm:h-[31rem] sm:rounded-[2.5rem]">
              <Image
                alt={`${service.title} related restoration visual`}
                className="object-cover transition duration-700 hover:scale-105"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                src={service.image}
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-navy-50 py-20 sm:py-24">
        <div className="section-shell">
          <SectionHeading
            eyebrow="Warning Signs"
            text="Property damage can spread quietly. These signs are reasons to request help, upload photos, or call for emergency support."
            title={`When to request ${service.shortTitle.toLowerCase()} help`}
          />
          <Stagger className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {details.warningSigns.map((item) => (
              <StaggerItem key={item}>
                <div className="group glass-card flex h-full gap-4 rounded-3xl p-5 transition duration-300 hover:-translate-y-2 hover:scale-[1.03] hover:bg-rescue-500">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-rescue-500 text-white transition group-hover:bg-white group-hover:text-rescue-600">
                    <Icon name="check" className="h-5 w-5" />
                  </span>
                  <p className="font-bold leading-7 text-navy-950 transition group-hover:text-white">{item}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="section-shell">
          <SectionHeading
            eyebrow="Step-by-Step Process"
            text="A focused sequence gives customers confidence during high-stress damage cleanup and makes the request process clear."
            title={`How ${service.shortTitle.toLowerCase()} restoration works`}
          />
          <div className="mt-12">
            <ProcessSteps steps={service.process} />
          </div>
        </div>
      </section>

      <section className="bg-navy-50 py-20 sm:py-24">
        <div className="section-shell">
          <SectionHeading
            eyebrow="What Is Included"
            text="Each request is organized around practical restoration needs: assessment, documentation, cleanup planning, and clear communication."
            title={`What ${service.shortTitle.toLowerCase()} service can include`}
          />
          <Stagger className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {details.included.map((item, index) => (
              <StaggerItem key={item}>
                <div className="group h-full rounded-[2rem] border border-navy-100 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-3 hover:scale-[1.04] hover:border-rescue-500 hover:bg-rescue-500 hover:shadow-[0_28px_80px_rgba(232,31,55,0.25)]">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-navy-950 text-rescue-400 transition group-hover:bg-white group-hover:text-rescue-600">
                    {index + 1}
                  </span>
                  <h3 className="mt-5 text-xl font-black text-navy-950 transition group-hover:text-white">
                    {item}
                  </h3>
                  <p className="mt-3 leading-7 text-slate-600 transition group-hover:text-white/86">
                    This helps the team understand the damage, prioritize the
                    request, and prepare the right inspection or follow-up plan.
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="section-shell grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <Reveal>
            <p className="text-sm font-extrabold uppercase tracking-[0.22em] text-rescue-600">
              Common Situations
            </p>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-navy-950 sm:text-5xl">
              Requests this page is built to support
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Customers can use the booking flow to explain the issue, select
              urgency, upload damage photos, and request a free inspection
              window. Emergency situations should still call directly at{" "}
              <a
                className="font-black text-rescue-600 underline-offset-4 hover:underline"
                href={company.phoneHref}
              >
                {company.phone}
              </a>
              .
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {details.scenarios.map((scenario) => (
                <div
                  className="rounded-2xl border border-navy-100 bg-white px-4 py-3 font-bold text-navy-950 shadow-sm transition hover:-translate-y-0.5 hover:border-rescue-500/40 hover:bg-rescue-500 hover:text-white"
                  key={scenario}
                >
                  {scenario}
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/book-service">Start Service Request</ButtonLink>
              <ButtonLink href="/book-service" variant="ghost">
                Upload Damage Photos
              </ButtonLink>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="relative h-[22rem] overflow-hidden rounded-[2rem] shadow-premium sm:h-[32rem] sm:rounded-[2.5rem]">
              <Image
                alt={`${service.title} royalty-free service detail visual`}
                className="object-cover transition duration-700 hover:scale-105"
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                src={details.detailImage}
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-navy-950 py-20 text-white sm:py-24">
        <div className="section-shell grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <Reveal>
            <p className="text-sm font-extrabold uppercase tracking-[0.22em] text-rescue-400">
              Photo Intake
            </p>
            <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-5xl">
              Help the team understand the damage before follow-up
            </h2>
            <p className="mt-5 text-lg leading-8 text-white/72">
              The booking page includes a damage photo upload placeholder so the
              customer can share what happened, where the damage is located, and
              how urgent the request is. This keeps the first conversation more
              organized and helps Superior Restoration Services respond with the
              right next step.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="rounded-[2rem] border border-white/10 bg-white/8 p-6">
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  "Select property type",
                  "Choose service needed",
                  "Pick urgency level",
                  "Describe affected area",
                  "Request inspection window",
                  "Upload damage photos"
                ].map((item) => (
                  <div
                    className="flex items-center gap-3 rounded-2xl bg-white/8 p-4"
                    key={item}
                  >
                    <Icon name="check" className="h-5 w-5 text-rescue-400" />
                    <span className="font-bold text-white/86">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection
        title={`Need ${service.shortTitle.toLowerCase()} help?`}
        text="Request a free inspection, upload damage photos, or call directly for urgent restoration support."
      />

      <section className="bg-navy-50 py-20 sm:py-24">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeading
            align="left"
            eyebrow="FAQ"
            text="Quick answers for homeowners and property managers comparing restoration providers."
            title={`${service.shortTitle} questions`}
          />
          <FAQ items={service.faqs} />
        </div>
      </section>
    </>
  );
}
