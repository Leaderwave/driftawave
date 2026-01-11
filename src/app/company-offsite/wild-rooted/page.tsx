import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Wild Rooted - Company Offsites | Driftawave",
  description:
    "There's nothing more humbling than being in nature. Vineyard and countryside company offsites that ground teams and foster connection.",
  keywords: ["nature offsites", "vineyard retreats", "countryside company offsite", "rural retreat"],
};

export default function WildRootedPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] w-full overflow-hidden -mt-24 md:-mt-28">
        <div className="absolute inset-0">
          <Image
            src="/energies/wild-rooted.jpg"
            alt="French vineyard company offsite accessible by train"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-sunset-black/50" />
        </div>
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-4 pt-24 md:pt-28">
          <p className="font-body text-sm uppercase tracking-widest text-sunset-gold mb-4">Company Offsite Energy</p>
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl text-white mb-4">Wild Rooted</h1>
          <p className="font-body font-light text-xl text-white/90 max-w-2xl">
            There's nothing more humbling than being in nature
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-8">
            <p className="font-body font-light text-lg text-gray-dark leading-relaxed">
              Find balance watching the fire dance. Moments of connection truly matter. Wild Rooted offsites
              ground your team in nature's wisdom – vineyards, forests, and rolling countryside.
            </p>
            <p className="font-body font-light text-lg text-gray-dark leading-relaxed">
              From French wine country to Tuscan estates, from Portuguese quintas to Scottish highlands –
              rural settings strip away digital noise and reconnect teams to what matters most.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12">
              <div className="p-6 bg-sunset-sand/20 rounded-brand">
                <h3 className="font-display text-lg text-sunset-orange mb-3">Grounding Experience</h3>
                <p className="font-body font-light text-gray-dark">Nature resets nervous systems and clears thinking.</p>
              </div>
              <div className="p-6 bg-sunset-sand/20 rounded-brand">
                <h3 className="font-display text-lg text-sunset-orange mb-3">Authentic Connection</h3>
                <p className="font-body font-light text-gray-dark">Fireside conversations build genuine relationships.</p>
              </div>
              <div className="p-6 bg-sunset-sand/20 rounded-brand">
                <h3 className="font-display text-lg text-sunset-orange mb-3">Slow Pace</h3>
                <p className="font-body font-light text-gray-dark">Countryside rhythm allows deep strategic thinking.</p>
              </div>
              <div className="p-6 bg-sunset-sand/20 rounded-brand">
                <h3 className="font-display text-lg text-sunset-orange mb-3">Farm-to-Table</h3>
                <p className="font-body font-light text-gray-dark">Local food and wine create memorable shared meals.</p>
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
              Get Rooted
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
