import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Driftawave | We Are Driftawave - Meet Our Founder",
  description:
    "We are a Travel Company specializing in group workations, team retreats and company offsites. Unlock your inner adventurer and embrace high energies, pride, boldness, and fierce excitement.",
  keywords: [
    "about driftawave",
    "team retreats company",
    "workation organizer",
    "company offsite planner",
    "gina schinkel",
    "travel company",
    "remote team experiences",
  ],
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
