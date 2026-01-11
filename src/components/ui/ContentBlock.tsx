"use client";

import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface ContentBlockProps {
  title: string;
  subtitle?: string;
  content: string; // Markdown or plain text
  image?: string;
  imageAlt?: string;
  imageSide?: "left" | "right";
  className?: string;
}

export function ContentBlock({
  title,
  subtitle,
  content,
  image,
  imageAlt = "Content Image",
  imageSide = "right",
  className,
}: ContentBlockProps) {
  return (
    <section className={cn("py-16 md:py-24 px-4 md:px-8 bg-background", className)}>
      <div className="max-w-7xl mx-auto">
        <div className={cn(
          "flex flex-col gap-12 items-center",
          imageSide === "left" ? "lg:flex-row-reverse" : "lg:flex-row"
        )}>
          {/* Text Content */}
          <div className="flex-1 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {subtitle && (
                <span className="text-brand-coral font-bold tracking-widest uppercase text-sm mb-2 block">
                  {subtitle}
                </span>
              )}
              <h2 className="text-4xl md:text-5xl font-brush text-brand-ink mb-6">
                {title}
              </h2>
              <div 
                className="prose prose-lg text-muted-foreground font-serif leading-relaxed"
                dangerouslySetInnerHTML={{ __html: content }} // TODO: Sanitize if using user input
              />
            </motion.div>
          </div>

          {/* Image */}
          {image && (
            <motion.div 
              className="flex-1 w-full"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-xl">
                <Image
                  src={image}
                  alt={imageAlt}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
