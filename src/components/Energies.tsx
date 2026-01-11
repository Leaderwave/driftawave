"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import SectionTitle from "./SectionTitle"
import { Badge } from "@/components/ui/badge"

const energies = [
  {
    title: "Ocean Motion",
    caption: "When ideas flow like the tide…",
    image: "/homepage/New Website 1.1.png",
    color: "from-blue-500/20 to-cyan-500/20",
    icon: "🌊"
  },
  {
    title: "Mountain AIR",
    caption: "Catch a breath Ya'll…",
    image: "/homepage/New Website 2.1 (1).png",
    color: "from-green-500/20 to-emerald-500/20",
    icon: "🏔️"
  },
  {
    title: "Creative Pulsequake",
    caption: "Ready to shake things up?…",
    image: "/homepage/New Website 2.2.png",
    color: "from-purple-500/20 to-pink-500/20",
    icon: "⚡"
  },
  {
    title: "Wild & Rooted",
    caption: "There's nothing more humbling…",
    image: "/homepage/New Website 2.3.png",
    color: "from-orange-500/20 to-red-500/20",
    icon: "🌿"
  },
  {
    title: "Edge of Comfort",
    caption: "Ready to push boundaries?…",
    image: "/homepage/New Website 2.4.png",
    color: "from-indigo-500/20 to-purple-500/20",
    icon: "🏔️"
  }
]

export default function Energies() {
  return (
    <section id="workations" className="relative bg-gradient-to-br from-gray-50 via-white to-gray-50 overflow-hidden py-20 md:py-32">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 left-1/4 w-64 h-64 bg-gradient-to-r from-brand-mint/8 to-brand-coral/8 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-gradient-to-l from-brand-orange/6 to-brand-coral/6 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-brand-coral/3 via-transparent to-transparent rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <SectionTitle>Offsite Energies</SectionTitle>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 md:gap-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          {energies.map((energy, index) => (
            <motion.div
              key={energy.title}
              className="group relative"
              initial={{ opacity: 0, y: 60, rotateY: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.8,
                delay: index * 0.15,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              whileHover={{
                y: -12,
                rotateY: 5,
                transition: { type: "spring", stiffness: 300, damping: 20 }
              }}
            >
              <div className="relative overflow-hidden rounded-3xl bg-white/80 backdrop-blur-sm border border-white/50 shadow-xl hover:shadow-2xl transition-all duration-500">
                {/* Background gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${energy.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                {/* Image container */}
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={energy.image}
                    alt={energy.title}
                    width={400}
                    height={533}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    priority={index < 3}
                  />

                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Floating icon */}
                  <motion.div
                    className="absolute top-4 right-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center text-2xl opacity-0 group-hover:opacity-100 transition-all duration-300"
                    initial={{ scale: 0, rotate: -180 }}
                    whileHover={{ scale: 1.1, rotate: 0 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    {energy.icon}
                  </motion.div>

                  {/* Hover effect border */}
                  <div className="absolute inset-0 rounded-3xl border-2 border-white/0 group-hover:border-white/50 transition-colors duration-300" />
                </div>

                {/* Content */}
                <div className="relative p-6 bg-white/90 backdrop-blur-sm">
                  <motion.h3
                    className="text-xl md:text-2xl font-bold text-center mb-3 bg-gradient-to-r from-brand-ink to-brand-charcoal bg-clip-text text-transparent leading-tight"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.15 + 0.3 }}
                  >
                    {energy.title}
                  </motion.h3>

                  <motion.p
                    className="text-sm md:text-base text-brand-ink/80 text-center leading-relaxed"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: index * 0.15 + 0.5 }}
                  >
                    {energy.caption}
                  </motion.p>

                  {/* Decorative element */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-1 bg-gradient-to-r from-brand-coral to-brand-orange rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Animated corner accent */}
                <motion.div
                  className="absolute top-0 left-0 w-0 h-0 border-l-[20px] border-l-transparent border-t-[20px] border-t-brand-coral/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                />
              </div>

              {/* Shadow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-brand-coral/20 to-brand-orange/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 -z-10 transform translate-y-4" />
            </motion.div>
          ))}
        </motion.div>

        {/* Call to action hint */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <Badge className="bg-gradient-to-r from-brand-coral to-brand-orange text-white border-0 px-6 py-2 text-sm font-medium shadow-lg">
            Discover Your Perfect Energy Match
          </Badge>
        </motion.div>
      </div>
    </section>
  )
}
