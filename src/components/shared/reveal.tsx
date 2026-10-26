"use client";

import * as React from "react";
import { motion, useReducedMotion, type HTMLMotionProps } from "framer-motion";

import { cn } from "@/lib/utils";

type RevealProps = Omit<HTMLMotionProps<"div">, "children"> & {
  children: React.ReactNode;
  /** Stagger index — multiplied by 0.08s. */
  index?: number;
  delay?: number;
  y?: number;
  as?: "div" | "section" | "li" | "article" | "span";
};

/**
 * Scroll-triggered fade + rise. Honours prefers-reduced-motion by rendering
 * the content statically rather than animating it.
 */
export function Reveal({
  children,
  className,
  index = 0,
  delay = 0,
  y = 22,
  as = "div",
  ...props
}: RevealProps) {
  const reduceMotion = useReducedMotion();
  const MotionTag = motion[as] as typeof motion.div;

  if (reduceMotion) {
    const Tag = as;
    return <Tag className={cn(className)}>{children}</Tag>;
  }

  return (
    <MotionTag
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.7,
        delay: delay + index * 0.08,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      className={cn(className)}
      {...props}
    >
      {children}
    </MotionTag>
  );
}
