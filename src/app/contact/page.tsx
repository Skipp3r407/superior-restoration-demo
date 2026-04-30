import { CTASection } from "@/components/CTASection";
import { phoneHref, phoneNumber } from "@/lib/utils";

export default function ContactPage() {
  return (
    <>
      <section className="bg-slate-50 py-20 sm:py-24">
        <div className="section-shell grid gap-10 lg:grid-cols-2">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.22em] text-orange">
              Contact
            </p>
            <h1 className="mt-4 text-4xl font-black tracking-tight text-navy sm:text-6xl">
              Request a restoration estimate
            </h1>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Call now or use the booking page to send service details. This
              page is ready for future CRM and email form integration.
            </p>
            <a className="mt-8 inline-flex text-3xl font-black text-orange" href={phoneHref}>
              {phoneNumber}
            </a>
          </div>
          <form className="glass-card grid gap-4 rounded-[2rem] p-6">
            {["Name", "Phone", "Email", "Service Needed"].map((label) => (
              <input
                className="min-h-12 rounded-2xl border border-slate-200 px-4 outline-none focus:border-orange"
                key={label}
                placeholder={label}
              />
            ))}
            <textarea
              className="min-h-32 rounded-2xl border border-slate-200 p-4 outline-none focus:border-orange"
              placeholder="Tell us what happened"
            />
            <button className="rounded-full bg-orange px-6 py-4 font-black text-white" type="button">
              Send Message
            </button>
          </form>
        </div>
      </section>
      <CTASection />
    </>
  );
}
