"use client";

import { motion } from "motion/react";

import type { ReactNode } from "react";

type StaggerRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export function StaggerReveal({
  children,
  className = "",
  delay = 0.1,
}: StaggerRevealProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: false,
        amount: 0.15,
      }}
      variants={{
        hidden: {},

        visible: {
          transition: {
            staggerChildren: delay,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

type StaggerItemProps = {
  children: ReactNode;
  className?: string;
};

export function StaggerItem({ children, className = "" }: StaggerItemProps) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: {
          opacity: 0,
          y: 30,
          scale: 0.98,
        },

        visible: {
          opacity: 1,
          y: 0,
          scale: 1,

          transition: {
            duration: 0.6,

            ease: [0.25, 0.1, 0.25, 1],
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}
