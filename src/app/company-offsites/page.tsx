import { PageHeader } from "@/components/ui/PageHeader";
import { ContentBlock } from "@/components/ui/ContentBlock";
import { CardGrid } from "@/components/ui/CardGrid";
import { CTA } from "@/components/shared/CTA";
import { LogosStrip } from "@/components/homepage/LogosStrip";

export const metadata = {
  title: "Company Offsites & Retreats | Driftawave",
  description: "Accelerate Vibrant Culture. A powerful offsite isn't a luxury anymore. It's a strategic culture investment that brings trust and innovation.",
};

const energies = [
  {
    title: "Creative Pulse",
    description: "Reignite innovation and creative thinking in inspiring environments designed to break the mold.",
    image: "/images/energies/creative-pulse.jpg",
    link: "/company-offsites/creative-pulse",
    badge: "Innovation",
    icon: "🎨",
  },
  {
    title: "Edge of Comfort",
    description: "Push boundaries and build resilience through challenging adventures that unite the team.",
    image: "/images/energies/edge-of-comfort.jpg",
    link: "/company-offsites/edge-of-comfort",
    badge: "Adventure",
    icon: "🧗",
  },
  {
    title: "Mountain Air",
    description: "Find clarity and perspective high above the noise. Perfect for strategy and deep work.",
    image: "/images/energies/mountain-air.jpg",
    link: "/company-offsites/mountain-air",
    badge: "Strategy",
    icon: "🏔️",
  },
  {
    title: "Ocean Flow",
    description: "Connect deeply and find rhythm by the sea. Ideal for bonding and communication.",
    image: "/images/energies/ocean-flow.jpg",
    link: "/company-offsites/ocean-flow",
    badge: "Connection",
    icon: "🌊",
  },
  {
    title: "Wild Rooted",
    description: "Ground your team in nature. Reconnect with values and foundational purpose.",
    image: "/images/energies/wild-rooted.jpg",
    link: "/company-offsites/wild-rooted",
    badge: "Wellbeing",
    icon: "🌲",
  },
];

export default function CompanyOffsitesPage() {
  return (
    <main>
      <PageHeader
        title="Company Offsites"
        subtitle="Accelerate Vibrant Culture"
        breadcrumbs={[{ label: "Company Offsites" }]}
        backgroundImage="/images/hero-background.jpg"
      />

      <ContentBlock
        title="The best teams today are remote, digital-first and distributed"
        subtitle="Leading the Wave"
        content={`
          <p>The best teams today are remote, digital-first and distributed leading the wave. Diverse, dynamic AND brilliant. Exactly how we LOVE them.</p>
          <p><strong>But here's what nobody talks about:</strong></p>
          <ul>
            <li>Your developer in Amsterdam has never high-fived your Barcelona designer.</li>
            <li>Your strategist in Singapore doesn't know their team lead takes salsa classes.</li>
            <li>Your CEO hasn't seen the team laugh together. Ever?</li>
          </ul>
          <p><strong>Meanwhile your toptalent is:</strong></p>
          <ul>
            <li>✔️ Crushing goals, but craving real connection</li>
            <li>✔️ Async wizards, just donut-calls won't cut the next mile</li>
            <li>✔️ Passionate & mission driven, yet missing that IRL collective fire</li>
            <li>✔️ Brilliant minds, vibing while trapped in Slack silos</li>
          </ul>
          <p><strong>A powerful offsite isn't a luxury anymore. It's a strategic culture investment that brings trust and innovation.</strong></p>
          <p>Bonus? It's a modern top talent retention and attraction vehicle.</p>
        `}
        image="/images/company-offsites/intro.jpg"
        imageAlt="Distributed team connecting"
        imageSide="right"
      />

      <section className="py-20 px-6 bg-brand-ink text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-brush text-brand-coral mb-8 text-center">The ROI?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start gap-3">
              <span className="text-brand-coral text-xl">✔️</span>
              <p className="font-serif text-lg">Leadership back in the saddle of milestone visions.</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-brand-coral text-xl">✔️</span>
              <p className="font-serif text-lg">Active listening and shared voices.</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-brand-coral text-xl">✔️</span>
              <p className="font-serif text-lg">Real connection across teams.</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-brand-coral text-xl">✔️</span>
              <p className="font-serif text-lg">Teams ready to move mountains, fresh on track.</p>
            </div>
            <div className="flex items-start gap-3 md:col-span-2">
              <span className="text-brand-coral text-xl">✔️</span>
              <p className="font-serif text-lg">A culture build to host top-performers indefinitely.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-brush text-brand-ink mb-8 text-center">WE HELP YOU CRAFT IT, START TO FINISH.</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start gap-3">
              <span className="text-brand-coral text-xl">✔️</span>
              <p className="font-serif text-lg">Strategically aligned</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-brand-coral text-xl">✔️</span>
              <p className="font-serif text-lg">Emotionally resonant</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-brand-coral text-xl">✔️</span>
              <p className="font-serif text-lg">Logistically seamless</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-brand-coral text-xl">✔️</span>
              <p className="font-serif text-lg">Intentionally designed</p>
            </div>
            <div className="flex items-start gap-3 md:col-span-2">
              <span className="text-brand-coral text-xl">✔️</span>
              <p className="font-serif text-lg">Human & Experience First</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 text-center">
        <h2 className="text-4xl font-brush text-brand-ink mb-4">READY TO DESIGN YOUR NEXT BIG CULTURE MOVE?</h2>
        <p className="text-xl font-serif text-muted-foreground mb-8">Whether it's:</p>
        <div className="max-w-2xl mx-auto space-y-4 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <p className="text-2xl mb-2">✨</p>
            <p className="font-serif text-lg">10 bold leaders in Madeira</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <p className="text-2xl mb-2">✨</p>
            <p className="font-serif text-lg">50 rising heroes in the ancient empire</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <p className="text-2xl mb-2">✨</p>
            <p className="font-serif text-lg">500 legends in a wooden mountain village</p>
          </div>
        </div>
        <p className="text-lg font-serif text-muted-foreground mb-8">
          Need company wide flights in a group package or for your distributed team?<br />
          No worries: we got you!
        </p>
      </section>

      <section className="py-12 text-center">
        <h2 className="text-4xl font-brush text-brand-ink mb-4">Choose Your Energy</h2>
        <p className="text-muted-foreground font-serif max-w-2xl mx-auto px-4 mb-8">
          Every team is at a different stage. We've curated 5 distinct "Energies" to match your current goals and vibe.
        </p>
      </section>

      <CardGrid items={energies} />

      <LogosStrip />

      <CTA
        title="EXPLORE THE POSSIBLE"
        subtitle="Let's chat about your next IRL connect!"
        buttonText="Let's Chat"
      />
    </main>
  );
}
