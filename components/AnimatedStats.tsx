"use client";

import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

const stats = [
  { label: "Google rating", value: 5, suffix: ".0" },
  { label: "Public Google reviews", value: 35, suffix: "+" },
  { label: "Emergency availability", value: 24, suffix: "/7" },
  { label: "Licensed restoration credentials", value: 2, suffix: "" }
];

export function AnimatedStats() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <StatCard key={stat.label} {...stat} />
      ))}
    </div>
  );
}

function StatCard({
  label,
  value,
  suffix
}: {
  label: string;
  value: number;
  suffix: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { stiffness: 80, damping: 20 });
  const display = useTransform(spring, (latest) => Math.round(latest).toString());

  useEffect(() => {
    if (inView) {
      motionValue.set(value);
    }
  }, [inView, motionValue, value]);

  return (
    <div
      className="group glass-card rounded-[2rem] p-6 text-center transition duration-300 hover:-translate-y-2 hover:scale-[1.04] hover:bg-rescue-500"
      ref={ref}
    >
      <p className="text-4xl font-black text-rescue-500 transition group-hover:text-white">
        <motion.span>{display}</motion.span>
        {suffix}
      </p>
      <p className="mt-3 text-sm font-black uppercase tracking-[0.16em] text-navy-950 transition group-hover:text-white/86">
        {label}
      </p>
    </div>
  );
}
