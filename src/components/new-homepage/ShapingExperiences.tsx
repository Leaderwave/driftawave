"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export const ShapingExperiences = () => {
  return (
    <section className="bg-[#F3F0EB] pt-0 pb-[60px]">
      <div className="container mx-auto px-4">
        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Column - 50% / 6 cols */}
          <div className="lg:col-span-6">
            {/* Eyebrow */}
            <p className="font-serif text-[#8CB128] text-[18px] mb-4">
              Behind the Retreats
            </p>

            {/* H2 Headline */}
            <h2 className="font-sans font-extrabold text-[56px] text-[#121412] leading-[1.1] tracking-[-1.5px]">
              Shaping Retreats That
              <br />
              Transform Teams
            </h2>
          </div>

          {/* Right Column - 40% / 5 cols, offset 10% / 1 col */}
          <div className="lg:col-span-5 lg:col-start-8 flex flex-col justify-center">
            {/* Body Paragraph */}
            <p className="font-serif text-[22px] text-[#555555] leading-[1.4] mb-10">
              We believe that the best team retreats are more than just a break from the office. They're opportunities to reconnect, realign, and reinvigorate your team's purpose.
            </p>

            {/* CTA Row */}
            <div className="flex flex-col gap-4">
              {/* Caption */}
              <p className="text-xs uppercase text-[#A0A0A0] font-sans tracking-wide">
                Let's Create Your Perfect Retreat
              </p>

              {/* Button */}
              <button className="inline-flex items-center justify-between gap-4 bg-[#8CB128] rounded-full pl-5 pr-1.5 py-1.5 font-bold text-white text-sm shadow-md hover:shadow-lg transition-shadow max-w-fit">
                <span>Discover Our Approach</span>
                <div className="bg-white rounded-full p-2 flex items-center justify-center">
                  <ArrowRight className="h-4 w-4 text-[#8CB128]" />
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* 3-Image Row */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="relative aspect-square rounded-[32px] overflow-hidden">
            <Image
              src="/homepage/vineyard_retreat_venue.png"
              alt="Vineyard retreat venue"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
          <div className="relative aspect-square rounded-[32px] overflow-hidden">
            <Image
              src="/homepage/innovation_and_flow_team_retreat.png"
              alt="Team retreat innovation session"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
          <div className="relative aspect-square rounded-[32px] overflow-hidden">
            <Image
              src="/homepage/New Website 2.6.png"
              alt="Retreat landscape"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
