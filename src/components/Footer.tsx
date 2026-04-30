import Link from "next/link";
import { phoneHref, phoneNumber } from "@/lib/utils";

export function Footer() {
  return (
    <footer className="bg-navy pb-24 pt-14 text-white md:pb-10">
      <div className="section-shell grid gap-10 md:grid-cols-[1.3fr_0.7fr_0.7fr]">
        <div>
          <p className="text-2xl font-black">
            Superior<span className="text-orange">Restore</span>
          </p>
          <p className="mt-4 max-w-xl leading-7 text-white/70">
            Premium restoration website demo built for emergency service calls,
            online booking, future CRM automation, payments, and AI lead capture.
          </p>
        </div>
        <div>
          <h3 className="font-black">Pages</h3>
          <div className="mt-4 grid gap-2 text-white/70">
            <Link href="/about">About</Link>
            <Link href="/services">Services</Link>
            <Link href="/booking">Booking</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
        <div>
          <h3 className="font-black">Emergency</h3>
          <a className="mt-4 block text-2xl font-black text-orange" href={phoneHref}>
            {phoneNumber}
          </a>
          <p className="mt-3 text-sm leading-6 text-white/60">
            24/7 response demo. Replace with live operations details before launch.
          </p>
        </div>
      </div>
    </footer>
  );
}
