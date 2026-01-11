import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Communication & PR Retreats - Craft Stories That Stick | Driftawave",
  description:
    "PR and communications retreats that help teams craft compelling narratives. Turn your team into trusted storytellers who cut through the noise.",
  keywords: [
    "PR retreats",
    "communication retreats",
    "storytelling workshops",
    "thought leadership",
    "media training retreats",
    "speaker training",
  ],
};

const trustReviews = [
  {
    company: "Intel",
    logo: "/logos/reviews/intel.png",
    quote:
      "Outstanding group cohesion and one of the best trips of my lifetime.",
    author: "Senior Manager, Intel",
    alt: "Intel logo - client testimonial for Driftawave PR retreats",
  },
  {
    company: "LinkedIn",
    logo: "/logos/reviews/linkedin.png",
    quote:
      "Amazing experience that will stay with you long after the journey ends.",
    author: "Account Director, LinkedIn",
    alt: "LinkedIn logo - client testimonial for Driftawave communication retreats",
  },
  {
    company: "Driftawave",
    logo: "/logos/pegasus.jpg",
    quote:
      "Since actively working on PR - podcast, media and international keynote opportunities have found me, creating inbound leads, shorter sales cycles, referrals and partnerships as a result.",
    author: "Founder, Driftawave",
    alt: "Driftawave founder testimonial on PR results",
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
    name: "Puglia",
    description:
      "Inspiring countryside retreats where compelling narratives emerge naturally.",
  },
  {
    name: "Madeira",
    description:
      "Lush off-the-grid venues where strategic storytelling takes flight.",
  },
  {
    name: "Queenstown",
    description:
      "Adventure capital where inspiration flows and rivers chant.",
  },
  {
    name: "Philippines",
    description:
      "Private islands where breakthrough communication flows with tropical confidence.",
  },
];

