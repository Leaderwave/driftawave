import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Leadership Retreats - Visionary Leadership Fuel | Driftawave",
  description:
    "Leadership retreats that build strategic clarity, cascade engagement, and accelerate decision-making. Fuel your visionary leadership team.",
  keywords: [
    "leadership retreats",
    "executive retreats",
    "strategic planning",
    "leadership development",
    "team alignment",
  ],
};

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

export default function LeadershipPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] w-full overflow-hidden -mt-24 md:-mt-28">
        <div className="absolute inset-0">
          <Image
            src="/retreats/leadership.png"
            alt="Executive leadership team dinner at waterfront venue during strategic planning retreat"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-sunset-black/60 via-sunset-black/50 to-sunset-black/40" />
        </div>

        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-4 pt-24 md:pt-28">
          <p className="font-body text-sm uppercase tracking-widest text-sunset-gold mb-4">
            Leadership Retreat
          </p>
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl text-white mb-4">
            Visionary Leadership Fuel
          </h1>
        </div>

        {/* Gradient fade to white */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Introduction */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-display text-2xl md:text-3xl text-sunset-black text-center mb-8">
            Your leadership team has vision, strategy and talent.
          </h2>
          <div className="space-y-6 font-body font-light text-lg text-sunset-black/70 leading-relaxed">
            <p>
              Yet we have a major leadership gap that is not spoken about widely enough. In a Western World where we
              are trained on rationalising our feelings, emphatic skills can get shuttered. With the rise of AI we
              are under tremendous pressure and we need more amplification of our human side than ever before.
            </p>
            <p>
              Companies, leaders and talent are under pressure to do more with less - meanwhile we receive more
              influx than ever before.
            </p>
          </div>
        </div>
      </section>

      {/* Data Section */}
      <section className="py-24 md:py-32 section-warm">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-6 font-body font-light text-lg text-sunset-black/70 leading-relaxed">
            <p className="font-medium text-sunset-black">
              The numbers don't lie as Gallup reveals in their Global Workplace Report 2025.
            </p>
            <p>
              Manager engagement dropped to 27% while costing the global economy $438 billion in lost productivity.
              While 41% of employees are experiencing daily stress a lot of the day, compared to a staggering 51%
              in the USA.
            </p>
            <div className="bg-white p-8 rounded-brand shadow-lg">
              <p className="text-sunset-orange font-medium">
                Managers and leaders account for 70% of team engagement enablement. When leadership is disengaged,
                it spreads like wildfire through your organization.
              </p>
            </div>
            <p>
              If organizations would operate at 70% engagement, that could unlock $9.6 trillion in productivity.
              About 9,600 unicorns grazing out in the wild. Let that sink in.
            </p>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16">
            <p className="font-body text-sm uppercase tracking-widest text-sunset-orange mb-4">
              The Leadership Edge
            </p>
            <h2 className="font-display text-3xl md:text-4xl text-sunset-black">
              What Legendary Leadership Teams Build
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 bg-sunset-sand/20 rounded-brand shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <h3 className="font-display text-xl text-sunset-orange mb-4">Strategic Clarity That Survives Chaos</h3>
              <p className="font-body font-light text-sunset-black/70">
                Cut through noise to identify what actually matters. When every business is being reshuffled,
                teams with clear priorities win.
              </p>
            </div>
            <div className="p-8 bg-sunset-sand/20 rounded-brand shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <h3 className="font-display text-xl text-sunset-orange mb-4">Engagement That Cascades</h3>
              <p className="font-body font-light text-sunset-black/70">
                Leaders who reconnect with purpose naturally inspire their teams. When leadership forges connection
                through shared experience, strategic alignment becomes natural.
              </p>
            </div>
            <div className="p-8 bg-sunset-sand/20 rounded-brand shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <h3 className="font-display text-xl text-sunset-orange mb-4">Communication That Moves Fast</h3>
              <p className="font-body font-light text-sunset-black/70">
                In rapid-moving markets, the speed of trust determines the speed of execution. When leadership
                teams align deeply, decisions happen faster and land harder.
              </p>
            </div>
            <div className="p-8 bg-sunset-sand/20 rounded-brand shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <h3 className="font-display text-xl text-sunset-orange mb-4">Diversity as Competitive Advantage</h3>
              <p className="font-body font-light text-sunset-black/70">
                70% of unicorns have 'underdog' founders. The future belongs to leaders who build on inclusion
                and global perspectives.
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
                "text-white font-body font-medium text-lg",
                "transition-all duration-300",
                "shadow-lg shadow-sunset-orange/20 hover:shadow-xl hover:-translate-y-0.5"
              )}
            >
              LET'S FUEL YOUR VISIONARY LEADERSHIP
            </Link>
          </div>
        </div>
      </section>

      {/* Destinations */}
      <section className="py-24 md:py-32 bg-sunset-black text-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <p className="font-body text-sm uppercase tracking-widest text-sunset-gold mb-4">
              Inspiring Locations
            </p>
            <h2 className="font-display text-3xl md:text-4xl">
              Where Leadership Teams Find Clarity
            </h2>
          </div>
          <div className="space-y-6 font-body font-light text-lg leading-relaxed text-center text-white/80">
            <p>
              The Alps where mountain perspectives shift and strategic thinking reaches new heights. In Puglia's
              countryside where compelling vision emerges naturally among olive groves and coastal inspiration.
            </p>
            <p>
              Portugal's Atlantic edge where breakthrough leadership flows with ocean currents and volcanic landscapes.
              Cape Town's iconic landscapes where vision meets execution against Lion's Head and stretched vineyards.
            </p>
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
