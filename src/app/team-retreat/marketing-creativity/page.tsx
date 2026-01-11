import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Growth Marketing Retreats - Brand Swell Wave | Driftawave",
  description:
    "Marketing retreats that unlock your team's creative potential. Brainstorm in inspiring locations where adventure dictates energy and creative input.",
  keywords: [
    "marketing retreats",
    "creative retreats",
    "brand strategy",
    "growth marketing",
    "digital marketing offsites",
    "creative workshops",
  ],
};

const trustReviews = [
  {
    company: "Intel",
    logo: "/logos/reviews/intel.png",
    quote:
      "Outstanding group cohesion and one of the best trips of my lifetime.",
    author: "Senior Manager, Intel",
    alt: "Intel logo - client testimonial for Driftawave marketing retreats",
  },
  {
    company: "LinkedIn",
    logo: "/logos/reviews/linkedin.png",
    quote:
      "Amazing experience that will stay with you long after the journey ends.",
    author: "Account Director, LinkedIn",
    alt: "LinkedIn logo - client testimonial for Driftawave creative retreats",
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
    name: "Guatemala City",
    description: "Built on creativity: good vibes only.",
  },
  {
    name: "Mexico City",
    description:
      "Home of Frieda Kahlo and favourite destination among many remote workers. So good your team won't stop taco'ing about it!",
  },
  {
    name: "Peru",
    description:
      "Mysteries, colorful landscapes, culture, live music and a next level cuisine to fuel breakthroughs.",
  },
  {
    name: "Buenos Aires",
    description:
      "The city of Tango and La Boca, there is no place where energy strikes faster while the city looks like a museum of hidden treasures.",
  },
  {
    name: "Florianópolis",
    description: "Where surf, tech and beach meet jungle vibes.",
  },
  {
    name: "Cape Town",
    description:
      "Iconic Lion's Head, stretched vineyards who bring out Dionysus and Old Times cruising inspiration – while crafting the power of letting go.",
  },
];

