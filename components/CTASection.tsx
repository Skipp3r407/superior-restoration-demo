import { ButtonLink } from "@/components/Button";
import { Icon } from "@/components/Icons";
import { Reveal } from "@/components/Motion";
import { company } from "@/lib/site";

export function EmergencyBar() {
  return (
    <section className="relative z-10 -mt-8">
      <div className="section-shell">
        <Reveal>
          <div className="glass-card flex flex-col gap-5 rounded-[2rem] bg-white p-5 text-navy-950 sm:flex-row sm:items-center sm:justify-between lg:p-6">
            <div className="flex items-center gap-4">
              <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-rescue-500 text-white shadow-glow">
                <Icon name="clock" />
              </span>
              <div>
                <p className="text-lg font-black">
                  24/7 Emergency Restoration Help
                </p>
                <p className="text-sm text-slate-600">
                  Rapid response for water, fire, mold, and storm damage.
                </p>
              </div>
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              <ButtonLink href={company.phoneHref}>Click to Call</ButtonLink>
              <ButtonLink href="/book-service" variant="ghost">
                Request Emergency Help
              </ButtonLink>
              <ButtonLink href="/book-service" variant="dark">
                Upload Damage Photos
              </ButtonLink>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function CTASection({
  title = "Need restoration help right now?",
  text = "Request a free estimate and get a clear plan from a responsive local restoration team.",
  dark = true
}: {
  title?: string;
  text?: string;
  dark?: boolean;
}) {
  return (
    <section className="py-16 sm:py-20">
      <div className="section-shell">
        <Reveal>
          <div
            className={`overflow-hidden rounded-[2.5rem] p-8 sm:p-10 lg:p-12 ${
              dark
                ? "bg-navy-950 text-white"
                : "glass-card bg-white text-navy-950"
            }`}
          >
            <div className="relative z-10 grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
              <div>
                <p className="mb-3 text-sm font-extrabold uppercase tracking-[0.22em] text-rescue-400">
                  Free Estimate
                </p>
                <h2 className="max-w-3xl text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
                  {title}
                </h2>
                <p
                  className={`mt-5 max-w-2xl text-lg leading-8 ${
                    dark ? "text-white/72" : "text-slate-600"
                  }`}
                >
                  {text}
                </p>
              </div>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                <ButtonLink href="/book-service">Book Service</ButtonLink>
                <ButtonLink href="/book-service" variant={dark ? "secondary" : "ghost"}>
                  Schedule Free Inspection
                </ButtonLink>
                <ButtonLink
                  href={company.phoneHref}
                  variant={dark ? "secondary" : "dark"}
                >
                  Call Now {company.phone}
                </ButtonLink>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
