"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, Zap } from "lucide-react"

export default function CTA() {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], [0, -50])
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 5])

  return (
    <section id="connect" className="relative bg-gradient-to-br from-white via-gray-50/50 to-white py-20 md:py-32 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-brand-coral/8 to-brand-orange/8 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-l from-brand-mint/6 to-brand-coral/6 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] bg-gradient-radial from-brand-orange/3 via-transparent to-transparent rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-20">
          {/* Left Column - Text Content */}
          <motion.div
            className="relative z-10"
            initial={{ opacity: 0, x: -60, rotateY: -15 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="relative">
              {/* Badge */}
              <motion.div
                className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-coral/10 to-brand-orange/10 rounded-full px-4 py-2 mb-6 border border-brand-coral/20"
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, type: "spring", stiffness: 400, damping: 17 }}
              >
                <Sparkles className="w-4 h-4 text-brand-coral" />
                <span className="text-sm font-semibold text-brand-coral">Ready to Transform Your Team?</span>
              </motion.div>

              {/* Main heading */}
              <motion.h2
                className="text-4xl md:text-6xl lg:text-7xl font-black leading-[0.9] mb-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                <span className="bg-gradient-to-r from-brand-ink via-brand-charcoal to-brand-ink bg-clip-text text-transparent">
                  Start Planning
                </span>
                <br />
                <span className="bg-gradient-to-r from-brand-coral to-brand-orange bg-clip-text text-transparent">
                  Your Offsite
                </span>
              </motion.h2>

              {/* Subtext */}
              <motion.p
                className="text-lg md:text-xl text-brand-ink/70 leading-relaxed mb-8 max-w-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7, duration: 0.6 }}
              >
                Join hundreds of teams who&apos;ve discovered the perfect blend of productivity, connection, and adventure.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row gap-4 mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.9, duration: 0.6 }}
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-brand-coral to-brand-orange hover:from-brand-coral/90 hover:to-brand-orange/90 text-white font-bold px-8 py-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 group"
                  >
                    Let&apos;s explore together
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-2 border-brand-coral/30 text-brand-coral hover:bg-brand-coral/5 font-semibold px-8 py-4 rounded-2xl backdrop-blur-sm"
                  >
                    Get in Touch
                  </Button>
                </motion.div>
              </motion.div>

              {/* Trust indicators */}
              <motion.div
                className="flex items-center gap-6 text-sm text-brand-ink/60"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1.1, duration: 0.6 }}
              >
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-brand-coral" />
                  <span>Free consultation</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1 h-1 bg-brand-ink/40 rounded-full" />
                  <span>Custom solutions</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1 h-1 bg-brand-ink/40 rounded-full" />
                  <span>Expert guidance</span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column - Visual Element */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 60, rotateY: 15 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="relative">
              {/* Main visual container */}
              <motion.div
                className="relative max-w-lg mx-auto"
                style={{ y, rotate }}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-xl border border-white/30 shadow-2xl p-8 md:p-12">
                  {/* Floating elements */}
                  <motion.div
                    className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-brand-mint/30 to-brand-coral/30 rounded-full blur-xl"
                    animate={{
                      y: [-10, 10, -10],
                      x: [-5, 5, -5],
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />

                  <motion.div
                    className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-brand-orange/30 to-brand-coral/30 rounded-full blur-lg"
                    animate={{
                      y: [10, -10, 10],
                      x: [5, -5, 5],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1
                    }}
                  />

                  {/* Pegasus Logo */}
                  <motion.div
                    className="relative z-10"
                    whileHover={{ scale: 1.05, rotate: 2 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <Image
                      src="/placeholder.svg"
                      alt="Driftawave Pegasus Logo"
                      width={300}
                      height={300}
                      className="w-full h-auto drop-shadow-2xl"
                    />
                  </motion.div>

                  {/* Energy particles */}
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-2 h-2 bg-gradient-to-r from-brand-coral/60 to-brand-orange/60 rounded-full"
                      style={{
                        top: `${20 + (i % 3) * 25}%`,
                        left: `${15 + (i % 4) * 20}%`,
                      }}
                      animate={{
                        y: [-20, -40, -20],
                        opacity: [0.3, 0.8, 0.3],
                        scale: [0.8, 1.2, 0.8]
                      }}
                      transition={{
                        duration: 3 + i * 0.5,
                        repeat: Infinity,
                        delay: i * 0.3,
                        ease: "easeInOut"
                      }}
                    />
                  ))}
                </div>
              </motion.div>

              {/* Background watermark with parallax */}
              <motion.div
                className="absolute inset-0 -z-10 flex items-center justify-center pointer-events-none"
                style={{ y }}
              >
                <motion.div
                  className="text-brand-ink/3 text-8xl md:text-9xl lg:text-[12rem] font-black select-none"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  style={{
                    background: `linear-gradient(45deg, transparent, rgba(227, 91, 91, 0.1), transparent)`,
                    backgroundSize: "200% 200%",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  DRIFTAWAVE
                </motion.div>
              </motion.div>

              {/* Floating success badges */}
              <motion.div
                className="absolute top-8 -left-8 bg-white/90 backdrop-blur-sm rounded-2xl p-3 shadow-lg border border-white/50"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 1.2, duration: 0.6 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-xs font-bold text-brand-coral mb-1">500+</div>
                <div className="text-xs text-brand-ink/70">Happy Teams</div>
              </motion.div>

              <motion.div
                className="absolute bottom-8 -right-8 bg-white/90 backdrop-blur-sm rounded-2xl p-3 shadow-lg border border-white/50"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 1.4, duration: 0.6 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-xs font-bold text-brand-coral mb-1">4.9/5</div>
                <div className="text-xs text-brand-ink/70">Avg Rating</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
