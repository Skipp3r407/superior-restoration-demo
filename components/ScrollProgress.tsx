"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 28,
    restDelta: 0.001
  });
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 720);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.div
        className="fixed left-0 right-0 top-0 z-[70] h-1 origin-left bg-gradient-to-r from-rescue-500 via-rescue-600 to-navy-500"
        style={{ scaleX }}
      />
      <button
        aria-label="Back to top"
        className={`fixed bottom-44 right-4 z-40 grid h-11 w-11 place-items-center rounded-full bg-white text-navy-950 shadow-premium ring-1 ring-navy-100 transition md:bottom-24 ${
          showTop
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-3 opacity-0"
        }`}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        type="button"
      >
        <ArrowUp className="h-5 w-5" />
      </button>
    </>
  );
}
