"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Mail, Menu, Phone, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube
} from "react-icons/fa6";
import { ButtonLink } from "@/components/Button";
import { Icon } from "@/components/Icons";
import { company, navItems, serviceNavGroups, socialLinks } from "@/lib/site";

const groupDescriptions: Record<string, string> = {
  Water: "Leaks, floods, pipe breaks, storm water, and water cleanup.",
  Mold: "Mold testing, remediation, specialty cleaning, and prevention.",
  Smoke: "Smoke odor, residue cleaning, pack-out, and restoration planning.",
  Fire: "Fire damage, soot cleanup, smoke impact, and repair coordination.",
  "Other Services": "Commercial restoration and property-focused support."
};

const socialIconMap = {
  Facebook: FaFacebookF,
  Instagram: FaInstagram,
  YouTube: FaYoutube,
  LinkedIn: FaLinkedinIn
};

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const [showTopBar, setShowTopBar] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    function handleScroll() {
      const currentScrollY = window.scrollY;
      setShowTopBar(
        currentScrollY < 24 || currentScrollY < lastScrollY.current
      );
      lastScrollY.current = currentScrollY;
    }

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-white/40 bg-white/88 backdrop-blur-2xl">
      <motion.div
        animate={{
          height: showTopBar ? 28 : 0,
          opacity: showTopBar ? 1 : 0
        }}
        className="overflow-hidden bg-rescue-500 text-white"
        initial={false}
        transition={{ duration: 0.24, ease: "easeInOut" }}
      >
        <div className="mx-auto flex h-7 w-full max-w-[96rem] items-center justify-between gap-4 px-4 text-[0.68rem] font-bold sm:px-6 lg:px-8 xl:-translate-x-6 2xl:-translate-x-10">
          <p className="hidden whitespace-nowrap uppercase tracking-[0.16em] sm:block">
            24/7 Emergency Restoration
          </p>
          <div className="flex items-center gap-3">
            {socialLinks.map((link) => {
              const SocialIcon =
                socialIconMap[link.label as keyof typeof socialIconMap];

              return (
                <a
                  aria-label={`Visit ${company.name} on ${link.label}`}
                  className="transition hover:-translate-y-0.5 hover:text-white/80"
                  href={link.href}
                  key={link.label}
                  rel="noreferrer"
                  target="_blank"
                >
                  <SocialIcon aria-hidden="true" className="h-3 w-3" />
                </a>
              );
            })}
          </div>
          <div className="hidden items-center gap-4 md:flex">
            <a
              className="inline-flex items-center gap-1.5 whitespace-nowrap transition hover:text-white/80"
              href={company.emailHref}
            >
              <Mail className="h-3 w-3" />
              {company.email}
            </a>
            <a
              className="inline-flex items-center gap-1.5 whitespace-nowrap transition hover:text-white/80"
              href={company.phoneHref}
            >
              <Phone className="h-3 w-3" />
              {company.phone}
            </a>
          </div>
        </div>
      </motion.div>
      <div className="mx-auto flex min-h-20 w-full max-w-[96rem] items-center justify-between gap-4 px-4 sm:px-6 lg:px-8 xl:-translate-x-6 2xl:-translate-x-10">
        <div className="flex items-center gap-5">
          <Link
            className="group flex items-center gap-3"
            href="/"
            onClick={() => setOpen(false)}
          >
            <span className="relative block h-28 w-60 overflow-hidden transition group-hover:scale-[1.02] sm:w-64">
              <Image
                alt={`${company.name} logo`}
                className="object-contain object-left"
                fill
                priority
                sizes="(min-width: 640px) 256px, 240px"
                src={company.logo}
              />
            </span>
          </Link>

          <nav className="hidden items-center gap-0.5 xl:flex">
          {navItems.map((item) => {
            const active =
              pathname === item.href ||
              (item.href !== "/" && pathname.startsWith(item.href));

            if (item.label === "Services") {
              return (
                serviceNavGroups.map((group) => (
                  <div
                    className="relative"
                    key={group.label}
                    onMouseEnter={() => setOpenGroup(group.label)}
                    onMouseLeave={() => setOpenGroup(null)}
                  >
                    <Link
                      className={`group/nav relative inline-flex items-center gap-1 overflow-hidden rounded-full px-3 py-2 text-sm font-bold transition ${
                        pathname === group.href ||
                        group.items.some((link) => pathname === link.href)
                          ? "bg-rescue-500 text-white shadow-[0_12px_30px_rgba(232,31,55,0.25)] hover:bg-rescue-600"
                          : "text-slate-700 hover:bg-rescue-500 hover:text-white"
                      }`}
                      href={group.href}
                    >
                      <span className="absolute left-2 h-2 w-2 scale-0 rounded-full bg-rescue-500 opacity-0 shadow-[0_0_0_0_rgba(232,31,55,0.55)] transition group-hover/nav:scale-100 group-hover/nav:animate-ping group-hover/nav:bg-white group-hover/nav:opacity-100" />
                      <span className="relative whitespace-nowrap transition group-hover/nav:translate-x-2">
                        {group.label}
                      </span>
                      <ChevronDown className="relative h-4 w-4 transition group-hover/nav:translate-x-1 group-hover/nav:rotate-180" />
                    </Link>
                    <AnimatePresence>
                      {openGroup === group.label ? (
                        <motion.div
                          animate={{ opacity: 1, y: 0 }}
                          className="absolute left-1/2 top-12 max-h-[min(72vh,40rem)] w-[22rem] -translate-x-1/2 overflow-hidden rounded-[1.75rem] border border-white/70 bg-white/96 shadow-[0_28px_90px_rgba(3,26,54,0.24)] backdrop-blur-2xl"
                          exit={{ opacity: 0, y: 8 }}
                          initial={{ opacity: 0, y: 8 }}
                        >
                          <div className="h-1.5 bg-gradient-to-r from-rescue-500 via-rescue-600 to-navy-500" />
                          <div className="border-b border-navy-100 bg-navy-50/80 p-5">
                            <div className="flex items-start justify-between gap-4">
                              <div>
                                <p className="text-xs font-black uppercase tracking-[0.2em] text-rescue-600">
                                  {group.label} Services
                                </p>
                                <p className="mt-2 text-sm leading-6 text-slate-600">
                                  {groupDescriptions[group.label]}
                                </p>
                              </div>
                              <span className="shrink-0 rounded-full bg-rescue-500 px-3 py-1 text-xs font-black text-white">
                                {group.items.length}
                              </span>
                            </div>
                          </div>
                          <div className="max-h-[24rem] overflow-y-auto p-3">
                            {group.items.map((link) => (
                              <Link
                                className="group/item flex items-center justify-between gap-3 rounded-2xl px-4 py-3 text-sm font-black leading-6 text-navy-950 transition duration-300 hover:-translate-y-0.5 hover:bg-rescue-500 hover:text-white hover:shadow-[0_16px_38px_rgba(232,31,55,0.25)]"
                                href={link.href}
                                key={link.href}
                              >
                                <span>{link.label}</span>
                                <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-navy-50 text-rescue-500 transition group-hover/item:bg-white group-hover/item:text-rescue-600">
                                  →
                                </span>
                              </Link>
                            ))}
                          </div>
                          <div className="border-t border-navy-100 bg-white p-3">
                            <Link
                              className="flex min-h-11 items-center justify-center rounded-full bg-navy-950 px-4 text-sm font-black text-white transition hover:bg-rescue-500"
                              href={group.href}
                            >
                              View {group.label} Services
                            </Link>
                          </div>
                        </motion.div>
                      ) : null}
                    </AnimatePresence>
                  </div>
                ))
              );
            }

            return (
              <Link
                className={`group/nav relative overflow-hidden rounded-full px-4 py-2 text-sm font-bold transition ${
                  active
                    ? "bg-rescue-500 text-white shadow-[0_12px_30px_rgba(232,31,55,0.25)] hover:bg-rescue-600"
                    : "text-slate-700 hover:bg-rescue-500 hover:text-white"
                }`}
                href={item.href}
                key={item.href}
              >
                <span className="absolute left-2 top-1/2 h-2 w-2 -translate-y-1/2 scale-0 rounded-full bg-rescue-500 opacity-0 shadow-[0_0_0_0_rgba(232,31,55,0.55)] transition group-hover/nav:scale-100 group-hover/nav:animate-ping group-hover/nav:bg-white group-hover/nav:opacity-100" />
                <span className="relative block transition group-hover/nav:translate-x-2">
                  {item.label}
                </span>
              </Link>
            );
          })}
          </nav>
        </div>

        <div className="hidden items-center gap-3 xl:flex">
          <a
            className="inline-flex min-h-11 shrink-0 items-center gap-2 whitespace-nowrap rounded-full border border-navy-100 bg-white px-4 text-sm font-black text-navy-950 shadow-sm transition hover:border-rescue-500 hover:bg-rescue-500 hover:text-white"
            href={company.phoneHref}
          >
            <Icon name="phone" className="h-4 w-4" />
            <span>{company.phone}</span>
          </a>
          <ButtonLink href="/book-service" className="min-h-11 shrink-0 px-5">
            Book Now
          </ButtonLink>
        </div>

        <button
          aria-expanded={open}
          aria-label="Toggle navigation"
          className="ml-auto grid h-12 w-12 place-items-center rounded-full border border-navy-100 bg-white text-navy-950 shadow-sm transition hover:border-rescue-500 hover:bg-rescue-500 hover:text-white xl:hidden"
          onClick={() => setOpen((current) => !current)}
          type="button"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            animate={{ x: 0, opacity: 1 }}
            className="fixed right-0 top-20 h-[calc(100vh-5rem)] w-full max-w-sm overflow-y-auto border-l border-navy-100 bg-white p-5 pb-28 shadow-premium xl:hidden"
            exit={{ x: "100%", opacity: 0 }}
            initial={{ x: "100%", opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => {
                const active =
                  pathname === item.href ||
                  (item.href !== "/" && pathname.startsWith(item.href));

                return (
                  <Link
                    className={`group/nav relative overflow-hidden rounded-2xl px-4 py-3 text-base font-bold transition hover:bg-rescue-500 hover:text-white ${
                      active
                        ? "bg-rescue-500 text-white shadow-[0_12px_30px_rgba(232,31,55,0.22)]"
                        : "text-navy-950"
                    }`}
                    href={item.href}
                    key={item.href}
                    onClick={() => setOpen(false)}
                  >
                    <span className="absolute left-2 top-1/2 h-2 w-2 -translate-y-1/2 scale-0 rounded-full bg-rescue-500 opacity-0 transition group-hover/nav:scale-100 group-hover/nav:animate-ping group-hover/nav:bg-white group-hover/nav:opacity-100" />
                    <span className="relative block transition group-hover/nav:translate-x-2">
                      {item.label}
                    </span>
                  </Link>
                );
              })}
              <p className="mt-4 px-4 text-xs font-black uppercase tracking-[0.22em] text-rescue-600">
                Services
              </p>
              {serviceNavGroups.map((group) => (
                <div className="rounded-3xl bg-navy-50 p-3" key={group.label}>
                  <Link
                    className={`block rounded-2xl px-3 py-2 text-xs font-black uppercase tracking-[0.18em] transition hover:bg-rescue-500 hover:text-white ${
                      pathname === group.href ||
                      group.items.some((link) => pathname === link.href)
                        ? "bg-rescue-500 text-white"
                        : "text-rescue-600"
                    }`}
                    href={group.href}
                    onClick={() => setOpen(false)}
                  >
                    {group.label}
                  </Link>
                  <div className="mt-2 grid gap-1">
                    {group.items.map((link) => (
                      <Link
                        className={`group/nav relative overflow-hidden rounded-2xl px-3 py-2 text-sm font-bold transition hover:bg-rescue-500 hover:text-white ${
                          pathname === link.href
                            ? "bg-rescue-500 text-white"
                            : "text-navy-950"
                        }`}
                        href={link.href}
                        key={link.href}
                        onClick={() => setOpen(false)}
                      >
                        <span className="absolute left-2 top-1/2 h-2 w-2 -translate-y-1/2 scale-0 rounded-full bg-rescue-500 opacity-0 transition group-hover/nav:scale-100 group-hover/nav:animate-ping group-hover/nav:bg-white group-hover/nav:opacity-100" />
                        <span className="relative block transition group-hover/nav:translate-x-3">
                          {link.label}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
              <div className="mt-5 grid grid-cols-2 gap-3">
                <ButtonLink href={company.phoneHref} variant="dark">
                  Call Now
                </ButtonLink>
                <ButtonLink href="/book-service">Book Now</ButtonLink>
              </div>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
