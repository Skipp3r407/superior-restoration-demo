"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [active, setActive] = useState(false);
  const [pressed, setPressed] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const ringX = useSpring(cursorX, { stiffness: 420, damping: 34 });
  const ringY = useSpring(cursorY, { stiffness: 420, damping: 34 });

  useEffect(() => {
    const mediaQuery = window.matchMedia("(hover: hover) and (pointer: fine)");

    const interactiveSelector =
      "a, button, input, textarea, select, summary, [role='button']";

    const onMove = (event: MouseEvent) => {
      cursorX.set(event.clientX);
      cursorY.set(event.clientY);
      setActive(Boolean((event.target as Element | null)?.closest(interactiveSelector)));
    };
    const onDown = () => setPressed(true);
    const onUp = () => setPressed(false);
    const syncEnabled = () => {
      const canHover = mediaQuery.matches;
      setEnabled(canHover);

      if (!canHover) {
        setActive(false);
        setPressed(false);
      }
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    mediaQuery.addEventListener("change", syncEnabled);
    window.requestAnimationFrame(syncEnabled);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      mediaQuery.removeEventListener("change", syncEnabled);
    };
  }, [cursorX, cursorY]);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[120] h-3 w-3 rounded-full bg-rescue-500 mix-blend-multiply"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%"
        }}
      />
      <motion.div
        aria-hidden="true"
        animate={{
          scale: pressed ? 0.72 : active ? 1.65 : 1,
          opacity: active ? 0.36 : 0.72
        }}
        className="pointer-events-none fixed left-0 top-0 z-[119] h-9 w-9 rounded-full border-2 border-rescue-500 shadow-[0_0_28px_rgba(232,31,55,0.34)]"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%"
        }}
        transition={{ duration: 0.18 }}
      />
    </>
  );
}
