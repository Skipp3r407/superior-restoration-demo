import { MapPin } from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "@/components/Motion";
import { company, serviceAreas } from "@/lib/site";

export function ServiceArea() {
  return (
    <section className="overflow-hidden bg-white py-20 sm:py-24">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <Reveal direction="left">
          <p className="text-sm font-extrabold uppercase tracking-[0.22em] text-rescue-600">
            Service Area
          </p>
          <h2 className="mt-4 text-3xl font-black tracking-tight text-navy-950 sm:text-5xl">
            Serving Central Florida and surrounding communities
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            Based in Winter Park, Superior Restoration Services supports
            homeowners, businesses, hotels, and property managers across
            Central Florida.
          </p>
        </Reveal>
        <div className="relative rounded-[2.5rem] bg-navy-950 p-6 text-white shadow-premium">
          <div className="absolute inset-6 rounded-[2rem] border border-white/10 bg-[linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:32px_32px]" />
          <div className="relative z-10">
            <div className="mb-5 flex items-center gap-3">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-rescue-500">
                <MapPin className="h-6 w-6" />
              </span>
              <p className="text-xl font-black">{company.serviceArea} Coverage</p>
            </div>
            <Stagger className="grid gap-3 sm:grid-cols-2">
              {serviceAreas.map((area, index) => (
                <StaggerItem direction={index % 2 === 0 ? "left" : "right"} key={area}>
                  <div className="rounded-2xl border border-white/10 bg-white/8 px-4 py-3 font-bold text-white/85 transition hover:-translate-y-0.5 hover:border-rescue-400 hover:bg-rescue-500 hover:text-white hover:shadow-[0_18px_42px_rgba(232,31,55,0.28)]">
                    {area}
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </div>
    </section>
  );
}
