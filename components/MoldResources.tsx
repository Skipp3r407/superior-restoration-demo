import { ButtonLink } from "@/components/Button";
import { FAQ } from "@/components/FAQ";
import { SectionHeading } from "@/components/SectionHeading";
import { moldFaqs, moldPreventionTips, sampleLabResults } from "@/lib/site";

const statusTone: Record<string, string> = {
  Reference: "bg-navy-100 text-navy-900",
  Normal: "bg-emerald-500/12 text-emerald-700",
  Elevated: "bg-amber-400/20 text-amber-800",
  High: "bg-rescue-500/12 text-rescue-600"
};

/** Sample lab report, Florida prevention tips and a mold FAQ (with FAQPage structured data for Google). */
export function MoldResources() {
  const top = Math.max(...sampleLabResults.map((row) => row.count));
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: moldFaqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer }
    }))
  };

  return (
    <>
      <section className="bg-navy-50 py-20 sm:py-24">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <SectionHeading
            eyebrow="Sample Lab Report"
            text="Air samples from each room are compared with the outdoor baseline, so you see exactly where the problem is. Every report is explained in plain English."
            title="See what's in your air, room by room"
          />
          <div className="rounded-[2.5rem] bg-white p-6 shadow-premium ring-1 ring-navy-100">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-slate-500">Spores per cubic meter (sample data)</p>
            <ul className="mt-5 grid gap-4">
              {sampleLabResults.map((row) => (
                <li key={row.room}>
                  <div className="flex items-center justify-between gap-3 text-sm font-black text-navy-950">
                    <span>{row.room}</span>
                    <span className={`rounded-full px-3 py-1 text-xs ${statusTone[row.status]}`}>{row.status}</span>
                  </div>
                  <div className="mt-2 h-3 overflow-hidden rounded-full bg-navy-50">
                    <div className="h-full rounded-full bg-gradient-to-r from-navy-700 to-rescue-500" style={{ width: `${(row.count / top) * 100}%` }} />
                  </div>
                  <p className="mt-1 text-xs font-bold text-slate-500">{row.count.toLocaleString()}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="section-shell">
          <SectionHeading
            eyebrow="Florida Mold Prevention"
            text="Central Florida heat and humidity make prevention part of owning a home here."
            title="Six habits that keep mold from coming back"
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {moldPreventionTips.map((tip, index) => (
              <article className="rounded-[2rem] border border-navy-100 bg-white p-6 shadow-sm" key={tip.title}>
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-navy-950 font-black text-rescue-400">{index + 1}</span>
                <h3 className="mt-4 text-xl font-black text-navy-950">{tip.title}</h3>
                <p className="mt-2 leading-7 text-slate-600">{tip.text}</p>
              </article>
            ))}
          </div>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/mold-risk-check">Take the 1-Minute Mold Risk Check</ButtonLink>
            <ButtonLink href="/track" variant="ghost">
              Track an Existing Job
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="bg-navy-50 py-20 sm:py-24">
        <div className="section-shell">
          <SectionHeading eyebrow="Mold FAQ" text="Straight answers to the questions homeowners ask most." title="Mold questions, answered" />
          <div className="mt-10">
            <FAQ items={moldFaqs} />
          </div>
        </div>
        <script dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} type="application/ld+json" />
      </section>
    </>
  );
}
