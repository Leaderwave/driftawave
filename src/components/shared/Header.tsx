"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Menu, X, ChevronDown } from "lucide-react";
import { TrustLogos } from "./TrustLogos";

const navigation = [
  { name: "Home", href: "/" },
  {
    name: "Team Retreats",
    href: "/team-retreat",
    submenu: [
      { name: "Agile & Innovation", href: "/team-retreat/agile-innovation" },
      { name: "Leadership", href: "/team-retreat/leadership" },
      { name: "Team Building", href: "/team-retreat/team-building" },
      { name: "Marketing & Creativity", href: "/team-retreat/marketing-creativity" },
      { name: "Communication & PR", href: "/team-retreat/communication-pr" },
      { name: "Startup & Scaleup", href: "/team-retreat/startup-scaleup" },
    ],
  },
  {
    name: "Company Offsites",
    href: "/company-offsite",
    submenu: [
      { name: "Ocean Motion", href: "/company-offsite/ocean-flow" },
      { name: "Mountain AIR", href: "/company-offsite/mountain-air" },
      { name: "Creative Pulsequake", href: "/company-offsite/creative-pulse" },
      { name: "Edge of Comfort", href: "/company-offsite/edge-of-comfort" },
      { name: "Wild & Rooted", href: "/company-offsite/wild-rooted" },
    ],
  },
  { name: "Workations", href: "/workation-events" },
  { name: "About", href: "/about" },
  { name: "FAQ", href: "/faq" },
];

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Main Navigation */}
      <nav
        className={cn(
          "transition-all duration-300",
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg"
            : "bg-white"
        )}
      >
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <Image
                src="/logos/driftawave-black.png"
                alt="Driftawave"
                width={433}
                height={372}
                className="h-11 md:h-12 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navigation.map((item) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => item.submenu && setActiveSubmenu(item.name)}
                  onMouseLeave={() => setActiveSubmenu(null)}
                >
                  <Link
                    href={item.href}
                    className="relative group flex items-center gap-1 px-4 py-2"
                  >
                    <span className="font-body text-sm text-sunset-black/70 group-hover:text-sunset-orange transition-colors duration-200">
                      {item.name}
                    </span>
                    {item.submenu && <ChevronDown className="w-4 h-4 text-sunset-black/50 group-hover:text-sunset-orange transition-colors" />}
                    {/* Elegant underline reveal */}
                    <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-sunset-orange scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  </Link>

                  {/* Submenu */}
                  {item.submenu && activeSubmenu === item.name && (
                    <div className="absolute top-full left-0 pt-2">
                      <div className="bg-white rounded-brand shadow-xl border border-sunset-sand/30 p-2 min-w-[220px]">
                        {item.submenu.map((subitem) => (
                          <Link
                            key={subitem.name}
                            href={subitem.href}
                            className={cn(
                              "block px-4 py-2.5 rounded-lg",
                              "font-body text-sm text-sunset-black/70",
                              "hover:bg-sunset-sand/30 hover:text-sunset-orange",
                              "transition-colors duration-200"
                            )}
                          >
                            {subitem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Trust Logos + CTA Button */}
            <div className="hidden lg:flex items-center gap-6">
              {/* Trust Logos */}
              <TrustLogos size="sm" className="opacity-50 gap-4" />

              {/* CTA Button */}
              <Link
                href="https://meet-ting.com/to/driftawave"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "inline-flex items-center px-6 py-2.5 rounded-brand",
                  "bg-sunset-orange hover:bg-sunset-rust",
                  "text-white font-body font-medium text-sm",
                  "transition-all duration-300",
                  "shadow-brand hover:shadow-xl hover:-translate-y-0.5"
                )}
              >
                LET&apos;S CONNECT
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-sunset-sand/30 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="w-6 h-6 text-sunset-black" />
              ) : (
                <Menu className="w-6 h-6 text-sunset-black" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden bg-white border-t border-sunset-sand/30">
            <div className="container mx-auto px-4 py-4 space-y-2">
              {navigation.map((item) => (
                <div key={item.name}>
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "block px-4 py-3 rounded-lg",
                      "font-body text-base text-sunset-black/80",
                      "hover:bg-sunset-sand/30"
                    )}
                  >
                    {item.name}
                  </Link>
                  {item.submenu && (
                    <div className="pl-4 space-y-1">
                      {item.submenu.map((subitem) => (
                        <Link
                          key={subitem.name}
                          href={subitem.href}
                          onClick={() => setIsOpen(false)}
                          className={cn(
                            "block px-4 py-2 rounded-lg",
                            "font-body text-sm text-sunset-black/60",
                            "hover:bg-sunset-sand/20 hover:text-sunset-orange"
                          )}
                        >
                          {subitem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {/* Mobile CTA */}
              <div className="pt-4">
                <Link
                  href="https://meet-ting.com/to/driftawave"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "block text-center px-6 py-3 rounded-brand",
                    "bg-sunset-orange hover:bg-sunset-rust",
                    "text-white font-body font-medium",
                    "transition-colors duration-300",
                    "shadow-brand"
                  )}
                >
                  LET&apos;S CONNECT
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
