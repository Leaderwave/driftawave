"use client";

import Image from "next/image";

const reviews = [
  {
    company: "Intel",
    logo: "/logos/reviews/intel.png",
    quote: "One of the best trips of my lifetime and an outstanding group cohesion!! Looking forward to jump on a future trip.",
    author: "Kurt",
    role: "Senior Manager Intel",
    alt: "Intel logo client testimonial for Driftawave team retreats",
  },
  {
    company: "SurePay",
    logo: "/logos/reviews/surepay.jpeg",
    quote: "The best remote work escape & community I could ever imagine!! I will be back soon.",
    author: "Seline",
    role: "Partner Manager SurePay",
    alt: "SurePay logo client testimonial for Driftawave workations",
  },
  {
    company: "TravMagazine",
    logo: "/logos/reviews/travmagazine.jpeg",
    quote: "First class workation in my 30 years travelogue!! Every day when I'm here it feels more beautiful.",
    author: "Pieter",
    role: "Entrepreneur & Chief Editor Online Travel Magazine",
    alt: "TravMagazine logo client testimonial for Driftawave retreats",
  },
  {
    company: "LinkedIn",
    logo: "/logos/reviews/linkedin.png",
    quote: "Unforgettable adventure on the Adriatic waters, it's an amazing experience that will stay with you long after the journey ends.",
    author: "Elia",
    role: "Account Director LinkedIn",
    alt: "LinkedIn logo client testimonial for Driftawave company offsites",
  },
  {
    company: "Ecosystem Services",
    logo: "/logos/reviews/ecosystem.png",
    quote: "They think with you, not just for you. We're looking forward to organising our next event with Driftawave.",
    author: "Mark",
    role: "Founder, Ecosystem Services",
    alt: "Ecosystem Services company logo for corporate retreats",
  },
];

export const TrustReviewsSection = () => {
  return (
    <section className="relative py-24 md:py-32 lg:py-40 section-cream">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <span className="font-display text-sm uppercase tracking-widest text-sunset-orange mb-4 block">
            What They Say
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-sunset-black tracking-tight">
            Mic Drop Trust Reviews
          </h2>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8">
          {reviews.map((review) => (
            <div
              key={review.company}
              className="card-brand flex flex-col p-8 hover:-translate-y-1 transition-all duration-300"
            >
              {/* Logo */}
              <div className="w-14 h-14 mx-auto mb-6 relative">
                <div className="absolute inset-0 rounded-full bg-sunset-sand/30" />
                <Image
                  src={review.logo}
                  alt={review.alt}
                  width={48}
                  height={48}
                  className="relative z-10 w-full h-full object-contain p-2"
                />
              </div>

              {/* Quote */}
              <blockquote className="flex-grow text-center mb-6">
                <p className="font-body font-light text-sm text-sunset-black/70 leading-relaxed italic">
                  &ldquo;{review.quote}&rdquo;
                </p>
              </blockquote>

              {/* Subtle gradient accent line */}
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-sunset-orange to-transparent mx-auto mb-4" />

              {/* Author */}
              <div className="text-center">
                <p className="font-display text-base text-sunset-black">
                  {review.author}
                </p>
                <p className="font-body text-xs text-sunset-black/50 leading-tight">
                  {review.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustReviewsSection;
