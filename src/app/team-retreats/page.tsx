import { PageHeader } from "@/components/ui/PageHeader";
import { ContentBlock } from "@/components/ui/ContentBlock";
import { CardGrid } from "@/components/ui/CardGrid";
import { CTA } from "@/components/shared/CTA";

export const metadata = {
  title: "Team Retreat Activities | Driftawave",
  description: "Inspiration, Adventure. Culture & Connection. Memory makers, connection builders, and culture boosters.",
};

const activities = [
  {
    title: "Culture Sparks (Team Building)",
    description: "Bond over shared laughter, values, and adventure. Perfect for teams needing authentic connection.",
    image: "/images/activities/team-building.jpg",
    link: "/team-retreats/team-building",
    badge: "Connection",
    icon: "🤝",
  },
  {
    title: "Leadership Fuel",
    description: "Tap into what truly matters. Solve hard challenges and set strategies in inspiring environments.",
    image: "/images/activities/leadership.jpg",
    link: "/team-retreats/leadership",
    badge: "Leadership",
    icon: "👑",
  },
  {
    title: "Craft Stories (Comm & PR)",
    description: "Stand out in noisy markets. Build your next GTM moat with narratives that travel beyond imagination.",
    image: "/images/activities/communication.jpg",
    link: "/team-retreats/communication-pr",
    badge: "Storytelling",
    icon: "📢",
  },
  {
    title: "Brand Swell Wave",
    description: "Take your brand to the next level. Let adventure dictate your energy levels and creative input.",
    image: "/images/activities/marketing.jpg",
    link: "/team-retreats/marketing-creativity",
    badge: "Marketing",
    icon: "📈",
  },
  {
    title: "Innovative Burst & Flow",
    description: "Reimagine, reinvent, rebuild. Bigger obstacles, bigger rewards. Challenge accepted!",
    image: "/images/activities/innovation.jpg",
    link: "/team-retreats/agile-innovation",
    badge: "Innovation",
    icon: "⚡",
  },
  {
    title: "Smash Silos (Startup & Scale-up)",
    description: "Feel the energy of true winner accomplishments. Don't let wins go unheard.",
    image: "/images/activities/startup.jpg",
    link: "/team-retreats/startup-scaleup",
    badge: "Scale-up",
    icon: "🚀",
  },
];

const activityTypes = [
  {
    category: "Thrill & Adrenaline",
    description: "For the teams who love kickin' edge. Feel the pulse rise, and let go of all.",
    items: ["White-water Rafting", "Canyoning", "Olympic Bob Sleigh Run", "Paragliding", "Bungy Jump", "Skydive", "Jetboat", "Ziplining", "Cliffhangers & Pandora Box Challenges"]
  },
  {
    category: "Nature & Wellness",
    description: "Reset, reflect: balance.",
    items: ["Guided Hikes & Volcano Trails", "Thermal Baths", "Forest Walks & Mindfulness", "Jungle Wellness Weeks", "Hammam & Massage", "Natural Pools & Cenotes"]
  },
  {
    category: "Water & Flow",
    description: "From sailing and diving to beach volleyball and barefoot bonfires; flow states live here.",
    items: ["Yacht and Catamaran days up to Company-wide Regattas", "Surf Lessons", "Snorkeling & Scuba Diving", "Beach Games", "Dolphin Kayak", "Whale Watching", "Paddleboarding", "Waterfall & Lake Adventures"]
  },
  {
    category: "Culture & Creativity",
    description: "Deep dives into art, food, music, and local stories; team cuddles guaranteed.",
    items: ["Cooking Classes", "Street Art Tours & Graffiti Workshops", "Vineyard Wine Tastings", "Historic Town Hunts & Castles", "Carnival, Day of the Dead, and other Celebrations", "Fado & Folklore Experiences", "Monasteries & Temples"]
  },
  {
    category: "Mindset & Growth",
    description: "Not all transformation is external. Build team rituals, ideas, and trust.",
    items: ["Icebreakers & Energy Mapping", "Founders Fire & Gratitude Circles", "Guest Speakers & Innovation Labs", "Hackathons & Mini Habit Labs", "Leadership Treks & Mental Fitness", "Silent Walk & Share", "Workshop Challenges"]
  }
];

export default function TeamRetreatsPage() {
  return (
    <main>
      <PageHeader
        title="Team Retreat Activities"
        subtitle="Inspiration, Adventure. Culture & Connection."
        breadcrumbs={[{ label: "Team Retreats" }]}
        backgroundImage="/images/hero-background.jpg"
      />

      <ContentBlock
        title="Memory makers, connection builders, and culture boosters"
        subtitle="Here's where EPIC begins"
        content={`
          <p>Memory makers, connection builders, and culture boosters.</p>
          <p>From adrenaline-pumping cliffhangers to grounding forest hike. We design experiences that aren't just "fun".</p>
          <p>Whether you're planning your next leadership offsite, hybrid team retreat, or simply dreaming big. (Just how we like it most).</p>
          <p><strong>Buckle up our friend</strong></p>
        `}
        image="/images/activities/intro.jpg"
        imageSide="left"
        imageAlt="Team retreat activities"
      />

      <section className="py-12 text-center">
        <h2 className="text-4xl font-brush text-brand-ink mb-4">Choose Your Transformation</h2>
        <p className="text-muted-foreground font-serif max-w-2xl mx-auto px-4 mb-8">
          Select the focus area that aligns with your team's current needs and goals.
        </p>
      </section>

      <CardGrid items={activities} />

      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-brush text-brand-ink mb-12 text-center">Activity Types</h2>
          <div className="space-y-12">
            {activityTypes.map((type, index) => (
              <div key={type.category} className="bg-white p-8 rounded-xl shadow-sm">
                <h3 className="text-2xl font-brush text-brand-coral mb-3">{type.category}</h3>
                <p className="font-serif text-muted-foreground mb-6">{type.description}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {type.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-start gap-2">
                      <span className="text-brand-coral">•</span>
                      <span className="font-serif">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-brush text-brand-ink mb-6">Need an experience combo?</h2>
          <p className="text-xl font-serif text-muted-foreground mb-8">We've got you bundled.</p>
          <div className="space-y-4">
            <div className="bg-gray-50 p-6 rounded-xl">
              <p className="text-2xl mb-2">✨</p>
              <p className="font-serif text-lg">Florence Strategy Sprint + Tuscany Wine & Dine</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl">
              <p className="text-2xl mb-2">✨</p>
              <p className="font-serif text-lg">Bali Leadership Reset + Jungle Wellness Retreat</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl">
              <p className="text-2xl mb-2">✨</p>
              <p className="font-serif text-lg">Cartagena Brand Lab + San Blas Island Escape</p>
            </div>
          </div>
        </div>
      </section>

      <CTA
        title="Let's Map Your Energy & Vision"
        subtitle="Start planning your adventure today."
        buttonText="Start Planning"
      />
    </main>
  );
}
