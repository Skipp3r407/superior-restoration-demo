import Link from "next/link";
import { phoneHref, phoneNumber } from "@/lib/utils";

export function CTASection() {
  return (
    <section className="bg-slate-50 py-20 sm:py-24">
      <div className="section-shell">
        <div className="overflow-hidden rounded-[2.5rem] bg-navy p-8 text-white shadow-premium sm:p-12">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.22em] text-orange">
                Emergency Help
              </p>
              <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-5xl">
                Need restoration help right now?
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-white/70">
                Book online, upload damage details, or call directly for urgent
                water, fire, mold, storm, or commercial restoration needs.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              <a
                className="rounded-full bg-orange px-6 py-4 text-center font-black text-white transition hover:bg-orange/90"
                href={phoneHref}
              >
                Call {phoneNumber}
              </a>
              <Link
                className="rounded-full border border-white/25 bg-white/10 px-6 py-4 text-center font-black text-white transition hover:bg-white hover:text-navy"
                href="/booking"
              >
                Book Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
