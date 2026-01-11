import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Mountain Air - Company Offsites | Driftawave",
  description:
    "Catch a breath. There's POW mountains and nature hikes to scout! Alpine company offsites that energize and inspire teams.",
  keywords: ["mountain offsites", "alpine retreats", "ski resort offsite", "nature company retreat"],
};

export default function MountainAirPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] w-full overflow-hidden -mt-24 md:-mt-28">
        <div className="absolute inset-0">
          <Image
            src="/energies/mountain-air.png"
            alt="Italian alpine ski resort heated pool company offsite"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-sunset-black/50" />
        </div>
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-4 pt-24 md:pt-28">
          <p className="font-body text-sm uppercase tracking-widest text-sunset-gold mb-4">Company Offsite Energy</p>
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl text-white mb-4">Mountain Air</h1>
          <p className="font-body font-light text-xl text-white/90 max-w-2xl">
            Catch a breath Ya'll. There's POW mountains and nature hikes to scout!
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-8">
            <p className="font-body font-light text-lg text-gray-dark leading-relaxed">
              Let's get active together! Mountain Air offsites take your team to elevations where perspective
              shifts naturally. Alpine environments challenge teams physically while clarifying vision mentally.
            </p>
            <p className="font-body font-light text-lg text-gray-dark leading-relaxed">
              From Swiss chalets to Austrian ski resorts, from Italian Dolomites to Norwegian fjords – mountains
              have a way of stripping away the trivial and highlighting what truly matters.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12">
              <div className="p-6 bg-sunset-sand/20 rounded-brand">
                <h3 className="font-display text-lg text-sunset-orange mb-3">Peak Performance</h3>
                <p className="font-body font-light text-gray-dark">Altitude inspires altitude in thinking and ambition.</p>
              </div>
              <div className="p-6 bg-sunset-sand/20 rounded-brand">
                <h3 className="font-display text-lg text-sunset-orange mb-3">Active Collaboration</h3>
                <p className="font-body font-light text-gray-dark">Hiking, skiing, and wellness activities energize teams.</p>
              </div>
              <div className="p-6 bg-sunset-sand/20 rounded-brand">
                <h3 className="font-display text-lg text-sunset-orange mb-3">Fresh Perspective</h3>
                <p className="font-body font-light text-gray-dark">Crisp mountain air clears minds for breakthrough thinking.</p>
              </div>
              <div className="p-6 bg-sunset-sand/20 rounded-brand">
                <h3 className="font-display text-lg text-sunset-orange mb-3">Challenge Together</h3>
                <p className="font-body font-light text-gray-dark">Conquering trails builds trust that transfers to work.</p>
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
              Reach New Heights
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
