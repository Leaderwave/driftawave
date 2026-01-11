import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Team Retreats & Offsites | Driftawave",
  description:
    "Transformative team retreats designed to foster meaningful connections, inspire leadership, and unlock your team's potential. Browse our catalogue.",
  keywords: [
    "team retreats",
    "team building",
    "leadership retreats",
    "company offsites",
    "remote team events",
  ],
};

const retreatCategories = [
  {
    name: "Team Building",
    description:
      "Bond over shared laughter, values and adventure. Becoming a talent magnet is just a side effect.",
    image: "/retreats/team-building.png",
    cta: "SPARK YOUR CULTURE",
    href: "/team-retreat/team-building",
    alt: "Remote team building connections during Driftawave workation in Morocco",
  },
  {
    name: "Leadership",
    description:
      "Tap into what truly matters, solve the hardest challenges and set strategies in an inspiring environment. Charge in!",
    image: "/retreats/leadership.png",
    cta: "FUEL YOUR VISION",
    href: "/team-retreat/leadership",
    alt: "Esther van Toledo facilitating leadership workshop at Driftawave team offsite",
  },
  {
    name: "Communication & PR",
    description:
      "Stand out in a noisy market and build your next GTM moat. It's hard to ignore tales that travel beyond imagination.",
    image: "/retreats/communication-pr.png",
    cta: "CRAFT YOUR STORY",
    href: "/team-retreat/communication-pr",
    alt: "Mythological storytelling and cultural exploration at ancient ruins during Driftawave PR team offsite",
  },
  {
    name: "Growth Marketing",
    description:
      "Take your brand on a next level spin. Brainstorm in an inspiring location. Let adventure dictate your energy levels and creative input.",
    image: "/retreats/marketing-creativity.png",
    cta: "AMPLIFY YOUR BRAND",
    href: "/team-retreat/marketing-creativity",
    alt: "Surfing adventure during Driftawave marketing team retreat in Gran Canaria",
  },
  {
    name: "Agile Innovation",
    description:
      "Reimagine, reinvent, rebuild. Never a dull day on our terms: the bigger the obstacle, the bigger the reward. Challenge accepted!",
    image: "/retreats/agile-innovation.png",
    cta: "ENGINEER BREAKTHROUGHS",
    href: "/team-retreat/agile-innovation",
    alt: "Team beach workout at sunrise during Driftawave retreat building collaboration and flow",
  },
  {
    name: "Startup & Scale-Up",
    description:
      "Everybody needs to feel the energy of true winner accomplishments. Don't let your wins go unheard, turn into a talent magnet and act like one.",
    image: "/retreats/startup-scaleup.png",
    cta: "CELEBRATE YOUR WINS",
    href: "/team-retreat/startup-scaleup",
    alt: "Remote team celebration at Driftawave startup retreat in Spain",
  },
];

const trustReviews = [
  {
    company: "Intel",
    logo: "/logos/reviews/intel.png",
    quote: "Outstanding group cohesion and one of the best trips of my lifetime.",
    author: "Senior Manager, Intel",
  },
  {
    company: "LinkedIn",
    logo: "/logos/reviews/linkedin.png",
    quote: "Amazing experience that will stay with you long after the journey ends.",
    author: "Account Director, LinkedIn",
  },
  {
    company: "TravMagazine",
    logo: "/logos/reviews/travmagazine.jpeg",
    quote: "First class workation in my 30 years travelogue!!",
    author: "Pieter, Entrepreneur",
  },
];

export default function TeamRetreatPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] w-full overflow-hidden -mt-24 md:-mt-28">
        <div className="absolute inset-0">
          <Image
            src="/retreats/header-chalets.png"
            alt="Modern wooden chalets with warm balcony lighting nestled on a hillside at sunset, showcasing a boutique team retreat venue"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-sunset-black/60 via-sunset-black/50 to-sunset-black/40" />
        </div>

        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-4 pt-24 md:pt-28">
          <p className="font-body text-sm uppercase tracking-widest text-sunset-gold mb-4">
            Driftawave Experiences
          </p>
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl text-white mb-6">
            Team Retreats & Offsites
          </h1>
          <p className="font-body font-light text-lg md:text-xl text-white/90 max-w-2xl">
            Turnkey travel experiences for remote teams, distributed companies and online communities.
          </p>
        </div>

        {/* Gradient fade to white */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Introduction */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <p className="font-body font-light text-lg md:text-xl text-sunset-black/70 leading-relaxed mb-8">
            At Driftawave, we believe in transformative experiences that go beyond traditional team-building activities.
            Our team retreats, workations and company offsites are designed to foster meaningful connections,
            inspire leadership, and unlock your team's potential across multiple dimensions.
          </p>
          <p className="font-display text-2xl md:text-3xl text-sunset-black mb-4">
            Ready to move from vision sprints to victory laps?
          </p>
          <p className="font-body text-base text-sunset-black/60">
            Browse our team retreat catalogue & vibe for inspiration
          </p>
        </div>
      </section>

      {/* Retreat Categories Grid */}
      <section className="py-24 md:py-32 section-warm">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="font-body text-sm uppercase tracking-widest text-sunset-orange mb-4">
              Choose Your Path
            </p>
            <h2 className="font-display text-3xl md:text-4xl text-sunset-black">
              Retreat Categories
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {retreatCategories.map((category) => (
              <Link
                key={category.name}
                href={category.href}
                className="group block"
              >
                <div className="bg-white rounded-brand overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                  {/* Image */}
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src={category.image}
                      alt={category.alt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="font-display text-xl md:text-2xl text-sunset-black mb-3">
                      {category.name}
                    </h3>
                    <p className="font-body font-light text-sm text-sunset-black/60 mb-4">
                      {category.description}
                    </p>
                    <span
                      className={cn(
                        "inline-block px-6 py-2 rounded-brand",
                        "bg-sunset-orange hover:bg-sunset-rust",
                        "text-white font-body text-sm font-medium",
                        "shadow-md shadow-sunset-orange/20",
                        "transition-all duration-300"
                      )}
                    >
                      {category.cta}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Section CTA */}
          <div className="text-center mt-16">
            <Link
              href="https://meet-ting.com/to/driftawave"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "inline-flex items-center gap-2 px-8 py-4 rounded-brand",
                "bg-sunset-orange hover:bg-sunset-rust",
                "text-white font-body font-medium text-lg",
                "transition-all duration-300",
                "shadow-lg shadow-sunset-orange/20 hover:shadow-xl hover:-translate-y-0.5"
              )}
            >
              LET'S EXPLORE!
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Reviews */}
      <section className="py-24 md:py-32 section-cream">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="font-body text-sm uppercase tracking-widest text-sunset-orange mb-4">
              Trusted Worldwide
            </p>
            <h2 className="font-display text-3xl md:text-4xl text-sunset-black">
              Global Top Talent, Leaders & Founders
            </h2>
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
                    alt={review.company}
                    fill
                    className="object-contain p-2"
                  />
                </div>

                {/* Subtle gradient accent */}
                <div className="w-12 h-px bg-gradient-to-r from-transparent via-sunset-orange to-transparent mx-auto mb-6" />

                {/* Quote */}
                <blockquote className="font-body font-light text-sm text-sunset-black/70 text-center mb-6 leading-relaxed">
                  "{review.quote}"
                </blockquote>

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
