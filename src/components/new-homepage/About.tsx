
"use client";

import Image from "next/image";

export const About = () => {
  return (
    <section className="bg-canvas-light py-20">
      <div className="container mx-auto grid grid-cols-1 items-center gap-8 md:grid-cols-2">
        <div className="space-y-4">
          <h2 className="text-4xl font-bold text-text-dark">
            Experts. Facilitators. Adventurers.
          </h2>
          <button className="rounded-full bg-brand-coral px-8 py-3 text-text-light">
            Learn Our Story
          </button>
        </div>
        <div className="relative h-96 w-full overflow-hidden rounded-2xl">
          <Image
            src="/homepage/New Website 3.4.jpg"
            alt="Driftawave team"
            fill className="object-cover"
          />
        </div>
      </div>
    </section>
  );
};
