"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface RevealTextProps {
  children: string;
  delay?: number;
  className?: string;
}

export const RevealText = ({ children, delay = 0, className = "" }: RevealTextProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <span ref={ref} className={`relative inline-block overflow-hidden ${className}`}>
      <motion.span
        initial={{ y: "100%" }}
        animate={isInView ? { y: 0 } : { y: "100%" }}
        transition={{
          duration: 0.8,
          ease: [0.16, 1, 0.3, 1], // Appleのような滑らかなイージング
          delay: delay,
        }}
        className="inline-block"
      >
        {children}
      </motion.span>
    </span>
  );
};

