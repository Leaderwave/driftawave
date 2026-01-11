"use client";

import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Zap } from "lucide-react";

export const CoreOfferings = () => {
  return (
    <section className="relative bg-[#F3F0EB] rounded-bl-[80px] rounded-br-[80px] z-10 pb-[120px]">
      <div className="container mx-auto px-4">
        {/* Top Divider */}
        <div className="pt-[100px] pb-[80px] flex justify-center">
          <div className="w-[90%] h-[1px] bg-black/8" />
        </div>

        {/* Section Header - 2 Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-16">
          {/* Left Column - Headlines */}
          <div className="lg:col-span-6">
            {/* Eyebrow */}
            <p className="font-serif text-[#8CB128] text-[18px] mb-4">
              Services
            </p>

            {/* H2 Headline */}
            <h2 className="font-sans font-extrabold text-[56px] text-[#121412] leading-[1.1] tracking-[-1.5px]">
              What We Can Help You With
            </h2>
          </div>

          {/* Right Column - Description & CTA */}
          <div className="lg:col-span-5 lg:col-start-8 flex flex-col justify-center">
            {/* Description */}
            <p className="font-serif text-[22px] text-[#555555] leading-[1.4] mb-10">
              From strategy to execution, we offer tailored services to help your team grow with clarity and impact.
            </p>

            {/* CTA Row */}
            <div className="flex flex-col gap-4">
              {/* Caption */}
              <p className="text-xs uppercase text-[#A0A0A0] font-sans tracking-wide">
                Let's Build Something Meaningful Together
              </p>

              {/* Button */}
              <button className="inline-flex items-center justify-between gap-4 bg-[#8CB128] rounded-full pl-5 pr-1.5 py-1.5 font-bold text-white text-sm shadow-md hover:shadow-lg transition-shadow max-w-fit">
                <span>Get in touch</span>
                <div className="bg-white rounded-full p-2 flex items-center justify-center">
                  <ArrowRight className="h-4 w-4 text-[#8CB128]" />
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Services Cards - 3 Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Retreat Design */}
          <div className="bg-[#EBE9E4] h-[450px] rounded-[32px] p-10 flex flex-col justify-between">
            {/* Top Accent Line */}
            <div className="w-full h-1 bg-[#8CB128]" />

            {/* Bottom Content */}
            <div>
              {/* Eyebrow */}
              <p className="font-serif text-[#8CB128] text-sm mb-3">
                Your retreat, perfectly designed.
              </p>

              {/* Title */}
              <h3 className="font-sans font-bold text-[#121412] text-2xl mb-3">
                Retreat Design & Planning
              </h3>

              {/* Description */}
              <p className="font-sans text-[#888888] text-xs leading-relaxed">
                Custom itineraries, venue selection, activity planning, and complete retreat direction.
              </p>
            </div>
          </div>

          {/* Card 2: Team Strategy */}
          <div className="bg-[#EBE9E4] h-[450px] rounded-[32px] p-10 flex flex-col justify-between">
            {/* Top Accent Line */}
            <div className="w-full h-1 bg-[#8CB128]" />

            {/* Bottom Content */}
            <div>
              {/* Eyebrow */}
              <p className="font-serif text-[#8CB128] text-sm mb-3">
                Clarity behind the experience.
              </p>

              {/* Title */}
              <h3 className="font-sans font-bold text-[#121412] text-2xl mb-3">
                Team Strategy Sessions
              </h3>

              {/* Description */}
              <p className="font-sans text-[#888888] text-xs leading-relaxed">
                Facilitated workshops, team alignment exercises, and strategic planning frameworks.
              </p>
            </div>
          </div>

          {/* Card 3: Ongoing Support */}
          <div className="bg-[#EBE9E4] h-[450px] rounded-[32px] p-10 flex flex-col justify-between">
            {/* Top Accent Line */}
            <div className="w-full h-1 bg-[#8CB128]" />

            {/* Bottom Content */}
            <div>
              {/* Eyebrow */}
              <p className="font-serif text-[#8CB128] text-sm mb-3">
                Ongoing expert guidance.
              </p>

              {/* Title */}
              <h3 className="font-sans font-bold text-[#121412] text-2xl mb-3">
                Retreat Consulting
              </h3>

              {/* Description */}
              <p className="font-sans text-[#888888] text-xs leading-relaxed">
                Advisory services, retreat optimization, and continuous support for your retreat programs.
              </p>
            </div>
          </div>
        </div>

        {/* Floating Badge - Bottom Right */}
        <Badge className="absolute bottom-8 right-8 bg-[#8CB128] text-white border-none px-4 py-2 font-mono text-xs shadow-lg flex items-center gap-1">
          <Zap className="h-3 w-3" />
          Premium Services
        </Badge>
      </div>
    </section>
  );
};
