"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Zap } from "lucide-react";

export const BentoGrid = () => {
  return (
    <section className="bg-[#F3F0EB] pt-[140px] pb-[60px]">
      <div className="container mx-auto px-4">
        {/* Section Header - 2 Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-16">
          {/* Left Column - Headlines (50% / 6 cols) */}
          <div className="lg:col-span-6">
            {/* Eyebrow */}
            <p className="font-serif text-[#8CB128] text-[18px] mb-5">
              Intentional. Collaborative. Built to Last.
            </p>

            {/* H2 Title */}
            <h2 className="font-sans font-extrabold text-[56px] text-[#121412] leading-[1.1]">
              How We Approach Every
              <br />
              Retreat
            </h2>
          </div>

          {/* Right Column - Description (45% / 5 cols, offset 5% / 1 col) */}
          <div className="lg:col-span-5 lg:col-start-8">
            <p className="font-serif text-[22px] text-[#444444] leading-[1.5]">
              We design with clarity and purpose — blending strategy and unforgettable experiences to create retreats that transform teams.
            </p>
          </div>
        </div>

        {/* Bento Grid - 2x2 with Specific Ratios */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Card 1: Top Left - Wide (2fr) */}
          <div className="lg:col-span-2 relative h-[500px] rounded-[32px] overflow-hidden">
            <Image
              src="/homepage/New Website 2.1 (1).png"
              alt="Strategy First"
              fill
              className="object-cover"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/0 to-black/60" />

            {/* Content */}
            <div className="absolute bottom-0 left-0 p-10">
              {/* Accent Line */}
              <div className="w-full h-1 bg-[#8CB128] mb-6" />

              {/* Title */}
              <h3 className="font-sans font-bold text-white text-[32px] mb-3">
                Strategy First
              </h3>

              {/* Subtitle */}
              <p className="font-sans text-white/80 text-base">
                Every retreat decision is rooted in a clear team strategy. No guesswork.
              </p>
            </div>
          </div>

          {/* Card 2: Top Right - Narrow (1fr) */}
          <div className="lg:col-span-1 relative h-[500px] rounded-[32px] overflow-hidden bg-[#8CB128]">
            {/* Content */}
            <div className="absolute bottom-0 left-0 p-10">
              {/* Accent Line */}
              <div className="w-full h-1 bg-white mb-6" />

              {/* Title */}
              <h3 className="font-sans font-bold text-white text-[32px] mb-3">
                Experiences That Resonate
              </h3>

              {/* Subtitle */}
              <p className="font-sans text-white/90 text-base">
                Activities that connect emotionally and align strategically.
              </p>
            </div>

            {/* Floating Badge */}
            <Badge className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-[#6A8D1A] text-white border-none px-3 py-2 font-mono text-xs shadow-lg z-10 flex items-center gap-1">
              <Zap className="h-3 w-3" />
              Premium Retreats
            </Badge>
          </div>

          {/* Card 3: Bottom Left - Narrow (1fr) */}
          <div className="lg:col-span-1 relative h-[500px] rounded-[32px] overflow-hidden bg-[#EBE9E4]">
            {/* Content */}
            <div className="absolute bottom-0 left-0 p-10">
              {/* Accent Line */}
              <div className="w-full h-1 bg-[#8CB128] mb-6" />

              {/* Title */}
              <h3 className="font-sans font-bold text-[#121412] text-[32px] mb-3">
                Future-Proof Planning
              </h3>

              {/* Subtitle */}
              <p className="font-sans text-[#555555] text-base">
                Retreats that are flexible, scalable, and easy to replicate.
              </p>
            </div>
          </div>

          {/* Card 4: Bottom Right - Wide (2fr) */}
          <div className="lg:col-span-2 relative h-[500px] rounded-[32px] overflow-hidden">
            <Image
              src="/homepage/New Website 2.2.png"
              alt="Consistency Across Touchpoints"
              fill
              className="object-cover"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/0 to-black/50" />

            {/* Content */}
            <div className="absolute bottom-0 left-0 p-10">
              {/* Accent Line */}
              <div className="w-full h-1 bg-[#8CB128] mb-6" />

              {/* Title */}
              <h3 className="font-sans font-bold text-white text-[32px] mb-3">
                Consistency Across Experiences
              </h3>

              {/* Subtitle */}
              <p className="font-sans text-white/80 text-base">
                From kickoff to follow-up, we ensure your retreat vision stays aligned.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
