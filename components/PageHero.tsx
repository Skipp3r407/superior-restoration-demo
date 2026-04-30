import Image from "next/image";
import { ButtonLink } from "@/components/Button";
import { Reveal } from "@/components/Motion";
import { company } from "@/lib/site";

export function PageHero({
  eyebrow,
  title,
  text,
  image,
  compact = false
}: {
  eyebrow: string;
  title: string;
  text: string;
  image?: string;
  compact?: boolean;
}) {
  return (
    <section className="relative overflow-hidden bg-navy-950 text-white">
      {image ? (
        <Image
          alt=""
          className="object-cover opacity-32"
          fill
          priority
          sizes="100vw"
          src={image}
        />
      ) : null}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(232,31,55,0.28),transparent_32%),linear-gradient(120deg,rgba(3,26,54,0.95),rgba(14,76,149,0.82))]" />
      <div
        className={`section-shell relative z-10 ${
          compact ? "py-20 sm:py-24" : "py-24 sm:py-28 lg:py-32"
        }`}
      >
        <Reveal className="max-w-4xl">
          <p className="text-sm font-extrabold uppercase tracking-[0.24em] text-rescue-400">
            {eyebrow}
          </p>
          <h1 className="mt-4 text-3xl font-black tracking-tight sm:text-5xl lg:text-7xl">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/76 sm:text-xl">
            {text}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/book-service">Schedule Free Inspection</ButtonLink>
            <ButtonLink href={company.phoneHref} variant="secondary">
              Call Now
            </ButtonLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
