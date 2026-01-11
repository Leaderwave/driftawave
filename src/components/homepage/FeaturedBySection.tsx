"use client";

import Image from "next/image";
import Link from "next/link";

const featuredMedia = [
  // Row 1
  {
    name: "Women Disrupting Tech",
    image: "/logos/featured/women-disrupting-tech.jpg",
    title: "The Power of Workations and Generous Leadership",
    alt: "Gina Schinkel Driftawave founder on Women Disrupting Tech podcast discussing workations and leadership",
  },
  {
    name: "Irish Independent",
    image: "/logos/featured/irish-independent.png",
    title: "Limerick student lands premium invite to Romania's Tekpon AI Summit",
    alt: "Irish Independent newspaper logo featuring Driftawave founder leadership story from Web Summit",
  },
  {
    name: "Kapital Events",
    image: "/logos/featured/kapital-events.jpg",
    title: "The Experimental Organization: Workations, AI, and Reimagination beyond Design",
    alt: "Kapital Events speaker Gina Schinkel keynote on AI integration and distributed team leadership",
  },
  {
    name: "Magnaris Magazine",
    image: "/logos/featured/magnaris.png",
    title: "Work in Motion",
    alt: "Gina Schinkel Driftawave founder featured in Magnaris Magazine Q3 2025 on cross-cultural leadership",
  },
  {
    name: "RemoFirst",
    image: "/logos/featured/remofirst.png",
    title: "The Most Overlooked Culture Strategy in Remote Work",
    alt: "RemoFirst Freedom of Work podcast with Gina Schinkel on remote culture and team retreat ROI",
  },
  {
    name: "We Are Developers",
    image: "/logos/featured/we-are-developers.png",
    title: "Why Workations and Community are Game-Changers",
    link: "https://www.wearedevelopers.com/world-congress/hr-leaders-summit",
    alt: "Driftawave founder keynote on future of work at HR Leaders Summit Berlin",
  },
  {
    name: "IRK Magazine - Living",
    image: "/logos/featured/irk-magazine-living.png",
    title: "Oceans of Opportunity: Educational Ocean Travel & Eco-Conscious Exploration",
    alt: "IRK Magazine Living cover featuring Driftawave ocean sustainability with National Geographic",
  },
  {
    name: "Realistic Happiness",
    image: "/logos/featured/realistic-happiness.png",
    title: "How To Travel Full-Time AND Have A Career",
    alt: "Realistic Happiness podcast featuring Gina Schinkel on remote work and transformative workations",
  },
  // Row 2
  {
    name: "IRK Magazine",
    image: "/logos/featured/irk-magazine.jpg",
    title: "Ditch the Cubicle, Embrace the Globe: Why Workations Are the Hottest Travel Trend",
    alt: "IRK Magazine article featuring Gina Schinkel on why workations are hottest travel trend",
  },
  {
    name: "Web Summit",
    image: "/logos/featured/web-summit.jpg",
    link: "https://websummit.com/appearances/lis24/a41f821b-a9f4-4572-b64c-3ec415786a8a/driftawave/",
    alt: "Web Summit 2024 Startup Showcase pitch stage featuring Gina Schinkel presenting Driftawave",
  },
  {
    name: "Her Expat Life",
    image: "/logos/featured/her-expat-life.png",
    title: "Work & Wanderlust: The Rise of the Workation Revolution",
    alt: "Her Expat Life featuring Gina Schinkel on workation entrepreneurship",
  },
  {
    name: "Sprints & Sneakers",
    image: "/logos/featured/sprints-sneakers.png",
    link: "https://www.sprintsandsneakers.com/festival/speakers",
    alt: "Sprints and Sneakers Festival growth marketing event sponsored by Driftawave",
  },
  {
    name: "Remote.com",
    image: "/logos/featured/remote-com.webp",
    title: "The Era of Human Capital | Stop and Chat with Pedro Barros",
    alt: "Remote.com podcast with Gina Schinkel on future of distributed work",
  },
  {
    name: "Lifestyle Solopreneur",
    image: "/logos/featured/lifestyle-solopreneur.jpg",
    title: "Unlock your inner adventurer with Driftawave founder Gina Schinkel",
    alt: "Lifestyle Solopreneur podcast with Gina Schinkel discussing Driftawave workation entrepreneurship",
  },
];

export const FeaturedBySection = () => {
  const row1 = featuredMedia.slice(0, 8);
  const row2 = featuredMedia.slice(8);

  return (
    <section className="relative py-24 md:py-32 lg:py-40 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <Link href="/about/media" className="inline-block group">
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-sunset-black tracking-tight group-hover:text-sunset-orange transition-colors duration-300">
              Featured By
            </h2>
          </Link>
        </div>

        {/* Scrolling Grid Row 1 */}
        <div className="relative mb-8">
          <div className="flex animate-scroll-left gap-6">
            {[...row1, ...row1].map((item, index) => (
              <FeaturedCard key={`row1-${index}`} item={item} />
            ))}
          </div>
        </div>

        {/* Scrolling Grid Row 2 (reverse) */}
        <div className="relative">
          <div className="flex animate-scroll-right gap-6">
            {[...row2, ...row2, ...row2].map((item, index) => (
              <FeaturedCard key={`row2-${index}`} item={item} />
            ))}
          </div>
        </div>
      </div>

      {/* CSS for infinite scroll animation - slower for elegance */}
      <style jsx>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        @keyframes scroll-right {
          0% {
            transform: translateX(-66.67%);
          }
          100% {
            transform: translateX(0);
          }
        }
        .animate-scroll-left {
          animation: scroll-left 50s linear infinite;
        }
        .animate-scroll-right {
          animation: scroll-right 45s linear infinite;
        }
        .animate-scroll-left:hover,
        .animate-scroll-right:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

interface FeaturedItem {
  name: string;
  image: string;
  link?: string;
  title?: string;
  alt: string;
}

const FeaturedCard = ({ item }: { item: FeaturedItem }) => {
  const CardContent = (
    <div className="flex-shrink-0 w-[220px] md:w-[260px] p-4 group">
      <div className="card-brand p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
        {/* Logo container */}
        <div className="aspect-square mb-4 rounded-lg overflow-hidden bg-white flex items-center justify-center">
          <Image
            src={item.image}
            alt={item.alt}
            width={200}
            height={200}
            className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <p className="font-display text-sm text-sunset-black text-center">
          {item.name}
        </p>
        {item.title && (
          <p className="font-body font-light text-xs text-sunset-black/50 text-center mt-1 line-clamp-2">
            {item.title}
          </p>
        )}
      </div>
    </div>
  );

  if (item.link) {
    return (
      <Link href={item.link} target="_blank" rel="noopener noreferrer">
        {CardContent}
      </Link>
    );
  }

  return CardContent;
};

export default FeaturedBySection;
