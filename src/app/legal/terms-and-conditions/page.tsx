import Link from "next/link";
import { Metadata } from "next";
import { PostcardCTA } from "@/components/shared";

export const metadata: Metadata = {
  title: "Terms and Conditions | Driftawave",
  description: "General terms and conditions for all bookings with Driftawave B.V.",
};

export default function TermsAndConditionsPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-4xl md:text-6xl text-sunset-black mb-6">
            Terms and Conditions
          </h1>
          <p className="font-body font-light text-xl text-gray-dark max-w-3xl mx-auto">
            General terms and conditions apply to all bookings you make with Driftawave B.V.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-20 bg-sunset-sand/10">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-brand p-8 md:p-12 shadow-lg prose prose-lg max-w-none">
            <p className="font-body font-light text-gray-dark leading-relaxed mb-6">
              Driftawave B.V. is registered with the General Dutch Association of Travel Agencies
              (ANVR), Travellers Guarantee Fund (VZR Garant) and the warranty agreements included in
              the Calamity Fund (Calamiteitenfonds).
            </p>

            <p className="font-body font-light text-gray-dark leading-relaxed mb-8">
              Before making a booking with us you must ensure that you have read and understood
              these booking conditions. By asking us to confirm your booking you are accepting the
              terms and conditions laid out below.
            </p>

            <h2 className="font-display text-2xl text-sunset-orange mt-10 mb-4">
              Types of Agreements
            </h2>

            <h3 className="font-display text-xl text-sunset-black mt-8 mb-3">
              1. Package Travel Agreement
            </h3>
            <p className="font-body font-light text-gray-dark leading-relaxed mb-4">
              If you book a package trip where the organizer is Driftawave, you enter into a package
              travel agreement with Driftawave B.V. The ANVR Traveler Conditions and General Travel
              Conditions apply.
            </p>
            <p className="font-body font-light text-gray-dark leading-relaxed mb-6">
              ANVR Traveler conditions:{" "}
              <a
                href="https://www.anvr.nl/travellerterms.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sunset-orange hover:text-sunset-rust"
              >
                www.anvr.nl/travellerterms.pdf
              </a>
            </p>

            <h3 className="font-display text-xl text-sunset-black mt-8 mb-3">
              2. Third Party Organizer
            </h3>
            <p className="font-body font-light text-gray-dark leading-relaxed mb-6">
              If a company other than Driftawave B.V. is the organizer of the package tour, you
              enter into a travel agreement with that relevant organizer. Driftawave B.V. only acts
              as a reseller.
            </p>

            <h3 className="font-display text-xl text-sunset-black mt-8 mb-3">
              3. Non-Package Trips
            </h3>
            <p className="font-body font-light text-gray-dark leading-relaxed mb-6">
              For trips that don't meet package trip criteria, the general terms and conditions of
              the relevant entity and/or tour operator apply.
            </p>

            <h3 className="font-display text-xl text-sunset-black mt-8 mb-3">4. Reservations</h3>
            <p className="font-body font-light text-gray-dark leading-relaxed mb-6">
              When Driftawave B.V. makes your reservation, an agreement ensues between you and the
              service provider. We make reservations for airline tickets, car rentals, transfers,
              and hotel rooms.
            </p>

            <h2 className="font-display text-2xl text-sunset-orange mt-10 mb-4">
              Guarantee and Insolvency Protection
            </h2>
            <p className="font-body font-light text-gray-dark leading-relaxed mb-4">
              Driftawave B.V. uses VZR Garant's guarantee scheme (
              <a
                href="https://www.vzr-garant.nl/en"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sunset-orange hover:text-sunset-rust"
              >
                www.vzr-garant.nl/en
              </a>
              ). If services are not provided due to financial insolvency, you can contact VZR
              Garant:
            </p>
            <ul className="font-body font-light text-gray-dark leading-relaxed space-y-2 mb-6 list-disc list-inside">
              <li>Address: Torenallee 20, 5617 BC Eindhoven, Netherlands</li>
              <li>
                Email:{" "}
                <a
                  href="mailto:info@vzr-garant.nl"
                  className="text-sunset-orange hover:text-sunset-rust"
                >
                  info@vzr-garant.nl
                </a>
              </li>
              <li>Phone: +31 (0)85 13 07 630</li>
            </ul>

            <h2 className="font-display text-2xl text-sunset-orange mt-10 mb-4">Calamity Fund</h2>
            <p className="font-body font-light text-gray-dark leading-relaxed mb-4">
              The Calamities Fund Foundation terms apply to all package tours. You may receive your
              travel sum back if the trip cannot be carried out due to a calamity (war or natural
              disaster).
            </p>
            <p className="font-body font-light text-gray-dark leading-relaxed mb-6 italic">
              *Disclaimer: The Calamities Fund Foundation is only applicable for Dutch passport
              holders, passengers flying to/from The Netherlands, and Dutch citizens and close
              border residents.
            </p>

            <h2 className="font-display text-2xl text-sunset-orange mt-10 mb-4">
              Personal Information
            </h2>
            <p className="font-body font-light text-gray-dark leading-relaxed mb-6">
              Each passenger is responsible for the accuracy of information provided when making a
              reservation. Driftawave B.V. is not liable for damages if you cannot be reached due to
              incorrect contact information.
            </p>

            <h2 className="font-display text-2xl text-sunset-orange mt-10 mb-4">Cancellation</h2>
            <p className="font-body font-light text-gray-dark leading-relaxed mb-6">
              If you wish to cancel, the Driftawave B.V. cancellation policy is applicable. See our{" "}
              <Link
                href="/legal/cancellation-policy"
                className="text-sunset-orange hover:text-sunset-rust"
              >
                Cancellation Policy
              </Link>{" "}
              for details.
            </p>

            <h2 className="font-display text-2xl text-sunset-orange mt-10 mb-4">
              Health & Travel Insurance Requirement
            </h2>
            <p className="font-body font-light text-gray-dark leading-relaxed mb-6">
              We require you to personally purchase health & travel insurance that fully covers all
              your personal requirements including pre-existing medical conditions, cancellation
              charges, medical expenses and repatriation.
            </p>

            <h2 className="font-display text-2xl text-sunset-orange mt-10 mb-4">Liability</h2>
            <p className="font-body font-light text-gray-dark leading-relaxed mb-6">
              Driftawave B.V. takes responsibility for being an excellent provider. Liability is
              limited to a maximum of 20% of invoiced services where Driftawave B.V. is clearly at
              fault.
            </p>

            <h2 className="font-display text-2xl text-sunset-orange mt-10 mb-4">
              Applicable Law and Disputes
            </h2>
            <p className="font-body font-light text-gray-dark leading-relaxed mb-6">
              Dutch law is applicable to all agreements. Complaints may be submitted to Driftawave
              B.V. up to one month after completion of the service, or to the Dispute Committee via
              geschillencommissie.nl up to three months after.
            </p>

            <div className="mt-12 p-6 bg-sunset-sand/20 rounded-brand text-center">
              <p className="font-body font-light text-gray-dark mb-4">
                Questions about our terms and conditions?
              </p>
              <a
                href="mailto:info@driftawave.com"
                className="font-body text-sunset-orange hover:text-sunset-rust font-medium"
              >
                Contact us at info@driftawave.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Postcard CTA */}
      <PostcardCTA />
    </>
  );
}
