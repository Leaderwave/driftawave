"use client";

import React from "react";
// import Image from "next/image"; // Uncomment when adding actual images
import { Badge } from "@/components/ui/badge";

// Placeholder image data - to be replaced with actual images
const images = [
  {
    src: "/placeholder-retreat-1.jpg",
    alt: "Team retreat activity",
    badge: true,
  },
  {
    src: "/placeholder-retreat-2.jpg",
    alt: "Scenic retreat location",
    badge: false,
  },
  {
    src: "/placeholder-retreat-3.jpg",
    alt: "Workshop session",
    badge: false,
  },
  {
    src: "/placeholder-retreat-4.jpg",
    alt: "Team building exercise",
    badge: false,
  },
  {
    src: "/placeholder-retreat-5.jpg",
    alt: "Outdoor adventure",
    badge: false,
  },
  {
    src: "/placeholder-retreat-6.jpg",
    alt: "Evening celebration",
    badge: false,
  },
];

export const ImageGrid = () => {
  return (
    <section className="bg-[#F3F0EB] py-20">
      <div className="container mx-auto px-4">
        {/* 3-column responsive grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative aspect-square rounded-[32px] overflow-hidden group cursor-pointer"
            >
              {/* Placeholder background for images */}
              <div className="absolute inset-0 bg-muted flex items-center justify-center">
                <span className="text-muted-foreground font-serif text-sm">
                  {image.alt}
                </span>
              </div>

              {/* Uncomment when actual images are available
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              */}

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Featured Badge - only on first image */}
              {image.badge && (
                <Badge className="absolute top-4 right-4 bg-[#FFA64C] text-white border-none px-3 py-1.5 font-mono text-xs shadow-lg z-10">
                  Featured Retreat
                </Badge>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
