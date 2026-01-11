import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Agile Innovation Retreats - Innovative Burst & Flow | Driftawave",
  description:
    "Innovation retreats for teams ready to ship different. Build breakthrough products with catalysts who've actually built unicorns.",
  keywords: [
    "innovation retreats",
    "agile retreats",
    "product development",
    "startup retreats",
    "tech team offsites",
    "AI integration workshops",
    "rapid prototyping retreats",
  ],
};

const trustReviews = [
  {
    company: "Intel",
    logo: "/logos/reviews/intel.png",
    quote:
      "Outstanding group cohesion and one of the best trips of my lifetime.",
    author: "Senior Manager, Intel",
    alt: "Intel logo - client testimonial for Driftawave innovation retreats",
  },
  {
    company: "LinkedIn",
    logo: "/logos/reviews/linkedin.png",
    quote:
      "Amazing experience that will stay with you long after the journey ends.",
    author: "Account Director, LinkedIn",
    alt: "LinkedIn logo - client testimonial for Driftawave team offsites",
  },
  {
    company: "TravMagazine",
    logo: "/logos/reviews/travmagazine.jpeg",
    quote:
      "First class workation in my 30 years travelogue!! Every day when I'm here it feels more beautiful.",
    author: "Pieter, Entrepreneur & Chief Editor Online Travel Magazine",
    alt: "TravMagazine logo - client testimonial for Driftawave workations",
  },
];

const destinations = [
  {
    name: "Swiss Alps",
    description:
      "Mountain retreat where innovation meets altitude and clarity comes naturally.",
  },
  {
    name: "Berlin",
    description:
      "Urban jungle where creativity breathes throughout the city and rollercoasters are left to the unknown.",
  },
  {
    name: "Italy",
    description:
      "Culture hunting within the heart of Italy, allowing ideas to freely flow as we open up how we really think and feel.",
  },
  {
    name: "Barcelona",
    description:
      "Where tech innovation meets bohemian and artistic inspiration.",
  },
  {
    name: "Australia East Coast",
    description:
      "Where nature crafted its biggest phenomenon and glowworms are kings of the cave.",
  },
  {
    name: "Costa Rica",
    description:
      "Where paradise meets biodiversity meets sustainable innovation.",
  },
];

