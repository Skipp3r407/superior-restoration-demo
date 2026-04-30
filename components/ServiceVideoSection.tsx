import Image from "next/image";
import Link from "next/link";
import { Film, Play, Video } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { services } from "@/lib/site";

const videoPlans = [
  {
    slug: "water-damage",
    label: "Water Damage Video",
    clipIdea: "Water extraction, wet floor cleanup, air movers, and drying equipment.",
    searchTerms: "Pexels or Pixabay: water damage restoration, flood cleanup, drying equipment"
  },
  {
    slug: "fire-damage",
    label: "Fire Cleanup Video",
    clipIdea: "Smoke cleanup, soot removal, fire damage walkthrough, and repair prep.",
    searchTerms: "Pexels or Pixabay: fire damage cleanup, smoke damage, restoration crew"
  },
  {
    slug: "mold-remediation",
    label: "Mold Remediation Video",
    clipIdea: "Containment, inspection, filtration, PPE, and affected material cleanup.",
    searchTerms: "Pexels or Pixabay: mold remediation, wall inspection, restoration PPE"
  },
  {
    slug: "storm-damage",
    label: "Storm Damage Video",
    clipIdea: "Storm debris cleanup, roof repair coordination, tarping, and stabilization.",
    searchTerms: "Pexels or Pixabay: storm damage cleanup, roof repair, debris removal"
  },
  {
    slug: "emergency-cleanup",
    label: "Emergency Cleanup Video",
    clipIdea: "Emergency response crew, safety setup, debris handling, and urgent cleanup.",
    searchTerms: "Pexels or Pixabay: emergency cleanup, restoration crew, property damage"
  },
  {
    slug: "commercial-restoration",
    label: "Commercial Restoration Video",
    clipIdea: "Commercial facility walkthrough, office cleanup, hotel response, and equipment setup.",
    searchTerms: "Pexels or Pixabay: commercial restoration, office cleanup, facility maintenance"
  }
];

export function ServiceVideoSection() {
  return (
    <section className="bg-navy-950 py-14 text-white sm:py-24">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Video Library"
          text="Video-ready service cards for future royalty-free clips. Each slot is matched to the service topic and uses royalty-free imagery as the placeholder poster."
          title="Service videos ready to add later"
        />

        <div className="mt-10 grid gap-4 md:mt-12 md:grid-cols-2 md:gap-5 xl:grid-cols-3">
          {videoPlans.map((plan) => {
            const service = services.find((item) => item.slug === plan.slug);

            if (!service) return null;

            return (
              <article
                className="group overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/8 shadow-premium transition duration-300 md:rounded-[2rem] md:hover:-translate-y-3 md:hover:scale-[1.03] md:hover:border-rescue-500 md:hover:bg-rescue-500 md:hover:shadow-[0_30px_90px_rgba(232,31,55,0.28)]"
                key={plan.slug}
              >
                <div className="relative h-52 overflow-hidden sm:h-64">
                  <Image
                    alt={`${plan.label} royalty-free video placeholder`}
                    className="object-cover transition duration-700 group-hover:scale-110"
                    fill
                    sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                    src={service.image}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/88 via-navy-950/22 to-transparent transition group-hover:from-rescue-700/92 group-hover:via-rescue-500/38" />
                  <div className="absolute left-3 top-3 inline-flex items-center gap-2 rounded-full bg-white/92 px-3 py-2 text-[0.68rem] font-black uppercase tracking-[0.14em] text-navy-950 backdrop-blur sm:left-5 sm:top-5 sm:px-4 sm:text-xs">
                    <Film className="h-4 w-4 text-rescue-500" />
                    Future Clip
                  </div>
                  <div className="absolute inset-0 grid place-items-center">
                    <span className="grid h-14 w-14 place-items-center rounded-full bg-rescue-500 text-white shadow-glow transition md:group-hover:scale-110 md:group-hover:bg-white md:group-hover:text-rescue-600 sm:h-16 sm:w-16">
                      <Play className="ml-1 h-6 w-6 fill-current sm:h-7 sm:w-7" />
                    </span>
                  </div>
                </div>

                <div className="p-5 sm:p-6">
                  <div className="flex items-start gap-3">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-white/10 text-rescue-400 transition group-hover:bg-white group-hover:text-rescue-600">
                      <Video className="h-5 w-5" />
                    </span>
                    <div className="min-w-0">
                      <h3 className="text-lg font-black text-white sm:text-xl">
                        {plan.label}
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-white/72 transition group-hover:text-white/88">
                        {plan.clipIdea}
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 rounded-2xl bg-white/8 p-4 text-sm leading-6 text-white/70 transition md:group-hover:bg-white/12 md:group-hover:text-white/86">
                    <strong className="text-white">Suggested source:</strong>{" "}
                    {plan.searchTerms}
                  </div>

                  <Link
                    className="mt-5 inline-flex min-h-11 w-full items-center justify-center rounded-full bg-white px-5 text-center text-sm font-black text-navy-950 transition hover:bg-navy-950 hover:text-white sm:w-auto"
                    href={`/services/${service.slug}`}
                  >
                    View {service.shortTitle}
                  </Link>
                </div>
              </article>
            );
          })}
        </div>

        <p className="mx-auto mt-8 max-w-3xl text-center text-sm leading-6 text-white/58">
          Placeholder only: no customer project footage is claimed here. Later,
          replace each poster card with licensed royalty-free clips from Pexels,
          Pixabay, Mixkit, Coverr, or properly licensed stock footage.
        </p>
      </div>
    </section>
  );
}
