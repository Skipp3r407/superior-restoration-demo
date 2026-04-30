import { Phone, Siren } from "lucide-react";
import Link from "next/link";
import { company } from "@/lib/site";

const actions = [
  {
    label: "Call Now",
    href: company.phoneHref,
    icon: Phone,
    primary: true
  },
  {
    label: "Emergency Help",
    href: "/book-service",
    icon: Siren
  }
];

export function LeftSideCTA() {
  return (
    <aside
      aria-label="Quick contact actions"
      className="fixed left-4 top-1/2 z-40 hidden -translate-y-1/2 flex-col gap-3 xl:flex"
    >
      {actions.map((action) => {
        const ActionIcon = action.icon;

        return (
          <Link
            className={`group flex min-h-12 w-12 items-center overflow-hidden rounded-full shadow-premium transition-all duration-300 hover:w-44 ${
              action.primary
                ? "bg-rescue-500 text-white"
                : "bg-white text-navy-950 ring-1 ring-navy-100 hover:bg-navy-950 hover:text-white"
            }`}
            href={action.href}
            key={action.label}
          >
            <span className="grid h-12 w-12 shrink-0 place-items-center">
              <ActionIcon className="h-5 w-5" />
            </span>
            <span className="whitespace-nowrap pr-5 text-sm font-black opacity-0 transition group-hover:opacity-100">
              {action.label}
            </span>
          </Link>
        );
      })}
      <div className="mt-2 origin-left -rotate-90 translate-y-16 whitespace-nowrap text-xs font-black uppercase tracking-[0.22em] text-navy-950/45">
        24/7 Response
      </div>
    </aside>
  );
}
