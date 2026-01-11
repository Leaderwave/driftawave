"use client";

import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";

const teamRetreats = [
  {
    name: "Culture Sparks",
    category: "TEAM BUILDING",
    description: "Bound over shared laughter, values and adventure. Becoming a talent magnet is just a side effect.",
    image: "/retreats/team-building.png",
    href: "/team-retreat/team-building",
    alt: "Remote team cultural exploration at historic gate",
  },
  {
    name: "Visionary Leadership Fuel",
    category: "LEADERSHIP",
    description: "Tap into what truly matters, solve the hardest challenges and set strategies in an inspiring environment. Charge in!",
    image: "/retreats/leadership.png",
    href: "/team-retreat/leadership",
    alt: "Executive facilitating strategic planning workshop",
  },
  {
    name: "Craft Stories that Stick",
    category: "COMMUNICATION & PR",
    description: "Stand out in a noisy market and build your next GTM moat. It's hard to ignore tales that travel beyond imagination.",
    image: "/retreats/communication-pr.png",
    href: "/team-retreat/communication-pr",
    alt: "PR team exploring ancient Greek ruins during storytelling retreat",
  },
  {
    name: "Brand Swell Wave",
    category: "GROWTH MARKETING",
    description: "Take your brand on a next level spin. Brainstorm in an inspiring location. Let adventure dictate your energy levels and creative input. Did we just connect with the market winner?",
    image: "/retreats/marketing-creativity.png",
    href: "/team-retreat/marketing-creativity",
    alt: "Surfing adventure for marketing team during creative retreat",
  },
  {
    name: "Innovative Burst & Flow",
    category: "AGILE INNOVATION",
    description: "Reimagine, reinvent, rebuild. Never a dull day on our terms: the bigger the obstacle, the bigger the reward. Challenge accepted!",
    image: "/retreats/agile-innovation.png",
    href: "/team-retreat/agile-innovation",
    alt: "Team beach workout at sunrise building flow and innovation",
  },
  {
    name: "Smash Silos. Celebrate Wins!",
    category: "STARTUP & SCALE-UP",
    description: "Everybody needs to feel the energy of true winner accomplishments. Don't let your wins go unheard, turn into a talent magnet and act like one.",
    image: "/retreats/startup-scaleup.png",
    href: "/team-retreat/startup-scaleup",
    alt: "Startup team building connections at sunset retreat",
  },
];

export const TeamRetreatsSection = () => {
  return (
    <section className="relative py-24 md:py-32 lg:py-40 section-warm">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <span className="font-display text-sm uppercase tracking-widest text-sunset-orange mb-4 block">
            Explore Our Programs
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-sunset-black tracking-tight">
            Team Retreats
          </h2>
        </div>

        {/* Bento Grid - 3 columns: Names | Images | Descriptions */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-8">
          {/* LEFT COLUMN - Retreat Names */}
          <div className="hidden lg:flex flex-col justify-between py-4">
            {teamRetreats.map((retreat) => (
              <Link
                key={retreat.name}
                href={retreat.href}
                className="group py-6 border-b border-sunset-sand/50 last:border-b-0"
              >
                <span className="font-display text-xl xl:text-2xl text-sunset-black group-hover:text-sunset-orange transition-colors duration-300">
                  {retreat.name}
                </span>
              </Link>
            ))}
          </div>

          {/* CENTER COLUMN - Images with elegant shadows */}
          <div className="flex flex-col gap-5">
            {teamRetreats.map((retreat) => (
              <Link
                key={retreat.name}
                href={retreat.href}
                className="group relative block overflow-hidden rounded-brand aspect-[4/3] shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
              >
                <Image
                  src={retreat.image}
                  alt={retreat.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Refined gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-sunset-black/70 via-sunset-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

                {/* Mobile overlay content */}
                <div className="lg:hidden absolute inset-0 flex items-end p-5">
                  <div>
                    <span className="font-display text-lg text-white block drop-shadow-lg">
                      {retreat.name}
                    </span>
                    <span className="font-body text-xs text-white/80 uppercase tracking-wider">
                      {retreat.category}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* RIGHT COLUMN - Category + Descriptions */}
          <div className="hidden lg:flex flex-col justify-between py-4">
            {teamRetreats.map((retreat) => (
              <Link
                key={retreat.name}
                href={retreat.href}
                className="group py-6 border-b border-sunset-sand/50 last:border-b-0"
              >
                <span className="font-display text-sm text-sunset-orange uppercase tracking-wider block mb-2">
                  {retreat.category}
                </span>
                <p className="font-body font-light text-sm text-sunset-black/60 group-hover:text-sunset-black transition-colors duration-300 leading-relaxed">
                  {retreat.description}
                </p>
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile descriptions */}
        <div className="lg:hidden mt-8 space-y-4">
          {teamRetreats.map((retreat) => (
            <Link
              key={retreat.name}
              href={retreat.href}
              className="block card-brand p-5 hover:-translate-y-0.5 transition-all duration-300"
            >
              <span className="font-display text-sm text-sunset-orange uppercase tracking-wider block mb-2">
                {retreat.category}
              </span>
              <p className="font-body font-light text-sm text-sunset-black/60 leading-relaxed">
                {retreat.description}
              </p>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16 md:mt-20">
          <Link
            href="/team-retreat"
            className={cn(
              "inline-flex items-center gap-2 px-8 py-4",
              "bg-sunset-orange text-white font-body font-bold text-lg",
              "rounded-brand shadow-lg shadow-sunset-orange/20",
              "hover:bg-sunset-rust hover:shadow-xl hover:-translate-y-0.5",
              "transition-all duration-300"
            )}
          >
            Explore All Retreats
            <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TeamRetreatsSection;
