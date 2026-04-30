import { Reveal } from "@/components/Motion";

export function SectionHeading({
  eyebrow,
  title,
  text,
  align = "center"
}: {
  eyebrow?: string;
  title: string;
  text?: string;
  align?: "center" | "left";
}) {
  return (
    <Reveal
      className={`mx-auto max-w-3xl ${
        align === "center" ? "text-center" : "mx-0 text-left"
      }`}
    >
      {eyebrow ? (
        <p className="mb-3 text-sm font-extrabold uppercase tracking-[0.22em] text-rescue-600">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-3xl font-black tracking-tight text-navy-950 sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {text ? (
        <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
          {text}
        </p>
      ) : null}
    </Reveal>
  );
}
