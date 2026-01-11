"use client";

import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export const HeroSection = () => {
  return (
    <section className="relative h-[90vh] min-h-[600px] w-full overflow-hidden -mt-24 md:-mt-28">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/hero/hero-vineyard.jpg"
          alt="French vineyard team retreat venue with pool and ocean views for remote work offsites"
          fill
          className="object-cover"
          priority
        />

        {/* Refined gradient overlay - fades to white at bottom */}
        <div className="absolute inset-0 bg-gradient-to-b from-sunset-black/50 via-sunset-black/30 to-white/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-4 pt-24 md:pt-28 pb-32">
        {/* Main Headline */}
        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl xl:text-8xl text-white mb-8 max-w-5xl leading-[1.1] drop-shadow-lg">
          Team Retreats, Workations{" "}
          <span className="relative inline-block">
            & EPIC
            {/* Elegant underline accent */}
            <span
              className="absolute -bottom-2 left-0 w-full h-1 bg-sunset-orange rounded-full"
            />
          </span>{" "}
          Offsites
        </h1>

        {/* Subheadline - frosted glass effect */}
        <div className="bg-white/90 backdrop-blur-sm px-8 py-4 rounded-brand shadow-lg border border-sunset-sand/30 mb-12">
          <p className="font-body font-medium text-lg md:text-xl lg:text-2xl text-sunset-black max-w-2xl">
            Turnkey travel experiences for remote teams, distributed companies and online communities.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-5">
          <Link
            href="https://meet-ting.com/to/driftawave"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "inline-flex items-center justify-center px-8 py-4",
              "bg-sunset-orange text-white font-body font-bold text-lg",
              "rounded-brand shadow-lg shadow-sunset-orange/30",
              "hover:bg-sunset-rust hover:shadow-xl hover:-translate-y-0.5",
              "transition-all duration-300",
              "min-w-[200px]"
            )}
          >
            Start Planning
          </Link>
          <Link
            href="/team-retreat"
            className={cn(
              "inline-flex items-center justify-center px-8 py-4",
              "rounded-brand border-2 border-white/80",
              "text-white font-body font-bold text-lg",
              "backdrop-blur-sm bg-white/10",
              "hover:bg-white hover:text-sunset-black",
              "transition-all duration-300 min-w-[200px]"
            )}
          >
            Explore Retreats
          </Link>
        </div>
      </div>

      {/* Bottom transition - elegant gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none" />
    </section>
  );
};

export default HeroSection;
