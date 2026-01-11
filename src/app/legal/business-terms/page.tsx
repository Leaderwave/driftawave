import { Metadata } from "next";
import { PostcardCTA } from "@/components/shared";

export const metadata: Metadata = {
  title: "Business Terms and Conditions (B2B) | Driftawave",
  description:
    "Business Terms and Conditions for corporate clients booking with Driftawave B.V.",
};

export default function BusinessTermsPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-4xl md:text-6xl text-sunset-black mb-6">
            Business Terms and Conditions
          </h1>
          <p className="font-body font-light text-xl text-gray-dark max-w-3xl mx-auto">
            Terms and Conditions for Corporate Clients (B2B)
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-20 bg-sunset-sand/10">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-brand p-8 md:p-12 shadow-lg prose prose-lg max-w-none">
            <h2 className="font-display text-2xl text-sunset-orange mt-0 mb-4">Introduction</h2>
            <p className="font-body font-light text-gray-dark leading-relaxed mb-6">
              These Business Terms and Conditions apply to all travel services provided by the
              travel company based on a framework agreement. This may include the facilitation of
              tickets on a regular basis, but also services facilitating overnight stays or other
              travel services.
            </p>
            <p className="font-body font-light text-gray-dark leading-relaxed mb-8">
              Because the travel company offers and provides these services on a business-like basis
              and based on a framework agreement, the provisions of Title 7A of Book 7 of the Dutch
              Civil Code (package travel and linked travel arrangements) do not apply to the legal
              relationship between the travel company and the business client.
            </p>

            <h2 className="font-display text-2xl text-sunset-orange mt-10 mb-4">
              Article 1. Applicability
            </h2>
            <ul className="font-body font-light text-gray-dark leading-relaxed space-y-3 mb-6 list-disc list-inside">
              <li>These General Business Terms and Conditions govern the relationship between the travel company and its client(s).</li>
              <li>These Business Terms and Conditions and the exclusions and/or limitations of the travel company's liability are also for the benefit of employees, agents, and intermediaries.</li>
              <li>The applicability of any general terms and conditions used by the client is explicitly excluded.</li>
            </ul>

            <h2 className="font-display text-2xl text-sunset-orange mt-10 mb-4">
              Article 2. Definitions
            </h2>
            <ul className="font-body font-light text-gray-dark leading-relaxed space-y-3 mb-6 list-disc list-inside">
              <li><strong>Travel company:</strong> Acts in the capacity of intermediary</li>
              <li><strong>Client:</strong> A legal entity or natural person acting in the exercise of a profession or business</li>
              <li><strong>Traveller:</strong> The person(s) to whom services are provided based on the agreement</li>
              <li><strong>Travel Service Provider:</strong> The carrier, accommodation provider or other provider of travel services</li>
            </ul>

            <h2 className="font-display text-2xl text-sunset-orange mt-10 mb-4">
              Article 3. Services
            </h2>
            <p className="font-body font-light text-gray-dark leading-relaxed mb-4">
              The services of the travel company relate to:
            </p>
            <ul className="font-body font-light text-gray-dark leading-relaxed space-y-2 mb-6 list-disc list-inside">
              <li>The provision of information and advice on travel in the broadest sense</li>
              <li>Mediating in the conclusion of agreements between the client and travel service providers</li>
            </ul>
            <p className="font-body font-light text-gray-dark leading-relaxed mb-6">
              If the travel company makes reservations on behalf of the client, it will be the client
              that enters into the agreement with the actual provider of the travel service.
            </p>

            <h2 className="font-display text-2xl text-sunset-orange mt-10 mb-4">
              Article 5. Travellers Protection
            </h2>
            <p className="font-body font-light text-gray-dark leading-relaxed mb-6">
              Driftawave B.V. uses the guarantee scheme provided by VZR Garant (
              <a
                href="https://www.vzr-garant.nl/en"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sunset-orange hover:text-sunset-rust"
              >
                www.vzr-garant.nl/en
              </a>
              ). If services are not provided due to the financial insolvency of Driftawave B.V.,
              you can contact VZR Garant at Torenallee 20, 5617 BC Eindhoven, Netherlands, or email{" "}
              <a
                href="mailto:info@vzr-garant.nl"
                className="text-sunset-orange hover:text-sunset-rust"
              >
                info@vzr-garant.nl
              </a>
              .
            </p>

            <h2 className="font-display text-2xl text-sunset-orange mt-10 mb-4">
              Article 7. Payment
            </h2>
            <ul className="font-body font-light text-gray-dark leading-relaxed space-y-3 mb-6 list-disc list-inside">
              <li>The client shall be liable for all obligations arising from the agreement</li>
              <li>Payment must be made within the period stated on the invoice, or within 14 days if no term is specified</li>
              <li>Costs related to the method of payment shall be borne by the client</li>
              <li>Late payment results in statutory interest on the amount due</li>
            </ul>

            <h2 className="font-display text-2xl text-sunset-orange mt-10 mb-4">
              Article 8. Changes and Cancellations
            </h2>
            <p className="font-body font-light text-gray-dark leading-relaxed mb-4">
              If the client wishes to make changes after the conclusion of the agreement:
            </p>
            <ul className="font-body font-light text-gray-dark leading-relaxed space-y-2 mb-6 list-disc list-inside">
              <li>Changes are only possible if agreement has been reached between parties</li>
              <li>The client bears the costs associated with changes</li>
              <li>Cancellation must be communicated in writing</li>
              <li>All related costs charged by the travel service provider shall be borne by the client</li>
            </ul>

            <h2 className="font-display text-2xl text-sunset-orange mt-10 mb-4">
              Article 10. Liability
            </h2>
            <p className="font-body font-light text-gray-dark leading-relaxed mb-4">
              The travel company will take the interests of the client and traveller into account
              with due care as may reasonably be expected. However:
            </p>
            <ul className="font-body font-light text-gray-dark leading-relaxed space-y-2 mb-6 list-disc list-inside">
              <li>The travel company does not accept liability for acts/omissions by travel service providers</li>
              <li>No liability for circumstances that cannot be attributed to the travel company (force majeure)</li>
              <li>No liability for accuracy of information provided by travel service providers</li>
              <li>Liability is limited to the value of the invoiced travel service</li>
              <li>No liability for financial insolvency of travel service provider(s)</li>
            </ul>

            <div className="mt-12 p-6 bg-sunset-sand/20 rounded-brand">
              <p className="font-body font-light text-gray-dark mb-4 text-center">
                For the complete Business Terms and Conditions document, or any questions:
              </p>
              <div className="text-center">
                <a
                  href="mailto:info@driftawave.com"
                  className="font-body text-sunset-orange hover:text-sunset-rust font-medium"
                >
                  Contact us at info@driftawave.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Postcard CTA */}
      <PostcardCTA />
    </>
  );
}
