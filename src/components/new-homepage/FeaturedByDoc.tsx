"use client";

import Image from "next/image";
import { ExternalLink } from "lucide-react";

const features = [
  {
    title: "Kapital Events",
    subtitle:
      "The Experimental Organization: Workations, AI, and Reimagination beyond Design.",
    image: "/featured/kapital-events.jpg",
    link: "#",
  },
  {
    title: "Magnaris Magazine",
    subtitle: "Work in Motion",
    image: "/featured/magnaris.jpg",
    link: "#",
  },
  {
    title: "RemoFirst - Freedom of Work Podcast",
    subtitle: "The Most Overlooked Culture Strategy in Remote Work",
    image: "/featured/remofirst.jpg",
    link: "#",
  },
  {
    title: "We Are Developers - HR Leaders Summit",
    subtitle:
      "New world: New Approach. Why Workations and Community are Game-Changers in the Future of Work.",
    image: "/featured/wearedevelopers.jpg",
    link: "https://www.wearedevelopers.com/world-congress/hr-leaders-summit",
  },
  {
    title: "IRK MAGAZINE - LIVING",
    subtitle:
      "Oceans of Opportunity: Educational Ocean Travel & Eco-Conscious Exploration",
    image: "/featured/irk-magazine-1.jpg",
    link: "#",
  },
  {
    title: "REALISTIC HAPPINESS",
    subtitle:
      "How To Travel Full-Time AND Have A Career | Gina Schinkel, S2 Ep18",
    image: "/featured/realistic-happiness.jpg",
    link: "#",
  },
  {
    title: "IRK MAGAZINE - LIVING",
    subtitle:
      "Ditch the Cubicle, Embrace the Globe: Why Workations Are the Hottest Travel Trend",
    image: "/featured/irk-magazine-2.jpg",
    link: "#",
  },
  {
    title: "Web Summit",
    subtitle: "Pitch Stage Appearance",
    image: "/featured/websummit.jpg",
    link: "https://websummit.com/appearances/lis24/a41f821b-a9f4-4572-b64c-3ec415786a8a/driftawave/",
  },
  {
    title: "Her Expat Life",
    subtitle:
      "365 Days from Dream to Pitch: Gina Schinkel's Rapid Rise to Web Summit's Pitch Stage",
    image: "/featured/her-expat-life-1.jpg",
    link: "#",
  },
  {
    title: "Her Expat Life",
    subtitle: "Work & Wanderlust: The Rise of the Workation Revolution",
    image: "/featured/her-expat-life-2.jpg",
    link: "#",
  },
  {
    title: "Sprints & Sneakers",
    subtitle: "Festival Speaker",
    image: "/featured/sprints-sneakers.jpg",
    link: "https://www.sprintsandsneakers.com/festival/speakers",
  },
  {
    title: "Remote.com",
    subtitle:
      "The Era of Human Capital | Stop and Chat with Pedro Barros | Episode 8: Gina Schinkel",
    image: "/featured/remote-com.jpg",
    link: "#",
  },
  {
    title: "Lifestyle Solopreneur",
    subtitle: "Unlock your inner adventurer with Driftawave founder Gina Schinkel",
    image: "/featured/lifestyle-solopreneur.jpg",
    link: "#",
  },
];

export const FeaturedByDoc = () => {
  return (
    <section className="bg-warm-beige py-20 md:py-28">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="font-sans font-extrabold text-4xl md:text-[56px] leading-[1.1] text-[#121412] mb-6">
            FEATURED BY
          </h2>
          <p className="font-serif text-lg md:text-xl text-gray-dark leading-relaxed max-w-3xl mx-auto">
            Recognized by leading media, podcasts, and industry events worldwide.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <a
              key={index}
              href={feature.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-white rounded-[24px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
            >
              {/* Image Placeholder */}
              <div className="h-48 bg-gray-200 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30 group-hover:to-black/50 transition-all duration-300"></div>
                {/* Replace with actual images from ROCKET FUEL */}
              </div>

              {/* Content */}
              <div className="p-6 space-y-3">
                <h3 className="font-sans font-bold text-lg text-[#121412] group-hover:text-brand-coral transition-colors">
                  {feature.title}
                </h3>
                <p className="font-serif text-sm text-[#555] leading-relaxed line-clamp-2">
                  {feature.subtitle}
                </p>

                {/* Link indicator */}
                <div className="flex items-center gap-2 text-brand-coral text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>Read more</span>
                  <ExternalLink className="h-4 w-4" />
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Additional Note */}
        <div className="mt-12 text-center">
          <p className="font-serif text-base text-gray-dark italic">
            Scheduled: Women Disrupting Tech Podcast (November)
          </p>
        </div>
      </div>
    </section>
  );
};
