"use client";

import Image from "next/image";

const testimonials = [
  {
    company: "Intel",
    logo: "/logos/intel-logo.png", // Replace with actual logo path
    quote:
      "One of the best trips of my lifetime and an outstanding group cohesion!! Looking forward to jump on a future trip.",
    author: "Kurt",
    role: "Senior Manager Intel",
  },
  {
    company: "SurePay",
    logo: "/logos/surepay-logo.png", // Replace with actual logo path
    quote:
      "The best remote work escape & community I could ever imagine!! I will be back soon.",
    author: "Seline",
    role: "Partner Manager SurePay",
  },
  {
    company: "TravMagazine",
    logo: "/logos/travmagazine-logo.png", // Replace with actual logo path
    quote:
      "First class workation in my 30 years travelogue!! Every day when I'm here it feels more beautiful.",
    author: "Pieter",
    role: "Entrepreneur & Chief Editor Online Travel Magazine",
  },
  {
    company: "LinkedIn",
    logo: "/logos/linkedin-logo.png", // Replace with actual logo path
    quote:
      "Unforgettable adventure on the Adriatic waters, it's an amazing experience that will stay with you long after the journey ends.",
    author: "Elia",
    role: "Account Director LinkedIn",
  },
];

export const TrustReviews = () => {
  return (
    <section className="bg-[#121412] py-20 md:py-28">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="font-sans font-extrabold text-4xl md:text-[56px] leading-[1.1] text-white mb-4">
            MIC DROP TRUST REVIEWS
          </h2>
          <div className="w-24 h-1 bg-brand-coral mx-auto"></div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-[#1E1E1E] rounded-[32px] p-8 md:p-10 space-y-6"
            >
              {/* Company Logo - Placeholder */}
              <div className="h-12 flex items-center">
                <div className="text-white font-bold text-xl">
                  {testimonial.company}
                </div>
                {/* Replace with actual logo: */}
                {/* <Image src={testimonial.logo} alt={testimonial.company} width={120} height={40} /> */}
              </div>

              {/* Quote */}
              <blockquote className="font-serif text-lg md:text-xl text-white/90 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>

              {/* Author */}
              <div className="pt-4">
                <p className="font-sans font-bold text-white text-base">
                  {testimonial.author}
                </p>
                <p className="font-sans text-white/60 text-sm mt-1">
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
