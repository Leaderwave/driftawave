"use client";

import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ChevronRight, Sparkles, Heart, Target, Users, Compass } from "lucide-react";

// Energy data for portrait cards
const energies = [
  {
    name: "Ocean Flow",
    tagline: "Water dips, majestic sunsets & sunrise runs",
    description: "When ideas flow like the tide and strategies merge from the depth. What on earth is stopping you from planning your next offsite?",
    image: "/energies/ocean-flow.png",
    href: "/company-offsite/ocean-flow",
    alt: "Greek Mediterranean coastal resort for company offsite with crystal blue waters",
  },
  {
    name: "Mountain Air",
    tagline: "High vibes & energy punches",
    description: "Catch a breath. There's POW mountains and nature hikes to scout! Let's get active together!",
    image: "/energies/mountain-air.png",
    href: "/company-offsite/mountain-air",
    alt: "Italian alpine ski resort heated pool for company offsite retreats",
  },
  {
    name: "Creative Pulse",
    tagline: "Bohemian vanity & graffiti grinds",
    description: "Ready to shake things up? Let's hop on an urban art scout. Share the mysteries along.",
    image: "/energies/creative-pulse.png",
    href: "/company-offsite/creative-pulse",
    alt: "Barcelona street art mural for creative company offsite experience",
  },
  {
    name: "Wild & Rooted",
    tagline: "Lush forest & bonfire bangers",
    description: "There's nothing more humbling than being in nature. Find balance watching the fire dance.",
    image: "/energies/wild-rooted.jpg",
    href: "/company-offsite/wild-rooted",
    alt: "French vineyard company offsite with rustic charm and nature connection",
  },
  {
    name: "Edge of Comfort",
    tagline: "Thrills & hang loose vibes",
    description: "Ready to push boundaries? Fly on energy! Growth mindset was never found in the predictable.",
    image: "/energies/edge-of-comfort.jpg",
    href: "/company-offsite/edge-of-comfort",
    alt: "New Zealand adventure skydiving company offsite experience",
  },
];

// Trust reviews data
const trustReviews = [
  {
    company: "Intel",
    logo: "/logos/reviews/intel.png",
    quote: "Outstanding group cohesion and one of the best trips of my lifetime. Looking forward to jump on a future trip.",
    author: "Kurt",
    role: "Senior Manager, Intel",
    alt: "Intel logo client testimonial for Driftawave company offsites",
  },
  {
    company: "LinkedIn",
    logo: "/logos/reviews/linkedin.png",
    quote: "Unforgettable adventure on the Adriatic waters. An amazing experience that will stay with you long after the journey ends.",
    author: "Elia",
    role: "Account Director, LinkedIn",
    alt: "LinkedIn logo client testimonial for Driftawave team retreats",
  },
  {
    company: "TravMagazine",
    logo: "/logos/reviews/travmagazine.jpeg",
    quote: "First class workation in my 30 years travelogue!! Every day when I'm here it feels more beautiful.",
    author: "Pieter",
    role: "Entrepreneur & Chief Editor",
    alt: "TravMagazine testimonial for Driftawave workation experiences",
  },
];

// Pain points data
const painPoints = [
  {
    highlight: "Crushing goals,",
    rest: "but craving real connection",
    icon: Target,
  },
  {
    highlight: "Async wizards,",
    rest: "just donut-calls won't cut the next mile",
    icon: Compass,
  },
  {
    highlight: "Passionate & mission driven,",
    rest: "yet missing that IRL collective fire",
    icon: Heart,
  },
  {
    highlight: "Brilliant minds,",
    rest: "vibing while trapped in Slack silos",
    icon: Users,
  },
];

// ROI items
const roiItems = [
  "Leadership back in the saddle of milestone visions",
  "Active listening and shared voices",
  "Real connection across teams",
  "Teams ready to move mountains, fresh on track",
  "A culture built to host top-performers indefinitely",
];

// Craft pillars
const craftPillars = [
  { title: "Strategically", subtitle: "aligned" },
  { title: "Emotionally", subtitle: "resonant" },
  { title: "Logistically", subtitle: "seamless" },
  { title: "Intentionally", subtitle: "designed" },
  { title: "Human &", subtitle: "Experience First" },
];

