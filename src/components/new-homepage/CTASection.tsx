"use client";

import { ArrowRight } from "lucide-react";

export const CTASection = () => {
  return (
    <section className="relative bg-[#121412] py-20 md:py-32 overflow-hidden">
      {/* Background Pattern - Optional */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('/patterns/driftawave-pattern.svg')] bg-repeat"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Eyebrow */}
          <p className="font-serif text-brand-coral text-lg md:text-xl">
            Ready to Transform Your Team?
          </p>

          {/* Main Headline */}
          <h2 className="font-sans font-extrabold text-4xl md:text-6xl lg:text-7xl text-white leading-[1.1]">
            Start Planning Your Offsite
          </h2>

          {/* Description */}
          <p className="font-serif text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl mx-auto">
            Let's create an unforgettable experience that brings your team closer,
            sparks innovation, and drives real results.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            {/* Primary CTA */}
            <a
              href="https://calendly.com/driftawave"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-between gap-4 rounded-full bg-brand-coral pl-8 pr-2 py-4 text-base font-bold text-white transition-all duration-300 hover:shadow-2xl hover:scale-105"
            >
              <span>Explore & Soar</span>
              <div className="bg-white rounded-full p-3 flex items-center justify-center transition-transform duration-300 ease-in-out group-hover:scale-110">
                <ArrowRight className="h-5 w-5 text-brand-coral" strokeWidth={2.5} />
              </div>
            </a>

            {/* Secondary CTA */}
            <button className="group inline-flex items-center justify-between gap-4 rounded-full bg-white/10 border-2 border-white/20 pl-8 pr-2 py-4 text-base font-bold text-white transition-all duration-300 hover:bg-white/20">
              <span>Get in Touch</span>
              <div className="bg-white/20 rounded-full p-3 flex items-center justify-center transition-transform duration-300 ease-in-out group-hover:scale-110">
                <ArrowRight className="h-5 w-5 text-white" strokeWidth={2.5} />
              </div>
            </button>
          </div>

          {/* Trust Badge */}
          <div className="pt-12">
            <p className="text-white/60 text-sm font-sans uppercase tracking-wide mb-4">
              Trusted by teams at
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <span className="text-white font-bold text-lg">Intel</span>
              <span className="text-white font-bold text-lg">LinkedIn</span>
              <span className="text-white font-bold text-lg">SurePay</span>
            </div>
          </div>
        </div>
      </div>

      {/* Flying Logo Background Effect - Optional */}
      <div className="absolute bottom-0 right-0 opacity-5 pointer-events-none">
        <div className="text-[200px] font-bold text-white">DRIFTAWAVE</div>
      </div>
    </section>
  );
};
