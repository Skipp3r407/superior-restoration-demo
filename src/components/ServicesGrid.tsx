"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { services } from "@/lib/utils";

export function ServicesGrid() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="section-shell">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-black uppercase tracking-[0.22em] text-orange">
            Restoration Services
          </p>
          <h2 className="mt-4 text-3xl font-black tracking-tight text-navy sm:text-5xl">
            Premium service pages for every emergency
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            Six core service cards with strong visual hierarchy, quick CTAs,
            and scalable route structure.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <motion.article
              className="group overflow-hidden rounded-[2rem] bg-white shadow-premium ring-1 ring-slate-100 transition hover:-translate-y-2 hover:ring-orange"
              initial={{ opacity: 0, y: 24 }}
              key={service.slug}
              transition={{ delay: index * 0.06 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <div className="relative h-60">
                <Image
                  alt={`${service.title} restoration`}
                  className="object-cover transition duration-700 group-hover:scale-110"
                  fill
                  sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                  src={service.image}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-black text-navy">{service.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{service.text}</p>
                <Link
                  className="mt-6 inline-flex rounded-full bg-navy px-5 py-3 text-sm font-black text-white transition hover:bg-orange"
                  href={`/services/${service.slug}`}
                >
                  Learn More
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
