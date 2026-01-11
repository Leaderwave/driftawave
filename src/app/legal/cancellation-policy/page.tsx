import Link from "next/link";
import { Metadata } from "next";
import { cn } from "@/lib/utils";
import { PostcardCTA } from "@/components/shared";

export const metadata: Metadata = {
  title: "Cancellation Policy | Driftawave",
  description: "Cancellation policy for bookings made with Driftawave B.V.",
};

export default function CancellationPolicyPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-4xl md:text-6xl text-sunset-black mb-6">
            Cancellation Policy
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-20 bg-sunset-sand/10">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-brand p-8 md:p-12 shadow-lg">
            <h2 className="font-display text-2xl text-sunset-orange mb-6">
              1.1 Standard Cancellation
            </h2>
            <p className="font-body font-light text-gray-dark leading-relaxed mb-6">
              If you wish to cancel your trip, you will need to inform Driftawave B.V. as soon as
              possible by email (
              <a
                href="mailto:info@driftawave.com"
                className="text-sunset-orange hover:text-sunset-rust"
              >
                info@driftawave.com
              </a>
              ). In case of cancellation by the traveller, the following costs will be charged:
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-sunset-sand/30">
                    <th className="border border-sunset-sand/50 px-4 py-3 text-left font-display text-sunset-black">
                      Cancellation Timing
                    </th>
                    <th className="border border-sunset-sand/50 px-4 py-3 text-left font-display text-sunset-black">
                      Costs Charged
                    </th>
                  </tr>
                </thead>
                <tbody className="font-body font-light text-gray-dark">
                  <tr>
                    <td className="border border-sunset-sand/50 px-4 py-3">
                      Till 56 days* before departure
                    </td>
                    <td className="border border-sunset-sand/50 px-4 py-3">
                      15% of total travel cost** (minimum €250 per person)
                    </td>
                  </tr>
                  <tr className="bg-sunset-sand/10">
                    <td className="border border-sunset-sand/50 px-4 py-3">
                      From 56 to 28 days* before departure
                    </td>
                    <td className="border border-sunset-sand/50 px-4 py-3">
                      50% of total travel cost**
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-sunset-sand/50 px-4 py-3">
                      From 28th to 14th day before departure
                    </td>
                    <td className="border border-sunset-sand/50 px-4 py-3">
                      75% of total travel cost**
                    </td>
                  </tr>
                  <tr className="bg-sunset-sand/10">
                    <td className="border border-sunset-sand/50 px-4 py-3">
                      From 14th day until departure or later
                    </td>
                    <td className="border border-sunset-sand/50 px-4 py-3">
                      Full travel cost**
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="font-body font-light text-sm text-gray-dark/70 mb-4">
              * Counted from the first office opening day after receiving the email.
            </p>
            <p className="font-body font-light text-sm text-gray-dark/70 mb-8">
              ** The total travel cost includes the published travel cost, any (international)
              flights, airport taxes, surcharges, visa fees, change fees, additional costs. These
              amounts are covered by cancellation insurance (provided you have a valid reason).
            </p>

            <h2 className="font-display text-2xl text-sunset-orange mb-6 mt-10">
              1.2 Exceptional Cancellation
            </h2>
            <p className="font-body font-light text-gray-dark leading-relaxed mb-8">
              In specific cases, the cancellation dates and fees may differ. When applicable, this
              will be communicated prior to booking. This is to ensure quality departures and
              ongoing support for our partners in collaboration.
            </p>

            <h2 className="font-display text-2xl text-sunset-orange mb-6">2. Payments</h2>
            <p className="font-body font-light text-gray-dark leading-relaxed mb-4">
              The first payment of <strong className="text-sunset-black">25%</strong> will have to
              be received by us within 3 days after booking.
            </p>
            <p className="font-body font-light text-gray-dark leading-relaxed mb-8">
              The remaining amount of the travel sum has to be received by us{" "}
              <strong className="text-sunset-black">latest 6 weeks before departure</strong>.
            </p>

            <h2 className="font-display text-2xl text-sunset-orange mb-6">3. Additional Costs</h2>
            <ul className="font-body font-light text-gray-dark leading-relaxed space-y-3 mb-8 list-disc list-inside">
              <li>
                Booking fee: €27,50 (1 person) or €42,50 (2 people or more)
              </li>
              <li>Calamity fund contribution: €2,50</li>
              <li>VZR Garant protection fee</li>
              <li>Optional: Private room upgrade, location excursions</li>
              <li>Amendment costs: €50 per booking for changes</li>
            </ul>

            <h2 className="font-display text-2xl text-sunset-orange mb-6">4. Travel Documents</h2>
            <p className="font-body font-light text-gray-dark leading-relaxed mb-8">
              As a traveller, you are responsible for a valid international travel passport, visa,
              and/or any other travel documents. Always check local government resources for the
              most up-to-date information.
            </p>

            <h2 className="font-display text-2xl text-sunset-orange mb-6">
              5. Protection of Your Personal Data
            </h2>
            <p className="font-body font-light text-gray-dark leading-relaxed mb-8">
              Driftawave B.V. handles your personal information confidentially. See our{" "}
              <Link href="/legal/privacy" className="text-sunset-orange hover:text-sunset-rust">
                Privacy Policy
              </Link>{" "}
              for all information regarding usage of this website and the cookie policy.
            </p>

            <div className="mt-12 p-6 bg-sunset-sand/20 rounded-brand text-center">
              <p className="font-body font-light text-gray-dark mb-4">
                Questions about our cancellation policy?
              </p>
              <Link
                href="/contact"
                className={cn(
                  "inline-flex items-center gap-2 px-6 py-3 rounded-brand",
                  "bg-sunset-orange hover:bg-sunset-rust",
                  "text-white font-body font-medium",
                  "transition-all duration-300"
                )}
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Postcard CTA */}
      <PostcardCTA />
    </>
  );
}