export default function AgileInnovationPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] w-full overflow-hidden -mt-24 md:-mt-28">
        <div className="absolute inset-0">
          <Image
            src="/retreats/agile-innovation.png"
            alt="Innovation team hiking at sunrise during breakthrough workshop retreat in Gran Canaria"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-sunset-black/60 via-sunset-black/50 to-sunset-black/40" />
        </div>

        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-4 pt-24 md:pt-28">
          <p className="font-body text-sm uppercase tracking-widest text-sunset-gold mb-4">
            Agile Innovation Retreat
          </p>
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl text-white mb-6">
            Innovative Burst & Flow
          </h1>
        </div>

        {/* Gradient fade to white */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Introduction */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-6 font-body font-light text-lg text-sunset-black/70 leading-relaxed">
            <p>
              Your team shipped plenty of features this quarter. But are they
              breakthrough features or just incremental updates?
            </p>
            <p>
              Here's what separates teams building the future from teams
              optimizing the past: The builders at today's unicorns don't just
              keep up. They build differently because they think differently.
            </p>
            <div className="bg-sunset-sand/30 p-8 rounded-brand shadow-sm">
              <p className="font-medium text-sunset-black">
                Boston Consulting Group confirms it: Strategy-led innovators
                generate 74% higher revenue from new products. But here's what
                BCG doesn't tell you – those innovators get there by breaking
                every conventional "innovation process" rule.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* For Builders */}
      <section className="py-24 md:py-32 section-warm">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-display text-3xl md:text-4xl text-sunset-black text-center mb-8">
            For Builders Ready to Ship Different
          </h2>
          <p className="font-body font-light text-lg text-sunset-black/70 leading-relaxed text-center">
            You don't need another design thinking workshop. You need three days
            with innovation catalysts who've actually built unicorns, scaled
            AI-native products, and know the difference between performative
            innovation and shipping features that change industries.
          </p>
        </div>
      </section>

      {/* What Top-Tier Innovation Teams Build */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16">
            <p className="font-body text-sm uppercase tracking-widest text-sunset-orange mb-4">
              The Innovation Edge
            </p>
            <h2 className="font-display text-3xl md:text-4xl text-sunset-black">
              What Top-Tier Innovation Teams Build
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Next-Level AI Integration */}
            <div className="p-8 bg-sunset-sand/20 rounded-brand shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <h3 className="font-display text-xl text-sunset-orange mb-4">
                Next-Level AI Integration
              </h3>
              <p className="font-body font-light text-sunset-black/70">
                Not "let's add ChatGPT to our app." Multi-agent systems, custom
                models, AI-first architecture.
              </p>
            </div>

            {/* Rapid Breakthrough Shipping */}
            <div className="p-8 bg-sunset-sand/20 rounded-brand shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <h3 className="font-display text-xl text-sunset-orange mb-4">
                Rapid Breakthrough Shipping
              </h3>
              <p className="font-body font-light text-sunset-black/70">
                From "what if" to working prototype in 72 hours. With
                facilitators who've done it at scale.
              </p>
            </div>

            {/* Category Creation Thinking */}
            <div className="p-8 bg-sunset-sand/20 rounded-brand shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <h3 className="font-display text-xl text-sunset-orange mb-4">
                Category Creation Thinking
              </h3>
              <p className="font-body font-light text-sunset-black/70">
                Stop competing. Start creating markets others don't see yet.
              </p>
            </div>
          </div>

          <div className="text-center mt-16">
            <Link
              href="https://meet-ting.com/to/driftawave"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "inline-flex items-center gap-2 px-8 py-4 rounded-brand",
                "bg-sunset-orange hover:bg-sunset-rust",
                "text-white font-body font-bold text-lg",
                "transition-all duration-300",
                "shadow-lg shadow-sunset-orange/20 hover:shadow-xl hover:-translate-y-0.5"
              )}
            >
              Let's (Reverse) Engineer Your Next Breakthrough
            </Link>
          </div>
        </div>
      </section>

      {/* Where Innovation Teams Unlock Breakthrough Thinking */}
      <section className="py-24 md:py-32 section-sand">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16">
            <p className="font-body text-sm uppercase tracking-widest text-sunset-orange mb-4">
              Inspiring Locations
            </p>
            <h2 className="font-display text-3xl md:text-4xl text-sunset-black">
              Where Innovation Teams Unlock Breakthrough Thinking
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {destinations.map((destination) => (
              <div
                key={destination.name}
                className="p-6 bg-white rounded-brand shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <h3 className="font-display text-lg text-sunset-black mb-2">
                  {destination.name}
                </h3>
                <p className="font-body font-light text-sm text-sunset-black/60">
                  {destination.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Reviews */}
      <section className="py-24 md:py-32 section-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="font-body text-sm uppercase tracking-widest text-sunset-orange mb-4">
              Trusted Worldwide
            </p>
            <h2 className="font-display text-3xl md:text-4xl text-sunset-black mb-2">
              Driftawave is Trusted by
            </h2>
            <p className="font-display text-2xl md:text-3xl text-sunset-orange">
              Innovators, Leaders & Founders
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {trustReviews.map((review) => (
              <div
                key={review.company}
                className="bg-white rounded-brand p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                {/* Logo */}
                <div className="w-20 h-20 mx-auto mb-6 relative rounded-xl bg-sunset-sand/30 p-3 flex items-center justify-center">
                  <Image
                    src={review.logo}
                    alt={review.alt}
                    width={56}
                    height={56}
                    className="object-contain"
                  />
                </div>

                {/* Quote */}
                <blockquote className="font-body font-light text-sm text-sunset-black/70 mb-6 text-center leading-relaxed">
                  "{review.quote}"
                </blockquote>

                {/* Subtle gradient accent */}
                <div className="w-12 h-px bg-gradient-to-r from-transparent via-sunset-orange to-transparent mx-auto mb-4" />

                {/* Author */}
                <p className="font-body text-xs text-sunset-black text-center font-medium">
                  {review.author}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
