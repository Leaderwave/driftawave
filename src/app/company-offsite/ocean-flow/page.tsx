import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Ocean Flow - Company Offsites | Driftawave",
  description:
    "When ideas flow like the tide and strategies merge from the depth. Mediterranean and coastal company offsites that inspire strategic thinking.",
  keywords: ["ocean offsites", "coastal retreats", "Mediterranean company retreat", "beach offsite"],
};

export default function OceanFlowPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] w-full overflow-hidden -mt-24 md:-mt-28">
        <div className="absolute inset-0">
          <Image
            src="/energies/ocean-flow.png"
            alt="Greek ocean resort company offsite with Mediterranean views"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-sunset-black/50" />
        </div>
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-4 pt-24 md:pt-28">
          <p className="font-body text-sm uppercase tracking-widest text-sunset-gold mb-4">Company Offsite Energy</p>
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl text-white mb-4">Ocean Flow</h1>
          <p className="font-body font-light text-xl text-white/90 max-w-2xl">
            When ideas flow like the tide and strategies merge from the depth
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-8">
            <p className="font-body font-light text-lg text-gray-dark leading-relaxed">
              What on earth is stopping you from planning your next offsite? Ocean Flow offsites harness the
              calming yet energizing power of coastal environments to unlock your team's strategic potential.
            </p>
            <p className="font-body font-light text-lg text-gray-dark leading-relaxed">
              From the Greek islands to the Portuguese Algarve, from Croatia's Adriatic coastline to Bali's
              serene beaches – water has a way of washing away mental blocks and letting fresh ideas surface.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12">
              <div className="p-6 bg-sunset-sand/20 rounded-brand">
                <h3 className="font-display text-lg text-sunset-orange mb-3">Strategic Deep Dives</h3>
                <p className="font-body font-light text-gray-dark">Ocean rhythms naturally pace strategic conversations.</p>
              </div>
              <div className="p-6 bg-sunset-sand/20 rounded-brand">
                <h3 className="font-display text-lg text-sunset-orange mb-3">Flow State Facilitation</h3>
                <p className="font-body font-light text-gray-dark">Coastal settings induce the creative flow your team needs.</p>
              </div>
              <div className="p-6 bg-sunset-sand/20 rounded-brand">
                <h3 className="font-display text-lg text-sunset-orange mb-3">Horizon Thinking</h3>
                <p className="font-body font-light text-gray-dark">Endless ocean views expand perspective and possibility.</p>
              </div>
              <div className="p-6 bg-sunset-sand/20 rounded-brand">
                <h3 className="font-display text-lg text-sunset-orange mb-3">Team Bonding</h3>
                <p className="font-body font-light text-gray-dark">Sailing, snorkeling, and sunset sessions forge lasting bonds.</p>
              </div>
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
                "transition-all duration-300 shadow-lg hover:shadow-xl"
              )}
            >
              Ride the Wave
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
