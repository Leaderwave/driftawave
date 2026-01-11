"use client";

import React from "react";

// Placeholder company data - to be replaced with actual logos
const companies = [
  "Acme Corp",
  "TechStart",
  "InnovateCo",
  "BuildFast",
  "GrowthLabs",
];

export const TrustedByMarquee = () => {
  return (
    <section className="bg-[#F3F0EB] pt-[60px] pb-[80px] -mt-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
          {/* Label - Left */}
          <p className="font-sans font-bold text-[10px] text-[#A0A0A0] leading-[1.4] whitespace-pre-line">
            {"Trusted by Companies\nWe've Helped Transform"}
          </p>

          {/* Logo Strip - Right */}
          <div className="flex items-center gap-[60px]">
            {companies.map((company, index) => (
              <div
                key={index}
                className="text-[#CCCCCC] font-sans text-sm transition-colors hover:text-[#555555]"
              >
                {company}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
