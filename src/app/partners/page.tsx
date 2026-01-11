import { PageHeader } from "@/components/ui/PageHeader";
import { ContentBlock } from "@/components/ui/ContentBlock";
import { CTA } from "@/components/shared/CTA";
import { CardGrid } from "@/components/ui/CardGrid";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Partner With Us | Driftawave",
  description: "We praise ourselves lucky to have partnerships with some of the best talent, leaders and industry partners out there.",
};

const partnerTypes = [
  {
    title: "Coaches",
    description: "Facilitate breakthrough sessions for world-class teams.",
    image: "/images/partners/coaches.jpg",
    link: "/partners/coaches",
    badge: "Experts",
    icon: "🧠"
  },
  {
    title: "Trainers",
    description: "Deliver transformative training experiences.",
    image: "/images/partners/trainers.jpg",
    link: "/partners/trainers",
    badge: "Training",
    icon: "💪"
  },
  {
    title: "Venue Partners",
    description: "Host transformative retreats at your unique property.",
    image: "/images/partners/venues.jpg",
    link: "/partners/venue-partners",
    badge: "Locations",
    icon: "🏰"
  },
  {
    title: "Travel Partners",
    description: "Logistics, transport, and local experiences.",
    image: "/images/partners/travel.jpg",
    link: "/partners/travel-partners",
    badge: "Logistics",
    icon: "✈️"
  },
  {
    title: "Join Our Team",
    description: "Help us build the future of workation experiences.",
    image: "/images/partners/team.jpg",
    link: "/partners/join-us",
    badge: "Careers",
    icon: "👋"
  }
];

export default function PartnersPage() {
  return (
    <main>
      <PageHeader
        title="Partners"
        subtitle="We praise ourselves lucky to have partnerships with some of the best talent, leaders and industry partners out there."
        breadcrumbs={[{ label: "Partners" }]}
        backgroundImage="/images/hero-background.jpg"
      />

      <ContentBlock
        title="Delivering the best value"
        subtitle="Partnership"
        content={`
          <p>We praise ourselves lucky to have partnerships with some of the best talent, leaders and industry partners out there.</p>
          <p>Delivering the best value to our clients, partners-in-crime and community.</p>
        `}
        image="/images/partners/ecosystem.jpg"
        imageSide="left"
      />

      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-brush text-brand-ink mb-4">WE ARE ALWAYS LOOKING FOR THE BEST PARTNERS</h2>
          <p className="text-xl font-serif text-muted-foreground">
            Show us what you've been cooking!
          </p>
        </div>

        <div className="max-w-6xl mx-auto mb-12">
          <CardGrid items={partnerTypes} columns={3} />
        </div>

        <div className="max-w-2xl mx-auto text-center space-y-6">
          <p className="text-lg font-serif text-muted-foreground">
            Ready to partner with us? Choose your path below:
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-brand-coral hover:bg-brand-coral/90">
              <Link href="/partners/venue-partners">Venue Partners</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/partners/travel-partners">Travel Partners</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/partners/coaches">Coaches</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/partners/trainers">Trainers</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/partners/join-us">Join Us</Link>
            </Button>
          </div>
        </div>
      </section>

      <CTA
        title="Ready to Partner?"
        subtitle="Let's build extraordinary experiences together."
        buttonText="Get in Touch"
        buttonLink="/contact"
      />
    </main>
  );
}
