import { PageHeader } from "@/components/ui/PageHeader";
import { ContentBlock } from "@/components/ui/ContentBlock";
import { CTA } from "@/components/shared/CTA";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Media Kit | Driftawave",
  description: "Your all-in-one toolkit to cover, feature, or collaborate with Driftawave and our founder, Gina Schinkel.",
};

export default function MediaKitPage() {
  return (
    <main>
      <PageHeader
        title="Welcome to the Driftawave Media Kit"
        subtitle="Your all-in-one toolkit"
        breadcrumbs={[
          { label: "About", href: "/about" },
          { label: "Media Kit" }
        ]}
        backgroundImage="/images/hero-background.jpg"
      />

      <ContentBlock
        title="Everything you need"
        subtitle="Media Resources"
        content={`
          <p>Your all-in-one toolkit to cover, feature, or collaborate with Driftawave and our founder, Gina Schinkel.</p>
          <p>Inside, you'll find everything you need — from bios and brand visuals to press quotes, podcast features, and direct contact info.</p>
          <p>We believe in bold storytelling, future-forward leadership, and unforgettable experiences that spark movement.</p>
          <p>If you've found your way here, you're already part of the ripple.</p>
        `}
        image="/images/media/mediakit.jpg"
        imageSide="right"
      />

      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div>
            <h2 className="text-4xl font-brush text-brand-ink mb-6">Let's make some waves.</h2>
            <Button size="lg" className="bg-brand-coral hover:bg-brand-coral/90 text-white">
              Get The Media Kit
            </Button>
          </div>

          <div className="pt-12 border-t border-gray-200">
            <h3 className="text-2xl font-brush text-brand-ink mb-6">Want Gina to speak at your event or appear on your podcast?</h3>
            <Button size="lg" variant="outline" asChild>
              <a href="/contact">Get in Touch</a>
            </Button>
          </div>
        </div>
      </section>

      <CTA
        title="Ready to Collaborate?"
        subtitle="We're always open to media opportunities and speaking engagements."
        buttonText="Contact Us"
        buttonLink="/contact"
      />
    </main>
  );
}

