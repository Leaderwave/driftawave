import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Creative Pulse - Company Offsites | Driftawave",
  description:
    "Ready to shake things up? Urban art scouts and creative city offsites that spark innovation and fresh perspectives.",
  keywords: ["creative offsites", "urban retreats", "city company offsite", "art-inspired retreat"],
};

export default function CreativePulsePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] w-full overflow-hidden -mt-24 md:-mt-28">
        <div className="absolute inset-0">
          <Image
            src="/energies/creative-pulse.png"
            alt="Barcelona street art mural company offsite featuring creative team"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-sunset-black/50" />
        </div>
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-4 pt-24 md:pt-28">
          <p className="font-body text-sm uppercase tracking-widest text-sunset-gold mb-4">Company Offsite Energy</p>
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl text-white mb-4">Creative Pulse</h1>
          <p className="font-body font-light text-xl text-white/90 max-w-2xl">
            Ready to shake things up? Let's hop on an urban art scout
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-8">
            <p className="font-body font-light text-lg text-gray-dark leading-relaxed">
              Share the mysteries along. Creative Pulse offsites immerse your team in vibrant urban cultures
              where art, design, and innovation collide on every street corner.
            </p>
            <p className="font-body font-light text-lg text-gray-dark leading-relaxed">
              From Barcelona's street art scene to Berlin's creative districts, from Lisbon's tile-covered
              streets to Amsterdam's design studios – cities pulse with creative energy that ignites teams.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12">
              <div className="p-6 bg-sunset-sand/20 rounded-brand">
                <h3 className="font-display text-lg text-sunset-orange mb-3">Urban Inspiration</h3>
                <p className="font-body font-light text-gray-dark">City streets spark unexpected creative connections.</p>
              </div>
              <div className="p-6 bg-sunset-sand/20 rounded-brand">
                <h3 className="font-display text-lg text-sunset-orange mb-3">Cultural Immersion</h3>
                <p className="font-body font-light text-gray-dark">Art, music, and food experiences broaden perspectives.</p>
              </div>
              <div className="p-6 bg-sunset-sand/20 rounded-brand">
                <h3 className="font-display text-lg text-sunset-orange mb-3">Design Thinking</h3>
                <p className="font-body font-light text-gray-dark">Creative workshops in inspiring studio spaces.</p>
              </div>
              <div className="p-6 bg-sunset-sand/20 rounded-brand">
                <h3 className="font-display text-lg text-sunset-orange mb-3">Night Energy</h3>
                <p className="font-body font-light text-gray-dark">Vibrant nightlife builds bonds beyond the boardroom.</p>
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
              Feel the Pulse
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
