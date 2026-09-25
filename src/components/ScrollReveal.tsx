"use client";

import { motion, type Variants } from "motion/react";

import type { ReactNode } from "react";

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;

  direction?: "up" | "down" | "left" | "right" | "none";

  delay?: number;
  duration?: number;
  distance?: number;

  /*
   * false = animation repeats whenever
   * the element enters the viewport.
   */
  once?: boolean;
};

export default function ScrollReveal({
  children,
  className = "",
  direction = "up",
  delay = 0,
  duration = 0.65,
  distance = 35,
  once = false,
}: ScrollRevealProps) {
  const getInitialPosition = () => {
    switch (direction) {
      case "down":
        return {
          x: 0,
          y: -distance,
        };

      case "left":
        return {
          x: distance,
          y: 0,
        };

      case "right":
        return {
          x: -distance,
          y: 0,
        };

      case "none":
        return {
          x: 0,
          y: 0,
        };

      case "up":
      default:
        return {
          x: 0,
          y: distance,
        };
    }
  };

  const initialPosition = getInitialPosition();

  const variants: Variants = {
    hidden: {
      opacity: 0,
      x: initialPosition.x,
      y: initialPosition.y,
    },

    visible: {
      opacity: 1,
      x: 0,
      y: 0,

      transition: {
        duration,
        delay,

        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once,
        amount: 0.15,
      }}
    >
      {children}
    </motion.div>
  );
}