export default function CommunicationPRPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] w-full overflow-hidden -mt-24 md:-mt-28">
        <div className="absolute inset-0">
          <Image
            src="/retreats/communication-pr.png"
            alt="Mythological storytelling and cultural exploration at ancient ruins during Driftawave PR team offsite"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-sunset-black/60 via-sunset-black/50 to-sunset-black/40" />
        </div>

        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-4 pt-24 md:pt-28">
          <p className="font-body text-sm uppercase tracking-widest text-sunset-gold mb-4">
            Communication & PR Retreat
          </p>
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl text-white mb-6">
            Craft Stories That Stick
          </h1>
        </div>

        {/* Gradient fade to white */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Introduction - The Problem */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-6 font-body font-light text-lg text-sunset-black/70 leading-relaxed">
            <p>
              Cheap content is flooding the market at speed, with extra help
              from AI. Trust will become a major differentiator when we do not
              know what is real anymore. Those who play by the old book will run
              into a wall.
            </p>
            <p>
              Your marketing team can create the best quality content and your
              services deliver breakthrough results. But what you really need in
              2025 is a voice that cuts through the noise, captures attention in
              a heartbeat, and builds trust over time as touchpoints accumulate.
            </p>
            <div className="bg-sunset-sand/30 p-8 rounded-brand shadow-sm">
              <p className="font-medium text-sunset-black">
                You can keep hiding behind algorithms and targeted ads, but
                those with strong communication presence are already dominating
                the conversation. Done are the old days of boring corporate
                communication training and executive presentations through
                spreadsheet logic.
              </p>
            </div>
            <p className="font-display text-2xl text-sunset-orange text-center pt-4">
              Remember: people buy into vision and remember how you made them
              feel.
            </p>
          </div>
        </div>
      </section>

      {/* Strategic Communication */}
      <section className="py-24 md:py-32 section-warm">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-display text-3xl md:text-4xl text-sunset-black text-center mb-8">
            Strategic Communication To Amplify Your Messaging
          </h2>
          <div className="space-y-6 font-body font-light text-lg text-sunset-black/70 leading-relaxed">
            <p>
              When your team develops authentic communication skills, something
              powerful happens. Your CTO's technical insights reach developers
              at major conferences. Your CMO's growth stories resonate on
              industry podcasts. Your founder's vision inspires audiences at
              investor events.
            </p>
            <p className="font-medium text-sunset-black text-center">
              Turn your team into your most trusted storytellers. Compelling
              speakers who move audiences, through training and experience –
              while building authentic confidence through body, mind and vision.
            </p>
          </div>
        </div>
      </section>

      {/* Business Upside */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16">
            <p className="font-body text-sm uppercase tracking-widest text-sunset-orange mb-4">
              The Communication Edge
            </p>
            <h2 className="font-display text-3xl md:text-4xl text-sunset-black">
              The Business Upside of PR & Communication Retreats
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 bg-sunset-sand/20 rounded-brand shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <h3 className="font-display text-xl text-sunset-orange mb-4">
                Thought Leadership That Opens Markets
              </h3>
              <p className="font-body font-light text-sunset-black/70">
                Voices developed through genuine experience carry authority that
                manufactured expertise cannot match.
              </p>
            </div>

            <div className="p-8 bg-sunset-sand/20 rounded-brand shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <h3 className="font-display text-xl text-sunset-orange mb-4">
                Strategic Storytelling That Drives Business
              </h3>
              <p className="font-body font-light text-sunset-black/70">
                Organic pipeline, inbound leads, referrals and shorter sales
                cycles. Repeat.
              </p>
            </div>

            <div className="p-8 bg-sunset-sand/20 rounded-brand shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <h3 className="font-display text-xl text-sunset-orange mb-4">
                Media Presence That Builds Credibility
              </h3>
              <p className="font-body font-light text-sunset-black/70">
                Natural confidence for interviews, panels, and speaking
                opportunities that expand awareness while being value driven.
              </p>
            </div>

            <div className="p-8 bg-sunset-sand/20 rounded-brand shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <h3 className="font-display text-xl text-sunset-orange mb-4">
                Podcast Bookings & Speaking Opportunities
              </h3>
              <p className="font-body font-light text-sunset-black/70">
                Teams gain the authentic presence that generates inbound
                requests rather than outbound pitching. Time spent with your
                brand, at the right time, at the right place, with the right
                audience.
              </p>
            </div>

            <div className="p-8 bg-sunset-sand/20 rounded-brand shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 md:col-span-2">
              <h3 className="font-display text-xl text-sunset-orange mb-4">
                Internal Communication
              </h3>
              <p className="font-body font-light text-sunset-black/70">
                Move your team with inspiration and a mission-driven approach.
                Handle escalations effectively and synchronised across the
                board.
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
              Let's Plan Your Next Level Take-Off
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
            <h2 className="font-display text-3xl md:text-4xl text-sunset-black mb-2">
              Where Do Speakers Craft Stories
            </h2>
            <p className="font-display text-2xl md:text-3xl text-sunset-orange">
              and Build Confidence?
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
            These retreat-style destinations provide the perfect atmosphere for
            intensive communication development. We help you find the best
            location across six continents.
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
              Founders, Leaders & Top Talent
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {trustReviews.map((review) => (
              <div
                key={review.company}
                className="bg-white rounded-brand p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                {/* Logo */}
                <div className="w-16 h-16 mx-auto mb-4 relative rounded-xl bg-sunset-sand/30 p-2 flex items-center justify-center">
                  <Image
                    src={review.logo}
                    alt={review.alt}
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                </div>

                {/* Quote */}
                <blockquote className="font-body font-light text-sm text-sunset-black/70 mb-4 text-center leading-relaxed">
                  "{review.quote}"
                </blockquote>

                {/* Subtle gradient accent */}
                <div className="w-12 h-px bg-gradient-to-r from-transparent via-sunset-orange to-transparent mx-auto mb-3" />

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
