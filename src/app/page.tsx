import { HeroSection } from "@/components/homepage/HeroSection";
import { TeamRetreatsSection } from "@/components/homepage/TeamRetreatsSection";
import { OffsiteEnergiesSection } from "@/components/homepage/OffsiteEnergiesSection";
import { TrustReviewsSection } from "@/components/homepage/TrustReviewsSection";
import { VideoTeaserSection } from "@/components/homepage/VideoTeaserSection";
import { FeaturedBySection } from "@/components/homepage/FeaturedBySection";

export default function Home() {
  return (
    <>
      {/* Section 2: Hero */}
      <HeroSection />

      {/* Section 3: Team Retreats Bento Grid */}
      <TeamRetreatsSection />

      {/* Section 4: Offsite Energies */}
      <OffsiteEnergiesSection />

      {/* Section 5: Mic Drop Trust Reviews */}
      <TrustReviewsSection />

      {/* Section 6: Video Teaser */}
      <VideoTeaserSection />

      {/* Section 7: Featured By */}
      <FeaturedBySection />

      {/* Sections 8 & 9 (PostcardCTA & Footer) are in layout.tsx */}
    </>
  );
}
