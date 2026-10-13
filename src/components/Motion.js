import React from "react";
import { motion } from "framer-motion";

// Shared motion vocabulary: short, transform/opacity only, ease-out so things arrive quickly and settle.
// MotionConfig reducedMotion="user" (App.js) turns these into instant changes for reduced-motion visitors.
export const EASE_OUT = [0.22, 1, 0.36, 1];

/** Fades and lifts its content in the first time it scrolls into view. `delay` staggers siblings. */
export function Reveal({ children, delay = 0, y = 14, as = "div", className, style }) {
  const Tag = motion[as] || motion.div;
  return (
    <Tag
      className={className}
      style={style}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -6% 0px" }}
      transition={{ duration: 0.38, ease: EASE_OUT, delay: Math.min(delay, 0.3) }}
    >
      {children}
    </Tag>
  );
}

/** Enter animation for each route. No exit animation: navigation never waits on the old page. */
export function PageTransition({ children }) {
  return (
    <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.24, ease: EASE_OUT }}>
      {children}
    </motion.div>
  );
}
