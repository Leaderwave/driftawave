import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Team Building Retreats - Culture Sparks | Driftawave",
  description:
    "Turn company culture into your biggest competitive edge. Team building retreats that create real bonds, boost retention, and transform remote teams.",
  keywords: [
    "team building retreats",
    "company culture",
    "remote team building",
    "corporate retreats",
    "team bonding",
  ],
};

const galleryImages = [
  {
    src: "/retreats/team-building/outdoor-dinner.png",
    alt: "Remote team bonding over outdoor dinner during company culture retreat",
  },
  {
    src: "/retreats/team-building/sailing.png",
    alt: "Remote team sailing excursion Mediterranean sea for team bonding retreat activity",
  },
  {
    src: "/retreats/team-building/shared-meal.png",
    alt: "Distributed team sharing meal and conversation during company offsite bonding experience",
  },
  {
    src: "/retreats/team-building/moroccan.png",
    alt: "Team exploring Moroccan architecture during cultural immersion retreat experience",
  },
  {
    src: "/retreats/team-building/challenge.png",
    alt: "Team collaboration challenge building activity during outdoor company retreat",
  },
  {
    src: "/retreats/team-building/celebration.png",
    alt: "Remote team celebration group photo throwing colorful scarves during team building retreat",
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

export default function TeamBuildingPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] w-full overflow-hidden -mt-24 md:-mt-28">
        <div className="absolute inset-0">
          <Image
            src="/retreats/team-building/header.jpg"
            alt="Culture Sparks Team Retreats Driftawave France"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-sunset-black/60 via-sunset-black/50 to-sunset-black/40" />
        </div>

        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-4 pt-24 md:pt-28">
          <p className="font-body text-sm uppercase tracking-widest text-sunset-gold mb-4">
            Team Building Retreats
          </p>
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl text-white mb-4">
            Culture Sparks
          </h1>
        </div>

        {/* Gradient fade to white */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Introduction */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-display text-3xl md:text-4xl text-sunset-black text-center mb-8">
            Turn Company Culture Into Your Biggest Competitive Edge
          </h2>
          <div className="space-y-6 font-body font-light text-lg text-sunset-black/70 leading-relaxed">
            <p>
              Remote teams excel at digital collaboration and can absolutely build meaningful connections online.
              What's often missing is the deeper trust and empathy that emerges through shared physical experiences.
              The kind that transfers back to strengthen your digital collaboration while silos are being broken down.
            </p>
            <p>
              The most successful companies are built upon a strong company culture! It influences everything from
              employee satisfaction to overall performance. Building this culture requires more than just occasional
              team activities. It needs intentional, transformative experiences that foster real connections and trust.
            </p>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-24 md:py-32 section-warm">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-display text-3xl md:text-4xl text-sunset-black text-center mb-8">
            Why Traditional Team Building Fails for Remote Teams
          </h2>
          <div className="space-y-6 font-body font-light text-lg text-sunset-black/70 leading-relaxed">
            <p>
              Most companies cling to the same tired corporate playbook: rented conference rooms, icebreaker activities,
              and 'vulnerability' exercises that teach teams to perform authenticity rather than build it.
            </p>
            <p>
              They do not understand the needs of remote teams in depth, requiring different approaches and planning
              with intention. While they are critically important for the success of your remote and distributed teams.
            </p>
            <p>
              What you need is an oxytocin explosion, the bonding hormone that creates unshakeable partnerships.
              Psychological safety and online fences broken down, while creating a culture of inclusion.
            </p>
            <p className="font-display text-2xl text-sunset-orange text-center pt-4">
              Time to get together, straighten things out and make your culture spark!
            </p>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-display text-3xl md:text-4xl text-sunset-black text-center mb-8">
            Team Building Activities That Build Real Trust
          </h2>
          <div className="space-y-6 font-body font-light text-lg text-sunset-black/70 leading-relaxed">
            <p>
              When your team navigates mountain trails together, titles disappear and true leadership emerges.
              When they solve actual challenges in stunning locations, breakthrough thinking happens naturally.
              When they share vulnerability in the wild rather than conference rooms, bonds form that transfer
              directly to work performance.
            </p>
          </div>
          <div className="text-center mt-12">
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
              Let's Spark up Your Culture
            </Link>
          </div>
        </div>
      </section>

      {/* Data & ROI */}
      <section className="py-24 md:py-32 bg-sunset-black text-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <p className="font-body text-sm uppercase tracking-widest text-sunset-gold mb-4">
              The Business Case
            </p>
            <h2 className="font-display text-3xl md:text-4xl">
              Remote-First Data & ROI of Team Retreats
            </h2>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-brand p-8 md:p-10 mb-12">
            <p className="font-body font-light text-lg leading-relaxed mb-4">
              <strong className="text-sunset-gold">Case Study:</strong> Testlio scores a year-round 4.4/5 on their
              employee happiness because they break down silos and truly connect on their yearly company-wide offsite
              plus mid-year regional team retreats. Throughout the year, they build culture with intention and
              best-in-class storytelling.
            </p>
            <p className="font-body font-light text-white/80">
              Leading remote-first companies are discovering that strategic in-person gatherings 2-4 times per year
              significantly impact team performance and culture retention.
            </p>
          </div>

          <h3 className="font-display text-2xl text-center mb-10">
            Why should you care about Company Culture Retreats ROI?
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <h4 className="font-display text-xl text-sunset-gold mb-4">Retention</h4>
              <p className="font-body font-light text-white/80">
                Your top-performing talent doesn't even dare think about leaving when culture becomes your
                competitive moat rather than corporate slop.
              </p>
            </div>
            <div className="text-center p-6">
              <h4 className="font-display text-xl text-sunset-gold mb-4">Engagement</h4>
              <p className="font-body font-light text-white/80">
                Teams that forge authentic connections through adventure show measurably higher productivity,
                faster decision-making, and breakthrough innovation rates.
              </p>
            </div>
            <div className="text-center p-6">
              <h4 className="font-display text-xl text-sunset-gold mb-4">Viral Recruitment</h4>
              <p className="font-body font-light text-white/80">
                A-game talent flies through your door after employer branding built on real experiences
                rather than LinkedIn corporate slop.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              href="https://meet-ting.com/to/driftawave"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "inline-flex items-center gap-2 px-8 py-4 rounded-brand",
                "bg-sunset-orange hover:bg-sunset-rust",
                "text-white font-body font-medium text-lg",
                "transition-all duration-300",
                "shadow-lg shadow-sunset-orange/30 hover:shadow-xl"
              )}
            >
              Ready to Rumble?
            </Link>
          </div>
        </div>
      </section>

      {/* Destinations */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="font-body text-sm uppercase tracking-widest text-sunset-orange mb-4">
              Inspiring Locations
            </p>
            <h2 className="font-display text-3xl md:text-4xl text-sunset-black">
              Where Remote Team Building Retreats Happen
            </h2>
          </div>

          <div className="max-w-4xl mx-auto mb-12">
            <p className="font-body font-light text-lg text-sunset-black/70 leading-relaxed text-center">
              In Costa Rica's cloud forests where teams discover clarity through adventure. Cape Town's rugged coastlines
              offer the perfect backdrop for breakthrough moments. Bali's creative energy hubs provide inspiring settings
              where innovation meets ancient wisdom.
            </p>
            <p className="font-body font-light text-lg text-sunset-black/70 leading-relaxed text-center mt-4">
              Barcelona and Madrid's innovation districts where startups take flight. Tuscany's inspiring landscapes
              where creative solutions spring forth naturally. Madeira and Porto's Atlantic coastlines where
              breakthrough thinking flows with ocean currents.
            </p>
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="relative aspect-square rounded-brand overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
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
            <h2 className="font-display text-3xl md:text-4xl text-sunset-black">
              Driftawave Hosted Top Talent
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
