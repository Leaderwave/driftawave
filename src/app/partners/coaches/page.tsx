import { PageHeader } from "@/components/ui/PageHeader";
import { ContentBlock } from "@/components/ui/ContentBlock";
import { CTA } from "@/components/shared/CTA";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export const metadata = {
  title: "Coaches Partnership | Driftawave",
  description: "You've got a rare gift. You move leaders and teams. You coach perspective shifts that travel a lifetime.",
};

export default function CoachesPage() {
  return (
    <main>
      <PageHeader
        title="COACHES WHO MOVE MINDS(ET)"
        subtitle="You've got a rare gift"
        breadcrumbs={[
          { label: "Partners", href: "/partners" },
          { label: "Coaches" }
        ]}
        backgroundImage="/images/hero-background.jpg"
      />

      <ContentBlock
        title="You move leaders and teams"
        subtitle="The Real, The Raw, The Unfiltered"
        content={`
          <p>You move leaders and teams.</p>
          <p>You coach perspective shifts that travel a lifetime.</p>
          <p>The real, the raw, the unfiltered.</p>
          <p><strong>Mindset breakthroughs.</strong></p>
          <p><strong>You:</strong></p>
          <ul>
            <li>Bring grounded belief into rooms of high-performers</li>
            <li>Crack the code of emotional intelligence and pass the torch</li>
            <li>Cultivate trust across teams, cultures, and leadership layers</li>
            <li>Know when to challenge, when to hold, and when to let go</li>
            <li>Believe culture is felt, not forced — and have the gift to unlock it.</li>
          </ul>
          <p><strong>If that's your vibe, We're listening.</strong></p>
        `}
        image="/images/partners/coaches.jpg"
        imageSide="left"
      />

      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white p-8 md:p-10 rounded-2xl shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold mb-6">Partner With Us as a Coach</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" placeholder="Your name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="your@email.com" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="specialty">Coaching Specialty</Label>
                <Input id="specialty" placeholder="e.g., Leadership, Team Dynamics, Emotional Intelligence" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="experience">Tell us about your coaching experience</Label>
                <Textarea 
                  id="experience" 
                  placeholder="Your background, approach, and what makes you unique..." 
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
        title="Ready to Move Minds?"
        subtitle="Let's create transformative experiences together."
        buttonText="Get in Touch"
        buttonLink="/contact"
      />
    </main>
  );
}

