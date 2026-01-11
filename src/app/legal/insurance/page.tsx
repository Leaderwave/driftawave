import Link from "next/link";
import { Metadata } from "next";
import { cn } from "@/lib/utils";
import { PostcardCTA } from "@/components/shared";

export const metadata: Metadata = {
  title: "Insurance | Driftawave",
  description:
    "Travel insurance information for Driftawave travelers - solo and corporate options.",
};

export default function InsurancePage() {
  return (
    <>
      {/* Hero */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-4xl md:text-6xl text-sunset-black mb-6">Insurance</h1>
          <p className="font-body font-light text-xl text-gray-dark max-w-3xl mx-auto">
            Travelling and exploring are some of the most exciting gifts we can get in life.
            <br />
            Yet the unexpected hides in many corners.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-20 bg-sunset-sand/10">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-brand p-8 md:p-12 shadow-lg mb-8">
            <p className="font-body font-light text-lg text-gray-dark leading-relaxed text-center mb-8">
              We advise you to always be fully prepared and insured, prior to taking off or even
              completing the booking so everything is validated.
            </p>
            <p className="font-body font-light text-lg text-gray-dark leading-relaxed text-center">
              We are more than happy to assist you with information, whether you are joining a
              travel experience as a solo traveller looking to find community, upskill and more. Or
              a company looking to take their team abroad.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Solo Traveler */}
            <div className="bg-white rounded-brand p-8 shadow-lg">
              <h2 className="font-display text-2xl text-sunset-orange mb-6">Solo Traveler?</h2>
              <p className="font-body font-light text-gray-dark leading-relaxed mb-6">
                Obtain an insurance from trusted parties such as:
              </p>
              <ul className="font-body font-light text-gray-dark leading-relaxed space-y-2 mb-6">
                <li className="flex items-center gap-2">
                  <span className="text-sunset-orange font-bold">→</span>
                  <a
                    href="https://www.genki.world"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sunset-orange hover:text-sunset-rust"
                  >
                    Genki
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-sunset-orange font-bold">→</span>
                  <a
                    href="https://www.allianz.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sunset-orange hover:text-sunset-rust"
                  >
                    Allianz
                  </a>
                </li>
              </ul>
            </div>

            {/* Corporate Client */}
            <div className="bg-sunset-black rounded-brand p-8 text-white">
              <h2 className="font-display text-2xl text-sunset-gold mb-6">Corporate Client?</h2>
              <p className="font-body font-light text-white/80 leading-relaxed mb-6">
                Schedule a call so we can discuss the different options.
              </p>
              <p className="font-body font-light text-white/80 leading-relaxed mb-8">
                From no risk team retreat / offsite coverage, up to EOR (Employee of Record) and
                Workation tracking for Global Mobility Leaders.
              </p>
              <Link
                href="https://meet-ting.com/to/driftawave"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "inline-flex items-center gap-2 px-6 py-3 rounded-brand",
                  "bg-sunset-orange hover:bg-sunset-rust",
                  "text-white font-body font-medium",
                  "transition-all duration-300"
                )}
              >
                Schedule a Chat
              </Link>
            </div>
          </div>

          {/* Protection Info */}
          <div className="mt-8 bg-white rounded-brand p-8 shadow-lg">
            <h2 className="font-display text-2xl text-sunset-orange mb-6 text-center">
              Your Booking is Protected
            </h2>
            <p className="font-body font-light text-gray-dark leading-relaxed text-center mb-6">
              When you book with Driftawave B.V., your booking is protected through:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-4">
                <h3 className="font-display text-lg text-sunset-black mb-2">VZR Garant</h3>
                <p className="font-body font-light text-sm text-gray-dark">
                  Insolvency protection
                </p>
              </div>
              <div className="text-center p-4">
                <h3 className="font-display text-lg text-sunset-black mb-2">Calamiteitenfonds</h3>
                <p className="font-body font-light text-sm text-gray-dark">
                  Calamity fund coverage
                </p>
              </div>
              <div className="text-center p-4">
                <h3 className="font-display text-lg text-sunset-black mb-2">AON</h3>
                <p className="font-body font-light text-sm text-gray-dark">
                  Travel liability up to €6M
                </p>
              </div>
            </div>
            <p className="font-body font-light text-center text-gray-dark mt-6">
              <Link href="/legal/vzr-protection" className="text-sunset-orange hover:text-sunset-rust">
                Learn more about VZR Protection →
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* Postcard CTA */}
      <PostcardCTA />
    </>
  );
}
