"use client";

import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";

const energies = [
  {
    name: "Ocean Motion",
    description: "When ideas flow like the tide and strategies merge from the depth. What on earth is stopping you from planning your next offsite?",
    image: "/energies/ocean-flow.png",
    href: "/company-offsite/ocean-flow",
    alt: "Greek ocean resort company offsite with Mediterranean views",
  },
  {
    name: "Mountain AIR",
    description: "Catch a breath Ya'll. There's POW mountains and nature hikes to scout! Let's get active together!",
    image: "/energies/mountain-air.png",
    href: "/company-offsite/mountain-air",
    alt: "Italian alpine ski resort heated pool company offsite",
  },
  {
    name: "Creative Pulsequake",
    description: "Ready to shake things up? Let's hop on an urban art scout. Share the mysteries along.",
    image: "/energies/creative-pulse.png",
    href: "/company-offsite/creative-pulse",
    alt: "Barcelona street art mural company offsite featuring creative team",
  },
  {
    name: "Wild & Rooted",
    description: "There's nothing more humbling than being in nature. Find balance watching the fire dance. Moments of connection truly matter.",
    image: "/energies/wild-rooted.jpg",
    href: "/company-offsite/wild-rooted",
    alt: "French vineyard company offsite accessible by train",
  },
  {
    name: "Edge of Comfort",
    description: "Ready to push boundaries? Fly on energy! Growth mindset was never found in the predictable.",
    image: "/energies/edge-of-comfort.jpg",
    href: "/company-offsite/edge-of-comfort",
    alt: "New Zealand skydiving adventure company offsite",
  },
];

export const OffsiteEnergiesSection = () => {
  return (
    <section className="relative py-24 md:py-32 lg:py-40 section-sand">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex items-center justify-center gap-6 mb-16 md:mb-20">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-sunset-black tracking-tight">
            Offsite Energies
          </h2>
          <Image
            src="/logos/pegasus.svg"
            alt="Driftawave Pegasus"
            width={60}
            height={60}
            className="w-10 h-10 md:w-14 md:h-14 opacity-60"
          />
        </div>

        {/* 5 Portrait Cards */}
        <div className="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory lg:grid lg:grid-cols-5 lg:gap-6 lg:overflow-visible -mx-4 px-4 lg:mx-0 lg:px-0 scrollbar-hide">
          {energies.map((energy) => (
            <Link
              key={energy.name}
              href={energy.href}
              className="group flex-shrink-0 w-[70vw] md:w-[45vw] lg:w-auto snap-center"
            >
              <div className="relative aspect-[9/16] rounded-brand overflow-hidden shadow-xl transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2">
                <Image
                  src={energy.image}
                  alt={energy.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Refined gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-sunset-black via-sunset-black/30 to-transparent" />

                {/* Content - elegant text treatment, no orange box */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-display text-xl md:text-2xl text-white mb-3 drop-shadow-lg">
                    {energy.name}
                  </h3>
                  <p className="font-body font-light text-sm text-white/80 line-clamp-3 leading-relaxed">
                    {energy.description}
                  </p>

                  {/* Subtle orange accent line */}
                  <div className="w-12 h-0.5 bg-sunset-orange mt-4 opacity-80 group-hover:w-20 transition-all duration-300" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16 md:mt-20">
          <Link
            href="/company-offsite"
            className={cn(
              "inline-flex items-center gap-2 px-8 py-4",
              "bg-sunset-black text-white font-body font-bold text-lg",
              "rounded-brand shadow-lg",
              "hover:bg-sunset-orange hover:shadow-xl hover:-translate-y-0.5",
              "transition-all duration-300"
            )}
          >
            Plan Your Offsite
            <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default OffsiteEnergiesSection;
