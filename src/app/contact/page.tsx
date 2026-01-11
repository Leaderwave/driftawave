import Link from "next/link";
import { Metadata } from "next";
import { cn } from "@/lib/utils";
import { Mail, Phone, Calendar, Instagram, Linkedin } from "lucide-react";
import { PostcardCTA } from "@/components/shared";

export const metadata: Metadata = {
  title: "Contact Us | Driftawave",
  description:
    "Let's make some waves! We'd love to hear from you. Whether it's a spark, an idea or a full-blown plan.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-4xl md:text-6xl text-sunset-black mb-6">
            Let's make some waves!
          </h1>
          <p className="font-body font-light text-xl text-gray-dark max-w-2xl mx-auto">
            We'd love to hear from you. Whether it's a spark, an idea or a full-blown plan.
          </p>
        </div>
      </section>

      {/* Contact Info & CTA */}
      <section className="py-16 md:py-20 bg-sunset-sand/10">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Email */}
            <div className="bg-white rounded-brand p-8 shadow-lg">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-sunset-orange/10 rounded-full">
                  <Mail className="h-6 w-6 text-sunset-orange" />
                </div>
                <div>
                  <h2 className="font-display text-xl text-sunset-black mb-2">
                    Email us
                  </h2>
                  <a
                    href="mailto:info@driftawave.com"
                    className="font-body text-lg text-gray-dark hover:text-sunset-orange transition-colors"
                  >
                    info@driftawave.com
                  </a>
                </div>
              </div>
            </div>

            {/* Phone/WhatsApp */}
            <div className="bg-white rounded-brand p-8 shadow-lg">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-sunset-orange/10 rounded-full">
                  <Phone className="h-6 w-6 text-sunset-orange" />
                </div>
                <div>
                  <h2 className="font-display text-xl text-sunset-black mb-2">
                    Call or WhatsApp us
                  </h2>
                  <a
                    href="tel:+31633047991"
                    className="font-body text-lg text-gray-dark hover:text-sunset-orange transition-colors"
                  >
                    +31 6 33 04 7991
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Schedule a Call - Primary CTA */}
          <div className="mt-8 bg-sunset-black rounded-brand p-8 md:p-12 text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-sunset-orange rounded-full">
                <Calendar className="h-8 w-8 text-white" />
              </div>
            </div>
            <h2 className="font-display text-2xl md:text-3xl text-white mb-4">
              Schedule a call
            </h2>
            <p className="font-body font-light text-white/80 mb-8 max-w-xl mx-auto">
              Let's catch up and discuss your vision. Book a complimentary call to align on your goals.
            </p>
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
              LET'S CATCH UP!
            </Link>
          </div>

          {/* Opening Hours */}
          <div className="mt-8 bg-white rounded-brand p-8 shadow-lg text-center">
            <h3 className="font-display text-xl text-sunset-black mb-2">Opening Days</h3>
            <p className="font-body font-light text-gray-dark">
              Monday – Friday
              <br />
              Excluding Bank Holidays
            </p>
          </div>
        </div>
      </section>

      {/* Social Links */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-2xl md:text-3xl text-sunset-black mb-4">
            Share the joy of the journey
          </h2>
          <p className="font-body font-light text-gray-dark mb-8">
            Follow us for workation inspiration and retreat highlights
          </p>
          <div className="flex justify-center gap-6">
            <Link
              href="https://www.instagram.com/driftawave"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-sunset-sand/20 hover:bg-sunset-orange hover:text-white rounded-brand transition-all duration-300 group"
            >
              <Instagram className="h-8 w-8 text-sunset-black group-hover:text-white" />
            </Link>
            <Link
              href="https://www.linkedin.com/company/driftawave"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-sunset-sand/20 hover:bg-sunset-orange hover:text-white rounded-brand transition-all duration-300 group"
            >
              <Linkedin className="h-8 w-8 text-sunset-black group-hover:text-white" />
            </Link>
          </div>
        </div>
      </section>

      {/* Postcard CTA */}
      <PostcardCTA />
    </>
  );
}
