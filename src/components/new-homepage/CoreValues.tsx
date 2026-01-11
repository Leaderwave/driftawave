
"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const values = ["Connection", "Adventure", "Growth", "Impact"];

export const CoreValues = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  return (
    <section ref={ref} className="relative h-[70vh] w-full overflow-hidden bg-canvas-dark">
      <div className="container mx-auto grid h-full grid-cols-2 gap-8 md:grid-cols-4">
        {values.map((value, index) => (
          <motion.div
            key={index}
            className="flex items-center justify-center"
            style={{ y }}
          >
            <h2 className="text-2xl md:text-4xl font-bold text-text-light">{value}</h2>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
