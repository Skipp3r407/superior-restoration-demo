"use client";

import { motion } from "framer-motion";
import { processSteps } from "@/lib/utils";

export function ProcessTimeline() {
  return (
    <section className="bg-slate-50 py-20 sm:py-24">
      <div className="section-shell">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-black uppercase tracking-[0.22em] text-orange">
            Our Process
          </p>
          <h2 className="mt-4 text-3xl font-black tracking-tight text-navy sm:text-5xl">
            Simple steps from emergency to restored
          </h2>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-4">
          {processSteps.map((step, index) => (
            <motion.div
              className="glass-card rounded-[2rem] p-6"
              initial={{ opacity: 0, y: 24 }}
              key={step}
              transition={{ delay: index * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <div className="grid h-14 w-14 place-items-center rounded-2xl bg-orange text-xl font-black text-white">
                {index + 1}
              </div>
              <h3 className="mt-6 text-xl font-black text-navy">{step}</h3>
              <p className="mt-3 leading-7 text-slate-600">
                Clear communication, photo-supported intake, and a focused plan
                keep the job moving.
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
