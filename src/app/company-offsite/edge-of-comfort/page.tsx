import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Edge of Comfort - Company Offsites | Driftawave",
  description:
    "Ready to push boundaries? Adventure company offsites that build growth mindset and team resilience through challenge.",
  keywords: ["adventure offsites", "extreme retreats", "challenge company offsite", "growth mindset retreat"],
};

export default function EdgeOfComfortPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] w-full overflow-hidden -mt-24 md:-mt-28">
        <div className="absolute inset-0">
          <Image
            src="/energies/edge-of-comfort.jpg"
            alt="New Zealand skydiving adventure company offsite"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-sunset-black/50" />
        </div>
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-4 pt-24 md:pt-28">
          <p className="font-body text-sm uppercase tracking-widest text-sunset-gold mb-4">Company Offsite Energy</p>
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl text-white mb-4">Edge of Comfort</h1>
          <p className="font-body font-light text-xl text-white/90 max-w-2xl">
            Ready to push boundaries? Fly on energy!
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-8">
            <p className="font-body font-light text-lg text-gray-dark leading-relaxed">
              Growth mindset was never found in the predictable. Edge of Comfort offsites push your team
              beyond their limits – because breakthroughs happen when comfort zones shatter.
            </p>
            <p className="font-body font-light text-lg text-gray-dark leading-relaxed">
              From New Zealand's adventure capital to Iceland's volcanic landscapes, from Costa Rica's
              jungle expeditions to Morocco's desert challenges – these experiences forge unbreakable teams.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12">
              <div className="p-6 bg-sunset-sand/20 rounded-brand">
                <h3 className="font-display text-lg text-sunset-orange mb-3">Growth Through Challenge</h3>
                <p className="font-body font-light text-gray-dark">Pushing limits reveals hidden potential.</p>
              </div>
              <div className="p-6 bg-sunset-sand/20 rounded-brand">
                <h3 className="font-display text-lg text-sunset-orange mb-3">Trust Under Pressure</h3>
                <p className="font-body font-light text-gray-dark">Shared challenges build unshakeable bonds.</p>
              </div>
              <div className="p-6 bg-sunset-sand/20 rounded-brand">
                <h3 className="font-display text-lg text-sunset-orange mb-3">Resilience Building</h3>
                <p className="font-body font-light text-gray-dark">Teams that overcome together, succeed together.</p>
              </div>
              <div className="p-6 bg-sunset-sand/20 rounded-brand">
                <h3 className="font-display text-lg text-sunset-orange mb-3">Story Creation</h3>
                <p className="font-body font-light text-gray-dark">Epic adventures become legendary team stories.</p>
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
              Push the Boundary
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
