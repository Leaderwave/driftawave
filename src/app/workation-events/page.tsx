import { Metadata } from "next";
import Link from "next/link";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Workation Events | Driftawave",
  description:
    "Join our curated workation events around the world. Network with remote professionals while exploring amazing destinations.",
  keywords: ["workation events", "remote work events", "digital nomad events", "coworking retreats"],
};

export default function WorkationEventsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] w-full overflow-hidden -mt-24 md:-mt-28 bg-gradient-to-br from-sunset-orange to-sunset-rust">
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-4 pt-24 md:pt-28">
          <p className="font-body text-sm uppercase tracking-widest text-sunset-gold mb-4">
            Coming Soon
          </p>
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl text-white mb-4">
            Workation Events
          </h1>
          <p className="font-body font-light text-xl text-white/90 max-w-2xl">
            Curated experiences for remote professionals who want to work, explore, and connect
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="font-display text-3xl md:text-4xl text-sunset-black mb-6">
            New Events Launching Soon
          </h2>
          <p className="font-body font-light text-lg text-gray-dark leading-relaxed mb-8">
            We're planning exciting workation events in stunning destinations around the world.
            Sign up for our newsletter to be the first to know when new events are announced.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className={cn(
                "inline-flex items-center gap-2 px-8 py-4 rounded-brand",
                "bg-sunset-orange hover:bg-sunset-rust",
                "text-white font-body font-medium text-lg",
                "transition-all duration-300 shadow-lg hover:shadow-xl"
              )}
            >
              Get Notified
            </Link>
            <Link
              href="/team-retreat"
              className={cn(
                "inline-flex items-center gap-2 px-8 py-4 rounded-brand",
                "border-2 border-sunset-orange text-sunset-orange",
                "hover:bg-sunset-orange hover:text-white",
                "font-body font-medium text-lg",
                "transition-all duration-300"
              )}
            >
              Explore Team Retreats
            </Link>
          </div>
        </div>
      </section>

      {/* Past Events Teaser */}
      <section className="py-16 md:py-20 bg-sunset-sand/20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-display text-3xl text-sunset-black text-center mb-12">
            Past Workation Highlights
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-brand shadow-md">
              <h3 className="font-display text-xl text-sunset-orange mb-2">Croatia Sailing 2023</h3>
              <p className="font-body font-light text-gray-dark">
                A week-long sailing adventure along the Adriatic coast, combining work sessions with island exploration.
              </p>
            </div>
            <div className="bg-white p-6 rounded-brand shadow-md">
              <h3 className="font-display text-xl text-sunset-orange mb-2">Palermo Retreat 2024</h3>
              <p className="font-body font-light text-gray-dark">
                A female-focused remote worker retreat in Sicily, featuring coworking, networking, and cultural experiences.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
