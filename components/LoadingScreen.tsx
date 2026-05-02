"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { CheckCircle2, PhoneCall, ShieldCheck } from "lucide-react";
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
  const [finishing, setFinishing] = useState(false);
  const [step, setStep] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const stepTimer = window.setInterval(() => {
      setStep((current) => Math.min(current + 1, loadingSteps.length - 1));
    }, shouldReduceMotion ? 400 : 650);

    const finishTimer = window.setTimeout(() => {
      setFinishing(true);
      setStep(loadingSteps.length - 1);
    }, shouldReduceMotion ? 650 : 1500);

    const hideTimer = window.setTimeout(() => {
      setVisible(false);
    }, shouldReduceMotion ? 1200 : 3500);

    return () => {
      window.clearInterval(stepTimer);
      window.clearTimeout(finishTimer);
      window.clearTimeout(hideTimer);
    };
  }, [shouldReduceMotion]);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-[100] flex h-[100dvh] items-center justify-center overflow-x-hidden overflow-y-auto bg-white px-4 py-6 text-navy-950"
          exit={{ opacity: 0, transition: { duration: 0.45, ease: "easeInOut" } }}
          initial={{ opacity: 0 }}
        >
          <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-rescue-500/12 blur-3xl sm:h-96 sm:w-96" />
          <div className="absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-navy-500/12 blur-3xl sm:h-96 sm:w-96" />
          <div className="absolute inset-0 opacity-60 [background-image:linear-gradient(rgba(3,26,54,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(3,26,54,0.04)_1px,transparent_1px)] [background-size:46px_46px]" />
          <motion.div
            animate={shouldReduceMotion ? undefined : { scale: [1, 1.08, 1] }}
            className="absolute h-72 w-72 rounded-full border border-rescue-400/20 sm:h-[30rem] sm:w-[30rem]"
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          />

          <motion.div
            animate={{
              y: 0,
              opacity: 1,
              scale: finishing && !shouldReduceMotion ? 0.98 : 1
            }}
            className="relative z-10 my-auto max-h-[calc(100dvh-3rem)] w-full max-w-lg overflow-x-hidden overflow-y-auto rounded-[2rem] border border-white/70 bg-white/86 p-5 text-center backdrop-blur-2xl sm:p-8"
            initial={{ y: 18, opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
          >
            <motion.div
              animate={{ opacity: finishing ? 0 : 1, y: finishing ? -8 : 0 }}
              className="mx-auto mb-5 inline-flex items-center gap-2 rounded-full border border-rescue-400/30 bg-rescue-500/15 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-rescue-400"
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <ShieldCheck className="h-4 w-4" />
              Emergency-ready
            </motion.div>

            <motion.div
              animate={
                finishing && !shouldReduceMotion
                  ? { scale: 2, y: -10 }
                  : { scale: 1, y: 0 }
              }
              className="relative mx-auto h-16 w-60 max-w-full overflow-hidden sm:h-24 sm:w-80"
              transition={{ duration: 1.85, ease: "easeInOut" }}
            >
              <Image
                alt={`${company.name} logo`}
                className="object-contain"
                fill
                priority
                sizes="288px"
                src={company.logo}
              />
            </motion.div>

            <motion.div
              animate={{ opacity: finishing ? 0 : 1, y: finishing ? 10 : 0 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              <p className="mt-5 text-xs font-black uppercase tracking-[0.24em] text-rescue-600 sm:mt-7 sm:text-sm">
                24/7 Restoration Response
              </p>
              <h2 className="mt-3 text-2xl font-black tracking-tight sm:text-4xl">
                Getting Help Ready
              </h2>
              <motion.p
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 min-h-7 text-sm font-semibold text-slate-600"
                initial={{ opacity: 0, y: 8 }}
                key={loadingSteps[step]}
              >
                {loadingSteps[step]}
              </motion.p>
            </motion.div>

            <motion.div
              animate={{ opacity: finishing ? 0 : 1, y: finishing ? 12 : 0 }}
              className="mt-5 flex flex-col items-center justify-center gap-2 rounded-3xl bg-navy-50 p-3 text-sm font-bold text-navy-950 sm:mt-6 sm:flex-row sm:gap-3 sm:p-4"
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <span className="inline-flex items-center gap-2">
                <PhoneCall className="h-4 w-4 text-rescue-500" />
                {company.phone}
              </span>
              <span className="hidden h-4 w-px bg-navy-100 sm:block" />
              <span className="inline-flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-rescue-500" />
                Free estimate requests
              </span>
            </motion.div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
