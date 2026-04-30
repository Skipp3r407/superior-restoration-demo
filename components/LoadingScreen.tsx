"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { company } from "@/lib/site";

const loadingSteps = [
  "Dispatching emergency response...",
  "Preparing restoration equipment...",
  "Checking service availability...",
  "Ready to help restore your property."
];

export function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const [step, setStep] = useState(0);

  useEffect(() => {
    const stepTimer = window.setInterval(() => {
      setStep((current) => Math.min(current + 1, loadingSteps.length - 1));
    }, 900);

    const hideTimer = window.setTimeout(() => {
      setVisible(false);
    }, 4000);

    return () => {
      window.clearInterval(stepTimer);
      window.clearTimeout(hideTimer);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-[100] grid place-items-center overflow-hidden bg-white text-navy-950"
          exit={{ opacity: 0, transition: { duration: 0.55, ease: "easeInOut" } }}
          initial={{ opacity: 1 }}
        >
          <div className="absolute -left-24 top-16 h-72 w-72 rounded-full bg-rescue-500/10 blur-3xl" />
          <div className="absolute -right-24 bottom-16 h-72 w-72 rounded-full bg-navy-500/10 blur-3xl" />
          <div className="absolute inset-0 opacity-45 [background-image:linear-gradient(rgba(3,26,54,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(3,26,54,0.035)_1px,transparent_1px)] [background-size:54px_54px]" />

          <motion.div
            animate={{ y: 0, opacity: 1, scale: 1 }}
            className="relative z-10 mx-4 w-full max-w-md p-8 text-center"
            initial={{ y: 18, opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
          >
            <div className="relative mx-auto h-24 w-80 max-w-full overflow-hidden">
              <Image
                alt={`${company.name} logo`}
                className="object-contain"
                fill
                priority
                sizes="288px"
                src={company.logo}
              />
            </div>

            <p className="mt-8 text-sm font-black uppercase tracking-[0.24em] text-rescue-600">
              24/7 Restoration Response
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight">
              Loading Your Emergency Help Center
            </h2>
            <motion.p
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 min-h-7 text-sm font-semibold text-slate-600"
              initial={{ opacity: 0, y: 8 }}
              key={loadingSteps[step]}
            >
              {loadingSteps[step]}
            </motion.p>

            <div className="mt-8 h-2 overflow-hidden rounded-full bg-navy-100">
              <motion.div
                animate={{ width: "100%" }}
                className="h-full rounded-full bg-gradient-to-r from-navy-700 via-rescue-500 to-navy-500"
                initial={{ width: "0%" }}
                transition={{ duration: 3.8, ease: "easeInOut" }}
              />
            </div>
            <p className="mt-4 text-xs font-bold text-slate-500">
              For emergencies, call {company.phone}
            </p>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
