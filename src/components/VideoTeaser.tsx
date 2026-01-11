"use client"

import { motion } from "framer-motion"
import { Play, Volume2, Maximize } from "lucide-react"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"

export default function VideoTeaser() {
  return (
    <section className="relative bg-gradient-to-br from-brand-charcoal via-gray-900 to-black py-20 md:py-32 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-brand-coral/10 to-brand-orange/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Badge className="mb-4 bg-gradient-to-r from-brand-coral to-brand-orange text-white border-0 px-4 py-2">
            🎬 Behind the Scenes
          </Badge>
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
            Experience Driftawave in Action
          </h3>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            See how we've transformed team experiences for companies worldwide
          </p>
        </motion.div>

        <motion.div
          className="relative max-w-6xl mx-auto"
          initial={{ opacity: 0, scale: 0.95, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {/* Video container with cinematic frame */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10">
            {/* Video poster */}
            <div className="relative aspect-video bg-gradient-to-br from-gray-900 to-black">
              <Image
                src="/placeholder.svg"
                alt="Driftawave experience video teaser"
                width={1920}
                height={1080}
                className="w-full h-full object-cover opacity-60"
              />

              {/* Cinematic overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

              {/* Video info overlay */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex items-center gap-4 mb-3">
                  <Badge className="bg-brand-coral/20 text-brand-coral border-brand-coral/30 backdrop-blur-sm">
                    2:34
                  </Badge>
                  <span className="text-sm text-white/80">HD • 4K Available</span>
                </div>
                <h4 className="text-xl md:text-2xl font-bold text-white mb-2">
                  From Office to Paradise: A Team Transformation Story
                </h4>
                <p className="text-white/70 text-sm md:text-base max-w-lg">
                  Join the Intel engineering team as they discover how a single workation changed everything about their collaboration, creativity, and connection.
                </p>
              </div>
            </div>

            {/* Enhanced play button */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <motion.button
                className="group relative w-24 h-24 md:w-32 md:h-32 bg-white/20 backdrop-blur-xl rounded-full flex items-center justify-center border border-white/30 shadow-2xl hover:shadow-3xl transition-all duration-500"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Animated rings */}
                <div className="absolute inset-0 rounded-full border-2 border-white/20 animate-ping" />
                <div className="absolute inset-2 rounded-full border border-white/30 animate-pulse" />

                {/* Main play icon */}
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <Play
                    size={32}
                    className="text-white ml-2 group-hover:text-brand-coral transition-colors duration-300"
                    fill="currentColor"
                  />
                </motion.div>

                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-brand-coral/20 to-brand-orange/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md" />
              </motion.button>
            </motion.div>

            {/* Control bar */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
              <div className="flex items-center justify-between text-white/80">
                <div className="flex items-center gap-4">
                  <motion.button
                    className="p-2 rounded-full hover:bg-white/10 transition-colors duration-200"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Volume2 size={20} />
                  </motion.button>
                  <div className="text-sm">2:34 / 4:12</div>
                </div>
                <motion.button
                  className="p-2 rounded-full hover:bg-white/10 transition-colors duration-200"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Maximize size={20} />
                </motion.button>
              </div>

              {/* Progress bar */}
              <div className="mt-3 bg-white/20 rounded-full h-1">
                <motion.div
                  className="bg-gradient-to-r from-brand-coral to-brand-orange h-full rounded-full"
                  initial={{ width: "35%" }}
                  whileInView={{ width: "35%" }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                />
              </div>
            </div>

            {/* Corner decorations */}
            <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-white/30 rounded-tl-lg" />
            <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-white/30 rounded-tr-lg" />
            <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-white/30 rounded-bl-lg" />
            <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-white/30 rounded-br-lg" />
          </div>

          {/* Video stats */}
          <motion.div
            className="flex items-center justify-center gap-8 mt-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {[
              { icon: "👁️", label: "50K+ Views", value: "50,247" },
              { icon: "👍", label: "Likes", value: "2,341" },
              { icon: "💬", label: "Comments", value: "127" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="flex items-center gap-2 text-white/70"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <span className="text-lg">{stat.icon}</span>
                <div>
                  <div className="font-semibold text-white">{stat.value}</div>
                  <div className="text-xs">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
