import { Metadata } from "next";
import Link from "next/link";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Venues | Driftawave",
  description:
    "Discover our handpicked venues for team retreats and company offsites. From coastal villas to mountain lodges.",
  keywords: ["retreat venues", "offsite locations", "team retreat venues", "corporate event spaces"],
};

export default function VenuesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] w-full overflow-hidden -mt-24 md:-mt-28 bg-gradient-to-br from-sunset-rust to-sunset-black">
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-4 pt-24 md:pt-28">
          <p className="font-body text-sm uppercase tracking-widest text-sunset-gold mb-4">
            Curated Spaces
          </p>
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl text-white mb-4">
            Our Venues
          </h1>
          <p className="font-body font-light text-xl text-white/90 max-w-2xl">
            Handpicked locations designed for connection, creativity, and transformation
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="font-display text-3xl md:text-4xl text-sunset-black mb-6">
            Venue Directory Coming Soon
          </h2>
          <p className="font-body font-light text-lg text-gray-dark leading-relaxed mb-8">
            We're building a comprehensive directory of our partner venues across the globe.
            In the meantime, explore our retreat options or get in touch to discuss your venue needs.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/company-offsite"
              className={cn(
                "inline-flex items-center gap-2 px-8 py-4 rounded-brand",
                "bg-sunset-orange hover:bg-sunset-rust",
                "text-white font-body font-medium text-lg",
                "transition-all duration-300 shadow-lg hover:shadow-xl"
              )}
            >
              Explore Company Offsites
            </Link>
            <Link
              href="/partners/venue-partners"
              className={cn(
                "inline-flex items-center gap-2 px-8 py-4 rounded-brand",
                "border-2 border-sunset-orange text-sunset-orange",
                "hover:bg-sunset-orange hover:text-white",
                "font-body font-medium text-lg",
                "transition-all duration-300"
              )}
            >
              Become a Venue Partner
            </Link>
          </div>
        </div>
      </section>

      {/* Venue Types */}
      <section className="py-16 md:py-20 bg-sunset-sand/20">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="font-display text-3xl text-sunset-black text-center mb-12">
            Venue Types We Work With
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-brand shadow-md text-center">
              <h3 className="font-display text-xl text-sunset-orange mb-2">Coastal Villas</h3>
              <p className="font-body font-light text-gray-dark">
                Mediterranean retreats with ocean views and outdoor spaces
              </p>
            </div>
            <div className="bg-white p-6 rounded-brand shadow-md text-center">
              <h3 className="font-display text-xl text-sunset-orange mb-2">Mountain Lodges</h3>
              <p className="font-body font-light text-gray-dark">
                Alpine escapes for focused work and team bonding
              </p>
            </div>
            <div className="bg-white p-6 rounded-brand shadow-md text-center">
              <h3 className="font-display text-xl text-sunset-orange mb-2">Rural Estates</h3>
              <p className="font-body font-light text-gray-dark">
                Countryside properties with space to breathe and create
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