export default function MarketingCreativityPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] w-full overflow-hidden -mt-24 md:-mt-28">
        <div className="absolute inset-0">
          <Image
            src="/retreats/marketing-creativity.png"
            alt="Surfing adventure during Driftawave marketing team retreat in Gran Canaria"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-sunset-black/60 via-sunset-black/50 to-sunset-black/40" />
        </div>

        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-4 pt-24 md:pt-28">
          <p className="font-body text-sm uppercase tracking-widest text-sunset-gold mb-4">
            Growth Marketing Retreat
          </p>
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl text-white mb-6">
            Brand Swell Wave
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
              Your marketing team has untapped genius you're not accessing. 60%
              of their creative potential remains locked while competitors gain
              ground. And let's be honest, it's not that easy while clients are
              scattered across multiple channels, both online and offline.
            </p>
            <p>
              As if that was not enough, we're looking into the eyes of tech
              disruption at full speed. To keep doing what you've always done
              has never been a bigger risk, while B2B brands never faced more
              opportunity to stand out.
            </p>
            <div className="bg-sunset-sand/30 p-8 rounded-brand shadow-sm">
              <p className="font-medium text-sunset-black text-lg">
                The good news for marketers? Branding is finally getting the
                attention and credits it deserves!!
              </p>
            </div>
            <p className="font-display text-2xl text-sunset-orange text-center pt-4">
              Let's get your team in the saddle and soar before the competition
              catches up.
            </p>
          </div>
        </div>
      </section>

      {/* Why Marketing Retreats */}
      <section className="py-24 md:py-32 section-warm">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-display text-3xl md:text-4xl text-sunset-black text-center mb-8">
            Why Marketing Retreats Outperform Old School Workshops
          </h2>
          <div className="space-y-6 font-body font-light text-lg text-sunset-black/70 leading-relaxed">
            <p>
              Today it is all about agency, creativity and innovation.
              Creativity finds us when we let go, and the dots connect
              simultaneously. A workshop can help to understand a new tool, yet
              what you are looking for is a mindset shift with different
              perspectives, newly wired dots, AI-native skills and a team spirit
              that pops off any marketing channel.
            </p>
            <p>
              Your next viral employer branding campaign and team engagement are
              bonus cherries on top of the pie. Never worry about chasing A-game
              hires again, watch them fly in! We all know workations, team
              retreats and offsites are highly sought after, a major win for
              cross culture collaboration, a key to connect at a deeper level
              and provide the ability to step away from the day to day.
            </p>
          </div>
        </div>
      </section>

      {/* The Disruptive Sprint */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-display text-3xl md:text-4xl text-sunset-black text-center mb-8">
            The Disruptive Sprint Plan of Attack
          </h2>
          <div className="space-y-6 font-body font-light text-lg text-sunset-black/70 leading-relaxed">
            <p>
              Time to strip away the noise, focus on which channels convert and
              reinvent what a strong brand means tomorrow. Bet big on strategies
              that competitors are too distracted to notice and drop in with a
              stretched leg to take the lead.
            </p>
            <p className="font-display text-3xl text-sunset-orange text-center py-4">
              Game mode ON.
            </p>
            <div className="bg-sunset-sand/30 p-8 rounded-brand shadow-sm">
              <p className="font-medium text-sunset-black">
                It's proven that A-game brands improve their business revenue
                with gains up to 25% by increasing experiments across the board.
                Meanwhile the top level of tech has started taking action to
                double down on it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Legendary Growth Marketing Looks Like */}
      <section className="py-24 md:py-32 section-sand">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16">
            <p className="font-body text-sm uppercase tracking-widest text-sunset-orange mb-4">
              The Marketing Edge
            </p>
            <h2 className="font-display text-3xl md:text-4xl text-sunset-black">
              What Legendary Growth Marketing Looks Like
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 bg-white rounded-brand shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <h3 className="font-display text-xl text-sunset-orange mb-4">
                Strategies That Survive Tool Changes
              </h3>
              <p className="font-body font-light text-sunset-black/70">
                Digital marketing offsites and brand strategy retreats generate
                growth approaches rooted in customer psychology rather than
                platform features that become obsolete when algorithms shift.
              </p>
            </div>

            <div className="p-8 bg-white rounded-brand shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <h3 className="font-display text-xl text-sunset-orange mb-4">
                Creative Campaigns That Competitors Can't Copy
              </h3>
              <p className="font-body font-light text-sunset-black/70">
                Ideas born from authentic team insight during creative marketing
                workshops create differentiation that budget advantages can't
                replicate. (The boss is listening right?)
              </p>
            </div>

            <div className="p-8 bg-white rounded-brand shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <h3 className="font-display text-xl text-sunset-orange mb-4">
                Focus That Drives Results
              </h3>
              <p className="font-body font-light text-sunset-black/70">
                Teams that discover clarity through shared adventure naturally
                prioritize high-impact activities over busy work.
              </p>
            </div>

            <div className="p-8 bg-white rounded-brand shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <h3 className="font-display text-xl text-sunset-orange mb-4">
                Metrics That Matter
              </h3>
              <p className="font-body font-light text-sunset-black/70">
                Clear thinking about what drives sustainable growth versus
                impressive-looking vanity metrics. Reverse engineer key
                performance.
              </p>
            </div>
          </div>

          <div className="text-center mt-16">
            <p className="font-body font-light text-lg text-sunset-black/70 mb-6">
              Your breakthrough deserves growth marketing strategies that match
              your disruptive spirit. Ditch the outdated growth hacking
              frameworks.
            </p>
            <p className="font-body font-medium text-sunset-black mb-8">
              To help you do so, we only work with industry leaders who reinvent
              the field continuously, are far ahead of the curve and set the
              trend before you even knew it existed. Unicorn trails and
              adventures inbound!
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
              Let's Cook Up Your Next Milestone
            </Link>
          </div>
        </div>
      </section>

      {/* Destinations */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16">
            <p className="font-body text-sm uppercase tracking-widest text-sunset-orange mb-4">
              Inspiring Locations
            </p>
            <h2 className="font-display text-3xl md:text-4xl text-sunset-black">
              Where Teams Fuel Up On Brand Strategy
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {destinations.map((destination) => (
              <div
                key={destination.name}
                className="p-6 bg-sunset-sand/20 rounded-brand shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
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
            Alongside the above locations we serve our clients the most
            beautiful venues, activities, programs and logistics across 6
            continents. You wish, we serve.
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
