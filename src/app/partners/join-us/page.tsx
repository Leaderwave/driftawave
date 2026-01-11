import { PageHeader } from "@/components/ui/PageHeader";
import { ContentBlock } from "@/components/ui/ContentBlock";
import { CTA } from "@/components/shared/CTA";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export const metadata = {
  title: "Join Our Team | Driftawave Partners",
  description: "We are currently vibing with the team, yet always keeping our eyes open for A-game talent.",
};

export default function JoinUsPage() {
  return (
    <main>
      <PageHeader
        title="READY TO JOIN THE TEAM?"
        subtitle="PARTNER IN CRIME 😌"
        breadcrumbs={[
          { label: "Partners", href: "/partners" },
          { label: "Join Us" }
        ]}
        backgroundImage="/images/hero-background.jpg"
      />

      <ContentBlock
        title="We are currently vibing with the team"
        subtitle="Always Open to Talent"
        content={`
          <p>We are currently vibing with the team, yet always keeping our eyes open for A-game talent.</p>
          <p><strong>A little note about the team;</strong></p>
          <ul>
            <li>Highly passionate.</li>
            <li>Global world travellers who have walked the talk.</li>
            <li>Fluent in language and culture.</li>
            <li>A lotta love for nature, in special we promote ocean sustainability.</li>
            <li>Banter, fun and jokes — balancing the edge of adventure sports with grace.</li>
            <li>Laser-focused on delivering top value to our trusted clients</li>
            <li>Here to break rules of commodity, building something beautiful with impact.</li>
          </ul>
          <p>All of our TALENT came through our network, or by natural pro-active appearances showcasing talent.</p>
          <p><strong>We'd love for you to surprise us.</strong></p>
        `}
        image="/images/partners/team.jpg"
        imageSide="right"
      />

      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white p-8 md:p-10 rounded-2xl shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold mb-6">Apply to Join the Team</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" placeholder="Jane" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" placeholder="Doe" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="jane@example.com" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="role">Role of Interest</Label>
                <Input id="role" placeholder="e.g., Operations, Marketing, Sales" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Tell us about yourself</Label>
                <Textarea 
                  id="message" 
                  placeholder="Why you'd be a great fit for Driftawave..." 
                  className="min-h-[150px]"
                />
              </div>

              <Button type="submit" className="w-full bg-brand-coral hover:bg-brand-coral/90 text-white font-bold py-6 text-lg">
                Submit Application
              </Button>
            </form>
          </div>
        </div>
      </section>

      <CTA
        title="Ready to Make Waves?"
        subtitle="Join a team that's redefining how teams connect."
        buttonText="Get in Touch"
        buttonLink="/contact"
      />
    </main>
  );
}

