import Link from "next/link";
import { Metadata } from "next";
import { cn } from "@/lib/utils";
import { Mail, Phone, Calendar } from "lucide-react";
import { PostcardCTA } from "@/components/shared";

export const metadata: Metadata = {
  title: "Legal Company Info | Driftawave",
  description: "Driftawave B.V. company information and contact details.",
};

export default function LegalCompanyInfoPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-4xl md:text-6xl text-sunset-black mb-6">
            Legal Company Info
          </h1>
        </div>
      </section>

      {/* Company Details */}
      <section className="py-16 md:py-20 bg-sunset-sand/10">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="bg-white rounded-brand p-8 md:p-12 shadow-lg">
            <div className="space-y-8">
              <div>
                <h2 className="font-display text-2xl text-sunset-orange mb-4">
                  Driftawave B.V.
                </h2>
                <p className="font-body font-light text-gray-dark leading-relaxed">
                  Roestenbergstraat 67
                  <br />
                  5171 JB Kaatsheuvel
                  <br />
                  Noord-Brabant
                  <br />
                  The Netherlands
                </p>
              </div>

              <div className="border-t border-sunset-sand/50 pt-8">
                <h3 className="font-display text-xl text-sunset-black mb-6">
                  Get in touch with us via
                </h3>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-sunset-orange/10 rounded-full">
                      <Mail className="h-5 w-5 text-sunset-orange" />
                    </div>
                    <div>
                      <h4 className="font-display text-lg text-sunset-black mb-1">Email</h4>
                      <a
                        href="mailto:info@driftawave.com"
                        className="font-body text-gray-dark hover:text-sunset-orange transition-colors"
                      >
                        info@driftawave.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-sunset-orange/10 rounded-full">
                      <Phone className="h-5 w-5 text-sunset-orange" />
                    </div>
                    <div>
                      <h4 className="font-display text-lg text-sunset-black mb-1">
                        Phone / WhatsApp
                      </h4>
                      <a
                        href="tel:+31633047991"
                        className="font-body text-gray-dark hover:text-sunset-orange transition-colors"
                      >
                        +31 6 33 04 7991
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-sunset-orange/10 rounded-full">
                      <Calendar className="h-5 w-5 text-sunset-orange" />
                    </div>
                    <div>
                      <h4 className="font-display text-lg text-sunset-black mb-1">Opening Days</h4>
                      <p className="font-body font-light text-gray-dark">
                        Monday – Friday
                        <br />
                        Excluding Bank Holidays
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t border-sunset-sand/50 pt-8 text-center">
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
                  Schedule a Meeting
                </Link>
              </div>
            </div>
          </div>

          {/* Mission Statement */}
          <div className="mt-8 bg-sunset-black rounded-brand p-8 md:p-12 text-center">
            <p className="font-display text-xl text-sunset-gold mb-4">
              Driftawave is operating remote first
            </p>
            <p className="font-body font-light text-white/80 leading-relaxed">
              Ready to revolutionize the future of work and travel
              <br />
              Making sure those IRL moments are designed with intention
              <br />
              Built to stick a lifetime
            </p>
          </div>
        </div>
      </section>

      {/* Postcard CTA */}
      <PostcardCTA />
    </>
  );
}
