import { CalendarCheck, Camera, CheckCircle2, PhoneCall } from "lucide-react";
import { ButtonLink } from "@/components/Button";
import { company } from "@/lib/site";

const bookingSteps = [
  {
    title: "Choose a service",
    text: "Select water, fire, mold, storm, emergency cleanup, commercial restoration, or a general inspection.",
    icon: CalendarCheck
  },
  {
    title: "Share urgency and details",
    text: "Tell us if it is an emergency, where the damage is located, and how you prefer to be contacted.",
    icon: PhoneCall
  },
  {
    title: "Upload damage photos",
    text: "Add photos during the booking request so the team has more context before follow-up.",
    icon: Camera
  },
  {
    title: "Get next steps",
    text: "Emergency requests are prioritized. Non-emergency requests are reviewed for a free inspection window.",
    icon: CheckCircle2
  }
];

export function BookingPathPanel() {
  return (
    <div className="glass-card rounded-[2.5rem] p-6 text-navy-950 transition duration-300 hover:-translate-y-2 hover:scale-[1.02]">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-sm font-extrabold uppercase tracking-[0.22em] text-rescue-600">
            Book Through The Site
          </p>
          <h3 className="mt-2 text-3xl font-black tracking-tight">
            Request service in under a minute
          </h3>
          <p className="mt-3 leading-7 text-slate-600">
            Use the booking form to request help, schedule a free inspection
            request, and send damage details directly through the website.
          </p>
        </div>
        <ButtonLink href="/book-service" className="shrink-0">
          Start Booking
        </ButtonLink>
      </div>

      <div className="mt-6 grid gap-3">
        {bookingSteps.map((step, index) => {
          const StepIcon = step.icon;

          return (
            <div
              className="group flex gap-4 rounded-3xl border border-navy-100 bg-white/86 p-4 shadow-sm transition duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:border-rescue-500 hover:bg-rescue-500 hover:shadow-[0_22px_60px_rgba(232,31,55,0.22)]"
              key={step.title}
            >
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-navy-950 text-rescue-400 transition group-hover:bg-white group-hover:text-rescue-600">
                <StepIcon className="h-5 w-5" />
              </span>
              <div>
                <p className="font-black text-navy-950 transition group-hover:text-white">
                  {index + 1}. {step.title}
                </p>
                <p className="mt-1 text-sm leading-6 text-slate-600 transition group-hover:text-white/86">
                  {step.text}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        <ButtonLink href="/book-service" variant="dark">
          Schedule Free Inspection
        </ButtonLink>
        <ButtonLink href={company.phoneHref} variant="ghost">
          Emergency? Call {company.phone}
        </ButtonLink>
      </div>
    </div>
  );
}
