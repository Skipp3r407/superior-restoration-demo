"use client";

import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

const particles = [
  { left: "8%", top: "18%", delay: 0, size: "h-1.5 w-1.5" },
  { left: "18%", top: "72%", delay: 0.8, size: "h-2 w-2" },
  { left: "34%", top: "36%", delay: 1.4, size: "h-1 w-1" },
  { left: "52%", top: "14%", delay: 0.4, size: "h-1.5 w-1.5" },
  { left: "68%", top: "64%", delay: 1.1, size: "h-2 w-2" },
  { left: "84%", top: "28%", delay: 0.7, size: "h-1 w-1" },
  { left: "92%", top: "78%", delay: 1.8, size: "h-1.5 w-1.5" }
];

export function InteractiveBackground() {
  const mouseX = useMotionValue(50);
  const mouseY = useMotionValue(50);
  const smoothX = useSpring(mouseX, { stiffness: 90, damping: 26 });
  const smoothY = useSpring(mouseY, { stiffness: 90, damping: 26 });
  const spotlight = useMotionTemplate`radial-gradient(circle at ${smoothX}% ${smoothY}%, rgba(232,31,55,0.16), rgba(14,76,149,0.08) 22%, transparent 46%)`;

  useEffect(() => {
    const onMove = (event: MouseEvent) => {
      mouseX.set((event.clientX / window.innerWidth) * 100);
      mouseY.set((event.clientY / window.innerHeight) * 100);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [mouseX, mouseY]);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[6] overflow-hidden"
    >
      <motion.div className="absolute inset-0 opacity-80" style={{ background: spotlight }} />
      <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(232,31,55,0.65)_1px,transparent_1px),linear-gradient(90deg,rgba(14,76,149,0.72)_1px,transparent_1px)] [background-size:72px_72px]" />

      <motion.div
        animate={{ x: [0, 38, -18, 0], y: [0, -28, 18, 0], scale: [1, 1.08, 0.96, 1] }}
        className="absolute -left-24 top-24 h-72 w-72 rounded-full bg-rescue-500/10 blur-3xl"
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        animate={{ x: [0, -42, 24, 0], y: [0, 34, -20, 0], scale: [1, 0.95, 1.12, 1] }}
        className="absolute -right-24 top-1/3 h-80 w-80 rounded-full bg-navy-500/12 blur-3xl"
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        animate={{ x: [0, 24, -30, 0], y: [0, -18, 30, 0], scale: [1, 1.1, 0.98, 1] }}
        className="absolute bottom-10 left-1/3 h-64 w-64 rounded-full bg-rescue-400/8 blur-3xl"
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      {particles.map((particle) => (
        <motion.span
          animate={{ opacity: [0.18, 0.85, 0.18], scale: [1, 1.7, 1], y: [0, -16, 0] }}
          className={`absolute rounded-full bg-rescue-500 shadow-[0_0_18px_rgba(232,31,55,0.55)] ${particle.size}`}
          key={`${particle.left}-${particle.top}`}
          style={{ left: particle.left, top: particle.top }}
          transition={{
            delay: particle.delay,
            duration: 3.6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
}
