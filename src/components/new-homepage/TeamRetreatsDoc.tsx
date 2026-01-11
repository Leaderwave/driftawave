"use client";

import { ArrowRight } from "lucide-react";

const leftTexts = [
  "Culture Sparks",
  "Visionary Leadership Fuel",
  "Craft Stories that Stick",
  "Brand Swell Wave",
  "Innovative Burst & Flow",
  "Smash Silos. Celebrate Wins!",
];

const retreatCategories = [
  {
    title: "TEAM BUILDING",
    description:
      "Bound over shared laughter, values and adventure. Becoming a talent magnet is just a side effect.",
  },
  {
    title: "LEADERSHIP",
    description:
      "Tap into what truly matters, solve the hardest challenges and set strategies in an inspiring environment. Charge in!",
  },
  {
    title: "COMMUNICATION & PR",
    description:
      "Stand out in a noisy market and build your next GTM moat. It's hard to ignore tales that travel beyond imagination.",
  },
  {
    title: "GROWTH MARKETING",
    description:
      "Take your brand on a next level spin. Brainstorm in an inspiring location. Let adventure dictate your energy levels and creative input. Did we just connect with the market winner?",
  },
  {
    title: "AGILE INNOVATION",
    description:
      "Reimagine, reinvent, rebuild. Never a dull day on our terms: the bigger the obstacle, the bigger the reward. Challenge accepted!",
  },
  {
    title: "STARTUP & SCALE-UP",
    description:
      "Everybody needs to feel the energy of true winner accomplishments. Don't let your wins go unheard, turn into a talent magnet and act like one.",
  },
];

export const TeamRetreatsDoc = () => {
  return (
    <section id="team-retreats" className="bg-[#F3F0EB] py-20 md:py-28">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <h2 className="font-sans font-extrabold text-4xl md:text-[56px] leading-[1.1] text-[#121412] mb-16 text-center">
          TEAM RETREATS
        </h2>

        {/* 3 Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          {/* Left Column - Taglines (3 cols) */}
          <div className="md:col-span-3 space-y-6">
            {leftTexts.map((text, index) => (
              <p
                key={index}
                className="font-serif text-lg md:text-xl text-brand-lime leading-relaxed"
              >
                {text}
              </p>
            ))}
          </div>

          {/* Middle Column - Pictures (4 cols) */}
          <div className="md:col-span-4">
            <div className="grid grid-cols-2 gap-4">
              {/* Placeholder images - replace with actual images from ROCKET FUEL */}
              <div className="h-48 bg-gray-300 rounded-2xl"></div>
              <div className="h-48 bg-gray-300 rounded-2xl"></div>
              <div className="h-48 bg-gray-300 rounded-2xl"></div>
              <div className="h-48 bg-gray-300 rounded-2xl"></div>
            </div>
          </div>

          {/* Right Column - Categories (5 cols) */}
          <div className="md:col-span-5 space-y-8">
            {retreatCategories.map((category, index) => (
              <div key={index} className="space-y-3">
                {/* Title */}
                <h3 className="font-sans font-bold text-xl md:text-2xl text-[#121412]">
                  {category.title}
                </h3>
                {/* Description */}
                <p className="font-serif text-base text-[#555] leading-relaxed">
                  {category.description}
                </p>
                {/* Divider (except last item) */}
                {index < retreatCategories.length - 1 && (
                  <div className="w-full h-[1px] bg-gray-300 mt-6"></div>
                )}
              </div>
            ))}

            {/* CTA Button */}
            <button className="group inline-flex items-center justify-between gap-4 rounded-full bg-brand-coral pl-6 pr-2 py-3 text-sm font-bold text-white transition-all duration-300 hover:shadow-md mt-8">
              <span>Explore Team Retreats</span>
              <div className="bg-white rounded-full p-2.5 flex items-center justify-center transition-transform duration-300 ease-in-out group-hover:scale-110">
                <ArrowRight className="h-4 w-4 text-brand-coral" strokeWidth={2.5} />
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
