"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Zap } from "lucide-react";

export const BrandBreak = () => {
  return (
    <section className="relative h-[85vh] w-full bg-[#1A1A1A] rounded-bl-[80px] rounded-br-[80px] z-[5] overflow-hidden -mt-20">
      {/* Background Image */}
      <Image
        src="/homepage/gina_schinkel_snow.png"
        alt="Retreat experience"
        fill
        className="object-cover object-center"
        quality={100}
        priority
        sizes="100vw"
      />

      {/* Gradient Overlay - from transparent to dark */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black/80" />

      {/* Centered Content Stack - Positioned Lower */}
      <div className="absolute inset-0 flex flex-col items-center justify-end pb-32 text-center px-4">
        {/* Eyebrow */}
        <p className="font-serif text-white text-xl opacity-80 mb-4">
          Start Your Retreat
        </p>

        {/* Main Headline */}
        <h2
          className="font-sans font-extrabold text-white text-4xl md:text-[64px] leading-[1.1] mb-6"
          style={{ textShadow: '0px 4px 20px rgba(0,0,0,0.3)' }}
        >
          Let's Create Your Perfect
          <br />
          Retreat Experience
        </h2>

        {/* Subtext */}
        <p className="font-sans text-sm text-[#CCCCCC] max-w-[450px] leading-relaxed mt-6 mb-12">
          Ready to transform your team together? Whether you're planning your first retreat or evolving your team culture, we're here to help create something unforgettable.
        </p>

        {/* CTA Button - White for High Contrast */}
        <button className="inline-flex items-center justify-between gap-4 bg-white rounded-full pl-8 pr-3 py-3 shadow-2xl hover:shadow-xl transition-shadow">
          <span className="font-sans font-bold text-black text-sm">Get In Touch</span>
          <div className="bg-[#8CB128] rounded-full p-2.5 flex items-center justify-center w-10 h-10">
            <ArrowRight className="h-5 w-5 text-black" />
          </div>
        </button>
      </div>

      {/* Floating Badge - Right Edge */}
      <Badge className="absolute right-0 bottom-[150px] translate-x-1/2 bg-[#8CB128] text-white border-none px-4 py-2 font-mono text-xs shadow-lg flex items-center gap-1 z-10">
        <Zap className="h-3 w-3" />
        Premium Retreats
      </Badge>
    </section>
  );
};
