import Link from "next/link";
import { Metadata } from "next";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Media & Publications | Driftawave",
  description:
    "We're highly passionate about conversations on the future of work, tech, remote culture, and intentional team experiences.",
};

const publications = [
  {
    title: "Kapital Events",
    location: "Sofia, Bulgaria 2025",
    subtitle: "The Experimental Organization: Workations, AI, and Reimagination beyond Design.",
    description: "Gina hosted a keynote and workshop transforming how leaders approach distributed teams, AI integration, and organizational change through live experimentation and shared experiences.",
    note: "Kapital is Bulgaria's leading Future of Work and Leadership platform. This event brought together 400 founders and HR leaders.",
  },
  {
    title: "Magnaris Magazine - Edition 2 Q3 2025",
    subtitle: "Work in Motion",
    description: "Featured alongside visionary founders, Gina Schinkel shares how cross-cultural experiences shaped her entrepreneurial journey from backpacker to founder and public speaker.",
    note: "Magnaris Magazine is published in partnership with CCINP - LusoDutch Chamber of Commerce and Industry.",
  },
  {
    title: "RemoFirst - Freedom of Work Podcast",
    subtitle: "The Most Overlooked Culture Strategy in Remote Work",
    description: "Gina reveals why most remote companies are missing the mark on culture and how strategic retreats can become your most powerful leadership tool.",
  },
  {
    title: "We Are Developers - HR Leaders Summit 2025",
    location: "Berlin, Germany",
    subtitle: "New world: New Approach. Why Workations and Community are Game-Changers.",
    description: "Diving into the importance of flexible work options, continuous upskilling, and mission-driven leadership in building high-performing, resilient teams.",
    note: "We Are Developers is the world's flagship conference for developers.",
  },
];

export default function MediaPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-4xl md:text-6xl text-sunset-black mb-6">
            Publications
          </h1>
          <p className="font-body font-light text-xl text-gray-dark max-w-3xl mx-auto">
            We're highly passionate about conversations on the future of work, tech, remote culture,
            and intentional team experiences.
          </p>
        </div>
      </section>

      {/* Publications */}
      <section className="py-16 md:py-20 bg-sunset-sand/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            {publications.map((pub, index) => (
              <div
                key={index}
                className="bg-white p-6 md:p-10 rounded-brand shadow-lg"
              >
                <div className="mb-6">
                  <h2 className="font-display text-2xl md:text-3xl text-sunset-black mb-2">
                    {pub.title}
                  </h2>
                  {pub.subtitle && (
                    <p className="font-display text-lg text-sunset-orange mb-2">
                      {pub.subtitle}
                    </p>
                  )}
                  {pub.location && (
                    <p className="font-body text-sm text-gray-dark/70">{pub.location}</p>
                  )}
                </div>

                <p className="font-body font-light text-lg text-gray-dark leading-relaxed mb-6">
                  {pub.description}
                </p>

                {pub.note && (
                  <p className="font-body font-light text-sm text-gray-dark/70 italic">
                    {pub.note}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Speaking CTA */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <h2 className="font-display text-3xl md:text-4xl text-sunset-black mb-6">
            Want Gina to speak at your event or appear on your podcast?
          </h2>
          <Link
            href="/contact"
            className={cn(
              "inline-flex items-center gap-2 px-8 py-4 rounded-brand",
              "bg-sunset-orange hover:bg-sunset-rust",
              "text-white font-body font-medium text-lg",
              "transition-all duration-300 shadow-lg hover:shadow-xl"
            )}
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
