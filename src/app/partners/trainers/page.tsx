import { PageHeader } from "@/components/ui/PageHeader";
import { ContentBlock } from "@/components/ui/ContentBlock";
import { CTA } from "@/components/shared/CTA";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export const metadata = {
  title: "Trainers Partnership | Driftawave",
  description: "You are a bold, creative and brilliant mind who knows how to move people. Experiences that don't just inspire: they activate.",
};

export default function TrainersPage() {
  return (
    <main>
      <PageHeader
        title="TRAINERS & WORKSHOP HOSTS AHEAD OF THE CURVE"
        subtitle="You bring the magic"
        breadcrumbs={[
          { label: "Partners", href: "/partners" },
          { label: "Trainers" }
        ]}
        backgroundImage="/images/hero-background.jpg"
      />

      <ContentBlock
        title="You are a bold, creative and brilliant mind"
        subtitle="Who Knows How to Move People"
        content={`
          <p>You are a bold, creative and brilliant mind who knows how to move people.</p>
          <p>You can guide founders, leaders and talent to shape what's next.</p>
          <p><strong>Experiences that don't just inspire: they activate.</strong></p>
          <p>Hands-on. No fluff.</p>
          <p>A flow of experiments that drives real change.</p>
          <p>From future fluency to tool mastery, from deep collaboration to creative breakthroughs.</p>
          <p><strong>You bring the magic.</strong></p>
          <h3>What we're looking for:</h3>
          <ul>
            <li>Category-defining trainers.</li>
            <li>Workshop hosts building fresh formats for the future of work.</li>
            <li>Experts in AI fluency, emotional intelligence, systems thinking, or hybrid collaboration.</li>
            <li>Facilitators who turn theory into activation.</li>
            <li>Voices spark an inner fire.</li>
            <li>Creators with missions and momentum, over dull meetings and clutter</li>
          </ul>
          <p><strong>If that sounds like you? Let's build the future together.</strong></p>
        `}
        image="/images/partners/trainers.jpg"
        imageSide="right"
      />

      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white p-8 md:p-10 rounded-2xl shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold mb-6">Partner With Us as a Trainer</h3>
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
                <Label htmlFor="specialty">Training Specialty</Label>
                <Input id="specialty" placeholder="e.g., AI Fluency, Leadership, Innovation" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="experience">Tell us about your training approach</Label>
                <Textarea 
                  id="experience" 
                  placeholder="Your methodology, workshops, and what makes your training unique..." 
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
        title="Ready to Build the Future?"
        subtitle="Let's create activation experiences together."
        buttonText="Get in Touch"
        buttonLink="/contact"
      />
    </main>
  );
}