export default function CompanyOffsitePage() {
  return (
    <>
      {/* ============================================
          SECTION 1: IMMERSIVE HERO
          ============================================ */}
      <section className="relative h-[85vh] min-h-[600px] w-full overflow-hidden -mt-24 md:-mt-28">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/energies/ocean-flow.png"
            alt="Team building water activities during Driftawave company offsite retreat"
            fill
            className="object-cover"
            priority
          />
          {/* Refined gradient overlay - editorial warmth */}
          <div className="absolute inset-0 bg-gradient-to-b from-sunset-black/60 via-sunset-black/40 to-white/95" />
        </div>

        {/* Content */}
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-4 pt-24 md:pt-28 pb-32">
          {/* Eyebrow */}
          <span className="font-display text-sm uppercase tracking-[0.3em] text-sunset-gold mb-6 block">
            Company Offsites
          </span>

          {/* Main Headline */}
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl xl:text-9xl text-white mb-8 max-w-5xl leading-[0.95] drop-shadow-lg">
            Accelerate{" "}
            <span className="relative inline-block">
              Vibrant
              <span className="absolute -bottom-2 left-0 w-full h-1.5 bg-sunset-orange rounded-full" />
            </span>{" "}
            <br className="hidden md:block" />
            Culture
          </h1>

          {/* Subheadline - frosted glass */}
          <div className="bg-white/90 backdrop-blur-sm px-8 py-5 rounded-brand shadow-lg border border-sunset-sand/30 mb-12 max-w-2xl">
            <p className="font-body font-medium text-lg md:text-xl text-sunset-black">
              Strategic culture investments that bring trust, innovation & fire.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-5">
            <Link
              href="https://meet-ting.com/to/driftawave"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "inline-flex items-center justify-center px-8 py-4",
                "bg-sunset-orange text-white font-body font-bold text-lg",
                "rounded-brand shadow-lg shadow-sunset-orange/30",
                "hover:bg-sunset-rust hover:shadow-xl hover:-translate-y-0.5",
                "transition-all duration-300",
                "min-w-[200px]"
              )}
            >
              Start Planning
            </Link>
            <Link
              href="#explore-energies"
              className={cn(
                "inline-flex items-center justify-center px-8 py-4",
                "rounded-brand border-2 border-white/80",
                "text-white font-body font-bold text-lg",
                "backdrop-blur-sm bg-white/10",
                "hover:bg-white hover:text-sunset-black",
                "transition-all duration-300 min-w-[200px]"
              )}
            >
              Explore Energies
            </Link>
          </div>
        </div>

        {/* Bottom transition */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none" />
      </section>

      {/* ============================================
          SECTION 2: EDITORIAL INTRODUCTION
          ============================================ */}
      <section className="relative py-24 md:py-32 lg:py-40 section-warm">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Large editorial text */}
            <div className="space-y-8 mb-16">
              <p className="font-display text-2xl md:text-3xl lg:text-4xl text-sunset-black leading-snug">
                The best teams today are{" "}
                <span className="text-sunset-orange">remote, digital-first</span> and{" "}
                <span className="text-sunset-orange">distributed</span> leading the wave.
              </p>
              <p className="font-body font-light text-xl md:text-2xl text-sunset-black/70 leading-relaxed">
                Diverse, dynamic AND brilliant. Exactly how we <span className="font-medium">LOVE</span> them.
              </p>
            </div>

            {/* The problem - elegant divider */}
            <div className="divider-orange mb-16" />

            {/* Problem statement */}
            <div className="text-center mb-16">
              <p className="font-display text-xl md:text-2xl text-sunset-black/80 mb-6">
                But here&apos;s what nobody talks about:
              </p>
              <div className="space-y-4 font-body font-light text-lg md:text-xl text-sunset-black/60 max-w-3xl mx-auto">
                <p>Your developer in Amsterdam has never high-fived your Barcelona designer.</p>
                <p>Your strategist in Singapore doesn&apos;t know their team lead takes salsa classes.</p>
                <p className="font-medium text-sunset-black/80">Your CEO hasn&apos;t seen the team laugh together. Ever?</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          SECTION 3: PAIN POINTS BENTO GRID
          ============================================ */}
      <section className="relative py-24 md:py-32 section-sand">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-16 md:mb-20">
            <span className="font-display text-sm uppercase tracking-widest text-sunset-orange mb-4 block">
              Meanwhile Your Top Talent Is
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-sunset-black tracking-tight">
              Craving Connection
            </h2>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {painPoints.map((point, index) => {
              const IconComponent = point.icon;
              return (
                <div
                  key={index}
                  className="card-brand p-8 group"
                >
                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 rounded-full bg-sunset-orange/10 flex items-center justify-center flex-shrink-0 group-hover:bg-sunset-orange/20 transition-colors duration-300">
                      <IconComponent className="w-6 h-6 text-sunset-orange" />
                    </div>
                    <div>
                      <span className="font-display text-xl text-sunset-orange block mb-1">
                        {point.highlight}
                      </span>
                      <span className="font-body font-light text-lg text-sunset-black/70">
                        {point.rest}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================
          SECTION 4: VALUE PROPOSITION (DARK)
          ============================================ */}
      <section className="relative py-24 md:py-32 lg:py-40 bg-sunset-black overflow-hidden">
        {/* Decorative glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full glow-orange opacity-30 pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <p className="font-display text-3xl md:text-4xl lg:text-5xl text-white leading-snug mb-12">
              A powerful offsite isn&apos;t a luxury anymore.
              <br />
              <span className="text-sunset-gold">It&apos;s a strategic culture investment</span>
              <br />
              that brings trust and innovation.
            </p>

            <p className="font-body font-light text-xl text-white/60 mb-12">
              Bonus? It&apos;s a modern top talent retention and attraction vehicle.
            </p>

            <Link
              href="https://meet-ting.com/to/driftawave"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "inline-flex items-center gap-3 px-10 py-5",
                "bg-sunset-orange text-white font-body font-bold text-xl",
                "rounded-brand shadow-xl shadow-sunset-orange/40",
                "hover:bg-sunset-rust hover:shadow-2xl hover:-translate-y-1",
                "transition-all duration-300"
              )}
            >
              <Sparkles className="w-6 h-6" />
              Turn your team into friends they can trust
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================
          SECTION 5: THE ROI
          ============================================ */}
      <section className="relative py-24 md:py-32 lg:py-40 section-cream">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-16 md:mb-20">
            <span className="font-display text-sm uppercase tracking-widest text-sunset-orange mb-4 block">
              The Results
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-sunset-black tracking-tight">
              The ROI?
            </h2>
          </div>

          {/* ROI List - elegant treatment */}
          <div className="max-w-2xl mx-auto">
            {roiItems.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-6 py-6 border-b border-sunset-sand/50 last:border-b-0 group"
              >
                <span className="w-10 h-10 rounded-full bg-sunset-orange/10 flex items-center justify-center flex-shrink-0 group-hover:bg-sunset-orange group-hover:text-white transition-all duration-300">
                  <span className="font-display text-sunset-orange group-hover:text-white text-lg">
                    {index + 1}
                  </span>
                </span>
                <p className="font-body font-light text-lg md:text-xl text-sunset-black/80 group-hover:text-sunset-black transition-colors duration-300">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          SECTION 6: WE HELP YOU CRAFT IT
          ============================================ */}
      <section className="relative py-24 md:py-32 section-warm">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-16 md:mb-20">
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-sunset-black tracking-tight">
              We Help You Craft It
            </h2>
            <p className="font-body font-light text-xl text-sunset-black/60 mt-4">
              Start to finish. Every detail.
            </p>
          </div>

          {/* Craft Pillars */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 max-w-4xl mx-auto">
            {craftPillars.map((pillar, index) => (
              <div
                key={index}
                className="card-brand px-8 py-6 text-center min-w-[160px]"
              >
                <span className="font-display text-lg text-sunset-orange block">
                  {pillar.title}
                </span>
                <span className="font-body font-light text-sunset-black/70">
                  {pillar.subtitle}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          SECTION 7: READY TO DESIGN
          ============================================ */}
      <section className="relative py-24 md:py-32 lg:py-40 section-sand">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-sunset-black tracking-tight mb-12">
              Ready to Design Your Next
              <br />
              <span className="text-sunset-orange">Big Culture Move?</span>
            </h2>

            <p className="font-body font-light text-xl text-sunset-black/60 mb-8">
              Whether it&apos;s:
            </p>

            <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-12 mb-12">
              <div className="text-center">
                <span className="font-display text-5xl md:text-6xl text-sunset-orange block">10</span>
                <span className="font-body text-sunset-black/70">bold leaders in Madeira</span>
              </div>
              <div className="text-center">
                <span className="font-display text-5xl md:text-6xl text-sunset-orange block">50</span>
                <span className="font-body text-sunset-black/70">rising heroes in the ancient empire</span>
              </div>
              <div className="text-center">
                <span className="font-display text-5xl md:text-6xl text-sunset-orange block">500</span>
                <span className="font-body text-sunset-black/70">legends in a mountain village</span>
              </div>
            </div>

            <p className="font-body font-light text-lg text-sunset-black/50">
              Need company-wide flights in a group package or for your distributed team?
              <br />
              <span className="font-medium text-sunset-black/70">No worries: we got you!</span>
            </p>
          </div>
        </div>
      </section>

      {/* ============================================
          SECTION 8: EXPLORE ENERGIES (Portrait Cards)
          ============================================ */}
      <section id="explore-energies" className="relative py-24 md:py-32 lg:py-40 section-cream">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="flex items-center justify-center gap-6 mb-8">
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-sunset-black tracking-tight">
              Explore the Possible
            </h2>
            <Image
              src="/logos/pegasus.svg"
              alt="Driftawave Pegasus"
              width={60}
              height={60}
              className="w-10 h-10 md:w-14 md:h-14 opacity-60"
            />
          </div>

          <div className="text-center mb-16 md:mb-20">
            <Link
              href="https://meet-ting.com/to/driftawave"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "inline-flex items-center gap-2 px-8 py-4",
                "bg-sunset-orange text-white font-body font-bold text-lg",
                "rounded-brand shadow-lg shadow-sunset-orange/20",
                "hover:bg-sunset-rust hover:shadow-xl hover:-translate-y-0.5",
                "transition-all duration-300"
              )}
            >
              Chat About Your Next IRL Connect
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>

          {/* 5 Portrait Cards */}
          <div className="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory lg:grid lg:grid-cols-5 lg:gap-6 lg:overflow-visible -mx-4 px-4 lg:mx-0 lg:px-0 scrollbar-hide">
            {energies.map((energy) => (
              <Link
                key={energy.name}
                href={energy.href}
                className="group flex-shrink-0 w-[70vw] md:w-[45vw] lg:w-auto snap-center"
              >
                <div className="relative aspect-[9/16] rounded-brand overflow-hidden shadow-xl transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2">
                  <Image
                    src={energy.image}
                    alt={energy.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Refined gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-sunset-black via-sunset-black/30 to-transparent" />

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="font-body text-xs uppercase tracking-wider text-sunset-gold block mb-2">
                      {energy.tagline}
                    </span>
                    <h3 className="font-display text-xl md:text-2xl text-white mb-3 drop-shadow-lg">
                      {energy.name}
                    </h3>
                    <p className="font-body font-light text-sm text-white/80 line-clamp-3 leading-relaxed">
                      {energy.description}
                    </p>

                    {/* Subtle orange accent line */}
                    <div className="w-12 h-0.5 bg-sunset-orange mt-4 opacity-80 group-hover:w-20 transition-all duration-300" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          SECTION 9: TRUST REVIEWS
          ============================================ */}
      <section className="relative py-24 md:py-32 lg:py-40 section-warm">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-16 md:mb-20">
            <span className="font-display text-sm uppercase tracking-widest text-sunset-orange mb-4 block">
              What They Say
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-sunset-black tracking-tight">
              Trusted by Global Top Talent
            </h2>
          </div>

          {/* Reviews Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {trustReviews.map((review) => (
              <div
                key={review.company}
                className="card-brand flex flex-col p-8 hover:-translate-y-1 transition-all duration-300"
              >
                {/* Logo */}
                <div className="w-16 h-16 mx-auto mb-6 relative">
                  <div className="absolute inset-0 rounded-full bg-sunset-sand/30" />
                  <Image
                    src={review.logo}
                    alt={review.alt}
                    width={56}
                    height={56}
                    className="relative z-10 w-full h-full object-contain p-2"
                  />
                </div>

                {/* Quote */}
                <blockquote className="flex-grow text-center mb-6">
                  <p className="font-body font-light text-base text-sunset-black/70 leading-relaxed italic">
                    &ldquo;{review.quote}&rdquo;
                  </p>
                </blockquote>

                {/* Subtle gradient accent line */}
                <div className="w-16 h-px bg-gradient-to-r from-transparent via-sunset-orange to-transparent mx-auto mb-4" />

                {/* Author */}
                <div className="text-center">
                  <p className="font-display text-lg text-sunset-black">
                    {review.author}
                  </p>
                  <p className="font-body text-sm text-sunset-black/50 leading-tight">
                    {review.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          SECTION 10: FINAL CTA
          ============================================ */}
      <section className="relative py-24 md:py-32 lg:py-40 bg-sunset-black overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-sunset-orange to-transparent" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 rounded-full glow-orange opacity-20 pointer-events-none" />
        <div className="absolute top-1/4 left-0 w-64 h-64 rounded-full glow-orange opacity-15 pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="font-display text-sm uppercase tracking-widest text-sunset-gold mb-6 block">
              Let&apos;s Create Something Epic
            </span>

            <h2 className="font-display text-4xl md:text-5xl lg:text-7xl text-white tracking-tight mb-8">
              Start Planning
              <br />
              <span className="text-sunset-orange">Your Offsite</span>
            </h2>

            <p className="font-body font-light text-xl text-white/60 mb-12 max-w-2xl mx-auto">
              From fire starters to culture keepers. Let&apos;s design an experience your team will never forget.
            </p>

            <Link
              href="https://meet-ting.com/to/driftawave"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "inline-flex items-center gap-3 px-12 py-6",
                "bg-sunset-orange text-white font-body font-bold text-xl",
                "rounded-brand shadow-xl shadow-sunset-orange/40",
                "hover:bg-sunset-rust hover:shadow-2xl hover:-translate-y-1",
                "transition-all duration-300"
              )}
            >
              Get in Touch
              <ChevronRight className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
