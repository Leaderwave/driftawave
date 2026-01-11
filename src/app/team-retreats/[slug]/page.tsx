import { notFound } from "next/navigation";
import { PageHeader } from "@/components/ui/PageHeader";
import { ContentBlock } from "@/components/ui/ContentBlock";
import { CTA } from "@/components/shared/CTA";
import { ACTIVITIES } from "@/lib/data";
import { Metadata } from "next";
import { LogosStrip } from "@/components/homepage/LogosStrip";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const activity = ACTIVITIES[slug];

  if (!activity) {
    return {
      title: "Activity Not Found | Driftawave",
    };
  }

  return {
    title: `${activity.title} | Driftawave Retreats`,
    description: activity.subtitle,
  };
}

export async function generateStaticParams() {
  return Object.keys(ACTIVITIES).map((slug) => ({
    slug,
  }));
}

export default async function ActivityPage({ params }: PageProps) {
  const { slug } = await params;
  const activity = ACTIVITIES[slug];

  if (!activity) {
    notFound();
  }

  return (
    <main>
      <PageHeader
        title={activity.title}
        subtitle={activity.subtitle}
        breadcrumbs={[
          { label: "Team Retreats", href: "/team-retreats" },
          { label: activity.title },
        ]}
        backgroundImage={`/images/activities/${slug}.jpg`}
      />

      <ContentBlock
        title="Why This Matters"
        subtitle="The Context"
        content={activity.content}
        image={`/images/activities/${slug}-intro.jpg`}
        imageAlt={`${activity.title} Session`}
        imageSide="left"
      />

      <section className="py-20 px-6 bg-brand-ink text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-brush text-brand-coral mb-6 text-center">
            Where It Happens
          </h2>
          <p className="text-xl font-serif leading-relaxed opacity-90 text-center">
            {activity.destinations}
          </p>
        </div>
      </section>

      <LogosStrip />

      <CTA
        title={slug === "team-building" ? "Let's Spark up Your Culture" : slug === "startup-scaleup" ? "Ready to Celebrate Your Next Milestone?" : slug === "marketing-creativity" ? "Let's cook up your next milestone" : slug === "leadership" ? "LET'S FUEL YOUR VISIONARY LEADERSHIP" : slug === "communication-pr" ? "Let's plan your next level take-off" : slug === "agile-innovation" ? "Let's (reverse)engineer your next breakthrough" : "Let's Design Your Retreat"}
        subtitle="Custom crafted for your team's goals and culture."
        buttonText="Get in Touch"
      />
    </main>
  );
}
