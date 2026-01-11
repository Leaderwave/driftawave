import { notFound } from "next/navigation";
import { PageHeader } from "@/components/ui/PageHeader";
import { ContentBlock } from "@/components/ui/ContentBlock";
import { CTA } from "@/components/shared/CTA";
import { ENERGIES } from "@/lib/data";
import { Metadata } from "next";
import { LogosStrip } from "@/components/homepage/LogosStrip";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const energy = ENERGIES[slug];

  if (!energy) {
    return {
      title: "Energy Not Found | Driftawave",
    };
  }

  return {
    title: `${energy.title} | Driftawave Offsites`,
    description: energy.subtitle,
  };
}

export async function generateStaticParams() {
  return Object.keys(ENERGIES).map((slug) => ({
    slug,
  }));
}

export default async function EnergyPage({ params }: PageProps) {
  const { slug } = await params;
  const energy = ENERGIES[slug];

  if (!energy) {
    notFound();
  }

  return (
    <main>
      <PageHeader
        title={energy.title}
        subtitle={energy.subtitle}
        breadcrumbs={[
          { label: "Company Offsites", href: "/company-offsites" },
          { label: energy.title },
        ]}
        backgroundImage={`/images/energies/${slug}.jpg`}
      />

      <ContentBlock
        title={`Experience ${energy.title}`}
        subtitle="The Vibe"
        content={energy.intro}
        image={`/images/energies/${slug}-intro.jpg`}
        imageAlt={`${energy.title} Atmosphere`}
        imageSide="right"
      />

      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-brush text-brand-ink mb-8 text-center">
            {slug === "creative-pulse" && "Some of our favourite destinations"}
            {slug === "edge-of-comfort" && "INCOMING OFFSITE THRILLS"}
            {slug === "mountain-air" && "Some of our favourite altitude havens"}
            {slug === "ocean-flow" && "Which adventure is next?"}
            {slug === "wild-rooted" && "Run wild with our earthy favourites"}
            {!["creative-pulse", "edge-of-comfort", "mountain-air", "ocean-flow", "wild-rooted"].includes(slug) && "Featured Destinations"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {energy.destinations.map((dest, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 font-serif text-lg text-brand-charcoal hover:shadow-md transition-shadow"
              >
                ✨ {dest}
              </div>
            ))}
          </div>
        </div>
      </section>

      <LogosStrip />

      <CTA
        title={slug === "creative-pulse" ? "READY TO SURRENDER?" : slug === "edge-of-comfort" ? "Ready to push the boundaries with your team?" : slug === "mountain-air" ? "READY TO JUMP ?" : slug === "ocean-flow" ? "READY TO POP INTO FLOW STATE?" : "Ready to Connect?"}
        subtitle="Let's find the perfect destination for your team's energy."
        buttonText="Let's Chat"
      />
    </main>
  );
}
