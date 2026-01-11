import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Startup & Scale-Up Retreats - Smash Silos. Celebrate Wins! | Driftawave",
  description:
    "Startup retreats that break silos, ship faster, and scale culture. Invest in culture before it breaks. 70% of scale-ups fail from people problems, not product.",
  keywords: [
    "startup retreats",
    "scale-up offsites",
    "founder retreats",
    "team celebration",
    "startup team building",
    "series A celebration",
  ],
};

const trustReviews = [
  {
    company: "Intel",
    logo: "/logos/reviews/intel.png",
    quote:
      "Outstanding group cohesion and one of the best trips of my lifetime.",
    author: "Senior Manager, Intel",
    alt: "Intel logo - client testimonial for Driftawave startup retreats",
  },
  {
    company: "LinkedIn",
    logo: "/logos/reviews/linkedin.png",
    quote:
      "Amazing experience that will stay with you long after the journey ends.",
    author: "Account Director, LinkedIn",
    alt: "LinkedIn logo - client testimonial for Driftawave scale-up offsites",
  },
  {
    company: "TravMagazine",
    logo: "/logos/reviews/travmagazine.jpeg",
    quote:
      "First class workation in my 30 years travelogue!! Every day when I'm here it feels more beautiful.",
    author: "Pieter, Entrepreneur & Chief Editor Online Travel Magazine",
    alt: "TravMagazine logo - client testimonial for Driftawave retreats",
  },
];

const destinations = [
  {
    name: "Costa Rica",
    description:
      "\"Pura Vida\" philosophy for sustainable growth with rainforest adventures, volcano views and beach sunsets of dreams.",
  },
  {
    name: "Greece",
    description:
      "From Athens' private beach to celebrations in Mykonos or Crete. Thessaloniki's tech hub to Crete retreats where culture meets inspiration.",
  },
  {
    name: "Italy",
    description:
      "La Dolce Vita in the Tuscan hills sparking vision and belonging, Puglia's coastal creativity for breakthrough thinking and newly formed relationships.",
  },
  {
    name: "Bali",
    description:
      "The co-work vibes for the ultimate winter escape, digital-nomad spirit, morning surf and snorkels.",
  },
  {
    name: "Spain",
    description:
      "From Barcelona to the Canary Islands where Spanish island vibes meet innovation and focus.",
  },
  {
    name: "South Africa",
    description:
      "Safaris where teams discover the wild side, or vineyard stays with mountain views that shift everything.",
  },
];

export default function StartupScaleupPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] w-full overflow-hidden -mt-24 md:-mt-28">
        <div className="absolute inset-0">
          <Image
            src="/retreats/startup-scaleup.png"
            alt="Remote team celebration at Driftawave startup retreat in Spain"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-sunset-black/60 via-sunset-black/50 to-sunset-black/40" />
        </div>

        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-4 pt-24 md:pt-28">
          <p className="font-body text-sm uppercase tracking-widest text-sunset-gold mb-4">
            Startup & Scale-Up Retreat
          </p>
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl text-white mb-6">
            Smash Silos. Celebrate Wins!
          </h1>
        </div>

        {/* Gradient fade to white */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Introduction - The Problem */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-display text-3xl md:text-4xl text-sunset-black text-center mb-8">
            Break Silos. Ship Faster. Scale Culture.
          </h2>
          <div className="space-y-6 font-body font-light text-lg text-sunset-black/70 leading-relaxed">
            <p>
              You just closed Series A. Your team doubled. And suddenly nobody
              knows what anyone else is building.
            </p>
            <p>Sound familiar?</p>
            <div className="bg-sunset-sand/30 p-8 rounded-brand shadow-sm">
              <p className="font-medium text-sunset-black">
                The brutal truth: 70% of scale-ups fail not because of
                product-market fit, but because of people problems. Silos form.
                Mission dilutes. A-players leave. We're not even speaking about
                attracting them or the costs of replacements.
              </p>
            </div>
            <p className="font-display text-2xl text-sunset-orange text-center pt-4">
              The startups that scale successfully do one thing differently:
              They invest in culture before it breaks.
            </p>
          </div>
        </div>
      </section>

      {/* From Startup Chaos to Scale-Up Systems */}
      <section className="py-24 md:py-32 section-warm">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-display text-3xl md:text-4xl text-sunset-black text-center mb-8">
            From Startup Chaos to Scale-Up Systems
          </h2>
          <div className="space-y-6 font-body font-light text-lg text-sunset-black/70 leading-relaxed">
            <p className="font-medium text-sunset-black text-center text-xl">
              You don't need trust falls.
            </p>
            <p>
              You need three days where your engineering, product, and
              go-to-market teams actually build together instead of building
              walls.
            </p>
            <p>
              We design experiences that break down silos, create genuine
              cross-team connections, and build the communication foundations
              that scale-ups desperately need. When teams truly understand each
              other's worlds, everything accelerates.
            </p>
          </div>
        </div>
      </section>

      {/* What Scale Ups Achieve */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16">
            <p className="font-body text-sm uppercase tracking-widest text-sunset-orange mb-4">
              The Scale-Up Edge
            </p>
            <h2 className="font-display text-3xl md:text-4xl text-sunset-black">
              What Scale-Ups Achieve with Offsite Retreats
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 bg-sunset-sand/20 rounded-brand shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <h3 className="font-display text-xl text-sunset-orange mb-4">
                Mission-Vision Amplification
              </h3>
              <p className="font-body font-light text-sunset-black/70">
                Align everyone on where you're going and why it matters.
                Transform employees into believers who recruit their network
                because they're genuinely excited about the future you're
                building together.
              </p>
            </div>

            <div className="p-8 bg-sunset-sand/20 rounded-brand shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <h3 className="font-display text-xl text-sunset-orange mb-4">
                Scale-Up Operating System
              </h3>
              <p className="font-body font-light text-sunset-black/70">
                Build the communication rhythms and decision frameworks that
                preserve startup speed at scale. When teams feel appreciated and
                engaged, productivity soars naturally.
              </p>
            </div>

            <div className="p-8 bg-sunset-sand/20 rounded-brand shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <h3 className="font-display text-xl text-sunset-orange mb-4">
                Cross-Functional Velocity
              </h3>
              <p className="font-body font-light text-sunset-black/70">
                When silos disappear, shipping speed doubles. Get your teams
                aligned on what matters.
              </p>
            </div>

            <div className="p-8 bg-sunset-sand/20 rounded-brand shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <h3 className="font-display text-xl text-sunset-orange mb-4">
                Operational Efficiency
              </h3>
              <p className="font-body font-light text-sunset-black/70">
                Stop burning cash on miscommunication and duplicated efforts.
                When teams actually talk, waste disappears.
              </p>
            </div>
          </div>

          <div className="text-center mt-16">
            <p className="font-body font-light text-lg text-sunset-black/70 mb-8">
              Whether you've closed funding, shipped a breakthrough feature, or
              want to appreciate your powerhouse team.
            </p>
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
              Let's Design Your Team's Next Adventure Together
            </Link>
          </div>
        </div>
      </section>

      {/* Destinations */}
      <section className="py-24 md:py-32 section-sand">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16">
            <p className="font-body text-sm uppercase tracking-widest text-sunset-orange mb-4">
              Inspiring Locations
            </p>
            <h2 className="font-display text-3xl md:text-4xl text-sunset-black">
              Where Scale-Up Teams Reset and Reconnect
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

          <p className="font-body font-light text-center text-sunset-black/60 mt-8">
            We'll help you find inspiration and the perfect location for your
            team's size and ambition. It would be our honor.
          </p>
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
              Top Talent, Leaders & Founders
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
