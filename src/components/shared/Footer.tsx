"use client";

import Image from "next/image";
import Link from "next/link";
import { TrustLogos } from "./TrustLogos";

const footerLinks = {
  company: [
    { name: "About Us", href: "/about" },
    { name: "Our Team", href: "/about/team" },
    { name: "Media & Press", href: "/about/media" },
    { name: "Blog", href: "/blog" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "/contact" },
  ],
  services: [
    { name: "Team Retreats", href: "/team-retreat" },
    { name: "Company Offsites", href: "/company-offsite" },
    { name: "Workation Events", href: "/workation-events" },
    { name: "Destinations", href: "/destinations" },
    { name: "Venues", href: "/venues" },
  ],
  partners: [
    { name: "For Coaches", href: "/partners/coaches" },
    { name: "For Trainers", href: "/partners/trainers" },
    { name: "Venue Partners", href: "/partners/venue-partners" },
    { name: "Travel Partners", href: "/partners/travel-partners" },
    { name: "Join Us", href: "/partners/join-us" },
  ],
  legal: [
    { name: "Terms & Conditions", href: "/legal/terms-and-conditions" },
    { name: "Privacy Policy", href: "/legal/privacy" },
    { name: "Cancellation Policy", href: "/legal/cancellation-policy" },
    { name: "Insurance", href: "/legal/insurance" },
    { name: "VZR Protection", href: "/legal/vzr-protection" },
    { name: "Legal Info", href: "/legal/company-info" },
  ],
};

const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/driftawave/",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/driftawave/",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
];

export const Footer = () => {
  return (
    <footer className="relative overflow-hidden">
      {/* Layer 1: Large Background Logo */}
      <div className="absolute inset-0 flex items-end justify-center pointer-events-none overflow-hidden">
        <Image
          src="/logos/driftawave-black.svg"
          alt=""
          width={1200}
          height={300}
          className="w-[150%] max-w-[1800px] opacity-[0.03] translate-y-1/3"
          aria-hidden="true"
        />
      </div>

      {/* Layer 2: Trust Logos */}
      <div className="bg-sunset-cream py-8 border-t border-sunset-sand/30">
        <div className="container mx-auto px-4">
          <TrustLogos size="md" className="opacity-60" />
        </div>
      </div>

      {/* Layer 3: Main Footer Content */}
      <div className="relative bg-sunset-black text-white py-20">
        {/* Subtle texture overlay */}
        <div className="absolute inset-0 texture-noise pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
            {/* Brand Column */}
            <div className="lg:col-span-1">
              <Image
                src="/logos/driftawave-white.png"
                alt="Driftawave"
                width={160}
                height={36}
                className="h-8 w-auto mb-6"
              />
              <p className="font-body font-light text-sm text-white/60 mb-6 leading-relaxed">
                Transformational team retreats, company offsites, and workation experiences for remote teams.
              </p>
              {/* Social Links */}
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <Link
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:bg-sunset-orange/20 hover:text-sunset-orange transition-all duration-300"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </Link>
                ))}
              </div>
            </div>

            {/* Company Links */}
            <div>
              <h4 className="font-display text-lg text-white mb-6 relative inline-block">
                Company
                <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-sunset-orange" />
              </h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="font-body font-light text-sm text-white/60 hover:text-sunset-orange transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services Links */}
            <div>
              <h4 className="font-display text-lg text-white mb-6 relative inline-block">
                Services
                <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-sunset-orange" />
              </h4>
              <ul className="space-y-3">
                {footerLinks.services.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="font-body font-light text-sm text-white/60 hover:text-sunset-orange transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Partners Links */}
            <div>
              <h4 className="font-display text-lg text-white mb-6 relative inline-block">
                Partners
                <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-sunset-orange" />
              </h4>
              <ul className="space-y-3">
                {footerLinks.partners.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="font-body font-light text-sm text-white/60 hover:text-sunset-orange transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <h4 className="font-display text-lg text-white mb-6 relative inline-block">
                Legal
                <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-sunset-orange" />
              </h4>
              <ul className="space-y-3">
                {footerLinks.legal.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="font-body font-light text-sm text-white/60 hover:text-sunset-orange transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Layer 4: Copyright Bar */}
      <div className="bg-sunset-black border-t border-white/10 py-5">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="font-body font-light text-xs text-white/40">
              © {new Date().getFullYear()} Driftawave B.V. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link
                href="/legal/privacy"
                className="font-body font-light text-xs text-white/40 hover:text-sunset-orange transition-colors duration-200"
              >
                Privacy
              </Link>
              <Link
                href="/legal/terms-and-conditions"
                className="font-body font-light text-xs text-white/40 hover:text-sunset-orange transition-colors duration-200"
              >
                Terms
              </Link>
              <Link
                href="/about/media-kit"
                className="font-body font-light text-xs text-white/40 hover:text-sunset-orange transition-colors duration-200"
              >
                Media Kit
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
