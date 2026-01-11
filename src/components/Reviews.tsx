"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import SectionTitle from "./SectionTitle"
import { Badge } from "@/components/ui/badge"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    company: "Intel",
    logo: "/placeholder.svg",
    quote: "\"One of the best trips I've ever been on. The attention to detail, the activities planned, and the overall experience was top-notch. Our team came back recharged and more connected than ever.\"",
    author: "Kurt",
    title: "Engineering Manager",
    rating: 5,
    highlight: "recharged and more connected"
  },
  {
    company: "SurePay",
    logo: "/placeholder.svg",
    quote: "'The best remote work escape I've experienced. The location was perfect for deep work sessions and team bonding. Every detail was thoughtfully planned, from the accommodation to the activities.'",
    author: "Seline",
    title: "VP of Engineering",
    rating: 5,
    highlight: "remote work escape"
  },
  {
    company: "TravMagazine",
    logo: "/placeholder.svg",
    quote: "\"First class workation experience. The blend of productivity and adventure was perfect. Our team accomplished more in those two weeks than we typically do in a month back at the office.\"",
    author: "Pieter",
    title: "Editor-in-Chief",
    rating: 5,
    highlight: "productivity and adventure"
  },
  {
    company: "LinkedIn",
    logo: "/placeholder.svg",
    quote: "\"Unforgettable adventure on the Adriatic waters. The combination of sailing, workshops, and cultural experiences created lasting memories and strengthened our team bonds in ways I never expected.\"",
    author: "Elia",
    title: "Senior Product Manager",
    rating: 5,
    highlight: "lasting memories"
  }
]

export default function Reviews() {
  return (
    <>
      <SectionTitle className="text-white bg-gradient-to-br from-brand-charcoal via-gray-900 to-black">
        MIC DROP TRUST REVIEWS
      </SectionTitle>

      <section className="relative bg-gradient-to-br from-brand-charcoal via-gray-900 to-black text-white overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-10 right-10 w-96 h-96 bg-gradient-to-l from-brand-coral/10 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-gradient-to-r from-brand-mint/8 to-transparent rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-radial from-brand-orange/5 via-transparent to-transparent rounded-full" />
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-32">
          {/* Trust indicators */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                >
                  <Star className="w-6 h-6 fill-brand-orange text-brand-orange" />
                </motion.div>
              ))}
            </div>
            <p className="text-lg text-white/80 font-medium">Trusted by teams worldwide</p>
            <Badge className="mt-4 bg-white/10 text-white border-white/20 backdrop-blur-sm">
              4.9/5 Average Rating
            </Badge>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.company}
                className="group relative"
                initial={{ opacity: 0, y: 50, rotateX: -10 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.15,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                whileHover={{ y: -8, rotateX: 2 }}
              >
                <div className="relative h-full p-8 md:p-10 rounded-3xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/10 shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden">
                  {/* Quote icon */}
                  <div className="absolute top-6 right-6 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                    <Quote className="w-12 h-12 text-white" />
                  </div>

                  {/* Company header */}
                  <motion.div
                    className="flex items-center gap-4 mb-6"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.15 + 0.2 }}
                  >
                    <div className="relative">
                      <Image
                        src={testimonial.logo}
                        alt={testimonial.company}
                        width={48}
                        height={48}
                        className="w-12 h-12 rounded-xl bg-white/20 p-2"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-brand-coral/20 to-brand-orange/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-lg">{testimonial.company}</h4>
                      <div className="flex items-center gap-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 fill-brand-orange text-brand-orange" />
                        ))}
                      </div>
                    </div>
                  </motion.div>

                  {/* Quote */}
                  <motion.blockquote
                    className="text-lg md:text-xl leading-relaxed text-white/90 mb-6 relative z-10 flex-1"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: index * 0.15 + 0.4 }}
                  >
                    <span className="relative">
                      {testimonial.quote.split(testimonial.highlight).map((part, i, arr) => (
                        <span key={i}>
                          {part}
                          {i < arr.length - 1 && (
                            <span className="bg-gradient-to-r from-brand-coral to-brand-orange bg-clip-text text-transparent font-semibold">
                              {testimonial.highlight}
                            </span>
                          )}
                        </span>
                      ))}
                    </span>
                  </motion.blockquote>

                  {/* Author */}
                  <motion.div
                    className="flex items-center justify-between"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.15 + 0.6 }}
                  >
                    <div>
                      <div className="font-semibold text-white">{testimonial.author}</div>
                      <div className="text-sm text-white/60">{testimonial.title}</div>
                    </div>
                    <Badge className="bg-brand-coral/20 text-brand-coral border-brand-coral/30 backdrop-blur-sm">
                      Verified
                    </Badge>
                  </motion.div>

                  {/* Animated border */}
                  <motion.div
                    className="absolute inset-0 rounded-3xl border border-gradient-to-r from-brand-coral/0 via-brand-coral/30 to-brand-orange/30"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileHover={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Hover glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-brand-coral/5 to-brand-orange/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Floating accent */}
                  <motion.div
                    className="absolute -bottom-2 -right-2 w-16 h-16 bg-gradient-to-r from-brand-coral/20 to-brand-orange/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 0.6, 0.3]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </div>

                {/* Shadow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-brand-coral/20 to-brand-orange/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10 transform translate-y-4" />
              </motion.div>
            ))}
          </motion.div>

          {/* Social proof stats */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {[
              { number: "500+", label: "Happy Teams" },
              { number: "50+", label: "Countries" },
              { number: "4.9/5", label: "Avg Rating" },
              { number: "98%", label: "Repeat Business" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="group"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-brand-coral to-brand-orange bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-white/70 font-medium">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  )
}
