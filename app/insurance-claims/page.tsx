import type { Metadata } from "next";
import { ButtonLink } from "@/components/Button";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { company, images } from "@/lib/site";

export const metadata: Metadata = {
  title: "Insurance Claim Help for Water, Mold & Fire Damage",
  description:
    "How restoration insurance claims work in Florida: what to photograph, when to call your insurer, and how Superior Restoration Services documents damage for your adjuster."
};

const claimSteps = [
  { title: "Stop the damage", text: "Shut off water, make the area safe and call us. Insurers expect you to prevent further damage." },
  { title: "Photograph everything", text: "Wide shots and close-ups before anything is moved. Upload them in the booking form." },
  { title: "Call your insurer", text: "Open a claim and write down the claim number and your adjuster's name." },
  { title: "We document it", text: "Moisture readings, thermal images, lab results and a photo report your adjuster can use." },
  { title: "We talk to your adjuster", text: "Scope and pricing go straight to the adjuster so you aren't stuck in the middle." },
  { title: "Restore and close out", text: "Work is completed and final photos and clearance results go into the claim file." }
];

const faqs = [
  {
    q: "Does homeowners insurance cover mold?",
    a: "Often only when the mold comes from a sudden, covered water event such as a burst pipe. Long-term leaks and humidity are usually excluded. Your policy decides, so ask your agent."
  },
  {
    q: "Do I have to use the company my insurer suggests?",
    a: "You can usually choose your own licensed restoration company. Check your policy and tell your insurer who you picked."
  },
  {
    q: "Should I wait for the adjuster before cleanup starts?",
    a: "Emergency drying and water removal should start right away to limit damage. Photograph first, then mitigate."
  }
];

export default function InsuranceClaimsPage() {
  return (
    <>
      <PageHero
        compact
        eyebrow="Insurance Claims"
        image={images.emergencyCrew}
        text="What to do, what to photograph, and how we work with your adjuster on water, mold, fire and storm claims."
        title="Insurance claims without the headache"
      />
      <section className="bg-white py-20 sm:py-24">
        <div className="section-shell">
          <SectionHeading
            eyebrow="Step by Step"
            text="Follow these steps from the first hour to the final report."
            title="How a restoration claim works"
          />
          <ol className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {claimSteps.map((step, index) => (
              <li className="rounded-[2rem] border border-navy-100 bg-white p-6 shadow-sm" key={step.title}>
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-navy-950 font-black text-rescue-400">
                  {index + 1}
                </span>
                <h3 className="mt-4 text-xl font-black text-navy-950">{step.title}</h3>
                <p className="mt-2 leading-7 text-slate-600">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <section className="bg-navy-50 py-20 sm:py-24">
        <div className="section-shell grid gap-10 lg:grid-cols-[1fr_0.8fr]">
          <div>
            <SectionHeading
              eyebrow="Common Questions"
              text="Short answers. Your policy and adjuster have the final word."
              title="Insurance FAQ"
            />
            <div className="mt-8 grid gap-4">
              {faqs.map((item) => (
                <details className="rounded-3xl bg-white p-5 shadow-sm" key={item.q}>
                  <summary className="cursor-pointer font-black text-navy-950">{item.q}</summary>
                  <p className="mt-3 leading-7 text-slate-600">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
          <aside className="h-fit rounded-[2.5rem] bg-navy-950 p-8 text-white shadow-premium">
            <p className="text-sm font-extrabold uppercase tracking-[0.22em] text-rescue-400">Start your claim right</p>
            <h2 className="mt-3 text-3xl font-black">Book an inspection and upload photos now</h2>
            <p className="mt-4 leading-7 text-white/70">
              Add your insurer and claim number in the booking form and we&apos;ll take it from there.
            </p>
            <div className="mt-6 flex flex-col gap-3">
              <ButtonLink href="/book-service">Book an Inspection</ButtonLink>
              <ButtonLink href={company.phoneHref} variant="secondary">
                Call {company.phone}
              </ButtonLink>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
