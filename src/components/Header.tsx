"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { phoneHref, phoneNumber } from "@/lib/utils";

const nav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Booking", href: "/booking" },
  { label: "Contact", href: "/contact" }
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/50 bg-white/86 backdrop-blur-xl">
      <div className="section-shell flex min-h-20 items-center justify-between gap-4">
        <Link className="text-lg font-black tracking-tight text-navy" href="/">
          Superior<span className="text-orange">Restore</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {nav.map((item) => {
            const active =
              pathname === item.href ||
              (item.href !== "/" && pathname.startsWith(item.href));

            return (
              <Link
                className={`rounded-full px-4 py-2 text-sm font-bold transition hover:bg-orange hover:text-white ${
                  active ? "bg-orange text-white" : "text-slate-700"
                }`}
                href={item.href}
                key={item.href}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-black text-navy shadow-sm transition hover:border-orange hover:bg-orange hover:text-white"
            href={phoneHref}
          >
            {phoneNumber}
          </a>
          <Link
            className="rounded-full bg-navy px-5 py-3 text-sm font-black text-white shadow-premium transition hover:bg-orange"
            href="/booking"
          >
            Book Service
          </Link>
        </div>

        <button
          aria-label="Toggle menu"
          className="grid h-11 w-11 place-items-center rounded-full bg-navy text-white md:hidden"
          onClick={() => setOpen((current) => !current)}
          type="button"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-slate-100 bg-white p-4 shadow-premium md:hidden">
          <nav className="grid gap-2">
            {nav.map((item) => (
              <Link
                className="rounded-2xl px-4 py-3 font-bold text-navy transition hover:bg-orange hover:text-white"
                href={item.href}
                key={item.href}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
