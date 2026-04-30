import Link from "next/link";
import { phoneHref } from "@/lib/utils";

export function MobileStickyCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/40 bg-white/90 p-3 shadow-premium backdrop-blur md:hidden">
      <div className="grid grid-cols-2 gap-3">
        <a
          className="rounded-full bg-navy px-4 py-3 text-center text-sm font-black text-white"
          href={phoneHref}
        >
          Call Now
        </a>
        <Link
          className="rounded-full bg-orange px-4 py-3 text-center text-sm font-black text-white"
          href="/booking"
        >
          Book Service
        </Link>
      </div>
    </div>
  );
}
