import Link from "next/link";
import { Metadata } from "next";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Our Team | Driftawave",
  description:
    "Our team is made up of global world travellers, each brings their own expertise and a jetpack stuffed with passionate banter.",
};

const teamMembers = [
  {
    name: "Gina Schinkel",
    role: "Founder & Travel Expert",
    badge: "Founder",
  },
  {
    name: "Sophia Kian",
    role: "Operations & Travel Expert",
    badge: "Operations",
  },
  {
    name: "Cari Richter",
    role: "Corporate Event Planner",
    badge: "Events",
  },
  {
    name: "Dayana Pedersen",
    role: "Marketing, Communications and Sales Development",
    badge: "Marketing",
  },
  {
    name: "Christian Bleeker",
    role: "IT & Automations",
    badge: "Tech",
  },
  {
    name: "Youri van Den Hurk",
    role: "Freelance Brand Designer",
    badge: "Design",
  },
];

const processSteps = [
  {
    title: "Share Your Offsite Goals",
    description: "Tell us what you're dreaming of: location, team vibe, goals, and outcomes. We'll align with your vision from the start.",
  },
  {
    title: "Get Custom Offsite Concepts",
    description: "We design tailored concepts based on your team's size, culture, and desired outcomes.",
  },
  {
    title: "Refine & Approve Your Program",
    description: "Collaborate with our team to finalize the itinerary, sessions, logistics, and experience details.",
  },
  {
    title: "Pack Light. We Handle the Rest.",
    description: "From pre-arrival info packs to onsite support, our team ensures smooth operations and unforgettable moments.",
  },
];

export default function TeamPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-4xl md:text-6xl text-sunset-black mb-6">
            Our Team
          </h1>
          <p className="font-body font-light text-xl text-gray-dark max-w-3xl mx-auto">
            Global world travellers with expertise and passion
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 md:py-20 bg-sunset-sand/10">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <p className="font-body font-light text-lg text-gray-dark leading-relaxed">
            Our team is made up of global world travellers, each brings their own expertise and a jetpack
            stuffed with passionate banter. We also work with our trusted and amazing local (venue) partners,
            coaches and trainers.
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl md:text-4xl text-sunset-black text-center mb-12">
            Meet the Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="bg-sunset-sand/10 rounded-brand p-6 text-center"
              >
                <span className="inline-block px-3 py-1 bg-sunset-orange text-white text-xs font-body rounded-full mb-4">
                  {member.badge}
                </span>
                <h3 className="font-display text-xl text-sunset-black mb-2">
                  {member.name}
                </h3>
                <p className="font-body font-light text-sm text-gray-dark">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 md:py-20 bg-sunset-sand/10">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-display text-3xl md:text-4xl text-sunset-black text-center mb-4">
            Process
          </h2>
          <p className="font-body text-lg text-gray-dark text-center mb-12">
            Let's turn your IRL offsite vision into a transformational experience
          </p>

          <div className="space-y-6">
            {processSteps.map((step, index) => (
              <div key={index} className="bg-white p-6 md:p-8 rounded-brand">
                <h3 className="font-display text-xl text-sunset-orange mb-3">
                  {index + 1}. {step.title}
                </h3>
                <p className="font-body font-light text-gray-dark">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl md:text-4xl text-sunset-black mb-8">
            Let's Discuss Your Goals
          </h2>
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
            Get Started
          </Link>
        </div>
      </section>
    </>
  );
}
