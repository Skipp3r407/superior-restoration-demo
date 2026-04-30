"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { phoneHref } from "@/lib/utils";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-navy py-20 text-white sm:py-28 lg:py-32">
      <Image
        alt="Restoration crew preparing equipment"
        className="absolute inset-0 -z-20 object-cover opacity-34"
        fill
        priority
        sizes="100vw"
        src="https://images.unsplash.com/photo-1605152276897-4f618f831968?auto=format&fit=crop&w=1800&q=85"
      />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(249,115,22,0.32),transparent_34%),linear-gradient(110deg,#0f172a_20%,rgba(15,23,42,0.76))]" />
      <div className="section-shell">
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl"
          initial={{ opacity: 0, y: 28 }}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-5 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-black uppercase tracking-[0.2em] text-orange backdrop-blur">
            24/7 Emergency Restoration
          </p>
          <h1 className="text-4xl font-black tracking-tight sm:text-6xl lg:text-7xl">
            Fast, Reliable Restoration Services When Every Minute Matters
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/76 sm:text-xl">
            Water, fire, mold, storm, and commercial restoration support with a
            premium booking flow built to convert emergency visitors fast.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              className="rounded-full bg-orange px-7 py-4 text-center font-black text-white shadow-premium transition hover:-translate-y-1 hover:bg-orange/90"
              href="/booking"
            >
              Get Free Estimate
            </Link>
            <a
              className="rounded-full border border-white/30 bg-white/10 px-7 py-4 text-center font-black text-white backdrop-blur transition hover:-translate-y-1 hover:bg-white hover:text-navy"
              href={phoneHref}
            >
              Call Now
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
