import { PageHeader } from "@/components/ui/PageHeader";
import { ContentBlock } from "@/components/ui/ContentBlock";
import { CTA } from "@/components/shared/CTA";

export const metadata = {
  title: "Destinations | Driftawave",
  description: "Worth moving minds and teams. From Alpine vision resets to jungle-fuelled breakthroughs, we design immersive team retreats and company offsites.",
};

export default function DestinationsPage() {
  return (
    <main>
      <PageHeader
        title="Destinations"
        subtitle="Worth Moving Minds and Teams"
        breadcrumbs={[{ label: "Destinations" }]}
        backgroundImage="/images/hero-background.jpg"
      />

      <ContentBlock
        title="From Alpine vision resets to jungle-fuelled breakthroughs"
        subtitle="Handpicked Locations"
        content={`
          <p>From Alpine vision resets to jungle-fuelled breakthroughs, we design immersive team retreats and company offsites that spark real connection, creative bursts, and strategic clarity.</p>
          <p>Driftawave guides you to handpicked, high-vibe locations across Europe, Latin America, Asia, Oceania, Africa and beyond.</p>
          <p><strong>Done with dull boardrooms and lives in cubicles. Hello energy, growth mindset & culture-first thinking.</strong></p>
          <p>We move like operations in flow, aligned with your team vision.</p>
        `}
        image="/images/destinations/overview.jpg"
        imageSide="right"
      />

      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto space-y-12">
          <div>
            <h2 className="text-3xl font-brush text-brand-ink mb-6">Every location is scouted for connection</h2>
            <p className="text-lg font-serif text-muted-foreground leading-relaxed mb-6">
              Whether it's a surf house in Portugal, a castle in France, a modern co-work villa in Bali, or a desert resort near Marrakesh.
            </p>
            <p className="text-lg font-serif text-muted-foreground leading-relaxed">
              Every location is scouted for connection, space, flow and cultural experiences.
            </p>
          </div>

          <ContentBlock
            title="Connect with your team in the green lush nature"
            subtitle="European Destinations"
            content={`
              <p>Connect with your team in the green lush nature of the Portuguese Islands, or enjoy volcano hikes on the Spanish islands. From the Gran Canary co-work tribe vibes up to loose shakas and surf adventures.</p>
              <p>The mysteries of the French landscape hailing from castles to vineyard estates.</p>
              <p>Dipping your toes in the Greek sand on a private island. Eat food that makes you smile just thinking about it. Enjoying organized team events aligned with culture, creativity and excitement for the IRL connection.</p>
            `}
            image="/images/destinations/europe.jpg"
            imageSide="left"
          />

          <ContentBlock
            title="Shifting 180 degrees cross globe"
            subtitle="Adventure & Nature"
            content={`
              <p>You may revamp your energy levels as a team getaway in adventure capital of the world; Queenstown, New Zealand. Where bravery meets the edge of comfort, the glaciers glisten and the horses smile.</p>
              <p>Japanese sushi and offsite skiing in Japan? Or company wide wooden chalets, snow dog sledges, glacier river rafting in Austria.</p>
              <p>A gorgeous summer mountain hike, and teambuilding with the most gorgeous views.</p>
            `}
            image="/images/destinations/adventure.jpg"
            imageSide="right"
          />

          <ContentBlock
            title="Urban excitement and cultural immersion"
            subtitle="City & Cultural Destinations"
            content={`
              <p>Urban excitement from Berlin up to the magical street art and dance in Colombia.</p>
              <p>The famous Caribbean coastline offsite, connected to a workation or holiday for your team to rejuvenate from the hard work: fueled on excitement and nature spirit vibes.</p>
              <p>A South American Latin getaway, a visit to La Boca or La Mendoza, Argentina. A cheeky dance here, left and right.</p>
            `}
            image="/images/destinations/cultural.jpg"
            imageSide="left"
          />

          <ContentBlock
            title="A surf jungle drum from the mind-blowing magic"
            subtitle="Tropical & Exotic"
            content={`
              <p>A surf jungle drum from the mind-blowing magic of Florianopolis Brasil, or a Rio de Janeiro visit to Christo Redentor and Sugar Mountain.</p>
              <p>A full jungle experience with high-speed WiFi, or a full leadership detox retreat to focus on human skills and priority setting?</p>
              <p>There are countless opportunities, countries and themes.</p>
              <p>So let's align and see what is in line with your wishes and vision.</p>
            `}
            image="/images/destinations/tropical.jpg"
            imageSide="right"
          />

          <div className="bg-white p-12 rounded-2xl shadow-lg text-center">
            <h2 className="text-3xl font-brush text-brand-ink mb-6">Whether that means;</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="p-6 bg-gray-50 rounded-xl">
                <p className="text-2xl mb-2">✨</p>
                <p className="font-serif text-lg">12 leaders in the Dolomites</p>
              </div>
              <div className="p-6 bg-gray-50 rounded-xl">
                <p className="text-2xl mb-2">✨</p>
                <p className="font-serif text-lg">60 creators on a Croatian coast</p>
              </div>
              <div className="p-6 bg-gray-50 rounded-xl">
                <p className="text-2xl mb-2">✨</p>
                <p className="font-serif text-lg">300 team members in the Caribbean</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTA
        title="Ready to land in the right place?"
        subtitle="Let's find the perfect spot for your team's next adventure."
        buttonText="Let's Find The Perfect Spot!"
      />
    </main>
  );
}
