"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import SectionTitle from "./SectionTitle"
import { Badge } from "@/components/ui/badge"

const retreatItems = [
  "Culture Sparks",
  "Visionary Leadership Fuel",
  "Craft Stories that Stick",
  "Brand Swell Wave",
  "Innovative Burst & Flow",
  "Smash Silos. Celebrate Wins!"
]

const pillars = [
  {
    label: "TEAM BUILDING",
    content: "Foster deeper connections and trust among team members through collaborative activities and shared experiences.",
    icon: "🤝",
    color: "from-blue-500/20 to-cyan-500/20"
  },
  {
    label: "LEADERSHIP",
    content: "Develop leadership skills and strategies for guiding distributed teams in a remote-first world.",
    icon: "👑",
    color: "from-purple-500/20 to-pink-500/20"
  },
  {
    label: "COMMUNICATION & PR",
    content: "Enhance internal communication channels and external brand storytelling capabilities.",
    icon: "📢",
    color: "from-green-500/20 to-emerald-500/20"
  },
  {
    label: "GROWTH MARKETING",
    content: "Accelerate business growth through strategic marketing initiatives and customer acquisition tactics.",
    icon: "📈",
    color: "from-orange-500/20 to-red-500/20"
  },
  {
    label: "AGILE INNOVATION",
    content: "Embrace agile methodologies to drive innovation and rapid product development cycles.",
    icon: "⚡",
    color: "from-yellow-500/20 to-orange-500/20"
  },
  {
    label: "STARTUP & SCALE-UP",
    content: "Navigate the challenges of scaling a startup from early-stage to established enterprise.",
    icon: "🚀",
    color: "from-indigo-500/20 to-purple-500/20"
  }
]

export default function TeamRetreats() {
  return (
    <section id="team-retreats" className="relative bg-gradient-to-br from-white via-gray-50/30 to-white overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-brand-coral/8 to-brand-orange/8 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-l from-brand-mint/6 to-brand-coral/6 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-brand-orange/3 via-transparent to-transparent rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 pb-20 md:pb-32">
        {/* Section Title */}
        <SectionTitle id="team-retreats">TEAM RETREATS</SectionTitle>

        <div className="grid grid-cols-1 lg:grid-cols-[repeat(auto-fit,minmax(22rem,1fr))] gap-12 lg:gap-16 items-start">
          {/* Left Column - Text Stack */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="sticky top-32 space-y-6">
              {retreatItems.map((item, index) => (
                <motion.div
                  key={item}
                  className="group relative"
                  initial={{ opacity: 0, y: 30, rotateX: -10 }}
                  whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.15,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="relative p-6 rounded-2xl bg-white/60 backdrop-blur-sm border border-white/40 shadow-lg hover:shadow-xl transition-all duration-500 group-hover:bg-white/80">
                    <div className="absolute inset-0 bg-gradient-to-r from-brand-coral/5 via-transparent to-brand-orange/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-brand-ink to-brand-charcoal bg-clip-text text-transparent leading-tight relative z-10">
                      {item}
                    </h3>
                    <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-brand-coral to-brand-orange group-hover:w-full transition-all duration-500 rounded-bl-2xl" />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Middle Column - Pictures Gallery */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              {/* Image 1 */}
              <motion.div
                className="relative group"
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 shadow-2xl relative">
                  <Image
                    src="/placeholder.svg"
                    alt="Team retreat activity"
                    width={400}
                    height={500}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <Badge className="bg-white/90 text-brand-ink backdrop-blur-sm border-0">
                      Culture Building
                    </Badge>
                  </div>
                </div>
              </motion.div>

              {/* Image 2 */}
              <motion.div
                className="relative group mt-8"
                whileHover={{ scale: 1.05, rotate: -2 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 shadow-2xl relative">
                  <Image
                    src="/placeholder.svg"
                    alt="Team building moment"
                    width={400}
                    height={500}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <Badge className="bg-white/90 text-brand-ink backdrop-blur-sm border-0">
                      Leadership
                    </Badge>
                  </div>
                </div>
              </motion.div>

              {/* Image 3 */}
              <motion.div
                className="relative group -mt-8"
                whileHover={{ scale: 1.05, rotate: 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 shadow-2xl relative">
                  <Image
                    src="/placeholder.svg"
                    alt="Retreat experience"
                    width={400}
                    height={500}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <Badge className="bg-white/90 text-brand-ink backdrop-blur-sm border-0">
                      Innovation
                    </Badge>
                  </div>
                </div>
              </motion.div>

              {/* Image 4 */}
              <motion.div
                className="relative group"
                whileHover={{ scale: 1.05, rotate: -1 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 shadow-2xl relative">
                  <Image
                    src="/placeholder.svg"
                    alt="Team collaboration"
                    width={400}
                    height={500}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <Badge className="bg-white/90 text-brand-ink backdrop-blur-sm border-0">
                      Connection
                    </Badge>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column - Thematic Pillars */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="sticky top-32 space-y-6">
              {pillars.map((pillar, index) => (
                <motion.div
                  key={pillar.label}
                  className="group relative"
                  initial={{ opacity: 0, y: 30, rotateY: -10 }}
                  whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.1,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }}
                  whileHover={{ y: -8, rotateY: 5 }}
                >
                  <div className="relative p-6 md:p-8 rounded-3xl bg-white/70 backdrop-blur-xl border border-white/50 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden">
                    {/* Background gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${pillar.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                    {/* Floating icon */}
                    <motion.div
                      className="absolute -top-2 -right-2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-2xl"
                      whileHover={{ scale: 1.1, rotate: 10 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                      {pillar.icon}
                    </motion.div>

                    {/* Content */}
                    <div className="relative z-10">
                      <motion.div
                        className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-brand-coral/10 to-brand-orange/10 text-xs font-semibold text-brand-coral tracking-wider uppercase mb-4 border border-brand-coral/20"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ delay: index * 0.1 + 0.3 }}
                      >
                        {pillar.label}
                      </motion.div>

                      <motion.p
                        className="text-brand-ink/90 leading-relaxed text-base md:text-lg"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: index * 0.1 + 0.5 }}
                      >
                        {pillar.content}
                      </motion.p>
                    </div>

                    {/* Animated border */}
                    <motion.div
                      className="absolute inset-0 rounded-3xl border-2 border-gradient-to-r from-brand-coral/0 via-brand-coral/50 to-brand-orange/50"
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileHover={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3 }}
                    />

                    {/* Hover effect line */}
                    <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-brand-coral to-brand-orange group-hover:w-full transition-all duration-500 rounded-bl-3xl" />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
