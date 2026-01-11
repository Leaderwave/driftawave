"use client";

import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useState, useRef } from "react";
import { ChevronDown, ChevronRight, Search, Sparkles, Users, Building2, Plane, Calendar, Handshake } from "lucide-react";

// FAQ Item Component with elegant animations
interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

function FAQItem({ question, answer, isOpen, onToggle }: FAQItemProps) {
  return (
    <div className="border-b border-sunset-sand/40 last:border-b-0">
      <button
        onClick={onToggle}
        className="group flex w-full items-center justify-between py-6 text-left"
      >
        <span className="font-display text-lg md:text-xl text-sunset-black pr-6 group-hover:text-sunset-orange transition-colors duration-300">
          {question}
        </span>
        <div className={cn(
          "w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300",
          isOpen ? "bg-sunset-orange" : "bg-sunset-orange/10 group-hover:bg-sunset-orange/20"
        )}>
          <ChevronDown
            className={cn(
              "h-5 w-5 transition-all duration-300",
              isOpen ? "rotate-180 text-white" : "text-sunset-orange"
            )}
          />
        </div>
      </button>
      <div
        className={cn(
          "overflow-hidden transition-all duration-500 ease-out",
          isOpen ? "max-h-[3000px] pb-8" : "max-h-0"
        )}
      >
        <div className="pl-0 md:pl-4 border-l-2 border-sunset-orange/30 ml-0 md:ml-2">
          <p className="font-body font-light text-base md:text-lg text-sunset-black/70 leading-relaxed whitespace-pre-line pl-4">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}

// Category data with icons
const categories = [
  { id: "retreats", label: "Team Retreats", icon: Users },
  { id: "offsites", label: "Company Offsites", icon: Building2 },
  { id: "workations", label: "Workations", icon: Plane },
  { id: "planning", label: "Planning & Logistics", icon: Calendar },
  { id: "driftawave", label: "Working with Driftawave", icon: Handshake },
];

// Complete FAQ data
const faqSections = [
  {
    id: "retreats",
    category: "Team Retreats",
    icon: Users,
    description: "Everything you need to know about crafting transformative team experiences",
    items: [
      {
        question: "What is a Team Retreat?",
        answer: "A team retreat is a full-bodied escape from the usual. Not a break; a breakthrough.\n\nA place where culture, creativity, mindset and strategic alignment roll the dice together. Gather the crew offline to reconnect. So you can bring back magic to the online, as the collective united.\n\nNature-fueled brainstorms, adventure afternoons, surf sessions between strategy and brekkie or dinner. Not too shabby right?\n\nIt's hard to beat the momentum of shared laughter and new experiences together. It's a moment to stand still and celebrate, creating an ever lasting bound travelling years, places, and rooms where the walls may not whisper but your employer brand does: chanting emotions, opportunity and impact."
      },
      {
        question: "Why should we organize a Team Retreat?",
        answer: "I mean.. Why wouldn't you? Do you really think a Slack thread will save your company culture? Time to embed story telling and intention by default.\n\nYou need real trust. Creative fuel and eye openers. A space for laughter, not burnout pressure. Live the roots of your company culture or reinvent them?\n\nRetreats are where you:\n→ Celebrate the wins together\n→ Sync vision, energy, and direction\n→ Step back to move forward faster, stronger, aligned\n\nIt's a funny thing that cognitive thinking machine up there. Anybody home? Thinkers and those with agency ideally."
      },
      {
        question: "What's the difference between a Team Retreat and a Company Offsite?",
        answer: "Team Retreat: Focused, small-unit, often department-level or leadership-based. Intimate, intentional, culture-deepening. Healthy confrontations and challenges. Uplifts of momentum and spirits that even a wolfpack may find challenging to beat.\n\nCompany Offsite: Full org-wide gatherings; a chance to align vision, share wins, set future sails. Your internal un-conference with a heartbeat. Distributed teams become a full force collective.\n\nBoth are transformative. The difference lies in scope, scale and purpose. If you're really honest with yourself.. What is it that you truly desire to achieve?\n\nSay no more, we got you."
      }
    ]
  },
  {
    id: "offsites",
    category: "Company Offsites",
    icon: Building2,
    description: "Unite your distributed team and accelerate vibrant culture",
    items: [
      {
        question: "What is a Company Offsite?",
        answer: "You may just have cranked up our heartbeat. A company offsite brings your full team together IRL (in real life, really). Whether that's 10 legends or 500 wavemakers.\n\nIt's the place where:\n→ Founders talk vision\n→ Teams sync in person\n→ Sparks being shared and banter worth retelling being produced\n\nIt's culture, strategy, team building, alignment, and celebration. All rolled into a Big BB—boom bloom. A blast of clarity and connection. Echoing long after the plane lands home."
      },
      {
        question: "What are the benefits of a Company Offsite?",
        answer: "The ROI is Real with Optimized Intention.\n\n→ Alignment: Everyone onboard of the same mission vision forward. LIVE Vibes > Dull Zoom Speed Sessions on overload.\n\n→ Cross-team collisions: New bonds, unexpected collaborations. We run harder for people when we know the story behind their name.\n\n→ Brand energy boost: A stronger internal culture EQUALS a louder external brand. BE THE TALENT MAGNET!!\n\n→ Retention cocktail: Teams that vibe together—stick together. What's your company culture flavour?"
      },
      {
        question: "How do you convince the Board there's legit ROI in going offsite?",
        answer: "*Our sincere apologies: this may hurt.\n\nIs your top-talent feeling isolated? Innovation hit a flat curve? Communication and trust are barriers? Burnout gone viral? 15 different priorities while your management layer is slipping on ice?\n\nWhat do great intention and result look like in a team retreat ROI?\n\n→ Spark real trust beyond the digital thread\n→ Fuel creativity with fresh inputs and real world perspective\n→ Tend to the roots of team culture safely, softly, far from the grid\n→ Celebrate the journey together, not apart\n\nBonus points? They often fix what no KPI dashboard can see."
      },
      {
        question: "Are Team Retreats and Company Offsites productive?",
        answer: "Absolutely, but not in the \"jam-packed agenda\" kind of way.\n\nThey're productive because they:\n→ Clarify goals\n→ Unblock team tension\n→ Spark new ideas\n→ Connect people across silos\n→ Leave people feeling seen, heard, aligned, and re-ignited\n\nIt's the productivity you see, feel and hear if you listen—reflected in:\n→ Employee happiness\n→ Net Promoter Scores (NPS)\n→ Creative breakthroughs\n→ Energy that sticks around long after the flight home"
      }
    ]
  },
  {
    id: "workations",
    category: "Workations",
    icon: Plane,
    description: "Combine work with travel and unlock new perspectives",
    items: [
      {
        question: "What is a workation?",
        answer: "Jump onto that rocket launch because we just hit the fast-forward button! In the future of work, we have been gifted with the ability to bring our office wherever the Wi-Fi twinkles.\n\nA workation means to combine work with travel whilst working remotely, meaning to be location independent indefinitely or for a period of time.\n\nIt creates opportunities to take balanced and well-deserved quality time off, whilst having the ability to manage responsibilities. Travel has never been more accessible for those working in corporate jobs. This trend has become one of the most sought-after company benefits."
      },
      {
        question: "What are the benefits of a workation?",
        answer: "→ Get inspired during leisure, gain new perspectives, and spark your creativity\n→ Go on an adventure and be more active\n→ Explore nature and deep dive culture\n→ Create a balanced and healthy lifestyle\n→ Become more productive and feeling more relaxed\n→ Make the most of your time, save time on commutes, access holiday mode in a heartbeat\n→ Reuniting with co-workers, friends or establishing new connections"
      },
      {
        question: "How to have a successful workation?",
        answer: "Plan and organize your workation wisely!\n\nIt's important to know where you will be staying, and if there is a steady Wi-Fi speed so you can be productive.\n\nWorkations generally provide a lot of opportunities to travel during the off-shoulder season. This is decreasing pressure on tourist hot spots, resulting in lesser crowds and reduced costs.\n\nMake sure to double-check:\n→ Flight schedules and options\n→ Legislation for your passport/visa/work status\n→ Travel and cancellation insurance\n→ If employed, discuss with leaders and HR in timely manner"
      },
      {
        question: "Which people go on a workation?",
        answer: "Entrepreneurs and employees at companies with remote and hybrid work strategies tend to have access to workations.\n\nJobs & roles with high potential:\n→ Management and Consulting\n→ Internet and Technology (IT)\n→ Sales and Customer Success\n→ Recruitment\n→ Personal Assistance\n→ Marketing\n\nMore people continue to get access as employees want more flexibility and employers see the benefits too."
      },
      {
        question: "How long is a workation?",
        answer: "The duration depends on your personal wishes, possibilities, and limitations. However, the most common is between 2 and 4 weeks.\n\nConsider:\n→ When and where are you planning to go?\n→ How long do you feel comfortable leaving for?\n→ Do you have any restrictions due to schedules or laws?\n→ What does your budget look like?\n\nCompanies allowing workations tend to apply a maximum of 30/45 workdays per country to avoid tax residency complications."
      },
      {
        question: "What are the benefits of a workation for employers?",
        answer: "According to Forbes research:\n\n→ Productivity increases by 35-40%\n→ Better performance because of stronger autonomy\n→ Increased engagement, resulting in 41% lower absenteeism\n→ Companies become more profitable due to increased outcomes and potentially less costs for in-office activities\n\nWorkations & retreats are seen as one of the best perks out there for attracting and retaining top talent."
      },
      {
        question: "Signs you might need a workation?",
        answer: "Are you feeling stuck in the 9-5, feeling like you're missing out, or like you're trapped? Not taking any breaks or is the winter depression hitting you hard?\n\nAre you feeling:\n→ Stressed or unbalanced\n→ Anxious or uninspired\n→ Burned out or working overtime\n→ Having a hard time focusing\n→ Disconnected from working at home\n\nOr... you're just simply ready to hit the road dipping into culture, nature, adventure, and explorations!"
      }
    ]
  },
  {
    id: "planning",
    category: "Planning & Logistics",
    icon: Calendar,
    description: "From vision to reality — we handle the details",
    items: [
      {
        question: "How long should a retreat or offsite be?",
        answer: "The sweet spot? 3 to 5 days.\n\n→ Long enough to drop the work armor\n→ Short enough to stay intentional and productive\n→ Just right for deep connection + focused momentum\n\nSome go for a long weekend reset. Others? A full-week vision journey. We tailor based on your crew's rhythm, company flow and captain's vision."
      },
      {
        question: "What should we consider when planning a retreat or offsite?",
        answer: "Here's your pre-checkin' list:\n\n→ Purpose first: Is this for reconnection, planning, onboarding, celebration?\n→ Team size & roles: Leadership-only or all-in?\n→ Location vibe: Calm and remote? High-energy and central?\n→ Access & logistics: Flights, visas, time zones\n→ On-ground flow: Work/play ratio, activities, meals, facilitation\n\nDon't worry; We handle the load. You show up ready to connect."
      },
      {
        question: "Where do team retreats happen?",
        answer: "Anywhere on the ground, ready to lift and shift levels into rocket fuel.\n\nOur community's favorites:\n\n🌊 By the coast: Surf mornings, Strategic Noons, Sunshine all day — Ideas rolling in with the tide.\n\n⛰️ In the mountains: Soft landings, Cold POW-er flows, Energy runs — Altitude over attitude any time.\n\n🎨 Creative cities: Art, Architecture, Stoic genius hiding in plain sight — Contemplate that scene to vision.\n\n🌿 Off-grid havens: Nature as the third co-founder — Sustainable hustle, no bullsh*t.\n\nWe'll help pick the right backdrop for your retreat story."
      },
      {
        question: "What kinds of activities do you organize?",
        answer: "We do experiences that move people:\n\n→ Ocean motion surf sessions\n→ Strategy bonfires\n→ Local culture deep-dives\n→ Creative workshops\n→ Wellness sessions\n→ Hype talks & real convos\n\nYou tell us the vibe. We curate the moments for you to choose from."
      },
      {
        question: "Who are retreats & offsites for?",
        answer: "The rebels, change makers, creators and challengers of the status quo; ready to (re)connect, innovate and inspire.\n\nWhether you are:\n→ A remote-first startup looking to fuel culture IRL\n→ A founder who believes in energy combined with execution\n→ A People/HR lead who sees the cracks and wants to mend them with meaning\n→ A scale-up ready to unify tribes across nations and cultures\n→ A team that's been through it and ready to rise & shine, together\n→ A decentralized company ready to align leadership or unite the full game house"
      }
    ]
  },
  {
    id: "driftawave",
    category: "Working with Driftawave",
    icon: Handshake,
    description: "Your full-service partner for transformative experiences",
    items: [
      {
        question: "What are the benefits of partnering with Driftawave?",
        answer: "Driftawave is your full-service, end-to-end partner for team retreats, group workations, and company offsites; trusted by founders, leaders in HR and People Operations.\n\nFor Companies - Why Driftawave is the Smart Choice:\n\n→ One Partner. One Invoice. Zero Hassle — saves 40-100+ hours of internal admin\n→ Fully Legal & Risk-Covered — AON Travel Liability, VZR Garant, Calamiteitenfonds, ANVR Member\n→ Simple Finance Setup — streamlined or direct participant invoicing\n→ Scalable & Flexible — 12-500+ attendees\n→ Trusted Global Network — vetted venues and expert facilitators\n→ Culture With ROI — measurable post-retreat impact\n→ Tailored, People-First Design — neurodiverse-friendly, no cookie-cutter agendas\n→ White-Glove EA & Chief of Staff Support — planning decks, itineraries, dietary flows\n→ Ethical & Sustainable — local sourcing, ocean sustainability focus"
      },
      {
        question: "Why choose Driftawave over doing it ourselves?",
        answer: "Because you're not just planning 'a trip'. You're setting the stage for a culture shift.\n\nWe bring a rare fusion of skill, global fluency and fueled experience:\n\n→ Years of experience in international travel consultancy, with awards won\n→ A background in tech talent solutions & future of work trends\n→ Countless hours of craftsmanship in hospitality & events\n→ A marketer's mind with a global creative lens\n\nNot a toolkit. A full ecosystem for you to tap into. So you focus on what matters most: People. Culture. Evolution.\n\nThanks to our global network, we've got feet, eyes, and ears on the ground across multiple continents and cultures."
      },
      {
        question: "What protections and insurance do you offer?",
        answer: "We protect your company and your people with:\n\n→ AON Travel Liability Insurance\n→ VZR Garant Insolvency Protection\n→ Calamity Fund (Calamiteitenfonds) for unforeseen emergencies\n→ ANVR Member — the leading Dutch trade association for licensed tour operators\n\nWe also guide B2B clients in formally mitigating company risk, giving Legal, HR, and Finance full peace of mind."
      },
      {
        question: "How do we get started?",
        answer: "Easy peasy, no worries: we got your back.\n\nSchedule a complimentary call so we can get crystal clear on what you're looking to create.\n\nWhat could be useful to know during our call?\n→ Any desired outcomes (vision, vibe, goals)\n→ Specific wishes — activities, venue types, facilities\n→ Any logistical limitations (visas, passports, travel time)\n→ A budget ballpark — we love clear guidelines to craft within\n\nWhether it's:\n✨ 10 bold leaders in Lisbon\n✨ 50 top performers deep in the jungle\n✨ 200 legends rising in the Azores\n✨ 500 champions in a wooden mountain village\n\nWe're ready. Tuned in. Locked on."
      }
    ]
  }
];

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [openItems, setOpenItems] = useState<Record<string, number | null>>({});
  const [activeCategory, setActiveCategory] = useState("retreats");
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  const toggleItem = (category: string, index: number) => {
    setOpenItems(prev => ({
      ...prev,
      [category]: prev[category] === index ? null : index
    }));
  };

  const scrollToSection = (id: string) => {
    setActiveCategory(id);
    sectionRefs.current[id]?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const filteredSections = faqSections.map(section => ({
    ...section,
    items: section.items.filter(item =>
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(section => section.items.length > 0);

  return (
    <>
      {/* ============================================
          SECTION 1: IMMERSIVE HERO
          ============================================ */}
      <section className="relative h-[60vh] min-h-[500px] w-full overflow-hidden -mt-24 md:-mt-28">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/hero/hero-vineyard.jpg"
            alt="Driftawave team retreat planning and FAQ"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-sunset-black/70 via-sunset-black/50 to-white" />
        </div>

        {/* Content */}
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-4 pt-24 md:pt-28 pb-16">
          <span className="font-display text-sm uppercase tracking-[0.3em] text-sunset-gold mb-6 block">
            Got Questions?
          </span>

          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-white mb-8 max-w-4xl leading-[0.95] drop-shadow-lg">
            Frequently Asked{" "}
            <span className="relative inline-block">
              Questions
              <span className="absolute -bottom-2 left-0 w-full h-1.5 bg-sunset-orange rounded-full" />
            </span>
          </h1>

          <div className="bg-white/90 backdrop-blur-sm px-8 py-5 rounded-brand shadow-lg border border-sunset-sand/30 max-w-2xl">
            <p className="font-body font-medium text-lg md:text-xl text-sunset-black">
              What does a Team Retreat or Company Offsite bring that cannot be replicated any other way?
            </p>
          </div>
        </div>

        {/* Bottom transition */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent pointer-events-none" />
      </section>

      {/* ============================================
          SECTION 2: WHY DRIFTAWAVE SUMMARY
          ============================================ */}
      <section className="relative py-16 md:py-20 section-warm">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="card-brand p-8 md:p-12 border-2 border-sunset-orange/20">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-sunset-orange/10 flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-sunset-orange" />
                </div>
                <h2 className="font-display text-2xl md:text-3xl text-sunset-black">
                  TL;DR — Why Pick Driftawave?
                </h2>
              </div>

              <div className="space-y-4 font-body font-light text-lg text-sunset-black/70 leading-relaxed">
                <p>
                  <span className="font-medium text-sunset-black">Global Travel Experience. Founder-led.</span>{" "}
                  Fully licensed and protected retreats (ANVR, VZR Garant, AON, Calamiteitenfonds) that save 40-100+ hours and de-risk operations.
                </p>
                <p className="text-sunset-orange font-medium">
                  One partner, one invoice. Culture turned into ROI.
                </p>
                <p>
                  Tailored, neurodiverse-friendly design. Global, multilingual coordination. Curated venues & facilitators.
                  Scalable 12–500+. White-glove EA/Chief of Staff support. Measurable post-retreat gains in trust,
                  engagement, productivity, talent attraction & retention, and employer brand.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          SECTION 3: CATEGORY NAVIGATION
          ============================================ */}
      <section className="sticky top-20 md:top-24 z-40 bg-white/95 backdrop-blur-md border-b border-sunset-sand/30 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex gap-2 md:gap-4 overflow-x-auto py-4 scrollbar-hide -mx-4 px-4">
            {categories.map((cat) => {
              const IconComponent = cat.icon;
              return (
                <button
                  key={cat.id}
                  onClick={() => scrollToSection(cat.id)}
                  className={cn(
                    "flex items-center gap-2 px-4 md:px-6 py-3 rounded-brand whitespace-nowrap transition-all duration-300 flex-shrink-0",
                    activeCategory === cat.id
                      ? "bg-sunset-orange text-white shadow-lg shadow-sunset-orange/20"
                      : "bg-sunset-sand/20 text-sunset-black/70 hover:bg-sunset-sand/40"
                  )}
                >
                  <IconComponent className="w-4 h-4" />
                  <span className="font-body font-medium text-sm md:text-base">{cat.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================
          SECTION 4: SEARCH BAR
          ============================================ */}
      <section className="py-12 section-sand">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-sunset-black/40 h-5 w-5" />
              <input
                type="text"
                placeholder="Search all questions..."
                className="w-full pl-14 pr-6 py-5 text-lg rounded-brand border-2 border-sunset-sand/50 bg-white font-body focus:outline-none focus:ring-2 focus:ring-sunset-orange focus:border-sunset-orange transition-all duration-300"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          SECTION 5: FAQ SECTIONS
          ============================================ */}
      {filteredSections.map((section, sectionIndex) => {
        const IconComponent = section.icon;
        const isEven = sectionIndex % 2 === 0;

        return (
          <section
            key={section.id}
            ref={(el) => { sectionRefs.current[section.id] = el; }}
            className={cn(
              "relative py-20 md:py-28 scroll-mt-32",
              isEven ? "section-cream" : "section-warm"
            )}
          >
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-12 md:mb-16">
                  <div className="w-16 h-16 rounded-full bg-sunset-orange/10 flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="w-8 h-8 text-sunset-orange" />
                  </div>
                  <h2 className="font-display text-4xl md:text-5xl text-sunset-black tracking-tight mb-4">
                    {section.category}
                  </h2>
                  <p className="font-body font-light text-lg text-sunset-black/60">
                    {section.description}
                  </p>
                </div>

                {/* FAQ Items */}
                <div className="card-brand p-6 md:p-10">
                  {section.items.map((item, index) => (
                    <FAQItem
                      key={index}
                      question={item.question}
                      answer={item.answer}
                      isOpen={openItems[section.id] === index}
                      onToggle={() => toggleItem(section.id, index)}
                    />
                  ))}
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* No results */}
      {filteredSections.length === 0 && searchQuery && (
        <section className="py-20 section-warm">
          <div className="container mx-auto px-4 text-center">
            <p className="font-display text-2xl text-sunset-black/60 mb-4">
              No results found for &ldquo;{searchQuery}&rdquo;
            </p>
            <p className="font-body text-sunset-black/50">
              Try a different search term or contact us directly.
            </p>
          </div>
        </section>
      )}

      {/* ============================================
          SECTION 6: CAUTION BLOCK
          ============================================ */}
      <section className="relative py-20 md:py-28 bg-sunset-black overflow-hidden">
        {/* Decorative glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full glow-orange opacity-20 pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="font-display text-sm uppercase tracking-widest text-sunset-gold mb-6 block">
              A Word of Wisdom
            </span>

            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-white mb-8">
              CAUTION: Don&apos;t Overplan
            </h2>

            <p className="font-body font-light text-xl text-white/70 leading-relaxed mb-10">
              You may risk that magic has no space to drop fuel into the &apos;beyond-possible&apos; machine.
              Creativity, connecting dots, building relations.. We all need to butterfly through life
              and touch points a little here and there.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              {["Innovate", "Connect", "Challenge the status quo"].map((word) => (
                <span
                  key={word}
                  className="px-6 py-3 rounded-brand bg-white/10 backdrop-blur-sm border border-sunset-gold/30 font-display text-sunset-gold"
                >
                  {word}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          SECTION 7: FINAL CTA
          ============================================ */}
      <section className="relative py-24 md:py-32 lg:py-40 section-warm">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="font-display text-sm uppercase tracking-widest text-sunset-orange mb-6 block">
              Ready to Take the Leap?
            </span>

            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-sunset-black tracking-tight mb-8">
              Get Your IRL Culture
              <br />
              <span className="text-sunset-orange">Chapter Going</span>
            </h2>

            <p className="font-body font-light text-xl text-sunset-black/60 mb-12 max-w-2xl mx-auto">
              Ask the hard questions. Dream BIG. We&apos;re ready to help you create something unforgettable.
            </p>

            <Link
              href="https://meet-ting.com/to/driftawave"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "inline-flex items-center gap-3 px-10 py-5",
                "bg-sunset-orange text-white font-body font-bold text-xl",
                "rounded-brand shadow-xl shadow-sunset-orange/30",
                "hover:bg-sunset-rust hover:shadow-2xl hover:-translate-y-1",
                "transition-all duration-300"
              )}
            >
              Schedule a Complimentary Call
              <ChevronRight className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
