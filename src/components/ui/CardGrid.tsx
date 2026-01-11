"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

export interface CardItem {
  title: string;
  description?: string;
  image: string;
  link: string;
  badge?: string;
  icon?: string;
}

interface CardGridProps {
  items: CardItem[];
  columns?: 2 | 3 | 4;
}

export function CardGrid({ items, columns = 3 }: CardGridProps) {
  const gridCols = {
    2: "md:grid-cols-2",
    3: "md:grid-cols-2 lg:grid-cols-3",
    4: "md:grid-cols-2 lg:grid-cols-4",
  };

  return (
    <section className="py-16 px-6 bg-gray-50/50">
      <div className="max-w-7xl mx-auto">
        <div className={cn("grid gap-8", gridCols[columns])}>
          {items.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="group h-full"
            >
              <Link href={item.link} className="block h-full">
                <div className="relative h-full bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 flex flex-col">
                  {/* Image Container */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
                    
                    {/* Badge */}
                    {item.badge && (
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-white/90 text-brand-ink hover:bg-white backdrop-blur-md">
                          {item.badge}
                        </Badge>
                      </div>
                    )}
                    
                    {/* Icon */}
                    {item.icon && (
                      <div className="absolute top-4 left-4 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-xl text-white">
                        {item.icon}
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-brush text-brand-ink mb-2 group-hover:text-brand-coral transition-colors">
                        {item.title}
                      </h3>
                      {item.description && (
                        <p className="text-muted-foreground font-serif line-clamp-3">
                          {item.description}
                        </p>
                      )}
                    </div>
                    
                    <div className="mt-4 pt-4 border-t border-gray-100 flex items-center text-brand-coral font-semibold text-sm">
                      Learn More <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
