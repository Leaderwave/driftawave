"use client";

import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { TrustLogos } from "@/components/shared";
import { motion } from "framer-motion";

const trustPoints = [
  {
    title: "ANVR Licensed",
    description: "Fully insured ANVR licensed tour operator",
    icon: "shield",
  },
  {
    title: "Calamity Fund",
    description: "Calamity Fund Partner protection",
    icon: "umbrella",
  },
  {
    title: "VZR Garant",
    description: "VZR Garant insolvency protection",
    icon: "lock",
  },
  {
    title: "AON Coverage",
    description: "Travel liability coverage up to €6 million",
    icon: "euro",
  },
  {
    title: "Global Network",
    description: "Trusted global network within the travel industry",
    icon: "globe",
  },
  {
    title: "Partner Meetings",
    description: "Continuous international partner meetings",
    icon: "handshake",
  },
  {
    title: "Site Inspections",
    description: "Optional additional location inspection service",
    icon: "search",
  },
  {
    title: "Ground Support",
    description: "International ground support 24/7",
    icon: "headset",
  },
  {
    title: "Expert Travellers",
    description:
      "Passionate world travellers with background in tourism, hospitality and superyacht standards",
    icon: "compass",
  },
  {
    title: "Cultural Fluency",
    description: "In depth knowledge of global cultures and multiple languages",
    icon: "languages",
  },
  {
    title: "Business Strategy",
    description:
      "Background in international business strategies and talent solutions",
    icon: "chart",
  },
];

const founderJourney = [
  "2 years throughout Latin America",
  "Roaming the globe on superyachts and sailing yachts",
  "Purser on an overnight cruise on The Great Barrier Reef",
  "100+ dives on the Barrier, plus Mexico, Aruba, Bonaire, Nicaragua, Colombia, New Zealand, Ireland",
  "Cowgirl in the Wild Wild West of Australia",
  "Record breaking travel consultant for 2+ years",
  "Skydive and 10+ bungy jumps despite fear of heights",
  "Bungy model praising A.J. Hackett",
];

const spirits = [
  { text: "The achievers", color: "text-sunset-orange" },
  { text: "the innovative", color: "text-sunset-gold" },
  { text: "and the creative.", color: "text-sunset-rust" },
];

