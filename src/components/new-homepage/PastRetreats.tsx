
"use client";

import Image from "next/image";

const images = [
  "/homepage/New Website 2.4.png",
  "/homepage/New Website 3.1.png",
  "/homepage/New Website 3.2.png",
  "/homepage/New Website 3.3.png",
];

export const PastRetreats = () => {
  return (
    <section className="bg-canvas-light py-20">
      <div className="container mx-auto">
        <h2 className="mb-12 text-center text-4xl font-bold text-text-dark">
          Glimpses of Past Retreats
        </h2>
        <div className="flex space-x-8 overflow-x-auto">
          {images.map((src, index) => (
            <div
              key={index}
              className="relative h-80 w-96 flex-shrink-0 overflow-hidden rounded-2xl"
            >
              <Image
                src={src}
                alt={`Past retreat image ${index + 1}`}
                fill className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
