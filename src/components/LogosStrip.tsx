"use client"

import { motion } from "framer-motion"
import Image from "next/image"

// Trusted partner logos - using placeholder for now
const logos = [
  { name: "Microsoft", src: "/placeholder.svg", category: "Tech" },
  { name: "Google", src: "/placeholder.svg", category: "Tech" },
  { name: "Amazon", src: "/placeholder.svg", category: "E-commerce" },
  { name: "Netflix", src: "/placeholder.svg", category: "Entertainment" },
  { name: "Spotify", src: "/placeholder.svg", category: "Music" },
  { name: "Airbnb", src: "/placeholder.svg", category: "Hospitality" },
  { name: "Uber", src: "/placeholder.svg", category: "Transportation" },
  { name: "Slack", src: "/placeholder.svg", category: "Communication" },
]

export default function LogosStrip() {
  return (
    <section className="relative bg-gradient-to-r from-white via-gray-50/50 to-white py-16 md:py-20 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-brand-mint/5 to-brand-coral/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-lg font-medium text-brand-ink/70 mb-2">Trusted by Industry Leaders</h3>
          <div className="w-16 h-1 bg-gradient-to-r from-brand-coral to-brand-orange rounded-full mx-auto" />
        </motion.div>

        {/* Logos grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 md:gap-10 items-center justify-items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          {logos.map((logo, index) => (
            <motion.div
              key={logo.name}
              className="group relative"
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              whileHover={{ scale: 1.1 }}
            >
              <div className="relative p-4 rounded-2xl bg-white/50 backdrop-blur-sm border border-white/30 shadow-lg hover:shadow-xl transition-all duration-500 group-hover:bg-white/80">
                {/* Logo container */}
                <div className="relative w-16 h-12 md:w-20 md:h-14 flex items-center justify-center">
                  <Image
                    src={logo.src}
                    alt={`${logo.name} logo`}
                    width={80}
                    height={48}
                    className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500"
                  />

                  {/* Hover effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-brand-coral/10 to-brand-orange/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Category badge */}
                <motion.div
                  className="absolute -top-2 -right-2 px-2 py-1 bg-gradient-to-r from-brand-coral to-brand-orange text-white text-xs font-medium rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  {logo.category}
                </motion.div>

                {/* Animated border */}
                <div className="absolute inset-0 rounded-2xl border-2 border-gradient-to-r from-brand-coral/0 via-brand-coral/30 to-brand-orange/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Floating particles effect */}
              {index % 2 === 0 && (
                <motion.div
                  className="absolute -top-2 -left-2 w-1 h-1 bg-brand-coral/60 rounded-full"
                  animate={{
                    y: [-10, -20, -10],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.2
                  }}
                />
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Trust indicator */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <p className="text-sm text-brand-ink/60 font-medium">
            Join 500+ companies who trust Driftawave for their team experiences
          </p>
          <div className="flex items-center justify-center gap-2 mt-3">
            <div className="flex -space-x-2">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="w-8 h-8 rounded-full bg-gradient-to-r from-brand-coral to-brand-orange border-2 border-white shadow-sm"
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
                >
                  <span className="text-xs font-bold text-white flex items-center justify-center h-full">
                    {String.fromCharCode(65 + i)}
                  </span>
                </motion.div>
              ))}
            </div>
            <span className="text-xs text-brand-ink/50 ml-2">+495 more</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
