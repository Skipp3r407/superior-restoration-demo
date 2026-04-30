import { ButtonLink } from "@/components/Button";
import { company } from "@/lib/site";

export function MobileStickyCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/40 bg-white/94 p-2.5 pb-[calc(0.625rem+env(safe-area-inset-bottom))] shadow-[0_-18px_50px_rgba(4,18,38,0.16)] backdrop-blur-xl md:hidden">
      <div className="grid grid-cols-3 gap-2">
        <ButtonLink href={company.phoneHref} variant="dark" className="min-h-11 px-2 text-center text-xs leading-tight">
          Call Now
        </ButtonLink>
        <ButtonLink href="/book-service" className="min-h-11 px-2 text-center text-xs leading-tight">
          Estimate
        </ButtonLink>
        <ButtonLink href="/book-service" variant="ghost" className="min-h-11 px-2 text-center text-xs leading-tight">
          Emergency
        </ButtonLink>
      </div>
    </div>
  );
}
