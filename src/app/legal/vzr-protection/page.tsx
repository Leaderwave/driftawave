import Link from "next/link";
import { Metadata } from "next";
import { cn } from "@/lib/utils";
import { Shield, CheckCircle } from "lucide-react";
import { PostcardCTA } from "@/components/shared";

export const metadata: Metadata = {
  title: "VZR Garant Protection | Driftawave",
  description:
    "VZR Garant insolvency protection - your booking is safe and protected with Driftawave.",
};

export default function VZRProtectionPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-sunset-orange/10 rounded-full">
              <Shield className="h-12 w-12 text-sunset-orange" />
            </div>
          </div>
          <h1 className="font-display text-4xl md:text-6xl text-sunset-black mb-6">
            VZR Garant
          </h1>
          <p className="font-display text-xl text-sunset-orange">
            Simply because we love our Travellers Protection
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-20 bg-sunset-sand/10">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-brand p-8 md:p-12 shadow-lg">
            <h2 className="font-display text-2xl text-sunset-orange mb-6">
              Guarantee Arranged | VZR Garant
            </h2>

            <p className="font-body font-light text-gray-dark leading-relaxed mb-6">
              The combination of travel services offered to you constitutes a travel package within
              the meaning of the Package Travel Directive (EU) 2015/2302. This means that you are
              entitled to make claims under all EU legislation applying to travel packages.
            </p>

            <p className="font-body font-light text-gray-dark leading-relaxed mb-6">
              In order to meet its statutory obligation to provide a guarantee, Driftawave B.V. uses
              VZR Garant for all travel packages. VZR Garant is a recognised guarantee scheme.
            </p>

            <div className="bg-sunset-sand/20 rounded-brand p-6 my-8">
              <h3 className="font-display text-xl text-sunset-black mb-4">What This Means for You</h3>
              <p className="font-body font-light text-gray-dark leading-relaxed">
                If Driftawave B.V. should become financially insolvent before the end of your
                booking, VZR Garant will, depending on the situation, ensure that you:
              </p>
              <ul className="mt-4 space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-sunset-orange flex-shrink-0 mt-0.5" />
                  <span className="font-body font-light text-gray-dark">
                    Get your booking payment back
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-sunset-orange flex-shrink-0 mt-0.5" />
                  <span className="font-body font-light text-gray-dark">
                    Are able to continue with your booking
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-sunset-orange flex-shrink-0 mt-0.5" />
                  <span className="font-body font-light text-gray-dark">Are repatriated</span>
                </li>
              </ul>
            </div>

            <p className="font-body font-light text-gray-dark leading-relaxed mb-6">
              You can find the conditions for the guarantee scheme on VZR Garant's website:{" "}
              <a
                href="https://www.vzr-garant.nl/en"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sunset-orange hover:text-sunset-rust"
              >
                www.vzr-garant.nl/en
              </a>
            </p>

            <h2 className="font-display text-2xl text-sunset-orange mb-6 mt-10">
              Contact VZR Garant
            </h2>
            <p className="font-body font-light text-gray-dark leading-relaxed mb-4">
              If services are not provided by Driftawave B.V. due to insolvency, you can contact VZR
              Garant:
            </p>
            <div className="bg-sunset-sand/20 rounded-brand p-6">
              <ul className="font-body font-light text-gray-dark leading-relaxed space-y-2">
                <li>
                  <strong className="text-sunset-black">Address:</strong> Torenallee 20, 5617 BC
                  Eindhoven, Netherlands
                </li>
                <li>
                  <strong className="text-sunset-black">Email:</strong>{" "}
                  <a
                    href="mailto:info@vzr-garant.nl"
                    className="text-sunset-orange hover:text-sunset-rust"
                  >
                    info@vzr-garant.nl
                  </a>
                </li>
                <li>
                  <strong className="text-sunset-black">Phone:</strong> +31 (0)85 13 07 630
                </li>
              </ul>
            </div>

            <div className="mt-12 text-center">
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
                Would like to have a chat about it?
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
