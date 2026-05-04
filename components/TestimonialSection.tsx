"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Quote, Star, X } from "lucide-react";
import { useState } from "react";
import { ButtonLink } from "@/components/Button";
import { Reveal, Stagger, StaggerItem } from "@/components/Motion";
import { SectionHeading } from "@/components/SectionHeading";
import { company, testimonials } from "@/lib/site";

type Testimonial = (typeof testimonials)[number];

export function TestimonialSection() {
  const [selectedTestimonial, setSelectedTestimonial] =
    useState<Testimonial | null>(null);

  return (
    <section className="bg-navy-50 py-20 sm:py-24">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Google Reviews"
          text={`Superior Restoration Services is shown with a ${company.googleRating} Google rating from ${company.googleReviewCount} public reviews.`}
          title="Customer experiences from Google review highlights"
        />
        <Reveal direction="right">
          <div className="group mx-auto mt-8 flex max-w-3xl flex-col items-center gap-4 rounded-[2rem] bg-white p-5 text-center shadow-sm ring-1 ring-navy-100 transition duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:bg-rescue-500 hover:shadow-[0_28px_80px_rgba(232,31,55,0.24)] sm:flex-row sm:justify-between sm:text-left">
            <div>
              <div className="flex justify-center gap-1 text-rescue-500 transition group-hover:text-white sm:justify-start">
                {[...Array(5)].map((_, index) => (
                  <Star className="h-5 w-5 fill-current" key={index} />
                ))}
              </div>
              <p className="mt-2 text-2xl font-black text-navy-950 transition group-hover:text-white">
                {company.googleRating} Google Rating
              </p>
              <p className="text-sm font-bold text-slate-500 transition group-hover:text-white/78">
                Based on {company.googleReviewCount} public Google reviews
              </p>
            </div>
            <ButtonLink href={company.googleReviewsHref} variant="dark">
              View Google Reviews
            </ButtonLink>
          </div>
        </Reveal>
        <Stagger className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {testimonials.map((item, index) => (
            <StaggerItem direction={index % 3 === 0 ? "left" : index % 3 === 1 ? "up" : "right"} key={item.name}>
              <button
                className="group glass-card h-full w-full rounded-[2rem] p-6 text-left transition duration-300 hover:-translate-y-2 hover:scale-[1.04] hover:border-rescue-500 hover:bg-rescue-500 focus:outline-none focus:ring-2 focus:ring-rescue-500 focus:ring-offset-4"
                onClick={() => setSelectedTestimonial(item)}
                type="button"
              >
                <div className="flex items-center justify-between gap-4">
                  <Quote className="h-8 w-8 text-rescue-500 transition group-hover:text-white" />
                  <div className="flex gap-0.5 text-rescue-500 transition group-hover:text-white">
                    {[...Array(5)].map((_, index) => (
                      <Star className="h-4 w-4 fill-current" key={index} />
                    ))}
                  </div>
                </div>
                <p className="mt-5 text-lg leading-8 text-slate-700 transition group-hover:text-white">
                  “{item.quote}”
                </p>
                <div className="mt-6 border-t border-navy-100 pt-5 transition group-hover:border-white/30">
                  <p className="font-black text-navy-950 transition group-hover:text-white">{item.name}</p>
                  <p className="text-sm font-bold text-slate-500 transition group-hover:text-white/85">{item.context}</p>
                </div>
                <p className="mt-4 text-xs font-black uppercase tracking-[0.16em] text-rescue-500 opacity-0 transition group-hover:text-white group-hover:opacity-100">
                  Click to read larger
                </p>
              </button>
            </StaggerItem>
          ))}
        </Stagger>
      </div>

      <AnimatePresence>
        {selectedTestimonial ? (
          <motion.div
            animate={{ opacity: 1 }}
            className="fixed inset-0 z-[90] grid place-items-center bg-navy-950/70 px-4 py-8 backdrop-blur-sm"
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
            onClick={() => setSelectedTestimonial(null)}
          >
            <motion.article
              animate={{ opacity: 1, scale: 1, y: 0 }}
              className="relative w-full max-w-2xl rounded-[2rem] bg-rescue-500 p-6 text-white shadow-[0_34px_100px_rgba(3,26,54,0.42)] sm:p-8"
              exit={{ opacity: 0, scale: 0.96, y: 16 }}
              initial={{ opacity: 0, scale: 0.96, y: 16 }}
              onClick={(event) => event.stopPropagation()}
            >
              <button
                aria-label="Close testimonial"
                className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-white/14 text-white transition hover:bg-white hover:text-rescue-600"
                onClick={() => setSelectedTestimonial(null)}
                type="button"
              >
                <X className="h-5 w-5" />
              </button>
              <div className="flex items-center gap-3 pr-12">
                <Quote className="h-10 w-10 shrink-0 text-white" />
                <div className="flex gap-1 text-white">
                  {[...Array(5)].map((_, index) => (
                    <Star className="h-5 w-5 fill-current" key={index} />
                  ))}
                </div>
              </div>
              <p className="mt-6 text-2xl font-bold leading-10 sm:text-3xl sm:leading-[3rem]">
                “{selectedTestimonial.quote}”
              </p>
              <div className="mt-8 border-t border-white/25 pt-6">
                <p className="text-xl font-black">{selectedTestimonial.name}</p>
                <p className="mt-1 text-sm font-bold uppercase tracking-[0.16em] text-white/80">
                  {selectedTestimonial.context}
                </p>
              </div>
            </motion.article>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
