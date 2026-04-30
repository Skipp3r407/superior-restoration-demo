import { CalendarCheck, PhoneCall, Siren } from "lucide-react";
import { ButtonLink } from "@/components/Button";
import { company } from "@/lib/site";

export function MobileStickyCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/60 bg-white/96 px-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] pt-3 shadow-[0_-18px_50px_rgba(4,18,38,0.18)] backdrop-blur-xl md:hidden">
      <div className="mx-auto max-w-md">
        <div className="mb-2 flex items-center justify-center gap-2 text-[0.68rem] font-black uppercase tracking-[0.18em] text-rescue-600">
          <span className="h-2 w-2 rounded-full bg-rescue-500 shadow-glow" />
          24/7 Emergency Response
        </div>
        <div className="grid grid-cols-2 gap-2">
          <ButtonLink
            href={company.phoneHref}
            variant="dark"
            className="min-h-12 gap-2 px-3 text-center text-xs leading-tight"
          >
            <PhoneCall className="h-4 w-4" />
            Call Now
          </ButtonLink>
          <ButtonLink
            href="/book-service"
            className="min-h-12 gap-2 px-3 text-center text-xs leading-tight"
          >
            <CalendarCheck className="h-4 w-4" />
            Book Now
          </ButtonLink>
          <ButtonLink
            href="/book-service"
            variant="ghost"
            className="col-span-2 min-h-11 gap-2 px-3 text-center text-xs leading-tight"
          >
            <Siren className="h-4 w-4 text-rescue-500" />
            Emergency Help + Photo Upload
          </ButtonLink>
        </div>
      </div>
    </div>
  );
}
