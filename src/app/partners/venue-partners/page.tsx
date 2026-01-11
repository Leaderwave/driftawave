import { PageHeader } from "@/components/ui/PageHeader";
import { ContentBlock } from "@/components/ui/ContentBlock";
import { CTA } from "@/components/shared/CTA";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export const metadata = {
  title: "Venue Partners | Driftawave",
  description: "AMAZING VENUE TO OFFER? Slide into our feed, we'd love to check it out!",
};

export default function VenuePartnersPage() {
  return (
    <main>
      <PageHeader
        title="VENUE PARTNERS"
        subtitle="AMAZING VENUE TO OFFER?"
        breadcrumbs={[
          { label: "Partners", href: "/partners" },
          { label: "Venue Partners" }
        ]}
        backgroundImage="/images/hero-background.jpg"
      />

      <ContentBlock
        title="Slide into our feed, we'd love to check it out!"
        subtitle="Ideal Traits"
        content={`
          <p><strong>Internationally accessible</strong></p>
          <p>Ideally max 1 hour from a major airport.</p>
          <p><strong>Reliable, strong Wi-Fi</strong></p>
          <p>Bonus points for backup connectivity.</p>
          <p><strong>On-site coworking space and/or breakout areas</strong></p>
          <p>Think flow, not just desks.</p>
          <p><strong>Meeting & workshop-ready rooms</strong></p>
          <p>Well-lit, sound-considered, energizing. Extra love for natural light & outdoor views.</p>
          <p><strong>High-vibe hospitality</strong></p>
          <p>Ambiance that surprises, elevates, inspires.</p>
          <p><strong>Think:</strong></p>
          <p>Jungle hideaways. Coastal sanctuaries. Off-grid design gems. Modern mountain lodges.</p>
          <p>✨ <strong>We're all ears for the magic you've created.</strong> ✨</p>
        `}
        image="/images/partners/venues.jpg"
        imageSide="right"
      />

      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white p-8 md:p-10 rounded-2xl shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold mb-6">Partner With Us as a Venue</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="venueName">Venue Name</Label>
                  <Input id="venueName" placeholder="Your venue name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="location">Location</Label>
                  <Input id="location" placeholder="City, Country" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="capacity">Capacity</Label>
                  <Input id="capacity" placeholder="e.g., 20-50 people" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="your@email.com" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="features">Key Features</Label>
                <Textarea 
                  id="features" 
                  placeholder="Wi-Fi, meeting rooms, coworking spaces, unique amenities..." 
                  className="min-h-[120px]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Tell us about your venue</Label>
                <Textarea 
                  id="message" 
                  placeholder="What makes your venue special for team retreats..." 
                  className="min-h-[150px]"
                />
              </div>

              <Button type="submit" className="w-full bg-brand-coral hover:bg-brand-coral/90 text-white font-bold py-6 text-lg">
                Submit Venue Application
              </Button>
            </form>
          </div>
        </div>
      </section>

      <CTA
        title="Ready to Host Legendary Retreats?"
        subtitle="We're always looking for amazing venues to partner with."
        buttonText="Get in Touch"
        buttonLink="/contact"
      />
    </main>
  );
}

