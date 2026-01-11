import { PageHeader } from "@/components/ui/PageHeader";
import { ContentBlock } from "@/components/ui/ContentBlock";
import { CTA } from "@/components/shared/CTA";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export const metadata = {
  title: "Travel Partners | Driftawave",
  description: "EXCITING TRAVEL PARTNERSHIP IN MIND? Let's explore, co-creator.",
};

export default function TravelPartnersPage() {
  return (
    <main>
      <PageHeader
        title="TRAVEL PARTNERS"
        subtitle="EXCITING TRAVEL PARTNERSHIP IN MIND?"
        breadcrumbs={[
          { label: "Partners", href: "/partners" },
          { label: "Travel Partners" }
        ]}
        backgroundImage="/images/hero-background.jpg"
      />

      <ContentBlock
        title="Let's explore, co-creator"
        subtitle="Partnership"
        content={`
          <p><strong>Destination experts</strong></p>
          <p>You know the land, the culture, the hidden gems.</p>
          <p><strong>Experience architects</strong></p>
          <p>You craft moments that stick.</p>
          <p><strong>Detail-driven</strong></p>
          <p>From seamless airport pickups to starlit dinners.</p>
          <p><strong>Culture connectors</strong></p>
          <p>You champion the local spirit and tap into real, rich, rooted experiences.</p>
          <p><strong>Proactive & partnership-minded</strong></p>
          <p>You bring ideas, solutions, and energy. You're excited to co-create legendary offsites with us.</p>
        `}
        image="/images/partners/travel.jpg"
        imageSide="left"
      />

      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white p-8 md:p-10 rounded-2xl shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold mb-6">Partner With Us as a Travel Partner</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="company">Company Name</Label>
                  <Input id="company" placeholder="Your company" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="your@email.com" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="destinations">Destinations You Cover</Label>
                <Input id="destinations" placeholder="e.g., Portugal, Spain, Costa Rica" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="services">Services You Provide</Label>
                <Textarea 
                  id="services" 
                  placeholder="Transportation, local guides, experiences, etc..." 
                  className="min-h-[120px]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Tell us about your partnership vision</Label>
                <Textarea 
                  id="message" 
                  placeholder="How we can collaborate..." 
                  className="min-h-[150px]"
                />
              </div>

              <Button type="submit" className="w-full bg-brand-coral hover:bg-brand-coral/90 text-white font-bold py-6 text-lg">
                Submit Partnership Application
              </Button>
            </form>
          </div>
        </div>
      </section>

      <CTA
        title="Ready to Co-Create?"
        subtitle="Let's build legendary offsites together."
        buttonText="Get in Touch"
        buttonLink="/contact"
      />
    </main>
  );
}

