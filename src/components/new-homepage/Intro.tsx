
"use client";

import Image from "next/image";

export const Intro = () => {
  return (
    <section className="bg-canvas-light py-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="md:col-span-1">
            <p className="mb-4 text-sm font-bold uppercase tracking-widest text-brand-coral">
              BEHIND THE EXPERIENCE
            </p>
            <h2 className="text-4xl font-bold text-text-dark">
              Designing Moments That Drive Momentum
            </h2>
          </div>
          <div className="md:col-span-1">
            <p className="text-lg text-text-dark/80">
              We believe the most powerful breakthroughs happen outside the
              office. Our retreats are meticulously crafted to blend strategic
              work sessions with authentic local experiences, fostering deep
              connection and lasting alignment for your team.
            </p>
          </div>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="relative h-80 w-full overflow-hidden rounded-2xl">
            <Image
              src="/team-retreat-1.jpg"
              alt="Team workshop"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative h-80 w-full overflow-hidden rounded-2xl">
            <Image
              src="/team-retreat-2.jpg"
              alt="Kayaking adventure"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative h-80 w-full overflow-hidden rounded-2xl">
            <Image
              src="/hero-background.jpg"
              alt="Team dinner"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
