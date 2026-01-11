"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const services = [
  "Team Building",
  "Strategic Planning",
  "Cultural Experiences",
  "Wellness Programs",
];

export const Hero = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".hero-animate");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div
      className="relative h-screen w-full overflow-hidden bg-cover bg-center rounded-bl-[80px] rounded-br-[80px] z-10"
      style={{
        backgroundImage: "url('/parabol-the-agile-meeting-tool-dPlsRcf47bc-unsplash.jpg')",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-canvas-dark/70" />

      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-20 p-4">
        <div className="container mx-auto flex items-center justify-between">
          <h1 className="text-2xl font-bold text-text-light">Driftawave</h1>
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#" className="text-text-light hover:text-brand-coral">
              Home
            </a>
            <a href="#team-retreats" className="text-text-light hover:text-brand-coral">
              Team Retreats
            </a>
            <a href="#company-offsites" className="text-text-light hover:text-brand-coral">
              Company Offsites
            </a>
            <a href="#workations" className="text-text-light hover:text-brand-coral">
              Workations
            </a>
            <a href="#resources" className="text-text-light hover:text-brand-coral">
              Resources
            </a>
            <a href="#about" className="text-text-light hover:text-brand-coral">
              About
            </a>
            <a href="#faq" className="text-text-light hover:text-brand-coral">
              FAQ
            </a>
            <button className="rounded-full bg-brand-coral px-6 py-2 text-text-light">
              LET'S CONNECT
            </button>
          </nav>
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="text-text-light" /> : <Menu className="text-text-light" />}
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden mt-4 bg-canvas-dark/90 rounded-lg p-4">
            <nav className="flex flex-col space-y-4">
              <a href="#" className="text-text-light hover:text-brand-coral">
                Home
              </a>
              <a href="#team-retreats" className="text-text-light hover:text-brand-coral">
                Team Retreats
              </a>
              <a href="#company-offsites" className="text-text-light hover:text-brand-coral">
                Company Offsites
              </a>
              <a href="#workations" className="text-text-light hover:text-brand-coral">
                Workations
              </a>
              <a href="#resources" className="text-text-light hover:text-brand-coral">
                Resources
              </a>
              <a href="#about" className="text-text-light hover:text-brand-coral">
                About
              </a>
              <a href="#faq" className="text-text-light hover:text-brand-coral">
                FAQ
              </a>
              <button className="rounded-full bg-brand-coral px-6 py-2 text-text-light">
                LET'S CONNECT
              </button>
            </nav>
          </div>
        )}
      </header>

      {/* Center content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center p-4">
        <h1 className="hero-animate text-4xl font-extrabold text-text-light md:text-7xl mb-6">
          Team Retreats, Workations & EPIC Offsites
        </h1>
        <p className="hero-animate mx-auto mt-6 max-w-2xl text-lg text-text-light/90">
          Turnkey travel experiences for remote teams, distributed companies and online communities.
        </p>
      </div>

      {/* Footer within Hero - Services */}
      <div className="absolute bottom-0 left-0 right-0 z-10 pb-8 px-4">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-between items-center gap-4">
            {/* Left side - Services */}
            <div className="flex flex-wrap gap-4 md:gap-8">
              {services.map((service, index) => (
                <span key={index} className="text-white font-sans text-xs">
                  {service}
                </span>
              ))}
            </div>

            {/* Right side - Badge */}
            <Badge className="bg-[#8CB128] text-white border-none px-4 py-1.5 font-mono text-xs">
              Premium Retreats
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
};
