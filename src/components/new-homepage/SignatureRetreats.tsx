"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

const retreats = [
  {
    title: "The Vineyard Valley Innovators Retreat",
    description: "A blend of strategic workshops and wine-tasting set against rolling vineyards. Perfect for leadership alignment and creative brainstorming.",
    image: "/homepage/vineyard_retreat_venue.png",
    imageLeft: true,
  },
  {
    title: "The Coastal Creative Wave",
    description: "Harness the energy of the ocean with a retreat focused on agile innovation and team flow states, featuring surf lessons and beachside hackathons.",
    image: "/homepage/innovation_and_flow_team_retreat.png",
    imageLeft: false,
  },
  {
    title: "The Alpine Leadership Summit",
    description: "Elevate your leadership team's vision amidst stunning mountain peaks. A rugged yet luxurious experience combining high-altitude treks with deep strategic planning.",
    image: "/homepage/New Website 2.6.png",
    imageLeft: true,
  },
];

export const SignatureRetreats = () => {
  return (
    <section className="bg-warm-beige py-20 md:py-28">
      <div className="container mx-auto px-6">
        {/* Section Header - 2 Column Layout (Folioblox Style) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-20 md:mb-28">
          {/* Left Column (55% / 7 cols) */}
          <div className="md:col-span-7">
            <p className="font-serif text-lg text-brand-lime mb-4">
              Curated Experiences
            </p>
            <h2 className="font-sans font-extrabold text-4xl md:text-[56px] leading-[1.1] text-[#121412]">
              Signature Retreats
            </h2>
          </div>
          {/* Right Column (40% / 5 cols) */}
          <div className="md:col-span-5 flex items-end">
            <p className="font-serif text-lg md:text-xl text-gray-dark leading-relaxed">
              A blend of strategic workshops set against rolling vineyards. Perfect for leadership alignment.
            </p>
          </div>
        </div>

        {/* Retreat Rows (Zigzag Layout) */}
        <div className="space-y-24 md:space-y-40">
          {retreats.map((retreat, index) => (
            <div
              key={index}
              className="grid grid-cols-1 items-center gap-8 md:gap-12 md:grid-cols-5"
            >
              {/* Image (60% / 3 cols) */}
              <div
                className={`group relative h-[400px] md:h-[500px] w-full overflow-hidden rounded-4xl md:col-span-3 ${
                  retreat.imageLeft ? "md:order-1" : "md:order-2"
                }`}
                style={{
                  boxShadow: "0 20px 40px -10px rgba(0, 0, 0, 0.1)",
                }}
              >
                <Image
                  src={retreat.image}
                  alt={retreat.title}
                  fill
                  className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                />
              </div>

              {/* Text Content (40% / 2 cols) */}
              <div
                className={`space-y-6 md:col-span-2 ${
                  retreat.imageLeft ? "md:order-2" : "md:order-1"
                }`}
              >
                {/* Accent Line - Lime Green 4px */}
                <div className="w-full h-1 bg-brand-lime mb-6"></div>

                {/* Title */}
                <h3 className="font-sans text-2xl md:text-3xl font-bold text-[#121412] leading-tight">
                  {retreat.title}
                </h3>

                {/* Description */}
                <p className="font-serif text-base md:text-lg text-[#555] leading-relaxed">
                  {retreat.description}
                </p>

                {/* Button - Pill Shape with Lime Green Circle */}
                <button className="group inline-flex items-center justify-between gap-4 rounded-full bg-gray-light pl-6 pr-2 py-3 text-sm font-bold text-black transition-all duration-300 hover:shadow-md mt-4">
                  <span>View Experience</span>
                  <div className="bg-brand-lime rounded-full p-2.5 flex items-center justify-center transition-transform duration-300 ease-in-out group-hover:scale-110">
                    <ArrowRight className="h-4 w-4 text-black" strokeWidth={2.5} />
                  </div>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};