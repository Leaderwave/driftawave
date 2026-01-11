"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

const energies = [
  {
    title: "Ocean Motion",
    description:
      "When ideas flow like the tide and strategies merge from the depth. What on earth is stopping you from planning your next offsite?",
    image: "/homepage/ocean-motion.jpg", // Replace with actual image path
  },
  {
    title: "Mountain AIR",
    description:
      "Catch a breath Ya'll. There's POW mountains and nature hikes to scout! Let's get active together!",
    image: "/homepage/mountain-air.jpg", // Replace with actual image path
  },
  {
    title: "Creative Pulsequake",
    description:
      "Ready to shake things up? Let's hop on an urban art scout. Share the mysteries along.",
    image: "/homepage/creative-pulse.jpg", // Replace with actual image path
  },
  {
    title: "Wild & Rooted",
    description:
      "There's nothing more humbling than being in nature. Find balance watching the fire dance. Moments of connection truly matter.",
    image: "/homepage/wild-rooted.jpg", // Replace with actual image path
  },
  {
    title: "Edge of Comfort",
    description:
      "Ready to push boundaries? Fly on energy! Growth mindset was never found in the predictable.",
    image: "/homepage/edge-comfort.jpg", // Replace with actual image path
  },
];

export const OffsiteEnergiesDoc = () => {
  return (
    <section id="company-offsites" className="bg-warm-beige py-20 md:py-28">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="font-sans font-extrabold text-4xl md:text-[56px] leading-[1.1] text-[#121412] mb-6">
            OFFSITE ENERGIES
          </h2>
          <p className="font-serif text-lg md:text-xl text-gray-dark leading-relaxed max-w-3xl mx-auto">
            Choose the energy that matches your team's vibe and goals.
          </p>
        </div>

        {/* Energy Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {energies.map((energy, index) => (
            <div
              key={index}
              className="group relative h-[500px] rounded-[32px] overflow-hidden bg-gray-200"
            >
              {/* Placeholder for image - replace with actual images */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/70"></div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-8">
                {/* Accent Line */}
                <div className="w-full h-1 bg-brand-lime mb-6"></div>

                {/* Title */}
                <h3 className="font-sans font-bold text-white text-2xl md:text-3xl mb-4">
                  {energy.title}
                </h3>

                {/* Description */}
                <p className="font-serif text-white/90 text-base leading-relaxed">
                  {energy.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-12 flex justify-center">
          <button className="group inline-flex items-center justify-between gap-4 rounded-full bg-brand-coral pl-6 pr-2 py-3 text-sm font-bold text-white transition-all duration-300 hover:shadow-md">
            <span>Explore Offsite Energies</span>
            <div className="bg-white rounded-full p-2.5 flex items-center justify-center transition-transform duration-300 ease-in-out group-hover:scale-110">
              <ArrowRight className="h-4 w-4 text-brand-coral" strokeWidth={2.5} />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};