export default function AboutPage() {
  return (
    <>
      {/* Trust Logos - Top */}
      <section className="py-4 bg-white border-b border-sunset-sand/30">
        <div className="container mx-auto px-4">
          <TrustLogos variant="light" size="sm" />
        </div>
      </section>

      {/* Hero Section - Immersive */}
      <section className="relative h-[70vh] min-h-[600px] w-full overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/about/team-rafting.jpg"
            alt="Driftawave team white water rafting in New Zealand during transformational company retreat"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-sunset-black/70 via-sunset-black/50 to-sunset-black/80" />
        </div>

        {/* Floating accent shapes */}
        <div className="absolute top-20 right-10 w-64 h-64 bg-sunset-orange/20 rounded-full blur-3xl" />
        <div className="absolute bottom-40 left-10 w-48 h-48 bg-sunset-gold/15 rounded-full blur-2xl" />

        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-4">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-body text-sm uppercase tracking-[0.3em] text-sunset-gold mb-6"
          >
            Meet Our Founder
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display text-5xl md:text-7xl lg:text-8xl text-white mb-6"
          >
            We are{" "}
            <span className="relative inline-block">
              Driftawave
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-sunset-orange via-sunset-gold to-sunset-orange rounded-full" />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="font-body font-light text-xl md:text-2xl text-white/80 max-w-2xl"
          >
            Unlock Your Inner Adventurer
          </motion.p>
        </div>

        {/* Gradient fade to white */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Introduction - Editorial Layout */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Text Content */}
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-6 font-body font-light text-lg md:text-xl text-sunset-black/70 leading-relaxed">
                <p className="text-2xl md:text-3xl font-display text-sunset-black">
                  As a Travel Company specializing in group workations, team
                  retreats and company offsites, we are here to help you unlock
                  your inner adventurer.
                </p>
                <p>
                  Embrace a world of high energies, pride, boldness, and fierce
                  excitement. Our mission is to provide travel experiences that
                  go beyond the ordinary, offering you the opportunity to thrive
                  on both personal and professional levels.
                </p>
              </div>

              {/* Manifesto */}
              <div className="relative pl-8 border-l-4 border-sunset-orange">
                <p className="font-display text-2xl md:text-3xl text-sunset-black">
                  Buckle up,
                </p>
                <p className="font-display text-2xl md:text-3xl text-sunset-orange my-2">
                  Soar beyond limits &
                </p>
                <p className="font-display text-2xl md:text-3xl text-sunset-black">
                  Embark on an unforgettable journey.
                </p>
              </div>

              <Link
                href="https://www.driftawave.com/post/the-story-behind-our-branding"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-body font-medium text-sunset-orange hover:text-sunset-rust transition-colors group"
              >
                Read more about our branding story
                <svg
                  className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>

            {/* Founder Image - Asymmetric */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[3/4] rounded-brand overflow-hidden shadow-2xl transform lg:translate-y-8 lg:-translate-x-4">
                <Image
                  src="/about/gina-founder.jpg"
                  alt="Gina Schinkel founder of Driftawave on Franz Josef Glacier in New Zealand embodying the adventurous spirit behind the travel company specializing in team retreats and company offsites"
                  fill
                  className="object-cover"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-sunset-black/50 via-transparent to-transparent" />

                {/* Name tag */}
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="font-display text-2xl text-white">
                    Gina Schinkel
                  </p>
                  <p className="font-body text-sm text-white/80">
                    Founder & Chief Adventure Officer
                  </p>
                </div>
              </div>

              {/* Decorative element */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-sunset-orange/20 rounded-full blur-xl" />
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-sunset-gold/15 rounded-full blur-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* What Spirits Do We Attract - Bold Typography */}
      <section className="py-24 md:py-32 bg-sunset-black text-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-body text-sm uppercase tracking-[0.3em] text-sunset-gold mb-6"
            >
              Our Tribe
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-display text-4xl md:text-5xl lg:text-6xl mb-8"
            >
              What spirits do we attract?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="font-body font-light text-xl md:text-2xl text-white/80 mb-12"
            >
              Those who challenge the status quo and embrace a fruitful future!
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="font-body text-lg text-white/60 mb-4"
            >
              Remote, digital first and distributed teams - companies and
              communities.
            </motion.p>

            {/* Spirit Types - Flowing Layout */}
            <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-12">
              {spirits.map((spirit, index) => (
                <motion.span
                  key={spirit.text}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className={cn(
                    "font-display text-2xl md:text-3xl",
                    spirit.color
                  )}
                >
                  {spirit.text}
                </motion.span>
              ))}
            </div>

            {/* Secondary spirits */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              className="space-y-2 mb-12"
            >
              <p className="font-body text-lg text-white/70">
                The adventurous & the free-spirited.
              </p>
              <p className="font-body text-lg text-white/70">
                The inventors & the creators.
              </p>
            </motion.div>

            {/* The Wild Hearted - Large Typography */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="relative py-8"
            >
              <p className="font-display text-5xl md:text-6xl lg:text-7xl text-sunset-orange">
                The wild hearted.
              </p>
              <p className="font-display text-3xl md:text-4xl text-white mt-4">
                Manifest.
              </p>

              {/* Decorative lines */}
              <div className="absolute left-1/2 top-0 w-px h-8 bg-gradient-to-b from-transparent to-sunset-orange/50 -translate-x-1/2" />
            </motion.div>
          </div>
        </div>

        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
              backgroundSize: "40px 40px",
            }}
          />
        </div>
      </section>

      {/* Meet Our Founder - Editorial Magazine Style */}
      <section className="py-24 md:py-32 section-warm">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <p className="font-body text-sm uppercase tracking-[0.3em] text-sunset-orange mb-4">
                The Journey
              </p>
              <h2 className="font-display text-4xl md:text-5xl text-sunset-black mb-4">
                Meet our founder
              </h2>
              <p className="font-display text-2xl text-sunset-gold">
                Hello limitless friends!
              </p>
            </div>

            {/* Opening Story */}
            <div className="prose prose-lg max-w-none mb-16">
              <p className="font-body font-light text-xl text-sunset-black/70 leading-relaxed text-center max-w-3xl mx-auto">
                My name is{" "}
                <span className="font-medium text-sunset-black">Gina</span> and
                I have been traveling the world extensively over the past 15
                years. Originally born in The Netherlands, I have also had the
                fortune to live in{" "}
                <span className="text-sunset-orange">
                  Aruba, Spain, Sweden, Belgium, Austria, Australia, New
                  Zealand, and Ireland.
                </span>
              </p>
            </div>

            {/* "It doesn't just stop there" - Highlight */}
            <div className="relative bg-sunset-orange/10 rounded-brand p-8 md:p-12 mb-16">
              <div className="absolute top-0 left-8 w-1 h-full bg-sunset-orange rounded-full" />
              <p className="font-display text-3xl md:text-4xl text-sunset-orange ml-4">
                It doesn't just stop there.
              </p>
            </div>

            {/* Journey Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
              {founderJourney.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4 p-4 bg-white rounded-brand shadow-sm hover:shadow-lg transition-shadow duration-300"
                >
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-sunset-orange/10 flex items-center justify-center">
                    <span className="w-2 h-2 rounded-full bg-sunset-orange" />
                  </span>
                  <p className="font-body font-light text-sunset-black/70">
                    {item}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Fear Less Live More Quote */}
            <div className="relative bg-sunset-black text-white rounded-brand p-10 md:p-16 mb-16 overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-sunset-orange/20 rounded-full blur-3xl" />
              <div className="relative z-10 text-center">
                <p className="font-display text-4xl md:text-5xl lg:text-6xl text-sunset-gold mb-4">
                  "FEAR LESS LIVE MORE"
                </p>
                <p className="font-body text-white/60">— A.J. Hackett</p>
              </div>
            </div>

            {/* The Birth of Driftawave */}
            <div className="text-center max-w-3xl mx-auto mb-12">
              <p className="font-body font-light text-lg text-sunset-black/70 leading-relaxed mb-6">
                Until the world pressed pause and I went to continue my lifelong
                internship. I landed in Ireland 5 years ago working in tech
                sales, experiencing corporate life to the new extent.
              </p>
              <p className="font-display text-2xl md:text-3xl text-sunset-black mb-6">
                This is where I discovered workations and offsites;
              </p>
              <p className="font-display text-3xl md:text-4xl text-sunset-orange mb-8">
                Driftawave is born.
              </p>
              <p className="font-body font-light text-lg text-sunset-black/70 leading-relaxed">
                I saw a chance to bring my different worlds and passions all
                together. In the hope of bringing you more of the earth's life &
                glory whilst being able to achieve beyond.
              </p>
            </div>

            {/* Connect */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <p className="font-body text-sunset-black/70">
                Always happy to connect!
              </p>
              <div className="flex items-center gap-4">
                <Link
                  href="https://www.linkedin.com/in/ginaschinkel/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "inline-flex items-center gap-2 px-6 py-3 rounded-brand",
                    "bg-[#0077B5] hover:bg-[#006396]",
                    "text-white font-body font-medium",
                    "transition-all duration-300 hover:-translate-y-0.5"
                  )}
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  LinkedIn
                </Link>
                <Link
                  href="mailto:info@driftawave.com"
                  className={cn(
                    "inline-flex items-center gap-2 px-6 py-3 rounded-brand",
                    "border-2 border-sunset-orange text-sunset-orange",
                    "hover:bg-sunset-orange hover:text-white",
                    "font-body font-medium",
                    "transition-all duration-300 hover:-translate-y-0.5"
                  )}
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  Email
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why You Can Trust Us */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="font-body text-sm uppercase tracking-[0.3em] text-sunset-orange mb-4">
              Peace of Mind
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-sunset-black">
              Why you can trust us
            </h2>
          </div>

          {/* Trust Points Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
            {trustPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className={cn(
                  "group relative p-6 rounded-brand",
                  "bg-gradient-to-br from-sunset-sand/30 to-sunset-sand/10",
                  "border border-sunset-sand/50",
                  "hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                )}
              >
                {/* Accent line */}
                <div className="absolute top-0 left-6 right-6 h-0.5 bg-gradient-to-r from-transparent via-sunset-orange/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-10 h-10 rounded-full bg-sunset-orange/10 flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-sunset-orange"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </span>
                  <div>
                    <h3 className="font-display text-lg text-sunset-black mb-1">
                      {point.title}
                    </h3>
                    <p className="font-body font-light text-sm text-sunset-black/60">
                      {point.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Trust Logos - Bottom */}
          <div className="bg-sunset-sand/20 rounded-brand p-8 md:p-12">
            <p className="font-body text-sm uppercase tracking-widest text-sunset-black/50 text-center mb-6">
              Certified & Protected By
            </p>
            <TrustLogos variant="light" size="lg" />
          </div>
        </div>
      </section>
    </>
  );
}
