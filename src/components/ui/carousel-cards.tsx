"use client";

import { motion, useMotionValue } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";

export const CarouselCards = ({
  items,
  className,
}: {
  items: { title: string; subtitle: string; image: string }[];
  className?: string;
}) => {
  const [active, setActive] = useState(0);
  const x = useMotionValue(0);

  return (
    <div className={cn("relative w-full overflow-hidden", className)}>
      <div className="flex gap-4 md:gap-6">
        {items.map((item, index) => (
          <motion.div
            key={index}
            className="relative flex-shrink-0 w-[280px] md:w-[320px] cursor-pointer"
            whileHover={{ scale: 1.02 }}
            onClick={() => setActive(index)}
          >
            <div className="rounded-xl overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="aspect-[3/4] object-cover w-full"
              />
            </div>
            <div className="mt-3 text-center">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-sm text-gray-600 max-w-[18ch] mx-auto">
                {item.subtitle}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
