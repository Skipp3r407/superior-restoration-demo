import { Stagger, StaggerItem } from "@/components/Motion";
import { processSteps } from "@/lib/site";

export function ProcessSteps({ steps = processSteps }: { steps?: string[] | typeof processSteps }) {
  const normalized = steps.map((step) =>
    typeof step === "string" ? { title: step, text: "A focused restoration step keeps the project moving with clear communication." } : step
  );

  return (
    <Stagger className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
      {normalized.map((step, index) => (
        <StaggerItem direction={index % 3 === 0 ? "left" : index % 3 === 1 ? "up" : "right"} key={step.title}>
          <div className="group relative h-full rounded-[2rem] border border-navy-100 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-3 hover:scale-[1.04] hover:border-rescue-500 hover:bg-rescue-500 hover:shadow-[0_28px_80px_rgba(232,31,55,0.28)]">
            <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-navy-950 text-xl font-black text-white transition group-hover:bg-white group-hover:text-rescue-500">
              {index + 1}
            </div>
            <h3 className="text-xl font-black text-navy-950 transition group-hover:text-white">{step.title}</h3>
            <p className="mt-3 leading-7 text-slate-600 transition group-hover:text-white/86">{step.text}</p>
          </div>
        </StaggerItem>
      ))}
    </Stagger>
  );
}
