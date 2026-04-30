import { Reveal } from "@/components/Motion";

export function FAQ({
  items
}: {
  items: { question: string; answer: string }[];
}) {
  return (
    <div className="grid gap-4">
      {items.map((item, index) => (
        <Reveal delay={index * 0.04} direction={index % 2 === 0 ? "left" : "right"} key={item.question}>
          <details className="group rounded-3xl border border-navy-100 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-3 hover:scale-[1.05] hover:border-rescue-500 hover:bg-rescue-500 hover:shadow-[0_32px_90px_rgba(232,31,55,0.3)] open:border-rescue-500/40 open:shadow-premium">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-black text-navy-950 transition group-hover:text-white">
              {item.question}
              <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-navy-50 text-rescue-500 transition group-hover:scale-125 group-hover:bg-white group-hover:text-rescue-600 group-open:rotate-45 group-open:bg-white">
                +
              </span>
            </summary>
            <p className="mt-4 leading-7 text-slate-600 transition group-hover:text-white/86">{item.answer}</p>
          </details>
        </Reveal>
      ))}
    </div>
  );
}
