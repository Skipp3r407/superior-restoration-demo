"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

type RevealDirection = "up" | "left" | "right";

function hiddenState(direction: RevealDirection) {
  if (direction === "left") {
    return { opacity: 0, x: -56, y: 0 };
  }

  if (direction === "right") {
    return { opacity: 0, x: 56, y: 0 };
  }

  return { opacity: 0, x: 0, y: 34 };
}

function revealVariants(direction: RevealDirection): Variants {
  return {
    hidden: hiddenState(direction),
    visible: { opacity: 1, x: 0, y: 0 }
  };
}

export function Reveal({
  children,
  className,
  delay = 0,
  direction = "up"
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: RevealDirection;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.72, ease: [0.16, 1, 0.3, 1], delay }}
      variants={revealVariants(direction)}
    >
      {children}
    </motion.div>
  );
}

export function Stagger({
  children,
  className
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.14 }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.1
          }
        }
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
  direction = "up"
}: {
  children: ReactNode;
  className?: string;
  direction?: RevealDirection;
}) {
  return (
    <motion.div
      className={className}
      variants={revealVariants(direction)}
      transition={{ duration: 0.62, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
