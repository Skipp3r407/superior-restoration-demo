"use client";

import { CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { ButtonLink } from "@/components/Button";
import { SectionHeading } from "@/components/SectionHeading";
import { company, moldServicePackages, remediationStages } from "@/lib/site";

/** Mold-specific packages plus a job tracker that shows homeowners every stage of remediation. */
export function MoldCenter() {
  const [stage, setStage] = useState(2);

  return (
    <>
      <section className="bg-white py-20 sm:py-24">
        <div className="section-shell">
          <SectionHeading
            eyebrow="Mold Services"
            text="From the first musty smell to the clearance test, every step is booked online and documented for your insurer."
            title="Inspection, testing, remediation and proof it's gone"
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {moldServicePackages.map((item) => (
              <article className="flex h-full flex-col rounded-[2rem] border border-navy-100 bg-white p-6 shadow-sm" key={item.title}>
                <span className="w-fit rounded-full bg-rescue-500/10 px-3 py-1 text-xs font-black uppercase tracking-[0.16em] text-rescue-600">
                  {item.tag}
                </span>
                <h3 className="mt-4 text-2xl font-black text-navy-950">{item.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{item.text}</p>
                <ul className="mb-6 mt-4 grid gap-2">
                  {item.points.map((point) => (
                    <li className="flex items-center gap-2 text-sm font-bold text-navy-900" key={point}>
                      <CheckCircle2 className="h-4 w-4 text-emerald-500" /> {point}
                    </li>
                  ))}
                </ul>
                <ButtonLink className="mt-auto" href="/book-service" variant="ghost">
                  Book Now
                </ButtonLink>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy-950 py-20 text-white sm:py-24">
        <div className="section-shell">
          <p className="text-sm font-extrabold uppercase tracking-[0.22em] text-rescue-400">Job Tracker</p>
          <h2 className="mt-4 max-w-3xl text-3xl font-black tracking-tight sm:text-5xl">Know exactly where your job stands</h2>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-white/70">
            Customers get a text at every stage. Tap a stage to see what happens.
          </p>
          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {remediationStages.map((item, index) => (
              <button
                className={`rounded-2xl p-4 text-left transition ${
                  index < stage
                    ? "bg-emerald-500/15 text-emerald-200"
                    : index === stage
                      ? "bg-rescue-500 text-white shadow-glow"
                      : "bg-white/6 text-white/60"
                }`}
                key={item.title}
                onClick={() => setStage(index)}
                type="button"
              >
                <span className="text-xs font-black uppercase tracking-[0.18em]">Step {index + 1}</span>
                <span className="mt-1 block text-lg font-black">{item.title}</span>
              </button>
            ))}
          </div>
          <div className="mt-6 h-2 overflow-hidden rounded-full bg-white/10">
            <div
              className="h-full rounded-full bg-rescue-500 transition-all"
              style={{ width: `${((stage + 1) / remediationStages.length) * 100}%` }}
            />
          </div>
          <p className="mt-6 rounded-3xl bg-white/8 p-5 text-lg leading-8 text-white/85">
            <span className="font-black text-white">{remediationStages[stage].title}:</span> {remediationStages[stage].text}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/book-service">Book a Free Mold Inspection</ButtonLink>
            <ButtonLink href={company.phoneHref} variant="secondary">
              Call {company.phone}
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
