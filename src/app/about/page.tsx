import { CTASection } from "@/components/CTASection";

export default function AboutPage() {
  return (
    <>
      <section className="bg-white py-20 sm:py-24">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.22em] text-orange">
              About
            </p>
            <h1 className="mt-4 text-4xl font-black tracking-tight text-navy sm:text-6xl">
              Built for speed, trust, and emergency conversions
            </h1>
          </div>
          <div className="glass-card rounded-[2rem] p-8">
            <p className="text-lg leading-8 text-slate-600">
              This premium restoration website demo is structured for a serious
              local restoration brand: clear service lines, fast mobile CTAs,
              booking intake, chatbot lead capture, and scalable pages for
              future CRM, dispatch, payments, and AI automation.
            </p>
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
