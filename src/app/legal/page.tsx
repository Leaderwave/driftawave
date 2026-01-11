import Link from "next/link";
import { Metadata } from "next";
import {
  FileText,
  Shield,
  Lock,
  Ban,
  Umbrella,
  Building2,
  Briefcase,
} from "lucide-react";
import { PostcardCTA } from "@/components/shared";

export const metadata: Metadata = {
  title: "Legal | Driftawave",
  description: "Legal information, terms and conditions, privacy policy, and more.",
};

const legalPages = [
  {
    title: "Terms and Conditions",
    description: "General terms and conditions for all bookings with Driftawave B.V.",
    href: "/legal/terms-and-conditions",
    icon: FileText,
  },
  {
    title: "Privacy Policy",
    description: "How we handle and protect your personal data.",
    href: "/legal/privacy",
    icon: Lock,
  },
  {
    title: "Cancellation Policy",
    description: "Our cancellation terms and refund policy.",
    href: "/legal/cancellation-policy",
    icon: Ban,
  },
  {
    title: "Insurance",
    description: "Travel insurance information for solo and corporate clients.",
    href: "/legal/insurance",
    icon: Umbrella,
  },
  {
    title: "VZR Protection",
    description: "VZR Garant insolvency protection for your booking.",
    href: "/legal/vzr-protection",
    icon: Shield,
  },
  {
    title: "Legal Company Info",
    description: "Driftawave B.V. company details and contact information.",
    href: "/legal/company-info",
    icon: Building2,
  },
  {
    title: "Business Terms (B2B)",
    description: "Terms and conditions for corporate clients.",
    href: "/legal/business-terms",
    icon: Briefcase,
  },
];

export default function LegalPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-4xl md:text-6xl text-sunset-black mb-6">Legal</h1>
          <p className="font-body font-light text-xl text-gray-dark max-w-2xl mx-auto">
            All the important legal information about Driftawave B.V. and our services.
          </p>
        </div>
      </section>

      {/* Legal Pages Grid */}
      <section className="py-16 md:py-20 bg-sunset-sand/10">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {legalPages.map((page) => {
              const Icon = page.icon;
              return (
                <Link
                  key={page.href}
                  href={page.href}
                  className="group bg-white rounded-brand p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-sunset-orange/10 rounded-full group-hover:bg-sunset-orange/20 transition-colors">
                      <Icon className="h-6 w-6 text-sunset-orange" />
                    </div>
                    <div>
                      <h2 className="font-display text-xl text-sunset-black mb-2 group-hover:text-sunset-orange transition-colors">
                        {page.title}
                      </h2>
                      <p className="font-body font-light text-gray-dark">{page.description}</p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Trust Info */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="font-display text-2xl md:text-3xl text-sunset-black mb-8">
            Your Booking is Protected
          </h2>
          <p className="font-body font-light text-lg text-gray-dark mb-8">
            Driftawave B.V. is a fully licensed and insured tour operator registered with:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="p-4">
              <p className="font-display text-lg text-sunset-orange">ANVR</p>
              <p className="font-body font-light text-sm text-gray-dark">Licensed Tour Operator</p>
            </div>
            <div className="p-4">
              <p className="font-display text-lg text-sunset-orange">VZR Garant</p>
              <p className="font-body font-light text-sm text-gray-dark">Insolvency Protection</p>
            </div>
            <div className="p-4">
              <p className="font-display text-lg text-sunset-orange">Calamiteitenfonds</p>
              <p className="font-body font-light text-sm text-gray-dark">Calamity Fund</p>
            </div>
            <div className="p-4">
              <p className="font-display text-lg text-sunset-orange">AON</p>
              <p className="font-body font-light text-sm text-gray-dark">Liability up to €6M</p>
            </div>
          </div>
        </div>
      </section>

      {/* Postcard CTA */}
      <PostcardCTA />
    </>
  );
}
